import { AttorneyContext } from '@/components/content/AttorneyContext'
import { estatePlanningPackages } from '@/lib/services-data'
import { usd } from '@/lib/pricing'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Shield, Heart, Scale, ScrollText } from 'lucide-react'
import { InnerPageHero } from '@/components/layout/InnerPageHero'
import { CTABand } from '@/components/ui/CTAButtons'

export const metadata: Metadata = {
  title: 'Chicago Estate Planning Attorney | Serving All Illinois',
  description: 'Estate planning for Chicago, Cook County and all Illinois: wills, trusts, powers of attorney and flat-fee packages with virtual consultations. Protect your family and assets with Illinois Estate Law.',
  openGraph: {
    title: 'Chicago Estate Planning Attorney | Serving All Illinois',
    description: 'Estate planning for Chicago, Cook County and all Illinois: wills, trusts, powers of attorney and flat-fee packages with virtual consultations.',
    url: 'https://www.illinoisestatelaw.com/estate-planning/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/estate-planning/',
  },
}

const practiceAreas = [
  {
    title: 'Wills',
    description: 'A will is the foundation of any estate plan. It lets you decide who inherits your assets, name a guardian for minor children, and appoint an executor to carry out your wishes.',
    href: '/chicago-wills-lawyer/',
    icon: FileText,
  },
  {
    title: 'Trusts',
    description: 'A properly funded revocable trust can avoid probate for trust assets and guide distributions. Irrevocable trusts serve different planning goals and require an individual review of control, tax and eligibility consequences.',
    href: '/chicago-revocable-trusts-lawyer/',
    icon: Shield,
  },
  {
    title: 'Powers of Attorney',
    description: 'Designate a trusted person to manage your financial and legal affairs if you become unable to do so yourself. A critical safeguard for every adult.',
    href: '/chicago-powers-of-attorney-lawyer/',
    icon: Scale,
  },
  {
    title: 'Healthcare Directives',
    description: 'Ensure your medical wishes are honored with a healthcare power of attorney and living will. Make decisions about your care before an emergency arises.',
    href: '/chicago-healthcare-directives-lawyer/',
    icon: Heart,
  },
  {
    title: 'Deeds',
    description: 'Transfer property efficiently with quit claim deeds, transfer-on-death instruments, and life estate deeds. Essential tools for real estate within your estate plan.',
    href: '/chicago-deeds-lawyer/',
    icon: ScrollText,
  },
]

export default function EstatePlanningPage() {
  return (
    <main>
      <InnerPageHero title="Estate Planning for Chicago and All Illinois" subtitle="Wills, trusts and powers of attorney for families in Chicago, Cook County and every Illinois county, with flat-fee packages and virtual consultations." />

      <CTABand />

      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] lg:text-[40px] text-[#33414E] mb-4">
              Our Estate Planning Services
            </h2>
            <p className="text-lg text-slate-600">
              Every family is different. We offer a full range of estate planning services that can be tailored to fit your unique situation, goals, and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => {
              const Icon = area.icon
              return (
                <Link
                  key={area.title}
                  href={area.href}
                  className="group border border-gray-200 rounded-xl p-6 hover:border-[#547298] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#33414E]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#4A708B]/15 transition-colors">
                    <Icon className="w-6 h-6 text-[#33414E]" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#33414E] mb-2 group-hover:text-[#4A708B] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="text-[#4A708B] font-semibold text-sm group-hover:underline">
                    Learn More &rarr;
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14"><div className="mx-auto max-w-[1140px] px-5 space-y-6 text-slate-600 leading-relaxed">
        <h2 className="text-3xl font-bold text-[#33414E]">Choose a package around your family and assets</h2>
        <p>Start with who should make decisions if you cannot, who should inherit, and how your home and accounts are owned. A Chicago condo, a family home elsewhere in Cook County, and property in another Illinois county all deserve coordinated planning. A will, beneficiary designation, deed and trust should work together; buying a document alone does not automatically transfer an asset.</p>
        <div className="grid gap-6 md:grid-cols-3">{['will-package', 'probate-avoidance-package', 'trust-package'].map(id => {
          const service = estatePlanningPackages.find(item => item.id === id)!;
          return <div key={id} className="rounded-xl border bg-white p-6"><h3 className="text-xl font-bold text-[#33414E]">{service.name}</h3>
            <p className="my-3 font-semibold">{usd(service.individualPrice!)} individual / {usd(service.jointPrice!)} joint</p>
            <p>{service.description}</p><ul className="my-4 list-disc pl-5">{service.includes.slice(0, 5).map(item => <li key={item}>{item}</li>)}</ul>
            <Link className="underline" href={`/start-online/?service=${service.id}&clientType=individual&source=estate-planning`}>Review the full package and next steps</Link></div>;
        })}</div>
        <p>Compare the complete inclusions, joint plans and available add-ons on our <Link className="underline" href="/services-pricing/">services and pricing page</Link>. Your written agreement controls the scope; attorney consultations relate to completing that included work.</p>
        <h2 className="text-3xl font-bold text-[#33414E]">How planning works, wherever you live in Illinois</h2>
        <ol className="list-decimal pl-6 space-y-3"><li><strong>Start online or ask questions first.</strong> Review a package online, or book a free consultation if you are unsure which plan fits. Have existing documents and a basic asset list available.</li><li><strong>Share your goals.</strong> Your intake and attorney discussion cover beneficiaries, decision-makers, minor children, property and any special circumstances. Bring questions about blended families, a beneficiary with disabilities or assets outside Illinois.</li><li><strong>Review and sign.</strong> The firm prepares the documents within your agreed scope and guides you through review and the applicable signing steps.</li><li><strong>Put the plan into use.</strong> Coordinate account beneficiaries and any needed property transfers. Trust funding guidance is part of the trust package; revisit the plan after significant family or financial changes.</li></ol>
        <p>Our <Link className="underline" href="/areas-we-serve/">statewide service model</Link> includes Chicago and Cook County without requiring every client to travel to Chicago. If you are comparing a trust with a will, read <Link className="underline" href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/">the practical benefits and limits of a revocable trust</Link>. For an estate after a death, see <Link className="underline" href="/probate/cook-county/">Cook County probate resources</Link> or our <Link className="underline" href="/chicago-probate-lawyer/">Illinois probate services</Link>.</p>
      </div></section>
      <AttorneyContext practice="planning" />

      <CTABand
        title="Not sure where to begin?"
        subtitle="Start online in minutes or book a free consultation, and we will help you choose the right plan for your family and your budget."
      />

      <section className="bg-[#f8f9fa] py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] lg:text-[36px] text-[#33414E] mb-4">
              Why Choose Illinois Estate Law?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#4A708B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#33414E] font-bold text-xl">$</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#33414E] mb-2">Flat-Fee Pricing</h3>
              <p className="text-slate-600 text-sm">No hourly billing. Know exactly what your estate plan costs before you begin.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#4A708B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#33414E] font-bold text-xl">&infin;</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#33414E] mb-2">In-Scope Consultations</h3>
              <p className="text-slate-600 text-sm">Attorney guidance reasonably needed to complete the written package scope.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#4A708B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#33414E] font-bold text-xl">IL</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#33414E] mb-2">Illinois Focused</h3>
              <p className="text-slate-600 text-sm">Deep expertise in Illinois estate planning law across Cook County and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#33414E] to-[#4A708B] py-14">
        <div className="container mx-auto px-4 max-w-[1140px] text-center">
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] lg:text-[32px] text-white mb-4">
            Ready to Protect Your Family?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your estate planning needs with an experienced attorney.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started/"
              className="inline-flex items-center justify-center bg-[#7E9CC0] hover:bg-[#547298] text-white px-8 py-4 rounded-full font-bold transition-colors"
            >
              Get Started Online
            </Link>
            <Link
              href="/book-consultation/"
              className="inline-flex items-center justify-center bg-white text-[#33414E] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
            >
              Free Consultation
            </Link>
            <Link
              href="/services-pricing/"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
