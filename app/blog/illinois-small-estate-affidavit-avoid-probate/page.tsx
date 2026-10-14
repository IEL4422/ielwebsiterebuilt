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
  Scale,
  BookOpen,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'illinois-small-estate-affidavit-avoid-probate';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-the-affidavit', title: 'What Is the Illinois Small Estate Affidavit?', level: 2, numeration: '2' },
    {
      id: 'when-can-you-use-it',
      title: 'When Can You Use It to Avoid Probate?',
      level: 2,
      numeration: '3',
      children: [
        { id: 'the-100k-threshold', title: 'The $150,000 Asset Threshold', level: 3, numeration: '3.1' },
        { id: 'the-30-day-rule', title: 'The 30-Day Waiting Period', level: 3, numeration: '3.2' },
      ],
    },
    { id: 'assets-it-can-transfer', title: 'Assets the Affidavit Can Transfer', level: 2, numeration: '4' },
    { id: 'assets-it-cannot-transfer', title: 'Assets the Affidavit Cannot Transfer', level: 2, numeration: '5' },
    { id: 'step-by-step', title: 'How to Use the Affidavit: Step by Step', level: 2, numeration: '6' },
    { id: 'risks-and-limits', title: 'Risks and Limitations to Know', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'What is the asset limit for the Illinois Small Estate Affidavit?',
      answer:
        'Under 755 ILCS 5/25-1, the gross value of the decedent\'s personal property subject to administration must not exceed $150,000 at the time the affidavit is presented. This figure applies to the personal property covered by the affidavit — it is not a limit on the total size of the estate. If the decedent owned real estate, those assets are handled separately and are not counted toward the $150,000 threshold.',
    },
    {
      question: 'How long do I have to wait before using the Small Estate Affidavit in Illinois?',
      answer:
        'You must wait at least 30 days after the decedent\'s death before presenting the Small Estate Affidavit to a financial institution or other holder of assets. This waiting period gives creditors and other claimants a brief window before assets are distributed. You cannot use the affidavit the day after a death — even if all other requirements are met, the 30-day period is mandatory under Illinois law.',
    },
    {
      question: 'Do I need an attorney to use the Illinois Small Estate Affidavit?',
      answer:
        'No — the Illinois Small Estate Affidavit does not require an attorney. The process is designed to be accessible to heirs without legal representation. That said, certain situations benefit from legal guidance: if there are multiple heirs who disagree, if debts exceed the estate\'s value, if the decedent\'s estate plan is unclear, or if a financial institution is reluctant to accept the affidavit. An estate planning attorney can review your situation and help you avoid missteps that could expose you to personal liability.',
    },
    {
      question: 'Can I use the Small Estate Affidavit if the decedent had a will?',
      answer:
        'Yes. The existence of a will does not disqualify an estate from using the Small Estate Affidavit. As long as the personal property subject to administration does not exceed $150,000 and 30 days have passed since the death, the affidavit may be used even when there is a will — provided no executor has already been appointed by an Illinois probate court. If formal probate has been opened, the affidavit is no longer available for that estate.',
    },
    {
      question: 'What happens if I use the affidavit and there are outstanding debts?',
      answer:
        'The person who presents the Small Estate Affidavit and receives the assets takes on personal liability for the decedent\'s debts up to the value of the assets received. Under 755 ILCS 5/25-1(c), the affiant is liable to creditors, other heirs, and the estate to the extent of the value of the property collected. This means that if you use the affidavit to collect $40,000 from a bank account and the decedent had $15,000 in unpaid medical bills, you may be personally responsible for satisfying those debts from the funds you collected.',
    },
    {
      question: 'Will the Illinois Small Estate Affidavit transfer real estate?',
      answer:
        'No. The Small Estate Affidavit under 755 ILCS 5/25-1 applies only to personal property — it cannot be used to transfer real estate. Real property in Illinois can be transferred outside of probate through other mechanisms, such as a Transfer on Death Instrument (TODI), joint tenancy with right of survivorship, or a revocable living trust. If the decedent owned real estate that was not set up to transfer automatically, a formal probate proceeding or court order will typically be required to pass title to the heirs.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Illinois Small Estate Affidavit: How to Avoid Probate on Small Estates',
    description:
      'Learn when the Illinois Small Estate Affidavit lets heirs collect assets without probate, who qualifies, how to complete the form, and its limits.',
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
    datePublished: '2026-10-14',
    dateModified: '2026-10-14',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/illinois-small-estate-affidavit-avoid-probate/',
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
        <section className="bg-gradient-to-br from-[#2D3E50] via-[#4A708B] to-[#2D3E50] py-16 sm:py-20">
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
                  8 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                Illinois Small Estate Affidavit: How to Avoid Probate on Small Estates
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                When an Illinois estate consists mainly of personal property worth $150,000 or less, heirs may be able to collect assets and skip the probate process entirely — using a simple sworn statement called a Small Estate Affidavit.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>October 14, 2026</time>
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
                <FileText className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Illinois law gives heirs a faster, cheaper alternative to probate for small estates — the Small Estate Affidavit under 755 ILCS 5/25-1.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    If the decedent&apos;s personal property subject to administration is worth $150,000 or less, and at least 30 days have passed since the death, an eligible heir can present a signed, notarized affidavit to a bank or other asset holder and collect those assets without opening a formal probate case in court.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains exactly who qualifies, what assets the affidavit can and cannot reach, how to use it step by step, and the personal liability risks every heir should understand before signing.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reference */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#2D3E50] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Small Estate Affidavit at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: '$150,000 personal property limit (gross value)', type: 'Asset Threshold', color: 'blue' },
                  { label: '30 days must pass after the date of death', type: 'Waiting Period', color: 'amber' },
                  { label: 'Personal property only — real estate is excluded', type: 'Asset Types', color: 'green' },
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

            {/* 2. What Is the Affidavit */}
            <h2 id="what-is-the-affidavit" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is the Illinois Small Estate Affidavit?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Probate — the court-supervised process of paying a decedent&apos;s debts and distributing their assets — can take many months and cost thousands of dollars in attorney fees, court costs, and executor compensation. For families dealing with a modest estate, these costs and delays can consume a significant share of the inheritance. The Illinois Small Estate Affidavit exists precisely to spare those families from a process that, in many cases, is unnecessary.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Under <strong>755 ILCS 5/25-1</strong> of the Probate Act of 1975, an heir or legatee can present a sworn, notarized statement — the Small Estate Affidavit — directly to any person or entity holding the decedent&apos;s personal property. Upon receiving the affidavit, the holder (typically a bank, credit union, brokerage, or employer) is legally authorized to release the assets to the affiant. No court filing is required. No letters of office are issued. The process happens entirely outside of probate court.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The affidavit is not a form you fill out and submit to a government agency — it is a legal declaration you prepare, sign in front of a notary, and present to the institution holding the assets you wish to collect. Many banks have their own version of the form; others will accept a self-prepared document that meets the statutory requirements.
            </p>

            {/* 3. When Can You Use It */}
            <h2 id="when-can-you-use-it" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              When Can You Use It to Avoid Probate?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Two threshold requirements must be satisfied before the Small Estate Affidavit is available. Both are mandatory — there is no exception to either condition.
            </p>

            <h3 id="the-100k-threshold" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The $150,000 Asset Threshold
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The gross value of the decedent&apos;s <strong>personal property subject to administration</strong> must not exceed <strong>$150,000</strong> at the time the affidavit is presented. Several important nuances apply:
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: '"Personal property" means movable assets',
                  body: 'Personal property includes bank accounts, brokerage accounts, vehicles, household goods, business interests, cash, and similar movable assets. Real estate is excluded — the affidavit cannot be used to transfer title to a house, condo, or land.',
                  color: 'blue',
                },
                {
                  title: '"Subject to administration" matters',
                  body: 'Not all assets are subject to administration. Assets that pass by beneficiary designation (IRAs, 401(k)s, life insurance, payable-on-death bank accounts, transfer-on-death brokerage accounts) go directly to the named beneficiary regardless of estate size — they are not counted toward the $150,000 threshold.',
                  color: 'blue',
                },
                {
                  title: 'Gross value, not net value',
                  body: 'The threshold is based on the gross value of the personal property, not its net value after debts. If the decedent had $95,000 in a bank account and $60,000 in credit card debt, the $150,000 test looks at the $95,000 account balance — not the $35,000 net figure after subtracting debts.',
                  color: 'amber',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-6 ${
                    item.color === 'amber' ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <h4 className="font-bold text-gray-900 text-base mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                </div>
              ))}
            </div>

            <h3 id="the-30-day-rule" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The 30-Day Waiting Period
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois law requires a minimum of <strong>30 days to pass from the date of death</strong> before the Small Estate Affidavit can be used. This waiting period gives creditors, other heirs, and interested parties a brief window to come forward before assets are distributed. Presenting the affidavit before 30 days have elapsed makes it legally defective — a financial institution that pays out under a premature affidavit may not be protected from subsequent claims, and the affiant who received the assets could face personal liability.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              There is also a separate disqualifying condition: if a <strong>petition for the appointment of an executor or administrator has already been filed</strong> in an Illinois probate court for the same estate, the Small Estate Affidavit cannot be used. Once formal probate has been opened, the court-supervised process governs the estate, and the simplified affidavit procedure is no longer available.
            </p>

            {/* 4. Assets It Can Transfer */}
            <h2 id="assets-it-can-transfer" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Assets the Affidavit Can Transfer
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The Small Estate Affidavit works well for collecting the following types of assets — provided the total does not exceed $150,000 and all other conditions are met:
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#2D3E50] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Common Assets Collectible by Small Estate Affidavit
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Bank checking and savings accounts (no POD designation)',
                  'Certificates of deposit (no POD designation)',
                  'Brokerage or investment accounts (no TOD designation)',
                  'Wages, salary, or final paycheck owed by an employer',
                  'Refunds, tax refunds, or security deposits',
                  'Personal property and household goods',
                  'Vehicles not jointly titled or TOD-designated',
                  'Business interests worth $150,000 or less in total',
                  'Uncashed checks or money orders payable to the decedent',
                  'Safe deposit box contents (personal property only)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Assets It Cannot Transfer */}
            <h2 id="assets-it-cannot-transfer" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Assets the Affidavit Cannot Transfer
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The affidavit has significant blind spots. Families are sometimes surprised to discover that important assets cannot be collected this way:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  label: 'Real estate',
                  detail:
                    'The Small Estate Affidavit has no effect on real property. Illinois real estate that was not set up to transfer automatically (via TODI, joint tenancy, or a living trust) generally requires a formal probate proceeding or a court order to pass title to heirs.',
                },
                {
                  label: 'Assets with a named beneficiary',
                  detail:
                    'IRAs, 401(k) accounts, life insurance policies, payable-on-death (POD) bank accounts, and transfer-on-death (TOD) brokerage accounts pass directly to the named beneficiary — not through the estate and not through the affidavit. These assets do not need the affidavit and are not affected by it.',
                },
                {
                  label: 'Jointly owned property with right of survivorship',
                  detail:
                    'Assets owned in joint tenancy with right of survivorship — including joint bank accounts, jointly titled vehicles, and jointly owned real estate — pass automatically to the surviving co-owner. They are not subject to the affidavit process.',
                },
                {
                  label: 'Estates already in probate',
                  detail:
                    'Once a petition for appointment of an executor or administrator has been filed in an Illinois probate court, the Small Estate Affidavit is no longer available for that estate. Any institution presented with an affidavit after formal probate has been opened is not protected in releasing assets under it.',
                },
                {
                  label: 'Estates exceeding $150,000 in personal property',
                  detail:
                    'If the gross value of personal property subject to administration exceeds $150,000, the affidavit cannot be used at all — even if you only want to collect a portion of the assets. Formal probate will be required.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">{item.label}:</strong> {item.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* 6. Step by Step */}
            <h2 id="step-by-step" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Use the Illinois Small Estate Affidavit: Step by Step
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The process is not complicated, but each step must be done correctly to avoid rejection by the asset holder or personal liability for the affiant.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: '1',
                  title: 'Confirm all eligibility requirements are met',
                  detail:
                    'Verify that at least 30 days have passed since the death, that the personal property subject to administration does not exceed $150,000 in gross value, and that no probate petition has been filed in an Illinois court.',
                },
                {
                  step: '2',
                  title: 'Identify the assets you intend to collect',
                  detail:
                    'Make a list of the specific accounts, vehicles, or other personal property you are collecting. You will need to describe the property in the affidavit. Gather account statements, vehicle titles, and any relevant documentation.',
                },
                {
                  step: '3',
                  title: 'Determine your legal right to receive the assets',
                  detail:
                    'Your right to the assets must come from a will (as a named legatee) or from Illinois intestate succession law (as a legal heir). Review the decedent\'s will, if one exists, or consult the Illinois intestacy statute (755 ILCS 5/2-1) to confirm your share.',
                },
                {
                  step: '4',
                  title: 'Prepare the affidavit',
                  detail:
                    'Illinois does not have one official statewide Small Estate Affidavit form — many banks have their own. The affidavit must state: the decedent\'s name and date of death; that 30 days have elapsed; that no probate petition has been filed; the gross value of the personal property; the affiant\'s entitlement to the property; and an acknowledgment of personal liability for the decedent\'s debts up to the value received.',
                },
                {
                  step: '5',
                  title: 'Sign before a notary public',
                  detail:
                    'The affidavit must be signed and notarized. Illinois notaries are available at many banks, UPS Stores, law offices, and online through platforms authorized by Illinois law. The signature must be made in the notary\'s presence.',
                },
                {
                  step: '6',
                  title: 'Present the affidavit to the asset holder',
                  detail:
                    'Bring or send the notarized affidavit — along with a certified copy of the death certificate and any other documentation the institution requires — to the bank, brokerage, employer, or other holder. Each institution may have its own internal process and may ask for additional documents.',
                },
                {
                  step: '7',
                  title: 'Receive the assets and pay the decedent\'s debts',
                  detail:
                    'Once the asset holder releases the funds or property, you are personally responsible for paying any valid debts of the decedent from the assets received before distributing the remainder to other heirs. Failing to do so can expose you to personal liability.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-5">
                  <div className="w-9 h-9 rounded-full bg-[#2D3E50] text-white flex items-center justify-center text-sm font-bold flex-shrink-0 font-['Plus_Jakarta_Sans']">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#2D3E50] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Not Sure Whether You Qualify? We Can Help.
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps families evaluate whether the Small Estate Affidavit is the right tool — and handles the paperwork when formal probate is needed. Flat-fee pricing, no surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#2D3E50] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/chicago-probate-lawyer/"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Probate Services
                </Link>
              </div>
            </div>

            {/* 7. Risks and Limits */}
            <h2 id="risks-and-limits" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Risks and Limitations to Know
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The Small Estate Affidavit is a powerful tool, but it comes with real risks that can catch unprepared heirs off guard.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#2D3E50] text-white rounded-xl p-5">
                <Scale className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Personal Liability for Debts</h4>
                <p className="text-sm text-white/85 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Under 755 ILCS 5/25-1(c), the affiant is personally liable to creditors, other heirs, and the estate up to the full value of the assets received. If you collect $80,000 from a bank account and the decedent owed $30,000 in medical bills, those creditors can pursue you personally for what they are owed — up to $80,000. Always identify known debts before presenting the affidavit.
                </p>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-5">
                <Shield className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Institutions May Refuse</h4>
                <p className="text-sm text-white/85 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Illinois law protects financial institutions that pay out in good faith under a valid Small Estate Affidavit, but it does not compel them to accept it. Some banks have internal policies requiring a minimum account balance, specific internal forms, or additional documentation. If an institution refuses, you may need to open formal probate — or, in some cases, seek legal assistance to persuade the institution.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">
                    The affidavit does not settle the estate — it only collects assets
                  </p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Many families assume that using the Small Estate Affidavit closes the estate and resolves all financial matters. It does not. The affidavit is simply a mechanism for collecting personal property without court involvement. You are still responsible for paying valid creditors, filing final tax returns, and distributing the remaining assets to the correct heirs in accordance with the will or Illinois intestacy law.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When the estate is more complex — multiple heirs who disagree, disputed debts, a mix of real estate and personal property, or a decedent who died without a will in an unclear family situation — the modest savings of avoiding probate may not outweigh the risks of the affidavit process. In those situations, consulting a <Link href="/chicago-probate-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Chicago probate attorney</Link> before proceeding is strongly advisable.
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
              If you have recently lost a loved one and believe the Small Estate Affidavit may apply, start by gathering a certified copy of the death certificate, identifying all personal property accounts and their approximate values, and confirming whether any of those assets already have beneficiary designations. Then count 30 days from the date of death before taking any further steps.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If the estate includes real estate, significant debts, multiple heirs, or property that exceeds the $150,000 threshold, formal <Link href="/chicago-probate-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">probate</Link> will likely be required. Illinois Estate Law handles uncontested probate matters on a flat-fee basis, so you will know your costs before we begin. If you are planning ahead rather than responding to a loss, the best way to help your own family avoid probate is to work with an Illinois estate planning attorney to set up beneficiary designations, <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">a revocable living trust</Link>, or a <Link href="/blog/illinois-transfer-on-death-instrument-guide/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Transfer on Death Instrument</Link> for your home — tools that let assets transfer automatically without court involvement, regardless of estate size.
            </p>

            <div className="bg-[#2D3E50] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Questions About a Small Estate in Illinois?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps families navigate probate — whether that means using the Small Estate Affidavit, handling an uncontested probate, or building an estate plan that avoids probate entirely. Schedule a free consultation to discuss your situation.
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
                  Probate Services
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
              <h3 className="font-bold text-[#2D3E50] mb-3 font-['Plus_Jakarta_Sans']">
                Related Illinois Probate &amp; Estate Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/blog/how-long-does-probate-take-in-illinois/',
                    label: 'How Long Does Probate Take in Illinois?',
                  },
                  {
                    href: '/blog/how-much-does-probate-cost-in-illinois/',
                    label: 'How Much Does Probate Cost in Illinois?',
                  },
                  {
                    href: '/blog/when-is-probate-required-in-illinois/',
                    label: 'When Is Probate Required in Illinois?',
                  },
                  {
                    href: '/blog/how-transfer-on-death-instruments-work-in-illinois/',
                    label: 'How Transfer on Death Instruments Work in Illinois',
                  },
                  {
                    href: '/blog/illinois-inheritance-laws-dying-without-a-will/',
                    label: 'Illinois Inheritance Laws: Dying Without a Will',
                  },
                  {
                    href: '/blog/what-is-summary-probate-in-cook-county-illinois/',
                    label: 'What Is Summary Probate in Cook County, Illinois?',
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-[#4a708b] hover:text-[#2D3E50] text-sm font-medium hover:underline transition-colors font-['Plus_Jakarta_Sans']"
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
                  <h3 className="text-xl font-bold mb-3 text-[#2D3E50] font-['Plus_Jakarta_Sans']">
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois probate and estate administration law are complex and fact-specific — the appropriate approach for any particular estate depends on the specific assets, debts, family circumstances, and governing documents involved. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#2D3E50] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Handle a Small Illinois Estate?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and get clear answers about whether the Small Estate Affidavit works for your situation — or what formal probate would involve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:3123730731"
                  className="inline-block bg-white text-[#2D3E50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-['Plus_Jakarta_Sans']"
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-small-estate-affidavit-avoid-probate/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-small-estate-affidavit-avoid-probate/')}&text=${encodeURIComponent('Illinois Small Estate Affidavit: How to avoid probate on small estates')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-small-estate-affidavit-avoid-probate/')}`}
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
