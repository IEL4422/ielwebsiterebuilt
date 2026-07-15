import {
  RATES,
  RETAINERS,
  GUARDIANSHIP_FLAT,
  GUARDIANSHIP_COMPLIANCE,
  GUARDIANSHIP_COSTS,
  CONVERSION_CLAUSE,
  BillingModel,
  usd,
  usdRange,
  hourly,
  retainerLabel,
} from './pricing';

/**
 * Guardianship services — LOCKED to the approved 2026-07-14 schedule.
 *
 * Every price reads from lib/pricing.ts. Do not hardcode a number here.
 *
 * The lineup is deliberately small:
 *   FLAT (uncontested, narrow, low-variance): Minor guardianship; interim
 *     petitions; uncontested termination/restoration.
 *   RETAINER + HOURLY: Adult guardianship of the person and estate (its labor
 *     tail is not caught by the conversion clause), and all contested
 *     guardianship. Costs — including the GAL fee — are billable in these.
 *   FLAT ANNUAL: the court-required compliance work. This is the recurring
 *     revenue line and the best-margin work in the practice.
 */

export interface GuardianshipService {
  id: string;
  name: string;
  subtitle?: string;
  category: 'guardianship';
  billingModel: BillingModel;
  standardizedCaseType: 'Guardianship';
  standardizedServiceName: string;
  fixedPrice?: number;
  pricingLabel?: string;
  description: string;
  includes: string[];
  note?: string;
}

const galBillable =
  `The guardian ad litem (GAL) fee is a court-set, third-party cost. In a retainer matter it is ` +
  `billed to you as an expense, like any other cost of the case. In Cook County a GAL is appointed ` +
  `in every estate guardianship; GAL fees typically run ${usdRange(GUARDIANSHIP_COSTS.galFeeLow, GUARDIANSHIP_COSTS.galFeeHigh)} ` +
  `(commonly ${usd(GUARDIANSHIP_COSTS.galHourlyLow)}–${usd(GUARDIANSHIP_COSTS.galHourlyHigh)} per hour).`;

export const guardianshipServices: GuardianshipService[] = [
  /* --------------------------------------------------------- MINOR (FLAT) */
  {
    id: 'minor-guardianship-uncontested',
    name: 'Minor Guardianship — Uncontested',
    subtitle: 'Guardianship of a child under 18',
    category: 'guardianship',
    billingModel: 'flat_all_inclusive',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Minor Guardianship - Uncontested',
    fixedPrice: GUARDIANSHIP_FLAT.minorUncontested,
    description:
      'For a grandparent, relative, family friend, or other adult seeking to be appointed guardian of a minor child in Illinois — because the parents are unable to care for the child, are deceased, or consent to the arrangement. Uncontested matters only: no objecting parent, no competing petition.',
    includes: [
      'Initial consultation and assessment of whether guardianship is the right tool, or whether a short-term or standby guardianship fits better',
      'Preparation and filing of the Petition for Appointment of Guardian of a Minor',
      'All required consents, notices, orders, and Letters of Office',
      'Service and notice on the parents and all interested persons',
      'Appearance at the hearing (remote)',
      'Issuance of Letters of Office and a briefing on the guardian’s duties',
      'This flat fee is all-inclusive: there is no separate charge for court filing fees (which Illinois eliminated for minor guardianship on October 1, 2025), notice, or court costs',
    ],
    note: CONVERSION_CLAUSE,
  },

  /* ----------------------------------------------- ADULT (RETAINER + HOURLY) */
  {
    id: 'adult-guardianship',
    name: 'Adult Guardianship of the Person and Estate',
    subtitle: 'Billed hourly against a retainer — not a flat fee',
    category: 'guardianship',
    billingModel: 'retainer_hourly',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Adult Guardianship of the Person and Estate',
    pricingLabel: retainerLabel(RETAINERS.adultGuardianshipUncontested),
    description:
      `For a family member seeking authority to make personal, medical, and financial decisions for an adult who can no longer make them — typically a parent with dementia, an adult child with a developmental disability, or a spouse after a catastrophic injury. Adult guardianship is billed hourly against a ${usd(RETAINERS.adultGuardianshipUncontested)} retainer rather than a flat fee, because even an “uncontested” adult guardianship carries work we do not control: a physician’s report that has to be chased, a respondent who must be personally served, and a court-appointed guardian ad litem whose recommendations we must answer. Attorney ${hourly(RATES.attorneyHourly)}; paralegal ${hourly(RATES.paralegalHourly)}.`,
    includes: [
      `Minimum ${usd(RETAINERS.adultGuardianshipUncontested)} retainer to commence representation`,
      `Attorney hourly rate: ${hourly(RATES.attorneyHourly)}`,
      `Paralegal / administrative hourly rate: ${hourly(RATES.paralegalHourly)}`,
      'Assessment of less restrictive alternatives (existing power of attorney, supported decision-making) before petitioning',
      'Coordination of the physician’s report (CCP 0211 / CIC-2) required to establish disability',
      'Preparation and filing of the petition, personal service on the respondent, notice to interested persons, and the inventory and surety bond for the estate',
      'Guardian ad litem coordination and response to the GAL report',
      'Appearance at the hearing (remote) and issuance of Letters of Office',
      'Costs — including the GAL fee, filing fees, and the process server — are billed to you as expenses',
    ],
    note: galBillable,
  },
  {
    id: 'contested-guardianship',
    name: 'Contested Guardianship',
    subtitle: 'Billed hourly against a retainer',
    category: 'guardianship',
    billingModel: 'retainer_hourly',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Contested Guardianship',
    pricingLabel: retainerLabel(RETAINERS.contestedGuardianship),
    description:
      `Applies whenever a guardianship is opposed — the respondent objects to being found disabled, a sibling files a competing petition, a parent contests a minor guardianship, or an existing guardian faces removal. Contested guardianship is litigation, and the opposing party sets the scope of the work, so it is billed hourly against a ${usd(RETAINERS.contestedGuardianship)} retainer. Attorney ${hourly(RATES.attorneyHourly)}; paralegal ${hourly(RATES.paralegalHourly)}.`,
    includes: [
      `Minimum ${usd(RETAINERS.contestedGuardianship)} evergreen retainer to commence representation`,
      `Attorney hourly rate: ${hourly(RATES.attorneyHourly)}`,
      `Paralegal / administrative hourly rate: ${hourly(RATES.paralegalHourly)}`,
      'Representation of petitioners, objectors, respondents, or competing petitioners',
      'Contested hearings, discovery, medical and expert evidence, and trial where required',
      'Petitions to remove or surcharge an existing guardian',
      'Costs — GAL fees, filing fees, process server, transcripts — are billed to you as expenses',
    ],
    note:
      'Where attorney fees are paid from the ward’s estate, Illinois law requires that they be reasonable and approved by the court (755 ILCS 5/27-2; 755 ILCS 5/11a-18). ' +
      galBillable,
  },

  /* ------------------------------------ ANNUAL COMPLIANCE (FLAT ANNUAL) */
  {
    id: 'guardianship-compliance-plan',
    name: 'Guardianship Compliance Plan',
    subtitle: 'Annual reporting and accounting — person and estate',
    category: 'guardianship',
    billingModel: 'flat_annual',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Guardianship Compliance Plan',
    fixedPrice: GUARDIANSHIP_COMPLIANCE.compliancePlanBundled,
    description:
      'Being appointed guardian is the beginning, not the end. Illinois guardians must keep reporting to the court for as long as the guardianship lasts — and the guardian, personally, bears the burden of proving that every dollar spent was spent properly. This annual plan carries that burden for you: we prepare and file the annual report on the ward and the required estate accounting, on the court’s schedule, every year.',
    includes: [
      'Annual Report on the Ward, prepared and filed (755 ILCS 5/11a-17(b))',
      'Annual and triennial estate accounting, prepared and filed (755 ILCS 5/24-11), with the supporting evidence the court expects for every disbursement',
      'Deadline tracking from the anniversary of your appointment',
      'Attorney consultations throughout the year on your duties as guardian',
    ],
    note: `Billed annually. Also available separately: Annual Report on the Ward (${usd(GUARDIANSHIP_COMPLIANCE.annualReportPerson)}/yr) and Annual Estate Accounting (${usd(GUARDIANSHIP_COMPLIANCE.annualAccountingEstate)}/yr).`,
  },
  {
    id: 'annual-report-on-ward',
    name: 'Annual Report on the Ward',
    subtitle: 'Guardian of the person — annual filing',
    category: 'guardianship',
    billingModel: 'flat_annual',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Annual Report on the Ward',
    fixedPrice: GUARDIANSHIP_COMPLIANCE.annualReportPerson,
    description:
      'Preparation and filing of the annual report on the ward required of a guardian of the person under 755 ILCS 5/11a-17(b) — the ward’s condition, living arrangements, services received, your activities as guardian, and your recommendation as to whether the guardianship should continue.',
    includes: [
      'Preparation of the annual report on the ward',
      'Filing with the court and service where required',
      'Attorney review of any issue the report surfaces',
    ],
  },
  {
    id: 'annual-guardianship-accounting',
    name: 'Annual Guardianship Estate Accounting',
    subtitle: 'Guardian of the estate — annual / triennial filing',
    category: 'guardianship',
    billingModel: 'flat_annual',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Annual Guardianship Estate Accounting',
    fixedPrice: GUARDIANSHIP_COMPLIANCE.annualAccountingEstate,
    description:
      'Preparation and filing of the estate accounting required of a guardian of the estate under 755 ILCS 5/24-11. The first accounting is due within 30 days of the one-year anniversary of appointment; later accountings are due every three years unless the court sets a different schedule. The guardian bears the burden of proving each disbursement was proper — this service builds that record for you.',
    includes: [
      'Preparation of the full accounting: all receipts, all disbursements, opening and closing balances',
      'Assembly of the supporting evidence the court expects for each disbursement',
      'Filing with the court and appearance at the hearing to approve the accounting',
    ],
  },

  /* ---------------------------------------------- DISCRETE FLAT PETITIONS */
  {
    id: 'guardianship-interim-petition',
    name: 'Guardianship Petition (Interim)',
    subtitle: 'Sale of real estate, extraordinary expenditure, change of placement',
    category: 'guardianship',
    billingModel: 'flat_all_inclusive',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Guardianship Interim Petition',
    fixedPrice: GUARDIANSHIP_FLAT.interimPetition,
    description:
      'A guardian frequently needs the court’s permission before acting — to sell the ward’s home, make an extraordinary expenditure, change the ward’s placement, or modify the powers granted in the original order. Each is a discrete, knowable piece of work, priced per petition.',
    includes: [
      'Preparation and filing of the petition',
      'Notice to every person entitled to it',
      'Appearance at the hearing and entry of the order',
    ],
    note: `Uncontested petitions only. If opposed, it converts to hourly against a ${usd(RETAINERS.contestedGuardianship)} retainer.`,
  },
  {
    id: 'guardianship-termination',
    name: 'Guardianship Termination / Restoration of Rights',
    subtitle: 'Uncontested',
    category: 'guardianship',
    billingModel: 'flat_all_inclusive',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Guardianship Termination / Restoration - Uncontested',
    fixedPrice: GUARDIANSHIP_FLAT.terminationUncontested,
    description:
      'When a ward recovers capacity, a minor reaches majority, or the circumstances that required guardianship resolve, the guardianship should end and the ward’s rights should be restored. We handle the petition to terminate and restore rights.',
    includes: [
      'Petition to terminate guardianship and/or restore rights',
      'Coordination of supporting medical evidence where restoration of capacity is at issue',
      'Notice, hearing, and entry of the order',
    ],
    note: CONVERSION_CLAUSE,
  },
];

export const guardianshipFlatServices = guardianshipServices.filter(
  (s) => s.billingModel === 'flat_all_inclusive',
);
export const guardianshipRetainerServices = guardianshipServices.filter(
  (s) => s.billingModel === 'retainer_hourly',
);
export const guardianshipComplianceServices = guardianshipServices.filter(
  (s) => s.billingModel === 'flat_annual',
);
