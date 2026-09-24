'use client';

import { useState } from 'react';
import { A_LA_CARTE, ESTATE_PLANNING, PROBATE, RATES, REAL_ESTATE, RETAINERS, TRUST_ADMIN, usd, hourly } from '@/lib/pricing';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export interface Service {
  name: string;
  subtitle?: string;
  individualPrice?: number;
  jointPrice?: number;
  fixedPrice?: number;
  pricingLabel?: string;
  includes: string[];
  note?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  packages: Service[];
  aLaCarte: Service[];
  addOns: Service[];
}

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

export const serviceCategories: ServiceCategory[] = [
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
          'Trust Funding Guidance',
          'Online or Mobile Notarization',
          'Physical & Digital Portfolio',
          'Client Portal Access',
          'Attorney consultations related to the included scope'
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
          'Attorney consultations related to the included scope'
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
          'Attorney consultations related to the included scope'
        ]
      },
      {
        name: 'DIY Estate Plan Review',
        individualPrice: ESTATE_PLANNING.diyReviewIndividual,
        jointPrice: ESTATE_PLANNING.diyReviewJoint,
        includes: [
          'Comprehensive review and redlining of previously drafted estate planning documents (up to 5 documents)',
          '1-Hour Attorney Review Session'
        ]
      },
      {
        name: 'Estate Tax Planning Package',
        individualPrice: ESTATE_PLANNING.estateTaxPackageIndividual,
        jointPrice: ESTATE_PLANNING.estateTaxPackageJoint,
        includes: [
          'All documents included in the Trust Package',
          'Federal & Illinois Estate Tax Planning',
          'One advanced irrevocable trust selected for the approved planning strategy'
        ],
        note: `Fixed fee includes one advanced irrevocable trust. Each additional advanced trust is ${usd(ESTATE_PLANNING.irrevocableTrust)}.`
      },
      {
        name: 'Annual Review Membership',
        fixedPrice: ESTATE_PLANNING.annualReviewMembership,
        includes: [
          'Annual attorney review meeting',
          'Up to two simple amendments to existing documents',
          'Priority scheduling and document storage'
        ],
        note: 'Covers one membership year. New planning strategies or replacement documents require a separate fixed-fee service.'
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
        individualPrice: A_LA_CARTE.powersOfAttorneyIndividual,
        jointPrice: A_LA_CARTE.powersOfAttorneyJoint,
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
        name: 'Trust Funding Guidance',
        fixedPrice: 1500,
        note: 'Guidance for retitling up to 15 financial assets into your trust. You complete the transfers with your institutions. Does not include real estate / deed transfers.',
        includes: []
      },
      {
        name: 'Irrevocable Trust',
        subtitle: 'Gifting Trust, Life Insurance Trust (ILIT), or Supplemental Needs Trust',
        fixedPrice: ESTATE_PLANNING.irrevocableTrust,
        includes: [],
        note: 'A custom-drafted irrevocable trust tailored to your goals. Includes trust funding guidance.'
      }
    ],
    addOns: [
      {
        name: 'Special Needs Planning',
        fixedPrice: A_LA_CARTE.specialNeedsPlanning,
        includes: []
      },
      {
        name: 'Estate Tax Planning (Add-On)',
        fixedPrice: A_LA_CARTE.estateTaxPlanningAddOn,
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
          'Attorney consultations related to the included scope'
        ],
        note: 'Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
      },
      {
        name: 'Small Estate Administration',
        subtitle: 'Small Estate Affidavit and Attorney Letter of Direction — no probate case opened',
        fixedPrice: 1000,
        includes: [
          'Small Estate Affidavit',
          'Attorney Letter of Direction',
          'Asset Search'
        ],
        note: 'This is not a probate court filing. If an institution refuses the affidavit and requires Letters of Office, the matter becomes a Standard Probate and is quoted separately.'
      },
      {
        name: 'Standard Probate',
        subtitle: 'Uncontested estates valued at $4,000,000 or less',
        fixedPrice: PROBATE.standard,
        includes: probateIncludes,
        note: 'Uncontested matters only. Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
      },
      {
        name: 'Large Estate Probate',
        subtitle: 'Uncontested estates exceeding $4,000,000',
        fixedPrice: PROBATE.largeEstateBase,
        pricingLabel: `${usd(PROBATE.largeEstateBase)} + ${PROBATE.largeEstatePercent}% of Estate Value`,
        includes: probateIncludes,
        note: 'Full uncontested probate administration from opening through closing. The additional 0.5% of estate value is charged at the time of administration only if the estate value exceeds $4,000,000, due to estate-tax complexity. Surety bond premium is excluded.'
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
          'Attorney consultations related to the included scope'
        ],
        note: 'Applies when a previously closed probate estate is reopened due to newly discovered assets.'
      },
      {
        name: 'Heir Representation',
        fixedPrice: PROBATE.heirRepresentation,
        includes: [
          'Review of all filings and court documentation',
          'Advice and guidance regarding the heir\'s interest and inheritance rights',
          'Filing of claims against the estate, if needed',
          'Attendance at all court hearings on behalf of the heir',
          'Attorney consultations related to the included scope'
        ],
        note: `${usd(PROBATE.heirRepresentation)} per heir. Does not include contested hearings or motions to contest a will.`
      },
      {
        name: 'Partial Probate',
        fixedPrice: PROBATE.partialProbate,
        includes: [
          'Scope of services determined based on the stage of the probate matter and what remains to be completed'
        ],
        note: 'Fixed fee for accepted uncontested substitute-counsel matters through routine closing.'
      },
      {
        name: 'Spousal Representation',
        fixedPrice: PROBATE.spousalRepresentation,
        includes: [
          'Full legal representation of the spouse throughout probate proceedings',
          'Advice and consultation regarding spousal rights and interests',
          'Filing of claims against the estate, including spousal claim for 50% of the estate if not otherwise provided for in that amount in the will',
          'Attendance at all court hearings on behalf of the spouse',
          'Attorney consultations related to the included scope'
        ]
      },
      {
        name: 'Contested Probate',
        subtitle: 'NOT A FLAT FEE — Hourly Billing',
        pricingLabel: `${usd(RETAINERS.contestedProbate)} retainer + hourly`,
        includes: [
          `Minimum ${usd(RETAINERS.contestedProbate)} retainer required to commence representation`,
          `Attorney hourly rate: ${hourly(RATES.attorneyHourly)}`,
          `Paralegal / Administrative hourly rate: ${hourly(RATES.paralegalHourly)}`,
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
        pricingLabel: `${usd(TRUST_ADMIN.consultingAnnual)} / Year`,
        includes: [
          'Trust Accounting Review and Preparation',
          'Distribution Review and Guidance',
          'Review of Trust Documentation and Beneficiary Rights',
          'Guidance on Trustee Fiduciary Duties under Illinois Law',
          'Correspondence with Beneficiaries of the Trust',
          'Up to ten attorney consultation hours during the year'
        ],
        note: `Flat annual fee of ${usd(TRUST_ADMIN.consultingAnnual)}. Work beyond ten attorney hours requires a separate written engagement. Illinois Estate Law does not serve as trustee.`
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
        note: 'Per deed, recording fee included. For funding multiple properties into an existing or newly created trust.',
        includes: []
      },
      {
        name: 'Quitclaim Deed',
        fixedPrice: 500,
        note: 'Recording fee included.',
        includes: []
      },
      {
        name: 'Transfer on Death Instrument (TODI)',
        fixedPrice: 500,
        note: 'Recording fee included.',
        includes: []
      },
      {
        name: 'Life Estate Deed',
        fixedPrice: 500,
        note: 'Recording fee included.',
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
        fixedPrice: REAL_ESTATE.residentialClosing,
        includes: [
          'Contract Review',
          'Title Review and Clearance',
          'Title Search',
          'Document Preparation',
          'Settlement Statement Review',
          'Attorney Representation at Closing',
          'Attorney consultations related to the included transaction scope'
        ],
        note: 'For buyers or sellers represented by a real estate agent. The attorney fee is paid at closing, not in advance; for sellers it comes out of the sale proceeds. Does not include closing costs.'
      },
      {
        name: 'Multi-Unit or Investment Closing',
        fixedPrice: REAL_ESTATE.multiUnitOrInvestmentClosing,
        includes: [
          'Contract and attorney-review negotiation',
          'Title, survey, and closing-document review',
          'Settlement statement review and closing representation',
          'Attorney consultations related to the included transaction scope'
        ],
        note: 'For a residential multi-unit or investment property. Closing costs and third-party charges are not included.'
      },
      {
        name: 'Estate, Trust, or Nonstandard Title Closing',
        fixedPrice: REAL_ESTATE.estateTrustOrNonstandardTitleClosing,
        includes: [
          'Authority and governing-document review',
          'Contract, title, survey, and closing-document review',
          'Settlement statement review and closing representation',
          'Attorney consultations related to the included transaction scope'
        ],
        note: 'For a residential closing involving an estate, trust, power of attorney, or other nonstandard title authority.'
      },
      {
        name: 'For Sale By Owner (FSBO) Representation',
        fixedPrice: REAL_ESTATE.fsboRepresentation,
        includes: [
          'Purchase/Sale Contract Drafting or Review',
          'Title Review and Clearance',
          'Title Search',
          'Document Preparation',
          'Settlement Statement Review',
          'Attorney Representation at Closing',
          'Coordination normally handled by a real estate agent',
          'Attorney consultations related to the included transaction scope'
        ],
        note: 'Full-service representation for a For Sale By Owner sale where there is no listing agent, so the attorney also handles the coordination an agent would normally carry. The attorney fee is paid at closing out of the sale proceeds, not in advance. Does not include closing costs.'
      }
    ],
    aLaCarte: [],
    addOns: []
  },
];

/**
 * Single-source price text for a service, mirroring the price shown on each
 * service card in CategorizedServicesDisplay. Used by the quick price list so
 * the two views never drift.
 */
export function getServicePriceText(service: Service): string {
  if (service.pricingLabel) return service.pricingLabel;
  if (service.individualPrice != null && service.jointPrice != null) {
    return `Individual $${service.individualPrice.toLocaleString()} · Joint $${service.jointPrice.toLocaleString()}`;
  }
  if (service.fixedPrice != null) return `$${service.fixedPrice.toLocaleString()}`;
  return '';
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

  const categories = serviceCategories;

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
