import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export const metadata: Metadata = {
  title: 'Legal Authority in Illinois Explained ⚖️ - Updated Dec 2025',
  description: 'Legal authority in Illinois determines who can make decisions for someone else. Read this guide to learn how authority is granted and when it applies.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/understanding-legal-authority-in-illinois/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/understanding-legal-authority-in-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Legal Authority in Illinois Explained ⚖️ - Updated Dec 2025',
    description: 'Legal authority in Illinois determines who can make decisions for someone else. Read this guide to learn how authority is granted and when it applies.',
    images: [
      {
        url: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/understanding-legal-authority.png',
        secureUrl: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/understanding-legal-authority.png',
        width: 392,
        height: 300,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Legal Authority in Illinois Explained ⚖️ - Updated Dec 2025',
    description: 'Legal authority in Illinois determines who can make decisions for someone else. Read this guide to learn how authority is granted and when it applies.',
    images: ['https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/understanding-legal-authority.png'],
  },
  other: {
    'dc.title': 'Legal Authority in Illinois Explained ⚖️ - Updated Dec 2025',
    'dc.description': 'Legal authority in Illinois determines who can make decisions for someone else. Read this guide to learn how authority is granted and when it applies.',
    'dc.relation': 'https://www.illinoisestatelaw.com/understanding-legal-authority-in-illinois/',
    'dc.source': 'https://www.illinoisestatelaw.com/',
    'dc.language': 'en_US',
  },
};

export default function Page() {
  const currentSlug = 'understanding-legal-authority-in-illinois';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const tocItems = [
    {
      id: 'legal-authority-a-definition',
      title: 'Legal Authority: A Definition',
      level: 2,
      numeration: '1',
    },
    {
      id: 'different-types-of-legal-authority-in-illinois',
      title: 'Different Types of Legal Authority in Illinois',
      level: 2,
      numeration: '2',
      children: [
        {
          id: 'statutory-authority',
          title: 'Statutory Authority',
          level: 3,
          numeration: '2.1',
        },
        {
          id: 'delegated-authority',
          title: 'Delegated Authority',
          level: 3,
          numeration: '2.2',
        },
        {
          id: 'inherent-authority',
          title: 'Inherent Authority',
          level: 3,
          numeration: '2.3',
        },
      ],
    },
    {
      id: 'chicago-estate-planning-attorney',
      title: 'Chicago Estate Planning Attorney',
      level: 2,
      numeration: '3',
      children: [
        {
          id: 'mary-liberty',
          title: 'Mary Liberty',
          level: 3,
          numeration: '3.1',
        },
      ],
    },
    {
      id: 'how-do-i-get-power-of-attorney-in-illinois',
      title: 'How Do I Get Power of Attorney in Illinois?',
      level: 2,
      numeration: '4',
    },
    {
      id: 'the-importance-of-power-of-attorney',
      title: 'The Importance of Power of Attorney',
      level: 2,
      numeration: '5',
    },
    {
      id: 'legal-authority-and-its-consequences',
      title: 'Legal Authority and Its Consequences',
      level: 2,
      numeration: '6',
    },
    {
      id: 'practical-tips-for-navigating-legal-authority-in-chicago',
      title: 'Practical Tips for Navigating Legal Authority in Chicago',
      level: 2,
      numeration: '7',
    },
    {
      id: 'protect-your-future-with-illinois-estate-law',
      title: 'Protect Your Future with Illinois Estate Law',
      level: 2,
      numeration: '8',
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
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">Dec 4, 2025</time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Understanding Legal Authority in Illinois
              </h1>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <p className="mb-6">
              Navigating the legal landscape in Illinois requires a clear understanding of how authority is established and exercised. Legal authority defines who has the right to make decisions, enforce laws, and act on behalf of another person or entity. In Illinois, this can take many forms including personal legal tools such as powers of attorney, guardianships, and trusteeships. Understanding the scope and limitations of legal authority ensures that actions are both lawful and aligned with the individual&apos;s intentions.
            </p>

            <p className="mb-6">
              At Illinois Estate Law, experienced <a href="https://www.illinoisestatelaw.com/" rel="noreferrer noopener" target="_blank" className="text-[#4a708b] hover:underline">estate planning attorney in Chicago</a> Mary Liberty can help you understand and properly establish legal authority that safeguards your best interests. We can guide individuals and families through the process of drafting and executing essential legal instruments, such as powers of attorney, living wills, and trust documents, ensuring that your wishes are honored even in complex situations. Contact us at <a href="tel:3123730731" className="text-[#4a708b] hover:underline">(312) 373-0731</a> to schedule a consultation and secure your legal authority with trusted professional guidance.
            </p>

            <div className="my-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.768129510841!2d-87.6747937!3d41.9623152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3027f65a6d7%3A0x7e35457ee841537b!2sIllinois%20Estate%20Law!5e0!3m2!1sen!2s!4v1756397795444!5m2!1sen!2s"
                width="600"
                height="250"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full max-w-[600px]"
              />
            </div>

            <h2 id="legal-authority-a-definition" className="text-2xl font-bold mt-8 mb-4">
              Legal Authority: A Definition
            </h2>

            <p className="mb-6">
              Legal authority refers to the power granted by law to make decisions or enforce rules. This authority can stem from legislation, administrative regulations, judicial decisions, or consent from those affected by the decisions. In Illinois, laws are defined within a framework that guides how authority is applied in various situations. <a href="https://www.ilga.gov/legislation/ILCS/Chapters" rel="noreferrer noopener" target="_blank" className="text-[#4a708b] hover:underline">Illinois Compiled Statutes</a> detail the powers assigned to individuals and institutions, including guardianship and estate management.
            </p>

            <p className="mb-6">
              For Chicago residents, understanding legal authority becomes particularly important when dealing with the Cook County Probate Court system. The Probate Division of the Circuit Court of Cook County, located in the Richard J. Daley Center, 50 West Washington Street, handles matters related to estates, guardianships, and trust administration. Familiarity with these local court procedures ensures your documents meet jurisdictional requirements and that decisions made on your behalf protect your best interests.
            </p>

            <div className="my-8">
              <Image
                src="https://i.imgur.com/j6uhojE.png"
                alt="Illinois state seal with gavel representing legal authority"
                width={800}
                height={450}
                className="rounded-lg"
              />
            </div>

            <h2 id="different-types-of-legal-authority-in-illinois" className="text-2xl font-bold mt-8 mb-4">
              Different Types of Legal Authority in Illinois
            </h2>

            <p className="mb-6">
              In Illinois, there are different types of legal authority, including statutory authority, delegated authority, and inherent authority. Each of these types plays a vital role in daily legal matters, shaping how individuals and organizations interact with the law.
            </p>

            <h3 id="statutory-authority" className="text-xl font-bold mt-6 mb-3">
              Statutory Authority
            </h3>

            <p className="mb-6">
              Statutory authority is derived from laws enacted by the Illinois General Assembly. These laws outline specific powers granted to individuals or entities. For example, the Illinois Power of Attorney Act (755 ILCS 45/) provides statutory authority for individuals to create a power of attorney. Understanding statutory authority is crucial, as it defines what a person or organization can do legally.
            </p>

            <h3 id="delegated-authority" className="text-xl font-bold mt-6 mb-3">
              Delegated Authority
            </h3>

            <p className="mb-6">
              Delegated authority occurs when one party grants another the power to act on its behalf. This is common in various contexts, such as business representations or personal affairs. In Illinois, the authority to make healthcare decisions on someone else&apos;s behalf can be delegated through documents like a healthcare power of attorney. These documents are often presented to major Chicago-area medical centers, including Northwestern Memorial Hospital, Rush University Medical Center, and University of Chicago Medicine, to ensure healthcare providers honor the designated agent&apos;s authority.
            </p>

            <h3 id="inherent-authority" className="text-xl font-bold mt-6 mb-3">
              Inherent Authority
            </h3>

            <p className="mb-6">
              Inherent authority refers to the powers that a person naturally possesses without needing formal legal acknowledgment. This could include decision-making for a minor child by a parent or guardian. While inherent authority is less formal than statutory authority, it remains critical in many legal contexts.
            </p>

            <p className="mb-6">
              Understanding these distinctions helps clarify how authority operates in Illinois and the responsibilities that come with it.
            </p>

            <h2 id="chicago-estate-planning-attorney" className="text-2xl font-bold mt-8 mb-4">
              Chicago Estate Planning Attorney
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-e2180b4/www.illinoisestatelaw.com/wp-content/uploads/2025/10/IMG_3202.jpg"
                    alt="Mary Liberty"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 id="mary-liberty" className="text-xl font-bold mb-3">
                    Mary Liberty
                  </h3>
                  <p className="mb-4">
                    Mary Liberty is a Chicago estate planning attorney who has redefined the legal experience through convenience, clarity, and compassion. As the founder of a fully virtual law practice, Mary&apos;s mission is simple: to make high-quality estate planning accessible, affordable, and stress-free for every family. She focuses on estate planning, probate, and her partial-probate service, designed specifically for clients who need to transition their case from another attorney due to communication or cost issues. Known for her empathy and attention to detail, Mary ensures clients feel supported, informed, and empowered through every step of the process.
                  </p>
                  <p className="mb-0">
                    Operating on a 100% flat-fee model with no hourly billing or hidden charges, Mary offers full transparency from day one. Clients, from young parents naming guardians to blended families managing complex planning needs, her responsiveness, plain-language explanations, and ability to navigate sensitive decisions with confidence and care. A graduate of the University of Illinois Urbana-Champaign and Loyola University Chicago School of Law (cum laude), Mary combines legal excellence with a modern, client-centered approach. Outside her practice, she enjoys family time, adventures with her dog Margo, traveling, and discovering new restaurants.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-5"></div>

            <h2 id="how-do-i-get-power-of-attorney-in-illinois" className="text-2xl font-bold mt-8 mb-4">
              How Do I Get Power of Attorney in Illinois?
            </h2>

            <p>
              Obtaining a power of attorney in Illinois is a multi-step process that ensures clarity and protects your interests. A power of attorney allows you to designate someone to make important decisions on your behalf. Here&apos;s what you need to do:
            </p>

            <ul>
              <li><strong>Choose the Right Person:</strong> Select a trusted individual whom you want to act on your behalf. This could be a family member, friend, or professional advisor.</li>
              <li><strong>Determine the Type of Power of Attorney:</strong> Decide whether you need a general power of attorney, which grants broad authority, or a special power of attorney, which limits the authority to specific areas such as financial matters or real estate transactions.</li>
              <li><strong>Complete the Form:</strong> You can access forms online or consult an attorney for help. In Illinois, the execution requirements differ by type of POA: a Property (financial) POA must be witnessed by one adult witness and notarized; a Health Care POA must be witnessed by one adult witness (notarization is not required for the statutory health care POA). Electronic signatures are permitted under the Act.</li>
              <li><strong>Discuss Your Wishes:</strong> Ensure that the person you&apos;re granting power to understands your wishes and intentions fully.</li>
              <li><strong>Distribute Copies:</strong> After signing, provide copies of the document to relevant parties such as financial institutions or healthcare providers.</li>
            </ul>

            <p>
              Throughout this process, maintain open communication with your designated agent, to ensure that your values and preferences are honored.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Step</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Explanation</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Illinois requirements or notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Choose the Right Person</td>
                    <td className="border border-gray-300 px-4 py-2">Select someone trustworthy who can responsibly act for you.</td>
                    <td className="border border-gray-300 px-4 py-2">The agent must be an adult. It is recommended that they understand your preferences.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Determine the Type of Power of Attorney</td>
                    <td className="border border-gray-300 px-4 py-2">Decide whether the agent will have broad or limited authority.</td>
                    <td className="border border-gray-300 px-4 py-2">Illinois allows Power of Attorney for Property and Power of Attorney for Health Care.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Complete the Form</td>
                    <td className="border border-gray-300 px-4 py-2">Fill out the correct Illinois POA document.</td>
                    <td className="border border-gray-300 px-4 py-2">Property POA requires one adult witness and a notary. Health Care POA requires one adult witness and no notarization.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Discuss Your Wishes</td>
                    <td className="border border-gray-300 px-4 py-2">Make sure the agent understands your intentions.</td>
                    <td className="border border-gray-300 px-4 py-2">Written instructions are optional but helpful.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Distribute Copies</td>
                    <td className="border border-gray-300 px-4 py-2">Give copies to anyone who needs to recognize the POA.</td>
                    <td className="border border-gray-300 px-4 py-2">Financial and healthcare institutions often require a copy or may ask to see the original.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="the-importance-of-power-of-attorney" className="text-2xl font-bold mt-8 mb-4">
              The Importance of Power of Attorney
            </h2>

            <p>
              The power of attorney is a critical legal instrument for many Chicago residents, allowing individuals to ensure their preferences are respected, especially if they become unable to make decisions independently. The advantages of having a power of attorney include:
            </p>

            <ul>
              <li><strong>Control:</strong> You maintain control over your decisions even if you can no longer express your wishes.</li>
              <li><strong>Financial Management:</strong> During times of incapacitation, your designated agent can manage your finances, pay bills, and handle transactions, ensuring your financial obligations are met.</li>
              <li><strong>Healthcare Decisions:</strong> A healthcare power of attorney lets a trusted individual make medical decisions for you, based on your values and preferences.</li>
            </ul>

            <p>
              According to a survey by AARP, a little over half of American adults support having a power of attorney established, showing recognition of its importance in proactive planning for the future. For those seeking experienced legal guidance, a skilled estate planning attorney in Chicago can help ensure these critical documents are properly executed and aligned with Illinois law.
            </p>

            <h2 id="legal-authority-and-its-consequences" className="text-2xl font-bold mt-8 mb-4">
              Legal Authority and Its Consequences
            </h2>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="md:col-span-2">
                <p>
                  Understanding legal authority is paramount in making informed choices that can significantly impact your life. Whether it is about granting someone power of attorney or understanding the extent of your rights, having a clear comprehension of legal authority mitigates risks and avoids future complications.
                </p>

                <p>
                  Misusing authority can have significant legal consequences. Individuals who abuse their power of attorney can face civil or criminal penalties. For example, if an agent uses their authority for personal benefit rather than to serve the principal&apos;s interests, they could be held liable for breach of fiduciary duty.
                </p>

                <p>
                  In Cook County, the Probate Court, located in the Richard J. Daley Center, 50 West Washington Street, has jurisdiction to hear cases involving abuse of powers of attorney and can remove agents who fail to fulfill their fiduciary responsibilities. The court may also order restitution and impose other remedies to protect the principal&apos;s interests.
                </p>
              </div>
              <div className="md:col-span-1 flex items-center justify-center">
                <iframe
                  src="https://assets.pinterest.com/ext/embed.html?id=869687378065139641"
                  height="464"
                  width="236"
                  frameBorder="0"
                  scrolling="yes"
                  className="border-0"
                />
              </div>
            </div>

            <h2 id="practical-tips-for-navigating-legal-authority-in-chicago" className="text-2xl font-bold mt-8 mb-4">
              Practical Tips for Navigating Legal Authority in Chicago
            </h2>

            <p>
              With a solid understanding of legal authority, it&apos;s essential to put that knowledge into practice. Here are some practical tips:
            </p>

            <ul>
              <li><strong>Educate Yourself:</strong> Stay informed about changes in laws affecting legal authority. The Illinois General Assembly website provides updates on legal changes that may impact estate planning documents.</li>
              <li><strong>Consult Professionals:</strong> Always consult with attorneys or other legal professionals when in doubt. They can provide tailored advice based on your unique situation and ensure your documents comply with Cook County filing requirements.</li>
              <li><strong>Keep Documents Accessible:</strong> Store your legal documents in a secure but accessible location. Inform your agent and family members where these documents are kept. Some Chicago residents choose to file copies with their attorney or keep them in a safe deposit box at a local financial institution.</li>
              <li><strong>Understand Filing Requirements:</strong> While powers of attorney generally do not need to be filed with the court to be valid, other estate planning documents may need to be filed or recorded with the Cook County Clerk&apos;s Office, which now also handles land-records functions previously managed by the Recorder of Deeds. Understanding these requirements prevents delays when documents are needed.</li>
              <li><strong>Review Documents Regularly:</strong> Make it a habit to review important legal documents, such as your power of attorney, to ensure they align with your current wishes and circumstances. Life changes such as marriage, divorce, relocation, or changes in financial status should prompt an immediate review.</li>
            </ul>

            <p>
              Understanding legal authority, especially in terms of something as critical as power of attorney, is an ongoing journey. Make informed decisions, keep communication open with those you trust, and regularly update your legal arrangements to reflect your current needs and desires.
            </p>

            <p>
              Taking these steps can safeguard your rights and ensure that your legal authority is respected in Illinois.
            </p>

            <div className="my-8">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ep_5rY1FSqY?si=YWVYbzZ0G2RhHLns"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full max-w-[560px] rounded-lg"
              />
            </div>

            <h2 id="protect-your-future-with-illinois-estate-law" className="text-2xl font-bold mt-8 mb-4">
              Protect Your Future with Illinois Estate Law
            </h2>

            <p>
              Understanding legal authority in Illinois is more than just knowing who has the right to make decisions. It&apos;s about protecting your future and making sure your wishes are carried out with clarity and confidence. Having a clear understanding of legal authority can help prevent misunderstandings and safeguard your interests. Establishing the proper legal frameworks today makes certain that your loved ones are protected and that your affairs remain in trusted hands, even when you&apos;re unable to manage them yourself.
            </p>

            <p>
              At Illinois Estate Law, our knowledgeable estate planning attorneys in Chicago are dedicated to helping you navigate every aspect of legal authority with care and precision. We can provide personalized guidance in drafting, reviewing, and executing crucial legal documents tailored to your unique needs. With our firm&apos;s experience and commitment to excellence, you can feel confident knowing your legal authority is secure and aligned with your goals. Call us today at <a href="tel:3123730731">(312) 373-0731</a> and take the first step toward protecting your rights and your peace of mind.
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

          {/* Share Post Section */}
          <div className="border-t border-gray-300 pt-8 mb-8">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[var(--e-global-color-text)]">
                SHARE POST ON:
              </span>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/understanding-legal-authority-in-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/understanding-legal-authority-in-illinois/')}&text=${encodeURIComponent('Understanding Legal Authority in Illinois')}`}
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
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/understanding-legal-authority-in-illinois/')}&title=${encodeURIComponent('Understanding Legal Authority in Illinois')}`}
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
          </div>

          {/* Contact Form Section */}
          <BlogContactForm />

        </div>
      </div>
    </>
  );
}
