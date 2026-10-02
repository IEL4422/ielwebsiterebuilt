import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Safe-area padding for notched phones */}
      <div className="bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.10)] grid grid-cols-2"
           style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <Link href="/get-started/" className="flex items-center justify-center gap-2 bg-[#547298] py-4 font-['Plus_Jakarta_Sans'] text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#4A708B]">
          Get Started <ArrowRight className="h-4 w-4 shrink-0" />
        </Link>
        <Link href="/book-consultation/" className="flex items-center justify-center gap-2 bg-[#33414E] py-4 font-['Plus_Jakarta_Sans'] text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#3a4f63]">
          Book Consult <Calendar className="h-4 w-4 shrink-0" />
        </Link>
      </div>
    </div>
  );
}
