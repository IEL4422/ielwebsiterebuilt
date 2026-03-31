import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In-Person Consultations | Illinois Estate Law',
  description: 'Schedule an in-person estate planning or probate consultation at our Chicago office. Meet face-to-face with an experienced Illinois attorney. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/in-person-consultations/',
  },
};

export default function InPersonConsultationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
