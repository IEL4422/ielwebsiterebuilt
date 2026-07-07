'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Search, X } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image?: string;
  author?: string;
  published_date: string;
  topic: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC', // consistent between server and client
  });
}

function getReadTime(index: number): number {
  return index % 2 === 0 ? 5 : 10;
}

const TOPIC_ORDER = [
  'All Topics',
  'Estate Planning',
  'Probate',
  'Trusts',
  'Real Estate',
  'Wills',
  'Prenuptial Agreements',
  'Powers of Attorney',
  'Guardianship',
];

export default function BlogContent({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');

  // Compute visible topics with counts (hide topics with 0 posts)
  const topicsWithCounts = TOPIC_ORDER.map((topic) => ({
    label: topic,
    count: topic === 'All Topics' ? posts.length : posts.filter((p) => p.topic === topic).length,
  })).filter((t) => t.label === 'All Topics' || t.count > 0);

  // Filter whenever search/topic changes
  useEffect(() => {
    let filtered = posts;

    if (selectedTopic !== 'All Topics') {
      filtered = filtered.filter(post => post.topic === selectedTopic);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.topic.toLowerCase().includes(query)
      );
    }

    setFilteredPosts(filtered);
  }, [searchQuery, selectedTopic, posts]);

  // Optionally pull in any MongoDB-only posts after initial render
  useEffect(() => {
    async function fetchExtra() {
      try {
        const staticSlugs = new Set(initialPosts.map(p => p.slug));
        const res = await fetch('/api/blog-posts').catch(() => null);
        if (!res || !res.ok) return;
        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) return;
        const newPosts = data.filter((p: BlogPost) => p && p.slug && !staticSlugs.has(p.slug));
        if (newPosts.length === 0) return;
        const allPosts = [...initialPosts, ...newPosts].sort(
          (a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime()
        );
        setPosts(allPosts);
      } catch {
        // ignore — server-side posts already displayed
      }
    }
    fetchExtra();
  }, [initialPosts]);

  return (
    <main>
      {/* Hero Section */}
      <InnerPageHero title="Blog" />

      {/* Search and Filter Section */}
      <section className="py-6 sm:py-8 px-4 sm:px-5 bg-gray-50">
        <div className="max-w-[1140px] w-full mx-auto">
          <div className="relative mb-5 sm:mb-6">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 rounded-[12px] border-2 border-gray-200 focus:border-[#547298] focus:outline-none font-['Plus_Jakarta_Sans'] text-sm sm:text-base transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 pb-2">
            <div className="flex gap-2 sm:gap-3 min-w-min sm:flex-wrap">
              {topicsWithCounts.map(({ label, count }) => {
                const active = selectedTopic === label;
                return (
                  <button
                    key={label}
                    onClick={() => setSelectedTopic(label)}
                    className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-[32px] font-['Plus_Jakarta_Sans'] font-semibold text-sm whitespace-nowrap transition-all ${
                      active
                        ? 'bg-[#4A708B] text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                    }`}
                  >
                    {label}
                    {label !== 'All Topics' && (
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full leading-none ${
                        active ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 text-gray-600 font-['Plus_Jakarta_Sans'] text-sm sm:text-base">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            {selectedTopic !== 'All Topics' && ` in ${selectedTopic}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-5">
        <div className="max-w-[1140px] w-full mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 sm:py-20">
              <p className="text-lg sm:text-xl text-gray-600 font-['Plus_Jakarta_Sans'] px-4">
                No blog posts found. Try adjusting your search or filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {filteredPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}/`} className="group">
                  <article className="relative rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 h-full flex flex-col justify-between bg-gradient-to-br from-[#4A708B] via-[#5B8AAA] to-[#6BA3C9] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <time className="text-white/80 text-xs sm:text-sm font-['Plus_Jakarta_Sans']">
                          {formatDate(post.published_date)}
                        </time>
                        <div className="flex items-center gap-1 text-white/80 text-xs sm:text-sm font-['Plus_Jakarta_Sans']">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{getReadTime(index)} min read</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-['Plus_Jakarta_Sans'] font-semibold bg-white/20 text-white rounded-full">
                          {post.topic}
                        </span>
                      </div>

                      <h2 className="font-['Plus_Jakarta_Sans'] text-[18px] sm:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[26px] lg:leading-[28px] font-bold text-white mb-3 sm:mb-4 group-hover:text-white/90 transition-colors">
                        {post.title}
                      </h2>

                      <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-white/90 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-5 sm:mt-6 flex items-center text-white font-['Plus_Jakarta_Sans'] font-semibold text-sm sm:text-base group-hover:gap-3 gap-2 transition-all">
                      <span>Read More</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
