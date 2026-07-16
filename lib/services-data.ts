export type StandardizedCaseType = 'Estate Planning' | 'Probate' | 'Trust Administration' | 'Real Estate';

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
  | 'Small Estate Probate'
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
  | 'For Sale By Owner Representation'
  | 'Trust Administration Consulting';

export interface Service {
  id: string;
  name: string;
  subtitle?: string;
  category: 'estate-planning' | 'probate' | 'a-la-carte' | 'real-estate';
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
    price: 3500,
    description: 'Special needs trust planning and documentation'
  },
  {
    id: 'estate-tax-planning',
    name: 'Estate Tax Planning',
    price: 5000,
    description: 'Federal & Illinois estate tax planning. $5,000 base fee + 1% of total estate value.'
  },
  {
    id: 'annual-maintenance',
    name: 'Annual Maintenance Membership',
    price: 199,
    isSubscription: true,
    description: 'Annual review meeting and free amendments ($199 per year)'
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
      'Unlimited Attorney Consultations'
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
      'Unlimited Attorney Consultations'
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
      'Unlimited Attorney Consultations'
    ],
    addOns: estatePlanningAddOns
  },
  {
    id: 'diy-estate-plan-review',
    name: 'DIY Estate Plan Review',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual DIY Estate Plan Review', joint: 'Joint DIY Estate Plan Review' },
    individualPrice: 500,
    jointPrice: 750,
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
    pricingLabel: 'Individual: $10,000 + 1% | Joint: $15,000 + 1%',
    description: 'Comprehensive estate tax planning package. Individual: $10,000 base + 1% of total estate value. Joint: $15,000 base + 1% of total estate value. Base fee paid upfront; 1% of total estate value invoiced separately at time of document finalization.',
    includes: [
      'All documents included in the Trust Package',
      'Federal & Illinois Estate Tax Planning',
      'Any necessary Irrevocable Trust(s) required to minimize or avoid estate tax (in addition to base Revocable Living Trust)'
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
    fixedPrice: 4500,
    description: 'A custom-drafted irrevocable trust tailored to your goals — whether you need a Gifting Trust to reduce your taxable estate, a Special Needs or Supplemental Needs Trust to protect a loved one\'s government benefits, or an Irrevocable Life Insurance Trust (ILIT) to keep life insurance proceeds out of your estate.',
    includes: [
      'Attorney consultation to determine the right trust type (Gifting, Special Needs, ILIT, or Supplemental Needs)',
      'Custom irrevocable trust drafting tailored to your specific goals',
      'Asset protection and tax planning guidance',
      'Coordination with financial advisors or insurance agents as needed',
      'Online or Mobile Notarization',
      'Client Portal Access',
      'Unlimited Attorney Consultations'
    ],
    note: 'Includes one of the following: Gifting Trust, Special Needs Trust, Life Insurance Trust (ILIT), or Supplemental Needs Trust. Additional trust types may be added at a reduced rate.',
    addOns: estatePlanningAddOns
  },
  {
    id: 'annual-review-membership',
    name: 'Annual Review Membership',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Annual Review Membership',
    fixedPrice: 199,
    description: 'Annual review meeting to ensure your estate plan stays current with your life changes and the law, plus free amendments to your documents throughout the year.',
    includes: [
      'Annual review meeting with attorney',
      'Free amendments to estate planning documents',
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
  'Obtaining Tax Transcripts',
  'Final Tax Returns (if required)',
  'Transfer of Real Estate via Deed, if necessary (includes all recording fees)',
  'Unlimited Attorney Consultations'
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
      'Unlimited Attorney Consultations'
    ],
    note: 'Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.',
    addOns: []
  },
  {
    id: 'summary-probate',
    name: 'Small Estate Probate',
    subtitle: 'For uncontested estates under $150,000 requiring Letters of Office',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Small Estate Probate',
    fixedPrice: 3500,
    description: 'Applies to estates under $150,000 where a bank will not accept a Small Estate Affidavit and Letters of Office are required. This is a standard (not summary) probate matter designed for smaller estates that do not qualify for the Small Estate Affidavit process. Uncontested matters only — any contested issues will be converted to an hourly rate with a retainer.',
    includes: probateIncludes,
    note: probateNote,
    addOns: []
  },
  {
    id: 'standard-probate',
    name: 'Standard Probate',
    subtitle: 'Uncontested probate for estates between $150,000 and $2,000,000',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Standard Probate',
    fixedPrice: 6500,
    description: 'Applies to uncontested estates valued between $150,000 and $2,000,000. Flat-fee probate administration from opening through closing. If estate value exceeds $2,000,000, an additional 1% of net estate value is invoiced at the time of distribution. Uncontested matters only — any contested issues will be converted to an hourly rate with a retainer.',
    includes: probateIncludes,
    note: probateNote,
    addOns: []
  },
  {
    id: 'large-estate-probate',
    name: 'Large Estate Probate',
    subtitle: 'Uncontested probate for estates above $2,000,000',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Large Estate Probate',
    pricingLabel: '$6,500 + 1% of Net Estate Value',
    description: 'Applies to uncontested estates anticipated to be valued above $2,000,000. $6,500 base fee; if net estate value (after attorney fees, expenses, funeral/memorial costs, and other probate-related expenses) exceeds $2,000,000, an additional 1% of net estate value is invoiced at the time of administration. Uncontested matters only — any contested issues will be converted to an hourly rate with a retainer.',
    includes: probateIncludes,
    note: 'The $6,500 base fee is due at engagement. The 1% fee on net estate value is collected at the time of administration. Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.',
    addOns: []
  },
  {
    id: 'probate-reopening',
    name: 'Probate Reopening',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Probate Reopening',
    fixedPrice: 2500,
    description: 'Applies when a previously closed probate estate is reopened due to the discovery of additional assets requiring administration. Uncontested matters only — any contested issues will be converted to an hourly rate with a retainer.',
    includes: [
      'Motion to Reopen Probate',
      'Attendance at all required court hearings',
      'Reopening and closing of the estate',
      'Assistance with administration of newly discovered assets',
      'Notice to all heirs',
      'Unlimited Attorney Consultations'
    ],
    addOns: []
  },
  {
    id: 'heir-representation',
    name: 'Heir Representation',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Heir Representation',
    fixedPrice: 2500,
    description: 'Applies to representation of a non-executor / non-administrator heir throughout a probate matter. Does not include contested hearings or motions to contest a will.',
    includes: [
      'Review of all filings and court documentation',
      'Advice and guidance regarding the heir\'s interest and inheritance rights',
      'Filing of claims against the estate, if needed',
      'Attendance at all court hearings on behalf of the heir',
      'Unlimited Attorney Consultations'
    ],
    note: '$2,500 per heir',
    addOns: []
  },
  {
    id: 'partial-probate',
    name: 'Partial Probate',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Partial Probate',
    pricingLabel: 'Starting at $3,500 — individually quoted',
    description: 'Applies when an estate has already been opened (or pre-opening) and the client is seeking new representation to replace prior counsel. Starting at $3,500; final fee individually quoted based on case progress, complexity, and unique facts of the matter (up to $6,500). Uncontested matters only.',
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
    fixedPrice: 3500,
    description: 'Applies when representing a spouse who is not the executor or administrator of the estate. Uncontested matters only — any contested issues will be converted to an hourly rate with a retainer.',
    includes: [
      'Full legal representation of the spouse throughout probate proceedings',
      'Advice and consultation regarding spousal rights and interests',
      'Filing of claims against the estate, including spousal claim for 50% of the estate if not otherwise provided for in that amount in the will',
      'Attendance at all court hearings on behalf of the spouse',
      'Unlimited Attorney Consultations'
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
    pricingLabel: '$5,000 retainer + hourly',
    description: 'Applies when any probate matter becomes or is anticipated to be contested. This is not a flat-fee service. Attorney hourly rate: $400/hour. Paralegal/Administrative hourly rate: $150/hour. Retainer replenished as needed throughout the matter.',
    includes: [
      'Minimum $5,000 retainer required to commence representation',
      'Attorney hourly rate: $350 / hour',
      'Paralegal / Administrative hourly rate: $125 / hour',
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
    individualPrice: 400,
    jointPrice: 600,
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
    fixedPrice: 3500,
    description: 'Can be added to any package or purchased as a standalone à la carte service. Includes creation or amendment of Revocable Living Trust, or creation of Irrevocable Trust (as advised and determined necessary).',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'estate-tax-planning',
    name: 'Estate Tax Planning (Add-On / À La Carte)',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Estate Tax Planning - Add-On',
    pricingLabel: '$5,000 base + 1% of Total Estate Value',
    description: 'Can be added to any existing package or an existing estate plan. $5,000 base fee paid upfront; 1% of total estate value invoiced separately at time of document finalization. Includes Federal & Illinois estate tax planning and any necessary Irrevocable Trust(s) required to minimize or avoid estate tax.',
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
    fixedPrice: 750,
    description: 'Flat fee paid at the time of closing. Does not include closing costs. For buyers or sellers who are represented by a real estate agent. Full-service attorney representation for residential real estate closings in Illinois.',
    includes: [
      'Contract Review',
      'Title Review and Clearance',
      'Title Search',
      'Document Preparation',
      'Settlement Statement Review',
      'Attorney Representation at Closing',
      'Unlimited Attorney Consultations'
    ]
  },
  {
    id: 'fsbo-representation',
    name: 'For Sale By Owner (FSBO) Representation',
    category: 'real-estate',
    standardizedCaseType: 'Real Estate',
    standardizedServiceName: 'For Sale By Owner Representation',
    fixedPrice: 1500,
    description: 'Full-service attorney representation for a For Sale By Owner (FSBO) residential real estate transaction in Illinois, where you are not represented by a real estate agent. Flat fee paid at closing (does not include closing costs).',
    includes: [
      'Purchase/Sale Contract Drafting or Review',
      'Title Review and Clearance',
      'Title Search',
      'Document Preparation',
      'Settlement Statement Review',
      'Attorney Representation at Closing',
      'Coordination normally handled by a real estate agent',
      'Unlimited Attorney Consultations'
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
    pricingLabel: '$3,500 / Year',
    description: 'Comprehensive legal consulting for individuals who have been named trustee and need professional support to carry out their duties correctly. Note: Illinois Estate Law does NOT serve as Trustee on client trusts.',
    includes: [
      'Trust Accounting Review and Preparation',
      'Distribution Review and Guidance',
      'Review of Trust Documentation and Beneficiary Rights',
      'Guidance on Trustee Fiduciary Duties under Illinois Law',
      'Correspondence with Beneficiaries of the Trust',
      'Unlimited Attorney Consultations throughout the year'
    ],
    note: 'Flat annual fee of $3,500. Illinois Estate Law does NOT serve as Trustee — trustee services are not offered by this firm.',
    addOns: []
  }
];

export const allServices = [
  ...estatePlanningPackages,
  ...probatePackages,
  ...trustAdministrationServices,
  ...aLaCarteServices,
  ...realEstateServices
];
