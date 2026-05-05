import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyBar } from '@/components/layout/MobileStickyBar';

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
        <Header />
        <div className="pb-[62px] md:pb-0">
          {children}
        </div>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
