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
  Heart,
  Scale,
  CircleX as XCircle,
  Users,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'estate-planning-for-unmarried-couples-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'no-automatic-rights', title: 'Unmarried Couples Have No Automatic Rights in Illinois', level: 2, numeration: '2' },
    { id: 'what-happens-without-plan', title: 'What Happens Without an Estate Plan', level: 2, numeration: '3' },
    {
      id: 'essential-documents',
      title: 'Essential Documents for Unmarried Couples',
      level: 2,
      numeration: '4',
      children: [
        { id: 'wills-and-trusts', title: 'Wills and Revocable Living Trusts', level: 3, numeration: '4.1' },
        { id: 'powers-of-attorney', title: 'Powers of Attorney', level: 3, numeration: '4.2' },
        { id: 'healthcare-directives', title: 'Healthcare Directives', level: 3, numeration: '4.3' },
      ],
    },
    { id: 'beneficiary-designations', title: 'Beneficiary Designations: The Quickest Win', level: 2, numeration: '5' },
    { id: 'joint-ownership', title: 'Joint Ownership of Property in Illinois', level: 2, numeration: '6' },
    { id: 'healthcare-decisions', title: 'Healthcare and End-of-Life Decision Making', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Does Illinois recognize common-law marriage for estate planning purposes?',
      answer:
        'No. Illinois abolished common-law marriage in 1905 and does not recognize it for couples who began living together after that date. Regardless of how long you and your partner have lived together, you have no automatic inheritance rights under Illinois intestacy law unless you are legally married. A small number of states still recognize common-law marriage, and Illinois will honor a common-law marriage validly entered in one of those states — but for couples who have always lived in Illinois, common-law marriage is simply not available as a planning fallback. The only way to protect your partner is through estate planning documents.',
    },
    {
      question: 'Can an unmarried partner be excluded from the hospital room if there are no documents?',
      answer:
        "Yes — and this happens more often than people expect. Without a healthcare power of attorney naming your partner as your healthcare agent, hospital staff are legally required to defer to your next of kin under Illinois law. That means your parents, adult children, or siblings may have authority over your medical care and visitation — not your partner. In a crisis, a family member who disapproves of the relationship can use this power to exclude your partner entirely. A properly executed Illinois healthcare power of attorney eliminates this risk by giving your partner the legal authority to make decisions and access medical information on your behalf.",
    },
    {
      question: 'What is the difference between a will and a revocable living trust for unmarried couples?',
      answer:
        "A will directs how your probate assets are distributed after death, but it must go through the Illinois probate process — which is public, can take 9–18 months in Cook County, and requires court supervision. A revocable living trust, by contrast, holds your assets during your lifetime and distributes them at death without probate, privately and efficiently. For unmarried couples, the trust is often preferable because it eliminates probate delays that could leave your partner without access to assets for months. The trust also includes built-in incapacity planning — your successor trustee manages assets if you become unable to, without any court involvement. Most estate planning attorneys recommend pairing a revocable living trust with a pour-over will to create a complete plan.",
    },
    {
      question: "What happens to a jointly owned home if one unmarried partner dies in Illinois?",
      answer:
        "It depends on how title is held. If the home is titled in joint tenancy with right of survivorship, the surviving partner automatically inherits the deceased partner's share — no probate required. The survivor records a death certificate and an affidavit of survivorship at the Recorder of Deeds, and the property is theirs. If the home is titled as tenancy in common (which is Illinois's default when a deed doesn't specify), the deceased partner's share passes under their will or intestacy law — not automatically to the survivor. If the deceased had no will, their share would pass to their legal heirs (parents, siblings, adult children), who could potentially force a partition sale. Always review how property title is held with your estate planning attorney.",
    },
    {
      question: 'Are there gift or estate tax consequences when leaving assets to an unmarried partner in Illinois?',
      answer:
        "Yes — and this is one of the most significant financial disadvantages of being unmarried under current law. The federal estate tax marital deduction allows married couples to pass unlimited assets to each other estate-tax-free. Unmarried couples do not get this deduction. However, federal estate tax only applies to estates over $13.99 million per person in 2026, so most couples are not affected at the federal level. Illinois estate tax applies to estates over $4 million — with no marital deduction for unmarried partners. Lifetime gifting (up to $18,000 per person per year without gift tax reporting), irrevocable life insurance trusts, and other strategies can reduce Illinois estate tax exposure for high-net-worth unmarried couples. Consult an estate planning attorney if your combined estate may approach the $4 million threshold.",
    },
    {
      question: 'Can I leave everything to my partner and disinherit my family?',
      answer:
        "In most cases, yes — Illinois law gives you broad freedom to leave your estate to whoever you choose. Unlike a surviving spouse, who has a statutory right to claim a share of your estate under 755 ILCS 5/2-8 (the elective share), an unmarried partner has no forced heirship protection. Your relatives also have no automatic right to inherit if you have a valid will. However, wills can be contested — usually on grounds of lack of capacity, undue influence, or improper execution. A properly prepared will, executed with the help of an attorney under correct Illinois formalities, is far more resistant to challenge than a handwritten or generic online document. If your family relationships are strained, making your estate plan attorney-prepared and properly witnessed is especially important.",
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Estate Planning for Unmarried Couples in Illinois',
    description:
      'Unmarried couples in Illinois have no automatic inheritance rights. Learn the essential estate planning documents — wills, trusts, powers of attorney — that protect your partner and your assets.',
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
    datePublished: '2026-08-19',
    dateModified: '2026-08-19',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/estate-planning-for-unmarried-couples-illinois/',
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

  const risksWithoutPlan = [
    {
      risk: 'No inheritance rights',
      detail:
        "Illinois intestacy law passes your estate to your spouse, children, parents, or siblings — in that order. An unmarried partner is not mentioned anywhere in the statute. If you die without a will, your partner receives nothing from your probate estate regardless of how long you've been together.",
    },
    {
      risk: 'No hospital visitation rights',
      detail:
        'Without a healthcare power of attorney, hospitals are required to recognize your legal next of kin — not your partner. Your family members, even estranged ones, may control who enters your room and receives information about your condition.',
    },
    {
      risk: 'No financial management authority',
      detail:
        "If you are incapacitated without a durable power of attorney, your partner cannot pay your bills, manage your bank accounts, or make financial decisions on your behalf. They would need to petition the court for a guardianship — a process that takes months and costs thousands of dollars — just to manage your affairs.",
    },
    {
      risk: 'No say in end-of-life decisions',
      detail:
        "Without a healthcare power of attorney and an advance directive, your partner has no legal authority to make treatment decisions or communicate your wishes to medical providers. Illinois law gives that authority to your family members — not your partner.",
    },
    {
      risk: 'Shared property at risk',
      detail:
        "Property titled as tenancy in common — Illinois's default — passes the deceased partner's share to their legal heirs, not the surviving partner. Your family members could inherit a share of your jointly occupied home and potentially force a sale.",
    },
  ];

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
                Estate Planning for Unmarried Couples in Illinois
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Illinois law gives unmarried partners zero automatic inheritance rights, no hospital visitation authority, and no financial decision-making power — regardless of how long you have been together. The only way to protect your partner and yourself is through a carefully coordinated estate plan.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>August 19, 2026</time>
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
                    Unmarried couples in Illinois — whether long-term partners, couples who have chosen not to marry, or those who have not yet formalized their relationship — receive none of the automatic legal protections that marriage provides.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Illinois intestacy law does not mention unmarried partners. If you die without a will, your estate passes to your legal heirs — your spouse, children, parents, or siblings — in an order set by statute. Your partner, no matter how many years you have shared a life together, is legally invisible.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains the five risks unmarried couples face without an estate plan, the specific documents that eliminate those risks, and the practical steps Illinois couples should take to protect each other — from wills and revocable living trusts to powers of attorney, beneficiary designations, and joint title.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick at-a-glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Core Documents Unmarried Couples Need in Illinois
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Will or revocable living trust to pass assets to your partner', type: 'Asset Transfer', color: 'blue' },
                  { label: 'Durable POA for finances + healthcare POA for medical decisions', type: 'Incapacity Planning', color: 'green' },
                  { label: 'Updated beneficiary forms on all accounts and insurance policies', type: 'Beneficiary Designations', color: 'amber' },
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

            {/* 2. No Automatic Rights */}
            <h2 id="no-automatic-rights" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Unmarried Couples Have No Automatic Rights in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois does not recognize common-law marriage. The state abolished it in 1905, and no amount of time living together creates the legal rights that marriage provides. Two people who have shared a home and a life for thirty years are, in the eyes of Illinois law, legal strangers when it comes to inheritance and financial decision-making.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This matters in two distinct categories of situations:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#4a708b]" />
                  <h3 className="font-bold text-[#33414E] font-['Plus_Jakarta_Sans']">At Death</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  {[
                    'Illinois intestacy law passes your estate to your legal heirs — not your partner',
                    'Your partner cannot file a probate claim or demand a share of your estate',
                    'Any property titled solely in your name passes to your family by law',
                    'Life insurance and retirement accounts go to the named beneficiary — even if that is an ex-spouse',
                    'Your partner may be required to vacate a jointly occupied home they do not own',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-[#4a708b]" />
                  <h3 className="font-bold text-[#33414E] font-['Plus_Jakarta_Sans']">During Incapacity</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  {[
                    'Your partner has no automatic right to make medical decisions for you',
                    'Hospitals are required to defer to legal next of kin — not your partner',
                    'Your partner cannot access your bank accounts or pay your bills',
                    'Your family members can control your care — and potentially exclude your partner',
                    'A court guardianship is the only remedy — a lengthy, expensive process',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The good news is that Illinois law gives you complete freedom to fix this through estate planning documents. A will, a revocable living trust, a durable power of attorney, a healthcare power of attorney, and updated beneficiary designations can give your partner every legal protection that marriage would provide — and in some cases, more control over exactly how your wishes are carried out.
            </p>

            {/* 3. What Happens Without a Plan */}
            <h2 id="what-happens-without-plan" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Happens to Unmarried Couples Without an Estate Plan
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The risks are concrete and they play out in real Illinois families every year. Here are the five most serious consequences of dying or becoming incapacitated without a plan in place.
            </p>

            <div className="space-y-4 my-8">
              {risksWithoutPlan.map((item, i) => (
                <div key={i} className="border-l-4 border-red-400 bg-red-50 p-5 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 font-['Plus_Jakarta_Sans'] text-sm">{item.risk}</h4>
                      <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">The family conflict risk</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    When an unmarried partner dies without a will, disputes between the surviving partner and the deceased&apos;s family are common — particularly over personal property, shared household items, and any real estate the couple occupied together. These disputes are painful, expensive, and entirely avoidable. An estate plan is the only reliable way to prevent your family from overriding your wishes after you are gone.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Essential Documents */}
            <h2 id="essential-documents" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Essential Estate Planning Documents for Unmarried Couples
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A complete Illinois estate plan for an unmarried couple typically includes four categories of documents. Each solves a different problem — and all four are necessary for full protection.
            </p>

            <h3 id="wills-and-trusts" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Wills and Revocable Living Trusts
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>last will and testament</strong> is the foundational document for transferring assets at death. Without one, Illinois intestacy law determines who gets your property — and your partner is not on that list. A will lets you name your partner as your beneficiary and your executor, giving them the legal authority to administer your estate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For many unmarried couples, a <strong>revocable living trust</strong> is an even better solution. A trust avoids probate entirely — meaning your partner does not have to wait 9–18 months for a Cook County probate court to wrap up before they can access your assets. The trust also handles incapacity: if you become ill or injured, your successor trustee (your partner) manages your assets immediately, without any court involvement.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Will vs. Revocable Living Trust for Unmarried Couples
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Will Only</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Revocable Living Trust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Avoids probate?', 'No — will must go through court', 'Yes — funded trust assets bypass probate'],
                      ['Incapacity planning?', 'No — will only operates at death', 'Yes — successor trustee manages assets immediately'],
                      ['Privacy?', 'No — will becomes public record', 'Yes — trust terms stay private'],
                      ["Partner's access to assets", 'Delayed 9–18 months for probate to close', 'Immediate once you become incapacitated or die'],
                      ['Cost to create', 'Lower upfront', 'Higher upfront — recouped in probate savings'],
                      ['Best for couples who…', 'Have modest assets and simple situations', 'Own real estate, have significant assets, or want speed and privacy'],
                    ].map(([factor, will, trust], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-gray-600">{will}</td>
                        <td className="py-3 px-4 text-gray-600">{trust}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law&apos;s{' '}
              <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                wills
              </Link>{' '}
              and{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable trust
              </Link>{' '}
              services are available as flat-fee packages, so you know exactly what you will pay before you sign anything. Many unmarried couples benefit from a trust-based plan — revocable living trust, pour-over will, and both powers of attorney — as a comprehensive package.
            </p>

            <h3 id="powers-of-attorney" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Powers of Attorney: Financial and Healthcare
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A will only takes effect at death. A power of attorney protects you during your lifetime — specifically, if you become unable to manage your own affairs due to illness, injury, or cognitive decline.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: '1',
                  title: 'Durable Power of Attorney for Property (Financial POA)',
                  body: 'An Illinois durable power of attorney for property (governed by the Illinois Power of Attorney Act, 755 ILCS 45) designates your partner as your "agent" for financial matters — paying bills, managing bank accounts, filing taxes, managing investments, and handling real estate transactions. "Durable" means it remains in effect even if you become incapacitated. Without this document, your partner has no legal authority to touch your finances, regardless of how long you have lived together.',
                },
                {
                  num: '2',
                  title: 'Healthcare Power of Attorney',
                  body: 'An Illinois healthcare power of attorney (also called a healthcare surrogate designation) names your partner as your healthcare agent — giving them the legal right to make medical decisions on your behalf if you are unable to make them yourself. This includes decisions about treatment, surgery, medication, and — critically — where you receive care. Without this document, Illinois law gives that authority to your legal next of kin: parents, adult children, or siblings. Your partner could be locked out of your room and excluded from medical conversations entirely.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#33414E] text-sm mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Both powers of attorney are governed by the{' '}
              <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Illinois Power of Attorney Act
              </Link>
              . They must be signed before a notary public and a witness. For unmarried couples, these two documents may be the most important in the entire estate plan — because they protect you while you are still alive.
            </p>

            <h3 id="healthcare-directives" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Advance Healthcare Directive (Living Will)
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An Illinois advance directive — sometimes called a living will — records your wishes about end-of-life treatment: whether you want life-sustaining measures continued if you are in a terminal condition or permanently unconscious, and under what circumstances you would want those measures withdrawn.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For unmarried couples, an advance directive serves two purposes. First, it guides your healthcare agent (your partner) when they face the hardest decisions imaginable. Second, it prevents family members from stepping in and overriding your partner&apos;s judgment by claiming they &ldquo;don&apos;t know what you would have wanted.&rdquo; Your advance directive, properly prepared and signed, speaks for you when you cannot.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Protect Your Partner — Build a Complete Illinois Estate Plan
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps unmarried couples create complete estate plans that give each partner the legal protections they deserve. Flat-fee pricing. Free initial consultation.
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
              Beneficiary Designations: The Quickest Win
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For unmarried couples, updating beneficiary designations is often the fastest and most impactful step you can take — even before a will or trust is in place. Many of your most valuable assets pass entirely outside your will, directly to whoever is named on the beneficiary designation form:
            </p>

            <div className="space-y-3 my-6">
              {[
                'Life insurance policies',
                '401(k), 403(b), and other employer retirement plans',
                'Traditional and Roth IRAs',
                'Payable-on-death (POD) bank accounts',
                'Transfer-on-death (TOD) brokerage accounts',
                'Annuities',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              These accounts pass to the named beneficiary regardless of what your will says. If your beneficiary forms still name a parent, a sibling, or an ex-spouse — which is extremely common for people who have been in long-term relationships — your partner receives nothing from those accounts, even if your will clearly states they should inherit your entire estate.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    Action item: audit your beneficiary designations today
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Log into each financial account and insurance policy you own and check who is named as primary and contingent beneficiary. If your partner is not listed — or if a former partner, a deceased parent, or a sibling is still named — update the form immediately. This takes minutes and costs nothing. For married couples, the law provides automatic protections against stale designations. For unmarried couples, there are none.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For a deeper look at how beneficiary designations interact with your estate plan, see our guide on{' '}
              <Link
                href="/blog/beneficiary-designations-override-your-will-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                why beneficiary designations override your will in Illinois
              </Link>
              .
            </p>

            {/* 6. Joint Ownership */}
            <h2 id="joint-ownership" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Joint Ownership of Property in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For property you own together — most commonly a home — how title is held determines what happens when one partner dies. Illinois law recognizes two primary forms of co-ownership for unmarried couples:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Joint Tenancy with Right of Survivorship',
                  detail:
                    'When property is titled in joint tenancy, each co-owner holds an equal, undivided share. When one joint tenant dies, their share automatically passes to the surviving co-owner by operation of law — no will, no probate, no court involvement. The survivor records a death certificate and an affidavit of survivorship at the county Recorder of Deeds, and the property is theirs. For unmarried couples, joint tenancy is often the simplest way to ensure the surviving partner keeps the home. Joint tenancy must be expressly stated in the deed — courts will not imply it.',
                  badge: 'Best for Home Ownership',
                  badgeColor: 'green',
                },
                {
                  title: "Tenancy in Common (Illinois's Default)",
                  detail:
                    "When a deed transfers property to two people without specifying the form of co-ownership, Illinois law presumes tenancy in common under 765 ILCS 1005/1. In a tenancy in common, each owner holds a separate, divisible share that passes under their will or intestacy law at death — not automatically to the survivor. If one partner dies without a will, their share of the home passes to their legal heirs (parents, siblings, adult children). Those heirs could eventually seek a partition action — a court order forcing the sale of the property — leaving the surviving partner without a home.",
                  badge: 'Risky Without a Will',
                  badgeColor: 'amber',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-[#33414E] font-['Plus_Jakarta_Sans']">{item.title}</h3>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap font-['Plus_Jakarta_Sans'] ${
                        item.badgeColor === 'green'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you and your partner own property together, have your deed reviewed by an estate planning attorney to confirm how title is held and whether it reflects your current intentions. Changing from tenancy in common to joint tenancy requires a new deed — a straightforward process, but one that must be done correctly to be legally effective. For a full explanation of both forms, see our guide on{' '}
              <Link
                href="/blog/joint-tenancy-vs-tenancy-in-common-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                joint tenancy vs. tenancy in common in Illinois
              </Link>
              .
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Other Property Transfer Options for Illinois Couples
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: 'Transfer on Death Instrument (TODI)',
                    body: "Illinois allows real estate to be transferred at death through a Transfer on Death Instrument — a deed-like document that names a beneficiary to receive the property automatically at the owner's death, without probate. A TODI is a good option when only one partner owns the home and wants to leave it to the other. The owner retains full control during their lifetime and can revoke the TODI at any time.",
                  },
                  {
                    title: 'Revocable Living Trust',
                    body: 'Holding real estate in a revocable living trust is often the most flexible option. The trust avoids probate, allows for detailed distribution instructions (including provisions for what happens if both partners die), and transfers seamlessly without the need for additional court proceedings or recording steps at death.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-800 text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</p>
                      <p className="text-gray-600 text-sm font-['Plus_Jakarta_Sans']">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Healthcare Decisions */}
            <h2 id="healthcare-decisions" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Healthcare and End-of-Life Decision Making
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Of all the risks unmarried couples face, the healthcare gap is perhaps the most urgent — because it can affect you while you are still alive. Without a healthcare power of attorney, your partner has no legal standing to make medical decisions for you, receive information about your condition, or even demand visitation rights in a hospital.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois law sets out a priority order for healthcare surrogates — people who can make medical decisions for someone who is incapacitated and has not designated an agent. Under the Illinois Healthcare Surrogate Act (755 ILCS 40/25), that order is:
            </p>

            <div className="space-y-2 my-6">
              {[
                { rank: '1', person: 'Guardian of the person (if one has been appointed)' },
                { rank: '2', person: 'Spouse or domestic partner' },
                { rank: '3', person: 'Adult children' },
                { rank: '4', person: 'Parents' },
                { rank: '5', person: 'Adult siblings' },
                { rank: '6', person: 'Adult grandchildren' },
                { rank: '7', person: 'Close friend' },
                { rank: '8', person: 'Guardian of the estate' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-['Plus_Jakarta_Sans']">
                  <span className="bg-gray-200 text-gray-700 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {item.rank}
                  </span>
                  <span className={item.rank === '7' ? 'text-gray-700' : 'text-gray-700'}>
                    {item.person}
                    {item.rank === '7' && (
                      <span className="ml-2 text-xs text-amber-600 font-semibold">(Note: only if no family is available)</span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Notice that an unmarried partner appears nowhere in this statutory priority order unless they qualify as a &ldquo;close friend&rdquo; — and that only applies when no family member is available or willing to act. In practice, this means your parents, adult siblings, or children have priority over your partner in a medical crisis.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A healthcare power of attorney eliminates this problem completely. By executing a valid Illinois healthcare POA and naming your partner as your agent, you override the default statutory priority order. Your partner becomes your legal decision-maker — with authority to access your medical records, speak with your care team, make treatment decisions, and consent to or refuse procedures on your behalf.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    Both partners need their own documents
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Each partner needs their own set of estate planning documents. Partner A&apos;s will and healthcare POA protect Partner B — but do nothing to protect Partner A if Partner B becomes incapacitated or dies first. Estate planning for unmarried couples is always a two-person project. Illinois Estate Law offers packages that cover both partners, making it straightforward and cost-effective to protect each other simultaneously.
                  </p>
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
              If you are in an unmarried partnership in Illinois and do not yet have a complete estate plan, the time to act is now — before a health crisis, a death, or a family conflict forces your hand. Estate planning is not expensive relative to the protection it provides, and it is the only reliable way to ensure your partner has the legal rights they deserve.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Start with these steps:
            </p>

            <div className="space-y-3 my-6">
              {[
                'Audit your beneficiary designations on all financial accounts and insurance policies — update any that do not name your partner.',
                'Have your property deed reviewed to confirm how title is held and whether joint tenancy is properly established.',
                'Meet with an Illinois estate planning attorney to discuss whether a will or revocable living trust better fits your situation.',
                'Execute a durable power of attorney for property and a healthcare power of attorney naming your partner as your agent.',
                'Prepare an advance directive stating your end-of-life treatment preferences.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <span className="bg-[#33414E] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For more context on Illinois estate planning basics, see our guides on{' '}
              <Link
                href="/blog/illinois-inheritance-laws-dying-without-a-will/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                Illinois intestacy law
              </Link>
              ,{' '}
              <Link
                href="/blog/what-is-a-simple-estate-plan-in-chicago-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                what a complete Illinois estate plan looks like
              </Link>
              , and{' '}
              <Link
                href="/blog/do-you-really-need-a-power-of-attorney-in-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                why powers of attorney are essential in Illinois
              </Link>
              .
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps unmarried couples across Chicago and Illinois create complete estate plans — wills, revocable trusts, powers of attorney, and every document needed to protect each partner legally and financially. Schedule a free consultation to get started.
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
                  href="/chicago-wills-lawyer/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  Our Estate Planning Services
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
                    href: '/blog/illinois-inheritance-laws-dying-without-a-will/',
                    label: 'Illinois Inheritance Laws: Who Inherits When You Die Without a Will',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Why Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/joint-tenancy-vs-tenancy-in-common-illinois/',
                    label: 'Joint Tenancy vs. Tenancy in Common in Illinois',
                  },
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/do-you-really-need-a-power-of-attorney-in-illinois/',
                    label: 'Do You Really Need a Power of Attorney in Illinois?',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois estate planning law is complex and fact-specific — the right documents for your situation depend on your individual assets, family circumstances, and goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Partner and Your Future?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put a complete estate plan in place that gives your partner the legal rights they deserve — without waiting for a crisis to force the issue.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/estate-planning-for-unmarried-couples-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/estate-planning-for-unmarried-couples-illinois/')}&text=${encodeURIComponent('Estate Planning for Unmarried Couples in Illinois — what you need to protect your partner')}` }
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/estate-planning-for-unmarried-couples-illinois/')}`}
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
