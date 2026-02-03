import { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  const pageNum = parseInt(params.page);

  return {
    title: `Estate Planning Guide: Insights from Illinois Estate Law - Page ${pageNum}`,
    description: "Illinois Estate Law: Get experienced advice on estate planning, wills, and trusts. Visit us to secure your family's future today!",
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    alternates: {
      canonical: `https://www.illinoisestatelaw.com/blog/page/${pageNum}/`,
    },
    openGraph: {
      url: `https://www.illinoisestatelaw.com/blog/page/${pageNum}/`,
      siteName: 'Illinois Estate Law',
      locale: 'en_US',
      type: 'website',
      title: `Estate Planning Guide: Insights from Illinois Estate Law - Page ${pageNum}`,
      description: "Illinois Estate Law: Get experienced advice on estate planning, wills, and trusts. Visit us to secure your family's future today!",
    },
    twitter: {
      card: 'summary',
      title: `Estate Planning Guide: Insights from Illinois Estate Law - Page ${pageNum}`,
      description: "Illinois Estate Law: Get experienced advice on estate planning, wills, and trusts. Visit us to secure your family's future today!",
    },
  };
}

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

async function getBlogPosts(page: number = 1, perPage: number = 9): Promise<{ posts: BlogPost[], totalPages: number }> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  const { data: posts, error, count } = await supabase
    .from('blog_posts')
    .select('*', { count: 'exact' })
    .order('published_date', { ascending: false })
    .range(from, to);

  if (error) {
    console.error('Error fetching blog posts:', error);
    return { posts: [], totalPages: 0 };
  }

  const totalPages = Math.ceil((count || 0) / perPage);

  return { posts: posts || [], totalPages };
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

export default async function BlogPaginationPage({
  params,
}: {
  params: { page: string };
}) {
  const currentPage = parseInt(params.page);

  if (isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const { posts, totalPages } = await getBlogPosts(currentPage);

  if (currentPage > totalPages) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-[250px] flex items-center justify-center bg-cover bg-center bg-no-repeat px-5 py-20"
        style={{
          backgroundImage: 'url(https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/blog-bg.png)',
        }}
      >
        <div className="max-w-[1140px] w-full mx-auto">
          <h1 className="text-white font-['Lobster_Two'] text-[100px] leading-[100px] lg:text-[70px] lg:leading-[65px] md:text-[60px] md:leading-[60px] sm:text-[50px] sm:leading-[50px]">
            Blog
          </h1>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-[100px] px-5 lg:py-[60px] md:py-[60px]">
        <div className="max-w-[1140px] w-full mx-auto">
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {posts.map((post, index) => {
              const readTime = getReadTime(index);
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}/`}
                  className="group"
                >
                  <article className="relative rounded-[20px] p-8 h-full flex flex-col justify-between bg-gradient-to-br from-[#4A708B] via-[#5B8AAA] to-[#6BA3C9] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <time className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">
                          {formatDate(post.published_date)}
                        </time>
                        <div className="flex items-center gap-1 text-white/80 text-sm font-['Plus_Jakarta_Sans']">
                          <Clock className="w-4 h-4" />
                          <span>{readTime} min read</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-['Plus_Jakarta_Sans'] font-semibold bg-white/20 text-white rounded-full">
                          {post.topic}
                        </span>
                      </div>

                      <h2 className="font-['Plus_Jakarta_Sans'] text-[22px] leading-[28px] font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                        {post.title}
                      </h2>

                      <p className="font-['Plus_Jakarta_Sans'] text-base text-white/90 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center text-white font-['Plus_Jakarta_Sans'] font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>Read More</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-4 items-center">
              {currentPage > 2 && (
                <Link
                  href="/blog/"
                  className="px-6 py-3 bg-[var(--e-global-color-4b91dc5)] text-[var(--e-global-color-text)] font-['Plus_Jakarta_Sans'] font-bold uppercase rounded-[32px] hover:opacity-90"
                >
                  First
                </Link>
              )}

              {currentPage > 1 && (
                <Link
                  href={currentPage === 2 ? '/blog/' : `/blog/page/${currentPage - 1}/`}
                  className="px-6 py-3 bg-[var(--e-global-color-4b91dc5)] text-[var(--e-global-color-text)] font-['Plus_Jakarta_Sans'] font-bold uppercase rounded-[32px] hover:opacity-90"
                >
                  Previous
                </Link>
              )}

              <span className="px-6 py-3 font-['Plus_Jakarta_Sans'] font-bold">
                Page {currentPage} of {totalPages}
              </span>

              {currentPage < totalPages && (
                <Link
                  href={`/blog/page/${currentPage + 1}/`}
                  className="px-6 py-3 bg-[var(--e-global-color-4b91dc5)] text-[var(--e-global-color-text)] font-['Plus_Jakarta_Sans'] font-bold uppercase rounded-[32px] hover:opacity-90"
                >
                  Next
                </Link>
              )}

              {currentPage < totalPages - 1 && (
                <Link
                  href={`/blog/page/${totalPages}/`}
                  className="px-6 py-3 bg-[var(--e-global-color-4b91dc5)] text-[var(--e-global-color-text)] font-['Plus_Jakarta_Sans'] font-bold uppercase rounded-[32px] hover:opacity-90"
                >
                  Last
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
