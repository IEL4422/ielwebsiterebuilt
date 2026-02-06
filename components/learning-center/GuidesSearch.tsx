'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  slug: string;
}

interface GuidesSearchProps {
  guides: Guide[];
}

export default function GuidesSearch({ guides }: GuidesSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(guides.map(g => g.category));
    const cats = ['All', ...Array.from(uniqueCategories)];
    return cats.sort();
  }, [guides]);

  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      const matchesSearch = searchQuery === '' ||
        guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [guides, searchQuery, selectedCategory]);

  return (
    <div>
      <div className="mb-8">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-[#2D3E50] focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#2D3E50] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 text-gray-600">
        Showing {filteredGuides.length} {filteredGuides.length === 1 ? 'guide' : 'guides'}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map(guide => (
          <Link
            key={guide.id}
            href={`/learning-center/${guide.slug}`}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-[#2D3E50]"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-[#4A708B] mb-2 uppercase tracking-wider">
                  {guide.category}
                </div>
                <h3 className="text-lg font-bold text-[#2D3E50] mb-2 group-hover:text-[#4A708B] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {guide.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-xl text-gray-600">No guides found matching your search.</p>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}
