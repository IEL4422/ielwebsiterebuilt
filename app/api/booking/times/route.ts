import { NextRequest, NextResponse } from 'next/server';

import { BookingError, TZ, bookingEnabled, isCaseType, openTimes } from '@/lib/lunacal-booking';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  if (!bookingEnabled()) return NextResponse.json({ error: 'Online booking is off.' }, { status: 404 });
  const type = req.nextUrl.searchParams.get('type');
  if (!isCaseType(type)) return NextResponse.json({ error: 'Unknown consultation type.' }, { status: 400 });
  try {
    const times = await openTimes(type);
    return NextResponse.json({ times, timeZone: TZ }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (err) {
    const status = err instanceof BookingError ? err.status : 502;
    return NextResponse.json({ error: "We couldn't load open times." }, { status: status === 409 ? 502 : status });
  }
}
