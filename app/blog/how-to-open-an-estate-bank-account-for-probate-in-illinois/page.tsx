'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Landmark,
  Clock,
  ChevronDown,
  ChevronUp,
  FileText,
  CircleAlert as AlertCircle,
  CircleCheck as CheckCircle2,
  ArrowRight,
  Banknote,
  ShieldCheck,
  ListChecks,
  ClipboardList,
  Users,
  Scale,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-open-an-estate-bank-account-for-probate-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    letters: false,
    ein: false,
    deathCert: false,
    willCopy: false,
    personalId: false,
    initialDeposit: false,
  });

  const checklistItems = [
    { key: 'letters', label: 'Letters of Office (certified copy)' },
    { key: 'ein', label: 'Estate EIN from the IRS' },
    { key: 'deathCert', label: 'Certified death certificate' },
    { key: 'willCopy', label: 'Copy of the will (if applicable)' },
    { key: 'personalId', label: 'Executor/administrator personal ID' },
    { key: 'initialDeposit', label: 'Initial deposit or transfer from decedent account' },
  ];

  const completedCount = Object.values(checklist).filter(Boolean).length;

  const steps = [
    {
      title: 'Get Appointed as Executor or Administrator',
      content:
        'Before you can open an estate account, the probate court must officially appoint you. If the decedent left a will, you petition the court to be appointed executor. If there is no will, you petition for appointment as administrator. The court issues Letters of Office (sometimes called Letters Testamentary) confirming your authority. This document is the single most important piece of paper you will need throughout the entire probate process.',
    },
    {
      title: 'Obtain an Estate EIN from the IRS',
      content:
        'Every estate that earns income or has assets requiring a bank account needs its own Employer Identification Number (EIN). This is essentially a Social Security number for the estate. You can apply online through the IRS website at no cost. The application takes about 10 minutes and you receive the EIN immediately. Do not use the decedent\'s Social Security number on the estate account — banks will reject this, and it creates serious tax reporting problems.',
    },
    {
      title: 'Choose a Bank and Open the Account',
      content:
        'Bring your Letters of Office, the estate EIN, a certified death certificate, a copy of the will, and your personal identification to the bank. The account should be titled in the name of the estate — for example, "Estate of John Smith, Deceased, Jane Smith, Executor." Most banks offer basic checking accounts for estates with minimal or no monthly fees. Some executors choose a bank where the decedent already had accounts, which can simplify transferring funds.',
    },
    {
      title: 'Transfer Estate Assets into the Account',
      content:
        'Once the account is open, begin consolidating the decedent\'s financial assets. Contact each bank, brokerage, and insurance company holding the decedent\'s funds and request transfers to the estate account. You will need to provide Letters of Office and the death certificate to each institution. Keep meticulous records of every transfer — the court will require a detailed accounting of every dollar that flows through this account.',
    },
    {
      title: 'Manage Funds and Pay Estate Obligations',
      content:
        'Use the estate account to pay legitimate estate expenses: court filing fees, attorney fees, outstanding debts, funeral costs, final utility bills, property taxes, and insurance premiums. Never pay personal expenses from the estate account and never deposit personal funds into it. Every transaction must be documented and will be included in the final accounting you present to the court before closing the estate.',
    },
  ];

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-an-estate-account', title: 'What Is an Estate Bank Account?', level: 2, numeration: '2' },
    { id: 'why-you-need-one', title: 'Why You Need a Separate Estate Account', level: 2, numeration: '3' },
    { id: 'step-by-step', title: 'Step-by-Step: Opening an Estate Account', level: 2, numeration: '4' },
    { id: 'documents-checklist', title: 'Documents Checklist', level: 2, numeration: '5' },
    { id: 'common-mistakes', title: 'Common Mistakes Executors Make', level: 2, numeration: '6' },
    { id: 'managing-the-account', title: 'Managing the Estate Account', level: 2, numeration: '7' },
    { id: 'closing-the-account', title: 'Closing the Estate Account', level: 2, numeration: '8' },
    { id: 'frequently-asked-questions', title: 'Frequently Asked Questions', level: 2, numeration: '9' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '10' },
  ];

  const faqs = [
    {
      question: 'Can I use the decedent\'s existing bank account as the estate account?',
      answer: 'No. Once the account holder dies, their personal bank accounts are frozen or restricted. You cannot simply start writing checks from the decedent\'s account. The bank will require you to present Letters of Office and a death certificate before releasing any funds, and those funds must be transferred into a properly titled estate account. Attempting to use a deceased person\'s account without authority can result in personal liability and potential criminal charges.',
    },
    {
      question: 'Do I need an EIN if the estate is small?',
      answer: 'If you are opening a bank account for the estate, yes — virtually every bank requires an EIN to open an estate account. Even for small estates, the IRS requires an EIN if the estate earns more than $600 in income or if the estate has assets in a bank account that earns interest. Since the application is free and takes only minutes online, there is no reason to skip this step. It also prevents the common mistake of using the decedent\'s Social Security number, which creates tax reporting complications.',
    },
    {
      question: 'Which bank should I choose for the estate account?',
      answer: 'There is no requirement to use any specific bank. Many executors choose the bank where the decedent held accounts because it simplifies transferring those funds. Others choose their own bank for convenience. The key factors are: low or no monthly fees (estate accounts rarely need premium features), convenient branch access for in-person transactions, a bank familiar with estate accounts (some smaller institutions have limited experience), and willingness to accept estate account deposits without unnecessary delays. Major banks like Chase, Bank of America, and BMO Harris all have established processes for estate accounts in Illinois.',
    },
    {
      question: 'Can I earn interest on estate funds?',
      answer: 'Yes, and in many cases you should. As a fiduciary, the executor has a duty to manage estate assets prudently. If the estate will hold significant funds for several months — which is common during the six-month creditor claim period — placing funds in an interest-bearing account is a reasonable and often expected step. Keep in mind that any interest earned is income to the estate and must be reported on the estate\'s income tax return (Form 1041). For very large estates, consider consulting with a financial advisor about short-term investment options.',
    },
    {
      question: 'What happens if I pay personal expenses from the estate account?',
      answer: 'Commingling personal and estate funds is one of the most serious mistakes an executor can make. If you pay personal expenses from the estate account, you may be held personally liable to replenish those funds. Beneficiaries can petition the court to surcharge you — meaning you pay out of your own pocket. In severe cases, the court can remove you as executor and appoint a replacement. Additionally, commingling can trigger IRS scrutiny and complicate both estate and personal tax returns. Always maintain strict separation between personal and estate finances.',
    },
    {
      question: 'How long does the estate account need to stay open?',
      answer: 'The estate account remains open for the duration of the probate case, which in Illinois typically lasts 6 to 12 months for straightforward estates and 12 to 24 months for more complex ones. The account cannot be closed until all debts have been paid, all taxes have been filed and settled, the court has approved the final accounting, and all distributions to beneficiaries have been made. Only after the court enters an order approving the final account and discharging the executor can the account be closed.',
    },
    {
      question: 'Do I need to keep records of every transaction?',
      answer: 'Absolutely. Illinois law requires the executor to file a detailed accounting with the probate court showing every dollar received by the estate and every dollar spent. You must keep bank statements, canceled checks or payment records, receipts for every expense, records of every deposit and its source, and documentation for every distribution to beneficiaries. Many attorneys recommend maintaining a simple spreadsheet alongside the bank records. This documentation protects you from personal liability and satisfies the court\'s requirements for closing the estate.',
    },
    {
      question: 'Can there be more than one estate bank account?',
      answer: 'Yes, although one account is sufficient for most estates. Some executors open a second account to segregate funds — for example, keeping sale proceeds from real estate separate from liquid asset transfers. However, multiple accounts increase the complexity of record-keeping and the final accounting. Unless there is a specific reason to maintain separate accounts, a single estate checking account is generally the simplest and most practical approach.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Open an Estate Bank Account for Probate in Illinois',
    description:
      'Complete guide to opening and managing an estate bank account during Illinois probate. Covers required documents, step-by-step process, common mistakes, and fiduciary responsibilities for executors and administrators.',
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
    datePublished: '2026-04-01',
    dateModified: '2026-04-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/how-to-open-an-estate-bank-account-for-probate-in-illinois/',
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

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Open an Estate Bank Account in Illinois',
    description:
      'Step-by-step instructions for opening an estate bank account during Illinois probate proceedings.',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.content,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16 sm:py-20">
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
                How to Open an Estate Bank Account for Probate in Illinois
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                A complete guide for executors and administrators on opening, managing, and closing an estate bank account during Illinois probate proceedings.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>April 1, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="article-summary" className="text-2xl font-bold mt-8 mb-4">
              Article Summary
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Landmark className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg">
                    An estate bank account is a dedicated checking or savings account opened by the executor or administrator to manage the financial affairs of a deceased person&apos;s estate during probate.
                  </p>
                  <p className="mb-4">
                    This guide walks you through every step of the process: obtaining Letters of Office, getting an EIN from the IRS, choosing a bank, titling the account correctly, transferring assets, managing estate expenses, and eventually closing the account once the court approves your final accounting.
                  </p>
                  <p className="mb-0">
                    Opening an estate account is one of the first and most important tasks an executor faces. Getting it right protects you from personal liability and keeps the probate process on track. Getting it wrong can lead to delays, surcharges, and even removal by the court.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="what-is-an-estate-account" className="text-2xl font-bold mt-12 mb-4">
              What Is an Estate Bank Account?
            </h2>

            <p className="mb-6">
              An estate bank account is a financial account opened in the name of a deceased person&apos;s estate. It serves as the central hub for all financial activity during probate &mdash; incoming funds from the decedent&apos;s assets flow into the account, and outgoing payments for debts, taxes, and expenses flow out. Think of it as the estate&apos;s operating account.
            </p>

            <p className="mb-6">
              Under Illinois law, the executor or administrator is a fiduciary, meaning they have a legal duty to manage estate assets with the same care a reasonably prudent person would exercise. Opening a properly titled estate account and maintaining clear records is fundamental to meeting this obligation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <Banknote className="w-10 h-10 text-[#4a708b] mb-3" />
                <h3 className="text-lg font-bold mb-2">Centralized Finances</h3>
                <p className="text-sm text-gray-700">
                  All estate income, asset transfers, and payments flow through one account for transparent record-keeping.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <ShieldCheck className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Fiduciary Protection</h3>
                <p className="text-sm text-gray-700">
                  A separate estate account protects the executor from allegations of commingling personal and estate funds.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
                <Scale className="w-10 h-10 text-amber-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Court Compliance</h3>
                <p className="text-sm text-gray-700">
                  Illinois probate courts require a detailed accounting of all estate funds. A dedicated account makes this straightforward.
                </p>
              </div>
            </div>

            <p className="mb-6">
              The account is typically a basic checking account &mdash; there is no special &quot;estate account&quot; product at most banks. What makes it an estate account is how it is titled and who has signing authority. The account is opened in the name of the estate (e.g., &quot;Estate of Jane Doe, Deceased&quot;) with the executor or administrator as the authorized signer.
            </p>

            <h2 id="why-you-need-one" className="text-2xl font-bold mt-12 mb-4">
              Why You Need a Separate Estate Account
            </h2>

            <p className="mb-6">
              Some executors, especially those handling a family member&apos;s estate, wonder whether they really need a separate bank account. The short answer is yes &mdash; and not just because it is good practice. There are concrete legal and practical reasons that make a dedicated estate account essential.
            </p>

            <div className="space-y-4 my-8">
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-[#4a708b] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Legal requirement for fiduciaries</h3>
                  <p className="text-gray-700 text-sm">
                    Illinois law requires executors to keep estate assets separate from personal assets. Commingling is a breach of fiduciary duty that can result in personal liability, removal as executor, and even criminal penalties in extreme cases. A dedicated estate account creates a clear boundary.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-[#4a708b] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Simplified court accounting</h3>
                  <p className="text-gray-700 text-sm">
                    Before the court will close the probate case, the executor must file an accounting showing every dollar received and every dollar spent. When all estate transactions flow through a single, dedicated account, preparing this accounting is straightforward. When funds are mixed with personal accounts, the process becomes a nightmare of sorting, documenting, and explaining.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-[#4a708b] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Tax reporting accuracy</h3>
                  <p className="text-gray-700 text-sm">
                    The estate is a separate taxpayer with its own EIN and its own tax returns. Having a dedicated account tied to the estate&apos;s EIN ensures that all income and expenses are properly attributed to the estate, not to you personally. This avoids IRS mismatches and potential audits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-[#4a708b] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Protection from beneficiary disputes</h3>
                  <p className="text-gray-700 text-sm">
                    Beneficiaries have the right to challenge the executor&apos;s management of estate assets. A clean, dedicated estate account with clear records is your best defense against accusations of mismanagement. Without it, even honest executors can find themselves unable to prove they handled funds properly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Important note:</p>
                  <p className="text-gray-700">
                    A joint bank account with right of survivorship passes directly to the surviving owner and does <strong>not</strong> need to go through probate or be deposited into the estate account. Only solely-owned assets of the decedent become part of the probate estate. If you are unsure which accounts are part of the estate, consult with a probate attorney before moving any funds.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="step-by-step" className="text-2xl font-bold mt-12 mb-4">
              Step-by-Step: Opening an Estate Bank Account in Illinois
            </h2>

            <p className="mb-6">
              Opening an estate account follows a specific sequence. Each step builds on the previous one, so it is important to complete them in order. Attempting to skip ahead &mdash; for example, going to the bank before you have Letters of Office &mdash; will result in wasted time.
            </p>

            <div className="my-8 border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row border-b border-gray-200">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors border-b sm:border-b-0 sm:border-r last:border-r-0 last:border-b-0 border-gray-200 ${
                      activeStep === index
                        ? 'bg-[#4a708b] text-white'
                        : 'text-gray-600 hover:bg-gray-100 bg-gray-50'
                    }`}
                  >
                    <span className="block text-xs opacity-70 mb-0.5">Step {index + 1}</span>
                    <span className="block text-xs sm:text-sm leading-tight">{step.title}</span>
                  </button>
                ))}
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-start gap-4">
                  <div className="bg-[#4a708b] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {activeStep + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{steps[activeStep].title}</h3>
                    <p className="text-gray-700 leading-relaxed">{steps[activeStep].content}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="px-4 py-2 text-sm font-semibold text-[#4a708b] hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Previous Step
                  </button>
                  <button
                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="px-4 py-2 text-sm font-semibold bg-[#4a708b] text-white rounded-lg hover:bg-[#3d5f77] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>

            <h2 id="documents-checklist" className="text-2xl font-bold mt-12 mb-4">
              Documents Checklist
            </h2>

            <p className="mb-6">
              Before visiting the bank, gather every document on this list. Arriving without any one of these items will likely mean a wasted trip. Banks handling estate accounts require specific documentation and will not make exceptions.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-center gap-3 mb-2">
                <ClipboardList className="w-8 h-8 text-[#4a708b]" />
                <h3 className="text-xl font-bold">Estate Account Document Checklist</h3>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Check off each item as you gather it. You need all six before going to the bank.
              </p>

              <div className="space-y-3">
                {checklistItems.map((item) => (
                  <label
                    key={item.key}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      checklist[item.key]
                        ? 'bg-green-50 border-green-300'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      onChange={() =>
                        setChecklist((prev) => ({ ...prev, [item.key]: !prev[item.key] }))
                      }
                      className="w-5 h-5 rounded border-gray-300 text-[#4a708b] focus:ring-[#4a708b]"
                    />
                    <span
                      className={`font-medium ${
                        checklist[item.key] ? 'text-green-700 line-through' : 'text-gray-800'
                      }`}
                    >
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-blue-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">
                    {completedCount} of {checklistItems.length} items ready
                  </span>
                  <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#4a708b] rounded-full transition-all duration-300"
                      style={{ width: `${(completedCount / checklistItems.length) * 100}%` }}
                    />
                  </div>
                </div>
                {completedCount === checklistItems.length && (
                  <div className="mt-3 flex items-center gap-2 text-green-700 font-semibold">
                    <CheckCircle2 className="w-5 h-5" />
                    You are ready to visit the bank.
                  </div>
                )}
              </div>
            </div>

            <h2 id="common-mistakes" className="text-2xl font-bold mt-12 mb-4">
              Common Mistakes Executors Make with Estate Accounts
            </h2>

            <p className="mb-6">
              Estate account errors are among the most common reasons executors face legal trouble during probate. These mistakes are easily avoidable if you know what to watch for.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 p-4 border-b border-red-200">
                  <h3 className="font-bold text-lg flex items-center gap-2 text-red-700">
                    <AlertCircle className="w-5 h-5" />
                    Mistakes to Avoid
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Using the decedent&apos;s Social Security number instead of an estate EIN</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Depositing estate funds into a personal account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Paying personal expenses from the estate account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Distributing assets to beneficiaries before paying debts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Failing to keep receipts and transaction records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Titling the account incorrectly</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 p-4 border-b border-green-200">
                  <h3 className="font-bold text-lg flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="w-5 h-5" />
                    Best Practices
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Apply for an estate EIN before going to the bank</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Open a dedicated estate-only checking account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Keep a running spreadsheet of all transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Pay creditors in statutory priority order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Save all receipts, statements, and deposit records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Title the account: &quot;Estate of [Name], Deceased&quot;</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 id="managing-the-account" className="text-2xl font-bold mt-12 mb-4">
              Managing the Estate Account During Probate
            </h2>

            <p className="mb-6">
              Once the account is open and funded, the executor&apos;s job shifts to managing the estate&apos;s finances responsibly. This involves paying legitimate expenses, collecting remaining assets, and maintaining the detailed records the court will eventually require.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-8 border border-gray-200">
              <h3 className="font-bold text-lg mb-4">What Gets Paid from the Estate Account</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-bold">Expense Category</th>
                      <th className="text-left py-3 px-4 font-bold">Examples</th>
                      <th className="text-left py-3 px-4 font-bold">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 font-semibold">Administration costs</td>
                      <td className="py-3 px-4 text-gray-600">Court fees, attorney fees, executor compensation</td>
                      <td className="py-3 px-4"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">Highest</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Funeral expenses</td>
                      <td className="py-3 px-4 text-gray-600">Funeral home, burial or cremation, memorial</td>
                      <td className="py-3 px-4"><span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-semibold">High</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Federal and state taxes</td>
                      <td className="py-3 px-4 text-gray-600">Income tax, estate tax, property tax</td>
                      <td className="py-3 px-4"><span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-semibold">High</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Secured debts</td>
                      <td className="py-3 px-4 text-gray-600">Mortgage payments, car loans</td>
                      <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">Medium</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Unsecured debts</td>
                      <td className="py-3 px-4 text-gray-600">Credit cards, medical bills, personal loans</td>
                      <td className="py-3 px-4"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">Lower</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Distributions to beneficiaries</td>
                      <td className="py-3 px-4 text-gray-600">Cash bequests, residuary estate shares</td>
                      <td className="py-3 px-4"><span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-semibold">Last</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mb-6">
              Illinois follows a statutory priority order for paying estate debts (755 ILCS 5/18-10). Executors who distribute assets to beneficiaries before paying all legitimate debts can be held personally liable for those unpaid obligations. When in doubt about the order of payments, consult your probate attorney before writing checks.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <ListChecks className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Record-Keeping Tip</p>
                  <p className="text-gray-700">
                    Create a simple spreadsheet with columns for date, description, payee, amount in, amount out, and running balance. Update it every time you make a deposit or write a check. Download monthly bank statements and save them. When it comes time to file your court accounting, your attorney will have everything they need to prepare the required documents quickly and accurately.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="closing-the-account" className="text-2xl font-bold mt-12 mb-4">
              Closing the Estate Account
            </h2>

            <p className="mb-6">
              The estate account remains open until the probate case is complete. Closing it prematurely &mdash; before all debts are paid, taxes are settled, and distributions are made &mdash; creates significant problems. Here is the proper sequence for winding down the account.
            </p>

            <div className="my-8 space-y-4">
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Pay all remaining debts and expenses</h3>
                  <p className="text-sm text-gray-700">
                    Ensure all creditor claims, taxes, attorney fees, and administration costs have been paid in full. The six-month creditor claim period must have expired.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Prepare and file the final accounting</h3>
                  <p className="text-sm text-gray-700">
                    Your attorney prepares the court accounting showing every receipt and disbursement. This document must balance to the penny. The court and beneficiaries review it before approval.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Distribute remaining assets to beneficiaries</h3>
                  <p className="text-sm text-gray-700">
                    Once the court approves the accounting, distribute the remaining funds according to the will or Illinois intestacy law. Issue checks or transfers from the estate account directly to each beneficiary.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-1">Close the account and file proof with the court</h3>
                  <p className="text-sm text-gray-700">
                    After the final distribution, the account balance should be zero. Close the account at the bank, obtain a closing statement, and file proof of closure with the court as part of your final report.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="frequently-asked-questions" className="text-2xl font-bold mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4">
              Next Steps
            </h2>

            <p className="mb-6">
              Opening an estate bank account is one of the earliest and most consequential tasks in Illinois probate. Getting it right from the start &mdash; with the correct documents, proper titling, and clean record-keeping &mdash; sets the foundation for a smooth probate process and protects you from personal liability as executor.
            </p>

            <p className="mb-6">
              If you are navigating probate for the first time, you do not have to figure this out alone. An experienced probate attorney can guide you through every step, from obtaining Letters of Office to closing the estate account and everything in between.
            </p>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Need Help with Illinois Probate?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                At Illinois Estate Law, we handle probate for a flat fee &mdash; no hourly billing, no surprise invoices. We guide executors through every step of the process, including opening the estate account, managing creditor claims, filing court documents, and distributing assets to beneficiaries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/chicago-probate-lawyer"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30"
                >
                  Learn About Our Probate Services
                </Link>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Call <a href="tel:3123730731" className="text-white underline">(312) 373-0731</a> to speak directly with our team.
              </p>
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

          <div className="border-t border-gray-300 pt-8 mb-8">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[var(--e-global-color-text)]">
                SHARE POST ON:
              </span>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-open-an-estate-bank-account-for-probate-in-illinois/')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-open-an-estate-bank-account-for-probate-in-illinois/')}&text=${encodeURIComponent('How to Open an Estate Bank Account for Probate in Illinois')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-open-an-estate-bank-account-for-probate-in-illinois/')}&title=${encodeURIComponent('How to Open an Estate Bank Account for Probate in Illinois')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <BlogContactForm />
        </div>
      </div>
    </>
  );
}
