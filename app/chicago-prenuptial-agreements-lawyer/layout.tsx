import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Prenuptial Agreements | Illinois Estate Law' },
  description: 'Experienced Chicago prenuptial agreements lawyer helping couples protect assets and plan for the future. Fair, enforceable prenups in Illinois. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/chicago-prenuptial-agreements-lawyer/',
  },
  openGraph: {
    title: 'Prenuptial Agreements | Illinois Estate Law',
    description: 'Experienced Chicago prenuptial agreements lawyer helping couples protect assets and plan for the future. Fair, enforceable prenups in Illinois. Call (312) 373-0731.',
    url: 'https://www.illinoisestatelaw.com/chicago-prenuptial-agreements-lawyer/',
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
    { '@type': 'ListItem', position: 2, name: 'Chicago Prenuptial Agreements Lawyer', item: 'https://www.illinoisestatelaw.com/chicago-prenuptial-agreements-lawyer/' },
  ],
};

export default function PrenuptialAgreementsLayout({
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
