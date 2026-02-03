import React from 'react';
import Link from 'next/link';
import { Clock, CheckCircle2, FileText, Scale, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Our Process | Illinois Estate Law',
  description: 'Understand our streamlined process for estate planning, probate administration, and deed transfers in Illinois. Clear steps and timelines for each service.',
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-white leading-[50px] md:leading-[65px] lg:leading-[75px] text-center">The Process</h1>
          </div>
        </div>
      </section>

      {/* Process Navigation */}
      <section className="py-8 bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#estate-planning"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <FileText className="w-5 h-5 text-slate-700" />
              <span className="font-medium text-slate-900">Estate Planning</span>
            </a>
            <a
              href="#probate"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Scale className="w-5 h-5 text-slate-700" />
              <span className="font-medium text-slate-900">Probate</span>
            </a>
            <a
              href="#deed"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Home className="w-5 h-5 text-slate-700" />
              <span className="font-medium text-slate-900">Deed Transfer</span>
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Estate Planning Process */}
        <section id="estate-planning" className="mb-24 scroll-mt-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Estate Planning Process
            </h2>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <Clock className="w-5 h-5" />
              <span className="text-lg">Typical Timeline: 1-3 months</span>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Initial Consultation',
                description: 'Optional one-on-one meeting to discuss your goals and answer any preliminary questions.',
                optional: true,
              },
              {
                step: 2,
                title: 'Intake Questionnaire',
                description: 'Complete a comprehensive questionnaire about your assets, family structure, and estate planning goals.',
              },
              {
                step: 3,
                title: 'Planning Session',
                description: 'Meet with your attorney to discuss how to structure your plan, answer questions, and design your custom estate plan.',
              },
              {
                step: 4,
                title: 'Drafting',
                description: 'Our attorneys draft your estate planning documents based on your unique needs and preferences.',
                timeline: 'Usually takes 2 weeks',
              },
              {
                step: 5,
                title: 'Review',
                description: 'Review your documents on your own or in collaboration with your attorney to ensure everything meets your expectations.',
              },
              {
                step: 6,
                title: 'Notarization',
                description: 'Sign and notarize your documents either online or via mobile notarization where a notary comes to your location.',
              },
              {
                step: 7,
                title: 'Trust Funding',
                description: 'Transfer assets into your trust to ensure your plan works as intended when the time comes.',
              },
              {
                step: 8,
                title: 'Completion',
                description: 'Receive your physical estate planning portfolio by mail and digital copies via email.',
              },
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        {item.optional && (
                          <span className="text-xs font-medium px-2 py-1 bg-slate-200 text-slate-700 rounded">
                            Optional
                          </span>
                        )}
                        {item.timeline && (
                          <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">
                            {item.timeline}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Probate Process */}
        <section id="probate" className="mb-24 scroll-mt-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Scale className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Probate Administration Process
            </h2>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <Clock className="w-5 h-5" />
              <span className="text-lg">Typical Timeline: 14 months</span>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Initial Consultation',
                description: 'Optional meeting to discuss the probate process, answer questions, and review the estate situation.',
                optional: true,
              },
              {
                step: 2,
                title: 'Intake Questionnaire',
                description: 'Complete a questionnaire with details about the deceased, their assets, debts, and beneficiaries.',
              },
              {
                step: 3,
                title: 'Petition Filing',
                description: 'We draft and file the initial petition with the probate court. The court automatically assigns an initial court date.',
                timeline: 'Court date usually 6-8 weeks from filing',
              },
              {
                step: 4,
                title: 'Initial Court Date (Opening)',
                description: 'The case is officially opened with the court system and the representative of the estate receives Letters of Office.',
              },
              {
                step: 5,
                title: 'Creditor Notification Period',
                description: 'We publish notice in a local newspaper. Creditors have 6 months to file claims. During this time, the representative can open estate bank accounts, list real estate, and marshal assets.',
                timeline: '6-month creditor period',
              },
              {
                step: 6,
                title: 'Administration',
                description: 'We prepare a final accounting detailing all assets, expenses, and debts within the estate. Heirs and legatees begin receiving their shares.',
              },
              {
                step: 7,
                title: 'Closing Hearing',
                description: 'Final court appearance where the estate is officially closed and the representative is discharged from their duties.',
              },
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-emerald-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        {item.optional && (
                          <span className="text-xs font-medium px-2 py-1 bg-slate-200 text-slate-700 rounded">
                            Optional
                          </span>
                        )}
                        {item.timeline && (
                          <span className="text-xs font-medium px-2 py-1 bg-emerald-100 text-emerald-700 rounded">
                            {item.timeline}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Deed Process */}
        <section id="deed" className="mb-16 scroll-mt-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Home className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Deed Transfer Process
            </h2>
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <Clock className="w-5 h-5" />
              <span className="text-lg">Typical Timeline: 1-2 weeks</span>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Initial Consultation',
                description: 'Brief consultation to understand your deed transfer needs and property details.',
              },
              {
                step: 2,
                title: 'Short Intake Questionnaire',
                description: 'Complete a brief questionnaire with property information and transfer details.',
              },
              {
                step: 3,
                title: 'Drafting',
                description: 'We draft your deed based on the information provided and send it to you for review.',
              },
              {
                step: 4,
                title: 'Online Notarization',
                description: 'Conveniently sign and notarize your deed online from anywhere.',
              },
              {
                step: 5,
                title: 'Recording',
                description: 'We send your deed to the county recorder to officially record the transfer.',
              },
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-amber-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2D3E50] via-[#4A708B] to-[#77B1D4] p-1">
            <div className="relative bg-white rounded-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#77B1D4] to-[#4A708B] rounded-xl mb-4">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3E50]">
                    Ready to Get Started?
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We make the process simple, transparent, and stress-free. Schedule your consultation today
                    to begin protecting your legacy or administering an estate.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="/book-consultation" className="w-full">
                    <Button size="lg" className="w-full bg-gradient-to-r from-[#2D3E50] to-[#4A708B] hover:from-[#4A708B] hover:to-[#77B1D4] text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link href="/get-started" className="w-full">
                    <Button size="lg" variant="outline" className="w-full border-2 border-[#2D3E50] text-[#2D3E50] hover:bg-[#2D3E50] hover:text-white text-lg px-8 py-6 transition-all">
                      Get Started Online
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full text-center text-[#4A708B] hover:text-[#2D3E50] font-semibold transition-colors">
                    Or contact us with questions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
