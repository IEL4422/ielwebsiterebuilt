import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medicaid Planning & Estate Planning in Illinois | Illinois Estate Law',
  description:
    'Learn how Medicaid planning and estate planning work together in Illinois — protecting your home, assets, and family while qualifying for long-term care benefits.',
  openGraph: {
    title: 'Medicaid Planning & Estate Planning in Illinois | Illinois Estate Law',
    description:
      'Learn how Medicaid planning and estate planning work together in Illinois — protecting your home, assets, and family while qualifying for long-term care benefits.',
    url: 'https://www.illinoisestatelaw.com/blog/medicaid-planning-and-estate-planning-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Medicaid Planning & Estate Planning in Illinois | Illinois Estate Law',
    description:
      'Learn how Medicaid planning and estate planning work together in Illinois — protecting your home, assets, and family while qualifying for long-term care benefits.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/medicaid-planning-and-estate-planning-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
