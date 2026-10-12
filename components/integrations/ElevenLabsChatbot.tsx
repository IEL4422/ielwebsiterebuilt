import { createElement } from 'react';
import Script from 'next/script';

const ELEVENLABS_AGENT_ID = 'agent_4201m4s2kqjsfmhs00anhnn0pt29';
const ELEVENLABS_WIDGET_SRC = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

/**
 * Global ElevenLabs conversational widget.
 *
 * `createElement` is used because the vendor exposes a browser custom element,
 * not a React component. Loading after hydration keeps the third-party script
 * off the critical rendering path while still placing the widget on every page.
 */
export function ElevenLabsChatbot() {
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
