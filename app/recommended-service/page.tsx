'use client';

import { useEffect } from 'react';
import { Metadata } from 'next';

export default function RecommendedServicePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      <section
        className="relative min-h-[180px] bg-gradient-to-r from-[#2D3E50] to-[#4a708b] flex items-center justify-center py-6 lg:min-h-[160px] sm:min-h-[140px]"
      >
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <div className="flex justify-center lg:justify-start">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-[#fefefe] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center lg:text-left capitalize">
              Recommended Service
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <iframe
            data-tally-src="https://tally.so/embed/mVNDjy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="396"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Welcome to Illinois Estate Law!"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
