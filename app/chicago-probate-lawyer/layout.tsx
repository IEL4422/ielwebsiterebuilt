import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chicago Probate Lawyer | Experienced Illinois Probate Attorney',
  description: 'Experienced Chicago probate lawyer guiding executors and beneficiaries through Illinois probate. Flat-fee probate administration in Cook County. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/chicago-probate-lawyer/',
  },
  openGraph: {
    title: 'Chicago Probate Lawyer | Experienced Illinois Probate Attorney',
    description: 'Experienced Chicago probate lawyer guiding executors and beneficiaries through Illinois probate. Flat-fee probate administration in Cook County. Call (312) 373-0731.',
    url: 'https://www.illinoisestatelaw.com/chicago-probate-lawyer/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Chicago Probate Lawyer | Experienced Illinois Probate Attorney',
    description: 'Experienced Chicago probate lawyer guiding executors and beneficiaries through Illinois probate. Flat-fee probate administration in Cook County. Call (312) 373-0731.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.illinoisestatelaw.com/' },
    { '@type': 'ListItem', position: 2, name: 'Chicago Probate Lawyer', item: 'https://www.illinoisestatelaw.com/chicago-probate-lawyer/' },
  ],
};

export default function ChicagoProbateLawyerLayout({
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
