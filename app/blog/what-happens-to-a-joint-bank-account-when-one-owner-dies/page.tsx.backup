'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Calculator,
  Home,
  Wallet,
  Users,
  Clock,
  DollarSign,
  Scale,
  Shield,
  TrendingUp,
  XCircle,
  Info,
  HelpCircle
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export default function Page() {
  const currentSlug = 'when-is-probate-required-in-illinois';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedScenario, setExpandedScenario] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('required');
  const [calculatorValues, setCalculatorValues] = useState({
    bankAccounts: '',
    realEstate: '',
    vehicles: '',
    personalProperty: '',
    investments: '',
    businessInterests: '',
    jointProperty: '',
    beneficiaryAccounts: '',
    trustAssets: '',
    lifeInsurance: ''
  });

  const calculateEstateValue = () => {
    const probateAssets =
      parseFloat(calculatorValues.bankAccounts || '0') +
      parseFloat(calculatorValues.realEstate || '0') +
      parseFloat(calculatorValues.vehicles || '0') +
      parseFloat(calculatorValues.personalProperty || '0') +
      parseFloat(calculatorValues.investments || '0') +
      parseFloat(calculatorValues.businessInterests || '0');

    const nonProbateAssets =
      parseFloat(calculatorValues.jointProperty || '0') +
      parseFloat(calculatorValues.beneficiaryAccounts || '0') +
      parseFloat(calculatorValues.trustAssets || '0') +
      parseFloat(calculatorValues.lifeInsurance || '0');

    return { probateAssets, nonProbateAssets, totalAssets: probateAssets + nonProbateAssets };
  };

  const { probateAssets, nonProbateAssets, totalAssets } = calculateEstateValue();

  const getProbateRecommendation = () => {
    if (probateAssets === 0) {
      return { text: 'Probate likely NOT required', color: 'text-green-600', bg: 'bg-green-50' };
    } else if (probateAssets <= 100000) {
      return { text: 'Small Estate Affidavit may be available', color: 'text-blue-600', bg: 'bg-blue-50' };
    } else {
      return { text: 'Formal probate likely REQUIRED', color: 'text-amber-600', bg: 'bg-amber-50' };
    }
  };

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'understanding-probate', title: 'Understanding Probate in Illinois', level: 2, numeration: '2' },
    { id: 'when-probate-required', title: 'When Probate IS Required', level: 2, numeration: '3' },
    { id: 'when-probate-not-required', title: 'When Probate is NOT Required', level: 2, numeration: '4' },
    { id: 'estate-value-calculator', title: 'Interactive Estate Value Calculator', level: 2, numeration: '5' },
    { id: 'small-estate-alternative', title: 'Small Estate Affidavit Alternative', level: 2, numeration: '6' },
    { id: 'common-scenarios', title: 'Common Scenarios Explained', level: 2, numeration: '7' },
    { id: 'timeline-and-process', title: 'Probate Timeline and Process', level: 2, numeration: '8' },
    { id: 'avoiding-probate', title: 'Strategies to Avoid Probate', level: 2, numeration: '9' },
    { id: 'frequently-asked-questions', title: 'Frequently Asked Questions', level: 2, numeration: '10' },
    { id: 'when-to-seek-help', title: 'When to Seek Legal Help', level: 2, numeration: '11' }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "When Is Probate Required in Illinois? Complete 2026 Guide with Interactive Tools",
    "description": "Understand when probate is required in Illinois with our comprehensive guide. Includes interactive estate calculator, decision trees, and detailed explanations of probate requirements and alternatives.",
    "author": {
      "@type": "Person",
      "name": "Mary Liberty",
      "jobTitle": "Estate Planning Attorney"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Illinois Estate Law",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.illinoisestatelaw.com/logo.png"
      }
    },
    "datePublished": "2026-02-09",
    "dateModified": "2026-02-09"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-12">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <span className="text-lg">←</span>
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="mb-6">
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">Feb 9, 2026</time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                When Is Probate Required in Illinois? Complete 2026 Guide with Interactive Tools
              </h1>
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
                    Understanding when probate is required in Illinois can save families thousands of dollars and months of time after a loved one passes away.
                  </p>
                  <p className="mb-4">
                    This comprehensive guide explains exactly when Illinois law requires probate, when it can be avoided, and what alternatives exist for smaller estates. We cover the critical $100,000 threshold, which assets require probate versus those that pass outside the probate process, and the specific circumstances that trigger probate requirements.
                  </p>
                  <p className="mb-0">
                    You'll find interactive tools including an estate value calculator to determine if probate is necessary, decision trees for common scenarios, and detailed explanations of probate alternatives like small estate affidavits and transfer-on-death instruments. Whether you're planning your estate or handling affairs after a death, this guide provides the practical information you need to navigate Illinois probate requirements.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="understanding-probate" className="text-2xl font-bold mt-12 mb-4">
              Understanding Probate in Illinois
            </h2>

            <p className="mb-6">
              Probate is the legal process through which a deceased person's assets are distributed to heirs and beneficiaries under court supervision. In Illinois, probate serves several important functions: validating the deceased person's will (if one exists), appointing a legal representative to manage the estate, identifying and inventorying estate assets, paying legitimate debts and taxes, and ultimately distributing remaining assets to the rightful heirs.
            </p>

            <p className="mb-6">
              The Illinois probate process is governed by the Illinois Probate Act (755 ILCS 5/1-1 et seq.). While probate provides important legal protections and ensures orderly asset distribution, it can also be time-consuming and expensive. A typical Illinois probate case takes 6-12 months to complete and costs between $3,000 and $10,000 or more in attorney fees, court costs, and administrative expenses.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <Clock className="w-10 h-10 text-[#4a708b] mb-3" />
                <h3 className="text-lg font-bold mb-2">Timeline</h3>
                <p className="text-sm text-gray-700">
                  Average probate in Illinois takes 6-12 months, though complex estates can take years to settle completely.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <DollarSign className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Costs</h3>
                <p className="text-sm text-gray-700">
                  Typical costs range from $3,000 to $10,000+, including attorney fees, court costs, and administrative expenses.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
                <Scale className="w-10 h-10 text-amber-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Court Oversight</h3>
                <p className="text-sm text-gray-700">
                  Probate provides court supervision ensuring proper asset distribution and creditor protection.
                </p>
              </div>
            </div>

            <h2 id="when-probate-required" className="text-2xl font-bold mt-12 mb-4">
              When Probate IS Required
            </h2>

            <p className="mb-6">
              Illinois law requires probate in specific situations. Understanding these requirements helps you determine whether probate is necessary for a particular estate.
            </p>

            <div className="my-8 border border-gray-200 rounded-lg overflow-hidden">
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
                    <span>Probate Required</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('not-required')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'not-required'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Probate Not Required</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('maybe')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'maybe'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <HelpCircle className="w-5 h-5" />
                    <span>Gray Areas</span>
                  </div>
                </button>
              </div>

              <div className="p-6 bg-white">
                {activeTab === 'required' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Situations Where Probate IS Required</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Home className="w-5 h-5 text-red-600" />
                          Real Estate in Deceased Person's Name Only
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          If the deceased owned real estate solely in their name (not as joint tenants with right of survivorship, not in a trust, and without a transfer-on-death instrument), probate is required to transfer title to heirs or beneficiaries.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: A house titled only in mom's name must go through probate even if her will clearly states who should inherit it.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Wallet className="w-5 h-5 text-red-600" />
                          Bank Accounts Without Beneficiary Designations Over $100,000
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Bank accounts, investment accounts, or other financial assets solely in the deceased person's name that total more than $100,000 require formal probate. If the total is under $100,000, a small estate affidavit may be available.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: Dad had $150,000 in a savings account with no POD designation. Full probate is required.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-red-600" />
                          Disputes Among Heirs or Beneficiaries
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Even if the estate value is under $100,000, if heirs disagree about asset distribution, will validity, or who should serve as executor, probate court provides the legal forum to resolve these disputes.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: Three siblings disagree about whether mom's handwritten will is valid. Court intervention through probate is necessary.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-red-600" />
                          Complex Debt Situations
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          When the deceased had significant debts, disputed creditor claims, or potential claims against the estate, probate provides a legal framework for addressing these claims in order of priority under Illinois law.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: The deceased had $50,000 in medical bills and multiple credit cards. Probate ensures proper creditor notice and payment priority.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-red-600" />
                          Will Contest or Validity Questions
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          If anyone questions whether the will was properly executed, whether the deceased had mental capacity when signing, or whether undue influence was present, probate court is the proper venue to resolve these issues.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: Family members believe the deceased was pressured to change the will shortly before death. Probate allows court examination of these claims.
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-red-600" />
                          Business Ownership Requiring Formal Transfer
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Ownership interests in closely-held businesses, partnerships, or corporations often require probate to formally transfer ownership and protect both the estate and the business entity.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: The deceased owned 40% of a family LLC. Probate provides legal documentation of ownership transfer to heirs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'not-required' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Situations Where Probate is NOT Required</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Joint Tenancy with Right of Survivorship
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Real estate or bank accounts held as "joint tenants with right of survivorship" automatically transfer to the surviving owner(s) upon death. No probate is required. The surviving owner simply needs to record an affidavit of death with the appropriate documentation.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: A house titled "John and Mary Smith, as joint tenants with right of survivorship." When John dies, Mary automatically owns the entire property.
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Transfer-on-Death (TOD) and Payable-on-Death (POD) Accounts
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Bank accounts, brokerage accounts, and securities with valid TOD or POD beneficiary designations transfer directly to the named beneficiaries. The beneficiary simply presents a death certificate to claim the assets.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: A checking account designated "POD to Sarah Johnson" goes directly to Sarah upon the account holder's death.
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Transfer-on-Death Instrument (TODI) for Real Estate
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Illinois allows real estate to transfer automatically at death through a Transfer-on-Death Instrument recorded with the county recorder. The property passes directly to the named beneficiary without probate.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: A properly executed and recorded TODI naming "beneficiary: Jennifer Smith" transfers the property directly to Jennifer upon the owner's death.
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Revocable Living Trust Assets
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Assets properly titled in the name of a revocable living trust pass according to the trust terms without probate. The successor trustee distributes assets as directed by the trust document.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: Real estate titled "John Smith, Trustee of the John Smith Living Trust dated January 1, 2020" avoids probate entirely.
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Life Insurance with Named Beneficiaries
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Life insurance proceeds with designated beneficiaries (other than the estate) pay directly to beneficiaries. The insurance company requires only a claim form and death certificate.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: A $500,000 life insurance policy naming "primary beneficiary: spouse" pays directly to the spouse without probate.
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Retirement Accounts with Beneficiary Designations
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          401(k)s, IRAs, pensions, and other retirement accounts with named beneficiaries transfer directly to those beneficiaries outside of probate. The account custodian handles the transfer.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: An IRA naming "beneficiary: John Smith Jr., 100%" passes directly to John Jr. regardless of what the will says.
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          Small Estates Under $100,000
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          If the total probate estate (excluding joint tenancy property, beneficiary accounts, and trust assets) is $100,000 or less, and at least 6 months have passed since death, a small estate affidavit may be used instead of formal probate.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Example: The deceased had $80,000 in a solely-owned bank account and $15,000 in personal property. A small estate affidavit can transfer these assets without probate.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'maybe' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Gray Areas Requiring Professional Assessment</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-amber-600" />
                          Estates Near the $100,000 Threshold
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          When the estate value is close to $100,000, careful valuation is critical. Overestimating might lead to unnecessary probate, while underestimating could create legal problems if the estate actually exceeds the limit.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Professional appraisals and legal advice are recommended when estate value is between $90,000 and $110,000.
                        </p>
                      </div>

                      <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-amber-600" />
                          Tenancy in Common Property
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Real estate owned as "tenants in common" (not joint tenants with right of survivorship) requires probate to transfer the deceased co-owner's share. However, if combined with other probate assets the total is under $100,000, a small estate affidavit might work.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          The distinction between joint tenancy and tenancy in common significantly affects whether probate is required.
                        </p>
                      </div>

                      <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-amber-600" />
                          Beneficiary Designations Naming the Estate
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          If retirement accounts, life insurance, or other beneficiary-designated assets name "my estate" as beneficiary, these assets flow into the probate estate and count toward the $100,000 limit.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Review all beneficiary designations carefully. An inadvertent "estate" designation can trigger unnecessary probate.
                        </p>
                      </div>

                      <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-amber-600" />
                          Unfunded or Partially Funded Trusts
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Creating a revocable living trust doesn't avoid probate unless assets are properly transferred into the trust. Assets left in the deceased person's individual name still require probate even if a trust exists.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Many people create trusts but forget to re-title assets, inadvertently requiring probate anyway.
                        </p>
                      </div>

                      <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-amber-600" />
                          Out-of-State Real Estate
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Real estate located outside Illinois may require ancillary probate in that state, even if the Illinois estate qualifies for a small estate affidavit. Each state has its own probate laws and thresholds.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          Vacation homes, rental properties, or land in other states create additional complexity requiring multi-state legal analysis.
                        </p>
                      </div>

                      <div className="border-l-4 border-amber-500 pl-4 bg-amber-50 p-4 rounded-r">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <HelpCircle className="w-5 h-5 text-amber-600" />
                          Claims Against the Estate
                        </h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Even if the estate is under $100,000, if there are disputed claims, potential lawsuits, or complex creditor situations, formal probate may provide better protection for the estate representative and heirs.
                        </p>
                        <p className="text-xs text-gray-600 italic">
                          The small estate affidavit makes the affiant personally liable for debts. Probate provides more legal protection in complex debt situations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h2 id="when-probate-not-required" className="text-2xl font-bold mt-12 mb-4">
              When Probate is NOT Required
            </h2>

            <p className="mb-6">
              Many assets pass outside of probate automatically through legal mechanisms designed to transfer ownership at death without court involvement. Understanding these mechanisms is key to effective estate planning.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                The Five Main Categories of Non-Probate Assets
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold mb-2 text-green-700">1. Joint Ownership Property</h4>
                  <p className="text-sm text-gray-700">
                    Real estate and accounts with joint tenancy with right of survivorship automatically transfer to surviving owners.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold mb-2 text-green-700">2. Beneficiary-Designated Accounts</h4>
                  <p className="text-sm text-gray-700">
                    Retirement accounts, life insurance, TOD/POD accounts transfer directly to named beneficiaries.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold mb-2 text-green-700">3. Trust Assets</h4>
                  <p className="text-sm text-gray-700">
                    Property held in revocable or irrevocable trusts distributes according to trust terms without probate.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold mb-2 text-green-700">4. Transfer-on-Death Instruments</h4>
                  <p className="text-sm text-gray-700">
                    Real estate with properly recorded TODIs transfers directly to named beneficiaries at death.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold mb-2 text-green-700">5. Small Estates</h4>
                  <p className="text-sm text-gray-700">
                    Estates under $100,000 can use the simplified small estate affidavit process instead of formal probate.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="estate-value-calculator" className="text-2xl font-bold mt-12 mb-4">
              Interactive Estate Value Calculator
            </h2>

            <p className="mb-6">
              Use this calculator to estimate whether probate will be required for an estate. Enter values for all applicable asset categories to see if the probate estate exceeds the $100,000 small estate threshold.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-[#4a708b]" />
                <h3 className="text-xl font-bold">Estate Value Calculator</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <h4 className="font-semibold mb-4 text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Probate Assets (Count Toward Limit)
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Bank Accounts (no POD)</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <input
                          type="number"
                          value={calculatorValues.bankAccounts}
                          onChange={(e) => setCalculatorValues({...calculatorValues, bankAccounts: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#4a708b] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Real Estate (solely owned)</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <input
                          type="number"
                          value={calculatorValues.realEstate}
                          onChange={(e) => setCalculatorValues({...calculatorValues, realEstate: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#4a708b] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Vehicles</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <input
                          type="number"
                          value={calculatorValues.vehicles}
                          onChange={(e) => setCalculatorValues({...calculatorValues, vehicles: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#4a708b] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Personal Property</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <input
                          type="number"
                          value={calculatorValues.personalProperty}
                          onChange={(e) => setCalculatorValues({...calculatorValues, personalProperty: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#4a708b] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Investments (no TOD)</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <input
                          type="number"
                          value={calculatorValues.investments}
                          onChange={(e) => setCalculatorValues({...calculatorValues, investments: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#4a708b] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Business Interests</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <input
                          type="number"
                          value={calculatorValues.businessInterests}
                          onChange={(e) => setCalculatorValues({...calculatorValues, businessInterests: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#4a708b] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-300">
                  <h4 className="font-semibold mb-4 text-green-700 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Non-Probate Assets (Don't Count)
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Joint Property</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <input
                          type="number"
                          value={calculatorValues.jointProperty}
                          onChange={(e) => setCalculatorValues({...calculatorValues, jointProperty: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#4a708b] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">POD/TOD Accounts</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <input
                          type="number"
                          value={calculatorValues.beneficiaryAccounts}
                          onChange={(e) => setCalculatorValues({...calculatorValues, beneficiaryAccounts: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#4a708b] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Trust Assets</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <input
                          type="number"
                          value={calculatorValues.trustAssets}
                          onChange={(e) => setCalculatorValues({...calculatorValues, trustAssets: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#4a708b] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Life Insurance / Retirement</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <input
                          type="number"
                          value={calculatorValues.lifeInsurance}
                          onChange={(e) => setCalculatorValues({...calculatorValues, lifeInsurance: e.target.value})}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#4a708b] focus:border-transparent"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border-2 border-red-400">
                  <div className="text-sm text-gray-600 mb-1">Probate Assets</div>
                  <div className="text-2xl font-bold text-red-600">
                    ${probateAssets.toLocaleString()}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-green-400">
                  <div className="text-sm text-gray-600 mb-1">Non-Probate Assets</div>
                  <div className="text-2xl font-bold text-green-600">
                    ${nonProbateAssets.toLocaleString()}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-blue-400">
                  <div className="text-sm text-gray-600 mb-1">Total Estate Value</div>
                  <div className="text-2xl font-bold text-blue-600">
                    ${totalAssets.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className={`mt-6 p-4 rounded-lg ${getProbateRecommendation().bg} border-2 border-current ${getProbateRecommendation().color}`}>
                <div className="flex items-center gap-3">
                  <Info className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg mb-1">{getProbateRecommendation().text}</div>
                    {probateAssets === 0 && (
                      <p className="text-sm">
                        All assets appear to pass outside of probate through beneficiary designations, joint ownership, or trusts. Formal probate should not be necessary.
                      </p>
                    )}
                    {probateAssets > 0 && probateAssets <= 100000 && (
                      <p className="text-sm">
                        The probate estate is under $100,000. After waiting 6 months from date of death, you may be able to use an Illinois Small Estate Affidavit instead of formal probate. This simplified process is faster and less expensive.
                      </p>
                    )}
                    {probateAssets > 100000 && (
                      <p className="text-sm">
                        The probate estate exceeds $100,000. Formal probate will likely be required to transfer these assets. Contact an estate planning attorney to discuss your options and begin the probate process.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-600 italic">
                Note: This calculator provides an estimate only. Actual probate requirements depend on multiple factors including how assets are titled, beneficiary designations, creditor claims, and heir agreements. Consult an attorney for advice specific to your situation.
              </div>
            </div>

            <h2 id="small-estate-alternative" className="text-2xl font-bold mt-12 mb-4">
              Small Estate Affidavit Alternative
            </h2>

            <p className="mb-6">
              Illinois law provides a simplified alternative to formal probate for smaller estates. The small estate affidavit (755 ILCS 5/25-1) allows families to transfer estate assets without court involvement when specific requirements are met.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <h3 className="font-bold text-lg mb-4">Requirements for Small Estate Affidavit</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Estate Value Under $100,000:</span> The gross value of the entire probate estate must not exceed $100,000
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Six-Month Waiting Period:</span> At least 6 months must have passed since the date of death
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">No Pending Probate:</span> No petition for probate can be pending or already granted in Illinois
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Proper Authorization:</span> The person filing must be either named in the will or be an heir under Illinois intestacy laws
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Heir Agreement:</span> All heirs and beneficiaries must agree on the distribution of assets
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2 text-green-700">
                  <CheckCircle2 className="w-6 h-6" />
                  Advantages of Small Estate Affidavit
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>No court filing or court supervision required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Much lower costs (typically under $500 vs $3,000-$10,000)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Faster process (2-4 weeks vs 6-12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Less paperwork and simpler procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>More privacy (no public court records)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2 text-amber-700">
                  <AlertCircle className="w-6 h-6" />
                  Limitations to Consider
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Only available for estates under $100,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Must wait full 6 months from date of death</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Affiant becomes personally liable for estate debts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Not available if heirs disagree about distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Less legal protection than supervised probate</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 id="common-scenarios" className="text-2xl font-bold mt-12 mb-4">
              Common Scenarios Explained
            </h2>

            <p className="mb-6">
              Real-world examples help illustrate when probate is and isn't required. Review these common scenarios to better understand how Illinois probate laws apply.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Scenario 1: Home in Joint Tenancy, Bank Account with POD',
                  situation: 'Mom owned a house worth $300,000 with dad as "joint tenants with right of survivorship." She had a checking account ($45,000) designated "POD to children equally" and an IRA ($200,000) naming her children as beneficiaries.',
                  analysis: 'The house transfers automatically to dad through joint tenancy. The checking account goes directly to the children through the POD designation. The IRA passes to the children through the beneficiary designation. Total probate estate: $0.',
                  result: 'Probate NOT required',
                  resultColor: 'text-green-600'
                },
                {
                  title: 'Scenario 2: House Solely Owned, Small Bank Account',
                  situation: 'Dad owned a condo worth $175,000 in his name only. He had a checking account with $8,000 and personal property worth $12,000. His will leaves everything to his three children equally.',
                  analysis: 'The condo is titled solely in dad\'s name, making it a probate asset. Total probate estate: $195,000 (house + bank account + personal property). This exceeds the $100,000 small estate limit.',
                  result: 'Formal probate REQUIRED',
                  resultColor: 'text-red-600'
                },
                {
                  title: 'Scenario 3: Only Bank Accounts Under $100,000',
                  situation: 'Aunt had three bank accounts totaling $87,000 in her name only with no beneficiary designations. She had no real estate or other significant assets. She died without a will.',
                  analysis: 'The bank accounts are probate assets. Total probate estate: $87,000. This is under the $100,000 threshold, and at least 6 months have passed since death.',
                  result: 'Small Estate Affidavit available',
                  resultColor: 'text-blue-600'
                },
                {
                  title: 'Scenario 4: Everything in a Properly Funded Trust',
                  situation: 'Grandma created a revocable living trust and properly re-titled her house ($250,000), bank accounts ($150,000), and brokerage account ($300,000) into the trust. The trust names her children as beneficiaries.',
                  analysis: 'All assets are held in the trust and will distribute according to the trust terms. The successor trustee can distribute assets without court involvement. Total probate estate: $0.',
                  result: 'Probate NOT required',
                  resultColor: 'text-green-600'
                },
                {
                  title: 'Scenario 5: House with Transfer-on-Death Instrument',
                  situation: 'Uncle owned a house ($180,000) with a properly executed and recorded Transfer-on-Death Instrument naming his daughter as beneficiary. He had a checking account ($25,000) with no POD designation.',
                  analysis: 'The house transfers directly to the daughter through the TODI without probate. The checking account is a probate asset. Total probate estate: $25,000 (under the $100,000 limit).',
                  result: 'Small Estate Affidavit available for bank account',
                  resultColor: 'text-blue-600'
                },
                {
                  title: 'Scenario 6: Blended Family with Complex Assets',
                  situation: 'Father had children from two marriages. He owned a house with his second wife as joint tenants ($400,000), had an IRA naming only his second wife ($300,000), and a separate investment account ($125,000) in his name only that he wanted split among all his children.',
                  analysis: 'The house transfers to the wife through joint tenancy. The IRA goes to the wife as named beneficiary. The investment account is a probate asset: $125,000. Because this exceeds $100,000 and involves a blended family with potential disagreements, formal probate is advisable.',
                  result: 'Formal probate REQUIRED',
                  resultColor: 'text-red-600'
                }
              ].map((scenario, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedScenario(expandedScenario === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-gray-900">{scenario.title}</span>
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
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm text-gray-600">ANALYSIS:</h4>
                        <p className="text-gray-700 leading-relaxed">{scenario.analysis}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <h4 className="font-semibold mb-2 text-sm text-gray-600">RESULT:</h4>
                        <p className={`font-bold ${scenario.resultColor}`}>{scenario.result}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 id="timeline-and-process" className="text-2xl font-bold mt-12 mb-4">
              Probate Timeline and Process
            </h2>

            <p className="mb-6">
              Understanding the probate timeline helps families plan appropriately and set realistic expectations about how long estate settlement will take.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#4a708b]" />
                Typical Illinois Probate Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-bold text-[#4a708b]">Week 1-2</div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">File Petition for Probate</div>
                    <p className="text-sm text-gray-700">Executor or family member files petition with circuit court in the county where deceased lived. Obtain death certificates and locate will if one exists.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-bold text-[#4a708b]">Week 3-4</div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Court Hearing and Letters of Office</div>
                    <p className="text-sm text-gray-700">Attend initial court hearing. Judge admits will to probate and issues Letters of Office appointing executor or administrator.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-bold text-[#4a708b]">Month 2-3</div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Notice to Heirs and Creditors</div>
                    <p className="text-sm text-gray-700">Send required notices to all heirs and beneficiaries. Publish notice to creditors in local newspaper. Begin inventory of estate assets.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-bold text-[#4a708b]">Month 3-6</div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Creditor Claims Period</div>
                    <p className="text-sm text-gray-700">Creditors have 6 months from publication of notice to file claims. Executor reviews and pays or contests claims. Pay ongoing estate expenses.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-bold text-[#4a708b]">Month 4-8</div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Asset Management and Tax Returns</div>
                    <p className="text-sm text-gray-700">Manage estate assets, sell property if needed. File final income tax return for deceased and estate tax return if applicable. Obtain tax clearances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-bold text-[#4a708b]">Month 6-12</div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Final Distribution and Closing</div>
                    <p className="text-sm text-gray-700">After creditor period closes and all taxes paid, petition court for authority to distribute assets. Distribute assets to beneficiaries. File final accounting with court. Close estate.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded border border-blue-300">
                <p className="text-sm font-semibold text-[#4a708b] mb-2">Total Expected Timeline:</p>
                <p className="text-sm text-gray-700">
                  Simple estates: 6-9 months | Average estates: 9-12 months | Complex estates: 12-24+ months
                </p>
              </div>
            </div>

            <h2 id="avoiding-probate" className="text-2xl font-bold mt-12 mb-4">
              Strategies to Avoid Probate
            </h2>

            <p className="mb-6">
              While probate serves important legal functions, many people prefer to avoid it due to the time, cost, and public nature of the process. Illinois law provides several legal mechanisms to transfer property at death without probate.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-emerald-600" />
                  Revocable Living Trusts
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Create a revocable living trust and transfer assets into the trust during your lifetime. At death, the successor trustee distributes trust assets according to your instructions without probate.
                </p>
                <div className="text-xs text-emerald-700 font-semibold">
                  Best for: Real estate, investment accounts, valuable personal property
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Joint Ownership with Right of Survivorship
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Hold property as joint tenants with right of survivorship. The property automatically transfers to the surviving owner(s) at death without probate.
                </p>
                <div className="text-xs text-blue-700 font-semibold">
                  Best for: Primary residence with spouse, shared bank accounts
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-purple-600" />
                  Transfer-on-Death Designations
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Add POD (payable-on-death) designations to bank accounts, TOD (transfer-on-death) to brokerage accounts, or record a TODI for real estate. Assets transfer directly to named beneficiaries.
                </p>
                <div className="text-xs text-purple-700 font-semibold">
                  Best for: Bank accounts, investment accounts, Illinois real estate
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-amber-600" />
                  Beneficiary Designations
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Ensure all retirement accounts, life insurance policies, and annuities have up-to-date beneficiary designations. These assets transfer directly to beneficiaries outside probate.
                </p>
                <div className="text-xs text-amber-700 font-semibold">
                  Best for: 401(k)s, IRAs, life insurance, pensions, annuities
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Important Considerations for Probate Avoidance</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Probate avoidance strategies require proper execution and maintenance. Review and update beneficiary designations regularly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Creating a trust without funding it (transferring assets into it) does not avoid probate. Asset titling is crucial.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Joint ownership can create unintended consequences including gift tax issues, creditor exposure, and loss of control.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Probate avoidance doesn't eliminate the need for tax planning, creditor protection, or proper estate planning documents.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Work with an experienced estate planning attorney to ensure your probate avoidance strategy is properly implemented.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 id="frequently-asked-questions" className="text-2xl font-bold mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-8">
              {[
                {
                  question: 'Does having a will avoid probate in Illinois?',
                  answer: 'No. A will does not avoid probate. A will is a document that tells the probate court how you want your assets distributed, but the will itself must be admitted to probate for those instructions to be carried out. A will makes probate easier by providing clear instructions and naming an executor, but it does not eliminate the need for probate. To avoid probate, you need to use other estate planning tools such as trusts, joint ownership, beneficiary designations, or transfer-on-death instruments.'
                },
                {
                  question: 'How much does probate cost in Illinois?',
                  answer: 'Probate costs in Illinois vary based on estate complexity, but typical costs include: court filing fees ($300-$500), attorney fees ($3,000-$10,000 or more, often 2-4% of estate value), executor fees (reasonable compensation, often 1-2% of estate value), publication costs for creditor notice ($100-$200), appraisal fees if needed ($300-$500 per property), and accounting fees if complex ($500-$2,000+). For a $300,000 estate, total costs typically range from $8,000 to $15,000. Contested estates or those with complex assets cost significantly more.'
                },
                {
                  question: 'Can I handle probate myself without an attorney?',
                  answer: 'Illinois law does not require you to hire an attorney for probate. However, the probate process involves complex legal procedures, court filings, deadlines, and potential liability issues. Most executors hire attorneys because: probate involves detailed legal forms and procedures, mistakes can result in personal liability, court rules are complex and strictly enforced, creditor claims must be properly handled, and disputes among heirs require legal expertise. For simple estates under $100,000, consider the small estate affidavit instead. For larger estates, the cost of attorney fees is usually justified by the protection and expertise provided.'
                },
                {
                  question: 'What happens if someone dies without a will in Illinois?',
                  answer: 'When someone dies without a will (called dying "intestate"), Illinois intestacy laws (755 ILCS 5/2-1) determine who inherits. The distribution depends on surviving family members: If survived by spouse and descendants (children/grandchildren), spouse receives 1/2 and descendants share 1/2. If survived by spouse but no descendants, spouse receives entire estate. If survived by descendants but no spouse, descendants share entire estate equally. If no spouse or descendants, estate goes to parents, then siblings, then more distant relatives in a specific order. Probate is still required for intestate estates exceeding $100,000. The court will appoint an administrator to handle the estate since no executor is named.'
                },
                {
                  question: 'How long do you have to file probate after death in Illinois?',
                  answer: 'Illinois law does not impose a strict deadline to file for probate. However, several practical considerations create informal deadlines: Creditors must be notified within reasonable time to protect the estate from liability. Estate tax returns have filing deadlines (9 months for federal, 9 months for Illinois). Interest and penalties accrue on unpaid debts and taxes. Real estate and other assets may deteriorate without proper management. For small estates under $100,000, you must wait at least 6 months before using a small estate affidavit. Most estates are opened within 1-3 months after death, though you can wait longer if there are valid reasons (searching for a will, locating heirs, etc.).'
                },
                {
                  question: 'Can probate be reopened after it is closed?',
                  answer: 'Yes, probate can be reopened in certain circumstances under Illinois law, including: Discovery of previously unknown assets after closing, fraud or mistake in the original probate proceedings, contested claims that arise after closing, will contest filed within appropriate time limits, or need to pursue wrongful death claims or other litigation on behalf of the estate. However, reopening probate is complex and requires petitioning the court with valid reasons. This is one reason why thorough asset discovery and proper notice to creditors and heirs during initial probate is so important. If you believe probate should be reopened, consult an experienced probate attorney immediately as time limits may apply.'
                },
                {
                  question: 'What is supervised versus unsupervised probate?',
                  answer: 'Illinois allows two types of probate administration: Supervised Administration requires court approval for most actions, including selling assets, distributing property, and paying claims. The executor must file regular accountings with the court. This provides maximum oversight but takes longer and costs more. Unsupervised Administration (also called independent administration) allows the executor to act without court approval for most actions. The executor has more flexibility and the process moves faster. A final accounting is still required at closing. Most Illinois probates are unsupervised unless: the will requires supervision, heirs request it, complex disputes exist, or the court determines supervision is necessary to protect the estate. Your probate attorney can advise which type is appropriate for your situation.'
                },
                {
                  question: 'Do all assets have to go through probate?',
                  answer: 'No. Only assets owned solely by the deceased in their individual name with no beneficiary designation require probate. Assets that automatically pass outside probate include: property held in joint tenancy with right of survivorship, accounts with valid TOD or POD designations, assets held in trusts, life insurance proceeds with named beneficiaries, retirement accounts with beneficiary designations, real estate with properly recorded transfer-on-death instruments, and certain small assets like vehicles under specific value limits. Effective estate planning focuses on maximizing assets that pass outside probate while ensuring proper distribution of probate assets through a will or intestacy laws. Use the estate value calculator earlier in this article to estimate your probate estate value.'
                }
              ].map((faq, index) => (
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

            <h2 id="when-to-seek-help" className="text-2xl font-bold mt-12 mb-4">
              When to Seek Legal Help
            </h2>

            <p className="mb-6">
              While this guide provides comprehensive information about Illinois probate requirements, certain situations warrant professional legal assistance. An experienced probate attorney can help navigate complex situations and ensure proper estate administration.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                Consider Consulting an Attorney If:
              </h3>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">The estate value is close to $100,000 and you're uncertain about valuations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">The estate includes real estate or business interests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">There are disputes among heirs or beneficiaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Questions exist about will validity or proper execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Significant debts or creditor claims must be resolved</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Estate tax planning or returns are necessary</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">You're unsure how to identify or locate all heirs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Out-of-state property requires ancillary probate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">You want to establish probate-avoidance strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Complex family situations (blended families, minor children)</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              At Illinois Estate Law, Chicago estate planning attorney Mary Liberty helps families navigate probate requirements, implement probate-avoidance strategies, and administer estates efficiently. Whether you need help determining if probate is required, want to establish an estate plan that avoids probate, or need guidance administering an estate, we provide the experienced counsel you need.
            </p>

            <p className="mb-6">
              Contact Illinois Estate Law today at <a href="tel:3123730731" className="text-[#4a708b] hover:underline font-semibold">(312) 373-0731</a> or <a href="/contact" className="text-[#4a708b] hover:underline font-semibold">schedule a consultation online</a> to discuss your probate questions or estate planning needs.
            </p>

            <BlogNavigation
              previousPost={previous ? { title: previous.title, url: previous.url } : undefined}
              nextPost={next ? { title: next.title, url: next.url } : undefined}
            />

            <RelatedArticles
              articles={relatedPosts.map(post => ({
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/when-is-probate-required-in-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/when-is-probate-required-in-illinois/')}&text=${encodeURIComponent('When Is Probate Required in Illinois?')}`}
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
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/when-is-probate-required-in-illinois/')}&title=${encodeURIComponent('When Is Probate Required in Illinois?')}`}
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
