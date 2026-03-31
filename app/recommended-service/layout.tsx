import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recommended Service | Illinois Estate Law',
  description: 'View your recommended estate planning service from Illinois Estate Law. Tailored solutions based on your unique needs. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/recommended-service/',
  },
  robots: 'noindex, nofollow',
};

export default function RecommendedServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
