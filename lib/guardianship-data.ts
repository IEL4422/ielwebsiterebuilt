import {
  RATES,
  RETAINERS,
  GUARDIANSHIP,
  GUARDIANSHIP_COMPLIANCE,
  GUARDIANSHIP_PASSTHROUGH,
  CONVERSION_CLAUSE,
  usd,
  usdRange,
  hourly,
  retainerLabel,
} from './pricing';

/**
 * Structurally identical to the `Service` interface in lib/services-data.ts.
 *
 * Declared locally, on purpose. This file must compile and be usable WITHOUT
 * modifying services-data.ts, so the guardianship practice area can be built,
 * reviewed and previewed independently of the services-data.ts rewiring (which
 * also carries the drift fixes and therefore needs its own review).
 *
 * FOLLOW-UP: once services-data.ts is rewired, delete this local interface and
 * `import type { Service } from './services-data'` instead. The shapes are
 * identical, so that is a one-line change. Until then, do not let these two
 * definitions diverge — a `Service` type that means two different things in two
 * files is the same class of bug this config exists to kill.
 */
export interface GuardianshipService {
  id: string;
  name: string;
  subtitle?: string;
  category: 'guardianship';
  standardizedCaseType: 'Guardianship';
  standardizedServiceName: string;
  fixedPrice?: number;
  pricingLabel?: string;
  requiresConsultation?: boolean;
  description: string;
  includes: string[];
  note?: string;
  addOns?: Array<{
    id: string;
    name: string;
    price: number;
    isSubscription?: boolean;
    description: string;
  }>;
}

/**
 * Guardianship services — adult and minor, contested and uncontested.
 *
 * Every price here comes from lib/pricing.ts. Do not hardcode a number in this
 * file. See the header of lib/pricing.ts for why.
 *
 * ── The structural logic of this practice area ──────────────────────────
 *
 * Guardianship is not one service. It is three, and they have completely
 * different cost structures, which is why they are priced three different ways:
 *
 *   1. THE PETITION (uncontested). Investigate, draft, file, serve, coordinate
 *      with the guardian ad litem, appear, get appointed, take out Letters of
 *      Office. When nobody objects this is one of the most PREDICTABLE matters
 *      in probate practice. FLAT FEE.
 *
 *   2. THE FIGHT (contested). Someone objects: a sibling, the respondent, the
 *      other parent, a competing petitioner. The scope of the work is now set by
 *      the OPPOSING PARTY, not by us. You cannot price what you do not control.
 *      HOURLY AGAINST A REPLENISHING RETAINER.
 *
 *   3. THE REST OF THE WARD'S LIFE (ongoing compliance). Illinois guardians are
 *      under standing, court-supervised reporting duties for the entire life of
 *      the guardianship. Mandatory, calendar-driven, and the client cannot opt
 *      out — the court requires the filing. ANNUAL FLAT FEE.
 *
 * The common mistake is to reason "guardianship is ongoing and unpredictable,
 * therefore bill it hourly." That over-corrects: it makes the knowable part (the
 * petition) feel risky to the client, and it leaves the genuinely valuable
 * recurring part (annual compliance) unpriced and given away.
 */

const galDisclosure =
  `The guardian ad litem (GAL) fee is a third-party court cost and is NOT included in this flat fee. ` +
  `In Cook County a GAL is appointed in all estate guardianships, and in person-guardianships that may ` +
  `result in physical intrusion or a denial of rights. GAL fees typically run ${usdRange(
    GUARDIANSHIP_PASSTHROUGH.galFeeLow,
    GUARDIANSHIP_PASSTHROUGH.galFeeHigh,
  )} ` +
  `(commonly ${usd(GUARDIANSHIP_PASSTHROUGH.galHourlyLow)}–${usd(GUARDIANSHIP_PASSTHROUGH.galHourlyHigh)} per hour). ` +
  `We will tell you what to expect before you engage us.`;

const uncontestedIncludes = (subject: string) => [
  `Initial consultation and assessment of whether guardianship is actually the right tool for ${subject}`,
  'Preparation and filing of the Petition for Appointment of Guardian',
  'Preparation of all required supporting documentation and court forms',
  'Service of process and notice on every person entitled to notice under the Probate Act',
  'Coordination with the court-appointed guardian ad litem',
  'Appearance at all hearings in an uncontested proceeding',
  'Entry of the Order Appointing Guardian and issuance of Letters of Office',
  "Guidance on the guardian's duties, powers, and reporting obligations once appointed",
  'Unlimited attorney consultations through appointment',
];

export const guardianshipServices: GuardianshipService[] = [
  /* ---------------------------------------------------------------- MINOR */
  {
    id: 'minor-guardianship-uncontested',
    name: 'Minor Guardianship — Uncontested',
    subtitle: 'Guardianship of a child under 18',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Minor Guardianship - Uncontested',
    fixedPrice: GUARDIANSHIP.minorUncontested,
    description:
      'For a grandparent, relative, family friend, or other adult seeking to be appointed guardian of a minor child in Illinois — because the parents are unable to care for the child, are deceased, or consent to the arrangement. Uncontested matters only: no objecting parent, no competing petition.',
    includes: [
      ...uncontestedIncludes('the child'),
      'Preparation of the parental consent or, where a parent does not consent, the showing Illinois law requires',
      'Short-term and standby guardianship options discussed where they fit better than full guardianship',
    ],
    note: `Illinois Supreme Court order M.R. 29741 eliminated filing and appearance fees in minor guardianship cases effective October 1, 2025, so there is no court filing fee to pass through to you. ${CONVERSION_CLAUSE}`,
    addOns: [],
  },

  /* ---------------------------------------------------------------- ADULT */
  {
    id: 'adult-guardianship-person-uncontested',
    name: 'Adult Guardianship of the Person — Uncontested',
    subtitle: 'Authority over care, placement, and medical decisions',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Adult Guardianship of the Person - Uncontested',
    fixedPrice: GUARDIANSHIP.adultPersonUncontested,
    description:
      'For a family member seeking authority to make personal, medical, and residential decisions for an adult who can no longer make them — typically a parent with dementia, an adult child with a developmental disability, or a spouse after a catastrophic injury. Guardianship of the person does not carry authority over money or property; that is guardianship of the estate.',
    includes: [
      ...uncontestedIncludes('your loved one'),
      "Coordination of the physician's report (Form CCP 0211 in Cook County) required to establish disability",
      'Advice on whether a less restrictive alternative — an existing power of attorney, or a supported decision-making arrangement — would avoid the need for guardianship entirely',
    ],
    note: galDisclosure + ' ' + CONVERSION_CLAUSE,
    addOns: [],
  },
  {
    id: 'adult-guardianship-estate-uncontested',
    name: 'Adult Guardianship of the Estate — Uncontested',
    subtitle: 'Authority over money, property, and finances',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Adult Guardianship of the Estate - Uncontested',
    fixedPrice: GUARDIANSHIP.adultEstateUncontested,
    description:
      'For a family member seeking authority to manage the finances, income, benefits, and property of an adult with a disability. Guardianship of the estate carries real fiduciary exposure: the guardian must account to the court and bears the burden of proving that every disbursement was proper.',
    includes: [
      ...uncontestedIncludes('your loved one'),
      "Preparation of the initial inventory of the ward's estate",
      'Coordination of the surety bond required by the court',
      'Setup guidance for the guardianship estate account and for record-keeping that will survive an accounting',
    ],
    note:
      galDisclosure +
      ' Surety bond premium is paid directly to the bond provider and is NOT included in the flat fee. ' +
      CONVERSION_CLAUSE,
    addOns: [],
  },
  {
    id: 'adult-guardianship-person-and-estate-uncontested',
    name: 'Adult Guardianship of the Person and Estate — Uncontested',
    subtitle: 'Full guardianship: care decisions and financial authority',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Adult Guardianship of the Person and Estate - Uncontested',
    fixedPrice: GUARDIANSHIP.adultPersonAndEstateUncontested,
    description:
      'Full guardianship of both the person and the estate of an adult with a disability — authority over care, placement, and medical decisions together with authority over money and property. This is the most common form of adult guardianship where the ward has assets.',
    includes: [
      ...uncontestedIncludes('your loved one'),
      "Coordination of the physician's report required to establish disability",
      "Preparation of the initial inventory of the ward's estate",
      'Coordination of the surety bond required by the court',
      'Setup guidance for the guardianship estate account and record-keeping',
    ],
    note:
      galDisclosure +
      ' Surety bond premium is paid directly to the bond provider and is NOT included in the flat fee. ' +
      CONVERSION_CLAUSE,
    addOns: [],
  },

  /* ------------------------------------------------------------ CONTESTED */
  {
    id: 'contested-guardianship',
    name: 'Contested Guardianship',
    subtitle: 'NOT A FLAT FEE — Hourly Billing Against a Retainer',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Contested Guardianship',
    pricingLabel: retainerLabel(RETAINERS.contestedGuardianship),
    description: `Applies whenever a guardianship is opposed — the respondent objects to being found disabled, a sibling files a competing petition, a parent contests a minor guardianship, or an existing guardian faces a petition to remove them. Contested guardianship is litigation, and in litigation the opposing party sets the scope of the work. That is why nobody responsibly flat-fees it. Attorney rate ${hourly(RATES.attorneyHourly)}. Paralegal/administrative rate ${hourly(RATES.paralegalHourly)}.`,
    includes: [
      `Minimum ${usd(RETAINERS.contestedGuardianship)} retainer required to commence representation`,
      `Attorney hourly rate: ${hourly(RATES.attorneyHourly)}`,
      `Paralegal / administrative hourly rate: ${hourly(RATES.paralegalHourly)}`,
      'Representation of petitioners, objectors, respondents, or competing petitioners',
      'Contested hearings, discovery, medical and expert evidence, and trial where required',
      'Petitions to remove or surcharge an existing guardian',
      "Retainer held in the firm's IOLTA client trust account and drawn against only as fees are earned and billed",
      'Itemized bill delivered to you before any funds are transferred out of trust',
      'Retainer replenished as needed throughout the matter',
    ],
    note:
      "Where attorney fees are paid from the ward's estate, Illinois law requires that the fees be reasonable and approved by the court (755 ILCS 5/27-2; 755 ILCS 5/11a-18). " +
      galDisclosure,
    addOns: [],
  },

  /* ------------------------------------- ONGOING COMPLIANCE (RECURRING REVENUE) */
  {
    id: 'guardianship-compliance-plan',
    name: 'Guardianship Compliance Plan',
    subtitle: 'Annual reporting and accounting — person and estate',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Guardianship Compliance Plan',
    fixedPrice: GUARDIANSHIP_COMPLIANCE.compliancePlanBundled,
    description:
      "Being appointed guardian is the beginning, not the end. Illinois guardians must keep reporting to the court for as long as the guardianship lasts — and the guardian, personally, bears the burden of proving that every dollar spent was spent properly. This annual plan carries that burden for you: we prepare and file the annual report on the ward and the required estate accounting, on the court's schedule, every year.",
    includes: [
      "Annual Report on the Ward, prepared and filed (755 ILCS 5/11a-17(b)) — the ward's condition, living arrangements, services received, your activities as guardian, and the recommendation on continued guardianship",
      'Annual and triennial estate accounting, prepared and filed (755 ILCS 5/24-11) — all receipts and disbursements, with the supporting evidence the court expects',
      'Deadline tracking from the anniversary of your appointment, so you are never the person who finds out from a court notice',
      'Review of your records and guidance on what to keep and how, before it becomes an accounting problem',
      'Attorney consultations throughout the year on your duties as guardian',
    ],
    note: 'Billed annually. The estate accounting is due within 30 days of the one-year anniversary of appointment and, after that, on the schedule the court sets. Also available separately: the Annual Report on the Ward alone, and the estate accounting alone.',
    addOns: [],
  },
  {
    id: 'annual-report-on-ward',
    name: 'Annual Report on the Ward',
    subtitle: 'Guardian of the person — annual filing',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Annual Report on the Ward',
    fixedPrice: GUARDIANSHIP_COMPLIANCE.annualReportPerson,
    description:
      "Preparation and filing of the annual report on the ward required of a guardian of the person under 755 ILCS 5/11a-17(b), covering the ward's current mental, physical and social condition, their living arrangements, the services they have received, your activities as guardian, and your recommendation as to whether the guardianship should continue.",
    includes: [
      'Preparation of the annual report on the ward',
      'Filing with the court and service where required',
      'Attorney review of any issue the report surfaces',
    ],
    addOns: [],
  },
  {
    id: 'annual-guardianship-accounting',
    name: 'Annual Guardianship Estate Accounting',
    subtitle: 'Guardian of the estate — annual / triennial filing',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Annual Guardianship Estate Accounting',
    fixedPrice: GUARDIANSHIP_COMPLIANCE.annualAccountingEstate,
    description:
      'Preparation and filing of the estate accounting required of a guardian of the estate under 755 ILCS 5/24-11. The first accounting is due within 30 days of the one-year anniversary of your appointment; later accountings are due every three years unless the court sets a different schedule. The guardian bears the burden of proving that each disbursement was proper — this service builds that record for you.',
    includes: [
      'Preparation of the full accounting: all receipts, all disbursements, opening and closing balances',
      'Assembly of the supporting evidence the court expects for each disbursement',
      'Filing with the court and appearance at the hearing to approve the accounting',
      'Attorney review of any disbursement likely to draw a question from the court',
    ],
    addOns: [],
  },

  /* -------------------------------------------------------- DISCRETE PETITIONS */
  {
    id: 'guardianship-interim-petition',
    name: 'Guardianship Petition (Interim)',
    subtitle: 'Sale of real estate, extraordinary expenditure, change of placement',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Guardianship Interim Petition',
    fixedPrice: GUARDIANSHIP.interimPetition,
    description:
      "A guardian frequently needs the court's permission before acting — to sell the ward's home, to make an extraordinary expenditure, to change the ward's residential placement, or to modify the powers granted in the original order. Each is a discrete, knowable piece of work, priced per petition.",
    includes: [
      'Preparation and filing of the petition',
      'Notice to every person entitled to it',
      'Appearance at the hearing',
      'Entry of the order',
    ],
    note: `Uncontested petitions only. If the petition is opposed, it converts to contested representation billed hourly against a ${usd(RETAINERS.contestedGuardianship)} retainer.`,
    addOns: [],
  },
  {
    id: 'guardianship-termination',
    name: 'Guardianship Termination / Restoration of Rights',
    subtitle: 'Uncontested',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Guardianship Termination / Restoration - Uncontested',
    fixedPrice: GUARDIANSHIP.terminationUncontested,
    description:
      "Guardianship is meant to be the least restrictive arrangement that works, and it is not always permanent. When a ward recovers capacity, when a minor reaches majority, or when the circumstances that required guardianship have resolved, the guardianship should end — and the ward's rights should be restored. We handle the petition to terminate the guardianship and restore rights.",
    includes: [
      'Petition to terminate guardianship and/or restore rights',
      'Coordination of the supporting medical evidence where restoration of capacity is at issue',
      'Notice, hearing, and entry of the order',
      'Final accounting where a guardian of the estate is being discharged',
    ],
    note: CONVERSION_CLAUSE,
    addOns: [],
  },
];

/** Flat-fee, one-time guardianship engagements (petitions and discrete matters). */
export const guardianshipFlatFeeServices = guardianshipServices.filter(
  (s) => s.fixedPrice !== undefined && !s.id.startsWith('annual-') && s.id !== 'guardianship-compliance-plan',
);

/** The recurring-revenue line: annual court-required compliance work. */
export const guardianshipComplianceServices = guardianshipServices.filter(
  (s) => s.id.startsWith('annual-') || s.id === 'guardianship-compliance-plan',
);

/** Contested guardianship — hourly against a retainer. */
export const contestedGuardianshipService = guardianshipServices.find(
  (s) => s.id === 'contested-guardianship',
)!;
