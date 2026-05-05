import Link from 'next/link';

interface RelatedArticle {
  title: string;
  url: string;
  date: string;
  excerpt: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="my-10">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] text-[#2D3E50] whitespace-nowrap">
          You Might Also Like
        </h2>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.url}
            className="group flex flex-col rounded-[16px] p-5 bg-gradient-to-br from-[#4A708B] via-[#5B8AAA] to-[#6BA3C9] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <time className="text-white/70 text-xs font-['Plus_Jakarta_Sans'] mb-2 block">
              {article.date}
            </time>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[20px] text-white mb-3 group-hover:text-white/90 transition-colors line-clamp-3">
              {article.title}
            </h3>
            <p className="text-white/80 text-xs leading-relaxed line-clamp-3 mb-4 flex-1">
              {article.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 text-white font-['Plus_Jakarta_Sans'] font-semibold text-xs group-hover:gap-2 transition-all mt-auto">
              Read More
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
