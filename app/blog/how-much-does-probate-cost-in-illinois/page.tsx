'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DollarSign, Calculator, ChevronDown, ChevronUp, Clock, Scale, FileText, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, TrendingUp, Users, Building2, ArrowRight } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-much-does-probate-cost-in-illinois';

const courtFilingFees: Record<string, { county: string; filing: string; bond: string; publication: string; certified: string }> = {
  cook: { county: 'Cook County', filing: '$388', bond: '$25 - $75', publication: '$150 - $250', certified: '$12 per copy' },
  dupage: { county: 'DuPage County', filing: '$337', bond: '$25 - $50', publication: '$100 - $200', certified: '$10 per copy' },
  kane: { county: 'Kane County', filing: '$316', bond: '$20 - $50', publication: '$100 - $175', certified: '$10 per copy' },
};

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCounty, setSelectedCounty] = useState('cook');
  const [estateValue, setEstateValue] = useState('');
  const [billingModel, setBillingModel] = useState<'hourly' | 'flat'>('hourly');

  const estimateCosts = () => {
    const value = parseFloat(estateValue || '0');
    if (value <= 0) return null;

    const courtFees = 500;
    const publication = 200;
    const certifiedCopies = 60;
    const appraisals = value > 200000 ? 750 : 0;
    const baseCosts = courtFees + publication + certifiedCopies + appraisals;

    const hourlyLow = Math.max(5000, value * 0.03);
    const hourlyHigh = Math.max(8000, value * 0.05);

    const flatFee = 7500;

    return {
      baseCosts,
      hourlyLow: Math.round(hourlyLow + baseCosts),
      hourlyHigh: Math.round(hourlyHigh + baseCosts),
      flatTotal: Math.round(flatFee + baseCosts),
      savings: Math.round(hourlyLow + baseCosts - (flatFee + baseCosts)),
    };
  };

  const costs = estimateCosts();

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-makes-up-probate-costs', title: 'What Makes Up Probate Costs', level: 2, numeration: '2' },
    { id: 'county-comparison', title: 'Court Filing Fees by County', level: 2, numeration: '3' },
    { id: 'attorney-fees', title: 'Attorney Fees: Hourly vs. Flat Fee', level: 2, numeration: '4' },
    { id: 'cost-calculator', title: 'Interactive Cost Calculator', level: 2, numeration: '5' },
    { id: 'hidden-costs', title: 'Hidden Costs Most Families Miss', level: 2, numeration: '6' },
    { id: 'how-to-reduce-costs', title: 'How to Reduce Probate Costs', level: 2, numeration: '7' },
    { id: 'frequently-asked-questions', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'How much does a probate attorney cost in Illinois?',
      answer: 'Probate attorney costs in Illinois vary widely depending on the billing model. Hourly attorneys typically charge $250-$450 per hour and bill for every phone call, email, and court appearance, resulting in total fees of $5,000-$15,000 or more. Flat-fee attorneys, like Illinois Estate Law, charge a set amount regardless of how long the case takes. Our flat fee of $7,500 for standard probate covers the entire process from filing through final distribution, giving families cost certainty from day one.',
    },
    {
      question: 'Who pays probate costs in Illinois?',
      answer: 'Probate costs in Illinois are paid from the estate itself, not from the executor\'s personal funds. The executor uses estate assets to pay court filing fees, attorney fees, publication costs, and other administrative expenses before distributing the remaining assets to beneficiaries. If the estate lacks sufficient liquid assets, the executor may need to sell property to cover these costs. Executor compensation is also paid from the estate and is considered a reasonable expense.',
    },
    {
      question: 'Is probate more expensive in Cook County than DuPage or Kane County?',
      answer: 'Yes, Cook County probate tends to be more expensive overall. Court filing fees in Cook County are approximately $388 compared to $337 in DuPage and $316 in Kane County. Publication costs and attorney fees also tend to be higher in Cook County due to the volume of cases and higher cost of living in the Chicago metropolitan area. However, the biggest cost difference comes from attorney fees, not court fees. Choosing a flat-fee attorney can eliminate the county-to-county attorney cost disparity entirely.',
    },
    {
      question: 'How long does probate take in Illinois, and does longer mean more expensive?',
      answer: 'Standard probate in Illinois takes 6-12 months for straightforward estates, while complex or contested estates can take 18-24 months or longer. With hourly billing, longer cases absolutely cost more because every additional month means more attorney hours billed. A case that drags from 9 months to 18 months can easily double the legal fees. This is a major advantage of flat-fee probate: your cost stays the same regardless of whether the case takes 6 months or 18 months.',
    },
    {
      question: 'Can I avoid probate costs entirely?',
      answer: 'You can significantly reduce or eliminate probate costs through proper estate planning done before death. Strategies include creating a revocable living trust and funding it properly, adding transfer-on-death designations to real estate (TODI), using payable-on-death designations on bank accounts, maintaining current beneficiary designations on retirement accounts and life insurance, and holding property in joint tenancy with right of survivorship. These strategies cost far less to implement upfront than probate costs after death.',
    },
    {
      question: 'What is the executor fee in Illinois?',
      answer: 'Illinois law entitles executors to "reasonable compensation" for their services (755 ILCS 5/27-1). While the statute does not set a specific percentage, courts in Cook County, DuPage, and Kane County generally approve executor fees of 2-4% of the estate value. For a $300,000 estate, this could mean $6,000-$12,000. Many family members serving as executor waive this fee, but professional executors and corporate fiduciaries almost always charge. The executor fee is separate from and in addition to attorney fees.',
    },
    {
      question: 'Are probate costs tax deductible?',
      answer: 'Some probate costs may be deductible on the estate tax return (Illinois Form 700 and federal Form 706) if the estate is large enough to owe estate tax. Attorney fees, executor fees, and administrative expenses can reduce the taxable estate. However, for estates below the Illinois estate tax threshold of $4 million, these deductions provide no tax benefit. Probate costs are not deductible on the beneficiaries\' personal income tax returns. Consult a tax professional for guidance on your specific situation.',
    },
    {
      question: 'What happens if the estate cannot afford probate costs?',
      answer: 'If the estate lacks sufficient funds to cover probate costs, several options exist. First, check whether the estate qualifies for a small estate affidavit (estates under $100,000 with no real estate), which costs significantly less. Second, some attorneys accept payment from estate assets as they become available. Third, the executor may advance costs and be reimbursed from the estate. If the estate truly cannot cover costs, it may be considered insolvent, and a simplified process applies under Illinois law to distribute available assets to creditors in statutory priority order.',
    },
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does Probate Cost in Illinois? (Cook County, DuPage & Kane)",
    "description": "Detailed breakdown of probate costs in Illinois for Cook County, DuPage County, and Kane County. Covers court fees, attorney fees, executor compensation, and hidden costs with an interactive cost calculator.",
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

  const county = courtFilingFees[selectedCounty];

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
                  10 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                How Much Does Probate Cost in Illinois? (Cook County, DuPage &amp; Kane)
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                A detailed breakdown of every cost families face during Illinois probate &mdash; and how a flat-fee approach can save you thousands.
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
                <DollarSign className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg">
                    Probate costs in Illinois typically range from $8,000 to $20,000 or more, depending on estate size, county, and attorney billing method.
                  </p>
                  <p className="mb-4">
                    This guide breaks down every category of probate expense &mdash; court filing fees, attorney fees, executor compensation, publication costs, and hidden charges &mdash; for Cook County, DuPage County, and Kane County. You will find an interactive cost calculator to estimate your total and a side-by-side comparison of hourly versus flat-fee billing.
                  </p>
                  <p className="mb-0">
                    At Illinois Estate Law, we offer a reasonable flat fee of <strong>$7,500</strong> for standard probate &mdash; a fraction of what many hourly firms charge for the same work. Families working with hourly attorneys often pay double or triple that amount before the case is closed.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="what-makes-up-probate-costs" className="text-2xl font-bold mt-12 mb-4">
              What Makes Up Probate Costs in Illinois?
            </h2>

            <p className="mb-6">
              Probate costs are not a single fee. They are a collection of charges from the court, your attorney, the executor, appraisers, and other service providers. Understanding each category helps families plan realistically and avoid surprises.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <Scale className="w-10 h-10 text-[#4a708b] mb-3" />
                <h3 className="text-lg font-bold mb-2">Court Filing Fees</h3>
                <p className="text-2xl font-bold text-[#4a708b] mb-2">$316 &ndash; $388</p>
                <p className="text-sm text-gray-700">
                  Varies by county. Cook County charges the highest filing fees in the Chicago metro area.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <FileText className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Attorney Fees</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">$5,000 &ndash; $15,000+</p>
                <p className="text-sm text-gray-700">
                  The single largest cost. Hourly billing at $250-$450/hr adds up fast. Flat-fee firms charge significantly less.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
                <Users className="w-10 h-10 text-amber-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Executor Fees</h3>
                <p className="text-2xl font-bold text-amber-600 mb-2">2% &ndash; 4%</p>
                <p className="text-sm text-gray-700">
                  Of total estate value. Family executors often waive this fee; professional executors do not.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 my-8 border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Complete Cost Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-bold">Cost Category</th>
                      <th className="text-left py-3 px-4 font-bold">Typical Range</th>
                      <th className="text-left py-3 px-4 font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 font-semibold">Court Filing Fee</td>
                      <td className="py-3 px-4">$316 &ndash; $388</td>
                      <td className="py-3 px-4 text-gray-600">One-time fee at case opening</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Attorney Fees (Hourly)</td>
                      <td className="py-3 px-4">$5,000 &ndash; $15,000+</td>
                      <td className="py-3 px-4 text-gray-600">$250-$450/hr, varies by complexity</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="py-3 px-4 font-semibold text-green-700">Attorney Fees (Flat Fee)</td>
                      <td className="py-3 px-4 font-bold text-green-700">$7,500</td>
                      <td className="py-3 px-4 text-green-700">Our standard flat fee &mdash; no surprises</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Executor Compensation</td>
                      <td className="py-3 px-4">2% &ndash; 4% of estate</td>
                      <td className="py-3 px-4 text-gray-600">Often waived by family members</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Publication Notice</td>
                      <td className="py-3 px-4">$100 &ndash; $250</td>
                      <td className="py-3 px-4 text-gray-600">Three weeks in local newspaper</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Certified Copies</td>
                      <td className="py-3 px-4">$40 &ndash; $100</td>
                      <td className="py-3 px-4 text-gray-600">Letters of Office, death certificates</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Real Estate Appraisal</td>
                      <td className="py-3 px-4">$300 &ndash; $750</td>
                      <td className="py-3 px-4 text-gray-600">Required if estate includes real property</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Surety Bond</td>
                      <td className="py-3 px-4">$100 &ndash; $500/yr</td>
                      <td className="py-3 px-4 text-gray-600">If will does not waive bond requirement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 id="county-comparison" className="text-2xl font-bold mt-12 mb-4">
              Court Filing Fees by County
            </h2>

            <p className="mb-6">
              Filing fees differ across Illinois counties. Below is a comparison of the three major counties in the Chicago metro area. Select a county to see its specific breakdown.
            </p>

            <div className="my-8 border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="flex border-b border-gray-200 bg-gray-50">
                {Object.entries(courtFilingFees).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCounty(key)}
                    className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors ${
                      selectedCounty === key
                        ? 'bg-[#4a708b] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{val.county}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-4">{county.county} Court Fees</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Probate Filing Fee</div>
                    <div className="text-2xl font-bold text-[#4a708b]">{county.filing}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Bond Fee</div>
                    <div className="text-2xl font-bold text-[#4a708b]">{county.bond}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Publication Costs</div>
                    <div className="text-2xl font-bold text-[#4a708b]">{county.publication}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Certified Copies</div>
                    <div className="text-2xl font-bold text-[#4a708b]">{county.certified}</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="attorney-fees" className="text-2xl font-bold mt-12 mb-4">
              Attorney Fees: Hourly vs. Flat Fee
            </h2>

            <p className="mb-6">
              Attorney fees are the single largest probate expense, and the billing method your attorney uses has a dramatic impact on your total cost. Illinois does not cap probate attorney fees by statute, so the market &mdash; and the billing model &mdash; determines what families pay.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 p-4 border-b border-red-200">
                  <h3 className="font-bold text-lg flex items-center gap-2 text-red-700">
                    <TrendingUp className="w-5 h-5" />
                    Hourly Billing
                  </h3>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-red-600 mb-4">$5,000 &ndash; $15,000+</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Billed at $250-$450 per hour</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Every phone call, email, and filing adds to the bill</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Contested or delayed cases can double or triple the cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>No cost certainty until the case is closed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Families hesitate to ask questions for fear of charges</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 p-4 border-b border-green-200">
                  <h3 className="font-bold text-lg flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="w-5 h-5" />
                    Flat Fee (Our Approach)
                  </h3>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-4">$7,500</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>One price covers the entire probate process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Call and email as often as you need &mdash; no extra charge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Cost stays the same whether the case takes 6 or 18 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Know your total from day one &mdash; no surprise invoices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Families save thousands compared to hourly billing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Real-world example:</p>
                  <p className="text-gray-700">
                    A $400,000 estate in Cook County with a house, two bank accounts, and three beneficiaries. An hourly firm billed 42 hours at $350/hr = <strong>$14,700 in attorney fees alone</strong>. With our flat fee, the same family would have paid <strong>$7,500</strong> &mdash; saving over $7,000. The legal work is identical; the billing model is what makes the difference.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="cost-calculator" className="text-2xl font-bold mt-12 mb-4">
              Interactive Probate Cost Calculator
            </h2>

            <p className="mb-6">
              Enter the approximate value of the probate estate to see estimated costs under both billing models. This calculator uses actual Illinois court fees and market-rate attorney billing data.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-[#4a708b]" />
                <h3 className="text-xl font-bold">Probate Cost Estimator</h3>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Estimated Probate Estate Value</label>
                <div className="flex items-center gap-2 max-w-sm">
                  <span className="text-gray-600 text-lg">$</span>
                  <input
                    type="number"
                    value={estateValue}
                    onChange={(e) => setEstateValue(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4a708b] focus:border-transparent text-lg"
                    placeholder="e.g. 300000"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Include only probate assets (solely-owned property without beneficiary designations).
                </p>
              </div>

              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setBillingModel('hourly')}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                    billingModel === 'hourly'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Hourly Attorney
                </button>
                <button
                  onClick={() => setBillingModel('flat')}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                    billingModel === 'flat'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Flat Fee ($7,500)
                </button>
              </div>

              {costs && (
                <div className="space-y-4">
                  {billingModel === 'hourly' ? (
                    <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                      <div className="text-sm text-gray-600 mb-1">Estimated Total with Hourly Attorney</div>
                      <div className="text-3xl font-bold text-red-600">
                        ${costs.hourlyLow.toLocaleString()} &ndash; ${costs.hourlyHigh.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 mt-2">
                        Attorney fees + court costs + publication + certified copies
                        {parseFloat(estateValue) > 200000 && ' + real estate appraisal'}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg p-5 border-2 border-green-300">
                      <div className="text-sm text-gray-600 mb-1">Estimated Total with Flat Fee</div>
                      <div className="text-3xl font-bold text-green-600">
                        ${costs.flatTotal.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 mt-2">
                        $7,500 flat fee + court costs + publication + certified copies
                        {parseFloat(estateValue) > 200000 && ' + real estate appraisal'}
                      </div>
                    </div>
                  )}

                  {costs.savings > 0 && (
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-700">
                          Potential savings with flat fee: ${costs.savings.toLocaleString()} or more
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-4 text-xs text-gray-500 italic">
                This calculator provides estimates only. Actual costs depend on estate complexity, county fees, and whether additional services (real estate sales, tax preparation) are required.
              </div>
            </div>

            <h2 id="hidden-costs" className="text-2xl font-bold mt-12 mb-4">
              Hidden Costs Most Families Miss
            </h2>

            <p className="mb-6">
              The costs above are the ones families expect. But several additional charges frequently catch executors off guard, pushing the total well beyond initial estimates.
            </p>

            <div className="space-y-4 my-8">
              <div className="border-l-4 border-red-400 bg-red-50 p-5 rounded-r-lg">
                <h3 className="font-bold mb-2">Creditor claim disputes</h3>
                <p className="text-sm text-gray-700">
                  When creditors file contested claims against the estate, attorney time increases dramatically. Each disputed claim may require research, negotiation, and potentially a court hearing. On an hourly bill, this can add $1,000-$5,000 per disputed claim.
                </p>
              </div>
              <div className="border-l-4 border-red-400 bg-red-50 p-5 rounded-r-lg">
                <h3 className="font-bold mb-2">Real estate closing costs</h3>
                <p className="text-sm text-gray-700">
                  If the estate includes a home that must be sold, closing costs typically run 2-3% of the sale price. On a $300,000 home, that is $6,000-$9,000 in title insurance, transfer taxes, and broker commissions on top of probate costs.
                </p>
              </div>
              <div className="border-l-4 border-red-400 bg-red-50 p-5 rounded-r-lg">
                <h3 className="font-bold mb-2">Tax preparation fees</h3>
                <p className="text-sm text-gray-700">
                  The executor must file the decedent&apos;s final income tax return and may need to file estate income tax returns (Form 1041) and Illinois estate tax returns (Form 700). CPA fees for estate tax work run $500-$3,000 depending on complexity.
                </p>
              </div>
              <div className="border-l-4 border-red-400 bg-red-50 p-5 rounded-r-lg">
                <h3 className="font-bold mb-2">Property maintenance during probate</h3>
                <p className="text-sm text-gray-700">
                  While the estate is open, the executor must maintain estate property &mdash; pay mortgages, insurance, utilities, and property taxes. For a probate lasting 12 months, carrying costs on a home can easily reach $15,000-$25,000.
                </p>
              </div>
              <div className="border-l-4 border-red-400 bg-red-50 p-5 rounded-r-lg">
                <h3 className="font-bold mb-2">Additional court hearings</h3>
                <p className="text-sm text-gray-700">
                  Each motion, contested matter, or court appearance adds to the timeline and the legal bill. Beneficiary disputes, will contests, or requests for supervised administration can add thousands in legal fees under hourly billing.
                </p>
              </div>
            </div>

            <h2 id="how-to-reduce-costs" className="text-2xl font-bold mt-12 mb-4">
              How to Reduce Probate Costs
            </h2>

            <p className="mb-6">
              Families can take concrete steps to reduce the financial burden of probate, whether planning ahead or already in the process.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  Choose a flat-fee attorney
                </h3>
                <p className="text-sm text-gray-700">
                  The single most impactful decision. Our $7,500 flat fee saves families thousands compared to hourly billing &mdash; especially when cases take longer than expected or involve multiple court appearances.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  Waive executor compensation
                </h3>
                <p className="text-sm text-gray-700">
                  Family members serving as executor can waive their fee, saving 2-4% of the estate value. On a $300,000 estate, that saves $6,000-$12,000 right away.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  Plan ahead to avoid probate
                </h3>
                <p className="text-sm text-gray-700">
                  Proper estate planning &mdash; trusts, TODIs, POD designations &mdash; can eliminate probate entirely. The cost of creating a comprehensive estate plan is a fraction of probate costs.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  Stay organized as executor
                </h3>
                <p className="text-sm text-gray-700">
                  Gather all documents &mdash; death certificates, account statements, deeds, and the will &mdash; before your first attorney meeting. Organized clients reduce legal time and avoid costly delays.
                </p>
              </div>
            </div>

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
              If you are facing probate in Cook County, DuPage County, or Kane County, the most important step you can take is understanding your costs before you commit to an attorney. Every dollar saved on legal fees is a dollar that goes to your family.
            </p>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Get a Clear, Honest Quote
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                At Illinois Estate Law, we handle probate for a flat fee of $7,500. No hourly billing, no surprise invoices, no meter running every time you pick up the phone. Families working with hourly law firms often pay double or triple that amount for the same legal work.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-much-does-probate-cost-in-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-much-does-probate-cost-in-illinois/')}&text=${encodeURIComponent('How Much Does Probate Cost in Illinois?')}`}
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
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-much-does-probate-cost-in-illinois/')}&title=${encodeURIComponent('How Much Does Probate Cost in Illinois?')}`}
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
