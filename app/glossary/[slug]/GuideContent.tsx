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
    <div className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
