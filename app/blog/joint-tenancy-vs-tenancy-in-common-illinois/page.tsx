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
  Scale,
  Shield,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'joint-tenancy-vs-tenancy-in-common-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    {
      id: 'joint-tenancy',
      title: 'What Is Joint Tenancy in Illinois?',
      level: 2,
      numeration: '2',
      children: [
        { id: 'right-of-survivorship', title: 'The Right of Survivorship', level: 3, numeration: '2.1' },
        { id: 'creating-joint-tenancy', title: 'How Joint Tenancy Is Created in Illinois', level: 3, numeration: '2.2' },
      ],
    },
    {
      id: 'tenancy-in-common',
      title: 'What Is Tenancy in Common in Illinois?',
      level: 2,
      numeration: '3',
      children: [
        { id: 'unequal-shares', title: 'Unequal Ownership Shares', level: 3, numeration: '3.1' },
        { id: 'no-survivorship', title: 'No Right of Survivorship — What Happens at Death', level: 3, numeration: '3.2' },
      ],
    },
    { id: 'comparison', title: 'Side-by-Side Comparison', level: 2, numeration: '4' },
    { id: 'which-is-right', title: 'Which Is Right for Your Situation?', level: 2, numeration: '5' },
    { id: 'estate-plan-impact', title: 'How Property Title Affects Your Estate Plan', level: 2, numeration: '6' },
    { id: 'changing-title', title: 'Changing Between Joint Tenancy and Tenancy in Common', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'What happens to joint tenancy property when one co-owner dies in Illinois?',
      answer:
        "When a joint tenant dies in Illinois, their share automatically passes to the surviving joint tenant or tenants by operation of law — without going through probate. The surviving co-owner simply records an affidavit of survivorship in the county recorder's office along with a death certificate to clear the title. This is one of the most significant practical benefits of joint tenancy: the transfer is immediate, private, and requires no court involvement.",
    },
    {
      question: "Can a joint tenant sell or transfer their share without the other owner's consent in Illinois?",
      answer:
        "No — a joint tenant cannot sell the entire property without the other tenant's consent. However, a joint tenant can transfer their own individual interest to a third party, and doing so severs the joint tenancy. The new owner and the remaining original joint tenant then hold the property as tenants in common. This is an important risk of joint tenancy: a co-owner can unilaterally change the ownership structure without notifying the other owner, which can disrupt carefully laid estate plans.",
    },
    {
      question: 'Does Illinois recognize tenancy by the entirety for real estate?',
      answer:
        'No. Illinois does not recognize tenancy by the entirety for real estate. Tenancy by the entirety is a form of joint ownership available only to married couples in some states, offering creditor protection that joint tenancy does not. In Illinois, married couples who co-own real estate must use either joint tenancy with right of survivorship or tenancy in common — the same forms available to any co-owners. Illinois does recognize tenancy by the entirety for personal property held in trust under limited circumstances, but not for real estate.',
    },
    {
      question: 'Is tenancy in common the default in Illinois?',
      answer:
        'Yes. Under 765 ILCS 1005/1, any deed that creates co-ownership without expressly using the phrase "joint tenancy" or "with right of survivorship" creates a tenancy in common by default. Even a deed that says "to John and Mary as joint tenants" may be ambiguous — Illinois courts have required clear language specifying survivorship rights for a joint tenancy to be valid. If you want joint tenancy, your deed must explicitly use language like "as joint tenants with right of survivorship, not as tenants in common."',
    },
    {
      question: 'How can a joint tenancy be severed in Illinois?',
      answer:
        "Under Illinois law, a joint tenancy can be severed unilaterally by any joint tenant. The most common method is for a joint tenant to convey their interest — even to themselves — which destroys the four unities required for joint tenancy and converts the ownership to tenancy in common. This can be done without the other joint tenant's knowledge or consent. Courts have also found that certain encumbrances on a share can sever the joint tenancy. If preserving the right of survivorship is important to you, it is critical to understand this fragility.",
    },
    {
      question: 'Should I hold property in joint tenancy or put it in a trust?',
      answer:
        'For many Illinois families, a revocable living trust offers stronger protection than joint tenancy. A trust avoids probate just as joint tenancy does, but it also manages assets during incapacity, avoids the "joint tenancy trap" where an unanticipated death order or unilateral severance disrupts plans, allows for sophisticated distribution terms, and can protect assets for minor children or family members with special needs. Joint tenancy is a blunt instrument compared to a trust. For a home that is your primary asset, joint tenancy with a spouse may be adequate. For families with more complex situations, an estate planning attorney can help you decide whether a trust makes more sense.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Joint Tenancy vs. Tenancy in Common in Illinois: Which Is Right for You?',
    description:
      'Learn the differences between joint tenancy and tenancy in common in Illinois — how each affects survivorship, probate, and your estate plan.',
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
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/joint-tenancy-vs-tenancy-in-common-illinois/',
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
                Joint Tenancy vs. Tenancy in Common in Illinois: Which Is Right for You?
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                How you hold title to co-owned property in Illinois determines what happens when one owner dies, whether the property goes through probate, and whether your estate plan actually works as intended. Joint tenancy and tenancy in common are not interchangeable — choosing the wrong one can create serious problems for your family.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>August 12, 2026</time>
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
                <Scale className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Joint tenancy and tenancy in common are the two main ways to co-own property in Illinois. The difference comes down to one critical feature: the right of survivorship.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    In a <strong>joint tenancy</strong>, when one co-owner dies, their share automatically passes to the surviving owners — without probate. In a <strong>tenancy in common</strong>, each owner&apos;s share passes through their will or, if they die without one, under Illinois intestacy law.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    Illinois defaults to tenancy in common whenever a deed creates co-ownership without expressly specifying joint tenancy. This guide explains what each form of ownership means, how to create them correctly under Illinois law, and which one fits your situation — whether you are a married couple, unmarried partners, or co-investors.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick at-a-glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                At a Glance: Joint Tenancy vs. Tenancy in Common
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Automatic survivorship — no probate on death', type: 'Joint Tenancy', color: 'blue' },
                  { label: "Each owner's share passes by will or intestacy", type: 'Tenancy in Common', color: 'amber' },
                  {
                    label: 'Illinois defaults to tenancy in common — joint tenancy requires explicit deed language',
                    type: 'Key Illinois Rule',
                    color: 'green',
                  },
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

            {/* 2. Joint Tenancy */}
            <h2 id="joint-tenancy" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is Joint Tenancy in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>Joint tenancy</strong> is a form of co-ownership in which two or more people hold equal, undivided shares in a property with the <strong>right of survivorship</strong>. When a joint tenant dies, their share does not pass through their estate — it automatically vests in the surviving joint tenants, completely outside of probate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Joint tenancy in Illinois is governed by the Joint Tenancy Act, 765 ILCS 1005. To be valid, a joint tenancy must satisfy four traditional requirements known as the <strong>four unities</strong>: unity of time (all joint tenants acquire their interests at the same time), unity of title (all acquire through the same instrument), unity of interest (all hold equal shares), and unity of possession (all have the right to possess the entire property). If any unity is missing or later destroyed, the joint tenancy fails or is severed.
            </p>

            <h3 id="right-of-survivorship" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The Right of Survivorship
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The defining feature of joint tenancy is the right of survivorship. When one joint tenant dies, their share does not go to their heirs — it passes instantly and automatically to the remaining joint tenant or tenants. No probate filing is required. No court order is needed. The surviving co-owner simply records an <strong>affidavit of survivorship</strong> in the county recorder&apos;s office, attaches a certified copy of the death certificate, and title is clear.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This makes joint tenancy a popular tool for married couples and close partners who want property to transfer seamlessly at death. For a home held in joint tenancy between spouses, the surviving spouse gets clear title quickly — without the cost or delay of probate, which in Cook County typically takes 9 to 18 months for a standard estate.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">
                    The survivorship risk: order of death matters
                  </p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Joint tenancy only works as a probate-avoidance tool if the right person survives. If both spouses die simultaneously — in a car accident, for example — or if the surviving spouse dies before transferring the property, it may end up in probate anyway. A revocable living trust eliminates this risk by controlling distribution regardless of the order of death. For families with more complex circumstances, an attorney can help evaluate whether joint tenancy alone is adequate.
                  </p>
                </div>
              </div>
            </div>

            <h3 id="creating-joint-tenancy" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              How Joint Tenancy Is Created in Illinois
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In Illinois, joint tenancy must be expressly created — it is never assumed. The deed must use specific language identifying the ownership as joint tenancy with right of survivorship. Courts have required clear survivorship language; terms like &ldquo;jointly&rdquo; alone have not always been sufficient. The safest language for an Illinois joint tenancy deed includes:
            </p>

            <div className="border border-gray-200 rounded-xl p-6 bg-white my-6">
              <blockquote className="border-l-4 border-[#4a708b] pl-4 italic text-gray-600 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                &ldquo;[Name] and [Name], as joint tenants with right of survivorship, and not as tenants in common.&rdquo;
              </blockquote>
              <p className="text-sm text-gray-500 mt-3 font-['Plus_Jakarta_Sans']">
                The phrase &ldquo;not as tenants in common&rdquo; is technically not required under Illinois law, but including it eliminates ambiguity and reduces the risk of a later dispute about the nature of the ownership.
              </p>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              It is important to note that Illinois does <strong>not</strong> recognize <strong>tenancy by the entirety</strong> for real estate. Tenancy by the entirety is a special form of joint ownership available only to married couples in some states — it provides additional creditor protection. Illinois abolished tenancy by the entirety for real property, so married couples who want joint ownership of Illinois real estate must use joint tenancy with right of survivorship.
            </p>

            {/* 3. Tenancy in Common */}
            <h2 id="tenancy-in-common" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is Tenancy in Common in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>Tenancy in common</strong> is the default form of co-ownership in Illinois. When a deed transfers property to two or more people without specifying joint tenancy, Illinois law presumes tenancy in common under 765 ILCS 1005/1. Unlike joint tenancy, tenancy in common does not require the four unities, does not carry a right of survivorship, and allows owners to hold unequal percentage interests.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Each tenant in common holds a separate, undivided fractional interest in the property. This means every co-owner has the right to use and enjoy the entire property — there is no physical division of the land itself — but each person&apos;s ownership share is a legally distinct interest. A tenant in common can sell, mortgage, gift, or transfer their individual share without the consent of the other co-owners.
            </p>

            <h3 id="unequal-shares" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Unequal Ownership Shares
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One of the most practical differences from joint tenancy is that tenancy in common allows for unequal ownership percentages. A deed might give one person a 70% interest and another a 30% interest. This makes tenancy in common the natural structure for real estate investment partnerships, family members who contributed different amounts toward a purchase price, and business co-owners who want their shares to reflect their actual investment.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When the deed is silent on percentages, courts generally presume equal shares among tenants in common. If co-owners intend unequal shares, the deed should expressly state each party&apos;s percentage interest to avoid future disputes about contribution and distribution.
            </p>

            <h3 id="no-survivorship" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              No Right of Survivorship — What Happens at Death
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When a tenant in common dies, their share <strong>does not</strong> automatically go to the surviving co-owners. Instead, their fractional interest becomes part of their estate and passes in one of two ways:
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  step: '1',
                  title: 'Through their will',
                  detail:
                    "If the deceased co-owner had a valid Illinois will, their share of the property passes to whoever the will designates — which may or may not be the surviving co-owner. A tenant in common who owns a 50% interest in a property could leave that 50% to their children, a charity, or anyone else, regardless of who the other co-owner is.",
                },
                {
                  step: '2',
                  title: 'Through Illinois intestacy law',
                  detail:
                    "If the deceased co-owner had no will, their share passes according to the Illinois intestacy statute (755 ILCS 5/2-1). For most people, this means a surviving spouse receives a portion and descendants receive the rest — creating a situation where a co-owner's children or relatives suddenly become co-owners alongside the surviving original co-owner.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This can create messy co-ownership situations — a surviving business partner suddenly sharing the building with a deceased partner&apos;s adult children, or an unmarried couple where one partner&apos;s share passes to estranged family members rather than the surviving partner. Proactive estate planning prevents these outcomes.
            </p>

            {/* 4. Comparison Table */}
            <h2 id="comparison" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Joint Tenancy vs. Tenancy in Common: Side-by-Side Comparison
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The differences between these two forms of co-ownership touch every aspect of property ownership — from how title is created to what happens when an owner dies, sells their share, or faces a creditor judgment.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Joint Tenancy vs. Tenancy in Common in Illinois
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Joint Tenancy</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Tenancy in Common</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Illinois default?', 'No — must be expressly created', 'Yes — presumed if deed is silent'],
                      ['Right of survivorship?', 'Yes — share passes to surviving co-owners automatically', 'No — share passes through estate at death'],
                      ['Probate on death?', 'No — affidavit of survivorship is sufficient', 'Yes, unless the share is held in a trust'],
                      ['Equal shares required?', 'Yes — all owners hold equal shares', 'No — unequal percentages are allowed'],
                      ["Owner can transfer their share?", 'Yes, but it severs the joint tenancy', "Yes, without affecting co-owners' interests"],
                      ['Creditor can reach a share?', 'Yes — and the levy may sever the joint tenancy', 'Yes — creditor can force a partition sale'],
                      ['Four unities required?', 'Yes — time, title, interest, and possession', 'No — unities are not required'],
                      ['Best suited for?', 'Married couples wanting seamless survivorship', 'Co-investors, business partners, unequal contributors'],
                      ['Estate plan coordination?', 'Can conflict with trust plans — must be intentional', 'Flows through estate — more compatible with trust plans'],
                    ].map(([factor, joint, common], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-gray-600">{joint}</td>
                        <td className="py-3 px-4 text-gray-600">{common}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. Which Is Right */}
            <h2 id="which-is-right" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Which Is Right for Your Situation?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The best form of co-ownership depends on your relationship with the other owner, your estate planning goals, and how you want the property handled if you die before the other co-owner. Here is how to think through each common scenario.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Married couples',
                  color: 'blue',
                  body: "For many married couples, joint tenancy is a practical choice for the family home. When one spouse dies, the survivor gets clear title quickly — no probate, no court, no waiting. This works well for straightforward situations where the couple's estate plan is simple and the home is the primary asset. However, if the couple has a revocable living trust — which is common for larger estates or families with children from prior relationships — the home should generally be titled in the trust rather than held in joint tenancy. Joint tenancy bypasses the trust's distribution terms and can create complications if the spouses die in the wrong order.",
                },
                {
                  title: 'Unmarried partners and cohabitating couples',
                  color: 'amber',
                  body: "Unmarried couples face significant risk under tenancy in common. If one partner dies without a will, their share passes under Illinois intestacy law — which gives nothing to a non-spouse partner. The surviving partner could suddenly co-own the home with the deceased partner's parents, siblings, or children. Joint tenancy provides automatic survivorship protection in this scenario. However, for unmarried partners with more complex situations — children from prior relationships, significant age differences, or unequal financial contributions — a revocable living trust or a comprehensive will may better reflect their intentions than joint tenancy alone.",
                },
                {
                  title: 'Business partners and real estate co-investors',
                  color: 'green',
                  body: "Co-investors who contributed different amounts typically need tenancy in common to hold unequal percentage shares. More importantly, most business co-owners do not want a co-owner's share to pass automatically to them — they want their own share to go to their family or designated successors. A buy-sell agreement and a co-ownership agreement work alongside the deed to govern what happens at death or exit. For larger real estate portfolios, holding property through an LLC eliminates the joint tenancy vs. tenancy in common question entirely and provides superior liability protection.",
                },
                {
                  title: 'Siblings and family members who inherit property together',
                  color: 'blue',
                  body: "When two or more siblings inherit property together — without clear deed language — the default is tenancy in common. Each sibling owns their fractional share independently, can sell it, mortgage it, or leave it to their own heirs. If the siblings want to simplify things, they can agree to convert to joint tenancy by executing a new deed, or sell the property and divide the proceeds. If they cannot agree, any co-owner can petition an Illinois court for partition — a legal action that forces either a physical division of the property or a court-ordered sale with proceeds split according to ownership percentages.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-6 ${
                    item.color === 'blue'
                      ? 'bg-blue-50 border-blue-200'
                      : item.color === 'amber'
                      ? 'bg-amber-50 border-amber-200'
                      : 'bg-green-50 border-green-200'
                  }`}
                >
                  <h3 className="font-bold text-gray-900 text-base mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Not Sure How to Hold Title to Your Illinois Property?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families structure property ownership to match their estate plan — and fix co-ownership arrangements that create unintended consequences. Flat-fee pricing with a free initial consultation.
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

            {/* 6. Estate Plan Impact */}
            <h2 id="estate-plan-impact" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How Property Title Affects Your Estate Plan
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              How you hold title to a property is not just a real estate decision — it is a critical estate planning decision. The title determines what happens to the property when you die, and it can override your will, your trust, and every other estate planning document you have signed.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#33414E] text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans']">Joint Tenancy and Your Estate Plan</h3>
                <ul className="space-y-3 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Bypasses your will entirely — the deed controls, not your expressed wishes',
                    'Can override carefully written trust provisions for the same property',
                    'If you have a living trust, property in joint tenancy sits outside the trust',
                    'A co-owner can unilaterally sever the joint tenancy without your consent',
                    'Works well only for simple, will-free estate plans without a trust',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans']">
                  Tenancy in Common and Your Estate Plan
                </h3>
                <ul className="space-y-3 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    "Each owner's share flows through their will or a revocable living trust",
                    'Compatible with trust plans — the share can be held in trust',
                    'Provides flexibility to structure distribution separately from co-ownership',
                    "But requires probate for the deceased owner's share unless held in a trust",
                    "A co-owner's creditors can reach their share during life and at death",
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
              The most common mistake Illinois families make is holding their home in joint tenancy while also having a{' '}
              <Link
                href="/chicago-revocable-trusts-lawyer/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                revocable living trust
              </Link>
              . The property in joint tenancy sits <em>outside</em> the trust — it will pass to the surviving joint tenant regardless of what the trust says. If the trust is designed to provide for children from a prior relationship, protect a special needs beneficiary, or hold assets until a young heir reaches a certain age, property held in joint tenancy completely bypasses all of that planning.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Families with a revocable living trust should generally have their home titled in the name of the trust — not held in joint tenancy. A deed transferring the property into the trust eliminates the joint tenancy vs. tenancy in common question entirely and ensures the property is distributed exactly as the trust directs. See our guide on{' '}
              <Link
                href="/blog/how-to-fund-a-revocable-living-trust-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                how to fund a revocable living trust in Illinois
              </Link>{' '}
              for step-by-step instructions.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    Beneficiary designations also override your will — and your deed
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Just as property title controls what happens to real estate at death,{' '}
                    <Link
                      href="/blog/beneficiary-designations-override-your-will-illinois/"
                      className="text-[#4a708b] hover:underline font-['Plus_Jakarta_Sans']"
                    >
                      beneficiary designations on life insurance, retirement accounts, and bank accounts
                    </Link>{' '}
                    control what happens to those assets — completely separately from your will and your deed. A complete Illinois estate plan coordinates all of these transfer mechanisms together, not just one of them.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Changing Title */}
            <h2 id="changing-title" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Changing Between Joint Tenancy and Tenancy in Common
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Property title is not permanent. Illinois law allows co-owners to change from one form of ownership to the other — though the process and legal consequences differ depending on which direction you are moving.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Converting tenancy in common to joint tenancy',
                  detail:
                    'Both co-owners must agree and execute a new deed that expressly creates joint tenancy. All four unities must be satisfied: the owners must receive their interests at the same time, through the same instrument, in equal shares, with equal rights of possession. A deed from both tenants in common to themselves as joint tenants with right of survivorship accomplishes this in Illinois. Recording the new deed in the county recorder’s office completes the conversion.',
                },
                {
                  title: 'Severing joint tenancy to create tenancy in common',
                  detail:
                    'Under Illinois law, any joint tenant can unilaterally sever the joint tenancy — even without the other owner’s knowledge or consent — by conveying their individual interest to a third party or, under established Illinois precedent, to themselves. Once any of the four unities is destroyed, the joint tenancy converts to tenancy in common. A joint tenant who conveys to themselves should record a deed of conveyance to document the severance. This unilateral severance right is one of the key fragilities of joint tenancy as a long-term estate planning tool.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <h4 className="font-bold text-[#33414E] mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If co-owners cannot agree on how to hold title — or on anything else about managing shared property — any co-owner (whether joint tenant or tenant in common) can bring a <strong>partition action</strong> in the Illinois Circuit Court. Partition forces either a physical division of the property (uncommon for residential homes) or a court-ordered sale and division of proceeds. Partition litigation is expensive and adversarial; a written co-ownership agreement drafted before problems arise is far more effective.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Before changing property title in either direction, consult with an{' '}
              <Link
                href="/chicago-probate-lawyer/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                Illinois estate planning attorney
              </Link>
              . Title changes have real estate transfer tax, gift tax, and estate planning implications that should be evaluated before executing a deed.
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
              If you are buying a property with another person, how you hold title should be a deliberate decision made with your estate planning goals in mind — not an afterthought at closing. If you already own property and are unsure how it is titled, pull the deed from your county recorder&apos;s records and review the language carefully.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For Illinois homeowners who have or are considering a revocable living trust, the right move is almost always to deed the property into the trust — which sidesteps the joint tenancy vs. tenancy in common question entirely and ensures the property is distributed exactly as the trust directs. Our{' '}
              <Link
                href="/chicago-revocable-trusts-lawyer/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                revocable trust services
              </Link>{' '}
              include deed preparation to transfer real estate into your trust as part of a complete estate plan.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law offers flat-fee estate planning packages that include a revocable living trust,{' '}
              <Link
                href="/chicago-wills-lawyer/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                pour-over will
              </Link>
              ,{' '}
              <Link
                href="/chicago-powers-of-attorney-lawyer/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                powers of attorney
              </Link>
              , and deed coordination. Visit our{' '}
              <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                services and pricing page
              </Link>{' '}
              to see everything that is included — with transparent, flat-fee pricing and no hourly billing surprises.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families structure property ownership correctly — and build estate plans that ensure every asset reaches the right person at the right time. Schedule a free consultation to get started.
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
                Related Illinois Property &amp; Estate Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/blog/how-to-hold-title-to-your-home-in-illinois/',
                    label: 'How to Hold Title to Your Home in Illinois',
                  },
                  {
                    href: '/blog/how-to-fund-a-revocable-living-trust-illinois/',
                    label: 'How to Fund a Revocable Living Trust in Illinois',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Why Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/should-you-put-your-house-in-a-trust-in-illinois/',
                    label: 'Should You Put Your House in a Trust in Illinois?',
                  },
                  {
                    href: '/blog/what-is-a-pour-over-will-illinois/',
                    label: 'What Is a Pour-Over Will in Illinois?',
                  },
                  {
                    href: '/blog/how-transfer-on-death-instruments-work-in-illinois/',
                    label: 'How Transfer-on-Death Instruments Work in Illinois',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois property and estate planning law is complex and fact-specific — the right form of co-ownership for your situation depends on your individual goals, family circumstances, and existing estate plan. Consult a licensed Illinois attorney before making any changes to property title.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Coordinate Your Property Title With Your Illinois Estate Plan?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and make sure your home and other co-owned property is titled in a way that protects your family and your intentions.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/joint-tenancy-vs-tenancy-in-common-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/joint-tenancy-vs-tenancy-in-common-illinois/')}&text=${encodeURIComponent('Joint Tenancy vs. Tenancy in Common in Illinois — which is right for your estate plan?')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/joint-tenancy-vs-tenancy-in-common-illinois/')}`}
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
