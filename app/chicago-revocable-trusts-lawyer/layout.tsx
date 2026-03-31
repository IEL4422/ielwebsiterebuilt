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

export default function ChicagoRevocableTrustsLawyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
