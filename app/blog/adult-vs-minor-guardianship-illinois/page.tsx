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

const SLUG = 'adult-vs-minor-guardianship-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-they-share', title: 'What Adult and Minor Guardianship Have in Common', level: 2, numeration: '2' },
    { id: 'adult-guardianship', title: 'Adult Guardianship in Illinois', level: 2, numeration: '3' },
    { id: 'minor-guardianship', title: 'Minor Guardianship in Illinois', level: 2, numeration: '4' },
    { id: 'side-by-side', title: 'Side-by-Side: Adult vs. Minor Guardianship', level: 2, numeration: '5' },
    { id: 'process-differences', title: 'How the Process Differs', level: 2, numeration: '6' },
    { id: 'cost-differences', title: 'How the Cost Differs', level: 2, numeration: '7' },
    { id: 'which-applies', title: 'Which One Applies to Your Situation', level: 2, numeration: '8' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '9' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '10' },
  ];

  const faqs = [
    {
      question: 'What is the main difference between adult and minor guardianship in Illinois?',
      answer:
        'The main difference is why the guardianship exists and what the court has to find. Adult guardianship protects an adult who has lost the ability to make decisions because of a disability — dementia, a serious brain injury, an intellectual or developmental disability, or mental illness — and the court must find that disability before it appoints a guardian. Minor guardianship, by contrast, is not about incapacity at all. A child under 18 is presumed to need adults to make decisions for them; minor guardianship simply gives a non-parent (often a grandparent or other relative) the legal authority to raise the child when a parent cannot, and the court decides based on the best interest of the child. Different statutes, different standards, and different evidence apply to each.',
    },
    {
      question: 'Is minor guardianship the same as adoption?',
      answer:
        'No. Adoption permanently terminates the legal relationship between a child and their birth parents and creates a new, permanent parent-child relationship. Minor guardianship does neither. A guardian is given day-to-day authority to care for and make decisions for the child, but the parents keep their legal status as parents, their parental rights are not terminated, and the arrangement is not permanent. A minor guardianship ends automatically when the child turns 18, and it can be modified or ended earlier if circumstances change and it is in the child\'s best interest. Guardianship is a bridge for a child who needs care now — not a permanent change of parentage.',
    },
    {
      question: 'Why does adult guardianship cost more than minor guardianship?',
      answer:
        'It costs more because it requires more work and more proof. Adult guardianship is built around a disputed question — whether an adult has truly lost capacity — so Illinois law requires a physician\'s report documenting the disability, personal service of the petition on the respondent, and usually a guardian ad litem who investigates and reports to the court. Any of these steps can lead to objections and a contested hearing. An uncontested minor guardianship is far more straightforward, especially when the parents consent, so it is typically handled for a flat fee. Because the amount of work in an adult or contested case depends on what happens, those matters are handled hourly against a retainer. For current pricing on each type, see our guardianship page at /guardianship/.',
    },
    {
      question: 'Can the same person be guardian of both an adult and a minor?',
      answer:
        'Yes. There is nothing stopping one person — for example, a woman caring for both her aging mother and her orphaned nephew — from serving as guardian of an adult and guardian of a minor at the same time. They are simply two separate court proceedings, filed under different statutes, each with its own petition, its own standard, and its own ongoing responsibilities. The court evaluates each appointment on its own terms, so being approved as guardian in one case does not automatically make you guardian in the other.',
    },
    {
      question: 'Does a minor guardianship end automatically?',
      answer:
        'Yes. A minor guardianship in Illinois ends automatically when the child reaches age 18, because at that point the young person is a legal adult and no longer needs a guardian to make decisions for them. It can also end earlier — for instance, if a parent is again able to care for the child and the court finds that ending the guardianship is in the child\'s best interest. Importantly, reaching 18 does not create an adult guardianship. If a young adult has a disability that prevents them from managing their own affairs, the family must file a separate adult guardianship proceeding, often started shortly before the 18th birthday so the transition is seamless.',
    },
    {
      question: 'What standard does the court use?',
      answer:
        'The two proceedings use fundamentally different standards. In an adult guardianship, the court must find by clear and convincing evidence that the person is a "disabled person" who cannot manage their person or estate — a demanding standard, supported by a physician\'s report, that protects an adult\'s right to run their own life. In a minor guardianship, the court applies the best interest of the child standard, weighing the child\'s needs, safety, and stability, while giving weight to a fit parent\'s superior right to decide who raises their child. One asks whether an adult has lost capacity; the other asks what arrangement is best for a child.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Adult vs. Minor Guardianship in Illinois: Key Differences Explained',
    description:
      'Adult and minor guardianship are two different Illinois proceedings under different statutes and standards. This guide compares their purpose, evidence, duration, and cost.',
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
    datePublished: '2026-07-14',
    dateModified: '2026-07-14',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/adult-vs-minor-guardianship-illinois/',
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
                  Guardianship
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  11 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                Adult vs. Minor Guardianship in Illinois: Key Differences Explained
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Adult guardianship and minor guardianship are two different court proceedings, governed by different Illinois statutes and decided under different legal standards. This guide compares them side by side so you know which one fits your family&apos;s situation.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>July 14, 2026</time>
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
                    Adult guardianship protects an adult who has lost the ability to make decisions because of a disability. It is governed by the Illinois Probate Act (755 ILCS 5/Art. XIa) and turns on a disability standard — the court must be convinced the person can no longer manage their own person or estate.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Minor guardianship is entirely different. It gives a non-parent — often a grandparent or other relative — the legal authority to raise a child under 18. It is governed by the Probate Act&apos;s minor-guardianship provisions (755 ILCS 5/Art. XI), turns on the best interest of the child, and most often proceeds with the consent of a parent who cannot care for the child right now.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    Because one proceeding asks whether an adult has lost capacity and the other asks what is best for a child, they differ in purpose, legal standard, the evidence the court needs, how long they last, and what they cost. This guide walks through both and compares them directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick comparison at a glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                At a Glance: Adult vs. Minor Guardianship
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Protects an adult who lost capacity — disability standard', type: 'Adult Guardianship', color: 'blue' },
                  { label: 'Authority to raise a child under 18 — best-interest standard', type: 'Minor Guardianship', color: 'amber' },
                  { label: 'Different statutes, standards, evidence, duration, and cost', type: 'The Key Takeaway', color: 'green' },
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

            {/* 2. What They Share */}
            <h2 id="what-they-share" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Adult and Minor Guardianship Have in Common
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Before we get to the differences, it helps to see what these two proceedings share — because the overlap is why they are so often confused. Both adult and minor guardianship are Circuit Court proceedings that create a <strong>court-supervised decision-maker</strong> for someone who cannot make certain decisions on their own. In both, a judge — not a private document — appoints the guardian, and the guardian answers to the court.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Both types can cover the <strong>person</strong>, the <strong>estate</strong>, or both. A guardian of the person handles decisions about care, residence, and medical treatment; a guardian of the estate manages money and property. For a deeper look at that split, see our guide on{' '}
              <Link href="/blog/guardian-of-the-person-vs-estate-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardian of the person vs. guardian of the estate
              </Link>
              .
            </p>

            <div className="space-y-2 my-6 ml-4">
              {[
                'Both are filed in the Circuit Court and supervised by a judge, not arranged privately',
                'Both create a decision-maker who must act in the protected person\'s best interests',
                'Both can cover the person, the estate, or both',
                'Both may involve a guardian ad litem appointed to investigate and report to the court',
                'Both end when a guardian is no longer needed',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <span className="text-[#4a708b] font-bold mt-0.5 flex-shrink-0">&bull;</span>
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For a plain-language walkthrough of how any Illinois guardianship gets started and what the guardian is responsible for, see{' '}
              <Link href="/blog/how-guardianship-works-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how guardianship works in Illinois
              </Link>
              . From here on, though, the two proceedings pull apart.
            </p>

            {/* 3. Adult Guardianship */}
            <h2 id="adult-guardianship" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Adult Guardianship in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Adult guardianship exists to protect an adult — someone 18 or older — who has <strong>lost the ability to make or communicate decisions</strong> because of a disability. That disability might be advanced dementia, a stroke or brain injury, a serious mental illness, or a lifelong intellectual or developmental disability. It is governed by 755 ILCS 5/11a of the Illinois Probate Act, and its whole purpose is to step in where capacity has been lost while protecting the adult&apos;s remaining rights.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Because taking decision-making authority away from an adult is a serious matter, the process has real safeguards built in. A petition must be filed with the Circuit Court, and it must be supported by a <strong>physician&apos;s report</strong> that examines the person and documents the nature and extent of their disability. The respondent — the adult who is the subject of the petition — must be <strong>personally served</strong> and has the right to be present, to be represented by counsel, to demand a jury, and to <strong>object</strong>. The court appoints a <strong>guardian ad litem</strong> to meet with the person, explain their rights, and report back on what arrangement serves them best.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Gavel className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">Illinois favors the least restrictive option</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Illinois law requires courts to order the least restrictive form of adult guardianship that meets the person&apos;s needs. A &ldquo;plenary&rdquo; guardianship removes all decision-making authority; a &ldquo;limited&rdquo; guardianship covers only the specific areas where the person truly cannot act, preserving their autonomy everywhere else. This preference for limited guardianship is a defining feature of adult cases — and one reason each is so fact-specific. Learn more on our{' '}
                    <Link href="/guardianship/#adult" className="text-[#4a708b] hover:underline font-medium">
                      adult guardianship page
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Adult guardianship is often the fallback when someone did not put powers of attorney in place before losing capacity. If planning is still possible, a power of attorney is almost always the better route — see our comparison of{' '}
              <Link href="/blog/guardianship-vs-power-of-attorney-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardianship vs. power of attorney in Illinois
              </Link>{' '}
              and our{' '}
              <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Illinois power of attorney services
              </Link>
              .
            </p>

            {/* 4. Minor Guardianship */}
            <h2 id="minor-guardianship" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Minor Guardianship in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Minor guardianship is not about lost capacity at all. Every child under 18 needs adults to make decisions for them — that is simply how childhood works. Minor guardianship, governed by 755 ILCS 5/11-5, gives a <strong>non-parent</strong> the legal authority to stand in that role when a parent cannot. It is most often used by grandparents, aunts and uncles, adult siblings, or close family friends who are already raising a child.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The governing standard is the <strong>best interest of the child</strong>. But that standard operates against an important backdrop: a fit parent has a <strong>superior right</strong> to the care and custody of their own child. This is why most minor guardianships proceed with the <strong>consent</strong> of a parent who recognizes they cannot care for the child right now — because of illness, military deployment, incarceration, treatment for addiction, or other hardship. Where a parent does not consent and is not clearly unfit, the person seeking guardianship must make a threshold showing that the parents cannot or will not perform their parental duties, before the court weighs the child&apos;s best interest.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                'Used by grandparents, relatives, or trusted family friends',
                'Most often granted with a consenting parent\'s agreement',
                'Decided on the best interest of the child',
                'Respects a fit parent\'s superior right to their child',
                'Ends automatically when the child turns 18',
                'Short-term and standby options exist for temporary needs',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A defining feature of minor guardianship is that it is <strong>time-limited by design</strong>: it ends automatically at age 18, and it does not terminate anyone&apos;s parental rights. Illinois also offers flexible tools for temporary situations — a <strong>short-term guardianship</strong> a parent can set up by signed document for a limited period, and a <strong>standby guardianship</strong> that lets a seriously ill parent name someone to step in when the time comes. You can read more on our{' '}
              <Link href="/guardianship/#minor" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                minor guardianship page
              </Link>
              .
            </p>

            {/* 5. Side-by-Side */}
            <h2 id="side-by-side" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Side-by-Side: Adult vs. Minor Guardianship
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Seen next to each other, the two proceedings differ on nearly every axis that matters — the statute that governs them, what the court has to find, the evidence it relies on, who can object, and how long the arrangement lasts.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Adult vs. Minor Guardianship: Key Differences
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Adult Guardianship</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Minor Guardianship</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Governing statute', '755 ILCS 5/11a (Probate Act)', '755 ILCS 5/11-5 (Probate Act)'],
                      ['Legal standard', 'Disability — clear and convincing evidence', 'Best interest of the child'],
                      ['Key evidence / report', 'Physician\'s report documenting disability', 'Parental consent or showing of parental inability'],
                      ['Who can object', 'The adult respondent (and interested parties)', 'A parent asserting superior rights'],
                      ['Typical petitioner', 'Adult child, spouse, sibling, or other relative', 'Grandparent, relative, or family friend'],
                      ['Duration', 'Continues while the disability lasts', 'Ends automatically at age 18'],
                      ['Fee structure', 'Hourly against a retainer', 'Flat fee when uncontested'],
                    ].map(([factor, adult, minor], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-gray-600">{adult}</td>
                        <td className="py-3 px-4 text-gray-600">{minor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One theme runs through the whole table: adult guardianship is organized around a <em>contested question</em> — has this adult truly lost capacity? — while minor guardianship is usually organized around <em>cooperation</em>, with a consenting parent and a court focused on the child&apos;s wellbeing. That single difference drives the evidence, the timeline, and the cost. When either type <em>is</em> disputed, though, the dynamics change; see{' '}
              <Link href="/blog/what-happens-when-guardianship-is-contested-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                what happens when guardianship is contested in Illinois
              </Link>
              .
            </p>

            {/* 6. Process Differences */}
            <h2 id="process-differences" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How the Process Differs
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The steps look similar on the surface — file a petition, notify the right people, appear before a judge — but the heart of each proceeding is different. In an adult case, the pivotal question is medical and legal: is there a disability, and how far does it reach? In a minor case, the pivotal question is relational: is this the right arrangement for the child, and does a parent agree?
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: '1',
                  title: 'Adult guardianship: physician\'s report and a disability finding',
                  body: 'The petition must be backed by a physician\'s report examining the adult and describing the disability, its cause, and how it affects their ability to make decisions. The respondent is personally served, a guardian ad litem investigates, and the court must find by clear and convincing evidence that the person is a disabled adult before appointing a guardian — and then only to the least restrictive extent needed.',
                },
                {
                  num: '2',
                  title: 'Minor guardianship: parental consent or a showing, then a best-interest finding',
                  body: 'The petition names the child and the proposed guardian, and parents are given notice. If a parent consents, the path is usually straightforward. If not, the petitioner must first show the parents are unable or unwilling to carry out their parental duties. Only then does the court weigh the best interest of the child — the child\'s stability, safety, relationships, and needs — before appointing a guardian.',
                },
                {
                  num: '3',
                  title: 'What each court is really deciding',
                  body: 'An adult judge is deciding whether to override an adult\'s presumed right to run their own life, so the bar is high and the medical proof matters. A minor judge is deciding who should raise a child who already needs care, so parental rights and the child\'s welfare take center stage. Same courthouse, very different questions.',
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

            {/* 7. Cost Differences */}
            <h2 id="cost-differences" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How the Cost Differs
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Cost follows directly from the work involved, so it makes sense to think about fee <em>structure</em> rather than a single number. The core distinction is simple: a predictable, cooperative matter can be handled for a flat fee, while a matter whose length depends on what unfolds is handled hourly against a retainer.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#4A708B] text-white rounded-xl p-6">
                <Users className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans']">Uncontested Minor Guardianship</h3>
                <div className="space-y-3 text-sm font-['Plus_Jakarta_Sans']">
                  {[
                    'Handled on a flat-fee basis',
                    'Predictable scope when a parent consents',
                    'No physician\'s report required',
                    'Streamlined petition and appearance',
                    'You know the price before we begin',
                  ].map((row, i) => (
                    <div key={i} className="flex items-start gap-3 pb-2 border-b border-white/20 last:border-0">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                      <span className="text-white/90">{row}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#33414E] text-white rounded-xl p-6">
                <Gavel className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans']">Adult &amp; Contested Matters</h3>
                <div className="space-y-3 text-sm font-['Plus_Jakarta_Sans']">
                  {[
                    'Handled hourly against a retainer',
                    'Adult cases require a physician\'s report',
                    'Personal service on the respondent',
                    'Guardian ad litem investigation and report',
                    'Any contested case — adult or minor — is hourly',
                  ].map((row, i) => (
                    <div key={i} className="flex items-start gap-3 pb-2 border-b border-white/20 last:border-0">
                      <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-white" />
                      <span className="text-white/90">{row}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The reason adult guardianship costs more is structural, not arbitrary. The physician&apos;s report, personal service, and guardian ad litem work are built into every adult case, and any of them can lead to objections and a hearing — so the amount of work is not knowable up front and is billed hourly. An uncontested minor guardianship has none of those moving parts, which is why it fits a flat fee. And a <strong>contested</strong> matter of either kind is handled hourly, because a dispute can extend the case in ways no flat fee could fairly capture. For current pricing on each type, visit our{' '}
              <Link href="/guardianship/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardianship page
              </Link>{' '}
              or read about{' '}
              <Link href="/guardianship/#contested" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                contested guardianship
              </Link>
              .
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Not Sure Which Type of Guardianship You Need?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families navigate both adult and minor guardianship — from an uncontested flat-fee minor petition to a fully contested adult case. We&apos;ll tell you which proceeding applies and exactly how our fee structure works before you commit.
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
                  href="/guardianship/"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Explore Guardianship Services
                </Link>
              </div>
            </div>

            {/* 8. Which Applies */}
            <h2 id="which-applies" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Which One Applies to Your Situation
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In most cases the answer comes down to one question: is the person you are trying to protect an adult who has lost capacity, or a child who needs an adult to make decisions for them? That single fact points you to the right proceeding.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <ShieldCheck className="w-8 h-8 text-[#4a708b] mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Consider adult guardianship if&hellip;</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'An adult 18 or older has lost decision-making capacity',
                    'The cause is dementia, brain injury, mental illness, or a developmental disability',
                    'No valid, workable power of attorney is in place',
                    'A physician can document the disability',
                    'You need authority over care, finances, or both',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#4a708b] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <Users className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Consider minor guardianship if&hellip;</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'A child under 18 needs a non-parent to raise them',
                    'A parent cannot care for the child right now',
                    'You are a grandparent, relative, or trusted family friend',
                    'A parent will consent, or cannot fulfill parental duties',
                    'You need authority for school, medical care, and daily life',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">The 18th-birthday transition</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    One situation calls for both proceedings in sequence: a child with a significant disability who is approaching 18. Their minor guardianship will end automatically at 18, so if they still cannot manage their own affairs as an adult, the family should file a separate adult guardianship — often started shortly before the birthday so there is no gap in authority. This is a planning moment worth raising early with your attorney.
                  </p>
                </div>
              </div>
            </div>

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
              If you are caring for an adult who can no longer make their own decisions, or for a child whose parent cannot step up right now, the most useful next step is to confirm which proceeding fits and what it will take. The right answer depends on the facts — who needs protection, whether there is a disability or a consenting parent, and whether anyone is likely to object.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An experienced Illinois guardianship attorney can tell you quickly whether you are looking at an adult case, a minor case, or both, and can walk you through the physician&apos;s report, service, and guardian ad litem steps for adults or the consent and best-interest steps for minors. To see how we handle each type and what current pricing looks like, visit our{' '}
              <Link href="/guardianship/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardianship services page
              </Link>
              , then{' '}
              <Link href="/book-consultation/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                book a free consultation
              </Link>
              .
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For more background, see our related guides on{' '}
              <Link href="/blog/how-guardianship-works-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how guardianship works in Illinois
              </Link>
              ,{' '}
              <Link href="/blog/guardian-of-the-person-vs-estate-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardian of the person vs. estate
              </Link>
              ,{' '}
              <Link href="/blog/what-happens-when-guardianship-is-contested-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                what happens when guardianship is contested
              </Link>
              , and{' '}
              <Link href="/blog/guardianship-vs-power-of-attorney-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardianship vs. power of attorney
              </Link>
              .
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Guardianship Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families with both adult and minor guardianship — uncontested minor petitions on a flat fee, and adult and contested matters handled transparently on an hourly basis. Start with a free consultation so you know exactly which proceeding applies to your family.
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
                  href="/guardianship/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  Our Guardianship Services
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
                Related Illinois Guardianship Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/blog/how-guardianship-works-in-illinois/',
                    label: 'How Guardianship Works in Illinois',
                  },
                  {
                    href: '/blog/guardian-of-the-person-vs-estate-illinois/',
                    label: 'Guardian of the Person vs. Guardian of the Estate',
                  },
                  {
                    href: '/blog/what-happens-when-guardianship-is-contested-illinois/',
                    label: 'What Happens When Guardianship Is Contested in Illinois',
                  },
                  {
                    href: '/blog/guardianship-vs-power-of-attorney-illinois/',
                    label: 'Guardianship vs. Power of Attorney in Illinois',
                  },
                  {
                    href: '/chicago-powers-of-attorney-lawyer/',
                    label: 'Illinois Powers of Attorney: How They Work',
                  },
                  {
                    href: '/guardianship/',
                    label: 'Illinois Guardianship Services & Pricing',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois adult and minor guardianship law is complex and fact-specific — procedures and requirements vary by county and individual circumstances. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Get the Right Guardianship in Place?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and we&apos;ll confirm whether an adult or minor guardianship fits your situation and guide you through every step.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/adult-vs-minor-guardianship-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/adult-vs-minor-guardianship-illinois/')}&text=${encodeURIComponent('Adult vs. Minor Guardianship in Illinois — key differences explained')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/adult-vs-minor-guardianship-illinois/')}`}
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
