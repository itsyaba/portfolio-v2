import { NextRequest, NextResponse } from "next/server";
import { resolveVisitorLocation } from "@/lib/geolocation";
import { canSendTelegramMessage, sendTelegramMessage } from "@/lib/telegram";

const BOT_USER_AGENT_REGEX =
  /bot|crawler|spider|headless|lighthouse|slurp|bingpreview|preview/i;
const VISIT_COOKIE_NAME = "visit_notified";
const VISIT_COOKIE_MAX_AGE_SECONDS = 60 * 30;

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

  if (request.cookies.get(VISIT_COOKIE_NAME)) {
    return NextResponse.json({ ok: true, skipped: "rate_limited" });
  }

  const body = (await request.json().catch(() => ({}))) as { page?: string };
  const page = typeof body.page === "string" ? body.page : "Unknown";

  const location = await resolveVisitorLocation(request);
  const timestamp = new Date().toLocaleString("en-ET", {
    timeZone: "Africa/Addis_Ababa",
  });

  const message = [
    "👀 New Portfolio Visit",
    "",
    "📍 Location",
    `• Country: ${location.country}`,
    `• Region: ${location.region}`,
    `• City: ${location.city}`,
    "",
    "🧭 Visit Details",
    `• Page: ${page}`,
    `• Time: ${timestamp}`,
  ].join("\n");

  const sent = await sendTelegramMessage(message);
  if (!sent) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(VISIT_COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    maxAge: VISIT_COOKIE_MAX_AGE_SECONDS,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
