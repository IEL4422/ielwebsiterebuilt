import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export const metadata: Metadata = {
  title: "Protecting Your Family's Future: The Importance of Having a Will in Illinois",
  description: "Dying without a will may feel uncomfortable to think about, but facing this issue head-on is essential for protecting your family's future. In Illinois, failing to create a will can lead to significant financial strain on your loved ones. This post will walk you through the financial consequences of not…",
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: "Protecting Your Family's Future: The Importance of Having a Will in Illinois",
    description: "Dying without a will may feel uncomfortable to think about, but facing this issue head-on is essential for protecting your family's future. In Illinois, failing to create a will can lead to significant financial strain on your loved ones. This post will walk you through the financial consequences of not…",
    images: [
      {
        url: 'https://i.imgur.com/VSbToWd.jpeg',
        secureUrl: 'https://i.imgur.com/VSbToWd.jpeg',
        width: 1260,
        height: 750,
        alt: "Protecting Your Family's Future: The Importance of Having a Will in Illinois",
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Protecting Your Family's Future: The Importance of Having a Will in Illinois",
    description: "Dying without a will may feel uncomfortable to think about, but facing this issue head-on is essential for protecting your family's future. In Illinois, failing to create a will can lead to significant financial strain on your loved ones. This post will walk you through the financial consequences of not…",
    images: ['https://i.imgur.com/VSbToWd.jpeg'],
  },
};

export default function ImportanceOfWillPage() {
  const currentSlug = 'the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const tocItems = [
    {
      id: 'viewer-',
      title: 'Understanding Intestacy Laws in Illinois',
      level: 2,
      numeration: '1',
    },
    {
      id: 'viewer-hidden-costs',
      title: 'The Hidden Costs of Dying Without a Will',
      level: 2,
      numeration: '2',
    },
    {
      id: 'viewer-emotional-distress',
      title: 'Emotional Distress and Family Disputes',
      level: 2,
      numeration: '3',
    },
    {
      id: 'viewer-benefits',
      title: 'The Benefits of Having a Will',
      level: 2,
      numeration: '4',
    },
    {
      id: 'viewer-cost-benefit',
      title: 'Cost-Benefit Analysis of Drafting a Will',
      level: 2,
      numeration: '5',
    },
    {
      id: 'viewer-long-term',
      title: 'Long-Term Savings Through a Will',
      level: 3,
      numeration: '5.1',
    },
    {
      id: 'viewer-choosing-strategy',
      title: 'Choosing the Right Estate Planning Strategy',
      level: 2,
      numeration: '6',
    },
    {
      id: 'viewer-legal-assistance',
      title: 'The Role of Legal Assistance',
      level: 2,
      numeration: '7',
    },
    {
      id: 'viewer-final-thoughts',
      title: 'Final Thoughts',
      level: 2,
      numeration: '8',
    },
  ];

  return (
    <>
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
              <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">Coming Soon</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Protecting Your Family&apos;s Future: The Importance of Having a Will in Illinois
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-[1140px] mx-auto px-5 lg:px-0 py-16">

        <div className="flex flex-col lg:flex-row gap-[50px]">
          <article className="lg:w-[60%] text-[#2d3e50] font-['Plus_Jakarta_Sans']">
            {tocItems.length > 0 && <TableOfContents items={tocItems} />}

            <h2 className="text-3xl font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']" id="viewer-">
              Understanding Intestacy Laws in Illinois
            </h2>
            <p className="mb-6 text-base leading-relaxed">
              When a person passes away without a will, their estate falls under intestacy laws. These laws dictate how assets are distributed, which can lead to unexpected outcomes. For example, if someone dies with a spouse and children, Illinois law generally grants the spouse half of the estate. The children will share the other half. If there are no children, parents or siblings may inherit, complicating things further.
            </p>
            <p className="mb-6 text-base leading-relaxed">
              These mandatory distribution rules can result in family disputes. Relatives may feel entitled to certain items. Such disagreements lead to legal battles. This consumes time and resources that should go to your beneficiaries. In fact, settling an intestate estate can take up to a year or longer in Illinois. This delays any financial relief your loved ones might expect.
            </p>

            <h2 className="text-3xl font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']" id="viewer-hidden-costs">
              The Hidden Costs of Dying Without a Will
            </h2>
            <p className="mb-6 text-base leading-relaxed">
              One major consequence of dying without a will is the financial burden of the probate process. In Illinois, probate can be both lengthy and costly.
            </p>
            <ul className="mb-6 space-y-3 list-disc pl-6">
              <li>
                <strong>Court Fees</strong>: Families face many court fees when initiating probate. These fees can add up to hundreds of dollars, depending on the county.
              </li>
              <li>
                <strong>Legal Fees</strong>: Families often hire attorneys for guidance. This adds even more costs. For instance, hiring an attorney for probate can range from $2,500 to $5,000.
              </li>
            </ul>
            <p className="mb-6 text-base leading-relaxed">
              Additionally, when a will is absent, the court may appoint an administrator to handle the estate. Their fee can further deplete the estate&apos;s value. These hidden costs can absorb a significant portion of your assets. In many cases, the value of a problematic intestate estate feels far greater than the cost of simply drafting a will.
            </p>

            <h2 className="text-3xl font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']" id="viewer-emotional-distress">
              Emotional Distress and Family Disputes
            </h2>
            <p className="mb-6 text-base leading-relaxed">
              Financial repercussions are only part of the issue. Not having a will can spark emotional turmoil among family members. Legal disputes can arise, causing rifts and lasting damage to relationships. Consider a parent with children from multiple relationships; without clear instructions in a will, assets might benefit ex-spouses or estranged children, leading to family friction.
            </p>
            <p className="mb-6 text-base leading-relaxed">
              An explicit will can prevent such conflicts. It helps ensure that your wishes are honored. By addressing your preferences regarding asset distribution and guardianship for minor children, you can minimize emotional distress. This approach also avoids unnecessary confusion during a difficult time.
            </p>

            <h2 className="text-3xl font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']" id="viewer-benefits">
              The Benefits of Having a Will
            </h2>
            <p className="mb-6 text-base leading-relaxed">
              Creating a will can ease the stress of the estate settlement process. By clearly outlining how you&apos;d like your possessions distributed, you save your family from grappling with decisions they might not be prepared for. A well-structured will also allows you to designate guardians for your minor children. This ensures they will be cared for by persons you trust.
            </p>
            <p className="mb-6 text-base leading-relaxed">
              Moreover, a will can significantly expedite the probate process. With clearer instructions, the court has less ambiguity to navigate. This can lead to faster asset distribution. The reduction in legal work and associated costs can ultimately save your estate thousands of dollars.
            </p>

            <h2 className="text-3xl font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']" id="viewer-cost-benefit">
              Cost-Benefit Analysis of Drafting a Will
            </h2>
            <p className="mb-6 text-base leading-relaxed">
              Some may avoid creating a will due to perceived high costs. However, the financial implications of dying without one make the benefits of a will crystal clear. A simple will might cost only a few hundred dollars, but failing to create one can lead to expenses that soar into thousands.
            </p>
            <p className="mb-6 text-base leading-relaxed">
              Consider this: administrative costs and legal fees from intestate probate may range from $7,000 to $15,000, depending on the complexity of the estate. By investing in a will, you protect your wishes and safeguard your family from escalating costs.
            </p>

            <h3 className="text-2xl font-bold text-[#011627] mt-8 mb-4 font-['Plus_Jakarta_Sans']" id="viewer-long-term">
              Long-Term Savings Through a Will
            </h3>
            <p className="mb-6 text-base leading-relaxed">
              Creating a will also saves future legal hassles for your family. A clearly defined plan can reduce disputes among heirs. This can save money in the long run. The emotional burden on your loved ones decreases as well. Family peace is preserved by having a will.
            </p>

            <h2 className="text-3xl font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']" id="viewer-choosing-strategy">
              Choosing the Right Estate Planning Strategy
            </h2>
            <p className="mb-6 text-base leading-relaxed">
              While a will is an essential step in estate planning, it is just one piece of a larger puzzle. Exploring options like trusts can be a smart move. Trusts prevent probate and offer greater asset protection. They allow you to manage your assets during your lifetime. This ensures designated beneficiaries receive them directly after your death, preserving their value.
            </p>

            <h2 className="text-3xl font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']" id="viewer-legal-assistance">
              The Role of Legal Assistance
            </h2>
            <p className="mb-6 text-base leading-relaxed">
              Given the complexities involved in the estate-planning process, seeking the help of an experienced attorney can be beneficial. An estate planning attorney can assist you in creating a strong, legally binding will. They can also advise on trusts and guide you through end-of-life health care directives. Partnering with a professional ensures that your estate plan aligns with Illinois law. This provides peace of mind that your wishes will be honored.
            </p>

            <h2 className="text-3xl font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']" id="viewer-final-thoughts">
              Final Thoughts
            </h2>
            <p className="mb-6 text-base leading-relaxed">
              Not having a will in Illinois brings significant financial liabilities and emotional challenges for your loved ones. The probate process can be costly, time-consuming, and fraught with potential disputes. Establishing a will is a proactive step that ensures your assets are divided according to your wishes. It also alleviates the burden on your family.
            </p>
            <p className="mb-6 text-base leading-relaxed">
              Drafting a will is more than just good financial planning; it is a compassionate act that supports your family&apos;s well-being during challenging times. Investing time and resources into creating a will demonstrates your care for your loved ones. It sets them on a smoother path during painful transitions.
            </p>
            <p className="mb-6 text-base leading-relaxed">
              Consider taking action now to safeguard your family&apos;s future by viewing a will as an essential part of your financial strategy.
            </p>

            <figure className="my-8 text-center">
              <Image
                src="https://i.imgur.com/VSbToWd.jpeg"
                alt="Family reviewing estate planning documents together, highlighting the importance of having a will."
                width={1260}
                height={750}
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-600 mt-2 font-['Plus_Jakarta_Sans']">
                Family reviewing estate planning documents together, highlighting the importance of having a will.
              </figcaption>
            </figure>

            <div className="border-t border-gray-300 pt-8 mt-12">
              <span className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#2d3e50] mb-4 block">
                SHARE POST ON:
              </span>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/')}&text=${encodeURIComponent("Protecting Your Family's Future: The Importance of Having a Will in Illinois")}`}
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
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/')}&title=${encodeURIComponent("Protecting Your Family's Future: The Importance of Having a Will in Illinois")}`}
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
            <div className="bg-[#f5f5f5] rounded-lg p-8 mt-12">
              <p className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2d3e50] mb-2">
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

          <aside className="lg:w-[40%]">
            <div className="bg-[#4A708B] rounded-[10px] p-8 sticky top-[200px]">
              <p className="text-[28px] leading-[33.6px] font-semibold text-[#f3f3f3] mb-4 font-['Plus_Jakarta_Sans']">
                Secure Your Family's Future from Home
              </p>
              <p className="text-[#e5e5e5] mb-6 font-['Plus_Jakarta_Sans']">
                Professional legal guidance without leaving your house.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-[10px]">
                <a
                  href="tel:3123730731"
                  className="inline-block bg-white text-[#2D3E50] text-center font-bold py-[14px] px-[15px] rounded-full border border-white hover:bg-gray-100 transition-colors font-['Plus_Jakarta_Sans']"
                >
                  CALL (312) 373-0731
                </a>
                <a
                  href="/book-consultation/"
                  className="inline-block bg-transparent text-[#fefefe] text-center font-bold py-[14px] px-5 rounded-full border border-[#4A708B] hover:bg-[#3d5d75] transition-colors font-['Plus_Jakarta_Sans']"
                >
                  BOOK ONLINE
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
