'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckIcon } from '@/components/icons/CheckIcon';

const features = [
  'Free Initial Consultation',
  'Transparent Flat Fee Pricing ',
  'Quick Response Time',
  'Fully Virtual Service Available',
];

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[642px]">
      <div className="absolute inset-0">
        <Image
          src="https://i.imgur.com/UpbuKrM.png"
          alt="Chicago Estate Planning"
          fill
          className="object-cover object-center lg:hidden"
          priority
        />
        <Image
          src="/herobackgoundimage.png"
          alt="Chicago Estate Planning"
          fill
          className="hidden lg:block object-cover object-center"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-[1140px] px-4 sm:px-5 lg:px-0">
        <div className="flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[642px]">
          <div className="flex flex-col justify-center items-center gap-5 sm:gap-6 lg:gap-9 py-8 sm:py-12 lg:py-0 w-full max-w-3xl">
            <div className="bg-black/70 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 w-full">
              <h1 className="font-['Lobster_Two'] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[100px] font-normal text-[#fefefe] leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[100px] text-center">
                <span className="lg:block">Top-Rated</span> Estate Law Firm
              </h1>
              <p className="text-[#f3f3f3] text-sm sm:text-base md:text-lg tracking-[0.15em] sm:tracking-[0.2em] text-center mt-2 sm:mt-3 font-light">
                Estate Planning &bull; Probate &bull; Small Business &bull; Prenuptial Agreements
              </p>
            </div>

            <div className="w-24 sm:w-32 h-0.5 bg-[#fefefe]" />

            <div className="bg-black/70 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 w-full">
              <ul className="flex flex-col gap-2 sm:gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckIcon className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="text-[#f3f3f3] text-sm sm:text-base md:text-xl font-normal">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/book-consultation/"
              rel="nofollow"
              className="bg-[#fefefe] text-[#2d3e50] font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase px-6 sm:px-8 py-3 sm:py-3.5 rounded-[32px] hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
