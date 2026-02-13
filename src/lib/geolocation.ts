import type { NextRequest } from "next/server";

const REGION_NAME_DISPLAY = new Intl.DisplayNames(["en"], {
  type: "region",
});

type FreeIpApiResponse = {
  countryName?: string;
  regionName?: string;
  cityName?: string;
};

export type VisitorLocation = {
  country: string;
  region: string;
  city: string;
};

function regionCodeToName(code: string) {
  const normalized = code.trim().toUpperCase();
  if (!normalized) {
    return null;
  }

  try {
    return REGION_NAME_DISPLAY.of(normalized) ?? normalized;
  } catch {
    return normalized;
  }
}

function extractClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const candidate = forwardedFor?.split(",")[0]?.trim() || realIp?.trim();

  if (!candidate) {
    return null;
  }

  return candidate.startsWith("::ffff:") ? candidate.replace("::ffff:", "") : candidate;
}

async function getFromFreeIpApi(ip?: string): Promise<VisitorLocation | null> {
  try {
    const endpoint = ip
      ? `https://free.freeipapi.com/api/json/${encodeURIComponent(ip)}`
      : "https://free.freeipapi.com/api/json";

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(3000),
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as FreeIpApiResponse;
    return {
      country: data.countryName || "Unknown",
      region: data.regionName || "Unknown",
      city: data.cityName || "Unknown",
    };
  } catch {
    return null;
  }
}

function isPrivateOrLoopbackIp(ip: string) {
  const normalized = ip.toLowerCase();

  if (
    normalized === "::1" ||
    normalized === "localhost" ||
    normalized.startsWith("127.") ||
    normalized.startsWith("10.") ||
    normalized.startsWith("192.168.") ||
    normalized.startsWith("fc") ||
    normalized.startsWith("fd") ||
    normalized.startsWith("fe80:")
  ) {
    return true;
  }

  const ipv4Parts = normalized.split(".").map(Number);
  if (ipv4Parts.length === 4 && ipv4Parts.every((part) => Number.isInteger(part))) {
    const [first, second] = ipv4Parts;
    if (first === 172 && second >= 16 && second <= 31) {
      return true;
    }
  }

  return false;
}

export async function resolveVisitorLocation(request: NextRequest): Promise<VisitorLocation> {
  const countryCode = request.headers.get("x-vercel-ip-country");

  if (countryCode) {
    return {
      country: regionCodeToName(countryCode) || countryCode,
      region: request.headers.get("x-vercel-ip-country-region") || "Unknown",
      city: request.headers.get("x-vercel-ip-city") || "Unknown",
    };
  }

  const ip = extractClientIp(request);
  const location =
    ip && !isPrivateOrLoopbackIp(ip) ? await getFromFreeIpApi(ip) : await getFromFreeIpApi();

  if (location) {
    return location;
  }

  return {
    country: "Unknown",
    region: "Unknown",
    city: "Unknown",
  };
}
