import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | Illinois Estate Law',
  description: 'Schedule a free estate planning or probate consultation with Illinois Estate Law. Virtual and in-person appointments available. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/book-consultation/',
  },
  openGraph: {
    title: 'Book a Consultation | Illinois Estate Law',
    description: 'Schedule a free estate planning or probate consultation with Illinois Estate Law. Virtual and in-person appointments available. Call (312) 373-0731.',
    url: 'https://www.illinoisestatelaw.com/book-consultation/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BookConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
