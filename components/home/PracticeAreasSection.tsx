import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type PracticeArea = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

type Group = {
  heading: string;
  areas: PracticeArea[];
};

const groups: Group[] = [
  {
    heading: 'Estate Planning',
    areas: [
      {
        title: 'Wills',
        description: 'A legally valid will ensures your assets go where you intend and your loved ones are cared for — without leaving it to the state to decide.',
        tags: ['Last Will & Testament', 'Executor Designation', 'Guardian Nomination'],
        href: '/chicago-wills-lawyer/',
      },
      {
        title: 'Trusts',
        description: 'A revocable living trust lets your estate pass to your family privately and without probate, giving you control now and protection later.',
        tags: ['Revocable Living Trust', 'Probate Avoidance', 'Asset Management'],
        href: '/chicago-revocable-trusts-lawyer/',
      },
      {
        title: 'Powers of Attorney',
        description: 'Appoint someone you trust to manage your finances if you are ever unable to do so yourself — a critical safeguard at any age.',
        tags: ['Financial POA', 'Durable Authority', 'Successor Agent'],
        href: '/chicago-powers-of-attorney-lawyer/',
      },
      {
        title: 'Healthcare Directives',
        description: 'Make your medical wishes clear and legally binding so your care team and family always know what you want, even if you cannot speak.',
        tags: ['Living Will', 'Healthcare POA', 'HIPAA Authorization'],
        href: '/chicago-healthcare-directives-lawyer/',
      },
    ],
  },
  {
    heading: 'Probate & Administration',
    areas: [
      {
        title: 'Probate',
        description: 'We guide executors and families through the Illinois probate process — filing, creditors, distributions — with flat-fee clarity from day one.',
        tags: ['Estate Administration', 'Creditor Management', 'Court Filings'],
        href: '/chicago-probate-lawyer/',
      },
      {
        title: 'Partial Probate & Intestate Estates',
        description: 'Already in probate with another attorney? We can take over mid-case. We also handle estates where no will exists under Illinois intestacy law.',
        tags: ['Case Transfers', 'Intestate Succession', 'Heir Representation'],
        href: '/chicago-probate-lawyer/',
      },
    ],
  },
  {
    heading: 'Family & Property',
    areas: [
      {
        title: 'Guardianship',
        description: 'When a loved one can no longer make decisions independently, we help establish legal guardianship to protect their well-being and care.',
        tags: ['Guardianship of Person', 'Guardianship of Estate', 'Court Petitions'],
        href: '/contact/',
      },
      {
        title: 'Deeds & Real Estate',
        description: 'Transfer real property title efficiently — whether for estate planning purposes, inheritances, or residential closings across Illinois.',
        tags: ['Deed Transfers', 'Title Transfer', 'Residential Closings'],
        href: '/chicago-deeds-lawyer/',
      },
      {
        title: 'Prenuptial Agreements',
        description: "A well-drafted prenup protects both partners' assets and interests — so you start your marriage with clarity and mutual respect.",
        tags: ['Asset Protection', 'Debt Allocation', 'Property Division'],
        href: '/chicago-prenuptial-agreements-lawyer/',
      },
    ],
  },
];

function AreaCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={area.href}
      className="group block bg-white border border-slate-200 rounded-xl p-6 hover:border-[#7E9CC0] hover:shadow-md transition-all"
    >
      <h4 className="text-base font-bold text-[#33414E] mb-2 group-hover:text-[#547298] transition-colors">
        {area.title}
      </h4>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">
        {area.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {area.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold uppercase tracking-wide text-[#547298] bg-[#7E9CC0]/10 rounded-full px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#547298] group-hover:gap-2 transition-all">
        Learn more <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}

export function PracticeAreasSection() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5 lg:px-0">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#33414E] mb-3">
            Practice Areas
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            Flat-fee estate planning and probate services across all of Illinois — transparent pricing before you commit.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {groups.map((group) => (
            <div key={group.heading}>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-lg font-extrabold text-[#33414E] uppercase tracking-wide whitespace-nowrap">
                  {group.heading}
                </h3>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {group.areas.map((area) => (
                  <AreaCard key={area.title} area={area} />
                ))}
              </div>
            </div>
          ))}
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
