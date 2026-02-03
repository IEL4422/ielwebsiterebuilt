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
    icon: 'https://i.imgur.com/pKy65wF.png',
    apple: 'https://i.imgur.com/pKy65wF.png',
  },
  other: {
    'msapplication-TileImage': 'https://i.imgur.com/pKy65wF.png',
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
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="canonical" href="https://www.illinoisestatelaw.com/" />
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
