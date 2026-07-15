import Link from 'next/link';
import { ArrowRight, FileText, Scale, Building2, Home, HeartHandshake, type LucideIcon } from 'lucide-react';

type Service = {
  name: string;
  href: string;
};

type Category = {
  icon: LucideIcon;
  title: string;
  description: string;
  services: Service[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

const categories: Category[] = [
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Deed transfers, residential closings, and prenuptial agreements, practical legal support for Illinois families protecting their property.',
    services: [
      { name: 'Deed Transfers', href: '/chicago-deeds-lawyer/' },
      { name: 'Residential Closings', href: '/chicago-real-estate-closings-lawyer/' },
      { name: 'Prenuptial Agreements', href: '/chicago-prenuptial-agreements-lawyer/' },
    ],
    ctaLabel: 'Explore Real Estate Services',
    ctaHref: '/chicago-deeds-lawyer/',
    featured: true,
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    description: 'Wills, powers of attorney, and healthcare directives drafted to Illinois legal standards, so your wishes are clear and legally binding.',
    services: [
      { name: 'Wills', href: '/chicago-wills-lawyer/' },
      { name: 'Powers of Attorney', href: '/chicago-powers-of-attorney-lawyer/' },
      { name: 'Healthcare Directives', href: '/chicago-healthcare-directives-lawyer/' },
    ],
    ctaLabel: 'Explore Estate Planning',
    ctaHref: '/estate-planning/',
  },
  {
    icon: Scale,
    title: 'Trust Administration',
    description: 'Revocable living trusts let your estate pass privately and without probate. We also guide successor trustees through the administration process after death.',
    services: [
      { name: 'Revocable Living Trusts', href: '/chicago-revocable-trusts-lawyer/' },
      { name: 'Successor Trustee Services', href: '/services-pricing/' },
      { name: 'Trust Funding Guidance', href: '/services-pricing/' },
    ],
    ctaLabel: 'Explore Trust Services',
    ctaHref: '/chicago-revocable-trusts-lawyer/',
  },
  {
    icon: Building2,
    title: 'Probate',
    description: 'We guide executors and families through Illinois probate, court filings, creditor management, and distributions, with flat-fee clarity from day one.',
    services: [
      { name: 'Probate Administration', href: '/chicago-probate-lawyer/' },
      { name: 'Intestate Estates', href: '/chicago-probate-lawyer/' },
      { name: 'Case Transfers Mid-Probate', href: '/chicago-probate-lawyer/' },
    ],
    ctaLabel: 'Explore Probate Services',
    ctaHref: '/chicago-probate-lawyer/',
  },
  {
    icon: HeartHandshake,
    title: 'Guardianship',
    description: 'Guardianship of an adult who can no longer decide, or of a minor child, contested and uncontested \u2014 with the annual court reporting that follows appointment.',
    services: [
      { name: 'Guardianship of the Person', href: '/guardianship/' },
      { name: 'Guardianship of the Estate', href: '/guardianship/' },
      { name: 'Annual Guardian Compliance', href: '/guardianship/#compliance' },
    ],
    ctaLabel: 'Explore Guardianship',
    ctaHref: '/guardianship/',
  },
];

export function PracticeAreasSection() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5 lg:px-0">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#33414E] mb-3">
            Practice Areas
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            Complete estate law services across all of Illinois, transparent flat-fee pricing before you commit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            if (category.featured) {
              return (
                <div
                  key={category.title}
                  className="bg-[#33414E] rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#7E9CC0]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">{category.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5 flex-1">
                    {category.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="flex items-center gap-2 text-sm text-[#7E9CC0] hover:text-white font-medium transition-colors group"
                        >
                          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={category.ctaHref}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#7E9CC0] hover:bg-[#547298] px-5 py-3 rounded-full transition-colors self-start"
                  >
                    {category.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            }
            return (
              <div
                key={category.title}
                className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col hover:border-[#7E9CC0] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7E9CC0]/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#547298]" />
                </div>
                <h3 className="text-xl font-extrabold text-[#33414E] mb-3">{category.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                  {category.description}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-2 text-sm text-[#547298] hover:text-[#33414E] font-medium transition-colors group"
                      >
                        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={category.ctaHref}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#33414E] hover:bg-[#232D36] px-5 py-3 rounded-full transition-colors self-start"
                >
                  {category.ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/get-started/"
            className="inline-flex items-center gap-2 bg-[#33414E] hover:bg-[#232D36] text-white font-bold text-sm px-8 py-4 rounded-full transition-colors"
          >
            See all services and pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
