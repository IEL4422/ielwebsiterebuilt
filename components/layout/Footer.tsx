'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerNavItems = [
  { label: 'ABOUT', href: '/about/' },
  { label: 'SERVICES', href: '/services/' },
  { label: 'RESOURCES', href: '/learning-center/' },
  { label: 'CONTACT', href: '/contact/' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61561472971623', label: 'Facebook' },
  { icon: 'x', href: 'https://x.com/IllinoisEstate', label: 'X' },
  { icon: Instagram, href: 'https://www.instagram.com/illinoisestatelaw/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/illinois-estate-law/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCgnYeLkyQuInlCyfFpBQtgA', label: 'YouTube' },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-[#2D3E50] px-4 sm:px-5 xl:px-0 py-10 sm:py-[60px] pb-[40px] sm:pb-[50px] md:pb-[50px]">
        <div className="mx-auto max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-0">
            <div className="lg:w-[25%] flex justify-center lg:justify-start">
              <Link href="/">
                <Image
                  src="https://i.imgur.com/bSfExtA.png"
                  alt="Illinois Estate Law"
                  width={160}
                  height={48}
                  className="w-[150px] sm:w-[170px] md:w-[179px] lg:w-[160px] h-auto"
                />
              </Link>
            </div>

            <div className="lg:w-[19%] mt-0 lg:mt-0">
              <span className="block text-xl sm:text-[22px] lg:text-2xl font-bold text-[#FAFAFA] mb-3 sm:mb-4">
                NAVIGATION
              </span>
              <nav className="flex flex-col gap-2">
                {footerNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[#FEFEFE] hover:text-[#CCCCCC] font-medium uppercase transition-colors text-sm sm:text-base"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="lg:w-[31%] mt-0 lg:mt-0">
              <span className="block text-xl sm:text-[22px] lg:text-2xl font-bold text-[#FAFAFA] mb-3 sm:mb-4">
                CONTACT INFO
              </span>
              <p className="text-[#FEFEFE] font-normal mb-2 text-sm sm:text-base">ILLINOIS ESTATE LAW</p>
              <div className="flex flex-col gap-3 sm:gap-3.5">
                <Link
                  href="https://maps.app.goo.gl/EvyUmQa3QaEx4dzm9"
                  target="_blank"
                  className="flex items-start gap-2 sm:gap-3 text-[#FEFEFE] hover:text-[#CCCCCC] font-medium transition-colors text-sm sm:text-base"
                >
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                  <span>4422 N. Ravenswood Ave, Ste 212 Chicago, Illinois 60640</span>
                </Link>
                <Link
                  href="tel:3123730731"
                  rel="nofollow"
                  className="flex items-center gap-2 sm:gap-3 text-[#FEFEFE] hover:text-[#CCCCCC] font-medium transition-colors text-sm sm:text-base"
                >
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span>(312) 373 - 0731</span>
                </Link>
                <Link
                  href="mailto:contact@illinoisestatelaw.com"
                  rel="nofollow"
                  className="flex items-center gap-2 sm:gap-3 text-[#FEFEFE] hover:text-[#CCCCCC] font-medium transition-colors text-sm sm:text-base"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span>contact@illinoisestatelaw.com</span>
                </Link>
              </div>
            </div>

            <div className="lg:w-[25%] mt-0 lg:mt-0">
              <p className="text-[#FEFEFE] font-normal mb-3 sm:mb-4 text-sm sm:text-base">
                We offer free initial consultations and fully virtual services. Our firm has physical offices throughout Illinois.{' '}
                <Link href="/locations/" rel="nofollow" className="underline hover:text-[#CCCCCC] transition-colors">
                  Click&nbsp;here
                </Link>
                &nbsp;to see our locations. In-person meetings are available for current clients.
              </p>
              <div className="flex items-center gap-2 sm:gap-2.5">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="nofollow noopener"
                    aria-label={social.label}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FEFEFE] flex items-center justify-center text-[#2D3E50] hover:bg-[#4A708B] hover:text-[#FEFEFE] transition-colors"
                  >
                    {social.icon === 'x' ? (
                      <XIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    ) : (
                      <social.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379578.8484450864!2d-88.31008434516006!3d41.9904076929541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3027f65a6d7%3A0x7e35457ee841537b!2sIllinois%20Estate%20Law!5e0!3m2!1sen!2s!4v1756821317537!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '14px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Illinois Estate Law Location"
            />
          </div>

          {/* ── Trust badges ──────────────────────────────────── */}
          <div className="mt-6 sm:mt-7 py-4 sm:py-5 border-t border-b border-[#FAFAFA22]">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10">

              {/* Google Rating */}
              <a
                href="https://share.google/Kt6O2VG1jlRRoNos9"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                {/* Google G logo */}
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#FAFAFA] font-bold text-sm leading-none">5.0</span>
                  <svg className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <span className="text-[#BDBDBD] text-xs leading-none group-hover:text-[#FAFAFA] transition-colors">Google Reviews</span>
                </div>
              </a>

              <span className="hidden sm:block w-px h-6 bg-[#FAFAFA33]" />

              {/* ISBA Member */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#77B1D4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                <div>
                  <span className="text-[#FAFAFA] font-bold text-sm leading-none block">ISBA Member</span>
                  <span className="text-[#BDBDBD] text-xs leading-none">Illinois State Bar Association</span>
                </div>
              </div>

              <span className="hidden sm:block w-px h-6 bg-[#FAFAFA33]" />

              {/* Licensed in Illinois */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#77B1D4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <div>
                  <span className="text-[#FAFAFA] font-bold text-sm leading-none block">Licensed in Illinois</span>
                  <span className="text-[#BDBDBD] text-xs leading-none">Supreme Court of Illinois</span>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-6 sm:mt-5 pt-4 sm:pt-5 border-t border-[#FAFAFA99]">
            <p className="text-[#BDBDBD] text-xs sm:text-sm md:text-base font-normal uppercase leading-relaxed">
              <strong>Disclaimer:</strong> Illinois Estate Law is not associated with any governmental organizations in the State of Illinois or any legal aid organizations therein. THE INFORMATION CONTAINED IN THIS WEBSITE IS PROVIDED FOR INFORMATIONAL AND ENTERTAINMENT PURPOSES ONLY, AND SHOULD NOT BE CONSTRUED AS OFFERING LEGAL ADVICE, OR CREATING AN ATTORNEY-CLIENT RELATIONSHIP BETWEEN THE READER AND THE ATTORNEY. YOU SHOULD NOT ACT OR REFRAIN FROM ACTING ON THE BASIS OF ANY CONTENT INCLUDED IN THIS WEBSITE WITHOUT SEEKING APPROPRIATE LEGAL ADVICE ABOUT YOUR INDIVIDUAL FACTS AND CIRCUMSTANCES FROM AN ATTORNEY LICENSED IN YOUR STATE.​ By contacting us you consent to receiving SMS messages. Messages and Data rates may apply. Message frequency will vary. Reply to text &quot;Help&quot; to get more assistance. Reply &quot;Stop&quot; to Opt-out of messaging.
              <br />
              <Link href="/privacy-policy/" rel="nofollow" className="text-[#A0A0A0] hover:text-[#FEFEFE] transition-colors">
                Privacy Policy
              </Link>
              {' | '}
              <Link href="/terms-of-service/" rel="nofollow" className="text-[#A0A0A0] hover:text-[#FEFEFE] transition-colors">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F3F3] px-4 sm:px-5 xl:px-0 py-2.5">
        <div className="mx-auto max-w-[1140px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 min-h-[22px]">
            <p className="text-[#2D3E50] text-xs sm:text-sm font-normal text-center md:text-left">
              Copyright © {currentYear} Illinois Estate Law Firm. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
              <Link href="/privacy-policy/" className="text-[#2D3E50] hover:text-[#4A708B] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-[#2D3E50]">|</span>
              <Link href="/terms-of-service/" className="text-[#2D3E50] hover:text-[#4A708B] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
