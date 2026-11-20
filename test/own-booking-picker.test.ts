import { readFileSync } from 'node:fs';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import {
  BookingError, bookConsult, bookingEnabled, e164, openTimes, problemWith, slotTimes, tooMany,
} from '../lib/lunacal-booking';
import { groupByDay, whenLabel } from '../components/booking/ConsultTimePicker';

// Mary (Nov 20 2026): the booking page gets its own time picker through Lunacal's
// API, switched off until OWN_BOOKING_PICKER=on. Lunacal is faked here; no real
// booking is made.

const SOON = new Date(Date.now() + 3 * 864e5);
SOON.setUTCHours(16, 0, 0, 0);
const SLOT = SOON.toISOString();
const LATER = new Date(SOON.getTime() + 3600e3).toISOString();

type Call = { path: string; body: any; auth: string | null };

function fakeLunacal(slots: string[] = [SLOT, LATER]) {
  const calls: Call[] = [];
  const impl = (async (url: string, init: any) => {
    const path = String(url).replace('https://app.lunacal.ai/api/', '');
    const body = JSON.parse(init.body);
    calls.push({ path, body, auth: init.headers.Authorization });
    const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status });
    if (path === 'availability') return json({ data: { slots: { day: slots.map((time) => ({ time })) } } });
    if (path === 'event-types/list') return json({ data: [{ id: 15723, slug: 'initial-consultation', length: 30 }] });
    if (path === 'bookings/create') return json({ data: { uid: 'uid-1', user: { name: 'Mary Liberty' } } });
    return json({ message: 'nope' }, 404);
  }) as unknown as typeof fetch;
  return { calls, impl };
}

const REQUEST = {
  caseType: 'estate-planning' as const, start: SLOT, firstName: 'Pat', lastName: 'Fictional',
  email: 'pat@example.test', phone: '(312) 555-0142', notes: '', heardAbout: 'referral',
};

beforeEach(() => { process.env.LUNACAL_API_KEY = 'test-key'; });
afterEach(() => { delete process.env.LUNACAL_API_KEY; delete process.env.OWN_BOOKING_PICKER; });

describe('switch', () => {
  it('is off unless both the key and OWN_BOOKING_PICKER=on are set', () => {
    expect(bookingEnabled({})).toBe(false);
    expect(bookingEnabled({ LUNACAL_API_KEY: 'k' })).toBe(false);
    expect(bookingEnabled({ OWN_BOOKING_PICKER: 'on' })).toBe(false);
    expect(bookingEnabled({ LUNACAL_API_KEY: 'k', OWN_BOOKING_PICKER: 'on' })).toBe(true);
  });

  it('the booking page keeps the Lunacal calendar and only swaps it in when switched on', () => {
    const page = readFileSync('app/book-consultation/page.tsx', 'utf8');
    expect(page).toContain("fetch('/api/booking/config'");
    expect(page).toContain('j?.enabled === true');
    expect(page).toContain('my-lunacal-inline-initial-consultation');
    expect(page).toContain('onUnavailable={useEmbed}');
  });

  it('the API key never reaches the browser code', () => {
    for (const f of ['components/booking/ConsultTimePicker.tsx', 'app/book-consultation/page.tsx']) {
      expect(readFileSync(f, 'utf8')).not.toContain('LUNACAL_API_KEY');
    }
  });
});

describe('reading Lunacal', () => {
  it('reads open times from any of its answer shapes', () => {
    expect(slotTimes({ slots: { a: [{ time: LATER }], b: [{ time: SLOT }] } })).toEqual([SLOT, LATER]);
    expect(slotTimes({ data: { slots: [SLOT, SLOT] } })).toEqual([SLOT]);
    expect(slotTimes({ result: { data: { json: { slots: { a: [{ start: SLOT }] } } } } })).toEqual([SLOT]);
    expect(slotTimes({ slots: { a: [{ time: 'not a time' }] } })).toEqual([]);
  });

  it('asks for the right team event, with the key', async () => {
    const { calls, impl } = fakeLunacal();
    expect(await openTimes('uncontested-probate', new Date(), impl)).toEqual([SLOT, LATER]);
    expect(calls[0].body.eventTypeId).toBe(22049);
    expect(calls[0].auth).toBe('Bearer test-key');
  });
});

describe('booking', () => {
  it('checks the details first', () => {
    expect(problemWith(REQUEST)).toBeNull();
    expect(problemWith({ ...REQUEST, lastName: '' })).toMatch(/first and last name/);
    expect(problemWith({ ...REQUEST, email: 'pat' })).toMatch(/email/);
    expect(problemWith({ ...REQUEST, phone: '555' })).toMatch(/phone/);
    expect(problemWith({ ...REQUEST, caseType: 'divorce' as any })).toMatch(/consultation type/);
    expect(e164('312.555.0142')).toBe('+13125550142');
  });

  it('re-checks the time, then books with the intake answers', async () => {
    const { calls, impl } = fakeLunacal();
    const made = await bookConsult(REQUEST, impl);
    expect(made).toEqual({ uid: 'uid-1', start: SLOT, attorney: 'Mary Liberty' });
    expect(calls.map((c) => c.path)).toEqual(['availability', 'event-types/list', 'bookings/create']);
    const create = calls[2].body;
    expect(create.eventTypeId).toBe(15723);
    expect(new Date(create.end).getTime() - new Date(create.start).getTime()).toBe(30 * 60e3);
    expect(create.responses).toMatchObject({
      name: 'Pat Fictional', email: 'pat@example.test', 'attendee-phone': '+13125550142',
      't-1773441261693-82wo': 'Estate Planning', 'h-1773934665677-zadn': 'Referral',
    });
  });

  it('only the estate planning event gets the general intake answers', async () => {
    const { calls, impl } = fakeLunacal();
    await bookConsult({ ...REQUEST, caseType: 'real-estate' }, impl);
    const create = calls.find((c) => c.path === 'bookings/create')!.body;
    expect(create.eventTypeId).toBe(23488);
    expect(create.responses['t-1773441261693-82wo']).toBeUndefined();
  });

  it('a time that was just taken is not booked', async () => {
    const { calls, impl } = fakeLunacal([LATER]);
    await expect(bookConsult(REQUEST, impl)).rejects.toMatchObject({ status: 409 });
    expect(calls.some((c) => c.path === 'bookings/create')).toBe(false);
  });

  it('no key means no call', async () => {
    delete process.env.LUNACAL_API_KEY;
    const { calls, impl } = fakeLunacal();
    await expect(openTimes('guardianship', new Date(), impl)).rejects.toBeInstanceOf(BookingError);
    expect(calls).toEqual([]);
  });

  it('limits repeated tries from one visitor', () => {
    const now = Date.now();
    for (let i = 0; i < 5; i++) expect(tooMany('203.0.113.9', 5, 60e3, now)).toBe(false);
    expect(tooMany('203.0.113.9', 5, 60e3, now)).toBe(true);
    expect(tooMany('203.0.113.9', 5, 60e3, now + 61e3)).toBe(false);
  });
});

describe('the picker', () => {
  it('groups times by Chicago day and says the time plainly', () => {
    const late = new Date(SOON);
    late.setUTCHours(23, 30); // 5:30 or 6:30 PM Chicago, same day
    const grouped = groupByDay([late.toISOString(), SLOT]);
    expect(grouped).toHaveLength(1);
    expect(grouped[0].times[0]).toBe(SLOT);
    expect(whenLabel(SLOT)).toMatch(/ at 10:00 AM Central$|at 11:00 AM Central$/);
  });
});

describe('the routes stay off by default', () => {
  it('config says off and the booking routes refuse', async () => {
    const config = await import('../app/api/booking/config/route');
    expect(await (await config.GET()).json()).toEqual({ enabled: false });
    const { NextRequest } = await import('next/server');
    const times = await import('../app/api/booking/times/route');
    expect((await times.GET(new NextRequest('http://x/api/booking/times?type=guardianship'))).status).toBe(404);
    const book = await import('../app/api/booking/book/route');
    const r = await book.POST(new NextRequest('http://x/api/booking/book', { method: 'POST', body: JSON.stringify(REQUEST) }));
    expect(r.status).toBe(404);
  });
});
