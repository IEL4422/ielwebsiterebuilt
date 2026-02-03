import type { Metadata } from 'next';
import Link from 'next/link';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Illinois Estate Taxes Explained Clearly',
  description: "Explore estate taxes in Illinois. Understand estate taxes and how they apply. Estate taxes don't have to be confusing.",
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/how-estate-taxes-work-in-illinois/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/how-estate-taxes-work-in-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Illinois Estate Taxes Explained Clearly',
    description: "Explore estate taxes in Illinois. Understand estate taxes and how they apply. Estate taxes don't have to be confusing.",
    images: [
      {
        url: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Estate-Taxes-Work-in-Illinois-.avif',
        secureUrl: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Estate-Taxes-Work-in-Illinois-.avif',
        width: 1022,
        height: 768,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Illinois Estate Taxes Explained Clearly',
    description: "Explore estate taxes in Illinois. Understand estate taxes and how they apply. Estate taxes don't have to be confusing.",
    images: ['https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Estate-Taxes-Work-in-Illinois-.avif'],
  },
  other: {
    'dc.title': 'Illinois Estate Taxes Explained Clearly',
    'dc.description': "Explore estate taxes in Illinois. Understand estate taxes and how they apply. Estate taxes don't have to be confusing.",
    'dc.relation': 'https://www.illinoisestatelaw.com/how-estate-taxes-work-in-illinois/',
    'dc.source': 'https://www.illinoisestatelaw.com/',
    'dc.language': 'en_US',
    'article:section': 'Illinois Estate Law',
  },
};

export default function Page() {
  const currentSlug = 'how-estate-taxes-work-in-illinois';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

    return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header Section with Date and Title */}
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
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']" dateTime="2025-05-19">
                  May 19, 2025
                </time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                How Estate Taxes Work in Illinois
              </h1>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <article className="flex-1 max-w-[840px]">
              {/* Table of Contents */}
              <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[var(--e-global-color-text)] m-0">
                    Table of contents
                  </h2>
                </div>
                <nav>
                  <ol className="space-y-2 list-none pl-0">
                    <li>
                      <a href="#what-are-estate-taxes" className="font-['Plus_Jakarta_Sans'] text-[var(--e-global-color-text)] hover:text-[var(--e-global-color-accent)] transition">
                        1 What Are Estate Taxes?
                      </a>
                    </li>
                    <li>
                      <a href="#the-illinois-estate-tax" className="font-['Plus_Jakarta_Sans'] text-[var(--e-global-color-text)] hover:text-[var(--e-global-color-accent)] transition">
                        2 The Illinois Estate Tax
                      </a>
                      <ol className="space-y-2 list-none pl-6 mt-2">
                        <li>
                          <a href="#how-much-are-estate-taxes" className="font-['Plus_Jakarta_Sans'] text-[var(--e-global-color-text)] hover:text-[var(--e-global-color-accent)] transition">
                            2.1 How Much Are Estate Taxes in Illinois?
                          </a>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <a href="#how-to-calculate" className="font-['Plus_Jakarta_Sans'] text-[var(--e-global-color-text)] hover:text-[var(--e-global-color-accent)] transition">
                        3 How to Calculate Illinois Estate Taxes
                      </a>
                    </li>
                    <li>
                      <a href="#strategies-for-minimizing" className="font-['Plus_Jakarta_Sans'] text-[var(--e-global-color-text)] hover:text-[var(--e-global-color-accent)] transition">
                        4 Strategies for Minimizing Estate Taxes in Illinois
                      </a>
                    </li>
                    <li>
                      <a href="#important-deadlines" className="font-['Plus_Jakarta_Sans'] text-[var(--e-global-color-text)] hover:text-[var(--e-global-color-accent)] transition">
                        5 Important Deadlines and Filing Requirements
                      </a>
                    </li>
                    <li>
                      <a href="#final-thoughts" className="font-['Plus_Jakarta_Sans'] text-[var(--e-global-color-text)] hover:text-[var(--e-global-color-accent)] transition">
                        6 Final Thoughts
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>

              {/* Introduction */}
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Understanding how estate taxes work in Illinois can be essential for anyone planning their estate or managing the estate of a loved one. Illinois imposes its own estate tax in addition to the federal estate tax, and this can significantly affect how much an heir ultimately inherits. This blog post aims to explain the ins and outs of estate taxes in Illinois, provide clear examples, and offer actionable insights into how to manage them effectively.
              </p>

              {/* Section 1 */}
              <h2 id="what-are-estate-taxes" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-text)] mt-8 mb-4">
                What Are Estate Taxes?
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Estate taxes are taxes levied on assets owned by a deceased individual at the time of their death. These taxes help fund various governmental functions and can be a substantial burden if not planned for adequately. In Illinois, the state estate tax is applied to qualifying estates, and the rates can vary depending on the size of the estate. Unlike income tax, estate taxes are not deducted from income but are assessed based on the total value of the estate.
              </p>

              <div className="mb-6">
                <Image
                  src="https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Estate-Taxes-Work-in-Illinois-.avif"
                  alt=""
                  width={1022}
                  height={768}
                  className="w-full h-auto rounded"
                />
              </div>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Understanding the distinction between state and federal estate taxes is crucial. On the federal level, estates exceeding a certain amount are subject to tax. As of 2023, the federal estate tax exemption is $12.92 million per person. However, in Illinois, the threshold is considerably lower, meaning more estates may be subject to taxation at the state level.
              </p>

              {/* Section 2 */}
              <h2 id="the-illinois-estate-tax" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-text)] mt-8 mb-4">
                The Illinois Estate Tax
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Illinois has a specific estate tax that applies to estates worth more than $4 million as of 2023. If the value of the estate exceeds this threshold, it is subject to taxation on the entire value—not just the amount above the threshold. This can make Illinois one of the more taxing states for estates, given the relatively low exemption compared to federal levels.
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                It's essential for heirs to be aware of these regulations. For example, if someone inherits an estate valued at $5 million, the entire amount is subject to the Illinois estate tax, not just the $1 million over the exemption.
              </p>

              <div className="mb-6">
                <Image
                  src="https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Illinois-Estate-Tax.avif"
                  alt=""
                  width={1024}
                  height={576}
                  className="w-full h-auto rounded"
                />
              </div>

              {/* Section 2.1 */}
              <h3 id="how-much-are-estate-taxes" className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[var(--e-global-color-text)] mt-6 mb-4">
                How Much Are Estate Taxes in Illinois?
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                The estate tax rate in Illinois is progressive, ranging from 0.8% to 16%. The exact rate depends on the gross value of the estate. Here's a simplified breakdown:
              </p>

              <ul className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 space-y-2">
                <li>Estates valued at up to $40,000 pay 0.8%</li>
                <li>Estates between $40,000 and $100,000 pay 1.6%</li>
                <li>Rates increase incrementally, with estates valued above $2 million subject to higher rates reaching up to 16% for estates valued at $10 million and above.</li>
              </ul>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                For instance, if an estate is worth $5 million, it would incur estate taxes calculated based on the tax table, leading to a significant tax bill. Understanding this scale can help families plan ahead and minimize the tax impact.
              </p>

              {/* Section 3 */}
              <h2 id="how-to-calculate" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-text)] mt-8 mb-4">
                How to Calculate Illinois Estate Taxes
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Calculating Illinois estate taxes involves multiple steps. First, you must determine the gross value of the estate, which includes real estate, investments, and any other assets. Then, you'll need to subtract any allowable deductions, such as debts and funeral expenses. Finally, use the estate tax table to determine the applicable taxes based on the taxable estate value.
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-4">
                For example:
              </p>

              <ol className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 space-y-2">
                <li><strong>Gross Estate Value</strong>: $5 million</li>
                <li><strong>Deductions</strong>: $500,000 (debts, funeral expenses, etc.)</li>
                <li><strong>Taxable Estate</strong>: $4.5 million</li>
              </ol>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Next, use the Illinois estate tax table to find the applicable tax based on $4.5 million, which may result in a significant tax due to the progressive nature of the tax rate.
              </p>

              <div className="mb-6">
                <Image
                  src="https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Calculate-Illinois-Estate-Taxes.avif"
                  alt=""
                  width={1024}
                  height={576}
                  className="w-full h-auto rounded"
                />
              </div>

              {/* Section 4 */}
              <h2 id="strategies-for-minimizing" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-text)] mt-8 mb-4">
                Strategies for Minimizing Estate Taxes in Illinois
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                While estate taxes may seem daunting, several strategies can help minimize the tax burden:
              </p>

              <ol className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 space-y-3">
                <li><strong>Gifting</strong>: One effective strategy involves gifting assets to heirs before death. In Illinois, you can gift up to $15,000 per person annually without incurring gift tax.</li>
                <li><strong>Trusts</strong>: Establishing a trust can help remove assets from your taxable estate. Irrevocable trusts are commonly used to help reduce estate taxes.</li>
                <li><strong>Life Insurance</strong>: Purchasing life insurance can also be a worthwhile strategy. The death benefit from life insurance can provide funds to cover estate taxes, thereby preserving more of the estate for heirs.</li>
                <li><strong>Charitable Donations</strong>: Donating a portion of the estate to a qualified charity can reduce the taxable value of the estate.</li>
                <li><strong>Seek Professional Advice</strong>: Consider consulting with estate planning attorneys or tax professionals familiar with Illinois law. They can offer tailored recommendations based on your unique financial situation.</li>
              </ol>

              {/* Section 5 */}
              <h2 id="important-deadlines" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-text)] mt-8 mb-4">
                Important Deadlines and Filing Requirements
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                When dealing with estate taxes in Illinois, it's essential to be aware of the associated deadlines and filing requirements. The estate tax return must be filed within nine months of the date of death. Extensions may be available, but you must file a request for an extension before the original deadline. Failure to do so could result in penalties.
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Additionally, heirs should keep accurate records of the estate's value and any deductions claimed to facilitate a smooth filing process. Gather documentation that supports asset valuations and deductions to avoid issues with the Illinois Department of Revenue.
              </p>

              {/* Section 6 */}
              <h2 id="final-thoughts" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-text)] mt-8 mb-4">
                Final Thoughts
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Navigating the world of estate taxes in Illinois can be complex, but understanding the basics is essential for effective estate planning. Being informed about the applicable laws, rates, and strategies for managing your estate can significantly impact your heirs and their inheritance. Whether through gifting, establishing trusts, or consulting with professionals, there are numerous options available to mitigate the potential estate tax burden.
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                For more specific guidance about how to handle estate taxes in Illinois, take the time to consult resources like <a href="https://www.illinoisestatelaw.com/estatetaxes" className="text-[var(--e-global-color-accent)] underline hover:no-underline">estate taxes illinois</a>. Your future heirs will thank you for prioritizing this important aspect of estate planning.
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

            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24 bg-[#f8f9fa] rounded-lg p-6 border border-gray-200">
                <p className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[var(--e-global-color-text)] mb-2">
                  Secure Your Family's Future from Home
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                  Professional legal guidance without leaving your house.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:3123730731"
                    className="block w-full text-center px-6 py-3 bg-[#4a708b] text-white font-['Plus_Jakarta_Sans'] font-semibold rounded hover:opacity-90 transition"
                  >
                    CALL (312) 373-0731
                  </a>
                  <a
                    href="/book-consultation/"
                    className="block w-full text-center px-6 py-3 bg-white border-2 border-[#4a708b] text-[#4a708b] font-['Plus_Jakarta_Sans'] font-semibold rounded hover:bg-[#4a708b] hover:text-white transition"
                  >
                    BOOK ONLINE
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Social Sharing Section */}
          <div className="max-w-[1240px] mx-auto mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[var(--e-global-color-text)]">
                SHARE POST ON:
              </span>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://www.illinoisestatelaw.com/how-estate-taxes-work-in-illinois/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=https://www.illinoisestatelaw.com/how-estate-taxes-work-in-illinois/&text=How Estate Taxes Work in Illinois`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on x-twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.illinoisestatelaw.com/how-estate-taxes-work-in-illinois/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on linkedin"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="max-w-[1240px] mx-auto mt-12">
            <nav className="flex flex-col sm:flex-row items-stretch gap-4" aria-label="Post Navigation">
              <Link
                href="/blog/understanding-the-basics-of-estate-planning"
                className="flex-1 group"
              >
                <div className="h-full flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-[#4a708b] transition">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.9998 20C28.9998 20.2653 28.8945 20.5196 28.7069 20.7071C28.5194 20.8947 28.2651 21 27.9998 21L14.4138 21L19.7078 26.292C19.8956 26.4798 20.0011 26.7345 20.0011 27C20.0011 27.2656 19.8956 27.5203 19.7078 27.708C19.5201 27.8958 19.2654 28.0013 18.9998 28.0013C18.7343 28.0013 18.4796 27.8958 18.2918 27.708L11.2918 20.708C11.1987 20.6152 11.1248 20.5048 11.0744 20.3833C11.024 20.2618 10.998 20.1316 10.998 20C10.998 19.8685 11.024 19.7383 11.0744 19.6168C11.1248 19.4953 11.1987 19.3849 11.2918 19.292L18.2918 12.292C18.3848 12.1991 18.4952 12.1253 18.6167 12.075C18.7381 12.0247 18.8683 11.9988 18.9998 11.9988C19.2654 11.9988 19.5201 12.1043 19.7078 12.292C19.8956 12.4798 20.0011 12.7345 20.0011 13C20.0011 13.2656 19.8956 13.5203 19.7078 13.708L14.4138 19L27.9998 19C28.2651 19 28.5194 19.1054 28.7069 19.2929C28.8945 19.4805 28.9998 19.7348 28.9998 20Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 font-['Plus_Jakarta_Sans'] mb-1">Previous post</div>
                    <div className="font-['Plus_Jakarta_Sans'] font-semibold text-[var(--e-global-color-text)] group-hover:text-[#4a708b] transition">
                      Understanding the Basics of Estate Planning
                    </div>
                  </div>
                </div>
              </Link>

              <div className="hidden sm:flex items-center justify-center px-4">
                <div className="w-px h-full bg-gray-200"></div>
              </div>

              <Link
                href="/blog/what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it"
                className="flex-1 group"
              >
                <div className="h-full flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-[#4a708b] transition">
                  <div className="flex-1 text-right">
                    <div className="text-sm text-gray-500 font-['Plus_Jakarta_Sans'] mb-1">Next post</div>
                    <div className="font-['Plus_Jakarta_Sans'] font-semibold text-[var(--e-global-color-text)] group-hover:text-[#4a708b] transition">
                      The Impact of Divorce on Your Estate Plan in Illinois
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0002 20C11.0002 20.2653 11.1055 20.5196 11.2931 20.7071C11.4806 20.8947 11.7349 21 12.0002 21L25.5862 21L20.2922 26.292C20.1044 26.4798 19.9989 26.7345 19.9989 27C19.9989 27.2656 20.1044 27.5203 20.2922 27.708C20.4799 27.8958 20.7346 28.0013 21.0002 28.0013C21.2657 28.0013 21.5204 27.8958 21.7082 27.708L28.7082 20.708C28.8013 20.6152 28.8752 20.5048 28.9256 20.3833C28.976 20.2618 29.002 20.1316 29.002 20C29.002 19.8685 28.976 19.7383 28.9256 19.6168C28.8752 19.4953 28.8013 19.3849 28.7082 19.292L21.7082 12.292C21.6152 12.1991 21.5048 12.1253 21.3833 12.075C21.2619 12.0247 21.1317 11.9988 21.0002 11.9988C20.7346 11.9988 20.4799 12.1043 20.2922 12.292C20.1044 12.4798 19.9989 12.7345 19.9989 13C19.9989 13.2656 20.1044 13.5203 20.2922 13.708L25.5862 19L12.0002 19C11.7349 19 11.4806 19.1054 11.2931 19.2929C11.1055 19.4805 11.0002 19.7348 11.0002 20Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </Link>
            </nav>
          </div>

          {/* Related Articles */}
          <div className="max-w-[1240px] mx-auto mt-16 mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-text)] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Article 1 */}
              <Link href="/blog/ways-to-protect-your-assets-for-the-future" className="group">
                <article className="h-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Ways-to-Protect-Your-Assets.avif"
                      alt="Ways to Protect Your Assets"
                      width={1022}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-gray-500 font-['Plus_Jakarta_Sans']">January 6, 2026</time>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[var(--e-global-color-text)] mt-2 mb-3 group-hover:text-[#4a708b] transition">
                      How Can I Protect My Assets in Illinois?
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600 mb-4">
                      In Illinois, you can protect your assets through strategies like establishing trusts, maximizing insurance coverage, using homestead exemptions, and structuring business entities properly. These approaches work together to shield your wealth from creditors, lawsuits, and
                    </p>
                    <span className="inline-block px-4 py-2 text-sm font-['Plus_Jakarta_Sans'] font-semibold text-[#4a708b] border-2 border-[#4a708b] rounded hover:bg-[#4a708b] hover:text-white transition">
                      READ MORE
                    </span>
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
          </article>
              </Link>

              {/* Article 2 */}
              <Link href="/blog/trust-funding-check-list" className="group">
                <article className="h-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Trust-Funding-Check-List.avif"
                      alt="Trust Funding Check List"
                      width={767}
                      height={576}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-gray-500 font-['Plus_Jakarta_Sans']">January 6, 2026</time>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[var(--e-global-color-text)] mt-2 mb-3 group-hover:text-[#4a708b] transition">
                      Trust Funding Checklist: How to Properly Fund Your Illinois Trust
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600 mb-4">
                      Creating a trust is a significant step in safeguarding your assets and ensuring your wishes are carried out, but establishing the trust is only half the battle. Unfortunately, many people overlook funding their trusts, which
                    </p>
                    <span className="inline-block px-4 py-2 text-sm font-['Plus_Jakarta_Sans'] font-semibold text-[#4a708b] border-2 border-[#4a708b] rounded hover:bg-[#4a708b] hover:text-white transition">
                      READ MORE
                    </span>
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
          </article>
              </Link>

              {/* Article 3 */}
              <Link href="/blog/what-are-the-key-benefits-of-setting-up-a-trust-in-illinois" className="group">
                <article className="h-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Key-Benefits-of-Setting-Up-a-Trust.avif"
                      alt="Key Benefits of Setting Up a Trust"
                      width={1022}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-gray-500 font-['Plus_Jakarta_Sans']">December 23, 2025</time>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[var(--e-global-color-text)] mt-2 mb-3 group-hover:text-[#4a708b] transition">
                      What Are the Key Benefits of Setting Up a Trust in Illinois?
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600 mb-4">
                      Setting up a trust in Illinois provides benefits that go beyond what a simple will can offer. A trust helps you avoid probate, protect your privacy, shield assets from creditors, and maintain control over how
                    </p>
                    <span className="inline-block px-4 py-2 text-sm font-['Plus_Jakarta_Sans'] font-semibold text-[#4a708b] border-2 border-[#4a708b] rounded hover:bg-[#4a708b] hover:text-white transition">
                      READ MORE
                    </span>
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
          </article>
              </Link>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-[1240px] mx-auto mt-16 mb-12">
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-lg p-8 md:p-12">
              <p className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-white mb-4">
                Send Us a Message
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-lg text-white/90 mb-8">
                Your consultation is with the actual lawyer who will handle your case
              </p>
              <form className="space-y-6" aria-label="Contact Form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fname" className="sr-only">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4a708b] font-['Plus_Jakarta_Sans']"
                    />
                  </div>
                  <div>
                    <label htmlFor="lname" className="sr-only">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Last Name"
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4a708b] font-['Plus_Jakarta_Sans']"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                      pattern="[0-9()#&+*\-=.]+"
                      title="Only numbers and phone characters (#, -, *, etc) are accepted."
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4a708b] font-['Plus_Jakarta_Sans']"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4a708b] font-['Plus_Jakarta_Sans']"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4a708b] font-['Plus_Jakarta_Sans']"
                  ></textarea>
                </div>
                <div className="flex justify-start md:justify-start">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white text-[#4a708b] font-['Plus_Jakarta_Sans'] font-bold rounded hover:bg-gray-100 transition min-w-[200px] md:min-w-[33%]"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
