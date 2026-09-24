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
  return (
    <div className="my-12 space-y-8 border-t-2 border-gray-200 pt-8">
      <aside aria-label="About this legal information" className="rounded-2xl border border-[#D7E2EC] bg-[#F6F9FC] p-6">
        <h2 className="text-lg font-bold text-[#33414E]">About This Illinois Legal Information</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          This article provides general Illinois legal information, not advice for a specific matter. Laws, court procedures, and filing requirements can change. Review our attorneys&apos; credentials or contact the firm for guidance based on your facts.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
          <Link href="/about/" className="text-[#547298] hover:text-[#33414E]">Meet Our Attorneys</Link>
          <Link href="/illinois-estate-law-answers/" className="text-[#547298] hover:text-[#33414E]">Illinois Legal Answers</Link>
        </div>
      </aside>

      {(previousPost || nextPost) && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>}
    </div>
  );
}
