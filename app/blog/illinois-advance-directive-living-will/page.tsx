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
  Heart,
  Users,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'illinois-advance-directive-living-will';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-advance-directive', title: 'What Is an Illinois Advance Directive?', level: 2, numeration: '2' },
    {
      id: 'two-core-documents',
      title: 'The Two Core Documents',
      level: 2,
      numeration: '3',
      children: [
        { id: 'living-will', title: 'The Illinois Living Will Declaration', level: 3, numeration: '3.1' },
        { id: 'healthcare-poa', title: 'The Healthcare Power of Attorney', level: 3, numeration: '3.2' },
      ],
    },
    { id: 'how-to-execute', title: 'How to Execute an Illinois Advance Directive', level: 2, numeration: '4' },
    { id: 'without-directive', title: 'What Happens Without an Advance Directive', level: 2, numeration: '5' },
    { id: 'when-takes-effect', title: 'When Your Advance Directive Takes Effect', level: 2, numeration: '6' },
    { id: 'can-be-overridden', title: 'Can a Healthcare Provider Override Your Directive?', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Does an Illinois advance directive need to be notarized?',
      answer:
        'The Illinois Living Will Declaration does not require notarization — it must be signed in front of two witnesses. The witnesses cannot be your attending physician, an employee of your healthcare facility, anyone who inherits under your will, or anyone directly responsible for your medical care. The Illinois Statutory Short Form Power of Attorney for Health Care also does not require a notary — it requires the same two-witness execution. However, adding a notary acknowledgment is a common precaution that can make it easier for out-of-state healthcare providers to accept the documents, and many Illinois attorneys include notarization as a matter of course. The key statutory requirements are the two qualified, disinterested witnesses.',
    },
    {
      question: 'Can I cancel or change my advance directive after I sign it?',
      answer:
        'Yes — and Illinois law makes this intentionally straightforward. You can revoke a Living Will Declaration at any time, in any manner, regardless of your mental or physical condition at the time of revocation. This includes tearing up the document, writing "REVOKED" across it, or simply telling your physician. A healthcare power of attorney can be revoked in writing or orally, by notifying your agent or any healthcare provider. To update your preferences, you create a new document that supersedes the old one. Because of this ease of revocation, an advance directive you created years ago should be reviewed regularly — particularly after a major health event, change in family circumstances, or if your healthcare agent is no longer available or willing to serve.',
    },
    {
      question: 'What if my family disagrees with my advance directive?',
      answer:
        'Your advance directive, once properly executed, represents your legally expressed wishes — and Illinois law requires healthcare providers to follow it. Family disagreement does not override a valid advance directive. If your healthcare power of attorney is in effect, your agent has the legal authority to make decisions on your behalf, and that authority supersedes family members who are not named agents. Family members can petition the court to challenge your agent\'s authority or the validity of the directive, but absent a court order, the directive and your agent\'s decisions control. This is exactly why choosing your agent carefully — and communicating your wishes to your family in advance — is so important. Families who understand your wishes are far less likely to create conflict at a critical moment.',
    },
    {
      question: 'Does my Illinois advance directive work in other states?',
      answer:
        'Most states, including all states neighboring Illinois, give effect to advance directives validly executed under another state\'s law. However, there is no guarantee of full recognition, and the specific requirements vary. When you travel or spend significant time in another state, it is worth having your attorney verify that your Illinois documents will be honored there — or executing a state-specific directive as a supplement. Many healthcare systems, particularly those near state borders, maintain standard multi-state advance directive forms that are more broadly recognized. When you seek care at a new facility in any state, present your advance directive at admission and confirm the facility has a copy on file.',
    },
    {
      question: 'What is the difference between a living will and a DNR order in Illinois?',
      answer:
        'A Living Will Declaration is a legal planning document you execute in advance, while you are healthy and competent, expressing your wishes about life-sustaining treatment if you are ever terminally ill or in a persistent vegetative state. A Do-Not-Resuscitate (DNR) order, by contrast, is a physician\'s medical order that instructs emergency and medical personnel not to perform CPR if your heart stops or you stop breathing. A DNR is ordered by your treating physician — often at the patient\'s or healthcare agent\'s request — based on current medical condition. Your Living Will may express your preference not to have resuscitation attempted, and your healthcare agent can authorize a DNR, but the DNR itself must be ordered by a physician. The two documents work together but are not interchangeable.',
    },
    {
      question: 'Should my advance directive be part of my complete estate plan?',
      answer:
        'Yes — absolutely. An advance directive addresses your healthcare and end-of-life wishes, while a will, revocable living trust, and financial power of attorney address your assets and financial decisions. A complete Illinois estate plan includes both. Without an advance directive, even the most thorough financial estate plan leaves a critical gap: who makes your medical decisions and under what conditions? Without a financial power of attorney, even a thoughtfully drafted advance directive leaves your bills unpaid and your assets unmanaged during incapacity. Illinois Estate Law routinely includes both healthcare and financial planning documents — a Living Will Declaration, a healthcare power of attorney, and a durable financial power of attorney — as standard components of every estate plan.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is an Advance Directive in Illinois? Living Will & Healthcare Power of Attorney Guide',
    description:
      'Learn what an Illinois advance directive and living will do, how to execute them, who needs one, and how they work with your power of attorney for healthcare.',
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
    datePublished: '2026-11-11',
    dateModified: '2026-11-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/illinois-advance-directive-living-will/',
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
                What Is an Advance Directive in Illinois? Living Will &amp; Healthcare Power of Attorney Guide
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                An Illinois advance directive tells your doctors what medical treatment you want — and who can make decisions for you — if you ever cannot speak for yourself. Here is exactly how these documents work, why every Illinois adult needs them, and how to put them in place.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>November 11, 2026</time>
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
                <Heart className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    An Illinois advance directive is a set of legal documents that expresses your healthcare wishes and designates someone to make medical decisions for you if you become unable to communicate.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    In Illinois, an advance directive typically includes two documents: a <strong>Living Will Declaration</strong>, which states your preferences about life-sustaining treatment, and a <strong>Healthcare Power of Attorney</strong>, which names an agent to make all medical decisions on your behalf. Together, they give healthcare providers clear guidance and give your family a legal framework — reducing conflict and ensuring your wishes are honored.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    Without these documents, Illinois law may require a court proceeding to appoint a healthcare guardian, and your family may be left guessing — or disagreeing — about what you would have wanted. This guide explains both documents, the execution requirements, and how to integrate them into a complete Illinois estate plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick at-a-glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Advance Directive at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Two documents: Living Will + Healthcare Power of Attorney', type: 'What It Is', color: 'blue' },
                  { label: 'Requires two witnesses; notary optional but recommended', type: 'How to Sign It', color: 'amber' },
                  { label: 'Takes effect only when you cannot communicate your own wishes', type: 'When It Activates', color: 'green' },
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

            {/* 2. What Is an Illinois Advance Directive */}
            <h2 id="what-is-advance-directive" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is an Illinois Advance Directive?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The term <strong>&ldquo;advance directive&rdquo;</strong> is an umbrella term for any legal document in which you express your healthcare wishes in advance — before a medical crisis occurs. In Illinois, this includes the <strong>Living Will Declaration</strong> (governed by the Illinois Living Will Act, 755 ILCS 35) and the <strong>Healthcare Power of Attorney</strong> (governed by the Illinois Power of Attorney Act, 755 ILCS 45). Many Illinois families execute both documents as part of a complete estate plan.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Think of an advance directive as a conversation you have with your healthcare team and your family before a crisis — written down in legally binding form. Without it, doctors must look to whoever is present, and family members may disagree, go to court, or simply be left to make gut-wrenching decisions with no guidance. With an advance directive in place, your voice speaks for you even when you cannot.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              These documents are not just for the elderly or the terminally ill. A car accident, a sudden stroke, a surgical complication — any of these can leave a healthy adult temporarily or permanently unable to communicate. Illinois estate planning attorneys recommend that every adult, regardless of age or health status, have an advance directive in place.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Why younger Illinois adults need advance directives too</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    When a person becomes incapacitated without a healthcare power of attorney, Illinois law does not automatically give a spouse or parent legal authority to make medical decisions. Healthcare providers may require a court-appointed guardian before acting — a process that takes weeks and costs thousands of dollars — while critical decisions wait. An advance directive eliminates this gap entirely and costs a fraction of what a guardianship proceeding does.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. The Two Core Documents */}
            <h2 id="two-core-documents" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The Two Core Documents in an Illinois Advance Directive
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois law recognizes two distinct healthcare planning documents. Each serves a different purpose, and a complete advance directive typically includes both.
            </p>

            <h3 id="living-will" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The Illinois Living Will Declaration
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The <strong>Illinois Living Will Declaration</strong> is a document in which you state, in advance, that if you are ever in a terminal condition and death is imminent, you do not want life-sustaining treatment used to prolong the dying process. It is a narrow but powerful document: it applies only when two physicians have certified that you have a terminal condition and that death will occur within a short time regardless of treatment.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Under the Illinois Living Will Act (755 ILCS 35), you can use the statutory form or a substantially similar document. The declaration must express your preference about death-delaying procedures — typically mechanical ventilation, artificial nutrition and hydration, CPR, and similar interventions. You can also specify certain exceptions, such as requesting comfort care, pain management, and palliative treatment regardless of any other instructions.
            </p>

            <div className="border border-gray-200 rounded-xl p-6 bg-white my-6">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#33414E] mb-3 font-['Plus_Jakarta_Sans']">
                    What the Illinois Living Will Covers
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Whether to use mechanical ventilation if you cannot breathe independently',
                      'Whether to use artificial nutrition and hydration (feeding tubes)',
                      'Whether to attempt CPR if your heart stops',
                      'Your preferences about comfort care, pain control, and hospice',
                      'Any specific medical interventions you do or do not want',
                      'Instructions to your attending physician and healthcare team',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                        <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4 font-['Plus_Jakarta_Sans']">
                    <strong>Important limitation:</strong> An Illinois Living Will applies only when you have a <em>terminal condition</em>. It does not govern decisions during temporary incapacity, serious illness, or non-terminal situations — that is what the Healthcare Power of Attorney is for.
                  </p>
                </div>
              </div>
            </div>

            <h3 id="healthcare-poa" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The Illinois Healthcare Power of Attorney
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The <strong>Healthcare Power of Attorney</strong> (also called a healthcare proxy or healthcare agent designation) gives a person you trust — your <em>healthcare agent</em> — the legal authority to make all medical decisions on your behalf whenever you are unable to make or communicate those decisions yourself. This is the more powerful and broadly applicable of the two documents.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Under the Illinois Power of Attorney Act (755 ILCS 45/4-10), your healthcare agent can consent to or refuse any medical treatment, access your medical records, hire and fire healthcare providers, and make any decision about your medical care — including, with the right language in the document, decisions about life-sustaining treatment. The scope of the agent&apos;s authority is determined by what you put in the document.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#33414E] text-white rounded-xl p-5">
                <Users className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">What Your Healthcare Agent Can Do</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Consent to or refuse any medical procedure or treatment',
                    'Access your medical records under HIPAA',
                    'Hire and discharge healthcare providers',
                    'Make decisions about surgery, hospitalization, and medications',
                    'Authorize or refuse life-sustaining treatment (if granted that authority)',
                    'Make decisions about organ donation',
                    'Arrange for home health care, nursing home placement, or hospice',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-5">
                <Shield className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Choosing the Right Healthcare Agent</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Choose someone you trust completely to follow your wishes',
                    'Pick someone who can act calmly under emotional pressure',
                    'Name a primary agent and at least one alternate',
                    'The agent does not need to be a family member',
                    'Your agent cannot be your attending physician or their employee',
                    'Talk to your agent about your values and wishes before signing',
                    'Confirm the person is willing and available to serve',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Because the Healthcare Power of Attorney is not limited to terminal conditions, it fills the gap left by the Living Will Declaration. A young person in a coma after a car accident — clearly not in a terminal condition — still needs someone with legal authority to make immediate healthcare decisions. That authority comes from the Healthcare Power of Attorney, not the Living Will.
            </p>

            {/* 4. How to Execute */}
            <h2 id="how-to-execute" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Execute an Illinois Advance Directive
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Both Illinois healthcare planning documents have specific execution requirements. Meeting these requirements is not a technicality — a document signed incorrectly may be treated as invalid by healthcare providers, potentially at the worst possible moment.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  step: '1',
                  title: 'Sign in the presence of two qualified witnesses',
                  detail: 'Both the Living Will Declaration and the Healthcare Power of Attorney require two adult witnesses to watch you sign. Witnesses cannot be: your attending physician; an employee of your attending physician or healthcare facility; anyone who stands to inherit from your estate; or anyone financially responsible for your care. This requirement protects against undue influence at a vulnerable moment.',
                },
                {
                  step: '2',
                  title: 'Have both witnesses sign the document',
                  detail: 'The witnesses must sign the document in your presence and in each other\'s presence. Their signatures affirm that you signed voluntarily and appeared to be of sound mind. Keep in mind that a witness cannot be your healthcare agent — the agent and the witnesses must be different people.',
                },
                {
                  step: '3',
                  title: 'Consider optional notarization',
                  detail: 'Illinois law does not require notarization for either document, but adding a notary acknowledgment strengthens the document\'s acceptance — especially with out-of-state healthcare providers or if the document\'s validity is ever questioned. Many Illinois estate planning attorneys routinely include notarization as a best practice.',
                },
                {
                  step: '4',
                  title: 'Distribute copies strategically',
                  detail: 'Give a copy to your primary care physician and ask that it be placed in your medical file. Give a copy to your healthcare agent. Carry a card in your wallet noting that you have an advance directive and where it is located. If you are admitted to a hospital, present a copy at intake.',
                },
                {
                  step: '5',
                  title: 'Store the original and review periodically',
                  detail: 'Keep the original in a secure but accessible location — not a safe-deposit box that cannot be opened quickly in an emergency. Review and, if appropriate, update the documents every few years or after any significant change in your health status, family situation, or relationship with your designated agent.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
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

            {/* 5. Without a Directive */}
            <h2 id="without-directive" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Happens If You Do Not Have an Illinois Advance Directive
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When an Illinois resident becomes incapacitated without an advance directive, healthcare providers face a gap in legal authority. Illinois does not have a universal statute that automatically designates a family member as your healthcare decision-maker in the absence of a document — the authority hierarchy in some other states does not fully apply in Illinois.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In practice, hospital ethics committees and physicians will typically work with the closest available family member. But &ldquo;in practice&rdquo; is not the same as &ldquo;legally authorized.&rdquo; If family members disagree — a spouse and an adult child, for example — there is no clear legal mechanism to resolve the dispute without a court proceeding. A <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">guardianship</Link> petition can take weeks and cost thousands of dollars in legal fees, while critical medical decisions wait.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Scenarios Where No Advance Directive Creates Serious Problems
              </h3>
              <div className="space-y-3">
                {[
                  {
                    scenario: 'Unmarried adults',
                    detail: 'A partner — even a long-term live-in partner — has no automatic legal authority to make healthcare decisions. Without a healthcare POA naming them, they may be legally sidelined in favor of an estranged family member.',
                  },
                  {
                    scenario: 'Parents of adult children',
                    detail: 'Once a child turns 18, parents lose automatic decision-making authority. A college student in a car accident may be left without a legally authorized decision-maker if neither a healthcare POA nor a Living Will was executed.',
                  },
                  {
                    scenario: 'Blended families',
                    detail: 'When a remarried person becomes incapacitated, a spouse and children from a prior marriage may have conflicting views. Without a designated agent, the conflict can reach a courtroom.',
                  },
                  {
                    scenario: 'People with strong medical preferences',
                    detail: 'If you have deeply held views about life-sustaining treatment — religious, ethical, or personal — the only reliable way to ensure they are followed is a properly executed advance directive. Family guesses, however well-intentioned, may not reflect your actual wishes.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">{item.scenario}:</strong> {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. When Takes Effect */}
            <h2 id="when-takes-effect" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              When Your Illinois Advance Directive Takes Effect
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An advance directive does not strip you of your own decision-making authority. As long as you are conscious, coherent, and capable of communicating your healthcare wishes, you make your own decisions. The directive activates only when you lose that capacity.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For the <strong>Healthcare Power of Attorney</strong>, activation occurs when your attending physician determines that you lack the capacity to make or communicate healthcare decisions. Some documents require a second physician&apos;s concurrence, though this is a drafting choice rather than a statutory requirement. Your healthcare agent&apos;s authority is not activated simply because a family member thinks you need help — it requires a clinical determination.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For the <strong>Living Will Declaration</strong>, Illinois law requires both: (1) a determination that you lack decision-making capacity, and (2) two physicians certifying that you have a terminal condition and that death will occur within a short time. The Living Will only takes effect in the most serious end-of-life circumstances. This narrow trigger is intentional — it protects against premature withdrawal of treatment in situations where recovery remains possible.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    Why both documents are needed
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    The Living Will Declaration covers only terminal conditions. The Healthcare Power of Attorney covers all situations where you cannot communicate — terminal or not, temporary or permanent. A person who signs only a Living Will has no designated decision-maker for the many non-terminal situations where incapacity arises. Signing both documents ensures full coverage across every possible scenario.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Can It Be Overridden */}
            <h2 id="can-be-overridden" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Can a Healthcare Provider Override Your Illinois Advance Directive?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In most circumstances, no. A properly executed Illinois advance directive is legally binding on healthcare providers. Under the Illinois Living Will Act and the Illinois Power of Attorney Act, healthcare providers who comply with a valid directive are protected from civil and criminal liability. This legal protection creates a strong incentive for providers to follow the directive.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              However, there are limited circumstances in which a provider may decline to follow a directive. A healthcare provider or facility may object on grounds of conscience — a hospital with a religious affiliation, for example, may have institutional policies against withdrawing life-sustaining treatment. In that case, the facility is required by Illinois law to inform you (or your agent) promptly and facilitate a transfer to another provider who will honor the directive.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An advance directive can also be challenged in court, though such challenges are rare and difficult to win when the document is properly executed. The primary risk of a successful challenge is evidence of undue influence, fraud, or lack of capacity at the time of signing — another reason to execute these documents while healthy, with the assistance of an attorney who can attest to your capacity and the voluntariness of your signing.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Need an Illinois Healthcare Directive or Power of Attorney?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families create complete advance directives — Living Will Declarations, healthcare powers of attorney, and financial powers of attorney — as part of a full estate plan. Transparent flat-fee pricing. Free initial consultation.
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
                  href="/chicago-powers-of-attorney-lawyer/"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Powers of Attorney Services
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
              If you do not yet have an Illinois advance directive, the most important step is simply to get started. Think about who you would trust to make medical decisions for you in a crisis. That person — once you confirm their willingness to serve — becomes your healthcare agent. Talk to them about your values, your preferences about life-sustaining treatment, and what quality of life means to you. That conversation is the foundation of a good advance directive.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For Illinois residents, an advance directive is typically one component of a broader estate plan that also includes a{' '}
              <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                will
              </Link>
              {' '}or{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trust
              </Link>
              , a durable financial{' '}
              <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                power of attorney
              </Link>
              , and beneficiary designation updates. These documents work together — a healthcare directive addresses who makes your medical decisions, a financial power of attorney addresses who manages your money, and your will or trust addresses what happens to your assets after death.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law prepares Living Will Declarations, healthcare powers of attorney, and durable financial powers of attorney as part of a complete, flat-fee estate planning package. See our{' '}
              <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                services and pricing page
              </Link>{' '}
              to understand exactly what is included, with no hourly billing surprises.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area adults put advance directives, powers of attorney, and complete estate plans in place — protecting yourself and your family before a crisis, not after. Schedule a free consultation to get started.
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
                  href="/chicago-powers-of-attorney-lawyer/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  Powers of Attorney Services
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
                  {
                    href: '/blog/do-you-really-need-a-power-of-attorney-in-illinois/',
                    label: 'Do You Really Need a Power of Attorney in Illinois?',
                  },
                  {
                    href: '/blog/understanding-legal-authority-in-illinois/',
                    label: 'Understanding Legal Authority in Illinois',
                  },
                  {
                    href: '/blog/guardianship-vs-power-of-attorney-illinois/',
                    label: 'Guardianship vs. Power of Attorney in Illinois',
                  },
                  {
                    href: '/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/',
                    label: 'What Happens If You Become Incapacitated Without a Plan in Illinois',
                  },
                  {
                    href: '/blog/why-review-estate-plan-every-few-years/',
                    label: 'Why You Should Review Your Illinois Estate Plan Every Few Years',
                  },
                  {
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
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
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a transparent pricing model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 rounded-lg p-5 border border-gray-200 my-8">
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois advance directive law and estate planning law are complex and fact-specific — the right documents for your situation depend on your individual health, family circumstances, and goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Create Your Illinois Advance Directive?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put a Living Will Declaration, healthcare power of attorney, and complete estate plan in place — protecting yourself and your family before a crisis.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-advance-directive-living-will/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-advance-directive-living-will/')}&text=${encodeURIComponent('What Is an Advance Directive in Illinois? Living Will & Healthcare Power of Attorney Guide')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-advance-directive-living-will/')}`}
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
