import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

/**
 * Meta Conversions API relay.
 *
 * Server-side twin of the browser pixel. The browser sends an event_id; we send
 * the same event_id here, so Meta collapses the two into one conversion instead
 * of double-counting.
 *
 * Fully env-gated: without META_PIXEL_ID (or NEXT_PUBLIC_FB_PIXEL_ID) AND
 * META_CAPI_ACCESS_TOKEN this route is a no-op 204 and never calls Meta.
 */

const GRAPH_VERSION = 'v21.0';

const PIXEL_ID = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN || '';
const TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE || '';

/** Meta requires PII to be SHA-256 of the normalized (trimmed, lowercased) value. */
function hash(value?: string): string | undefined {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  if (!normalized) return undefined;
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

/** Phones must be digits only (E.164 without the +) before hashing. */
function hashPhone(value?: string): string | undefined {
  if (!value) return undefined;
  const digits = value.replace(/\D/g, '');
  if (!digits) return undefined;
  return crypto.createHash('sha256').update(digits).digest('hex');
}

function clientIp(req: NextRequest): string | undefined {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') || undefined;
}

export async function POST(req: NextRequest) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    // Dormant until Mary creates the pixel and sets the env vars.
    return new NextResponse(null, { status: 204 });
  }

  try {
    const body = await req.json();
    const {
      event_name,
      event_id,
      event_source_url,
      value,
      currency,
      user_data,
      custom_data,
      fbp,
      fbc,
    } = body ?? {};

    if (!event_name || !event_id) {
      return NextResponse.json({ error: 'event_name and event_id are required' }, { status: 400 });
    }

    const userData: Record<string, unknown> = {
      em: hash(user_data?.email),
      ph: hashPhone(user_data?.phone),
      fn: hash(user_data?.firstName),
      ln: hash(user_data?.lastName),
      fbp,
      fbc,
      client_ip_address: clientIp(req),
      client_user_agent: req.headers.get('user-agent') || undefined,
    };
    // Meta rejects null/undefined members.
    Object.keys(userData).forEach((k) => userData[k] === undefined && delete userData[k]);

    const payload: Record<string, unknown> = {
      data: [
        {
          event_name,
          event_id,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url,
          user_data: userData,
          custom_data: {
            // value + currency are mandatory — this is the Estateur bug.
            value: typeof value === 'number' ? value : Number(value) || 0,
            currency: currency || 'USD',
            ...(custom_data ?? {}),
          },
        },
      ],
    };

    if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;

    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error('[meta-capi] Meta rejected event:', res.status, result);
      return NextResponse.json({ error: 'Meta rejected event', details: result }, { status: 502 });
    }

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error('[meta-capi] error:', error);
    return NextResponse.json({ error: 'Failed to forward event' }, { status: 500 });
  }
}
