import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chicago Prenuptial Agreements Lawyer | Illinois Prenup Attorney',
  description: 'Experienced Chicago prenuptial agreements lawyer helping couples protect assets and plan for the future. Fair, enforceable prenups in Illinois. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/chicago-prenuptial-agreements-lawyer/',
  },
  openGraph: {
    title: 'Chicago Prenuptial Agreements Lawyer | Illinois Prenup Attorney',
    description: 'Experienced Chicago prenuptial agreements lawyer helping couples protect assets and plan for the future. Fair, enforceable prenups in Illinois. Call (312) 373-0731.',
    url: 'https://www.illinoisestatelaw.com/chicago-prenuptial-agreements-lawyer/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
};

export default function PrenuptialAgreementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
