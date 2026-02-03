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
    <section className="relative min-h-[400px] lg:min-h-[642px]">
      <div className="absolute inset-0">
        <Image
          src="https://i.imgur.com/UpbuKrM.png"
          alt="Chicago Estate Planning"
          fill
          className="object-cover object-center lg:hidden"
          priority
        />
        <Image
          src="https://i.imgur.com/mV3Dg9C.png"
          alt="Chicago Estate Planning"
          fill
          className="hidden lg:block object-cover object-center"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-[1140px] px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch min-h-[400px] lg:min-h-[642px]">
          <div className="flex flex-col justify-center items-start gap-6 lg:gap-9 py-12 lg:py-0 lg:w-[65%]">
            <div className="bg-black/70 lg:bg-transparent rounded-2xl px-6 py-4 lg:p-0">
              <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[100px] font-normal text-[#fefefe] leading-[50px] md:leading-[65px] lg:leading-[100px] text-left">
                <span className="lg:block">Top-Rated</span> Estate Law F<span className="relative inline-block"><span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 lg:w-3 lg:h-3 bg-[#fefefe] rounded-full" style={{ top: '0.1em' }}></span><span className="relative">ı</span></span>rm
              </h1>
            </div>

            <div className="w-32 h-0.5 bg-[#fefefe]" />

            <div className="bg-black/70 lg:bg-transparent rounded-2xl px-6 py-4 lg:p-0">
              <ul className="flex flex-col gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckIcon className="flex-shrink-0" />
                    <span className="text-[#f3f3f3] text-base md:text-xl font-normal">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/book-consultation/"
              rel="nofollow"
              className="bg-[#fefefe] text-[#2d3e50] font-bold text-base md:text-lg lg:text-xl uppercase px-8 py-3.5 rounded-[32px] hover:opacity-90 transition-opacity md:w-auto text-center"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
