import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { navItems } from '../components/layout/Header';
import ForAttorneysPage from '../app/for-attorneys/page';
import {
  DASHBOARD_URL,
  SEND_TO_CLIENT_URL,
  START_FOR_CLIENT_URL,
} from '../lib/for-attorneys';

const resources = navItems.find((item) => item.label === 'Resources');
const children = (resources && 'children' in resources ? resources.children : []) ?? [];

describe('For Attorneys menu link', () => {
  it('has one For Attorneys link under Resources that opens the on-site page', () => {
    const links = children.filter((child) => child.label.toLowerCase().includes('attorney'));
    expect(links).toEqual([{ label: 'For Attorneys', href: '/for-attorneys/' }]);
  });
});

describe('For Attorneys page', () => {
  const html = renderToStaticMarkup(<ForAttorneysPage />);

  it('explains the offer and the flat fee with filing and publication fees included', () => {
    expect(html).toContain('For Attorneys');
    expect(html).toContain('$3,500');
    expect(html).toContain('All court filing fees and publication fees are included');
    expect(html).toContain('How it works');
  });

  it('links to both ways to start a case and to the Attorney Dashboard sign-in', () => {
    expect(START_FOR_CLIENT_URL).toBe('https://portal.illinoisestatelaw.com/wrongful-death-probate?start=case');
    expect(SEND_TO_CLIENT_URL).toBe('https://portal.illinoisestatelaw.com/wrongful-death-probate?start=client');
    expect(DASHBOARD_URL).toBe('https://portal.illinoisestatelaw.com/attorney-dashboard/login');
    expect(html).toContain(`href="${START_FOR_CLIENT_URL}"`);
    expect(html).toContain(`href="${SEND_TO_CLIENT_URL}"`);
    expect(html).toContain(`href="${DASHBOARD_URL}"`);
    expect(html).toContain('Start the case for my client');
    expect(html).toContain('Send my client the information');
    expect(html).toContain('Sign in to the Attorney Dashboard');
  });

  it('never says refer or referral', () => {
    expect(html.toLowerCase()).not.toContain('refer');
  });
});
