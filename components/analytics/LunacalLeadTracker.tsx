'use client';

import { useEffect, useRef } from 'react';
import { trackLead } from '@/lib/fbpixel';

const LUNACAL_ORIGIN = 'https://app.lunacal.ai';

/**
 * Fires a Meta Lead when a consultation is actually BOOKED in the Lunacal embed.
 *
 * Lunacal is a Cal.com derivative, so the embed iframe posts a message with
 * `bookingSuccessful` on completion. We listen for that rather than firing on
 * page view or case-type selection — a Lead should mean a booking, not a browse.
 *
 * Mounted globally (from MetaPixel) and origin-gated, so it covers the Lunacal
 * embed wherever it appears and stays silent everywhere else. Guarded so one
 * booking produces exactly one Lead.
 */
export function LunacalLeadTracker() {
  const firedRef = useRef(false);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== LUNACAL_ORIGIN) return;
      if (firedRef.current) return;

      const data: any = event.data;
      // Cal.com / Lunacal emit either { type: 'bookingSuccessful' } or
      // { action: 'bookingSuccessful' } depending on embed version.
      const signal =
        typeof data === 'string' ? data : data?.type ?? data?.action ?? data?.event ?? '';

      if (typeof signal !== 'string') return;
      if (!/bookingSuccessful/i.test(signal)) return;

      firedRef.current = true;
      trackLead('CONSULTATION_BOOKED');
    }

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return null;
}
