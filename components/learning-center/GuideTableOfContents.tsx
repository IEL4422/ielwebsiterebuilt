'use client';

import { useState, useEffect } from 'react';
import { List, ChevronRight } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

export default function GuideTableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="my-8 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-100 transition-colors"
      >
        <span className="flex items-center gap-2 font-bold text-[#2D3E50]">
          <List className="w-5 h-5" />
          In This Guide
        </span>
        <ChevronRight
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`block py-1.5 text-sm transition-colors ${
                item.level === 3 ? 'pl-4' : ''
              } ${
                activeId === item.id
                  ? 'text-[#2D3E50] font-semibold'
                  : 'text-gray-500 hover:text-[#2D3E50]'
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
