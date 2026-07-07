'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface Service {
  name: string;
  subtitle?: string;
  individualPrice?: number;
  jointPrice?: number;
  fixedPrice?: number;
  pricingLabel?: string;
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
        className="bg-gradient-to-br from-[#33414E] to-[#4A708B] rounded-[10px] p-6 sm:p-4"
      >
        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] sm:text-[20px]">
          {service.name}
        </h3>
        {service.subtitle && (
          <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3] mt-1">
            {service.subtitle}
          </p>
        )}
        <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 mt-4 sm:text-[18px]">
          {service.pricingLabel ? (
            service.pricingLabel
          ) : hasMultiplePrices ? (
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
            'Pour Over Will',
            'Power of Attorney for Healthcare',
            'Power of Attorney for Property',
            'Healthcare Directive (Living Will)',
            'HIPAA Authorization',
            'End of Life Planner (complimentary gift)',
            'Personal Property Memorandum',
            '1 Transfer on Death Instrument (TODI) of Real Estate to Trust',
            'Full Trust Funding',
            'Online or Mobile Notarization',
            'Physical & Digital Portfolio',
            'Client Portal Access',
            'Unlimited Attorney Consultations'
          ]
        },
        {
          name: 'Probate Avoidance Package',
          individualPrice: 1750,
          jointPrice: 2250,
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
          ]
        },
        {
          name: 'Will Package',
          individualPrice: 1250,
          jointPrice: 1750,
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
          ]
        },
        {
          name: 'DIY Estate Plan Review',
          individualPrice: 500,
          jointPrice: 750,
          includes: [
            'Comprehensive review and redlining of previously drafted estate planning documents (up to 5 documents)',
            '1-Hour Attorney Review Session'
          ]
        },
        {
          name: 'Estate Tax Planning Package',
          pricingLabel: 'Individual: $10,000 + 1% | Joint: $15,000 + 1%',
          includes: [
            'All documents included in the Trust Package',
            'Federal & Illinois Estate Tax Planning',
            'Any necessary Irrevocable Trust(s) required to minimize or avoid estate tax (in addition to base Revocable Living Trust)'
          ],
          note: 'Individual: $10,000 base fee + 1% of total estate value. Joint: $15,000 base fee + 1% of total estate value. Base fee paid upfront; 1% invoiced separately at time of document finalization.'
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
          name: 'Powers of Attorney',
          note: 'Power of Attorney for Healthcare & Power of Attorney for Property. Joint includes two of each.',
          individualPrice: 500,
          jointPrice: 750,
          includes: []
        },
        {
          name: 'Healthcare Directive (Living Will)',
          fixedPrice: 350,
          includes: []
        },
        {
          name: 'Trust Restatement',
          individualPrice: 2000,
          jointPrice: 3000,
          includes: []
        },
        {
          name: 'Will Amendment',
          individualPrice: 500,
          jointPrice: 750,
          includes: []
        },
        {
          name: 'Trust Funding',
          fixedPrice: 1500,
          note: 'Up to 15 assets. Does not include real estate / deed transfers.',
          includes: []
        }
      ],
      addOns: [
        {
          name: 'Special Needs Planning',
          fixedPrice: 3500,
          includes: []
        },
        {
          name: 'Estate Tax Planning (Add-On)',
          pricingLabel: '$5,000 base + 1% of Total Estate Value',
          includes: []
        }
      ]
    },
    {
      id: 'probate',
      name: 'Probate',
      packages: [
        {
          name: 'Bond in Lieu of Probate',
          subtitle: 'When the sole estate asset is real estate',
          fixedPrice: 1500,
          includes: [
            'Title Transfer Documentation',
            'Coordination with Title Company for Out-of-Court Title Transfer',
            'Unlimited Attorney Consultations'
          ],
          note: 'Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
        },
        {
          name: 'Small Estate Probate',
          subtitle: 'For uncontested estates under $150,000 requiring Letters of Office',
          fixedPrice: 3500,
          includes: probateIncludes,
          note: 'Uncontested matters only. Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
        },
        {
          name: 'Standard Probate',
          subtitle: 'Uncontested probate for estates between $150,000 and $2,000,000',
          fixedPrice: 6500,
          includes: probateIncludes,
          note: 'Uncontested matters only. Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
        },
        {
          name: 'Large Estate Probate',
          subtitle: 'Uncontested probate for estates above $2,000,000',
          pricingLabel: '$6,500 + 1% of Net Estate Value',
          includes: probateIncludes,
          note: 'The $6,500 base fee is due at engagement. The 1% fee on net estate value is collected at the time of administration. Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
        },
        {
          name: 'Probate Reopening',
          fixedPrice: 2500,
          includes: [
            'Motion to Reopen Probate',
            'Attendance at all required court hearings',
            'Reopening and closing of the estate',
            'Assistance with administration of newly discovered assets',
            'Notice to all heirs',
            'Unlimited Attorney Consultations'
          ],
          note: 'Applies when a previously closed probate estate is reopened due to newly discovered assets.'
        },
        {
          name: 'Heir Representation',
          fixedPrice: 2500,
          includes: [
            'Review of all filings and court documentation',
            'Advice and guidance regarding the heir\'s interest and inheritance rights',
            'Filing of claims against the estate, if needed',
            'Attendance at all court hearings on behalf of the heir',
            'Unlimited Attorney Consultations'
          ],
          note: '$2,500 per heir. Does not include contested hearings or motions to contest a will.'
        },
        {
          name: 'Partial Probate',
          pricingLabel: 'Starting at $3,500 — individually quoted',
          includes: [
            'Scope of services determined based on the stage of the probate matter and what remains to be completed'
          ],
          note: 'Starting at $3,500; final fee individually quoted based on case progress, complexity, and unique facts of the matter (up to $6,500). Uncontested matters only.'
        },
        {
          name: 'Spousal Representation',
          fixedPrice: 3500,
          includes: [
            'Full legal representation of the spouse throughout probate proceedings',
            'Advice and consultation regarding spousal rights and interests',
            'Filing of claims against the estate, including spousal claim for 50% of the estate if not otherwise provided for in that amount in the will',
            'Attendance at all court hearings on behalf of the spouse',
            'Unlimited Attorney Consultations'
          ]
        },
        {
          name: 'Contested Probate',
          subtitle: 'NOT A FLAT FEE — Hourly Billing',
          pricingLabel: '$5,000 retainer + hourly',
          includes: [
            'Minimum $5,000 retainer required to commence representation',
            'Attorney hourly rate: $350 / hour',
            'Paralegal / Administrative hourly rate: $125 / hour',
            'Retainer replenished as needed throughout the matter'
          ]
        }
      ],
      aLaCarte: [],
      addOns: []
    },
    {
      id: 'trust-administration',
      name: 'Trust Administration',
      packages: [
        {
          name: 'Trust Administration Consulting',
          subtitle: 'Attorney guidance for individuals serving as trustee',
          pricingLabel: '$3,500 / Year',
          includes: [
            'Trust Accounting Review and Preparation',
            'Distribution Review and Guidance',
            'Review of Trust Documentation and Beneficiary Rights',
            'Guidance on Trustee Fiduciary Duties under Illinois Law',
            'Correspondence with Beneficiaries of the Trust',
            'Unlimited Attorney Consultations throughout the year'
          ],
          note: 'Flat annual fee of $3,500. Illinois Estate Law does NOT serve as Trustee — trustee services are not offered by this firm.'
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
          name: 'Prenuptial Agreement — Drafting & Negotiation',
          fixedPrice: 5000,
          includes: [
            'Initial consultation with represented party',
            'Full financial disclosure review',
            'Custom drafting tailored to client\'s situation',
            'Negotiation between parties',
            'Finalization and execution of the agreement'
          ]
        },
        {
          name: 'Prenuptial Agreement — Review & Negotiation',
          fixedPrice: 3500,
          includes: [
            'Initial consultation with represented party',
            'Full financial disclosure review',
            'Review of drafted agreement',
            'Negotiation between parties',
            'Finalization and execution of the agreement'
          ]
        },
        {
          name: 'Prenuptial Agreement — Drafting Only (No Negotiation)',
          fixedPrice: 2500,
          includes: [
            'Initial consultation with represented party',
            'Custom agreement drafting',
            'Legal compliance review',
            'Finalization and execution of the agreement'
          ]
        },
        {
          name: 'Prenuptial Agreement — Review Only (No Negotiation)',
          fixedPrice: 1500,
          includes: [
            'Review of agreement to ensure it is in line with client\'s wishes',
            'Legal compliance review'
          ]
        }
      ],
      aLaCarte: [],
      addOns: []
    },
    {
      id: 'deeds',
      name: 'Deed Services',
      packages: [],
      aLaCarte: [
        {
          name: 'Additional Deed Transfer to Trust',
          fixedPrice: 500,
          note: 'Per deed. For funding multiple properties into an existing or newly created trust.',
          includes: []
        },
        {
          name: 'Quitclaim Deed',
          fixedPrice: 500,
          includes: []
        },
        {
          name: 'Transfer on Death Instrument (TODI)',
          fixedPrice: 500,
          includes: []
        },
        {
          name: 'Life Estate Deed',
          fixedPrice: 500,
          includes: []
        }
      ],
      addOns: []
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      packages: [
        {
          name: 'Residential Closing (Buyer or Seller)',
          fixedPrice: 750,
          includes: [
            'Contract Review',
            'Title Review and Clearance',
            'Title Search',
            'Document Preparation',
            'Settlement Statement Review',
            'Attorney Representation at Closing',
            'Unlimited Attorney Consultations'
          ],
          note: 'Flat fee paid at the time of closing. Does not include closing costs.'
        }
      ],
      aLaCarte: [],
      addOns: []
    },
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
              className="w-full flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#33414E] to-[#4A708B] hover:from-[#4A708B] hover:to-[#33414E] transition-all"
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
                    {category.id === 'probate' && (
                      <div className="mt-6 bg-[#33414E]/5 border border-[#33414E]/20 rounded-lg p-5">
                        <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#33414E]">
                          <strong>Wrongful Death Cases:</strong> Ask us about our special wrongful death attorney referral pricing.{' '}
                          <Link href="/book-consultation/" className="text-[#4A708B] underline hover:text-[#33414E] transition-colors">
                            Schedule a consultation
                          </Link>{' '}
                          or call{' '}
                          <a href="tel:3123730731" className="text-[#4A708B] underline hover:text-[#33414E] transition-colors">
                            (312) 373-0731
                          </a>{' '}
                          for details.
                        </p>
                      </div>
                    )}
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
