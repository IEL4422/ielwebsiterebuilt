import Link from 'next/link';
import { FileText, Shield, Gavel, UserCheck, Heart, FileCheck, Home, Building2 } from 'lucide-react';

const ICON_MAP = {
  FileText,
  Shield,
  Gavel,
  UserCheck,
  Heart,
  FileCheck,
  Home,
  Building2,
};

const SERVICES: Record<string, { name: string; href: string; icon: keyof typeof ICON_MAP; desc: string }> = {
  wills: {
    name: 'Wills',
    href: '/chicago-wills-lawyer/',
    icon: 'FileText',
    desc: 'Ensure your wishes are honored and your estate is distributed as you intend.',
  },
  trusts: {
    name: 'Revocable Trusts',
    href: '/chicago-revocable-trusts-lawyer/',
    icon: 'Shield',
    desc: 'Avoid probate and protect your assets with a living trust tailored to your family.',
  },
  probate: {
    name: 'Probate',
    href: '/chicago-probate-lawyer/',
    icon: 'Gavel',
    desc: 'Guided administration of an estate through Illinois probate court.',
  },
  poa: {
    name: 'Powers of Attorney',
    href: '/chicago-powers-of-attorney-lawyer/',
    icon: 'UserCheck',
    desc: 'Authorize a trusted person to manage your finances or make legal decisions.',
  },
  healthcare: {
    name: 'Healthcare Directives',
    href: '/chicago-healthcare-directives-lawyer/',
    icon: 'Heart',
    desc: 'Specify your medical wishes and appoint a healthcare agent in advance.',
  },
  prenup: {
    name: 'Prenuptial Agreements',
    href: '/chicago-prenuptial-agreements-lawyer/',
    icon: 'FileCheck',
    desc: 'Protect your assets and clarify financial expectations before marriage.',
  },
  deeds: {
    name: 'Deed Preparation',
    href: '/chicago-deeds-lawyer/',
    icon: 'Home',
    desc: 'Transfer real property quickly and correctly with attorney-prepared deeds.',
  },
  closing: {
    name: 'Real Estate Closings',
    href: '/chicago-real-estate-closings-lawyer/',
    icon: 'Building2',
    desc: 'Attorney representation at your residential real estate closing.',
  },
};

const RELATED: Record<string, string[]> = {
  wills:      ['trusts', 'poa', 'healthcare'],
  trusts:     ['wills', 'poa', 'healthcare'],
  probate:    ['wills', 'trusts', 'deeds'],
  poa:        ['healthcare', 'wills', 'trusts'],
  healthcare: ['poa', 'wills', 'trusts'],
  prenup:     ['wills', 'trusts', 'poa'],
  deeds:      ['closing', 'probate', 'trusts'],
  closing:    ['deeds', 'probate', 'wills'],
};

export default function RelatedServices({ currentPage }: { currentPage: string }) {
  const keys = RELATED[currentPage] ?? [];
  if (keys.length === 0) return null;
  const items = keys.map((k) => SERVICES[k]);

  return (
    <div className="my-10">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-lg font-bold text-slate-800 whitespace-nowrap">You May Also Need</h2>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((service) => {
          const Icon = ICON_MAP[service.icon];
          return (
            <Link key={service.href} href={service.href}>
              <div className="flex flex-col h-full rounded-[16px] p-5 bg-gradient-to-br from-[#2D3E50] via-[#3a5068] to-[#4A708B] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                <Icon className="w-8 h-8 text-white mb-3 flex-shrink-0" />
                <h3 className="text-white font-bold mb-2" style={{ fontSize: '15px' }}>
                  {service.name}
                </h3>
                <p className="text-white/80 text-xs mb-4 flex-1">{service.desc}</p>
                <span className="text-white text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
