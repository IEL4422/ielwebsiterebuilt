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
  Users,
  Scale,
  Heart,
  CircleX as XCircle,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'special-needs-trust-illinois-guide';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'why-direct-inheritance-fails', title: 'Why Direct Inheritance Can Destroy Public Benefits', level: 2, numeration: '2' },
    {
      id: 'two-types',
      title: 'Two Types of Illinois Special Needs Trusts',
      level: 2,
      numeration: '3',
      children: [
        { id: 'third-party-snt', title: 'Third-Party Special Needs Trust', level: 3, numeration: '3.1' },
        { id: 'first-party-snt', title: 'First-Party (Self-Settled) Special Needs Trust', level: 3, numeration: '3.2' },
      ],
    },
    { id: 'what-snt-pays-for', title: 'What an Illinois SNT Can (and Cannot) Pay For', level: 2, numeration: '4' },
    { id: 'creating-snt', title: 'Creating a Special Needs Trust in Illinois', level: 2, numeration: '5' },
    { id: 'choosing-trustee', title: 'Choosing a Trustee for Your Illinois SNT', level: 2, numeration: '6' },
    { id: 'funding-snt', title: 'How to Fund Your Illinois SNT', level: 2, numeration: '7' },
    { id: 'pooled-trusts', title: 'Illinois Pooled Trusts: An Alternative', level: 2, numeration: '8' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '9' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '10' },
  ];

  const faqs = [
    {
      question: 'How much does it cost to set up a special needs trust in Illinois?',
      answer:
        'A professionally drafted third-party special needs trust in Illinois typically costs between $1,500 and $4,000 in attorney fees, depending on complexity and the broader estate plan it is part of. That cost is modest compared to the lifetime value of preserving Medicaid and SSI eligibility — losing those benefits could cost a family tens of thousands of dollars per year in lost medical coverage alone. Many families combine the SNT with a pour-over will and other estate planning documents as part of a bundled flat-fee package.',
    },
    {
      question: 'Can I leave money to my disabled child in my will instead of a trust?',
      answer:
        "Leaving money directly to a person with disabilities in your will is almost always the wrong approach if they receive SSI, Medicaid, or other means-tested public benefits. A direct inheritance counts as a resource and will disqualify your child from those programs until the inherited funds are spent down — at which point they must reapply and potentially wait months for benefits to restart. A properly drafted special needs trust allows your child to receive the inheritance without losing benefits.",
    },
    {
      question: 'Does Illinois have a state income tax exemption for special needs trusts?',
      answer:
        'A special needs trust is a separate legal entity and files its own income tax return (Form 1041) as a complex trust. The trust pays federal and Illinois income taxes on its undistributed income. When the trustee distributes income to the beneficiary, it becomes taxable to the beneficiary at their (often lower) rate. Careful planning — including timing of distributions and investing in tax-exempt municipal bonds — can minimize the tax burden. Consult both an estate planning attorney and a CPA familiar with trust taxation.',
    },
    {
      question: 'What is the Medicaid payback requirement on first-party special needs trusts in Illinois?',
      answer:
        "Under 42 U.S.C. § 1396p(d)(4)(A), a first-party special needs trust must include a payback provision requiring that upon the beneficiary's death, Illinois Medicaid (IDHS) is reimbursed for the cost of medical assistance paid on behalf of the beneficiary before any remaining assets pass to other heirs. Third-party SNTs funded by family do not carry this payback requirement — assets remaining at the beneficiary's death pass to the remainder beneficiaries named in the trust.",
    },
    {
      question: 'Can a special needs trust own a home in Illinois?',
      answer:
        "Yes. A home owned by an SNT can be used by the beneficiary as their primary residence without being counted as a resource for SSI purposes, as long as the beneficiary lives there. The trust can pay property taxes, insurance, maintenance, and utilities. When the beneficiary no longer lives in the home or passes away, the house becomes a trust asset subject to any applicable Medicaid payback before passing to remainder beneficiaries. Real estate in a first-party SNT requires extra care — consult an attorney before any transfer.",
    },
    {
      question: 'What happens to the money in a special needs trust when the beneficiary dies?',
      answer:
        "For a third-party SNT: remaining assets pass to the remainder beneficiaries named in the trust — typically siblings, other family members, or a charity. No Medicaid payback is required. For a first-party (d4A) SNT: Illinois Medicaid must be reimbursed first for the full cost of services provided to the beneficiary during their lifetime. Only after Medicaid is repaid do remaining assets (if any) go to other beneficiaries. This is why most estate planning attorneys recommend third-party SNTs funded by family wherever possible, and reserve first-party trusts for situations where the beneficiary already has their own assets.",
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Special Needs Trusts in Illinois: A Complete Guide for Families',
    description:
      'Everything Illinois families need to know about special needs trusts — third-party vs. first-party SNTs, Medicaid preservation, trustee selection, and how to fund the trust.',
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
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/special-needs-trust-illinois-guide/',
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
                  13 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                Special Needs Trusts in Illinois: A Complete Guide for Families
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                A special needs trust is the single most important estate planning tool for families with a disabled loved one. Without one, even a modest inheritance can strip away years of hard-won Medicaid and SSI coverage. Here is everything Illinois families need to know.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>June 10, 2026</time>
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
                    A special needs trust (SNT) is a legally structured trust designed to hold assets for a person with a disability without disqualifying them from SSI, Medicaid, or other means-tested government programs.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    In Illinois, families use special needs trusts to leave money to a disabled child or loved one without accidentally ending their Medicaid or SSI coverage. Without an SNT, even a $10,000 inheritance can cause a person to lose health insurance and monthly income support — sometimes for months while they reapply and wait for benefits to be reinstated.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains the two main types of Illinois special needs trusts, what they can pay for, how to create and fund one, how to choose a trustee, and when a pooled trust may be a better fit for your family.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick comparison box */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Special Needs Trust Types at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Funded by family or third party — no Medicaid payback', type: 'Third-Party SNT', color: 'blue' },
                  { label: "Funded with beneficiary's own assets — Medicaid payback required", type: 'First-Party (d4A) SNT', color: 'amber' },
                  { label: 'Managed by nonprofit — lower cost, pooled investments', type: 'Pooled Trust (d4C)', color: 'green' },
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

            {/* 2. Why Direct Inheritance Fails */}
            <h2 id="why-direct-inheritance-fails" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Why Direct Inheritance Can Destroy Public Benefits
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              To understand why a special needs trust is so important, you first need to understand how SSI (Supplemental Security Income) and Medicaid treat assets.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>SSI is a federal program</strong> that provides monthly income to people who are disabled, blind, or elderly and have very limited income and resources. The 2026 SSI resource limit is <strong>$2,000 for an individual</strong>. Any countable resource above that threshold — including cash, bank accounts, and most investments — will reduce or eliminate SSI payments dollar for dollar.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>Medicaid (called &ldquo;Medical Assistance&rdquo; in Illinois)</strong> is the primary health insurance for hundreds of thousands of Illinoisans with disabilities. Many Medicaid categories in Illinois also have strict resource limits. For adults who qualify for SSI, Medicaid eligibility is closely linked to SSI eligibility — lose SSI, and Medicaid coverage typically disappears too.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-2 font-['Plus_Jakarta_Sans']">What happens without an SNT</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Suppose your daughter with Down syndrome currently receives SSI ($943/month in 2026) and Illinois Medicaid, which covers her day program, medications, and group home expenses. You pass away and leave her $50,000 directly in your will. That inheritance immediately makes her ineligible for SSI and Medicaid — she now has resources far exceeding the $2,000 limit. She must spend down the $50,000 on her own care before she can reapply. Your $50,000 gift, meant to improve her life, instead replaces — not supplements — the government benefits she already had. A special needs trust would have prevented this entirely.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Assets held in a properly drafted special needs trust are <strong>not counted as a resource</strong> by SSI or Medicaid because the beneficiary has no right to demand the funds directly. The trustee controls distributions and must use trust assets only for purposes that supplement — not supplant — government benefits. This distinction is the legal foundation that makes SNTs work.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <XCircle className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Leaving Money Directly</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'Immediate disqualification from SSI if assets exceed $2,000',
                    'Loss of Medicaid coverage — possibly for months while reapplying',
                    'Must spend down inheritance before benefits restart',
                    'No protection from creditors or financial exploitation',
                    'Beneficiary may spend funds on non-essential items',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">With a Special Needs Trust</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'SSI and Medicaid eligibility fully preserved',
                    'Trust assets supplement — not replace — government benefits',
                    'Trustee manages funds responsibly on behalf of beneficiary',
                    'Protection from creditors and financial exploitation',
                    'Detailed instructions guide how funds should be used',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Two Types of SNTs */}
            <h2 id="two-types" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Two Types of Special Needs Trusts in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois recognizes two fundamentally different types of special needs trusts, and choosing the right one depends primarily on where the money is coming from.
            </p>

            <h3 id="third-party-snt" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Third-Party Special Needs Trust
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>third-party special needs trust</strong> is funded with assets belonging to someone other than the beneficiary — typically parents, grandparents, aunts, uncles, or other family members. This is the most common type of SNT in Illinois estate planning and the one most families should use when planning ahead.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              You can create a third-party SNT as a standalone trust document, or include it as a sub-trust within your{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trust
              </Link>{' '}
              or will. Many Illinois parents create an SNT as part of their broader estate plan, designating it as the recipient of all assets intended for their disabled child.
            </p>

            <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 my-8">
              <h4 className="font-bold text-[#33414E] mb-3 font-['Plus_Jakarta_Sans']">Key Features of a Third-Party SNT</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'No Medicaid payback requirement at beneficiary\'s death',
                  'Funded by family members\' gifts, inheritance, or life insurance',
                  'Remainder beneficiaries can be anyone (siblings, charities)',
                  'No age restriction — created for a beneficiary of any age',
                  'Can receive contributions from multiple family members over time',
                  'Most flexible structure for long-term family estate planning',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <h3 id="first-party-snt" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              First-Party (Self-Settled) Special Needs Trust — The d4A Trust
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>first-party special needs trust</strong> — also called a &ldquo;d4A trust&rdquo; after its authorizing statute, 42 U.S.C. § 1396p(d)(4)(A) — is funded with assets that belong to the person with disabilities themselves. This typically arises when a disabled person receives:
            </p>

            <div className="space-y-2 my-6 ml-4">
              {[
                'A personal injury or medical malpractice settlement',
                'An inheritance received directly (before an SNT was in place)',
                'A divorce settlement or court award',
                'Proceeds from a life insurance policy naming them as beneficiary',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <span className="text-[#4a708b] font-bold mt-0.5 flex-shrink-0">&bull;</span>
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A d4A trust must be established before the beneficiary turns 65, and it must be created by the beneficiary&apos;s parent, grandparent, legal guardian, or a court — the disabled person cannot create it for themselves. Critically, first-party SNTs carry a <strong>Medicaid payback requirement</strong>: when the beneficiary dies, the state of Illinois must be reimbursed for all Medicaid benefits paid on the beneficiary&apos;s behalf before any remaining assets pass to heirs.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                  <strong>First-party vs. third-party:</strong> Whenever possible, families prefer third-party SNTs because they carry no Medicaid payback obligation. First-party trusts are a fallback for situations where assets already belong to the person with disabilities — such as a personal injury settlement. If you are planning ahead, fund an SNT with your own money (third-party) rather than leaving assets directly to your disabled family member and hoping for a fix later.
                </p>
              </div>
            </div>

            {/* 4. What SNT Pays For */}
            <h2 id="what-snt-pays-for" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What an Illinois SNT Can (and Cannot) Pay For
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The trustee must walk a careful line: using trust assets to genuinely improve the beneficiary&apos;s quality of life, without making distributions that would cause SSI or Medicaid to reduce or terminate benefits. The governing rule is that SNT distributions should <strong>supplement</strong> public benefits, not replace them.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For SSI purposes, most &ldquo;in-kind support and maintenance&rdquo; (ISM) — which includes food and housing expenses paid directly to providers — will reduce the SSI benefit by up to one-third plus one dollar. Other types of distributions generally do not affect SSI. Trustees must understand this distinction before making housing-related payments.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold font-['Plus_Jakarta_Sans'] text-gray-900">Generally Safe to Pay</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  {[
                    'Education, tutoring, and vocational training',
                    'Recreation and entertainment (concerts, trips, sports)',
                    'Technology (computer, phone, tablet)',
                    'Transportation costs and vehicle expenses',
                    'Medical and dental care not covered by Medicaid',
                    'Therapies not covered by government programs',
                    'Clothing and personal care items',
                    'Furniture and household goods',
                    'Vacations and leisure activities',
                    'Professional services (attorney, accountant)',
                    'Life insurance premiums',
                    'Companion care or personal attendant',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold font-['Plus_Jakarta_Sans'] text-gray-900">Use Caution (May Reduce Benefits)</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  {[
                    'Direct cash payments to the beneficiary (counted as income)',
                    'Paying rent or mortgage directly (ISM — reduces SSI)',
                    'Paying for groceries or meals directly (ISM — reduces SSI)',
                    'Paying utility bills if beneficiary pays rent (ISM)',
                    'Purchasing real estate the beneficiary will live in (complex)',
                    'Any disbursement pushing total resources over $2,000',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 flex-shrink-0">⚠</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] mt-4 leading-relaxed">
                  SSI in-kind support and maintenance (ISM) rules are complex. Trustees should consult with a benefits counselor or attorney before making housing-related distributions.
                </p>
              </div>
            </div>

            {/* 5. Creating an SNT */}
            <h2 id="creating-snt" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Creating a Special Needs Trust in Illinois: Key Requirements
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An Illinois special needs trust is not an off-the-shelf document. It must be carefully drafted to satisfy both Social Security Administration (SSA) and Illinois Department of Healthcare and Family Services (HFS) requirements. Here are the essential elements every well-drafted Illinois SNT must include.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: '1',
                  title: 'Clearly identify the trust as a special needs / supplemental care trust',
                  body: "The trust document must state explicitly that it is intended to supplement — not supplant — government benefits. The language should establish that the trustee must consider whether a distribution would reduce or eliminate SSI or Medicaid eligibility before making it. Vague drafting here is the most common reason SNTs fail government benefit reviews.",
                },
                {
                  num: '2',
                  title: 'Name a competent trustee — not the beneficiary',
                  body: "The beneficiary cannot serve as sole trustee of their own SNT. Doing so would give them direct control over trust assets, which the SSA would count as an available resource. The trustee can be a family member, a professional (attorney or corporate trust company), or a nonprofit pooled trust organization. Choosing the right trustee is critical to the trust's long-term success.",
                },
                {
                  num: '3',
                  title: 'Include Medicaid payback language (first-party trusts only)',
                  body: "First-party (d4A) SNTs must include language specifying that Illinois Medicaid will be reimbursed upon the beneficiary's death. Illinois's IDHS requires specific payback language. Failure to include it — or including incorrect language — can disqualify the trust and result in the assets being counted for eligibility purposes.",
                },
                {
                  num: '4',
                  title: 'Designate remainder beneficiaries',
                  body: "For third-party SNTs, the document should name who receives any remaining trust assets when the beneficiary dies. These can be other children, family members, or charities. For first-party SNTs, remainder beneficiaries receive whatever (if anything) is left after the Medicaid payback obligation is satisfied.",
                },
                {
                  num: '5',
                  title: 'Include broad trustee powers and distribution guidance',
                  body: "The trust should give the trustee clear powers to invest assets, make discretionary distributions, purchase real estate, hire professionals, and interact with government agencies on the beneficiary's behalf. Many attorneys include a &ldquo;letter of intent&rdquo; or guidance section describing the beneficiary's needs, preferences, and care goals — not legally binding, but invaluable for successor trustees who did not know the beneficiary.",
                },
                {
                  num: '6',
                  title: 'Address successor trustee appointment',
                  body: "If the named trustee dies, resigns, or becomes incapacitated, the trust needs a clear mechanism to appoint a replacement. Without this, a court proceeding may be required to name a new trustee — causing delays and expenses at a difficult time and potentially leaving the beneficiary's funds unmanaged for months.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#33414E] text-base mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                      <p
                        className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">Need a Special Needs Trust for Your Family?</h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps families create carefully drafted special needs trusts that protect their loved one&apos;s government benefits while preserving your legacy. Flat-fee pricing — know exactly what you&apos;ll pay before you sign anything.
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

            {/* 6. Choosing a Trustee */}
            <h2 id="choosing-trustee" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Choosing a Trustee for Your Illinois Special Needs Trust
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Selecting the right trustee is one of the most consequential decisions in SNT planning. The trustee will manage trust assets, make distribution decisions, file annual tax returns, maintain records, and interact with government agencies — potentially for decades. A bad trustee choice can unravel even a perfectly drafted trust.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Individual Trustee (Family Member or Friend)',
                  pros: [
                    'Knows the beneficiary personally and understands their needs',
                    'No management fees',
                    'Flexible and responsive to the beneficiary\'s day-to-day life',
                  ],
                  cons: [
                    'May predecease the beneficiary — succession planning critical',
                    'May lack financial or legal expertise for long-term management',
                    'Emotional involvement can complicate difficult decisions',
                  ],
                  color: 'blue',
                },
                {
                  title: 'Corporate or Professional Trustee (Bank or Trust Company)',
                  pros: [
                    'Professional investment management and record-keeping',
                    'Institutional continuity — won\'t die or move away',
                    'Experience navigating SSI and Medicaid benefit rules',
                  ],
                  cons: [
                    'Annual management fees (typically 0.5%–1.5% of assets)',
                    'May feel impersonal for the beneficiary',
                    'Minimum asset requirements often $500,000 or more',
                  ],
                  color: 'amber',
                },
                {
                  title: 'Co-Trustees (Family Member + Professional)',
                  pros: [
                    'Combines personal knowledge with professional expertise',
                    'Family trustee advocates for beneficiary\'s quality of life',
                    'Professional trustee handles investments and legal compliance',
                  ],
                  cons: [
                    'Requires coordination between trustees',
                    'Higher overall cost than individual trustee alone',
                    'Trust document must clearly define each trustee\'s role',
                  ],
                  color: 'green',
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
                  <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans'] text-gray-900">{item.title}</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 font-['Plus_Jakarta_Sans']">Advantages</p>
                      <ul className="space-y-1">
                        {item.pros.map((pro, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 font-['Plus_Jakarta_Sans']">Drawbacks</p>
                      <ul className="space-y-1">
                        {item.cons.map((con, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                            <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Whoever you select, make sure they understand their obligations. An SNT trustee has a fiduciary duty to act in the beneficiary&apos;s best interests, file annual income tax returns for the trust, maintain detailed records, and stay current on changes to SSI and Medicaid rules. Many Illinois families find that naming a knowledgeable family member as primary trustee — with a professional or co-trustee named as backup — strikes the right long-term balance.
            </p>

            {/* 7. Funding the SNT */}
            <h2 id="funding-snt" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Fund Your Illinois Special Needs Trust
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Creating the trust document is only the first step. An unfunded SNT does nothing — assets must actually be transferred into the trust to give it effect. Here are the most common ways Illinois families fund special needs trusts.
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  method: 'Life Insurance',
                  detail:
                    "Naming the SNT as beneficiary of a life insurance policy is one of the most powerful and affordable funding strategies. A relatively modest annual premium can create a substantial trust balance at death, giving the trustee decades of resources to supplement the beneficiary's care. Work with your estate planning attorney to ensure the policy proceeds are payable to the trust — not directly to the beneficiary.",
                  badge: 'Most Popular',
                  badgeColor: 'green',
                },
                {
                  method: 'Will or Pour-Over Will',
                  detail:
                    'You can direct all or part of your probate estate to the SNT through your will. A pour-over will combined with a revocable living trust that includes an SNT sub-trust is an especially clean approach — your estate plan is unified, and the SNT receives funding at your death without a separate court proceeding for trust assets.',
                  badge: 'Common',
                  badgeColor: 'blue',
                },
                {
                  method: 'Revocable Living Trust',
                  detail:
                    'Parents of disabled adult children often establish a revocable living trust that holds major assets during their lifetime, directing the share intended for the disabled child into the SNT sub-trust at death. This avoids probate entirely and ensures immediate, seamless access to funds when the family needs them most.',
                  badge: 'Recommended',
                  badgeColor: 'green',
                },
                {
                  method: 'Gifts from Family Members',
                  detail:
                    'Grandparents, aunts, uncles, siblings, and friends can contribute to the SNT at any time. Each contributor can give up to the annual gift tax exclusion ($18,000 per person in 2026) without triggering gift tax reporting. This allows multiple family members to build up the trust over years, creating a meaningful long-term resource.',
                  badge: 'Flexible',
                  badgeColor: 'amber',
                },
                {
                  method: 'ABLE Account as a Complement',
                  detail:
                    'Illinois participates in the federal ABLE (Achieving a Better Life Experience) program, which allows individuals with disabilities to hold up to $100,000 in a tax-advantaged ABLE account without affecting SSI. ABLE accounts and SNTs work well together — ABLE accounts handle routine day-to-day expenses, while the SNT holds larger assets for long-term needs. ABLE accounts are available to individuals whose disability onset was before age 26.',
                  badge: 'Supplement',
                  badgeColor: 'blue',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-[#33414E] font-['Plus_Jakarta_Sans']">{item.method}</h3>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap font-['Plus_Jakarta_Sans'] ${
                        item.badgeColor === 'green'
                          ? 'bg-green-100 text-green-700'
                          : item.badgeColor === 'amber'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* 8. Pooled Trusts */}
            <h2 id="pooled-trusts" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Illinois Pooled Trusts: An Alternative Worth Knowing
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For families who cannot afford or do not want to administer an individual SNT, a <strong>pooled special needs trust</strong> — also known as a d4C trust — is an important alternative. Illinois has several nonprofit organizations that operate pooled trusts, including The Arc of Illinois Master Trust.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In a pooled trust, the nonprofit manages a large pool of assets on behalf of many beneficiaries, maintaining a separate sub-account for each person. Because investment and administration costs are shared across all accounts, pooled trusts are accessible for families with smaller amounts to invest — sometimes as little as a few thousand dollars — where hiring a professional trustee for an individual trust would be cost-prohibitive.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Pooled Trust vs. Individual SNT: Key Differences
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Feature</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Individual SNT</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Pooled Trust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Minimum size', 'No minimum (but $100K+ recommended)', 'Often $5,000–$25,000'],
                      ['Trustee', 'Family, professional, or co-trustee', 'Nonprofit organization'],
                      ['Customization', 'Highly customizable', 'Limited by master trust terms'],
                      ['Setup cost', '$1,500–$4,000 in legal fees', 'Lower — often under $500'],
                      ['Annual fees', 'Varies by trustee type', 'Typically 0.75%–2% of assets'],
                      ['Medicaid payback (first-party)', 'Required — 100% to state', 'Partial — nonprofit retains a portion'],
                      ['Age restriction', 'None', 'None (d4C trusts available at any age)'],
                    ].map(([feature, individual, pooled], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{feature}</td>
                        <td className="py-3 px-4 text-gray-600">{individual}</td>
                        <td className="py-3 px-4 text-gray-600">{pooled}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Pooled trusts are especially useful as a first-party vehicle when a person with disabilities receives an unexpected windfall — such as a personal injury settlement — and needs to act quickly to preserve Medicaid eligibility. The enrollment process is faster and less expensive than establishing an individual first-party SNT from scratch.
            </p>

            {/* 9. FAQ */}
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

            {/* 10. Next Steps */}
            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Next Steps
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you have a family member with a disability and assets you hope to leave for their benefit, a special needs trust is the foundation of a thoughtful plan. The sooner you put one in place, the better — SNTs can take years to build up through ongoing contributions and life insurance, and the worst time to establish one is in a crisis after an inheritance has already landed in the wrong hands.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For context on how an SNT fits into a broader estate plan, see our guides on{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trusts in Illinois
              </Link>
              ,{' '}
              <Link
                href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                the advantages and disadvantages of revocable trusts
              </Link>
              , and{' '}
              <Link
                href="/blog/what-is-a-simple-estate-plan-in-chicago-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                what a complete estate plan looks like for Illinois families
              </Link>
              .
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Special Needs Trust Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps families across Chicago and Illinois create special needs trusts that protect their loved one&apos;s benefits and preserve their legacy. We offer transparent flat-fee pricing — no billing surprises — and a free initial consultation to understand your situation and goals.
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
                  Our Trust Services
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
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois/',
                    label: 'Revocable vs. Irrevocable Trust: Which Is Right for You?',
                  },
                  {
                    href: '/blog/selecting-a-trustee-for-your-illinois-revocable-trust/',
                    label: 'Selecting a Trustee for Your Illinois Trust',
                  },
                  {
                    href: '/blog/trust-funding-check-list/',
                    label: 'Trust Funding Checklist for Illinois Families',
                  },
                  {
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Why Beneficiary Designations Override Your Will in Illinois',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Special needs trust law involves complex interactions between federal SSI rules, Medicaid regulations, and Illinois state law — rules change frequently and are highly fact-specific. Consult a licensed Illinois attorney before making any decisions about special needs planning.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Loved One&apos;s Future?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and learn how a special needs trust can preserve your family member&apos;s government benefits while securing their long-term care and quality of life.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/special-needs-trust-illinois-guide/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/special-needs-trust-illinois-guide/')}&text=${encodeURIComponent('Special Needs Trusts in Illinois: A Complete Guide for Families')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/special-needs-trust-illinois-guide/')}`}
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
