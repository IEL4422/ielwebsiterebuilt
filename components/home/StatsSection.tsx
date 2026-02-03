'use client';

import { useEffect, useRef, useState } from 'react';
import { DollarSign, Clock, Users } from 'lucide-react';

const stats = [
  {
    value: '$15,000',
    label: 'Average Saved in Probate Costs',
    icon: DollarSign,
    color: 'from-emerald-400 to-green-600',
  },
  {
    value: '12-18 MONTHS ',
    label: 'Saved From Estate Administration and Court Proceedings',
    icon: Clock,
    color: 'from-blue-400 to-cyan-600',
  },
  {
    value: '0 FAMILY FEUDS ',
    label: 'Conflicts Avoided Through Proper Planning',
    icon: Users,
    color: 'from-purple-400 to-pink-600',
  },
];

export function StatsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-6 pb-3 lg:py-[50px] px-5 lg:px-0">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 lg:gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`min-h-[140px] lg:min-h-[180px] p-3 lg:p-8 rounded-[10px] border-2 border-[#4a708b] flex flex-col justify-start items-start relative overflow-hidden group cursor-pointer transition-all duration-500 ${
                  visibleCards[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } hover:scale-105 hover:shadow-2xl hover:border-[#5984c5] hover:-translate-y-1`}
                style={{
                  background: 'linear-gradient(171deg, #4a708b 0%, #231f20 82%)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color.split(' ')[0].replace('from-', '')} 0%, ${stat.color.split(' ')[1].replace('to-', '')} 100%)`,
                  }}
                />

                <div className="absolute top-2 right-2 lg:top-4 lg:right-4 opacity-10 group-hover:opacity-30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <Icon className="w-16 h-16 lg:w-20 lg:h-20 text-white" strokeWidth={1.5} />
                </div>

                <div className="relative z-10 flex items-center gap-2 lg:gap-3 mb-3">
                  <div className="p-1.5 lg:p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-[#fefefe] text-[26px] lg:text-[32px] font-semibold leading-[24px] lg:leading-[33.6px] group-hover:text-[#5984c5] transition-colors duration-300">
                    {stat.value}
                  </p>
                </div>

                <p className="text-[#fefefe] font-medium relative z-10 group-hover:text-gray-100 transition-colors duration-300">
                  {stat.label}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#5984c5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
