import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chicago Powers of Attorney Lawyer | Illinois POA Attorney',
  description: 'Experienced Chicago powers of attorney lawyer drafting financial and healthcare POA documents for Illinois residents. Protect your future. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/chicago-powers-of-attorney-lawyer/',
  },
  openGraph: {
    title: 'Chicago Powers of Attorney Lawyer | Illinois POA Attorney',
    description: 'Experienced Chicago powers of attorney lawyer drafting financial and healthcare POA documents for Illinois residents. Protect your future. Call (312) 373-0731.',
    url: 'https://www.illinoisestatelaw.com/chicago-powers-of-attorney-lawyer/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.illinoisestatelaw.com/' },
    { '@type': 'ListItem', position: 2, name: 'Chicago Powers of Attorney Lawyer', item: 'https://www.illinoisestatelaw.com/chicago-powers-of-attorney-lawyer/' },
  ],
};

export default function PowersOfAttorneyLayout({
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
