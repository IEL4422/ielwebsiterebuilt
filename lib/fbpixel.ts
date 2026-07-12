/**
 * Meta Pixel + Conversions API helper.
 *
 * Everything here is INERT unless NEXT_PUBLIC_FB_PIXEL_ID is set.
 * With no env var: no script is injected, no fbq calls are made, and the
 * CAPI route short-circuits. The site behaves exactly as it did before.
 */

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

export const isPixelEnabled = (): boolean => FB_PIXEL_ID.length > 0;

/**
 * Lead values (USD).
 *
 * These are EXPECTED-VALUE weights, not revenue. They exist because Meta
 * rejects / mis-optimizes Lead events that arrive without value + currency,
 * and because they let Meta learn that a booked consult is worth more than a
 * cold blog-footer form fill.
 *
 * Anchored on the $499 flat-fee entry package.
 */
export const LEAD_VALUES = {
  /** /contact/ — primary contact form, high intent. */
  CONTACT_FORM: 50,
  /** Homepage contact section — same form, slightly lower intent. */
  HOME_CONTACT_FORM: 50,
  /** Blog footer form — informational traffic, lowest intent. */
  BLOG_CONTACT_FORM: 35,
  /** Lunacal consultation booked — highest intent signal on the site. */
  CONSULTATION_BOOKED: 150,
  /** Click through to portal.illinoisestatelaw.com/shop — near-purchase intent. */
  PORTAL_HANDOFF: 100,
} as const;

/** Fallback when the success page has no ?amount= (entry package price). */
export const DEFAULT_PURCHASE_VALUE = 499;

export const CURRENCY = 'USD';

export type LeadSource = keyof typeof LEAD_VALUES;

/** RFC4122-ish id, used to dedupe the browser event against the CAPI event. */
export function newEventId(): string {
  try {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
      return crypto.randomUUID();
    }
  } catch {
    /* fall through */
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
}

type UserData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
};

type TrackOptions = {
  /** Extra params merged into the event (e.g. content_name). */
  params?: Record<string, unknown>;
  /** PII forwarded to the server for hashed advanced matching. Never sent to fbq. */
  userData?: UserData;
};

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[2]) : undefined;
}

/** Fire the server-side (Conversions API) twin of a browser event. */
async function sendToCapi(
  eventName: string,
  eventId: string,
  value: number,
  userData: UserData | undefined,
  params: Record<string, unknown> | undefined
): Promise<void> {
  if (!isPixelEnabled()) return;
  try {
    await fetch('/api/meta-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_source_url: typeof window !== 'undefined' ? window.location.href : undefined,
        value,
        currency: CURRENCY,
        user_data: userData,
        custom_data: params,
        fbp: readCookie('_fbp'),
        fbc: readCookie('_fbc'),
      }),
    });
  } catch (err) {
    // Analytics must never break a form submission.
    console.warn('[meta-capi] send failed', err);
  }
}

/**
 * Track a standard Meta event on BOTH the browser pixel and the Conversions API,
 * sharing one event_id so Meta deduplicates them into a single conversion.
 *
 * Always attaches value + currency — Meta drops/degrades Lead events without them.
 */
export function trackEvent(
  eventName: 'Lead' | 'Purchase',
  value: number,
  options: TrackOptions = {}
): string | undefined {
  if (!isPixelEnabled()) return undefined;

  const eventId = newEventId();
  const payload = {
    value,
    currency: CURRENCY,
    ...(options.params ?? {}),
  };

  try {
    const fbq = (window as any).fbq;
    if (typeof fbq === 'function') {
      fbq('track', eventName, payload, { eventID: eventId });
    }
  } catch (err) {
    console.warn('[fbq] track failed', err);
  }

  // Fire-and-forget; deliberately not awaited so form UX is untouched.
  void sendToCapi(eventName, eventId, value, options.userData, options.params);

  return eventId;
}

/** Convenience wrapper: fire a Lead with the configured value for this surface. */
export function trackLead(source: LeadSource, options: TrackOptions = {}): string | undefined {
  return trackEvent('Lead', LEAD_VALUES[source], {
    ...options,
    params: {
      content_name: source,
      content_category: 'legal_services',
      ...(options.params ?? {}),
    },
  });
}
