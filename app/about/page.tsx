import { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'Meet Our Team | Illinois Estate Law',
  description: "Meet the team at Illinois Estate Law — experienced estate planning and probate professionals dedicated to making high-quality legal planning accessible for Illinois families.",
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/about/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/about/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Meet Our Team | Illinois Estate Law',
    description: "Meet the team at Illinois Estate Law — experienced estate planning and probate professionals dedicated to making high-quality legal planning accessible for Illinois families.",
  },
  twitter: {
    card: 'summary',
    title: 'Meet Our Team | Illinois Estate Law',
    description: "Meet the team at Illinois Estate Law — experienced estate planning and probate professionals dedicated to making high-quality legal planning accessible for Illinois families.",
  },
};

const attorneySchema = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Mary Liberty",
  "url": "https://www.illinoisestatelaw.com/about",
  "jobTitle": "Estate Planning & Probate Attorney",
  "worksFor": {
    "@type": "LegalService",
    "name": "Illinois Estate Law",
    "url": "https://www.illinoisestatelaw.com"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Loyola University Chicago School of Law"
  },
  "award": "SuperLawyers Rising Star 2025, 2026",
  "knowsAbout": [
    "Estate Planning",
    "Probate Law",
    "Wills",
    "Trusts",
    "Powers of Attorney",
    "Illinois Estate Law"
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneySchema) }}
      />
      <AboutContent />
    </>
  );
}
