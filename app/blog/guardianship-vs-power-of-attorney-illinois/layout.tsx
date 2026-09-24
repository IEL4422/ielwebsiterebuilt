import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guardianship vs. Power of Attorney in Illinois',
  description:
    'Compare guardianship and power of attorney in Illinois, including capacity, cost, timing, court oversight, and when each legal option may be needed.',
  openGraph: {
    title: 'Guardianship vs. Power of Attorney in Illinois',
    description:
      'Guardianship vs. POA in Illinois: key differences, costs, and why a power of attorney now can spare your family a lengthy court guardianship process.',
    url: 'https://www.illinoisestatelaw.com/blog/guardianship-vs-power-of-attorney-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Guardianship vs. Power of Attorney in Illinois',
    description:
      'Guardianship vs. POA in Illinois: key differences, costs, and why a power of attorney now can spare your family a lengthy court guardianship process.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/guardianship-vs-power-of-attorney-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
