import { NextResponse } from 'next/server';

import { bookingEnabled } from '@/lib/lunacal-booking';

export const dynamic = 'force-dynamic';

/** Whether the booking page shows the site's own time picker (else Lunacal's embed). */
export async function GET() {
  return NextResponse.json({ enabled: bookingEnabled() }, { headers: { 'Cache-Control': 'no-store' } });
}
