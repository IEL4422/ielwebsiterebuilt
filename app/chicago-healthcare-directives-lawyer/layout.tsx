import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Healthcare Directives | Illinois Estate Law' },
  description: 'Experienced Chicago healthcare directives lawyer helping you create living wills and HIPAA authorizations that protect your medical wishes. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/chicago-healthcare-directives-lawyer/',
  },
  openGraph: {
    title: 'Healthcare Directives | Illinois Estate Law',
    description: 'Experienced Chicago healthcare directives lawyer helping you create living wills and HIPAA authorizations that protect your medical wishes. Call (312) 373-0731.',
    url: 'https://www.illinoisestatelaw.com/chicago-healthcare-directives-lawyer/',
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
    { '@type': 'ListItem', position: 2, name: 'Chicago Healthcare Directives Lawyer', item: 'https://www.illinoisestatelaw.com/chicago-healthcare-directives-lawyer/' },
  ],
};

export default function HealthcareDirectivesLayout({
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
