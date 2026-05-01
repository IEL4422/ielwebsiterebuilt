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
          Lunacal.ns["initial-consultation"]("floatingButton", {"calLink":"team/illinois-estate-law/initial-consultation","calOrigin":"https://app.lunacal.ai","hideButtonIcon":false,"buttonText":"Schedule time with me","buttonPosition":"bottom-right","buttonColor":"#a42c72","buttonTextColor":"#F6F6F6","shadowEffect":true,"borderRadius":"99","borderColor":"#a42c72","animationPresetId":"happy-dog"});
          Lunacal.ns["initial-consultation"]("preload", { calLink: "team/illinois-estate-law/initial-consultation", type: "modal", options: { prerenderIframe: true } });
          Lunacal.ns["initial-consultation"]("ui", {"theme":"light","styles":{"branding":{}},"hideEventTypeDetails":false,"layout":"","cssVarsPerTheme":{"light":{"theme-border":"#E7E7EE","theme-background-primary":"#7033FF","theme-background-secondary":"#E2EBFF","theme-background-card":"#FFFFFF","theme-background-base":"#FFFFFF","theme-text-primary":"#FFFFFF","theme-text-secondary":"#1E69DC","theme-text-card":"#000000","theme-text-base":"#0B0D0E","theme-rounded-base":"20px","theme-rounded-calendar":" 24px","theme-rounded-timeslot":"100px","theme-rounded-day":"100px","theme-rounded-button":"100px","theme-shadow-calendar":"2px 2px 4px 0px #0000001A","theme-shadow-button":"1px 2px 2px 0px #0000001A","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Inter"},"dark":{"theme-border":"#33353A","theme-background-primary":"#7033FF","theme-background-secondary":"#1E293B","theme-background-card":"#222327","theme-background-base":"#1A1B1E","theme-text-primary":"#FFFFFF","theme-text-secondary":"#1E69DC","theme-text-card":"#FFFFFF","theme-text-base":"#FFFFFF","theme-rounded-base":"20px","theme-rounded-calendar":" 24px","theme-rounded-timeslot":"100px","theme-rounded-day":"100px","theme-rounded-button":"100px","theme-shadow-calendar":"2px 2px 4px 0px #0000001A","theme-shadow-button":"1px 2px 2px 0px #0000001A","theme-shadow-timeslot":"0px 0px 0px 0px #000000","theme-font-family":"Inter"}},"displayedContent":{"image":true,"name":true,"designation":true,"description":true,"eventName":true,"highlightBar":false},"background":null,"stylePreset":null});
        `}</Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
