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

        {/* Lunacal Booking Section */}
        <section className="bg-white py-12 lg:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div style={{ width: '100%', height: '700px', overflow: 'scroll' }} id="my-lunacal-inline-initial-consultation"></div>
          </div>
        </section>
      </main>

      <Script id="lunacal-embed" strategy="lazyOnload">
        {`
          (function(L,U,N){let p=(a,ar)=>a.q.push(ar),d=L.document;L.Lunacal=L.Lunacal||function(){let lun=L.Lunacal,ar=arguments;if(!lun.loaded){lun.ns={};lun.q=lun.q||[];d.head.appendChild(d.createElement("script")).src=U;lun.loaded=!0}if(ar[0]===N){const api=function(){p(api,arguments)};const ns=ar[1];api.q=api.q||[];if(typeof ns==="string"){lun.ns[ns]=lun.ns[ns]||api;p(lun.ns[ns],ar);p(lun,["initNamespace",ns])}else p(lun,ar);return}p(lun,ar)};if(!L.Cal)L.Cal=L.Lunacal})(window,"https://app.lunacal.ai/embed/embed.js","init");Lunacal("init","initial-consultation",{origin:"https://app.lunacal.ai"});
          Lunacal.config = Lunacal.config || {};
          Lunacal.config.forwardQueryParams = true;

          Lunacal.ns["initial-consultation"]("inline", {
            elementOrSelector:"#my-lunacal-inline-initial-consultation",
            config: {"layout":""},
            calLink: "team/illinois-estate-law/initial-consultation",
          });
          Lunacal.ns["initial-consultation"]("preload", { calLink: "team/illinois-estate-law/initial-consultation", type: "inline", options: { prerenderIframe: true } });
          Lunacal.ns["initial-consultation"]("ui", {"theme":"light","styles":{"branding":{}},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"theme-border":"#E7E7EE","theme-background-primary":"#7033FF","theme-background-secondary":"#E2EBFF","theme-background-card":"#FFFFFF","theme-background-base":"#FFFFFF","theme-text-primary":"#FFFFFF","theme-text-secondary":"#1E69DC","theme-text-card":"#000000","theme-text-base":"#0B0D0E","theme-rounded-base":"20px","theme-rounded-calendar":" 24px","theme-rounded-timeslot":"100px","theme-rounded-day":"100px","theme-rounded-button":"100px","theme-shadow-calendar":"2px 2px 4px 0px #0000001A","theme-shadow-button":"1px 2px 2px 0px #0000001A","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Inter"},"dark":{"theme-border":"#33353A","theme-background-primary":"#7033FF","theme-background-secondary":"#1E293B","theme-background-card":"#222327","theme-background-base":"#1A1B1E","theme-text-primary":"#FFFFFF","theme-text-secondary":"#1E69DC","theme-text-card":"#FFFFFF","theme-text-base":"#FFFFFF","theme-rounded-base":"20px","theme-rounded-calendar":" 24px","theme-rounded-timeslot":"100px","theme-rounded-day":"100px","theme-rounded-button":"100px","theme-shadow-calendar":"2px 2px 4px 0px #0000001A","theme-shadow-button":"1px 2px 2px 0px #0000001A","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Inter"}},"displayedContent":{"image":true,"name":true,"designation":true,"description":true,"eventName":true,"highlightBar":false},"background":null,"stylePreset":null});
        `}
      </Script>
    </>
  );
}
