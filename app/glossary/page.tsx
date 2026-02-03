import { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import GuidesSearch from '@/components/learning-center/GuidesSearch';

export const metadata: Metadata = {
  title: 'Key Illinois Estate Law Terms for Effective Estate Planning',
  description: 'Illinois Estate Law: Navigate estate planning with expert advice on wills, trusts, and probate. Secure your wishes today!',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/glossary/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Key Illinois Estate Law Terms for Effective Estate Planning',
    description: 'Illinois Estate Law: Navigate estate planning with expert advice on wills, trusts, and probate. Secure your wishes today!',
  },
  twitter: {
    card: 'summary',
    title: 'Key Illinois Estate Law Terms for Effective Estate Planning',
    description: 'Illinois Estate Law: Navigate estate planning with expert advice on wills, trusts, and probate. Secure your wishes today!',
  },
};

export const revalidate = 3600;

async function getGuides() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase environment variables not configured');
    return [];
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase
    .from('guides')
    .select('id, title, description, category, slug')
    .order('title');

  if (error) {
    console.error('Error fetching guides:', error);
    return [];
  }

  return data || [];
}

export default async function LearningCenter() {
  const guides = await getGuides();

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-20">
        <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] leading-[50px] md:leading-[65px] lg:leading-[75px] font-normal text-white mb-6">
              Learning Center
            </h1>
            <p className="text-xl text-white/90">
              Search our comprehensive library of estate planning and probate guides to help you make informed decisions about your future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
          <GuidesSearch guides={guides} />
        </div>
      </section>

      <section className="py-16 bg-[#2D3E50]">
        <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our experienced estate planning attorneys are here to help. Schedule a consultation to discuss your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:3123730731"
                className="inline-block bg-white text-[#2D3E50] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
              >
                Call (312) 373-0731
              </Link>
              <Link
                href="/book-consultation/"
                className="inline-block bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#2D3E50] transition-colors text-lg"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
