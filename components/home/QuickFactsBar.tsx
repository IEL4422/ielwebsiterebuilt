import Link from 'next/link';
import { Calendar, MapPin, Clock, DollarSign } from 'lucide-react';

const facts = [
  {
    icon: Calendar,
    label: 'Free Consultation',
    sub: 'No commitment required',
    href: '/book-consultation/',
  },
  {
    icon: DollarSign,
    label: '100% Flat-Fee',
    sub: 'No hourly billing, ever',
    href: '/services-pricing/',
  },
  {
    icon: MapPin,
    label: 'All of Illinois',
    sub: 'Virtual & in-person available',
    href: '/locations/',
  },
  {
    icon: Clock,
    label: 'Same-Week Appointments',
    sub: 'We move at your pace',
    href: '/book-consultation/',
  },
];

export function QuickFactsBar() {
  return (
    <section className="bg-[#2D3E50] border-b border-white/10">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5 xl:px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {facts.map(({ icon: Icon, label, sub, href }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center gap-3 px-4 py-4 sm:py-5 hover:bg-white/5 transition-colors"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#4A708B]/50 flex items-center justify-center group-hover:bg-[#4A708B] transition-colors">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm leading-none mb-1 font-['Plus_Jakarta_Sans']">
                  {label}
                </p>
                <p className="text-white/60 text-xs leading-none font-['Plus_Jakarta_Sans'] truncate">
                  {sub}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
