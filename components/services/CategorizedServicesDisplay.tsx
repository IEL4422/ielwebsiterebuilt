'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface Service {
  name: string;
  individualPrice?: number;
  jointPrice?: number;
  fixedPrice?: number;
  includes: string[];
  note?: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  packages: Service[];
  aLaCarte: Service[];
  addOns: Service[];
}

export function CategorizedServicesDisplay() {
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

  const renderServiceCard = (service: Service, index: number) => {
    const hasMultiplePrices = service.individualPrice && service.jointPrice;

    return (
      <div
        key={index}
        className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4"
      >
        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
          {service.name}
        </h3>
        <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 sm:text-[18px]">
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
          <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
            <p className="mb-3">
              <span className="underline">Includes</span>: {service.includes.join(', ')}
            </p>
          </div>
        )}
      </div>
    );
  };

  const categories: ServiceCategory[] = [
    {
      id: 'estate-planning',
      name: 'Estate Planning',
      packages: [
        {
          name: 'Trust Package',
          individualPrice: 3500,
          jointPrice: 5000,
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
          name: 'Probate Avoidance Package',
          individualPrice: 1750,
          jointPrice: 2250,
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
          name: 'Will Package',
          individualPrice: 1250,
          jointPrice: 1750,
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
          name: 'DIY Estate Plan Review',
          individualPrice: 750,
          jointPrice: 1000,
          includes: [
            'Comprehensive review and redlining of previously drafted estate planning documents',
            'One (1) hour attorney review session'
          ]
        }
      ],
      aLaCarte: [
        {
          name: 'Revocable Living Trust',
          individualPrice: 2500,
          jointPrice: 3500,
          includes: []
        },
        {
          name: 'Last Will and Testament',
          individualPrice: 750,
          jointPrice: 1250,
          includes: []
        },
        {
          name: 'Power of Attorney',
          note: 'Financial & Medical',
          fixedPrice: 500,
          includes: []
        },
        {
          name: 'Healthcare Directive/Living Will',
          fixedPrice: 500,
          includes: []
        },
        {
          name: 'Trust Restatement',
          fixedPrice: 2000,
          includes: []
        },
        {
          name: 'Will Amendment',
          fixedPrice: 500,
          includes: []
        }
      ],
      addOns: [
        {
          name: 'Trust Funding',
          fixedPrice: 100,
          note: '$100 per asset',
          includes: []
        },
        {
          name: 'Special Needs Planning',
          fixedPrice: 2500,
          includes: []
        },
        {
          name: 'Estate Tax Planning',
          fixedPrice: 5000,
          includes: []
        }
      ]
    },
    {
      id: 'probate',
      name: 'Probate',
      packages: [
        {
          name: 'Probate Package',
          fixedPrice: 7500,
          includes: [
            'Preparation and Filing of All Necessary Documents',
            'Notification of Heirs and Creditors',
            'Heirship Research',
            'Asset Search',
            'Representation at All Court Hearings',
            'Filing Fees',
            'Creditor Notification Publication Fees',
            'Preparation of Final Accounting',
            'Access to Client Portal',
            'Unlimited Attorney Consultation'
          ],
          note: '$7,500 for Uncontested Matters - Varies for Contested Matters'
        },
        {
          name: 'Summary Probate',
          fixedPrice: 4000,
          includes: [
            'Preparation and Filing of All Necessary Documents',
            'Notification of Heirs and Creditors',
            'Heirship Research',
            'Asset Search',
            'Representation at All Court Hearings',
            'Filing Fees',
            'Creditor Notification Publication Fees',
            'Preparation of Final Accounting',
            'Access to Client Portal',
            'Unlimited Attorney Consultation'
          ],
          note: 'For estates valued at $100,000 or less, no real estate, and no issues among heirs'
        },
        {
          name: 'Partial Probate',
          fixedPrice: 3500,
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
          name: 'Heir Representation',
          fixedPrice: 2500,
          includes: [
            'Full Legal Representation Throughout the Probate Proceeding',
            'Review of All Filings and Court Documents',
            'Protection of Heir\'s Interests and Inheritance Rights',
            'Attendance at All Court Hearings on Behalf of Heir',
            'Unlimited Attorney Consultation'
          ],
          note: '$2,500 per heir - Representation throughout the entire probate matter of non-representative heirs'
        }
      ],
      aLaCarte: [],
      addOns: []
    },
    {
      id: 'prenuptial-agreements',
      name: 'Prenuptial Agreements',
      packages: [
        {
          name: 'Prenuptial Agreement Drafting & Negotiation',
          fixedPrice: 5000,
          includes: [
            'Initial consultation with both parties',
            'Full financial disclosure review',
            'Custom drafting tailored to your situation',
            'Negotiation between parties',
            'Finalization and execution'
          ]
        },
        {
          name: 'Prenuptial Agreement Review & Negotiation',
          fixedPrice: 3000,
          includes: [
            'Comprehensive legal review',
            'Analysis of fairness and enforceability',
            'Negotiation on your behalf',
            'Recommendations for modifications',
            'Protection of your interests'
          ]
        },
        {
          name: 'Prenuptial Agreement Drafting',
          fixedPrice: 3000,
          includes: [
            'Initial consultation',
            'Custom agreement drafting',
            'Legal compliance review',
            'Finalization and execution guidance'
          ]
        },
        {
          name: 'Prenuptial Agreement Review',
          fixedPrice: 2000,
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
          name: 'Quit Claim Deed',
          fixedPrice: 500,
          includes: []
        },
        {
          name: 'Transfer-on-Death Instrument',
          fixedPrice: 500,
          includes: []
        },
        {
          name: 'Life Estate Deed',
          fixedPrice: 500,
          includes: []
        }
      ],
      addOns: [
        {
          name: 'Additional Deed',
          fixedPrice: 500,
          note: 'For those owning multiple properties',
          includes: []
        }
      ]
    },
    {
      id: 'small-business',
      name: 'Small Business',
      packages: [
        {
          name: 'Small Business Package',
          fixedPrice: 2000,
          includes: [
            'LLC Registration',
            'Trademark Registration',
            'Operating Agreement',
            'EIN Number',
            'All Filing Fees Included'
          ]
        },
        {
          name: 'Business Essentials',
          fixedPrice: 1000,
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
          name: 'Trademark Registration',
          fixedPrice: 1250,
          note: 'Includes filing fees',
          includes: []
        },
        {
          name: 'Office Action Response (Procedural)',
          fixedPrice: 500,
          includes: []
        },
        {
          name: 'Office Action Response (Substantive)',
          fixedPrice: 1500,
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
              <div className="p-6 bg-white">
                {category.packages.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#2d3e50] mb-4 sm:text-[22px]">
                      Packages
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                      {category.packages.map(renderServiceCard)}
                    </div>
                  </div>
                )}

                {category.aLaCarte.length > 0 && (
                  <div className={category.addOns.length > 0 ? 'mb-8' : ''}>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#2d3e50] mb-4 sm:text-[22px]">
                      A La Carte Services
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
                      {category.aLaCarte.map(renderServiceCard)}
                    </div>
                  </div>
                )}

                {category.addOns.length > 0 && (
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#2d3e50] mb-4 sm:text-[22px]">
                      Add-Ons
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
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
