/**
 * ============================================================================
 * CANONICAL PRICING SOURCE OF TRUTH — Illinois Estate Law
 * ============================================================================
 *
 * EVERY price the firm charges lives HERE and ONLY here. No page, component,
 * schema block, llms.txt entry, county page, comparison table, portal surface,
 * or CSA may hardcode a dollar figure. They all import from this file.
 *
 * Current requested pricing: adult and minor guardianship use a $5,000 retainer
 * with hourly billing. Standard probate and the large-estate base are $5,500.
 * Trust Administration Consulting is $3,500 per year. Existing contested event
 * fees and discrete service prices are unchanged pending scope confirmation.
 * The retainer is not a fixed total fee. Rates and replenishment terms belong
 * in the written engagement; no statewide hourly-billing mandate is asserted.
 */

export type BillingModel = 'flat_all_inclusive' | 'flat_staged' | 'flat_annual';

export const BILLING_MODEL_LABEL: Record<BillingModel, string> = {
  flat_all_inclusive: 'Fixed legal fee (listed third-party costs excluded)',
  flat_staged: 'Starts with a flat fee (additional event-based flat fees may apply)',
  flat_annual: 'Flat annual fee',
};

/**
 * Legacy internal hourly-rate references. These are not public package prices.
 *
 * 755 ILCS 5/27-2: where fees are paid from a ward's or decedent's estate the
 * COURT determines reasonable compensation. Contemporaneous time records are the
 * evidentiary basis of the fee, not a billing convenience.
 */
export const RATES = {
  /**
   * Retained for historical compatibility with internal code and tests. Public
   * contested-package copy must use CONTESTED and CONTESTED_FEE_NOTE below.
   */
  attorneyHourly: 425,
  /** Confirmed 2026-08-06 (StaffPortal PR #345) and unchanged. */
  paralegalHourly: 175,
} as const;

/**
 * Legacy compatibility aliases. Do not use these values in public package copy;
 * use CONTESTED below, which reflects the firm's staged flat-fee model.
 */
export const RETAINERS = {
  /** Contested guardianship — competing petition, objection, removal. */
  contestedGuardianship: 5000,
  /** Contested probate / will contests / estate litigation. */
  contestedProbate: 5000,
} as const;

/** Public contested-matter pricing. Kept separate from legacy retainer constants. */
export const CONTESTED = {
  probateInitialFlatFee: 5500,
  guardianshipInitialFlatFee: 5000,
} as const;

export type ContestedEventFee = {
  id: string;
  label: string;
  amount: number;
  unit?: string;
  trigger: string;
};

/**
 * Public additional flat fees for contested matters, ordered from least to most
 * expensive. A listed fee is triggered by the event described; it is not charged
 * merely because a case is contested and is not stacked on work already included
 * in a broader accepted phase.
 */
export const CONTESTED_EVENT_FEES: readonly ContestedEventFee[] = [
  { id: 'subpoena', label: 'Subpoena', amount: 750, unit: 'per recipient', trigger: 'A subpoena is prepared and issued.' },
  { id: 'nonroutine-unopposed-motion', label: 'Nonroutine Unopposed Motion', amount: 1250, trigger: 'A substantive motion is required and no party opposes it.' },
  { id: 'discovery-citation', label: 'Discovery Citation', amount: 3500, unit: 'per respondent', trigger: 'A citation proceeding is initiated against a person or institution.' },
  { id: 'deposition', label: 'Deposition', amount: 3500, unit: 'per deposition', trigger: 'Preparation and attendance for one deposition lasting up to four hours.' },
  { id: 'contested-motion', label: 'Contested Motion', amount: 3500, trigger: 'Briefing and argument are required on a contested, non-dispositive motion.' },
  { id: 'mediation', label: 'Mediation', amount: 3500, trigger: 'Preparation for and attendance at one mediation session; mediator fees are separate.' },
  { id: 'initial-contested-scope', label: 'Initial Contested Matter Scope', amount: 5000, trigger: 'Contested representation begins. Covers initial review, appearance, strategy, and case planning—not the entire contest.' },
  { id: 'written-discovery', label: 'Written Discovery Phase', amount: 5000, trigger: 'Interrogatories, document requests, or requests to admit are served or answered.' },
  { id: 'extended-expert-deposition', label: 'Extended or Expert Deposition', amount: 5000, unit: 'per deposition', trigger: 'A deposition exceeds four hours or involves an expert witness; expert fees are separate.' },
  { id: 'dispositive-motion', label: 'Dispositive Motion', amount: 5000, trigger: 'A motion to dismiss, summary judgment motion, or comparable case-dispositive motion is prepared or defended.' },
  { id: 'evidentiary-hearing', label: 'Evidentiary Hearing', amount: 5000, unit: 'per hearing day', trigger: 'Witness testimony or evidence is presented outside the final trial.' },
  { id: 'additional-trial-day', label: 'Additional Will Contest Trial Day', amount: 5000, unit: 'per day', trigger: 'A will-contest trial continues beyond the first three trial days included in the trial phase.' },
  { id: 'formal-proof-will', label: 'Formal Proof of Will', amount: 5500, trigger: 'An interested person demands formal proof of the will.' },
  { id: 'contested-creditor-claim', label: 'Contested Creditor Claim', amount: 10000, trigger: 'A creditor claim requires an evidentiary dispute or trial.' },
  { id: 'contested-accounting', label: 'Contested Accounting', amount: 12500, trigger: 'An estate or trust accounting is formally challenged.' },
  { id: 'will-trust-construction', label: 'Will or Trust Construction', amount: 12500, trigger: 'Court interpretation of a will or trust becomes necessary.' },
  { id: 'contested-heirship', label: 'Contested Heirship', amount: 15000, trigger: 'Competing or disputed heirship claims require litigation.' },
  { id: 'asset-recovery-title-citation', label: 'Asset Recovery or Title Citation', amount: 20000, trigger: 'Litigation is required to recover estate property or determine title.' },
  { id: 'full-will-contest-pretrial', label: 'Full Will Contest — Pretrial Litigation', amount: 25000, trigger: 'A will contest proceeds beyond initial pleadings into full pretrial litigation. Covers pleadings, case management, standard written discovery, and pretrial conferences; depositions, experts, mediation, and trial are separate.' },
  { id: 'will-contest-trial', label: 'Will Contest Trial Preparation and Trial', amount: 25000, trigger: 'The court sets the will contest for trial. Covers motions in limine, witness and exhibit preparation, pretrial submissions, and the first three trial days.' },
  { id: 'fiduciary-removal-surcharge', label: 'Fiduciary Removal or Surcharge', amount: 25000, trigger: 'Removal, breach-of-duty, or surcharge litigation begins.' },
] as const;

export const CONTESTED_CUSTOM_FEE = {
  label: 'Appeal',
  price: 'Individually quoted flat fee',
  trigger: 'A notice of appeal is filed or appellate representation is requested.',
} as const;

export const CONTESTED_GUARDIANSHIP_FEE_NOTE =
  'Starts with a $5,000 flat fee for the initial contested scope—not the entire contest. Contested cases may incur additional flat fees only when listed litigation events actually occur. Each additional scope and fee is explained in writing before it is incurred.';

/** Prospective probate scope only; existing signed engagements are honored. */
export const CONTESTED_PROBATE_FEE_NOTE =
  `Starts with a ${usd(CONTESTED.probateInitialFlatFee)} flat fee for the initial contested probate scope, not the entire contest. Existing signed engagements are honored. Additional event fees are unchanged and apply only when the listed event occurs under a separate written scope. Work included in the initial scope is not charged again as an initial-contested-scope event fee.`;

/** Mixed-practice surfaces must distinguish probate from guardianship. */
export const CONTESTED_FEE_NOTE =
  `Contested probate starts with ${usd(CONTESTED.probateInitialFlatFee)}; contested guardianship starts with ${usd(CONTESTED.guardianshipInitialFlatFee)}. Each flat fee covers a defined initial scope, not the entire contest. Additional flat fees apply only when listed litigation events occur and are explained in writing before they are incurred.`;

/** Legacy compatibility values. Not part of the public contested-package offer. */
export const RETAINER_FLOORS = {
  contestedGuardianship: 2500,
  contestedProbate: 2500,
} as const;

/** Adult and minor guardianship retainers; hourly billing, not fixed total fees. */
export const GUARDIANSHIP_RETAINER = {
  adultUncontested: 5000,
  minorUncontested: 5000,
} as const;

/** Approved rates for new hourly adult and minor guardianship engagements only. */
export const GUARDIANSHIP_RATES = {
  guardianshipAttorneyHourly: 325,
  guardianshipParalegalHourly: 150,
} as const;

export const GUARDIANSHIP_HOURLY_NOTE =
  `New hourly adult and minor guardianship engagements are billed at ${usd(GUARDIANSHIP_RATES.guardianshipAttorneyHourly)} per attorney hour and ${usd(GUARDIANSHIP_RATES.guardianshipParalegalHourly)} per paralegal hour. Existing signed engagements are honored.`;

/** Existing discrete guardianship fees; emergency add-on policy needs review. */
export const GUARDIANSHIP_FLAT = {
  /** Priority temporary-guardianship petition and hearing added to a full adult guardianship. */
  emergencyTemporaryAddOn: 2500,
  interimPetition: 1500,
  terminationUncontested: 2000,
} as const;

/** Public timing promise for the emergency/rush adult-guardianship package. */
export const EMERGENCY_GUARDIANSHIP_FILING_TIMELINE =
  'Includes filing of the emergency motion and temporary-guardianship petition during the same calendar week when purchased by Tuesday.';

/**
 * Annual guardianship compliance (flat_annual). LOCKED. The recurring-revenue
 * line — mandatory, court-required, on a file the firm already holds, and the
 * client cannot opt out.
 *
 *   - Annual Report on the Ward: 755 ILCS 5/11a-17(b). $750 per year, every year
 *     the guardianship continues. Portal-templated; highest margin service in the
 *     firm. This is a RECURRING charge and is billed separately from hourly legal work — say so
 *     wherever the uncontested guardianship retainer is quoted.
 *   - Annual Estate Accounting: 755 ILCS 5/24-11. NOT automated — assembling the
 *     evidence for every disbursement is real paralegal time.
 */
export const GUARDIANSHIP_COMPLIANCE = {
  annualReportPerson: 750,
  annualAccountingEstate: 2500,
  compliancePlanBundled: 3000,
} as const;

/**
 * Third-party pass-through / billable costs. NOT firm revenue.
 * These may be separate third-party costs when applicable. Disclose always.
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
  /** Small Estate Administration: small estate affidavit + attorney letter of
   *  direction. Replaces the retired $3,500 'Small Estate Probate' package and
   *  the retired standalone Small Estate Affidavit. Mary 2026-09-08. */
  smallEstateAdministration: 1000,
  standard: 5500,
  /** Additional percentage charged during administration only when estate value exceeds $4,000,000 due to estate-tax complexity. */
  largeEstateBase: 5500,
  largeEstatePercent: 0.5,
  largeEstateThreshold: 4000000,
  reopening: 2500,
  heirRepresentation: 2500,
  spousalRepresentation: 4500,
  partialProbate: 3500,
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
  diyReviewIndividual: 750,
  diyReviewJoint: 1000,
  estateTaxPackageIndividual: 15000,
  estateTaxPackageJoint: 20000,
  /** Standalone advanced-trust services. */
  medicaidAssetProtectionTrust: 6500,
  irrevocableLifeInsuranceTrust: 5500,
  /** Legacy compatibility value for other advanced irrevocable-trust references. */
  irrevocableTrust: 5500,
  annualReviewMembership: 599,
} as const;

/** A la carte — unchanged. */
export const A_LA_CARTE = {
  revocableTrustIndividual: 2500,
  revocableTrustJoint: 3500,
  willIndividual: 750,
  willJoint: 1250,
  powersOfAttorneyIndividual: 500,
  powersOfAttorneyJoint: 750,
  healthcareDirective: 350,
  trustRestatementIndividual: 2000,
  trustRestatementJoint: 3000,
  willAmendmentIndividual: 500,
  willAmendmentJoint: 750,
  trustFundingGuidance: 1500,
  specialNeedsPlanning: 5500,
  estateTaxPlanningAddOn: 5000,
  deed: 500,
} as const;

/** Annual consulting; existing ten-hour scope retained. */
export const TRUST_ADMIN = { consultingAnnual: 3500 } as const;

/** Real estate — three public flat-fee structures. */
export const REAL_ESTATE = {
  saleRepresentation: 750,
  fsboRepresentation: 1500,
  bondInLieuOfProbate: 1500,
} as const;

/**
 * The conversion clause. Required in every uncontested guardianship engagement
 * (adult and minor, billed hourly). If anyone objects, the matter moves to
 * a separate contested-matter scope beginning with the contested flat fee.
 *
 * NOTE: this protects against a FORMAL objection or competing petition — the
 * event that moves an uncontested matter into contested litigation.
 */
export const CONVERSION_CLAUSE =
  'This hourly engagement covers an uncontested proceeding. If any person files an objection, ' +
  'an appearance in opposition, or a competing petition, the matter becomes contested. ' +
  'Contested representation starts with a $5,000 flat fee for a defined initial scope. If listed litigation events occur, ' +
  'additional flat fees may apply under the written engagement agreement and will be explained before they are incurred.';

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
  return `Starts with a ${usd(retainer)} flat fee`;
}

/**
 * PAYMENT ROUTING. Standard flat-fee matters use Stripe. Staged contested
 * matters retain the firm's existing LawPay routing until the intake and
 * accounting policy is updated separately.
 */
export const PAYMENT_METHOD = {
  lawpay_trust: 'Paid via LawPay (client trust)',
  stripe: 'Paid via Stripe',
} as const;
export type PaymentMethod = keyof typeof PAYMENT_METHOD;

/** Staged contested matter -> LawPay; other flat models -> Stripe. */
export function paymentMethodFor(billingModel: BillingModel): PaymentMethod {
  return billingModel === 'flat_staged' ? 'lawpay_trust' : 'stripe';
}

export const PRICING = {
  RATES,
  RETAINERS,
  CONTESTED,
  RETAINER_FLOORS,
  GUARDIANSHIP_RETAINER,
  GUARDIANSHIP_RATES,
  GUARDIANSHIP_FLAT,
  GUARDIANSHIP_COMPLIANCE,
  GUARDIANSHIP_COSTS,
  PROBATE,
  ESTATE_PLANNING,
  A_LA_CARTE,
  TRUST_ADMIN,
  REAL_ESTATE,
} as const;

