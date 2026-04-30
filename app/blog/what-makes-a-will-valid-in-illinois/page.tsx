'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, ChevronDown, ChevronUp, Clock, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, Users, Scale, ArrowRight, CircleX as XCircle, BookOpen, Pencil, Shield } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'what-makes-a-will-valid-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedMistake, setExpandedMistake] = useState<number | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'required' | 'notneeded' | 'selfproved'>('required');

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    {
      id: 'legal-requirements', title: 'The 5 Legal Requirements for a Valid Illinois Will', level: 2, numeration: '2',
      children: [
        { id: 'in-writing', title: '1. The Will Must Be in Writing', level: 3, numeration: '2.1' },
        { id: 'signed-by-testator', title: '2. Signed by the Testator', level: 3, numeration: '2.2' },
        { id: 'two-witnesses', title: '3. Two Credible Witnesses', level: 3, numeration: '2.3' },
        { id: 'testamentary-capacity', title: '4. Testamentary Capacity', level: 3, numeration: '2.4' },
        { id: 'testamentary-intent', title: '5. Testamentary Intent', level: 3, numeration: '2.5' },
      ],
    },
    {
      id: 'notarization', title: 'Notarization: Required, Optional, or Harmful?', level: 2, numeration: '3',
      children: [
        { id: 'self-proved-wills', title: 'Self-Proved Wills: The Smart Optional Step', level: 3, numeration: '3.1' },
      ],
    },
    { id: 'holographic-wills', title: 'Holographic Wills in Illinois: Are They Valid?', level: 2, numeration: '4' },
    { id: 'common-mistakes', title: '8 Common Mistakes That Invalidate a Will in Illinois', level: 2, numeration: '5' },
    { id: 'will-validity-quiz', title: 'Interactive: Will Validity Quiz', level: 2, numeration: '6' },
    { id: 'validity-checklist', title: 'Illinois Will Validity Checklist', level: 2, numeration: '7' },
    { id: 'when-to-update', title: 'When to Update Your Will', level: 2, numeration: '8' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '9' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '10' },
  ];

  const commonMistakes = [
    {
      title: 'Only One Witness Instead of Two',
      severity: 'fatal',
      description: 'Illinois law (755 ILCS 5/4-3) is unambiguous: a will must be attested by two or more credible witnesses. A will signed in front of only one witness — no matter how clearly the testator\'s intentions are expressed — is invalid under Illinois law. This is the most common execution error in DIY wills.',
      fix: 'Always have exactly two witnesses present simultaneously when you sign your will. Both must sign the will in your presence and in the presence of each other.',
    },
    {
      title: 'A Beneficiary Acts as a Witness',
      severity: 'problematic',
      description: 'Illinois law defines a "credible witness" as someone who does not benefit from the will. If a person who inherits under the will signs as a witness, the will itself remains valid — but the interested witness forfeits their bequest (unless there are at least two other disinterested witnesses). Under 755 ILCS 5/4-6, the interested witness can only receive what they would have received under intestacy, if anything.',
      fix: 'Use witnesses who are not named in your will as beneficiaries. Friends, coworkers, or neighbors are ideal. A witness does not need any professional credentials — they just need to be adults of sound mind who are not beneficiaries.',
    },
    {
      title: 'Witnesses Sign at a Different Time Than the Testator',
      severity: 'fatal',
      description: 'Illinois requires that the testator and both witnesses sign "in the presence of each other." If the testator signs first and then gives the document to witnesses who sign later on their own — even the same day — this creates a significant validity problem. Courts have found wills invalid when the signing was not contemporaneous.',
      fix: 'The signing ceremony should happen in one sitting. The testator signs first, then both witnesses sign while the testator (and each other) are still physically present.',
    },
    {
      title: 'Using a Printed Name Instead of a Handwritten Signature',
      severity: 'varies',
      description: 'The testator must "subscribe" to the will, which Illinois courts have interpreted to mean a handwritten signature. Typing your name at the bottom of a word-processed will, or using a rubber stamp, is legally risky. However, Illinois does allow the testator to make a mark (such as an "X") if they cannot write, provided witnesses attest to the circumstances.',
      fix: 'Sign your full legal name by hand at the end of the will. If you are physically unable to sign, have someone sign at your specific direction in your presence, with two witnesses observing.',
    },
    {
      title: 'No Clear Statement of Testamentary Intent',
      severity: 'fatal',
      description: 'A document that arranges property distribution but does not clearly indicate that it is the author\'s "last will and testament" can be challenged as lacking testamentary intent. Courts look for language that establishes the document is intended to take effect at death.',
      fix: 'Every will should begin with a clear declaration: "I, [Name], of [City, State], declare this to be my Last Will and Testament." This language establishes testamentary intent and revokes prior wills.',
    },
    {
      title: 'Testator Lacked Capacity at the Time of Signing',
      severity: 'fatal',
      description: 'Illinois requires the testator to be of "sound mind and memory" — meaning they understood the nature of making a will, the extent of their property, who their natural heirs are, and how the will distributes their estate. A diagnosis of dementia does not automatically invalidate a will, but a will signed during a period of incapacity can be contested successfully in court.',
      fix: 'If there is any concern about capacity, have the will executed during a period of clarity, obtain a physician\'s letter confirming capacity around the signing date, and document the circumstances carefully. An attorney\'s presence provides additional protection.',
    },
    {
      title: 'Undue Influence or Fraud',
      severity: 'fatal',
      description: 'A will produced through undue influence — where another person overrides the testator\'s free will to substitute their own — can be contested and voided by a court. Similarly, a will obtained through fraud (e.g., the testator was deceived about what they were signing) is invalid. These are the most litigated grounds for will contests in Illinois probate court.',
      fix: 'Execute the will in private, without the presence of major beneficiaries. The testator should be able to speak freely with their attorney. Document conversations about the testator\'s wishes over time.',
    },
    {
      title: 'Handwriting the Will Without Witnesses (Holographic Will)',
      severity: 'fatal',
      description: 'Illinois does not recognize holographic wills — wills that are entirely handwritten and signed by the testator but not witnessed. Even a detailed, clearly intentional handwritten document left by a decedent explaining their wishes in full will NOT be admitted to probate in Illinois. This surprises many people who believe a handwritten will is more personal and therefore more valid.',
      fix: 'No matter how carefully you write it out by hand, a will without two witnesses is invalid in Illinois. If you want to write your own will, you must still have two witnesses present at the signing.',
    },
  ];

  const faqs = [
    {
      question: 'Does a will need to be notarized to be valid in Illinois?',
      answer: 'No. Illinois does not require notarization for a will to be valid. The legal requirements are: (1) in writing, (2) signed by the testator, and (3) attested by two credible witnesses who sign in the presence of the testator. That said, notarization is often used as part of a "self-proving will" affidavit, which makes the probate process faster and easier after death — but it is not a validity requirement.',
    },
    {
      question: 'Can I write my own will in Illinois without an attorney?',
      answer: 'Illinois law does not require an attorney to draft or execute a will. However, DIY wills carry significant risks. The most common errors — only one witness, a beneficiary acting as witness, improper signing ceremony, vague language — are easy for a layperson to make and potentially fatal to the document\'s validity. Given that an improperly executed will is the same as having no will, the cost of an attorney-drafted will is almost always worth it.',
    },
    {
      question: 'Are handwritten (holographic) wills valid in Illinois?',
      answer: 'No. Illinois does not recognize holographic wills — wills written entirely in the testator\'s own handwriting without witnesses. Regardless of how detailed or clear a handwritten will is, it will not be admitted to probate in Illinois if it lacks two witnesses who signed in the testator\'s presence. This is a frequently misunderstood point that can leave families without legal recourse.',
    },
    {
      question: 'Can a beneficiary also be a witness to my Illinois will?',
      answer: 'Yes, but it creates a significant risk. Under 755 ILCS 5/4-6, if a beneficiary under the will signs as a witness, the will remains valid — but the interested witness can only receive the lesser of: (a) what the will gives them, or (b) what they would receive under intestacy. In many cases, this means the beneficiary-witness gets nothing. The safest practice is always to use witnesses who receive nothing under the will.',
    },
    {
      question: 'How many witnesses does a will require in Illinois?',
      answer: 'Two. Illinois law (755 ILCS 5/4-3) requires that a will be attested and subscribed by two or more credible witnesses in the presence of the testator. Both witnesses must sign the will. There is no three-witness requirement in Illinois, though having a third backup witness — while unusual — is not harmful.',
    },
    {
      question: 'What happens if my will is found invalid in Illinois?',
      answer: 'If your will is declared invalid by an Illinois probate court — through a will contest, improper execution, or other grounds — your estate is distributed as if you died without a will (intestate). That means Illinois\'s intestacy statute (755 ILCS 5/2-1) determines who inherits, in a specific order: spouse, descendants, parents, siblings, and so on. Your actual wishes are irrelevant once the will is voided. This is why proper execution is so important.',
    },
    {
      question: 'Can I update my will after I sign it?',
      answer: 'Yes. You can update your will in two ways: (1) a codicil — an amendment to the existing will that modifies specific provisions — or (2) a new will that expressly revokes all prior wills. A codicil must be executed with the same formalities as a will (writing, signature, two witnesses). For significant changes, most attorneys recommend a new will rather than a codicil to avoid confusion about which document controls. You cannot make a valid change to an Illinois will simply by crossing out language or writing in the margins.',
    },
    {
      question: 'Does my out-of-state will work in Illinois?',
      answer: 'Generally yes. Under 755 ILCS 5/4-1(c), a will executed outside of Illinois is valid in Illinois if it was executed in compliance with either (a) the laws of Illinois, or (b) the law of the state where the will was executed at the time of execution. However, if you have moved to Illinois permanently, it is worth having your will reviewed by an Illinois attorney to ensure it aligns with Illinois-specific laws — particularly regarding spousal rights, the elective share, and asset disposition.',
    },
  ];

  const checklistItems = [
    { label: 'Will is in writing (typed or handwritten)', required: true },
    { label: 'Testator is 18 years of age or older (or legally married)', required: true },
    { label: 'Testator signed the will by hand at the end', required: true },
    { label: 'Two witnesses were present simultaneously when testator signed', required: true },
    { label: 'Both witnesses signed the will in the testator\'s presence', required: true },
    { label: 'Both witnesses signed in each other\'s presence', required: true },
    { label: 'Neither witness is a beneficiary named in the will', required: false, note: 'Strongly recommended — not legally required, but an interested witness risks losing their bequest' },
    { label: 'Will includes a clear declaration of testamentary intent ("Last Will and Testament")', required: true },
    { label: 'Will expressly revokes all prior wills and codicils', required: false, note: 'Best practice — avoids confusion if prior documents exist' },
    { label: 'Testator had testamentary capacity on the date of signing', required: true },
    { label: 'Will was executed free from undue influence or fraud', required: true },
    { label: 'Original will is stored safely (not destroyed or altered)', required: true },
    { label: 'Notarized self-proved affidavit attached', required: false, note: 'Optional but speeds up probate — witnesses do not need to appear in court' },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Makes a Will Valid in Illinois? Witnesses, Notarization, and Common Mistakes',
    description: 'Complete guide to Illinois will requirements. Learn what makes a will legally valid in Illinois — including witness rules, notarization, testamentary capacity, and the 8 most common mistakes that invalidate wills.',
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
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://illinoisestatelaw.com/blog/what-makes-a-will-valid-in-illinois/',
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
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16 sm:py-20">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
              <span className="text-lg">&larr;</span>
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-['Plus_Jakarta_Sans'] font-semibold">
                  Wills
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  13 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                What Makes a Will Valid in Illinois? Witnesses, Notarization, and Common Mistakes
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Illinois has specific execution requirements that determine whether a will is legally enforceable. One wrong step — the wrong witness, the wrong sequence, a missing signature — and the entire document becomes void.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>April 30, 2026</time>
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
                <FileText className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg">
                    A will is only as good as its execution. In Illinois, a will that fails to meet the statutory requirements is treated exactly like no will at all — your estate passes under the intestacy laws regardless of what you wrote.
                  </p>
                  <p className="mb-4">
                    This guide covers the five legal requirements for a valid Illinois will under 755 ILCS 5/4-3, explains when notarization helps (and when it doesn&apos;t), addresses the common misconception about handwritten wills, and walks through the eight most common execution mistakes that void Illinois wills.
                  </p>
                  <p className="mb-0">
                    You will also find an interactive validity checklist, a quick quiz, and answers to the most frequently asked questions about Illinois will requirements.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="legal-requirements" className="text-2xl font-bold mt-12 mb-4">
              The 5 Legal Requirements for a Valid Illinois Will
            </h2>

            <p className="mb-6">
              Illinois will requirements are governed primarily by the Illinois Probate Act of 1975, codified at <strong>755 ILCS 5/4-1 through 5/4-7</strong>. To be admitted to probate, a will must satisfy all five of the following requirements. Missing any one of them can render the entire document invalid.
            </p>

            <div className="grid md:grid-cols-5 gap-3 my-8">
              {[
                { num: '1', label: 'In Writing', icon: <Pencil className="w-5 h-5" /> },
                { num: '2', label: 'Signed by Testator', icon: <FileText className="w-5 h-5" /> },
                { num: '3', label: 'Two Witnesses', icon: <Users className="w-5 h-5" /> },
                { num: '4', label: 'Testamentary Capacity', icon: <BookOpen className="w-5 h-5" /> },
                { num: '5', label: 'Testamentary Intent', icon: <Scale className="w-5 h-5" /> },
              ].map((item) => (
                <div key={item.num} className="bg-[#2D3E50] text-white rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-2 opacity-80">{item.icon}</div>
                  <div className="text-2xl font-bold mb-1">{item.num}</div>
                  <div className="text-sm font-medium opacity-90">{item.label}</div>
                </div>
              ))}
            </div>

            <h3 id="in-writing" className="text-xl font-bold mt-8 mb-3">
              1. The Will Must Be in Writing
            </h3>
            <p className="mb-6">
              Illinois requires all wills to be in writing. An oral declaration of your wishes — even if made before multiple witnesses on your deathbed — has no legal effect as a will in Illinois. The writing requirement is absolute, with no exceptions.
            </p>
            <p className="mb-6">
              The writing can be typed or handwritten, printed on any paper, and does not need to follow a particular format or use specific legal language. However, clarity matters enormously: ambiguous provisions create interpretation disputes during probate and can result in litigation among heirs.
            </p>

            <h3 id="signed-by-testator" className="text-xl font-bold mt-8 mb-3">
              2. Signed by the Testator (or at Their Direction)
            </h3>
            <p className="mb-6">
              The person making the will — the &ldquo;testator&rdquo; — must sign the will. Under 755 ILCS 5/4-3, the signature must appear at the end of the will. A testator who is physically unable to sign may have another person sign in their place, provided that: (a) the testator specifically directs the other person to sign, and (b) the signing occurs in the presence of two witnesses.
            </p>
            <p className="mb-6">
              Illinois courts have generally accepted marks, initials, and even an &ldquo;X&rdquo; as a valid signature when the circumstances make the testator&apos;s intent clear. However, typing your name in a word-processed document does not constitute a signature — the will must be subscribed by hand.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1">Age Requirement</p>
                  <p className="text-amber-700 text-sm">The testator must be at least 18 years of age, or must be or have been lawfully married (755 ILCS 5/4-1). A will executed before the testator turned 18 — and not reaffirmed or re-executed afterward — may be invalid.</p>
                </div>
              </div>
            </div>

            <h3 id="two-witnesses" className="text-xl font-bold mt-8 mb-3">
              3. Two Credible Witnesses
            </h3>
            <p className="mb-6">
              This is the requirement that most often trips up DIY will-makers. Illinois law requires that the will be <strong>attested and subscribed by two or more credible witnesses in the presence of the testator</strong>. Each element of this requirement matters:
            </p>
            <div className="space-y-4 my-6">
              {[
                { label: '"Attested"', desc: 'Each witness observes the testator sign (or acknowledge their prior signature on) the will.' },
                { label: '"Subscribed"', desc: 'Each witness physically signs the will — typically at a designated signature line at the end, often including their address.' },
                { label: '"Two or more"', desc: 'Exactly two witnesses is sufficient; having three is permissible but unusual. One witness is never sufficient.' },
                { label: '"Credible witnesses"', desc: 'Witnesses should be persons of legal age who are competent to testify in court. Under 755 ILCS 5/4-6, a witness who is a beneficiary under the will is technically "credible" but risks forfeiting their bequest.' },
                { label: '"In the presence of the testator"', desc: 'Both witnesses must sign while the testator is physically present and able to observe the signing. Remote or later signing is not valid.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#2D3E50]">{item.label}: </span>
                    <span className="text-gray-700">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 id="testamentary-capacity" className="text-xl font-bold mt-8 mb-3">
              4. Testamentary Capacity
            </h3>
            <p className="mb-6">
              Illinois requires the testator to be of &ldquo;sound mind and memory&rdquo; at the time the will is executed. Illinois courts have defined testamentary capacity as the ability to understand four things simultaneously:
            </p>
            <ol className="mb-6 list-decimal pl-6 space-y-2">
              <li>The nature and extent of their property</li>
              <li>The natural objects of their bounty (who their family and natural heirs are)</li>
              <li>The nature of the act they are performing (making a will)</li>
              <li>How the will distributes their property in relation to the above</li>
            </ol>
            <p className="mb-6">
              Testamentary capacity is assessed at the <em>moment of signing</em>, not before or after. A person with dementia may still have valid testamentary capacity during a &ldquo;lucid interval.&rdquo; Conversely, a person who is otherwise healthy may lack capacity if they are heavily medicated or in severe distress at the time of signing.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-[#2D3E50] mb-1 text-sm">Practical Guidance</p>
              <p className="text-gray-700 text-sm">If there is any possibility that capacity could be challenged later — due to age, illness, or family conflict — work with an attorney who can document the testator&apos;s understanding during the meeting and, if appropriate, obtain a letter from the testator&apos;s physician confirming their mental state near the execution date.</p>
            </div>

            <h3 id="testamentary-intent" className="text-xl font-bold mt-8 mb-3">
              5. Testamentary Intent
            </h3>
            <p className="mb-6">
              The document must be intended to operate as a will — meaning it is meant to control the disposition of the testator&apos;s property after death, and the testator understood and intended that purpose when they signed it. A document that is arguably a memorandum, a letter, or a casual expression of wishes may lack testamentary intent even if it is signed and witnessed.
            </p>
            <p className="mb-6">
              Most professionally drafted wills explicitly state: &ldquo;I, [Name], being of sound mind and memory, hereby declare this to be my Last Will and Testament, revoking all prior wills and codicils.&rdquo; This language establishes intent clearly and unambiguously.
            </p>

            <h2 id="notarization" className="text-2xl font-bold mt-12 mb-4">
              Notarization: Required, Optional, or Harmful?
            </h2>

            <p className="mb-6">
              This is one of the most common points of confusion about Illinois wills. The short answer:
            </p>

            <div className="my-8 border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
                {[
                  { id: 'required', label: 'For Validity', icon: <Scale className="w-4 h-4" /> },
                  { id: 'notneeded', label: 'For Basic Execution', icon: <XCircle className="w-4 h-4" /> },
                  { id: 'selfproved', label: 'For Self-Proved Wills', icon: <Shield className="w-4 h-4" /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'required' | 'notneeded' | 'selfproved')}
                    className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab === tab.id ? 'bg-[#4a708b] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {tab.icon}
                      <span>{tab.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="p-6 bg-white">
                {activeTab === 'required' && (
                  <div>
                    <h3 className="text-xl font-bold mb-3">Is Notarization Required for a Valid Will?</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                      <p className="text-2xl font-bold text-red-600">No — notarization is NOT required.</p>
                    </div>
                    <p className="text-gray-700 mb-4">Illinois law (755 ILCS 5/4-3) lists only three execution requirements: writing, testator signature, and two witnesses. A notary is not on that list. An Illinois will that is properly signed and witnessed by two credible witnesses is fully valid and admissible to probate — notarized or not.</p>
                    <p className="text-gray-700">Many people confuse notarization with witnessing, or assume that a notary somehow &ldquo;validates&rdquo; a will. A notary on a will document does not add validity to the will itself unless they are also serving as one of the two required witnesses.</p>
                  </div>
                )}
                {activeTab === 'notneeded' && (
                  <div>
                    <h3 className="text-xl font-bold mb-3">When Is Notarization Not Needed?</h3>
                    <p className="text-gray-700 mb-4">For the vast majority of Illinois wills, notarization serves no purpose and adds no legal benefit. If your will is properly executed with two disinterested witnesses who sign in your presence:</p>
                    <ul className="space-y-2 text-gray-700">
                      {[
                        'The will is fully valid without notarization.',
                        'A notarization does not make it "more valid."',
                        'A notarized will without two proper witnesses is still invalid.',
                        'You do not need to go to a bank or UPS store — witnesses can be friends, neighbors, or coworkers.',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === 'selfproved' && (
                  <div>
                    <h3 className="text-xl font-bold mb-3">The Self-Proved Will: When Notarization Does Help</h3>
                    <p className="text-gray-700 mb-4">Illinois law (755 ILCS 5/6-4) allows a will to be made &ldquo;self-proved&rdquo; by attaching a sworn affidavit — signed by the testator and both witnesses before a notary public — that affirms all execution requirements were met.</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <p className="font-semibold text-green-800 mb-2">The benefit: probate is faster.</p>
                      <p className="text-green-700 text-sm">When a will is self-proved, the witnesses do not need to appear in court or provide testimony to confirm the will&apos;s execution. The notarized affidavit substitutes for their live testimony. In Cook County, this can significantly reduce the time and cost of the initial probate hearing.</p>
                    </div>
                    <p className="text-gray-700 text-sm">The self-proved affidavit must be executed at the same time as the will (or shortly after) and requires a notary public to acknowledge the signatures of both the testator and witnesses. This is the one scenario where having a notary present at the signing ceremony adds real practical value.</p>
                  </div>
                )}
              </div>
            </div>

            <h2 id="holographic-wills" className="text-2xl font-bold mt-12 mb-4">
              Holographic Wills in Illinois: Are They Valid?
            </h2>

            <p className="mb-6">
              A holographic will is a will written entirely in the testator&apos;s own handwriting, signed by the testator, but <em>not witnessed</em>. Many states — including California, Texas, and Michigan — recognize holographic wills under certain conditions. Illinois does not.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-red-800 mb-2">Illinois Does Not Recognize Holographic Wills</p>
                  <p className="text-red-700 mb-3">A document written entirely in your own handwriting, signed by you, but not witnessed by two people present at signing — no matter how detailed, clear, and heartfelt — will NOT be admitted to probate in Illinois as a valid will.</p>
                  <p className="text-red-700 text-sm">This catches people by surprise, particularly when a loved one leaves behind a carefully written letter explaining their wishes. Without proper witnesses, that letter has no legal effect. The estate will be distributed under Illinois intestacy law regardless of what the document says.</p>
                </div>
              </div>
            </div>

            <p className="mb-6">
              There is one narrow exception: a will validly executed in another state that <em>does</em> recognize holographic wills may be admitted to probate in Illinois if it was valid under the law of the state where it was executed (755 ILCS 5/4-1(c)). But this exception applies to people who executed the will in another state before moving to Illinois — not to documents written in Illinois.
            </p>
            <p className="mb-6">
              The takeaway: if you want to write your own will in Illinois, you can — but you must still have two witnesses present when you sign it. The handwriting is not the problem; the missing witnesses are.
            </p>

            <h2 id="common-mistakes" className="text-2xl font-bold mt-12 mb-4">
              8 Common Mistakes That Invalidate a Will in Illinois
            </h2>

            <p className="mb-6">
              Most invalid wills fail for entirely predictable reasons. Here are the eight most common mistakes Illinois residents make when executing a will — and how to avoid each one.
            </p>

            <div className="space-y-4 my-8">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedMistake(expandedMistake === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${mistake.severity === 'fatal' ? 'bg-red-500' : 'bg-amber-400'}`} />
                      <div className="text-left">
                        <span className="font-semibold text-gray-900">{mistake.title}</span>
                        <span className={`ml-3 text-xs px-2 py-0.5 rounded-full font-medium ${mistake.severity === 'fatal' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                          {mistake.severity === 'fatal' ? 'Will-Voiding' : 'Significant Risk'}
                        </span>
                      </div>
                    </div>
                    {expandedMistake === index ? <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />}
                  </button>
                  {expandedMistake === index && (
                    <div className="px-6 py-5 bg-white border-t border-gray-200">
                      <p className="text-gray-700 mb-4 leading-relaxed">{mistake.description}</p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">How to Avoid It</p>
                        <p className="text-gray-700 text-sm">{mistake.fix}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 id="will-validity-quiz" className="text-2xl font-bold mt-12 mb-4">
              Interactive: Will Validity Quiz
            </h2>

            <p className="mb-6">
              Test your understanding of Illinois will requirements with this quick scenario.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <p className="font-bold text-[#2D3E50] text-lg mb-4">
                Scenario: Janet, 72, types out her will and signs it at her kitchen table. Her adult daughter (who inherits the house) and her neighbor watch her sign, then both sign as witnesses. Is Janet&apos;s will valid in Illinois?
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mb-5">
                {[
                  { id: 'yes', label: 'Yes, fully valid' },
                  { id: 'no', label: 'No, completely invalid' },
                  { id: 'partial', label: 'Valid, but the daughter may lose her bequest' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => { if (!quizSubmitted) { setQuizAnswer(option.id); setQuizSubmitted(true); } }}
                    className={`p-4 rounded-lg border-2 text-sm font-semibold transition-all text-left ${
                      quizSubmitted
                        ? option.id === 'partial'
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : quizAnswer === option.id
                          ? 'bg-red-100 border-red-500 text-red-800'
                          : 'border-gray-200 text-gray-400 bg-white'
                        : 'border-[#2D3E50] text-[#2D3E50] hover:bg-[#2D3E50] hover:text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {quizSubmitted && (
                <div className={`rounded-lg p-5 ${quizAnswer === 'partial' ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
                  <p className="font-bold mb-2">{quizAnswer === 'partial' ? 'Correct!' : 'Not quite — read on.'}</p>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>The answer is: valid, but the daughter risks losing her bequest.</strong> The will meets Illinois&apos;s basic requirements — it&apos;s in writing, Janet signed it, and two witnesses signed in her presence. However, under 755 ILCS 5/4-6, an &ldquo;interested witness&rdquo; (one who benefits under the will) can only receive the lesser of their bequest under the will or their intestate share. In many cases this means the daughter-witness receives nothing — even though the will itself is otherwise valid.
                  </p>
                  <p className="text-sm text-gray-700">
                    The fix: Janet should have used two disinterested witnesses — people who receive nothing under her will.
                  </p>
                </div>
              )}
            </div>

            <h2 id="validity-checklist" className="text-2xl font-bold mt-12 mb-4">
              Illinois Will Validity Checklist
            </h2>

            <p className="mb-6">
              Use this checklist before and after executing your Illinois will to confirm all requirements are met.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-8">
              <div className="bg-[#2D3E50] px-6 py-4">
                <h3 className="text-white font-bold text-lg">Illinois Will Execution Checklist</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {checklistItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 px-6 py-4">
                    <div className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center ${item.required ? 'bg-[#2D3E50]' : 'bg-[#4a708b]'}`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 text-sm font-medium">{item.label}</p>
                      {item.note && <p className="text-gray-500 text-xs mt-0.5">{item.note}</p>}
                    </div>
                    <div className="ml-auto flex-shrink-0">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.required ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                        {item.required ? 'Required' : 'Recommended'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 id="when-to-update" className="text-2xl font-bold mt-12 mb-4">
              When to Update Your Will
            </h2>

            <p className="mb-6">
              A properly executed will does not expire — but it can become outdated. Illinois law provides automatic revocation of some provisions under certain circumstances, but most changes in your life require you to actively update your estate plan. Here are the key triggers:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {[
                { title: 'Marriage', desc: 'Illinois does not automatically revoke a pre-existing will upon marriage, but a new spouse has elective share rights that can override outdated distributions. Update your will after marriage.' },
                { title: 'Divorce', desc: 'Under 755 ILCS 5/4-7, Illinois automatically revokes bequests and fiduciary appointments to a former spouse after a final divorce decree. However, the rest of the will remains valid — which may not reflect your updated wishes.' },
                { title: 'Birth or adoption of a child', desc: 'If a child is born or adopted after the will is executed and not provided for, Illinois\'s pretermitted heir statute may give that child an intestate share — which may disrupt your intended distribution.' },
                { title: 'Death of a beneficiary or executor', desc: 'If a major beneficiary or your named executor dies before you, your will should be updated to name replacements. Failing to do so can create significant complications during probate.' },
                { title: 'Significant change in assets', desc: 'If you acquire major new assets — real estate, a business, a substantial inheritance — or if you dispose of assets specifically named in your will, an update ensures your plan still works as intended.' },
                { title: 'Relocation to or from Illinois', desc: 'If you moved to Illinois with a will from another state, have it reviewed. And if you move away from Illinois, the new state\'s laws will eventually govern your estate — update your documents accordingly.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-[#2D3E50] mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mb-6">
              To update your will, you have two options: a <strong>codicil</strong> (a formally executed amendment using the same witness requirements as the original will) or a <strong>new will</strong> that expressly revokes all prior wills and codicils. For substantial changes, most estate planning attorneys recommend a new will — a single clean document is easier to administer and less likely to create interpretation disputes during probate.
            </p>
            <p className="mb-6">
              You cannot validly amend an Illinois will by writing in the margins, crossing out provisions, or adding handwritten notes — even if the changes are signed and dated. These alterations are ineffective and can raise questions about the original document&apos;s integrity.
            </p>

            <div className="bg-[#2D3E50] rounded-2xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3">Is Your Current Will Valid Under Illinois Law?</h3>
              <p className="text-white/80 mb-6 max-w-2xl text-sm leading-relaxed">
                Whether you have an existing will that needs a validity review, or you are ready to create one from scratch, a brief consultation with an Illinois estate planning attorney gives you certainty. At Illinois Estate Law, we draft flat-fee wills with proper execution guidance — so you leave with a document that will actually work.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book-consultation" className="bg-white text-[#2D3E50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center text-sm">
                  Book a Free Consultation
                </Link>
                <Link href="/chicago-wills-lawyer" className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-center text-sm">
                  View Our Will Services
                </Link>
              </div>
            </div>

            <h2 id="faq" className="text-2xl font-bold mt-12 mb-4">
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
                    {expandedFaq === index ? <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />}
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
              A valid will is the foundation of any Illinois estate plan. Whether you are creating one for the first time, reviewing an existing document, or updating after a major life event, the stakes are too high to rely on guesswork about execution requirements.
            </p>

            <p className="mb-6">
              For context on what a complete estate plan looks like beyond just a will, explore our guides on{' '}
              <Link href="/blog/what-is-a-simple-estate-plan-in-chicago-illinois/" className="text-[#4a708b] hover:underline font-medium">what a simple estate plan in Chicago includes</Link>,{' '}
              <Link href="/blog/do-you-really-need-a-power-of-attorney-in-illinois/" className="text-[#4a708b] hover:underline font-medium">whether you need a power of attorney</Link>, and{' '}
              <Link href="/blog/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/" className="text-[#4a708b] hover:underline font-medium">the financial impact of dying without a will in Illinois</Link>.
            </p>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Get a Will That Actually Works
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Illinois Estate Law drafts wills on a flat-fee basis with a proper execution ceremony — so you never have to wonder whether your document will hold up in court. Schedule a consultation to discuss your situation and get a will that clearly reflects your wishes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/chicago-wills-lawyer" className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30">
                  Learn About Our Will Services
                </Link>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Call <a href="tel:3123730731" className="text-white underline">(312) 373-0731</a> to speak directly with our team.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
              <h3 className="font-bold text-[#2D3E50] mb-3">Related Illinois Will & Estate Planning Guides</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: '/blog/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/', label: 'The Financial Impact of Dying Without a Will in Illinois' },
                  { href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/', label: 'What Is a Simple Estate Plan in Chicago?' },
                  { href: '/blog/7-overlooked-steps-that-make-or-break-an-illinois-estate-plan/', label: '7 Overlooked Steps That Make or Break an Illinois Estate Plan' },
                  { href: '/blog/do-you-really-need-a-power-of-attorney-in-illinois/', label: 'Do You Really Need a Power of Attorney in Illinois?' },
                  { href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/', label: 'Revocable Living Trusts: Pros and Cons for Illinois Residents' },
                  { href: '/blog/understanding-the-basics-of-estate-planning/', label: 'Understanding the Basics of Estate Planning' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center gap-2 text-[#4a708b] hover:text-[#2D3E50] text-sm font-medium hover:underline transition-colors">
                    <ArrowRight className="w-4 h-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
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
                  <h3 className="text-xl font-bold mb-3 text-[#2d3e50]">Mary Liberty — Chicago Estate Planning Attorney</h3>
                  <p className="mb-4 text-gray-700">
                    Mary Liberty is a Chicago-based estate planning and probate attorney dedicated to making legal planning accessible, affordable, and stress-free. Through her modern virtual law practice, she helps families and individuals across Illinois create clear, effective plans that protect their assets and their loved ones.
                  </p>
                  <p className="mb-0 text-gray-700">
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a 100% flat-fee model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3">Ready to Protect What You Have Built?</p>
              <p className="text-white/90 mb-5">Get a comprehensive estate plan that works exactly the way you intend — from a Chicago attorney you can trust.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:3123730731" className="inline-block bg-white text-[#2d3e50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center">
                  CALL (312) 373-0731
                </a>
                <a href="/book-consultation/" className="inline-block bg-transparent text-white font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-center">
                  BOOK A CONSULTATION
                </a>
              </div>
            </div>

            <div className="my-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold mb-3">SHARE THIS POST:</p>
              <div className="flex gap-4">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-makes-a-will-valid-in-illinois/')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity" aria-label="Share on Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-makes-a-will-valid-in-illinois/')}&text=${encodeURIComponent('What Makes a Will Valid in Illinois?')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-white hover:opacity-80 transition-opacity" aria-label="Share on X">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-makes-a-will-valid-in-illinois/')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity" aria-label="Share on LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
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
