import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chicago Wills Lawyer | Illinois Last Will & Testament Attorney',
  description: 'Experienced Chicago wills lawyer helping Illinois residents create comprehensive last will and testament documents. Flat-fee pricing. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/chicago-wills-lawyer/',
  },
  openGraph: {
    title: 'Chicago Wills Lawyer | Illinois Last Will & Testament Attorney',
    description: 'Experienced Chicago wills lawyer helping Illinois residents create comprehensive last will and testament documents. Flat-fee pricing. Call (312) 373-0731.',
    url: 'https://www.illinoisestatelaw.com/chicago-wills-lawyer/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Chicago Wills Lawyer | Illinois Last Will & Testament Attorney',
    description: 'Experienced Chicago wills lawyer helping Illinois residents create comprehensive last will and testament documents. Flat-fee pricing. Call (312) 373-0731.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.illinoisestatelaw.com/' },
    { '@type': 'ListItem', position: 2, name: 'Chicago Wills Lawyer', item: 'https://www.illinoisestatelaw.com/chicago-wills-lawyer/' },
  ],
};

export default function ChicagoWillsLawyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
