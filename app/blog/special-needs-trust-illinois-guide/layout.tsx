import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Special Needs Trusts in Illinois Guide | Illinois Estate Law',
  description:
    'How special needs trusts work in Illinois — preserve Medicaid and SSI while providing for a disabled loved one. Third-party vs. first-party SNTs explained.',
  openGraph: {
    title: 'Special Needs Trusts in Illinois Guide | Illinois Estate Law',
    description:
      'How special needs trusts work in Illinois — preserve Medicaid and SSI while providing for a disabled loved one. Third-party vs. first-party SNTs explained.',
    url: 'https://www.illinoisestatelaw.com/blog/special-needs-trust-illinois-guide/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Special Needs Trusts in Illinois Guide | Illinois Estate Law',
    description:
      'How special needs trusts work in Illinois — preserve Medicaid and SSI while providing for a disabled loved one. Third-party vs. first-party SNTs explained.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/special-needs-trust-illinois-guide/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
