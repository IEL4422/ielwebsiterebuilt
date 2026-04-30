import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chicago Deeds Lawyer | Illinois Real Estate Transfer Attorney',
  description: 'Experienced Chicago deeds lawyer handling property transfers, quitclaim deeds, and title transfers in Illinois. Protect your real estate interests. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/chicago-deeds-lawyer/',
  },
  openGraph: {
    title: 'Chicago Deeds Lawyer | Illinois Real Estate Transfer Attorney',
    description: 'Experienced Chicago deeds lawyer handling property transfers, quitclaim deeds, and title transfers in Illinois. Protect your real estate interests. Call (312) 373-0731.',
    url: 'https://www.illinoisestatelaw.com/chicago-deeds-lawyer/',
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
    { '@type': 'ListItem', position: 2, name: 'Chicago Deeds Lawyer', item: 'https://www.illinoisestatelaw.com/chicago-deeds-lawyer/' },
  ],
};

export default function ChicagoDeedsLawyerLayout({
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
