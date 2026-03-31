import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Illinois Estate Tax Calculator | Estimate Your Estate Tax',
  description: 'Use our free Illinois estate tax calculator to estimate state estate taxes on your assets. Understand exemptions and rates for Illinois estates.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/illinois-estate-tax-calculator/',
  },
  openGraph: {
    title: 'Illinois Estate Tax Calculator | Estimate Your Estate Tax',
    description: 'Use our free Illinois estate tax calculator to estimate state estate taxes on your assets. Understand exemptions and rates for Illinois estates.',
    url: 'https://www.illinoisestatelaw.com/illinois-estate-tax-calculator/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EstateTaxCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
