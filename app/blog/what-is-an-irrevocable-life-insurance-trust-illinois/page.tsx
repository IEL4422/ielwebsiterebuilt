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
  FileText,
  Shield,
  DollarSign,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'what-is-an-irrevocable-life-insurance-trust-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-an-ilit', title: 'What Is an Irrevocable Life Insurance Trust (ILIT)?', level: 2, numeration: '2' },
    { id: 'why-life-insurance-is-taxable', title: 'Why Life Insurance Is Often Part of Your Taxable Estate', level: 2, numeration: '3' },
    {
      id: 'how-an-ilit-works',
      title: 'How an ILIT Works in Illinois',
      level: 2,
      numeration: '4',
      children: [
        { id: 'creating-the-ilit', title: 'Creating the ILIT', level: 3, numeration: '4.1' },
        { id: 'funding-the-ilit', title: 'Funding the ILIT: The Crummey Notice', level: 3, numeration: '4.2' },
        { id: 'at-death', title: 'What Happens at Your Death', level: 3, numeration: '4.3' },
      ],
    },
    { id: 'who-needs-an-ilit', title: 'Who Needs an ILIT in Illinois?', level: 2, numeration: '5' },
    { id: 'ilit-vs-naming-beneficiary', title: 'ILIT vs. Simply Naming a Beneficiary', level: 2, numeration: '6' },
    { id: 'drawbacks', title: 'Drawbacks and Limitations of an ILIT', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'How much does it cost to set up an ILIT in Illinois?',
      answer:
        'Attorney fees for drafting an ILIT in Illinois typically range from $1,500 to $3,500 for a stand-alone trust, depending on complexity. When an ILIT is created as part of a comprehensive estate plan that includes a revocable living trust, will, and powers of attorney, the incremental cost is often lower. Illinois Estate Law offers flat-fee pricing so you know the exact cost before work begins. The cost of setting up an ILIT is almost always justified by the estate tax savings it produces for families with taxable estates — saving hundreds of thousands of dollars in Illinois and federal estate taxes is not unusual for a well-structured ILIT.',
    },
    {
      question: 'Can I be the trustee of my own ILIT?',
      answer:
        'No. This is one of the most critical rules governing ILITs: the person who creates the ILIT (the grantor) cannot serve as trustee, because doing so would give the grantor incidents of ownership over the policy — which would pull the insurance proceeds back into the taxable estate. The trustee must be someone else — a trusted family member, friend, attorney, or corporate trustee. The trustee\'s job is to receive premium payments from you, send Crummey notices to beneficiaries, pay the insurance premiums, and manage and distribute the death benefit proceeds when you die.',
    },
    {
      question: 'What is a Crummey notice and why does it matter?',
      answer:
        'A Crummey notice is a written notice sent to ILIT beneficiaries each time a contribution is made to the trust. The notice informs beneficiaries that they have the right to withdraw the contributed amount (up to their annual gift tax exclusion share) within a limited window — usually 30 days. This withdrawal right converts your contribution into a present-interest gift, which qualifies for the annual gift tax exclusion. If Crummey notices are not sent correctly and contemporaneously with each contribution, the annual exclusion is lost and your contributions may be treated as taxable gifts. Maintaining a documented Crummey notice procedure is one of the most important ongoing compliance tasks in managing an ILIT.',
    },
    {
      question: 'Can an existing life insurance policy be transferred into an ILIT?',
      answer:
        'Yes — but with an important catch. If you transfer an existing policy into an ILIT, the IRS applies a three-year lookback rule under IRC Section 2035. If you die within three years of the transfer, the policy proceeds are included in your taxable estate as if the transfer never happened. For this reason, many estate planners recommend having the ILIT purchase a new policy directly, rather than transferring an existing one. If you are in good health, this approach eliminates the three-year risk and allows the ILIT to own the policy from day one.',
    },
    {
      question: 'Does an ILIT avoid Illinois estate tax as well as federal estate tax?',
      answer:
        'Yes. Illinois imposes its own estate tax on estates exceeding approximately $4 million (as of 2026), separate from the federal estate tax threshold. Life insurance proceeds held in an ILIT are removed from both your federal and Illinois taxable estate. Because Illinois has a lower exemption than the federal government, some Illinois families who fall below the federal threshold still owe Illinois estate tax — making an ILIT particularly valuable for estates in the $4 million to $13 million range. An estate planning attorney familiar with Illinois estate tax law can model the potential savings for your specific situation.',
    },
    {
      question: 'What happens to the ILIT if I no longer need or want the life insurance policy?',
      answer:
        'Because an ILIT is irrevocable, you cannot simply take the policy back or dissolve the trust at will. However, the trustee has options. The trustee can surrender the policy for its cash value, which then remains in the trust as an asset to be distributed to the beneficiaries. The trustee can also allow the policy to lapse if premium payments stop. Some ILITs are drafted with provisions for what happens to trust assets if the policy is surrendered. Before stopping premium payments or changing your approach, consult with your estate planning attorney — the tax and trust law implications can be complex.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is an Irrevocable Life Insurance Trust (ILIT) in Illinois?',
    description:
      'Learn how an Illinois ILIT removes life insurance from your taxable estate, how Crummey notices work, who needs an ILIT, and how to establish one.',
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
    datePublished: '2026-09-09',
    dateModified: '2026-09-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/what-is-an-irrevocable-life-insurance-trust-illinois/',
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
                  10 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                What Is an Irrevocable Life Insurance Trust (ILIT) in Illinois?
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                If your life insurance policy is worth $500,000 or more, the death benefit could be sitting in your taxable estate without you realizing it. An irrevocable life insurance trust — or ILIT — is the tool that changes that. Here is exactly how Illinois ILITs work, who needs one, and what it takes to set one up correctly.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>September 9, 2026</time>
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
                    An ILIT is a permanent, irrevocable trust that owns your life insurance policy — removing the death benefit from your taxable estate under both federal and Illinois estate tax law.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Without an ILIT, life insurance proceeds are included in your gross estate even though you named a beneficiary on the policy — because the IRS looks at who had ownership and control over the policy, not who received the money. An ILIT transfers that ownership to the trust, so the death benefit falls outside your taxable estate entirely.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains what an ILIT is, how it works step by step, who should consider one in Illinois, and what the most common pitfalls are — including the Crummey notice requirement that many families overlook until it is too late.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reference */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                ILIT at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Removes life insurance from your taxable estate', type: 'Primary Benefit', color: 'blue' },
                  { label: 'Irrevocable — cannot be modified or revoked once created', type: 'Key Limitation', color: 'amber' },
                  { label: 'Best for Illinois estates likely to owe estate tax', type: 'Who Needs It', color: 'green' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-4 border text-center ${
                      item.color === 'blue'
                        ? 'bg-blue-50 border-blue-200'
                        : item.color === 'amber'
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-green-50 border-green-200'
                    }`}
                  >
                    <p
                      className={`text-base font-bold mb-1 font-['Plus_Jakarta_Sans'] ${
                        item.color === 'blue'
                          ? 'text-blue-700'
                          : item.color === 'amber'
                          ? 'text-amber-700'
                          : 'text-green-700'
                      }`}
                    >
                      {item.type}
                    </p>
                    <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. What Is an ILIT */}
            <h2 id="what-is-an-ilit" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is an Irrevocable Life Insurance Trust (ILIT)?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An <strong>irrevocable life insurance trust</strong> (ILIT) is a specialized legal arrangement in which a trust — not you — owns your life insurance policy. You create the trust, name a trustee to manage it, and designate beneficiaries who will ultimately receive the death benefit. But crucially, the trust itself holds the policy. You give up ownership and control over the insurance in exchange for a significant tax advantage: when you die, the policy proceeds pass to your beneficiaries without being counted as part of your taxable estate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The word &ldquo;irrevocable&rdquo; is the central defining feature. Unlike a <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable living trust</Link> — which you can modify, dissolve, or take assets back from at any time — an ILIT cannot be undone once it is created and funded. You cannot serve as trustee, you cannot change the beneficiaries at will, and you cannot reclaim the policy. This irrevocability is precisely what makes the tax benefit work: the IRS accepts that you have genuinely given up ownership.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois residents use ILITs primarily to address two estate tax thresholds: the <strong>Illinois estate tax</strong>, which applies to estates exceeding approximately $4 million (as of 2026), and the <strong>federal estate tax</strong>, which applies to estates exceeding the federal exemption. Because Illinois has a much lower exemption than the federal government, many Illinois families who would not owe federal estate tax still owe Illinois estate tax — making an ILIT particularly relevant for mid-size estates in the $4 million to $13 million range. For a detailed look at how Illinois&apos;s estate tax cliff affects planning, see our guide on the <Link href="/blog/illinois-estate-tax-cliff-explained/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Illinois estate tax cliff</Link>.
            </p>

            {/* 3. Why Life Insurance Is Taxable */}
            <h2 id="why-life-insurance-is-taxable" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Why Life Insurance Is Often Part of Your Taxable Estate
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Many people are surprised to learn that life insurance proceeds — even those payable directly to a named beneficiary like a spouse or child — can still be included in the deceased&rsquo;s taxable estate. This happens because federal estate tax law (and Illinois follows the same general framework) focuses on <strong>incidents of ownership</strong>: who had the right to control the policy at death, not who ultimately received the money.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you owned the policy at the time of your death — meaning you had the right to change the beneficiary, borrow against the cash value, assign the policy, or surrender it — the full face value of the death benefit is included in your gross estate for estate tax purposes. The fact that your beneficiary receives the money directly, bypassing probate, does not remove it from the estate tax calculation.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">A common misconception about life insurance and estates</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    &ldquo;My life insurance goes directly to my beneficiary, so it&rsquo;s not part of my estate.&rdquo; This is one of the most widespread misconceptions in estate planning. Life insurance proceeds bypass probate — meaning they are not distributed through your will — but they are counted in your gross estate for estate tax purposes if you owned the policy. The distinction between probate and estate tax is one of the most important concepts in all of estate planning.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Consider a practical example. An Illinois family has a $6 million estate, including a $1.5 million life insurance policy the deceased owned personally. The full $6 million is potentially subject to Illinois estate tax (which kicks in above approximately $4 million). If instead the $1.5 million policy had been owned by an ILIT, the taxable estate would be only $4.5 million — and the estate tax savings could easily exceed $100,000 depending on where the estate falls on the Illinois rate schedule. For larger estates, the savings are proportionally greater.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              It is also worth noting that <Link href="/blog/beneficiary-designations-override-your-will-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">beneficiary designations</Link> on a life insurance policy determine who receives the proceeds — but they say nothing about estate tax treatment. Naming your child as beneficiary means your child gets the money without probate; it does not mean the money is excluded from your estate for tax purposes. Only giving up ownership — through an ILIT or by transferring the policy to the beneficiary directly — accomplishes that.
            </p>

            {/* 4. How an ILIT Works */}
            <h2 id="how-an-ilit-works" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How an ILIT Works in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Setting up and operating an ILIT is more involved than creating a standard revocable trust, because the IRS scrutinizes ILITs carefully. The steps must be followed precisely — and maintained year after year — for the trust to achieve its intended tax benefit.
            </p>

            <h3 id="creating-the-ilit" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Creating the ILIT
            </h3>

            <div className="space-y-3 my-6">
              {[
                {
                  title: 'Draft the trust document',
                  detail: 'An estate planning attorney drafts the ILIT document, specifying the trustee, the beneficiaries, the distribution terms for the death benefit, and the powers and limitations of the trustee. The trust must be drafted carefully to avoid provisions that would give you retained control over the policy — which would cause the proceeds to be pulled back into your taxable estate.',
                },
                {
                  title: 'Fund the ILIT with an insurance policy',
                  detail: 'The ILIT either purchases a new life insurance policy directly (the preferred approach for most clients) or accepts the transfer of an existing policy from you. If you transfer an existing policy, the three-year lookback rule under IRC Section 2035 applies: if you die within three years of the transfer, the proceeds are still included in your estate as though the transfer never happened.',
                },
                {
                  title: 'Name the ILIT as both owner and beneficiary of the policy',
                  detail: 'The trust is listed as the policy owner and the primary beneficiary of the death benefit on the insurance application. This is the step that removes the policy from your estate — because you no longer own it, the proceeds are not included in your gross estate at death.',
                },
                {
                  title: 'You remain the insured person',
                  detail: 'You remain the insured on the policy — your death is what triggers the payout. But the trust owns the policy and collects the proceeds. Being the insured alone, without any ownership rights, does not give you incidents of ownership that would pull the proceeds into your estate.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 id="funding-the-ilit" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Funding the ILIT: The Crummey Notice Requirement
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Once the ILIT is created, you need to pay the insurance premiums. But you cannot pay them directly — the trust must pay the premiums, because the trust, not you, is the policy owner. The process works like this: you make a cash gift to the ILIT, the trustee sends <strong>Crummey notices</strong> to the beneficiaries, and then the trustee uses the contributed funds to pay the insurance premium.
            </p>

            <div className="border border-gray-200 rounded-xl p-6 bg-white my-6">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-[#4a708b] flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="font-bold text-[#33414E] mb-4 font-['Plus_Jakarta_Sans']">
                    The Crummey Notice: Why It Matters
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        rule: 'Annual gift tax exclusion qualification',
                        detail: 'To use the annual gift tax exclusion ($18,000 per recipient in 2024, subject to annual adjustment), your contribution must be a "present interest" gift — meaning the recipient has an immediate right to use it. A gift directly to an irrevocable trust is normally a "future interest" gift that does not qualify for the exclusion.',
                      },
                      {
                        rule: 'The Crummey withdrawal right converts the gift',
                        detail: 'A Crummey provision gives each trust beneficiary the temporary right to withdraw their share of the contribution — usually for 30 days after the notice is sent. This withdrawal right, even though it is almost never actually exercised, converts the gift into a present-interest gift, qualifying it for the annual exclusion and avoiding gift tax.',
                      },
                      {
                        rule: 'Notice must be contemporaneous and documented',
                        detail: 'The trustee must send a written Crummey notice to each beneficiary at the time each contribution is made. Waiting weeks or backdating notices is not acceptable. The notices must be kept on file as permanent records demonstrating that the procedure was followed correctly for every premium cycle.',
                      },
                      {
                        rule: 'IRS scrutiny is significant',
                        detail: 'The IRS has successfully challenged ILITs where Crummey notices were not properly sent or documented. Failure to follow this procedure can result in the annual gift exclusion being denied, treating contributions as taxable gifts — and in some cases, the estate tax benefit of the ILIT being unwound entirely.',
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                        <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900">{item.rule}:</strong> {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h3 id="at-death" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              What Happens at Your Death
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When you die, the life insurance company pays the death benefit directly to the ILIT — not to your probate estate. Because the trust owns the policy, the proceeds are not part of your gross estate and are not subject to Illinois or federal estate tax. The trustee then manages and distributes those proceeds according to the trust terms. Common distribution structures include:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  label: 'Immediate outright distribution',
                  detail: 'The trustee distributes the proceeds immediately to the named beneficiaries — often the simplest approach for families with adult beneficiaries who can responsibly manage a lump sum.',
                },
                {
                  label: 'Held in continuing trust',
                  detail: 'The proceeds remain in the ILIT and are distributed over time — for example, a portion at age 25, another at 30, and the remainder at 35 — useful when beneficiaries include minor children or young adults.',
                },
                {
                  label: 'Support for a surviving spouse',
                  detail: 'ILIT proceeds can be structured to benefit a surviving spouse during their lifetime without being included in the spouse\'s own taxable estate — though this requires careful drafting to avoid inclusion issues at the second death.',
                },
                {
                  label: 'Estate liquidity funding',
                  detail: 'If the main estate has illiquid assets such as a family business or real estate, the ILIT can loan money or purchase assets from the estate, providing liquidity for estate taxes without forcing a fire sale.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h4 className="font-bold text-[#33414E] text-sm mb-2 font-['Plus_Jakarta_Sans']">{item.label}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* 5. Who Needs an ILIT */}
            <h2 id="who-needs-an-ilit" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Who Needs an ILIT in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Not every Illinois family needs an ILIT. The trust is most valuable — and worth the additional cost and complexity — in specific situations. Here are the strongest indicators that an ILIT belongs in your estate plan:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Your estate (including life insurance) exceeds $4 million',
                  color: 'blue',
                  body: 'Illinois imposes estate tax on estates above approximately $4 million. If your total assets — including the face value of your life insurance — exceed this threshold, an ILIT can remove the policy value from your Illinois taxable estate and potentially save a significant amount in state estate taxes. The Illinois estate tax rate runs from 0.8% to 16%, making the savings meaningful even for estates only moderately above the exemption.',
                },
                {
                  title: 'You are a business owner with significant life insurance',
                  color: 'green',
                  body: 'Business owners often use life insurance to fund buy-sell agreements or provide liquidity for their estate\'s heirs. If that life insurance is owned by the business owner personally, the proceeds land in a potentially taxable estate on top of the business value. An ILIT separates the insurance from the taxable estate while preserving the policy\'s liquidity purpose for the family and the business.',
                },
                {
                  title: 'You have a blended family or complex beneficiary situation',
                  color: 'amber',
                  body: 'An ILIT gives you control over exactly how insurance proceeds are distributed — by age, by need, by relationship — in ways that a simple beneficiary designation cannot accomplish. For blended families where you want to provide for a surviving spouse without disinheriting children from a prior relationship, a properly structured ILIT can accomplish both goals simultaneously.',
                  link: '/blog/estate-planning-for-blended-families-in-illinois-8-mistakes-that-break-hearts-and-budgets/',
                  linkLabel: 'Estate planning for blended families in Illinois',
                },
                {
                  title: 'You want to protect insurance proceeds from beneficiaries’ creditors',
                  color: 'blue',
                  body: 'When a beneficiary receives a direct life insurance payout, that money is generally available to the beneficiary\'s creditors. If the proceeds are held in an ILIT and distributed at the trustee\'s discretion, the funds may be shielded from creditors, divorcing spouses, or a beneficiary\'s poor financial decisions. This asset protection benefit is valuable even for families who do not face estate tax issues.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-6 ${
                    item.color === 'blue'
                      ? 'bg-blue-50 border-blue-200'
                      : item.color === 'green'
                      ? 'bg-green-50 border-green-200'
                      : 'bg-amber-50 border-amber-200'
                  }`}
                >
                  <h3 className="font-bold text-gray-900 text-base mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-3">{item.body}</p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className={`inline-flex items-center gap-1.5 font-medium text-sm hover:underline font-['Plus_Jakarta_Sans'] ${
                        item.color === 'blue'
                          ? 'text-blue-700'
                          : item.color === 'green'
                          ? 'text-green-700'
                          : 'text-amber-700'
                      }`}
                    >
                      {item.linkLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* 6. ILIT vs. Naming a Beneficiary */}
            <h2 id="ilit-vs-naming-beneficiary" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              ILIT vs. Simply Naming a Beneficiary
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are not facing estate tax exposure, naming a beneficiary directly on your life insurance policy is simpler and perfectly adequate. But for families above the Illinois estate tax threshold, or those with complex beneficiary needs, the comparison looks very different.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Direct Beneficiary vs. ILIT: A Comparison
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Direct Beneficiary</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">ILIT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Included in taxable estate?', 'Yes — if you owned the policy', 'No — trust owns the policy'],
                      ['Probate?', 'No — passes directly to beneficiary', 'No — paid to trust; trust distributes'],
                      ['Creditor protection', 'Limited once received by beneficiary', 'Strong — trustee holds and distributes carefully'],
                      ['Control over distributions', 'None once paid — lump sum to beneficiary', 'Full control — by age, need, or conditions'],
                      ['Beneficiary changes', 'Flexible — change the designation anytime', 'Difficult — trust is irrevocable'],
                      ['Illinois estate tax savings', 'None', 'Significant — removes proceeds from taxable estate'],
                      ['Complexity and cost', 'Simple and free', 'Higher — attorney fees, annual administration'],
                      ['Best for', 'Estates below the IL $4M tax threshold', 'Estates above $4M or with complex beneficiary needs'],
                    ].map(([factor, direct, ilit], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-gray-600">{direct}</td>
                        <td className="py-3 px-4 text-gray-600">{ilit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Does Your Estate Need an ILIT?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families evaluate whether an ILIT makes sense for their situation — and drafts the trust correctly when it does. Flat-fee pricing so you always know what you&apos;ll pay before we start.
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

            {/* 7. Drawbacks */}
            <h2 id="drawbacks" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Drawbacks and Limitations of an ILIT
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An ILIT is a powerful tool, but it is not the right solution for everyone. Before committing to one, Illinois families should understand the genuine limitations involved.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Irrevocability is permanent',
                  body: 'Once created, an ILIT cannot be changed, modified, or dissolved by the grantor. You cannot change the beneficiaries without the beneficiaries\' consent and careful legal maneuvering. You cannot reclaim the policy or its cash value. Life changes — divorce, beneficiary deaths, new children — can complicate an ILIT that cannot easily be updated. This is why ILIT drafting must anticipate future scenarios with great care.',
                  color: 'amber',
                },
                {
                  title: 'You cannot serve as trustee',
                  body: 'As the grantor, you cannot be the trustee of your own ILIT. Serving as trustee would give you incidents of ownership over the policy, defeating the estate tax purpose. You must choose a trustee who is both trustworthy and capable of managing the contributions, sending Crummey notices, paying premiums on time, and eventually distributing proceeds — all without ongoing court supervision.',
                  color: 'amber',
                },
                {
                  title: 'Annual administration is required every year',
                  body: 'An ILIT is not a create-and-forget tool. Every year, you must contribute funds for the premium payment, the trustee must send Crummey notices to beneficiaries, and the trustee must pay the premium on time. Missing a year or sending defective notices can jeopardize the annual gift tax exclusion and create compliance problems. Some professional trustees charge annual fees for this ongoing work.',
                  color: 'amber',
                },
                {
                  title: 'The three-year lookback rule for transferred policies',
                  body: 'If you transfer an existing policy to an ILIT rather than having the ILIT purchase a new one, IRC Section 2035 pulls the proceeds back into your estate if you die within three years of the transfer. For people in poor health or advanced age, this rule may make the ILIT strategy ineffective for existing policies.',
                  color: 'blue',
                },
                {
                  title: 'Not necessary for smaller estates',
                  body: 'If your total estate — including life insurance — falls well below the Illinois estate tax exemption of approximately $4 million, the cost and complexity of an ILIT likely exceeds the benefit. For these families, correctly naming beneficiaries and keeping the estate plan current is the better approach.',
                  color: 'blue',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border-l-4 p-5 rounded-r-lg ${
                    item.color === 'amber' ? 'bg-amber-50 border-amber-400' : 'bg-blue-50 border-blue-300'
                  }`}
                >
                  <h4 className="font-bold text-gray-900 mb-2 font-['Plus_Jakarta_Sans'] text-sm">{item.title}</h4>
                  <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                ILIT Consultation Checklist: What to Bring
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Current life insurance policies — face value, cash value, carrier',
                  'Whether you own the policies personally or through a business',
                  'Estimated total estate value, including real estate and retirement accounts',
                  'Names and ages of intended beneficiaries',
                  'Candidate for trustee — someone other than yourself',
                  'Whether you want immediate distribution or ongoing trust management',
                  'Any existing trusts that might interact with the ILIT',
                  'Prior large gifts and whether you have used annual gift exclusion amounts',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
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
              If your estate — including your life insurance — approaches or exceeds the Illinois estate tax threshold, an ILIT deserves serious consideration. The practical steps to take now: pull together your existing life insurance policies, get a rough estimate of your total estate value, and speak with an Illinois estate planning attorney about whether the math justifies an ILIT for your situation.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law handles ILIT drafting as part of comprehensive estate plans that typically also include a <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable living trust</Link>, a <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">pour-over will</Link>, and <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">powers of attorney for property and healthcare</Link>. Our flat-fee model means you know the full cost before we begin — no billable-hour surprises. See our <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">services and pricing page</Link> for details, or <Link href="/book-consultation/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">book a free consultation</Link> to discuss your estate.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Speak With an Illinois Estate Planning Attorney</h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families evaluate whether an ILIT is the right tool — and drafts it correctly when it is. Schedule a free consultation to discuss your estate and your life insurance policies.
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
                  href="/chicago-revocable-trusts-lawyer/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  Revocable Trust Services
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
                    href: '/blog/illinois-estate-tax-cliff-explained/',
                    label: 'Illinois Estate Tax Cliff Explained',
                  },
                  {
                    href: '/blog/revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois/',
                    label: 'Revocable vs. Irrevocable Trust: Which Is Right for You in Illinois?',
                  },
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/trustee-vs-executor-illinois/',
                    label: 'Trustee vs. Executor in Illinois: Roles, Duties, and Which You Need',
                  },
                  {
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois estate planning law, including the tax treatment of irrevocable life insurance trusts, is complex and fact-specific. Federal and Illinois tax laws are subject to change. Consult a licensed Illinois attorney and a qualified tax advisor for guidance tailored to your specific situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Estate With an ILIT in Illinois?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and find out whether an irrevocable life insurance trust can reduce your estate&apos;s tax burden and protect your family&apos;s financial future.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-is-an-irrevocable-life-insurance-trust-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-is-an-irrevocable-life-insurance-trust-illinois/')}&text=${encodeURIComponent('What Is an Irrevocable Life Insurance Trust (ILIT) in Illinois? A plain-English guide.')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-is-an-irrevocable-life-insurance-trust-illinois/')}`}
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
