import { getDb } from "@/lib/mongodb";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { InnerPageHero } from '@/components/layout/InnerPageHero';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface BlogPost {
  title: string;
  slug: string;
  content: string;
  metaDescription: string;
  publishedDate: string | Date;
  topic: string;
  internalLinks: { text: string; url: string }[] | null;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const db = await getDb();
    const doc = await db.collection("blogPosts").findOne({ slug });
    if (!doc) return null;
    return doc as unknown as BlogPost;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.illinoisestatelaw.com/blog/${params.slug}/`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedDate as string).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.publishedDate,
    "dateModified": post.publishedDate,
    "url": `https://www.illinoisestatelaw.com/blog/${post.slug}/`,
    "author": {
      "@type": "Person",
      "name": "Mary Liberty",
      "url": "https://www.illinoisestatelaw.com/about/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Illinois Estate Law",
      "url": "https://www.illinoisestatelaw.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.illinoisestatelaw.com/blog/${post.slug}/`
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <InnerPageHero title={post.title} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="mb-6">
              {post.topic && (
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                  {post.topic}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {post.title}
              </h1>
              <time className="text-slate-600" dateTime={post.publishedDate as string}>
                {formattedDate}
              </time>
            </div>

            <div
              className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.internalLinks && post.internalLinks.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Related Articles
                </h3>
                <ul className="space-y-3">
                  {post.internalLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.url}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
