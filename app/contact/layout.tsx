import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Illinois Estate Law | Schedule a Free Consultation',
  description: 'Contact Illinois Estate Law at (312) 373-0731 or online. Schedule a free estate planning or probate consultation. Chicago office at 4422 N. Ravenswood Ave.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/contact/',
  },
  openGraph: {
    title: 'Contact Illinois Estate Law | Schedule a Free Consultation',
    description: 'Contact Illinois Estate Law at (312) 373-0731 or online. Schedule a free estate planning or probate consultation. Chicago office at 4422 N. Ravenswood Ave.',
    url: 'https://www.illinoisestatelaw.com/contact/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Illinois Estate Law | Schedule a Free Consultation',
    description: 'Contact Illinois Estate Law at (312) 373-0731 or online. Schedule a free estate planning or probate consultation. Chicago office at 4422 N. Ravenswood Ave.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
