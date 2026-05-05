import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CircleCheck as CheckCircle, Chrome as Home, Shield, FileText, DollarSign } from 'lucide-react'
import RelatedServices from '@/components/services/RelatedServices'

export const metadata: Metadata = {
  title: 'Real Estate Closings | Illinois Estate Law',
  description: 'Full-service residential real estate closing representation in Illinois for $2,000. Our attorneys handle every detail of your home purchase or sale closing.',
  openGraph: {
    title: 'Real Estate Closings | Illinois Estate Law',
    description: 'Full-service residential real estate closing representation in Illinois for $2,000.',
    url: 'https://www.illinoisestatelaw.com/chicago-real-estate-closings-lawyer/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/chicago-real-estate-closings-lawyer/',
  },
}

export default function RealEstateClosingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Illinois Estate Law - Real Estate Closings",
            "description": "Full-service residential real estate closing representation in Illinois.",
            "url": "https://www.illinoisestatelaw.com/chicago-real-estate-closings-lawyer/",
            "telephone": "+1-312-373-0731",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chicago",
              "addressRegion": "IL",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "State",
              "name": "Illinois"
            },
            "priceRange": "$$",
            "serviceType": "Real Estate Closings"
          })
        }}
      />

      <main>
        <section className="relative bg-gradient-to-br from-[#2D3E50] via-[#4A708B] to-[#2D3E50] min-h-[400px] flex items-center py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="font-['Lobster_Two'] text-[45px] md:text-[55px] lg:text-[65px] font-normal text-white leading-tight mb-6">
                    Real Estate Closings
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Full-service attorney representation for your home purchase or sale closing in Illinois &mdash; flat fee of $2,000.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/book-consultation/"
                      className="inline-flex items-center justify-center bg-white text-[#2D3E50] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
                    >
                      Schedule Consultation
                    </Link>
                    <Link
                      href="tel:3123730731"
                      className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      (312) 373-0731
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-4">What&apos;s Included</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Contract Review &amp; Negotiation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Title Review &amp; Clearance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Attorney Representation at Closing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Document Preparation &amp; Review</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Unlimited Attorney Consultation</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-white/70 text-sm">Flat Fee</p>
                      <p className="text-3xl font-bold text-white">$2,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-[1140px]">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] lg:text-[36px] text-[#2D3E50] mb-6">
                Why You Need an Attorney for Your Real Estate Closing
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                In Illinois, having an attorney represent you at a real estate closing is standard practice. Whether you are buying or selling a home, an experienced real estate attorney protects your interests throughout the transaction and ensures everything is handled correctly.
              </p>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Our attorneys review every document, negotiate terms on your behalf, resolve title issues, and attend the closing to make sure the transaction goes smoothly. With a flat fee of $2,000, there are no surprises &mdash; you know the cost upfront.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-[1140px]">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] lg:text-[36px] text-[#2D3E50] mb-10 text-center">
              Our Closing Representation Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-[#2D3E50]/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#2D3E50]" />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#2D3E50] mb-2">Contract Review</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Thorough review and negotiation of your purchase or sale contract to protect your interests and identify potential issues before they become problems.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-[#2D3E50]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#2D3E50]" />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#2D3E50] mb-2">Title Review &amp; Clearance</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Examination of the title commitment to identify liens, encumbrances, or other issues that need to be resolved before closing.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-[#2D3E50]/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-[#2D3E50]" />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#2D3E50] mb-2">Closing Attendance</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your attorney attends the closing in person or virtually to review final documents, ensure accuracy, and protect your interests at every step.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-[#2D3E50]/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-[#2D3E50]" />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#2D3E50] mb-2">Settlement Statement Review</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Careful review of the closing disclosure and settlement statement to verify all charges, credits, and prorations are accurate.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-[#2D3E50]/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#2D3E50]" />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#2D3E50] mb-2">Document Preparation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Preparation and review of all closing documents including deeds, transfer declarations, and any additional legal instruments required for the transaction.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-[#2D3E50]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#2D3E50]" />
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#2D3E50] mb-2">Issue Resolution</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Negotiation and resolution of any issues that arise during the closing process, including title defects, inspection concerns, or last-minute disputes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-[1140px]">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] lg:text-[36px] text-[#2D3E50] mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="group border-b border-gray-200">
                <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b]">
                  Do I need an attorney for a real estate closing in Illinois?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pb-4 text-[#2d3e50]">
                  <p>While Illinois does not legally require an attorney for a real estate closing, it is strongly recommended and is standard practice. Most purchase contracts in Illinois include an attorney review period, and having representation ensures your rights are protected throughout the transaction.</p>
                </div>
              </details>

              <details className="group border-b border-gray-200">
                <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b]">
                  What does the $2,000 flat fee cover?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pb-4 text-[#2d3e50]">
                  <p>Our flat fee covers full-service closing representation including contract review and negotiation, title review and clearance, document preparation, attendance at closing, settlement statement review, and unlimited attorney consultation throughout the process.</p>
                </div>
              </details>

              <details className="group border-b border-gray-200">
                <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b]">
                  Do you represent buyers or sellers?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pb-4 text-[#2d3e50]">
                  <p>We represent both buyers and sellers in residential real estate closings. The flat fee is the same regardless of which side of the transaction you are on.</p>
                </div>
              </details>

              <details className="group border-b border-gray-200">
                <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b]">
                  Can the closing be done virtually?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pb-4 text-[#2d3e50]">
                  <p>Yes. We offer both in-person and virtual closing attendance options depending on the requirements of the transaction and the preferences of all parties involved.</p>
                </div>
              </details>

              <details className="group border-b border-gray-200">
                <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b]">
                  What areas of Illinois do you serve?
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pb-4 text-[#2d3e50]">
                  <p>We handle residential real estate closings throughout the state of Illinois, including Cook County, DuPage County, Lake County, Will County, Kane County, and surrounding areas.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="py-10 px-4 sm:px-5 bg-gray-50">
          <div className="max-w-[1140px] mx-auto">
            <RelatedServices currentPage="closing" />
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#2D3E50] to-[#4A708B] py-14">
          <div className="container mx-auto px-4 max-w-[1140px] text-center">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] lg:text-[32px] text-white mb-4">
              Need Closing Representation?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us to schedule your residential real estate closing. Flat fee of $2,000 with no hidden charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation/"
                className="inline-flex items-center justify-center bg-white text-[#2D3E50] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="tel:3123730731"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (312) 373-0731
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
