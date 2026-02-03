'use client';

import { Metadata } from 'next';
import Script from 'next/script';

export default function BookConsultationPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
          <div className="container mx-auto max-w-[1140px] px-5 xl:px-0">
            <div className="flex flex-col items-center justify-center py-4">
              <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] leading-[50px] md:leading-[65px] lg:leading-[75px] font-normal capitalize text-[#FEFEFE] text-center">
                Book a Consultation
              </h1>
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="bg-white pt-12 lg:pt-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-[#77B1D4] rounded-lg p-6 lg:p-8 shadow-sm text-center">
              <p className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">
                Free Initial Consultation
              </p>
              <p className="text-lg text-slate-600">
                Schedule your complimentary consultation to discuss your estate planning needs with our experienced attorney.
              </p>
            </div>
          </div>
        </section>

        {/* Calendly Section */}
        <section className="bg-white py-12 lg:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/illinoisestatelaw/smith-ai-scheduling?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=5c89c7"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </section>
      </main>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
