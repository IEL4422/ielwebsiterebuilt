import Link from 'next/link';
import { Phone, CircleCheck as CheckCircle } from 'lucide-react';

interface LocationHeroProps {
  title: string;
  subtitle: string;
}

const trustBadges = [
  'Free Initial Consultation',
  'Flat-Fee Pricing',
  'Fully Virtual Service',
  'Same-Week Appointments',
];

export function LocationHero({ title, subtitle }: LocationHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#2D3E50] via-[#4A708B] to-[#2D3E50] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          <h1 className="font-['Lobster_Two'] text-[40px] md:text-[55px] lg:text-[65px] font-normal text-white leading-tight mb-5">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
            {trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.illinoisestatelaw.com/book-consultation/"
              className="inline-flex items-center justify-center bg-white text-[#2D3E50] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors text-base"
            >
              Book a Free Consultation
            </Link>
            <a
              href="tel:3123730731"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-base gap-2"
            >
              <Phone className="h-4 w-4" />
              Call (312) 373-0731
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
