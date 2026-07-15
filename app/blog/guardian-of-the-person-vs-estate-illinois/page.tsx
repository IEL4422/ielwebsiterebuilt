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

const SLUG = 'guardian-of-the-person-vs-estate-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'guardian-of-person', title: 'Guardian of the Person', level: 2, numeration: '2' },
    { id: 'guardian-of-estate', title: 'Guardian of the Estate', level: 2, numeration: '3' },
    { id: 'both-or-split', title: 'Can One Person Be Both?', level: 2, numeration: '4' },
    { id: 'limited-vs-plenary', title: 'Limited vs. Plenary Guardianship', level: 2, numeration: '5' },
    { id: 'when-estate-needed', title: 'When You Need a Guardian of the Estate', level: 2, numeration: '6' },
    { id: 'the-accounting-duty', title: 'The Accounting Duty and Why It Matters', level: 2, numeration: '7' },
    { id: 'minors', title: "Guardianship of a Minor's Estate", level: 2, numeration: '8' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '9' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '10' },
  ];

  const faqs = [
    {
      question: 'What is the difference between a guardian of the person and a guardian of the estate in Illinois?',
      answer:
        'A guardian of the person makes decisions about the ward\'s care — where they live, what medical treatment they receive, and their day-to-day well-being. A guardian of the estate manages the ward\'s money and property — bank accounts, real estate, income, benefits, and bills — and must account to the court for every dollar. In many cases the same person holds both roles, but Illinois courts can and do split them, appointing one person over the care decisions and another over the finances when that serves the ward best.',
    },
    {
      question: 'Can the same person be both guardian of the person and of the estate?',
      answer:
        'Yes. Illinois courts frequently appoint one person as both guardian of the person and guardian of the estate, especially in family situations where one adult child or spouse is stepping in to handle everything. The court can also appoint different people for each role, or name co-guardians who serve together. The judge decides based on who is willing, capable, and acting in the ward\'s best interests — and, where the estate is substantial or complex, whether it makes sense to separate the money management from the caregiving.',
    },
    {
      question: 'Does a guardian of the estate have to post a bond?',
      answer:
        'Generally, yes. A guardian of the estate is usually required to post a surety bond before taking control of the ward\'s assets. The bond protects the ward against mismanagement or misappropriation, and the amount is set by the court based on the value of the estate. In limited circumstances the court may reduce or waive the bond — for example, where the estate is small, where assets are placed in a restricted account that cannot be touched without a court order, or where the will or a statute authorizes a waiver. But the default expectation is a bond.',
    },
    {
      question: 'What is a plenary vs. a limited guardian?',
      answer:
        'A plenary guardian has full authority over all of the areas the guardianship covers — every personal decision (for a plenary guardian of the person) or all of the ward\'s finances (for a plenary guardian of the estate). A limited guardian has authority only over the specific decisions the court has spelled out, leaving the ward to make every other decision on their own. Illinois law (755 ILCS 5/11a-12) directs courts to prefer the least restrictive arrangement, so a limited guardianship is favored whenever the ward can handle some of their own affairs.',
    },
    {
      question: 'How often must a guardian of the estate file an accounting?',
      answer:
        'A guardian of the estate must file an initial accounting within 30 days after the first anniversary of the appointment, and then on the schedule the court sets — typically annually, though the court can order a different interval (755 ILCS 5/24-11). The accounting lists everything the estate received and everything the guardian spent or distributed, and the guardian must be able to back it up with records. Filing on time and keeping clean documentation is one of the most important duties of the role.',
    },
    {
      question: 'Do you need a guardian of the estate if the person has no money?',
      answer:
        'Often not. If the ward has no assets to manage — no accounts, no real estate, no income beyond a benefit check that is already handled through a representative payee — a guardian of the person alone may be all that is needed. A guardian of the estate exists to manage and protect property; where there is little or no property, there is little for that guardian to do. If the ward later inherits money or receives a settlement, a guardian of the estate can be added at that point.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Guardian of the Person vs. Guardian of the Estate in Illinois',
    description:
      'Illinois splits guardianship into two roles — care of the person and management of the estate. This guide explains the difference, the duties, and how they interact.',
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
    datePublished: '2026-07-13',
    dateModified: '2026-07-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/guardian-of-the-person-vs-estate-illinois/',
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
                  10 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                Guardian of the Person vs. Guardian of the Estate in Illinois
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Illinois splits guardianship into two roles — one over the person&apos;s care, one over their money. This guide explains the difference between the two, the duties each carries, and how they interact.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>July 13, 2026</time>
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
                    A guardian of the person decides on the ward&apos;s care — where they live, what medical treatment they receive, and how their daily needs are met. It is the role focused on the human being, not the bank account.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    A guardian of the estate manages the ward&apos;s money and property — accounts, real estate, income, and benefits — and must account to the court for how those assets are handled. Where a guardian of the person answers for care, a guardian of the estate answers for dollars.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    One person can hold both roles, or the court can split them between two people. Where the ward has assets to protect, the guardianship usually covers both the person and the estate. This guide walks through each role, how Illinois courts decide between limited and full authority, and the reporting duties that come with the estate side.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick comparison at a glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                At a Glance: Person vs. Estate
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Care, residence, and medical decisions', type: 'Guardian of the Person', color: 'blue' },
                  { label: 'Money, property, and court accountings', type: 'Guardian of the Estate', color: 'amber' },
                  { label: 'One person can hold both, or the roles can be split', type: 'The Key Takeaway', color: 'green' },
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

            {/* 2. Guardian of the Person */}
            <h2 id="guardian-of-person" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Guardian of the Person
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A guardian of the person is responsible for the ward&apos;s <strong>care and personal well-being</strong>. This is the role that steps into the human, day-to-day decisions a person would ordinarily make for themselves: where they live, who provides their care, and what happens when a doctor recommends a treatment. In practical terms, the guardian of the person is the one on the phone with the care facility, the one signing off on a medical procedure, and the one making sure the ward is safe, supported, and treated with dignity.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The authority of a guardian of the person generally covers the ward&apos;s <strong>residence</strong>, their <strong>medical and mental-health care</strong>, and the arrangement of the <strong>services and support</strong> they need day to day. The guardian is expected to consider the ward&apos;s own preferences and to choose the option that respects their independence as much as their circumstances allow.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                'Deciding where the ward lives — home, a family member\'s home, or a care facility',
                'Consenting to or declining medical and mental-health treatment',
                'Arranging in-home care, therapies, and support services',
                'Overseeing the ward\'s daily comfort, safety, and well-being',
                'Advocating for the ward with providers and facilities',
                'Reporting to the court each year on the ward\'s condition',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A guardian of the person carries a real reporting duty, but a lighter one than the estate side. Under 755 ILCS 5/11a-17(b), the guardian of the person must file an <strong>annual report</strong> on the ward — describing the ward&apos;s current condition, living arrangement, and the care being provided, along with an opinion on whether the guardianship should continue as it is. It is a report about the person&apos;s life and well-being, not a ledger of dollars, and the financial reporting expected of a guardian of the person is far lighter than what a guardian of the estate must produce.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For a fuller picture of how these two sides fit together, see our overview of{' '}
              <Link href="/guardianship/#person-vs-estate" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardian of the person versus guardian of the estate
              </Link>
              .
            </p>

            {/* 3. Guardian of the Estate */}
            <h2 id="guardian-of-estate" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Guardian of the Estate
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A guardian of the estate is responsible for the ward&apos;s <strong>money and property</strong>. Where the guardian of the person answers for care, the guardian of the estate answers for finances: managing bank and investment accounts, real estate, income, pensions, and public benefits, paying the ward&apos;s bills, and protecting the estate from waste, neglect, or exploitation. It is a fiduciary role in the fullest sense — the guardian handles someone else&apos;s money and is held to a high standard of honesty and care in doing so.
            </p>

            <div className="space-y-2 my-6 ml-4">
              {[
                'Taking control of and safeguarding the ward\'s accounts and property',
                'Managing income, benefits, investments, and real estate',
                'Paying the ward\'s bills, taxes, and cost of care',
                'Posting a surety bond before taking control of the assets',
                'Filing an inventory of the estate\'s property with the court',
                'Filing a court accounting of everything received and spent',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <span className="text-[#4a708b] font-bold mt-0.5 flex-shrink-0">&bull;</span>
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The estate role comes with front-end safeguards that the person role does not. Before taking control of the ward&apos;s property, a guardian of the estate is generally required to post a <strong>surety bond</strong> — a financial guarantee that protects the ward if the guardian mismanages the money. The guardian must also file an <strong>inventory</strong>, a formal listing of all the assets that make up the estate, so the court and the ward have a clear starting point.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              From there, the defining duty is the <strong>court accounting</strong>. Under 755 ILCS 5/24-11, the guardian of the estate must periodically account to the court for the estate&apos;s income and expenditures. Critically, the burden runs against the guardian: it is the <strong>guardian who personally bears the burden of proving each disbursement was proper</strong>. A payment the guardian cannot justify — one without a receipt, a clear purpose, or a benefit to the ward — can be disallowed and charged back to the guardian personally. That is why careful records are not optional in this role.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Gavel className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">The estate side is where the paperwork lives</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    A guardian of the person files a yearly report on the ward&apos;s well-being. A guardian of the estate must post a bond, file an inventory, and produce a court accounting backed by documentation — with the burden on the guardian to show every disbursement was proper. If you are serving as guardian of the estate, treat recordkeeping as part of the job from day one.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Can One Person Be Both? */}
            <h2 id="both-or-split" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Can One Person Be Both?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Yes. Illinois courts routinely appoint a single person as both guardian of the person and guardian of the estate — this is the most common arrangement in family cases, where one spouse or adult child steps in to handle everything for a loved one. The same person makes the care decisions and manages the money, which keeps things simple and coordinated.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              But the two roles do not have to travel together. A court can <strong>split them</strong>, appointing one person as guardian of the person and a different person as guardian of the estate. It can also appoint <strong>co-guardians</strong> who serve together in either role. Splitting the roles can make sense when the person best suited to hands-on caregiving is not the person best suited to managing investments and filing court accountings — or when family dynamics make a check-and-balance between two people the healthier arrangement.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When deciding how to allocate the roles, courts and families weigh a few things: who has the time and temperament for daily caregiving, who has the financial competence and diligence for the estate&apos;s recordkeeping, whether any conflicts of interest exist, and what the ward themselves would have wanted. There is no single right answer — the goal is the arrangement that best serves the ward. Our{' '}
              <Link href="/guardianship/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Illinois guardianship overview
              </Link>{' '}
              walks through how these appointments are structured.
            </p>

            {/* 5. Limited vs. Plenary */}
            <h2 id="limited-vs-plenary" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Limited vs. Plenary Guardianship
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Whether over the person or the estate, a guardianship can be either <strong>limited</strong> or <strong>plenary</strong> (full). Illinois law does not treat these as interchangeable. Under 755 ILCS 5/11a-12, courts must order the <strong>least restrictive</strong> form of guardianship consistent with the ward&apos;s needs — meaning the court should take away only as much of the ward&apos;s decision-making as their condition genuinely requires, and no more.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Limited Guardian</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
                  Authority is confined to the specific areas the court spells out — for example, only certain medical decisions, or only management of a particular account. The ward keeps the right to make every other decision on their own. This is the arrangement Illinois courts favor whenever the ward can handle part of their own affairs.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <ShieldCheck className="w-8 h-8 text-[#4a708b] mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Plenary Guardian</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
                  Authority covers all of the decisions within the guardianship — every personal decision for a plenary guardian of the person, or all of the ward&apos;s finances for a plenary guardian of the estate. Courts reserve plenary guardianship for cases where the ward cannot make decisions across the board.
                </p>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The limited-versus-plenary choice applies independently to each role. A ward might have a limited guardian of the estate — someone who manages a single inherited account while the ward handles their own everyday spending — alongside a plenary guardian of the person, or any other combination the court finds appropriate. The touchstone is always the least restrictive arrangement that keeps the ward safe.
            </p>

            {/* 6. When You Need a Guardian of the Estate */}
            <h2 id="when-estate-needed" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              When You Need a Guardian of the Estate
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The need for a guardian of the estate is driven by one thing: <strong>assets</strong>. A guardian of the estate exists to manage and protect property, so the question is simply whether the ward has property that must be managed under court supervision.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: '1',
                  title: 'The ward has accounts, real estate, or investments',
                  body: 'Bank and brokerage accounts, a home or other real estate, and investment holdings all need active management — bills paid, taxes filed, property maintained, and assets protected from waste or exploitation. When a ward owns these and can no longer manage them, a guardian of the estate is typically required.',
                },
                {
                  num: '2',
                  title: 'The ward receives an inheritance or a settlement',
                  body: 'A common trigger is a sudden influx of money the ward cannot manage on their own — an inheritance, a personal-injury settlement, or a lawsuit recovery. That money has to be received, safeguarded, and used for the ward\'s benefit under court oversight, which is exactly what a guardian of the estate is for.',
                },
                {
                  num: '3',
                  title: 'The ward has income or benefits that must be managed',
                  body: 'Pensions, retirement distributions, and other income streams may call for a guardian of the estate to receive and apply them properly — though some public benefits are handled instead through a representative payee, which can reduce or eliminate the need on that front.',
                },
                {
                  num: '4',
                  title: 'There are no assets to manage',
                  body: 'Where a ward has little or no property, a guardian of the estate may not be needed at all. In that situation a person-only guardianship — a guardian of the person and nothing more — is often the right, least burdensome fit, and an estate guardian can always be added later if the ward comes into money.',
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

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are weighing whether an adult loved one needs a guardian of the estate, our guide to{' '}
              <Link href="/guardianship/#adult" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                adult guardianship in Illinois
              </Link>{' '}
              covers the eligibility and process in more detail.
            </p>

            {/* 7. The Accounting Duty */}
            <h2 id="the-accounting-duty" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The Accounting Duty and Why It Matters
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For a guardian of the estate, the court accounting is the heart of the job. Under 755 ILCS 5/24-11, the guardian must file an accounting within <strong>30 days after the first anniversary</strong> of the appointment, and then on the schedule the court sets — usually annually, though the court can order a different interval. Each accounting lays out everything the estate received and everything the guardian spent or distributed during the period.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The reason this matters so much is the burden of proof. When the court reviews an accounting, it is the <strong>guardian who must show that each disbursement was proper</strong> — that the money went to the ward&apos;s benefit and was supported by records. Anything the guardian cannot document or justify can be disallowed and charged back to the guardian personally. Good recordkeeping is the difference between an accounting that is approved routinely and one that becomes a problem.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Common accounting pitfalls</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    The traps are almost always documentation traps: commingling the ward&apos;s money with your own, cash withdrawals without receipts, payments to family members that are not clearly for the ward&apos;s benefit, and missing the filing deadline. Keep the ward&apos;s funds in a separate account, save every receipt, and calendar the accounting dates from the start.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Because these filings are exacting and the stakes are personal, many guardians choose to have a firm handle the compliance work. Illinois Estate Law offers a structured guardianship compliance service that keeps inventories, accountings, and annual filings on track and correctly documented — so guardians meet their duties without navigating the paperwork alone. You can read more about how that support is structured, along with fee details, on our{' '}
              <Link href="/guardianship/#compliance" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardianship compliance
              </Link>{' '}
              page.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Serving as Guardian of the Estate?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps guardians handle inventories, court accountings, and annual filings correctly and on time — so the burden of proving each disbursement was proper never becomes a courtroom problem. Visit our guardianship page for the compliance service and its pricing.
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
                  Guardianship Services &amp; Pricing
                </Link>
              </div>
            </div>

            {/* 8. Guardianship of a Minor's Estate */}
            <h2 id="minors" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Guardianship of a Minor&apos;s Estate
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Guardianship of the estate is not only for incapacitated adults. It also comes up whenever a <strong>minor child</strong> receives money or property that must be managed under court supervision. A child cannot legally hold and manage significant assets on their own, so when a minor is due funds beyond a modest amount, the court often requires a guardian of the estate to receive, protect, and apply those funds for the child&apos;s benefit until they come of age.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This most commonly arises when a child inherits from a relative, is named a beneficiary of a life insurance policy or account, or receives a settlement from a personal-injury or wrongful-death claim. In these cases the guardian of the minor&apos;s estate carries the same core duties as any estate guardian — a bond, an inventory, and periodic court accountings — with the same rule that the guardian must be able to prove each disbursement was proper and for the child&apos;s benefit.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A guardianship of a minor&apos;s estate is distinct from questions about a minor&apos;s custody and care. For how the person and estate sides differ across ages and situations, see our companion guide on{' '}
              <Link href="/blog/adult-vs-minor-guardianship-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                adult vs. minor guardianship in Illinois
              </Link>
              .
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
              If you are deciding whether a loved one needs a guardian of the person, a guardian of the estate, or both, the right starting point is a clear picture of their care needs and their assets. A person-only guardianship is often enough where there is little property to manage; once accounts, real estate, or an inheritance are in the picture, the estate side — with its bond, inventory, and accountings — usually comes into play.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are already serving, or about to serve, as a guardian of the estate, the most important thing you can do is get your recordkeeping and court filings right from the outset. The burden of proving each disbursement was proper falls on you, and clean documentation is what makes that burden manageable.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For more on how the process works and the related situations families face, see our guides on{' '}
              <Link href="/blog/how-guardianship-works-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how guardianship works in Illinois
              </Link>
              ,{' '}
              <Link href="/blog/adult-vs-minor-guardianship-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                adult vs. minor guardianship
              </Link>
              , and{' '}
              <Link href="/blog/what-happens-when-guardianship-is-contested-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                what happens when guardianship is contested
              </Link>
              .
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Guardianship Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families establish guardianships of the person and the estate, and keeps guardians in compliance with their inventory, accounting, and annual reporting duties. Visit our guardianship page for the full compliance service and pricing.
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
                    href: '/blog/adult-vs-minor-guardianship-illinois/',
                    label: 'Adult vs. Minor Guardianship in Illinois',
                  },
                  {
                    href: '/blog/what-happens-when-guardianship-is-contested-illinois/',
                    label: 'What Happens When Guardianship Is Contested?',
                  },
                  {
                    href: '/blog/guardianship-vs-power-of-attorney-illinois/',
                    label: 'Guardianship vs. Power of Attorney in Illinois',
                  },
                  {
                    href: '/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/',
                    label: 'What Happens If You Become Incapacitated Without a Plan?',
                  },
                  {
                    href: '/blog/do-you-really-need-a-power-of-attorney-in-illinois/',
                    label: 'Do You Really Need a Power of Attorney in Illinois?',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois guardianship law is complex and fact-specific — procedures and requirements vary by county and individual circumstances. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Need Help Setting Up or Managing a Guardianship?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and get help establishing a guardianship of the person or estate — and staying in compliance with every court accounting and annual report.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/guardian-of-the-person-vs-estate-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/guardian-of-the-person-vs-estate-illinois/')}&text=${encodeURIComponent('Guardian of the person vs. guardian of the estate in Illinois — the difference and the duties')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/guardian-of-the-person-vs-estate-illinois/')}`}
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
