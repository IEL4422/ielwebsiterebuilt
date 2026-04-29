import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Shield, Heart, Scale, ScrollText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Planning Services',
  description: 'Comprehensive estate planning services in Illinois including wills, trusts, powers of attorney, healthcare directives, and more. Protect your family and assets with Illinois Estate Law.',
  openGraph: {
    title: 'Estate Planning Services | Illinois Estate Law',
    description: 'Comprehensive estate planning services in Illinois including wills, trusts, powers of attorney, healthcare directives, and more.',
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
    description: 'Revocable and irrevocable trusts allow you to protect your assets, avoid probate, and maintain control over how and when your beneficiaries receive their inheritance.',
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
      <section className="relative bg-gradient-to-br from-[#2D3E50] via-[#4A708B] to-[#2D3E50] min-h-[340px] flex items-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto text-center">
            <h1 className="font-['Lobster_Two'] text-[45px] md:text-[55px] lg:text-[65px] font-normal text-white leading-tight mb-6">
              Estate Planning Services in Illinois
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive, customized estate planning to protect your family, your assets, and your legacy under Illinois law.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] lg:text-[40px] text-[#2D3E50] mb-4">
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
                  className="group border border-gray-200 rounded-xl p-6 hover:border-[#4A708B] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#2D3E50]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#4A708B]/15 transition-colors">
                    <Icon className="w-6 h-6 text-[#2D3E50]" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#2D3E50] mb-2 group-hover:text-[#4A708B] transition-colors">
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

      <section className="bg-[#f8f9fa] py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] lg:text-[36px] text-[#2D3E50] mb-4">
              Why Choose Illinois Estate Law?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#4A708B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2D3E50] font-bold text-xl">$</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#2D3E50] mb-2">Flat-Fee Pricing</h3>
              <p className="text-slate-600 text-sm">No hourly billing. Know exactly what your estate plan costs before you begin.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#4A708B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2D3E50] font-bold text-xl">&infin;</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#2D3E50] mb-2">Unlimited Consultations</h3>
              <p className="text-slate-600 text-sm">Talk to your attorney as many times as you need throughout the process.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#4A708B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2D3E50] font-bold text-xl">IL</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#2D3E50] mb-2">Illinois Focused</h3>
              <p className="text-slate-600 text-sm">Deep expertise in Illinois estate planning law across Cook County and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#2D3E50] to-[#4A708B] py-14">
        <div className="container mx-auto px-4 max-w-[1140px] text-center">
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] lg:text-[32px] text-white mb-4">
            Ready to Protect Your Family?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your estate planning needs with an experienced attorney.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-consultation/"
              className="inline-flex items-center justify-center bg-white text-[#2D3E50] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
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
