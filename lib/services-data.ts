export interface Service {
  id: string;
  name: string;
  category: 'estate-planning' | 'probate' | 'a-la-carte' | 'prenuptial' | 'small-business';
  individualPrice?: number;
  jointPrice?: number;
  fixedPrice?: number;
  description: string;
  includes: string[];
  note?: string;
}

export const estatePlanningPackages: Service[] = [
  {
    id: 'trust-package',
    name: 'Trust Package',
    category: 'estate-planning',
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
      'Online or Mobile Notarization',
      'Physical & Digital Portfolio',
      'Access to Client Portal',
      'Unlimited Attorney Consultation'
    ]
  },
  {
    id: 'probate-avoidance-package',
    name: 'Probate Avoidance Package',
    category: 'estate-planning',
    individualPrice: 1250,
    jointPrice: 1750,
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
    ]
  },
  {
    id: 'will-package',
    name: 'Will Package',
    category: 'estate-planning',
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
    ]
  },
  {
    id: 'diy-estate-plan-review',
    name: 'DIY Estate Plan Review',
    category: 'estate-planning',
    individualPrice: 750,
    jointPrice: 1000,
    description: 'Professional review of existing documents',
    includes: [
      'Comprehensive review and redlining of previously drafted estate planning documents',
      'One (1) hour attorney review session'
    ]
  }
];

export const probatePackages: Service[] = [
  {
    id: 'probate-package',
    name: 'Probate Package',
    category: 'probate',
    fixedPrice: 7500,
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
    note: '$7,500 for Uncontested Matters - Varies for Contested Matters'
  },
  {
    id: 'summary-probate',
    name: 'Summary Probate',
    category: 'probate',
    fixedPrice: 5000,
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
    note: 'For estates with net value of $100,000 or less, all expenses and debts paid, all heirs consent in writing'
  },
  {
    id: 'partial-probate',
    name: 'Partial Probate',
    category: 'probate',
    fixedPrice: 3500,
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
    note: 'For probate cases that have already been filed'
  },
  {
    id: 'small-estate-probate',
    name: 'Small Estate Probate',
    category: 'probate',
    fixedPrice: 1000,
    description: 'Simplified process for smaller estates',
    includes: [
      'Preparation of Small Estate Affidavit',
      'Asset Search',
      'Online Notarization',
      'Unlimited Attorney Consultation'
    ],
    note: 'For estates with less than $100,000 in assets and no real estate'
  },
  {
    id: 'heir-representation',
    name: 'Heir Representation',
    category: 'probate',
    fixedPrice: 2500,
    description: 'Representation throughout the entire probate matter of non-representative heirs',
    includes: [
      'Full legal representation throughout the probate proceeding',
      'Review of all filings and court documents',
      'Protection of heir\'s interests and inheritance rights',
      'Attendance at all court hearings on behalf of heir',
      'Unlimited Attorney Consultation'
    ],
    note: '$2,500 per heir'
  }
];

export const aLaCarteServices: Service[] = [
  {
    id: 'revocable-living-trust',
    name: 'Revocable Living Trust',
    category: 'a-la-carte',
    individualPrice: 2500,
    jointPrice: 3500,
    description: 'A Revocable Living Trust is a legal plan where you put your home, bank accounts, and other property into a trust you control—so you can manage everything like normal while you\'re alive, and when you pass away, the person you picked (your "successor trustee") can transfer or manage those assets for your loved ones without going through probate court.',
    includes: []
  },
  {
    id: 'last-will-testament',
    name: 'Last Will and Testament',
    category: 'a-la-carte',
    individualPrice: 750,
    jointPrice: 1250,
    description: 'A Will is a legal document that says who should inherit your property after you die and who should be in charge of handling your affairs, but it usually still has to go through probate court to carry out those instructions.',
    includes: []
  },
  {
    id: 'power-of-attorney',
    name: 'Power of Attorney (Financial/Medical)',
    category: 'a-la-carte',
    fixedPrice: 500,
    description: 'A Power of Attorney is a legal document that lets you choose someone you trust to make financial and/or medical decisions for you if you can\'t—so bills get paid, accounts are managed, and healthcare choices can be made without having to go to court.',
    includes: []
  },
  {
    id: 'healthcare-directive',
    name: 'Healthcare Directive',
    category: 'a-la-carte',
    fixedPrice: 500,
    description: 'A Healthcare Directive is a document in which you write down your medical wishes and name someone to speak for you, so doctors and loved ones know what you want if you\'re too sick or unable to communicate.',
    includes: []
  },
  {
    id: 'quit-claim-deed',
    name: 'Quit Claim Deed',
    category: 'a-la-carte',
    fixedPrice: 500,
    description: 'A Quit Claim Deed is a simple legal document that transfers whatever ownership interest you have in a property to someone else—commonly used to add or remove a spouse or move a home into a trust—without making promises about the title.',
    includes: []
  },
  {
    id: 'transfer-on-death',
    name: 'Transfer-on-Death Instrument',
    category: 'a-la-carte',
    fixedPrice: 500,
    description: 'Transfer on death designation',
    includes: []
  },
  {
    id: 'life-estate-deed',
    name: 'Life Estate Deed',
    category: 'a-la-carte',
    fixedPrice: 500,
    description: 'A Life Estate Deed is a deed that lets you keep the right to live in and control your home for the rest of your life, while naming who will automatically receive the property after you pass away—so it transfers outside of probate.',
    includes: []
  },
  {
    id: 'small-estate-affidavit',
    name: 'Small Estate Affidavit',
    category: 'a-la-carte',
    fixedPrice: 500,
    description: 'A Small Estate Affidavit is a sworn form that can let family members collect a person\'s property (like bank accounts or a car) without opening a full probate case, as long as the estate is under Illinois\'s limit and meets the required conditions.',
    includes: []
  },
  {
    id: 'special-needs-planning',
    name: 'Special Needs Planning',
    category: 'a-la-carte',
    fixedPrice: 2500,
    description: 'Special needs trust planning',
    includes: []
  },
  {
    id: 'estate-tax-planning',
    name: 'Estate Tax Planning',
    category: 'a-la-carte',
    fixedPrice: 5000,
    description: 'Comprehensive tax planning',
    includes: []
  },
  {
    id: 'trust-restatement',
    name: 'Trust Restatement',
    category: 'a-la-carte',
    fixedPrice: 2000,
    description: 'A Trust Restatement is a way to update and rewrite the terms of your existing trust—like changing who inherits, who\'s in charge, or how distributions work—while keeping the same trust name and date, so you don\'t have to start a brand-new trust from scratch.',
    includes: []
  },
  {
    id: 'will-amendment',
    name: 'Will Amendment',
    category: 'a-la-carte',
    fixedPrice: 500,
    description: 'Amendment to existing will',
    includes: []
  },
  {
    id: 'document-review',
    name: 'Document Review',
    category: 'a-la-carte',
    fixedPrice: 250,
    description: 'Professional review of probate or legal documents to identify potential issues, ensure legal compliance, and provide recommendations for improvements. For review of estate planning documents, please select DIY Estate Plan Review.',
    includes: []
  }
];

export const prenuptialServices: Service[] = [
  {
    id: 'prenuptial-drafting-negotiation',
    name: 'Prenuptial Agreement Drafting & Negotiation',
    category: 'prenuptial',
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
    fixedPrice: 2000,
    description: 'Professional review of prenuptial agreement',
    includes: [
      'Detailed legal analysis',
      'Identification of unfair provisions',
      'Consultation on implications',
      'Recommendations for protection'
    ]
  }
];

export const smallBusinessServices: Service[] = [
  {
    id: 'small-business-package',
    name: 'Small Business Package',
    category: 'small-business',
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
    fixedPrice: 1250,
    description: 'Protect your brand identity with federal trademark registration, including comprehensive searches and application filing',
    includes: [],
    note: 'Includes filing fees'
  },
  {
    id: 'office-action-procedural',
    name: 'Office Action Response (Procedural)',
    category: 'small-business',
    fixedPrice: 500,
    description: 'Expert response to procedural USPTO office actions to overcome trademark application obstacles',
    includes: []
  },
  {
    id: 'office-action-substantive',
    name: 'Office Action Response (Substantive)',
    category: 'small-business',
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
