'use client';

import { useEffect, useMemo, useState } from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { Clock, Search, X } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  author: string;
  published_date: string;
  topic: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getReadTime(index: number): number {
  return index % 2 === 0 ? 5 : 10;
}

const topics = [
  'All Topics',
  'Estate Planning',
  'Powers of Attorney',
  'Trusts',
  'Probate',
  'Guardianship'
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchPosts() {
    try {
      const res = await fetch('/blog/posts.json');
      if (!res.ok) throw new Error(`Failed to load posts.json: ${res.status}`);
      const data = await res.json();

      setPosts(data || []);
      setFilteredPosts(data || []);
    } catch (err) {
      console.error('Error loading blog posts:', err);
    } finally {
      setLoading(false);
    }
  }

  fetchPosts();
}, []);

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

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-5 xl:px-0">
          <div className="text-center">
            <h1 className="font-['Lobster_Two'] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[75px] leading-[44px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px] font-normal text-white">
              Blog
            </h1>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 sm:py-8 px-4 sm:px-5 bg-gray-50">
        <div className="max-w-[1140px] w-full mx-auto">
          {/* Search Bar */}
          <div className="relative mb-5 sm:mb-6">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 rounded-[12px] border-2 border-gray-200 focus:border-[#4A708B] focus:outline-none font-['Plus_Jakarta_Sans'] text-sm sm:text-base transition-colors"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Topic Filters */}
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 pb-2">
            <div className="flex gap-2 sm:gap-3 min-w-min sm:flex-wrap">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-[32px] font-['Plus_Jakarta_Sans'] font-semibold text-sm sm:text-base whitespace-nowrap transition-all ${
                    selectedTopic === topic
                      ? 'bg-[#4A708B] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600 font-['Plus_Jakarta_Sans'] text-sm sm:text-base">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            {selectedTopic !== 'All Topics' && ` in ${selectedTopic}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-5">
        <div className="max-w-[1140px] w-full mx-auto">
          {loading ? (
            <div className="text-center py-12 sm:py-20">
              <div className="inline-block animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-[#4A708B]"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12 sm:py-20">
              <p className="text-lg sm:text-xl text-gray-600 font-['Plus_Jakarta_Sans'] px-4">
                No blog posts found. Try adjusting your search or filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {filteredPosts.map((post, index) => {
                const readTime = getReadTime(index);
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}/`}
                    className="group"
                  >
                    <article className="relative rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 h-full flex flex-col justify-between bg-gradient-to-br from-[#4A708B] via-[#5B8AAA] to-[#6BA3C9] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                      <div>
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <time className="text-white/80 text-xs sm:text-sm font-['Plus_Jakarta_Sans']">
                            {formatDate(post.published_date)}
                          </time>
                          <div className="flex items-center gap-1 text-white/80 text-xs sm:text-sm font-['Plus_Jakarta_Sans']">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{readTime} min read</span>
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
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
