import { A_LA_CARTE, ESTATE_PLANNING, GUARDIANSHIP_COMPLIANCE, PROBATE, RATES, REAL_ESTATE, RETAINERS, TRUST_ADMIN, usd, hourly } from './pricing';

export type StandardizedCaseType = 'Estate Planning' | 'Probate' | 'Trust Administration' | 'Real Estate' | 'Guardianship';

export type StandardizedServiceName =
  | 'Individual Trust Package'
  | 'Joint Trust Package'
  | 'Individual Will Package'
  | 'Joint Will Package'
  | 'Individual Probate Avoidance Package'
  | 'Joint Probate Avoidance Package'
  | 'Individual DIY Estate Plan Review'
  | 'Joint DIY Estate Plan Review'
  | 'Individual Estate Tax Planning Package'
  | 'Joint Estate Tax Planning Package'
  | 'Individual Trust - A La Carte'
  | 'Joint Trust - A La Carte'
  | 'Individual Will - A La Carte'
  | 'Joint Will - A La Carte'
  | 'Individual Power of Attorney - A La Carte'
  | 'Joint Power of Attorney - A La Carte'
  | 'Individual Healthcare Directive - A La Carte'
  | 'Quit Claim Deed - A La Carte'
  | 'Transfer on Death Instrument - A La Carte'
  | 'Life Estate Deed - A La Carte'
  | 'Individual Trust Restatement - A La Carte'
  | 'Joint Trust Restatement - A La Carte'
  | 'Individual Will Amendment - A La Carte'
  | 'Joint Will Amendment - A La Carte'
  | 'Special Needs Planning - Add-On'
  | 'Irrevocable Trust - A La Carte'
  | 'Estate Tax Planning - Add-On'
  | 'Probate (Tier 1)'
  | 'Probate (Tier 2)'
  | 'Probate (Tier 3)'
  | 'Probate (Tier 4)'
  | 'Small Estate Administration'
  | 'Bond in Lieu of Probate'
  | 'Standard Probate'
  | 'Large Estate Probate'
  | 'Probate Reopening'
  | 'Contested Probate'
  | 'Partial Probate'
  | 'Heir Representation'
  | 'Spousal Representation'
  | 'Document Review'
  | 'Annual Review Membership'
  | 'Trust Funding - A La Carte'
  | 'Residential Closing'
  | 'Multi-Unit or Investment Closing'
  | 'Estate, Trust, or Nonstandard Title Closing'
  | 'For Sale By Owner Representation'
  | 'Trust Administration Consulting'
  | 'Adult Guardianship'
  | 'Emergency Temporary Adult Guardianship'
  | 'Minor Guardianship'
  | 'Annual Guardianship Compliance'
  | 'Contested Guardianship';

export interface Service {
  id: string;
  name: string;
  subtitle?: string;
  category: 'estate-planning' | 'probate' | 'a-la-carte' | 'real-estate' | 'guardianship';
  standardizedCaseType: StandardizedCaseType;
  standardizedServiceName: {
    individual: StandardizedServiceName;
    joint: StandardizedServiceName;
  } | StandardizedServiceName;
  individualPrice?: number;
  jointPrice?: number;
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

export function getStandardizedServiceName(service: Service, clientType: 'individual' | 'joint'): string {
  if (typeof service.standardizedServiceName === 'string') {
    return service.standardizedServiceName;
  }
  return service.standardizedServiceName[clientType];
}

const estatePlanningAddOns = [
  {
    id: 'special-needs-planning',
    name: 'Special Needs Planning',
    price: A_LA_CARTE.specialNeedsPlanning,
    description: 'Special needs trust planning and documentation'
  },
  {
    id: 'estate-tax-planning',
    name: 'Estate Tax Planning',
    price: A_LA_CARTE.estateTaxPlanningAddOn,
    description: 'Federal and Illinois estate-tax planning, including one advanced irrevocable trust.'
  },
  {
    id: 'annual-maintenance',
    name: 'Annual Maintenance Membership',
    price: ESTATE_PLANNING.annualReviewMembership,
    isSubscription: true,
    description: 'Annual attorney review meeting and up to two simple document amendments each year.'
  }
];

export const estatePlanningPackages: Service[] = [
  {
    id: 'trust-package',
    name: 'Trust Package',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Trust Package', joint: 'Joint Trust Package' },
    individualPrice: 3500,
    jointPrice: 5000,
    description: 'Comprehensive trust-based estate plan. Joint package includes two complete sets of all documents listed. Trust may be joint, individual, or one of each.',
    includes: [
      'Revocable Living Trust',
      'Pour Over Will',
      'Power of Attorney for Healthcare',
      'Power of Attorney for Property',
      'Healthcare Directive (Living Will)',
      'HIPAA Authorization',
      'End of Life Planner (complimentary gift)',
      'Personal Property Memorandum',
      '1 Transfer on Death Instrument (TODI) of Real Estate to Trust',
      'Trust Funding Guidance',
      'Online or Mobile Notarization',
      'Physical & Digital Portfolio',
      'Client Portal Access',
      'Attorney consultations related to the included scope'
    ],
    addOns: estatePlanningAddOns
  },
  {
    id: 'probate-avoidance-package',
    name: 'Probate Avoidance Package',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Probate Avoidance Package', joint: 'Joint Probate Avoidance Package' },
    individualPrice: 1750,
    jointPrice: 2250,
    description: 'Essential documents to avoid probate. Joint package includes two complete sets of all documents listed.',
    includes: [
      'Last Will & Testament',
      'Power of Attorney for Healthcare',
      'Power of Attorney for Property',
      'Transfer on Death Instrument (TODI) for Real Estate',
      'Healthcare Directive (Living Will)',
      'HIPAA Authorization',
      'End of Life Planner (complimentary gift)',
      'Personal Property Memorandum',
      'Online or Mobile Notarization',
      'Physical & Digital Portfolio',
      'Client Portal Access',
      'Attorney consultations related to the included scope'
    ],
    addOns: estatePlanningAddOns
  },
  {
    id: 'will-package',
    name: 'Will Package',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Will Package', joint: 'Joint Will Package' },
    individualPrice: 1250,
    jointPrice: 1750,
    description: 'Complete will-based estate plan. Joint package includes two complete sets of all documents listed.',
    includes: [
      'Last Will & Testament',
      'Power of Attorney for Healthcare',
      'Power of Attorney for Property',
      'Healthcare Directive (Living Will)',
      'HIPAA Authorization',
      'End of Life Planner (complimentary gift)',
      'Personal Property Memorandum',
      'Online or Mobile Notarization',
      'Physical & Digital Estate Planning Portfolio',
      'Client Portal Access',
      'Attorney consultations related to the included scope'
    ],
    addOns: estatePlanningAddOns
  },
  {
    id: 'diy-estate-plan-review',
    name: 'DIY Estate Plan Review',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual DIY Estate Plan Review', joint: 'Joint DIY Estate Plan Review' },
    individualPrice: ESTATE_PLANNING.diyReviewIndividual,
    jointPrice: ESTATE_PLANNING.diyReviewJoint,
    description: 'Professional review of existing documents. Joint package covers up to 5 documents per person.',
    includes: [
      'Comprehensive review and redlining of previously drafted estate planning documents (up to 5 documents)',
      '1-Hour Attorney Review Session'
    ],
    addOns: estatePlanningAddOns
  },
  {
    id: 'estate-tax-planning-package',
    name: 'Estate Tax Planning Package',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Estate Tax Planning Package', joint: 'Joint Estate Tax Planning Package' },
    individualPrice: ESTATE_PLANNING.estateTaxPackageIndividual,
    jointPrice: ESTATE_PLANNING.estateTaxPackageJoint,
    description: `Fixed-fee estate-tax planning package. Includes one advanced irrevocable trust; each additional advanced trust is ${usd(ESTATE_PLANNING.irrevocableTrust)}.`,
    includes: [
      'All documents included in the Trust Package',
      'Federal & Illinois Estate Tax Planning',
      'One advanced irrevocable trust selected for the approved planning strategy'
    ],
    addOns: []
  },
  {
    id: 'irrevocable-trust',
    name: 'Irrevocable Trust',
    subtitle: 'Gifting Trust, Special Needs Trust, Life Insurance Trust (ILIT), or Supplemental Needs Trust',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Irrevocable Trust - A La Carte',
    fixedPrice: ESTATE_PLANNING.irrevocableTrust,
    description: 'A custom-drafted irrevocable trust tailored to your goals — whether you need a Gifting Trust to reduce your taxable estate, a Special Needs or Supplemental Needs Trust to protect a loved one\'s government benefits, or an Irrevocable Life Insurance Trust (ILIT) to keep life insurance proceeds out of your estate.',
    includes: [
      'Attorney consultation to determine the right trust type (Gifting, Special Needs, ILIT, or Supplemental Needs)',
      'Custom irrevocable trust drafting tailored to your specific goals',
      'Asset protection and tax planning guidance',
      'Coordination with financial advisors or insurance agents as needed',
      'Online or Mobile Notarization',
      'Client Portal Access',
      'Attorney consultations related to the included scope'
    ],
    note: `Includes one Gifting Trust, Special Needs Trust, Life Insurance Trust (ILIT), or Supplemental Needs Trust. Each additional irrevocable trust is ${usd(ESTATE_PLANNING.irrevocableTrust)}.`,
    addOns: estatePlanningAddOns
  },
  {
    id: 'annual-review-membership',
    name: 'Annual Review Membership',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Annual Review Membership',
    fixedPrice: ESTATE_PLANNING.annualReviewMembership,
    description: 'Annual review meeting to ensure your estate plan stays current, plus up to two simple amendments to existing documents during the membership year.',
    includes: [
      'Annual review meeting with attorney',
      'Up to two simple amendments to existing estate planning documents',
      'Priority scheduling',
      'Phone and email support',
      'Document storage and access'
    ]
  }
];

const probateIncludes = [
  'All required filings with the Probate Court from opening through closing',
  'Appearance and handling of all court hearings and court appearances',
  'Opening of Estate Bank Account',
  'Obtaining Estate EIN',
  'Asset & Debt Search',
  'Creditor Notification & Publication',
  'Requesting Tax Records & Transcripts',
  'Transfer of Real Estate via Deed, if necessary (includes all recording fees)',
  'Attorney consultations related to the included scope'
];

const probateNote = 'Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.';

export const probatePackages: Service[] = [
  {
    id: 'bond-in-lieu-of-probate',
    name: 'Bond in Lieu of Probate',
    subtitle: 'When the sole estate asset is real estate',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Bond in Lieu of Probate',
    fixedPrice: 1500,
    description: 'Applies when the sole estate asset is real estate and all heirs agree on disposition of the property. Illinois law allows transfer of title through a bond in lieu of probate, avoiding a full probate proceeding.',
    includes: [
      'Title Transfer Documentation',
      'Coordination with Title Company for Out-of-Court Title Transfer',
      'Attorney consultations related to the included scope'
    ],
    note: 'Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.',
    addOns: []
  },
  {
    id: 'small-estate-administration',
    name: 'Small Estate Administration',
    subtitle: 'Small Estate Affidavit and Attorney Letter of Direction — no probate case opened',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Small Estate Administration',
    fixedPrice: 1000,
    description: 'Illinois permits qualifying personal estates of $150,000 or less, with no individually owned real estate, to be settled with a sworn affidavit instead of opening probate. This service prepares the affidavit and attorney letter of direction for the institution holding the asset.',
    includes: [
      'Small Estate Affidavit',
      'Attorney Letter of Direction',
      'Asset Search'
    ],
    note: 'This is not a probate court filing. If an institution refuses the affidavit and requires Letters of Office, the matter becomes a Standard Probate and is quoted separately.',
    addOns: []
  },
  {
    id: 'standard-probate',
    name: 'Standard Probate',
    subtitle: 'Uncontested estates valued at $4,000,000 or less',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Standard Probate',
    fixedPrice: PROBATE.standard,
    description: 'Full uncontested probate administration from opening through closing for estates valued at $4,000,000 or less. Contested issues are billed hourly against a separate retainer.',
    includes: probateIncludes,
    note: probateNote,
    addOns: []
  },
  {
    id: 'large-estate-probate',
    name: 'Large Estate Probate',
    subtitle: 'Uncontested estates exceeding $4,000,000',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Large Estate Probate',
    fixedPrice: PROBATE.largeEstateBase,
    pricingLabel: `${usd(PROBATE.largeEstateBase)} + ${PROBATE.largeEstatePercent}% of Estate Value`,
    description: 'Full uncontested probate administration from opening through closing. The additional 0.5% of estate value is charged at the time of administration only if the estate value exceeds $4,000,000, due to estate-tax complexity.',
    includes: probateIncludes,
    note: probateNote,
    addOns: []
  },
  {
    id: 'probate-reopening',
    name: 'Probate Reopening',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Probate Reopening',
    fixedPrice: PROBATE.reopening,
    description: 'Applies when a previously closed probate estate is reopened due to the discovery of additional assets requiring administration. Uncontested matters only — any contested issues will be converted to an hourly rate with a retainer.',
    includes: [
      'Motion to Reopen Probate',
      'Attendance at all required court hearings',
      'Reopening and closing of the estate',
      'Assistance with administration of newly discovered assets',
      'Notice to all heirs',
      'Attorney consultations related to the included scope'
    ],
    addOns: []
  },
  {
    id: 'heir-representation',
    name: 'Heir Representation',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Heir Representation',
    fixedPrice: PROBATE.heirRepresentation,
    description: 'Applies to representation of a non-executor / non-administrator heir throughout a probate matter. Does not include contested hearings or motions to contest a will.',
    includes: [
      'Review of all filings and court documentation',
      'Advice and guidance regarding the heir\'s interest and inheritance rights',
      'Filing of claims against the estate, if needed',
      'Attendance at all court hearings on behalf of the heir',
      'Attorney consultations related to the included scope'
    ],
    note: `${usd(PROBATE.heirRepresentation)} per heir`,
    addOns: []
  },
  {
    id: 'partial-probate',
    name: 'Partial Probate',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Partial Probate',
    fixedPrice: PROBATE.partialProbate,
    description: 'Fixed-fee completion of an uncontested estate that has already been opened and requires substitute counsel. The fee covers the remaining routine administration through closing after the firm accepts the file.',
    includes: [
      'Scope of services determined based on the stage of the probate matter and what remains to be completed'
    ],
    addOns: []
  },
  {
    id: 'spousal-representation',
    name: 'Spousal Representation',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Spousal Representation',
    fixedPrice: PROBATE.spousalRepresentation,
    description: 'Applies when representing a spouse who is not the executor or administrator of the estate. Uncontested matters only — any contested issues will be converted to an hourly rate with a retainer.',
    includes: [
      'Full legal representation of the spouse throughout probate proceedings',
      'Advice and consultation regarding spousal rights and interests',
      'Filing of claims against the estate, including spousal claim for 50% of the estate if not otherwise provided for in that amount in the will',
      'Attendance at all court hearings on behalf of the spouse',
      'Attorney consultations related to the included scope'
    ],
    addOns: []
  },
  {
    id: 'contested-probate',
    name: 'Contested Probate',
    subtitle: 'NOT A FLAT FEE — Hourly Billing',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Contested Probate',
    pricingLabel: `${usd(RETAINERS.contestedProbate)} retainer + hourly`,
    description: `Applies when any probate matter becomes or is anticipated to be contested. This is not a flat-fee service. Attorney hourly rate: ${hourly(RATES.attorneyHourly)}. Paralegal/Administrative hourly rate: ${hourly(RATES.paralegalHourly)}. Retainer replenished as needed throughout the matter.`,
    includes: [
      `Minimum ${usd(RETAINERS.contestedProbate)} retainer required to commence representation`,
      `Attorney hourly rate: ${hourly(RATES.attorneyHourly)}`,
      `Paralegal / Administrative hourly rate: ${hourly(RATES.paralegalHourly)}`,
      'Retainer replenished as needed throughout the matter'
    ],
    addOns: []
  },
  {
    id: 'document-review',
    name: 'Document Review',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Document Review',
    fixedPrice: 500,
    description: 'Professional review of probate or legal documents to identify potential issues, ensure legal compliance, and provide recommendations for improvements. For review of estate planning documents, please select DIY Estate Plan Review.',
    includes: [],
    addOns: []
  }
];

export const aLaCarteServices: Service[] = [
  {
    id: 'revocable-living-trust',
    name: 'Revocable Living Trust',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Trust - A La Carte', joint: 'Joint Trust - A La Carte' },
    individualPrice: 2500,
    jointPrice: 3500,
    description: 'A Revocable Living Trust is a legal plan where you put your home, bank accounts, and other property into a trust you control—so you can manage everything like normal while you\'re alive, and when you pass away, the person you picked (your "successor trustee") can transfer or manage those assets for your loved ones without going through probate court. Includes 1 deed transfer to trust and online notarization.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'last-will-testament',
    name: 'Last Will and Testament',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Will - A La Carte', joint: 'Joint Will - A La Carte' },
    individualPrice: 750,
    jointPrice: 1250,
    description: 'A Will is a legal document that says who should inherit your property after you die and who should be in charge of handling your affairs. Joint package includes 2 Wills. Includes online notarization.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'power-of-attorney',
    name: 'Powers of Attorney',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Power of Attorney - A La Carte', joint: 'Joint Power of Attorney - A La Carte' },
    individualPrice: A_LA_CARTE.powersOfAttorneyIndividual,
    jointPrice: A_LA_CARTE.powersOfAttorneyJoint,
    description: 'Powers of Attorney let you choose someone you trust to make financial and/or medical decisions for you if you can\'t. Includes Power of Attorney for Healthcare and Power of Attorney for Property. Joint package includes two of each document. Includes online notarization.',
    includes: []
  },
  {
    id: 'healthcare-directive',
    name: 'Healthcare Directive (Living Will)',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Individual Healthcare Directive - A La Carte',
    fixedPrice: 350,
    description: 'A Healthcare Directive is a document in which you write down your medical wishes and name someone to speak for you, so doctors and loved ones know what you want if you\'re too sick or unable to communicate. Includes online notarization.',
    includes: []
  },
  {
    id: 'quit-claim-deed',
    name: 'Quitclaim Deed',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Quit Claim Deed - A La Carte',
    fixedPrice: 500,
    description: 'Preparation and recording of a Quitclaim Deed. Commonly used to add or remove a spouse or move a home into a trust. Recording fee included.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'transfer-on-death',
    name: 'Transfer on Death Instrument (TODI)',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Transfer on Death Instrument - A La Carte',
    fixedPrice: 500,
    description: 'Preparation and recording of a Transfer on Death Instrument for real estate. Allows real estate to transfer to a named beneficiary at death without probate. Recording fee included.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'life-estate-deed',
    name: 'Life Estate Deed',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Life Estate Deed - A La Carte',
    fixedPrice: 500,
    description: 'Preparation and recording of a Life Estate Deed. Lets you keep the right to live in and control your home for the rest of your life, while naming who will automatically receive the property after you pass away — outside of probate. Recording fee included.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'trust-restatement',
    name: 'Trust Restatement',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Trust Restatement - A La Carte', joint: 'Joint Trust Restatement - A La Carte' },
    individualPrice: 2000,
    jointPrice: 3000,
    description: 'A Trust Restatement rewrites the terms of your existing trust — like changing who inherits, who\'s in charge, or how distributions work — while keeping the same trust name and date. Includes review of all prior estate planning documents and online/mobile notarization.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'will-amendment',
    name: 'Will Amendment',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Will Amendment - A La Carte', joint: 'Joint Will Amendment - A La Carte' },
    individualPrice: 500,
    jointPrice: 750,
    description: 'Amendment to an existing will. Includes review of the prior will and online notarization.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'special-needs-planning',
    name: 'Special Needs Planning',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Special Needs Planning - Add-On',
    fixedPrice: A_LA_CARTE.specialNeedsPlanning,
    description: 'Can be added to any package or purchased as a standalone à la carte service. Includes one special needs or supplemental needs trust and coordination with the client’s existing plan.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'estate-tax-planning',
    name: 'Estate Tax Planning (Add-On / À La Carte)',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Estate Tax Planning - Add-On',
    fixedPrice: A_LA_CARTE.estateTaxPlanningAddOn,
    description: 'Can be added to an existing package or estate plan. Includes Federal and Illinois estate-tax planning and one advanced irrevocable trust selected for the approved strategy.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'trust-funding-service',
    name: 'Trust Funding Guidance',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Trust Funding - A La Carte',
    fixedPrice: 1500,
    description: 'Guided funding support for up to 15 financial assets. We review your trust and walk you through retitling each account with your bank or brokerage; you complete the transfers with the institution. Does not include real estate / deed transfers.',
    includes: []
  }
];

export const realEstateServices: Service[] = [
  {
    id: 'residential-closing',
    name: 'Residential Closing (Buyer or Seller)',
    category: 'real-estate',
    standardizedCaseType: 'Real Estate',
    standardizedServiceName: 'Residential Closing',
    fixedPrice: REAL_ESTATE.residentialClosing,
    description: 'For buyers or sellers who are represented by a real estate agent. Full-service attorney representation for residential real estate closings in Illinois. The attorney fee is paid at closing, not in advance; for sellers it comes out of the sale proceeds. Does not include closing costs.',
    includes: [
      'Contract Review',
      'Title Review and Clearance',
      'Title Search',
      'Document Preparation',
      'Settlement Statement Review',
      'Attorney Representation at Closing',
      'Attorney consultations related to the included transaction scope'
    ]
  },
  {
    id: 'multi-unit-investment-closing',
    name: 'Multi-Unit or Investment Closing',
    category: 'real-estate',
    standardizedCaseType: 'Real Estate',
    standardizedServiceName: 'Multi-Unit or Investment Closing',
    fixedPrice: REAL_ESTATE.multiUnitOrInvestmentClosing,
    description: 'Buyer or seller representation for a residential multi-unit or investment property. Closing costs and third-party charges are not included.',
    includes: [
      'Contract and attorney-review negotiation',
      'Title, survey, and closing-document review',
      'Settlement statement review and closing representation',
      'Attorney consultations related to the included transaction scope'
    ]
  },
  {
    id: 'estate-trust-nonstandard-closing',
    name: 'Estate, Trust, or Nonstandard Title Closing',
    category: 'real-estate',
    standardizedCaseType: 'Real Estate',
    standardizedServiceName: 'Estate, Trust, or Nonstandard Title Closing',
    fixedPrice: REAL_ESTATE.estateTrustOrNonstandardTitleClosing,
    description: 'Residential closing involving an estate, trust, power of attorney, or other nonstandard title authority. Closing costs and third-party charges are not included.',
    includes: [
      'Authority and governing-document review',
      'Contract, title, survey, and closing-document review',
      'Settlement statement review and closing representation',
      'Attorney consultations related to the included transaction scope'
    ]
  },
  {
    id: 'fsbo-representation',
    name: 'For Sale By Owner (FSBO) Representation',
    category: 'real-estate',
    standardizedCaseType: 'Real Estate',
    standardizedServiceName: 'For Sale By Owner Representation',
    fixedPrice: REAL_ESTATE.fsboRepresentation,
    description: 'Full-service attorney representation for a For Sale By Owner (FSBO) residential real estate transaction in Illinois, where there is no listing agent. Because no agent is involved, the attorney also handles the coordination a listing agent would normally carry. The attorney fee is paid at closing out of the sale proceeds, not in advance. Does not include closing costs.',
    includes: [
      'Purchase/Sale Contract Drafting or Review',
      'Title Review and Clearance',
      'Title Search',
      'Document Preparation',
      'Settlement Statement Review',
      'Attorney Representation at Closing',
      'Coordination normally handled by a real estate agent',
      'Attorney consultations related to the included transaction scope'
    ]
  }
];

export const trustAdministrationServices: Service[] = [
  {
    id: 'trust-admin-consulting',
    name: 'Trust Administration Consulting',
    subtitle: 'Attorney guidance for individuals serving as trustee',
    category: 'probate',
    standardizedCaseType: 'Trust Administration',
    standardizedServiceName: 'Trust Administration Consulting',
    pricingLabel: `${usd(TRUST_ADMIN.consultingAnnual)} / Year`,
    description: 'Annual legal consulting for an individual trustee, including up to ten attorney hours during the membership year. Illinois Estate Law does not serve as trustee.',
    includes: [
      'Trust Accounting Review and Preparation',
      'Distribution Review and Guidance',
      'Review of Trust Documentation and Beneficiary Rights',
      'Guidance on Trustee Fiduciary Duties under Illinois Law',
      'Correspondence with Beneficiaries of the Trust',
      'Up to ten attorney consultation hours during the year'
    ],
    note: `Flat annual fee of ${usd(TRUST_ADMIN.consultingAnnual)}. Work beyond ten attorney hours requires a separate written engagement. Illinois Estate Law does not serve as trustee.`,
    addOns: []
  }
];

export const guardianshipServices: Service[] = [
  {
    id: 'adult-guardianship',
    name: 'Adult Guardianship',
    subtitle: 'Uncontested guardianship of the person and estate',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Adult Guardianship',
    fixedPrice: 5000,
    requiresConsultation: true,
    description: 'For an adult who can no longer safely make personal, medical, or financial decisions. The firm evaluates the facts and handles the uncontested petition, physician-report coordination, guardian ad litem coordination, and hearing.',
    includes: [
      'Guardianship petition and required court filings',
      'All court filing fees',
      'Physician-report and guardian ad litem coordination',
      'Guidance through the hearing and appointment process'
    ],
    note: 'All court filing fees are included. Bond premiums and guardian ad litem fees are not included and are disclosed separately. After appointment, Illinois requires an annual report on the ward every year the guardianship continues — $750 each year it is filed.'
  },
  {
    id: 'emergency-temporary-adult-guardianship',
    name: 'Emergency + Full Adult Guardianship',
    subtitle: 'Temporary emergency petition plus the full uncontested guardianship case',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Emergency Temporary Adult Guardianship',
    fixedPrice: GUARDIANSHIP_FLAT.adultUncontested + GUARDIANSHIP_FLAT.emergencyTemporaryAddOn,
    requiresConsultation: true,
    description: 'For an uncontested adult guardianship requiring immediate, court-ordered temporary authority while the full guardianship petition is pending. The court—not the firm—decides whether an emergency exists and when a hearing will occur.',
    includes: [
      'Everything in the full uncontested adult guardianship package',
      'Priority preparation of the temporary-guardian petition and proposed order',
      'Preparation for and appearance at one temporary-guardianship hearing',
      'All court filing fees for the temporary and full guardianship petitions',
      'Coordination of notice requirements and supporting documentation'
    ],
    note: `Concrete total: ${usd(GUARDIANSHIP_FLAT.adultUncontested + GUARDIANSHIP_FLAT.emergencyTemporaryAddOn)} (${usd(GUARDIANSHIP_FLAT.adultUncontested)} full guardianship + ${usd(GUARDIANSHIP_FLAT.emergencyTemporaryAddOn)} emergency add-on). Bond premiums and guardian ad litem fees are not included. No appointment or hearing date is guaranteed. If the matter becomes contested, the contested-matter terms apply.`
  },
  {
    id: 'minor-guardianship',
    name: 'Minor Guardianship',
    subtitle: 'Uncontested guardianship for a child',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Minor Guardianship',
    fixedPrice: 5000,
    requiresConsultation: true,
    description: 'For a relative or other adult who needs legal authority to care for a minor child when a parent cannot or where a parent consents.',
    includes: [
      'Guardianship petition and required court filings',
      'All court filing fees',
      'Notice and hearing preparation',
      'Guidance through appointment and letters of office'
    ],
    note: 'All court filing fees are included. Bond premiums and guardian ad litem fees, if required, are not included. This service is for uncontested matters. After appointment, the annual report on the ward is $750 each year it is filed.'
  },
  {
    id: 'annual-guardianship-compliance',
    name: 'Annual Guardianship Compliance',
    subtitle: 'Annual report and accounting support',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Annual Guardianship Compliance',
    fixedPrice: GUARDIANSHIP_COMPLIANCE.compliancePlanBundled,
    requiresConsultation: true,
    description: 'For appointed guardians who need support preparing and filing the annual report on the ward and estate accounting on the court schedule.',
    includes: [
      'Annual report on the ward',
      'Annual estate accounting support',
      'Court-deadline tracking and filing guidance'
    ]
  },
  {
    id: 'contested-guardianship',
    name: 'Contested Guardianship',
    subtitle: 'Objection, competing petition, or guardian-removal matter',
    category: 'guardianship',
    standardizedCaseType: 'Guardianship',
    standardizedServiceName: 'Contested Guardianship',
    pricingLabel: `${usd(RETAINERS.contestedGuardianship)} retainer + hourly`,
    requiresConsultation: true,
    description: 'For a guardianship matter involving an objection, a competing petition, or a challenge to an existing guardian. These matters require attorney review before engagement.',
    includes: [
      'Attorney review of the dispute and court posture',
      'Clear explanation of retainer, hourly rates, and anticipated next steps'
    ],
    note: 'Court costs and guardian ad litem fees may be billed separately.'
  }
];

export const allServices = [
  ...estatePlanningPackages,
  ...probatePackages,
  ...trustAdministrationServices,
  ...aLaCarteServices,
  ...realEstateServices,
  ...guardianshipServices
];
