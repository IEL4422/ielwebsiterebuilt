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

export default function ChicagoDeedsLawyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
