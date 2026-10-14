import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Illinois Small Estate Affidavit Guide | Illinois Estate Law',
  description:
    'The Illinois Small Estate Affidavit lets heirs collect assets up to $150,000 without probate. Learn who qualifies, what assets it covers, and how to use it.',
  openGraph: {
    title: 'Illinois Small Estate Affidavit Guide | Illinois Estate Law',
    description:
      'The Illinois Small Estate Affidavit lets heirs collect assets up to $150,000 without probate. Learn who qualifies, what assets it covers, and how to use it.',
    url: 'https://www.illinoisestatelaw.com/blog/illinois-small-estate-affidavit-avoid-probate/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Illinois Small Estate Affidavit Guide | Illinois Estate Law',
    description:
      'The Illinois Small Estate Affidavit lets heirs collect assets up to $150,000 without probate. Learn who qualifies, what assets it covers, and how to use it.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/blog/illinois-small-estate-affidavit-avoid-probate/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
