import { Metadata } from 'next';
import Link from 'next/link';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export const metadata: Metadata = {
  title: 'What Happens If You Become Incapacitated Without a Plan in Illinois?',
  description: 'If you become incapacitated in Illinois without powers of attorney, the court—not your family—decides who takes over. Learn what really happens and how to avoid it.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'What Happens If You Become Incapacitated Without a Plan in Illinois?',
    description: 'If you become incapacitated in Illinois without powers of attorney, the court—not your family—decides who takes over. Learn what really happens and how to avoid it.',
  },
  twitter: {
    card: 'summary',
    title: 'What Happens If You Become Incapacitated Without a Plan in Illinois?',
    description: 'If you become incapacitated in Illinois without powers of attorney, the court—not your family—decides who takes over. Learn what really happens and how to avoid it.',
  },
  other: {
    'dc.title': 'What Happens If You Become Incapacitated Without a Plan in Illinois?',
    'dc.description': 'If you become incapacitated in Illinois without powers of attorney, the court—not your family—decides who takes over. Learn what really happens and how to avoid it.',
    'dc.relation': 'https://www.illinoisestatelaw.com/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/',
    'dc.source': 'https://www.illinoisestatelaw.com/',
    'dc.language': 'en_US',
  },
};

export default function Page() {
  const currentSlug = 'what-happens-if-you-become-incapacitated-without-a-plan-in-illinois';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

    const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "What Happens If You Become Incapacitated Without a Plan in Illinois?",
    "description": "Learn what really happens in Illinois when someone becomes incapacitated without powers of attorney and how to avoid court guardianship.",
    "author": {
      "@type": "Organization",
      "name": "Illinois Estate Law"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Illinois Estate Law"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.illinoisestatelaw.com/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-12">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <span className="text-lg">←</span>
              Back to Blog
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">Jan 9, 2026</time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans']">
                What Happens If You Become Incapacitated Without a Plan in Illinois?
              </h1>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <p className="font-['Plus_Jakarta_Sans'] text-lg leading-relaxed text-gray-700 mb-6">
              Most people assume that if something suddenly happens to them—a medical emergency, an accident, or an unexpected diagnosis—their family will naturally be able to step in and take over. It feels obvious. It feels humane. And in Illinois, it is often completely wrong.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Incapacity is not limited to old age. It can happen to a healthy adult in their thirties, a working parent in their fifties, or a retiree in their seventies. A stroke, a car accident, a serious illness, or even temporary hospitalization can instantly remove a person's ability to make decisions. When that happens without legal planning in place, families often discover too late that love and proximity do not equal legal authority.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              If you become incapacitated in Illinois without the proper documents, your spouse, children, or trusted loved ones may have no legal power to act on your behalf. Instead, the court becomes involved. Judges step in. Time passes. Bills go unpaid. Stress compounds during an already overwhelming situation.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              This article explains what incapacity means under Illinois law, what really happens when no plan exists, and how a few simple documents can prevent a court-controlled guardianship.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              What Does "Incapacitated" Mean Under Illinois Law?
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Incapacity does not mean unconsciousness or total inability to communicate. In Illinois, a person is considered incapacitated when they are unable to make or communicate responsible decisions about their personal care, medical treatment, or finances.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              This can result from dementia, Alzheimer's disease, a stroke, traumatic brain injury, severe illness, surgical complications, or mental health conditions that impair judgment. Incapacity may be temporary or permanent. The defining issue is not the diagnosis itself, but whether the individual can legally manage their affairs.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              When no legal authority has been granted in advance, Illinois institutions must assume that no one else has permission to act.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              The Dangerous Myth That Family Automatically Has Authority
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              One of the most common and costly misconceptions is that family members automatically have decision-making power.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              In Illinois, even a spouse or adult child does not automatically have authority to access bank accounts, pay bills, sell or refinance real estate, speak freely with doctors, or consent to ongoing medical treatment.
            </p>

            <div className="bg-[#f5f7fa] p-4 border-l-4 border-[#2c5aa0] my-5">
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-2">
                <strong>Important Illinois Reality Check:</strong>
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700">
                Hospitals, banks, and financial institutions are legally prohibited from "just letting family handle it." Without written legal authority, they must refuse.
              </p>
            </div>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              This refusal is not personal. It is required by law, and institutions face serious liability for getting it wrong.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              What Actually Happens When There Is No Power of Attorney
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              When no power of attorney exists, life does not pause. It fractures.
            </p>

            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2D3E50] mt-8 mb-4">
              Medical Decisions Become Complicated
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Emergency care may be provided, but non-emergency decisions often require consent. Family members may be excluded from meaningful discussions, and important care decisions can be delayed.
            </p>

            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2D3E50] mt-8 mb-4">
              Financial Access Stops
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Bank accounts become inaccessible. Automatic payments fail. Mortgages, utilities, insurance premiums, and care expenses may go unpaid, creating cascading financial consequences.
            </p>

            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2D3E50] mt-8 mb-4">
              Authority Shifts to the Court
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Eventually, someone must petition the court for authority to act. This process is called adult guardianship.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              Guardianship: When the Court Takes Control
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Adult guardianship in Illinois is a formal court process where a judge appoints someone to make decisions for an incapacitated adult. It is not automatic, fast, or private.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              The process typically involves filing a court petition, obtaining medical evaluations, notifying family members, attending hearings, and complying with ongoing court supervision. Once appointed, the guardian must regularly report financial activity and personal decisions to the court.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Guardianship is often emotionally draining, time-consuming, and expensive—especially when family members disagree.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              Why Guardianship Is a Last Resort
            </h2>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 font-['Plus_Jakarta_Sans']">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Power of Attorney</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Guardianship</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Private arrangement</td>
                    <td className="border border-gray-300 p-3">Public court proceeding</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Chosen by you</td>
                    <td className="border border-gray-300 p-3">Chosen by a judge</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Low cost</td>
                    <td className="border border-gray-300 p-3">High and ongoing costs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Flexible and immediate</td>
                    <td className="border border-gray-300 p-3">Restrictive and supervised</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Guardianship removes personal autonomy. Even well-meaning guardians often need court approval for routine decisions.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              The Simple Documents That Prevent This Entire Scenario
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              In Illinois, incapacity planning typically involves three key documents: a Power of Attorney for Property, a Power of Attorney for Healthcare, and a HIPAA Authorization. Together, these documents allow trusted individuals to step in immediately without court involvement.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              You can learn more about these documents on our{' '}
              <Link href="/services-pricing" className="text-[#4a708b] hover:opacity-80 underline">
                Estate Planning Services
              </Link>{' '}
              page.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              Why DIY and Online Forms Often Fail
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Many people rely on online templates, only to discover later that banks or hospitals refuse to honor them. Common problems include improper execution, outdated language, missing successor agents, and institutional rejection.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              When these documents fail after incapacity, guardianship is often the only remaining option.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              A Realistic Illinois Scenario
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Linda, age 62, suffers a sudden stroke. She has no powers of attorney. Her daughter cannot access funds to pay for care. Bills pile up. A guardianship case is filed. Months pass.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              With proper planning, the same situation would allow immediate decision-making, uninterrupted care, and financial stability.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              When Should You Act?
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Incapacity planning is not about age. It is about control. Every adult over 18 should have these documents in place.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              How Illinois Estate Law Helps
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Illinois Estate Law offers flat-fee, virtual estate planning focused on clarity, compliance, and peace of mind. We help clients avoid guardianship and protect their families before a crisis occurs.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Learn more about our approach on our{' '}
              <Link href="/services-pricing" className="text-[#4a708b] hover:opacity-80 underline">
                Powers of Attorney
              </Link>{' '}
              page.
            </p>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mt-12 mb-6">
              Final Thoughts
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Doing nothing is still a legal decision. In Illinois, it often hands control to the court. A few documents can prevent months of stress, thousands of dollars in costs, and permanent loss of autonomy.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-6">
              Plan now—so your family does not have to fight later.
            </p>
          
            <BlogNavigation
              previousPost={previous ? { title: previous.title, url: previous.url } : undefined}
              nextPost={next ? { title: next.title, url: next.url } : undefined}
            />

            <RelatedArticles
              articles={relatedPosts.map(post => ({
                title: post.title,
                url: post.url,
                date: post.date,
                excerpt: post.excerpt,
              }))}
            />
          </article>

          <div className="bg-[#f5f5f5] p-8 rounded-lg my-12">
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2D3E50] mb-4">
              Protect Your Family Before a Crisis
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-700 mb-6">
              Schedule a consultation to create your incapacity plan today.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="tel:3123730731"
                className="inline-block px-6 py-3 bg-[#4a708b] text-white font-['Plus_Jakarta_Sans'] font-bold rounded hover:opacity-90 transition"
              >
                CALL (312) 373-0731
              </a>
              <Link
                href="/book-consultation"
                className="inline-block px-6 py-3 bg-[#4a708b] text-white font-['Plus_Jakarta_Sans'] font-bold rounded hover:opacity-90 transition"
              >
                BOOK ONLINE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
