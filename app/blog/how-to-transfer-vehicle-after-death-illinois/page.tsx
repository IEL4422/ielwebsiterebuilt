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
  Shield,
  Car,
  BookOpen,
  Users,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-transfer-vehicle-after-death-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    {
      id: 'probate-required',
      title: 'Does a Vehicle Have to Go Through Probate?',
      level: 2,
      numeration: '2',
      children: [
        { id: 'when-probate-required', title: 'When Probate Is Required', level: 3, numeration: '2.1' },
        { id: 'when-probate-avoided', title: 'When Probate Can Be Avoided', level: 3, numeration: '2.2' },
      ],
    },
    { id: 'affidavit-transfer', title: 'Transferring a Vehicle with an Illinois Affidavit', level: 2, numeration: '3' },
    { id: 'probate-transfer', title: 'How to Transfer a Vehicle Through Illinois Probate', level: 2, numeration: '4' },
    { id: 'joint-ownership', title: 'Transferring a Jointly Owned Vehicle in Illinois', level: 2, numeration: '5' },
    { id: 'step-by-step', title: 'Step-by-Step Title Transfer Process', level: 2, numeration: '6' },
    { id: 'fees-taxes', title: 'Fees, Taxes, and Costs', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Can I just drive and sell a deceased person\'s car in Illinois without transferring the title?',
      answer:
        'No. Driving a vehicle titled in a deceased person\'s name creates real legal and insurance problems. The deceased\'s auto insurance policy typically terminates at death or shortly thereafter, which means the vehicle is likely uninsured. Selling the car without a title transfer is also improper — the buyer cannot legally register the vehicle without a clean title in their own name. You must complete the title transfer process through the Illinois Secretary of State before the vehicle is legally yours to drive or sell. The process is straightforward for most estates; do not skip it.',
    },
    {
      question: 'What if there is no will and no estate is opened — how do I get the car title transferred?',
      answer:
        'When someone dies without a will and no formal probate estate is opened, Illinois allows close family members to use an Affidavit of Heirship for Motor Vehicles (Form VSD 106) to claim a vehicle. The heir signs the affidavit under oath identifying themselves as the rightful heir (spouse, child, parent, or other close relative) and presents it to an Illinois Secretary of State facility along with the current title and a copy of the death certificate. This process works well for modest estates without disputes. If the family members disagree about who should receive the vehicle, a formal probate proceeding may be necessary to resolve the conflict.',
    },
    {
      question: 'How long does it take to transfer a car title after a death in Illinois?',
      answer:
        'The timeline depends on which transfer method applies. For a surviving joint tenant or a named TOD beneficiary, the title can usually be transferred at a Secretary of State facility within days — as soon as you gather the required documents. For transfers using an Affidavit of Heirship, the process similarly takes only a few days once the paperwork is complete. For vehicles going through formal probate, the timeline is tied to how long probate takes — typically 9 to 18 months for a standard Illinois estate. However, the executor can apply to the Secretary of State for a probate title transfer at any point after receiving Letters of Office, so the vehicle transfer does not have to wait until probate closes.',
    },
    {
      question: 'Does transferring a vehicle after a death trigger Illinois inheritance tax?',
      answer:
        'Illinois does not have an inheritance tax — so no inheritance tax applies to a vehicle received from a deceased person\'s estate. Illinois does have an estate tax, but it applies to estates with total gross assets over $4 million and is paid by the estate, not by the individual heirs. When you transfer the vehicle title at a Secretary of State facility, you will pay a standard title transfer fee (currently $150 for a standard passenger vehicle). If you later sell the vehicle, you may owe capital gains tax on any appreciation above the stepped-up basis the vehicle received at the date of death.',
    },
    {
      question: 'What if the vehicle has a loan on it — can I still transfer the title?',
      answer:
        'Yes, but with a critical difference: the lender (lienholder) is listed on the title and must release the lien before a clean title can transfer to the heir. If the estate has enough assets to pay off the loan, the executor pays off the debt and the lender releases the lien. The heir can then transfer the title free and clear. If the heir wants to keep the vehicle and continue making payments, they must contact the lender to explore assuming the loan or refinancing it in their own name. If the vehicle is worth less than the loan balance, the executor may choose to surrender it to the lender rather than incur further estate debt. Inherited vehicles with liens require communication with the lender early in the process.',
    },
    {
      question: 'Can I add a vehicle to a revocable living trust to avoid probate?',
      answer:
        'Yes, and many estate planning attorneys recommend it for valuable vehicles, classic cars, or collector vehicles. To transfer a vehicle into a revocable living trust in Illinois, you retitle the vehicle in the name of the trust at a Secretary of State facility. Upon your death, the successor trustee manages and distributes the vehicle under the trust terms — completely outside of probate, without court involvement, and with no public record of the transfer. For everyday vehicles of modest value, the administrative effort may not be worth it; a properly executed Affidavit of Heirship or joint tenancy often suffices. For high-value vehicles, trust ownership provides privacy, speed, and seamless transfer that probate cannot match.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Transfer a Vehicle After Death in Illinois',
    description:
      'Learn how to transfer a car title after someone dies in Illinois — whether through probate, an affidavit of heirship, joint tenancy, or a revocable living trust. Step-by-step guide.',
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
    datePublished: '2026-09-16',
    dateModified: '2026-09-16',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/how-to-transfer-vehicle-after-death-illinois/',
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
                  Probate &amp; Estate Administration
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                How to Transfer a Vehicle After Death in Illinois
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                When a family member dies, their car doesn&apos;t automatically become yours — even if you were the only one who ever drove it. Illinois law requires a formal title transfer, but the process varies dramatically depending on how the vehicle was owned. Here&apos;s exactly how it works.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>September 16, 2026</time>
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
                    In Illinois, a vehicle titled solely in a deceased person&apos;s name must be transferred through either probate, an Affidavit of Heirship for Motor Vehicles, or another recognized mechanism before it legally belongs to an heir or beneficiary.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    The right transfer method depends on how the vehicle was titled, the total value of the estate, and whether a will or trust exists. Many families can skip formal probate entirely using an Illinois Affidavit of Heirship. Others — particularly where the estate is larger or disputes exist — must go through the Circuit Court.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide walks through every vehicle transfer scenario Illinois families face after a death, the required documents, and the step-by-step process at the Illinois Secretary of State.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick at-a-glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                At a Glance: Illinois Vehicle Transfer Methods
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Affidavit of Heirship — no probate required for most modest estates', type: 'Simplest Path', color: 'green' },
                  { label: 'Letters of Office from probate court required for sole-owner estates', type: 'Probate Path', color: 'blue' },
                  { label: 'Surviving joint tenant or TOD beneficiary transfers with death certificate only', type: 'Fastest Path', color: 'amber' },
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

            {/* 2. Does a Vehicle Have to Go Through Probate? */}
            <h2 id="probate-required" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Does a Vehicle Have to Go Through Probate in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The short answer: it depends entirely on how the vehicle was titled. Not every vehicle requires probate. In fact, many Illinois families successfully transfer a deceased person&apos;s vehicle without ever opening a probate estate. But when formal probate is required, the vehicle becomes part of the estate and must be administered accordingly.
            </p>

            <h3 id="when-probate-required" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              When Probate Is Required
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Probate is generally required for a vehicle transfer when:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  title: 'The vehicle is titled solely in the deceased\'s name',
                  detail: 'A car registered only to the deceased — no co-owner, no joint tenancy, no TOD designation — is a probate asset. To transfer the title, the estate must either go through formal probate proceedings or qualify for an affidavit-based transfer (see below). The executor or administrator receives Letters of Office from the Circuit Court and uses those to complete the title transfer.',
                },
                {
                  title: 'The total estate value exceeds the affidavit threshold',
                  detail: "Current Illinois law gives qualifying motor vehicles special treatment. When an affidavit is used solely for a Secretary of State title transaction, qualifying motor vehicles can be transferred without counting their value toward the $150,000 personal-estate limit. Motor homes, commercial vehicles, buses, and certain other vehicle types are excluded from this special rule.",
                },
                {
                  title: 'There are disputes among heirs about who receives the vehicle',
                  detail: 'When family members disagree about who should inherit a vehicle, the probate court is the proper venue to resolve the conflict. A judge can determine the rightful heir based on the will or, if there is no will, Illinois intestacy law. Without court involvement, competing claimants have no neutral forum to settle the dispute.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 id="when-probate-avoided" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              When Probate Can Be Avoided
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Several common titling arrangements allow vehicles to transfer to a new owner without going through probate at all:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: 'Joint Tenancy with Right of Survivorship',
                  body: "If the vehicle is titled in two names with the designation 'JTWROS' or 'joint tenancy with right of survivorship,' the surviving co-owner becomes the sole owner automatically at death. No probate is needed — just a death certificate and the existing title.",
                  color: 'green',
                },
                {
                  title: 'Transfer on Death (TOD) Designation',
                  body: "Illinois allows vehicle owners to name a TOD beneficiary directly on the title. When the owner dies, the vehicle passes to the named beneficiary immediately — bypassing probate entirely. The beneficiary transfers the title using the death certificate and original title.",
                  color: 'green',
                },
                {
                  title: 'Affidavit of Heirship',
                  body: "Illinois allows qualifying successors to request a vehicle title transfer using the Secretary of State's applicable affidavit process without opening a formal probate estate in some cases. Current law excludes qualifying motor vehicles from the $150,000 personal-estate calculation when the affidavit is used solely for the title transaction.",
                  color: 'blue',
                },
                {
                  title: 'Trust Ownership',
                  body: "A vehicle titled in the name of a revocable living trust is not a probate asset. The successor trustee transfers or distributes the vehicle under the trust terms after the grantor dies — privately, without court involvement, and with no public record.",
                  color: 'blue',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-5 ${
                    item.color === 'green' ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <h4
                    className={`font-bold mb-2 font-['Plus_Jakarta_Sans'] text-sm ${
                      item.color === 'green' ? 'text-green-800' : 'text-blue-800'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Check the actual title — not just what you were told</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Many families assume a vehicle is jointly owned or has a beneficiary designated — only to discover the title says otherwise. Before choosing a transfer method, locate the physical title certificate (or request a duplicate from the Illinois Secretary of State) and read the ownership line carefully. How the name appears — and whether &quot;or,&quot; &quot;and,&quot; or &quot;JTWROS&quot; appears — determines what happens at death. Do not rely on assumptions or what the owner told you; look at the actual document.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Affidavit Transfer */}
            <h2 id="affidavit-transfer" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Transferring a Vehicle with an Illinois Affidavit of Heirship
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For most Illinois families dealing with a vehicle from a modest estate, the <strong>Affidavit of Heirship for Motor Vehicles (Form VSD 106)</strong> is the simplest and fastest transfer tool available. It allows a qualified heir to claim a vehicle without opening a formal probate estate in the Circuit Court.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Current Illinois law gives qualifying motor vehicles special treatment. If the affidavit is used solely for a Secretary of State title transaction, the qualifying vehicle does not count toward the <em>$150,000 personal-estate limit</em>. This exception does not cover motor homes, commercial vehicles, buses, and certain other excluded vehicle types, and other estate assets may still require probate.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Who Can Use the Affidavit of Heirship?
              </h3>
              <p className="text-sm text-gray-700 mb-4 font-['Plus_Jakarta_Sans']">
                Illinois limits who may claim a vehicle by affidavit. Eligible claimants generally include:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Surviving spouse',
                  'Adult child or children (splitting ownership)',
                  'Parent of the deceased',
                  'Sibling of the deceased (if no closer relatives survive)',
                  'Named beneficiary in a valid will',
                  'Legal guardian of a minor heir',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 font-['Plus_Jakarta_Sans']">
                When multiple heirs of equal priority exist (e.g., two adult children), they must agree on how to handle the vehicle — the Secretary of State cannot resolve ownership disputes between competing claimants.
              </p>
            </div>

            <div className="space-y-3 my-6">
              <h3 className="text-lg font-bold text-[#33414E] font-['Plus_Jakarta_Sans']">Documents Required for the Affidavit Process</h3>
              {[
                {
                  title: 'Completed Form VSD 106 (Affidavit of Heirship)',
                  detail: 'The affidavit must be completed and signed by the claimant under oath. It identifies the deceased, the vehicle, and the basis for the claimant\'s right to the vehicle. The form is available at any Illinois Secretary of State facility or at the Secretary of State\'s website.',
                },
                {
                  title: 'Original vehicle title certificate',
                  detail: "The title must be in the deceased's name. If the original title is lost, a duplicate title must be obtained from the Secretary of State before the transfer can proceed. The duplicate title application (Form VSD 190) requires a fee.",
                },
                {
                  title: 'Certified copy of the death certificate',
                  detail: "A certified copy of the death certificate — not a photocopy — is required. Certified copies are obtained from the Illinois Department of Public Health (IDPH) or the local vital records office in the county where death occurred. You will typically need at least 2–3 certified copies for various administrative purposes.",
                },
                {
                  title: 'Odometer disclosure statement (if vehicle is under 10 years old)',
                  detail: 'Federal law requires an odometer disclosure when a vehicle under 10 model years old changes hands. The back of the Illinois title certificate typically includes a space for this disclosure.',
                },
                {
                  title: 'Payment for title transfer fee',
                  detail: 'As of 2026, the standard Illinois vehicle title transfer fee is $150 for a passenger vehicle. A $15 duplicate title fee applies if the original title must be replaced. Check the Secretary of State\'s current fee schedule for the latest amounts.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#4A708B] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Probate Transfer */}
            <h2 id="probate-transfer" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Transfer a Vehicle Through Illinois Probate
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When probate is required because of other assets, individually owned real estate, disputes, or another legal complication, the vehicle may become part of the probate administration. The executor or court-appointed administrator has authority to transfer it once they receive <strong>Letters of Office</strong> from the Circuit Court.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The executor&apos;s vehicle-related responsibilities during probate include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#33414E] text-white rounded-xl p-6">
                <Car className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans']">Executor&apos;s Vehicle Duties</h3>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Locate and secure the vehicle and its title certificate',
                    'Obtain insurance coverage for the vehicle during administration',
                    'Include the vehicle in the estate inventory at fair market value (Kelly Blue Book or comparable)',
                    'Decide whether to sell or distribute the vehicle to a beneficiary',
                    'If selling: sign the title as executor and disclose the odometer reading',
                    'If distributing to an heir: complete the title transfer using Letters of Office',
                    'Pay any outstanding liens before transferring clean title',
                    'Account for the vehicle in the final estate accounting',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <AlertCircle className="w-8 h-8 mb-3 text-red-500" />
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans'] text-red-800">Common Executor Mistakes</h3>
                <ul className="space-y-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  {[
                    'Allowing heirs to take possession before the title is legally transferred',
                    'Letting existing auto insurance lapse without replacement coverage',
                    'Signing a title without Letters of Office in hand',
                    'Selling the vehicle below fair market value without court approval',
                    'Distributing the vehicle before creditors are notified and the claims period closes',
                    'Forgetting to include the vehicle in the formal estate inventory',
                    'Assuming a loan is paid off — always confirm lien status with the lender',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">What Does the Executor Sign on the Title?</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    When an executor transfers a vehicle title in Illinois, they sign the seller&apos;s section of the title as &quot;[Name], Executor of the Estate of [Deceased],&quot; and present their Letters of Office at the Secretary of State facility. The Letters of Office are their legal credential showing they are authorized to act on behalf of the estate. Unlike a standard private sale, the executor does not sign in their personal capacity — they sign in their fiduciary capacity as estate representative. The transferee (heir or buyer) completes the buyer&apos;s section as normal.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Joint Ownership */}
            <h2 id="joint-ownership" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Transferring a Jointly Owned Vehicle in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Joint ownership of a vehicle in Illinois is common — especially between spouses. But how the joint ownership is structured makes a critical difference in what happens at death.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Joint Ownership Structures and What Happens at Death
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    structure: 'John Smith AND Mary Smith (or "AND")',
                    outcome: 'Both owners must sign to sell or transfer. At death of one owner, the vehicle may need to go through probate unless the other owner can use an affidavit. The "and" language does NOT create survivorship rights.',
                    risk: 'high',
                  },
                  {
                    structure: 'John Smith OR Mary Smith (or "OR")',
                    outcome: 'Either owner can act independently — one signature transfers the vehicle. At death, the surviving owner can often transfer the title by showing their own ID and the death certificate, because "or" implies independence.',
                    risk: 'low',
                  },
                  {
                    structure: 'John Smith and Mary Smith JTWROS (Joint Tenancy with Right of Survivorship)',
                    outcome: 'The surviving owner inherits the full vehicle automatically at the co-owner\'s death. No probate required. The survivor presents the death certificate and existing title at the Secretary of State to re-title the vehicle in their name alone.',
                    risk: 'none',
                  },
                  {
                    structure: 'John Smith TOD Mary Smith (Transfer on Death)',
                    outcome: 'Mary receives the vehicle automatically upon John\'s death. The TOD designation is recorded on the title itself. Mary presents the death certificate and original title to complete the transfer — no probate, no affidavit required.',
                    risk: 'none',
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <span
                      className={`flex-shrink-0 w-3 h-3 rounded-full mt-1.5 ${
                        item.risk === 'high'
                          ? 'bg-red-400'
                          : item.risk === 'low'
                          ? 'bg-amber-400'
                          : 'bg-green-400'
                      }`}
                    />
                    <div>
                      <p className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.structure}</p>
                      <p className="text-gray-600 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 bg-gray-100 flex gap-4 text-xs font-['Plus_Jakarta_Sans'] text-gray-500">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" /> Probate likely required</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Probate may be avoidable</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" /> No probate required</span>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The lesson here is significant: two spouses who title a vehicle as &quot;John AND Mary Smith&quot; — rather than &quot;JTWROS&quot; — may inadvertently create a probate asset out of a vehicle they both assumed would pass seamlessly. Reviewing how vehicles (and all significant property) are titled is a critical part of any{' '}
              <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                comprehensive Illinois estate plan
              </Link>
              .
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Need Help With a Vehicle Transfer or Illinois Probate?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps executors and families navigate the probate process — from opening the estate to transferring assets and closing the case. Flat-fee probate representation so you always know what you&apos;ll pay.
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
                  Illinois Probate Services
                </Link>
              </div>
            </div>

            {/* 6. Step-by-Step */}
            <h2 id="step-by-step" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Step-by-Step: Title Transfer Process at the Illinois Secretary of State
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Regardless of which transfer method applies — affidavit, joint tenancy, TOD, or probate — the final step for all Illinois vehicle title transfers is a visit to an <strong>Illinois Secretary of State facility</strong>. Titles are issued and transferred by the Secretary of State, not the probate court. Here is what the process looks like from start to finish:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  step: 'Step 1',
                  title: 'Gather all required documents',
                  detail: "Depending on your transfer method, this includes: the original vehicle title (or duplicate if lost), a certified copy of the death certificate, Letters of Office (if going through probate), completed Form VSD 106 (if using the affidavit method), the odometer disclosure (for vehicles under 10 years old), and payment for the title transfer fee. Do not arrive at a Secretary of State facility without everything — incomplete submissions will be turned away.",
                  color: '#33414E',
                },
                {
                  step: 'Step 2',
                  title: 'Complete any required signatures on the current title',
                  detail: "The back of the title certificate contains the seller's (transferor's) signature section. For a standard transfer, the executor signs as executor with their title, the date, and the odometer reading. For an affidavit transfer, the heirs complete the affidavit form instead. For a joint tenancy or TOD transfer, the surviving owner or beneficiary signs as the new owner. Signatures must match exactly — no cross-outs or corrections on the title certificate are acceptable.",
                  color: '#33414E',
                },
                {
                  step: 'Step 3',
                  title: 'Visit a Secretary of State facility',
                  detail: "Illinois has dozens of Secretary of State driver services facilities across the state. For Cook County residents, facilities are located throughout Chicago and the suburbs. The facility will review your documents, process the title transfer, collect the applicable fee, and issue a new title in the transferee's name. Most facilities handle vehicle title transfers on a walk-in basis; check wait times on the Secretary of State's website.",
                  color: '#4A708B',
                },
                {
                  step: 'Step 4',
                  title: 'Receive new title certificate',
                  detail: "After processing, the Secretary of State mails a new title certificate to the new owner's address — typically within 2 to 4 weeks. The vehicle can be driven in the meantime; the facility will provide a receipt confirming the transfer was processed. If the vehicle will be registered in the new owner's name as well, registration renewal fees will also apply.",
                  color: '#4A708B',
                },
                {
                  step: 'Step 5',
                  title: 'Update insurance and registration',
                  detail: "Once the title transfer is processed, the new owner should contact their auto insurer to add the vehicle to their policy. If the deceased's policy covered the vehicle, that policy will need to be cancelled or updated. Driving a vehicle without valid insurance is illegal in Illinois — do not wait until the new title arrives to arrange coverage.",
                  color: '#33414E',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span
                      className="text-white w-16 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 font-['Plus_Jakarta_Sans']"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 7. Fees & Taxes */}
            <h2 id="fees-taxes" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Fees, Taxes, and Costs
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Transferring a vehicle after a death in Illinois involves several potential costs. Here is a plain-language breakdown:
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Costs to Expect in a Vehicle Title Transfer
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    item: 'Title Transfer Fee',
                    cost: '$150 (standard passenger vehicle)',
                    notes: 'Paid to the Illinois Secretary of State at the time of transfer. Motorcycles, trailers, and other vehicle types may have different fees.',
                  },
                  {
                    item: 'Duplicate Title (if original is lost)',
                    cost: '$15',
                    notes: 'Required if the original title cannot be located. Apply on Form VSD 190 at a Secretary of State facility.',
                  },
                  {
                    item: 'Certified Death Certificate',
                    cost: '$19 per copy (Illinois IDPH rate)',
                    notes: 'You will typically need 2–3 certified copies for the vehicle transfer and other estate purposes. Fees vary slightly by county.',
                  },
                  {
                    item: 'Registration Renewal',
                    cost: 'Varies by vehicle type',
                    notes: 'If the registration is being transferred along with the title, applicable registration fees apply. You may also need new license plates if the plates stay with the estate.',
                  },
                  {
                    item: 'Illinois Inheritance Tax',
                    cost: '$0',
                    notes: 'Illinois has no inheritance tax. Heirs do not pay tax simply for receiving a vehicle from an estate.',
                  },
                  {
                    item: 'Illinois Estate Tax (if applicable)',
                    cost: 'Paid by the estate, not the heir',
                    notes: 'Only applies if the total gross estate exceeds $4 million. The estate pays any tax owed — not individual heirs who receive property.',
                  },
                  {
                    item: 'Capital Gains Tax on Future Sale',
                    cost: 'Depends on sale price vs. stepped-up basis',
                    notes: 'When you later sell an inherited vehicle, your tax basis is the fair market value on the date of the original owner\'s death (stepped-up basis). You owe capital gains only on appreciation above that value.',
                  },
                ].map((item, i) => (
                  <div key={i} className={`grid grid-cols-3 gap-4 px-6 py-4 text-sm font-['Plus_Jakarta_Sans'] ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="font-medium text-[#33414E]">{item.item}</div>
                    <div className="font-bold text-[#4A708B]">{item.cost}</div>
                    <div className="text-gray-600 text-xs">{item.notes}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One fee not listed above: <strong>attorney fees</strong> for probate administration. If the vehicle is part of a formal probate estate, attorney fees are part of the broader estate administration cost. Illinois Estate Law handles probate matters on a flat-fee basis — visit our{' '}
              <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                services and pricing page
              </Link>{' '}
              to see what estate administration costs at our firm.
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
              Transferring a vehicle after a death in Illinois is manageable when you know which method applies. Start by locating the physical title certificate and reading the ownership designation carefully. That single document tells you everything — whether you need probate, an affidavit, or simply a trip to the Secretary of State with a death certificate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are serving as executor of an Illinois estate that includes a vehicle, include the vehicle in your formal inventory, insure it during administration, and do not distribute it to heirs until the probate claims period has closed. Our guide on{' '}
              <Link href="/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                administering an Illinois estate as executor
              </Link>{' '}
              walks through every step of the process.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Looking ahead: the best time to avoid vehicle transfer complications for your own family is now. Adding a JTWROS designation, naming a TOD beneficiary, or titling a vehicle in your{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trust
              </Link>{' '}
              can ensure your vehicles pass quickly and without court involvement. These are simple adjustments that take minutes — and can save your family weeks of effort after your death.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Whether you need help transferring a vehicle after a loved one&apos;s death or want to update your own estate plan to avoid probate for your assets, Illinois Estate Law is here to help. Transparent flat-fee pricing with a free initial consultation.
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
                  Illinois Probate Services
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
                  {
                    href: '/blog/how-long-does-probate-take-in-illinois/',
                    label: 'How Long Does Probate Take in Illinois?',
                  },
                  {
                    href: '/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/',
                    label: "So You've Been Named Executor: A Comprehensive Guide",
                  },
                  {
                    href: '/blog/how-to-handle-deceased-persons-debt-illinois/',
                    label: "How to Handle a Deceased Person's Debt in Illinois",
                  },
                  {
                    href: '/blog/how-to-complete-a-small-estate-affidavit-in-illinois/',
                    label: 'How to Complete a Small Estate Affidavit in Illinois',
                  },
                  {
                    href: '/blog/illinois-inheritance-laws-dying-without-a-will/',
                    label: 'Illinois Inheritance Laws: Dying Without a Will',
                  },
                  {
                    href: '/blog/joint-tenancy-vs-tenancy-in-common-illinois/',
                    label: 'Joint Tenancy vs. Tenancy in Common in Illinois',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois vehicle title transfer rules, fee amounts, and affidavit eligibility thresholds may change; verify current requirements with the Illinois Secretary of State. Consult a licensed Illinois attorney for guidance tailored to your specific situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Questions About Transferring a Vehicle After Death in Illinois?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and get clear answers about vehicle transfers, probate, and how to protect your family from unnecessary court involvement.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-transfer-vehicle-after-death-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-transfer-vehicle-after-death-illinois/')}&text=${encodeURIComponent('How to Transfer a Vehicle After Death in Illinois — affidavit, probate, joint tenancy, and TOD explained')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-transfer-vehicle-after-death-illinois/')}`}
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
