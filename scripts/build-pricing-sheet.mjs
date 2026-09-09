/**
 * Generate public/pricing-sheet.html from scripts/pricing-sheet.template.html,
 * substituting the figures that lib/pricing.ts owns.
 *
 * The sheet used to carry the attorney rate as hand-typed prose, and it stayed at the
 * old figure through two rate changes, because a number written into a sentence is not
 * where anyone looks when a rate changes. It is generated now.
 *
 * Deliberately dependency-free: pricing.ts is read as text and its numeric literals are
 * extracted, so this runs under plain `node` with nothing installed and cannot break the
 * Railway build (which runs `npm ci`).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pricing = readFileSync(join(root, 'lib/pricing.ts'), 'utf8');

function num(name) {
  const m = pricing.match(new RegExp(`\\b${name}:\\s*(\\d+)`));
  if (!m) throw new Error(`build-pricing-sheet: ${name} not found in lib/pricing.ts`);
  return Number(m[1]);
}
const usd = (n) => `$${n.toLocaleString('en-US')}`;

const TOKENS = {
  ATTORNEY_HOURLY: `${usd(num('attorneyHourly'))} / hour`,
  PARALEGAL_HOURLY: `${usd(num('paralegalHourly'))} / hour`,
  CONTESTED_RETAINER: usd(num('contestedProbate')),
};

let out = readFileSync(join(root, 'scripts/pricing-sheet.template.html'), 'utf8');
for (const [k, v] of Object.entries(TOKENS)) out = out.split(`{{${k}}}`).join(v);

const leftover = out.match(/\{\{[A-Z_]+\}\}/g);
if (leftover) throw new Error(`build-pricing-sheet: unsubstituted tokens ${leftover.join(', ')}`);

const banner = [
  '<!-- GENERATED FILE - DO NOT EDIT.',
  '     Source: scripts/pricing-sheet.template.html + lib/pricing.ts',
  '     Regenerate with `npm run build:pricing-sheet` (runs automatically on prebuild).',
  '     Hand-editing a rate here is how this sheet came to advertise an hourly rate the',
  '     firm had stopped charging. -->',
  '',
].join('\n');

writeFileSync(join(root, 'public/pricing-sheet.html'), banner + out);
console.log('pricing-sheet.html generated', TOKENS);
