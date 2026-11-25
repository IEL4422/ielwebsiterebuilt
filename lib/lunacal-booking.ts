/**
 * The site's own consultation time picker, booked through Lunacal's official API.
 *
 * Mary (Nov 20 2026): show open times on the booking page itself instead of
 * Lunacal's embedded calendar. Off until OWN_BOOKING_PICKER=on is set in the
 * website's environment (with LUNACAL_API_KEY). While it is off, the page shows
 * the Lunacal embed exactly as before.
 *
 * Server-only: the API key is read here and never sent to the browser.
 * Lunacal's answers are not documented, so they are read loosely (the staff
 * portal's client does the same). Lunacal's create does not check that the time
 * is still open, so every booking re-checks first.
 */

export const LUNACAL_API = 'https://app.lunacal.ai/api';
export const TZ = 'America/Chicago';

export type CaseType =
  | 'estate-planning'
  | 'trust-administration'
  | 'real-estate'
  | 'uncontested-probate'
  | 'contested-probate'
  | 'guardianship'
  | 'small-business';

export const HEARD_OPTIONS = ['Internet Search', 'AI Search', 'Referral', 'Yelp', 'Facebook', 'Other'] as const;

/** The team consultation events (ids as the website receptionist books them). */
export const CONSULTS: Record<CaseType, { eventTypeId: number; slug: string; title: string; matter?: string }> = {
  'estate-planning': { eventTypeId: 15723, slug: 'initial-consultation', title: 'Estate Planning Consultation', matter: 'Estate Planning' },
  'trust-administration': { eventTypeId: 22294, slug: 'initial-consultation-trust-administration', title: 'Trust Administration Consultation' },
  'real-estate': { eventTypeId: 23488, slug: 'initial-consultation-real-estate', title: 'Real Estate Consultation' },
  'uncontested-probate': { eventTypeId: 22049, slug: 'initial-consultation-probate', title: 'Probate Consultation' },
  'contested-probate': { eventTypeId: 23000, slug: 'initial-consultation-contested-probate', title: 'Contested Probate Consultation' },
  guardianship: { eventTypeId: 22997, slug: 'initial-consultation-guardianship', title: 'Guardianship Consultation' },
  // Mary made this team event on Nov 25 2026 (hosts: Mary Liberty, Yassmin Koudmani).
  'small-business': { eventTypeId: 22293, slug: 'initial-consult-smallbusiness', title: 'Small Business Consultation' },
};

/** The general Initial Consultation's two required questions (matter type, how they heard). */
const MATTER_FIELD = 't-1773441261693-82wo';
const HEARD_FIELD = 'h-1773934665677-zadn';
const DEFAULT_MINUTES = 30;
const DAYS_AHEAD = 21;

export class BookingError extends Error {
  status: number;
  constructor(message: string, status = 502) {
    super(message);
    this.status = status;
  }
}

type FetchLike = typeof fetch;

export function bookingEnabled(env: Record<string, string | undefined> = process.env): boolean {
  return Boolean((env.LUNACAL_API_KEY || '').trim()) && (env.OWN_BOOKING_PICKER || '').trim().toLowerCase() === 'on';
}

export function isCaseType(v: unknown): v is CaseType {
  return typeof v === 'string' && Object.prototype.hasOwnProperty.call(CONSULTS, v);
}

async function call(path: string, body: Record<string, unknown>, fetchImpl: FetchLike = fetch): Promise<any> {
  const key = (process.env.LUNACAL_API_KEY || '').trim();
  if (!key) throw new BookingError('Online booking is not set up.', 503);
  let r: Response;
  try {
    r = await fetchImpl(`${LUNACAL_API}/${path}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
      cache: 'no-store',
    });
  } catch {
    throw new BookingError("We couldn't reach the calendar.");
  }
  const j: any = await r.json().catch(() => null);
  if (!r.ok) {
    const m = [j?.message, j?.error, j?.detail, j?.error?.message].find((x) => typeof x === 'string' && x.trim());
    console.error('[booking] lunacal', path, r.status, m);
    throw new BookingError(String(m || `Lunacal answered HTTP ${r.status}`), r.status === 409 ? 409 : 502);
  }
  return j;
}

function unwrap(data: any, ...keys: string[]) {
  const nodes = [data, data?.data, data?.result, data?.json, data?.result?.data, data?.result?.data?.json];
  for (const n of nodes) {
    if (n && typeof n === 'object') for (const k of keys) if (k in n) return n[k];
  }
  return undefined;
}

/** Every open start time, as sorted ISO strings, from any of Lunacal's answer shapes. */
export function slotTimes(data: any): string[] {
  const raw = unwrap(data, 'slots', 'availability', 'times') ?? data;
  const out: string[] = [];
  const take = (item: any) => {
    const t = typeof item === 'string' ? item : item?.time || item?.start || item?.startTime;
    if (t && !isNaN(new Date(t).getTime())) out.push(new Date(t).toISOString());
  };
  if (Array.isArray(raw)) raw.forEach(take);
  else if (raw && typeof raw === 'object') for (const day of Object.values(raw)) if (Array.isArray(day)) day.forEach(take);
  return Array.from(new Set(out)).sort();
}

export async function openTimes(caseType: CaseType, now = new Date(), fetchImpl?: FetchLike): Promise<string[]> {
  const c = CONSULTS[caseType];
  const end = new Date(now.getTime() + DAYS_AHEAD * 864e5);
  const data = await call('availability', {
    eventTypeId: c.eventTypeId, startTime: now.toISOString(), endTime: end.toISOString(), timeZone: TZ,
  }, fetchImpl);
  return slotTimes(data).filter((t) => new Date(t).getTime() > now.getTime());
}

const lengthCache: { at: number; map: Record<number, number> } = { at: 0, map: {} };

async function minutesFor(eventTypeId: number, fetchImpl?: FetchLike): Promise<number> {
  if (Date.now() - lengthCache.at > 3600e3) {
    try {
      const data = await call('event-types/list', {}, fetchImpl);
      const map: Record<number, number> = {};
      const walk = (n: any) => {
        if (Array.isArray(n)) return n.forEach(walk);
        if (!n || typeof n !== 'object') return;
        const len = Number(n.length ?? n.lengthInMinutes);
        if (typeof n.id === 'number' && n.slug && len > 0) map[n.id] = len;
        Object.values(n).forEach((v) => typeof v === 'object' && walk(v));
      };
      walk(data);
      lengthCache.map = map;
      lengthCache.at = Date.now();
    } catch {
      /* fall back to the default length */
    }
  }
  return lengthCache.map[eventTypeId] || DEFAULT_MINUTES;
}

export type BookingRequest = {
  caseType: CaseType;
  start: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes?: string;
  heardAbout?: string;
};

/** Checks a booking request. Returns a message for the visitor, or null when it's fine. */
export function problemWith(req: Partial<BookingRequest>): string | null {
  const text = (v: unknown, max: number) => typeof v === 'string' && v.trim().length > 0 && v.length <= max;
  if (!isCaseType(req.caseType)) return 'Please choose a consultation type.';
  if (!text(req.start, 40) || isNaN(new Date(String(req.start)).getTime())) return 'Please choose a time.';
  if (!text(req.firstName, 100) || !text(req.lastName, 100)) return 'Please enter your first and last name.';
  if (!text(req.email, 254) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(req.email))) return 'Please enter a valid email address.';
  if (!e164(req.phone)) return 'Please enter a 10-digit phone number.';
  if (req.notes != null && (typeof req.notes !== 'string' || req.notes.length > 2000)) return 'Please shorten your note.';
  return null;
}

export function e164(phone: unknown): string | null {
  const d = String(phone ?? '').replace(/\D/g, '');
  if (d.length === 10) return `+1${d}`;
  if (d.length === 11 && d.startsWith('1')) return `+${d}`;
  return null;
}

function hostName(b: any): string | null {
  const c = [b?.user?.name, b?.organizer?.name, Array.isArray(b?.hosts) ? b.hosts[0]?.name : null, Array.isArray(b?.users) ? b.users[0]?.name : null];
  const n = c.find((x) => typeof x === 'string' && x.trim());
  return n ? n.trim() : null;
}

export async function bookConsult(req: BookingRequest, fetchImpl?: FetchLike): Promise<{ uid: string; start: string; attorney: string | null }> {
  const c = CONSULTS[req.caseType];
  const startMs = new Date(req.start).getTime();
  if (startMs <= Date.now()) throw new BookingError('Please choose a time in the future.', 400);

  const around = await call('availability', {
    eventTypeId: c.eventTypeId,
    startTime: new Date(startMs - 12 * 3600e3).toISOString(),
    endTime: new Date(startMs + 12 * 3600e3).toISOString(),
    timeZone: TZ,
  }, fetchImpl);
  if (!slotTimes(around).some((t) => new Date(t).getTime() === startMs)) {
    throw new BookingError('That time was just taken. Please choose another.', 409);
  }

  const phone = e164(req.phone) as string;
  const name = `${req.firstName.trim()} ${req.lastName.trim()}`;
  const responses: Record<string, unknown> = {
    name, email: req.email.trim(), 'attendee-phone': phone, smsReminderNumber: phone,
    notes: (req.notes || '').trim().slice(0, 2000) || 'Booked on the website.',
  };
  if (c.matter) {
    responses[MATTER_FIELD] = c.matter;
    const heard = HEARD_OPTIONS.find((o) => o.toLowerCase() === String(req.heardAbout || '').trim().toLowerCase());
    responses[HEARD_FIELD] = heard || 'Other';
  }
  const minutes = await minutesFor(c.eventTypeId, fetchImpl);
  const start = new Date(startMs).toISOString();
  const data = await call('bookings/create', {
    eventTypeId: c.eventTypeId, start, end: new Date(startMs + minutes * 60e3).toISOString(),
    timeZone: TZ, language: 'en', responses, metadata: { source: 'Website time picker' }, bookingUids: [], slots: [],
  }, fetchImpl);
  const node = Array.isArray(data) ? data[0] : data;
  const booking = unwrap(node, 'booking') || node?.data || node;
  const uid = node?.uid || unwrap(node, 'uid') || booking?.uid;
  if (typeof uid !== 'string' || !uid) throw new BookingError("The calendar didn't confirm the booking. Please call our office.");
  return { uid, start, attorney: hostName(booking) };
}

/** A small in-memory limit per visitor, so the booking form can't be hammered. */
const hits = new Map<string, number[]>();
export function tooMany(ip: string, limit = 5, windowMs = 10 * 60e3, now = Date.now()): boolean {
  const recent = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > limit;
}
