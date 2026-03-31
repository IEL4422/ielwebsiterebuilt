import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Purchase Service | Illinois Estate Law',
  description: 'Purchase estate planning or probate services from Illinois Estate Law. Secure flat-fee pricing with no hidden costs. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/purchase-service/',
  },
  robots: 'noindex, nofollow',
};

export default function PurchaseServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
