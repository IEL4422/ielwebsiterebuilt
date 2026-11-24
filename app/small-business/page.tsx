import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, BadgeCheck, Check } from 'lucide-react'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { CTABand } from '@/components/ui/CTAButtons'
import { BuyButtonNotes } from '@/components/ui/BuyButtonNotes'
import { PortalHandoffLink } from '@/components/ui/PortalHandoffLink'
import { buyHref } from '@/lib/portal-handoff'
import { buyButtonLabel } from '@/lib/online-signup'
import { usd } from '@/lib/pricing'
import { smallBusinessServices } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Small Business Services: LLC Formation and Trademark Registration',
  description: 'Flat-fee Illinois LLC formation and federal trademark registration from Illinois Estate Law. Government filing fees are included in both prices.',
  openGraph: {
    title: 'Small Business Services | Illinois Estate Law',
    description: 'Flat-fee Illinois LLC formation and federal trademark registration, with government filing fees included.',
    url: 'https://www.illinoisestatelaw.com/small-business/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/small-business/',
  },
}

const ICONS: Record<string, typeof Building2> = {
  'llc-formation': Building2,
  'trademark-registration': BadgeCheck,
}

export default function SmallBusinessPage() {
  return (
    <main>
      <InnerPageHero
        title="Small Business Legal Services"
        subtitle="Form your Illinois LLC and protect your brand with a federal trademark, each for one flat fee that includes the government filing fee."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] lg:text-[40px] text-[#33414E] mb-4">
              Our Small Business Services
            </h2>
            <p className="text-lg text-slate-600">
              Clear flat fees with no hourly billing. You can start online today, or book a free consultation first if you have questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {smallBusinessServices.map((service) => {
              const Icon = ICONS[service.id] ?? Building2
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="flex flex-col scroll-mt-[150px] border border-gray-200 rounded-xl p-6 lg:p-8"
                >
                  <div className="w-12 h-12 bg-[#33414E]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#33414E]" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl text-[#33414E] mb-1">
                    {service.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#4A708B] mb-4">{service.subtitle}</p>
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] leading-none text-[#33414E] mb-1">
                    {usd(service.fixedPrice ?? 0)}
                  </p>
                  <p className="text-sm text-slate-500 mb-5">Flat fee</p>
                  <p className="text-slate-600 leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2.5 mb-5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[15px] text-slate-700">
                        <Check className="w-5 h-5 shrink-0 text-[#4A708B] mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.note && (
                    <p className="text-sm text-slate-500 mb-5">{service.note}</p>
                  )}
                  <div className="mt-auto pt-2">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <PortalHandoffLink
                        href={buyHref(service.id, { source: 'small-business' })}
                        className="inline-flex flex-1 items-center justify-center bg-[#7E9CC0] hover:bg-[#547298] text-white px-6 py-3.5 rounded-full font-bold transition-colors"
                      >
                        {buyButtonLabel(service.id, { fallback: 'Get Started' })}
                      </PortalHandoffLink>
                      <Link
                        href="/book-consultation/"
                        className="inline-flex flex-1 items-center justify-center border-2 border-[#33414E] text-[#33414E] px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors"
                      >
                        Free Consultation
                      </Link>
                    </div>
                    <BuyButtonNotes serviceId={service.id} />
                  </div>
                </article>
              )
            })}
          </div>

          <p className="mt-10 text-center text-slate-600">
            See every flat fee on our{' '}
            <Link href="/services-pricing/#small-business" className="font-semibold text-[#4A708B] underline hover:text-[#33414E]">
              services and pricing page
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABand
        title="Have questions about your business?"
        subtitle="Book a free consultation and an attorney will help you decide what your business needs before you start."
      />
    </main>
  )
}
