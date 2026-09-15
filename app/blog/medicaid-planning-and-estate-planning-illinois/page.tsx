'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle2,
  CircleAlert as AlertCircle,
  Shield,
  Home,
  DollarSign,
  FileText,
  Heart,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'medicaid-planning-and-estate-planning-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'why-medicaid-matters', title: 'Why Medicaid Planning Is Part of Estate Planning', level: 2, numeration: '2' },
    {
      id: 'illinois-medicaid-basics',
      title: 'Illinois Medicaid Basics for Long-Term Care',
      level: 2,
      numeration: '3',
      children: [
        { id: 'asset-limits', title: 'Asset Limits and Countable vs. Exempt Assets', level: 3, numeration: '3.1' },
        { id: 'look-back-period', title: 'The Illinois 5-Year Look-Back Period', level: 3, numeration: '3.2' },
      ],
    },
    {
      id: 'planning-strategies',
      title: 'Key Medicaid Planning Strategies in Illinois',
      level: 2,
      numeration: '4',
      children: [
        { id: 'irrevocable-trust', title: 'Irrevocable Medicaid Trust', level: 3, numeration: '4.1' },
        { id: 'spousal-protections', title: 'Spousal Protections and CSRA', level: 3, numeration: '4.2' },
        { id: 'gifting', title: 'Gifting Strategies and Pitfalls', level: 3, numeration: '4.3' },
        { id: 'spend-down', title: 'Spend-Down Planning', level: 3, numeration: '4.4' },
      ],
    },
    { id: 'estate-recovery', title: 'Illinois Medicaid Estate Recovery', level: 2, numeration: '5' },
    { id: 'intersection', title: 'How Medicaid Planning Fits With Your Estate Plan', level: 2, numeration: '6' },
    { id: 'when-to-plan', title: 'When to Start Medicaid Planning in Illinois', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Does Illinois count my house when determining Medicaid eligibility?',
      answer:
        'Your primary residence is generally an exempt asset for Illinois Medicaid eligibility purposes — meaning it is not counted against you when you apply — as long as your spouse, a minor child, or a disabled child lives there, or you state an intent to return home. However, while the home is exempt during your lifetime, Illinois Medicaid may seek reimbursement from your estate after your death through the estate recovery program. This is why protecting your home from estate recovery is a separate — and equally important — planning step. Strategies such as a life estate deed, an irrevocable Medicaid trust, or transferring the home to a qualifying caregiver child may protect the property.',
    },
    {
      question: 'What is the Illinois Medicaid asset limit in 2026?',
      answer:
        'For a single applicant, Illinois Medicaid (the MMAI or long-term care program) generally allows the applicant to retain no more than $2,000 in countable assets. For married couples where one spouse is applying for Medicaid and one is remaining in the community, the community spouse may retain significantly more — up to the Community Spouse Resource Allowance (CSRA), which in 2026 is approximately $154,140. Exempt assets — such as the home (with intent to return), a single vehicle, and personal belongings — do not count toward these limits. Rules are complex and change annually; consult an Illinois elder law attorney for current figures.',
    },
    {
      question: 'What happens if I give away assets before applying for Illinois Medicaid?',
      answer:
        'Illinois Medicaid applies a 5-year look-back period. Any assets transferred for less than fair market value within the 60 months before your Medicaid application will generally result in a penalty period during which Medicaid will not pay for your nursing home care. The penalty period is calculated by dividing the value of the transferred assets by the average monthly nursing home cost in Illinois (the divisor used to calculate the penalty). This is why gifting to children or grandchildren within 5 years of a Medicaid application is a serious planning mistake. Proper Medicaid planning must begin well before a care crisis — ideally 5 or more years before you expect to need nursing home care.',
    },
    {
      question: 'Can a revocable living trust protect my assets from Medicaid?',
      answer:
        'No. A revocable living trust does not protect assets from Medicaid. Because you retain the right to revoke the trust and take the assets back at any time, Medicaid treats the assets inside a revocable trust as if they were still owned outright by you. They count as available resources for Medicaid eligibility purposes. To remove assets from Medicaid countability, assets must be placed in an irrevocable trust — one where you permanently give up ownership and control. Irrevocable Medicaid trusts must be established more than 5 years before applying for Medicaid to avoid the look-back penalty.',
    },
    {
      question: 'What is Medicaid estate recovery in Illinois and how can I avoid it?',
      answer:
        'Illinois Medicaid estate recovery is a program under which the Illinois Department of Healthcare and Family Services (HFS) seeks reimbursement for Medicaid long-term care benefits paid on behalf of a deceased recipient. The state may file a claim against the probate estate — which can include the family home. Recovery is generally deferred while a surviving spouse, a minor child, or a disabled child is living in the home. Strategies to protect against estate recovery include an irrevocable Medicaid trust (established more than 5 years before applying), a transfer of the home to a qualifying caregiver child, a life estate deed, or a transfer-on-death instrument (TODI) in some circumstances — though each carries trade-offs. An Illinois elder law and estate planning attorney can help identify the best option for your situation.',
    },
    {
      question: 'Do I still need a will or trust if I am doing Medicaid planning?',
      answer:
        'Absolutely yes. Medicaid planning and estate planning serve complementary but distinct purposes. Medicaid planning addresses how to qualify for government benefits and protect assets during your lifetime. Estate planning addresses how your assets pass after your death, who manages your affairs if you become incapacitated, and who makes healthcare decisions for you. You still need a durable power of attorney for property, a healthcare power of attorney, a living will (advance directive), and either a will or a revocable living trust — regardless of Medicaid planning. In fact, Medicaid planning often makes estate planning more complex, not simpler, and the two should always be designed together.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Medicaid Planning and Estate Planning in Illinois: What You Need to Know',
    description:
      'Learn how Medicaid planning and estate planning work together in Illinois — protecting your home, assets, and family while qualifying for long-term care benefits.',
    author: {
      '@type': 'Person',
      name: 'Mary Liberty',
      jobTitle: 'Estate Planning Attorney',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Illinois Estate Law',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.illinoisestatelaw.com/logo.png',
      },
    },
    datePublished: '2026-08-26',
    dateModified: '2026-08-26',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/medicaid-planning-and-estate-planning-illinois/',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#33414E] via-[#4A708B] to-[#33414E] py-16 sm:py-20">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <span className="text-lg">&larr;</span>
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-['Plus_Jakarta_Sans'] font-semibold">
                  Estate Planning
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                Medicaid Planning and Estate Planning in Illinois: What You Need to Know
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Long-term care costs in Illinois can exceed $90,000 per year — and Medicaid is often the only realistic way for middle-class families to pay for nursing home care without exhausting everything they have worked a lifetime to build. Here is how Medicaid planning and estate planning work together, and what Illinois families need to do now.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>August 26, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            {/* 1. Article Summary */}
            <h2 id="article-summary" className="text-2xl font-bold mt-8 mb-4 font-['Plus_Jakarta_Sans']">
              Article Summary
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Medicaid planning and estate planning address different problems — but they must be designed together. Medicaid planning focuses on qualifying for government long-term care benefits while protecting your assets during your lifetime. Estate planning addresses how your assets pass at death, who manages your affairs when you cannot, and how to minimize taxes and probate.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Done in isolation, one can undermine the other. An estate plan built around a revocable living trust, for example, provides no Medicaid protection — assets in a revocable trust are still counted as your own. Meanwhile, Medicaid planning that transfers assets carelessly can trigger penalty periods, gift tax issues, or title problems that complicate your estate plan.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains how Illinois Medicaid works for long-term care, what planning tools are available, how Medicaid estate recovery affects your family, and how to integrate Medicaid planning into a comprehensive Illinois estate plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Long-Term Care in Illinois: The Numbers
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Average annual nursing home cost in Illinois (2026)', value: '$90,000+', color: 'amber' },
                  { label: 'Medicaid asset limit for a single applicant', value: '$2,000', color: 'blue' },
                  { label: 'Look-back period for asset transfers', value: '5 Years', color: 'red' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-4 border text-center ${
                      item.color === 'amber'
                        ? 'bg-amber-50 border-amber-200'
                        : item.color === 'blue'
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <p
                      className={`text-xl font-bold mb-1 font-['Plus_Jakarta_Sans'] ${
                        item.color === 'amber'
                          ? 'text-amber-700'
                          : item.color === 'blue'
                          ? 'text-blue-700'
                          : 'text-red-700'
                      }`}
                    >
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Why Medicaid Matters */}
            <h2 id="why-medicaid-matters" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Why Medicaid Planning Is Part of Estate Planning
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Most people think of Medicaid as a program for the poor. But for long-term nursing home care, Medicaid is the primary funding source for middle-class American families — including many Illinois families who own homes, have retirement savings, and consider themselves financially comfortable.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Here is the reality: a private-pay nursing home stay in the Chicago area averages $8,000–$10,000 per month. Two to three years of nursing home care — which is the national average duration for those who need it — can cost $200,000 to $300,000 or more. Medicare covers only short-term skilled nursing care after a qualifying hospital stay; it does not cover long-term custodial care. Private long-term care insurance is expensive, often inaccessible for those with health conditions, and not held by the majority of Illinois seniors.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              That leaves Medicaid — the joint federal-state program administered in Illinois by the Department of Healthcare and Family Services (HFS) — as the safety net. Medicaid will pay for nursing home care once an applicant meets the program&apos;s financial eligibility requirements. The challenge is that those requirements are strict, and meeting them without forfeiting all of your life savings requires careful legal planning.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">The cost of doing nothing</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Without planning, a nursing home resident in Illinois must spend down virtually all of their assets — except for a small personal needs allowance and certain exempt items — before Medicaid will pay. A family that owned a paid-off home, a retirement account, and modest savings could see most of that wealth consumed by nursing home costs before Medicaid coverage begins. Proper planning, ideally started years in advance, can legally protect a much larger portion of those assets for a surviving spouse or children.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Illinois Medicaid Basics */}
            <h2 id="illinois-medicaid-basics" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Illinois Medicaid Basics for Long-Term Care
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois offers several Medicaid programs, but for purposes of long-term care planning, the most important is the nursing facility care benefit (sometimes referenced under the Medicare-Medicaid Alignment Initiative, or MMAI, for those in managed care programs, and the traditional fee-for-service program for others). Eligibility has two dimensions: clinical eligibility (you must need nursing-level care) and financial eligibility.
            </p>

            <h3 id="asset-limits" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Asset Limits and Countable vs. Exempt Assets
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For financial eligibility, Illinois Medicaid divides your assets into two categories: <strong>countable assets</strong> and <strong>exempt assets</strong>. Countable assets include cash, bank accounts, investment accounts, additional real estate beyond your home, and most other financial assets. Exempt assets are not counted in the eligibility calculation.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-bold text-red-800 mb-3 font-['Plus_Jakarta_Sans']">Countable Assets (Must Be Spent Down)</h4>
                <ul className="space-y-1 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  {[
                    'Cash and checking/savings accounts',
                    'Stocks, bonds, and mutual funds',
                    'CDs and money market accounts',
                    'IRAs and most retirement accounts',
                    'Additional real estate (non-primary)',
                    'Life insurance with cash value over $1,500',
                    'Vacation homes, rental properties',
                    'Most trusts (revocable)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-3 font-['Plus_Jakarta_Sans']">Exempt Assets (Do Not Count)</h4>
                <ul className="space-y-1 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  {[
                    'Primary home (with intent to return or qualifying occupant)',
                    'One vehicle (any value)',
                    'Personal belongings and household goods',
                    'Burial plots and prepaid funeral plans',
                    'Term life insurance (no cash value)',
                    'Business property used for self-employment',
                    'Community Spouse Resource Allowance (CSRA)',
                    'Assets in a qualifying irrevocable trust',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A single applicant for Illinois Medicaid long-term care may retain no more than <strong>$2,000</strong> in countable assets. For married couples, Illinois follows federal Medicaid law in protecting the community spouse: the spouse remaining at home (the &ldquo;community spouse&rdquo;) may retain a Community Spouse Resource Allowance (CSRA). In 2026, the CSRA in Illinois is approximately <strong>$154,140</strong>. The community spouse also retains certain minimum monthly income protections to prevent impoverishment.
            </p>

            <h3 id="look-back-period" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The Illinois 5-Year Look-Back Period
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One of the most important and most misunderstood aspects of Medicaid eligibility is the <strong>look-back period</strong>. When you apply for Illinois Medicaid long-term care benefits, the state reviews all asset transfers made within the 60 months (5 years) before your application date. Any transfer of assets for less than fair market value during this period is treated as a disqualifying transfer.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The penalty for a disqualifying transfer is a period of Medicaid ineligibility — calculated by dividing the value of the transferred assets by the state&apos;s average monthly private-pay nursing home cost (the &ldquo;divisor&rdquo;). If you transferred $90,000 in assets and the divisor is $9,000 per month, you would be ineligible for Medicaid for 10 months. Importantly, this penalty period does not begin until you are already in a nursing home, already below the Medicaid asset limit, and have already applied for Medicaid — meaning you must pay privately during the penalty period with little or nothing left to do so.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">Transfers that do NOT trigger the look-back penalty</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Not all asset transfers during the look-back period result in a penalty. Transfers to a spouse (or to a trust for the sole benefit of a spouse), transfers to a disabled child or a trust for a disabled child, transfers to a &ldquo;caregiver child&rdquo; who lived in the home and provided care for at least two years before the parent needed nursing care, and transfers returning property to the original donor are among the exceptions. An Illinois elder law attorney can help identify which transfers qualify for exceptions.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Planning Strategies */}
            <h2 id="planning-strategies" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Key Medicaid Planning Strategies in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Effective Medicaid planning in Illinois is not about hiding assets or defrauding the government. It is about understanding the rules — which Congress and the Illinois legislature deliberately designed to allow asset protection within defined boundaries — and using those rules proactively. The following strategies are legal, widely used, and most effective when implemented well in advance of a long-term care need.
            </p>

            <h3 id="irrevocable-trust" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Irrevocable Medicaid Trust
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An <strong>irrevocable Medicaid asset protection trust</strong> (sometimes called a &ldquo;Medicaid trust&rdquo; or &ldquo;income-only trust&rdquo;) is one of the most powerful tools for protecting assets from Medicaid spend-down requirements. When assets are transferred into an irrevocable Medicaid trust more than 5 years before a Medicaid application, those assets are no longer countable for Medicaid purposes — they belong to the trust, not to you.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The typical structure allows you to receive income generated by trust assets (interest, dividends, rental income) during your lifetime, but you give up the right to the principal. Your home, investment accounts, and other assets can be placed in the trust. Because you permanently give up ownership, the assets are excluded from your Medicaid countable resources after the 5-year look-back period passes. At your death, the assets in the trust pass to your named beneficiaries — often your children — without going through probate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The critical caveat: the irrevocable nature of this trust means you cannot take principal back. If you need access to those assets for reasons other than the trust income, you cannot get them. This makes an irrevocable Medicaid trust appropriate primarily for families who have sufficient liquid assets outside the trust to meet their needs, or who are willing to accept the trade-off in exchange for protection. See our guide on{' '}
              <Link href="/blog/protecting-home-from-medicaid-estate-recovery-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                protecting your home from Medicaid estate recovery in Illinois
              </Link>{' '}
              for more on how trusts can shield the family home.
            </p>

            <h3 id="spousal-protections" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Spousal Protections and the Community Spouse Resource Allowance
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Federal Medicaid law provides significant protections for the community spouse — the husband or wife who is not entering a nursing home. Illinois applies these federal protections, which include the Community Spouse Resource Allowance (CSRA) and the Minimum Monthly Maintenance Needs Allowance (MMMNA).
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The <strong>CSRA</strong> allows the community spouse to keep approximately half of the couple&apos;s combined countable assets at the time of the Medicaid application, subject to a floor and a ceiling. In 2026, the maximum CSRA in Illinois is approximately $154,140 and the minimum is approximately $30,828. Assets above the CSRA must be spent down before the institutionalized spouse qualifies for Medicaid.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The <strong>MMMNA</strong> protects the community spouse&apos;s income. If the community spouse&apos;s own monthly income is below the protected minimum (approximately $2,555 per month in 2026), they may be entitled to receive a portion of the institutionalized spouse&apos;s income to make up the difference — reducing how much of that income must be paid to the nursing home.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Spousal protection planning often involves careful analysis of the couple&apos;s combined assets and income to maximize what the community spouse can retain — legally and within Medicaid rules. An annuity strategy, for example, can convert countable assets into a non-countable income stream for the community spouse in certain circumstances. This is complex territory that requires an experienced Illinois elder law attorney.
            </p>

            <h3 id="gifting" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Gifting Strategies — and Why Timing Is Everything
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Many families instinctively think of giving assets to children as a way to protect those assets from nursing home costs. Gifting can be an effective Medicaid planning strategy — but only when done properly and well in advance.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Because Illinois Medicaid applies a 5-year look-back period to all asset transfers, gifts made within 60 months of a Medicaid application will result in a penalty period. The only time gifting as a standalone strategy works is when it is completed <em>more than 5 years before</em> the Medicaid application — meaning the planning must start years before a care crisis develops.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Even with appropriate timing, outright gifting carries risks. Once you give assets to children, those assets belong to them — subject to their creditors, divorcing spouses, and their own financial decisions. A child who receives your home outright may not be able to sell it back to you if you need the funds. A child who faces a lawsuit or divorce could lose the assets to their creditors. Many families find that an irrevocable trust — which keeps assets in trust for beneficiaries rather than gifting them outright — offers better protection than outright gifts to children.
            </p>

            <h3 id="spend-down" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Spend-Down Planning: Protecting Value Within the Rules
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When someone needs nursing home care and has not done advance planning, all is not lost — but options are more limited. Spend-down planning identifies ways to reduce countable assets in a manner that provides value rather than simply paying the nursing home. Legal spend-down strategies include:
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  icon: '🏠',
                  title: 'Pre-paying funeral and burial expenses',
                  detail: 'Prepaid funeral and burial plans are typically exempt from Medicaid countable assets. Converting countable cash into a prepaid funeral contract provides a real benefit — your final expenses are handled — while reducing countable assets.',
                },
                {
                  icon: '🔧',
                  title: 'Home repairs and improvements',
                  detail: 'Because the primary home is exempt for Medicaid purposes, spending countable assets on home repairs, improvements, or modifications (such as a wheelchair ramp or accessible bathroom) converts countable cash into an exempt asset without triggering a penalty.',
                },
                {
                  icon: '🚗',
                  title: 'Purchasing an exempt vehicle',
                  detail: 'One vehicle is exempt from Medicaid countable assets, regardless of value. If the community spouse needs a new car, purchasing one from countable funds is a legal spend-down strategy.',
                },
                {
                  icon: '💳',
                  title: 'Paying off debt',
                  detail: 'Paying off a mortgage, credit card balances, or other legitimate debts reduces countable assets without creating a transfer penalty, since full value is received in exchange (debt reduction).',
                },
                {
                  icon: '⚖️',
                  title: 'Purchasing exempt personal property',
                  detail: 'Household goods, personal belongings, and certain other personal property are typically exempt. Replacing worn-out furniture, appliances, or other household items from countable funds is a legitimate spend-down.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                    <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Concerned About Long-Term Care and Your Estate Plan?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families integrate Medicaid planning into a comprehensive estate plan — protecting assets, honoring your wishes, and preparing for whatever comes next. Flat-fee pricing so you always know what you&apos;ll pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#33414E] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services-pricing/"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  View Services &amp; Pricing
                </Link>
              </div>
            </div>

            {/* 5. Estate Recovery */}
            <h2 id="estate-recovery" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Illinois Medicaid Estate Recovery: Protecting Your Home After Death
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Qualifying for Medicaid does not mean your estate is off the hook. Under federal law, every state must operate a Medicaid Estate Recovery Program (MERP). Illinois&apos;s program — administered by HFS — allows the state to seek reimbursement for Medicaid long-term care benefits paid after a recipient&apos;s death by filing a claim against their estate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In practice, estate recovery most commonly targets the family home — the primary asset that was exempt during the Medicaid recipient&apos;s lifetime. After the recipient dies, Illinois Medicaid can file a claim against the probate estate for the amount of benefits paid. If the home passes through probate, HFS can file a claim that must be paid before the home can be distributed to heirs. This can force the sale of the family home to repay Medicaid — defeating the purpose of keeping the house in the family.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>Estate recovery is deferred</strong> — not waived — during the lifetime of a surviving spouse, a minor child, or a blind or permanently disabled child. But once those individuals are no longer living in the home or are deceased, the recovery claim may be asserted. Deferred recovery is not protection; it is a postponement.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The most effective tools for avoiding Illinois Medicaid estate recovery include:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: '1',
                  title: 'Irrevocable Medicaid Trust (5+ years before application)',
                  body: 'Assets transferred into a qualifying irrevocable trust more than 5 years before a Medicaid application are neither counted for eligibility purposes nor subject to estate recovery — because they no longer belong to the Medicaid recipient. This is the most comprehensive protection, covering both eligibility and estate recovery.',
                },
                {
                  num: '2',
                  title: 'Transfer to a Qualifying Caregiver Child',
                  body: 'Illinois Medicaid law provides a look-back exception for transfers of the home to a child who lived with the parent for at least 2 years before the parent entered a nursing facility and who provided care that delayed the need for institutionalization. This transfer can be made even within the 5-year look-back period without penalty — and the home passes outside of the estate, avoiding recovery.',
                },
                {
                  num: '3',
                  title: 'Life Estate Deed',
                  body: 'A life estate deed transfers ownership of the home to children (or other beneficiaries) while the parent retains a life estate — the right to live in and use the home for the rest of their life. The home transfers automatically at death without going through probate, making it unavailable for estate recovery claims. However, the transfer is subject to the 5-year look-back: creating a life estate within 5 years of a Medicaid application triggers a penalty based on the value of the transferred remainder interest.',
                },
                {
                  num: '4',
                  title: 'Transfer-on-Death Instrument (TODI)',
                  body: 'Illinois allows real estate to be transferred at death via a Transfer-on-Death Instrument — similar to a beneficiary designation on a bank account. A TODI avoids probate, but Illinois has taken the position that TODIs may still be subject to estate recovery as part of the "augmented estate." The effectiveness of a TODI in avoiding recovery depends on the specific circumstances and HFS&apos;s recovery practices, and should be reviewed with an Illinois elder law attorney.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#33414E] text-base mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 6. Intersection */}
            <h2 id="intersection" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How Medicaid Planning Fits With Your Illinois Estate Plan
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Many Illinois residents approach Medicaid planning and estate planning as two separate concerns — something they will address &ldquo;when the time comes.&rdquo; In practice, the two must be coordinated from the start, because decisions made in one area directly affect the other.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Consider the following interactions:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              {[
                {
                  title: 'Revocable trust ≠ Medicaid protection',
                  body: 'A revocable living trust — the cornerstone of most Illinois estate plans — provides no protection against Medicaid spend-down. Assets in a revocable trust are treated as if you own them outright. If Medicaid planning is a concern, an irrevocable trust must be used for the assets you want to protect, while the revocable trust may still be appropriate for the remaining estate.',
                  color: 'amber',
                  link: '/chicago-revocable-trusts-lawyer/',
                  linkLabel: 'Learn about revocable trusts at Illinois Estate Law',
                },
                {
                  title: 'Powers of attorney are essential during incapacity',
                  body: 'A Medicaid application often must be filed by someone acting on behalf of an incapacitated person. Without a valid durable power of attorney for property, a family member may need to go to court to establish guardianship before they can even apply for Medicaid — adding cost, delay, and court involvement during an already difficult time.',
                  color: 'blue',
                  link: '/chicago-powers-of-attorney-lawyer/',
                  linkLabel: 'Learn about powers of attorney',
                },
                {
                  title: 'Beneficiary designations may affect Medicaid planning',
                  body: 'Assets that pass via beneficiary designation — life insurance, retirement accounts, payable-on-death accounts — bypass probate and Medicaid estate recovery. Coordinating beneficiary designations with your overall Medicaid plan ensures that assets intended for family members actually get there.',
                  color: 'green',
                  link: '/blog/beneficiary-designations-override-your-will-illinois/',
                  linkLabel: 'Why beneficiary designations override your will in Illinois',
                },
                {
                  title: 'Estate tax planning may conflict with Medicaid planning',
                  body: 'Illinois estate tax planning often involves keeping assets in your estate to take advantage of the stepped-up basis at death. Medicaid planning often involves getting assets out of your estate. These objectives can conflict. A qualified Illinois estate planning attorney can help you identify the approach that best balances both concerns for your specific situation.',
                  color: 'red',
                  link: '/blog/illinois-estate-tax-cliff-explained/',
                  linkLabel: 'Illinois estate tax cliff explained',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-6 ${
                    item.color === 'amber'
                      ? 'bg-amber-50 border-amber-200'
                      : item.color === 'blue'
                      ? 'bg-blue-50 border-blue-200'
                      : item.color === 'green'
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <h4 className="font-bold text-gray-900 text-sm mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-3">{item.body}</p>
                  <Link
                    href={item.link}
                    className={`inline-flex items-center gap-1.5 font-medium text-xs hover:underline font-['Plus_Jakarta_Sans'] ${
                      item.color === 'amber'
                        ? 'text-amber-700'
                        : item.color === 'blue'
                        ? 'text-blue-700'
                        : item.color === 'green'
                        ? 'text-green-700'
                        : 'text-red-700'
                    }`}
                  >
                    {item.linkLabel}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              At Illinois Estate Law, we help clients think through both sets of concerns together. A client who walks in asking &ldquo;can you help me with my will?&rdquo; may, after a consultation, discover that Medicaid planning is equally or more urgent given their age, health, and family situation — and that the right estate plan addresses both goals in a coherent, coordinated way.
            </p>

            {/* 7. When to Plan */}
            <h2 id="when-to-plan" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              When to Start Medicaid Planning in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The single most important piece of Medicaid planning advice is also the simplest: <strong>start early</strong>. The 5-year look-back period means that most Medicaid planning strategies — particularly irrevocable trusts and outright gifting — only protect assets transferred more than 60 months before a Medicaid application. Planning that begins the day before someone enters a nursing home has very few tools available.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Medicaid Planning Timeline: When to Act
              </h3>
              <div className="space-y-3">
                {[
                  {
                    timing: '5+ Years Before Anticipated Need',
                    status: 'green',
                    action: 'Maximum flexibility. Irrevocable Medicaid trust, gifting programs, and home transfers can all be implemented. Planning at this stage has the widest range of options and the lowest risk.',
                  },
                  {
                    timing: '2–5 Years Before Anticipated Need',
                    status: 'amber',
                    action: 'Moderate options. Gifting and irrevocable trust transfers may still help if done immediately, as the 5-year clock starts running now. Spousal planning, spend-down analysis, and caregiver child transfers may be available depending on circumstances.',
                  },
                  {
                    timing: 'Less than 2 Years (or Care Already Needed)',
                    status: 'red',
                    action: 'Crisis planning. Options are limited but not zero. Spousal protections, caregiver child exception, pre-paying expenses, converting assets, and annuity strategies may still help. An Illinois elder law attorney should be consulted immediately.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-4 rounded-lg border ${
                      item.status === 'green'
                        ? 'bg-green-50 border-green-200'
                        : item.status === 'amber'
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
                      item.status === 'green' ? 'bg-green-500' : item.status === 'amber' ? 'bg-amber-500' : 'bg-red-500'
                    }`} />
                    <div>
                      <h4 className="font-bold text-sm font-['Plus_Jakarta_Sans'] text-gray-900 mb-1">{item.timing}</h4>
                      <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans']">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Beyond the 5-year rule, there are other reasons to plan early. An irrevocable trust requires time to draft and fund properly. Transferring real estate requires a deed, a title examination, and sometimes a mortgage payoff or lender consent. Establishing the right power of attorney — one broad enough to authorize Medicaid planning actions — requires legal drafting while the principal has capacity. And health can change quickly: a fall, a stroke, or a dementia diagnosis can make previously feasible planning impossible overnight.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              We recommend that Illinois residents in their 60s begin reviewing their estate plan through a Medicaid planning lens — even if nursing home care seems distant. The cost of a planning consultation is far lower than the cost of even a single month of nursing home care, and the peace of mind that comes from knowing your family is protected is invaluable.
            </p>

            {/* 8. FAQ */}
            <h2 id="faq" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-gray-900 font-['Plus_Jakarta_Sans']">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-['Plus_Jakarta_Sans']">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 9. Next Steps */}
            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Next Steps
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Medicaid planning is one of the most consequential — and most time-sensitive — aspects of estate planning for Illinois families. The families who protect the most are the ones who plan the earliest. If you or a loved one is in your 60s or older, now is the time to ask whether your current estate plan accounts for the possibility of long-term care — and to take steps to ensure it does.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For more on the tools available in Illinois estate planning, see our guides on{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trusts
              </Link>
              ,{' '}
              <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                powers of attorney
              </Link>
              , and{' '}
              <Link href="/blog/protecting-home-from-medicaid-estate-recovery-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                protecting your home from Medicaid estate recovery
              </Link>
              . If you are ready to speak with an attorney about your specific situation,{' '}
              <Link href="/book-consultation/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                schedule a free consultation
              </Link>{' '}
              with Illinois Estate Law.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney About Medicaid Planning
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families coordinate Medicaid planning with a complete estate plan — protecting assets, preserving the family home, and preparing for long-term care before a crisis arrives. Transparent flat-fee pricing with a free initial consultation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg font-['Plus_Jakarta_Sans']"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services-pricing/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  View Services &amp; Pricing
                </Link>
              </div>
              <p className="text-white/70 text-sm mt-4 font-['Plus_Jakarta_Sans']">
                Call{' '}
                <a href="tel:3123730731" className="text-white underline">
                  (312) 373-0731
                </a>{' '}
                to speak directly with our team.
              </p>
            </div>

            {/* Related articles */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
              <h3 className="font-bold text-[#33414E] mb-3 font-['Plus_Jakarta_Sans']">
                Related Illinois Estate Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/blog/protecting-home-from-medicaid-estate-recovery-illinois/',
                    label: 'Protecting Your Home from Medicaid Estate Recovery in Illinois',
                  },
                  {
                    href: '/blog/special-needs-trust-illinois-guide/',
                    label: 'Special Needs Trusts in Illinois: A Complete Guide',
                  },
                  {
                    href: '/blog/revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois/',
                    label: 'Revocable vs. Irrevocable Trust in Illinois',
                  },
                  {
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
                  },
                  {
                    href: '/blog/do-you-really-need-a-power-of-attorney-in-illinois/',
                    label: 'Do You Really Need a Power of Attorney in Illinois?',
                  },
                  {
                    href: '/blog/illinois-estate-tax-cliff-explained/',
                    label: 'Illinois Estate Tax Cliff Explained',
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-[#4a708b] hover:text-[#33414E] text-sm font-medium hover:underline transition-colors font-['Plus_Jakarta_Sans']"
                  >
                    <ArrowRight className="w-4 h-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-82211c7/www.illinoisestatelaw.com/wp-content/uploads/2025/10/IMG_3202.jpg"
                    alt="Mary Liberty - Chicago Estate Planning Attorney"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#2d3e50] font-['Plus_Jakarta_Sans']">
                    Mary Liberty — Chicago Estate Planning Attorney
                  </h3>
                  <p className="mb-4 text-gray-700 font-['Plus_Jakarta_Sans']">
                    Mary Liberty is a Chicago-based estate planning and probate attorney dedicated to making legal planning accessible, affordable, and stress-free. Through her modern virtual law practice, she helps families and individuals across Illinois create clear, effective plans that protect their assets and their loved ones.
                  </p>
                  <p className="mb-0 text-gray-700 font-['Plus_Jakarta_Sans']">
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a 100% flat-fee model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 rounded-lg p-5 border border-gray-200 my-8">
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois Medicaid rules are complex, fact-specific, and change frequently — asset limits, look-back rules, and estate recovery procedures described here reflect general principles as of 2026 and may not reflect current law or your specific circumstances. Consult a licensed Illinois elder law or estate planning attorney for guidance tailored to your situation before making any transfers, trust arrangements, or financial decisions related to Medicaid planning.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Family&apos;s Future in Illinois?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and learn how Medicaid planning and estate planning can work together to protect what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:3123730731"
                  className="inline-block bg-white text-[#2d3e50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-['Plus_Jakarta_Sans']"
                >
                  CALL (312) 373-0731
                </a>
                <a
                  href="/book-consultation/"
                  className="inline-block bg-transparent text-white font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-center font-['Plus_Jakarta_Sans']"
                >
                  BOOK A CONSULTATION
                </a>
              </div>
            </div>

            {/* Share buttons */}
            <div className="my-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold mb-3 font-['Plus_Jakarta_Sans']">SHARE THIS POST:</p>
              <div className="flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/medicaid-planning-and-estate-planning-illinois/')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/medicaid-planning-and-estate-planning-illinois/')}&text=${encodeURIComponent('Medicaid Planning and Estate Planning in Illinois — what you need to know to protect your family')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/medicaid-planning-and-estate-planning-illinois/')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <BlogNavigation
              previousPost={previous ? { title: previous.title, url: previous.url } : undefined}
              nextPost={next ? { title: next.title, url: next.url } : undefined}
            />

            <RelatedArticles
              articles={relatedPosts.map((post) => ({
                title: post.title,
                url: post.url,
                date: post.date,
                excerpt: post.excerpt,
              }))}
            />
          </article>

          <div className="border-t border-gray-300 pt-8 mb-8 mt-8">
            <BlogContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
