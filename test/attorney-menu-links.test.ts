import { describe, expect, it } from 'vitest';
import { navItems } from '../components/layout/Header';

const resources = navItems.find((item) => item.label === 'Resources');
const children = (resources && 'children' in resources ? resources.children : []) ?? [];

describe('attorney links in the Resources menu', () => {
  it('links attorneys to the wrongful death probate sign-up page', () => {
    const signUp = children.find((child) => child.label === 'Attorneys: Sign Up a Client');
    expect(signUp?.href).toBe('https://portal.illinoisestatelaw.com/wrongful-death-probate');
  });
  it('links attorneys to the Attorney Dashboard sign-in', () => {
    const dashboard = children.find((child) => child.label === 'Attorney Dashboard');
    expect(dashboard?.href).toBe('https://portal.illinoisestatelaw.com/attorney-dashboard/login');
  });
  it('keeps the new attorney links free of referral wording', () => {
    const attorneyLinks = children.filter((child) => child.label.startsWith('Attorney'));
    expect(attorneyLinks).toHaveLength(2);
    for (const link of attorneyLinks) {
      expect(`${link.label} ${link.href}`.toLowerCase()).not.toContain('refer');
    }
  });
});
