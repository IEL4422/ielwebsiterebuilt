'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type FeatureKey = 'Revocable Living Trust' | 'Last Will & Testament' | 'Pour-Over Will' |
  'Power of Attorney for Healthcare' | 'Power of Attorney for Property' |
  'Healthcare Directive (Living Will)' | 'Transfer-on-Death Instrument' |
  'Remembrance & Services Memorandum' | 'Personal Property Memorandum' |
  'Deed Transfer of Real Estate to Trust' | 'Full Trust Funding' | 'Online or Mobile Notarization' |
  'Physical & Digital Portfolio' | 'Access to Client Portal' | 'Unlimited Attorney Consultation';

type Features = {
  [key in FeatureKey]: boolean | string;
};

export default function ComparePackagesPage() {
  const [clientType, setClientType] = useState<'individual' | 'joint'>('individual');

  const packages: Array<{
    id: string;
    name: string;
    individualPrice: number;
    jointPrice: number;
    description: string;
    recommended?: boolean;
    features: Features;
  }> = [
    {
      id: 'trust-package',
      name: 'Trust Package',
      individualPrice: 3500,
      jointPrice: 5000,
      description: 'Comprehensive trust-based estate plan',
      recommended: true,
      features: {
        'Revocable Living Trust': true,
        'Last Will & Testament': true,
        'Pour-Over Will': true,
        'Power of Attorney for Healthcare': true,
        'Power of Attorney for Property': true,
        'Healthcare Directive (Living Will)': true,
        'Transfer-on-Death Instrument': false,
        'Remembrance & Services Memorandum': true,
        'Personal Property Memorandum': true,
        'Deed Transfer of Real Estate to Trust': '(1) Included',
        'Full Trust Funding': true,
        'Online or Mobile Notarization': true,
        'Physical & Digital Portfolio': true,
        'Access to Client Portal': true,
        'Unlimited Attorney Consultation': true,
      }
    },
    {
      id: 'probate-avoidance-package',
      name: 'Probate Avoidance Package',
      individualPrice: 1750,
      jointPrice: 2250,
      description: 'Essential documents to avoid probate',
      features: {
        'Revocable Living Trust': false,
        'Last Will & Testament': true,
        'Pour-Over Will': false,
        'Power of Attorney for Healthcare': true,
        'Power of Attorney for Property': true,
        'Healthcare Directive (Living Will)': true,
        'Transfer-on-Death Instrument': true,
        'Remembrance & Services Memorandum': true,
        'Personal Property Memorandum': true,
        'Deed Transfer of Real Estate to Trust': false,
        'Full Trust Funding': false,
        'Online or Mobile Notarization': true,
        'Physical & Digital Portfolio': true,
        'Access to Client Portal': true,
        'Unlimited Attorney Consultation': true,
      }
    },
    {
      id: 'will-package',
      name: 'Will Package',
      individualPrice: 1250,
      jointPrice: 1750,
      description: 'Complete will-based estate plan',
      features: {
        'Revocable Living Trust': false,
        'Last Will & Testament': true,
        'Pour-Over Will': false,
        'Power of Attorney for Healthcare': true,
        'Power of Attorney for Property': true,
        'Healthcare Directive (Living Will)': true,
        'Transfer-on-Death Instrument': false,
        'Remembrance & Services Memorandum': true,
        'Personal Property Memorandum': true,
        'Deed Transfer of Real Estate to Trust': false,
        'Full Trust Funding': false,
        'Online or Mobile Notarization': true,
        'Physical & Digital Portfolio': true,
        'Access to Client Portal': true,
        'Unlimited Attorney Consultation': true,
      }
    },
    {
      id: 'revocable-living-trust',
      name: 'À La Carte Trust',
      individualPrice: 2500,
      jointPrice: 3500,
      description: 'Trust with essential support services',
      features: {
        'Revocable Living Trust': true,
        'Last Will & Testament': false,
        'Pour-Over Will': true,
        'Power of Attorney for Healthcare': false,
        'Power of Attorney for Property': false,
        'Healthcare Directive (Living Will)': false,
        'Transfer-on-Death Instrument': false,
        'Remembrance & Services Memorandum': false,
        'Personal Property Memorandum': false,
        'Deed Transfer of Real Estate to Trust': '(1) Included',
        'Full Trust Funding': true,
        'Online or Mobile Notarization': true,
        'Physical & Digital Portfolio': true,
        'Access to Client Portal': true,
        'Unlimited Attorney Consultation': true,
      }
    }
  ];

  const allFeatures: FeatureKey[] = [
    'Revocable Living Trust',
    'Last Will & Testament',
    'Pour-Over Will',
    'Power of Attorney for Healthcare',
    'Power of Attorney for Property',
    'Healthcare Directive (Living Will)',
    'Transfer-on-Death Instrument',
    'Remembrance & Services Memorandum',
    'Personal Property Memorandum',
    'Deed Transfer of Real Estate to Trust',
    'Full Trust Funding',
    'Online or Mobile Notarization',
    'Physical & Digital Portfolio',
    'Access to Client Portal',
    'Unlimited Attorney Consultation',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/services-pricing" className="inline-flex items-center text-[#2d3e50] hover:text-[#4a708b] mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>

          <h1 className="font-['Plus_Jakarta_Sans'] font-bold text-[48px] text-[#2d3e50] mb-4">
            Compare Estate Planning Packages
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Find the right estate planning solution for your needs. Compare features, pricing, and what's included in each package.
          </p>

          <div className="flex gap-4 mb-8">
            <Button
              onClick={() => setClientType('individual')}
              variant={clientType === 'individual' ? 'default' : 'outline'}
              className={clientType === 'individual' ? 'bg-[#2d3e50] hover:bg-[#4a708b]' : ''}
            >
              Individual Pricing
            </Button>
            <Button
              onClick={() => setClientType('joint')}
              variant={clientType === 'joint' ? 'default' : 'outline'}
              className={clientType === 'joint' ? 'bg-[#2d3e50] hover:bg-[#4a708b]' : ''}
            >
              Joint/Couple Pricing
            </Button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#2d3e50]">
                <th className="p-4 text-left text-white font-semibold w-1/5">Features</th>
                {packages.map((pkg) => (
                  <th key={pkg.id} className="p-4 text-center text-white font-semibold w-1/5 border-l border-slate-600">
                    <div className="space-y-2">
                      {pkg.recommended && (
                        <span className="inline-block bg-amber-400 text-[#2d3e50] text-xs font-bold px-3 py-1 rounded-full">
                          RECOMMENDED
                        </span>
                      )}
                      <div className="text-xl font-bold">{pkg.name}</div>
                      <div className="text-3xl font-bold">
                        ${clientType === 'individual' ? pkg.individualPrice.toLocaleString() : pkg.jointPrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-200">{pkg.description}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, idx) => (
                <tr key={feature} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="p-4 font-medium text-[#2d3e50] border-b border-slate-200">
                    {feature}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="p-4 text-center border-b border-l border-slate-200">
                      {pkg.features[feature] === true && (
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                      )}
                      {pkg.features[feature] === false && (
                        <X className="h-6 w-6 text-gray-300 mx-auto" />
                      )}
                      {typeof pkg.features[feature] === 'string' && (
                        <span className="text-sm text-[#2d3e50] font-medium">
                          {pkg.features[feature]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-white">
                <td className="p-4"></td>
                {packages.map((pkg) => (
                  <td key={pkg.id} className="p-4 text-center border-l border-slate-200">
                    <Link href={`/purchase-service?service=${pkg.id}`}>
                      <Button className={`w-full ${pkg.recommended ? 'bg-[#2d3e50] hover:bg-[#4a708b]' : 'bg-slate-600 hover:bg-slate-700'}`}>
                        Select Package
                      </Button>
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="p-6 border-2 border-slate-200">
              {pkg.recommended && (
                <span className="inline-block bg-amber-400 text-[#2d3e50] text-xs font-bold px-3 py-1 rounded-full mb-3">
                  RECOMMENDED
                </span>
              )}
              <h3 className="text-2xl font-bold text-[#2d3e50] mb-2">{pkg.name}</h3>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <div className="text-4xl font-bold text-[#2d3e50] mb-6">
                ${clientType === 'individual' ? pkg.individualPrice.toLocaleString() : pkg.jointPrice.toLocaleString()}
              </div>

              <div className="space-y-3 mb-6">
                {allFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {pkg.features[feature] === true && (
                        <Check className="h-5 w-5 text-green-600" />
                      )}
                      {pkg.features[feature] === false && (
                        <X className="h-5 w-5 text-gray-300" />
                      )}
                      {typeof pkg.features[feature] === 'string' && (
                        <Check className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <span className={pkg.features[feature] ? 'text-[#2d3e50]' : 'text-gray-400'}>
                        {feature}
                      </span>
                      {typeof pkg.features[feature] === 'string' && (
                        <span className="text-sm text-gray-600 ml-2">
                          {pkg.features[feature]}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Link href={`/purchase-service?service=${pkg.id}`}>
                <Button className={`w-full ${pkg.recommended ? 'bg-[#2d3e50] hover:bg-[#4a708b]' : 'bg-slate-600 hover:bg-slate-700'}`}>
                  Select Package
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <Card className="mt-12 p-8 bg-slate-50 border-2 border-slate-200">
          <h2 className="text-2xl font-bold text-[#2d3e50] mb-4">Need Help Choosing?</h2>
          <p className="text-gray-700 mb-4">
            Not sure which package is right for you? Our team can help you understand which option best fits your needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book-consultation">
              <Button className="bg-[#2d3e50] hover:bg-[#4a708b]">
                Book a Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </Card>

        {/* Key Differences Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-6 border-2 border-slate-200">
            <h3 className="text-xl font-bold text-[#2d3e50] mb-4">Trust Package vs. À La Carte Trust</h3>
            <p className="text-gray-700 mb-4">
              The <strong>Trust Package</strong> provides a complete estate plan with a trust, will, powers of attorney, and all supporting documents.
            </p>
            <p className="text-gray-700">
              The <strong>À La Carte Trust</strong> includes only the revocable living trust document itself, without any additional estate planning documents or services.
            </p>
          </Card>

          <Card className="p-6 border-2 border-slate-200">
            <h3 className="text-xl font-bold text-[#2d3e50] mb-4">Probate Avoidance vs. Will Package</h3>
            <p className="text-gray-700 mb-4">
              The <strong>Probate Avoidance Package</strong> includes a Transfer-on-Death Instrument, which helps your real estate avoid probate without creating a trust.
            </p>
            <p className="text-gray-700">
              The <strong>Will Package</strong> is a traditional will-based plan that will require probate but is more affordable for those who don't own real estate or prefer a simpler approach.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
