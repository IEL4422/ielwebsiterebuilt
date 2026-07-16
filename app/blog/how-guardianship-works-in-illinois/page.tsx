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

const SLUG = 'how-guardianship-works-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-guardianship', title: 'What Is Guardianship in Illinois?', level: 2, numeration: '2' },
    { id: 'who-needs-a-guardian', title: 'Who Needs a Guardian?', level: 2, numeration: '3' },
    { id: 'person-vs-estate', title: 'Guardian of the Person vs. Guardian of the Estate', level: 2, numeration: '4' },
    { id: 'adult-vs-minor', title: 'Adult vs. Minor Guardianship', level: 2, numeration: '5' },
    { id: 'the-process', title: 'The Illinois Guardianship Process Step by Step', level: 2, numeration: '6',
      children: [
        { id: 'step-petition', title: 'Step 1: File the Petition', level: 3, numeration: '6.1' },
        { id: 'step-physician', title: 'Step 2: The Physician’s Report (Adults)', level: 3, numeration: '6.2' },
        { id: 'step-notice', title: 'Step 3: Notice and Personal Service', level: 3, numeration: '6.3' },
        { id: 'step-gal', title: 'Step 4: Appointment of a Guardian ad Litem', level: 3, numeration: '6.4' },
        { id: 'step-hearing', title: 'Step 5: The Hearing', level: 3, numeration: '6.5' },
        { id: 'step-letters', title: 'Step 6: Letters of Office, Bond, and Inventory', level: 3, numeration: '6.6' },
      ],
    },
    { id: 'guardian-ad-litem', title: 'The Role of the Guardian ad Litem', level: 2, numeration: '7' },
    { id: 'duties-after-appointment', title: 'A Guardian’s Duties After Appointment', level: 2, numeration: '8' },
    { id: 'alternatives', title: 'Least-Restrictive Alternatives to Guardianship', level: 2, numeration: '9' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '10' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '11' },
  ];

  const faqs = [
    {
      question: 'How long does guardianship take in Illinois?',
      answer:
        'An uncontested guardianship typically takes about 6 to 12 weeks from filing the petition to the court’s order, depending on the county’s docket and how quickly the required physician’s report and service of process are completed. A contested guardianship — where family members disagree about who should serve, or the respondent objects — can take 6 months to a year or longer, because it may require additional hearings, evaluations, and evidence. Guardianship is not a fast solution in an emergency, though Illinois courts can appoint a temporary guardian in urgent situations while the full case proceeds.',
    },
    {
      question: 'How much does guardianship cost in Illinois?',
      answer:
        'Cost depends on the type of case. At Illinois Estate Law, an uncontested guardianship — whether adult or minor — is handled for a flat fee, so the family knows the price up front; the adult flat fee is higher than the minor one because an adult case involves more built-in work. Only a contested guardianship is billed hourly against a retainer, because a dispute makes the amount of court work unpredictable. Separate costs — such as the court filing fee and the guardian ad litem’s fee — are billed on top of attorney fees. For current figures and to find out which structure applies to your situation, see our ' +
        'guardianship page or book a consultation.',
    },
    {
      question: 'Can a guardianship be avoided?',
      answer:
        'In most cases, yes. If a person signs a durable power of attorney for property and a power of attorney for health care while they still have legal capacity, they name trusted agents who can manage finances and make medical decisions without any court involvement — which usually eliminates the need for guardianship. The key is timing: these documents must be signed before capacity is lost. Once someone can no longer understand what they are signing, it is too late, and guardianship may be the only remaining option.',
    },
    {
      question: 'Who can serve as a guardian in Illinois?',
      answer:
        'Under the Illinois Probate Act, a guardian must generally be at least 18 years old, a resident of the United States, of sound mind, not legally disabled, and not convicted of a serious felony. Beyond those minimum qualifications, the court decides who serves based on the best interest of the ward, often giving preference to a spouse, adult child, or other close family member who is willing and suitable. If no appropriate family member is available, the court can appoint a professional guardian or the Office of State Guardian.',
    },
    {
      question: 'Can a guardianship be ended?',
      answer:
        'Yes. A minor guardianship ends automatically when the child turns 18. An adult guardianship can be terminated when the ward regains capacity — for example, after recovery from an injury or illness — by filing a petition to discharge the guardian and presenting evidence, often including an updated physician’s evaluation, that the person can once again manage their own affairs. A guardianship also ends on the death of the ward, at which point any estate matters move to the appropriate probate process.',
    },
    {
      question: 'Does the ward lose all their rights?',
      answer:
        'Not necessarily. Illinois law strongly favors the least restrictive arrangement and specifically allows for limited guardianship under 755 ILCS 5/11a-12, in which the guardian’s authority covers only the specific areas where the person needs help, leaving them in control of everything else. Even under a plenary (full) guardianship, the ward retains enumerated rights — including the right to be treated with dignity, the right to petition the court to modify or end the guardianship, and, unless a court specifically orders otherwise, the right to vote. The goal is protection, not the wholesale removal of a person’s independence.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Guardianship Works in Illinois: The Complete 2026 Guide',
    description:
      'How guardianship works in Illinois — who needs a guardian, the court process step by step, a guardian’s duties, costs, and least-restrictive alternatives like a power of attorney.',
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
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/how-guardianship-works-in-illinois/',
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
                  12 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                How Guardianship Works in Illinois: The Complete 2026 Guide
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Guardianship is the court process a family turns to when a loved one can no longer make their own decisions and no plan is in place. This guide walks you through who needs a guardian, how the Illinois court process works, and the simpler alternatives that can often avoid it entirely.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>July 15, 2026</time>
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
                    Guardianship is a court process that gives one person the legal authority to make decisions for another person who can no longer make those decisions safely on their own. A judge reviews the evidence, appoints the guardian, and continues to supervise the arrangement.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    In Illinois, guardianship applies in two broad situations: an adult who has become incapacitated because of a disability such as dementia, a developmental disability, or a serious injury; and a minor who needs a responsible adult other than a parent to care for them or their property.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    Illinois law requires courts to use the least restrictive option that meets the person&apos;s needs. That is why a durable power of attorney, set up in advance while someone still has capacity, usually avoids guardianship altogether. This guide explains how the process works and what your alternatives are.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick comparison at a glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                At a Glance: Illinois Guardianship
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'A court gives someone legal authority to decide for another', type: 'What It Is', color: 'blue' },
                  { label: 'Incapacitated adults and minors without a parent to care for them', type: 'Who It Covers', color: 'amber' },
                  { label: 'A power of attorney set up in advance usually avoids it', type: 'The Key Takeaway', color: 'green' },
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

            {/* 2. What Is Guardianship */}
            <h2 id="what-is-guardianship" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is Guardianship in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Guardianship is the legal relationship a court creates when it decides that a person cannot make or communicate responsible decisions about their own care or property, and appoints someone else — a <strong>guardian</strong> — to make those decisions for them. The person being protected is referred to as the <strong>ward</strong>, and before the court rules, as the <strong>respondent</strong>. Guardianship exists to protect vulnerable people, not to punish them, and Illinois judges take that protective purpose seriously at every stage.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The governing law is the Illinois Probate Act, 755 ILCS 5. Guardianship of an adult with a disability is handled under Article XIa of the Act, while guardianship of a minor is handled under Article XI. Although the two share a common structure — a petition, a hearing, and court supervision — they rest on different statutes and different legal standards, which is why it matters from the outset whether a case involves an adult or a child.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Because guardianship transfers decision-making power away from an individual, the court&apos;s job is to grant only as much authority as the situation truly requires. For a deeper look at how these cases work and current pricing, see our{' '}
              <Link href="/guardianship/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Illinois guardianship page
              </Link>
              .
            </p>

            {/* 3. Who Needs a Guardian */}
            <h2 id="who-needs-a-guardian" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Who Needs a Guardian?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Guardianship is not for anyone who simply makes choices their family disagrees with. It is reserved for people who genuinely cannot make or communicate responsible decisions, and it falls into two broad groups.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <Users className="w-8 h-8 text-[#4a708b] mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Adults With a Disability</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
                  An adult may need a guardian when a disability leaves them unable to manage their own care or finances — for example, advancing dementia or Alzheimer&apos;s disease, an intellectual or developmental disability, a severe mental illness, or a serious brain injury from an accident or stroke. The question is always functional: not the diagnosis itself, but whether the person can still make and communicate responsible decisions.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <Users className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Minors</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
                  A minor may need a guardian when there is no parent able and available to care for them — because a parent has died, is incapacitated, or is otherwise unable to provide care — or when a child inherits or receives money or property that needs to be managed by a responsible adult until they come of age.
                </p>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In every case, Illinois courts start from the presumption that a person is capable and independent. The petitioner carries the burden of proving, with real evidence, that the person cannot manage on their own and that guardianship is necessary.
            </p>

            {/* 4. Person vs Estate */}
            <h2 id="person-vs-estate" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Guardian of the Person vs. Guardian of the Estate
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois recognizes two kinds of guardianship authority, and a case may involve one or both. A <strong>guardian of the person</strong> makes decisions about the ward&apos;s care — where they live, the medical treatment they receive, and their day-to-day wellbeing. A <strong>guardian of the estate</strong> manages the ward&apos;s money and property — paying bills, managing accounts, and protecting assets — and must file a regular accounting with the court showing exactly how those funds were handled.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The court can appoint the same person to both roles or split them between two people. Many wards need a guardian of the person but have few assets, so no estate guardian is required; others need both. For a fuller comparison of these two roles, see our guide on{' '}
              <Link href="/blog/guardian-of-the-person-vs-estate-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardian of the person vs. guardian of the estate
              </Link>{' '}
              and the{' '}
              <Link href="/guardianship/#person-vs-estate" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                person-vs-estate overview
              </Link>{' '}
              on our guardianship page.
            </p>

            {/* 5. Adult vs Minor */}
            <h2 id="adult-vs-minor" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Adult vs. Minor Guardianship
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Adult and minor guardianships are governed by different statutes and measured by different standards. An adult guardianship under Article XIa turns on proving a disability that prevents the person from making responsible decisions, and it usually requires a physician&apos;s report. A minor guardianship under Article XI turns on the best interest of the child and the absence of a parent able to provide care — no finding of disability is involved. The procedures, the evidence, and even the fee structure differ between the two. Our companion guide on{' '}
              <Link href="/blog/adult-vs-minor-guardianship-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                adult vs. minor guardianship in Illinois
              </Link>{' '}
              breaks down those differences in detail, and you can review both tracks on our{' '}
              <Link href="/guardianship/#adult" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                adult guardianship
              </Link>{' '}
              and{' '}
              <Link href="/guardianship/#minor" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                minor guardianship
              </Link>{' '}
              sections.
            </p>

            {/* 6. The Process */}
            <h2 id="the-process" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The Illinois Guardianship Process Step by Step
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              While every case is a little different, an Illinois guardianship generally moves through the same sequence of steps. Understanding them ahead of time takes much of the anxiety out of an already stressful situation.
            </p>

            <h3 id="step-petition" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Step 1: File the Petition
            </h3>
            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The case begins when the petitioner files a petition for guardianship in the Circuit Court of the county where the person lives. The petition identifies the respondent, explains why guardianship is needed, names the proposed guardian, and describes the person&apos;s condition and, where relevant, their assets. In the Chicago area, adult cases are heard in the Probate Division of the Circuit Court of Cook County.
            </p>

            <h3 id="step-physician" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Step 2: The Physician&apos;s Report (Adults)
            </h3>
            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For an adult guardianship, the court generally requires a report from a licensed physician who has recently examined the respondent. The report describes the person&apos;s condition, explains how it affects their ability to make decisions, and gives a professional opinion on the type and extent of guardianship needed. This medical evidence is the backbone of an adult case. Minor guardianships do not require a physician&apos;s report, since they turn on the child&apos;s best interest rather than a finding of disability.
            </p>

            <h3 id="step-notice" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Step 3: Notice and Personal Service
            </h3>
            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Due process requires that the respondent be told about the case. In an adult guardianship the respondent must be personally served with the petition and a summons, and close relatives receive notice as well so they have an opportunity to participate or object. This step protects the respondent&apos;s right to be heard before any of their rights are limited.
            </p>

            <h3 id="step-gal" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Step 4: Appointment of a Guardian ad Litem
            </h3>
            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The court appoints a <strong>guardian ad litem</strong> (GAL) — an independent attorney who meets with the respondent, investigates the circumstances, and reports back to the judge on what is in the respondent&apos;s best interest. The GAL is a safeguard, making sure the court hears an objective voice on behalf of the person the case is about.
            </p>

            <h3 id="step-hearing" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Step 5: The Hearing
            </h3>
            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              At the hearing, the judge reviews the petition, the physician&apos;s report, and the GAL&apos;s findings, and considers any objections. The respondent has the right to be present, to be represented by counsel, and to contest the guardianship. If the judge finds that guardianship is necessary, the court decides who will serve and how much authority the guardian will have — favoring the least restrictive arrangement that still protects the ward.
            </p>

            <h3 id="step-letters" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Step 6: Letters of Office, Bond, and Inventory
            </h3>
            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Once appointed, the guardian receives <strong>Letters of Office</strong> — the court document that proves their authority to banks, doctors, and other institutions. When there is an estate to manage, the court also typically requires the guardian to post a surety bond and to file an inventory listing the ward&apos;s assets, so that the ward&apos;s property is protected and accounted for from day one.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">Letters of Office are your proof of authority</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Until the court issues Letters of Office, a proposed guardian has no legal power to act. Banks, hospitals, and care facilities will ask to see the Letters before they recognize the guardian&apos;s authority, so keeping certified copies on hand is essential. In urgent situations, Illinois courts can appoint a temporary guardian to act while the full case is pending.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Guardian ad Litem */}
            <h2 id="guardian-ad-litem" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The Role of the Guardian ad Litem
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The guardian ad litem is one of the most important safeguards in an Illinois guardianship. Appointed by the court, the GAL is a lawyer whose job is not to represent the petitioner or the proposed guardian, but to investigate independently and report to the judge on what will actually serve the respondent&apos;s best interest.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In practice, the GAL meets with the respondent in person, explains the case and the respondent&apos;s rights, reviews the physician&apos;s report and other evidence, and speaks with family members and caregivers as needed. The GAL then files a written report and may testify at the hearing, recommending whether guardianship is appropriate, who should serve, and how limited or extensive the guardian&apos;s powers should be.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Gavel className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">The GAL is a separate, billable cost</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    The guardian ad litem is paid for their time, and that fee is billed separately from your own attorney&apos;s fees. It is a normal, expected part of the cost of an adult guardianship, and the court reviews and approves the GAL&apos;s fee. Factoring it in from the start helps families avoid surprises.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Duties After Appointment */}
            <h2 id="duties-after-appointment" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              A Guardian&apos;s Duties After Appointment
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Being appointed guardian is the beginning, not the end. A guardian is a fiduciary — legally required to act in the ward&apos;s best interest — and Illinois courts continue to supervise the arrangement through ongoing reporting requirements.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                'File an annual report on the ward’s condition and care under 755 ILCS 5/11a-17(b)',
                'Make decisions that reflect the ward’s best interest and, where possible, their wishes',
                'For an estate, file an accounting of all income and disbursements under 755 ILCS 5/24-11',
                'Keep the ward’s money and property separate and protected from waste or loss',
                'Seek court approval for major decisions when the law or the court order requires it',
                'Keep records and receipts to support every disbursement made on the ward’s behalf',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The accounting duty deserves special attention. A guardian of the estate does not simply report what was spent — the guardian bears the burden of proving that each disbursement was proper and made for the ward&apos;s benefit. That is why careful record-keeping, from bank statements to receipts, is essential from the very first day of the guardianship. If you are serving as a guardian of the estate and probate questions arise, our{' '}
              <Link href="/chicago-probate-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Chicago probate attorney
              </Link>{' '}
              can help you stay compliant.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Facing a Guardianship Decision for Your Family?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families through every stage of guardianship — from deciding whether it is even necessary, to filing the petition, to meeting the ongoing reporting duties. Clear, structured pricing so you always know where you stand.
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

            {/* 9. Alternatives */}
            <h2 id="alternatives" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Least-Restrictive Alternatives to Guardianship
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Because guardianship removes rights and adds ongoing court oversight, Illinois requires that it be used only when nothing less restrictive will do. For most families, the most effective way to stay out of guardianship court is to plan ahead — while everyone still has the legal capacity to sign the necessary documents.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Durable Power of Attorney for Property',
                  detail: 'A durable power of attorney for property names a trusted agent who can manage finances, pay bills, and handle assets if you become unable to. Because it is durable, it stays in effect through incapacity — the exact moment your family would otherwise need guardianship of the estate.',
                  link: '/chicago-powers-of-attorney-lawyer/',
                  linkLabel: 'Learn about our power of attorney services',
                  color: 'blue',
                },
                {
                  title: 'Power of Attorney for Health Care',
                  detail: 'A power of attorney for health care names an agent to make medical decisions and communicate with providers when you cannot. Paired with the property POA, it covers the two areas a guardian would otherwise control — care and finances — without any court involvement.',
                  link: '/chicago-powers-of-attorney-lawyer/',
                  linkLabel: 'View Illinois healthcare POA information',
                  color: 'blue',
                },
                {
                  title: 'Supported Decision-Making',
                  detail: 'For some adults — particularly those with intellectual or developmental disabilities — supported decision-making lets the person keep their legal rights while relying on trusted supporters to help them understand choices and communicate decisions. It is often a less restrictive alternative to a full guardianship.',
                  link: '/guardianship/',
                  linkLabel: 'Discuss the least-restrictive option for your situation',
                  color: 'green',
                },
                {
                  title: 'Act While There Is Still Capacity',
                  detail: 'Every one of these alternatives depends on timing. A power of attorney can only be signed by someone who still understands what they are signing. Putting these documents in place now — before a crisis — is what keeps a future emergency out of guardianship court.',
                  link: '/blog/guardianship-vs-power-of-attorney-illinois/',
                  linkLabel: 'Guardianship vs. power of attorney in Illinois',
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
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Without Advance Planning</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'Family must petition the court for guardianship',
                    'Weeks or months before anyone has legal authority',
                    'A guardian ad litem and a hearing are required',
                    'The court retains ongoing oversight and reporting',
                    'Annual reports and estate accountings every year',
                    'Some of the ward’s rights are limited by the court',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <ShieldCheck className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">With Powers of Attorney in Place</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'Your chosen agent has authority — no court wait',
                    'Finances and medical decisions covered from day one',
                    'No guardian ad litem, hearing, or ongoing accountings',
                    'Private — not a public court record',
                    'Far lower total cost to the family',
                    'You chose your agent while fully capable',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For a side-by-side comparison of these two paths, see our detailed guide on{' '}
              <Link href="/blog/guardianship-vs-power-of-attorney-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                guardianship vs. power of attorney in Illinois
              </Link>
              . And if a family conflict is brewing over who should serve, our guide on{' '}
              <Link href="/blog/what-happens-when-guardianship-is-contested-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                what happens when guardianship is contested
              </Link>{' '}
              explains what to expect, as does the{' '}
              <Link href="/guardianship/#contested" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                contested guardianship
              </Link>{' '}
              section of our guardianship page.
            </p>

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
              If you are worried about a loved one who is losing the ability to care for themselves, take a breath — you have options, and you do not have to sort them out alone. The first step is simply understanding whether guardianship is truly necessary or whether a less restrictive tool would work better for your family&apos;s situation.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are healthy today, the most valuable thing you can do is put a durable power of attorney for property and a power of attorney for health care in place now, so your family never has to go to court on your behalf. And if a loved one is already unable to manage and no plan exists, an experienced attorney can guide you through the guardianship process as smoothly and compassionately as possible.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              To learn more or to talk through your specific circumstances, visit our{' '}
              <Link href="/guardianship/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Illinois guardianship page
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
                Illinois Estate Law helps Chicago-area families navigate guardianship for adults and minors — and helps them plan ahead so guardianship is never needed. We will tell you honestly whether guardianship is the right path and walk you through every step, with transparent pricing and a free initial consultation.
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
                    href: '/blog/adult-vs-minor-guardianship-illinois/',
                    label: 'Adult vs. Minor Guardianship in Illinois',
                  },
                  {
                    href: '/blog/guardian-of-the-person-vs-estate-illinois/',
                    label: 'Guardian of the Person vs. Guardian of the Estate',
                  },
                  {
                    href: '/blog/what-happens-when-guardianship-is-contested-illinois/',
                    label: 'What Happens When Guardianship Is Contested in Illinois?',
                  },
                  {
                    href: '/blog/guardianship-vs-power-of-attorney-illinois/',
                    label: 'Guardianship vs. Power of Attorney in Illinois',
                  },
                  {
                    href: '/chicago-powers-of-attorney-lawyer/',
                    label: 'Illinois Powers of Attorney — Plan Ahead to Avoid Guardianship',
                  },
                  {
                    href: '/chicago-probate-lawyer/',
                    label: 'Chicago Probate Attorney — Estate and Guardianship Matters',
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
                Ready to Protect a Loved One — or Plan Ahead to Avoid Court?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and get clear guidance on guardianship, powers of attorney, and the plan that best protects your family.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-guardianship-works-in-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-guardianship-works-in-illinois/')}&text=${encodeURIComponent('How guardianship works in Illinois — the complete 2026 guide')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-guardianship-works-in-illinois/')}`}
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
