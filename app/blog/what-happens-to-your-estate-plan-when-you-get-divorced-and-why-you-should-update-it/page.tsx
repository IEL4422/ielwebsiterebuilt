import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export const metadata: Metadata = {
  title: "The Impact of Divorce on Your Estate Plan in Illinois",
  description: "Divorce can be a daunting experience, filled with emotional challenges and uncertainties about the future. It's a time when many significant changes occur. One crucial area that often gets overlooked is your estate plan. If you've named your spouse as a beneficiary in your will or other estate planning documents,…",
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: "The Impact of Divorce on Your Estate Plan in Illinois",
    description: "Divorce can be a daunting experience, filled with emotional challenges and uncertainties about the future. It's a time when many significant changes occur. One crucial area that often gets overlooked is your estate plan. If you've named your spouse as a beneficiary in your will or other estate planning documents,…",
    images: [
      {
        url: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/The-Impact-of-Divorce.avif',
        secureUrl: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/The-Impact-of-Divorce.avif',
        width: 1022,
        height: 768,
        alt: 'The Impact of Divorce on Your Estate Plan in Illinois',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "The Impact of Divorce on Your Estate Plan in Illinois",
    description: "Divorce can be a daunting experience, filled with emotional challenges and uncertainties about the future. It's a time when many significant changes occur. One crucial area that often gets overlooked is your estate plan. If you've named your spouse as a beneficiary in your will or other estate planning documents,…",
    images: ['https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/The-Impact-of-Divorce.avif'],
  },
};

export default function Page() {
  const currentSlug = 'what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const tocItems = [
    {
      id: 'viewer-kgl6s1882',
      title: 'The Impact of Divorce on Beneficiary Designations in Illinois',
      level: 2,
      numeration: '1',
    },
    {
      id: 'viewer-hwnon1891',
      title: 'Wills and Trusts: What Happens When You Divorce?',
      level: 2,
      numeration: '2',
    },
    {
      id: 'viewer-5sqz21900',
      title: 'Updating Your Estate Plan Post-Divorce',
      level: 2,
      numeration: '3',
      children: [
        {
          id: 'viewer-9lpkc1906',
          title: 'Key Steps to Consider',
          level: 3,
          numeration: '3.1',
        },
      ],
    },
    {
      id: 'viewer-blkpk1933',
      title: 'Addressing Potential Complications',
      level: 2,
      numeration: '4',
    },
    {
      id: 'viewer-foezp1955',
      title: 'The Importance of Consulting with Legal Professionals',
      level: 2,
      numeration: '5',
    },
    {
      id: 'viewer-ong601964',
      title: 'The Role of Communication with Family Members',
      level: 2,
      numeration: '6',
    },
    {
      id: 'viewer-se0h21973',
      title: 'Final Thoughts',
      level: 2,
      numeration: '7',
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
              <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">May 19, 2025</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
              The Impact of Divorce on Your Estate Plan in Illinois
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-[1140px] mx-auto px-5 lg:px-0 py-16">

        <div className="flex flex-col lg:flex-row gap-[50px]">
          <article className="lg:w-[60%] text-[#2d3e50] font-['Plus_Jakarta_Sans']">
            <TableOfContents items={tocItems} />

            <p id="viewer-4jyzn1876" className="mb-4">
              Divorce can be a daunting experience, filled with emotional challenges and uncertainties about the future. It's a time when many significant changes occur. One crucial area that often gets overlooked is your estate plan. If you've named your spouse as a beneficiary in your will or other estate planning documents, it's essential to understand how a divorce affects these legal decisions, especially in Illinois.
            </p>

            <p id="viewer-ee8a91879" className="mb-8">
              Understanding the impact of divorce on your estate plan can help you avoid unexpected outcomes. Ensuring your assets are distributed according to your wishes after you pass away is vital. This article explains what happens to your estate plan when you divorce in Illinois, why it's necessary to update your documents, and the steps to safeguard your future.
            </p>

            <h2 id="viewer-kgl6s1882" className="text-[40px] leading-[44px] font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']">
              The Impact of Divorce on Beneficiary Designations in Illinois
            </h2>

            <p id="viewer-2f1ir1885" className="mb-4">
              In Illinois, divorce leads to specific changes regarding beneficiary designations. When you get divorced, any provision in your will or trust naming your ex-spouse as a beneficiary automatically becomes void. This law exists to protect individuals from unintentionally leaving their assets to someone they no longer wish to benefit.
            </p>

            <p id="viewer-i12lm1888" className="mb-8">
              However, not all beneficiary designations are affected. Accounts like retirement plans and life insurance policies often have separate beneficiary lists. If they still name your ex-spouse, they could inherit those assets unless you take proper steps. In Illinois, over 25% of individuals do not update their beneficiary designations after a divorce. This oversight can leave their ex-spouses as beneficiaries, causing significant issues.
            </p>

            <h2 id="viewer-hwnon1891" className="text-[40px] leading-[44px] font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']">
              Wills and Trusts: What Happens When You Divorce?
            </h2>

            <p id="viewer-6r7f21894" className="mb-4">
              Illinois law clearly states that when you divorce, any gifts to your ex-spouse in your will become void. If your will previously stated that your spouse would inherit your home or financial accounts, that clause will no longer be valid. Consequently, your estate will be distributed as if your ex-spouse had died before you.
            </p>

            <p id="viewer-xb8n81897" className="mb-8">
              If you fail to update your will, your estate will be allocated based on Illinois's intestate succession laws. This law provides for your assets to be distributed among surviving relatives. This process may lead to situations where your estate goes to family members you wouldn't have chosen. For example, without a revised will, estranged relatives could inherit significant portions of your estate, contrary to your intentions.
            </p>

            <h2 id="viewer-5sqz21900" className="text-[40px] leading-[44px] font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']">
              Updating Your Estate Plan Post-Divorce
            </h2>

            <p id="viewer-v0bpn1903" className="mb-6">
              Revamping your estate plan after a divorce is crucial. This process includes updating your will, changing any trusts, and modifying powers of attorney.
            </p>

            <h3 id="viewer-9lpkc1906" className="text-[32px] leading-[35.2px] font-bold text-[#011627] mt-8 mb-4 font-['Plus_Jakarta_Sans']">
              Key Steps to Consider
            </h3>

            <p id="viewer-n1sdm1909" className="mb-4">
              You might want to consider these key steps:
            </p>

            <ol className="list-decimal pl-8 mb-8 space-y-2">
              <li><strong>Revise Your Will</strong>: Clearly designate new beneficiaries to control where your assets will go.</li>
              <li><strong>Update Beneficiary Designations</strong>: Review all your accounts, including life insurance and retirement funds, to remove your ex-spouse as a beneficiary. Instead, add someone you trust.</li>
              <li><strong>Create New Powers of Attorney</strong>: If your former spouse had these roles, appoint new individuals to manage your affairs should you become unable to do so.</li>
              <li><strong>Consider a Trust</strong>: Establishing a trust can allow you to govern how your assets are handled. This is especially important if children are involved, as it can provide a safety net for their future.</li>
            </ol>

            <h2 id="viewer-blkpk1933" className="text-[40px] leading-[44px] font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']">
              Addressing Potential Complications
            </h2>

            <p id="viewer-cuv4o1936" className="mb-4">
              While taking these steps, keep several potential issues in mind:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li><strong>The Timing of Updates</strong>: Some assets may still be part of divorce proceedings. Ensure your changes are timely to minimize confusion.</li>
              <li><strong>Finalizing Your Divorce</strong>: Your divorce decree should clearly specify asset division and obligations. This document will help guide your revisions.</li>
              <li><strong>Disinheritance Challenges</strong>: Family members may dispute your estate plan if they believe they have a claim to your assets. Thoughtful revisions can help avoid these conflicts.</li>
            </ul>

            <h2 id="viewer-foezp1955" className="text-[40px] leading-[44px] font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']">
              The Importance of Consulting with Legal Professionals
            </h2>

            <p id="viewer-jyfty1958" className="mb-4">
              Navigating divorce and estate planning can be complicated. Consulting with an attorney who focuses on family law and estate planning can ensure that your decisions are sound. They can provide tailored advice specific to your situation, making sure your estate plan is both comprehensive and legally valid.
            </p>

            <p id="viewer-c30mb1961" className="mb-8">
              In Illinois, mediation services can also assist in resolving conflicts surrounding asset distribution. Engaging these services can simplify the planning process for your estate.
            </p>

            <h2 id="viewer-ong601964" className="text-[40px] leading-[44px] font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']">
              The Role of Communication with Family Members
            </h2>

            <p id="viewer-bxhhy1967" className="mb-4">
              After a divorce, clear communication with family members becomes necessary. Discussing changes to your estate plan with those affected can help eliminate confusion and disputes later on. Open conversations establish expectations and clarify your wishes. This is especially crucial for maintaining family relationships.
            </p>

            <p id="viewer-mzxeh1970" className="mb-8">
              If you have children, including them in relevant discussions can help manage their expectations. Make sure to tailor conversations to their age to ensure understanding and comfort.
            </p>

            <h2 id="viewer-se0h21973" className="text-[40px] leading-[44px] font-bold text-[#011627] mt-12 mb-6 font-['Plus_Jakarta_Sans']">
              Final Thoughts
            </h2>

            <p id="viewer-xae2c1976" className="mb-4">
              Going through a divorce is not just an emotional journey; it represents significant legal changes that affect your estate planning. In Illinois, automatic provisions nullify bequests to your ex-spouse, underscoring the need to proactively update your estate plan.
            </p>

            <p id="viewer-u71va1979" className="mb-4">
              By revising your will and updating your beneficiary lists, you take essential steps to ensure your wishes are honored. Don't overlook the importance of consulting with legal professionals who can guide you through these changes.
            </p>

            <p id="viewer-lv9r91982" className="mb-12">
              Reviewing and updating your estate plan after a divorce is not only a legal necessity but also a crucial step in protecting your loved ones and securing your legacy.
            </p>

            <figure className="text-center mb-12">
              <Image
                src="https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/The-Impact-of-Divorce.avif"
                alt="Documenting changes to your estate plan after divorce can prevent future complications."
                width={1022}
                height={768}
                className="w-full h-auto"
              />
              <figcaption className="text-sm text-gray-600 mt-4 italic">
                Documenting changes to your estate plan after divorce can prevent future complications.
              </figcaption>
            </figure>
          
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
