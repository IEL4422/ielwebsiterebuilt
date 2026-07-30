'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'Our Firm', href: '/about/' },
      { label: 'Locations', href: '/locations/' },
      { label: 'Areas We Serve', href: '/areas-we-serve/' },
      { label: "Why We're Different", href: '/why-we-re-different/' },
      { label: 'The Process', href: '/process/' },
    ],
  },
  {
    label: 'Practice Areas',
    href: '/chicago-probate-lawyer/',
    children: [
      { label: 'Estate Planning', href: '/estate-planning/' },
      { label: 'Probate', href: '/chicago-probate-lawyer/' },
      { label: 'Guardianship', href: '/guardianship/' },
      { label: 'Real Estate', href: '/chicago-real-estate-closings-lawyer/' },
      { label: 'Deeds', href: '/chicago-deeds-lawyer/' },
    ],
  },
  { label: 'Services', href: '/services-pricing/' },
  {
    label: 'Resources',
    href: '/learning-center/',
    children: [
      { label: 'Client Portal', href: 'https://portal.illinoisestatelaw.com', external: true },
      { label: 'Learning Center', href: '/learning-center/' },
      { label: 'Estate Tax Calculator', href: '/illinois-estate-tax-calculator/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Frequently Asked Questions', href: '/frequently-asked-questions/' },
      { label: 'Submit Referral', href: '/submit-referral/' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  return (
    <>
      {/* ===== Desktop header (modernized, shared across all pages) ===== */}
      <header className="hidden lg:block sticky top-0 z-[999] bg-white/90 backdrop-blur-md border-b border-[#E3EAF1]">
        <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
          <div className="flex items-center justify-between gap-6 h-[74px]">
            <Link href="/" aria-label="Illinois Estate Law home" className="flex items-center shrink-0">
              <Image
                src="https://i.imgur.com/bSfExtA.png"
                alt="Illinois Estate Law"
                width={160}
                height={44}
                className="h-11 w-auto"
                priority
              />
            </Link>

            <nav className="flex items-center gap-7">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children ? (
                    <button className="group relative flex items-center gap-1 text-[#33414E] hover:text-[#547298] text-[15px] font-semibold transition-colors whitespace-nowrap">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                      <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-0 bg-[#547298] transition-all duration-200 group-hover:w-full" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="group relative flex items-center text-[#33414E] hover:text-[#547298] text-[15px] font-semibold transition-colors whitespace-nowrap"
                    >
                      {item.label}
                      <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-0 bg-[#547298] transition-all duration-200 group-hover:w-full" />
                    </Link>
                  )}

                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-4 min-w-[230px] z-50">
                      <div className="bg-white border border-[#E3EAF1] rounded-xl shadow-xl overflow-hidden py-1">
                        {item.children.map((child) => {
                          const isExternal = 'external' in child && child.external;
                          return isExternal ? (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2.5 text-sm font-medium text-[#547298] hover:bg-[#F6F9FC] transition-colors"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm font-medium text-[#33414E] hover:bg-[#F6F9FC] hover:text-[#547298] transition-colors"
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/book-consultation/"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#7E9CC0] bg-white px-5 py-2.5 text-sm font-bold text-[#33414E] hover:border-[#547298] hover:text-[#547298] hover:bg-[#F6F9FC] transition-colors whitespace-nowrap"
              >
                Free Consultation
              </Link>
              <Link
                href="/get-started/"
                className="inline-flex items-center justify-center rounded-full bg-[#547298] px-5 py-2.5 text-sm font-bold text-white shadow-[0_6px_16px_rgba(84,114,152,0.28)] hover:bg-[#33414E] transition-colors whitespace-nowrap"
              >
                Get Started Online
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Mobile header (modernized, shared across all pages) ===== */}
      <header className="lg:hidden sticky top-0 z-[999] bg-white/95 backdrop-blur-md border-b border-[#E3EAF1]">
        <div className="px-5 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Illinois Estate Law home">
            <Image
              src="https://i.imgur.com/bSfExtA.png"
              alt="Illinois Estate Law"
              width={130}
              height={38}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/get-started/"
              className="rounded-full bg-[#547298] text-white font-bold text-xs px-3.5 py-2 hover:bg-[#33414E] transition-colors whitespace-nowrap"
            >
              Get Started
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#33414E] p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="bg-white border-t border-[#E3EAF1] max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col py-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-5 py-3.5 text-[#33414E] text-[15px] font-semibold border-b border-[#E3EAF1] hover:bg-[#F6F9FC] transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileDropdown === item.label && (
                        <div className="bg-[#F6F9FC]">
                          {item.children.map((child) => {
                            const isExternal = 'external' in child && child.external;
                            return isExternal ? (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-8 py-3 text-sm font-medium text-[#547298] border-b border-[#E3EAF1] hover:bg-white transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setOpenMobileDropdown(null);
                                }}
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-8 py-3 text-sm font-medium text-[#33414E] border-b border-[#E3EAF1] hover:bg-white hover:text-[#547298] transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setOpenMobileDropdown(null);
                                }}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-5 py-3.5 text-[#33414E] text-[15px] font-semibold border-b border-[#E3EAF1] hover:bg-[#F6F9FC] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="p-4 flex flex-col gap-3 border-t border-[#E3EAF1]">
              <Link
                href="/book-consultation/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center rounded-full border-2 border-[#7E9CC0] bg-white px-5 py-3 text-sm font-bold text-[#33414E] hover:border-[#547298] hover:text-[#547298] transition-colors"
              >
                Free Consultation
              </Link>
              <Link
                href="/get-started/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center rounded-full bg-[#547298] px-5 py-3 text-sm font-bold text-white hover:bg-[#33414E] transition-colors"
              >
                Get Started Online
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
