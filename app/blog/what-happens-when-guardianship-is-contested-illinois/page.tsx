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

const SLUG = 'what-happens-when-guardianship-is-contested-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-makes-contested', title: 'What Makes a Guardianship "Contested"?', level: 2, numeration: '2' },
    { id: 'common-scenarios', title: 'Common Contested Guardianship Scenarios', level: 2, numeration: '3' },
    { id: 'the-process', title: 'How a Contested Guardianship Unfolds', level: 2, numeration: '4' },
    { id: 'standard-of-proof', title: 'The Standard of Proof', level: 2, numeration: '5' },
    { id: 'removing-a-guardian', title: 'Removing or Replacing a Guardian', level: 2, numeration: '6' },
    { id: 'how-fees-work', title: 'How Fees Work in a Contested Guardianship', level: 2, numeration: '7' },
    { id: 'flat-to-contested', title: 'When a Flat-Fee Guardianship Becomes Contested', level: 2, numeration: '8' },
    { id: 'protecting-your-family', title: 'How to Reduce the Risk of a Contested Guardianship', level: 2, numeration: '9' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '10' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '11' },
  ];

  const faqs = [
    {
      question: 'What makes a guardianship contested in Illinois?',
      answer:
        'A guardianship becomes contested the moment someone formally opposes it in court. That usually happens in one of three ways: the respondent (the person alleged to be disabled) objects — either to being found disabled at all or to the particular person asking to serve as guardian; a relative or other interested party files a competing petition asking to be appointed instead; or someone petitions to remove or replace a guardian who is already serving. Until an objection is on file, a guardianship is simply "uncontested," even if family members are unhappy. Once opposition is formalized, the matter shifts from a routine appointment into litigation with discovery, a guardian ad litem, and an evidentiary hearing before the judge.',
    },
    {
      question: 'How long does a contested guardianship take?',
      answer:
        'A contested guardianship in Illinois typically takes six months to a year or more from filing to a final ruling, and complex disputes can run longer. The timeline depends on how crowded the court call is, how much discovery the parties pursue, whether an independent medical evaluation is ordered, and how many days of hearing the judge needs to reach a decision. By comparison, an uncontested guardianship petition often moves through the court in a matter of weeks. The added time in a contested case comes from the litigation itself — the guardian ad litem investigation, exchanging documents and depositions, and scheduling an evidentiary hearing — not from any single step being slow.',
    },
    {
      question: 'How much does a contested guardianship cost?',
      answer:
        'A contested guardianship is billed hourly against a retainer rather than at a flat fee, because the opposing party — not the attorney — drives how much work the case requires. Every objection, motion, deposition, and hearing date the other side pursues adds hours, so no responsible firm can promise a fixed price for litigation whose scope it does not control. Costs are billed separately from attorney fees; the largest of these is usually the guardian ad litem\'s fee, which the court sets and allocates. Because the total depends entirely on how hard the matter is fought, we discuss the retainer, the hourly structure, and cost expectations directly with you before we begin. You can review how contested guardianship fees are handled on our guardianship page.',
    },
    {
      question: 'What happens to my flat fee if my guardianship becomes contested?',
      answer:
        'If a matter you engaged us for on a flat fee — such as an uncontested minor guardianship — later becomes contested, it converts to hourly billing against a retainer. The unearned portion of the flat fee you have already paid — the part we have not yet earned, as determined by the firm — is credited toward that retainer and held in our client trust account. It is drawn down only as fees are actually earned and billed, and we notify you in writing of the exact amount credited. None of this is a surprise: we explain the conversion up front and write it into the engagement agreement, so you know before signing exactly how a flat fee is handled if the case turns into litigation.',
    },
    {
      question: 'Can a guardian be removed in Illinois?',
      answer:
        'Yes. An Illinois court can remove and replace a guardian who fails to meet the duties of the role — for example, failing to file required accountings, self-dealing or otherwise misusing the ward\'s assets, neglecting the ward\'s care needs, or serving under a conflict of interest that harms the ward. An interested party petitions the court, the guardian has an opportunity to respond, and the judge decides whether removal is warranted and who should serve instead. Because a removal petition often involves alleged financial harm, it is frequently paired with a claim for a surcharge or breach of fiduciary duty, asking the guardian to repay the estate for losses caused by the misconduct.',
    },
    {
      question: 'What is the standard of proof for adult guardianship?',
      answer:
        'To appoint a guardian for an adult in Illinois, the court must find that the person is a "disabled person" by clear and convincing evidence — the standard set by 755 ILCS 5/11a-3. Clear and convincing evidence is a demanding standard: higher than the "preponderance of the evidence" used in ordinary civil cases, though not as high as "beyond a reasonable doubt" in criminal cases. In practice, the petitioner must present strong, credible proof — typically including a physician\'s report and often testimony — that the adult cannot manage their person or estate because of a disability. The court also applies a least-restrictive-alternative preference under 755 ILCS 5/11a-12, meaning it will impose only as much guardianship as the person actually needs.',
    },
    {
      question: 'Can advance planning prevent a contested guardianship?',
      answer:
        'Very often, yes. A durable power of attorney set up in advance — for property and for health care — usually avoids guardianship entirely, and when there is no guardianship there is nothing to contest. Because you choose your own agents while you still have capacity, a valid, functioning power of attorney removes both the need for a court to appoint someone and the opening for relatives to fight over who that someone should be. Clear documentation, named successor agents, and up-to-date planning documents make it far less likely that a family ends up in a courtroom arguing about your care. Planning ahead is the single most effective way to keep these decisions out of contested litigation.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Happens When a Guardianship Is Contested in Illinois?',
    description:
      'When a family disagrees or the proposed ward objects, an Illinois guardianship becomes litigation. Learn how a contested guardianship unfolds, the standard of proof, and how fees work.',
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
    datePublished: '2026-07-12',
    dateModified: '2026-07-12',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/what-happens-when-guardianship-is-contested-illinois/',
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
                What Happens When a Guardianship Is Contested in Illinois?
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                When a family disagrees or the proposed ward objects, a guardianship turns into litigation. Here is what that means, how it unfolds in the Illinois courts, and what it costs.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>July 12, 2026</time>
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
                    A guardianship becomes &ldquo;contested&rdquo; the moment someone formally opposes it — the respondent objects to being found disabled or to the proposed guardian, a relative files a competing petition, or a sitting guardian faces removal.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Once that opposition is on file, the matter stops being a routine court appointment and becomes litigation. That means discovery, a guardian ad litem investigating and reporting to the judge, a physician&apos;s report, and an evidentiary hearing before the court rules.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    And because the opposing party — not the attorney — drives how much work the case requires, a contested guardianship is billed hourly against a retainer rather than at a flat fee. This guide walks through what triggers a contest, how the process moves, the standard the court applies, and how fees are handled from start to finish.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick at a glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                At a Glance: A Contested Guardianship
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'An objection, a competing petition, or a removal request', type: 'What Triggers It', color: 'amber' },
                  { label: 'Discovery, a guardian ad litem, and an evidentiary hearing', type: 'What It Becomes', color: 'blue' },
                  { label: 'Hourly against a retainer — the opposing party drives the work', type: 'How Fees Work', color: 'green' },
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

            {/* 2. What Makes Contested */}
            <h2 id="what-makes-contested" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Makes a Guardianship &ldquo;Contested&rdquo;?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Most Illinois guardianships are uncontested. A family agrees that a loved one can no longer manage their own affairs, everyone supports the same person serving as guardian, and the court appoints that person after a straightforward hearing. To understand how the process works when everyone is on the same page, see our overview of{' '}
              <Link href="/blog/how-guardianship-works-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how guardianship works in Illinois
              </Link>
              . A guardianship becomes <strong>contested</strong> only when someone formally opposes it in court. There are three common ways that happens.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: '1',
                  title: 'The respondent objects',
                  body: 'The respondent — the adult alleged to be disabled — has the right to oppose the petition. They may contest the underlying claim that they are disabled at all, arguing that they are perfectly capable of managing their own person and finances. Or they may accept that some help is needed but object to the specific person asking to serve as their guardian. Either objection turns the case into a contest, and the respondent is entitled to counsel to make it.',
                },
                {
                  num: '2',
                  title: 'A competing petition is filed',
                  body: 'Sometimes no one disputes that a guardian is needed — the fight is over who should serve. A second relative or interested party files a competing petition asking the court to appoint them instead. Now the judge is not simply deciding whether to grant a guardianship, but choosing between two or more people who each want the role, weighing their fitness, their relationship to the respondent, and the respondent\'s own preferences.',
                },
                {
                  num: '3',
                  title: 'A petition to remove or replace a guardian',
                  body: 'A guardianship can also become contested after a guardian is already serving. An interested party files a petition to remove or replace the sitting guardian — often alleging that the guardian has mismanaged the ward\'s affairs, neglected their care, or is acting under a conflict of interest. This kind of contest arises inside an existing guardianship rather than at the outset.',
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
              These contests can arise in either an adult or a minor case. For the differences between the two, see our guide on{' '}
              <Link href="/blog/adult-vs-minor-guardianship-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                adult versus minor guardianship in Illinois
              </Link>
              . You can also read more about contested adult matters on our{' '}
              <Link href="/guardianship/#contested" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                contested guardianship page
              </Link>
              .
            </p>

            {/* 3. Common Scenarios */}
            <h2 id="common-scenarios" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Common Contested Guardianship Scenarios
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Contested guardianships tend to follow a handful of familiar patterns. Recognizing them early helps families understand what they are walking into — and, often, whether the fight is really necessary.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Siblings disagree over who should serve',
                  detail: 'Two or more adult children each believe they are the right person to care for an aging parent. Everyone accepts that Mom or Dad needs help — but old family dynamics, geography, and mistrust turn the choice of guardian into a court battle. This is one of the most common contests we see.',
                  color: 'amber',
                },
                {
                  title: 'An adult child versus a new spouse',
                  detail: 'When a parent has remarried, an adult child and a stepparent may each seek control over the parent\'s care and finances. Suspicion runs in both directions — the child worries the new spouse is protecting their own interests, the spouse feels shut out — and the court is asked to sort out who should serve.',
                  color: 'blue',
                },
                {
                  title: 'The respondent contests capacity',
                  detail: 'The person alleged to be disabled disagrees. They insist they can still handle their own affairs and oppose being placed under any guardianship at all. Because Illinois law protects an adult\'s autonomy, the respondent is entitled to counsel and to require the petitioner to prove the case.',
                  color: 'green',
                },
                {
                  title: 'Allegations a guardian is self-dealing or neglecting duties',
                  detail: 'Inside an existing guardianship, a family member alleges that the guardian is helping themselves to the ward\'s money, failing to account for spending, or neglecting the ward\'s medical and personal needs. These allegations open a contest over whether the guardian should be removed and held responsible.',
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
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* 4. The Process */}
            <h2 id="the-process" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How a Contested Guardianship Unfolds
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Once an objection or competing petition is on file, the case moves onto a litigation track. The steps below do not always happen in a strict order, and not every case involves every step — but this is the shape of a contested guardianship in Illinois.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  num: '1',
                  title: 'Petition and objection',
                  body: 'The process begins with a petition to appoint a guardian, filed in the Circuit Court of the county where the respondent lives — in Chicago and the suburbs, the Cook County Probate Division. The contest is formalized when the respondent objects, or when an interested party files a competing petition or a written objection. From that point the court treats the matter as adversarial.',
                },
                {
                  num: '2',
                  title: 'The guardian ad litem\'s investigation and report',
                  body: 'The court appoints a guardian ad litem (GAL) — usually an attorney — to serve as the court\'s eyes and ears. The GAL meets with the respondent, explains their rights, reviews records, speaks with the parties, and files a written report and recommendation to the judge about whether a guardian is needed and who should serve. The GAL\'s report carries real weight in a contested case.',
                },
                {
                  num: '3',
                  title: 'Discovery',
                  body: 'Because the case is now litigation, the parties exchange information through discovery — requests for documents such as medical and financial records, written interrogatories, and depositions of witnesses. Discovery is often where a contested guardianship gains the most time and expense, because each side is entitled to develop its evidence.',
                },
                {
                  num: '4',
                  title: 'The physician\'s report and possible independent evaluation',
                  body: 'Illinois requires a report from a physician who has examined the respondent, describing the nature and extent of any disability. In a contested case, a party may challenge that report or ask the court to order an independent medical or psychological evaluation, so the judge hears more than one clinical opinion about the respondent\'s capacity.',
                },
                {
                  num: '5',
                  title: 'The evidentiary hearing',
                  body: 'If the parties do not resolve the matter, the judge holds an evidentiary hearing. Each side presents witnesses and documents, cross-examines the other side\'s witnesses, and the respondent has the right to be present, to be represented, and in appropriate cases to request a jury. The GAL\'s report and the physician\'s findings are part of the record the judge weighs.',
                },
                {
                  num: '6',
                  title: 'The judge\'s ruling',
                  body: 'After the hearing, the court decides whether the respondent is a disabled person, whether a guardian is warranted, how much authority that guardian should have, and who should serve. The judge is guided by the standard of proof and the least-restrictive-alternative preference discussed below, and enters an order that sets the terms of the guardianship going forward.',
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

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">Roles matter in a contest</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Part of what the court decides is whether one person will handle both personal and financial decisions, or whether those roles should be split. For how those two jobs differ — and why the distinction can shape a contest — see our guide on the{' '}
                    <Link href="/blog/guardian-of-the-person-vs-estate-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                      guardian of the person versus guardian of the estate
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Standard of Proof */}
            <h2 id="standard-of-proof" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The Standard of Proof
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois does not let a court take away an adult&apos;s decision-making authority lightly. To appoint a guardian for an adult, the petitioner must prove that the person is a &ldquo;disabled person&rdquo; by <strong>clear and convincing evidence</strong> — the standard set out in <strong>755 ILCS 5/11a-3</strong>. That is a demanding burden: higher than the &ldquo;preponderance of the evidence&rdquo; used in ordinary civil disputes, though not the &ldquo;beyond a reasonable doubt&rdquo; standard of a criminal trial. In a contested case, meeting it usually requires a credible physician&apos;s report together with testimony and other evidence that the adult truly cannot manage their person or estate.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Gavel className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">The least-restrictive-alternative preference</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Even when disability is proven, <strong>755 ILCS 5/11a-12</strong> directs the court to impose only as much guardianship as the person actually needs. A judge may order a &ldquo;limited&rdquo; guardianship covering only specific areas rather than a &ldquo;plenary&rdquo; (full) guardianship over every decision. In a contest, this preference often matters as much as the disability finding itself — the fight may be less about whether the person needs help and more about how much authority a guardian should hold.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For minors, the analysis is different — the court focuses on the child&apos;s best interests and the parents&apos; circumstances rather than proving disability. Our guide on{' '}
              <Link href="/blog/adult-vs-minor-guardianship-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                adult versus minor guardianship
              </Link>{' '}
              explains those distinctions, and our{' '}
              <Link href="/guardianship/#adult" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                adult guardianship page
              </Link>{' '}
              covers the adult process in more detail.
            </p>

            {/* 6. Removing a Guardian */}
            <h2 id="removing-a-guardian" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Removing or Replacing a Guardian
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Some of the most difficult contests arise after a guardian is already in place. If an interested party believes the guardian is not doing the job properly, they can petition the court to remove and replace them. Illinois courts have clear authority to do so when the guardian has failed to live up to the fiduciary duties of the role.
            </p>

            <div className="space-y-2 my-6 ml-4">
              {[
                'Failing to file the required inventory or annual accountings with the court',
                'Self-dealing — using the ward\'s assets for the guardian\'s own benefit',
                'Neglecting the ward\'s medical, personal, or day-to-day care needs',
                'Serving under a conflict of interest that works against the ward',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <span className="text-[#4a708b] font-bold mt-0.5 flex-shrink-0">&bull;</span>
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When the allegation involves money, a removal petition is often paired with a claim for a <strong>surcharge</strong> or <strong>breach of fiduciary duty</strong> — asking the court not only to remove the guardian but to order them to repay the estate for losses caused by their misconduct. The court can then appoint a successor guardian to take over the ward&apos;s care and finances.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">A familiar pattern in probate</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Removing a guardian for self-dealing or failure to account closely mirrors the disputes that arise when an executor or administrator mishandles a decedent&apos;s estate. If you are dealing with the parallel situation after a death, our{' '}
                    <Link href="/chicago-probate-lawyer/#contested" className="text-amber-800 underline font-medium font-['Plus_Jakarta_Sans']">
                      contested probate page
                    </Link>{' '}
                    explains how the court handles a fiduciary who has breached their duties.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. How Fees Work */}
            <h2 id="how-fees-work" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How Fees Work in a Contested Guardianship
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Uncontested matters lend themselves to flat-fee pricing because the work is predictable. A contested guardianship is different. Once someone is fighting the petition, the <strong>opposing party — not the attorney — drives the workload</strong>. Every objection, motion, deposition, and additional hearing date the other side pursues adds hours that no one can forecast at the outset. For that reason, a contested guardianship is <strong>billed hourly against a retainer</strong> rather than at a flat fee.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Just as important, <strong>costs are billed separately from attorney fees</strong>. The largest of these is usually the <strong>guardian ad litem&apos;s fee</strong>, which the court sets and allocates among the parties, but costs can also include filing fees, deposition transcripts, and any independent evaluation the court orders. Because the total depends entirely on how hard the case is fought, we talk through the retainer, the hourly structure, and realistic expectations with you before we begin.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Facing a Contested Guardianship?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families navigate contested guardianships — from objections and competing petitions to removal and surcharge claims. We explain the retainer and hourly structure up front so you always understand how fees work before you commit.
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
                  href="/guardianship/#contested"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  About Contested Guardianship
                </Link>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              You can read more about how we structure fees for contested adult matters on our{' '}
              <Link href="/guardianship/#contested" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                contested guardianship page
              </Link>
              . The important takeaway is that fee structure follows the nature of the work: predictable work can be quoted flat, but litigation controlled by the other side cannot.
            </p>

            {/* 8. Flat to Contested */}
            <h2 id="flat-to-contested" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              When a Flat-Fee Guardianship Becomes Contested
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A common and understandable worry: &ldquo;I hired you for a flat-fee guardianship — what happens to my money if it turns into a fight?&rdquo; This comes up most often with matters that start out uncontested, such as a minor guardianship everyone expected to be routine. Here is exactly how we handle it, and why you do not need to worry about losing what you have already paid.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If a matter you engaged us for on a flat fee later becomes contested, it <strong>converts to hourly billing against a retainer</strong>, for the reasons described above. But the flat fee you already paid does not simply disappear. The <strong>unearned portion</strong> of that flat fee — the part we have not yet earned, as determined by the firm — is <strong>credited toward the retainer</strong> and held in <strong>our client trust account</strong>. It is drawn down only as fees are actually earned and billed, never before.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-800 mb-1 font-['Plus_Jakarta_Sans']">You are told the exact amount, in writing</p>
                  <p className="text-green-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    When a flat fee converts, we notify you in writing of the exact unearned amount credited toward your retainer. That money sits in our client trust account and is applied only as fees are actually earned and billed. Nothing is moved out of trust before it is earned.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              None of this is a surprise, either. We explain the conversion <strong>up front</strong> and write it directly into the engagement agreement, so you know before you ever sign exactly how a flat fee will be treated if the matter becomes contested. The goal is simple: to make sure a change in the nature of your case never becomes a change you did not see coming.
            </p>

            {/* 9. Protecting Your Family */}
            <h2 id="protecting-your-family" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Reduce the Risk of a Contested Guardianship
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The most reliable way to avoid a contested guardianship is to make guardianship unnecessary in the first place. When you plan ahead, you make the decisions yourself — while you still have capacity — instead of leaving them to a courtroom and to relatives who may not agree.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <XCircle className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Without Advance Planning</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'A court, not you, decides who manages your affairs',
                    'Relatives can fight over who should serve',
                    'The process becomes public litigation',
                    'Discovery, a GAL, and a hearing all take time',
                    'Legal fees are billed hourly as the fight drags on',
                    'Family relationships are strained for years',
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
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">With Durable Powers of Attorney</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'You choose your own agents while you have capacity',
                    'Usually no guardianship — so nothing to contest',
                    'Private documents, not a public court record',
                    'Agents can act immediately, without a court wait',
                    'Named successor agents avoid gaps in authority',
                    'Clear documentation reduces family conflict',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Put durable powers of attorney in place',
                  detail: 'A durable power of attorney for property and a power of attorney for health care let you name the people you trust to manage your finances and medical decisions — no court required. Because you chose them yourself, there is nothing for relatives to litigate. This is the single most effective step to keep these decisions out of a contested proceeding.',
                  link: '/chicago-powers-of-attorney-lawyer/',
                  linkLabel: 'Learn about our powers of attorney services',
                  color: 'blue',
                },
                {
                  title: 'Keep clear, current documentation',
                  detail: 'Name successor agents in case your first choice cannot serve, review your documents every few years, and make sure your agents know where the originals are kept. Clear, up-to-date paperwork leaves far less room for disagreement — and far less opening for a family fight if capacity ever comes into question.',
                  link: '/blog/guardianship-vs-power-of-attorney-illinois/',
                  linkLabel: 'Compare guardianship and power of attorney',
                  color: 'green',
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

            {/* 10. FAQ */}
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

            {/* 11. Next Steps */}
            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Next Steps
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are facing a contested guardianship — whether you are seeking to serve, objecting to someone else&apos;s petition, or asking the court to remove a guardian who is not doing the job — the right guidance early can make a significant difference in how the matter unfolds and what it costs.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              And if no one is incapacitated yet, the best step of all is to plan ahead. A durable power of attorney set up now usually avoids guardianship entirely, sparing your family the time, expense, and strain of a court fight later. To learn more about the process and how we can help, visit our{' '}
              <Link href="/guardianship/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardianship page
              </Link>{' '}
              or{' '}
              <Link href="/book-consultation/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                book a free consultation
              </Link>
              .
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Guardianship Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families through contested guardianships and the advance planning that can prevent them — durable powers of attorney, healthcare directives, and complete estate plans. We explain the fee structure clearly so you always know how you will be billed.
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
                    href: '/blog/guardian-of-the-person-vs-estate-illinois/',
                    label: 'Guardian of the Person vs. Guardian of the Estate',
                  },
                  {
                    href: '/blog/guardianship-vs-power-of-attorney-illinois/',
                    label: 'Guardianship vs. Power of Attorney in Illinois',
                  },
                  {
                    href: '/chicago-powers-of-attorney-lawyer/',
                    label: 'Illinois Powers of Attorney: Plan Ahead',
                  },
                  {
                    href: '/chicago-probate-lawyer/#contested',
                    label: 'Contested Probate in Illinois',
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
                Facing a Contested Guardianship — or Want to Avoid One?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law. Whether you are in a court fight now or want to plan ahead so your family never has one, we can help you understand your options and your costs.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-happens-when-guardianship-is-contested-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-happens-when-guardianship-is-contested-illinois/')}&text=${encodeURIComponent('What happens when a guardianship is contested in Illinois — how it unfolds and what it costs')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-happens-when-guardianship-is-contested-illinois/')}`}
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
