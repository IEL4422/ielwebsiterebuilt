'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, FileText, Heart, AlertCircle, CheckCircle } from 'lucide-react';

export default function HealthcareDirectivesPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Illinois Estate Law - Healthcare Directives",
            "description": "Experienced Chicago healthcare directive attorney helping Illinois residents create comprehensive advance directives, living wills, and medical powers of attorney.",
            "url": "https://www.illinoisestatelaw.com/chicago-healthcare-directives-lawyer/",
            "telephone": "+1-312-373-0731",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chicago",
              "addressRegion": "IL",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "State",
              "name": "Illinois"
            },
            "priceRange": "$$",
            "serviceType": "Healthcare Directives and Advance Directives Planning"
          })
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#2D3E50] via-[#4A708B] to-[#2D3E50] min-h-[400px] flex items-center py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="font-['Lobster_Two'] text-[45px] md:text-[55px] lg:text-[65px] font-normal text-white leading-tight mb-6">
                    Chicago Healthcare Directives Lawyer
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Ensure your medical wishes are honored with comprehensive healthcare directives tailored to Illinois law
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/book-consultation/"
                      className="inline-flex items-center justify-center bg-white text-[#2D3E50] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
                    >
                      Schedule Consultation
                    </Link>
                    <Link
                      href="tel:3123730731"
                      className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      (312) 373-0731
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Why Healthcare Directives Matter</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Ensure your medical wishes are honored</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Reduce family stress during emergencies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Maintain control over end-of-life decisions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Avoid costly legal disputes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-[#77B1D4] rounded-lg p-8 mb-12 shadow-sm">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Protect Your Healthcare Decisions with Illinois Healthcare Directives
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  No one wants to think about medical emergencies or end-of-life care, but having healthcare directives in place is one of the most important steps you can take to protect yourself and your loved ones. At Illinois Estate Law, we help Chicago residents create comprehensive healthcare directives that ensure your medical wishes are honored when you cannot speak for yourself.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">What Are Healthcare Directives?</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Healthcare directives, also known as advance directives, are legal documents that outline your preferences for medical treatment if you become incapacitated and unable to communicate your wishes. These documents give you control over critical healthcare decisions and provide clear guidance to your family members and medical providers during difficult times.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  In Illinois, healthcare directives typically include several key components that work together to create a comprehensive plan for your medical care. Understanding each component helps you make informed decisions about your healthcare planning needs.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Types of Healthcare Directives in Illinois</h3>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <Heart className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Living Will</h4>
                        <p className="text-slate-600">
                          Specifies the types of medical treatments you want or don't want if you're terminally ill or permanently unconscious
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Healthcare Power of Attorney</h4>
                        <p className="text-slate-600">
                          Designates a trusted person to make medical decisions on your behalf when you cannot
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">HIPAA Authorization</h4>
                        <p className="text-slate-600">
                          Allows designated individuals to access your protected health information
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Mental Health Treatment Preferences</h4>
                        <p className="text-slate-600">
                          Outlines your preferences for psychiatric treatment and medications if needed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Why You Need Healthcare Directives</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Medical emergencies can happen to anyone at any age. Without healthcare directives, your family may be forced to make difficult decisions without knowing your true wishes. This can lead to family disagreements, emotional distress, and potential legal battles during an already challenging time.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg my-8">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-2">Without Healthcare Directives:</h4>
                      <ul className="text-amber-800 space-y-2">
                        <li>• Family members may disagree about your care</li>
                        <li>• Courts may need to appoint a guardian to make decisions</li>
                        <li>• Medical providers may not know your treatment preferences</li>
                        <li>• You may receive treatments you would have refused</li>
                        <li>• Financial and emotional costs can be significant</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Illinois Healthcare Directive Requirements</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Illinois has specific legal requirements for healthcare directives to be valid. Understanding these requirements ensures your documents will be legally enforceable when needed. The Illinois Health Care Surrogate Act and the Illinois Power of Attorney Act govern these documents.
                </p>

                {/* Expandable Requirements Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('requirements')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Illinois Healthcare Directive Requirements</span>
                    {expandedSection === 'requirements' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'requirements' && (
                    <div className="bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Requirement</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Age Requirement</td>
                            <td className="px-6 py-4 text-slate-600">Must be 18 years or older</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Mental Capacity</td>
                            <td className="px-6 py-4 text-slate-600">Must be of sound mind when executing documents</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Witnesses</td>
                            <td className="px-6 py-4 text-slate-600">Requires one witness who is not a family member or healthcare provider</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Written Form</td>
                            <td className="px-6 py-4 text-slate-600">Must be in writing and properly dated</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">Agent Limitations</td>
                            <td className="px-6 py-4 text-slate-600">Healthcare agent cannot be your physician or healthcare provider unless related to you</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Choosing Your Healthcare Agent</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  One of the most important decisions you'll make is selecting who will serve as your healthcare agent. This person will have significant responsibility, so it's crucial to choose someone who understands your values, can handle stress, and will advocate for your wishes even under pressure.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Qualities to Look for in a Healthcare Agent</h3>

                <div className="bg-blue-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Trustworthy and Responsible:</strong> Someone who takes commitments seriously and acts in your best interests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Good Under Pressure:</strong> Able to make difficult decisions during emotional and stressful situations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Understands Your Values:</strong> Knows your beliefs about medical treatment and end-of-life care</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Willing to Serve:</strong> Has agreed to take on this responsibility and understands what it entails</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Geographically Accessible:</strong> Lives close enough to respond quickly if needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Assertive Communicator:</strong> Can effectively communicate with medical professionals and family members</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Common Medical Decisions Covered</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Healthcare directives address a wide range of medical situations and treatment options. Understanding what decisions can be included helps you create a comprehensive plan that truly reflects your wishes.
                </p>

                {/* Expandable Medical Decisions Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('decisions')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Medical Treatment Decisions</span>
                    {expandedSection === 'decisions' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'decisions' && (
                    <div className="bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Treatment Category</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Specific Decisions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Life-Sustaining Treatment</td>
                            <td className="px-6 py-4 text-slate-600">Ventilators, feeding tubes, dialysis, CPR, resuscitation</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Pain Management</td>
                            <td className="px-6 py-4 text-slate-600">Pain relief medications, palliative care, hospice care</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Surgical Procedures</td>
                            <td className="px-6 py-4 text-slate-600">Consent for surgeries, amputations, organ donation</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Diagnostic Testing</td>
                            <td className="px-6 py-4 text-slate-600">Blood tests, imaging studies, biopsies, genetic testing</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Mental Health Treatment</td>
                            <td className="px-6 py-4 text-slate-600">Psychiatric medications, electroconvulsive therapy, commitment</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">Experimental Treatment</td>
                            <td className="px-6 py-4 text-slate-600">Clinical trials, experimental drugs, unproven therapies</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">The Illinois Living Will Act</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  The Illinois Living Will Act provides the legal framework for living wills in Illinois. Under this act, you can specify whether you want life-sustaining treatments continued, withheld, or withdrawn if you have a terminal condition or are permanently unconscious. The act protects healthcare providers who follow your wishes and ensures your family members are not liable for honoring your directives.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Your living will becomes effective only when you are unable to make medical decisions yourself and have been diagnosed with a qualifying medical condition. Until that time, you retain full control over all healthcare decisions, and you can change or revoke your living will at any time.
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Healthcare Directive vs. Power of Attorney for Healthcare</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Many people confuse healthcare directives with a power of attorney for healthcare, but they serve different purposes and work together to create comprehensive healthcare planning. Understanding the distinction helps you ensure you have the right documents in place.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Living Will (Healthcare Directive)</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• States your specific treatment preferences</li>
                      <li>• Applies to terminal conditions</li>
                      <li>• Focuses on end-of-life decisions</li>
                      <li>• Does not name a decision-maker</li>
                      <li>• May be limited in scope</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border-2 border-[#77B1D4]">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Power of Attorney for Healthcare</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Names someone to make decisions</li>
                      <li>• Applies to any medical situation</li>
                      <li>• Covers broader healthcare decisions</li>
                      <li>• Agent interprets your wishes</li>
                      <li>• More flexible and comprehensive</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">When Healthcare Directives Take Effect</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Healthcare directives only take effect when specific conditions are met. In Illinois, you must be determined by your attending physician to lack the capacity to make healthcare decisions. This typically requires a medical assessment and documentation in your medical records.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  For living wills, additional conditions apply. You must have a terminal condition where death is imminent, or you must be permanently unconscious with no reasonable expectation of recovery. These determinations must be made by your physician and, in many cases, confirmed by a second physician.
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Updating Your Healthcare Directives</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Your healthcare directives should evolve as your life circumstances change. Major life events often signal the need to review and update your documents to ensure they still reflect your current wishes and situation.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">When to Update Your Documents:</h3>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-slate-800 mb-2">Life Changes</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Marriage or divorce</li>
                      <li>• Birth of children</li>
                      <li>• Death of agent</li>
                      <li>• Relocation</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-slate-800 mb-2">Health Changes</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• New diagnosis</li>
                      <li>• Change in prognosis</li>
                      <li>• Different treatment views</li>
                      <li>• Aging considerations</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-slate-800 mb-2">Relationship Changes</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Agent no longer suitable</li>
                      <li>• Family conflicts</li>
                      <li>• Loss of trust</li>
                      <li>• Agent moves away</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">How Illinois Estate Law Can Help</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  At Illinois Estate Law, we understand that healthcare planning involves deeply personal decisions. Our approach combines legal expertise with compassionate guidance to help you create healthcare directives that truly reflect your values and protect your autonomy.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Healthcare Directive Services Include:</h3>

                <div className="bg-slate-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Comprehensive consultation to understand your healthcare wishes and values</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Drafting customized living wills that comply with Illinois law</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Creating powers of attorney for healthcare with appropriate limitations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Preparing HIPAA authorizations to ensure information access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Guidance on discussing your wishes with family and healthcare agents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Coordination with your overall estate plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Regular reviews and updates as your circumstances change</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Assistance with document storage and distribution</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Frequently Asked Questions</h2>

                <div className="space-y-4 my-8">
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq1')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Can I change my healthcare directives after I create them?</span>
                      {expandedSection === 'faq1' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq1' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          Yes, you can change or revoke your healthcare directives at any time, as long as you have mental capacity. You can create new documents that supersede the old ones, or you can formally revoke your existing directives. It's important to inform your healthcare agent, family members, and healthcare providers of any changes.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq2')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Do I need a lawyer to create healthcare directives?</span>
                      {expandedSection === 'faq2' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq2' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          While Illinois law allows you to create healthcare directives without an attorney, working with an experienced lawyer ensures your documents are properly drafted, legally valid, and comprehensive. An attorney can help you understand all your options, address complex situations, and ensure your directives coordinate with your overall estate plan.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq3')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">What happens if I don't have healthcare directives?</span>
                      {expandedSection === 'faq3' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq3' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          Without healthcare directives, Illinois law determines who can make medical decisions for you through a surrogate decision-making hierarchy. This may not reflect your wishes or preferred decision-maker. Courts may need to appoint a guardian, which is costly, time-consuming, and may result in decisions you wouldn't want. Having healthcare directives avoids these complications.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq4')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Where should I keep my healthcare directives?</span>
                      {expandedSection === 'faq4' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq4' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          Keep your original healthcare directives in a safe, accessible location. Provide copies to your healthcare agent, alternate agents, primary care physician, and close family members. Many people also keep a copy in their medical records at their hospital or healthcare system. Make sure your loved ones know where to find your documents in an emergency.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Create Your Healthcare Directives?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Don't leave your medical care to chance. Contact Illinois Estate Law today to schedule a consultation and protect your healthcare decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center justify-center bg-white text-[#2D3E50] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
                >
                  Schedule Your Consultation
                </Link>
                <Link
                  href="tel:3123730731"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (312) 373-0731
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
