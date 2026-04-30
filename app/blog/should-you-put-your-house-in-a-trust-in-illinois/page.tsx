'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, Home, Shield, FileText, Users } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'should-you-put-your-house-in-a-trust-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [decisionStep, setDecisionStep] = useState<number>(0);
  const [decisionPath, setDecisionPath] = useState<string[]>([]);

  const tocItems = [
    { id: 'benefits', title: 'Benefits of Putting Your Home in a Trust', level: 2, numeration: '1' },
    { id: 'how-to', title: 'How to Transfer Your Home to a Trust', level: 2, numeration: '2' },
    { id: 'mortgage', title: 'Impact on Mortgage (Due-on-Sale Clause)', level: 2, numeration: '3' },
    { id: 'taxes-exemptions', title: 'Property Taxes, Homestead Exemption, and Title Insurance', level: 2, numeration: '4' },
    { id: 'land-trust', title: 'Land Trusts vs. Living Trusts in Illinois', level: 2, numeration: '5' },
    { id: 'when-not-to', title: 'When a Trust May Not Be Necessary', level: 2, numeration: '6' },
    { id: 'decision', title: 'Should You Use a Trust? Decision Guide', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
  ];

  const decisionTree = [
    {
      question: 'Do you want to avoid probate for your home when you die?',
      yes: 1, no: 2,
      yesLabel: 'Yes', noLabel: 'No',
    },
    {
      question: 'Do you own real estate in more than one state, or do you anticipate complex distribution to multiple beneficiaries?',
      yes: 3, no: 4,
      yesLabel: 'Yes', noLabel: 'No',
    },
    {
      question: 'You said you don\'t need to avoid probate. Do you have a will that covers the home and are your wishes simple and uncontested?',
      yes: 5, no: 6,
      yesLabel: 'Yes, I have a will', noLabel: 'No / Not sure',
    },
    { result: 'A revocable living trust is strongly recommended. Multi-state property, complex distributions, or both — a trust avoids multiple probate proceedings and keeps your estate private and efficient.' },
    {
      question: 'Is your estate relatively simple (one property, straightforward beneficiaries, no complex tax concerns)?',
      yes: 7, no: 3,
      yesLabel: 'Yes, it\'s simple', noLabel: 'No, it\'s complex',
    },
    { result: 'A will is likely sufficient for now. However, consider consulting an estate planning attorney to review whether a TODI (Transfer on Death Instrument) makes sense as a simpler alternative to a full trust.' },
    { result: 'Even for simpler estates, a revocable trust is worth considering. It provides certainty, privacy, and incapacity planning that a will alone cannot provide. A consultation will help you decide.' },
    {
      question: 'Would a Transfer on Death Instrument (TODI) be sufficient — naming a beneficiary who takes title automatically at your death?',
      yes: 8, no: 3,
      yesLabel: 'Yes, that sounds right', noLabel: 'I need more control / planning',
    },
    { result: 'A TODI may be the simplest solution for your situation. It avoids probate for the home, costs less than a full trust, and is revocable. A trust provides additional benefits (incapacity planning, privacy, control) — compare both options with an attorney.' },
  ];

  const currentNode = decisionTree[decisionStep];
  const hasResult = 'result' in currentNode;

  const handleDecision = (goTo: number, choice: string) => {
    setDecisionPath(prev => [...prev, choice]);
    setDecisionStep(goTo);
  };

  const resetDecision = () => {
    setDecisionStep(0);
    setDecisionPath([]);
  };

  const faqs = [
    { q: 'Does transferring my home to a trust trigger property tax reassessment in Illinois?', a: 'No. Transfers of a principal residence to a revocable living trust in which the grantor is the beneficiary do not trigger a property tax reassessment in Illinois. The Cook County Assessor does not treat a transfer from you to your own revocable trust as a change in beneficial ownership. This is one of the key advantages of an Illinois living trust over outright gifts to children, which can trigger reassessment.' },
    { q: 'Will my mortgage lender call the loan due if I transfer to a trust?', a: 'No. The federal Garn-St. Germain Depository Institutions Act of 1982 specifically prohibits lenders from exercising the due-on-sale clause when a borrower transfers their home to an inter vivos (living) trust in which the borrower is and remains the beneficiary. This protection applies regardless of what your mortgage documents say about due-on-sale. However, it is best practice to notify your lender of the transfer and provide a copy of the trust document.' },
    { q: 'Can I still claim the homestead exemption after transferring to a trust?', a: 'Yes, with proper documentation. Cook County requires that you file a Certificate of Trust with the County Assessor\'s office showing that the trust is a revocable trust and that you are the beneficiary. Once filed, the homestead exemption continues without interruption. Failure to file this certificate can result in loss of the exemption, so this step is important and often overlooked when homeowners transfer to a trust without professional guidance.' },
    { q: 'What is the difference between an Illinois land trust and a revocable living trust?', a: 'An Illinois land trust is a unique Illinois institution — an irrevocable trust in which the trustee (typically a bank or title company) holds legal and equitable title, while the beneficiary holds a beneficial interest that is treated as personal property rather than real estate. Land trusts were popular for privacy (beneficiary identities not recorded) and for ease of transfer. A revocable living trust is more common nationally — the grantor is both trustee and beneficiary during life, and a successor trustee manages the trust after death or incapacity. Living trusts are more flexible and better for comprehensive estate planning.' },
    { q: 'Does my title insurance policy remain in effect after I transfer to a trust?', a: 'Your existing owner\'s title insurance policy remains in effect after a transfer to your own revocable living trust — the trust is considered the same insured party since you control it. However, you should notify your title insurer of the transfer. When the successor trustee later sells the property, the title insurer may require a new endorsement or policy. If you are buying a property and plan to close in trust, discuss this with the title company before closing so coverage is properly issued.' },
    { q: 'What happens to my home in the trust if I become incapacitated?', a: 'This is one of the most important benefits of a living trust. If you become incapacitated, your successor trustee takes over management of the trust — including your home — without any court intervention. There is no conservatorship or guardianship proceeding needed. The successor trustee can pay the mortgage, insurance, and maintenance from trust assets, sell the home if necessary, and otherwise manage the property under the trust\'s terms. This seamless transition is not possible with a will alone or with a TODI.' },
    { q: 'Is a Transfer on Death Instrument (TODI) better than a trust for my home?', a: 'A TODI is simpler and less expensive than a full trust, and it does avoid probate for the home. However, a TODI does not help with incapacity planning (a trust does), does not address privacy concerns (a TODI is recorded publicly; a trust is not), does not help if you own property in multiple states (a trust covers all), and does not allow for contingency planning (what if your beneficiary dies before you?). For simple situations with a single Illinois property and a straightforward beneficiary, a TODI can be sufficient. For broader planning, a trust is better.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Should You Put Your House in a Trust in Illinois?',
    description: 'A revocable living trust can help your Illinois home avoid probate, plan for incapacity, and simplify your estate. Learn the benefits, the process, and how it affects your mortgage, property taxes, and homestead exemption.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-06-04', dateModified: '2026-06-04',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16 sm:py-20">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"><span className="text-lg">&larr;</span>Back to Blog</Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-semibold">Real Estate &amp; Estate Planning</span>
                <span className="text-white/80 text-sm">&bull;</span>
                <span className="text-white/80 text-sm flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">Should You Put Your House in a Trust in Illinois?</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">Placing your home in a revocable living trust is one of the most effective estate planning moves an Illinois homeowner can make — but it is not the right choice for everyone. Here is how to decide.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>June 4, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="benefits" className="text-2xl font-bold mt-8 mb-4">Benefits of Putting Your Home in a Trust</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">The primary reason Illinois homeowners put their home in a revocable living trust is to avoid probate — the court-supervised estate administration process that can take 12–24 months and cost thousands of dollars in Cook County.</p>
              <p className="mb-0 text-gray-700">When your home is in a trust and you die, the successor trustee can transfer or sell the property immediately, following the trust terms — no court filing, no waiting, no public proceeding. This is not possible with a will alone.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                { icon: <Shield className="w-5 h-5" />, title: 'Avoids Probate', desc: 'Trust assets do not go through the Cook County Probate Division. Your successor trustee can manage and distribute the property immediately after your death, following the trust terms.' },
                { icon: <FileText className="w-5 h-5" />, title: 'Privacy', desc: 'A will becomes a public record when admitted to probate. A trust never enters the public record. Your beneficiaries, assets, and distribution plans remain private.' },
                { icon: <Users className="w-5 h-5" />, title: 'Incapacity Planning', desc: 'If you become unable to manage your affairs, your successor trustee can manage the home without a court-appointed guardian or conservator. This is one of the biggest practical benefits of a trust.' },
                { icon: <Home className="w-5 h-5" />, title: 'Multi-State Property', desc: 'If you own property in multiple states, a trust avoids multiple probate proceedings (called "ancillary probate"). Without a trust, your estate may need to open probate in Illinois AND in every other state where you own real estate.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="w-9 h-9 rounded-full bg-[#2D3E50] text-white flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <div><p className="font-bold text-[#2D3E50] text-sm mb-1">{item.title}</p><p className="text-gray-700 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>

            <h2 id="how-to" className="text-2xl font-bold mt-12 mb-4">How to Transfer Your Home to a Trust</h2>
            <p className="mb-6">Transferring a home to a trust is called "funding" the trust. It requires executing and recording a new deed — not simply stating in the trust document that the home is included. Many people create living trusts but never properly fund them; an unfunded trust provides no probate-avoidance benefit.</p>
            <div className="space-y-3 my-6">
              {[
                { step: '1', title: 'Create the Trust', desc: 'Have an attorney draft a revocable living trust document that names you as trustee, names a successor trustee, and includes your distribution instructions. The trust must be executed (signed and notarized) before the property can be transferred into it.' },
                { step: '2', title: 'Prepare the Deed', desc: 'An attorney prepares a deed — typically a quitclaim deed — transferring the property from you individually to you as trustee of your trust. Example: "John Smith to John Smith, Trustee of the John Smith Revocable Living Trust dated January 1, 2026."' },
                { step: '3', title: 'Execute the Deed', desc: 'Sign the deed in front of a notary public with two witnesses. The deed must comply with all Illinois formalities to be recordable.' },
                { step: '4', title: 'File PTAX-203', desc: 'Complete the Illinois Real Estate Transfer Declaration. Transfers to a grantor\'s own revocable trust are exempt from transfer tax, but the PTAX-203 must still be filed.' },
                { step: '5', title: 'Record at County Recorder', desc: 'The deed is recorded with the county recorder of deeds. This puts the world on notice that the property is now titled in the trust.' },
                { step: '6', title: 'File Certificate of Trust for Homestead', desc: 'File a Certificate of Trust with the County Assessor to preserve your homestead property tax exemption. Failure to do this can result in loss of the exemption.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-[#2D3E50] text-white text-sm flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                  <div><p className="font-bold text-[#2D3E50] text-sm mb-1">{item.title}</p><p className="text-gray-700 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>

            <h2 id="mortgage" className="text-2xl font-bold mt-12 mb-4">Impact on Mortgage (Due-on-Sale Clause)</h2>
            <p className="mb-6">Many homeowners worry that transferring to a trust will trigger their mortgage's due-on-sale clause — a provision allowing the lender to demand immediate repayment if the property is transferred without consent. This concern is understandable but generally unfounded for living trust transfers.</p>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-2 font-semibold">Federal Law Protection</p>
              <p className="text-gray-700 mb-0">The Garn-St. Germain Depository Institutions Act of 1982 (12 U.S.C. § 1701j-3) specifically prohibits lenders from exercising the due-on-sale clause when a borrower transfers their home to an inter vivos trust where the borrower is and remains a beneficiary and the transfer does not relate to a transfer of occupancy rights. This federal protection supersedes any contrary provision in your mortgage documents.</p>
            </div>
            <p className="mb-6">Best practice is to notify your lender of the transfer in writing and provide them with a copy of the trust document (or a Certificate of Trust) for their records. Most lenders simply update their records without any issue.</p>

            <h2 id="taxes-exemptions" className="text-2xl font-bold mt-12 mb-4">Property Taxes, Homestead Exemption, and Title Insurance</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Concern</th><th className="border border-gray-300 px-4 py-3 text-left">Effect of Transfer to Revocable Living Trust</th></tr></thead>
                <tbody>
                  {[
                    ['Property tax reassessment', 'None — transfer to grantor\'s own revocable trust does not trigger reassessment in Illinois'],
                    ['Homestead exemption', 'Preserved — but must file Certificate of Trust with County Assessor\'s office'],
                    ['Senior freeze exemption', 'Preserved — same filing requirements as general homestead'],
                    ['Transfer tax', 'Exempt — transfer to grantor\'s revocable trust is exempt; file PTAX-203'],
                    ['Title insurance', 'Existing owner\'s policy remains in effect; notify your insurer and possibly obtain an endorsement'],
                    ['Capital gains treatment', 'No change — revocable trust property is treated as owned by the grantor; same tax basis applies'],
                  ].map(([concern, effect], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{concern}</td><td className="border border-gray-300 px-4 py-3 text-sm">{effect}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="land-trust" className="text-2xl font-bold mt-12 mb-4">Land Trusts vs. Living Trusts in Illinois</h2>
            <p className="mb-6">Illinois is one of the few states with a well-developed land trust tradition. Understanding the difference between an Illinois land trust and a revocable living trust is important:</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#2D3E50] mb-3">Illinois Land Trust</h3>
                <ul className="space-y-2">
                  {[
                    'Trustee (usually a bank/title company) holds title',
                    'Beneficiary holds personal property interest',
                    'Historically used for privacy',
                    'Beneficiary not in public record',
                    'More complex to administer',
                    'Annual trustee fees typically required',
                    'Does NOT provide incapacity planning alone',
                    'Less common in modern practice',
                  ].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><FileText className="w-4 h-4 text-[#4a708b] flex-shrink-0 mt-0.5" />{item}</li>)}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#2D3E50] mb-3">Revocable Living Trust</h3>
                <ul className="space-y-2">
                  {[
                    'You are the trustee during your lifetime',
                    'You control the trust and all assets in it',
                    'Avoids probate at death',
                    'Successor trustee manages at incapacity or death',
                    'Can hold all assets (not just real estate)',
                    'More comprehensive estate planning tool',
                    'Provides incapacity planning',
                    'Preferred by most estate planners today',
                  ].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{item}</li>)}
                </ul>
              </div>
            </div>

            <h2 id="when-not-to" className="text-2xl font-bold mt-12 mb-4">When a Trust May Not Be Necessary</h2>
            <p className="mb-6">A revocable living trust is not the right tool for every situation. Consider alternatives if:</p>
            <ul className="space-y-3 my-6">
              {[
                'Your estate is small and simple, with a single Illinois property and one or two straightforward beneficiaries — a Transfer on Death Instrument (TODI) may be sufficient and less expensive',
                'You are young and healthy with a modest estate — a well-drafted will with a TODI on the home may be adequate for now, with a trust to be added as assets grow',
                'Your property already has a right of survivorship mechanism (joint tenancy with a spouse) — probate is already avoided for the first death',
                'The cost of creating and funding a trust is prohibitive relative to the value of the estate — a probate attorney consultation can assess whether simplified probate procedures (small estate affidavit) would be available at death',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>

            <h2 id="decision" className="text-2xl font-bold mt-12 mb-4">Should You Use a Trust? Decision Guide</h2>
            <p className="mb-6">Answer a few questions to get a preliminary recommendation:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
              {decisionPath.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2 items-center">
                  {decisionPath.map((choice, i) => (
                    <span key={i} className="text-xs bg-[#4a708b] text-white px-2 py-1 rounded-full">{choice}</span>
                  ))}
                </div>
              )}
              {hasResult ? (
                <div>
                  <div className="bg-[#2D3E50] text-white rounded-xl p-5 mb-4">
                    <p className="font-semibold text-lg mb-0">{(currentNode as { result: string }).result}</p>
                  </div>
                  <button onClick={resetDecision} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors">Start Over</button>
                </div>
              ) : (
                <div>
                  <p className="font-semibold text-gray-800 text-lg mb-4">{(currentNode as { question: string; yes: number; no: number; yesLabel: string; noLabel: string }).question}</p>
                  <div className="flex gap-3">
                    <button onClick={() => handleDecision((currentNode as { yes: number }).yes, (currentNode as { yesLabel: string }).yesLabel)}
                      className="px-6 py-3 bg-[#2D3E50] text-white rounded-lg font-semibold hover:bg-[#3a4f63] transition-colors">
                      {(currentNode as { yesLabel: string }).yesLabel}
                    </button>
                    <button onClick={() => handleDecision((currentNode as { no: number }).no, (currentNode as { noLabel: string }).noLabel)}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                      {(currentNode as { noLabel: string }).noLabel}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <h2 id="faq" className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 my-8">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4">
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                    {expandedFaq === i ? <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />}
                  </button>
                  {expandedFaq === i && <div className="px-6 py-4 bg-white border-t border-gray-100"><p className="text-gray-700 leading-relaxed">{faq.a}</p></div>}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Plan for Your Home&apos;s Future — Without Probate</h3>
              <p className="text-white/90 mb-6">Illinois Estate Law drafts revocable living trusts and handles all deed transfers to fund your trust — so your home avoids probate and transitions seamlessly to your loved ones. Schedule a consultation to discuss your options.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">Schedule a Consultation<ArrowRight className="w-5 h-5" /></Link>
                <a href="tel:3123730731" className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30">Call (312) 373-0731</a>
              </div>
            </div>
            <BlogNavigation previousPost={previous ? { title: previous.title, url: previous.url } : undefined} nextPost={next ? { title: next.title, url: next.url } : undefined} />
            <RelatedArticles articles={relatedPosts.map(p => ({ title: p.title, url: p.url, date: p.date, excerpt: p.excerpt }))} />
          </article>
          <div className="border-t border-gray-300 pt-8 mb-8 mt-8"><BlogContactForm /></div>
        </div>
      </div>
    </>
  );
}
