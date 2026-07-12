'use client';

import { trackLead, type LeadSource } from '@/lib/fbpixel';

type Props = {
  href: string;
  source: LeadSource;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

/**
 * Anchor that fires a Lead (with value + currency + event_id) before navigating.
 * Navigation is never blocked — if the pixel is absent, trackLead is a no-op.
 */
export function TrackedLeadLink({ href, source, children, className, target, rel }: Props) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => {
        trackLead(source, { params: { content_ids: [href] } });
      }}
    >
      {children}
    </a>
  );
}
