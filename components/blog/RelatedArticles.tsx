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
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.url}
            className="group flex flex-col border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white p-6"
          >
            <time className="text-sm text-gray-600 mb-2 block">{article.date}</time>
            <h3 className="font-semibold text-lg text-gray-900 mb-3 group-hover:text-[#4A708B] transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
            <span className="text-[#4A708B] font-semibold text-sm mt-auto">READ MORE →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
