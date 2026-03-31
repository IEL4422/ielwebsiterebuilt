import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chicago Healthcare Directives Lawyer | Illinois Living Will Attorney',
  description: 'Experienced Chicago healthcare directives lawyer helping you create living wills and HIPAA authorizations that protect your medical wishes. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/chicago-healthcare-directives-lawyer/',
  },
  openGraph: {
    title: 'Chicago Healthcare Directives Lawyer | Illinois Living Will Attorney',
    description: 'Experienced Chicago healthcare directives lawyer helping you create living wills and HIPAA authorizations that protect your medical wishes. Call (312) 373-0731.',
    url: 'https://www.illinoisestatelaw.com/chicago-healthcare-directives-lawyer/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HealthcareDirectivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
