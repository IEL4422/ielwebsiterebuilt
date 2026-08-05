import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Illinois Estate Tax Cliff Explained | Illinois Estate Law',
  description:
    "Illinois's estate tax cliff means estates just above $4M can owe far more than expected. Learn what causes the cliff, who it affects, and how to plan around it.",
  openGraph: {
    title: 'Illinois Estate Tax Cliff Explained | Illinois Estate Law',
    description:
      "Illinois's estate tax cliff means estates just above $4M can owe far more than expected. Learn what causes the cliff, who it affects, and how to plan around it.",
    url: 'https://www.illinoisestatelaw.com/blog/illinois-estate-tax-cliff-explained/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Illinois Estate Tax Cliff Explained | Illinois Estate Law',
    description:
      "Illinois's estate tax cliff means estates just above $4M can owe far more than expected. Learn what causes the cliff, who it affects, and how to plan around it.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/illinois-estate-tax-cliff-explained/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
