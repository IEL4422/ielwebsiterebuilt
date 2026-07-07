'use client';

import { useEffect, useRef, useState } from 'react';
import { DollarSign, Clock, Star, Shield } from 'lucide-react';

const stats = [
  {
    value: '$15,000',
    label: 'Average Saved in Probate Costs',
    icon: DollarSign,
  },
  {
    value: '12–18 Months',
    label: 'Saved From Estate Administration',
    icon: Clock,
  },
  {
    value: '5.0 · 50+ Reviews',
    label: 'Google Rating',
    icon: Star,
  },
  {
    value: '$0',
    label: 'Hidden Fees. Ever.',
    icon: Shield,
  },
];

export function StatsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const next = [...prev];
                  next[index] = true;
                  return next;
                });
              }, index * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 lg:py-12 px-4 sm:px-5 lg:px-0 bg-[#232D36]">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-[#2D3E50] p-6 lg:p-8 flex flex-col items-center text-center transition-all duration-500 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#7E9CC0]/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#7E9CC0]" strokeWidth={1.5} />
                </div>
                <p className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl leading-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs sm:text-sm font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
