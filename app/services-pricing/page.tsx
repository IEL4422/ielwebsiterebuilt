import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services & Pricing | Illinois Estate Law',
  description: 'Get Clear Answers About Illinois Estate Planning. Learn More About Our Services and How Our Attorneys Can Help. Call Illinois Estate Law Today at (312) 373–0731.',
  openGraph: {
    title: 'Services & Pricing | Illinois Estate Law',
    description: 'Get Clear Answers About Illinois Estate Planning. Learn More About Our Services and How Our Attorneys Can Help. Call Illinois Estate Law Today at (312) 373–0731.',
    url: 'https://www.illinoisestatelaw.com/services-pricing/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Services & Pricing | Illinois Estate Law',
    description: 'Get Clear Answers About Illinois Estate Planning. Learn More About Our Services and How Our Attorneys Can Help. Call Illinois Estate Law Today at (312) 373–0731.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/services-pricing/',
  },
}

export default function ServicesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <div className="flex flex-col items-center justify-center py-0 px-0">
            <h1 className="font-['Lobster_Two'] font-normal text-[#fefefe] capitalize text-[50px] md:text-[60px] lg:text-[75px] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center">
              Services &amp; Pricing
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f9fa] border-b border-gray-200">
        <div className="container mx-auto px-5 max-w-[1240px] py-6">
          <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] text-[#2d3e50] text-center sm:text-[16px]">
            We are pleased to offer payment plans for all services.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-5 max-w-[1240px] py-[100px] lg:py-[60px] lg:px-5 sm:py-[60px] sm:px-4">
        <div className="flex flex-col gap-[21px] lg:flex-row lg:gap-[60px]">
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-4 sm:text-[28px]">
                Estate Planning Packages
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                    Trust Package
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 sm:text-[18px]">
                    Individual: $3,500<br />Joint: $5,000
                  </p>
                  <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    <p className="mb-3">
                      <span className="underline">Includes</span>: Revocable Living Trust, Pour-Over Will, Power of Attorney for Healthcare and Property, Healthcare Directive (Living Will), Remembrance &amp; Services Memorandum, Personal Property Memorandum, (1) Deed Transfer of Real Estate to Trust, Online or Mobile Notarization, Physical &amp; Digital Portfolio, Access to <a href="/client-portal/" className="underline hover:text-white">Client Portal</a>, and Unlimited Attorney Consultation.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                    Probate Avoidance Package
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 sm:text-[18px]">
                    Individual: $1,250<br />Joint: $1,750
                  </p>
                  <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    <p className="mb-3">
                      <span className="underline">Includes</span>: Last Will &amp; Testament, Power of Attorney for Healthcare and Property, Transfer-on-Death Instrument, Healthcare Directive (Living Will), Remembrance &amp; Services Memorandum, Personal Property Memorandum, Online or Mobile Notarization, Physical &amp; Digital Portfolio, Access to <a href="/client-portal/" className="underline hover:text-white">Client Portal</a>, and Unlimited Attorney Consultation.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                    Will Package
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 sm:text-[18px]">
                    Individual: $1,250<br />Joint: $1,750
                  </p>
                  <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    <p className="mb-3">
                      <span className="underline">Includes</span>: Last Will &amp; Testament, Power of Attorney for Healthcare and Property, Healthcare Directive (Living Will), Remembrance &amp; Services Memorandum, Personal Property Memorandum, Online or Mobile Notarization, Physical &amp; Digital Portfolio, Access to <a href="/client-portal/" className="underline hover:text-white">Client Portal</a>, and Unlimited Attorney Consultation.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                    DIY Estate Plan Review
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 sm:text-[18px]">
                    Individual: $750<br />Joint: $1,000
                  </p>
                  <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    <p className="mb-3">
                      <span className="underline">Includes</span>: Comprehensive review and redlining of previously drafted estate planning documents and one (1) hour attorney review session.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-4 sm:text-[28px]">
                Probate Packages
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                    Probate Package
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 sm:text-[18px]">
                    $7,500 for Uncontested Matters<br />
                    Varies for Contested Matters
                  </p>
                  <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    <p className="mb-3">
                      <span className="underline">Includes</span>: Preparation and Filing of All Necessary Documents, Notification of Heirs and Creditors, Heirship Research, Asset Search, Representation at All Court Hearings, <strong>Filing Fees, Creditor Notification Publication Fees</strong>, Preparation of Final Accounting, Access to <a href="/client-portal/" className="underline hover:text-white"><strong>Client Portal</strong></a>, and Unlimited Attorney Consultation.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                    Partial Probate
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-2 sm:text-[18px]">
                    $3,500
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3] italic mb-4">
                    For probate cases that have already been filed.
                  </p>
                  <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    <p className="mb-3">
                      <span className="underline">Includes</span>: Preparation and Filing of All Necessary Documents, Notification of Heirs and Creditors, Heirship Research, Asset Search, Representation at All Court Hearings, Preparation of Final Accounting, and Unlimited Attorney Consultation.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                    Small Estate Probate
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-2 sm:text-[18px]">
                    $1,000
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3] italic mb-4">
                    For estates with less than $100,000 in assets and no real estate.
                  </p>
                  <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    <p className="mb-3">
                      <span className="underline">Includes</span>: Preparation of Small Estate Affidavit, Asset Search, Online Notarization, and Unlimited Attorney Consultation.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                    Heir Representation
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-2 sm:text-[18px]">
                    $2,500 per heir
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3] italic mb-4">
                    Representation throughout the entire probate matter of non-representative heirs.
                  </p>
                  <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    <p className="mb-3">
                      <span className="underline">Includes</span>: Full Legal Representation Throughout the Probate Proceeding, Review of All Filings and Court Documents, Protection of Heir&apos;s Interests and Inheritance Rights, Attendance at All Court Hearings on Behalf of Heir, and Unlimited Attorney Consultation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-4 sm:text-[28px]">
                A La Carte &amp; Add-Ons
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[#2d3e50] mb-6">
                Online notarization is included with A La Carte services and Add-Ons. Mobile notarization is an additional charge. Prices include all filing fees (if applicable).
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Revocable Living Trust
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $2,500/$3,500
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Last Will and Testament
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $750/$1,250
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Power of Attorney
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    Financial &amp; Medical – $500
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Healthcare Directive/Living Will
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $500
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Quit Claim Deed
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $500
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Transfer-on-Death Instrument
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $500
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Life Estate Deed
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $500
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Small Estate Affidavit
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $500
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Trust Funding
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $100 per asset
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Special Needs Planning
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $2,500
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Estate Tax Planning
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $5,000
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Trust Restatement
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $2,000
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-4">
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#fefefe] mb-2">
                    Will Amendment
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                    $500
                  </p>
                </div>
              </div>
            </div>

          <div className="mb-8">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-4 sm:text-[28px]">
              Prenuptial Agreement Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                  Prenuptial Agreement Drafting &amp; Negotiation
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 sm:text-[18px]">
                  $5,000
                </p>
                <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                  <p className="mb-3">
                    <span className="underline">Includes</span>: Initial consultation with both parties, full financial disclosure review, custom drafting tailored to your situation, negotiation between parties, and finalization and execution.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                  Prenuptial Agreement Review &amp; Negotiation
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 sm:text-[18px]">
                  $3,000
                </p>
                <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                  <p className="mb-3">
                    <span className="underline">Includes</span>: Comprehensive legal review, analysis of fairness and enforceability, negotiation on your behalf, recommendations for modifications, and protection of your interests.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                  Prenuptial Agreement Drafting
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 sm:text-[18px]">
                  $3,000
                </p>
                <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                  <p className="mb-3">
                    <span className="underline">Includes</span>: Initial consultation, custom agreement drafting, legal compliance review, and finalization and execution guidance.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 sm:p-4">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4 sm:text-[20px]">
                  Prenuptial Agreement Review
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4 sm:text-[18px]">
                  $2,000
                </p>
                <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3]">
                  <p className="mb-3">
                    <span className="underline">Includes</span>: Detailed legal analysis, identification of unfair provisions, consultation on implications, and recommendations for protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[38%] flex flex-col gap-0">
          <div className="bg-[#4a708b] rounded-[10px] p-6 lg:p-8 lg:sticky lg:top-[120px]">
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[28px] leading-[33.6px] text-[#f3f3f3] mb-4 sm:text-[20px] sm:leading-[24px]">
                Ready to Get Started?
              </h3>
              <p className="text-[#e5e5e5] mb-6 sm:text-[14px]">
                At Illinois Estate Law, we offer innovating estate planning and probate solutions that can be customized to fit your unique needs.
              </p>
              <a
                href="/get-started/"
                className="w-full inline-block text-center bg-[#fefefe] text-[#2d3e50] font-['Plus_Jakarta_Sans'] font-bold text-base uppercase py-[14px] px-6 rounded-[32px] border border-[#fefefe] hover:bg-[#2d3e50] hover:text-[#fefefe] transition-colors"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 max-w-[1240px] pb-[60px] sm:px-4">
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[40px] text-[#2d3e50] mb-8 sm:text-[28px] sm:mb-6">
          Frequently Asked Questions About Illinois Estate Law
        </h2>

        <div className="space-y-4">
          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              How Can I Choose the Right Estate Planning Package for My Needs?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>To help you choose the right estate planning package, you can take our estate planning quiz available on our website. Additionally, you can book a consultation with one of our experienced attorneys who will guide you in selecting the best package for your specific needs.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Do All Packages Really Include Unlimited Attorney Consultations?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes! We can talk as many times as you would like to ensure you are happy with the service. The unlimited consultation period ends once you receive the finished product(s).</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              What Are the Costs Associated With Your Services?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Our firm offers flat-fee, customizable packages for all our services. Once we can better understand your specific needs, we will provide you with a quote.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Does Your Flat-Fee Include Costs for Court Filings or Third-Party Expenses, Beyond the Recording of the First Deed?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p className="mb-4">Our packages include most extraneous expenses, court fees, etc. For probate matters, this includes the creditor publication charge and the filing fee. The surety bond or the insurance policy for the estate would be directly paid by the client to the insurance provider.</p>
              <p>For our estate planning packages, all fees, including full trust funding, notarization, and recording costs are included. Please note that our a la carte products are not all-inclusive, and additional extraneous fees may be charged.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Why Do You Do Flat-Fee Packages?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Our attorneys have worked at firms that bill clients hourly and we can confidently say, we won't go back. We believe estate plans are essential and therefore, you should not have to pay an arm and a leg to get your affairs in order.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Does the Package Include Transfer of Property Into the Trust?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes–our packages are all inclusive. We draft the 1 deed for you and also record it with the Recorder of Deeds. All additional deeds are $250 for completion and recording.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Do You Provide Assistance With Funding My Trust?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes, we provide comprehensive assistance with trust funding. We draft and record any necessary deeds and offer detailed instructions on how to transfer other assets into the trust. Our goal is to ensure all your assets are properly transferred to the trust or have designated pay-on-death beneficiaries.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Can I Change My Package If I Decide I Need a Different Product?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Absolutely, we offer flexibility in our services. If you decide you need a different product than the package you initially chose, we can customize and adjust your package to better suit your needs.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              When Should I Consider Updating My Estate Planning Documents?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p className="mb-4">We recommend reviewing and possibly updating your estate planning documents whenever significant life changes occur. These events include, but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Marital Status Changes:</strong> If you get married, divorced, or remarry, your estate plan should reflect these changes to ensure your assets are distributed according to your current wishes.</li>
                <li><strong>Birth or Adoption of a Child:</strong> Welcoming a new child into your family is a pivotal reason to update your estate plan, particularly to name guardians and provide for your child's financial future.</li>
                <li><strong>Significant Financial Changes:</strong> An increase or decrease in your assets or a change in the type of assets you hold, such as purchasing a new property or starting a business, should prompt a review.</li>
                <li><strong>Relocation:</strong> Moving to a different state or country can impact your estate plan due to varying state laws and tax implications.</li>
                <li><strong>Changes in Health:</strong> A significant change in your health or a diagnosis of a serious illness necessitates updating your estate planning documents, especially your healthcare directives and powers of attorney.</li>
                <li><strong>Changes in Relationships:</strong> If your relationships with beneficiaries, executors, or trustees change, you should update your documents to reflect your current preferences and wishes.</li>
                <li><strong>Tax Law Changes:</strong> Changes in federal or state tax laws can impact your estate planning strategies. Consulting with an attorney to ensure your plan is tax-efficient is crucial.</li>
              </ul>
              <p>Regularly reviewing your estate planning documents ensures they accurately reflect your current life situation and wishes.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Is There Attorney-Client Privilege?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes! Once you choose your package, you will sign a Client Services Agreement that outlines the terms of the attorney-client relationship, which includes attorney-client privilege.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              What Are Your Qualifications?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>All of our attorneys are licensed by the Supreme Court of Illinois and have significant estate planning and probate experience.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              How Do You Handle the Collection of My Personal and Financial Information Needed to Draft the Documents? Is There a Secure Online Portal or a Questionnaire?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes – we use a secure online questionnaire to gather your personal information, which complies with PCI Level 1 and HIPAA.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              How Are the Documents Signed and Notarized?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>We offer two options: (1) Online Notarization through an online notary platform or (2) Mobile Notarization in which a notary travels to your home. Online notarizations are included for both A la Carte services and all packages. Mobile notarization is included only for packages.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Will I Have a Dedicated Attorney or Case Manager, or Will My Case Be Handled by Multiple Staff Members Throughout the Process?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>You will work with a dedicated attorney who will handle your matter from start to finish. We may have a paralegal assist with administrative and scheduling functions.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Do You Have an Ongoing Maintenance Program or Subscription Service for Clients Who Want Regular Document Reviews and Legal Updates?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes, once your estate planning documents are finalized, we offer a $99 per year maintenance subscription, which includes additional funding of new assets and/or amendments and modifications.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              What Is the Estimated Timeline From Package Purchase to the Final Signing of My Documents?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>The estate planning process usually takes between 1-3 months from start to finish, but is largely dependent on your schedule and availability. The probate process typically takes around 14 months due to deadlines and court dates set by the court.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              If I Have an Existing Will or Trust Drafted by Another Attorney, What Is Your Process for Reviewing, Incorporating, or Completely Replacing Those Documents?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>We offer a service to review and modify DIY and previously drafted estate plans. Our review service includes a comprehensive review of your plan and a 1-hour review session with our attorney. Any amendments and modifications to your existing plan will be tracked for transparency.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Do You Offer Estate Planning Services for Blended Families, Business Owners, or Clients With Special Needs Beneficiaries?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Absolutely. Our staff is experienced in estate planning for blended families and business owners, and we provide special add-on services for special needs planning and estate tax planning.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Should I Schedule a Consultation Before Purchasing a Package?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>That is entirely up to you! We offer a consultation prior to purchase and unlimited meetings and consultations once the package is purchased.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Can I Schedule an In-Person Meeting at One of Your Offices?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes, in-person meetings are available by request. We have physical offices throughout Illinois. Please visit our office locations page to find the nearest office and schedule your appointment.</p>
            </div>
          </details>
        </div>
      </div>

      <div className="container mx-auto px-5 max-w-[1240px] pb-[60px] sm:px-4">
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[40px] text-[#2d3e50] mb-8 sm:text-[28px] sm:mb-6">
          Book Consultation
        </h2>

        <div className="w-full">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/illinoisestatelaw/smith-ai-scheduling?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=5984c5"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </>
  )
}
