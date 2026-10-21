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
  Heart,
  Shield,
  Users,
  Scale,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'blended-family-estate-planning-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'why-different', title: 'Why Blended Family Estate Planning Is Different', level: 2, numeration: '2' },
    {
      id: 'standard-plan-problems',
      title: 'How a Standard Estate Plan Can Fail a Blended Family',
      level: 2,
      numeration: '3',
      children: [
        { id: 'intestate-problem', title: "Illinois Intestacy Laws Don't Recognize Stepchildren", level: 3, numeration: '3.1' },
        { id: 'everything-to-spouse', title: 'The "Everything to My Spouse" Trap', level: 3, numeration: '3.2' },
        { id: 'beneficiary-conflicts', title: 'Beneficiary Designations That Override Your Plan', level: 3, numeration: '3.3' },
      ],
    },
    {
      id: 'key-tools',
      title: 'Key Estate Planning Tools for Blended Families in Illinois',
      level: 2,
      numeration: '4',
      children: [
        { id: 'revocable-trust', title: 'Revocable Living Trusts With Separate Shares', level: 3, numeration: '4.1' },
        { id: 'qtip-trust', title: 'QTIP Trusts: Providing for a Spouse Without Disinheriting Children', level: 3, numeration: '4.2' },
        { id: 'childrens-trusts', title: "Separate Trusts for Each Set of Children", level: 3, numeration: '4.3' },
        { id: 'prenuptial', title: 'Prenuptial and Postnuptial Agreements', level: 3, numeration: '4.4' },
      ],
    },
    { id: 'beneficiary-designations', title: 'Reviewing Beneficiary Designations After Remarriage', level: 2, numeration: '5' },
    { id: 'powers-of-attorney', title: 'Powers of Attorney in a Blended Family', level: 2, numeration: '6' },
    { id: 'communication', title: 'Talking to Your Family About the Plan', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Do stepchildren automatically inherit in Illinois if I die without a will?',
      answer:
        "No. Under Illinois intestacy law (755 ILCS 5/2-1), stepchildren are not legal heirs unless they were legally adopted by you. If you die without a will, your estate passes to your biological and legally adopted children, then to other blood relatives — your stepchildren receive nothing, regardless of how close your relationship was or how long they lived in your home. The only way to provide for stepchildren under Illinois law is through a valid will, trust, or beneficiary designation that specifically names them.",
    },
    {
      question: 'My spouse and I each have children from previous relationships. Can we use one shared will?',
      answer:
        "You can, but a single shared will is rarely the right answer for blended families and can cause serious problems. Joint or \"mirror\" wills — where both spouses leave everything to each other and then to \"our children\" — become a trap when remarried spouses have children from different relationships. After the first spouse dies, the surviving spouse typically has the legal right to change their will, potentially disinheriting the deceased spouse's children entirely. A better approach is separate wills paired with a well-funded revocable living trust that sets aside shares for each set of children in a way the surviving spouse cannot simply override.",
    },
    {
      question: 'What is a QTIP trust and is it right for my blended family?',
      answer:
        "A QTIP (Qualified Terminable Interest Property) trust is an irrevocable trust that provides income to a surviving spouse for their lifetime while preserving the principal for the deceased spouse's children from a prior relationship. It solves the core blended-family problem: you want your surviving spouse to be financially comfortable, but you also want to ensure your children from your first marriage eventually inherit from you — not from the estate of a stepparent who may later remarry or favor their own children. QTIP trusts are especially valuable for Illinois couples with significant assets and children from prior relationships, but they require careful drafting to achieve the intended tax and distribution goals.",
    },
    {
      question: "Can my new spouse claim a share of my estate even if my will leaves everything to my children?",
      answer:
        "Yes. Illinois law gives a surviving spouse the right to elect against a will and claim a \"spousal share\" of the estate — roughly one-third of the net estate under 755 ILCS 5/2-8. This means even if your will leaves everything to your children from a prior marriage, your surviving spouse can legally override part of that plan. A revocable living trust that fully holds your assets (not just a will) provides more protection: the trust's share allocated to your spouse satisfies the elective share, while the remainder is reserved for your children according to your plan. Consulting an attorney about how to structure both your will and trust to honor your intentions while complying with Illinois law is essential.",
    },
    {
      question: 'How do I make sure my children from my first marriage are protected if I remarry?',
      answer:
        "The most effective protection for children from a prior relationship is a funded revocable living trust with clearly defined separate shares, supplemented by a prenuptial agreement with your new spouse. The trust designates what portion of your assets is reserved for your children from your first marriage versus what passes to your new spouse. The prenuptial agreement establishes each spouse's separate property rights before marriage, limiting the surviving spouse's ability to claim assets you intended for your children. Together, these tools create legally enforceable protections — not just expressions of intent. An Illinois estate planning attorney can help you structure both in a way that honors your obligations to your children and your commitment to your new spouse.",
    },
    {
      question: "Should I name my new spouse or my children from a prior marriage as beneficiary on my retirement accounts?",
      answer:
        "Retirement account beneficiary designations are one of the most common estate planning errors in blended families. If you name your new spouse as the beneficiary and then die, your children from your first marriage receive nothing from those accounts — even if that contradicts your will or trust. Conversely, if you never updated your beneficiaries after remarriage, your ex-spouse or children from your first marriage may receive accounts you intended for your new spouse. The right answer depends on your goals, the size of the accounts, and your overall plan. Many blended-family clients use a combination: they name their spouse as beneficiary on some accounts while naming a trust (structured to benefit children) as beneficiary on others. This requires coordination with your estate planning attorney and your financial advisor.",
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Blended Family Estate Planning in Illinois: A Complete Guide',
    description:
      'Estate planning for blended families in Illinois requires extra care. Learn how wills, trusts, and beneficiary designations work together to protect everyone.',
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
    datePublished: '2026-10-21',
    dateModified: '2026-10-21',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/blended-family-estate-planning-illinois/',
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
                Blended Family Estate Planning in Illinois: A Complete Guide
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                When you have children from a prior relationship and a new spouse, a standard will is rarely enough. Illinois law has specific rules that can leave stepchildren with nothing and give a surviving spouse more than you intended. Here is how to build a plan that protects everyone.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>October 21, 2026</time>
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
                <Heart className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Blended family estate planning in Illinois requires deliberate, layered planning — a standard will is not enough.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Illinois intestacy laws do not recognize stepchildren. A simple &ldquo;I leave everything to my spouse&rdquo; plan can leave your children from a prior relationship with nothing. And beneficiary designations on retirement accounts and life insurance policies override your will entirely — meaning an outdated form can undo years of careful planning.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains how Illinois law affects blended families, which estate planning tools work best, and how to structure a plan that protects your spouse, your children from your current and prior relationships, and the peace of your family after you are gone.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick at-a-glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Blended Family Estate Planning at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Stepchildren are not legal heirs under Illinois intestacy law', type: 'Key Risk', color: 'amber' },
                  { label: 'Revocable trusts with separate shares protect each set of children', type: 'Core Solution', color: 'blue' },
                  { label: 'Beneficiary designations override wills — review them after every major life event', type: 'Critical Step', color: 'green' },
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

            {/* 2. Why Different */}
            <h2 id="why-different" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Why Blended Family Estate Planning Is Different
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In a traditional family — where both spouses have children only with each other — estate planning is relatively straightforward: one spouse leaves everything to the other, who then passes it to their shared children. The interests of all beneficiaries generally align.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In a <strong>blended family</strong>, those interests often diverge. You may have children from a previous marriage, a new spouse who has their own children, and perhaps children you share together. Each member of your family may have legitimate claims on your estate — but those claims can easily come into conflict. Your new spouse may need income and financial security for the rest of their life. Your children from your first marriage may fear losing their inheritance to a stepparent who then favors their own children. Your minor children need long-term protection regardless of who remarries whom.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois law was not written with blended families in mind. Without deliberate planning, the default rules can frustrate your intentions entirely. Estate planning for blended families is not about choosing favorites — it is about creating a legally enforceable structure that honors your obligations to everyone.
            </p>

            {/* 3. How Standard Plans Fail */}
            <h2 id="standard-plan-problems" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How a Standard Estate Plan Can Fail a Blended Family
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The estate plans that work well for traditional families create predictable, serious problems for blended families. Understanding those failure points is the first step toward building a better plan.
            </p>

            <h3 id="intestate-problem" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Illinois Intestacy Laws Don&apos;t Recognize Stepchildren
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you die without a valid will in Illinois, your estate passes under the state&apos;s intestacy statute (755 ILCS 5/2-1). That law distributes property to your legal heirs — spouse, biological children, adopted children, and blood relatives — in a fixed order of priority.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>Stepchildren are not legal heirs.</strong> A stepchild who lived with you for twenty years, whom you raised as your own, whom you considered as much your child as anyone — receives nothing under intestacy unless you legally adopted them. The law is clear and unforgiving on this point. If you want your stepchildren to inherit from you, you must say so explicitly in a will, trust, or beneficiary designation.
            </p>

            <h3 id="everything-to-spouse" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The &ldquo;Everything to My Spouse&rdquo; Trap
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Many married couples use &ldquo;I love you&rdquo; wills: each spouse leaves everything to the other, and then to their children. For a blended family, this plan frequently disinherits the first spouse&apos;s children.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Here is why: after the first spouse dies and leaves everything to the surviving spouse, the surviving spouse owns those assets outright. They can now update their own will, remarry, change beneficiary designations, or simply spend the assets. Your children from a prior relationship have no legal claim to what you left behind — it belongs entirely to your surviving spouse, who may have different loyalties and different plans.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">A common scenario that ends in family conflict</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Parent A dies, leaving everything to Spouse B. Spouse B inherits the house, retirement accounts, and savings. Spouse B later remarries — or simply prioritizes their own children. Parent A&apos;s children from a prior relationship receive nothing. This outcome is not uncommon, and it is entirely legal under Illinois law. The only way to prevent it is through deliberate, binding estate planning tools that create enforceable obligations on the surviving spouse.
                  </p>
                </div>
              </div>
            </div>

            <h3 id="beneficiary-conflicts" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Beneficiary Designations That Override Your Plan
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Many of the most valuable assets people own — 401(k) accounts, IRAs, life insurance policies — pass entirely outside of the will and trust through beneficiary designations. Whatever your will says, <strong>beneficiary designations control</strong>.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              After a divorce and remarriage, many people forget to update their beneficiary designations. They may have a new will that leaves everything to their new spouse, but a 401(k) that still names their ex-spouse as beneficiary — or a life insurance policy that names children from their first marriage who are now adults, when the intent was to provide for minor children from the second marriage.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Beneficiary designation errors are among the most common — and most costly — mistakes in blended family estate planning. Every account and policy must be reviewed and updated as part of a complete plan.
            </p>

            {/* 4. Key Tools */}
            <h2 id="key-tools" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Key Estate Planning Tools for Blended Families in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              No single document solves every blended family problem. An effective plan uses multiple coordinated tools — each serving a specific function.
            </p>

            <h3 id="revocable-trust" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Revocable Living Trusts With Separate Shares
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>revocable living trust</strong> is the foundation of most blended family estate plans in Illinois. Unlike a will, a trust does not go through probate — assets pass privately and quickly to the people you designate. More importantly for blended families, a trust can create legally enforceable separate shares for different beneficiaries.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For example, your trust might specify that upon your death, 50% of the trust assets are distributed to your children from your first marriage, while the other 50% is held in a lifetime income trust for your surviving spouse. This structure gives your spouse financial security during their lifetime while ensuring your children ultimately receive their share — regardless of what your spouse does with their own assets after you die.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                What a Blended Family Revocable Trust Can Do
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Create separate, enforceable shares for each set of children',
                  "Protect a surviving spouse's income while preserving principal for children",
                  'Avoid probate — assets transfer privately and quickly',
                  'Name stepchildren as beneficiaries with the same legal force as biological children',
                  'Designate different trustees for different shares or sub-trusts',
                  'Include conditions on distributions (age, education, health needs)',
                  'Provide clear instructions that reduce family conflict after death',
                  'Coordinate with beneficiary designations and real estate titles',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <h3 id="qtip-trust" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              QTIP Trusts: Providing for a Spouse Without Disinheriting Children
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>QTIP trust</strong> (Qualified Terminable Interest Property trust) is a powerful tool for blended families with significant assets. It works like this: when you die, your assets flow into the QTIP trust. Your surviving spouse receives all income generated by the trust — and potentially principal distributions for their health, education, maintenance, and support — for the rest of their life. When your spouse dies, whatever remains in the trust passes to your designated beneficiaries, typically your children from your prior relationship.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The QTIP trust solves the fundamental tension in blended family planning: your spouse is financially provided for, but cannot change who ultimately inherits your assets. The remainder beneficiaries — your children — are protected by the irrevocable nature of the trust. Once you die and the QTIP is funded, your spouse cannot redirect the remainder to their own children or a new partner.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              QTIP trusts also have federal estate tax advantages for larger estates, making them particularly valuable for Illinois families subject to the state&apos;s estate tax (estates over $4 million as of 2026). See our guide on <Link href="/blog/illinois-estate-tax-cliff-explained/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">the Illinois estate tax cliff</Link> for more on this.
            </p>

            <h3 id="childrens-trusts" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Separate Trusts for Each Set of Children
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When both spouses have children from prior relationships, separate sub-trusts — one for each spouse&apos;s children — can eliminate ambiguity and reduce conflict. Each sub-trust has its own trustee (ideally someone without a conflict of interest), its own funding amount, and its own distribution terms.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This structure makes it impossible for one set of children to inadvertently benefit at the expense of the other. It also makes administration cleaner after death: each trustee manages their own trust independently, with no need to reach consensus across competing beneficiary groups.
            </p>

            <h3 id="prenuptial" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Prenuptial and Postnuptial Agreements
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>prenuptial agreement</strong> — executed before marriage — is one of the most effective protective tools for blended families. It establishes each spouse&apos;s separate property rights, limits or waives the surviving spouse&apos;s elective share rights, and creates a contractual framework that complements the estate planning documents.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Under Illinois law (750 ILCS 10/), a prenuptial agreement can address property rights at death — including how assets are distributed, what each spouse waives, and how the surviving spouse&apos;s statutory rights interact with the estate plan. For individuals who are remarrying with significant assets or children from a prior marriage, a prenuptial agreement is not just a financial precaution — it is a foundational element of a complete blended family plan.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are already married and did not execute a prenuptial agreement, a <strong>postnuptial agreement</strong> can serve a similar purpose. Illinois courts will enforce postnuptial agreements that are voluntarily executed, with full financial disclosure, and that are not unconscionable.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Blended Family With the Right Plan?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps blended families across the Chicago area build estate plans that protect every member of the family. Flat-fee pricing so you always know what you&apos;ll pay before we start.
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

            {/* 5. Beneficiary Designations */}
            <h2 id="beneficiary-designations" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Reviewing Beneficiary Designations After Remarriage
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Updating beneficiary designations is one of the most important — and most frequently overlooked — steps in blended family estate planning. Every account or policy with a beneficiary designation passes outside your will and trust. That means your will&apos;s carefully worded instructions have no effect on those assets whatsoever.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              After a divorce and remarriage, you should review and update beneficiary designations on:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  label: '401(k), 403(b), and other employer retirement plans',
                  detail: 'Federal law (ERISA) requires that a spouse be named as the primary beneficiary of an employer retirement plan unless they sign a written waiver. If you want to name children as beneficiaries, your spouse must consent in writing.',
                },
                {
                  label: 'IRAs and Roth IRAs',
                  detail: 'IRAs pass directly to named beneficiaries. If your ex-spouse is still named as beneficiary — which is common — they will receive the account regardless of your divorce decree or your new will.',
                },
                {
                  label: 'Life insurance policies',
                  detail: 'Life insurance proceeds go directly to the named beneficiary. Consider whether to name your spouse, a trust (to benefit your children), or a combination. A trust as beneficiary allows you to control how the proceeds are distributed.',
                },
                {
                  label: 'Payable-on-death and transfer-on-death accounts',
                  detail: 'Bank accounts, brokerage accounts, and investment accounts with POD or TOD designations pass directly to the named person. Review and update them after every major life change.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">{item.label}:</strong> {item.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    Naming a trust as beneficiary
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    For blended families with minor children or complex distribution goals, naming a trust as the beneficiary of life insurance or retirement accounts can be powerful. The trust governs how the proceeds are distributed — with separate shares for your spouse and each set of children — rather than a lump sum going to a single person. This requires coordination with your estate planning attorney to ensure the trust is properly structured for this purpose.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Powers of Attorney */}
            <h2 id="powers-of-attorney" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Powers of Attorney in a Blended Family
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Estate planning is not only about what happens when you die. In a blended family, the question of who makes decisions during a period of incapacity is equally important — and equally fraught with potential conflict.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An <strong>Illinois Statutory Short Form Power of Attorney for Property</strong> designates who manages your finances if you are incapacitated. An <strong>Illinois Power of Attorney for Health Care</strong> designates who makes medical decisions. Without these documents, your adult children from a prior relationship may find themselves in court against your new spouse — each claiming the right to make decisions, with no clear legal answer.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#33414E] text-white rounded-xl p-5">
                <Users className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Who Should You Name?</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'For property: your spouse (if they manage finances responsibly) or an adult child',
                    'For health care: the person most likely to honor your medical wishes',
                    'Name at least one successor agent in case the primary cannot serve',
                    'Discuss your wishes explicitly with whoever you name',
                    'Consider whether your spouse and children can co-exist in this role',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-5">
                <Shield className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Conflicts to Watch For</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    "A spouse-agent who spends down assets that were intended for children",
                    "Children who override a spouse's reasonable medical decisions",
                    'Disputes over nursing home placement or end-of-life care',
                    'Asset transfers made under a property POA that reduce the estate',
                    'No POA at all — leading to expensive court-supervised guardianship',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Learn more about <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Illinois powers of attorney</Link> and how they interact with your broader estate plan.
            </p>

            {/* 7. Communication */}
            <h2 id="communication" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Talking to Your Family About the Plan
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The most carefully drafted blended family estate plan can still generate conflict if your family members do not understand it or feel blindsided by it. A conversation with your spouse, your children, and — if appropriate — your stepchildren can prevent years of misunderstanding and litigation.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              You do not need to disclose specific dollar amounts or show anyone the trust documents. But letting your children know that you have made a plan, that you have thought carefully about their interests, and that there is a trustee they can contact if questions arise goes a long way toward preserving family relationships after you are gone.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The people you name as trustees, executors, or agents under a power of attorney should also understand their roles — what is expected of them, what authority they have, and what records they should keep. A fiduciary who is surprised by their appointment and unprepared for its duties is a liability, not an asset, to your estate plan.
            </p>

            <div className="border border-gray-200 rounded-xl p-6 bg-white my-6">
              <div className="flex items-start gap-4">
                <Scale className="w-8 h-8 text-[#4a708b] flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="font-bold text-[#33414E] mb-4 font-['Plus_Jakarta_Sans']">
                    Blended Family Estate Planning Checklist
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        rule: 'Draft or update your will',
                        detail: 'Expressly name your stepchildren if you want them to inherit. Silence means nothing.',
                      },
                      {
                        rule: 'Create or update your revocable living trust',
                        detail: 'Use separate shares or sub-trusts to protect each set of children and your spouse.',
                      },
                      {
                        rule: 'Review all beneficiary designations',
                        detail: 'Every retirement account, life insurance policy, and POD/TOD account should reflect your current intentions.',
                      },
                      {
                        rule: 'Consider a QTIP trust if you have significant assets',
                        detail: "Provide for your spouse without letting your estate pass entirely outside your children's reach.",
                      },
                      {
                        rule: 'Execute powers of attorney for property and health care',
                        detail: 'Eliminate the ambiguity of who acts for you during incapacity — before conflict arises.',
                      },
                      {
                        rule: 'Review your plan every 3–5 years',
                        detail: 'A plan that was right when you signed it may not be right after a child becomes an adult, a grandchild is born, or assets change significantly.',
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
              Blended family estate planning is not a one-size-fits-all project. The right structure depends on the ages of your children and stepchildren, the size and composition of your assets, whether you have a prenuptial agreement, and what you and your spouse have agreed you want each other to have. The tools exist — what matters is assembling them correctly.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law works with blended families across the Chicago area to create estate plans that protect every member of the family. Our services include <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable living trusts</Link>, <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">wills</Link>, and <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">powers of attorney</Link>, all available on a flat-fee basis so you know exactly what you are paying before we begin. See our <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">services and pricing page</Link> to learn more.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are also concerned about what happens during probate, or if you need to understand how Illinois law treats property after a divorce, see our related guides:
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Speak With an Illinois Blended Family Estate Planning Attorney</h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps blended families across Chicago and the surrounding area build estate plans that protect every member of the family — your spouse, your children, and your stepchildren. Schedule a free consultation to get started.
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
                    href: '/blog/how-to-update-estate-plan-after-divorce-illinois/',
                    label: 'How to Update Your Estate Plan After Divorce in Illinois',
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
                    href: '/blog/estate-planning-for-unmarried-couples-illinois/',
                    label: 'Estate Planning for Unmarried Couples in Illinois',
                  },
                  {
                    href: '/blog/why-review-estate-plan-every-few-years/',
                    label: 'Why You Should Review Your Estate Plan Every Few Years',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois estate planning law is complex and fact-specific — the appropriate structure for a blended family estate plan depends on your individual circumstances, assets, family relationships, and goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Create a Blended Family Estate Plan in Illinois?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put a complete, legally enforceable plan in place that protects your spouse, your children, and your stepchildren.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/blended-family-estate-planning-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/blended-family-estate-planning-illinois/')}&text=${encodeURIComponent('Blended Family Estate Planning in Illinois — how to protect your spouse and children from all relationships')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/blended-family-estate-planning-illinois/')}`}
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
