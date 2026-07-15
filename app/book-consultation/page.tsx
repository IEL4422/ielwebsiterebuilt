'use client';

import { useState } from 'react';
import Script from 'next/script';
import { ArrowLeft, Building2, ScrollText, Scale, Heart, Briefcase, Gavel, HeartHandshake } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';

type CaseType =
  | 'estate-planning'
  | 'trust-administration'
  | 'real-estate'
  | 'uncontested-probate'
  | 'contested-probate'
  | 'guardianship'
  | 'prenuptial';

const TYPE_TO_EMBED: Record<CaseType, string> = {
  'estate-planning': 'my-lunacal-inline-initial-consultation',
  'trust-administration': 'my-lunacal-inline-initial-consultation',
  'real-estate': 'my-lunacal-inline-initial-consultation-yassmin',
  'uncontested-probate': 'my-lunacal-inline-initial-consultation-probate',
  'contested-probate': 'my-lunacal-inline-initial-consultation-contested-probate',
  'guardianship': 'my-lunacal-inline-initial-consultation-guardianship',
  'prenuptial': 'my-lunacal-inline-initial-consultation-mary-liberty',
};

interface CaseOption {
  id: CaseType;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  subtitle: string;
  examples: string[];
  bookWith: string;
  bookWithRole: string;
}

const CASE_OPTIONS: CaseOption[] = [
  {
    id: 'estate-planning',
    icon: ScrollText,
    label: 'Estate Planning',
    subtitle: 'Plan for your future and protect your loved ones',
    examples: [
      'Revocable Living Trusts',
      'Last Will & Testament',
      'Powers of Attorney',
      'Advance Directives',
      'Special Needs Planning',
    ],
    bookWith: 'Our Estate Planning Team',
    bookWithRole: 'Mary Liberty · Yassmin Koudmani · Victoria Lozano',
  },
  {
    id: 'trust-administration',
    icon: Briefcase,
    label: 'Trust Administration',
    subtitle: 'Guidance for trustees navigating their fiduciary duties',
    examples: [
      'Trust Accounting & Review',
      'Distribution Guidance',
      'Beneficiary Communication',
      'Trustee Fiduciary Duties',
    ],
    bookWith: 'Our Trust Administration Team',
    bookWithRole: 'Mary Liberty · Yassmin Koudmani · Victoria Lozano',
  },
  {
    id: 'real-estate',
    icon: Building2,
    label: 'Real Estate',
    subtitle: 'Navigate property transactions with confidence',
    examples: [
      'Purchase & Sale Closings',
      'Contract Review',
      'Title Issues',
      'Real Estate Transactions',
    ],
    bookWith: 'Yassmin Koudmani or Victoria Lozano',
    bookWithRole: 'Real Estate Attorneys',
  },
  {
    id: 'uncontested-probate',
    icon: Scale,
    label: 'Uncontested Probate',
    subtitle: 'Guide your family through estate administration',
    examples: [
      'Estate Administration',
      'Court Proceedings',
      'Heir & Spousal Representation',
      'Asset Distribution',
    ],
    bookWith: 'Victoria Lozano or Mary Liberty',
    bookWithRole: 'Probate Attorneys',
  },
  {
    id: 'contested-probate',
    icon: Gavel,
    label: 'Contested Probate',
    subtitle: 'Will contests and estate disputes that end up before a judge',
    examples: [
      'Will Contests',
      'Undue Influence & Capacity',
      'Executor Removal',
      'Estate Litigation',
    ],
    bookWith: 'Our Contested Probate Team',
    bookWithRole: 'Estate Litigation Attorneys',
  },
  {
    id: 'guardianship',
    icon: HeartHandshake,
    label: 'Guardianship',
    subtitle: 'Adult or minor guardianship, contested or uncontested',
    examples: [
      'Adult Guardianship',
      'Minor Guardianship',
      'Guardian of the Person / Estate',
      'Annual Compliance',
    ],
    bookWith: 'Our Guardianship Team',
    bookWithRole: 'Guardianship Attorneys',
  },
  {
    id: 'prenuptial',
    icon: Heart,
    label: 'Prenuptial Agreement',
    subtitle: 'Protect both parties with clear, fair agreements',
    examples: [
      'Prenuptial Agreements',
      'Postnuptial Agreements',
      'Asset Protection Planning',
    ],
    bookWith: 'Mary Liberty',
    bookWithRole: 'Owner & Lead Attorney',
  },
];

const LUNACAL_UI_THEME = `{"theme":"light","styles":{"branding":{}},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"theme-border":"#E7E7EE","theme-background-primary":"#7033FF","theme-background-secondary":"#E2EBFF","theme-background-card":"#FFFFFF","theme-background-base":"#FFFFFF","theme-text-primary":"#FFFFFF","theme-text-secondary":"#1E69DC","theme-text-card":"#000000","theme-text-base":"#0B0D0E","theme-rounded-base":"20px","theme-rounded-calendar":" 24px","theme-rounded-timeslot":"100px","theme-rounded-day":"100px","theme-rounded-button":"100px","theme-shadow-calendar":"2px 2px 4px 0px #0000001A","theme-shadow-button":"1px 2px 2px 0px #0000001A","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Inter"},"dark":{"theme-border":"#33353A","theme-background-primary":"#7033FF","theme-background-secondary":"#1E293B","theme-background-card":"#222327","theme-background-base":"#1A1B1E","theme-text-primary":"#FFFFFF","theme-text-secondary":"#1E69DC","theme-text-card":"#FFFFFF","theme-text-base":"#FFFFFF","theme-rounded-base":"20px","theme-rounded-calendar":" 24px","theme-rounded-timeslot":"100px","theme-rounded-day":"100px","theme-rounded-button":"100px","theme-shadow-calendar":"2px 2px 4px 0px #0000001A","theme-shadow-button":"1px 2px 2px 0px #0000001A","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Inter"}},"displayedContent":{"image":true,"name":true,"designation":true,"description":true,"eventName":true,"highlightBar":false},"background":null,"stylePreset":null}`;

export default function BookConsultationPage() {
  const [selectedType, setSelectedType] = useState<CaseType | null>(null);

  const selectedOption = CASE_OPTIONS.find((o) => o.id === selectedType);
  const activeEmbedId = selectedType ? TYPE_TO_EMBED[selectedType] : null;

  const embedHeight = (id: string) => (activeEmbedId === id ? '700px' : '0px');
  const embedOverflow = (id: string) => (activeEmbedId === id ? 'scroll' : 'hidden');

  return (
    <>
      <main>
        {/* Hero Section */}
        <InnerPageHero title="Book a Consultation" subtitle="Free initial consultations · Flat-fee pricing · All of Illinois" />

        {/* Step 1: Case Type Selector */}
        <section className={`bg-white py-12 lg:py-16 ${selectedType ? 'hidden' : 'block'}`}>
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#33414E] mb-3">
                What type of legal help do you need?
              </h2>
              <p className="text-lg text-gray-500">
                Select your case type to be matched with the right attorney.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {CASE_OPTIONS.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => setSelectedType(option.id)}
                    className="text-left bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#547298] hover:shadow-lg transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#33414E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#33414E] transition-colors duration-200">
                        <Icon className="w-6 h-6 text-[#33414E] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-[#33414E] mb-1">{option.label}</h3>
                        <p className="text-gray-500 text-sm mb-3">{option.subtitle}</p>
                        <ul className="space-y-1">
                          {option.examples.map((ex) => (
                            <li key={ex} className="text-xs text-gray-400 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4A708B] flex-shrink-0" />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm text-[#4A708B] font-semibold">
                        Book with {option.bookWith}
                      </span>
                      <span className="text-[#4A708B] text-sm font-bold group-hover:translate-x-1 transition-transform duration-200 inline-block">
                        Select →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="text-center text-sm text-gray-400 mt-8">
              All consultations are free · No obligation · 100% confidential
            </p>
          </div>
        </section>

        {/* Step 2: Attorney context + back button */}
        <section className={`bg-white pt-8 ${selectedType ? 'block' : 'hidden'}`}>
          <div className="container mx-auto px-4 max-w-6xl">
            <button
              onClick={() => setSelectedType(null)}
              className="inline-flex items-center gap-2 text-[#4A708B] hover:text-[#33414E] font-semibold mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Change case type
            </button>

            {selectedOption && (
              <div className="bg-[#33414E] rounded-xl p-5 mb-8 text-white flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
                    {selectedOption.label} Consultation
                  </p>
                  <p className="text-xl font-bold">
                    You&apos;ll be meeting with {selectedOption.bookWith}
                  </p>
                  <p className="text-white/80 text-sm mt-0.5">{selectedOption.bookWithRole}</p>
                </div>
                <div className="flex-shrink-0 bg-white/20 rounded-full px-5 py-2 text-sm font-bold whitespace-nowrap self-start sm:self-auto">
                  Free Consultation
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Calendar embeds — always in DOM so Lunacal preloads in background */}
        <div className="bg-white pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div
              id="my-lunacal-inline-initial-consultation"
              style={{
                width: '100%',
                height: embedHeight('my-lunacal-inline-initial-consultation'),
                overflow: embedOverflow('my-lunacal-inline-initial-consultation'),
              }}
            />
            <div
              id="my-lunacal-inline-initial-consultation-yassmin"
              style={{
                width: '100%',
                height: embedHeight('my-lunacal-inline-initial-consultation-yassmin'),
                overflow: embedOverflow('my-lunacal-inline-initial-consultation-yassmin'),
              }}
            />
            <div
              id="my-lunacal-inline-initial-consultation-probate"
              style={{
                width: '100%',
                height: embedHeight('my-lunacal-inline-initial-consultation-probate'),
                overflow: embedOverflow('my-lunacal-inline-initial-consultation-probate'),
              }}
            />
            <div
              id="my-lunacal-inline-initial-consultation-mary-liberty"
              style={{
                width: '100%',
                height: embedHeight('my-lunacal-inline-initial-consultation-mary-liberty'),
                overflow: embedOverflow('my-lunacal-inline-initial-consultation-mary-liberty'),
              }}
            />
            <div
              id="my-lunacal-inline-initial-consultation-contested-probate"
              style={{
                width: '100%',
                height: embedHeight('my-lunacal-inline-initial-consultation-contested-probate'),
                overflow: embedOverflow('my-lunacal-inline-initial-consultation-contested-probate'),
              }}
            />
            <div
              id="my-lunacal-inline-initial-consultation-guardianship"
              style={{
                width: '100%',
                height: embedHeight('my-lunacal-inline-initial-consultation-guardianship'),
                overflow: embedOverflow('my-lunacal-inline-initial-consultation-guardianship'),
              }}
            />
          </div>
        </div>
      </main>

      {/* Single Lunacal script block initializing all 3 embeds */}
      <Script id="lunacal-all-embeds" strategy="lazyOnload">
        {`
          (function(L,U,N){let p=(a,ar)=>a.q.push(ar),d=L.document;L.Lunacal=L.Lunacal||function(){let lun=L.Lunacal,ar=arguments;if(!lun.loaded){lun.ns={};lun.q=lun.q||[];d.head.appendChild(d.createElement("script")).src=U;lun.loaded=!0}if(ar[0]===N){const api=function(){p(api,arguments)};const ns=ar[1];api.q=api.q||[];if(typeof ns==="string"){lun.ns[ns]=lun.ns[ns]||api;p(lun.ns[ns],ar);p(lun,["initNamespace",ns])}else p(lun,ar);return}p(lun,ar)};if(!L.Cal)L.Cal=L.Lunacal})(window,"https://app.lunacal.ai/embed/embed.js","init");

          Lunacal.config = Lunacal.config || {};
          Lunacal.config.forwardQueryParams = true;

          // ── Estate Planning ──
          Lunacal("init","initial-consultation",{origin:"https://app.lunacal.ai"});
          Lunacal.ns["initial-consultation"]("inline", {
            elementOrSelector:"#my-lunacal-inline-initial-consultation",
            config: {"layout":""},
            calLink: "team/illinois-estate-law/initial-consultation",
          });
          Lunacal.ns["initial-consultation"]("preload", { calLink: "team/illinois-estate-law/initial-consultation", type: "inline", options: { prerenderIframe: true } });
          Lunacal.ns["initial-consultation"]("ui", ${LUNACAL_UI_THEME});

          // ── Real Estate (Yassmin) ──
          Lunacal("init","initial-consultation-yassmin",{origin:"https://app.lunacal.ai"});
          Lunacal.ns["initial-consultation-yassmin"]("inline", {
            elementOrSelector:"#my-lunacal-inline-initial-consultation-yassmin",
            config: {"layout":""},
            calLink: "team/illinois-estate-law?eventType=initial-consultation-yassmin",
          });
          Lunacal.ns["initial-consultation-yassmin"]("preload", { calLink: "team/illinois-estate-law?eventType=initial-consultation-yassmin", type: "inline", options: { prerenderIframe: true } });
          Lunacal.ns["initial-consultation-yassmin"]("ui", ${LUNACAL_UI_THEME});

          // ── Probate ──
          Lunacal("init","initial-consultation-probate",{origin:"https://app.lunacal.ai"});
          Lunacal.ns["initial-consultation-probate"]("inline", {
            elementOrSelector:"#my-lunacal-inline-initial-consultation-probate",
            config: {"layout":""},
            calLink: "team/illinois-estate-law/initial-consultation-probate",
          });
          Lunacal.ns["initial-consultation-probate"]("preload", { calLink: "team/illinois-estate-law/initial-consultation-probate", type: "inline", options: { prerenderIframe: true } });
          Lunacal.ns["initial-consultation-probate"]("ui", ${LUNACAL_UI_THEME});

          // ── Prenuptial (Mary Liberty) ──
          Lunacal("init","initial-consultation-mary-liberty",{origin:"https://app.lunacal.ai"});
          Lunacal.ns["initial-consultation-mary-liberty"]("inline", {
            elementOrSelector:"#my-lunacal-inline-initial-consultation-mary-liberty",
            config: {"layout":""},
            calLink: "team/illinois-estate-law?eventType=initial-consultation-mary-liberty",
          });
          Lunacal.ns["initial-consultation-mary-liberty"]("preload", { calLink: "team/illinois-estate-law?eventType=initial-consultation-mary-liberty", type: "inline", options: { prerenderIframe: true } });
          Lunacal.ns["initial-consultation-mary-liberty"]("ui", ${LUNACAL_UI_THEME});

          // ── Contested Probate (confirmed link) ──
          Lunacal("init","initial-consultation-contested-probate",{origin:"https://app.lunacal.ai"});
          Lunacal.ns["initial-consultation-contested-probate"]("inline", {
            elementOrSelector:"#my-lunacal-inline-initial-consultation-contested-probate",
            config: {"layout":""},
            calLink: "team/illinois-estate-law/initial-consultation-contested-probate",
          });
          Lunacal.ns["initial-consultation-contested-probate"]("preload", { calLink: "team/illinois-estate-law/initial-consultation-contested-probate", type: "inline", options: { prerenderIframe: true } });
          Lunacal.ns["initial-consultation-contested-probate"]("ui", ${LUNACAL_UI_THEME});

          // ── Guardianship (confirmed link) ──
          Lunacal("init","initial-consultation-guardianship",{origin:"https://app.lunacal.ai"});
          Lunacal.ns["initial-consultation-guardianship"]("inline", {
            elementOrSelector:"#my-lunacal-inline-initial-consultation-guardianship",
            config: {"layout":""},
            calLink: "team/illinois-estate-law/initial-consultation-guardianship",
          });
          Lunacal.ns["initial-consultation-guardianship"]("preload", { calLink: "team/illinois-estate-law/initial-consultation-guardianship", type: "inline", options: { prerenderIframe: true } });
          Lunacal.ns["initial-consultation-guardianship"]("ui", ${LUNACAL_UI_THEME});
        `}
      </Script>
    </>
  );
}
