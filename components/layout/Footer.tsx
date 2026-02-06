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
      <div className="bg-[#2D3E50] px-5 xl:px-0 py-[60px] pb-[50px] md:pb-[50px]">
        <div className="mx-auto max-w-[1140px]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            <div className="lg:w-[25%] flex justify-center lg:justify-start">
              <Link href="/">
                <Image
                  src="https://i.imgur.com/bSfExtA.png"
                  alt="Illinois Estate Law"
                  width={160}
                  height={48}
                  className="w-[170px] md:w-[179px] lg:w-[160px] h-auto"
                />
              </Link>
            </div>

            <div className="lg:w-[19%] mt-5 lg:mt-0">
              <span className="block text-[22px] lg:text-2xl font-bold text-[#FAFAFA] mb-4">
                NAVIGATION
              </span>
              <nav className="flex flex-col gap-2">
                {footerNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[#FEFEFE] hover:text-[#CCCCCC] font-medium uppercase transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="lg:w-[31%] mt-5 lg:mt-0">
              <span className="block text-[22px] lg:text-2xl font-bold text-[#FAFAFA] mb-4">
                CONTACT INFO
              </span>
              <p className="text-[#FEFEFE] font-normal mb-2">ILLINOIS ESTATE LAW</p>
              <div className="flex flex-col gap-3.5">
                <Link
                  href="https://maps.app.goo.gl/EvyUmQa3QaEx4dzm9"
                  target="_blank"
                  className="flex items-start gap-3 text-[#FEFEFE] hover:text-[#CCCCCC] font-medium transition-colors"
                >
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>4422 N. Ravenswood Ave, Ste 212 Chicago, Illinois 60640</span>
                </Link>
                <Link
                  href="tel:3123730731"
                  rel="nofollow"
                  className="flex items-center gap-3 text-[#FEFEFE] hover:text-[#CCCCCC] font-medium transition-colors"
                >
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <span>(312) 373 - 0731</span>
                </Link>
                <Link
                  href="mailto:contact@illinoisestatelaw.com"
                  rel="nofollow"
                  className="flex items-center gap-3 text-[#FEFEFE] hover:text-[#CCCCCC] font-medium transition-colors"
                >
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <span>contact@illinoisestatelaw.com</span>
                </Link>
              </div>
            </div>

            <div className="lg:w-[25%] mt-5 lg:mt-0">
              <p className="text-[#FEFEFE] font-normal mb-4">
                We offer free initial consultations and fully virtual services. Our firm has physical offices throughout Illinois.{' '}
                <Link href="/locations/" rel="nofollow" className="underline hover:text-[#CCCCCC] transition-colors">
                  Click&nbsp;here
                </Link>
                &nbsp;to see our locations. In-person meetings are by request only.
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="nofollow noopener"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-[#FEFEFE] flex items-center justify-center text-[#2D3E50] hover:bg-[#4A708B] hover:text-[#FEFEFE] transition-colors"
                  >
                    {social.icon === 'x' ? (
                      <XIcon className="w-[18px] h-[18px]" />
                    ) : (
                      <social.icon className="w-[18px] h-[18px]" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5">
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

          <div className="mt-5 pt-5 border-t border-[#FAFAFA99]">
            <p className="text-[#BDBDBD] text-sm md:text-base font-normal uppercase leading-relaxed">
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

      <div className="bg-[#F3F3F3] px-5 xl:px-0 py-2.5">
        <div className="mx-auto max-w-[1140px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 min-h-[22px]">
            <p className="text-[#2D3E50] text-sm font-normal text-center md:text-left">
              Copyright © {currentYear} Illinois Estate Law Firm. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm">
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
