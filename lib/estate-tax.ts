/**
 * Illinois AG CalcHtm.js / Form 700, verified 2026-10-13:
 * https://illinoisattorneygeneral.gov/application/estate-tax-calculator/CalcHtm.js
 * https://illinoisattorneygeneral.gov/Page-Attachments/Form700.pdf
 * Solve the interrelated deduction, then apply the hypothetical federal-tax
 * limit using Illinois's $4M exclusion. Gifts affect that limit, NOT the credit
 * table's estate base. Apportion only AFTER the full Illinois calculation.
 */
export const IL_THRESHOLD = 4_000_000;
export const FEDERAL_EXEMPTION_2026 = 15_000_000;
export const IL_CALCULATOR_URL = 'https://illinoisattorneygeneral.gov/estate-taxes/2013-2025-estate-calculator';

const CREDIT_TABLE = [
  [0, 0, 0], [40_000, 0, .008], [90_000, 400, .016],
  [140_000, 1_200, .024], [240_000, 3_600, .032],
  [440_000, 10_000, .04], [640_000, 18_000, .048],
  [840_000, 27_600, .056], [1_040_000, 38_800, .064],
  [1_540_000, 70_800, .072], [2_040_000, 106_800, .08],
  [2_540_000, 146_800, .088], [3_040_000, 190_800, .096],
  [3_540_000, 238_800, .104], [4_040_000, 290_800, .112],
  [5_040_000, 402_800, .12], [6_040_000, 522_800, .128],
  [7_040_000, 650_800, .136], [8_040_000, 786_800, .144],
  [9_040_000, 930_800, .152], [10_040_000, 1_082_800, .16],
] as const;

export function parseTaxInput(value: string, optional = false): number {
  const trimmed = value.trim();
  if (!trimmed) return optional ? 0 : NaN;
  // Reject malformed text instead of silently stripping letters/minus signs.
  if (!/^\$?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/.test(trimmed)) return NaN;
  const amount = Number(trimmed.replace(/[$,]/g, ''));
  return Number.isFinite(amount) && amount <= Number.MAX_SAFE_INTEGER ? amount : NaN;
}

function creditTax(amount: number) {
  const row = [...CREDIT_TABLE].reverse().find(([lower]) => amount >= lower) ?? CREDIT_TABLE[0];
  return row[1] + row[2] * Math.max(0, amount - row[0]);
}

export function calculateIllinoisEstateTax(estate: number, gifts = 0, situsPct = 100) {
  if (![estate, gifts, situsPct].every(n => Number.isFinite(n) && n >= 0)
      || situsPct > 100 || !Number.isSafeInteger(Math.ceil(estate + gifts))) {
    throw new RangeError('Enter valid estate and gift amounts and an Illinois allocation from 0 to 100.');
  }
  // Bisection solves T = creditTax(estate - 60,000 - T), including bracket
  // crossings. Retain cents internally; round only for display, as an estimate.
  let lower = 0;
  let upper = creditTax(Math.max(0, estate - 60_000));
  for (let i = 0; i < 100; i++) {
    const trial = (lower + upper) / 2;
    if (trial > creditTax(Math.max(0, estate - 60_000 - trial))) upper = trial;
    else lower = trial;
  }
  const creditAfterDeduction = (lower + upper) / 2;
  // Solve T = .40 * (estate + gifts - T - 4,000,000).
  const exclusionLimit = Math.max(0, (estate + gifts - IL_THRESHOLD) * .4 / 1.4);
  const fullTax = Math.min(creditAfterDeduction, exclusionLimit);
  return {
    fullTax,
    tax: fullTax * situsPct / 100,
    creditAfterDeduction,
    exclusionLimit,
    adjustedTableEstate: Math.max(0, estate - 60_000 - fullTax),
    limitApplies: exclusionLimit < creditAfterDeduction,
  };
}

/** Simplified 2026 federal estimate for no prior gift tax payable/other credits.
 * IRS Form 706 line 3b deducts state death tax. Exemptions >= $1M use the 40%
 * top bracket; UI limits this planning estimate to those exemptions.
 */
export function estimateFederalEstateTax(estate: number, gifts: number, stateTax: number, exemption: number) {
  if (![estate, gifts, stateTax, exemption].every(n => Number.isFinite(n) && n >= 0) || exemption < 1_000_000) {
    throw new RangeError('Invalid federal estimate inputs.');
  }
  return Math.max(0, (Math.max(0, estate - stateTax) + gifts - exemption) * .4);
}

export const IL_TAX_EXAMPLES = [4_000_000, 4_100_000, 4_500_000, 5_000_000, 6_000_000, 7_000_000, 10_000_000]
  .map(estate => ({ estate, tax: calculateIllinoisEstateTax(estate).tax }));
