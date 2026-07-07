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
  Smartphone,
  Bitcoin,
  Globe,
  Lock,
  Key,
  CloudOff,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'what-happens-to-digital-assets-when-you-die-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-are-digital-assets', title: 'What Are Digital Assets?', level: 2, numeration: '2' },
    { id: 'illinois-rufadaa', title: 'Illinois Law: The RUFADAA (755 ILCS 10)', level: 2, numeration: '3' },
    { id: 'granting-access', title: 'How to Grant Your Executor Access to Digital Assets', level: 2, numeration: '4' },
    {
      id: 'asset-types',
      title: 'Digital Asset Types: What Happens to Each',
      level: 2,
      numeration: '5',
      children: [
        { id: 'crypto', title: 'Cryptocurrency and NFTs', level: 3, numeration: '5.1' },
        { id: 'social-media', title: 'Social Media and Email Accounts', level: 3, numeration: '5.2' },
        { id: 'financial-online', title: 'Online Financial Accounts', level: 3, numeration: '5.3' },
        { id: 'digital-content', title: 'Digital Content and Subscriptions', level: 3, numeration: '5.4' },
      ],
    },
    { id: 'practical-steps', title: 'Practical Steps: Building a Digital Asset Plan', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '8' },
  ];

  const faqs = [
    {
      question: 'Does my will cover my digital assets in Illinois?',
      answer:
        'Your will can address digital assets, but it has significant limitations. A will can direct your executor to manage or transfer digital assets, but many platforms — including Google, Apple, Facebook, and financial institutions — have their own terms of service that restrict access even when presented with a will and Letters of Office. The most effective approach combines a clear digital asset provision in your will or trust with a private inventory of accounts and credentials, along with online legacy tool designations wherever the platform allows.',
    },
    {
      question: 'What happens to my cryptocurrency if I die without leaving instructions in Illinois?',
      answer:
        "Cryptocurrency is lost — permanently — if your executor cannot access your wallets. Unlike a bank account, there is no customer service department to reset a lost password or recover a lost seed phrase. If your private keys or seed phrase are not accessible, the cryptocurrency is effectively gone forever. Illinois estate law cannot compel a blockchain to transfer funds. This is why a secure, documented handoff plan for crypto credentials is not optional — it is the only way to preserve this asset for your heirs.",
    },
    {
      question: "Can my family access my Facebook or Google account after I die?",
      answer:
        "It depends on what advance planning you did. Facebook offers a Legacy Contact feature that allows a designated person to manage or memorialize your account. Google's Inactive Account Manager lets you designate recipients for your data. Without these in-platform designations, your family may be locked out entirely, because both platforms have terms of service that prohibit sharing passwords and restrict access to others — even next of kin. An Illinois probate court order may sometimes compel disclosure, but it is a slow, expensive process that is not guaranteed to succeed.",
    },
    {
      question: 'Are digital assets included in my taxable estate in Illinois?',
      answer:
        'Yes. Cryptocurrency, digital art (NFTs), and other digital assets with monetary value are included in your gross estate for both federal estate tax and Illinois estate tax purposes. The fair market value at the date of death determines the estate tax inclusion. For Illinois residents, estates exceeding $4 million (as of 2026) are subject to Illinois estate tax. Cryptocurrency and other volatile digital assets also create unique valuation challenges — an estate tax attorney can advise on timing and documentation strategies.',
    },
    {
      question: 'What is the Illinois RUFADAA and how does it protect my executor?',
      answer:
        "The Revised Uniform Fiduciary Access to Digital Assets Act (755 ILCS 10), adopted by Illinois, gives your executor or trustee the legal authority to access and manage your digital assets — but only to the extent your estate planning documents authorize it. Without that authorization, the law defaults to whatever the platform's terms of service allow, which often means no access. The RUFADAA does not override platform terms of service; it establishes the legal framework for your fiduciary to request access. Clear language in your will or trust is what activates these rights.",
    },
    {
      question: 'Should I include my passwords in my will?',
      answer:
        "No — do not put passwords or seed phrases in your will. In Illinois, wills become public record when admitted to probate. Any credentials included in your will become publicly accessible, creating serious security risks while you are still alive. Instead, maintain a separate, secure digital asset inventory — either in a password manager with emergency access set up, a sealed letter with your estate planning attorney, or a fire-safe document stored with your other important papers. Reference the location of these credentials in your will or trust without including the credentials themselves.",
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Happens to Digital Assets When You Die in Illinois?',
    description:
      'Learn what Illinois law says about digital assets at death, how the RUFADAA protects your executor, what happens to cryptocurrency and social media accounts, and the practical steps to protect your digital estate.',
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
    datePublished: '2026-06-03',
    dateModified: '2026-06-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/what-happens-to-digital-assets-when-you-die-illinois/',
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
                What Happens to Your Digital Assets When You Die in Illinois?
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Cryptocurrency, social media accounts, email, online bank accounts, and digital photos — most Illinois residents own thousands of dollars in digital assets with no plan for what happens to them at death. Here is what the law says and what you need to do.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>June 3, 2026</time>
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
                <Smartphone className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Most Illinois residents own significant digital assets — and most of those assets will be inaccessible or permanently lost when they die, unless they plan ahead.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Illinois adopted the Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA) in 2017, giving executors and trustees a legal framework for accessing digital accounts. But the law only works when your estate planning documents specifically authorize it — and it does nothing for cryptocurrency without a separate credential handoff plan.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains how Illinois law treats digital assets at death, what happens to each category of digital property, and the practical steps to take now so your executor can actually manage and transfer what you leave behind.
                  </p>
                </div>
              </div>
            </div>

            {/* At-a-glance summary */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Digital Asset Outcomes at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Cryptocurrency without a key handoff plan', outcome: 'Permanently lost', color: 'red' },
                  { label: 'Social media without legacy settings', outcome: 'Locked or deleted', color: 'amber' },
                  { label: 'Online accounts with authorized executor', outcome: 'Transferable or closeable', color: 'green' },
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
                      className={`text-base font-bold mb-1 font-['Plus_Jakarta_Sans'] ${
                        item.color === 'green'
                          ? 'text-green-700'
                          : item.color === 'amber'
                          ? 'text-amber-700'
                          : 'text-red-700'
                      }`}
                    >
                      {item.outcome}
                    </p>
                    <p className="text-xs text-gray-600 font-['Plus_Jakarta_Sans']">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. What Are Digital Assets */}
            <h2 id="what-are-digital-assets" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Are Digital Assets?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A digital asset is any electronic record in which you have a right or interest. Under Illinois law (755 ILCS 10/2), the definition is intentionally broad. It covers nearly everything you access with a username and password — and a great deal more.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#33414E] text-white rounded-xl p-6">
                <Globe className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Digital Assets with Monetary Value</h3>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Cryptocurrency (Bitcoin, Ethereum, etc.)',
                    'Non-fungible tokens (NFTs) and digital art',
                    'Online bank and brokerage accounts',
                    'PayPal, Venmo, Cash App balances',
                    'Airline and hotel loyalty points',
                    'Online gaming accounts with in-game currency',
                    'Domain names and websites with revenue',
                    'Intellectual property in digital form',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-6">
                <FileText className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Digital Assets with Personal or Sentimental Value</h3>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Email accounts and their archives',
                    'Social media accounts (Facebook, Instagram, X)',
                    'Photos stored in iCloud, Google Photos, Dropbox',
                    'Digital journals or creative writing files',
                    'Messaging app histories (iMessage, WhatsApp)',
                    'Cloud-stored documents and spreadsheets',
                    'Purchased music, movies, and eBooks',
                    'Subscription services (streaming, software)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The aggregate value of the average American&apos;s digital assets is often underestimated. A person with a modest brokerage account accessed online, a cryptocurrency wallet, an Apple ID with years of purchased apps and music, thousands of digital photos, and accumulated airline miles may have tens of thousands of dollars in digital holdings — much of it entirely invisible to a grieving family trying to settle an estate.
            </p>

            {/* 3. Illinois RUFADAA */}
            <h2 id="illinois-rufadaa" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Illinois Law: The RUFADAA (755 ILCS 10)
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois adopted the Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA) effective January 1, 2017, codified at 755 ILCS 10/1 et seq. Before this law, executors and trustees frequently had no legal basis to demand access to a deceased person&apos;s digital accounts — and platforms could (and did) refuse to provide it, citing their terms of service. The RUFADAA changed that, but only partially.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">
                    The RUFADAA creates a legal framework — but it does not automatically open doors
                  </p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans']">
                    The Illinois RUFADAA gives your executor or trustee legal authority to request access to your digital assets. However, it does not override platform terms of service on its own. The law establishes a three-tiered priority system: (1) any in-platform tool the user set up (like Google&apos;s Inactive Account Manager) controls first; (2) express instructions in your will or trust control second; (3) the platform&apos;s default terms of service apply last. Without action on your part, your fiduciary is left at the mercy of each company&apos;s policies — which may mean no access at all.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Under the RUFADAA, your executor or trustee has the right to access the <strong>catalog</strong> of digital assets — essentially the list of what exists — even without your express authorization. But accessing the <strong>content</strong> of electronic communications (emails, text messages, private messages) requires either your express authorization in your estate planning documents or a court order. This distinction matters enormously: your executor can learn that an email account exists, but may not be able to read the emails themselves unless you authorized it.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  What the Illinois RUFADAA Allows
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    access: 'Catalog of digital assets',
                    permission: 'Automatic (no authorization required)',
                    color: 'green',
                    detail: 'Your executor can request a list of accounts, usernames, and digital property from any custodian — even without your specific authorization in estate documents.',
                  },
                  {
                    access: 'Content of non-communication digital assets',
                    permission: 'Requires authorization in will or trust',
                    color: 'amber',
                    detail: 'Files, photos, documents, and other stored digital content requires express language in your estate planning documents authorizing access.',
                  },
                  {
                    access: 'Content of electronic communications (email, messages)',
                    permission: 'Requires express authorization or court order',
                    color: 'red',
                    detail: 'The content of emails, text messages, and private messages receives the highest privacy protection. Your fiduciary needs clear authorization in your will or trust — or a court order — to access these.',
                  },
                ].map((row, i) => (
                  <div key={i} className="px-6 py-5">
                    <div className="flex flex-wrap items-start gap-3 mb-2">
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded font-mono ${
                          row.color === 'green'
                            ? 'bg-green-100 text-green-700'
                            : row.color === 'amber'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {row.permission}
                      </span>
                      <h4 className="font-bold text-[#33414E] font-['Plus_Jakarta_Sans']">{row.access}</h4>
                    </div>
                    <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">{row.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Granting Access */}
            <h2 id="granting-access" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Grant Your Executor Access to Digital Assets in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The most reliable way to ensure your executor can manage your digital assets is to give them clear legal authority through your estate planning documents and a practical way to actually use that authority — meaning access to your credentials.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: '1',
                  title: 'Add a digital asset clause to your will or trust',
                  body: "Your will or revocable living trust should contain specific language authorizing your executor or trustee to access, manage, transfer, and close digital accounts. Boilerplate language that simply says \"all assets\" may not be enough — platforms may require explicit authorization that covers electronic communications, cloud storage, and similar content. An Illinois estate planning attorney can draft language that satisfies both the RUFADAA requirements and the access standards major platforms use.",
                },
                {
                  num: '2',
                  title: 'Use in-platform legacy and inactive account tools',
                  body: "Several major platforms offer built-in legacy designation tools that give your chosen person legal access under the platform's own terms — bypassing the need to prove anything in probate court. Google's Inactive Account Manager lets you designate up to 10 trusted contacts who can download your data. Facebook's Legacy Contact can manage or memorialize your account. Apple's Digital Legacy feature (available in iOS 15.2+) lets you designate legacy contacts who receive a special access key. Using these tools is the most friction-free way to transfer access.",
                },
                {
                  num: '3',
                  title: 'Create and maintain a digital asset inventory',
                  body: "Your executor cannot manage what they cannot find. Create a written or secure digital inventory listing every account, the platform name, username, and any recovery information. For cryptocurrency, this means recording your wallet addresses, exchange account information, and — critically — your seed phrases and private keys. Store this inventory securely (a password manager with emergency access, a fire-safe document, or a sealed letter with your estate planning attorney) and tell your executor where to find it. Review and update it at least annually.",
                },
                {
                  num: '4',
                  title: 'Consider a password manager with emergency access',
                  body: "Services like 1Password, Bitwarden, and LastPass offer emergency access features that allow a designated person to request access after a waiting period you specify. If you do not override the request, access is granted automatically. This creates a built-in, time-delayed handoff mechanism that works without requiring your executor to know your master password in advance — and without the security risk of keeping credentials in a document that could be accessed prematurely.",
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

            {/* 5. Digital Asset Types */}
            <h2 id="asset-types" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Digital Asset Types: What Happens to Each
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Different digital assets follow very different rules at death. Understanding the specific challenges for each category helps you plan appropriately.
            </p>

            {/* 5.1 Crypto */}
            <h3 id="crypto" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Cryptocurrency and NFTs
            </h3>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 my-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Bitcoin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800 mb-1 font-['Plus_Jakarta_Sans']">
                    Cryptocurrency is the highest-risk digital asset category — and the most commonly lost
                  </p>
                  <p className="text-red-700 text-sm font-['Plus_Jakarta_Sans']">
                    An estimated 3–4 million Bitcoin — worth tens of billions of dollars — is permanently inaccessible due to lost keys and deceased owners with no succession plan. Illinois law cannot help here: there is no blockchain administrator to petition, no court order that can recover a private key, and no customer support line to call.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Cryptocurrency held in a <strong>self-custody wallet</strong> (where you control the private keys or seed phrase) is yours and yours alone. If your executor cannot find your seed phrase — the 12 or 24 word recovery phrase — the funds are gone permanently. The only planning that works is ensuring your seed phrase is securely documented and stored somewhere your executor will find it after your death.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Cryptocurrency held on a <strong>centralized exchange</strong> (Coinbase, Kraken, Gemini, etc.) is somewhat more recoverable. These platforms maintain customer service departments and typically respond to properly documented estate claims — a death certificate, Letters of Office, and sometimes notarized documentation from your executor. However, the process is slow, inconsistent across platforms, and not guaranteed. Keeping a record of which exchanges hold your assets and how much makes the process infinitely easier for your estate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>NFTs and digital art</strong> present similar challenges. They are typically stored in a blockchain wallet you control or on a marketplace like OpenSea. Without access credentials or documented wallet information, they cannot be transferred. Their value at death must also be assessed for estate tax purposes — a particularly difficult task given the volatility of digital art markets.
            </p>

            {/* 5.2 Social Media */}
            <h3 id="social-media" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Social Media and Email Accounts
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Social media platforms each have their own policies for deceased users, and none of them automatically notify your family or transfer control upon death. Without advance planning, your accounts may simply remain active until the platform detects inactivity — or until a family member reports the death.
            </p>

            <div className="space-y-3 my-8">
              {[
                {
                  platform: 'Facebook / Instagram (Meta)',
                  policy: 'Legacy Contact or Memorialization',
                  detail: "You can designate a Legacy Contact who can post a pinned message, respond to friend requests, and update profile photos. Alternatively, you can request that your account be removed entirely after death. Without these settings, Meta will memorialize the account when notified of death — leaving it frozen but visible.",
                  color: 'blue',
                },
                {
                  platform: 'Google (Gmail, Photos, Drive, YouTube)',
                  policy: 'Inactive Account Manager',
                  detail: "Google's Inactive Account Manager is the gold standard for digital legacy planning. You designate up to 10 trusted people who receive access to your data after your account is inactive for a period you specify (3–18 months). You can choose exactly which Google products each person can access, making it granular and flexible.",
                  color: 'blue',
                },
                {
                  platform: 'Apple (iCloud, Photos, iMessage)',
                  policy: 'Digital Legacy Feature',
                  detail: "iOS 15.2 and later allows you to designate Legacy Contacts. Each contact receives an access key (separate from your password) that they use along with a death certificate to access your iCloud account. Without this setup, Apple requires a court order to grant access — and even then, they may only provide certain data.",
                  color: 'blue',
                },
                {
                  platform: 'X (formerly Twitter)',
                  policy: 'Account deactivation only',
                  detail: "X does not offer a legacy contact or memorialize accounts. Authorized representatives can request account deactivation after providing a death certificate and documentation of their relationship to the deceased. There is no mechanism to preserve or transfer account content.",
                  color: 'amber',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border-l-4 p-5 rounded-r-lg ${
                    item.color === 'blue' ? 'bg-blue-50 border-[#547298]' : 'bg-amber-50 border-amber-400'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h4 className="font-bold font-['Plus_Jakarta_Sans'] text-gray-900">{item.platform}</h4>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-white border border-gray-200 text-gray-700 font-['Plus_Jakarta_Sans']">
                      {item.policy}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>Email accounts</strong> deserve special attention because they often contain years of financial records, correspondence, and personal history — and because the RUFADAA treats email content with the highest level of privacy protection. To give your executor access to the content of your emails (not just the existence of the account), you need explicit authorization language in your will or trust. Without it, your executor may be able to learn your Gmail address exists but may be legally blocked from reading any messages.
            </p>

            {/* 5.3 Financial Accounts */}
            <h3 id="financial-online" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Online Financial Accounts
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Online bank accounts, brokerage accounts, and payment services present fewer access challenges than social media — but they present their own complications for estate administration.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A traditional bank or brokerage account that is accessed online is still a conventional financial account governed by standard probate and estate law. Your executor, with proper Letters of Office, can generally access and transfer these accounts through the normal probate process — or outside of probate if the account has a payable-on-death designation. The fact that the account exists only online does not change the underlying legal rules. What it changes is <strong>discoverability</strong>: if your executor does not know the account exists, it may simply never be claimed.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Key className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    Unclaimed property is a real risk for online-only accounts
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans']">
                    Illinois&apos;s unclaimed property law (765 ILCS 1025) requires financial institutions to turn over dormant accounts to the state after a period of inactivity. If your executor is unaware of an online-only account, it may sit unclaimed until the institution transfers it to the Illinois State Treasurer&apos;s unclaimed property program — where heirs can eventually claim it, but through a separate process that takes time. A comprehensive asset inventory prevents this.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>PayPal, Venmo, and Cash App</strong> balances are governed by each platform&apos;s terms of service. PayPal allows account holders to designate beneficiaries in some jurisdictions, and estates can generally claim remaining balances with proper documentation. Cash App and Venmo have their own estate claim processes. These are modest-value accounts for most people, but they are worth addressing in your digital asset inventory.
            </p>

            {/* 5.4 Digital Content */}
            <h3 id="digital-content" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Digital Content and Subscriptions
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One of the most misunderstood areas of digital assets is purchased digital content. When you buy a movie from iTunes, a song from Amazon Music, or an eBook from the Kindle store, you are typically purchasing a <strong>license to use</strong> the content — not ownership of it. These licenses are almost universally non-transferable and terminate at your death under the platform&apos;s terms of service.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This means the thousands of dollars you may have spent on digital movies, music, and books cannot be inherited. They do not pass under your will. They are not estate property in any meaningful sense — they simply expire. Illinois law does not override this, and it is an intentional feature of digital content licensing, not a gap that courts have been willing to fill.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The practical implication: if you have content you want to preserve for your family — family photos, creative writing, personal documents — store it in a format you own and control (local hard drives, external storage, physical media) rather than exclusively in cloud services governed by license agreements.
            </p>

            {/* 6. Practical Steps */}
            <h2 id="practical-steps" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Practical Steps: Building a Digital Asset Plan in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A complete digital asset plan does not require technical expertise — it requires the same intentional, documented approach that good estate planning always demands. Here is how to get started.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              {[
                {
                  icon: <FileText className="w-6 h-6 text-[#4a708b]" />,
                  title: 'Step 1: Take inventory',
                  body: "List every digital account you own — financial, social, email, cloud storage, and cryptocurrency. For each entry, note the platform, your username or email, and where credentials are stored. You do not need to include passwords here; you just need to know what exists and where.",
                },
                {
                  icon: <Lock className="w-6 h-6 text-[#4a708b]" />,
                  title: 'Step 2: Secure your credentials',
                  body: "Use a reputable password manager with emergency access enabled, or maintain a written inventory in a physically secure location (fire-safe, bank safe deposit box, or with your estate attorney). Update the inventory whenever you open a new account or change a significant password.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-[#4a708b]" />,
                  title: 'Step 3: Set up legacy tools',
                  body: "Complete the legacy or inactive account designations on every major platform that offers them: Google Inactive Account Manager, Apple Digital Legacy, Facebook Legacy Contact. These in-platform designations are the most legally reliable and friction-free way to transfer access.",
                },
                {
                  icon: <Key className="w-6 h-6 text-[#4a708b]" />,
                  title: 'Step 4: Handle cryptocurrency separately',
                  body: "For every cryptocurrency wallet, document your seed phrase (24-word recovery phrase) in a secure, separate location from your other credentials. Consider a hardware wallet and document where it is stored. Tell your executor what exchange accounts exist. Never store seed phrases digitally in the cloud.",
                },
                {
                  icon: <FileText className="w-6 h-6 text-[#4a708b]" />,
                  title: 'Step 5: Update your will or trust',
                  body: "Work with an Illinois estate planning attorney to add a digital asset clause to your will or revocable trust. This clause should authorize your executor or trustee to access, manage, transfer, copy, delete, or otherwise control digital accounts — including the content of electronic communications if that is your wish.",
                },
                {
                  icon: <CloudOff className="w-6 h-6 text-[#4a708b]" />,
                  title: 'Step 6: Review annually',
                  body: "Digital accounts change more frequently than physical assets. Review your digital asset inventory every year — at minimum — and after every major life event. Cancel unused accounts when you no longer need them rather than leaving dormant accounts scattered across the internet.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-start gap-3 mb-3">
                    {item.icon}
                    <h3 className="font-bold text-base font-['Plus_Jakarta_Sans'] text-[#33414E]">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2 font-['Plus_Jakarta_Sans']">
                    One thing not to do: put passwords in your will
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans']">
                    Illinois wills become public record when admitted to probate. Any passwords, PINs, or seed phrases included in your will are publicly accessible — creating a serious security risk while you are still alive, and during the time between your death and probate. Keep credentials in a separate, secure document and reference its location in your will without including the credentials themselves.
                  </p>
                </div>
              </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Need to Add Digital Assets to Your Illinois Estate Plan?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law drafts wills and revocable trusts with comprehensive digital asset provisions — tailored to your specific accounts, cryptocurrency holdings, and legacy goals. Flat-fee pricing so you always know what you&apos;ll pay.
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

            {/* 7. FAQ */}
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

            {/* 8. Next Steps */}
            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Next Steps
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Digital assets are the fastest-growing and least-planned-for category in modern estate planning. The technology has evolved faster than most estate plans, and the consequences of that gap — permanently lost cryptocurrency, inaccessible family photos, accounts that live on indefinitely — are increasingly affecting Illinois families.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The good news is that the fix is straightforward: a comprehensive digital asset inventory, updated estate planning documents with the right language, and in-platform legacy designations on major accounts. None of these require a technical background — they require the same intentional attention that any other part of a good estate plan demands.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For broader context on how digital assets fit into a complete Illinois estate plan, see our guides on{' '}
              <Link href="/blog/what-is-a-simple-estate-plan-in-chicago-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                what a simple estate plan includes in Chicago
              </Link>
              ,{' '}
              <Link href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                the advantages of a revocable living trust
              </Link>
              , and{' '}
              <Link href="/blog/7-overlooked-steps-that-make-or-break-an-illinois-estate-plan/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                overlooked steps that make or break an Illinois estate plan
              </Link>
              .
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Protect Your Digital Legacy With Illinois Estate Law
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Whether you need a new will or trust with digital asset provisions, or you want to update an existing plan to address cryptocurrency and online accounts, Illinois Estate Law can help. We serve clients across Chicago and throughout Illinois on a flat-fee basis — no billing surprises, no hourly clock running.
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
                  Our Wills &amp; Estate Planning Services
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
                  { href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/', label: 'What Is a Simple Estate Plan in Chicago, Illinois?' },
                  { href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/', label: 'Pros and Cons of a Revocable Living Trust in Illinois' },
                  { href: '/blog/7-overlooked-steps-that-make-or-break-an-illinois-estate-plan/', label: '7 Overlooked Steps That Make or Break an Illinois Estate Plan' },
                  { href: '/blog/beneficiary-designations-override-your-will-illinois/', label: 'Beneficiary Designations Override Your Will in Illinois' },
                  { href: '/blog/what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it/', label: 'What Happens to Your Estate Plan After Divorce in Illinois' },
                  { href: '/blog/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/', label: 'The Financial Impact of Dying Without a Will in Illinois' },
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois digital asset and estate planning law is complex and fact-specific — rules vary by platform, asset type, and individual circumstances. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Digital Assets?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and build an estate plan that covers your digital assets, cryptocurrency, and online accounts — not just the physical ones.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-happens-to-digital-assets-when-you-die-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-happens-to-digital-assets-when-you-die-illinois/')}&text=${encodeURIComponent('What happens to your digital assets when you die in Illinois? Crypto, social media, email — here’s what the law says')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-happens-to-digital-assets-when-you-die-illinois/')}`}
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
