import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guardian of the Person vs. Guardian of the Estate Illinois | Illinois Estate Law',
  description:
    'Illinois splits guardianship into two roles — care of the person and management of the estate. Learn the duties, the accounting rules, and how the roles interact.',
  openGraph: {
    title: 'Guardian of the Person vs. Guardian of the Estate Illinois | Illinois Estate Law',
    description:
      'Illinois splits guardianship into two roles — care of the person and management of the estate. Learn the duties, the accounting rules, and how the roles interact.',
    url: 'https://www.illinoisestatelaw.com/blog/guardian-of-the-person-vs-estate-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Guardian of the Person vs. Guardian of the Estate Illinois | Illinois Estate Law',
    description:
      'Illinois splits guardianship into two roles — care of the person and management of the estate. Learn the duties, the accounting rules, and how the roles interact.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/guardian-of-the-person-vs-estate-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
