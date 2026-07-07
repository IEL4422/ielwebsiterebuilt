import { getDb } from "@/lib/mongodb";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  slug: string;
  metaDescription: string;
  publishedDate: string | Date;
  topic: string;
}

export default async function RecentArticlesStrip() {
  let posts: BlogPost[] | null = null;

  try {
    const db = await getDb();
    const docs = await db
      .collection("blogPosts")
      .find(
        {},
        { projection: { title: 1, slug: 1, metaDescription: 1, publishedDate: 1, topic: 1 } }
      )
      .sort({ publishedDate: -1 })
      .limit(3)
      .toArray();

    if (!docs || docs.length === 0) {
      return null;
    }

    posts = docs as unknown as BlogPost[];
  } catch {
    return null;
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#F6F9FC] py-14 lg:py-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-5 lg:px-0">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#33414E] mb-2">
          From the Learning Center
        </h2>
        <p className="text-slate-500 text-base mb-10">
          Illinois estate law explained simply.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-[#7E9CC0] transition-all flex flex-col"
            >
              {post.topic && (
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#547298] bg-[#7E9CC0]/10 px-2.5 py-1 rounded-full mb-3 self-start">
                  {post.topic}
                </span>
              )}

              <h3
                className="text-base font-bold text-[#33414E] mb-2"
                style={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                } as React.CSSProperties}
              >
                {post.title}
              </h3>

              <p
                className="text-sm text-slate-500 leading-relaxed mb-4 flex-1"
                style={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                } as React.CSSProperties}
              >
                {post.metaDescription}
              </p>

              <Link
                href={`/blog/${post.slug}/`}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#547298] hover:text-[#33414E] transition-colors"
              >
                Read article
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog/"
            className="text-sm font-bold text-[#547298] hover:text-[#33414E] transition-colors"
          >
            Visit the Learning Center →
          </Link>
        </div>
      </div>
    </section>
  );
}
