import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Estate Planning Packages | Illinois Estate Law',
  description: 'Compare our estate planning packages side by side. Find the right plan for your family with transparent flat-fee pricing. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/compare-packages/',
  },
};

export default function ComparePackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
