import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Fund a Revocable Trust in Illinois | Illinois Estate Law',
  description:
    'Learn how to fund a revocable living trust in Illinois — which assets to transfer, how to retitle real estate and bank accounts, and how to update beneficiary designations.',
  openGraph: {
    title: 'How to Fund a Revocable Trust in Illinois | Illinois Estate Law',
    description:
      'Learn how to fund a revocable living trust in Illinois — which assets to transfer, how to retitle real estate and bank accounts, and how to update beneficiary designations.',
    url: 'https://www.illinoisestatelaw.com/blog/how-to-fund-a-revocable-living-trust-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'How to Fund a Revocable Trust in Illinois | Illinois Estate Law',
    description:
      'Learn how to fund a revocable living trust in Illinois — which assets to transfer, how to retitle real estate and bank accounts, and how to update beneficiary designations.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/how-to-fund-a-revocable-living-trust-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
