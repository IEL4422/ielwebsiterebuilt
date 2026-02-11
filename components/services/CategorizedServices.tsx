'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Service } from '@/lib/services-data';

interface CategorizedServicesProps {
  onSelectService: (service: Service) => void;
  expandedDescriptions: Set<string>;
  toggleDescription: (serviceId: string, e: React.MouseEvent) => void;
}

interface ServiceCategory {
  id: string;
  name: string;
  packages: Service[];
  aLaCarte: Service[];
  addOns: Service[];
}

export function CategorizedServices({
  onSelectService,
  expandedDescriptions,
  toggleDescription
}: CategorizedServicesProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['estate-planning']));

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const renderServiceCard = (service: Service) => {
    const hasMultiplePrices = service.individualPrice && service.jointPrice;
    const isExpanded = expandedDescriptions.has(service.id);

    return (
      <div
        key={service.id}
        className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 hover:shadow-lg transition-shadow"
      >
        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4">
          {service.name}
        </h3>
        <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4">
          {hasMultiplePrices ? (
            <>
              Individual: ${service.individualPrice?.toLocaleString()}<br />
              Joint: ${service.jointPrice?.toLocaleString()}
            </>
          ) : (
            `$${service.fixedPrice?.toLocaleString()}`
          )}
        </p>
        {service.note && (
          <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3] italic mb-4">
            {service.note}
          </p>
        )}
        {service.includes.length > 0 && (
          <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3] mb-4">
            <p>
              <span className="underline">Includes</span>: {service.includes.join(', ')}
            </p>
          </div>
        )}
        {service.description && (
          <div className="mb-4">
            {isExpanded && (
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] text-[#f3f3f3] mb-3 leading-relaxed">
                {service.description}
              </p>
            )}
            <button
              onClick={(e) => toggleDescription(service.id, e)}
              className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#fefefe] underline hover:text-gray-200 transition-colors"
            >
              {isExpanded ? 'Show Less' : 'More Info'}
            </button>
          </div>
        )}
        <button
          className="w-full mt-4 bg-white text-[#2d3e50] hover:bg-gray-100 font-['Plus_Jakarta_Sans'] font-bold py-3 px-6 rounded-md transition-colors"
          onClick={() => onSelectService(service)}
        >
          Select This Service
        </button>
      </div>
    );
  };

  const categories: ServiceCategory[] = [
    {
      id: 'estate-planning',
      name: 'Estate Planning',
      packages: [
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
      ],
      aLaCarte: [
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
        }
      ],
      addOns: [
        {
          id: 'trust-funding-addon',
          name: 'Additional Trust Funding Assistance',
          category: 'a-la-carte',
          fixedPrice: 100,
          description: 'Professional assistance with transferring additional assets into your trust (per asset)',
          includes: []
        },
        {
          id: 'special-needs-planning',
          name: 'Special Needs Planning',
          category: 'a-la-carte',
          fixedPrice: 2500,
          description: 'Special needs trust planning and documentation',
          includes: []
        },
        {
          id: 'estate-tax-planning',
          name: 'Estate Tax Planning',
          category: 'a-la-carte',
          fixedPrice: 5000,
          description: 'Comprehensive estate tax planning strategies',
          includes: []
        }
      ]
    },
    {
      id: 'probate',
      name: 'Probate',
      packages: [
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
          pricingLabel: 'Varies',
          requiresConsultation: true,
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
          note: 'Consultation required - For probate cases that have already been filed'
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
      ],
      aLaCarte: [
        {
          id: 'document-review',
          name: 'Document Review',
          category: 'a-la-carte',
          fixedPrice: 250,
          description: 'Professional review of probate or legal documents to identify potential issues, ensure legal compliance, and provide recommendations for improvements. For review of estate planning documents, please select DIY Estate Plan Review.',
          includes: []
        }
      ],
      addOns: []
    },
    {
      id: 'prenuptial-agreements',
      name: 'Prenuptial Agreements',
      packages: [
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
      ],
      aLaCarte: [],
      addOns: []
    },
    {
      id: 'deeds',
      name: 'Deeds',
      packages: [],
      aLaCarte: [
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
          description: 'A Transfer-on-Death Instrument (TODI) lets you name who will automatically inherit your real estate when you pass away, without going through probate—you keep full control while you\'re alive, and the property transfers directly to your chosen beneficiaries.',
          includes: []
        },
        {
          id: 'life-estate-deed',
          name: 'Life Estate Deed',
          category: 'a-la-carte',
          fixedPrice: 500,
          description: 'A Life Estate Deed is a deed that lets you keep the right to live in and control your home for the rest of your life, while naming who will automatically receive the property after you pass away—so it transfers outside of probate.',
          includes: []
        }
      ],
      addOns: [
        {
          id: 'additional-deed',
          name: 'Additional Deed',
          category: 'a-la-carte',
          fixedPrice: 500,
          description: 'One deed transferring property to trust is included in the package. For those owning multiple properties, purchase additional deeds here.',
          includes: []
        }
      ]
    },
    {
      id: 'small-business',
      name: 'Small Business',
      packages: [
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
        }
      ],
      aLaCarte: [
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
      ],
      addOns: []
    }
  ];

  return (
    <div className="space-y-6">
      {categories.map((category) => {
        const isExpanded = expandedCategories.has(category.id);
        const hasContent = category.packages.length > 0 || category.aLaCarte.length > 0 || category.addOns.length > 0;

        if (!hasContent) return null;

        return (
          <div key={category.id} className="border border-gray-300 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#2D3E50] to-[#4A708B] hover:from-[#4A708B] hover:to-[#2D3E50] transition-all"
            >
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] text-[#fefefe] sm:text-[24px]">
                {category.name}
              </h2>
              <ChevronDown
                className={`w-8 h-8 text-[#fefefe] flex-shrink-0 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 bg-[#f8f9fa]">
                {category.packages.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#2d3e50] mb-4">
                      Packages
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {category.packages.map(renderServiceCard)}
                    </div>
                  </div>
                )}

                {category.aLaCarte.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#2d3e50] mb-4">
                      A La Carte Services
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {category.aLaCarte.map(renderServiceCard)}
                    </div>
                  </div>
                )}

                {category.addOns.length > 0 && (
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#2d3e50] mb-4">
                      Add-Ons
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {category.addOns.map(renderServiceCard)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
