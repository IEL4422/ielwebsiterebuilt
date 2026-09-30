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
  Gavel,
  XCircle,
  ShieldAlert,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-remove-executor-illinois-probate';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    {
      id: 'executor-duties',
      title: 'What an Executor Is Supposed to Do in Illinois',
      level: 2,
      numeration: '2',
    },
    {
      id: 'grounds',
      title: 'Legal Grounds for Removing an Executor Under Illinois Law',
      level: 2,
      numeration: '3',
      children: [
        { id: 'waste-mismanagement', title: 'Waste, Embezzlement, or Mismanagement', level: 3, numeration: '3.1' },
        { id: 'neglect', title: 'Neglect or Refusal to Perform Duties', level: 3, numeration: '3.2' },
        { id: 'incapacity', title: 'Incapacity or Unsuitability', level: 3, numeration: '3.3' },
        { id: 'conflict', title: 'Self-Dealing or Conflict of Interest', level: 3, numeration: '3.4' },
        { id: 'other-grounds', title: 'Fraud, Felony Conviction, and Other Grounds', level: 3, numeration: '3.5' },
      ],
    },
    { id: 'who-can-file', title: 'Who Can File a Petition to Remove an Executor?', level: 2, numeration: '4' },
    { id: 'process', title: 'The Removal Process: Step by Step', level: 2, numeration: '5' },
    { id: 'after-removal', title: 'What Happens After an Executor Is Removed?', level: 2, numeration: '6' },
    { id: 'alternatives', title: 'Alternatives to Formal Removal', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const groundsList = [
    {
      id: 'waste-mismanagement',
      title: 'Waste, Embezzlement, or Mismanagement of Estate Assets',
      icon: '💰',
      detail: `The most serious and commonly litigated ground for removal is the mishandling of estate assets. Under 755 ILCS 5/23-2, an executor who wastes, embezzles, or otherwise mismanages estate property may be removed by the Circuit Court.

Waste means the negligent or intentional depletion of estate assets — for example, allowing real estate to fall into disrepair, failing to collect debts owed to the estate, or selling assets far below market value without court approval. Embezzlement means the executor is taking estate funds for personal use: writing checks to themselves, diverting estate accounts, or converting estate property.

You do not need to wait until money disappears. If the executor is taking actions that are likely to harm the estate — like entering into self-dealing transactions or refusing to liquidate depreciating assets — you can petition for removal before the damage is done.

Evidence used in these cases includes estate account statements, property records, receipts, bank transactions, and testimony about the executor's conduct. The probate court has broad authority to order the executor to restore any property they have wasted or embezzled.`,
    },
    {
      id: 'neglect',
      title: 'Neglect or Refusal to Perform Executor Duties',
      icon: '⏰',
      detail: `An executor who simply stops doing their job — or refuses to take the steps required by Illinois probate law — can be removed for neglect or failure to perform their duties (755 ILCS 5/23-2(b)).

This includes: failing to file the probate petition within a reasonable time, failing to provide the required creditor notice publication, refusing to file the estate inventory with the court, ignoring requests from beneficiaries for accountings, and failing to pursue or defend claims on behalf of the estate.

Courts distinguish between good-faith delays caused by estate complexity and willful inaction. An executor who has done nothing for 18 months while a probate case sits open, or who repeatedly misses court-ordered deadlines, is a strong candidate for removal. The court can also hold the executor in contempt for willful noncompliance before resorting to removal.`,
    },
    {
      id: 'incapacity',
      title: 'Incapacity or General Unsuitability',
      icon: '🏥',
      detail: `If the executor becomes mentally or physically incapacitated after appointment, the court can remove them even without any wrongdoing. Illinois probate courts have broad discretion to remove an executor who is "unsuitable" — a standard that goes beyond established misconduct to encompass situations where the executor simply cannot or will not do the job effectively.

Examples include: a diagnosis of dementia or severe mental illness that impairs the executor's decision-making, physical illness that makes it impossible to manage the estate, geographic relocation that makes Illinois estate administration impractical, or a pattern of poor judgment that falls short of outright misconduct but demonstrates the executor cannot manage the estate competently.

Courts will weigh the disruption of removing a serving executor against the benefit to the estate and its beneficiaries. Clear evidence of incapacity — such as a medical diagnosis or documented inability to manage basic tasks — makes removal much more straightforward.`,
    },
    {
      id: 'conflict',
      title: 'Self-Dealing or Conflict of Interest',
      icon: '⚖️',
      detail: `An executor owes a fiduciary duty to all beneficiaries of the estate equally. When an executor takes actions that benefit themselves at the expense of other beneficiaries — or acts in their own financial interest rather than the estate's — that is self-dealing, and it is grounds for removal.

Common examples include: an executor who is also a beneficiary and delays distribution to continue collecting executor fees; an executor who purchases estate property at below-market prices; an executor who steers estate business to their own company; or a co-executor who acts unilaterally to benefit one faction of beneficiaries over another.

Illinois courts take executor self-dealing seriously. Even the appearance of a conflict — where the executor stands to personally gain from a decision about the estate — can be enough to justify court scrutiny. Proving actual harm to the estate strengthens a removal petition significantly, but a court can remove an executor preemptively where a serious conflict of interest makes neutral administration impossible.`,
    },
    {
      id: 'other-grounds',
      title: 'Fraud, Felony Conviction, and Other Statutory Grounds',
      icon: '🔒',
      detail: `Illinois law (755 ILCS 5/23-2) lists additional grounds that justify removal, including:

Fraud or misrepresentation: An executor who lied to obtain their appointment, submitted false inventories or accountings, or concealed estate assets can be removed for fraud.

Felony conviction: A conviction of a felony — particularly one involving theft, fraud, or breach of fiduciary duty — is strong grounds for removal, as it goes directly to the executor's fitness to manage estate assets.

Failure to post bond: If the court ordered the executor to post a surety bond and they failed to do so within the required time, the court may remove them for non-compliance.

Endangering estate assets: Any conduct that unreasonably places estate assets at legal or financial risk — even if the executor has not yet caused actual harm — can justify removal where continued service poses a clear threat.`,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consult a Probate Attorney — Before Filing',
      desc: 'Removal petitions are contested proceedings. Before filing, an attorney can evaluate whether you have standing, whether your evidence meets the legal standard, and whether a less adversarial remedy (like a demand for accounting or a consent resignation) might achieve the same result more efficiently.',
    },
    {
      step: '02',
      title: 'File a Petition for Removal in the Circuit Court',
      desc: 'A petition to remove an executor is filed in the Circuit Court of the county where the probate estate is pending — for most Chicago-area estates, the Cook County Probate Division. The petition must identify the executor, set out the factual basis for removal under 755 ILCS 5/23-2, and request appointment of a successor.',
    },
    {
      step: '03',
      title: 'Serve All Interested Parties',
      desc: 'All persons who have appeared in the probate case — beneficiaries, creditors, and co-executors — must be served with the petition and given notice of the hearing. The executor being removed must also be personally served.',
    },
    {
      step: '04',
      title: 'The Court Hearing',
      desc: 'The Circuit Court holds an evidentiary hearing at which both sides can present evidence and testimony. The petitioner bears the burden of establishing grounds for removal by a preponderance of the evidence. The executor has the right to respond and contest the allegations.',
    },
    {
      step: '05',
      title: "The Court's Decision",
      desc: 'If the court finds grounds for removal, it enters an order removing the executor and revoking their Letters of Office. The court simultaneously appoints a successor executor (or administrator) to continue the administration. The removed executor must turn over all estate assets and records.',
    },
    {
      step: '06',
      title: 'Accounting and Recovery',
      desc: 'Following removal, the court typically orders the removed executor to file a final accounting. If they wasted or embezzled estate assets, the court can enter a judgment requiring them to restore those assets from their personal funds.',
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to remove an executor in Illinois?',
      answer: 'The timeline varies significantly by case complexity and court scheduling. A straightforward removal petition in Cook County Probate Court — where there is clear evidence and little dispute — can be resolved in 2 to 4 months. Contested removal proceedings, where the executor actively defends against the petition and both sides present evidence, can take 6 to 18 months. If you need emergency relief — for example, because the executor is actively dissipating estate assets — you can request a temporary restraining order or appointment of a special administrator to freeze the estate while the removal petition is pending.',
    },
    {
      question: 'Can an executor remove themselves voluntarily?',
      answer: 'Yes. An executor can resign at any time by filing a resignation with the probate court and serving notice on all interested parties. In many cases, raising the possibility of formal removal is enough to prompt a voluntary resignation, which avoids the cost and adversarial nature of a contested hearing. If you are a beneficiary with concerns about an executor, consulting an attorney about your options — including a demand letter or resignation request — before filing a petition is often the most efficient first step.',
    },
    {
      question: 'What is a "special administrator" in Illinois probate?',
      answer: "A special administrator is a court-appointed temporary fiduciary who manages the estate while a removal proceeding is pending or while the regular executor is unable to serve. If estate assets are at immediate risk — an executor is dissipating funds, key deadlines are approaching, or there is a gap in administration — you can ask the Circuit Court to appoint a special administrator to protect the estate while the removal case moves forward. The special administrator's authority is limited to preserving the estate; they do not wind up or distribute it.",
    },
    {
      question: 'Do I need a lawyer to file a petition to remove an executor?',
      answer: 'Technically, no — Illinois law does not require you to have an attorney to file a petition in probate court. In practice, however, removal proceedings are adversarial legal proceedings. The executor (and the estate itself) will almost certainly have legal representation. You will need to meet a legal burden of proof, present evidence correctly, and navigate Illinois probate procedure. Attempting this without an attorney significantly reduces your chances of success and can result in costly procedural mistakes. The stakes — the integrity of the entire estate administration — warrant professional representation.',
    },
    {
      question: "Can a beneficiary be awarded attorney fees if an executor is removed for misconduct?",
      answer: "In Illinois, attorney fees in probate are governed by equitable principles, and courts have discretion to award fees from estate assets when an executor's misconduct necessitated the removal proceeding. If the removed executor's conduct was egregious — outright embezzlement, fraud, or willful neglect — the court may order the removed executor to personally pay attorney fees incurred in connection with the removal, rather than charging them against the estate. Whether fees are awarded and against whom depends on the specific facts and the judge's exercise of discretion.",
    },
    {
      question: 'What happens to estate transactions made by an executor who is later removed?',
      answer: 'Generally, valid transactions completed by the executor before removal remain binding on the estate — third parties who dealt with the executor in good faith are protected. However, if the executor entered into transactions that violated their fiduciary duty (such as self-dealing sales of estate property at below-market prices), those transactions may be voidable. The successor executor or a beneficiary can petition the court to set aside fraudulent or self-dealing transactions and recover any losses to the estate. Illinois probate courts have broad equitable power to undo transactions that harmed the estate.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Remove an Executor in Illinois Probate: Grounds and Process',
    description:
      'Learn the legal grounds to remove an executor in Illinois, who has standing to file, the step-by-step court process, and what happens after removal. Includes FAQ.',
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
    datePublished: '2026-09-30',
    dateModified: '2026-09-30',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/how-to-remove-executor-illinois-probate/',
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
                How to Remove an Executor in Illinois Probate: Grounds, Process, and What to Expect
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                When an executor mismanages an estate, refuses to act, or has a disabling conflict of interest, Illinois probate law gives beneficiaries and other interested parties the right to petition the court for removal. Here is what you need to know before you file.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>September 30, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="article-summary" className="text-2xl font-bold mt-8 mb-4 font-['Plus_Jakarta_Sans']">
              Article Summary
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Illinois probate courts have statutory authority to remove an executor who wastes estate assets, neglects their duties, becomes incapacitated, engages in self-dealing, or commits fraud. Removal is a formal legal proceeding — not something a beneficiary can accomplish on their own — but when the conduct warrants it, courts act decisively.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    This guide explains the five main legal grounds for executor removal under 755 ILCS 5/23-2, who has standing to file a removal petition, the step-by-step court process in Cook County and elsewhere in Illinois, what happens after removal, and whether there are alternatives to formal proceedings.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    If you are a beneficiary dealing with an executor who is not performing their job, an attorney can help you evaluate your options — from a demand letter to a formal removal petition — and choose the most effective path forward.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="executor-duties" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What an Executor Is Supposed to Do in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              To understand when removal is appropriate, it helps to understand what an executor is legally required to do. Under the Illinois Probate Act of 1975 (755 ILCS 5), an executor — also called a <strong>personal representative</strong> — is the individual appointed by the Circuit Court to administer a decedent&apos;s estate. Once the court issues <strong>Letters of Office</strong>, the executor is a court-appointed fiduciary with duties to all beneficiaries and creditors of the estate.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-8">
              {[
                'Open the probate estate and petition to admit the will',
                'Publish the required creditor notice for 3 consecutive weeks',
                'File a verified inventory of all probate assets within 60 days',
                'Collect and protect estate assets during administration',
                'Pay valid creditor claims in the statutory priority order',
                "File the decedent's final income tax return and any estate tax return",
                'Keep estate funds separate from personal funds',
                'Account to the court and beneficiaries for all transactions',
                'Distribute remaining assets to beneficiaries as directed by the will',
                'File a Proof of Closing to formally end the probate case',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An executor who consistently fails to perform these duties — or performs them in a way that harms the estate — has breached their fiduciary obligation and may be subject to removal. The probate court supervises executors throughout administration and has authority to act when an executor goes off course.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Removal is a remedy of last resort — but it is available</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Illinois courts do not remove executors for minor mistakes, slow communication, or decisions that beneficiaries simply disagree with. Removal requires established misconduct, incapacity, or conduct that makes continued service incompatible with the interests of the estate. If you are frustrated with an executor but cannot point to a concrete breach of duty, review your options with a{' '}
                    <Link href="/chicago-probate-lawyer/" className="text-amber-800 underline font-medium">probate attorney</Link>{' '}
                    before filing.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="grounds" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Legal Grounds for Removing an Executor Under Illinois Law
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Section 23-2 of the Illinois Probate Act (755 ILCS 5/23-2) sets out the statutory grounds for removal of an executor. A court can remove an executor when it finds that the executor has: wasted, embezzled, or mismanaged estate assets; neglected or refused to perform their duties; become incapacitated or otherwise unsuitable; engaged in self-dealing; been convicted of a felony; or committed fraud. Each ground is described in detail below.
            </p>

            <div className="space-y-4 my-8">
              {groundsList.map((ground, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <div className="px-6 py-5 border-b border-gray-100 bg-gray-50">
                    <h3 id={ground.id} className="font-bold text-[#33414E] text-base flex items-center gap-2 font-['Plus_Jakarta_Sans']">
                      <span className="text-xl">{ground.icon}</span>
                      {ground.title}
                    </h3>
                  </div>
                  <div className="px-6 py-5">
                    {ground.detail.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-gray-700 mb-4 leading-relaxed text-sm font-['Plus_Jakarta_Sans'] last:mb-0">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 id="who-can-file" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Who Can File a Petition to Remove an Executor?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Under Illinois probate law, the following parties have standing to petition for an executor&apos;s removal:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  role: 'Beneficiaries',
                  color: 'navy',
                  detail: "Any person named as a beneficiary in the will — including residuary beneficiaries, specific legatees, and devisees — has standing to petition for removal. Beneficiaries are the primary parties whose interests the executor is supposed to serve, and they have the clearest stake in the executor's conduct.",
                },
                {
                  role: 'Heirs at Law',
                  color: 'blue',
                  detail: 'Even if you are not named in the will, you may have standing as an heir at law (a person who would inherit under Illinois intestate succession if there were no will). Heirs at law remain interested parties in the probate case even when the will excludes them.',
                },
                {
                  role: 'Creditors of the Estate',
                  color: 'navy',
                  detail: 'Creditors who have filed timely claims against the estate have an interest in the executor performing their duties — particularly in collecting estate assets and paying valid claims. A creditor who cannot get the executor to act on their claim may have standing to seek removal.',
                },
                {
                  role: 'Co-Executors',
                  color: 'blue',
                  detail: 'When a will names two or more co-executors, one co-executor can petition to remove the other for misconduct or incapacity. This is particularly relevant when one co-executor is misappropriating estate assets or preventing the estate from being administered.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 text-white ${item.color === 'navy' ? 'bg-[#33414E]' : 'bg-[#4A708B]'}`}
                >
                  <Users className="w-7 h-7 mb-3 opacity-80" />
                  <h3 className="font-bold text-lg mb-2 font-['Plus_Jakarta_Sans']">{item.role}</h3>
                  <p className="text-white/85 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The probate court itself also has authority to raise removal on its own motion when it observes misconduct during the course of estate administration — for example, when an executor files a suspicious accounting or repeatedly fails to comply with court orders.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <ShieldAlert className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Concerned About an Executor&apos;s Conduct?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps beneficiaries and interested parties understand their options when an executor is not performing their duties. Our Chicago probate attorneys can evaluate your situation and advise whether a demand letter, accounting request, or formal removal petition is the right approach.
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
                  href="/chicago-probate-lawyer/"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Our Probate Services
                </Link>
              </div>
            </div>

            <h2 id="process" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The Removal Process: Step by Step
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Removing an executor in Illinois is a formal legal proceeding within the existing probate case. Here is how the process works from petition to resolution.
            </p>

            <div className="space-y-4 my-8">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-5 p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#33414E] text-white flex items-center justify-center font-bold text-lg font-['Plus_Jakarta_Sans']">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#33414E] text-base mb-1 font-['Plus_Jakarta_Sans']">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">Emergency Relief: Temporary Restraining Orders and Special Administrators</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    If estate assets are at immediate risk while the removal petition is pending, you can ask the court for emergency relief. A <strong>temporary restraining order</strong> can freeze estate accounts and prevent the executor from making further transactions. Alternatively, the court can appoint a <strong>special administrator</strong> — a neutral fiduciary — to manage the estate while the removal case is resolved. Illinois courts act quickly on credible emergency motions where there is documented evidence of asset dissipation.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="after-removal" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Happens After an Executor Is Removed?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-green-800 text-lg mb-3 font-['Plus_Jakarta_Sans']">What the Court Orders</h3>
                <div className="space-y-3 text-sm text-green-900 font-['Plus_Jakarta_Sans']">
                  <p>The removed executor&apos;s Letters of Office are revoked — they no longer have legal authority to act for the estate.</p>
                  <p>The court appoints a successor executor or administrator to continue the administration, either from the will&apos;s named successor or someone nominated by the beneficiaries.</p>
                  <p>The removed executor is ordered to turn over all estate assets, records, and correspondence to the successor.</p>
                  <p>The court orders the removed executor to file a final accounting covering their entire period of service.</p>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <XCircle className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-bold text-red-800 text-lg mb-3 font-['Plus_Jakarta_Sans']">Consequences for the Removed Executor</h3>
                <div className="space-y-3 text-sm text-red-900 font-['Plus_Jakarta_Sans']">
                  <p>If the executor wasted or embezzled estate assets, the court can enter a personal judgment against them requiring restoration of those funds.</p>
                  <p>The court can surcharge the executor — imposing personal liability for losses the estate suffered due to their misconduct.</p>
                  <p>Depending on the conduct, criminal charges for theft or breach of fiduciary duty may follow.</p>
                  <p>Executor fees already paid may be disgorged if the court finds the executor failed to earn them.</p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The removal itself does not end the probate case — it transfers authority to a successor who continues administering the estate. In most cases, estate administration resumes on a more productive footing once a functional executor is in place. However, the damage caused by a removed executor — delayed distributions, depleted assets, missed tax deadlines — may create additional complications that the successor must address.
            </p>

            <h2 id="alternatives" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Alternatives to Formal Removal
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Removal proceedings are expensive, time-consuming, and adversarial. Before filing a petition, consider whether one of these less drastic remedies could address the problem:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  title: 'Demand Letter from an Attorney',
                  body: 'A formal letter from probate counsel notifying the executor of their specific failures and threatening court action is often enough to prompt compliance. Many executors who are behind on their duties — rather than intentionally wrongdoing — respond to professional pressure without the need for litigation.',
                  color: 'blue',
                },
                {
                  title: 'Motion to Compel Accounting',
                  body: 'If your primary concern is a lack of transparency, you can file a motion in the probate court requiring the executor to provide a formal accounting of all estate transactions. Courts routinely grant these motions. An accounting may reveal (or rule out) the misconduct you suspect, and it puts the executor on notice that their conduct is being scrutinized.',
                  color: 'blue',
                },
                {
                  title: 'Consent Resignation',
                  body: 'In some cases, you can negotiate a voluntary resignation with the executor — particularly when the executor is overwhelmed, conflicted, or simply no longer willing to serve. A negotiated resignation avoids the cost and hostility of a contested hearing and gets a functioning successor in place faster.',
                  color: 'green',
                },
                {
                  title: 'Court-Supervised Administration',
                  body: 'For executors who are not acting badly but need oversight, you can ask the court to impose stricter supervision — requiring court approval before the executor takes certain actions, or mandating periodic reporting. This preserves the existing executor while adding protective guardrails.',
                  color: 'green',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border-l-4 p-5 rounded-r-lg ${item.color === 'blue' ? 'bg-blue-50 border-blue-300' : 'bg-green-50 border-green-400'}`}
                >
                  <h4 className="font-bold text-gray-900 mb-2 font-['Plus_Jakarta_Sans'] text-sm">{item.title}</h4>
                  <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              None of these alternatives applies when the executor is actively embezzling funds or poses an immediate threat to the estate. In those cases, the fastest and most appropriate remedy is a removal petition — potentially combined with an emergency motion to freeze estate assets.
            </p>

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

            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Next Steps
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are a beneficiary or interested party in an Illinois probate estate and you believe the executor is mismanaging assets, neglecting their duties, or acting in their own self-interest, the most important first step is to consult an experienced Illinois probate attorney. An attorney can help you assess the strength of your evidence, identify the right legal remedy, and move quickly if estate assets are at immediate risk.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For more context on how Illinois probate works and what an executor is supposed to do throughout the process, see our guides on{' '}
              <Link href="/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                executor responsibilities in Illinois
              </Link>
              ,{' '}
              <Link href="/blog/how-long-does-probate-take-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how long probate takes in Illinois
              </Link>
              , and{' '}
              <Link href="/blog/how-much-does-probate-cost-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how much probate costs in Illinois
              </Link>
              .
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <Gavel className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Probate Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps beneficiaries, heirs, and other interested parties navigate difficult probate situations — including executor misconduct, removal petitions, and estate disputes. If you have concerns about how an estate is being handled, schedule a consultation to discuss your options.
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

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
              <h3 className="font-bold text-[#33414E] mb-3 font-['Plus_Jakarta_Sans']">
                Related Illinois Probate &amp; Estate Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/',
                    label: "So You've Been Named Executor: A Comprehensive Guide",
                  },
                  {
                    href: '/blog/understanding-the-responsibilities-of-an-estate-executor-in-illinois/',
                    label: 'Responsibilities of an Estate Executor in Illinois',
                  },
                  {
                    href: '/blog/how-long-does-probate-take-in-illinois/',
                    label: 'How Long Does Probate Take in Illinois?',
                  },
                  {
                    href: '/blog/how-much-does-probate-cost-in-illinois/',
                    label: 'How Much Does Probate Cost in Illinois?',
                  },
                  {
                    href: '/blog/how-to-contest-a-will-in-illinois/',
                    label: 'How to Contest a Will in Illinois',
                  },
                  {
                    href: '/blog/what-is-a-surety-bond-in-illinois-probate/',
                    label: 'What Is a Surety Bond in Illinois Probate?',
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

            <div className="bg-gray-100 rounded-lg p-5 border border-gray-200 my-8">
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois probate law is complex and fact-specific — the grounds and procedures for removing an executor vary by the circumstances of each estate. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Dealing With a Problem Executor? Get Legal Guidance Today.
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Illinois Estate Law represents beneficiaries and interested parties in probate disputes across Cook County and the surrounding area. Book a free consultation to discuss your options.
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

            <div className="my-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold mb-3 font-['Plus_Jakarta_Sans']">SHARE THIS POST:</p>
              <div className="flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-remove-executor-illinois-probate/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-remove-executor-illinois-probate/')}&text=${encodeURIComponent('How to Remove an Executor in Illinois Probate — grounds, process, and what to expect')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-remove-executor-illinois-probate/')}`}
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
