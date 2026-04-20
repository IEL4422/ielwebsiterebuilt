import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CircleCheck as CheckCircle, Building2, Shield, FileText, Stamp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Small Business Services | Illinois Estate Law',
  description: 'LLC formation, trademark registration, and business essentials for Illinois entrepreneurs. Flat-fee packages starting at $1,000.',
  openGraph: {
    title: 'Small Business Services | Illinois Estate Law',
    description: 'LLC formation, trademark registration, and business essentials for Illinois entrepreneurs.',
    url: 'https://www.illinoisestatelaw.com/small-business/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/small-business/',
  },
}

const services = [
  {
    title: 'Small Business Package',
    price: '$2,000',
    description: 'Comprehensive business formation and brand protection.',
    includes: [
      'LLC Registration',
      'Trademark Registration',
      'Operating Agreement',
      'EIN Number',
      'All Filing Fees Included',
    ],
    icon: Building2,
  },
  {
    title: 'Business Essentials',
    price: '$1,000',
    description: 'Essential business formation package to get you started.',
    includes: [
      'LLC Registration',
      'EIN Number',
      'Operating Agreement',
      'Filing Fees Included',
    ],
    icon: FileText,
  },
  {
    title: 'Trademark Registration',
    price: '$1,250',
    description: 'Protect your brand with federal trademark registration.',
    includes: [
      'Comprehensive Trademark Search',
      'Application Filing',
      'Filing Fees Included',
    ],
    icon: Stamp,
  },
]

export default function SmallBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Illinois Estate Law - Small Business Services",
            "description": "LLC formation, trademark registration, and business essentials for Illinois entrepreneurs.",
            "url": "https://www.illinoisestatelaw.com/small-business/",
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
            "serviceType": "Small Business Legal Services"
          })
        }}
      />

      <main>
        <section className="relative bg-gradient-to-br from-[#2D3E50] via-[#4A708B] to-[#2D3E50] min-h-[340px] flex items-center py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="font-['Lobster_Two'] text-[45px] md:text-[55px] lg:text-[65px] font-normal text-white leading-tight mb-6">
                    Small Business Services
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    LLC formation, trademark protection, and essential business documents for Illinois entrepreneurs &mdash; all at flat-fee pricing.
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
                    <h3 className="text-2xl font-bold text-white mb-4">What We Offer</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>LLC Registration &amp; Formation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Federal Trademark Registration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Operating Agreements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>EIN Registration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>All Filing Fees Included</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-[1140px]">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] lg:text-[36px] text-[#2D3E50] mb-10 text-center">
              Our Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="border border-gray-200 rounded-xl p-6 flex flex-col">
                    <div className="w-12 h-12 bg-[#2D3E50]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#2D3E50]" />
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#2D3E50] mb-1">{service.title}</h3>
                    <p className="text-[#4A708B] font-bold text-2xl mb-3">{service.price}</p>
                    <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2 mt-auto">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#4A708B] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/services-pricing/"
                className="inline-flex items-center justify-center bg-[#2D3E50] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4A708B] transition-colors"
              >
                View All Services &amp; Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#2D3E50] to-[#4A708B] py-14">
          <div className="container mx-auto px-4 max-w-[1140px] text-center">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] lg:text-[32px] text-white mb-4">
              Ready to Start Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your business formation needs.
            </p>
            <Link
              href="/book-consultation/"
              className="inline-flex items-center justify-center bg-white text-[#2D3E50] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
