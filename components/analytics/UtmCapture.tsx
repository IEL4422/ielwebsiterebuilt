'use client';

import { useEffect } from 'react';
import { captureUtm } from '@/lib/portal-handoff';

/** Remembers the utm_* parameters a visitor arrived with, so the portal hand-off can pass them on. */
export function UtmCapture() {
  useEffect(() => {
    captureUtm(window.location.search);
  }, []);
  return null;
}
