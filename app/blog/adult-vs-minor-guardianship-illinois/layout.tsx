import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adult vs. Minor Guardianship in Illinois | Illinois Estate Law',
  description:
    'Adult vs. minor guardianship in Illinois: two different proceedings under different statutes and standards. Compare purpose, evidence, duration, and cost.',
  openGraph: {
    title: 'Adult vs. Minor Guardianship in Illinois | Illinois Estate Law',
    description:
      'Adult vs. minor guardianship in Illinois: two different proceedings under different statutes and standards. Compare purpose, evidence, duration, and cost.',
    url: 'https://www.illinoisestatelaw.com/blog/adult-vs-minor-guardianship-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Adult vs. Minor Guardianship in Illinois | Illinois Estate Law',
    description:
      'Adult vs. minor guardianship in Illinois: two different proceedings under different statutes and standards. Compare purpose, evidence, duration, and cost.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/adult-vs-minor-guardianship-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
