'use client';

import { useState } from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';
import { ChevronDown, ChevronUp, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Info, ArrowRight, Calculator, BookOpen, FileText } from 'lucide-react';

export default function IllinoisEstatePlanningLaws2026Page() {
  const currentSlug = 'illinois-estate-planning-laws-changing-2026-cook-county-families';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeChange, setActiveChange] = useState<string>('small-estate');
  const [estateValue, setEstateValue] = useState<string>('');
  const [calculatorResult, setCalculatorResult] = useState<{ exempt: boolean; estimatedTax: number; threshold: number } | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCalculate = () => {
    const value = parseFloat(estateValue.replace(/[^0-9.]/g, ''));
    if (isNaN(value) || value <= 0) return;
    const threshold = 4000000;
    const exempt = value <= threshold;
    let estimatedTax = 0;
    if (!exempt) {
      const taxable = value - threshold;
      if (taxable <= 1000000) estimatedTax = taxable * 0.08;
      else if (taxable <= 2000000) estimatedTax = 80000 + (taxable - 1000000) * 0.10;
      else if (taxable <= 4000000) estimatedTax = 180000 + (taxable - 2000000) * 0.12;
      else estimatedTax = 420000 + (taxable - 4000000) * 0.16;
    }
    setCalculatorResult({ exempt, estimatedTax, threshold });
  };

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  const lawChanges = [
    {
      id: 'small-estate',
      label: 'Small Estate Affidavit',
      icon: <FileText className="w-5 h-5" />,
      color: 'bg-[#2D3E50]',
      oldRule: '$100,000 small estate affidavit threshold; vehicles counted toward the limit',
      newRule: '$150,000 threshold (effective August 15, 2025); vehicles excluded from the $150,000 calculation and may be transferred separately regardless of value',
      impact: 'More Cook County families can settle estates without opening formal probate — saving months of court proceedings and thousands in legal fees.',
      action: 'If a loved one recently passed with personal property under $150,000 (excluding real estate), consult an attorney about using a Small Estate Affidavit instead of probate.',
    },
    {
      id: 'power-of-attorney',
      label: 'Power of Attorney Law',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'bg-[#4a708b]',
      oldRule: 'Financial institutions and other third parties could reject a valid POA for various reasons with limited legal recourse',
      newRule: 'Public Act 103-0994 (effective January 1, 2025) codifies five unreasonable grounds for refusing a POA and 14 reasonable grounds — making refusal of a properly executed POA unlawful',
      impact: 'Agents acting under a validly executed Illinois statutory POA now have stronger legal footing when dealing with banks and other institutions that previously rejected documents.',
      action: 'Ensure your POA is executed using the current Illinois statutory short-form. If institutions refuse a valid POA, the law now gives your agent explicit grounds to compel acceptance.',
    },
    {
      id: 'federal-estate-tax',
      label: 'Federal Estate Tax',
      icon: <Calculator className="w-5 h-5" />,
      color: 'bg-[#5a8a6a]',
      oldRule: 'Federal estate tax exemption was $13.99M per person in 2025 under the Tax Cuts and Jobs Act — scheduled to sunset and revert to ~$7M in 2026',
      newRule: 'The One Big Beautiful Bill Act (signed July 4, 2025) permanently raises the federal exemption to $15M per person starting January 1, 2026, indexed for inflation',
      impact: 'The feared "sunset" of the federal exemption has been permanently avoided. Estates under $15M per person owe no federal estate tax — but Illinois\'s separate $4M exemption is unchanged.',
      action: 'If your estate plan was structured around the anticipated federal sunset, review it with an attorney — the urgency of certain gifting strategies has changed, though Illinois state tax planning remains critical.',
    },
    {
      id: 'illinois-estate-tax',
      label: 'Illinois Estate Tax',
      icon: <Info className="w-5 h-5" />,
      color: 'bg-[#8a6a5a]',
      oldRule: '$4,000,000 exemption per person (in place since 2013) — not indexed for inflation',
      newRule: 'The $4M Illinois estate tax exemption is UNCHANGED for 2025–2026. While various bills have been proposed to raise it (HB2601, HB1731, HB2368), none have been signed into law.',
      impact: 'Illinois remains one of the lowest estate tax thresholds in the nation. Many Cook County families with home equity, retirement accounts, and life insurance exceed $4M without realizing it.',
      action: 'Do not assume Illinois estate tax no longer applies to you. With home values in Cook County, many moderate-wealth families are still exposed. Illinois-specific planning remains essential.',
    },
  ];

  const activeChangeData = lawChanges.find(c => c.id === activeChange)!;

  const faqs = [
    {
      q: 'Did Illinois raise the estate tax exemption to $4 million in 2026?',
      a: 'No — this is a common misconception. The Illinois estate tax exemption has been $4 million per person since 2013. It was not raised in 2026. Multiple bills have been introduced in the Illinois legislature to raise or eliminate the exemption (HB2601, HB1731, HB2368), but as of 2026, none have been signed into law. The $4M threshold remains in effect.',
    },
    {
      q: 'What is the new Small Estate Affidavit limit in Illinois?',
      a: 'Effective August 15, 2025, Illinois raised the Small Estate Affidavit limit from $100,000 to $150,000 for personal property. Crucially, motor vehicles are now excluded from this calculation — meaning your loved one\'s cars can be transferred to the Secretary of State separately regardless of value, and they no longer count toward the $150,000 cap. However, if the decedent owned any real estate in Illinois, a formal probate proceeding is still required regardless of the estate\'s total value.',
    },
    {
      q: 'What changed with Illinois Power of Attorney law in 2025?',
      a: 'Public Act 103-0994 took effect January 1, 2025. The most significant practical change: it is now unlawful for banks and other third parties to unreasonably refuse a properly executed Illinois statutory short-form power of attorney. The law codifies five specifically "unreasonable" grounds for refusal and 14 "reasonable" grounds. This gives agents legal teeth when institutions try to reject valid documents. Note: your existing POA remains valid — the change addresses third-party acceptance, not the underlying document format.',
    },
    {
      q: 'The federal estate tax exemption was going to drop to $7M — did that happen?',
      a: 'No. The One Big Beautiful Bill Act, signed on July 4, 2025, permanently raised the federal estate and gift tax exemption to $15 million per person (indexed for inflation) starting January 1, 2026. The feared "sunset" of the Tax Cuts and Jobs Act provisions did not occur. This is significant federal relief — but it has no effect on Illinois\'s separate $4M estate tax exemption, which remains unchanged.',
    },
    {
      q: 'My estate plan was structured to minimize tax before the federal exemption sunset. Do I still need it?',
      a: 'Possibly not in the same form. Many people undertook urgent gifting or trust strategies in 2024–2025 specifically to lock in the higher federal exemption before an anticipated sunset. Now that the $15M exemption is permanent, some of that urgency is removed at the federal level. However, Illinois-specific planning (bypass trusts, disclaimer strategies, irrevocable trusts) remains important if your estate exceeds $4M. Review your plan with an attorney to ensure it still reflects your current goals.',
    },
    {
      q: 'How does the lack of portability affect married Cook County couples?',
      a: 'Illinois does not allow portability of the estate tax exemption between spouses (unlike federal law). Each spouse has their own $4M Illinois exemption, but if the first spouse dies and leaves everything to the survivor, the first spouse\'s exemption is wasted — resulting in a larger taxable estate for the survivor. Traditional solutions include a bypass trust (credit shelter trust) or a qualified disclaimer strategy. For couples with combined estates over $4M, proper planning is essential and unchanged by 2026 developments.',
    },
  ];

  const tocItems = [
    { id: 'why-2026-matters', title: 'What Actually Changed in Illinois Estate Law', level: 2, numeration: '1' },
    {
      id: 'small-estate-affidavit', title: 'Small Estate Affidavit: New $150,000 Threshold', level: 2, numeration: '2',
      children: [
        { id: 'vehicle-transfers', title: 'Vehicles Now Excluded From the Limit', level: 3, numeration: '2.1' },
        { id: 'sea-limitations', title: 'What the SEA Still Cannot Do', level: 3, numeration: '2.2' },
      ],
    },
    {
      id: 'poa-changes', title: 'Power of Attorney Law Update (Public Act 103-0994)', level: 2, numeration: '3',
      children: [
        { id: 'unreasonable-refusal', title: 'Unreasonable Grounds to Refuse a POA', level: 3, numeration: '3.1' },
      ],
    },
    {
      id: 'federal-estate-tax', title: 'Federal Estate Tax: $15M Exemption Is Now Permanent', level: 2, numeration: '4',
      children: [
        { id: 'illinois-unchanged', title: 'Illinois Exemption Remains at $4M', level: 3, numeration: '4.1' },
        { id: 'estate-tax-calculator', title: 'Interactive Illinois Estate Tax Calculator', level: 3, numeration: '4.2' },
      ],
    },
    {
      id: 'law-changes-overview', title: 'All Four Changes Side by Side', level: 2, numeration: '5',
    },
    {
      id: 'action-steps', title: '6 Action Steps Cook County Families Should Take Now', level: 2, numeration: '6',
    },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
  ];

  const actionSteps = [
    {
      step: '1',
      title: 'Understand Your Illinois Exposure — the $4M Exemption Has NOT Changed',
      description: 'Many families have been told the Illinois estate tax exemption "doubled." It did not. The $4M limit has been in place since 2013. If your estate — including home equity, retirement accounts, life insurance death benefits, and investments — exceeds $4M, you still have an Illinois estate tax problem that needs active planning.',
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
      step: '2',
      title: 'Review Trust Documents for Tax Trigger Provisions',
      description: 'If you have a revocable living trust with a bypass trust provision, confirm what threshold triggers the split. If your plan was drafted around the old $2M federal exemption or in anticipation of a federal sunset, those provisions may no longer be optimally structured. The federal exemption is now $15M — but your Illinois bypass trust threshold should still be set appropriately.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: '3',
      title: 'Ensure Your Power of Attorney Uses the Current Statutory Form',
      description: 'Public Act 103-0994 (effective January 1, 2025) strengthened third-party acceptance obligations. To maximize your agent\'s ability to use the POA without pushback from institutions, use the current Illinois statutory short-form. Your existing POA remains valid, but older documents may benefit from a review.',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      step: '4',
      title: 'Check Whether a Small Estate Affidavit Could Simplify Estate Administration',
      description: 'The new $150,000 limit (up from $100,000) and the exclusion of vehicles means more estates qualify to skip formal probate. If a loved one has passed with personal property under $150,000 and no individually held real estate, a Small Estate Affidavit may allow faster, less expensive asset transfer.',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      step: '5',
      title: 'Revisit Any Urgent Federal Gifting Strategies You May Have Made',
      description: 'Some families took aggressive gifting action in 2024–2025 to lock in the higher federal exemption before the anticipated sunset. Now that the $15M exemption is permanent, the urgency has passed — but it is worth reviewing whether the gifts and structures put in place still make sense for your overall plan.',
      icon: <Calculator className="w-6 h-6" />,
    },
    {
      step: '6',
      title: 'Schedule a Formal Estate Plan Review',
      description: 'The combination of federal permanence, an unchanged Illinois exemption, and new small estate and POA rules makes 2026 an ideal time for a full review. Confirm your beneficiary designations, update any digital asset provisions, and ensure your plan reflects both the new federal landscape and Illinois\'s ongoing $4M threshold.',
      icon: <ArrowRight className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Illinois Estate Planning Laws Changing in 2026: What Cook County Families Need to Know',
            description: 'An accurate guide to Illinois estate planning law changes in 2025–2026, including the Small Estate Affidavit expansion to $150,000, Power of Attorney updates under Public Act 103-0994, and the permanent federal estate tax exemption of $15M — plus why the Illinois $4M exemption has NOT changed.',
            datePublished: '2026-03-26',
            dateModified: '2026-03-26',
            author: {
              '@type': 'Organization',
              name: 'Illinois Estate Law',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Illinois Estate Law',
              url: 'https://illinoisestatelaw.com',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://illinoisestatelaw.com/blog/illinois-estate-planning-laws-changing-2026-cook-county-families/',
            },
          }),
        }}
      />

      <div className="bg-[#2D3E50] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-white text-sm mb-6 transition-colors">
            <ArrowRight className="w-4 h-4 mr-1 rotate-180" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[#4a708b] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Estate Planning</span>
            <span className="bg-[#4a708b] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">2025–2026 Updates</span>
            <span className="bg-[#4a708b] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Cook County</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Illinois Estate Planning Laws Changing in 2025–2026: What Cook County Families Actually Need to Know
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl">
            The Small Estate Affidavit limit rose to $150,000. Power of attorney acceptance rules were strengthened. The federal exemption is now permanently $15M. And despite widespread claims — Illinois&apos;s $4M estate tax exemption has not changed.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span>March 26, 2026</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>Illinois Estate Law</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-6 space-y-6">
              <TableOfContents items={tocItems} />
              <div className="bg-[#f0f5f8] rounded-xl p-5 border border-[#d0e4ef]">
                <p className="font-semibold text-[#2D3E50] text-sm mb-2">Ready to update your plan?</p>
                <p className="text-gray-600 text-xs mb-3">Schedule a consultation to review how 2025–2026 changes affect your estate.</p>
                <Link href="/book-consultation" className="block text-center bg-[#2D3E50] text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-[#4a708b] transition-colors">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </aside>

          <article className="flex-1 min-w-0">
            <section id="why-2026-matters" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">What Actually Changed in Illinois Estate Law — and What Did Not</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                There is a great deal of misinformation circulating about Illinois estate planning law for 2026. Most notably: several sources claim the Illinois estate tax exemption doubled to $4 million in 2026. This is incorrect. The Illinois estate tax exemption has been $4 million per person since 2013 — it did not change in 2026.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What did change are three meaningful updates that Cook County families should understand: the Small Estate Affidavit threshold was raised to $150,000 (effective August 2025), Power of Attorney acceptance rules were significantly strengthened (effective January 2025), and the federal estate tax exemption was permanently raised to $15 million per person.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">A Common Misconception to Be Aware Of</p>
                    <p className="text-amber-700 text-sm">
                      You may have read that Illinois raised its estate tax exemption to $4 million in 2026. In fact, the $4M threshold has been in place since 2013 and is unchanged. Several bills to raise or eliminate the Illinois exemption have been proposed (HB2601, HB1731, HB2368) but none have been signed into law as of 2026. This article reflects the law as it actually stands.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                This guide covers each actual change, explains what remained the same, and provides a prioritized action list for Cook County families. We have also included an interactive Illinois estate tax calculator so you can assess your exposure under the current $4M threshold.
              </p>
            </section>

            <section id="small-estate-affidavit" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">Small Estate Affidavit: New $150,000 Threshold (Effective August 15, 2025)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is one of the most practically significant changes for Illinois families in recent years. Illinois Senate Bill SB0083, enacted August 15, 2025, amended the Probate Act of 1975 to raise the Small Estate Affidavit (SEA) limit from $100,000 to $150,000 for personal property.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Small Estate Affidavit allows a family member to transfer a decedent&apos;s assets — bank accounts, investment accounts, personal property — without opening a formal probate case in county court. The affiant signs under penalty of perjury before a notary and presents the document to financial institutions or the Secretary of State. It is faster, less expensive, and far less stressful than probate.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">Before August 15, 2025</p>
                  <p className="text-3xl font-bold text-red-700 mb-1">$100,000</p>
                  <p className="text-sm text-red-600">Small Estate Affidavit limit (personal property)</p>
                  <p className="text-xs text-gray-500 mt-2">Vehicles counted toward the limit — a single car could push an estate over the threshold</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">As of August 15, 2025</p>
                  <p className="text-3xl font-bold text-green-700 mb-1">$150,000</p>
                  <p className="text-sm text-green-600">Small Estate Affidavit limit (personal property)</p>
                  <p className="text-xs text-gray-500 mt-2">Vehicles excluded from the $150,000 calculation and transferred separately regardless of value</p>
                </div>
              </div>

              <div id="vehicle-transfers" className="mb-8">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">Vehicles Now Excluded From the Limit</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is a significant change. Previously, vehicle values counted toward the $100,000 cap. With today&apos;s vehicle prices — a single late-model car may be worth $30,000–$60,000 — this regularly pushed estates over the threshold and forced families to open a formal probate case just to transfer a car.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under the new law, vehicles are handled directly with the Illinois Secretary of State and do not count toward the $150,000 personal property limit. This is particularly beneficial for families where the decedent held vehicles in their individual name rather than in a trust.
                </p>
                <div className="bg-blue-50 border-l-4 border-[#4a708b] p-4 rounded-r-xl mb-4">
                  <p className="font-semibold text-[#2D3E50] mb-1 text-sm">Practical Example</p>
                  <p className="text-gray-700 text-sm">
                    A Cook County resident passes away with $140,000 in bank and investment accounts, a $45,000 car, and no real estate in their individual name. Under the old law, the total ($185,000) exceeded the $100,000 cap and required formal probate. Under the new law, the vehicle is handled separately and the $140,000 in other assets falls under the $150,000 SEA limit — no probate required.
                  </p>
                </div>
              </div>

              <div id="sea-limitations" className="mb-4">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">What the Small Estate Affidavit Still Cannot Do</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The SEA expansion is meaningful, but it has firm limitations that families must understand:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    {[
                      { label: 'Real estate still requires probate', desc: 'If the decedent owned any Illinois real estate in their individual name — regardless of value — a formal probate administration is required. A $150,000 estate with a condo still must go through probate.' },
                      { label: 'Does not apply to deaths before August 15, 2025', desc: 'The new $150,000 limit and vehicle exclusion only apply to decedents who died on or after August 15, 2025.' },
                      { label: 'Affidavit must be used carefully', desc: 'The affiant signs under penalty of perjury. Errors in listing debts, heirs, or asset values can create legal liability. An attorney should review the document before use.' },
                      { label: 'Family disagreements require probate', desc: 'If heirs dispute asset distribution, the affidavit process breaks down and formal probate may be required anyway.' },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#2D3E50]">{item.label}: </span>
                          <span className="text-gray-600">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="poa-changes" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">Power of Attorney Law Update: Public Act 103-0994 (Effective January 1, 2025)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Governor Pritzker signed Illinois Public Act 103-0994 on August 9, 2024, amending the Illinois Power of Attorney Act with an effective date of January 1, 2025. The most impactful change: it is now unlawful for a third party — a bank, financial institution, or other organization — to unreasonably refuse to honor a properly executed Illinois statutory short-form power of attorney for property.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before this law, financial institutions frequently rejected valid powers of attorney for vague or unstated reasons, leaving agents with few options and families scrambling. The amended Act changes the landscape by codifying exactly what constitutes an unreasonable refusal.
              </p>

              <div id="unreasonable-refusal" className="mb-8">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">The Five Unreasonable Grounds for Refusing a POA</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The law specifies that the following are unreasonable grounds to refuse a properly executed POA:
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'The POA was not prepared on the institution\'s own form',
                    'The POA was executed more than a certain number of years before presentment (age alone is not a valid reason)',
                    'The institution requires its own certification form to be completed instead of accepting the agent\'s certification',
                    'The institution has concerns about liability for honoring the POA (absent specific red flags)',
                    'The institution is uncertain whether the principal is still alive or competent (without specific contrary evidence)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg p-3">
                      <span className="w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border-l-4 border-[#4a708b] p-4 rounded-r-xl mb-4">
                  <p className="font-semibold text-[#2D3E50] mb-1 text-sm">Important Nuance</p>
                  <p className="text-gray-700 text-sm">
                    The law also codifies 14 <em>reasonable</em> grounds for refusal — meaning institutions retain legitimate defenses. The amendment is not a blanket mandate to accept every document; it targets the common, bad-faith rejections that previously left agents powerless. Your existing POA documents remain valid. The change addresses how third parties must respond to them.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  For more context on why powers of attorney matter and what they should include, see our guide:{' '}
                  <Link href="/blog/do-you-really-need-a-power-of-attorney-in-illinois/" className="text-[#4a708b] hover:underline font-medium">
                    Do You Really Need a Power of Attorney in Illinois?
                  </Link>
                </p>
              </div>
            </section>

            <section id="federal-estate-tax" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">Federal Estate Tax: The $15M Exemption Is Now Permanent</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For years, federal estate tax planning was dominated by uncertainty: the Tax Cuts and Jobs Act of 2017 temporarily doubled the federal estate and gift tax exemption, but those provisions were scheduled to sunset on January 1, 2026 — reverting the exemption to roughly $7 million per person.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                That sunset did not happen. The One Big Beautiful Bill Act, signed on July 4, 2025, permanently raised the federal estate and gift tax exemption to $15 million per person starting January 1, 2026, indexed for inflation. The $15 million figure supersedes the prior TCJA amount and is now a permanent baseline rather than a temporary one.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This matters particularly for families who undertook significant gifting in 2024–2025 specifically to take advantage of the higher TCJA exemption before an anticipated rollback. Those strategies may warrant a review — not because they were wrong, but because the urgency that drove them has changed.
              </p>

              <div id="illinois-unchanged" className="mb-8">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">The Illinois Exemption Remains at $4M — Federal Changes Do Not Help Here</h3>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                    <p className="text-amber-700 text-sm">
                      The federal and Illinois estate taxes are entirely separate systems. The permanent federal $15M exemption provides zero protection against Illinois estate tax. Illinois residents must plan for both — and the Illinois $4M threshold remains a real exposure for many Cook County families.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Illinois imposes its own estate tax on estates exceeding $4 million — a threshold it has maintained since 2013 with no inflation adjustments. Unlike the federal tax, Illinois does not offer portability between spouses. The top Illinois rate is 16%.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For a Cook County homeowner with $1.2M in home equity, $1.8M in retirement accounts, $600K in life insurance, and $500K in other assets, the total is $4.1M — above the threshold and exposed to Illinois estate tax despite being well under the federal exemption. This is not a hypothetical. It describes a large number of ordinary Cook County families.
                </p>
              </div>

              <div id="estate-tax-calculator" className="mb-4">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">Interactive Illinois Estate Tax Calculator</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Enter your estimated gross estate value to see your Illinois estate tax exposure under the current $4 million exemption. Include home equity, retirement accounts, life insurance death benefits, and investments.
                </p>
                <div className="bg-[#f5f9fc] border border-[#d0e4ef] rounded-xl p-6">
                  <p className="text-xs text-gray-500 mb-3 italic">This is an educational estimate only. Actual tax calculations require professional analysis.</p>
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-[#2D3E50] mb-1">Estimated Gross Estate Value</label>
                      <input
                        type="text"
                        value={estateValue}
                        onChange={(e) => setEstateValue(e.target.value)}
                        placeholder="e.g. 4500000"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={handleCalculate}
                        className="bg-[#2D3E50] text-white px-6 py-2.5 rounded-lg hover:bg-[#4a708b] transition-colors font-medium text-sm whitespace-nowrap"
                      >
                        Calculate Impact
                      </button>
                    </div>
                  </div>
                  {calculatorResult && (
                    <div className={`rounded-xl p-5 border ${calculatorResult.exempt ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                      {calculatorResult.exempt ? (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <p className="font-bold text-green-700">Currently Below the Illinois $4M Threshold</p>
                          </div>
                          <p className="text-green-700 text-sm">
                            Your estimated estate of{' '}
                            <strong>{formatCurrency(parseFloat(estateValue.replace(/[^0-9.]/g, '')))}</strong>{' '}
                            falls below the $4 million Illinois exemption. No Illinois estate tax would currently apply. However, asset values change — a review every few years is worthwhile.
                          </p>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            <p className="font-bold text-red-700">Illinois Estate Tax May Apply</p>
                          </div>
                          <p className="text-red-700 text-sm mb-2">
                            Your estimated estate of{' '}
                            <strong>{formatCurrency(parseFloat(estateValue.replace(/[^0-9.]/g, '')))}</strong>{' '}
                            exceeds the $4 million Illinois exemption. Estimated Illinois estate tax:{' '}
                            <strong>{formatCurrency(calculatorResult.estimatedTax)}</strong>.
                          </p>
                          <p className="text-red-600 text-xs">This is an approximation using Illinois&apos;s graduated rate structure (up to 16%). Actual liability depends on deductions, marital deductions, business valuations, and other factors. Contact an attorney for precise analysis.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section id="law-changes-overview" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">All Four Changes Side by Side</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Select each change below to see the old rule, the new rule, and what action you should take.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {lawChanges.map((change) => (
                  <button
                    key={change.id}
                    onClick={() => setActiveChange(change.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeChange === change.id ? `${change.color} text-white shadow-md` : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {change.icon}
                    {change.label}
                  </button>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className={`${activeChangeData.color} text-white px-6 py-4`}>
                  <h3 className="text-lg font-bold">{activeChangeData.label}</h3>
                </div>
                <div className="p-6 grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">Old Rule</p>
                    <p className="text-gray-700 text-sm">{activeChangeData.oldRule}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">New Rule</p>
                    <p className="text-gray-700 text-sm">{activeChangeData.newRule}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-[#4a708b] uppercase tracking-wide mb-2">Impact on Your Estate</p>
                    <p className="text-gray-700 text-sm">{activeChangeData.impact}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">Recommended Action</p>
                    <p className="text-gray-700 text-sm">{activeChangeData.action}</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="action-steps" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">6 Action Steps Cook County Families Should Take Now</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The law has changed in meaningful ways — and in one critical way it has not. Here is a prioritized list of what Cook County families should do in 2026.
              </p>
              <div className="space-y-4">
                {actionSteps.map((step) => (
                  <div key={step.step} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-[#2D3E50] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D3E50] mb-1">{step.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12 bg-[#2D3E50] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-3">Is Your Estate Plan Accurate for 2026?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl">
                The Illinois estate tax threshold has not changed — but misinformation is widespread. Whether you need to plan around the $4M Illinois exemption, take advantage of the new SEA rules, or review your POA after the 2025 statutory update, our Cook County attorneys can review your existing documents and identify what actually needs to change.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book-consultation" className="bg-white text-[#2D3E50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center text-sm">
                  Book a Free Consultation
                </Link>
                <Link href="/services-pricing" className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-center text-sm">
                  View Estate Planning Packages
                </Link>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      className="w-full text-left flex items-start justify-between gap-4 p-5 bg-white hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFaq(i)}
                    >
                      <span className="font-semibold text-[#2D3E50] text-sm leading-relaxed pr-2">{faq.q}</span>
                      {openFaq === i ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12 bg-[#f0f5f8] rounded-2xl p-6 border border-[#d0e4ef]">
              <h3 className="text-lg font-bold text-[#2D3E50] mb-2">More Illinois Estate Planning Guides</h3>
              <p className="text-gray-600 text-sm mb-4">Explore related topics to build a complete picture of your Illinois estate plan.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: '/blog/how-estate-taxes-work-in-illinois/', label: 'How Estate Taxes Work in Illinois' },
                  { href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/', label: 'Revocable Living Trusts: Pros and Cons' },
                  { href: '/blog/when-is-probate-required-in-illinois/', label: 'When Is Probate Required in Illinois?' },
                  { href: '/blog/7-overlooked-steps-that-make-or-break-an-illinois-estate-plan/', label: '7 Overlooked Steps in an Illinois Estate Plan' },
                  { href: '/blog/do-you-really-need-a-power-of-attorney-in-illinois/', label: 'Do You Really Need a Power of Attorney in Illinois?' },
                  { href: '/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/', label: 'What Happens Without an Incapacity Plan' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-[#4a708b] hover:text-[#2D3E50] text-sm font-medium hover:underline transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            <BlogContactForm />

            <BlogNavigation
              previousPost={previous ? { title: previous.title, url: previous.url } : undefined}
              nextPost={next ? { title: next.title, url: next.url } : undefined}
            />
          </article>
        </div>

        <div className="mt-12">
          <RelatedArticles articles={relatedPosts.map(p => ({ title: p.title, url: p.url, date: p.date, excerpt: p.excerpt }))} />
        </div>
      </div>
    </div>
  );
}
