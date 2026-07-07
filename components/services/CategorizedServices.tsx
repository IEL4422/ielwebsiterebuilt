'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
interface DisplayService {
  id: string;
  name: string;
  subtitle?: string;
  category: string;
  individualPrice?: number;
  jointPrice?: number;
  fixedPrice?: number;
  pricingLabel?: string;
  requiresConsultation?: boolean;
  description: string;
  includes: string[];
  note?: string;
}

interface CategorizedServicesProps {
  onSelectService: (service: DisplayService) => void;
  expandedDescriptions: Set<string>;
  toggleDescription: (serviceId: string, e: React.MouseEvent) => void;
}

interface ServiceCategory {
  id: string;
  name: string;
  packages: DisplayService[];
  aLaCarte: DisplayService[];
  addOns: DisplayService[];
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

  const renderServiceCard = (service: DisplayService) => {
    const hasMultiplePrices = service.individualPrice && service.jointPrice;
    const isExpanded = expandedDescriptions.has(service.id);

    return (
      <div
        key={service.id}
        className="bg-gradient-to-br from-[#33414E] to-[#4A708B] rounded-[10px] p-6 hover:shadow-lg transition-shadow"
      >
        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe]">
          {service.name}
        </h3>
        {service.subtitle && (
          <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3] mt-1">
            {service.subtitle}
          </p>
        )}
        <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 mt-4">
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
          id: 'trust-package',
          name: 'Trust Package',
          category: 'estate-planning',
          individualPrice: 3500,
          jointPrice: 5000,
          description: 'Comprehensive trust-based estate plan. Joint package includes two complete sets of all documents. Trust may be joint, individual, or one of each.',
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
          id: 'probate-avoidance-package',
          name: 'Probate Avoidance Package',
          category: 'estate-planning',
          individualPrice: 1750,
          jointPrice: 2250,
          description: 'Essential documents to avoid probate. Joint package includes two complete sets of all documents.',
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
          id: 'will-package',
          name: 'Will Package',
          category: 'estate-planning',
          individualPrice: 1250,
          jointPrice: 1750,
          description: 'Complete will-based estate plan. Joint package includes two complete sets of all documents.',
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
          id: 'diy-estate-plan-review',
          name: 'DIY Estate Plan Review',
          category: 'estate-planning',
          individualPrice: 500,
          jointPrice: 750,
          description: 'Professional review of existing estate planning documents. Joint covers up to 5 documents per person.',
          includes: [
            'Comprehensive review and redlining of previously drafted estate planning documents (up to 5 documents)',
            '1-Hour Attorney Review Session'
          ]
        },
        {
          id: 'estate-tax-planning-package',
          name: 'Estate Tax Planning Package',
          category: 'estate-planning',
          pricingLabel: 'Individual: $10,000 + 1% | Joint: $15,000 + 1%',
          description: 'Individual: $10,000 base + 1% of total estate value. Joint: $15,000 base + 1% of total estate value. Base fee paid upfront; 1% of total estate value invoiced separately at time of document finalization.',
          includes: [
            'All documents included in the Trust Package',
            'Federal & Illinois Estate Tax Planning',
            'Any necessary Irrevocable Trust(s) required to minimize or avoid estate tax (in addition to base Revocable Living Trust)'
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
          description: 'A Revocable Living Trust is a legal plan where you put your home, bank accounts, and other property into a trust you control. Includes 1 deed transfer to trust and online notarization.',
          includes: []
        },
        {
          id: 'last-will-testament',
          name: 'Last Will and Testament',
          category: 'a-la-carte',
          individualPrice: 750,
          jointPrice: 1250,
          description: 'A Will is a legal document that says who should inherit your property after you die. Joint includes 2 Wills. Includes online notarization.',
          includes: []
        },
        {
          id: 'power-of-attorney',
          name: 'Powers of Attorney',
          category: 'a-la-carte',
          individualPrice: 500,
          jointPrice: 750,
          description: 'Includes Power of Attorney for Healthcare and Power of Attorney for Property. Joint includes two of each document. Includes online notarization.',
          includes: []
        },
        {
          id: 'healthcare-directive',
          name: 'Healthcare Directive (Living Will)',
          category: 'a-la-carte',
          fixedPrice: 350,
          description: 'A Healthcare Directive records your medical wishes and names someone to speak for you. Includes online notarization.',
          includes: []
        },
        {
          id: 'trust-restatement',
          name: 'Trust Restatement',
          category: 'a-la-carte',
          individualPrice: 2000,
          jointPrice: 3000,
          description: 'Rewrites the terms of your existing trust while keeping the same trust name and date. Includes review of all prior estate planning documents and online/mobile notarization.',
          includes: []
        },
        {
          id: 'will-amendment',
          name: 'Will Amendment',
          category: 'a-la-carte',
          individualPrice: 500,
          jointPrice: 750,
          description: 'Amendment to an existing will. Includes review of the prior will and online notarization.',
          includes: []
        },
        {
          id: 'trust-funding-service',
          name: 'Trust Funding',
          category: 'a-la-carte',
          fixedPrice: 1500,
          description: 'Funding of up to 15 financial assets into trust. Does not include real estate / deed transfers.',
          includes: []
        }
      ],
      addOns: [
        {
          id: 'special-needs-planning',
          name: 'Special Needs Planning',
          category: 'a-la-carte',
          fixedPrice: 3500,
          description: 'Creation or amendment of Revocable Living Trust, or creation of Irrevocable Trust. Can be added to any package or purchased standalone.',
          includes: []
        },
        {
          id: 'estate-tax-planning',
          name: 'Estate Tax Planning (Add-On)',
          category: 'a-la-carte',
          pricingLabel: '$5,000 base + 1% of Total Estate Value',
          description: 'Can be added to any existing package or estate plan. $5,000 base fee paid upfront; 1% of total estate value invoiced at time of document finalization.',
          includes: []
        }
      ]
    },
    {
      id: 'probate',
      name: 'Probate',
      packages: [
        {
          id: 'bond-in-lieu-of-probate',
          name: 'Bond in Lieu of Probate',
          subtitle: 'When the sole estate asset is real estate',
          category: 'probate',
          fixedPrice: 1500,
          description: 'Applies when the sole estate asset is real estate and all heirs agree on disposition. Illinois law allows title transfer through a bond in lieu of probate, avoiding a full probate proceeding.',
          includes: [
            'Title Transfer Documentation',
            'Coordination with Title Company for Out-of-Court Title Transfer',
            'Unlimited Attorney Consultations'
          ],
          note: 'Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
        },
        {
          id: 'summary-probate',
          name: 'Small Estate Probate',
          subtitle: 'For uncontested estates under $150,000 requiring Letters of Office',
          category: 'probate',
          fixedPrice: 3500,
          description: 'Applies to estates under $150,000 where a bank will not accept a Small Estate Affidavit and Letters of Office are required. Uncontested matters only — any contested issues will be converted to an hourly rate with a retainer.',
          includes: probateIncludes,
          note: 'Uncontested matters only. Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
        },
        {
          id: 'standard-probate',
          name: 'Standard Probate',
          subtitle: 'Uncontested probate for estates between $150,000 and $2,000,000',
          category: 'probate',
          fixedPrice: 6500,
          description: 'Applies to uncontested estates valued between $150,000 and $2,000,000. Flat-fee from opening through closing. Uncontested matters only — any contested issues will be converted to an hourly rate with a retainer.',
          includes: probateIncludes,
          note: 'Uncontested matters only. Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
        },
        {
          id: 'large-estate-probate',
          name: 'Large Estate Probate',
          subtitle: 'Uncontested probate for estates above $2,000,000',
          category: 'probate',
          pricingLabel: '$6,500 + 1% of Net Estate Value',
          description: 'Applies to uncontested estates anticipated to be valued above $2,000,000. The 1% fee on net estate value is invoiced at the time of administration. Uncontested matters only.',
          includes: probateIncludes,
          note: 'The $6,500 base fee is due at engagement. The 1% fee on net estate value is collected at the time of administration. Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
        },
        {
          id: 'probate-reopening',
          name: 'Probate Reopening',
          category: 'probate',
          fixedPrice: 2500,
          description: 'Applies when a previously closed probate estate is reopened due to newly discovered assets requiring administration.',
          includes: [
            'Motion to Reopen Probate',
            'Attendance at all required court hearings',
            'Reopening and closing of the estate',
            'Assistance with administration of newly discovered assets',
            'Notice to all heirs',
            'Unlimited Attorney Consultations'
          ]
        },
        {
          id: 'heir-representation',
          name: 'Heir Representation',
          category: 'probate',
          fixedPrice: 2500,
          description: 'Representation of a non-executor / non-administrator heir throughout a probate matter. Does not include contested hearings or motions to contest a will.',
          includes: [
            'Review of all filings and court documentation',
            'Advice and guidance regarding the heir\'s interest and inheritance rights',
            'Filing of claims against the estate, if needed',
            'Attendance at all court hearings on behalf of the heir',
            'Unlimited Attorney Consultations'
          ],
          note: '$2,500 per heir'
        },
        {
          id: 'partial-probate',
          name: 'Partial Probate',
          category: 'probate',
          pricingLabel: 'Starting at $3,500 — individually quoted',
          description: 'Applies when an estate has already been opened and the client is seeking new representation to replace prior counsel. Starting at $3,500; final fee individually quoted based on case progress and complexity (up to $6,500). Uncontested matters only.',
          includes: [
            'Scope of services determined based on the stage of the probate matter and what remains to be completed'
          ]
        },
        {
          id: 'spousal-representation',
          name: 'Spousal Representation',
          category: 'probate',
          fixedPrice: 3500,
          description: 'Applies when representing a spouse who is not the executor or administrator of the estate. Uncontested matters only.',
          includes: [
            'Full legal representation of the spouse throughout probate proceedings',
            'Advice and consultation regarding spousal rights and interests',
            'Filing of claims against the estate, including spousal claim for 50% of the estate if not otherwise provided for in that amount in the will',
            'Attendance at all court hearings on behalf of the spouse',
            'Unlimited Attorney Consultations'
          ]
        },
        {
          id: 'contested-probate',
          name: 'Contested Probate',
          subtitle: 'NOT A FLAT FEE — Hourly Billing',
          category: 'probate',
          pricingLabel: '$5,000 retainer + hourly',
          description: 'Applies when any probate matter becomes or is anticipated to be contested. Attorney hourly rate: $350/hour. Paralegal/Administrative: $125/hour. Retainer replenished as needed.',
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
          id: 'trust-admin-consulting',
          name: 'Trust Administration Consulting',
          subtitle: 'Attorney guidance for individuals serving as trustee',
          category: 'probate',
          pricingLabel: '$3,500 / Year',
          description: 'Comprehensive legal consulting for individuals named as trustee. Illinois Estate Law does NOT serve as Trustee — trustee services are not offered by this firm.',
          includes: [
            'Trust Accounting Review and Preparation',
            'Distribution Review and Guidance',
            'Review of Trust Documentation and Beneficiary Rights',
            'Guidance on Trustee Fiduciary Duties under Illinois Law',
            'Correspondence with Beneficiaries of the Trust',
            'Unlimited Attorney Consultations throughout the year'
          ],
          note: 'Flat annual fee of $3,500.'
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
          id: 'prenuptial-drafting-negotiation',
          name: 'Prenuptial Agreement — Drafting & Negotiation',
          category: 'prenuptial',
          fixedPrice: 5000,
          description: 'Full drafting of agreement and negotiation with the other party.',
          includes: [
            'Initial consultation with represented party',
            'Full financial disclosure review',
            'Custom drafting tailored to client\'s situation',
            'Negotiation between parties',
            'Finalization and execution of the agreement'
          ]
        },
        {
          id: 'prenuptial-review-negotiation',
          name: 'Prenuptial Agreement — Review & Negotiation',
          category: 'prenuptial',
          fixedPrice: 3500,
          description: 'Review of an already drafted agreement with negotiation with the other party.',
          includes: [
            'Initial consultation with represented party',
            'Full financial disclosure review',
            'Review of drafted agreement',
            'Negotiation between parties',
            'Finalization and execution of the agreement'
          ]
        },
        {
          id: 'prenuptial-drafting',
          name: 'Prenuptial Agreement — Drafting Only (No Negotiation)',
          category: 'prenuptial',
          fixedPrice: 2500,
          description: 'Full drafting of agreement based on already agreed upon terms; no negotiation with the other side.',
          includes: [
            'Initial consultation with represented party',
            'Custom agreement drafting',
            'Legal compliance review',
            'Finalization and execution of the agreement'
          ]
        },
        {
          id: 'prenuptial-review',
          name: 'Prenuptial Agreement — Review Only (No Negotiation)',
          category: 'prenuptial',
          fixedPrice: 1500,
          description: 'Review of an already drafted and agreed upon agreement.',
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
          id: 'deed-transfer-to-trust',
          name: 'Additional Deed Transfer to Trust',
          category: 'a-la-carte',
          fixedPrice: 500,
          description: 'For funding multiple properties into an existing or newly created trust. May be added to any package or trust funding service.',
          includes: []
        },
        {
          id: 'quit-claim-deed',
          name: 'Quitclaim Deed',
          category: 'a-la-carte',
          fixedPrice: 500,
          description: 'Preparation and recording of a Quitclaim Deed.',
          includes: []
        },
        {
          id: 'transfer-on-death',
          name: 'Transfer on Death Instrument (TODI)',
          category: 'a-la-carte',
          fixedPrice: 500,
          description: 'Preparation and recording of a Transfer on Death Instrument for real estate.',
          includes: []
        },
        {
          id: 'life-estate-deed',
          name: 'Life Estate Deed',
          category: 'a-la-carte',
          fixedPrice: 500,
          description: 'Preparation and recording of a Life Estate Deed.',
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
          id: 'residential-closing',
          name: 'Residential Closing (Buyer or Seller)',
          category: 'real-estate',
          fixedPrice: 750,
          description: 'Flat fee paid at the time of closing. Does not include closing costs. Full-service attorney representation for residential real estate closings in Illinois.',
          includes: [
            'Contract Review',
            'Title Review and Clearance',
            'Title Search',
            'Document Preparation',
            'Settlement Statement Review',
            'Attorney Representation at Closing',
            'Unlimited Attorney Consultations'
          ]
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
              <div className="p-6 bg-[#f8f9fa]">
                {category.packages.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#2d3e50] mb-4">
                      Packages
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {category.packages.map(renderServiceCard)}
                    </div>
                    {category.id === 'probate' && (
                      <div className="mt-6 bg-[#33414E]/5 border border-[#33414E]/20 rounded-lg p-5">
                        <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#33414E]">
                          <strong>Wrongful Death Cases:</strong> Ask us about our special wrongful death attorney referral pricing.
                          Call <a href="tel:3123730731" className="text-[#4A708B] underline hover:text-[#33414E] transition-colors">(312) 373-0731</a> for details.
                        </p>
                      </div>
                    )}
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
