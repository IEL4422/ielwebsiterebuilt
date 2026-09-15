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
  TrendingUp,
  DollarSign,
  Shield,
  BarChart2,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'illinois-estate-tax-cliff-explained';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'illinois-estate-tax-basics', title: 'Illinois Estate Tax Basics', level: 2, numeration: '2' },
    { id: 'what-is-the-cliff', title: 'What Is the Illinois Estate Tax Cliff?', level: 2, numeration: '3' },
    { id: 'cliff-example', title: 'The Cliff in Action: A Step-by-Step Example', level: 2, numeration: '4' },
    { id: 'illinois-rates', title: 'Illinois Estate Tax Rates and Brackets', level: 2, numeration: '5' },
    { id: 'who-is-affected', title: 'Who Is Most at Risk?', level: 2, numeration: '6' },
    {
      id: 'planning-strategies',
      title: 'Strategies to Reduce or Eliminate Illinois Estate Tax',
      level: 2,
      numeration: '7',
      children: [
        { id: 'marital-deduction', title: 'Marital Deduction and Bypass Trusts', level: 3, numeration: '7.1' },
        { id: 'ilit', title: 'Irrevocable Life Insurance Trusts (ILITs)', level: 3, numeration: '7.2' },
        { id: 'gifting', title: 'Lifetime Gifting', level: 3, numeration: '7.3' },
        { id: 'charitable', title: 'Charitable Planning', level: 3, numeration: '7.4' },
      ],
    },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'What is the Illinois estate tax exemption in 2026?',
      answer:
        'The Illinois estate tax exemption is $4 million per person as of 2026. Estates with a total taxable value at or below $4 million owe no Illinois estate tax. Estates above that threshold are taxed on the full value of the estate — not just the amount above $4 million — which is what creates the cliff effect. The Illinois exemption has been set at $4 million since 2012 and has not been indexed for inflation, unlike the federal exemption.',
    },
    {
      question: 'Is the Illinois estate tax on top of the federal estate tax?',
      answer:
        'Yes. Illinois estate tax and federal estate tax are entirely separate obligations. However, the federal estate tax exemption in 2026 is approximately $13.99 million per person — far higher than Illinois\'s $4 million threshold. As a result, many Illinois estates owe Illinois estate tax but owe nothing at the federal level. Estates above the federal exemption owe both taxes, and the taxes are not deductible against each other in the traditional sense. Planning must account for both layers.',
    },
    {
      question: "Does Illinois estate tax apply to a surviving spouse's inheritance?",
      answer:
        'No. Property passing directly to a surviving spouse who is a U.S. citizen qualifies for the unlimited marital deduction and is not subject to Illinois (or federal) estate tax at the first death. However, the surviving spouse\'s estate — which now includes both their own assets and what they inherited — may then be subject to a larger Illinois estate tax bill at the second death. This is why bypass trust planning (also called credit shelter trust planning) is essential for married couples with estates above $4 million.',
    },
    {
      question: 'When is the Illinois estate tax return due?',
      answer:
        'The Illinois estate tax return (Form 700) is due nine months after the date of the decedent\'s death. A six-month extension is available, but the extension is for filing — not for payment. Interest accrues on any unpaid estate tax from the original nine-month due date. Failure to pay or file on time can result in penalties and interest. The executor should engage an estate planning or probate attorney and a CPA experienced with estate tax as soon as practicable after death.',
    },
    {
      question: 'Can I avoid Illinois estate tax by moving out of Illinois?',
      answer:
        'Potentially, but it requires a genuine change of domicile — not just a part-time address. Illinois taxes estates of individuals who were Illinois domiciliaries at death, as well as non-residents who owned Illinois real estate or tangible personal property located in Illinois. Simply maintaining a second home in Florida while living primarily in Chicago does not change your Illinois domicile. A genuine move requires actually living in the new state as your primary home, updating your driver\'s license, voter registration, and other legal ties.',
    },
    {
      question: 'What is a bypass trust and how does it help with Illinois estate tax?',
      answer:
        'A bypass trust (also called a credit shelter trust or "B trust") is an irrevocable trust funded at the first spouse\'s death with an amount equal to the estate tax exemption — $4 million in Illinois. Assets in the bypass trust are not included in the surviving spouse\'s estate, so they are not taxed again at the second death. This effectively doubles the combined exemption for a married couple from $4 million to $8 million. Without bypass trust planning, the surviving spouse simply inherits everything, and their $4 million exemption covers only their own assets — leaving the inherited amount fully exposed at the second death.',
    },
  ];

  const strategies = [
    {
      num: '1',
      title: 'Bypass Trust (Credit Shelter Trust) for Married Couples',
      body: 'The most powerful Illinois estate tax planning tool for married couples is the bypass trust. At the first spouse\'s death, assets up to $4 million are placed in an irrevocable trust for the surviving spouse\'s benefit. Those assets are not included in the surviving spouse\'s estate at death, effectively shielding up to $8 million per couple from Illinois estate tax. Without this structure, the surviving spouse\'s estate may face a large Illinois estate tax bill on everything above $4 million — including assets inherited from the deceased spouse.',
      link: '/chicago-revocable-trusts-lawyer/',
      linkLabel: 'Learn about trust planning at Illinois Estate Law',
    },
    {
      num: '2',
      title: 'Illinois QTIP Election for Marital Deduction Planning',
      body: 'Married couples can use a Qualified Terminable Interest Property (QTIP) election to defer Illinois estate tax at the first death while still allowing the surviving spouse to benefit from the assets. An Illinois QTIP trust qualifies for the marital deduction — deferring all Illinois estate tax to the second death — while also preserving the ability to control where assets ultimately go (for example, to children from a prior marriage). This is especially useful in blended family situations.',
      link: '/chicago-revocable-trusts-lawyer/',
      linkLabel: 'Discuss QTIP planning with our team',
    },
    {
      num: '3',
      title: 'Irrevocable Life Insurance Trust (ILIT)',
      body: 'Life insurance death benefits paid to the insured\'s estate are included in the taxable estate. An irrevocable life insurance trust (ILIT) holds the policy outside the estate so the proceeds are not subject to Illinois estate tax. The ILIT can be structured to provide liquidity to pay estate taxes on other assets, to provide income for a surviving spouse, or to provide an inheritance to children — all without the death benefit itself being taxed. This is a particularly effective strategy when the estate includes illiquid assets like real estate or a closely held business.',
      link: '/services-pricing/',
      linkLabel: 'View our estate planning services',
    },
    {
      num: '4',
      title: 'Lifetime Gifting to Reduce the Taxable Estate',
      body: 'Every dollar given away during your lifetime is a dollar that will not be in your estate at death. Illinois does not have a gift tax, and federal gift tax rules allow each person to give up to $18,000 per recipient per year (2026 annual exclusion) without any gift tax consequence. Larger gifts reduce the taxable estate but may consume some of the federal lifetime exemption. For estates just above the $4 million cliff, targeted gifting over several years can bring the estate below the threshold and eliminate Illinois estate tax entirely.',
      link: '/book-consultation/',
      linkLabel: 'Book a consultation to discuss your gifting strategy',
    },
    {
      num: '5',
      title: 'Charitable Bequests and Charitable Trusts',
      body: 'Charitable bequests reduce the taxable estate dollar for dollar. For estates just above $4 million, a carefully sized charitable bequest can bring the estate below the exemption threshold — potentially saving far more in estate taxes than the value of the bequest itself. Charitable remainder trusts (CRTs) and charitable lead trusts (CLTs) allow you to provide for family members and a charity simultaneously while reducing the estate tax burden. These tools require careful design by an attorney familiar with both estate and tax planning.',
      link: '/services-pricing/',
      linkLabel: 'Learn about our estate planning services',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Illinois Estate Tax Cliff Explained: What It Is and How to Plan Around It',
    description:
      "Illinois's estate tax cliff means estates just above $4 million can owe far more than expected. Learn what causes the cliff, how much it costs, and the planning strategies that protect your family.",
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
    datePublished: '2026-08-05',
    dateModified: '2026-08-05',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/illinois-estate-tax-cliff-explained/',
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
                  11 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                The Illinois Estate Tax Cliff Explained
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Illinois has a separate state estate tax with a $4 million exemption — and a notorious &ldquo;cliff&rdquo; that can hit estates just above that threshold with a tax bill far larger than most families expect. Here is what the cliff is, who it affects, and how smart planning can protect your estate.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>August 5, 2026</time>
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
                <TrendingUp className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Illinois imposes a separate state estate tax on estates above $4 million. Unlike the federal estate tax, which only applies to estates above roughly $14 million in 2026, the Illinois tax catches many families who consider themselves &ldquo;comfortable&rdquo; but not ultra-wealthy.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    The &ldquo;cliff&rdquo; refers to the way the Illinois estate tax is calculated: once an estate exceeds $4 million, the entire estate is taxed — not just the amount over the threshold. This means crossing the $4 million line can trigger a tax bill of $100,000 or more on just a modest overage, making the effective marginal tax rate on dollars just above $4 million extraordinarily high.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains how the Illinois estate tax cliff works, walks through a concrete example, and outlines the planning strategies Illinois families use to reduce or eliminate their exposure.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reference box */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Estate Tax at a Glance (2026)
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Illinois exemption per person', value: '$4,000,000', color: 'blue' },
                  { label: 'Federal exemption per person', value: '~$13,990,000', color: 'green' },
                  { label: 'Top Illinois estate tax rate', value: '16%', color: 'amber' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-4 border text-center ${
                      item.color === 'blue'
                        ? 'bg-blue-50 border-blue-200'
                        : item.color === 'green'
                        ? 'bg-green-50 border-green-200'
                        : 'bg-amber-50 border-amber-200'
                    }`}
                  >
                    <p
                      className={`text-xl font-bold mb-1 font-['Plus_Jakarta_Sans'] ${
                        item.color === 'blue'
                          ? 'text-blue-700'
                          : item.color === 'green'
                          ? 'text-green-700'
                          : 'text-amber-700'
                      }`}
                    >
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Illinois Estate Tax Basics */}
            <h2 id="illinois-estate-tax-basics" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Illinois Estate Tax Basics
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois is one of twelve states (plus Washington D.C.) that impose a state-level estate tax in addition to the federal estate tax. The Illinois Estate Tax Act (35 ILCS 405) imposes a tax on the transfer of estates of Illinois residents who die with a taxable estate above the state&apos;s exemption amount. Non-residents who own real estate or tangible personal property located in Illinois are also subject to the tax on those Illinois-situated assets.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              As of 2026, the Illinois estate tax exemption is <strong>$4 million per person</strong>. This means that if the total value of all assets in your estate — including your home, retirement accounts, business interests, investment accounts, and life insurance proceeds payable to your estate — exceeds $4 million at death, Illinois estate tax will be owed on the full value of the estate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The critical difference from the federal estate tax is the exemption amount. In 2026, the federal estate tax exemption is approximately <strong>$13.99 million per person</strong> — more than three times the Illinois threshold. This means many Illinois families owe Illinois estate tax but owe nothing at the federal level. They may have never even thought about estate tax as a concern, only to discover their estate is squarely in the Illinois taxable zone.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Illinois exemption has not kept pace with inflation</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans']">
                    The Illinois $4 million exemption has been fixed since 2012. It is not indexed to inflation. Meanwhile, home values, retirement accounts, and business values have all increased substantially. Many Illinois families who did not expect to have an estate tax problem now find themselves above the threshold simply because their assets have appreciated. This makes regular estate plan reviews essential — what was below the threshold a decade ago may no longer be.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. What Is the Cliff */}
            <h2 id="what-is-the-cliff" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is the Illinois Estate Tax Cliff?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The term &ldquo;cliff&rdquo; describes the dramatic jump in Illinois estate tax liability that occurs the moment an estate crosses the $4 million exemption threshold. Unlike some tax structures where only the amount above a threshold is taxed, Illinois estate tax applies to the <strong>entire taxable estate</strong> once the threshold is crossed — not just the excess.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Here is why this matters: an estate worth exactly $4,000,000 owes zero Illinois estate tax. An estate worth $4,000,001 — one dollar more — triggers an Illinois estate tax computation on the full $4,000,001. Because the tax table is graduated and the effective rate on amounts just above $4 million is relatively steep, that single dollar above the threshold can result in a tax liability of roughly $100,000 or more. The effective marginal tax rate on the dollars just above $4 million can exceed 100% — meaning the heir pays more in taxes on those marginal dollars than those dollars are actually worth.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This is not a quirk or an oversight — it is a structural feature of how the Illinois estate tax is calculated using graduated rate tables that apply to the full estate value. But for families who do not understand it in advance, the cliff can produce a shocking and, in many cases, unnecessary tax bill.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <BarChart2 className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">Why it&apos;s called a &ldquo;cliff&rdquo;</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans']">
                    Imagine walking along a flat path (no tax below $4 million) and then suddenly stepping off the edge of a cliff (a large tax bill the moment you cross $4 million). The tax does not gradually increase as the estate grows above $4 million — it jumps sharply the moment the threshold is crossed. Estates that are $50,000 or $100,000 above $4 million often face the same approximate tax bill as estates that are $300,000 or $400,000 above $4 million, because the lower brackets are consumed all at once.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Cliff Example */}
            <h2 id="cliff-example" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The Illinois Estate Tax Cliff in Action: A Step-by-Step Example
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Consider two Illinois residents who pass away in 2026. Both have similar estates, with one key difference:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-lg font-['Plus_Jakarta_Sans'] text-green-800">Estate A: $3,950,000</h3>
                </div>
                <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] mb-3">
                  Home: $900,000<br />
                  Retirement accounts: $1,200,000<br />
                  Investment accounts: $1,100,000<br />
                  Life insurance to estate: $500,000<br />
                  Other assets: $250,000
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-2xl font-bold text-green-700 font-['Plus_Jakarta_Sans']">$0</p>
                  <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">Illinois estate tax owed</p>
                </div>
                <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] mt-3">
                  Below the $4M threshold — no Illinois estate tax applies.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <h3 className="font-bold text-lg font-['Plus_Jakarta_Sans'] text-red-800">Estate B: $4,200,000</h3>
                </div>
                <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] mb-3">
                  Home: $1,100,000<br />
                  Retirement accounts: $1,200,000<br />
                  Investment accounts: $1,100,000<br />
                  Life insurance to estate: $500,000<br />
                  Other assets: $300,000
                </p>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <p className="text-2xl font-bold text-red-700 font-['Plus_Jakarta_Sans']">~$128,800</p>
                  <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">Estimated Illinois estate tax owed</p>
                </div>
                <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] mt-3">
                  $250,000 over the threshold triggers a six-figure tax bill on the entire estate.
                </p>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The two estates are separated by $250,000 in total value — roughly the appreciation of a home over a few years, or a strong year in the stock market. Yet Estate A pays no Illinois estate tax while Estate B pays roughly $128,800. The heirs of Estate B receive $128,800 less than expected — not because the family was significantly wealthier, but because they happened to be above the threshold.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Now consider Estate B&apos;s situation more carefully. They crossed the $4 million threshold by $200,000. The Illinois estate tax on that $200,000 &ldquo;extra&rdquo; is the entire ~$128,800 — an effective marginal rate of over 64% on just the marginal dollars. For families even closer to the cliff (say, $50,000 over the threshold), the effective marginal rate on those excess dollars can be even more extreme.
            </p>

            {/* 5. Illinois Rates */}
            <h2 id="illinois-rates" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Illinois Estate Tax Rates and Brackets
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois estate tax rates are graduated, starting at 0.8% on the first bracket of taxable estate value and rising to a top rate of 16% on estates above $10.04 million. However, because the tax applies to the <strong>entire estate</strong> once the threshold is crossed, the effective rate and the cliff effect are more nuanced than a simple bracket analysis suggests.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Illinois Estate Tax: Approximate Tax Liability by Estate Size
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Total Taxable Estate</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Est. Illinois Tax</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Effective Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['$3,999,999 or less', '$0', '0%'],
                      ['$4,100,000', '~$103,200', '~2.5%'],
                      ['$4,500,000', '~$153,000', '~3.4%'],
                      ['$5,000,000', '~$182,000', '~3.6%'],
                      ['$6,000,000', '~$302,000', '~5.0%'],
                      ['$8,000,000', '~$622,000', '~7.8%'],
                      ['$10,000,000', '~$941,600', '~9.4%'],
                      ['$15,000,000', '~$1,741,600', '~11.6%'],
                    ].map(([estate, tax, rate], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className={`py-3 px-6 font-medium ${i === 0 ? 'text-green-700' : 'text-gray-700'}`}>
                          {estate}
                        </td>
                        <td className={`py-3 px-4 ${i === 0 ? 'text-green-700 font-bold' : 'text-gray-700'}`}>
                          {tax}
                        </td>
                        <td className={`py-3 px-4 ${i === 0 ? 'text-green-700' : 'text-gray-600'}`}>{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] px-6 py-3">
                * Estimates based on the Illinois estate tax rate tables. Actual tax depends on deductions, the marital deduction, charitable bequests, and other factors. Consult an attorney for a precise calculation.
              </p>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Notice the jump from $0 for an estate at $3,999,999 to approximately $103,200 for an estate at $4,100,000 — an increase of just $100,100 in estate value, but a tax bill of $103,200. That is the cliff in action. The marginal rate on the first $100,000 over the threshold is effectively over 100%.
            </p>

            {/* 6. Who Is Affected */}
            <h2 id="who-is-affected" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Who Is Most at Risk from the Illinois Estate Tax Cliff?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Families who are most at risk often do not think of themselves as &ldquo;wealthy&rdquo; by any common definition. In Chicago and surrounding suburbs, the Illinois estate tax cliff affects a surprisingly broad range of families — particularly those who have:
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  icon: '🏠',
                  title: 'Chicago-area homeowners with appreciated real estate',
                  detail:
                    'A single-family home in Chicago, Evanston, Wilmette, Naperville, or Lake Forest may have appreciated to $700,000–$1.5 million or more. Combined with retirement savings, that home alone can push a middle-class family well above the $4 million threshold.',
                },
                {
                  icon: '💼',
                  title: 'Small business owners',
                  detail:
                    'A closely held business or professional practice — even one generating modest annual income — may be valued at $1 million or more for estate purposes. Added to home equity and retirement savings, this can easily create a taxable Illinois estate.',
                },
                {
                  icon: '📈',
                  title: 'Long-tenured employees with employer retirement plans',
                  detail:
                    'Decades of 401(k) contributions, employer matches, and investment growth can produce retirement account balances of $1 million or more. These assets are fully included in the taxable estate and do not receive any special exclusion from Illinois estate tax.',
                },
                {
                  icon: '🏦',
                  title: 'Life insurance policyholders who own their policies',
                  detail:
                    'If you own a life insurance policy (rather than having it owned by an irrevocable trust), the death benefit is included in your taxable estate. A $1 million term policy, combined with other assets, can push an estate above the cliff threshold.',
                },
                {
                  icon: '👪',
                  title: 'Surviving spouses who inherit from a deceased spouse',
                  detail:
                    'When a spouse inherits an entire estate without bypass trust planning, their own estate grows to include both their assets and the inherited assets. This commonly pushes the surviving spouse\'s estate well above $4 million, creating a large Illinois estate tax obligation at the second death.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                    <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 7. Planning Strategies */}
            <h2 id="planning-strategies" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Strategies to Reduce or Eliminate Illinois Estate Tax
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The Illinois estate tax cliff is a problem with well-established legal solutions. None of them require exotic or aggressive tax shelters — most are standard estate planning techniques that any competent Illinois estate planning attorney can implement. The key is acting before death, not after.
            </p>

            <h3 id="marital-deduction" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Marital Deduction and Bypass Trust Planning
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For married couples, the most impactful Illinois estate tax planning tool is the <strong>bypass trust</strong> (sometimes called a credit shelter trust or &ldquo;B trust&rdquo;). Without a bypass trust, many married couples unknowingly create a massive Illinois estate tax problem at the surviving spouse&apos;s death.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Here is the problem: property passing directly from one spouse to another qualifies for the unlimited marital deduction — no Illinois estate tax is due at the first death. But the surviving spouse&apos;s estate now includes everything: their own assets plus the inherited assets. If the combined estate is above $4 million (which it commonly is in this situation), the surviving spouse&apos;s estate will owe Illinois estate tax on everything above their single $4 million exemption.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A bypass trust solves this by directing the deceased spouse&apos;s assets (up to $4 million) into a trust that benefits the surviving spouse during their lifetime but is not included in the surviving spouse&apos;s estate. This effectively gives the couple a combined $8 million shield against Illinois estate tax — double the individual exemption.
            </p>

            <h3 id="ilit" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Irrevocable Life Insurance Trusts (ILITs)
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you own a life insurance policy at the time of your death, the death benefit is included in your taxable estate. For many Illinois families, a life insurance policy is the single largest asset — and the one most easily restructured outside the estate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An <strong>irrevocable life insurance trust (ILIT)</strong> owns the policy instead of you. When you die, the death benefit is paid to the trust — not to your estate — and is therefore not subject to Illinois estate tax. The trust can then use the proceeds to purchase assets from the estate (providing estate liquidity) or distribute funds directly to beneficiaries. This is one of the most effective and widely used tools for managing Illinois estate tax exposure for families with estates between $4 million and $10 million.
            </p>

            <h3 id="gifting" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Lifetime Gifting Programs
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois does not impose a gift tax. Every dollar you give away during your lifetime is a dollar that will not be in your estate at death. The federal annual gift tax exclusion allows each person to give up to <strong>$18,000 per recipient per year</strong> (2026 amount) without any gift tax consequence or reduction in the federal lifetime exemption. A couple can give $36,000 per recipient per year.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For families whose estate sits just above the $4 million cliff — say, $4.5 million — a structured multi-year gifting program can bring the estate below the threshold and eliminate the Illinois estate tax entirely. Gifts to fund 529 college savings plans, pay medical or tuition expenses directly, or contribute to charitable causes are also effective in reducing the taxable estate.
            </p>

            <h3 id="charitable" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Charitable Planning
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Charitable bequests reduce the taxable estate dollar for dollar. For an estate just above the $4 million threshold, a charitable bequest of the right size can pull the estate below the cliff — potentially saving far more in estate taxes than the value of the bequest itself. For example, a $150,000 charitable bequest that brings a $4.15 million estate to $4 million could save the estate $103,000 or more in Illinois estate tax.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              More sophisticated charitable tools — including charitable remainder trusts (CRTs) and charitable lead annuity trusts (CLATs) — allow families to provide for both family members and charitable organizations while significantly reducing estate tax exposure. These require careful design but are well-established tools in Illinois estate planning.
            </p>

            <div className="space-y-4 my-8">
              {strategies.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#33414E] text-base mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-3">{item.body}</p>
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1.5 text-[#4a708b] font-medium text-sm hover:underline font-['Plus_Jakarta_Sans']"
                      >
                        {item.linkLabel}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Is Your Estate Near the Illinois Tax Cliff?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families understand their Illinois estate tax exposure and implement strategies that protect more of what they&apos;ve built. Flat-fee pricing — you know exactly what you&apos;ll pay before you start.
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
              The Illinois estate tax cliff is a problem that rewards advance planning and punishes inaction. The closer your estate is to $4 million — whether you are below it now or just above it — the more important it is to have a current, professionally drafted estate plan that accounts for the cliff and positions your estate appropriately.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For context on broader estate planning tools, see our guides on{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trusts
              </Link>
              ,{' '}
              <Link href="/blog/revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable vs. irrevocable trusts
              </Link>
              , and{' '}
              <Link href="/blog/how-estate-taxes-work-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how estate taxes work in Illinois
              </Link>
              . If you believe your estate may be at or above the $4 million threshold, a consultation with an experienced{' '}
              <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Illinois estate planning attorney
              </Link>{' '}
              is the most important next step you can take.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Tax Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families understand and navigate the Illinois estate tax cliff. Whether your estate is at $3.5 million and growing, or already above $4 million, we can help you design a plan that protects more of what you&apos;ve built for the people you love — with transparent, flat-fee pricing.
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
                Related Illinois Estate Tax &amp; Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: '/blog/how-estate-taxes-work-in-illinois/', label: 'How Estate Taxes Work in Illinois' },
                  {
                    href: '/blog/revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois/',
                    label: 'Revocable vs. Irrevocable Trust: Which Is Right for You?',
                  },
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Why Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/selecting-a-trustee-for-your-illinois-revocable-trust/',
                    label: 'Selecting a Trustee for Your Illinois Trust',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois estate tax law is complex and fact-specific — the estate tax figures and examples used here are illustrative approximations and should not be relied upon for tax planning purposes. Consult a licensed Illinois attorney and a qualified CPA or tax advisor for guidance tailored to your specific estate and tax situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Estate from the Illinois Tax Cliff?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and learn how to structure your estate plan to reduce or eliminate your Illinois estate tax exposure.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-estate-tax-cliff-explained/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-estate-tax-cliff-explained/')}&text=${encodeURIComponent('Illinois Estate Tax Cliff Explained — and how to plan around it')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-estate-tax-cliff-explained/')}`}
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
