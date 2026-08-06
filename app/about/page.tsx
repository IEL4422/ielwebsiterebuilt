import { Metadata } from 'next';
import { AboutContent } from './AboutContent';
import { ATTORNEYS, personSchema, breadcrumbSchema } from '@/lib/seo';

const TITLE = 'Our Illinois Estate Planning & Probate Attorneys | Illinois Estate Law';
const DESCRIPTION =
  'Meet the attorneys of Illinois Estate Law: Mary Liberty, Yassmin Koudmani, Victoria Lozano, and Anna Rafanelli, serving clients in estate planning, probate, guardianship, and real estate throughout Illinois.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/about/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/about/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'profile',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const breadcrumb = breadcrumbSchema([{ name: 'About Our Attorneys', path: '/about/' }]);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {ATTORNEYS.map((attorney) => (
        <script
          key={attorney.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(attorney)) }}
        />
      ))}
      <AboutContent />
    </>
  );
}
