/**
 * Guard: no surface may hardcode an hourly rate or the contested retainer.
 *
 * Five surfaces across two repos held five different attorney rates — $450 here, $400 in
 * the portal catalog, $350 in the service finder, $425 confirmed by Mary, $350 in the
 * billing engine — and nobody could say which was authoritative. Two of them quoted
 * clients BELOW what the engine actually billed.
 *
 * lib/pricing.ts is the single source for this repo. Everything else must import from it.
 * This test fails if a rate-shaped literal reappears anywhere else, which is the only
 * thing that has ever stopped a hardcoded list coming back in this codebase.
 */
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { RATES, RETAINERS } from '../lib/pricing';

const ROOT = join(__dirname, '..');

/** The ONLY files allowed to state a rate as a literal. */
const SOURCE_FILES = [
  'lib/pricing.ts',                        // the source itself
  'public/pricing-sheet.html',             // GENERATED from the source at prebuild
  'test/no-hardcoded-rates.test.ts',       // this file
];

const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'out', 'dist', 'app/blog', 'supabase']);
/** Scraped/minified WordPress artifacts kept for reference; not a rendered surface. */
const SKIP_FILE = (rel: string) => /(-temp|body-|chunk-|copy)\.html$/.test(rel);
const EXTS = ['.ts', '.tsx', '.html', '.txt', '.json'];

/** "$425/hr", "$425 / hour", "Attorney: $425", "attorney_hourly: 425" ... */
const RATE_LINE =
  /(attorney|paralegal|hourly|per hour|\/\s*hr)/i;
// (?![\d,]) so estate-value thresholds like $150,000 and $2,000,000 are not rates.
const MONEY = /\$\s?(\d{3})(?![\d,])/gi;
const RATE_VALUES = new Set(['350', '400', '425', '450', '125', '150', '175']);

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const rel = relative(ROOT, full);
    if (SKIP_DIRS.has(name) || SKIP_DIRS.has(rel)) continue;
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTS.some((e) => name.endsWith(e))) out.push(rel);
  }
  return out;
}

describe('hourly rates live in exactly one place', () => {
  it('lib/pricing.ts holds the confirmed figures', () => {
    // Mary 2026-09-09 ($425) and StaffPortal PR #345 2026-08-06 ($175).
    expect(RATES.attorneyHourly).toBe(425);
    expect(RATES.paralegalHourly).toBe(175);
    expect(RETAINERS.contestedProbate).toBe(5000);
    expect(RETAINERS.contestedGuardianship).toBe(5000);
  });

  it('no other file hardcodes an hourly rate', () => {
    const offenders: string[] = [];
    for (const rel of walk(ROOT)) {
      if (SOURCE_FILES.includes(rel)) continue;
      if (rel.startsWith('app/blog/') || rel.startsWith('lib/blog')) continue; // editorial copy
      if (SKIP_FILE(rel)) continue;
      const text = readFileSync(join(ROOT, rel), 'utf8');
      text.split('\n').forEach((line, i) => {
        if (!RATE_LINE.test(line)) return;
        for (const m of line.matchAll(MONEY)) {
          if (RATE_VALUES.has(m[1])) {
            offenders.push(`${rel}:${i + 1}  ${line.trim().slice(0, 120)}`);
          }
        }
      });
    }
    expect(
      offenders,
      `Import from lib/pricing.ts instead of writing the number:\n${offenders.join('\n')}`,
    ).toEqual([]);
  });
});
