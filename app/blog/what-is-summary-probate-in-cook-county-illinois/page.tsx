'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calculator, CircleCheck as CheckCircle2, Circle as XCircle, CircleAlert as AlertCircle, FileText, Clock, DollarSign, Scale, ChevronDown, ChevronUp, Users, Chrome as Home, Briefcase } from 'lucide-react';

export default function SummaryProbatePage() {
  const [showEligibilityTool, setShowEligibilityTool] = useState(false);
  const [estateValue, setEstateValue] = useState('');
  const [hasWill, setHasWill] = useState<string>('');
  const [allBeneficiariesAgree, setAllBeneficiariesAgree] = useState<string>('');
  const [eligibilityResult, setEligibilityResult] = useState<'eligible' | 'notEligible' | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeComparison, setActiveComparison] = useState<'formal' | 'small-estate'>('formal');

  const calculateEligibility = () => {
    const value = parseFloat(estateValue);
    if (value <= 100000 && hasWill === 'yes' && allBeneficiariesAgree === 'yes') {
      setEligibilityResult('eligible');
    } else {
      setEligibilityResult('notEligible');
    }
  };

  const resetEligibilityTool = () => {
    setEstateValue('');
    setHasWill('');
    setAllBeneficiariesAgree('');
    setEligibilityResult(null);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does summary probate take in Cook County?",
      answer: "Summary probate in Cook County typically takes 6-9 months to complete, which is significantly faster than formal probate (12-18+ months). The timeline depends on court schedules, beneficiary cooperation, and whether any issues arise during the process."
    },
    {
      question: "Can I use summary probate if the estate is worth $101,000?",
      answer: "No. The $100,000 threshold is a hard limit set by Illinois law (755 ILCS 5/25-1). If the estate exceeds $100,000, you must use formal probate. However, certain assets don't count toward this limit, such as jointly owned property, assets with beneficiary designations, and property held in trust."
    },
    {
      question: "What happens if beneficiaries disagree during summary probate?",
      answer: "Summary probate requires all beneficiaries to agree to its use. If even one beneficiary objects, the court will convert the case to formal probate. This is why obtaining written consent from all beneficiaries before filing is crucial."
    },
    {
      question: "Do I need a lawyer for summary probate in Cook County?",
      answer: "While not legally required, having an attorney is highly recommended. Summary probate still involves complex legal procedures, court filings, and strict deadlines. An experienced probate attorney can help avoid costly mistakes and ensure the process goes smoothly."
    },
    {
      question: "What assets count toward the $100,000 limit?",
      answer: "The $100,000 limit includes probate assets only—those owned solely by the decedent without beneficiary designations. It does NOT include: jointly owned property with right of survivorship, life insurance with named beneficiaries, retirement accounts with beneficiaries, payable-on-death accounts, or property held in trust."
    },
    {
      question: "Can summary probate be used if there's no will?",
      answer: "No. Summary probate in Illinois requires a valid will. If someone dies without a will (intestate), you cannot use summary probate, regardless of the estate size. You would need to use formal probate or, if the estate is small enough, a small estate affidavit."
    },
    {
      question: "How much does summary probate cost in Cook County?",
      answer: "Summary probate costs in Cook County typically range from $3,000-$6,000 in attorney fees, plus court filing fees of approximately $500-$800. This is significantly less than formal probate, which can cost $8,000-$15,000 or more. The exact cost depends on the estate's complexity and whether any issues arise."
    },
    {
      question: "What's the difference between summary probate and a small estate affidavit?",
      answer: "Both are for estates under $100,000, but they have different requirements. Summary probate requires a will and court supervision, while a small estate affidavit doesn't require a will and avoids court entirely. However, a small estate affidavit requires waiting 6 months after death and has restrictions on collecting certain assets. Summary probate is faster and more comprehensive but requires court involvement."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#4A708B] hover:text-[#2D3E50] font-['Plus_Jakarta_Sans'] font-semibold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16 sm:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-['Plus_Jakarta_Sans'] font-semibold">
              Probate
            </span>
            <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">•</span>
            <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 min read
            </span>
          </div>

          <h1 className="font-['Lobster_Two'] text-[36px] sm:text-[48px] lg:text-[56px] leading-[40px] sm:leading-[52px] lg:leading-[60px] text-white mb-6">
            What Is Summary Probate in Cook County, Illinois — and When Can You Use It?
          </h1>

          <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mb-8">
            Discover when summary probate (summary administration) is available in Cook County, Illinois, and whether it's the right choice for your estate.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm">
            <span>By Illinois Estate Law</span>
            <span>•</span>
            <time>March 19, 2026</time>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-[900px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            When someone passes away in Cook County, Illinois, their estate often needs to go through probate—a court-supervised process of distributing assets and settling debts. But not all probate cases are created equal. If the estate is relatively small and straightforward, you may be able to use <strong>summary probate</strong> (also called summary administration), a streamlined version that saves time, money, and stress.
          </p>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            But what exactly is summary probate? When can you use it? And how does it compare to other probate alternatives? This comprehensive guide answers all your questions and helps you determine whether summary probate is right for your situation.
          </p>
        </div>

        {/* Quick Take Box */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border-2 border-blue-100">
          <h2 className="text-2xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            The Quick Take
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 font-['Plus_Jakarta_Sans']">
                Summary probate is available for estates under $100,000 with a valid will
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 font-['Plus_Jakarta_Sans']">
                It takes 6-9 months vs. 12-18+ months for formal probate
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 font-['Plus_Jakarta_Sans']">
                All beneficiaries must agree to use summary probate
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 font-['Plus_Jakarta_Sans']">
                Costs range from $3,000-$6,000 vs. $8,000-$15,000+ for formal probate
              </p>
            </div>
          </div>
        </div>

        {/* What Is Summary Probate */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            What Is Summary Probate?
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Summary probate, officially called "summary administration" under Illinois law (755 ILCS 5/25-1), is a simplified probate process designed for smaller estates. It maintains court oversight but with fewer procedural requirements, shorter timelines, and reduced costs compared to formal probate.
          </p>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Think of it as the middle ground between full formal probate and avoiding probate entirely. You still have the court's supervision and authority to handle the estate, but with a more streamlined process that reduces administrative burden.
          </p>

          <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-4">
              Key Features of Summary Probate:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4A708B] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                  <strong>Simplified filing requirements</strong> with less paperwork than formal probate
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4A708B] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                  <strong>Shortened timeline</strong> typically taking 6-9 months instead of 12-18+ months
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4A708B] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                  <strong>Reduced court appearances</strong> and fewer status hearings
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4A708B] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                  <strong>Lower costs</strong> due to less attorney time and fewer court fees
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4A708B] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                  <strong>Court supervision maintained</strong> providing legal authority and oversight
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            Who Qualifies for Summary Probate in Cook County?
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            To use summary probate in Cook County, you must meet <strong>all</strong> of the following requirements:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border-2 border-green-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900">
                  1. Estate Value
                </h3>
              </div>
              <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                The total value of probate assets must be <strong>$100,000 or less</strong>. This includes only assets in the decedent's name alone—not jointly owned property, beneficiary-designated accounts, or trust assets.
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-blue-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900">
                  2. Valid Will
                </h3>
              </div>
              <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                The decedent must have left a <strong>valid will</strong>. Summary probate is not available for intestate estates (those without a will). If there's no will, consider a <Link href="/blog/how-to-complete-a-small-estate-affidavit-in-illinois" className=\"text-[#4A708B] hover:underline font-semibold">small estate affidavit</Link> instead.
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-purple-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900">
                  3. Beneficiary Consent
                </h3>
              </div>
              <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>All beneficiaries must agree</strong> to use summary probate. If even one beneficiary objects, the court will require formal probate. Written consent from all beneficiaries is required.
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-orange-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Scale className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900">
                  4. Court Approval
                </h3>
              </div>
              <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                The <strong>court must approve</strong> the use of summary administration. Even if you meet all other requirements, the judge has discretion to require formal probate if circumstances warrant it.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Eligibility Tool */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-[#4A708B] to-[#5B8AAA] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-8 h-8" />
              <h2 className="text-2xl font-['Plus_Jakarta_Sans'] font-bold">
                Check Your Eligibility
              </h2>
            </div>

            <p className="text-white/90 font-['Plus_Jakarta_Sans'] mb-6">
              Answer a few quick questions to see if summary probate might be an option for your situation.
            </p>

            {!showEligibilityTool ? (
              <button
                onClick={() => setShowEligibilityTool(true)}
                className="bg-white text-[#4A708B] px-8 py-4 rounded-xl font-['Plus_Jakarta_Sans'] font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Eligibility Check
              </button>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-6">
                <div>
                  <label className="block text-white font-['Plus_Jakarta_Sans'] font-semibold mb-3">
                    What is the total value of probate assets?
                  </label>
                  <input
                    type="number"
                    value={estateValue}
                    onChange={(e) => setEstateValue(e.target.value)}
                    placeholder="Enter dollar amount"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 font-['Plus_Jakarta_Sans'] focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <p className="text-white/70 text-sm font-['Plus_Jakarta_Sans'] mt-2">
                    Include only assets in decedent's name alone (not joint accounts, beneficiary accounts, or trust property)
                  </p>
                </div>

                <div>
                  <label className="block text-white font-['Plus_Jakarta_Sans'] font-semibold mb-3">
                    Did the decedent have a valid will?
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setHasWill('yes')}
                      className={`flex-1 px-4 py-3 rounded-lg font-['Plus_Jakarta_Sans'] font-semibold transition-colors ${
                        hasWill === 'yes'
                          ? 'bg-white text-[#4A708B]'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setHasWill('no')}
                      className={`flex-1 px-4 py-3 rounded-lg font-['Plus_Jakarta_Sans'] font-semibold transition-colors ${
                        hasWill === 'no'
                          ? 'bg-white text-[#4A708B]'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-['Plus_Jakarta_Sans'] font-semibold mb-3">
                    Do all beneficiaries agree to use summary probate?
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setAllBeneficiariesAgree('yes')}
                      className={`flex-1 px-4 py-3 rounded-lg font-['Plus_Jakarta_Sans'] font-semibold transition-colors ${
                        allBeneficiariesAgree === 'yes'
                          ? 'bg-white text-[#4A708B]'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setAllBeneficiariesAgree('no')}
                      className={`flex-1 px-4 py-3 rounded-lg font-['Plus_Jakarta_Sans'] font-semibold transition-colors ${
                        allBeneficiariesAgree === 'no'
                          ? 'bg-white text-[#4A708B]'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={calculateEligibility}
                    disabled={!estateValue || !hasWill || !allBeneficiariesAgree}
                    className="flex-1 bg-white text-[#4A708B] px-6 py-3 rounded-lg font-['Plus_Jakarta_Sans'] font-bold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Check Eligibility
                  </button>
                  <button
                    onClick={resetEligibilityTool}
                    className="px-6 py-3 rounded-lg font-['Plus_Jakarta_Sans'] font-semibold bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    Reset
                  </button>
                </div>

                {eligibilityResult && (
                  <div className={`p-6 rounded-xl ${
                    eligibilityResult === 'eligible'
                      ? 'bg-green-500/20 border-2 border-green-300'
                      : 'bg-red-500/20 border-2 border-red-300'
                  }`}>
                    <div className="flex items-start gap-3">
                      {eligibilityResult === 'eligible' ? (
                        <>
                          <CheckCircle2 className="w-6 h-6 text-green-100 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-white mb-2">
                              You May Qualify for Summary Probate!
                            </h3>
                            <p className="text-white/90 font-['Plus_Jakarta_Sans'] mb-4">
                              Based on your answers, summary probate appears to be an option. The next step is to consult with a probate attorney who can review the specifics of your case and guide you through the process.
                            </p>
                            <Link
                              href="/book-consultation"
                              className="inline-block bg-white text-[#4A708B] px-6 py-3 rounded-lg font-['Plus_Jakarta_Sans'] font-bold hover:bg-gray-100 transition-colors"
                            >
                              Schedule a Consultation
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-6 h-6 text-red-100 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-white mb-2">
                              Summary Probate May Not Be Available
                            </h3>
                            <p className="text-white/90 font-['Plus_Jakarta_Sans'] mb-4">
                              Based on your answers, you may need to use formal probate or explore other options.
                              {parseFloat(estateValue) > 100000 && ' The estate exceeds the $100,000 limit for summary probate.'}
                              {hasWill === 'no' && ' Summary probate requires a valid will. Consider a small estate affidavit if the estate is under $100,000.'}
                              {allBeneficiariesAgree === 'no' && ' All beneficiaries must agree to use summary probate.'}
                            </p>
                            <Link
                              href="/chicago-probate-lawyer"
                              className="inline-block bg-white text-[#4A708B] px-6 py-3 rounded-lg font-['Plus_Jakarta_Sans'] font-bold hover:bg-gray-100 transition-colors"
                            >
                              Explore Probate Options
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Assets That Count */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            What Assets Count Toward the $100,000 Limit?
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Understanding which assets count toward the $100,000 threshold is crucial for determining eligibility. Only <strong>probate assets</strong>—those owned solely by the decedent without beneficiary designations—count toward the limit.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 rounded-xl border-2 border-red-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900">
                  Assets That DO Count
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Home className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Real estate in decedent's name alone</span>
                </li>
                <li className="flex items-start gap-2">
                  <Briefcase className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Bank accounts without beneficiaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <Briefcase className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Investment accounts in decedent's name only</span>
                </li>
                <li className="flex items-start gap-2">
                  <Briefcase className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Vehicles titled solely to decedent</span>
                </li>
                <li className="flex items-start gap-2">
                  <Briefcase className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Personal property (furniture, jewelry, etc.)</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl border-2 border-green-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900">
                  Assets That DON'T Count
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Jointly owned property (with right of survivorship)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Life insurance with named beneficiaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Retirement accounts (401k, IRA) with beneficiaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Payable-on-death (POD) bank accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Property held in a <Link href="/chicago-revocable-trusts-lawyer" className="text-[#4A708B] hover:underline font-semibold">revocable living trust</Link></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl border-2 border-blue-200 p-6">
            <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              Important Note
            </h3>
            <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
              This is why proper <Link href="/chicago-wills-lawyer" className="text-[#4A708B] hover:underline font-semibold">estate planning</Link> is so valuable. By using beneficiary designations, joint ownership, <Link href="/blog/how-transfer-on-death-instruments-work-in-illinois" className=\"text-[#4A708B] hover:underline font-semibold">transfer-on-death instruments</Link>, and trusts, you can often avoid probate entirely—regardless of your estate's total value.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            How Does Summary Probate Compare to Other Options?
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            To help you understand where summary probate fits in, let's compare it to the two main alternatives: formal probate and small estate affidavits.
          </p>

          <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden mb-6">
            <div className="flex border-b-2 border-gray-200">
              <button
                onClick={() => setActiveComparison('formal')}
                className={`flex-1 px-6 py-4 font-['Plus_Jakarta_Sans'] font-bold transition-colors ${
                  activeComparison === 'formal'
                    ? 'bg-[#4A708B] text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                vs. Formal Probate
              </button>
              <button
                onClick={() => setActiveComparison('small-estate')}
                className={`flex-1 px-6 py-4 font-['Plus_Jakarta_Sans'] font-bold transition-colors ${
                  activeComparison === 'small-estate'
                    ? 'bg-[#4A708B] text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                vs. Small Estate Affidavit
              </button>
            </div>

            <div className="p-6">
              {activeComparison === 'formal' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-3">
                      Summary Probate vs. Formal Probate
                    </h3>
                    <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
                      Both processes involve court supervision, but summary probate is significantly streamlined for smaller estates.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                        Summary Probate Advantages
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">6-9 months timeline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">$3,000-$6,000 typical cost</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">Fewer court hearings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">Less paperwork required</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                        Formal Probate Characteristics
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">12-18+ months timeline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">$8,000-$15,000+ typical cost</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">Multiple court appearances</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">Extensive documentation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed">
                      <strong>Bottom line:</strong> If you qualify for summary probate, it can save you 6-12 months and $5,000-$10,000 compared to formal probate. Learn more about <Link href="/chicago-probate-lawyer" className=\"text-[#4A708B] hover:underline font-semibold">probate in Illinois</Link>.
                    </p>
                  </div>
                </div>
              )}

              {activeComparison === 'small-estate' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-3">
                      Summary Probate vs. Small Estate Affidavit
                    </h3>
                    <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
                      Both options are for estates under $100,000, but they have different requirements and processes.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-4 font-['Plus_Jakarta_Sans'] font-bold text-gray-900">Feature</th>
                          <th className="text-left py-3 px-4 font-['Plus_Jakarta_Sans'] font-bold text-gray-900">Summary Probate</th>
                          <th className="text-left py-3 px-4 font-['Plus_Jakarta_Sans'] font-bold text-gray-900">Small Estate Affidavit</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-700">Estate Limit</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">Under $100,000</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">Under $100,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-700">Will Required?</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">Yes</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">No</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-700">Waiting Period</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">Can file immediately</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">Must wait 6 months</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-700">Court Involvement</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">Yes (supervised)</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">No (avoid court)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-700">Timeline</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">6-9 months total</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">6+ months (after waiting)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-700">Typical Cost</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">$3,000-$6,000</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">$1,500-$3,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-700">Real Estate</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">Can transfer</td>
                          <td className="py-3 px-4 font-['Plus_Jakarta_Sans'] text-gray-700">Limited ability</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed">
                      <strong>When to choose each:</strong> Use summary probate when you have a will and need to act quickly or transfer real estate. Use a <Link href="/blog/how-to-complete-a-small-estate-affidavit-in-illinois" className=\"text-[#4A708B] hover:underline font-semibold">small estate affidavit</Link> when there's no will and you can wait 6 months, or when the estate consists mainly of personal property and bank accounts.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            The Summary Probate Process in Cook County
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Here's what to expect when pursuing summary probate in Cook County:
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4A708B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-['Plus_Jakarta_Sans'] font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    File the Petition
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    File a petition for summary administration with the Cook County Probate Court, along with the original will, death certificate, and a list of heirs and assets. You'll also need to file consents from all beneficiaries agreeing to summary probate.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4A708B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-['Plus_Jakarta_Sans'] font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Notice to Interested Parties
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Provide notice to all beneficiaries, heirs, and potential creditors as required by law. This typically includes publishing notice in a local newspaper and sending direct notice to known parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4A708B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-['Plus_Jakarta_Sans'] font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Court Approval Hearing
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Attend a hearing where the judge reviews the petition and supporting documents. If everything is in order and no objections are filed, the judge will approve summary administration and appoint the executor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4A708B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-['Plus_Jakarta_Sans'] font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Administer the Estate
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    The executor gathers assets, pays valid debts and taxes, and prepares for distribution. This includes closing bank accounts, selling property if necessary, and filing final tax returns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4A708B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-['Plus_Jakarta_Sans'] font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    File Final Accounting
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Submit a final accounting to the court showing all assets collected, debts paid, and proposed distributions to beneficiaries. This is simpler than formal probate's accounting requirements but still requires documentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4A708B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-['Plus_Jakarta_Sans'] font-bold">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Distribute Assets and Close Estate
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    After court approval of the final accounting, distribute assets to beneficiaries according to the will. File a petition for discharge to close the estate and release the executor from further duties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Costs */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            How Much Does Summary Probate Cost?
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Summary probate costs in Cook County typically include:
          </p>

          <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-200">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-1">
                    Attorney Fees
                  </h3>
                  <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">
                    Legal representation for the entire process
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#4A708B] text-lg">
                    $3,000 - $6,000
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-200">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-1">
                    Court Filing Fees
                  </h3>
                  <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">
                    Initial petition and other court filings
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#4A708B] text-lg">
                    $500 - $800
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-200">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-1">
                    Publication Costs
                  </h3>
                  <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">
                    Required legal notices in newspaper
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#4A708B] text-lg">
                    $200 - $400
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-200">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-1">
                    Bond (if required)
                  </h3>
                  <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">
                    May be waived in summary probate
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#4A708B] text-lg">
                    $0 - $500
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 pt-2">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 text-lg">
                    Total Estimated Cost
                  </h3>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#4A708B] text-2xl">
                    $3,700 - $7,700
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl border-2 border-green-200 p-6">
            <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-3 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              Cost Comparison
            </h3>
            <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
              Compared to formal probate (which typically costs $8,000-$15,000+), summary probate can save you <strong>$4,000-$10,000</strong> while still providing court supervision and legal authority to administer the estate.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            Common Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            <div className="bg-red-50 rounded-xl border-2 border-red-200 p-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Miscalculating Estate Value
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Accurately valuing assets is crucial. If you underestimate and the estate exceeds $100,000, the court may convert to formal probate—wasting time and money. Get professional appraisals for real estate and valuable personal property.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl border-2 border-red-200 p-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Failing to Get All Beneficiary Consents
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Summary probate requires written consent from <strong>all</strong> beneficiaries. If you proceed without everyone's agreement and someone objects later, the court will convert the case to formal probate, causing delays and additional costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl border-2 border-red-200 p-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Missing Deadlines
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Even though summary probate is streamlined, it still has strict deadlines for filing documents, publishing notices, and responding to creditor claims. Missing deadlines can result in penalties, rejected filings, or conversion to formal probate.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl border-2 border-red-200 p-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Attempting DIY Without Legal Help
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    While summary probate is simpler than formal probate, it still involves complex legal procedures. Mistakes can be costly and time-consuming to fix. An experienced <Link href="/chicago-probate-lawyer" className="text-[#4A708B] hover:underline font-semibold">probate attorney</Link> ensures everything is done correctly the first time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors text-left"
                >
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 text-lg">
                    {faq.question}
                  </h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#4A708B] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#4A708B] flex-shrink-0" />
                  )}
                </button>

                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* When to Avoid Summary Probate */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            When Summary Probate Isn't the Right Choice
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            While summary probate offers significant advantages, it's not appropriate in all situations. You should consider formal probate or other alternatives when:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-3">
                Estate Complexity
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Estate exceeds $100,000 in probate assets</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complex business interests or partnerships</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Assets in multiple states requiring ancillary probate</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-3">
                Family Disputes
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Beneficiaries disagree about estate administration</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Concerns about will validity or undue influence</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Known family conflicts or likely challenges</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-3">
                Creditor Issues
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Significant outstanding debts or potential claims</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Pending lawsuits against the estate</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tax issues requiring extended resolution time</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-3">
                Legal Requirements
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>No valid will (intestate estate)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Unable to obtain all beneficiary consents</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 font-['Plus_Jakarta_Sans']">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Court determines formal probate is necessary</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Avoid Probate */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
            <h2 className="text-2xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-4">
              The Best Solution: Avoid Probate Entirely
            </h2>

            <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
              While summary probate is better than formal probate, the best solution is often to avoid probate altogether through proper <Link href="/chicago-wills-lawyer" className="text-[#4A708B] hover:underline font-semibold">estate planning</Link>. With the right strategies, you can:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                  Eliminate Probate Delays
                </h3>
                <p className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">
                  Assets transfer immediately to beneficiaries instead of waiting 6-18 months
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                  Maintain Privacy
                </h3>
                <p className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">
                  Keep your estate details private instead of becoming public court records
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                  Reduce Costs
                </h3>
                <p className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">
                  Save thousands in court fees and attorney costs
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                  Simplify for Your Family
                </h3>
                <p className="text-gray-700 font-['Plus_Jakarta_Sans'] text-sm">
                  Spare your loved ones from court proceedings during a difficult time
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-3">
                Common Probate-Avoidance Strategies:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4A708B] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    <Link href="/chicago-revocable-trusts-lawyer" className="text-[#4A708B] hover:underline font-semibold">Revocable living trusts</Link> for comprehensive estate planning
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4A708B] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    <Link href="/blog/how-transfer-on-death-instruments-work-in-illinois" className="text-[#4A708B] hover:underline font-semibold">Transfer-on-death instruments (TODIs)</Link> for real estate
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4A708B] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    Joint ownership with right of survivorship
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4A708B] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    Beneficiary designations on financial accounts and life insurance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            Making the Right Choice for Your Estate
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Summary probate in Cook County offers a valuable middle ground—faster and cheaper than formal probate, but with more authority and oversight than a small estate affidavit. It's an excellent option for straightforward estates under $100,000 where all beneficiaries cooperate.
          </p>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            However, the best approach depends on your specific situation. Whether you're dealing with a current estate or planning for the future, consulting with an experienced estate planning attorney ensures you choose the right strategy and execute it correctly.
          </p>

          <div className="bg-gradient-to-br from-[#4A708B] to-[#5B8AAA] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-['Plus_Jakarta_Sans'] font-bold mb-4">
              Need Help with Probate or Estate Planning?
            </h3>
            <p className="text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
              Our experienced team can help you determine whether summary probate is right for your situation, guide you through the process, or develop an estate plan that avoids probate entirely.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-block bg-white text-[#4A708B] px-8 py-4 rounded-xl font-['Plus_Jakarta_Sans'] font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/chicago-probate-lawyer"
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-['Plus_Jakarta_Sans'] font-bold hover:bg-white/30 transition-colors border-2 border-white/30"
              >
                Learn About Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/when-is-probate-required-in-illinois"
              className="group bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#4A708B] transition-colors"
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-['Plus_Jakarta_Sans'] font-semibold mb-3">
                Probate
              </span>
              <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2 group-hover:text-[#4A708B] transition-colors">
                When Is Probate Required in Illinois?
              </h3>
              <p className="text-gray-600 font-['Plus_Jakarta_Sans'] text-sm">
                Understand when Illinois law requires probate and discover alternatives with our interactive tools.
              </p>
            </Link>

            <Link
              href="/blog/how-to-complete-a-small-estate-affidavit-in-illinois"
              className="group bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#4A708B] transition-colors"
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-['Plus_Jakarta_Sans'] font-semibold mb-3">
                Probate
              </span>
              <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2 group-hover:text-[#4A708B] transition-colors">
                How to Complete a Small Estate Affidavit in Illinois
              </h3>
              <p className="text-gray-600 font-['Plus_Jakarta_Sans'] text-sm">
                Complete guide to filing a small estate affidavit in Illinois for estates under $100,000.
              </p>
            </Link>

            <Link
              href="/chicago-revocable-trusts-lawyer"
              className="group bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#4A708B] transition-colors"
            >
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-['Plus_Jakarta_Sans'] font-semibold mb-3">
                Trusts
              </span>
              <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2 group-hover:text-[#4A708B] transition-colors">
                Revocable Living Trusts
              </h3>
              <p className="text-gray-600 font-['Plus_Jakarta_Sans'] text-sm">
                Learn how a revocable living trust can help you avoid probate entirely.
              </p>
            </Link>

            <Link
              href="/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate"
              className="group bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#4A708B] transition-colors"
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-['Plus_Jakarta_Sans'] font-semibold mb-3">
                Probate
              </span>
              <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2 group-hover:text-[#4A708B] transition-colors">
                So You've Been Named Executor
              </h3>
              <p className="text-gray-600 font-['Plus_Jakarta_Sans'] text-sm">
                A comprehensive guide to fulfilling your role as executor and navigating probate successfully.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
