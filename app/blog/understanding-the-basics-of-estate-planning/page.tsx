import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export const metadata: Metadata = {
  title: 'Estate Planning Basics for Your Future',
  description: 'Learn about estate planning. Discover how estate planning can help you secure your future. Estate planning made simple.',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/understanding-the-basics-of-estate-planning/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/understanding-the-basics-of-estate-planning/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Estate Planning Basics for Your Future',
    description: 'Learn about estate planning. Discover how estate planning can help you secure your future. Estate planning made simple.',
    images: [
      {
        url: 'https://i.imgur.com/ImMXeXu.png',
        secureUrl: 'https://i.imgur.com/ImMXeXu.png',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Estate Planning Basics for Your Future',
    description: 'Learn about estate planning. Discover how estate planning can help you secure your future. Estate planning made simple.',
    images: ['https://i.imgur.com/ImMXeXu.png'],
  },
  other: {
    'dc.title': 'Estate Planning Basics for Your Future',
    'dc.description': 'Learn about estate planning. Discover how estate planning can help you secure your future. Estate planning made simple.',
    'dc.relation': 'https://www.illinoisestatelaw.com/understanding-the-basics-of-estate-planning/',
    'dc.source': 'https://www.illinoisestatelaw.com/',
    'dc.language': 'en_US',
    'article:section': 'Illinois Estate Law',
  },
};

export default function EstatePlanningBasicsPage() {
  const currentSlug = 'understanding-the-basics-of-estate-planning';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const tocItems = [
    {
      id: 'viewer-iss5a7',
      title: 'Estate Planning: What You Need to Know',
      level: 2,
      numeration: '1',
    },
    {
      id: 'viewer-q44nm45',
      title: 'The Importance of Estate Planning',
      level: 2,
      numeration: '2',
    },
    {
      id: 'viewer-73pp978',
      title: 'Why is a Trust Better Than a Will?',
      level: 2,
      numeration: '3',
    },
    {
      id: 'viewer-mantu111',
      title: 'Steps to Create Your Estate Plan',
      level: 2,
      numeration: '4',
    },
    {
      id: 'viewer-41va2148',
      title: 'Taking Action Today',
      level: 2,
      numeration: '5',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-12">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <span className="text-lg">←</span>
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="mb-6">
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']" dateTime="2025-05-18">
                  May 18, 2025
                </time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Understanding the Basics of Estate Planning
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-white py-4">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <div className="max-w-4xl">
              <BlogSummary summary="Estate planning is essential for anyone who wants to ensure their wishes are honored and protect their loved ones. Learn the key components of estate planning and why having a plan in place matters for your family's future." />
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <article className="flex-1 prose prose-lg max-w-none">
              <TableOfContents items={tocItems} />

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Estate planning is a crucial but often overlooked aspect of financial management. Many people think estate planning is only for the wealthy or those with extensive assets. However, estate planning is essential for anyone who wants to ensure their wishes are honored and protect their loved ones after they pass away.
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                By planning ahead, you can minimize the stress on your family and ensure that your assets are distributed according to your wishes. In this blog post, we will delve into the basics of estate planning, including key components, the importance of having a plan in place, and the differences between wills and trusts.
              </p>

              <h2 id="viewer-iss5a7" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                Estate Planning: What You Need to Know
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Estate planning involves making decisions about how your assets will be handled after you pass away. This process includes creating documents that outline your wishes for asset distribution, healthcare decisions, and other important matters. Here are some key components of estate planning:
              </p>

              <ol className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 space-y-3">
                <li>
                  <strong>Wills</strong>: A will is a legal document that specifies how your assets will be distributed upon your death. It allows you to name guardians for minor children, designate beneficiaries, and specify how debts and taxes should be paid.
                </li>
                <li>
                  <strong>Trusts</strong>: A trust is a legal entity that holds assets for the benefit of a specific person or group. Trusts can be revocable or irrevocable and can help avoid probate, which is the legal process of distributing a deceased person's assets.
                </li>
                <li>
                  <strong>Power of Attorney</strong>: This document allows someone to make financial and legal decisions on your behalf if you are no longer able to do so.
                </li>
                <li>
                  <strong>Healthcare Proxy</strong>: A healthcare proxy designates an individual to make medical decisions for you if you become incapacitated.
                </li>
                <li>
                  <strong>Beneficiary Designations</strong>: Certain assets, such as life insurance policies and retirement accounts, allow you to name beneficiaries directly. It is essential to keep these designations updated.
                </li>
              </ol>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Estate planning is not a one-time task. It should be reviewed and updated regularly, especially after significant life changes such as marriage, divorce, childbirth, or the acquisition of new assets.
              </p>

              <h2 id="viewer-q44nm45" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                The Importance of Estate Planning
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Many people underestimate the importance of having a solid estate plan. Here are a few reasons why it is vital:
              </p>

              <ol className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 space-y-3">
                <li>
                  <strong>Minimizes Conflict Among Heirs</strong>: Without a clear estate plan, family members may dispute your wishes and lead to conflict during an already challenging time. A well-structured plan helps prevent misunderstandings.
                </li>
                <li>
                  <strong>Saves Time and Money</strong>: An effective estate plan can help avoid lengthy probate processes, which can be costly and time-consuming. Depending on the size of your estate, having a trust can also help reduce estate taxes.
                </li>
                <li>
                  <strong>Protects Minor Children</strong>: If you have children under 18, an estate plan allows you to designate guardians, ensuring they are cared for by someone you trust.
                </li>
                <li>
                  <strong>Gives You Peace of Mind</strong>: Knowing that you have made arrangements for your family's future can be incredibly reassuring. It allows you to focus on enjoying life instead of worrying about the unknown.
                </li>
              </ol>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                According to a survey by Caring.com, approximately 60% of Americans do not have a will. This statistic emphasizes the urgency of addressing estate planning. With so many people skipping this crucial step, it's essential to understand and prioritize it.
              </p>

              <figure className="my-8">
                <Image
                  src="https://i.imgur.com/ImMXeXu.png"
                  alt="Estate planning documents and financial planning"
                  width={800}
                  height={600}
                  className="rounded-lg mx-auto"
                />
                <figcaption className="font-['Plus_Jakarta_Sans'] text-sm text-center text-gray-600 mt-2">
                  Estate planning documents and financial planning
                </figcaption>
              </figure>

              <h2 id="viewer-73pp978" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                Why is a Trust Better Than a Will?
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                While both wills and trusts are essential components of estate planning, many experts argue that trusts offer certain advantages that wills do not. Here are some reasons why a trust may be better suited for your estate planning needs:
              </p>

              <ol className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 space-y-3">
                <li>
                  <strong>Avoids Probate</strong>: One of the primary benefits of a trust is that it allows your estate to bypass probate, the court process that validates a will. Avoiding probate can save time and money, making the distribution of assets quicker for your beneficiaries.
                </li>
                <li>
                  <strong>Privacy Protection</strong>: Wills become public records once they enter the probate process. In contrast, trusts do not have to go through probate, meaning your estate and its distribution can remain private.
                </li>
                <li>
                  <strong>Management During Incapacity</strong>: If you become incapacitated, a trust allows the appointed trustee to manage your assets without the need for court intervention. This is not possible with a will, as it becomes effective only after death.
                </li>
                <li>
                  <strong>Greater Control</strong>: Trusts can give you more control over how and when your assets are distributed. For example, you can set specific conditions that must be met before beneficiaries receive their inheritance.
                </li>
              </ol>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Though a trust may involve higher upfront costs to create, the long-term benefits could outweigh these initial expenses. Understanding your options and consulting with an estate planning professional can help clarify what type of estate plan would best suit your needs.
              </p>

              <h2 id="viewer-mantu111" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                Steps to Create Your Estate Plan
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                When you're ready to create your estate plan, follow these steps to ensure a comprehensive approach:
              </p>

              <ol className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 space-y-3">
                <li>
                  <strong>Assess Your Assets</strong>: Start by listing all your assets, including property, investments, bank accounts, and life insurance policies. Understanding what you have will help you determine how you want to allocate it.
                </li>
                <li>
                  <strong>Define Your Goals</strong>: Think about what you want to achieve with your estate plan. Consider who you want to inherit your assets and if you have special concerns such as dependents needing care.
                </li>
                <li>
                  <strong>Choose Your Representatives</strong>: Designate an executor for your will and a trustee for your trust. You will also need to choose powers of attorney and healthcare proxies.
                </li>
                <li>
                  <strong>Consult an Attorney</strong>: An estate planning attorney can provide valuable guidance tailored to your circumstances.
                </li>
                <li>
                  <strong>Draft Your Documents</strong>: Work with your attorney to draft your will, trust, and other necessary documents.
                </li>
                <li>
                  <strong>Review and Update Regularly</strong>: Once your estate plan is in place, make sure to review it periodically and update it as necessary to reflect any significant changes in your life.
                </li>
              </ol>

              <h2 id="viewer-41va2148" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                Taking Action Today
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                The importance of estate planning cannot be overstated. It is essential for ensuring that your wishes are carried out and your loved ones are protected. However, many individuals delay or avoid taking this important step.
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                If you have not yet created an estate plan, now is the time to act.
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Consider engaging professionals to guide you through the process and ensure your plan is comprehensive and effective. You can start with simple steps – like listing your assets and defining your goals – and build on them over time.
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                In conclusion, estate planning is a fundamental aspect of financial stability and family protection. Take charge of your future and the future of your loved ones by understanding and implementing effective estate planning strategies. Don't wait until it's too late; put a plan in place today to provide peace of mind for yourself and your family.
              </p>

              {/* Social Share Section */}
              <div className="border-t border-gray-300 pt-8 mb-12">
                <span className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[var(--e-global-color-text)] mb-4 block">
                  SHARE POST ON:
                </span>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/understanding-the-basics-of-estate-planning/')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/understanding-the-basics-of-estate-planning/')}&text=${encodeURIComponent('Understanding the Basics of Estate Planning')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/understanding-the-basics-of-estate-planning/')}&title=${encodeURIComponent('Understanding the Basics of Estate Planning')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

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

              {/* Contact Form Section */}
              <div className="bg-[#f5f5f5] rounded-lg p-8">
                <p className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-text)] mb-2">
                  Send Us a Message
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                  Your consultation is with the actual lawyer who will handle your case
                </p>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded font-['Plus_Jakarta_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded font-['Plus_Jakarta_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded font-['Plus_Jakarta_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded font-['Plus_Jakarta_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded font-['Plus_Jakarta_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                  ></textarea>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#4a708b] text-white font-['Plus_Jakarta_Sans'] font-semibold rounded hover:opacity-90 transition"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24 bg-[#f8f9fa] rounded-lg p-6 border border-gray-200">
                <p className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[var(--e-global-color-text)] mb-3">
                  Secure Your Family's Future from Home
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-base text-[var(--e-global-color-text)] mb-6">
                  Professional legal guidance without leaving your house.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:3123730731"
                    className="block w-full bg-[var(--e-global-color-accent)] text-white text-center py-3 px-6 rounded-md hover:opacity-90 transition-opacity font-['Plus_Jakarta_Sans'] font-semibold"
                  >
                    CALL (312) 373-0731
                  </a>
                  <Link
                    href="/book-consultation"
                    className="block w-full bg-white text-[var(--e-global-color-accent)] text-center py-3 px-6 rounded-md border-2 border-[var(--e-global-color-accent)] hover:bg-[var(--e-global-color-accent)] hover:text-white transition-colors font-['Plus_Jakarta_Sans'] font-semibold"
                  >
                    BOOK ONLINE
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
