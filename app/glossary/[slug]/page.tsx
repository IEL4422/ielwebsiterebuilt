import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, MessageSquare, Clock } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';
import GuideContent from './GuideContent';

interface GuidePageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;
export const dynamicParams = true;

async function getGuide(slug: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase
    .from('guides')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    return null;
  }

  return data;
}

async function getAllGuideSlugs() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return [];
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase
    .from('guides')
    .select('slug');

  if (error) {
    return [];
  }

  return data || [];
}

export async function generateStaticParams() {
  try {
    const guides = await getAllGuideSlugs();
    return guides.map((guide) => ({
      slug: guide.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const guide = await getGuide(params.slug);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: `${guide.title} | Illinois Estate Law`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
    },
  };
}

function estimateReadTime(content: string): number {
  const textOnly = content.replace(/<[^>]*>/g, '').replace(/[{}",:\[\]]/g, ' ');
  const wordCount = textOnly.split(/\s+/).filter(Boolean).length;
  return Math.max(5, Math.ceil(wordCount / 200));
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = await getGuide(params.slug);

  if (!guide) {
    notFound();
  }

  const readTime = guide.content ? estimateReadTime(guide.content) : 5;

  let isStructured = false;
  let structuredSections = null;
  try {
    const parsed = JSON.parse(guide.content);
    if (Array.isArray(parsed)) {
      isStructured = true;
      structuredSections = parsed;
    }
  } catch {
    isStructured = false;
  }

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-14">
        <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
          <Link
            href="/glossary"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Learning Center
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full">
                {guide.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/70 text-sm">
                <Clock className="w-4 h-4" />
                {readTime} min read
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {guide.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {guide.description}
            </p>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="mx-auto max-w-[800px] px-5 xl:px-0">
          {guide.content ? (
            <GuideContent
              content={guide.content}
              isStructured={isStructured}
              structuredSections={structuredSections}
            />
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-lg text-gray-700 mb-4">
                This guide is currently being developed. Check back soon for comprehensive information about {guide.title.toLowerCase()}.
              </p>
              <p className="text-gray-600">
                In the meantime, our experienced estate planning attorneys can answer any questions you have about this topic.
              </p>
            </div>
          )}
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <MessageSquare className="w-16 h-16 text-[#2D3E50] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3E50] mb-4">
                Need Personalized Guidance?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Every estate plan is unique. Our experienced attorneys can help you understand how {guide.title.toLowerCase()} applies to your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:3123730731"
                  className="inline-block bg-[#2D3E50] text-white font-bold px-8 py-4 rounded-full hover:bg-[#4A708B] transition-colors text-lg"
                >
                  Call (312) 373-0731
                </Link>
                <Link
                  href="/book-consultation/"
                  className="inline-block bg-transparent border-2 border-[#2D3E50] text-[#2D3E50] font-bold px-8 py-4 rounded-full hover:bg-[#2D3E50] hover:text-white transition-colors text-lg"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1140px] px-5 xl:px-0 text-center">
          <Link
            href="/glossary"
            className="inline-flex items-center gap-2 text-[#2D3E50] hover:text-[#4A708B] font-semibold text-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            View All Guides
          </Link>
        </div>
      </section>
    </main>
  );
}
