'use client';

import { useState } from 'react';

interface TocItem {
  id: string;
  title: string;
  level: number;
  numeration: string;
  children?: TocItem[];
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-8 bg-gray-50">
      <div
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-['Plus_Jakarta_Sans'] font-bold text-lg">
          Table of contents
        </span>
        <button className="w-6 h-6 flex items-center justify-center">
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav>
          <ol className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-[#4a708b] hover:underline font-['Plus_Jakarta_Sans'] text-sm flex items-start"
                >
                  <span className="mr-2 font-semibold">{item.numeration}</span>
                  <span>{item.title}</span>
                </a>
                {item.children && item.children.length > 0 && (
                  <ol className="ml-6 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          className="text-[#4a708b] hover:underline font-['Plus_Jakarta_Sans'] text-sm flex items-start"
                        >
                          <span className="mr-2 font-semibold">{child.numeration}</span>
                          <span>{child.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
}
