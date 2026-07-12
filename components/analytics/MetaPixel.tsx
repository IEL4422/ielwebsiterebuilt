'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { FB_PIXEL_ID, isPixelEnabled } from '@/lib/fbpixel';
import { LunacalLeadTracker } from '@/components/analytics/LunacalLeadTracker';

/**
 * Fires PageView on client-side route changes (the base snippet only covers
 * the first, hard-loaded page).
 */
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isPixelEnabled()) return;
    const fbq = (window as any).fbq;
    if (typeof fbq === 'function') {
      fbq('track', 'PageView');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return null;
}

/**
 * Meta Pixel base code.
 *
 * Renders NOTHING when NEXT_PUBLIC_FB_PIXEL_ID is unset — no script tag, no
 * network request, no global fbq. Safe to deploy before the pixel exists.
 */
export function MetaPixel() {
  if (!isPixelEnabled()) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {/* Fires Lead on a confirmed Lunacal consultation booking. */}
      <LunacalLeadTracker />
    </>
  );
}
