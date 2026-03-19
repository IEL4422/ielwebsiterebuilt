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
      answer: "The $100,000 limit includes probate assets only - those owned solely by the decedent without beneficiary designations. It does NOT include: jointly owned property with right of survivorship, life insurance with named beneficiaries, retirement accounts with beneficiaries, payable-on-death accounts, or property held in trust."
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
            What Is Summary Probate in Cook County, Illinois - and When Can You Use It?
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

      <article className="max-w-[900px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            When someone passes away in Cook County, Illinois, their estate often needs to go through probate - a court-supervised process of distributing assets and settling debts. But not all probate cases are created equal. If the estate is relatively small and straightforward, you may be able to use <strong>summary probate</strong> (also called summary administration), a streamlined version that saves time, money, and stress.
          </p>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            But what exactly is summary probate? When can you use it? And how does it compare to other probate alternatives? This comprehensive guide answers all your questions and helps you determine whether summary probate is right for your situation.
          </p>
        </div>

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

          <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
            <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-4">
              Key Features of Summary Probate:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                  <strong>Streamlined Court Procedures:</strong> Fewer hearings, simplified paperwork, and faster processing times
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                  <strong>Reduced Legal Fees:</strong> Less attorney time required means lower overall costs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                  <strong>Court Supervision:</strong> Unlike small estate affidavits, you have court authority to handle complex matters
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                  <strong>Flexibility:</strong> Can handle most asset types and resolve disputes with court backing
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            Requirements for Summary Probate in Illinois
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Not every estate qualifies for summary probate. Illinois law sets specific requirements that must be met before you can use this streamlined process.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900">
                  Must Have
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    <strong>Valid Will:</strong> The deceased must have left a will
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    <strong>Small Estate:</strong> Probate assets under $100,000
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    <strong>Beneficiary Agreement:</strong> All beneficiaries consent to summary probate
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    <strong>Cook County Jurisdiction:</strong> Proper venue in Cook County courts
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900">
                  Disqualifiers
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    <strong>No Will:</strong> Died intestate (without a will)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    <strong>Estate Exceeds $100K:</strong> Probate assets over the threshold
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    <strong>Beneficiary Objection:</strong> Even one beneficiary refuses consent
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <span className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    <strong>Will Contest:</strong> Disputes over the will's validity
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mb-6">
            <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              Important Note About the $100,000 Threshold
            </h3>
            <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-3">
              Only <strong>probate assets</strong> count toward the $100,000 limit. Many assets pass outside of probate and don't count, including:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Joint tenancy property</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Life insurance with beneficiaries</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Retirement accounts (401k, IRA)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Payable-on-death accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Transfer-on-death deeds</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Trust assets</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            The Summary Probate Process in Cook County
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Understanding the step-by-step process helps you know what to expect when pursuing summary probate in Cook County. While simpler than formal probate, it still requires careful attention to legal requirements and deadlines.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#4A708B] text-white w-10 h-10 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    File the Petition
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-3">
                    The executor named in the will files a petition for summary administration with the Cook County Probate Court. This petition includes:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A708B] mt-1">•</span>
                      <span className="text-gray-700 font-['Plus_Jakarta_Sans']">The original will and death certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A708B] mt-1">•</span>
                      <span className="text-gray-700 font-['Plus_Jakarta_Sans']">A list of all assets and their values</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A708B] mt-1">•</span>
                      <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Names and addresses of all beneficiaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A708B] mt-1">•</span>
                      <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Consent forms signed by all beneficiaries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#4A708B] text-white w-10 h-10 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Court Review and Approval
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    The Cook County judge reviews the petition to ensure all requirements are met. If everything is in order, the court issues an order allowing summary administration and appoints the executor. This typically takes 2-4 weeks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#4A708B] text-white w-10 h-10 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Notify Creditors
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-3">
                    Even in summary probate, you must notify potential creditors by publishing a notice in a local newspaper for three consecutive weeks. Known creditors must receive direct written notice. Creditors then have 6 months to file claims.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#4A708B] text-white w-10 h-10 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Settle Debts and Pay Taxes
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-3">
                    The executor must:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A708B] mt-1">•</span>
                      <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Pay all valid creditor claims</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A708B] mt-1">•</span>
                      <span className="text-gray-700 font-['Plus_Jakarta_Sans']">File and pay final income taxes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A708B] mt-1">•</span>
                      <span className="text-gray-700 font-['Plus_Jakarta_Sans']">File estate tax returns if required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4A708B] mt-1">•</span>
                      <span className="text-gray-700 font-['Plus_Jakarta_Sans']">Close accounts and handle ongoing obligations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#4A708B] text-white w-10 h-10 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Distribute Assets
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    After paying all debts and taxes, the executor distributes the remaining assets according to the will. This includes transferring titles, distributing funds, and ensuring each beneficiary receives their inheritance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#4A708B] text-white w-10 h-10 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold flex-shrink-0">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Close the Estate
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    The executor files a final report with the court showing all assets collected, debts paid, and distributions made. Once the judge approves the final report, the estate is officially closed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            Summary Probate vs. Other Options
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Summary probate isn't the only option for handling a loved one's estate in Illinois. Understanding how it compares to alternatives helps you choose the best approach for your situation.
          </p>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveComparison('formal')}
              className={`px-6 py-3 rounded-lg font-['Plus_Jakarta_Sans'] font-bold transition-all ${
                activeComparison === 'formal'
                  ? 'bg-[#4A708B] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              vs. Formal Probate
            </button>
            <button
              onClick={() => setActiveComparison('small-estate')}
              className={`px-6 py-3 rounded-lg font-['Plus_Jakarta_Sans'] font-bold transition-all ${
                activeComparison === 'small-estate'
                  ? 'bg-[#4A708B] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              vs. Small Estate Affidavit
            </button>
          </div>

          {activeComparison === 'formal' && (
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left font-['Plus_Jakarta_Sans'] font-bold text-gray-900">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left font-['Plus_Jakarta_Sans'] font-bold text-[#4A708B]">
                        Summary Probate
                      </th>
                      <th className="px-6 py-4 text-left font-['Plus_Jakarta_Sans'] font-bold text-gray-600">
                        Formal Probate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Estate Size Limit
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Under $100,000
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        No limit
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Timeline
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        6-9 months
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        12-18+ months
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Attorney Fees
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        $3,000-$6,000
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        $8,000-$15,000+
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Court Hearings
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Minimal (1-2)
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Multiple (3-5+)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Will Required
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Yes
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        No (can be intestate)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Beneficiary Consent
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Required
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Not required
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeComparison === 'small-estate' && (
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left font-['Plus_Jakarta_Sans'] font-bold text-gray-900">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left font-['Plus_Jakarta_Sans'] font-bold text-[#4A708B]">
                        Summary Probate
                      </th>
                      <th className="px-6 py-4 text-left font-['Plus_Jakarta_Sans'] font-bold text-gray-600">
                        Small Estate Affidavit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Estate Size Limit
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Under $100,000
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Under $100,000
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Court Involvement
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Yes (supervised)
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        No (avoid court)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Waiting Period
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        None required
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        6 months after death
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Will Required
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Yes
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        No
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Cost Range
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        $3,000-$6,000
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        $500-$2,000
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Asset Restrictions
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Can handle all asset types
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Limited (no real estate)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-gray-900">
                        Best For
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Small estates needing court authority
                      </td>
                      <td className="px-6 py-4 font-['Plus_Jakarta_Sans'] text-gray-700">
                        Simple estates wanting to avoid court
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-6">
            Common Mistakes to Avoid
          </h2>

          <p className="text-lg text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">
            Even with a simplified process, mistakes can delay your case or convert it to formal probate. Here are the most common pitfalls and how to avoid them.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Miscalculating Estate Value
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-2">
                    <strong>The Problem:</strong> Failing to properly value assets or including non-probate assets in the calculation, leading to exceeding the $100,000 threshold.
                  </p>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    <strong>The Solution:</strong> Get professional appraisals for real estate, vehicles, and valuable personal property. Only count probate assets (those owned solely by the decedent without beneficiary designations).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Not Getting All Beneficiary Consents
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-2">
                    <strong>The Problem:</strong> Proceeding without written consent from every beneficiary named in the will, which will cause the court to reject your petition.
                  </p>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    <strong>The Solution:</strong> Track down all beneficiaries before filing. Use certified mail to document delivery of consent forms. If a beneficiary refuses, you'll need to use formal probate instead.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Inadequate Creditor Notice
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-2">
                    <strong>The Problem:</strong> Failing to properly publish notice to creditors or missing known creditors, which can expose you to personal liability for unpaid debts.
                  </p>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    <strong>The Solution:</strong> Follow Illinois law exactly: publish in an approved newspaper for three consecutive weeks and send direct notice to all known creditors by certified mail. Keep proof of all notices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Missing Tax Deadlines
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-2">
                    <strong>The Problem:</strong> Overlooking estate tax returns (Illinois Form 700) or final income tax returns, resulting in penalties, interest, and delayed distributions.
                  </p>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    <strong>The Solution:</strong> Work with a CPA or tax attorney to identify all required tax filings. Illinois estate tax applies to estates over $4 million. File extensions if needed to avoid penalties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-bold text-gray-900 mb-2">
                    Distributing Assets Too Early
                  </h3>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-2">
                    <strong>The Problem:</strong> Giving beneficiaries their inheritance before paying all debts, taxes, and expenses, which can make you personally liable for those obligations.
                  </p>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    <strong>The Solution:</strong> Wait until the creditor claim period expires (6 months), all debts and taxes are paid, and you have court approval before making final distributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="mb-12">
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
      </article>
    </main>
  );
}
