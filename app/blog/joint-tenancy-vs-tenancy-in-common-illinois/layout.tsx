import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Joint Tenancy vs. Tenancy in Common in Illinois | Illinois Estate Law',
  description:
    'Learn the differences between joint tenancy and tenancy in common in Illinois — how each affects survivorship, probate, and your estate plan.',
  openGraph: {
    title: 'Joint Tenancy vs. Tenancy in Common in Illinois | Illinois Estate Law',
    description:
      'Learn the differences between joint tenancy and tenancy in common in Illinois — how each affects survivorship, probate, and your estate plan.',
    url: 'https://www.illinoisestatelaw.com/blog/joint-tenancy-vs-tenancy-in-common-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Joint Tenancy vs. Tenancy in Common in Illinois | Illinois Estate Law',
    description:
      'Learn the differences between joint tenancy and tenancy in common in Illinois — how each affects survivorship, probate, and your estate plan.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/joint-tenancy-vs-tenancy-in-common-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
