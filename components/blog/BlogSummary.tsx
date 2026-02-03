interface BlogSummaryProps {
  summary: string;
}

export default function BlogSummary({ summary }: BlogSummaryProps) {
  return (
    <div className="bg-gradient-to-r from-[#f0f4f8] to-[#e6eef5] border-l-4 border-[#4A708B] rounded-r-lg p-6 mb-8 shadow-sm">
      <div className="flex items-start gap-3">
        <svg className="w-6 h-6 text-[#4A708B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <h3 className="text-sm font-bold text-[#2d3e50] uppercase tracking-wide mb-2 font-['Plus_Jakarta_Sans']">Article Summary</h3>
          <p className="text-[#2d3e50] text-base leading-relaxed font-['Plus_Jakarta_Sans']">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
