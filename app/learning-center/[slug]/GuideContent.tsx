'use client';

import { useMemo } from 'react';
import GuideRenderer, { GuideSection } from '@/components/learning-center/GuideRenderer';
import GuideTableOfContents from '@/components/learning-center/GuideTableOfContents';

interface GuideContentProps {
  content: string;
  isStructured: boolean;
  structuredSections: GuideSection[] | null;
}

export default function GuideContent({ content, isStructured, structuredSections }: GuideContentProps) {
  const tocItems = useMemo(() => {
    if (!isStructured || !structuredSections) return [];
    return structuredSections
      .filter((s) => s.type === 'heading' && s.id && (s.level === 2 || s.level === 3))
      .map((s) => ({
        id: s.id!,
        title: s.content || '',
        level: s.level || 2,
      }));
  }, [isStructured, structuredSections]);

  if (isStructured && structuredSections) {
    return (
      <>
        {tocItems.length > 2 && <GuideTableOfContents items={tocItems} />}
        <GuideRenderer sections={structuredSections} />
      </>
    );
  }

  return (
    <div className="prose prose-lg max-w-none prose-headings:text-[#2D3E50] prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:leading-relaxed prose-strong:text-[#2D3E50] prose-a:text-[#4A708B] prose-a:no-underline hover:prose-a:underline prose-ul:my-4 prose-ol:my-4">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
