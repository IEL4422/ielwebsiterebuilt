/**
 * ============================================================================
 * CANONICAL PRICING SOURCE OF TRUTH — Illinois Estate Law
 * ============================================================================
 *
 * EVERY price the firm charges lives HERE and ONLY here.
 *
 * Nothing else in this repo — no page, no component, no schema block, no
 * llms.txt entry, no county page, no comparison table — may hardcode a dollar
 * figure. They all import from this file. The staff portal and the Client
 * Service Agreement read from this file too (see PROPAGATION below).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Before this file existed, the same service was priced differently in
 * different places at the same time. Real examples found in this repo on
 * 2026-07-14:
 *
 *   - lib/services-data.ts `contested-probate`: the `description` field said
 *     "$400/hour" while the `includes` array on the SAME OBJECT said
 *     "$350 / hour". Both were live.
 *   - app/probate/[slug]-county/page.tsx hardcoded "Surviving Spouse $5,000"
 *     while services-pricing said Spousal Representation was $3,500.
 *   - The `StandardizedServiceName` union still carried "Probate (Tier 1..4)",
 *     packages the firm does not sell.
 *
 * A law firm quoting two different fees for one service in two public places is
 * not a formatting problem. Single source. No exceptions.
 *
 * HOW TO CHANGE A PRICE
 * ---------------------
 * Edit the number here. That is the whole procedure.
 *
 * PROPAGATION — everything downstream of this file
 * ------------------------------------------------
 *   website  → lib/services-data.ts, lib/guardianship-data.ts,
 *              app/services-pricing, app/compare-packages, app/probate/**,
 *              app/contested-probate/**, app/guardianship/**,
 *              public/llms.txt, app/illinois-estate-law-answers
 *   portal   → portal repo: shop, get-started, service types, package defs
 *   CSA      → Client Service Agreement fee schedule (coordinate with PR #151)
 *   intake   → Intake Specialist Guide (services + fees quick reference)
 *
 * ⚠️  APPROVAL STATUS
 * -------------------
 * Prices marked PENDING below are RECOMMENDATIONS from the July 2026 fee
 * research and have NOT been approved by Mary. They are already wired through
 * the whole site, so approving them is a one-number edit here.
 * See: IEL-Guardianship-Contested-Probate-Pricing-Recommendation.md
 *
 * Anything not marked PENDING is a currently-live, already-approved price.
 * ============================================================================
 */

export type PriceStatus = 'live' | 'pending-approval';

/**
 * Hourly rates. Used for every contested / litigated matter.
 *
 * NOTE (755 ILCS 5/27-2): in supervised estate administration and in
 * guardianship matters, the COURT determines what compensation is reasonable.
 * These rates are what the firm CHARGES; what the firm ultimately COLLECTS out
 * of a decedent's or ward's estate is subject to court approval. Contemporaneous
 * time records are therefore mandatory on every hourly matter — they are the
 * evidentiary basis of the fee, not a billing convenience.
 */
export const RATES = {
  /** PENDING — recommended raise from the currently-live $400. */
  attorneyHourly: 450,
  /** PENDING — recommended raise from the currently-live $150. */
  paralegalHourly: 175,
} as const;

export const RATES_STATUS: Record<keyof typeof RATES, PriceStatus> = {
  attorneyHourly: 'pending-approval',
  paralegalHourly: 'pending-approval',
};

/** Currently-live rates, kept only so we can show Mary the diff. Delete after approval. */
export const RATES_CURRENTLY_LIVE = {
  attorneyHourly: 400,
  paralegalHourly: 150,
} as const;

/**
 * Retainers for contested matters.
 *
 * ⚠️  TRUST ACCOUNTING: a retainer is CLIENT MONEY. Under Illinois RPC 1.15 it
 * must be deposited in the firm's IOLTA trust account, ledgered per client, and
 * may not be moved to operating until it is earned by work actually performed
 * and billed, with the bill delivered to the client first. Do not accept a
 * retainer until the IOLTA account and per-client trust ledger are live.
 */
export const RETAINERS = {
  /** PENDING — recommended raise from the currently-live $5,000. */
  contestedProbate: 7500,
  /** PENDING — new. GAL, physician evidence, possible jury demand. */
  contestedGuardianship: 7500,
} as const;

export const RETAINERS_STATUS: Record<keyof typeof RETAINERS, PriceStatus> = {
  contestedProbate: 'pending-approval',
  contestedGuardianship: 'pending-approval',
};

export const RETAINERS_CURRENTLY_LIVE = {
  contestedProbate: 5000,
} as const;

/**
 * Guardianship flat fees. All PENDING — new practice area.
 *
 * Flat because the scope of an UNCONTESTED guardianship petition is knowable:
 * investigate, draft, file, serve, coordinate with the GAL, appear, get
 * appointed, take out Letters of Office. A finite list of documents and a finite
 * list of appearances.
 *
 * The moment anyone objects it stops being knowable, because the scope is then
 * set by the opposing party. See CONVERSION_CLAUSE.
 */
export const GUARDIANSHIP = {
  minorUncontested: 3500,
  adultPersonUncontested: 4500,
  adultEstateUncontested: 5500,
  adultPersonAndEstateUncontested: 6500,
  terminationUncontested: 2000,
  interimPetition: 1500,
} as const;

/**
 * Annual guardianship compliance — the recurring revenue line.
 *
 * Illinois guardians are under STANDING, COURT-SUPERVISED reporting duties for
 * the entire life of the guardianship. Mandatory, calendar-driven, and the
 * client cannot opt out — the court requires the filing.
 *
 *   - Guardian of the PERSON, 755 ILCS 5/11a-17(b): annual report on the ward.
 *   - Guardian of the ESTATE, 755 ILCS 5/24-11: accounting due within 30 days of
 *     the ONE-YEAR anniversary of appointment, then every three years unless the
 *     court orders otherwise, and again within 30 days of termination. The
 *     guardian BEARS THE BURDEN of proving every disbursement was proper.
 *
 * Sell this at intake, not two years later when the client gets a court notice.
 */
export const GUARDIANSHIP_COMPLIANCE = {
  annualReportPerson: 750,
  annualAccountingEstate: 1500,
  compliancePlanBundled: 1950,
} as const;

/**
 * Third-party pass-through costs. NOT firm revenue. Disclose in every quote.
 *
 * A GAL fee that surfaces after the client has already paid a flat fee is the
 * single most predictable complaint in this practice area.
 */
export const GUARDIANSHIP_PASSTHROUGH = {
  galFeeLow: 1500,
  galFeeHigh: 2500,
  galHourlyLow: 225,
  galHourlyHigh: 275,
  filingPersonOnly: 50,
  filingEstateUnder15k: 70,
  filingEstateOver15k: 105,
  /**
   * Minor guardianship filing + appearance fees were ELIMINATED by Illinois
   * Supreme Court amendment to M.R. Order 29741, effective October 1, 2025.
   */
  filingMinorGuardianship: 0,
} as const;

/** Probate flat fees — currently live and approved. */
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

/** Estate planning — currently live and approved. */
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

/** A la carte — currently live and approved. */
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
  /** Any deed: quitclaim, TODI, life estate, additional transfer to trust. Recording included. */
  deed: 500,
} as const;

/** Trust administration — currently live and approved. */
export const TRUST_ADMIN = {
  consultingAnnual: 3500,
} as const;

/** Prenuptial agreements — currently live and approved. */
export const PRENUP = {
  draftingAndNegotiation: 5000,
  reviewAndNegotiation: 3500,
  draftingOnly: 2500,
  reviewOnly: 1500,
} as const;

/** Real estate — currently live and approved. */
export const REAL_ESTATE = {
  residentialClosing: 750,
  fsboRepresentation: 1500,
} as const;

/**
 * The single most important sentence in any uncontested guardianship engagement.
 *
 * Without it, a flat fee on a guardianship that turns contested is how a firm
 * loses money: the opposing party sets the scope, and the firm has already
 * agreed to a fixed price for unlimited work. With it, the firm gets the
 * marketing benefit of the flat fee and none of the downside.
 */
export const CONVERSION_CLAUSE =
  'This flat fee covers an uncontested proceeding. If any person files an objection, ' +
  'an appearance in opposition, or a competing petition, the matter converts to contested ' +
  'representation billed hourly against a retainer, and the flat fee paid to date is ' +
  'credited against that retainer.';

/**
 * Court-approval disclosure. Required wherever a guardianship or estate-paid fee
 * is quoted. 755 ILCS 5/27-2; ISBA Ethics Op. 13-01.
 */
export const COURT_APPROVAL_DISCLOSURE =
  'Where attorney fees are paid from a ward’s estate or a decedent’s estate, Illinois law ' +
  'requires that those fees be reasonable and approved by the court (755 ILCS 5/27-2). Fees paid ' +
  'personally by a family member or other third party are governed by the engagement agreement. ' +
  'We will tell you which applies to your matter before you engage us.';

/* ---------------------------------------------------------------------------
 * Formatting helpers. Use these everywhere so currency renders identically
 * across the site, the portal, and the CSA.
 * ------------------------------------------------------------------------- */

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

/** The standard contested-matter pricing label, built from the canonical numbers. */
export function retainerLabel(retainer: number): string {
  return `${usd(retainer)} retainer + hourly`;
}

/** Everything, for the pricing guard and the intake-guide generator. */
export const PRICING = {
  RATES,
  RETAINERS,
  GUARDIANSHIP,
  GUARDIANSHIP_COMPLIANCE,
  GUARDIANSHIP_PASSTHROUGH,
  PROBATE,
  ESTATE_PLANNING,
  A_LA_CARTE,
  TRUST_ADMIN,
  PRENUP,
  REAL_ESTATE,
} as const;
