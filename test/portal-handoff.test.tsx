import { describe, expect, it, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { portalHandoff } from '../lib/portal-handoff';
import StartOnlinePage from '../app/start-online/page';
import GetStartedPage from '../app/get-started/page';
import SelectServicePage from '../app/select-service/page';
import { TrackedLeadLink } from '../components/analytics/TrackedLeadLink';
import { trackLead } from '../lib/fbpixel';
import { allServices } from '../lib/services-data';
vi.mock('@/lib/fbpixel', () => ({ trackLead: vi.fn() }));
vi.mock('@/lib/gtag', () => ({ trackFunnelEvent: vi.fn() }));

describe('website to portal handoff', () => {
  it.each(['trust-package', 'will-package', 'probate-avoidance-package', 'diy-estate-plan-review'])('carries only public identifiers for %s', service => {
    for (const tier of ['individual', 'joint'] as const) {
      const url = new URL(portalHandoff(service, tier));
      expect([...url.searchParams.keys()]).toEqual(['handoff', 'service', 'package']);
      expect(url.searchParams.get('package')).toMatch(new RegExp(`-${tier}$`));
    }
  });
  it.each(['retired', 'constructor', '__proto__', undefined])('unknown service %s safely keeps generic entry', service => {
    expect(portalHandoff(service)).toBe('https://portal.illinoisestatelaw.com/get-started');
  });
  it('renders complete package inclusions, joint handoff, and no arbitrary source value', () => {
    const html = renderToStaticMarkup(<StartOnlinePage searchParams={{ service: 'trust-package', clientType: 'joint', source: 'private-secret&price=1' }} />);
    const service = allServices.find(item => item.id === 'trust-package')!;
    for (const item of service.includes) expect(html).toContain(renderToStaticMarkup(<span>{item}</span>));
    expect(html).toContain('package=trust-joint');
    expect(html).not.toContain('private-secret');
    expect(html).not.toContain('additional included items');
  });
  it('offers need-first routes with matching section anchors and direct package shortcut', () => {
    const entry = renderToStaticMarkup(<GetStartedPage />);
    const catalog = renderToStaticMarkup(<SelectServicePage />);
    expect(entry).toContain('What do you need help with?');
    expect(entry).toContain('/start-online/?service=trust-package');
    for (const id of ['estate-planning', 'probate', 'real-estate', 'guardianship']) {
      expect(entry).toContain(`/select-service/#${id}`); expect(catalog).toContain(`id="${id}"`);
    }
  });
});

it('does not send the handoff destination or query values to ad analytics', () => {
  const element = TrackedLeadLink({ href: 'https://portal.illinoisestatelaw.com/get-started?private=secret', source: 'PORTAL_HANDOFF', children: 'Continue' });
  element.props.onClick();
  expect(trackLead).toHaveBeenCalledWith('PORTAL_HANDOFF', { params: { content_ids: ['secure-portal'] } });
});
