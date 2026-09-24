import type { Metadata } from 'next';
import { adultGuardianshipFAQs } from '@/lib/practice-faqs';
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '@/lib/seo';

const PATH = '/adult-guardianship-lawyer/';
const URL = `https://www.illinoisestatelaw.com${PATH}`;
const TITLE = 'Illinois Adult Guardianship Lawyer | $5,000 Flat Fee';
const DESCRIPTION = 'Illinois adult guardianship lawyer for dementia, disability, stroke, and emergencies. $5,000 standard flat fee; $7,500 with temporary guardianship.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, siteName: 'Illinois Estate Law', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const schemas = [
  breadcrumbSchema([
    { name: 'POA & Guardianship', path: '/power-of-attorney-and-guardianship/' },
    { name: 'Adult Guardianship Lawyer', path: PATH },
  ]),
  serviceSchema({
    name: 'Illinois Adult and Emergency Guardianship Representation',
    description: DESCRIPTION,
    path: PATH,
    serviceType: 'Adult guardianship and temporary emergency guardianship',
  }),
  faqPageSchema(adultGuardianshipFAQs, PATH),
];

export default function AdultGuardianshipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      {children}
    </>
  );
}
