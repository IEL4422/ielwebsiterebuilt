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
