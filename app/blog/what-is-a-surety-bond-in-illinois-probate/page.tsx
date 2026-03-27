'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, ChevronDown, ChevronUp, Clock, DollarSign, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, FileText, Users, Scale, Calculator, ArrowRight, CircleHelp as HelpCircle, Gavel, Landmark } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'what-is-a-surety-bond-in-illinois-probate';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedScenario, setExpandedScenario] = useState<number | null>(null);
  const [bondEstateValue, setBondEstateValue] = useState('');
  const [bondType, setBondType] = useState<'with-surety' | 'without-surety'>('with-surety');
  const [activeTab, setActiveTab] = useState<'required' | 'waived' | 'court-ordered'>('required');

  const estimateBondCost = () => {
    const value = parseFloat(bondEstateValue || '0');
    if (value <= 0) return null;

    const bondAmount = value * 1.5;
    const premiumLow = Math.max(100, bondAmount * 0.005);
    const premiumHigh = Math.max(250, bondAmount * 0.01);

    return {
      bondAmount: Math.round(bondAmount),
      annualPremiumLow: Math.round(premiumLow),
      annualPremiumHigh: Math.round(premiumHigh),
      twoYearLow: Math.round(premiumLow * 2),
      twoYearHigh: Math.round(premiumHigh * 2),
    };
  };

  const bondCost = estimateBondCost();

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-a-surety-bond', title: 'What Is a Surety Bond?', level: 2, numeration: '2' },
    { id: 'how-surety-bonds-work', title: 'How Surety Bonds Work in Probate', level: 2, numeration: '3' },
    { id: 'when-required', title: 'When a Bond Is Required, Waived, or Court-Ordered', level: 2, numeration: '4' },
    { id: 'bond-cost-calculator', title: 'Interactive Bond Cost Calculator', level: 2, numeration: '5' },
    { id: 'types-of-bonds', title: 'Types of Probate Bonds in Illinois', level: 2, numeration: '6' },
    { id: 'real-world-scenarios', title: 'Real-World Scenarios', level: 2, numeration: '7' },
    { id: 'how-to-obtain', title: 'How to Obtain a Surety Bond', level: 2, numeration: '8' },
    { id: 'frequently-asked-questions', title: 'Frequently Asked Questions', level: 2, numeration: '9' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '10' },
  ];

  const faqs = [
    {
      question: 'How much does a probate surety bond cost in Illinois?',
      answer: 'The annual premium for a probate surety bond in Illinois is typically 0.5% to 1% of the bond amount. The bond amount is usually set at 1.5 times the value of the personal property in the estate. For example, if the estate has $200,000 in personal property, the bond would be set at $300,000, and the annual premium would range from $1,500 to $3,000. The premium must be paid each year the estate remains open, and it is paid from estate funds as a legitimate administration expense.',
    },
    {
      question: 'Can the executor avoid posting a surety bond?',
      answer: 'Yes, in most cases. If the will contains a bond waiver clause (which most professionally drafted wills include), the court will not require a surety bond unless a beneficiary specifically requests one. If there is no will, or the will does not waive bond, the executor can petition the court to waive the bond requirement, though the court may still require it depending on the circumstances. All adult beneficiaries can also consent to waiving the bond.',
    },
    {
      question: 'Who pays for the surety bond in Illinois probate?',
      answer: 'The surety bond premium is paid from estate assets, not from the executor\'s personal funds. Under Illinois law (755 ILCS 5/27-2), bond premiums are considered a legitimate estate administration expense. The executor uses estate funds to pay the premium when the bond is first obtained and again at each annual renewal for as long as the estate remains open.',
    },
    {
      question: 'What happens if the executor cannot qualify for a surety bond?',
      answer: 'If the nominated executor cannot qualify for a surety bond due to poor credit or financial history, several options exist. The court may appoint a different person as executor who can qualify. Alternatively, the court may allow a bond without surety (a personal pledge rather than an insurance-backed bond), though this is unusual for larger estates. In some cases, a professional fiduciary or corporate executor may be appointed instead.',
    },
    {
      question: 'What is the difference between a bond with surety and a bond without surety?',
      answer: 'A bond with surety involves a third-party insurance company (the surety) that guarantees the executor will fulfill their duties. If the executor mismanages estate funds, the surety company pays the claim and then seeks reimbursement from the executor. A bond without surety is simply the executor\'s personal promise to the court backed by their own assets. Courts generally prefer bonds with surety because they provide stronger financial protection for beneficiaries.',
    },
    {
      question: 'Does the bond amount equal the full value of the estate?',
      answer: 'Not exactly. In Illinois, the bond amount is typically set at the total value of the personal property in the estate (cash, investments, vehicles, personal belongings) multiplied by 1.5. Real estate is generally excluded from the bond calculation because it cannot be easily converted to cash without court approval. For example, an estate with $300,000 in personal property and a $400,000 house would typically have a bond set at $450,000 (1.5 times the personal property), not $1,050,000.',
    },
    {
      question: 'Can a surety bond be revoked or reduced?',
      answer: 'Yes. As estate assets are distributed to beneficiaries and the estate value decreases, the executor can petition the court to reduce the bond amount, which lowers the annual premium. The bond is automatically released when the estate is closed and the executor is discharged by the court. If the executor is removed or resigns, the bond remains in effect until a replacement is appointed and a new bond is posted.',
    },
    {
      question: 'What triggers a claim against a surety bond?',
      answer: 'A claim against the surety bond is triggered when an interested party (beneficiary, creditor, or co-executor) files a petition with the probate court alleging that the executor breached their fiduciary duty. Common triggers include misappropriation of estate funds, failure to pay legitimate debts, self-dealing, failure to distribute assets according to the will or intestacy law, and failure to file required court accountings. The surety company investigates the claim and, if valid, pays the affected parties.',
    },
  ];

  const scenarios = [
    {
      title: 'Will with bond waiver, all adult beneficiaries',
      situation: 'Mom passed away with a professionally drafted will that includes a bond waiver clause. The estate includes $350,000 in personal property and a $300,000 house. All three adult children are named as beneficiaries and none objects to the named executor.',
      outcome: 'No surety bond required.',
      explanation: 'The will waives the bond, all beneficiaries are adults who consent, and no one has filed an objection. The executor receives Letters of Office without posting a bond, saving the estate approximately $2,600-$5,250 per year in bond premiums.',
      color: 'green',
    },
    {
      title: 'No will, estate over $100,000',
      situation: 'Dad died intestate (no will) with $250,000 in bank accounts and a car worth $15,000. His two children, ages 34 and 28, are the intestate heirs. The older child petitions to be appointed administrator.',
      outcome: 'Surety bond required.',
      explanation: 'Because there is no will (and therefore no bond waiver clause), Illinois law requires a bond. The bond amount would be set at approximately $397,500 (1.5 times $265,000 in personal property). The annual premium would be approximately $1,990-$3,975, paid from estate assets.',
      color: 'red',
    },
    {
      title: 'Will without bond waiver, minor beneficiary',
      situation: 'Grandma\'s will names her son as executor and divides the estate equally among four grandchildren, one of whom is 15 years old. The will does not contain a bond waiver clause. The estate includes $180,000 in personal property.',
      outcome: 'Surety bond required.',
      explanation: 'The absence of a bond waiver clause means the court\'s default rule applies: bond is required. The presence of a minor beneficiary makes it even more likely the court will insist on a bond to protect the minor\'s inheritance. Bond amount: approximately $270,000. Annual premium: $1,350-$2,700.',
      color: 'red',
    },
    {
      title: 'Will with bond waiver, but beneficiary objects',
      situation: 'Uncle\'s will waives the bond requirement and names his eldest niece as executor. However, one of three beneficiaries files a motion requesting the court require a bond, citing concern about the executor\'s financial judgment.',
      outcome: 'Bond may be required at court\'s discretion.',
      explanation: 'Even when the will waives bond, any interested party can petition the court to require one. The court weighs the objecting party\'s concerns against the testator\'s wishes. If the court finds the objection has merit, it will order a bond despite the waiver. This is common in family disputes or when the executor has a history of financial problems.',
      color: 'amber',
    },
    {
      title: 'Small estate with supervised administration',
      situation: 'A family member\'s estate has $75,000 in personal property. Due to disagreements among heirs, the court orders supervised administration rather than independent administration.',
      outcome: 'Bond typically required under supervised administration.',
      explanation: 'When the court imposes supervised administration, it usually also requires a bond because the heightened oversight suggests a need for additional financial protection. Bond amount: approximately $112,500. Annual premium: $563-$1,125. The estate may also qualify for a small estate affidavit to avoid formal probate entirely.',
      color: 'amber',
    },
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is a Surety Bond in Illinois Probate? When It's Required & What It Costs",
    "description": "Complete guide to surety bonds in Illinois probate. Learn what a surety bond is, when Illinois courts require one, how much it costs, and how executors can avoid the requirement. Includes interactive bond cost calculator.",
    "author": {
      "@type": "Person",
      "name": "Mary Liberty",
      "jobTitle": "Estate Planning Attorney",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Illinois Estate Law",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.illinoisestatelaw.com/logo.png",
      },
    },
    "datePublished": "2026-03-27",
    "dateModified": "2026-03-27",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
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
                What Is a Surety Bond in Illinois Probate? When It&apos;s Required &amp; What It Costs
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Everything executors and administrators need to know about probate bonds in Illinois &mdash; including when you can avoid one entirely.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>March 27, 2026</time>
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
                <Shield className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg">
                    A surety bond in Illinois probate is essentially an insurance policy that protects beneficiaries and creditors if the executor mismanages estate assets.
                  </p>
                  <p className="mb-4">
                    This guide explains what a surety bond is, when Illinois courts require one, how much it typically costs, and &mdash; critically &mdash; how to avoid the requirement altogether through proper estate planning. You will find an interactive bond cost calculator, real-world scenarios, and answers to the most common questions executors ask about bonds.
                  </p>
                  <p className="mb-0">
                    If you are serving as executor or planning your own estate, understanding surety bonds can save your family hundreds or thousands of dollars in unnecessary premiums. A well-drafted will with a <Link href="/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/" className="text-[#4a708b] hover:underline font-semibold">bond waiver clause</Link> is the simplest way to eliminate this cost.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="what-is-a-surety-bond" className="text-2xl font-bold mt-12 mb-4">
              What Is a Surety Bond?
            </h2>

            <p className="mb-6">
              A surety bond is a three-party agreement that guarantees one party will fulfill its obligations to another. In the context of Illinois probate, a surety bond guarantees that the executor (also called a personal representative or administrator) will faithfully carry out their duties in managing and distributing the estate. The bond is governed by the Illinois Probate Act, specifically <strong>755 ILCS 5/12-2</strong> through <strong>755 ILCS 5/12-7</strong>.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Landmark className="w-8 h-8 text-[#4a708b]" />
                </div>
                <h3 className="text-lg font-bold mb-2">The Obligee</h3>
                <p className="text-sm text-gray-700">
                  The <strong>probate court</strong> requires the bond to protect beneficiaries and creditors of the estate.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200 text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">The Principal</h3>
                <p className="text-sm text-gray-700">
                  The <strong>executor or administrator</strong> whose performance the bond guarantees.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200 text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">The Surety</h3>
                <p className="text-sm text-gray-700">
                  An <strong>insurance company</strong> that backs the bond and pays claims if the executor breaches their fiduciary duty.
                </p>
              </div>
            </div>

            <p className="mb-6">
              Think of it this way: a surety bond works like car insurance, but instead of protecting against accidents, it protects against an executor who makes improper decisions with estate money. If the executor misappropriates funds, fails to pay creditors, or distributes assets incorrectly, the surety company compensates the harmed parties up to the bond amount. The surety company then seeks reimbursement from the executor personally.
            </p>

            <h2 id="how-surety-bonds-work" className="text-2xl font-bold mt-12 mb-4">
              How Surety Bonds Work in Illinois Probate
            </h2>

            <p className="mb-6">
              Understanding the mechanics of a surety bond helps executors grasp why courts require them and how the costs are calculated. Here is the process from start to finish.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#4a708b]" />
                The Surety Bond Process
              </h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Court sets the bond amount', desc: 'The court calculates the bond based on the value of the personal property in the estate, typically set at 1.5 times that value. Real estate is generally excluded because it cannot be sold without court approval.' },
                  { step: '2', title: 'Executor applies with a surety company', desc: 'The executor contacts a licensed surety company or insurance broker. The application involves a credit check and financial review of the executor, not the estate.' },
                  { step: '3', title: 'Surety issues the bond', desc: 'If approved, the surety company issues the bond in exchange for an annual premium. The premium typically runs 0.5% to 1% of the bond amount per year.' },
                  { step: '4', title: 'Bond filed with the court', desc: 'The executed bond is filed with the probate court. Only after the bond is filed will the court issue Letters of Office authorizing the executor to act.' },
                  { step: '5', title: 'Annual renewal', desc: 'The bond must be renewed each year the estate remains open. Premiums are paid annually from estate funds as a legitimate administration expense.' },
                  { step: '6', title: 'Bond released at closing', desc: 'When the estate is fully administered and the court discharges the executor, the bond obligation ends. No further premiums are owed.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4a708b] text-white flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{item.title}</div>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Key point for executors:</p>
                  <p className="text-gray-700">
                    The surety company underwrites <em>the executor</em>, not the estate. If you have poor credit or significant personal debt, you may have difficulty qualifying for a bond &mdash; even if the estate is worth millions. This can delay the entire probate process. Choosing an executor with strong credit is an important consideration during{' '}
                    <Link href="/blog/understanding-the-basics-of-estate-planning/" className="text-[#4a708b] hover:underline font-semibold">estate planning</Link>.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="when-required" className="text-2xl font-bold mt-12 mb-4">
              When a Bond Is Required, Waived, or Court-Ordered
            </h2>

            <p className="mb-6">
              Not every Illinois probate case requires a surety bond. Whether a bond is necessary depends on the will, the type of administration, and whether anyone objects. Under Illinois law, the default rule is that a bond <strong>is</strong> required unless specifically waived.
            </p>

            <div className="my-8 border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('required')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'required'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>Bond Required</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('waived')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'waived'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Bond Waived</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('court-ordered')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'court-ordered'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Gavel className="w-5 h-5" />
                    <span>Court Discretion</span>
                  </div>
                </button>
              </div>

              <div className="p-6 bg-white">
                {activeTab === 'required' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">When a Surety Bond IS Required</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-red-600" />
                          No Will Exists (Intestate Estate)
                        </h4>
                        <p className="text-gray-700 text-sm">
                          When a person dies without a will, there is no bond waiver clause. Illinois law defaults to requiring a bond for the court-appointed administrator. This is one of the hidden costs of <Link href="/blog/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/" className="text-[#4a708b] hover:underline font-semibold">dying without a will</Link>.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-red-600" />
                          Will Does Not Include a Bond Waiver
                        </h4>
                        <p className="text-gray-700 text-sm">
                          If the will exists but does not contain language waiving the bond requirement, the court applies the statutory default: bond required. Many older or DIY wills omit this clause.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-red-600" />
                          Minor or Incapacitated Beneficiaries
                        </h4>
                        <p className="text-gray-700 text-sm">
                          When beneficiaries cannot protect their own interests &mdash; minor children, adults with disabilities, or individuals under guardianship &mdash; courts are far more likely to require a bond regardless of what the will says.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Scale className="w-5 h-5 text-red-600" />
                          Supervised Administration
                        </h4>
                        <p className="text-gray-700 text-sm">
                          When the court orders supervised administration (rather than independent administration), a bond is almost always required as part of the heightened oversight structure.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'waived' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">When a Surety Bond Is Waived</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Will Contains a Bond Waiver Clause
                        </h4>
                        <p className="text-gray-700 text-sm">
                          The most common way to avoid a bond. A properly drafted will includes language such as: &ldquo;I direct that my executor shall serve without bond.&rdquo; Most <Link href="/blog/what-is-a-simple-estate-plan-in-chicago-illinois/" className="text-[#4a708b] hover:underline font-semibold">professionally prepared estate plans</Link> include this clause automatically.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          All Beneficiaries Consent to Waiver
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Even without a bond waiver in the will, if all adult beneficiaries agree in writing to waive the bond, the court will typically honor that request. This requires every beneficiary to sign a written consent.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Independent Administration Granted
                        </h4>
                        <p className="text-gray-700 text-sm">
                          When the court grants independent administration and the will waives bond, the executor enjoys maximum flexibility with minimal court oversight and no bond expense. This is the most efficient and cost-effective probate scenario.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'court-ordered' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">When the Court Uses Its Discretion</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-amber-600" />
                          Beneficiary Files an Objection
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Any interested party can petition the court to require a bond, even if the will waives one. The court weighs the objection against the testator&apos;s wishes and decides whether to override the waiver. Common in contentious family situations.
                        </p>
                      </div>
                      <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-amber-600" />
                          Executor Has Financial Concerns
                        </h4>
                        <p className="text-gray-700 text-sm">
                          If the court becomes aware that the executor has a history of bankruptcy, financial mismanagement, or conflicts of interest, it may impose a bond requirement regardless of the will&apos;s instructions. The court&apos;s primary duty is protecting the estate.
                        </p>
                      </div>
                      <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-amber-600" />
                          Out-of-State Executor
                        </h4>
                        <p className="text-gray-700 text-sm">
                          While Illinois allows non-resident executors, courts sometimes require a bond when the executor lives out of state, reasoning that geographic distance makes oversight more difficult and increases the risk of mismanagement.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h2 id="bond-cost-calculator" className="text-2xl font-bold mt-12 mb-4">
              Interactive Bond Cost Calculator
            </h2>

            <p className="mb-6">
              Use this calculator to estimate the surety bond premium for an Illinois probate estate. Enter the value of the estate&apos;s <strong>personal property only</strong> (cash, bank accounts, investments, vehicles, personal belongings). Real estate is typically excluded from the bond calculation.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-[#4a708b]" />
                <h3 className="text-xl font-bold">Bond Cost Estimator</h3>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Personal Property Value (Exclude Real Estate)</label>
                <div className="flex items-center gap-2 max-w-sm">
                  <span className="text-gray-600 text-lg">$</span>
                  <input
                    type="number"
                    value={bondEstateValue}
                    onChange={(e) => setBondEstateValue(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a708b] focus:border-transparent text-lg"
                    placeholder="e.g. 200000"
                  />
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setBondType('with-surety')}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                    bondType === 'with-surety'
                      ? 'bg-[#4a708b] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Bond with Surety
                </button>
                <button
                  onClick={() => setBondType('without-surety')}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                    bondType === 'without-surety'
                      ? 'bg-[#4a708b] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Bond without Surety
                </button>
              </div>

              {bondCost && bondType === 'with-surety' && (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                      <div className="text-sm text-gray-600 mb-1">Bond Amount (1.5x)</div>
                      <div className="text-2xl font-bold text-[#4a708b]">
                        ${bondCost.bondAmount.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-2 border-amber-300">
                      <div className="text-sm text-gray-600 mb-1">Annual Premium</div>
                      <div className="text-2xl font-bold text-amber-600">
                        ${bondCost.annualPremiumLow.toLocaleString()} &ndash; ${bondCost.annualPremiumHigh.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                      <div className="text-sm text-gray-600 mb-1">2-Year Total</div>
                      <div className="text-2xl font-bold text-red-600">
                        ${bondCost.twoYearLow.toLocaleString()} &ndash; ${bondCost.twoYearHigh.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-semibold text-green-700 text-sm">
                        A will with a bond waiver clause would save the estate ${bondCost.twoYearLow.toLocaleString()}-${bondCost.twoYearHigh.toLocaleString()} over a typical probate.
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {bondCost && bondType === 'without-surety' && (
                <div className="bg-white rounded-lg p-5 border-2 border-gray-300">
                  <div className="text-sm text-gray-600 mb-2">Bond without Surety</div>
                  <div className="text-2xl font-bold text-[#4a708b] mb-2">
                    $0 premium
                  </div>
                  <p className="text-sm text-gray-700">
                    A bond without surety requires no premium because no insurance company is involved. Instead, the executor personally pledges to the court that they will fulfill their duties. However, courts rarely accept bonds without surety for estates with significant personal property, and it offers less protection for beneficiaries.
                  </p>
                </div>
              )}

              <div className="mt-4 text-xs text-gray-500 italic">
                Premiums are estimates based on typical Illinois surety rates of 0.5%-1% of bond amount. Actual premiums depend on the executor&apos;s credit score, the surety company, and the estate&apos;s complexity.
              </div>
            </div>

            <h2 id="types-of-bonds" className="text-2xl font-bold mt-12 mb-4">
              Types of Probate Bonds in Illinois
            </h2>

            <p className="mb-6">
              Illinois law recognizes several types of probate bonds, each serving a different purpose. The most common is the executor or administrator bond, but special-purpose bonds exist for guardians, trustees, and specific court actions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#4a708b]" />
                  Executor/Administrator Bond
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  The standard probate bond required when an executor (with a will) or administrator (without a will) is appointed. Covers mismanagement, misappropriation, and failure to distribute assets properly.
                </p>
                <div className="text-xs text-[#4a708b] font-semibold">Most common in Illinois probate</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Guardian of the Estate Bond
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Required when a guardian is appointed to manage the financial affairs of a minor or incapacitated adult. Typically cannot be waived because the protected person cannot consent.
                </p>
                <div className="text-xs text-green-700 font-semibold">Required for all estate guardianships</div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-600" />
                  Special Administrator Bond
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Required when a temporary or special administrator is appointed to preserve estate assets before a permanent executor is confirmed. Common in contested estates or emergencies.
                </p>
                <div className="text-xs text-amber-700 font-semibold">Temporary, until permanent appointment</div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-slate-600" />
                  Trustee Bond
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Occasionally required for trustees managing assets in a testamentary trust (a trust created by a will). Most <Link href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/" className="text-[#4a708b] hover:underline font-semibold">revocable living trusts</Link> include language waiving the trustee bond.
                </p>
                <div className="text-xs text-slate-700 font-semibold">Usually waived in well-drafted trusts</div>
              </div>
            </div>

            <h2 id="real-world-scenarios" className="text-2xl font-bold mt-12 mb-4">
              Real-World Scenarios
            </h2>

            <p className="mb-6">
              These scenarios illustrate when bonds are and are not required in common Illinois probate situations.
            </p>

            <div className="space-y-4 my-8">
              {scenarios.map((scenario, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedScenario(expandedScenario === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        scenario.color === 'green' ? 'bg-green-500' :
                        scenario.color === 'red' ? 'bg-red-500' : 'bg-amber-500'
                      }`} />
                      <span className="font-semibold text-gray-900">{scenario.title}</span>
                    </div>
                    {expandedScenario === index ? (
                      <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    )}
                  </button>
                  {expandedScenario === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm text-gray-600">THE SITUATION:</h4>
                        <p className="text-gray-700 leading-relaxed">{scenario.situation}</p>
                      </div>
                      <div className={`p-4 rounded mb-4 ${
                        scenario.color === 'green' ? 'bg-green-50 border border-green-200' :
                        scenario.color === 'red' ? 'bg-red-50 border border-red-200' :
                        'bg-amber-50 border border-amber-200'
                      }`}>
                        <h4 className="font-semibold mb-1 text-sm text-gray-600">OUTCOME:</h4>
                        <p className={`font-bold ${
                          scenario.color === 'green' ? 'text-green-700' :
                          scenario.color === 'red' ? 'text-red-700' : 'text-amber-700'
                        }`}>{scenario.outcome}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm text-gray-600">EXPLANATION:</h4>
                        <p className="text-gray-700 leading-relaxed">{scenario.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 id="how-to-obtain" className="text-2xl font-bold mt-12 mb-4">
              How to Obtain a Surety Bond
            </h2>

            <p className="mb-6">
              If a surety bond is required for your probate case, your probate attorney typically handles the process. Here is what to expect.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-8 border border-gray-200">
              <h3 className="font-bold text-lg mb-4">What the Surety Company Evaluates</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-semibold mb-2 text-sm">Executor&apos;s credit score</h4>
                  <p className="text-xs text-gray-600">Good credit (680+) typically qualifies for lower premiums. Poor credit may result in higher rates or denial.</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-semibold mb-2 text-sm">Executor&apos;s financial history</h4>
                  <p className="text-xs text-gray-600">Bankruptcies, judgments, and tax liens within the past 7 years may disqualify the executor from obtaining a bond.</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-semibold mb-2 text-sm">Estate size and complexity</h4>
                  <p className="text-xs text-gray-600">Larger, more complex estates may command higher premiums due to greater risk exposure for the surety company.</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-semibold mb-2 text-sm">Number of beneficiaries</h4>
                  <p className="text-xs text-gray-600">More beneficiaries can increase the perceived risk of disputes, which may affect the premium rate.</p>
                </div>
              </div>
            </div>

            <p className="mb-6">
              Bond premiums are a legitimate estate expense under <strong>755 ILCS 5/27-2</strong> and are paid from estate funds. The executor does not pay out of pocket unless the estate has no liquid assets. For a comprehensive understanding of all probate costs including bond premiums, see our guide on{' '}
              <Link href="/blog/how-much-does-probate-cost-in-illinois/" className="text-[#4a708b] hover:underline font-semibold">how much probate costs in Illinois</Link>.
            </p>

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
              Whether you are currently navigating probate and need to understand bond requirements, or you are planning your estate and want to make sure your executor does not face unnecessary costs, the right legal guidance makes all the difference. A simple bond waiver clause in your will can save your estate thousands of dollars.
            </p>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Protect Your Estate from Unnecessary Bond Costs
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                At Illinois Estate Law, we draft every will with a bond waiver clause to eliminate this avoidable expense. If you are already in probate and facing a bond requirement, we can guide you through the process efficiently. Whether it is{' '}
                <Link href="/chicago-probate-lawyer/" className="text-white underline hover:text-white/80">probate administration</Link>,{' '}
                <Link href="/blog/when-is-probate-required-in-illinois/" className="text-white underline hover:text-white/80">determining if probate is required</Link>, or creating an estate plan that avoids probate entirely through a{' '}
                <Link href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/" className="text-white underline hover:text-white/80">revocable living trust</Link>, we are here to help.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-is-a-surety-bond-in-illinois-probate/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-is-a-surety-bond-in-illinois-probate/')}&text=${encodeURIComponent('What Is a Surety Bond in Illinois Probate?')}`}
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
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-is-a-surety-bond-in-illinois-probate/')}&title=${encodeURIComponent('What Is a Surety Bond in Illinois Probate?')}`}
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
