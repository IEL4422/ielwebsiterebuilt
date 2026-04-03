export type StandardizedCaseType = 'Estate Planning' | 'Probate' | 'Prenuptial Agreement' | 'Small Business';

export type StandardizedServiceName =
  | 'Individual Trust Package'
  | 'Joint Trust Package'
  | 'Individual Will Package'
  | 'Joint Will Package'
  | 'Individual Probate Avoidance Package'
  | 'Joint Probate Avoidance Package'
  | 'Individual DIY Estate Plan Review'
  | 'Joint DIY Estate Plan Review'
  | 'Individual Trust - A La Carte'
  | 'Joint Trust - A La Carte'
  | 'Individual Will - A La Carte'
  | 'Joint Will - A La Carte'
  | 'Individual Power of Attorney - A La Carte'
  | 'Joint Power of Attorney - A La Carte'
  | 'Individual Healthcare Directive - A La Carte'
  | 'Joint Healthcare Directive - A La Carte'
  | 'Quit Claim Deed - A La Carte'
  | 'Transfer on Death Instrument - A La Carte'
  | 'Life Estate Deed - A La Carte'
  | 'Trust Restatement - A La Carte'
  | 'Will Amendment - A La Carte'
  | 'Special Needs Planning - Add-On'
  | 'Irrevocable Trust - A La Carte'
  | 'Estate Tax Planning - Add-On'
  | 'Prenuptial Agreement - Review'
  | 'Prenuptial Agreement - Review and Negotiation'
  | 'Prenuptial Agreement - Drafting'
  | 'Prenuptial Agreement - Drafting and Negotiation'
  | 'Small Business Package'
  | 'Business Essentials Package'
  | 'Trademark Registration'
  | 'Office Action Response (Procedural)'
  | 'Office Action Response (Substantive)'
  | 'Probate Package'
  | 'Summary Probate'
  | 'Partial Probate'
  | 'Heir Representation'
  | 'Document Review'
  | 'Annual Review Membership'
  | 'Prenuptial Agreement - Q&A Session'
  | 'Trust Funding - A La Carte';

export interface Service {
  id: string;
  name: string;
  subtitle?: string;
  category: 'estate-planning' | 'probate' | 'a-la-carte' | 'prenuptial' | 'small-business';
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
    price: 2500,
    description: 'Special needs trust planning and documentation'
  },
  {
    id: 'estate-tax-planning',
    name: 'Estate Tax Planning',
    price: 5000,
    description: 'Comprehensive estate tax planning strategies'
  },
  {
    id: 'business-succession',
    name: 'Business Succession Planning',
    price: 2500,
    description: 'Comprehensive planning for business continuity and succession'
  },
  {
    id: 'annual-maintenance',
    name: 'Annual Maintenance Membership',
    price: 149,
    isSubscription: true,
    description: 'Annual review meeting and free amendments ($149 per year)'
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
    description: 'Comprehensive trust-based estate plan',
    includes: [
      'Revocable Living Trust',
      'Pour-Over Will',
      'Power of Attorney for Healthcare and Property',
      'Healthcare Directive (Living Will)',
      'Remembrance & Services Memorandum',
      'Personal Property Memorandum',
      '(1) Deed Transfer of Real Estate to Trust',
      'Full Trust Funding',
      'Online or Mobile Notarization',
      'Physical & Digital Portfolio',
      'Access to Client Portal',
      'Unlimited Attorney Consultation'
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
    description: 'Essential documents to avoid probate',
    includes: [
      'Last Will & Testament',
      'Power of Attorney for Healthcare and Property',
      'Transfer-on-Death Instrument',
      'Healthcare Directive (Living Will)',
      'Remembrance & Services Memorandum',
      'Personal Property Memorandum',
      'Online or Mobile Notarization',
      'Physical & Digital Portfolio',
      'Access to Client Portal',
      'Unlimited Attorney Consultation'
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
    description: 'Complete will-based estate plan',
    includes: [
      'Last Will & Testament',
      'Power of Attorney for Healthcare and Property',
      'Healthcare Directive (Living Will)',
      'Remembrance & Services Memorandum',
      'Personal Property Memorandum',
      'Online or Mobile Notarization',
      'Physical & Digital Portfolio',
      'Access to Client Portal',
      'Unlimited Attorney Consultation'
    ],
    addOns: estatePlanningAddOns
  },
  {
    id: 'diy-estate-plan-review',
    name: 'DIY Estate Plan Review',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual DIY Estate Plan Review', joint: 'Joint DIY Estate Plan Review' },
    individualPrice: 750,
    jointPrice: 1000,
    description: 'Professional review of existing documents',
    includes: [
      'Comprehensive review and redlining of previously drafted estate planning documents',
      'One (1) hour attorney review session'
    ],
    addOns: estatePlanningAddOns
  },
  {
    id: 'irrevocable-trust',
    name: 'Irrevocable Trust',
    subtitle: 'life insurance, medicaid asset protection trust, special needs',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Irrevocable Trust - A La Carte',
    fixedPrice: 4000,
    description: 'An Irrevocable Trust is a permanent legal arrangement where you transfer assets—like life insurance, property, or funds—into a trust that you cannot easily change or undo, often used to protect assets for Medicaid eligibility, reduce estate taxes, or provide for a loved one with special needs without affecting their government benefits.',
    includes: [
      'Custom irrevocable trust drafting',
      'Asset protection planning',
      'Medicaid planning consultation',
      'Special needs trust provisions',
      'Online or Mobile Notarization',
      'Access to Client Portal',
      'Unlimited Attorney Consultation'
    ],
    addOns: estatePlanningAddOns
  },
  {
    id: 'annual-review-membership',
    name: 'Annual Review Membership',
    category: 'estate-planning',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Annual Review Membership',
    fixedPrice: 149,
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

const probateAddOns = [
  {
    id: 'will-contest-hearing',
    name: 'Will Contest Hearing',
    price: 5000,
    description: 'Used when someone disputes whether the will is valid, or defends the will against that challenge'
  },
  {
    id: 'citation-to-recover-assets',
    name: 'Citation to Recover Assets',
    price: 4000,
    description: 'Used when estate property appears to be held by someone else and must be returned to the estate'
  },
  {
    id: 'creditor-claim-objection',
    name: 'Creditor Claim Objection',
    price: 1500,
    description: 'Used when a creditor files a claim and the estate wants to contest all or part of that claim ($1,500 per claim)'
  },
  {
    id: 'supervised-administration',
    name: 'Supervised Administration',
    price: 3000,
    description: 'Court-supervised administration of the estate'
  },
  {
    id: 'real-estate-attorney-representation',
    name: 'Real Estate Attorney Representation',
    price: 3000,
    description: 'Legal representation for real estate matters in the estate'
  },
  {
    id: 'emergency-relief',
    name: 'Emergency Relief',
    price: 2500,
    description: 'Emergency motion to open estate, sell property, or avoid foreclosure'
  },
  {
    id: 'asset-coordination',
    name: 'Asset Coordination',
    price: 500,
    description: 'We work with banks directly to transfer assets to estate bank account ($500 per asset)',
    allowQuantity: true
  }
];

export const probatePackages: Service[] = [
  {
    id: 'probate-package',
    name: 'Probate Package',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Probate Package',
    pricingLabel: 'Starting at $7,500',
    description: 'Full probate administration services',
    includes: [
      'Preparation and Filing of All Necessary Documents',
      'Notification of Heirs and Creditors',
      'Heirship Research',
      'Asset Search',
      'Representation at All Court Hearings',
      'Filing Fees, Creditor Notification Publication Fees',
      'Preparation of Final Accounting',
      'Access to Probate Portal',
      'Unlimited Attorney Consultation'
    ],
    addOns: []
  },
  {
    id: 'summary-probate',
    name: 'Summary Probate',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Summary Probate',
    fixedPrice: 4000,
    description: 'Simplified probate process for estates meeting specific requirements',
    includes: [
      'Preparation and Filing of All Necessary Documents',
      'Notification of Heirs and Creditors',
      'Heirship Research',
      'Asset Search',
      'Representation at All Court Hearings',
      'Filing Fees, Creditor Notification Publication Fees',
      'Preparation of Final Accounting',
      'Access to Probate Portal',
      'Unlimited Attorney Consultation'
    ],
    note: 'For estates valued at $100,000 or less, no real estate, and no issues among heirs'
  },
  {
    id: 'partial-probate',
    name: 'Partial Probate',
    category: 'probate',
    standardizedCaseType: 'Probate',
    standardizedServiceName: 'Partial Probate',
    pricingLabel: 'Starting at $3,500',
    description: 'For probate cases already filed',
    includes: [
      'Preparation and Filing of All Necessary Documents',
      'Notification of Heirs and Creditors',
      'Heirship Research',
      'Asset Search',
      'Representation at All Court Hearings',
      'Preparation of Final Accounting',
      'Unlimited Attorney Consultation'
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
    description: 'Representation throughout the entire probate matter of non-representative heirs',
    includes: [
      'Full legal representation throughout the probate proceeding',
      'Review of all filings and court documents',
      'Protection of heir\'s interests and inheritance rights',
      'Attendance at all court hearings on behalf of heir',
      'Unlimited Attorney Consultation'
    ],
    note: '$2,500 per heir',
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
    description: 'A Revocable Living Trust is a legal plan where you put your home, bank accounts, and other property into a trust you control—so you can manage everything like normal while you\'re alive, and when you pass away, the person you picked (your "successor trustee") can transfer or manage those assets for your loved ones without going through probate court.',
    includes: ['Full Trust Funding'],
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
    description: 'A Will is a legal document that says who should inherit your property after you die and who should be in charge of handling your affairs, but it usually still has to go through probate court to carry out those instructions.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'power-of-attorney',
    name: 'Power of Attorney (Financial/Medical)',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Power of Attorney - A La Carte', joint: 'Joint Power of Attorney - A La Carte' },
    individualPrice: 500,
    jointPrice: 500,
    description: 'A Power of Attorney is a legal document that lets you choose someone you trust to make financial and/or medical decisions for you if you can\'t—so bills get paid, accounts are managed, and healthcare choices can be made without having to go to court.',
    includes: []
  },
  {
    id: 'healthcare-directive',
    name: 'Healthcare Directive',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: { individual: 'Individual Healthcare Directive - A La Carte', joint: 'Joint Healthcare Directive - A La Carte' },
    individualPrice: 500,
    jointPrice: 500,
    description: 'A Healthcare Directive is a document in which you write down your medical wishes and name someone to speak for you, so doctors and loved ones know what you want if you\'re too sick or unable to communicate.',
    includes: []
  },
  {
    id: 'quit-claim-deed',
    name: 'Quit Claim Deed',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Quit Claim Deed - A La Carte',
    fixedPrice: 500,
    description: 'A Quit Claim Deed is a simple legal document that transfers whatever ownership interest you have in a property to someone else—commonly used to add or remove a spouse or move a home into a trust—without making promises about the title.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'transfer-on-death',
    name: 'Transfer-on-Death Instrument',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Transfer on Death Instrument - A La Carte',
    fixedPrice: 500,
    description: 'Transfer on death designation',
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
    description: 'A Life Estate Deed is a deed that lets you keep the right to live in and control your home for the rest of your life, while naming who will automatically receive the property after you pass away—so it transfers outside of probate.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'special-needs-planning',
    name: 'Special Needs Planning',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Special Needs Planning - Add-On',
    fixedPrice: 2500,
    description: 'Special needs trust planning',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'estate-tax-planning',
    name: 'Estate Tax Planning',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Estate Tax Planning - Add-On',
    fixedPrice: 5000,
    description: 'Comprehensive tax planning',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'trust-restatement',
    name: 'Trust Restatement',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Trust Restatement - A La Carte',
    fixedPrice: 2000,
    description: 'A Trust Restatement is a way to update and rewrite the terms of your existing trust—like changing who inherits, who\'s in charge, or how distributions work—while keeping the same trust name and date, so you don\'t have to start a brand-new trust from scratch.',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'will-amendment',
    name: 'Will Amendment',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Will Amendment - A La Carte',
    fixedPrice: 500,
    description: 'Amendment to existing will',
    includes: [],
    addOns: estatePlanningAddOns
  },
  {
    id: 'trust-funding-service',
    name: 'Trust Funding',
    category: 'a-la-carte',
    standardizedCaseType: 'Estate Planning',
    standardizedServiceName: 'Trust Funding - A La Carte',
    fixedPrice: 1500,
    description: 'Professional assistance with transferring all of your assets into your trust, including coordination with banks, financial institutions, and titling of accounts and property.',
    includes: []
  }
];

export const prenuptialServices: Service[] = [
  {
    id: 'prenuptial-drafting-negotiation',
    name: 'Prenuptial Agreement Drafting & Negotiation',
    category: 'prenuptial',
    standardizedCaseType: 'Prenuptial Agreement',
    standardizedServiceName: 'Prenuptial Agreement - Drafting and Negotiation',
    fixedPrice: 5000,
    description: 'Comprehensive prenuptial agreement service including drafting and negotiation',
    includes: [
      'Initial consultation with both parties',
      'Full financial disclosure review',
      'Custom drafting tailored to your situation',
      'Negotiation between parties',
      'Finalization and execution'
    ]
  },
  {
    id: 'prenuptial-review-negotiation',
    name: 'Prenuptial Agreement Review & Negotiation',
    category: 'prenuptial',
    standardizedCaseType: 'Prenuptial Agreement',
    standardizedServiceName: 'Prenuptial Agreement - Review and Negotiation',
    fixedPrice: 3000,
    description: 'Professional review and negotiation of prenuptial agreement',
    includes: [
      'Comprehensive legal review',
      'Analysis of fairness and enforceability',
      'Negotiation on your behalf',
      'Recommendations for modifications',
      'Protection of your interests'
    ]
  },
  {
    id: 'prenuptial-drafting',
    name: 'Prenuptial Agreement Drafting',
    category: 'prenuptial',
    standardizedCaseType: 'Prenuptial Agreement',
    standardizedServiceName: 'Prenuptial Agreement - Drafting',
    fixedPrice: 3000,
    description: 'Custom prenuptial agreement drafting service',
    includes: [
      'Initial consultation',
      'Custom agreement drafting',
      'Legal compliance review',
      'Finalization and execution guidance'
    ]
  },
  {
    id: 'prenuptial-review',
    name: 'Prenuptial Agreement Review',
    category: 'prenuptial',
    standardizedCaseType: 'Prenuptial Agreement',
    standardizedServiceName: 'Prenuptial Agreement - Review',
    fixedPrice: 2000,
    description: 'Professional review of prenuptial agreement',
    includes: [
      'Detailed legal analysis',
      'Identification of unfair provisions',
      'Consultation on implications',
      'Recommendations for protection'
    ]
  },
  {
    id: 'prenuptial-qa-session',
    name: 'Prenuptial Q&A Session',
    category: 'prenuptial',
    standardizedCaseType: 'Prenuptial Agreement',
    standardizedServiceName: 'Prenuptial Agreement - Q&A Session',
    fixedPrice: 500,
    description: '1 hour attorney meeting and review of existing prenuptial agreement',
    includes: [
      '1 hour attorney consultation',
      'Review of existing prenuptial agreement',
      'Q&A about terms and implications',
      'General guidance and recommendations'
    ]
  }
];

export const smallBusinessServices: Service[] = [
  {
    id: 'small-business-package',
    name: 'Small Business Package',
    category: 'small-business',
    standardizedCaseType: 'Small Business',
    standardizedServiceName: 'Small Business Package',
    fixedPrice: 2000,
    description: 'Comprehensive business formation and brand protection package including LLC registration, trademark protection, and all necessary documentation',
    includes: [
      'LLC Registration',
      'Trademark Registration',
      'Operating Agreement',
      'EIN Number',
      'All Filing Fees Included'
    ]
  },
  {
    id: 'business-essentials',
    name: 'Business Essentials',
    category: 'small-business',
    standardizedCaseType: 'Small Business',
    standardizedServiceName: 'Business Essentials Package',
    fixedPrice: 1000,
    description: 'Essential business formation package with LLC registration and operating agreement',
    includes: [
      'LLC Registration',
      'EIN Number',
      'Operating Agreement',
      'Filing Fees Included'
    ]
  },
  {
    id: 'trademark-registration',
    name: 'Trademark Registration',
    category: 'small-business',
    standardizedCaseType: 'Small Business',
    standardizedServiceName: 'Trademark Registration',
    fixedPrice: 1250,
    description: 'Protect your brand identity with federal trademark registration, including comprehensive searches and application filing',
    includes: [],
    note: 'Includes filing fees'
  },
  {
    id: 'office-action-procedural',
    name: 'Office Action Response (Procedural)',
    category: 'small-business',
    standardizedCaseType: 'Small Business',
    standardizedServiceName: 'Office Action Response (Procedural)',
    fixedPrice: 500,
    description: 'Expert response to procedural USPTO office actions to overcome trademark application obstacles',
    includes: []
  },
  {
    id: 'office-action-substantive',
    name: 'Office Action Response (Substantive)',
    category: 'small-business',
    standardizedCaseType: 'Small Business',
    standardizedServiceName: 'Office Action Response (Substantive)',
    fixedPrice: 1500,
    description: 'Expert response to substantive USPTO office actions to overcome trademark application obstacles',
    includes: []
  }
];

export const allServices = [
  ...estatePlanningPackages,
  ...probatePackages,
  ...aLaCarteServices,
  ...prenuptialServices,
  ...smallBusinessServices
];
