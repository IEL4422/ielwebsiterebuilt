/**
 * Guard: every surface that describes Small Estate Administration must agree
 * about what the service includes.
 *
 * WHY
 *
 * Unlike rates, which lib/pricing.ts single-sources, the INCLUSIONS list for a
 * service is currently stated independently in four places:
 *
 *   1. lib/services-data.ts                            -> /select-service, /start-online
 *   2. components/services/CategorizedServicesDisplay  -> /services-pricing
 *   3. app/recommended-service/page.tsx                -> the service finder result
 *   4. scripts/pricing-sheet.template.html             -> generates public/pricing-sheet.html
 *
 * That is the same shape of defect that put five different attorney rates in
 * this codebase, and it is why test/no-hardcoded-rates.test.ts exists. The
 * proper fix is to make 2, 3 and 4 derive from 1 the way rates derive from
 * lib/pricing.ts. Until that refactor happens, this test makes the duplication
 * ENFORCED rather than silent: add an inclusion to one surface and forget the
 * others, and CI fails naming the ones you missed.
 *
 * Mary added the asset search to this service on 2026-09-09. The firm already
 * performs one on the probate packages - 'Asset & Debt Search' is in the shared
 * probateIncludes list - so this extends an existing capability to the $1,000
 * package rather than introducing a new one.
 *
 * On wording: this says 'Asset Search', not 'Asset & Debt Search'. Mary
 * authorised an asset search. The probate packages separately promise a debt
 * search, which involves creditor notification and publication that a small
 * estate affidavit does not require. Do not widen this to '& Debt' without
 * asking her - advertising work the firm has not agreed to perform is the
 * failure this firm's standing rule exists to prevent.
 */
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { probatePackages } from '../lib/services-data';

const ROOT = join(__dirname, '..');

/** The canonical list lives here. Everything else must agree with it. */
const canonical = probatePackages.find((s) => s.id === 'small-estate-administration');

/**
 * Surfaces that restate the inclusions, and how each spells the asset search.
 * The generated pricing sheet is included deliberately: it is committed to the
 * repo, so a stale copy would ship to anyone who downloads it even though
 * `prebuild` regenerates it.
 */
const SURFACES: { path: string; needle: string }[] = [
  { path: 'components/services/CategorizedServicesDisplay.tsx', needle: "'Asset Search'" },
  { path: 'app/recommended-service/page.tsx', needle: "'Asset Search'" },
  { path: 'scripts/pricing-sheet.template.html', needle: 'an asset search' },
  { path: 'public/pricing-sheet.html', needle: 'an asset search' },
];

describe('Small Estate Administration inclusions', () => {
  it('exists in the canonical service data', () => {
    // Guards against the test passing vacuously if the id is ever renamed.
    expect(canonical, 'small-estate-administration missing from probatePackages').toBeDefined();
    expect(canonical!.fixedPrice).toBe(1000);
  });

  it('includes the asset search in the canonical data', () => {
    expect(canonical!.includes).toContain('Asset Search');
  });

  it('still includes the affidavit and the letter of direction', () => {
    // The asset search is an addition, not a replacement.
    expect(canonical!.includes).toContain('Small Estate Affidavit');
    expect(canonical!.includes).toContain('Attorney Letter of Direction');
  });

  it('is described consistently on every other surface', () => {
    const missing: string[] = [];

    for (const { path, needle } of SURFACES) {
      const source = readFileSync(join(ROOT, path), 'utf8');
      if (!source.includes(needle)) {
        missing.push(`${path} does not mention the asset search (looked for ${needle})`);
      }
    }

    expect(
      missing,
      'Small Estate Administration is described in four places and they have ' +
        'drifted apart. Update every surface, or better, make them derive from ' +
        'lib/services-data.ts:\n' + missing.join('\n'),
    ).toEqual([]);
  });

  it('does not promise a debt search on this package', () => {
    // Only the probate packages include the debt side. If someone widens the
    // wording here, that is a scope change Mary has to approve, not a tidy-up.
    expect(canonical!.includes).not.toContain('Asset & Debt Search');
  });

  it('has not lost the debt search from the probate packages', () => {
    // The inverse: this change must not have disturbed the shared probate list.
    const standard = probatePackages.find((s) => s.id === 'standard-probate');
    expect(standard!.includes).toContain('Asset & Debt Search');
  });
});
