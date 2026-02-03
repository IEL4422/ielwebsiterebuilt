import Link from 'next/link';

interface BlogNavigationProps {
  previousPost?: {
    title: string;
    url: string;
  };
  nextPost?: {
    title: string;
    url: string;
  };
}

export default function BlogNavigation({ previousPost, nextPost }: BlogNavigationProps) {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <div className="my-12 pt-8 border-t-2 border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {previousPost && (
          <Link
            href={previousPost.url}
            className="group flex flex-col p-6 border-2 border-gray-200 rounded-lg hover:border-[#4A708B] hover:shadow-lg transition-all duration-300"
          >
            <span className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              ← Previous Article
            </span>
            <h3 className="text-lg font-bold text-[#2d3e50] group-hover:text-[#4A708B] transition-colors">
              {previousPost.title}
            </h3>
          </Link>
        )}

        {nextPost && (
          <Link
            href={nextPost.url}
            className="group flex flex-col p-6 border-2 border-gray-200 rounded-lg hover:border-[#4A708B] hover:shadow-lg transition-all duration-300 md:text-right"
          >
            <span className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              Next Article →
            </span>
            <h3 className="text-lg font-bold text-[#2d3e50] group-hover:text-[#4A708B] transition-colors">
              {nextPost.title}
            </h3>
          </Link>
        )}
      </div>
    </div>
  );
}
