import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Submit Referral | Illinois Estate Law',
  description: 'Refer a client to Illinois Estate Law. Submit your referral information and we will take great care of your clients.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/submit-referral/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Submit Referral | Illinois Estate Law',
    description: 'Refer a client to Illinois Estate Law. Submit your referral information and we will take great care of your clients.',
  },
  twitter: {
    card: 'summary',
    title: 'Submit Referral | Illinois Estate Law',
    description: 'Refer a client to Illinois Estate Law. Submit your referral information and we will take great care of your clients.',
  },
  other: {
    'dc:title': 'Submit Referral | Illinois Estate Law',
    'dc:description': 'Refer a client to Illinois Estate Law. Submit your referral information and we will take great care of your clients.',
    'dc:relation': 'https://www.illinoisestatelaw.com/submit-referral/',
    'dc:source': 'https://www.illinoisestatelaw.com/',
    'dc:language': 'en_US',
  },
};

export default function SendReferralPage() {
  return (
    <>
      <main>
        <section className="relative min-h-[250px] bg-gradient-to-r from-[#2D3E50] to-[#4a708b] flex items-center justify-center">
          <div className="mx-auto max-w-[1140px] px-5 lg:px-8 py-12 lg:py-16">
            <div className="flex justify-center lg:justify-start">
              <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-[#fefefe] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center lg:text-left capitalize">
                Submit Referral
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 text-center">
                <p className="font-['Plus_Jakarta_Sans'] text-lg text-gray-700">
                  Thank you for referring your clients to Illinois Estate Law. Please fill out the form below with your referral information, and we will take excellent care of them.
                </p>
              </div>

              <iframe
                data-tally-src="https://tally.so/embed/MeXPPX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="379"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Referral Submission"
                className="border-0"
              />
            </div>
          </div>
        </section>
      </main>

      <Script
        id="tally-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
          `,
        }}
      />
    </>
  );
}
