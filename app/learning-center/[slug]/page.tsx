'use client';

import { useEffect, useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';

interface LearningCenterPageProps {
  params: {
    slug: string;
  };
}

interface Guide {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
}

export default function LearningCenterPage({ params }: LearningCenterPageProps) {
  const [guide, setGuide] = useState<Guide | null>(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptsInitialized = useRef(false);

  useEffect(() => {
    async function fetchGuide() {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseKey) {
        console.error('Supabase environment variables not configured');
        setLoading(false);
        return;
      }

      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data, error } = await supabase
        .from('guides')
        .select('*')
        .eq('slug', params.slug)
        .maybeSingle();

      if (error) {
        console.error('Error fetching guide:', error);
        setLoading(false);
        return;
      }

      if (!data) {
        notFound();
      }

      setGuide(data);
      setLoading(false);
    }

    fetchGuide();
  }, [params.slug]);

  useEffect(() => {
    if (!guide?.content || !containerRef.current || scriptsInitialized.current) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(guide.content, 'text/html');

    const styleElements = doc.querySelectorAll('style');
    const addedStyles: HTMLStyleElement[] = [];
    styleElements.forEach(styleEl => {
      const style = document.createElement('style');
      style.textContent = styleEl.textContent;
      style.setAttribute('data-learning-center', 'true');
      document.head.appendChild(style);
      addedStyles.push(style);
    });

    const scriptElements = doc.querySelectorAll('script');
    if (scriptElements.length > 0 && !scriptsInitialized.current) {
      scriptElements.forEach(scriptEl => {
        const script = document.createElement('script');
        script.textContent = scriptEl.textContent;
        script.setAttribute('data-learning-center', 'true');
        document.body.appendChild(script);
      });
      scriptsInitialized.current = true;
    }

    return () => {
      addedStyles.forEach(style => style.remove());
      document.querySelectorAll('script[data-learning-center="true"]').forEach(el => el.remove());
      scriptsInitialized.current = false;
    };
  }, [guide]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b1220]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!guide) {
    notFound();
  }

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: guide.content }} />
  );
}
