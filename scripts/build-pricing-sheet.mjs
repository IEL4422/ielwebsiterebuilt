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
  const m = pricing.match(new RegExp(`\\b${name}:\\s*(\\d+(?:\\.\\d+)?)`));
  if (!m) throw new Error(`build-pricing-sheet: ${name} not found in lib/pricing.ts`);
  return Number(m[1]);
}
const usd = (n) => `$${n.toLocaleString('en-US')}`;

const policy = JSON.parse(readFileSync(join(root, 'lib/fee-scope-policy.json'), 'utf8'));
const emergencyFee = policy.fee_items.find(item => item.id === 'emergency-preservation')?.amount;
if (!Number.isFinite(emergencyFee) || emergencyFee <= 0) throw new Error('Missing approved emergency-preservation fee');

const TOKENS = {
  ATTORNEY_HOURLY: `${usd(num('attorneyHourly'))} / hour`,
  PARALEGAL_HOURLY: `${usd(num('paralegalHourly'))} / hour`,
  CONTESTED_RETAINER: usd(num('contestedProbate')),
  STANDARD_PROBATE: usd(num('standard')),
  TRUST_PACKAGE_JOINT: usd(num('trustPackageJoint')),
  LARGE_ESTATE_BASE: usd(num('largeEstateBase')),
  LARGE_ESTATE_PERCENT: num('largeEstatePercent'),
  PARTIAL_PROBATE: usd(num('partialProbate')),
  HEIR_REPRESENTATION: usd(num('heirRepresentation')),
  SPOUSAL_REPRESENTATION: usd(num('spousalRepresentation')),
  DIY_REVIEW_INDIVIDUAL: usd(num('diyReviewIndividual')),
  DIY_REVIEW_JOINT: usd(num('diyReviewJoint')),
  ESTATE_TAX_INDIVIDUAL: usd(num('estateTaxPackageIndividual')),
  ESTATE_TAX_JOINT: usd(num('estateTaxPackageJoint')),
  SPECIAL_NEEDS: usd(num('specialNeedsPlanning')),
  ESTATE_TAX_ADD_ON: usd(num('estateTaxPlanningAddOn')),
  IRREVOCABLE_TRUST: usd(num('irrevocableTrust')),
  ANNUAL_REVIEW_MEMBERSHIP: usd(num('annualReviewMembership')),
  POA_INDIVIDUAL: usd(num('powersOfAttorneyIndividual')),
  POA_JOINT: usd(num('powersOfAttorneyJoint')),
  TRUST_ADMIN_ANNUAL: usd(num('consultingAnnual')),
  GUARDIANSHIP_ACCOUNTING: usd(num('annualAccountingEstate')),
  GUARDIANSHIP_COMPLIANCE: usd(num('compliancePlanBundled')),
  ADULT_GUARDIANSHIP: usd(num('adultUncontested')),
  MINOR_GUARDIANSHIP: usd(num('minorUncontested')),
  EXTRAORDINARY_GUARDIANSHIP: usd(policy.fee_items.find(item => item.id === 'guardianship-extraordinary').amount),
  GUARDIANSHIP_TERMINATION: usd(policy.fee_items.find(item => item.id === 'guardianship-modification').variants.uncontested),
  EMERGENCY_GUARDIANSHIP_ADD_ON: usd(emergencyFee),
  EMERGENCY_GUARDIANSHIP_TOTAL: usd(num('adultUncontested') + emergencyFee),
  MULTI_UNIT_CLOSING: usd(num('multiUnitOrInvestmentClosing')),
  NONSTANDARD_TITLE_CLOSING: usd(num('estateTrustOrNonstandardTitleClosing')),
};

const html = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
TOKENS.APPROVED_FEE_MENU = '<section><h2>Additional and contested services</h2><table>' + policy.fee_items.map(item => '<tr><td>'+html(item.label)+'</td><td>'+html(item.variants ? '$2,500 uncontested / $12,500 contested' : item.amount == null ? 'Individually quoted fixed fee' : usd(item.amount)+(item.unit?' '+item.unit:''))+'</td></tr>').join('') + '</table>' + ['routine_scope','litigation_scope','additional_scope','supervision_scope','refund_scope','legacy_scope'].map(key=>'<p>'+html(policy[key])+'</p>').join('') + '</section>';

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
console.log('pricing-sheet.html generated with approved 21-item fee menu');
