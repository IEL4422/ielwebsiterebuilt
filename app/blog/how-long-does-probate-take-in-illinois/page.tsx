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
  Timer,
  CircleX as XCircle,
  Scale,
  Building2,
  CalendarDays,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-long-does-probate-take-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-probate', title: 'What Is Probate and When Does It Start?', level: 2, numeration: '2' },
    {
      id: 'phase-by-phase',
      title: 'Illinois Probate: Phase-by-Phase Timeline',
      level: 2,
      numeration: '3',
      children: [
        { id: 'phase-1', title: 'Phase 1: Opening the Estate (Weeks 1–4)', level: 3, numeration: '3.1' },
        { id: 'phase-2', title: 'Phase 2: Notice to Creditors & Beneficiaries (Months 1–7)', level: 3, numeration: '3.2' },
        { id: 'phase-3', title: 'Phase 3: Gathering and Valuing Assets (Ongoing)', level: 3, numeration: '3.3' },
        { id: 'phase-4', title: 'Phase 4: Paying Debts and Taxes (Months 6–12)', level: 3, numeration: '3.4' },
        { id: 'phase-5', title: 'Phase 5: Final Accounting and Distribution (Months 12–18)', level: 3, numeration: '3.5' },
      ],
    },
    { id: 'cook-county', title: 'Cook County Probate: What to Expect in Chicago', level: 2, numeration: '4' },
    { id: 'delay-factors', title: 'Factors That Make Illinois Probate Take Longer', level: 2, numeration: '5' },
    { id: 'faster-alternatives', title: 'Summary Probate and Small Estate Affidavit', level: 2, numeration: '6' },
    { id: 'avoid-probate', title: 'How to Avoid Probate Entirely in Illinois', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const phases = [
    {
      id: 'phase-1',
      number: '01',
      title: 'Opening the Estate',
      duration: 'Weeks 1–4',
      color: 'blue',
      summary: 'File the petition, admit the will, and appoint the executor.',
      detail: `Before any formal probate steps can occur, someone must petition the Circuit Court in the county where the decedent lived at death. For Chicago-area estates, that means the Circuit Court of Cook County, Probate Division. The petition asks the court to admit the will to probate (or open an intestate estate if there is no will) and to appoint an executor or administrator.

In Cook County, the court typically schedules an initial hearing within two to four weeks of the petition being filed. At that hearing — often called the "prove-up" — the judge reviews the will's formal validity, admits it to probate (or declines to), and issues Letters of Office to the executor. Letters of Office are the legal credential that gives the executor authority to act on behalf of the estate.

In practice, this opening phase goes smoothly when the will is unambiguous, the proposed executor is willing and qualified, and no interested party objects. Delays at this stage most commonly arise from locating the original will, identifying and notifying interested parties, and any initial disputes about who should be appointed executor.`,
    },
    {
      id: 'phase-2',
      number: '02',
      title: 'Notice to Creditors and Beneficiaries',
      duration: 'Months 1–7',
      color: 'amber',
      summary: 'Publish notice to creditors and wait out the mandatory claim period.',
      detail: `Once the estate is open, the executor must publish a Notice to Creditors in a local newspaper for three consecutive weeks. This notice alerts potential creditors that the estate is in probate and informs them of the deadline to submit claims.

Under 755 ILCS 5/18-3, creditors have six months from the date of the first publication of notice — or two years from the date of death, whichever is shorter — to file claims against the estate. In practice, the six-month publication clock is almost always the binding deadline.

This mandatory waiting period is the single biggest structural reason that Illinois probate takes as long as it does. Even if every other aspect of estate administration goes perfectly, the executor cannot safely distribute assets to beneficiaries until this creditor claim window closes. Distributing before the deadline expires risks personal liability to the executor if a valid creditor claim comes in afterward.

The executor must also send formal notice to all beneficiaries named in the will and all heirs at law. Beneficiaries have rights during probate — including the right to request an inventory and to object to the executor's conduct — so proper notice is both a legal requirement and a practical safeguard.`,
    },
    {
      id: 'phase-3',
      number: '03',
      title: 'Gathering, Valuing, and Managing Assets',
      duration: 'Ongoing (Months 1–12)',
      color: 'blue',
      summary: 'Inventory all estate assets, obtain appraisals, and manage the estate during administration.',
      detail: `While the creditor notice period runs, the executor has substantial work to do. Under Illinois law, the executor must file a verified inventory of all probate assets with the court within 60 days of receiving Letters of Office (though extensions are routinely granted in Cook County).

The inventory must list every asset owned solely in the decedent's name, along with its fair market value as of the date of death. For straightforward estates — bank accounts, a brokerage account, a car — this is relatively simple. For estates that include real estate, a business interest, collectibles, or unusual assets, independent appraisals are typically required, which takes time and costs money.

Beyond inventorying assets, the executor must actively manage the estate during probate. This includes: maintaining real estate (paying property taxes, utilities, insurance), managing investment accounts, filing and paying the decedent's final income tax return, obtaining a federal Employer Identification Number (EIN) for the estate, and opening an estate bank account to hold and disburse funds.

If the estate includes rental property or a business, ongoing management responsibilities can extend and complicate the probate process considerably.`,
    },
    {
      id: 'phase-4',
      number: '04',
      title: 'Paying Debts, Expenses, and Taxes',
      duration: 'Months 6–12',
      color: 'amber',
      summary: 'Pay valid creditor claims, administrative costs, and any estate tax owed.',
      detail: `After the creditor claim window closes, the executor reviews all submitted claims and pays those that are valid. Illinois law establishes a specific priority order for paying claims: funeral expenses come first, then estate administration costs, then taxes, then medical expenses from the final illness, then other creditor claims in order.

If estate assets are insufficient to pay all claims, Illinois law determines which claims are paid (and in what order) and which may go unpaid — a situation called an "insolvent estate." In that case, beneficiaries may receive nothing from the probate estate.

Tax obligations can be a significant source of delay. The executor must file the decedent's final federal and Illinois income tax returns (due April 15 of the year following death). If the estate generated income during administration, an estate income tax return (Form 1041) may also be required.

For larger estates, Illinois estate tax is a critical consideration. Illinois imposes an estate tax on taxable estates exceeding $4 million (as of 2026). If estate tax is owed, the return is due nine months after the date of death, with a six-month extension available. Until the estate tax liability is settled with the Illinois Department of Revenue, the estate cannot be fully closed. Estates subject to both federal estate tax (triggered at approximately $13.6 million in 2026) and Illinois estate tax face the longest tax-related delays.`,
    },
    {
      id: 'phase-5',
      number: '05',
      title: 'Final Accounting and Distribution',
      duration: 'Months 12–18',
      color: 'blue',
      summary: 'File the final accounting, distribute assets to beneficiaries, and close the estate.',
      detail: `Once all debts, taxes, and administrative expenses have been paid, the executor prepares a final accounting — a detailed report to the court showing all assets received, all expenses paid, and all distributions proposed. Beneficiaries must be given notice of the final accounting and have an opportunity to object.

In many Illinois probate cases, beneficiaries sign waivers of the final accounting, agreeing to skip the formal court approval in exchange for receiving their inheritance promptly. When waivers are obtained, the closing process can move significantly faster. When waivers are not signed — or when a beneficiary objects to the accounting — a court hearing is required, which adds time.

After the court approves the final accounting (or waivers are obtained), the executor distributes the remaining estate assets to the beneficiaries according to the will or intestate succession laws. Real estate requires the execution and recording of a deed. Personal property and financial accounts are transferred by assignment, transfer authorization, or check.

The final step is filing a "Proof of Closing" with the court, formally ending the estate. Once filed, the executor's authority terminates and the probate case is closed.`,
    },
  ];

  const delayFactors = [
    {
      title: 'Will contests or beneficiary disputes',
      impact: 'severe',
      detail: 'A contested will can add 1–4 years to the probate process. Even if the contest ultimately fails, the litigation must run its course before the estate can be distributed.',
    },
    {
      title: 'Illinois estate tax liability',
      impact: 'significant',
      detail: 'Estates over $4 million (the Illinois exemption in 2026) must pay Illinois estate tax. The return, negotiation with the Illinois Department of Revenue, and receipt of a tax clearance certificate can extend administration by 6–18 months.',
    },
    {
      title: 'Out-of-state or difficult-to-value assets',
      impact: 'significant',
      detail: 'Real estate in other states requires ancillary probate proceedings in each state. Closely held business interests, intellectual property, or unusual collectibles require specialized appraisals and can delay the inventory phase.',
    },
    {
      title: 'Missing or hard-to-locate heirs',
      impact: 'moderate',
      detail: 'Illinois law requires that all interested parties be notified. If heirs are unknown or cannot be located, the court may require publication notice and an extended search, both of which take time.',
    },
    {
      title: 'Real estate that needs to be sold',
      impact: 'moderate',
      detail: 'Selling estate real estate during probate takes longer than a standard sale. The executor must obtain court approval in some circumstances, and real estate market conditions affect how quickly property sells.',
    },
    {
      title: 'Contested creditor claims',
      impact: 'moderate',
      detail: 'If the executor disputes a creditor\'s claim, that dispute may require a separate hearing or litigation before the estate can be finalized.',
    },
    {
      title: 'Executor unavailability or inexperience',
      impact: 'moderate',
      detail: 'An executor who lives out of state, has a demanding job, or is unfamiliar with probate procedures will move more slowly. Hiring an Illinois probate attorney helps keep the process on track.',
    },
  ];

  const faqs = [
    {
      question: 'What is the minimum time probate takes in Illinois?',
      answer: 'The mandatory six-month creditor notice period under 755 ILCS 5/18-3 sets an effective minimum. Even if every step goes perfectly — the will is uncontested, assets are easy to value, no tax issues arise, and all beneficiaries cooperate — you still need to wait out this creditor window before making final distributions. Adding time to open the estate, gather assets, prepare accountings, and close, a realistic minimum for a simple Illinois probate is around eight to ten months. Anything faster than that is the exception, not the rule.',
    },
    {
      question: 'How long does Cook County probate take compared to other Illinois counties?',
      answer: "Cook County's Probate Division handles a very high volume of cases, which can affect scheduling. Initial hearings typically occur two to four weeks after filing, and court dates for accountings or other matters may take additional weeks to schedule. Downstate counties often have faster court scheduling, though the underlying statutory timelines — especially the six-month creditor period — apply equally everywhere in Illinois. The practical difference between Cook County and smaller counties is usually measured in weeks, not months.",
    },
    {
      question: 'Can probate be sped up in Illinois?',
      answer: "Yes, within limits. The mandatory creditor notice period cannot be shortened — it is set by statute. However, several steps can reduce delays: hiring an experienced Illinois probate attorney who knows Cook County court procedures, obtaining beneficiary waivers to skip formal accounting hearings, acting promptly to file the petition and inventory, and keeping meticulous records throughout. Pre-planning also matters: a well-drafted will that clearly identifies the executor, grants appropriate powers, and waives bond makes the process smoother from the start.",
    },
    {
      question: "Does Illinois require court approval to sell the deceased person's home during probate?",
      answer: 'It depends on how the estate is administered. Under independent administration (the most common form in Illinois), an executor with broad powers granted by the will can sell real estate without court approval. Under supervised administration, court approval is typically required. The will itself can expand or limit the executor\'s authority. An experienced probate attorney can advise whether court approval is needed in your specific situation and help structure the sale to minimize delays.',
    },
    {
      question: 'What happens if the estate cannot pay all its debts?',
      answer: "If the probate estate's assets are not enough to pay all valid debts, the estate is insolvent. Illinois law (755 ILCS 5/18-10) establishes a strict priority order: funeral expenses, estate administration costs, taxes, and final illness medical expenses are paid first. If funds run out before all creditors are paid, lower-priority creditors receive nothing — and beneficiaries typically receive nothing either. Beneficiaries are never personally responsible for the decedent's debts solely because they are named in the will, as long as they haven't already received improperly distributed assets.",
    },
    {
      question: 'Can I avoid probate in Illinois for my estate?',
      answer: 'Yes — and many Illinois families do. The most common approaches include: (1) a revocable living trust, which holds assets during your lifetime and distributes them at death without court involvement; (2) joint tenancy with right of survivorship, which passes real estate or accounts directly to the surviving co-owner; (3) beneficiary designations on financial accounts, retirement accounts, and life insurance; and (4) Transfer-on-Death Instruments (TODIs) for Illinois real estate. An estate planning attorney can evaluate which combination of tools makes sense for your family and assets.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Long Does Probate Take in Illinois? 2026 Timeline Guide',
    description:
      'Understand how long probate takes in Illinois and Cook County — from opening the estate through final distribution. Includes a phase-by-phase timeline, delay factors, and alternatives to probate.',
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
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/how-long-does-probate-take-in-illinois/',
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
                  Probate
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                How Long Does Probate Take in Illinois?
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Illinois probate typically takes 9–18 months for an average estate — and much longer for complex ones. The mandatory six-month creditor notice period alone sets a floor that no executor can shorten. Here is a phase-by-phase breakdown of exactly what drives the timeline.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>May 27, 2026</time>
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
                <Timer className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Illinois probate takes a minimum of 8–10 months for the simplest estates and 9–18 months for a typical estate in Cook County. Complex estates — those involving estate tax, contested wills, real estate sales, or out-of-state assets — commonly take 2–4 years.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    The single biggest driver of this timeline is the mandatory six-month creditor notice period under Illinois law. The executor cannot make final distributions to beneficiaries until that window closes. Everything else — gathering assets, paying debts, filing taxes, preparing accountings — piles on top of that floor.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide walks through each phase of the Illinois probate process, explains what factors extend the timeline, describes faster alternatives for smaller estates, and shows how careful estate planning can help your family avoid probate entirely.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reference timeline */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Probate Timeline at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Simple estate, no disputes', time: '8–12 months', color: 'green' },
                  { label: 'Average Cook County estate', time: '12–18 months', color: 'amber' },
                  { label: 'Complex or contested estate', time: '2–4+ years', color: 'red' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-4 border text-center ${
                      item.color === 'green'
                        ? 'bg-green-50 border-green-200'
                        : item.color === 'amber'
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <p
                      className={`text-2xl font-bold mb-1 font-['Plus_Jakarta_Sans'] ${
                        item.color === 'green'
                          ? 'text-green-700'
                          : item.color === 'amber'
                          ? 'text-amber-700'
                          : 'text-red-700'
                      }`}
                    >
                      {item.time}
                    </p>
                    <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. What Is Probate */}
            <h2 id="what-is-probate" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is Probate in Illinois and When Does It Start?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Probate is the court-supervised process for settling a deceased person&apos;s estate — validating the will, appointing an executor, paying debts, and distributing assets to beneficiaries. In Illinois, probate is handled by the Circuit Court in the county where the decedent lived at the time of death. For Chicago residents and most surrounding suburbs, that means the{' '}
              <strong>Circuit Court of Cook County, Probate Division</strong>.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The clock on probate starts when the executor (or another interested party) files a petition to open the estate with the appropriate Circuit Court. This can happen any time after the death, but Illinois law gives the executor up to <strong>30 days</strong> after learning of the decedent&apos;s death to file the will with the court (755 ILCS 5/6-1). In practice, most executors file within the first few weeks.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Not all estates need to go through probate</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans']">
                    Illinois probate is only required for assets held solely in the decedent&apos;s name with no automatic transfer mechanism. Assets held in joint tenancy, payable-on-death accounts, retirement accounts with named beneficiaries, life insurance, and assets held in a living trust all pass outside of probate entirely — regardless of what the will says. See our guide on{' '}
                    <Link href="/blog/when-is-probate-required-in-illinois/" className="text-amber-800 underline font-medium">
                      when probate is required in Illinois
                    </Link>{' '}
                    for a full breakdown.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Phase by Phase */}
            <h2 id="phase-by-phase" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Illinois Probate: Phase-by-Phase Timeline
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Probate does not proceed in a straight line — several phases overlap, and the overall length depends on how smoothly each one goes. Here is how the process typically unfolds.
            </p>

            <div className="space-y-3 my-8">
              {phases.map((phase, index) => (
                <div key={index} id={phase.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedPhase(expandedPhase === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#33414E] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                        {phase.number}
                      </div>
                      <div className="text-left">
                        <span className="font-semibold text-gray-900 font-['Plus_Jakarta_Sans']">{phase.title}</span>
                        <span className="ml-3 text-xs px-2.5 py-0.5 rounded-full bg-[#4a708b]/10 text-[#4a708b] font-medium font-['Plus_Jakarta_Sans']">
                          {phase.duration}
                        </span>
                      </div>
                    </div>
                    {expandedPhase === index ? (
                      <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    )}
                  </button>
                  {expandedPhase === index && (
                    <div className="px-6 py-5 bg-white border-t border-gray-200">
                      <p className="text-gray-600 text-sm italic mb-4 font-['Plus_Jakarta_Sans']">{phase.summary}</p>
                      {phase.detail.split('\n\n').map((para, pi) => (
                        <p key={pi} className="text-gray-700 mb-4 leading-relaxed text-sm font-['Plus_Jakarta_Sans']">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 4. Cook County */}
            <h2 id="cook-county" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Cook County Probate: What to Expect in Chicago
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The Circuit Court of Cook County&apos;s Probate Division handles one of the largest volumes of probate filings in the Midwest. While the underlying Illinois statutes apply equally statewide, Cook County has its own local rules and practical realities that affect timeline.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#33414E] text-white rounded-xl p-6">
                <Building2 className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Cook County Court Specifics</h3>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                    Probate Division located in the Richard J. Daley Center, Chicago
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                    Initial hearing typically scheduled 2–4 weeks after petition filing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                    Case search available online via the Cook County Clerk of the Circuit Court
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                    E-filing required for attorneys; paper filing available for self-represented parties
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                    Independent administration (waiving bond and formal accounting) available and common
                  </li>
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-6">
                <CalendarDays className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Typical Cook County Timeline</h3>
                <div className="space-y-3 text-sm font-['Plus_Jakarta_Sans']">
                  {[
                    { label: 'Petition to initial hearing', time: '2–4 weeks' },
                    { label: 'Creditor notice period', time: '6 months (statutory)' },
                    { label: 'Inventory filing deadline', time: '60 days after Letters of Office' },
                    { label: 'Final tax filings cleared', time: '9–15 months after death' },
                    { label: 'Final accounting and distribution', time: '12–18 months total' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center gap-4 pb-2 border-b border-white/20 last:border-0">
                      <span className="text-white/85">{row.label}</span>
                      <span className="font-bold text-white whitespace-nowrap">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Cook County&apos;s volume means court dates for contested matters or accounting hearings may take several additional weeks to schedule compared to less busy counties. However, for straightforward estates where beneficiaries sign waivers and the executor works efficiently, Cook County probate can be completed on the faster end of the 9–18 month range.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">Independent vs. Supervised Administration in Illinois</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans']">
                    Illinois allows estates to be administered &ldquo;independently&rdquo; — meaning the executor can pay debts, manage assets, and even sell property without going back to the court for approval at every step. This significantly reduces timeline and legal costs. Most well-drafted Illinois wills grant independent administration authority. If your loved one died without a will or with a will that does not address this, &ldquo;supervised&rdquo; administration may be required, which involves more court oversight and more time.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Delay Factors */}
            <h2 id="delay-factors" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Factors That Make Illinois Probate Take Longer
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Several factors can push a probate well beyond the typical 12–18 month range. Understanding these in advance helps families plan accordingly and, in some cases, take steps to mitigate the delays.
            </p>

            <div className="space-y-3 my-8">
              {delayFactors.map((factor, i) => (
                <div
                  key={i}
                  className={`border-l-4 p-5 rounded-r-lg ${
                    factor.impact === 'severe'
                      ? 'bg-red-50 border-red-500'
                      : factor.impact === 'significant'
                      ? 'bg-amber-50 border-amber-400'
                      : 'bg-blue-50 border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-bold font-['Plus_Jakarta_Sans'] text-gray-900">{factor.title}</h3>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap font-['Plus_Jakarta_Sans'] ${
                        factor.impact === 'severe'
                          ? 'bg-red-100 text-red-700'
                          : factor.impact === 'significant'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {factor.impact === 'severe' ? 'Major delay' : factor.impact === 'significant' ? 'Significant delay' : 'Moderate delay'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{factor.detail}</p>
                </div>
              ))}
            </div>

            {/* 6. Faster Alternatives */}
            <h2 id="faster-alternatives" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Summary Probate and Small Estate Affidavit: Faster Alternatives
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Not every Illinois estate requires the full probate process. Two streamlined alternatives are available for smaller estates, and they can resolve in weeks rather than months.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                <FileText className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-bold text-lg text-emerald-800 mb-2 font-['Plus_Jakarta_Sans']">
                  Small Estate Affidavit
                </h3>
                <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-3">
                  Under 755 ILCS 5/25-1, if the total value of the probate estate (excluding non-probate assets) is <strong>$100,000 or less</strong>, a qualified heir can present a small estate affidavit directly to banks, financial institutions, and others holding assets — bypassing probate court entirely.
                </p>
                <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-3">
                  The heir must wait <strong>30 days</strong> after the decedent&apos;s death before presenting the affidavit. If the institution accepts it (most do for accounts under the threshold), the asset transfers in days, not months.
                </p>
                <Link
                  href="/blog/how-to-complete-a-small-estate-affidavit-in-illinois/"
                  className="inline-flex items-center gap-2 text-emerald-700 font-medium text-sm hover:underline font-['Plus_Jakarta_Sans']"
                >
                  Full guide: How to complete a small estate affidavit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-xl border border-blue-200">
                <Scale className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-lg text-blue-800 mb-2 font-['Plus_Jakarta_Sans']">
                  Summary Probate
                </h3>
                <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-3">
                  Summary probate (755 ILCS 5/9-8) is available when the entire estate is <strong>valued at $100,000 or less</strong> and goes entirely to the surviving spouse. It is a simplified court proceeding — no full inventory, no creditor publication period, no formal accounting — that can close in as little as one to two months.
                </p>
                <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  This process is only available when the estate qualifies by value and the distribution goes to the spouse. It is not available for estates with other beneficiaries, even if the estate is small.
                </p>
                <Link
                  href="/blog/what-is-summary-probate-in-cook-county-illinois/"
                  className="inline-flex items-center gap-2 text-blue-700 font-medium text-sm hover:underline font-['Plus_Jakarta_Sans'] mt-3"
                >
                  Full guide: Summary probate in Cook County
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 7. Avoid Probate */}
            <h2 id="avoid-probate" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Avoid Probate Entirely in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For families who want to spare their loved ones a year or more of court proceedings, probate avoidance is the most powerful estate planning tool available. Here are the main strategies Illinois residents use.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: '1',
                  title: 'Revocable Living Trust',
                  body: 'A revocable living trust holds your assets during your lifetime and directs their distribution at death — entirely outside of probate. Your successor trustee distributes assets to beneficiaries according to the trust terms, without any court involvement. A trust also avoids the public nature of probate (wills become public record; trusts do not), and it can include detailed provisions for how and when beneficiaries receive their inheritance.',
                  link: '/chicago-revocable-trusts-lawyer/',
                  linkLabel: 'Learn about our revocable trust services',
                },
                {
                  num: '2',
                  title: 'Transfer-on-Death Instrument (TODI) for Real Estate',
                  body: 'Illinois law (765 ILCS 170) allows homeowners to record a Transfer-on-Death Instrument, naming a beneficiary who automatically inherits the property at death without probate. Unlike joint tenancy, a TODI does not give the beneficiary any current interest in the property — you can sell, mortgage, or revoke the TODI at any time. It is one of the most cost-effective probate-avoidance tools for Illinois real estate.',
                  link: '/blog/how-transfer-on-death-instruments-work-in-illinois/',
                  linkLabel: 'How TODIs work in Illinois',
                },
                {
                  num: '3',
                  title: 'Beneficiary Designations on Financial Accounts',
                  body: 'Retirement accounts (IRAs, 401(k)s), life insurance, payable-on-death bank accounts, and transfer-on-death brokerage accounts all pass directly to the named beneficiary outside of probate. For many Illinois families, these non-probate assets represent the majority of their wealth. Keeping beneficiary designations current and coordinated with the rest of the estate plan is essential.',
                  link: '/blog/beneficiary-designations-override-your-will-illinois/',
                  linkLabel: 'Why beneficiary designations override your will',
                },
                {
                  num: '4',
                  title: 'Joint Tenancy with Right of Survivorship',
                  body: 'Property held in joint tenancy passes automatically to the surviving joint tenant at death — no probate required. This is a common approach for married couples who own a home together. However, joint tenancy has significant drawbacks: it gives the co-owner immediate rights in the property, it can create gift tax issues when adding a non-spouse, and it may not achieve your goals if both joint tenants die simultaneously.',
                  link: '/blog/how-to-hold-title-to-your-home-in-illinois/',
                  linkLabel: 'How to hold title to your Illinois home',
                },
              ].map((item, i) => (
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
                Trying to Avoid Putting Your Family Through Probate?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families create revocable trusts, Transfer-on-Death Instruments, and coordinated estate plans that keep assets out of probate court. Flat-fee pricing — you always know what you&apos;ll pay.
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
              Whether you are an executor trying to understand how long the process ahead will take, a family member wondering when you will receive an inheritance, or someone planning ahead to spare your own family the burden of probate — the most important step is the same: get informed and act early.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are navigating an active probate in Cook County or elsewhere in Illinois, see our guides on{' '}
              <Link href="/blog/how-much-does-probate-cost-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how much probate costs in Illinois
              </Link>
              ,{' '}
              <Link href="/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                a comprehensive guide for executors
              </Link>
              , and{' '}
              <Link href="/blog/how-to-open-an-estate-bank-account-for-probate-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how to open an estate bank account for probate
              </Link>
              . If you want to plan ahead to avoid putting your family through this process, our{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable trust services
              </Link>{' '}
              and{' '}
              <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                will drafting
              </Link>{' '}
              pages explain your options.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Probate Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Whether you are currently serving as an executor or planning ahead to protect your family from a lengthy probate process, Illinois Estate Law can help. We guide clients through Cook County probate and craft estate plans designed to avoid it — all on a transparent, flat-fee basis.
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
                  href="/chicago-probate-lawyer/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  Our Probate Services
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
                Related Illinois Probate &amp; Estate Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: '/blog/when-is-probate-required-in-illinois/', label: 'When Is Probate Required in Illinois?' },
                  { href: '/blog/how-much-does-probate-cost-in-illinois/', label: 'How Much Does Probate Cost in Illinois?' },
                  { href: '/blog/what-is-summary-probate-in-cook-county-illinois/', label: 'What Is Summary Probate in Cook County?' },
                  { href: '/blog/how-to-complete-a-small-estate-affidavit-in-illinois/', label: 'How to Complete a Small Estate Affidavit in Illinois' },
                  { href: '/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/', label: "So You've Been Named Executor: A Comprehensive Guide" },
                  { href: '/blog/how-to-open-an-estate-bank-account-for-probate-in-illinois/', label: 'How to Open an Estate Bank Account for Probate' },
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois probate law is complex and fact-specific — timelines and procedures vary by county, estate size, and individual circumstances. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Family from a Lengthy Probate?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and find out how a trust or other estate planning tool can keep your assets out of probate court.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-long-does-probate-take-in-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-long-does-probate-take-in-illinois/')}&text=${encodeURIComponent('How Long Does Probate Take in Illinois? A phase-by-phase timeline guide')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-long-does-probate-take-in-illinois/')}`}
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
