import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('Inline website chat box', () => {
  const chat = readFileSync('components/integrations/InlineChat.tsx', 'utf8');
  const config = readFileSync('components/integrations/elevenlabs-config.ts', 'utf8');
  const widget = readFileSync('components/integrations/ElevenLabsChatbot.tsx', 'utf8');
  const contactPage = readFileSync('app/contact/page.tsx', 'utf8');
  const homeSection = readFileSync('components/home/ContactSection.tsx', 'utf8');

  it('uses the same agent as the floating widget, in text-only mode', () => {
    expect(config).toContain('agent_4201m4s2kqjsfmhs00anhnn0pt29');
    expect(chat).toContain('ELEVENLABS_AGENT_ID');
    expect(chat).toContain('text_only: true');
  });

  it('only connects when the visitor sends a message', () => {
    expect(chat).not.toMatch(/useEffect\(\(\) => \{\s*connect\(\)/);
  });

  it('is placed on the contact page and homepage contact section', () => {
    expect(contactPage).toContain('<InlineChat');
    expect(homeSection).toContain('<InlineChat');
  });

  it('keeps the existing message forms available', () => {
    expect(contactPage).toContain("source: 'contact'");
    expect(homeSection).toContain("source: 'homepage'");
  });

  it('hides the floating widget where the inline chat is shown', () => {
    expect(widget).toContain('INLINE_CHAT_PATHS');
    expect(config).toContain("'/contact'");
  });
});
