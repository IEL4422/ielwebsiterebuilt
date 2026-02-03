'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, FileText, Shield, Scale, ScrollText, Building, Users, Heart } from 'lucide-react';
import Link from 'next/link';

const practiceAreas = [
  {
    title: "Wills",
    icon: ScrollText,
    href: "/chicago-wills-lawyer",
  },
  {
    title: "Trusts",
    icon: Shield,
    href: "/chicago-revocable-trusts-lawyer",
  },
  {
    title: "Probate",
    icon: Scale,
    href: "/chicago-probate-lawyer",
  },
  {
    title: "Healthcare Directives",
    icon: FileText,
    href: "/chicago-healthcare-directives-lawyer",
  },
  {
    title: "Powers of Attorney",
    icon: Users,
    href: "/chicago-powers-of-attorney-lawyer",
  },
  {
    title: "Deeds",
    icon: Building,
    href: "/chicago-deeds-lawyer",
  },
  {
    title: "Prenuptial Agreements",
    icon: Heart,
    href: "/chicago-prenuptial-agreements-lawyer",
  },
];

export function PracticeAreasSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, practiceAreas.length - slidesToShow);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="pt-16 lg:pt-24 pb-8 lg:pb-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 text-center mb-12">
          Practice Areas
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                const content = (
                  <div className="bg-slate-50 rounded-lg p-8 h-full hover:shadow-lg transition-shadow border border-slate-100 flex flex-col items-center justify-center text-center min-h-[180px]">
                    <div className="w-14 h-14 bg-[#77B1D4] rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {area.title}
                    </h3>
                  </div>
                );
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / slidesToShow}%` }}
                  >
                    <Link href={area.href} className="block h-full">
                      {content}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
            aria-label="Previous practice area"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
            aria-label="Next practice area"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIndex ? 'bg-[#77B1D4]' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/get-started"
            className="bg-[#77B1D4] text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-[#5A8FB3] transition-colors shadow-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
