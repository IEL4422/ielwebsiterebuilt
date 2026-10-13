'use client';

import { createElement } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { ELEVENLABS_AGENT_ID, INLINE_CHAT_PATHS } from '@/components/integrations/elevenlabs-config';

const ELEVENLABS_WIDGET_SRC = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

/**
 * Global ElevenLabs conversational widget (agent_4201m4s2kqjsfmhs00anhnn0pt29).
 *
 * `createElement` is used because the vendor exposes a browser custom element,
 * not a React component. Loading after hydration keeps the third-party script
 * off the critical rendering path while still placing the widget on every page.
 *
 * Hidden on pages that already show the inline chat box (see INLINE_CHAT_PATHS).
 */
export function ElevenLabsChatbot() {
  const pathname = (usePathname() || '/').replace(/\/+$/, '') || '/';
  if (INLINE_CHAT_PATHS.includes(pathname)) return null;

  return (
    <>
      {createElement('elevenlabs-convai', { 'agent-id': ELEVENLABS_AGENT_ID })}
      <Script
        id="elevenlabs-convai-widget"
        src={ELEVENLABS_WIDGET_SRC}
        strategy="afterInteractive"
      />
    </>
  );
}
