import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estate Planning Blog | Illinois Estate Law Insights & Guides',
  description: 'Read expert insights on Illinois estate planning, probate, wills, trusts, and powers of attorney. Practical guides from Chicago estate planning attorneys.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/blog/',
  },
  openGraph: {
    title: 'Estate Planning Blog | Illinois Estate Law Insights & Guides',
    description: 'Read expert insights on Illinois estate planning, probate, wills, trusts, and powers of attorney. Practical guides from Chicago estate planning attorneys.',
    url: 'https://www.illinoisestatelaw.com/blog/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Estate Planning Blog | Illinois Estate Law Insights & Guides',
    description: 'Read expert insights on Illinois estate planning, probate, wills, trusts, and powers of attorney. Practical guides from Chicago estate planning attorneys.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
