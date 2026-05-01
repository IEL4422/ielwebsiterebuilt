import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.illinoisestatelaw.com'),
  title: {
    default: 'Illinois Estate Law',
    template: '%s | Illinois Estate Law'
  },
  generator: 'WordPress 6.9',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  other: {
    'msapplication-TileImage': '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-['Plus_Jakarta_Sans'] antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DDLGV7ZF0Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DDLGV7ZF0Z');
          `}
        </Script>
        <Script id="lunacal-floating" strategy="afterInteractive">{`
          (function(L,U,N){let p=(a,ar)=>a.q.push(ar),d=L.document;L.Lunacal=L.Lunacal||function(){let lun=L.Lunacal,ar=arguments;if(!lun.loaded){lun.ns={};lun.q=lun.q||[];d.head.appendChild(d.createElement("script")).src=U;lun.loaded=!0}if(ar[0]===N){const api=function(){p(api,arguments)};const ns=ar[1];api.q=api.q||[];if(typeof ns==="string"){lun.ns[ns]=lun.ns[ns]||api;p(lun.ns[ns],ar);p(lun,["initNamespace",ns])}else p(lun,ar);return}p(lun,ar)};if(!L.Cal)L.Cal=L.Lunacal})(window,"https://app.lunacal.ai/embed/embed.js","init");
          Lunacal("init","initial-consultation",{origin:"https://app.lunacal.ai"});
          Lunacal.config = Lunacal.config || {};
          Lunacal.config.forwardQueryParams = true;
          Lunacal.ns["initial-consultation"]("floatingButton", {"calLink":"team/illinois-estate-law/initial-consultation","calOrigin":"https://app.lunacal.ai","hideButtonIcon":false,"buttonText":"Book Consultation","buttonPosition":"bottom-right","buttonColor":"#44738f","buttonTextColor":"#F6F6F6","shadowEffect":true,"borderRadius":"99","borderColor":"#ffffff","animationPresetId":"none"});
          Lunacal.ns["initial-consultation"]("preload", { calLink: "team/illinois-estate-law/initial-consultation", type: "modal", options: { prerenderIframe: true } });
          Lunacal.ns["initial-consultation"]("ui", {"theme":"dark","styles":{"branding":{}},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"theme-border":"#1F1F1F","theme-background-primary":"#018CFF","theme-background-secondary":"#33353A","theme-background-card":"#090909","theme-background-base":"#090909","theme-text-primary":"#ffffff","theme-text-secondary":"#ffffff","theme-text-card":"#ffffff","theme-text-base":"#ffffff","theme-rounded-base":"12px","theme-rounded-calendar":"20px","theme-rounded-timeslot":"999px","theme-rounded-day":"999px","theme-rounded-button":"999px","theme-shadow-calendar":"1.5px 8.5px 4px 0px #0000001A","theme-shadow-button":"0px 0px 0px 0px #D1519A88","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Outfit"},"dark":{"theme-border":"#1F1F1F","theme-background-primary":"#018CFF","theme-background-secondary":"#33353A","theme-background-card":"#090909","theme-background-base":"#090909","theme-text-primary":"#ffffff","theme-text-secondary":"#ffffff","theme-text-card":"#ffffff","theme-text-base":"#ffffff","theme-rounded-base":"12px","theme-rounded-calendar":"20px","theme-rounded-timeslot":"999px","theme-rounded-day":"999px","theme-rounded-button":"999px","theme-shadow-calendar":"1.5px 8.5px 4px 0px #0000001A","theme-shadow-button":"0px 0px 0px 0px #D1519A88","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Outfit"}},"displayedContent":{"image":true,"name":true,"designation":true,"description":true,"eventName":true,"highlightBar":false},"background":{"type":"animated","presetId":"retro-grid"},"stylePreset":"blueshine"});
        `}</Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
