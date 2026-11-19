'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { trackLead } from '@/lib/fbpixel';
import { trackFunnelEvent } from '@/lib/gtag';
import { PORTAL_GET_STARTED_URL, storedUtm, withUtm } from '@/lib/portal-handoff';

/**
 * A buy button that hands off to the portal's Get Started screen. The href is
 * built by lib/portal-handoff.ts (buyHref); once the page is running in the
 * browser, any utm_* values the visitor arrived with are added to portal links.
 * Non-portal hrefs (the /start-online/ fallback) are left as they are.
 */
export function PortalHandoffLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const [finalHref, setFinalHref] = useState(href);
  useEffect(() => {
    setFinalHref(withUtm(href, storedUtm()));
  }, [href]);

  return (
    <a
      href={finalHref}
      className={className}
      onClick={() => {
        onClick?.();
        if (finalHref.startsWith(PORTAL_GET_STARTED_URL)) {
          trackLead('PORTAL_HANDOFF', { params: { content_ids: [href] } });
          trackFunnelEvent('secure_intake_started', { source: 'PORTAL_HANDOFF' });
        }
      }}
    >
      {children}
    </a>
  );
}
