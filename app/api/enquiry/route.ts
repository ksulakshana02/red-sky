import { NextResponse } from "next/server";

/**
 * Quote enquiry endpoint.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * TODO(client): set ENQUIRY_WEBHOOK_URL in the environment to the endpoint
 * that should receive enquiries — a CRM intake URL, a Zapier/Make hook, a
 * Formspree endpoint, or your own mail service.
 *
 * Until that is set this route deliberately returns 501 rather than a fake
 * success, so no enquiry is ever silently dropped. The form reacts by
 * showing the caller a prefilled email and the phone number instead.
 * ──────────────────────────────────────────────────────────────────────────
 */

export const runtime = "nodejs";

/** Maximum accepted body size, to avoid a trivially abusive payload. */
const MAX_BODY_BYTES = 32 * 1024;

interface EnquiryPayload {
  services: string[];
  specialist: string[];
  industry: string;
  siteCount: string;
  floorArea: string;
  region: string;
  situation: string;
  frequency: string;
  accessHours: string;
  startTiming: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  preferredContact: string;
  message: string;
}

const REQUIRED: (keyof EnquiryPayload)[] = ["name", "company", "email", "phone"];

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/** Strip control characters so nothing injects line breaks into a downstream email header. */
function clean(v: unknown, max = 2000): string {
  if (typeof v !== "string") return "";
  return v.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

function cleanList(v: unknown, max = 40): string[] {
  if (!Array.isArray(v)) return [];
  return v.slice(0, max).map((x) => clean(x, 120)).filter(Boolean);
}

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;

  // Honeypot: a hidden field only a bot would fill in.
  if (clean(b.company_website)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const payload: EnquiryPayload = {
    services: cleanList(b.services),
    specialist: cleanList(b.specialist),
    industry: clean(b.industry, 120),
    siteCount: clean(b.siteCount, 60),
    floorArea: clean(b.floorArea, 60),
    region: clean(b.region, 120),
    situation: clean(b.situation, 120),
    frequency: clean(b.frequency, 120),
    accessHours: clean(b.accessHours, 120),
    startTiming: clean(b.startTiming, 120),
    name: clean(b.name, 120),
    company: clean(b.company, 160),
    role: clean(b.role, 120),
    email: clean(b.email, 160),
    phone: clean(b.phone, 60),
    preferredContact: clean(b.preferredContact, 40),
    message: clean(b.message, 4000),
  };

  const missing = REQUIRED.filter((k) => !payload[k]);
  if (missing.length > 0) {
    return NextResponse.json({ error: "missing_fields", fields: missing }, { status: 400 });
  }
  if (!isEmail(payload.email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    console.warn(
      "[enquiry] ENQUIRY_WEBHOOK_URL is not set — enquiry was NOT delivered. " +
        "Set it in the environment to start receiving quote requests.",
    );
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "website-quote-form",
        receivedAt: new Date().toISOString(),
        ...payload,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error(`[enquiry] webhook responded ${res.status}`);
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[enquiry] webhook request failed", err);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
