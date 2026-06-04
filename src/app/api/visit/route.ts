import { NextRequest, NextResponse } from "next/server";
import { resolveVisitorLocation } from "@/lib/geolocation";
import { canSendTelegramMessage, sendTelegramMessage } from "@/lib/telegram";

const BOT_USER_AGENT_REGEX = /bot|crawler|spider|headless|lighthouse|slurp|bingpreview|preview/i;
const VISIT_COOKIE_NAME = "visit_notified";
const VISIT_COOKIE_MAX_AGE_SECONDS = 60 * 30;
const MAX_CLICK_LINES = 8;
const MAX_CLICKS_TO_PROCESS = 50;
const MAX_TEXT_FIELD_LENGTH = 120;
const SECTION_LABELS: Record<string, string> = {
  hero: "Hero",
  about: "About",
  experience: "Experience",
  tape: "Tape",
  projects: "Projects",
  contact: "Contact",
};

type SectionTiming = {
  id: string;
  ms: number;
};

type VisitClick = {
  label?: string;
  href?: string;
  section?: string;
  elapsedMs?: number;
};

function formatDuration(ms: number) {
  const totalSeconds = Math.max(0, Math.round(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }

  return `${seconds}s`;
}

function sanitizeText(value: unknown, fallback = "") {
  if (typeof value !== "string") {
    return fallback;
  }

  const cleaned = value.replace(/\s+/g, " ").trim();
  return cleaned ? cleaned.slice(0, MAX_TEXT_FIELD_LENGTH) : fallback;
}

function getHostname(value: string) {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function formatClickLines(clicks: VisitClick[], currentHost: string) {
  const groupedClicks = new Map<
    string,
    { label: string; href: string; section: string; count: number; firstElapsedMs: number }
  >();

  clicks.slice(0, MAX_CLICKS_TO_PROCESS).forEach((click) => {
    const label = sanitizeText(click.label);
    if (!label) {
      return;
    }

    const href = sanitizeText(click.href);
    const sectionId = sanitizeText(click.section);
    const section = SECTION_LABELS[sectionId] || sectionId;
    const elapsedMs = Number.isFinite(click.elapsedMs)
      ? Math.max(click.elapsedMs as number, 0)
      : 0;
    const key = `${label}|${href}|${section}`;
    const existing = groupedClicks.get(key);

    if (existing) {
      existing.count += 1;
      existing.firstElapsedMs = Math.min(existing.firstElapsedMs, elapsedMs);
      return;
    }

    groupedClicks.set(key, {
      label,
      href,
      section,
      count: 1,
      firstElapsedMs: elapsedMs,
    });
  });

  const lines = Array.from(groupedClicks.values())
    .sort((a, b) => a.firstElapsedMs - b.firstElapsedMs)
    .slice(0, MAX_CLICK_LINES)
    .map((click) => {
      const count = click.count > 1 ? ` (${click.count}x)` : "";
      const time = click.firstElapsedMs > 0 ? ` after ${formatDuration(click.firstElapsedMs)}` : "";
      const section = click.section ? ` · ${click.section}` : "";
      const host = click.href ? getHostname(click.href) : "";
      const destination = host && host !== currentHost ? ` · ${host}` : "";

      return `• ${click.label}${count}${time}${section}${destination}`;
    });

  const hiddenClickCount = Math.max(groupedClicks.size - MAX_CLICK_LINES, 0);
  if (hiddenClickCount > 0) {
    lines.push(`• +${hiddenClickCount} more`);
  }

  return lines.length ? lines : ["• No tracked clicks"];
}

function isVisitNotifyEnabled() {
  return process.env.VISIT_NOTIFY_ENABLED !== "false";
}

export async function POST(request: NextRequest) {
  if (!isVisitNotifyEnabled()) {
    return NextResponse.json({ ok: true, skipped: "disabled" });
  }

  if (!canSendTelegramMessage()) {
    return NextResponse.json({ ok: true, skipped: "not_configured" });
  }

  const userAgent = request.headers.get("user-agent") || "Unknown";
  if (BOT_USER_AGENT_REGEX.test(userAgent)) {
    return NextResponse.json({ ok: true, skipped: "bot" });
  }

  const body = (await request.json().catch(() => ({}))) as {
    page?: string;
    sections?: SectionTiming[];
    totalMs?: number;
    referrer?: string;
    clicks?: VisitClick[];
    /** True when the client just finished loading content; does not set the rate-limit cookie. */
    arrival?: boolean;
  };
  const isArrival = body.arrival === true;

  if (isArrival) {
    return NextResponse.json({ ok: true, skipped: "arrival" });
  }

  if (request.cookies.get(VISIT_COOKIE_NAME)) {
    return NextResponse.json({ ok: true, skipped: "rate_limited" });
  }

  const page = typeof body.page === "string" ? body.page : "Unknown";
  const referrer = typeof body.referrer === "string" ? body.referrer : request.headers.get("referer") || "";
  const sections = Array.isArray(body.sections)
    ? body.sections
        .filter((entry) => entry && typeof entry.id === "string")
        .map((entry) => ({
          id: entry.id,
          ms: Number.isFinite(entry.ms) ? Math.max(entry.ms, 0) : 0,
        }))
    : [];
  const totalMs = Number.isFinite(body.totalMs) ? Math.max(body.totalMs as number, 0) : 0;

  const location = await resolveVisitorLocation(request);
  const timestamp = new Date().toLocaleString("en-ET", {
    timeZone: "Africa/Addis_Ababa",
  });

  const headline = "👋 Visit ended";

  const messageLines = [
    headline,
    "",
    "📍 Location",
    `• Country: ${location.country}`,
    `• Region: ${location.region}`,
    `• City: ${location.city}`,
    "",
    "🧭 Visit Details",
    `• Page: ${page}`,
    `• Time: ${timestamp}`,
  ];

  if (referrer) {
    messageLines.push(`• Referrer: ${referrer}`);
  }

  if (totalMs > 0) {
    messageLines.push(`• Total Time: ${formatDuration(totalMs)}`);
  }

  const sectionLines = sections
    .filter((entry) => entry.ms > 0)
    .map((entry) => {
      const label = SECTION_LABELS[entry.id] || entry.id;
      return `• ${label}: ${formatDuration(entry.ms)}`;
    });

  if (sectionLines.length) {
    messageLines.push("", "⏱️ Section Time", ...sectionLines);
  }

  const clickLines = formatClickLines(
    Array.isArray(body.clicks) ? body.clicks : [],
    request.nextUrl.hostname,
  );
  messageLines.push("", "🖱️ Clicks", ...clickLines);

  const message = messageLines.join("\n");

  const sent = await sendTelegramMessage(message);
  if (!sent) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const response = NextResponse.json({ ok: true });
  if (!isArrival) {
    response.cookies.set(VISIT_COOKIE_NAME, "1", {
      httpOnly: true,
      sameSite: "lax",
      maxAge: VISIT_COOKIE_MAX_AGE_SECONDS,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    });
  }
  return response;
}
