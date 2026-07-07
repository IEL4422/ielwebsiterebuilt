'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FloatingConsultButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      href="/book-consultation/"
      rel="nofollow"
      className={`hidden sm:flex fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 items-center justify-center bg-[#7E9CC0] hover:bg-[#547298] text-white font-bold text-sm px-5 py-3.5 rounded-full shadow-lg transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 pointer-events-none translate-y-4'
      }`}
    >
      Book Free Consultation
    </Link>
  );
}
