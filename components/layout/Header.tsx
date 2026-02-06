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
      { label: 'Wills', href: '/chicago-wills-lawyer/' },
      { label: 'Trusts', href: '/chicago-revocable-trusts-lawyer/' },
      { label: 'Probate', href: '/chicago-probate-lawyer/' },
      { label: 'Healthcare Directives', href: '/chicago-healthcare-directives-lawyer/' },
      { label: 'Powers of Attorney', href: '/chicago-powers-of-attorney-lawyer/' },
      { label: 'Deeds', href: '/chicago-deeds-lawyer/' },
      { label: 'Prenuptial Agreements', href: '/chicago-prenuptial-agreements-lawyer/' },
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
      { label: 'Downloadable Guide', href: '/illinois-estate-law-guidebook.pdf', external: true },
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
      <header className="hidden lg:block sticky top-0 z-[999] bg-[#2D3E50]">
        <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
          <div className="flex items-center justify-between py-4 pb-5">
            <div className="w-[25%] flex items-center">
              <Link href="/">
                <Image
                  src="https://i.imgur.com/bSfExtA.png"
                  alt="Illinois Estate Law"
                  width={160}
                  height={48}
                  className="w-[160px] h-auto"
                  priority
                />
              </Link>
            </div>

            <div className="w-[75%] flex flex-col items-end gap-3">
              <div className="flex items-center pb-2">
                <Link
                  href="/get-started/"
                  className="bg-transparent border border-[#FEFEFE] text-[#FEFEFE] font-bold text-sm px-5 py-2.5 rounded-l-full hover:bg-[#4A708B] hover:border-[#4A708B] transition-colors"
                >
                  Get Started Online
                </Link>
                <Link
                  href="/book-consultation/"
                  className="bg-[#FEFEFE] border border-[#FEFEFE] text-[#2D3E50] font-bold text-sm px-5 py-2.5 rounded-r-full hover:bg-[#4A708B] hover:border-[#4A708B] hover:text-[#FEFEFE] transition-colors"
                >
                  Free Consultation
                </Link>
              </div>

              <nav className="flex items-center gap-6 pt-2">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.children ? (
                      <button
                        className="flex items-center gap-1 text-[#FEFEFE] hover:text-[#CCCCCC] text-sm font-medium uppercase transition-colors whitespace-nowrap"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center gap-1 text-[#FEFEFE] hover:text-[#CCCCCC] text-sm font-medium uppercase transition-colors whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.children && openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-0 pt-[22px] min-w-[220px] z-50">
                        <div className="bg-[#F3F3F3] border border-[#2D3E50] rounded-lg overflow-hidden shadow-lg">
                          {item.children.map((child, index) => {
                            const isExternal = 'external' in child && child.external;
                            return isExternal ? (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block px-5 py-3.5 text-[#2D3E50] text-base font-medium uppercase hover:bg-[#2D3E50] hover:text-[#FEFEFE] transition-colors ${
                                  index < item.children!.length - 1 ? 'border-b border-[#DFDADE]' : ''
                                }`}
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={`block px-5 py-3.5 text-[#2D3E50] text-base font-medium uppercase hover:bg-[#2D3E50] hover:text-[#FEFEFE] transition-colors ${
                                  index < item.children!.length - 1 ? 'border-b border-[#DFDADE]' : ''
                                }`}
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
            </div>
          </div>
        </div>
      </header>

      <header className="lg:hidden sticky top-0 z-[999]">
        <div className="bg-[#2D3E50] px-5 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="https://i.imgur.com/bSfExtA.png"
                alt="Illinois Estate Law"
                width={125}
                height={38}
                className="w-[125px] h-auto"
                priority
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/get-started/"
                className="bg-[#FEFEFE] text-[#2D3E50] font-bold text-xs px-3 py-2 rounded-full hover:bg-[#4A708B] hover:text-[#FEFEFE] transition-colors whitespace-nowrap"
              >
                Get Started
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#FEFEFE] p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="bg-[#F3F3F3] border-t border-[#2D3E50]">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-5 py-4 text-[#2D3E50] text-sm font-medium uppercase border-b border-[#2D3E50] hover:bg-[#E8E8E8] transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileDropdown === item.label && (
                        <div className="bg-[#E8E8E8]">
                          {item.children.map((child) => {
                            const isExternal = 'external' in child && child.external;
                            return isExternal ? (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-8 py-3 text-[#2D3E50] text-sm font-medium uppercase border-b border-[#DFDADE] hover:bg-[#2D3E50] hover:text-[#FEFEFE] transition-colors"
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
                                className="block px-8 py-3 text-[#2D3E50] text-sm font-medium uppercase border-b border-[#DFDADE] hover:bg-[#2D3E50] hover:text-[#FEFEFE] transition-colors"
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
                      className="block px-5 py-4 text-[#2D3E50] text-sm font-medium uppercase border-b border-[#2D3E50] hover:bg-[#E8E8E8] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex flex-col">
              <Link
                href="/book-consultation/"
                className="block w-full bg-[#231F20] text-[#FEFEFE] font-bold text-center py-3.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
