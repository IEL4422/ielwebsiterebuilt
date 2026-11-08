import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import ClientPortalPage, { metadata } from '@/app/client-portal/page';
import { ClientPortalSection } from '@/components/home/ClientPortalSection';
import { ClientPortalPreview } from '@/components/portal/ClientPortalPreview';

describe('client portal website messaging', () => {
  for (const [name, Component] of [['homepage section', ClientPortalSection], ['portal page', ClientPortalPage]] as const) {
    it(`${name} explains each requested portal capability`, () => {
      const html = renderToStaticMarkup(<Component />).toLowerCase();
      for (const phrase of ['case updates', 'estate planning documents', 'request changes', 'message', 'schedule calls', 'resources', 'legal matter']) {
        expect(html).toContain(phrase);
      }
      expect(html).not.toContain('bank-level');
      expect(html).not.toContain('real-time');
    });
  }

  it('keeps the portal login and information links', () => {
    expect(renderToStaticMarkup(<ClientPortalPage />)).toContain('href="https://portal.illinoisestatelaw.com"');
    expect(renderToStaticMarkup(<ClientPortalSection />)).toContain('href="/client-portal/"');
  });

  it('labels the preview as illustrative in both layouts', () => {
    for (const compact of [true, false]) {
      const html = renderToStaticMarkup(<ClientPortalPreview compact={compact} />);
      expect(html).toContain('Illustrative preview. Available tools and matter stages depend on the service.');
      expect(html).toContain('Schedule calls');
      expect(html).toContain('Matter resources');
    }
  });

  it('includes document revisions and scheduling in search metadata', () => {
    expect(metadata.description).toContain('request changes');
    expect(metadata.description).toContain('schedule calls');
  });
});
