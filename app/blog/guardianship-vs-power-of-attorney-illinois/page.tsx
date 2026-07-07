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
  Scale,
  Users,
  CircleX as XCircle,
  Gavel,
  ShieldCheck,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'guardianship-vs-power-of-attorney-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-poa', title: 'What Is a Power of Attorney in Illinois?', level: 2, numeration: '2',
      children: [
        { id: 'poa-property', title: 'Illinois Statutory Durable Power of Attorney for Property', level: 3, numeration: '2.1' },
        { id: 'poa-healthcare', title: 'Illinois Power of Attorney for Health Care', level: 3, numeration: '2.2' },
      ],
    },
    { id: 'what-is-guardianship', title: 'What Is Guardianship in Illinois?', level: 2, numeration: '3',
      children: [
        { id: 'guardian-person', title: 'Guardian of the Person', level: 3, numeration: '3.1' },
        { id: 'guardian-estate', title: 'Guardian of the Estate', level: 3, numeration: '3.2' },
      ],
    },
    { id: 'key-differences', title: 'Guardianship vs. Power of Attorney: Side-by-Side', level: 2, numeration: '4' },
    { id: 'when-poa-fails', title: 'When a Power of Attorney Is Not Enough', level: 2, numeration: '5' },
    { id: 'cost-comparison', title: 'Cost Comparison: POA vs. Guardianship in Illinois', level: 2, numeration: '6' },
    { id: 'avoid-guardianship', title: 'How to Avoid Guardianship Through Estate Planning', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Can a power of attorney prevent guardianship in Illinois?',
      answer:
        'In most cases, yes. A comprehensive, properly executed Illinois Durable Power of Attorney for Property and a separate Power of Attorney for Health Care — both signed while the person still has legal capacity — give trusted agents the authority to manage finances and make healthcare decisions without any court involvement. Illinois courts generally will not appoint a guardian if a valid, functioning power of attorney is already in place. The key word is "functioning": if the POA document is poorly drafted, the agent is unable or unwilling to serve, or the agent is suspected of misconduct, guardianship may still become necessary.',
    },
    {
      question: 'What is the difference between a guardian of the person and a guardian of the estate in Illinois?',
      answer:
        'A guardian of the person makes decisions about where the ward lives, what medical treatment they receive, and their day-to-day personal care. A guardian of the estate manages the ward\'s finances — paying bills, managing investments, filing taxes, and handling contracts. Illinois courts can appoint one person as both, or different people for each role. The guardian of the estate must file regular accountings with the court, while the guardian of the person is typically subject to less formal reporting but must still act in the ward\'s best interests.',
    },
    {
      question: 'How long does the Illinois guardianship process take?',
      answer:
        'An uncontested guardianship petition in Cook County typically takes 6–12 weeks from filing to the court order. A contested guardianship — where family members disagree about who should be guardian, or the proposed ward objects — can take 6 months to a year or longer, and may require a guardian ad litem and a formal evidentiary hearing. Guardianship is not a fast solution in a crisis. By contrast, a properly drafted POA takes effect immediately upon signing (or upon incapacity, depending on how it is drafted) — no court wait required.',
    },
    {
      question: 'Can a power of attorney be used after someone becomes incapacitated in Illinois?',
      answer:
        'A durable power of attorney in Illinois is specifically designed to remain effective even after the principal becomes incapacitated — that is what makes it "durable." A non-durable POA automatically terminates when the principal loses capacity, which makes it useless for long-term planning. All properly drafted estate planning POAs in Illinois should be durable. However, if a person has already lost capacity before signing a POA, it is too late — they no longer have the legal capacity to execute one, and guardianship becomes the only option.',
    },
    {
      question: 'Does the person subject to guardianship lose all their rights in Illinois?',
      answer:
        'Not necessarily. Illinois law (755 ILCS 5/11a-12) favors the least restrictive form of guardianship. A court may appoint a "limited guardian" whose authority covers only specific areas where the person cannot care for themselves, leaving them full rights in other areas. A "plenary" (full) guardian has authority over all personal or financial decisions. Even under plenary guardianship, the ward retains certain rights: the right to petition the court to remove or replace the guardian, the right to vote (unless specifically restricted by the court), and the right to humane treatment and to be treated with dignity.',
    },
    {
      question: 'What happens if I become incapacitated without a power of attorney in Illinois?',
      answer:
        'Without a valid power of attorney, no one — not even your spouse, children, or closest family members — has automatic legal authority to manage your finances or make medical decisions on your behalf. Your family will need to petition the Circuit Court to be appointed your guardian. This process takes weeks or months, requires a court filing fee and likely attorney fees, and can be contested by other family members. Until the court appoints a guardian, financial accounts may be frozen and medical decisions may be left to default hospital protocols. This is precisely the scenario that a power of attorney is designed to prevent.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Guardianship vs. Power of Attorney in Illinois: What Every Family Needs to Know',
    description:
      'Understand the key differences between guardianship and power of attorney in Illinois — costs, court involvement, timing, and how to plan ahead to protect your family.',
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
    datePublished: '2026-06-17',
    dateModified: '2026-06-17',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/guardianship-vs-power-of-attorney-illinois/',
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
                Guardianship vs. Power of Attorney in Illinois: What Every Family Needs to Know
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                When a loved one can no longer manage their own affairs, families face two paths: a power of attorney (planned ahead of time) or court-supervised guardianship (required when planning was not done). Understanding the difference can save your family months of stress and thousands of dollars.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>June 17, 2026</time>
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
                    A power of attorney is a private legal document you sign voluntarily, granting a trusted person authority to act on your behalf. Guardianship is a court-ordered process that strips a person of legal decision-making authority and hands it to a court-appointed guardian.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    In Illinois, a properly drafted power of attorney — both for property and for healthcare — is almost always the better solution. It costs a fraction of guardianship, takes effect without court involvement, preserves the person&apos;s autonomy, and can be set up in a single meeting with an estate planning attorney.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    Guardianship becomes necessary only when a person is already incapacitated and has no valid power of attorney — or when the existing POA is insufficient or being misused. This guide explains both options, compares them side by side, and shows you how to plan now to protect your family.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick comparison at a glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                At a Glance: POA vs. Guardianship
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Voluntary, private, no court required', type: 'Power of Attorney', color: 'blue' },
                  { label: 'Court-ordered, public record, ongoing oversight', type: 'Guardianship', color: 'amber' },
                  { label: 'Planning now prevents guardianship later', type: 'The Key Takeaway', color: 'green' },
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

            {/* 2. What Is a Power of Attorney */}
            <h2 id="what-is-poa" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is a Power of Attorney in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A power of attorney (POA) is a legal document in which one person — the <strong>principal</strong> — grants another person — the <strong>agent</strong> or &ldquo;attorney-in-fact&rdquo; — authority to act on their behalf. In Illinois, the Power of Attorney Act (755 ILCS 45) governs how these documents are created and what they can authorize.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              There are two separate types of powers of attorney used in estate planning: one for financial matters and one for healthcare. Both must be signed while the principal has legal capacity — meaning they understand what they are signing and can make rational decisions. Once a person loses mental capacity, it is too late to execute a power of attorney.
            </p>

            <h3 id="poa-property" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Illinois Statutory Durable Power of Attorney for Property
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The <strong>Illinois Statutory Short Form Power of Attorney for Property</strong> authorizes the agent to manage the principal&apos;s financial and legal affairs. Depending on how it is drafted, the agent may have authority to:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                'Pay bills and manage bank accounts',
                'Buy, sell, or mortgage real estate',
                'Manage investments and brokerage accounts',
                'File tax returns on behalf of the principal',
                'Apply for government benefits such as Medicaid',
                'Enter contracts and manage business interests',
                'Make gifts within gift tax exclusion limits',
                'Fund a revocable living trust',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The word &ldquo;durable&rdquo; is critical. A durable power of attorney remains effective even after the principal becomes incapacitated. A non-durable POA automatically terminates at incapacity — precisely the moment you need it most. All Illinois estate planning powers of attorney for property should be durable.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Springing vs. immediate authority</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Illinois POAs can be drafted so the agent&apos;s authority takes effect immediately (even while the principal is capable) or &ldquo;springs&rdquo; into effect only upon incapacity. Immediate authority is generally preferable because it avoids the burden of proving incapacity before a bank or other institution will honor the document. Talk to your attorney about which approach fits your situation.
                  </p>
                </div>
              </div>
            </div>

            <h3 id="poa-healthcare" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Illinois Power of Attorney for Health Care
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The <strong>Illinois Statutory Short Form Power of Attorney for Health Care</strong> (755 ILCS 45/4-10) names a healthcare agent who can make medical decisions on the principal&apos;s behalf when the principal is unable to communicate or make decisions for themselves. This includes decisions about:
            </p>

            <div className="space-y-2 my-6 ml-4">
              {[
                'Consent to or refusal of medical treatment, including surgeries and medications',
                'Admission to and discharge from hospitals, nursing homes, and care facilities',
                'Hiring and firing medical providers',
                'Access to medical records',
                'End-of-life care preferences (often paired with a living will / declaration)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <span className="text-[#4a708b] font-bold mt-0.5 flex-shrink-0">&bull;</span>
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Without a healthcare POA, doctors and hospitals default to Illinois law for surrogate decision-makers — a family member hierarchy that may not reflect your wishes and that can lead to disagreements among relatives at the worst possible time. Naming a healthcare agent ensures the person you trust most is in charge.
            </p>

            {/* 3. What Is Guardianship */}
            <h2 id="what-is-guardianship" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is Guardianship in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When a person can no longer manage their own affairs and has not executed a valid power of attorney, Illinois law provides for court-supervised <strong>guardianship</strong> under the Probate Act (755 ILCS 5/11a). Guardianship is the legal process by which a court declares a person a &ldquo;ward&rdquo; — legally unable to manage some or all of their own decisions — and appoints another person as their <strong>guardian</strong> to act in their place.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Guardianship is initiated by filing a petition with the Circuit Court in the county where the alleged disabled person resides. In Chicago and the surrounding suburbs, that means the Circuit Court of Cook County, Probate Division. The court appoints a <strong>guardian ad litem</strong> to investigate the situation and report to the judge, and in most cases holds a hearing before granting the guardianship.
            </p>

            <h3 id="guardian-person" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Guardian of the Person
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A guardian of the person makes decisions about the ward&apos;s <strong>personal life</strong> — where they live, what medical care they receive, and who provides their daily care and support. The guardian of the person steps into a role similar to what a healthcare POA agent would fill: making decisions about residential placement, medical treatments, and personal wellbeing.
            </p>

            <h3 id="guardian-estate" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Guardian of the Estate
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A guardian of the estate manages the ward&apos;s <strong>financial affairs</strong> — paying bills, managing accounts and investments, filing taxes, and protecting the ward&apos;s assets from waste or exploitation. The guardian of the estate must file an initial inventory of assets with the court, and then submit regular accountings — typically annually — showing all income received and expenditures made. This ongoing court oversight is one of the most significant differences from a private POA arrangement.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Gavel className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">Illinois favors &ldquo;limited guardianship&rdquo;</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Under 755 ILCS 5/11a-12, Illinois courts are required to order the least restrictive form of guardianship consistent with the ward&apos;s needs. A &ldquo;plenary&rdquo; (full) guardianship removes all decision-making authority. A &ldquo;limited&rdquo; guardianship covers only specific areas where the person cannot care for themselves, leaving them autonomous in other domains. Courts prefer limited guardianship when appropriate.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Key Differences */}
            <h2 id="key-differences" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Guardianship vs. Power of Attorney: Side-by-Side Comparison
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The differences between these two legal tools are substantial — and understanding them makes clear why proactive estate planning almost always produces a better outcome for families.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  POA vs. Guardianship: Key Differences
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Power of Attorney</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Guardianship</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['How created', 'Signed by principal while competent', 'Ordered by Circuit Court'],
                      ['Court involvement', 'None', 'Required — ongoing'],
                      ['Speed', 'Takes effect immediately or upon incapacity', 'Weeks to months to obtain'],
                      ['Privacy', 'Private document', 'Public court record'],
                      ['Cost', '$300–$900 attorney fee (one-time)', '$3,000–$10,000+ to establish, plus annual costs'],
                      ['Principal\'s autonomy', 'Principal retains all rights', 'Court removes some or all rights'],
                      ['Ongoing oversight', 'None required', 'Annual accountings to the court'],
                      ['Flexibility', 'Highly customizable', 'Defined by court order'],
                      ['Revocable?', 'Yes — by the principal while competent', 'Only by court order'],
                      ['Works across state lines?', 'Generally yes (varies by state)', 'Illinois order only — may need ancillary proceedings'],
                    ].map(([factor, poa, guardianship], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-gray-600">{poa}</td>
                        <td className="py-3 px-4 text-gray-600">{guardianship}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. When POA Fails */}
            <h2 id="when-poa-fails" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              When a Power of Attorney Is Not Enough
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A power of attorney is the right tool in the vast majority of cases — but there are situations where guardianship becomes necessary even when a POA exists, or where a POA cannot solve the problem.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: '1',
                  title: 'The person is already incapacitated — with no POA',
                  body: 'This is the most common scenario: a parent or spouse suffers a stroke, develops advanced dementia, or is injured in an accident, and the family discovers there is no valid power of attorney. At this point, guardianship is the only way to establish legal authority. The window for executing a POA has closed — the person no longer has legal capacity to sign one.',
                },
                {
                  num: '2',
                  title: 'The POA agent is deceased, incapacitated, or unable to serve',
                  body: 'If the named agent is unavailable and no successor agent was named in the POA document, the document may be effectively useless. A well-drafted Illinois POA always names at least one successor agent — but when none is available and the principal can no longer execute a new document, guardianship may be required.',
                },
                {
                  num: '3',
                  title: 'The POA agent is suspected of abuse or mismanagement',
                  body: 'A court can remove a POA agent and appoint a guardian when there is evidence the agent is acting against the principal\'s interests — misusing funds, making unauthorized gifts to themselves, or failing to meet the principal\'s care needs. Guardianship provides court oversight that private POA arrangements do not.',
                },
                {
                  num: '4',
                  title: 'Institutions refuse to honor the POA',
                  body: 'Banks, financial institutions, and healthcare providers are not always required to accept a POA — especially if it is old, uses outdated statutory forms, or appears ambiguous. Some institutions have their own forms they require. If a critical institution refuses to recognize the POA and the principal cannot execute a new one, a guardianship order may be needed to compel compliance.',
                },
                {
                  num: '5',
                  title: 'The person has minor children who need a guardian',
                  body: 'A power of attorney cannot appoint a guardian for minor children — only a court can do that. Illinois parents who want to designate a guardian for their children in the event of death or incapacity must do so through a will or through a formal guardianship proceeding. This is a separate need from adult incapacity planning but equally important.',
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

            {/* 6. Cost Comparison */}
            <h2 id="cost-comparison" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Cost Comparison: POA vs. Guardianship in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Cost is one of the starkest differences between the two approaches — and one of the most compelling reasons to plan ahead with a power of attorney rather than leaving your family to pursue guardianship in a crisis.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#33414E] text-white rounded-xl p-6">
                <ShieldCheck className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans']">Power of Attorney Costs</h3>
                <div className="space-y-3 text-sm font-['Plus_Jakarta_Sans']">
                  {[
                    { label: 'Attorney drafting fee (POA for property)', cost: '$300–$600' },
                    { label: 'Attorney drafting fee (POA for healthcare)', cost: '$150–$300' },
                    { label: 'As part of a complete estate plan', cost: 'Often bundled at $1,000–$2,500' },
                    { label: 'Notarization and witness fees', cost: 'Minimal or included' },
                    { label: 'Ongoing court fees or accountings', cost: 'None' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center gap-4 pb-2 border-b border-white/20 last:border-0">
                      <span className="text-white/85">{row.label}</span>
                      <span className="font-bold text-white whitespace-nowrap">{row.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-6">
                <Gavel className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans']">Guardianship Costs</h3>
                <div className="space-y-3 text-sm font-['Plus_Jakarta_Sans']">
                  {[
                    { label: 'Attorney fees (uncontested petition)', cost: '$2,500–$5,000' },
                    { label: 'Attorney fees (contested guardianship)', cost: '$10,000–$30,000+' },
                    { label: 'Court filing fees (Cook County)', cost: '$400–$600' },
                    { label: 'Guardian ad litem fees', cost: '$500–$2,000' },
                    { label: 'Annual accounting and attorney fees', cost: '$1,000–$3,000/year' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center gap-4 pb-2 border-b border-white/20 last:border-0">
                      <span className="text-white/85">{row.label}</span>
                      <span className="font-bold text-white whitespace-nowrap">{row.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The math is unambiguous: a complete estate plan that includes a durable power of attorney for property, a power of attorney for healthcare, a will, and a living will typically costs under $2,500 at Illinois Estate Law. An uncontested guardianship in Cook County commonly runs $3,000–$5,000 before it even begins — and then carries ongoing annual costs. A contested guardianship can reach five figures or more, draining estate assets and straining family relationships.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Want to Avoid Guardianship for Your Family?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families put the right legal documents in place — durable powers of attorney, healthcare directives, wills, and trusts — so a crisis never becomes a court proceeding. Flat-fee pricing so you always know what you&apos;ll pay.
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

            {/* 7. How to Avoid Guardianship */}
            <h2 id="avoid-guardianship" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Avoid Guardianship Through Estate Planning
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The goal of every Illinois estate plan should be to give trusted people the legal authority to act on your behalf in every foreseeable circumstance — so that a court never has to step in and do it for them. Here is how a complete plan accomplishes that.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Execute a Durable Power of Attorney for Property',
                  detail: 'Name a primary agent and at least one successor agent. Consider granting immediate authority — not a springing POA — so the document works seamlessly without requiring proof of incapacity at a bank. Make sure the document is executed under current Illinois statutory requirements: signed by the principal and a witness who is not the agent.',
                  link: '/chicago-powers-of-attorney-lawyer/',
                  linkLabel: 'Learn about our POA services',
                  color: 'blue',
                },
                {
                  title: 'Execute a Power of Attorney for Health Care',
                  detail: 'Name a healthcare agent who understands your medical values and will advocate for your wishes under pressure. Include a separate living will / declaration to document your end-of-life care preferences. These two documents work together to cover every healthcare scenario your agent might face.',
                  link: '/chicago-powers-of-attorney-lawyer/',
                  linkLabel: 'View Illinois healthcare POA information',
                  color: 'blue',
                },
                {
                  title: 'Create a Revocable Living Trust',
                  detail: 'A revocable living trust not only avoids probate at death — it also addresses incapacity during life. When you become incapacitated, your successor trustee steps in to manage trust assets without any court involvement. For assets with significant value, a trust combined with a POA provides the most comprehensive incapacity protection available under Illinois law.',
                  link: '/chicago-revocable-trusts-lawyer/',
                  linkLabel: 'Learn about revocable living trusts',
                  color: 'green',
                },
                {
                  title: 'Keep Your Documents Current and Accessible',
                  detail: 'A POA executed 20 years ago may still be legally valid, but many institutions treat older documents with skepticism. Review your powers of attorney every 3–5 years or after any major life change. Make sure your agent knows where the original documents are stored — a POA no one can find is useless in a crisis.',
                  link: '/blog/why-review-estate-plan-every-few-years/',
                  linkLabel: 'Why you should review your estate plan regularly',
                  color: 'amber',
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
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-3">{item.detail}</p>
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
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <XCircle className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Without a POA</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'Family must petition the court for guardianship',
                    'Weeks or months before anyone has legal authority',
                    'Financial accounts may be frozen in the interim',
                    'Court retains ongoing oversight of all major decisions',
                    'Annual accountings required — attorney fees every year',
                    'Family conflict over who should serve as guardian',
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
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">With a Valid POA</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'Agent has immediate authority — no court wait',
                    'Financial accounts accessible from day one',
                    'No ongoing court oversight or mandatory accountings',
                    'Private — not a public court record',
                    'Far lower total cost to the family',
                    'Principal chose the agent while fully capable',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
              If you or a loved one does not yet have a durable power of attorney for property and a power of attorney for healthcare, the most important next step is to get them done — now, while everyone is capable of signing. These documents cost a fraction of guardianship and give your family enormous peace of mind.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are already in a situation where a loved one is incapacitated without a valid POA, guardianship may be necessary. An experienced Illinois probate and estate planning attorney can advise you on whether guardianship is required and help you navigate the Circuit Court process as efficiently as possible.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For more context on Illinois estate planning tools, see our guides on{' '}
              <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Illinois powers of attorney
              </Link>
              ,{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trusts
              </Link>
              ,{' '}
              <Link href="/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                what happens if you become incapacitated without a plan
              </Link>
              , and{' '}
              <Link href="/blog/what-is-a-simple-estate-plan-in-chicago-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                what a complete Illinois estate plan looks like
              </Link>
              .
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area individuals and families create comprehensive estate plans — including durable powers of attorney, healthcare directives, wills, and trusts — that protect loved ones without the cost and delay of guardianship. Transparent flat-fee pricing with a free initial consultation.
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
                  href="/chicago-powers-of-attorney-lawyer/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  Our POA Services
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
                    href: '/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/',
                    label: 'What Happens If You Become Incapacitated Without a Plan?',
                  },
                  {
                    href: '/blog/do-you-really-need-a-power-of-attorney-in-illinois/',
                    label: 'Do You Really Need a Power of Attorney in Illinois?',
                  },
                  {
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
                  },
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Why Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/understanding-the-responsibilities-of-an-estate-executor-in-illinois/',
                    label: 'Understanding the Responsibilities of an Estate Executor',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois guardianship and power of attorney law is complex and fact-specific — procedures and requirements vary by county and individual circumstances. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Family Without a Court Battle?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put the powers of attorney, healthcare directives, and estate plan in place that will spare your family from guardianship.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/guardianship-vs-power-of-attorney-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/guardianship-vs-power-of-attorney-illinois/')}&text=${encodeURIComponent('Guardianship vs. Power of Attorney in Illinois — what every family needs to know')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/guardianship-vs-power-of-attorney-illinois/')}`}
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
