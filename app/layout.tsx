import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';
import FloatingConsultButton from '@/components/ui/FloatingConsultButton';
import { StructuredData } from '@/components/StructuredData';
import { MetaPixel } from '@/components/analytics/MetaPixel';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.illinoisestatelaw.com'),
  title: {
    default: 'Illinois Estate Planning, Probate & Real Estate Attorneys | Illinois Estate Law',
    template: '%s | Illinois Estate Law'
  },
  description:
    'Illinois Estate Law is an Illinois law firm offering flat-fee estate planning, wills, trusts, probate, deeds, and residential real estate closings statewide. Call (312) 373-0731.',
  applicationName: 'Illinois Estate Law',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    type: 'website',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    url: 'https://www.illinoisestatelaw.com/',
  },
  twitter: {
    card: 'summary',
    site: '@IllinoisEstate',
  },
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
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-['Plus_Jakarta_Sans'] antialiased">
        <MetaPixel />
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
        <Header />
          <div className="pb-[62px] md:pb-0">
            {children}
          </div>
          <Footer />
          <MobileStickyBar />
          <FloatingConsultButton />
      </body>
    </html>
  );
}
