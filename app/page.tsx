import Script from 'next/script';
import { faqPageSchema } from '@/lib/seo';
import { homeFAQs } from '@/lib/home-faqs';
import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickFactsBar } from '@/components/home/QuickFactsBar';
import { LogosCarousel } from '@/components/home/LogosCarousel';
import { StatsSection } from '@/components/home/StatsSection';
import { TwoPathsSection } from '@/components/home/TwoPathsSection';
import { PracticeAreasSection } from '@/components/home/PracticeAreasSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ClientPortalSection } from '@/components/home/ClientPortalSection';
import { ContactSection } from '@/components/home/ContactSection';
import { FAQSection } from '@/components/home/FAQSection';
import WhichServiceSection from '@/components/home/WhichServiceSection';
import RecentArticlesStrip from '@/components/home/RecentArticlesStrip';
import IllinoisCoverageSection from '@/components/home/IllinoisCoverageSection';

export const metadata: Metadata = {
  title: 'Chicago Estate Planning & Probate Attorney | Illinois Estate Law',
  description: 'Ready to Protect Your Future? Contact Illinois Estate Law at 312-373-0731 for an Estate Planning or Probate Consultation That Fits Your Goals and Needs.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/',
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
    title: 'Chicago Estate Planning & Probate Attorney | Illinois Estate Law',
    description: 'Ready to Protect Your Future? Contact Illinois Estate Law at 312-373-0731 for an Estate Planning or Probate Consultation That Fits Your Goals and Needs.',
  },
  twitter: {
    card: 'summary',
    title: 'Chicago Estate Planning & Probate Attorney | Illinois Estate Law',
    description: 'Ready to Protect Your Future? Contact Illinois Estate Law at 312-373-0731 for an Estate Planning or Probate Consultation That Fits Your Goals and Needs.',
  },
  other: {
    'dc:title': 'Top-Rated Chicago Estate Planning & Probate Attorney | Illinois Estate Law',
    'dc:description': 'Ready to Protect Your Future? Contact Illinois Estate Law at 312-373-0731 for an Estate Planning or Probate Consultation That Fits Your Goals and Needs.',
    'dc:relation': 'https://www.illinoisestatelaw.com/',
    'dc:source': 'https://www.illinoisestatelaw.com/',
    'dc:language': 'en_US',
  },
  verification: {
    google: 'UQ33juRONgyBt2yOx3hbWYuGIe6uW2Q9bI-nB2cFtD4',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

const faqSchema = faqPageSchema(homeFAQs, '/');

export default function Home() {
  return (
    <>


      {/* Server-rendered (NOT next/script): AI crawlers — GPTBot, ClaudeBot,
          PerplexityBot, CCBot — read raw HTML and do not execute JavaScript,
          so JSON-LD injected by next/script is invisible to them. Built from
          the same homeFAQs array the visible accordion renders. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THGKJ83V');`
        }}
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QVXS1HVLNG"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QVXS1HVLNG');
`
        }}
      />

      <main>
        <HeroSection />
        <QuickFactsBar />
        <LogosCarousel />
        <StatsSection />
        <TwoPathsSection />
        <PracticeAreasSection />
        <WhichServiceSection />
        <RecentArticlesStrip />
        <IllinoisCoverageSection />
        <TestimonialsSection />
        <ClientPortalSection />
        <ContactSection />
        <FAQSection />
      </main>
    </>
  );
}
