import Link from 'next/link';
import { Calendar, Phone } from 'lucide-react';

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Safe-area padding for notched phones */}
      <div className="bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.10)] grid grid-cols-2"
           style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <Link
          href="/book-consultation/"
          className="flex items-center justify-center gap-2 py-4 bg-[#2D3E50] text-white font-['Plus_Jakarta_Sans'] font-bold text-[14px] uppercase tracking-wide hover:bg-[#3a4f63] active:bg-[#1e2d3b] transition-colors"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          Book Consultation
        </Link>
        <a
          href="tel:3123730731"
          className="flex items-center justify-center gap-2 py-4 bg-[#4A708B] text-white font-['Plus_Jakarta_Sans'] font-bold text-[14px] uppercase tracking-wide hover:bg-[#3d5f78] active:bg-[#325068] transition-colors"
        >
          <Phone className="w-4 h-4 shrink-0" />
          (312) 373-0731
        </a>
      </div>
    </div>
  );
}
