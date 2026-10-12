import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('ElevenLabs website chatbot', () => {
  const widget = readFileSync('components/integrations/ElevenLabsChatbot.tsx', 'utf8');
  const layout = readFileSync('app/layout.tsx', 'utf8');

  it('uses the configured agent and official widget embed', () => {
    expect(widget).toContain('agent_4201m4s2kqjsfmhs00anhnn0pt29');
    expect(widget).toContain('https://unpkg.com/@elevenlabs/convai-widget-embed');
    expect(widget).toContain('elevenlabs-convai');
  });

  it('loads after the page is interactive and mounts once globally', () => {
    expect(widget).toContain('strategy="afterInteractive"');
    expect(layout.match(/<ElevenLabsChatbot \/>/g)).toHaveLength(1);
  });
});
