import { NextRequest, NextResponse } from 'next/server';

import { BookingError, bookConsult, bookingEnabled, problemWith, tooMany, type BookingRequest } from '@/lib/lunacal-booking';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  if (!bookingEnabled()) return NextResponse.json({ error: 'Online booking is off.' }, { status: 404 });
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (tooMany(ip)) {
    return NextResponse.json({ error: 'Too many tries. Please call our office to book.' }, { status: 429 });
  }
  const body: any = await req.json().catch(() => null);
  if (!body || typeof body !== 'object') return NextResponse.json({ error: 'Please try again.' }, { status: 400 });
  // Hidden field a person never fills in; bots usually do.
  if (typeof body.company === 'string' && body.company.trim()) {
    return NextResponse.json({ error: 'Please try again.' }, { status: 400 });
  }
  const request: Partial<BookingRequest> = {
    caseType: body.caseType, start: body.start, firstName: body.firstName, lastName: body.lastName,
    email: body.email, phone: body.phone, notes: body.notes, heardAbout: body.heardAbout,
  };
  const problem = problemWith(request);
  if (problem) return NextResponse.json({ error: problem }, { status: 400 });
  try {
    const made = await bookConsult(request as BookingRequest);
    return NextResponse.json({ ok: true, start: made.start, attorney: made.attorney });
  } catch (err) {
    if (err instanceof BookingError && (err.status === 409 || err.status === 400)) {
      return NextResponse.json({ error: err.message, taken: err.status === 409 }, { status: err.status });
    }
    console.error('[booking] create failed', err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "We couldn't book that time. Please try again or call our office." }, { status: 502 });
  }
}
