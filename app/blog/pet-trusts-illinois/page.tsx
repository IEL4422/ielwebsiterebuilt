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
  Heart,
  Shield,
  Users,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'pet-trusts-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-a-pet-trust', title: 'What Is a Pet Trust in Illinois?', level: 2, numeration: '2' },
    { id: 'why-your-will-is-not-enough', title: 'Why Your Will Alone Is Not Enough for Your Pets', level: 2, numeration: '3' },
    {
      id: 'illinois-law',
      title: 'What Illinois Law Says About Pet Trusts',
      level: 2,
      numeration: '4',
      children: [
        { id: 'what-qualifies', title: 'Which Animals Qualify', level: 3, numeration: '4.1' },
        { id: 'who-enforces', title: 'Who Can Enforce a Pet Trust', level: 3, numeration: '4.2' },
      ],
    },
    {
      id: 'what-to-include',
      title: 'What to Include in an Illinois Pet Trust',
      level: 2,
      numeration: '5',
      children: [
        { id: 'choosing-caretaker', title: 'Choosing a Caretaker', level: 3, numeration: '5.1' },
        { id: 'funding-the-trust', title: 'Funding the Trust', level: 3, numeration: '5.2' },
        { id: 'leftover-funds', title: 'What Happens to Leftover Funds', level: 3, numeration: '5.3' },
      ],
    },
    { id: 'pet-trust-vs-will', title: 'Pet Trust vs. Leaving Money to a Caretaker in Your Will', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '8' },
  ];

  const faqs = [
    {
      question: 'How much money should I put in a pet trust in Illinois?',
      answer:
        'There is no fixed answer — it depends on your pet\'s species, age, health, and expected lifespan, as well as the anticipated cost of care in your area. A useful starting point is to estimate your annual spending on veterinary care, food, grooming, and boarding, then multiply by the pet\'s expected remaining years of life. Add a buffer for unexpected veterinary expenses, which can easily reach several thousand dollars for a single illness or injury. For a healthy dog or cat, many Illinois families fund pet trusts in the range of $15,000 to $50,000; for horses or animals with significant medical needs, the amount may be much higher. Your estate planning attorney can help you think through a realistic figure based on your specific circumstances.',
    },
    {
      question: 'Can I create a pet trust for multiple animals in Illinois?',
      answer:
        'Yes. A single Illinois pet trust can cover multiple animals — all of your pets can be named as beneficiaries in the same document. The trust continues as long as any one of the named animals is alive. It is important to identify each animal specifically (by species, name, description, and ideally a microchip number) so there is no confusion later about which animals the trust covers. If you acquire new pets after the trust is created, you may need to amend it to include them, or draft the trust broadly enough to encompass any animals you own at the time the trust becomes effective.',
    },
    {
      question: "What if my pet's caretaker doesn't use the money for my pet's care?",
      answer:
        'Under Illinois law, a pet trust may name an enforcer — a person or organization with standing to petition the court to enforce the trust if the caretaker is not properly caring for the animal. The court can also review the reasonableness of trust expenditures and reduce them if it finds they substantially exceed the amount needed for proper care. To reduce this risk in practice, choose a trustee who is separate from the caretaker and who controls the funds — distributing money to the caretaker only for documented pet-related expenses. This separation of roles (caretaker vs. trustee) is the single most important safeguard in a well-structured Illinois pet trust.',
    },
    {
      question: 'Is a pet trust different from leaving money to someone in my will with instructions to care for my pet?',
      answer:
        'Yes — significantly. When you leave money to an individual in your will with informal instructions to use it for your pet, you have created a legally unenforceable moral obligation. That person owns the money outright and is free to use it however they wish. If they spend none of it on your pet, there is nothing your beneficiaries or a court can do. A pet trust, by contrast, is a legally enforceable arrangement under 760 ILCS 3/408. The trustee holds the funds specifically for the pet\'s care, and any person interested in the animal\'s welfare — or a court-appointed enforcer — can compel the trustee to use the funds properly.',
    },
    {
      question: 'Does a pet trust go through probate in Illinois?',
      answer:
        'No — a pet trust established as a stand-alone trust or as a sub-trust within a revocable living trust does not go through probate. Assets transferred into the trust during your lifetime (or directed there by a pour-over will after probate) pass to the trustee privately and immediately upon your death, without any court involvement. This means your pet\'s care can begin right away, rather than waiting months for a probate court to act. If your pet trust is funded through your will alone, the funds must pass through probate first before reaching the trust — another reason to integrate your pet trust into a broader revocable living trust plan.',
    },
    {
      question: 'What happens to my pet if I become incapacitated but do not die?',
      answer:
        'A pet trust can be drafted to take effect not only at your death but also if you become incapacitated — for example, if you are hospitalized, enter a memory care facility, or otherwise cannot care for your animals. In that case, the successor trustee gains access to the trust funds and can arrange for the caretaker to step in immediately. Without this provision, your pet could be left in limbo during a period of incapacity, with no one having clear legal authority to spend money on its care. This incapacity protection is one of the most overlooked — and most valuable — features of a properly drafted Illinois pet trust.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pet Trusts in Illinois: How to Protect Your Animals After You\'re Gone',
    description:
      'Learn how Illinois pet trusts work under 760 ILCS 3/408, how to fund and structure one, who enforces it, and why a will alone cannot protect your animals.',
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
    datePublished: '2026-09-02',
    dateModified: '2026-09-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/pet-trusts-illinois/',
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
                  9 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                Pet Trusts in Illinois: How to Protect Your Animals After You&apos;re Gone
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Illinois law allows you to create a legally enforceable trust that provides for your pets after you die or become incapacitated. Here is exactly how pet trusts work, how to structure one, and why a provision in your will is not a substitute.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>September 2, 2026</time>
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
                    A pet trust is the only legally enforceable way to ensure your animals are cared for after you die or become incapacitated in Illinois.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Under 760 ILCS 3/408 of the Illinois Trust Code, you can create a trust that holds funds specifically for your pet&apos;s care, names a caretaker to provide day-to-day care, and designates a trustee to control the money. Unlike an informal instruction in your will, a pet trust is enforceable in court — the caretaker must actually use the money for your animal, or face legal consequences.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains what Illinois pet trusts are, what the law requires, how to structure one effectively, and what happens to remaining funds when your pet eventually passes.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reference */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Pet Trust at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Legally enforceable under 760 ILCS 3/408', type: 'Illinois Law', color: 'blue' },
                  { label: 'Funds held by a trustee; released only for pet care', type: 'How It Works', color: 'amber' },
                  { label: 'Trust ends when your last named pet passes', type: 'Duration', color: 'green' },
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

            {/* 2. What Is a Pet Trust */}
            <h2 id="what-is-a-pet-trust" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is a Pet Trust in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>pet trust</strong> is a legal arrangement in which you transfer money or other assets to a trustee, who then manages those funds for the benefit of your pet during the animal&apos;s lifetime. You designate a <strong>caretaker</strong> to provide hands-on daily care — feeding, veterinary visits, grooming, exercise — and a separate <strong>trustee</strong> who controls the money and releases it to the caretaker for legitimate pet-care expenses.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois formally recognized pet trusts in 2020 when the Illinois Trust Code (760 ILCS 3) took effect, codifying what courts had informally enforced for years. Under Section 408 of the Trust Code, a trust for the care of one or more animals is valid, enforceable, and can be structured to take effect either during your lifetime or at your death.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The key distinction between a pet trust and any informal arrangement is <strong>legal enforceability</strong>. If you simply leave money to a friend and ask them verbally to care for your cat, that friend owns the money outright. There is no legal mechanism to compel them to spend it on your cat, and no court will intervene if they spend it on something else entirely. A pet trust, by contrast, creates a fiduciary duty. The trustee is legally obligated to use the trust assets only for your pet&apos;s care — and can be held accountable if they do not.
            </p>

            {/* 3. Why Your Will Is Not Enough */}
            <h2 id="why-your-will-is-not-enough" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Why Your Will Alone Is Not Enough for Your Pets
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Many Illinois pet owners believe that including a sentence in their will — &ldquo;I leave $10,000 to my sister Sarah to care for my dog, Max&rdquo; — is enough to protect their animals. It is not, for two important reasons.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Pets are legally considered property',
                  body: 'Under Illinois law, animals are personal property — they cannot be beneficiaries of a will or trust in the traditional sense. You cannot simply leave money "to Max." You must leave money to a person (the caretaker or trustee) with enforceable obligations attached to its use. A pet trust is the mechanism that creates those enforceable obligations.',
                  color: 'amber',
                },
                {
                  title: 'Informal will bequests are unenforceable',
                  body: 'When you leave money to a person with informal instructions to care for your pet, that person receives the money with no legal strings attached. Once they accept the bequest, the money is legally theirs. A court will not intervene simply because they chose not to spend it on your animal. Your pet is left to their goodwill — not the law.',
                  color: 'amber',
                },
                {
                  title: 'A will cannot help during incapacity',
                  body: 'A will only takes effect at death. If you are hospitalized for months following a stroke or accident, your will provides no authority for anyone to access funds to care for your pets during that period. A pet trust, when properly structured, can activate upon incapacity — not just death — ensuring continuous care even while you are alive but unable to provide it yourself.',
                  color: 'blue',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-6 ${
                    item.color === 'amber' ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <h3 className="font-bold text-gray-900 text-base mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">What happens to pets with no plan in place</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    When an Illinois pet owner dies or becomes incapacitated without a plan, animals often end up surrendered to shelters, passed between reluctant family members, or — in the worst cases — euthanized. Even a loving family may be unable to keep your animals long-term. A pet trust removes the burden from your loved ones and gives your animals a funded, structured path to continued care.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Illinois Law */}
            <h2 id="illinois-law" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Illinois Law Says About Pet Trusts
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Section 408 of the Illinois Trust Code (760 ILCS 3/408) governs pet trusts in Illinois. The statute is straightforward: a trust for the care of one or more animals that are alive during the settlor&apos;s lifetime is valid. The trust terminates upon the death of the last surviving animal named in the trust. Key provisions of Illinois law that every pet owner should understand:
            </p>

            <div className="border border-gray-200 rounded-xl p-6 bg-white my-6">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-[#4a708b] flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="font-bold text-[#33414E] mb-4 font-['Plus_Jakarta_Sans']">
                    Key Provisions of 760 ILCS 3/408
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        rule: 'The trust is valid and enforceable',
                        detail: 'An Illinois court must enforce a properly created pet trust. This is not discretionary — the statute mandates enforcement.',
                      },
                      {
                        rule: 'Excess funds may be reduced by a court',
                        detail: 'If a court determines that the trust is funded with significantly more money than is reasonably needed for the animal\'s care, it may reduce the amount — protecting against attempts to shelter large assets under a pet trust.',
                      },
                      {
                        rule: 'An enforcer may be designated or appointed',
                        detail: 'The trust can name an "enforcer" — a person who has standing to petition the court to enforce the trust if the trustee or caretaker is not performing their duties. If no enforcer is named, the court may appoint one.',
                      },
                      {
                        rule: 'The trust terminates at the last pet\'s death',
                        detail: 'Once all animals named in the trust have died, the trust terminates. Any remaining funds are distributed as the trust document directs — typically to a named remainder beneficiary or to the settler\'s estate.',
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                        <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900">{item.rule}:</strong> {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h3 id="what-qualifies" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Which Animals Qualify
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois law extends pet trust protection to any animal — not just dogs and cats. The statute applies to any domesticated animal that was alive during the settlor&apos;s lifetime, including birds, reptiles, horses, rabbits, fish, and exotic animals legally kept as pets under Illinois law. There is no requirement that the animal be a common household pet.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Because the trust covers only animals &ldquo;alive during the settlor&apos;s lifetime,&rdquo; it cannot cover animals born after your death. If you want your pet&apos;s offspring to be covered, they must be individually identified in the trust, or the trust must be amended while you are alive to add them.
            </p>

            <h3 id="who-enforces" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Who Can Enforce a Pet Trust
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Because a pet cannot sue on its own behalf, Illinois law allows you to designate an <strong>enforcer</strong> — a person with legal standing to monitor the trust and petition the court if the trustee or caretaker is not fulfilling their obligations. The enforcer does not hold the money (that is the trustee) and does not provide daily care (that is the caretaker) — their role is to act as a watchdog on your animal&apos;s behalf.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Good candidates for the enforcer role include a trusted friend who cares deeply about your animal&apos;s wellbeing, a local animal welfare organization, or a veterinarian who agrees to serve in that capacity. If you choose not to name an enforcer in the trust document, an Illinois court may appoint one if a problem arises.
            </p>

            {/* 5. What to Include */}
            <h2 id="what-to-include" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What to Include in an Illinois Pet Trust
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A well-drafted Illinois pet trust is more than a statement that you want your pet cared for. It is a detailed operational document that removes ambiguity about who does what, with how much money, and under what conditions.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Pet Trust Drafting Checklist
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Identify each animal specifically — name, species, breed, microchip number',
                  'Name a primary caretaker and at least one alternate',
                  'Name a trustee (separate from the caretaker) and a successor trustee',
                  'Name an enforcer or the class of persons who may enforce the trust',
                  'Specify the amount of funding and how the trustee may disburse it',
                  'Describe standards of care — diet, housing, veterinary care, grooming',
                  'Address what happens if the caretaker can no longer serve',
                  'Include an emergency plan for immediate care upon your death or incapacity',
                  'Name a remainder beneficiary for any funds left after your last pet passes',
                  'Specify whether the trust activates at death, incapacity, or both',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <h3 id="choosing-caretaker" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Choosing a Caretaker
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The caretaker is the person who will live with — or at minimum regularly visit and care for — your animal after you are gone. This is arguably the most important choice in your entire pet trust because no amount of money compensates for a caretaker who is unwilling or unable to provide genuine, attentive care.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#33414E] text-white rounded-xl p-5">
                <Users className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">What to Look for in a Caretaker</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Genuine love for and experience with the type of animal',
                    'Stable housing that can accommodate the pet',
                    'Financial stability (the trust supplements, not replaces, their own resources)',
                    'A lifestyle compatible with the pet\'s needs and temperament',
                    'Willingness to accept the role — confirm before naming them',
                    'Name an alternate caretaker in case the primary cannot serve',
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
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Keep Caretaker and Trustee Separate</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'The caretaker provides daily care; the trustee controls the money',
                    'Separation prevents the caretaker from self-authorizing expenditures',
                    'Trustee releases funds only for documented pet-care expenses',
                    'This structure is the most important safeguard in any pet trust',
                    'The trustee can be a friend, family member, or professional fiduciary',
                    'Consider a corporate trustee for large or long-term trusts',
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
              It is also a good idea to include a modest caretaker stipend in the trust — a regular payment to compensate the caretaker for their time and effort. This acknowledgment that caring for an animal takes real work and imposes real costs on the caretaker can make the difference between a caretaker who is enthusiastic about the role and one who eventually resents it.
            </p>

            <h3 id="funding-the-trust" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Funding the Trust
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An unfunded pet trust is as useless as an unfunded revocable living trust — the document exists on paper, but the caretaker has no money to work with. You must actually transfer assets into the trust (or direct them there through a beneficiary designation or pour-over will) for it to function.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              How much to fund depends on your specific animal and circumstances. Consider:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  label: 'Expected lifespan',
                  detail: 'A puppy may need a trust funded for 15 years; a parrot may live for 80 years. Horses can live into their 30s. Life expectancy determines the total duration of care you are planning for.',
                },
                {
                  label: 'Annual cost of care',
                  detail: 'Add up your annual spending on food, veterinary care, grooming, boarding, medications, and any specialty services. Factor in inflation over the expected duration of the trust.',
                },
                {
                  label: 'Emergency veterinary reserves',
                  detail: 'A serious illness, surgery, or emergency can cost thousands of dollars in a single event. Build in a reserve — typically $5,000 to $15,000 — beyond routine care expenses.',
                },
                {
                  label: 'Caretaker stipend',
                  detail: 'If you plan to pay your caretaker a monthly or annual stipend for their time, add that amount to your funding calculation.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">{item.label}:</strong> {item.detail}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    Illinois courts can reduce excessive funding
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Under 760 ILCS 3/408(c), a court may reduce the amount transferred into a pet trust if it determines the amount substantially exceeds what is needed for the intended care. Fund your trust reasonably — focus on realistic projected costs, not on sheltering a large asset from your estate.
                  </p>
                </div>
              </div>
            </div>

            <h3 id="leftover-funds" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              What Happens to Leftover Funds
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When your last surviving animal named in the trust passes away, the trust terminates — and any remaining funds must go somewhere. Illinois law requires you to designate a <strong>remainder beneficiary</strong>: the person or organization that receives whatever is left in the trust at that point.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Your remainder beneficiary can be anyone you choose — a family member, a friend, the caretaker as recognition of their long service, or a charitable organization such as an animal shelter or veterinary research foundation. Many Illinois pet owners name an animal welfare charity as the remainder beneficiary, so any unused funds continue to benefit animals even after their own pets have passed. If you do not designate a remainder beneficiary, the remaining funds revert to your estate and are distributed according to your will — or by Illinois intestacy law if you have no will.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Pets With an Illinois Pet Trust?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area pet owners create enforceable pet trusts — carefully drafted, properly funded, and integrated into a complete estate plan. Flat-fee pricing so you always know what you&apos;ll pay before we start.
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

            {/* 6. Pet Trust vs. Will */}
            <h2 id="pet-trust-vs-will" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Pet Trust vs. Leaving Money to a Caretaker in Your Will
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The comparison between a pet trust and a simple will bequest illustrates why the extra step of creating a proper trust is worthwhile for anyone serious about their pet&apos;s long-term wellbeing.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Comparison: Pet Trust vs. Will Bequest
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Pet Trust</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Will Bequest with Instructions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Legally enforceable?', 'Yes — 760 ILCS 3/408 mandates enforcement', 'No — instructions are unenforceable moral obligations'],
                      ['Control over funds', 'Trustee controls; caretaker must document expenses', 'Recipient owns the money outright with no restrictions'],
                      ['Activates during incapacity?', 'Yes, if drafted to include incapacity', 'No — a will only operates at death'],
                      ['Goes through probate?', 'No (if funded as a living trust or sub-trust)', 'Yes — must pass through Illinois probate first'],
                      ['Remainder funds', 'Directed to named remainder beneficiary', 'Recipient keeps any unused funds — no legal duty to return them'],
                      ['Court oversight available?', 'Yes — enforcer can petition the court', 'No — no mechanism for court intervention'],
                      ['Privacy', 'Private — trust not filed with a court', 'Public — wills are probate court records'],
                    ].map(([factor, trust, will], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-gray-600">{trust}</td>
                        <td className="py-3 px-4 text-gray-600">{will}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For pet owners with animals they genuinely want protected — not just cared for at someone&apos;s discretion — a pet trust is the only reliable option. A provision in your will is better than nothing, but it relies entirely on the goodwill of the recipient rather than the force of law.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Pet trusts are also frequently incorporated as a sub-trust within a broader <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable living trust</Link>. When structured this way, your pet trust takes effect immediately at your death or incapacity — with no probate delay — while the rest of your estate is administered under the terms of your main trust. This integration avoids the gap that can occur when a stand-alone pet trust funded through a will must wait months for probate to conclude before any money is released for your animal&apos;s care.
            </p>

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
              If you have pets and care about what happens to them after you are gone or if you become incapacitated, a pet trust belongs in your estate plan. The most important next steps are simple: talk to a trusted person about becoming your pet&apos;s caretaker, think about who would serve well as trustee, and schedule a consultation with an Illinois estate planning attorney to put the formal documents in place.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law creates pet trusts as part of complete, integrated estate plans — often alongside a <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable living trust</Link>, a <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">pour-over will</Link>, and <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">powers of attorney</Link> that cover incapacity as well as death. Our flat-fee pricing means you will know exactly what you are paying before we start. See our <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">services and pricing page</Link> for details.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Speak With an Illinois Pet Trust Attorney</h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area pet owners create legally enforceable pet trusts that protect their animals — whether the plan needs to activate at death, incapacity, or both. Schedule a free consultation to get started.
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
                  href="/chicago-revocable-trusts-lawyer/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  Revocable Trust Services
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
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/how-to-fund-a-revocable-living-trust-illinois/',
                    label: 'How to Fund a Revocable Living Trust in Illinois',
                  },
                  {
                    href: '/blog/trustee-vs-executor-illinois/',
                    label: 'Trustee vs. Executor in Illinois: Roles, Duties, and Which You Need',
                  },
                  {
                    href: '/blog/what-is-a-pour-over-will-illinois/',
                    label: 'What Is a Pour-Over Will in Illinois?',
                  },
                  {
                    href: '/blog/selecting-a-trustee-for-your-illinois-revocable-trust/',
                    label: 'Selecting a Trustee for Your Illinois Revocable Trust',
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
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a 100% flat-fee model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 rounded-lg p-5 border border-gray-200 my-8">
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois pet trust law and estate planning law are complex and fact-specific — the appropriate structure for a pet trust depends on your individual animals, assets, family circumstances, and planning goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Create a Pet Trust in Illinois?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put a legally enforceable pet trust in place — giving your animals the protected future they deserve.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/pet-trusts-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/pet-trusts-illinois/')}&text=${encodeURIComponent('Pet Trusts in Illinois — how to protect your animals with a legally enforceable trust')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/pet-trusts-illinois/')}`}
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
