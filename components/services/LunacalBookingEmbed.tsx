'use client';

import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';

export function LunacalBookingEmbed() {
  return (
    <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 text-center">
      <CalendarCheck className="w-14 h-14 text-white/80 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-white mb-2">Ready to Book?</h3>
      <p className="text-white/80 mb-6 max-w-md mx-auto">
        Select your case type to be matched with the right attorney and schedule your free consultation.
      </p>
      <Link
        href="/book-consultation/"
        className="inline-block bg-white text-[#2D3E50] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
      >
        Book a Free Consultation
      </Link>
      <p className="text-white/60 text-sm mt-4">Free · No obligation · All of Illinois</p>
    </div>
  );
}
