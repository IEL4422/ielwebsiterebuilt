import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chicago Trusts Lawyer | Illinois Revocable Living Trust Attorney',
  description: 'Experienced Chicago trusts lawyer helping Illinois families avoid probate with revocable living trusts. Protect privacy and plan for incapacity. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/chicago-revocable-trusts-lawyer/',
  },
  openGraph: {
    title: 'Chicago Trusts Lawyer | Illinois Revocable Living Trust Attorney',
    description: 'Experienced Chicago trusts lawyer helping Illinois families avoid probate with revocable living trusts. Protect privacy and plan for incapacity. Call (312) 373-0731.',
    url: 'https://www.illinoisestatelaw.com/chicago-revocable-trusts-lawyer/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Chicago Trusts Lawyer | Illinois Revocable Living Trust Attorney',
    description: 'Experienced Chicago trusts lawyer helping Illinois families avoid probate with revocable living trusts. Protect privacy and plan for incapacity. Call (312) 373-0731.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.illinoisestatelaw.com/' },
    { '@type': 'ListItem', position: 2, name: 'Chicago Revocable Trusts Lawyer', item: 'https://www.illinoisestatelaw.com/chicago-revocable-trusts-lawyer/' },
  ],
};

export default function ChicagoRevocableTrustsLawyerLayout({
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
