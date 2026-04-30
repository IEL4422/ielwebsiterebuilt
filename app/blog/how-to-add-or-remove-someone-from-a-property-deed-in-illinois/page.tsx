'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, Users, Home, FileText, DollarSign } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-add-or-remove-someone-from-a-property-deed-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const tocItems = [
    { id: 'how-it-works', title: 'How Property Deed Changes Actually Work', level: 2, numeration: '1' },
    { id: 'scenarios', title: 'Common Scenarios: Step-by-Step', level: 2, numeration: '2' },
    { id: 'mortgage-implications', title: 'Mortgage Implications', level: 2, numeration: '3' },
    { id: 'tax-implications', title: 'Tax Implications', level: 2, numeration: '4' },
    { id: 'process', title: 'The Step-by-Step Process', level: 2, numeration: '5' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '6' },
  ];

  const scenarios = [
    {
      label: 'Adding a Spouse',
      title: 'Adding a Spouse to Title After Marriage',
      deedType: 'Quitclaim Deed',
      steps: [
        'Attorney prepares a quitclaim deed from you as sole owner to both you and your spouse (e.g., "John Smith and Jane Smith, as joint tenants")',
        'You (the current owner) sign the deed in front of a notary and two witnesses',
        'Attorney prepares PTAX-203 form — spousal transfer is transfer-tax exempt',
        'Deed and PTAX-203 are recorded at the county recorder\'s office',
        'Your spouse is now on title; update your homeowner\'s insurance and notify your mortgage lender',
      ],
      warnings: ['Adding a spouse to title does not make them liable for the existing mortgage unless they sign new loan documents', 'Filing a new homestead exemption may be needed depending on how you hold title'],
    },
    {
      label: 'Removing an Ex',
      title: 'Removing an Ex-Spouse After Divorce',
      deedType: 'Quitclaim Deed (from ex-spouse to remaining owner)',
      steps: [
        'The divorce judgment or marital settlement agreement must award the property to you',
        'Your ex-spouse executes a quitclaim deed conveying their interest to you alone',
        'Both the deed and a copy of the relevant divorce judgment pages are typically brought to recording',
        'PTAX-203 is filed — divorce decree transfers are exempt from transfer tax',
        'Once recorded, your ex\'s name is removed from title',
        'You can now refinance the mortgage solely in your name (often required by the divorce agreement)',
      ],
      warnings: ['If your ex refuses to sign the deed, you may need to return to court to enforce the judgment', 'The mortgage remains in both names until you refinance — removing from title alone does not remove them from the loan'],
    },
    {
      label: 'Adding a Child',
      title: 'Adding an Adult Child for Estate Planning',
      deedType: 'Quitclaim Deed (be cautious — consider a trust instead)',
      steps: [
        'Carefully consider alternatives — a Transfer on Death Instrument (TODI) or living trust avoids the complications of adding a child to title while alive',
        'If proceeding, attorney prepares a quitclaim deed from you to you and your child as joint tenants with right of survivorship',
        'You sign in front of a notary and two witnesses',
        'PTAX-203 is filed — if no money changes hands, this is a gift; transfer tax may apply to the gifted portion',
        'Deed is recorded; your child now has an ownership interest',
      ],
      warnings: ['Your child\'s interest becomes subject to their creditors and judgments', 'You may lose the ability to sell or mortgage without your child\'s consent', 'There may be gift tax implications if the property\'s value exceeds annual exclusion thresholds', 'Your child loses the stepped-up cost basis benefit on their portion — consult a tax advisor'],
    },
    {
      label: 'Removing a Deceased Owner',
      title: 'Removing a Deceased Co-Owner from Title',
      deedType: 'Affidavit of Surviving Joint Tenant (if joint tenancy) or Probate',
      steps: [
        'If the property was held in joint tenancy: the surviving owner files an Affidavit of Surviving Joint Tenant with the county recorder, along with a certified copy of the death certificate',
        'No new deed is needed — the affidavit establishes that the survivor now holds full title',
        'If property was held as tenants in common: the deceased\'s share must pass through probate before it can be conveyed',
        'If held in a living trust: the successor trustee can convey title pursuant to the trust terms — no probate needed',
        'Update title insurance and notify your mortgage servicer',
      ],
      warnings: ['Do not skip this step — a deceased person\'s name remaining on title complicates any future sale or refinancing', 'If the property was held as tenants in common (not joint tenancy), probate may be required'],
    },
  ];

  const faqs = [
    { q: 'Can I just add someone\'s name to an existing deed?', a: 'No. In Illinois, you cannot modify an existing recorded deed — you must execute and record an entirely new deed. The current owner(s) convey the property to a new set of owners (which can include the original owner plus the new person). The new deed is then recorded, and it supersedes the old deed as the operative title instrument.' },
    { q: 'Does adding someone to my deed affect my mortgage?', a: 'Adding someone to the deed does not make them responsible for the existing mortgage loan — only the people who signed the promissory note are personally liable for the debt. However, most mortgages include a "due-on-sale" clause. For spousal additions and transfers to living trusts, federal law (the Garn-St. Germain Act) prohibits lenders from enforcing this clause. For other additions (adult children, friends), best practice is to notify your lender, though enforcement is rare for family transfers.' },
    { q: 'What if I want to remove someone who doesn\'t want to be removed?', a: 'A co-owner cannot be removed from a deed without their consent — you cannot unilaterally deed away someone else\'s interest. If a co-owner refuses to cooperate with a removal that is required by a court order (such as a divorce decree), you can return to court to enforce the order. If there is no court order but you and a co-owner simply cannot agree on what to do with the property, a partition action allows a court to force a sale and divide the proceeds.' },
    { q: 'Will adding my child to the deed trigger gift taxes?', a: 'Possibly. When you add your child to the deed without receiving fair market value in return, you are making a gift of a fractional interest in the property. Gifts above the annual exclusion ($18,000 per person in 2024, adjusted periodically) must be reported on a federal gift tax return (Form 709). However, gift tax is only actually owed if your lifetime gifts exceed the lifetime exemption (currently $13.61 million). Consult a tax professional before proceeding.' },
    { q: 'What happens to the homestead exemption when I add someone to the deed?', a: 'The Illinois homestead property tax exemption requires that the property be your principal residence and that you be the owner of record as of January 1 of the tax year. Adding a spouse typically does not affect the exemption. However, if you add an adult child or other person as a co-owner, you should verify with your county assessor\'s office that the exemption remains in place — some counties require the primary owner to still hold a majority interest.' },
    { q: 'How long does it take to record a deed in Cook County?', a: 'The Cook County Recorder of Deeds typically processes deed recordings within 3–7 business days of submission. Expedited recording is available for an additional fee, often reducing the timeline to 1–2 business days. Your attorney will submit the deed and receive a stamped, recorded copy when processing is complete.' },
    { q: 'Should I add my child to my deed or use a Transfer on Death Instrument?', a: 'For most Illinois homeowners wanting to ensure their home passes to a child without probate, a Transfer on Death Instrument (TODI) or a revocable living trust is preferable to adding the child to the deed while alive. A TODI names a beneficiary who takes title automatically at your death — you remain sole owner during your lifetime, can revoke it at any time, and the child has no current ownership interest (so their creditors cannot attach the property and they cannot block a sale). Consult an estate planning attorney to compare your options.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'How to Add or Remove Someone from a Property Deed in Illinois',
    description: 'You cannot amend an existing deed in Illinois — you must execute and record a new deed. Learn how to add a spouse, remove an ex, add a child, or remove a deceased owner from an Illinois property deed.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-05-21', dateModified: '2026-05-21',
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
                <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-semibold">Real Estate</span>
                <span className="text-white/80 text-sm">&bull;</span>
                <span className="text-white/80 text-sm flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">How to Add or Remove Someone from a Property Deed in Illinois</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">You cannot cross out a name on an existing deed — Illinois law requires a new deed every time ownership changes. Here is how it works for every common scenario.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>May 21, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="how-it-works" className="text-2xl font-bold mt-8 mb-4">How Property Deed Changes Actually Work</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">A recorded deed is a permanent legal instrument — you cannot modify, amend, or cross anything out on it. To change who is on a property's title in Illinois, you must execute and record an entirely new deed that supersedes the previous one.</p>
              <p className="mb-0 text-gray-700">The process always involves the same core steps: preparing a new deed, signing it with proper formalities (notary and two witnesses), completing the PTAX-203 transfer declaration, and recording everything with the county recorder of deeds where the property is located.</p>
            </div>
            <p className="mb-6">This requirement surprises many people. They assume they can just "add a name" to an existing deed or have the county remove a deceased person's name administratively. Neither is possible. The only way to change title is through a new deed — or, for surviving joint tenants, through an Affidavit of Surviving Joint Tenant filed with the recorder.</p>

            <h2 id="scenarios" className="text-2xl font-bold mt-12 mb-4">Common Scenarios: Step-by-Step</h2>
            <p className="mb-6">Select your situation to see the appropriate deed type and exact steps:</p>
            <div className="my-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {scenarios.map((s, i) => (
                  <button key={i} onClick={() => setActiveScenario(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeScenario === i ? 'bg-[#2D3E50] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="bg-white border-2 border-[#2D3E50] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold bg-[#4a708b] text-white px-3 py-1 rounded-full">Deed Type: {scenarios[activeScenario].deedType}</span>
                </div>
                <h3 className="font-bold text-[#2D3E50] text-lg mt-3 mb-4">{scenarios[activeScenario].title}</h3>
                <ol className="space-y-3 mb-4">
                  {scenarios[activeScenario].steps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#2D3E50] text-white text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">{i + 1}</span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
                {scenarios[activeScenario].warnings.length > 0 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-amber-800 text-sm mb-2">Important Considerations:</p>
                    <ul className="space-y-1">
                      {scenarios[activeScenario].warnings.map((w, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-amber-900"><AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />{w}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <h2 id="mortgage-implications" className="text-2xl font-bold mt-12 mb-4">Mortgage Implications</h2>
            <p className="mb-6">Deed changes and mortgage obligations are separate legal matters that people frequently confuse:</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Deed Change</th><th className="border border-gray-300 px-4 py-3 text-left">Effect on Mortgage</th></tr></thead>
                <tbody>
                  {[
                    ['Adding a spouse to deed', 'No effect on mortgage obligation — spouse is not liable for the loan unless they sign new loan documents'],
                    ['Removing ex from deed', 'Ex remains on the mortgage until you refinance in your name alone — removing from deed does not remove from loan'],
                    ['Adding adult child to deed', 'No effect on existing mortgage; child assumes no loan obligation'],
                    ['Removing deceased joint tenant', 'Mortgage obligation passes to surviving owner; no change to loan terms'],
                    ['Transfer to living trust', 'Protected by Garn-St. Germain Act — lender cannot call the loan due'],
                  ].map(([change, effect], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{change}</td><td className="border border-gray-300 px-4 py-3 text-sm">{effect}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-2">Divorce Tip</p>
              <p className="text-gray-700 mb-0">If a divorce agreement requires one spouse to be removed from both the deed and the mortgage, two separate actions are needed: (1) a quitclaim deed from the ex to the remaining owner, and (2) a mortgage refinance in the remaining owner's name alone. The deed change can happen quickly; the refinance timeline depends on lender processing. Both should be completed as soon as possible after the divorce is finalized.</p>
            </div>

            <h2 id="tax-implications" className="text-2xl font-bold mt-12 mb-4">Tax Implications</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                { title: 'Transfer Tax', desc: 'Illinois imposes transfer tax on conveyances unless an exemption applies. Common exemptions: spousal transfers, divorce decree transfers, transfers to grantor\'s living trust, transfers between parent and child (partial exemptions exist). File PTAX-203 even for exempt transfers.' },
                { title: 'Gift Tax', desc: 'Adding someone to your deed without receiving fair market value is a gift. Report gifts exceeding the annual exclusion on Form 709. Gift tax is rarely actually owed given the large lifetime exemption, but the reporting obligation still applies.' },
                { title: 'Property Tax Reassessment', desc: 'Illinois does not reassess property taxes when a deed is transferred between spouses, to/from a revocable trust, or between family members. Reassessment can occur for transfers at arm\'s length, which is another reason to use the correct deed type.' },
                { title: 'Capital Gains / Stepped-Up Basis', desc: 'Adding a child to the deed during your lifetime means they inherit your cost basis — not a stepped-up basis at death. This can result in significant capital gains taxes if they later sell. A living trust or TODI avoids this problem by providing a full step-up at death.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#2D3E50] mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-0">{item.desc}</p>
                </div>
              ))}
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
              <h3 className="text-2xl font-bold mb-4">Let Us Handle Your Deed Change Correctly</h3>
              <p className="text-white/90 mb-6">Deed errors can cloud your title and cause expensive problems years later. Illinois Estate Law prepares and records deed transfers for families throughout Cook County and the Chicago suburbs — flat-fee, fast, and done right.</p>
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
