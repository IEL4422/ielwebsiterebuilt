/**
 * ============================================================================
 * CANONICAL PRICING SOURCE OF TRUTH — Illinois Estate Law
 * ============================================================================
 *
 * EVERY price the firm charges lives HERE and ONLY here. No page, component,
 * schema block, llms.txt entry, county page, comparison table, portal surface,
 * or CSA may hardcode a dollar figure. They all import from this file.
 *
 * STATUS: LOCKED 2026-07-14; retainers standardized 2026-07-15; guardianship
 * moved to flat fees 2026-07-16. Approved by Mary Liberty. The model is now
 * clean: ONLY contested matters carry a retainer. Every contested matter opens
 * on a UNIFORM $5,000 retainer ($450 attorney / $175 paralegal, costs billable):
 * contested probate, will contests, and contested guardianship. EVERYTHING
 * uncontested is a flat fee — including adult guardianship of the person and
 * estate, which moved from a $5,000 retainer to a flat fee. Both uncontested
 * guardianships (adult and minor) are the SAME flat $4,500 (all-inclusive of
 * the firm's work; the GAL fee is a disclosed pass-through, like the probate
 * surety bond). There are no PENDING prices.
 *
 * ---------------------------------------------------------------------------
 * THE BILLING MODEL — fee structure is a property of MATTER POSTURE, not of the
 * practice area. The rule is simple: contested = retainer + hourly; everything
 * uncontested = flat fee. There are exactly three models:
 *
 *   'flat_all_inclusive'  Uncontested, knowable scope — INCLUDING all uncontested
 *                         guardianship (adult and minor). The flat fee covers ALL
 *                         of the firm's work and court costs except the named
 *                         carve-outs below.
 *   'retainer_hourly'     CONTESTED matters ONLY. Billed hourly against a
 *                         retainer. Costs and expenses (GAL, filing, process
 *                         server, transcripts) ARE billable to the client, on a
 *                         separate invoice line.
 *   'flat_annual'         Recurring court-required compliance work.
 *
 * The named cost carve-outs, and there are only these:
 *   - Uncontested probate flat fee -> surety bond premium.
 *   - Adult guardianship flat fee -> guardian ad litem (GAL) fee, a court-set
 *     pass-through (like the probate surety bond).
 *   - Trust funding -> one deed + recording included; additional deeds $500 ea.
 *   - Contested matters are retainer_hourly, so the GAL fee is simply a billable
 *     expense there, NOT a carve-out from a flat fee.
 * ============================================================================
 */

export type BillingModel = 'flat_all_inclusive' | 'retainer_hourly' | 'flat_annual';

export const BILLING_MODEL_LABEL: Record<BillingModel, string> = {
  flat_all_inclusive: 'Flat fee (all costs included)',
  retainer_hourly: 'Retainer + hourly (costs billable)',
  flat_annual: 'Flat annual fee',
};

/**
 * Hourly rates — every retainer_hourly matter. LOCKED.
 *
 * 755 ILCS 5/27-2: where fees are paid from a ward's or decedent's estate the
 * COURT determines reasonable compensation. Contemporaneous time records are the
 * evidentiary basis of the fee, not a billing convenience.
 */
export const RATES = {
  attorneyHourly: 450,
  paralegalHourly: 175,
} as const;

/**
 * Retainers. LOCKED. ONLY contested matters carry a retainer.
 *
 * Every contested matter opens on the SAME $5,000 initial retainer, EVERGREEN:
 * the client replenishes to the full amount when the balance falls below the
 * floor. See RETAINER_FLOORS.
 *
 * An unearned retainer is CLIENT MONEY (RPC 1.15): it belongs in the client
 * trust account, ledgered per client, drawn only as earned and billed. Do not
 * put IOLTA language in public marketing copy, and do not accept a retainer
 * until the trust account and per-client ledger are live.
 */
export const RETAINERS = {
  /** Contested guardianship — competing petition, objection, removal. */
  contestedGuardianship: 5000,
  /** Contested probate / will contests / estate litigation. */
  contestedProbate: 5000,
} as const;

/** Evergreen replenishment floors. Balance below floor -> top back up to full. */
export const RETAINER_FLOORS = {
  contestedGuardianship: 2500,
  contestedProbate: 2500,
} as const;

/**
 * Guardianship FLAT fees (flat_all_inclusive). LOCKED. ALL uncontested
 * guardianship is flat-fee'd — only a contest flips a matter to retainer+hourly.
 *
 *   - Adult guardianship of the person and estate: flat $4,500, all-inclusive of
 *     the firm's work (petition, physician's report coordination, personal
 *     service, GAL coordination, surety bond and inventory, hearing). The GAL fee
 *     itself is a court-set pass-through billed to the client — a carve-out, like
 *     the probate surety bond — not part of the flat fee. (Set to MATCH minor
 *     guardianship per Mary 2026-07-16; note this is well under the ~$6,275 labor
 *     break-even for an adult case — a deliberate loss-leader. Revisit if volume
 *     shifts.)
 *   - Minor guardianship: petition -> notice -> hearing -> letters. Same $4,500.
 *   - Discrete interim petitions and uncontested termination.
 */
export const GUARDIANSHIP_FLAT = {
  adultUncontested: 4500,
  minorUncontested: 4500,
  interimPetition: 1500,
  terminationUncontested: 2000,
} as const;

/**
 * Annual guardianship compliance (flat_annual). LOCKED. The recurring-revenue
 * line — mandatory, court-required, on a file the firm already holds, and the
 * client cannot opt out.
 *
 *   - Annual Report on the Ward: 755 ILCS 5/11a-17(b). Portal-templated; highest
 *     margin service in the firm.
 *   - Annual Estate Accounting: 755 ILCS 5/24-11. NOT automated — assembling the
 *     evidence for every disbursement is real paralegal time.
 */
export const GUARDIANSHIP_COMPLIANCE = {
  annualReportPerson: 850,
  annualAccountingEstate: 1800,
  compliancePlanBundled: 2300,
} as const;

/**
 * Third-party pass-through / billable costs. NOT firm revenue.
 * In retainer_hourly matters these are billed to the client. Disclose always.
 */
export const GUARDIANSHIP_COSTS = {
  galFeeLow: 1500,
  galFeeHigh: 2500,
  galHourlyLow: 225,
  galHourlyHigh: 275,
  filingPersonOnly: 50,
  filingEstateUnder15k: 70,
  filingEstateOver15k: 105,
  /** Minor guardianship filing + appearance fees eliminated 10/1/2025 (M.R. 29741). */
  filingMinorGuardianship: 0,
} as const;

/** Probate flat fees (flat_all_inclusive). Carve-out: surety bond premium. */
export const PROBATE = {
  bondInLieu: 1500,
  smallEstate: 3500,
  standard: 6500,
  largeEstateBase: 6500,
  largeEstatePercent: 1,
  reopening: 2500,
  heirRepresentation: 2500,
  spousalRepresentation: 3500,
  partialProbateFrom: 3500,
  partialProbateTo: 6500,
  documentReview: 500,
} as const;

/** Estate planning — unchanged, live and approved. */
export const ESTATE_PLANNING = {
  trustPackageIndividual: 3500,
  trustPackageJoint: 5000,
  probateAvoidanceIndividual: 1750,
  probateAvoidanceJoint: 2250,
  willPackageIndividual: 1250,
  willPackageJoint: 1750,
  diyReviewIndividual: 500,
  diyReviewJoint: 750,
  estateTaxPackageIndividualBase: 10000,
  estateTaxPackageJointBase: 15000,
  estateTaxPackagePercent: 1,
  irrevocableTrust: 4500,
  annualReviewMembership: 199,
} as const;

/** A la carte — unchanged. */
export const A_LA_CARTE = {
  revocableTrustIndividual: 2500,
  revocableTrustJoint: 3500,
  willIndividual: 750,
  willJoint: 1250,
  powersOfAttorneyIndividual: 400,
  powersOfAttorneyJoint: 600,
  healthcareDirective: 350,
  trustRestatementIndividual: 2000,
  trustRestatementJoint: 3000,
  willAmendmentIndividual: 500,
  willAmendmentJoint: 750,
  trustFundingGuidance: 1500,
  specialNeedsPlanning: 3500,
  estateTaxPlanningAddOnBase: 5000,
  deed: 500,
} as const;

/** Trust administration — unchanged. */
export const TRUST_ADMIN = { consultingAnnual: 3500 } as const;

/** Real estate — unchanged. */
export const REAL_ESTATE = { residentialClosing: 750, fsboRepresentation: 1500 } as const;

/**
 * The conversion clause. Required in every uncontested guardianship engagement
 * (adult and minor, now both flat-fee). If anyone objects, the matter converts
 * to hourly against a retainer and the UNEARNED portion of the flat fee is
 * credited toward that retainer, held in the client trust account until earned.
 *
 * NOTE: this protects against a FORMAL objection or competing petition — the
 * event that flips an uncontested flat-fee matter into contested litigation.
 */
export const CONVERSION_CLAUSE =
  'This flat fee covers an uncontested proceeding. If any person files an objection, ' +
  'an appearance in opposition, or a competing petition, the matter converts to contested ' +
  'representation billed hourly against a retainer, and the flat fee paid to date is ' +
  'credited against that retainer.';

/** Court-approval disclosure. 755 ILCS 5/27-2; ISBA Ethics Op. 13-01. */
export const COURT_APPROVAL_DISCLOSURE =
  'Where attorney fees are paid from a ward’s estate or a decedent’s estate, Illinois law ' +
  'requires that those fees be reasonable and approved by the court (755 ILCS 5/27-2). Fees paid ' +
  'personally by a family member or other third party are governed by the engagement agreement.';

/* -------------------------------------------------------------------------- */

/** 3500 -> "$3,500" */
export function usd(n: number): string {
  return `$${n.toLocaleString('en-US')}`;
}
/** 450 -> "$450 / hour" */
export function hourly(n: number): string {
  return `${usd(n)} / hour`;
}
/** 1500, 2500 -> "$1,500–$2,500" */
export function usdRange(low: number, high: number): string {
  return `${usd(low)}–${usd(high)}`;
}
/** Standard contested-matter pricing label. */
export function retainerLabel(retainer: number): string {
  return `${usd(retainer)} retainer + hourly`;
}

/**
 * PAYMENT ROUTING. An unearned retainer is client money (RPC 1.15) and must be
 * collected into the client trust account via LawPay — never Stripe. Flat,
 * earned-on-completion fees stay on Stripe. Never wire Stripe checkout for a
 * retainer_hourly service; route it to LawPay/trust.
 */
export const PAYMENT_METHOD = {
  lawpay_trust: 'Paid via LawPay (client trust)',
  stripe: 'Paid via Stripe',
} as const;
export type PaymentMethod = keyof typeof PAYMENT_METHOD;

/** retainer_hourly -> LawPay/trust; every flat model -> Stripe. */
export function paymentMethodFor(billingModel: BillingModel): PaymentMethod {
  return billingModel === 'retainer_hourly' ? 'lawpay_trust' : 'stripe';
}

export const PRICING = {
  RATES,
  RETAINERS,
  RETAINER_FLOORS,
  GUARDIANSHIP_FLAT,
  GUARDIANSHIP_COMPLIANCE,
  GUARDIANSHIP_COSTS,
  PROBATE,
  ESTATE_PLANNING,
  A_LA_CARTE,
  TRUST_ADMIN,
  REAL_ESTATE,
} as const;
