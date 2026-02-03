import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export const metadata: Metadata = {
  title: 'Essential Clauses for Your Illinois Revocable Living Trust ⚖️',
  description: 'Learn about the essential clauses that make an Illinois revocable living trust effective, from administrative provisions to modern asset planning. These key elements ensure flexibility, protection, and clarity for your estate plan.',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/essential-clauses-for-your-illinois-revocable-living-trust/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/essential-clauses-for-your-illinois-revocable-living-trust/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Essential Clauses for Your Illinois Revocable Living Trust ⚖️',
    description: 'Learn about the essential clauses that make an Illinois revocable living trust effective, from administrative provisions to modern asset planning. These key elements ensure flexibility, protection, and clarity for your estate plan.',
    images: [
      {
        url: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/10/Chicago-revocable-trust-lawyer-1.jpg',
        secureUrl: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/10/Chicago-revocable-trust-lawyer-1.jpg',
        width: 1920,
        height: 1200,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Essential Clauses for Your Illinois Revocable Living Trust ⚖️',
    description: 'Learn about the essential clauses that make an Illinois revocable living trust effective, from administrative provisions to modern asset planning. These key elements ensure flexibility, protection, and clarity for your estate plan.',
    images: ['https://www.illinoisestatelaw.com/wp-content/uploads/2025/10/Chicago-revocable-trust-lawyer-1.jpg'],
  },
  other: {
    'dc.title': 'Essential Clauses for Your Illinois Revocable Living Trust ⚖️',
    'dc.description': 'Learn about the essential clauses that make an Illinois revocable living trust effective, from administrative provisions to modern asset planning. These key elements ensure flexibility, protection, and clarity for your estate plan.',
    'dc.relation': 'https://www.illinoisestatelaw.com/essential-clauses-for-your-illinois-revocable-living-trust/',
    'dc.source': 'https://www.illinoisestatelaw.com/',
    'dc.language': 'en_US',
    'article:section': 'Illinois Estate Law',
  },
};

export default function Page() {
  const currentSlug = 'essential-clauses-for-your-illinois-revocable-living-trust';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const tocItems = [
    {
      id: 'core-administrative-clauses',
      title: 'Core Administrative Clauses',
      level: 2,
      numeration: '1',
    },
    {
      id: 'declaration-of-revocability',
      title: 'Declaration of Revocability',
      level: 3,
      numeration: '1.1',
    },
    {
      id: 'identification-of-parties-grantor-trustee-and-beneficiaries',
      title: 'Identification of Parties: Grantor, Trustee, and Beneficiaries',
      level: 3,
      numeration: '1.2',
    },
    {
      id: 'appointment-of-the-successor-trustee',
      title: 'Appointment of the Successor Trustee',
      level: 3,
      numeration: '1.3',
    },
    {
      id: 'trustee-powers-and-duties-the-rulebook-for-administration',
      title: 'Trustee Powers and Duties: The Rulebook for Administration',
      level: 3,
      numeration: '1.4',
    },
    {
      id: 'distributive-and-protective-clauses',
      title: 'Distributive and Protective Clauses',
      level: 2,
      numeration: '2',
    },
    {
      id: 'distribution-of-property-provisions',
      title: 'Distribution of Property Provisions',
      level: 3,
      numeration: '2.1',
    },
    {
      id: 'the-spendthrift-clause',
      title: 'The Spendthrift Clause',
      level: 3,
      numeration: '2.2',
    },
    {
      id: 'the-no-contest-in-terrorem-clause',
      title: 'The No-Contest (In Terrorem) Clause',
      level: 3,
      numeration: '2.3',
    },
    {
      id: 'critical-contingency-clauses',
      title: 'Critical Contingency Clauses',
      level: 2,
      numeration: '3',
    },
    {
      id: 'the-incapacity-clause',
      title: 'The Incapacity Clause',
      level: 3,
      numeration: '3.1',
    },
    {
      id: 'provisions-for-minor-or-young-beneficiaries',
      title: 'Provisions for Minor or Young Beneficiaries',
      level: 3,
      numeration: '3.2',
    },
    {
      id: 'chicago-revocable-living-trust-attorney-mary-liberty',
      title: 'Chicago Revocable Living Trust Attorney Mary Liberty',
      level: 2,
      numeration: '4',
    },
    {
      id: 'mary-liberty',
      title: 'Mary Liberty',
      level: 3,
      numeration: '4.1',
    },
    {
      id: 'clauses-for-21st-century-assets',
      title: 'Clauses for 21st-Century Assets',
      level: 2,
      numeration: '5',
    },
    {
      id: 'the-pet-trust-clause',
      title: 'The Pet Trust Clause',
      level: 3,
      numeration: '5.1',
    },
    {
      id: 'the-digital-assets-clause',
      title: 'The Digital Assets Clause',
      level: 3,
      numeration: '5.2',
    },
    {
      id: 'protect-your-legacy-with-the-right-trust-provisions',
      title: 'Protect Your Legacy with the Right Trust Provisions',
      level: 2,
      numeration: '6',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "FAQ",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a revocable living trust?",
                "answerCount": "1",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A revocable living trust is a legal document that allows you to manage and distribute your assets during your lifetime and after your death. It provides flexibility because you can change, update, or revoke it at any time while you are mentally capable. This type of trust helps avoid probate, offers privacy, and ensures your estate is handled according to your wishes. It is an essential tool for long-term financial and family planning."
                }
              },
              {
                "@type": "Question",
                "name": "Why are administrative clauses important in a revocable living trust?",
                "answerCount": "1",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Administrative clauses are the framework that holds the trust together. They define its structure, identify the people involved, and outline how the trust should be managed. Without these clauses, the trust would lack direction and could create confusion or legal issues later. Proper administrative clauses ensure smooth management and clear guidance for everyone involved."
                }
              },
              {
                "@type": "Question",
                "name": "What is the purpose of the Declaration of Revocability clause?",
                "answerCount": "1",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Declaration of Revocability confirms that the grantor has the right to amend, update, or cancel the trust at any time during their lifetime. This clause gives the trust its \"living\" nature by allowing flexibility as life circumstances change. It ensures that the grantor keeps control over their assets and can adapt the trust to reflect new family or financial developments. Without it, the trust would become irrevocable and far less flexible."
                }
              },
              {
                "@type": "Question",
                "name": "What role does the successor trustee play?",
                "answerCount": "1",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The successor trustee steps in to manage the trust if the grantor dies or becomes incapacitated. This person or institution ensures that bills are paid, assets are managed, and property is distributed to beneficiaries according to the trust's instructions. Their appointment helps avoid court involvement and probate delays. Choosing a responsible and trustworthy successor is key to maintaining smooth administration."
                }
              },
              {
                "@type": "Question",
                "name": "How does a spendthrift clause protect beneficiaries?",
                "answerCount": "1",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A spendthrift clause shields a beneficiary's inheritance from creditors and prevents poor financial decisions from jeopardizing the assets. It stops beneficiaries from selling or pledging their interest in the trust and keeps creditors from claiming trust assets before distribution. Illinois law explicitly recognizes this protection under the Illinois Trust Code. Although certain obligations like child support cannot be avoided, this clause offers strong defense against most financial risks."
                }
              },
              {
                "@type": "Question",
                "name": "What is the function of a no-contest clause in a trust?",
                "answerCount": "1",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A no-contest clause discourages beneficiaries from challenging the trust in court by threatening forfeiture of their inheritance if they lose the case. This helps prevent family disputes and costly legal battles that can drain estate assets. However, Illinois courts allow exceptions when a challenge is made in good faith and with probable cause, such as in cases of fraud or undue influence. This balance preserves fairness while promoting respect for the grantor's intentions."
                }
              },
              {
                "@type": "Question",
                "name": "Why are incapacity clauses essential in trust planning?",
                "answerCount": "1",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Incapacity clauses ensure a seamless transfer of control if the grantor becomes unable to manage their affairs. They define how incapacity is determined, often requiring certification from medical professionals. Once incapacity is confirmed, the successor trustee can take over privately without the need for court proceedings. These clauses provide continuity, prevent delays, and protect the grantor's dignity and autonomy."
                }
              },
              {
                "@type": "Question",
                "name": "How do trusts address modern assets like digital property and pets?",
                "answerCount": "1",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Modern trusts include provisions for digital and non-traditional assets such as online accounts, cryptocurrencies, and pets. Illinois law supports pet trusts, allowing funds to be set aside for their care, while the Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA) governs access to digital property. These clauses ensure that everything from social media profiles to beloved animals is managed responsibly. Including them demonstrates thoughtful planning for today's digital and personal realities."
                }
              },
              {
                "@type": "Question",
                "name": "How can Illinois Estate Law Firm help with creating a revocable living trust?",
                "answerCount": "1",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At Illinois Estate Law Firm, we guide individuals and families through the process of designing a revocable living trust that matches their goals and values. Our team focuses on clarity, protection, and long-term security, ensuring that every provision—from administrative clauses to modern asset planning—is handled with care. We take the time to understand your personal situation and craft a customized plan. Our goal is to provide peace of mind through a trust that truly works for you and your loved ones."
                }
              },
              {
                "@type": "Question",
                "name": "How can someone contact Illinois Estate Law Firm to begin their estate planning?",
                "answerCount": "1",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To start building your revocable living trust, contact Illinois Estate Law Firm at (312) 373-0731. You can schedule a consultation with a Chicago revocable trust lawyer who will explain your options and help you plan with confidence. The firm works with clients throughout Illinois and provides personalized guidance every step of the way. Reaching out today is the first step toward securing your family's financial future."
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.illinoisestatelaw.com/#WebPage",
            "name": "Essential Clauses for Your Illinois Revocable Living Trust",
            "alternateName": "Key Provisions to Include in an Illinois Revocable Living Trust",
            "headline": "Establishing a revocable living trust is a thoughtful way to protect your assets, provide clarity for your loved ones, and ensure your wishes are carried out. A well-drafted trust is built on a foundation of essential clauses that define how it will function, who will be involved, and how your estate will be handled in both expected and unexpected circumstances. These provisions give the trust its strength and make it an effective tool for long-term planning.",
            "description": "Creating a revocable living trust is a careful way to safeguard your assets, provide guidance for your family, and ensure your wishes are honored. A strong trust relies on key clauses that outline its operation, the people involved, and how your estate is managed in both routine and unexpected situations. At Illinois Estate Law Firm, an experienced Chicago revocable trust lawyer can help you design a plan that aligns with your goals and secures your family's future.",
            "disambiguatingDescription": "Setting up a revocable living trust is an effective way to protect your assets, offer clarity for your loved ones, and make sure your intentions are followed. The trust's effectiveness depends on essential clauses that specify how it works, who is involved, and how your estate is managed in various circumstances. At Illinois Estate Law Firm, a Chicago revocable trust lawyer can guide you in creating a plan that meets your needs and safeguards your family's future.",
            "url": "https://www.illinoisestatelaw.com/essential-clauses-for-your-illinois-revocable-living-trust/",
            "contentLocation": "Chicago, IL",
            "inLanguage": "en",
            "lastReviewed": "2025-11-10"
          })
        }}
      />

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
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">Oct 14, 2025</time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Essential Clauses for Your Illinois Revocable Living Trust
              </h1>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Establishing a revocable living trust is a thoughtful way to protect your assets, provide clarity for your loved ones, and ensure your wishes are carried out. A well-drafted trust is built on a foundation of essential clauses that define how it will function, who will be involved, and how your estate will be handled in both expected and unexpected circumstances. These provisions give the trust its strength and make it an effective tool for long-term planning.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              To create a trust that truly reflects your goals, it is important to work with knowledgeable legal counsel who understands both the law and your personal priorities. An experienced <a href="https://www.illinoisestatelaw.com/chicago-uncontested-probate-lawyer/" target="_blank" rel="noreferrer noopener" className="text-[var(--e-global-color-accent)] hover:opacity-80">Chicago revocable trust lawyer</a> can guide you through the process and help craft a plan tailored to your situation. At Illinois Estate Law Firm, we are ready to assist you in building a secure future for your family. Call us today at <a href="tel:3123730731" className="text-[var(--e-global-color-accent)] hover:opacity-80">(312) 373-0731</a> to schedule a consultation and take the next step in your estate planning journey.
            </p>

            <div className="my-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.768129510841!2d-87.6747937!3d41.9623152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3027f65a6d7%3A0x7e35457ee841537b!2sIllinois%20Estate%20Law!5e0!3m2!1sen!2s!4v1756397795444!5m2!1sen!2s"
                width="600"
                height="250"
                style={{ border: 0, borderRadius: '10px', width: '100%' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <h2 id="core-administrative-clauses" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
              Core Administrative Clauses
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              When you set up a revocable living trust, the administrative clauses are what hold it all together. Think of them as the trust's instruction manual. They give the trust its legal identity, spell out who's involved, and explain the rules for how everything should be managed. Without these core provisions, the trust wouldn't function smoothly or provide the peace of mind it's meant to deliver.
            </p>

            <div className="my-8 max-w-[560px]">
              <Image
                src="https://i.imgur.com/7VjvdxW.png"
                alt=""
                width={528}
                height={297}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <h3 id="declaration-of-revocability" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              Declaration of Revocability
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Every revocable living trust starts with one key promise: the grantor can change it. This clause makes it clear that the trust is revocable, meaning the grantor can amend, update, or even cancel it entirely at any point during their lifetime as long as they are mentally capable. That flexibility is what makes it a "living" trust. Life changes, such as marriage, divorce, children, or financial ups and downs, and the trust can change right along with it. Without this clause, the trust would act more like an irrevocable trust where control is given up permanently.
            </p>

            <h3 id="identification-of-parties-grantor-trustee-and-beneficiaries" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              Identification of Parties: Grantor, Trustee, and Beneficiaries
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Next, the trust needs to identify who is involved. Three main roles are always included:
            </p>

            <ul className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 list-disc pl-8 space-y-2">
              <li><strong>The Grantor (or Settlor): </strong>This is the person who creates the trust and transfers assets into it. In Illinois, many trusts are created by one individual, though married couples often set up a joint trust together.</li>
              <li><strong>The Trustee: </strong>This is the person or institution in charge of managing the trust assets. In most revocable trusts, the grantor usually names themselves as the first trustee so they can keep managing their own property without any major changes.</li>
              <li><strong>The Beneficiaries: </strong>These are the people or organizations who will benefit from the trust. Typically, the grantor is the primary beneficiary during their lifetime, and then other beneficiaries are named to inherit after the grantor passes away.</li>
            </ul>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Getting the names and details right here is essential. Any vagueness or mistakes could lead to confusion, disputes, or even legal battles later on.
            </p>

            <h3 id="appointment-of-the-successor-trustee" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              Appointment of the Successor Trustee
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              One of the most important clauses is the appointment of a successor trustee. This is the person (or sometimes an institution, such as a bank's trust department) who steps in if the grantor dies or becomes incapacitated. The successor trustee keeps the trust running, handling bills, managing assets, and eventually distributing property to the beneficiaries, all without court involvement or the delays of probate.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Choosing the right successor trustee is a serious decision. They will be taking on big responsibilities and will need both honesty and financial know-how. Many people also name backup successors in case the first choice cannot serve when the time comes.
            </p>

            <h3 id="trustee-powers-and-duties-the-rulebook-for-administration" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              Trustee Powers and Duties: The Rulebook for Administration
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              This clause is where the trust really gets its power. It spells out what the trustee can do, and it also sets the standards they have to follow. Under Illinois law, trustees already have broad powers such as selling property, managing investments, or settling claims, but those powers must always be exercised with care.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              <strong>Some of the key duties include:</strong>
            </p>

            <ul className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 list-disc pl-8 space-y-2">
              <li><strong>Duty of Loyalty: </strong>Acting only in the best interest of the beneficiaries, without conflicts of interest.</li>
              <li><strong>Duty of Impartiality:</strong> Treating all beneficiaries fairly when there is more than one.</li>
              <li><strong>Duty of Prudent Administration:</strong> Managing assets carefully, like a reasonable and cautious investor would, which usually means diversifying investments.</li>
              <li><strong>Duty to Inform and Report: </strong>Keeping beneficiaries informed and providing regular accountings of the trust's finances.</li>
            </ul>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              This is why the choice of trustee matters so much. A trusted sibling may be loyal but not financially savvy, while a professional trustee may bring expertise but feel more impersonal. A well-drafted trust strikes the right balance, giving the trustee the flexibility to do their job while holding them accountable to the beneficiaries.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="w-full border-collapse border border-[#e9eaeb] font-['Plus_Jakarta_Sans']">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="border border-[#e9eaeb] p-3 text-left font-bold">Clause Name</th>
                    <th className="border border-[#e9eaeb] p-3 text-left font-bold">Purpose</th>
                    <th className="border border-[#e9eaeb] p-3 text-left font-bold">Key Points under Illinois Law</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#e9eaeb] p-3">Declaration of Revocability</td>
                    <td className="border border-[#e9eaeb] p-3">Confirms that the grantor can amend or revoke the trust during their lifetime.</td>
                    <td className="border border-[#e9eaeb] p-3">The trust must clearly state that it is revocable; otherwise, it is treated as irrevocable.</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e9eaeb] p-3">Identification of Parties: Grantor, Trustee, and Beneficiaries</td>
                    <td className="border border-[#e9eaeb] p-3">Defines who creates, manages, and benefits from the trust.</td>
                    <td className="border border-[#e9eaeb] p-3">All parties must be clearly named to avoid disputes and ensure proper administration.</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e9eaeb] p-3">Appointment of the Successor Trustee</td>
                    <td className="border border-[#e9eaeb] p-3">Names who will manage the trust if the grantor dies or becomes incapacitated.</td>
                    <td className="border border-[#e9eaeb] p-3">Successor trustees continue administration without court supervision.</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e9eaeb] p-3">Trustee Powers and Duties: The Rulebook for Administration</td>
                    <td className="border border-[#e9eaeb] p-3">Describes trustee authority and fiduciary duties.</td>
                    <td className="border border-[#e9eaeb] p-3">Trustees must act loyally, prudently, and in the best interest of beneficiaries.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="distributive-and-protective-clauses" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
              Distributive and Protective Clauses
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              While administrative clauses form the skeleton of a revocable living trust, distributive and protective clauses are its heart and soul. These provisions spell out exactly how the grantor wants their wealth to be passed on and create legal safeguards to protect that inheritance once it is in the hands of the beneficiaries. This is where the trust shows its true power: not just transferring assets, but doing so with long-term control, security, and protection built in.
            </p>

            <h3 id="distribution-of-property-provisions" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              Distribution of Property Provisions
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              This section answers the big questions: who gets what, and when. Unlike a simple will, which usually transfers property outright, a trust gives the grantor much more flexibility. It allows them to design distributions that fit the unique needs of their beneficiaries and avoid some of the risks that come with sudden wealth.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              For example, a trust might direct that assets remain in place for the beneficiary's lifetime, with the trustee making distributions for health, education, maintenance, and support. Another common option is staged distributions, where a beneficiary receives portions of their inheritance at set ages, such as one-third at 25, one-third at 30, and the remainder at 35. This prevents a young adult from receiving everything at once before they have the maturity to handle it responsibly.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Trusts can also be customized for special situations. A grantor with a child who has a disability might create a supplemental needs trust, ensuring that the child receives financial support without losing eligibility for government benefits. This type of fine-tuned control is one of the biggest advantages of using a trust instead of relying solely on a will.
            </p>

            <h3 id="the-spendthrift-clause" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              The Spendthrift Clause
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Another powerful tool is the spendthrift clause. This provision protects a beneficiary's inheritance from two major risks: their own poor financial choices and the claims of creditors. It does this by preventing a beneficiary from selling or pledging away their interest in the trust and by keeping creditors from seizing trust assets before the trustee distributes them.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Illinois law, under the Illinois Trust Code (760 ILCS 3/502), explicitly recognizes spendthrift provisions. In fact, the law makes it simple: including language that property is "held subject to a spendthrift trust" is enough to create the protection.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              However, there are limits. Illinois public policy does not allow a spendthrift clause to block certain obligations, such as child support or spousal maintenance. This ensures that trusts cannot be used to dodge essential family responsibilities. Even with these exceptions, spendthrift provisions remain one of the most effective ways to safeguard an inheritance from creditors, lawsuits, divorce, or a beneficiary's own lack of discipline.
            </p>

            <h3 id="the-no-contest-in-terrorem-clause" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              The No-Contest (In Terrorem) Clause
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Family disputes over inheritance can quickly drain both relationships and resources. To discourage these battles, many trusts include a no-contest clause, also known as an in terrorem clause. This provision warns beneficiaries that if they challenge the trust in court and lose, they forfeit whatever inheritance they would have received.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Illinois generally upholds no-contest clauses, but courts approach them carefully. The most important exception is for challenges made in good faith and with probable cause. For instance, if a beneficiary genuinely believes the trust was the product of undue influence, fraud, or the grantor's lack of mental capacity, the courts are unlikely to enforce a forfeiture. This exception keeps the courthouse doors open for legitimate claims while still discouraging frivolous lawsuits.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              The effectiveness of a no-contest clause often depends on the size of the inheritance at stake. A $100,000 gift is a strong deterrent, while a $1,000 gift is far less persuasive. Even so, the clause serves as a clear statement of the grantor's wishes: they want their plan respected, not litigated. While no Illinois appellate court has gone so far as to completely disinherit a beneficiary under one of these clauses, the mere presence of the provision can be enough to prevent disputes and preserve both family harmony and estate assets.
            </p>

            <div className="my-8">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/wAKfrxY36O8?si=KvkqY3X3_hRFvQLJ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}
              ></iframe>
            </div>

            <h2 id="critical-contingency-clauses" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
              Critical Contingency Clauses
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              One of the main reasons people create a revocable living trust is to plan for life's "what ifs." Contingency clauses act as a safety net, laying out in advance how the trust should be handled in situations like incapacity or when beneficiaries are too young to manage money on their own. These provisions allow the grantor to replace the uncertainty of a court-imposed process with a private, pre-determined plan. This proactive approach is what makes a trust such a powerful tool for both incapacity and beneficiary planning.
            </p>

            <h3 id="the-incapacity-clause" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              The Incapacity Clause
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              The incapacity clause ensures that if the grantor can no longer manage their own financial affairs, there is a smooth, private transfer of authority to a chosen successor trustee. Without this clause, the family may have to go through a public guardianship proceeding in court, which can be both stressful and time-consuming.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              A well-written incapacity clause does more than simply name a successor trustee. It also defines exactly what "incapacity" means so there is no room for confusion. Most often, this means requiring a written certification from one or two licensed physicians confirming that the grantor is no longer capable of managing their finances. Once this determination is made, the successor trustee can immediately step in to handle bills, manage investments, and ensure the grantor's affairs continue without disruption.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Equally important, a good clause should also allow the grantor to return to their role as trustee if they later regain capacity. This makes the transfer of control flexible rather than permanent and keeps the grantor's autonomy intact whenever possible.
            </p>

            <h3 id="provisions-for-minor-or-young-beneficiaries" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              Provisions for Minor or Young Beneficiaries
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Leaving money directly to a minor is not only impractical but also legally problematic. If a child inherits assets outside of a trust, the court will likely appoint a guardian to manage the property until the child turns 18. At that point, the entire inheritance is typically turned over in a single lump sum, which can be overwhelming and risky for someone so young.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              A trust avoids this problem by giving the grantor control over how and when a young beneficiary receives their inheritance. The trustee can hold and manage assets for the child's benefit, making distributions for important needs such as health and education. The grantor can also decide on more gradual distributions, ensuring the child receives portions of their inheritance at ages when they are likely to be more financially responsible.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              It is also important to note the distinction between financial management and personal care. While the trust controls the child's inheritance, the appointment of a guardian to care for the child personally must be done separately, usually through a "pour-over will" that works hand in hand with the trust. Together, these two documents create a complete plan for both the financial security and personal care of minor children.
            </p>

            <h2 id="chicago-revocable-living-trust-attorney-mary-liberty" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
              Chicago Revocable Living Trust Attorney Mary Liberty
            </h2>

            <div className="bg-[#f5f5f5] rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="https://www.illinoisestatelaw.com/wp-content/uploads/2025/10/IMG_3202.jpg"
                    alt=""
                    width={1024}
                    height={1024}
                    className="w-full h-auto rounded-lg"
                  />
                  <h3 id="mary-liberty" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-4 mb-2">
                    Mary Liberty
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-4">
                    Mary Liberty is a Chicago revocable living trust attorney who founded her law practice with a simple mission: to make estate planning accessible, affordable, and stress-free for Illinois families. She offers a 100 percent flat-fee model, so clients never face hourly billing, hidden costs, or surprise charges. Because her practice is entirely online, families and professionals can complete the entire process, from consultation to signed documents, without leaving their homes. This makes high-quality estate planning both convenient and transparent.
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)]">
                    Mary's work focuses on revocable living trusts, estate planning, uncontested probate, and her innovative partial probate service that helps clients transition their cases smoothly when other attorney relationships have become difficult or costly. Known for her empathy, responsiveness, and clarity, she takes the time to explain every step in plain language and tailor solutions to each family's goals. From young parents naming guardians to blended families managing complex dynamics, Mary is trusted across Chicago for her approachable style, attention to detail, and dedication to protecting her clients' legacies.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="clauses-for-21st-century-assets" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
              Clauses for 21st-Century Assets
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              A modern estate plan has to go beyond bank accounts, real estate, and personal property. In today's world, people also leave behind beloved pets and valuable digital footprints. Including clauses that cover these 21st-century assets shows foresight and ensures that nothing important is overlooked. Addressing these areas directly, a revocable living trust can truly reflect the full scope of someone's legacy.
            </p>

            <h3 id="the-pet-trust-clause" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              The Pet Trust Clause
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              For many people, pets are more than companions; they are family. Planning for their care after the grantor's death or incapacity is not just a practical concern but an emotional one as well. Illinois law recognizes this bond and allows for the creation of a legally enforceable trust for pets under 760 ILCS 3/408. This provision elevates animals from being treated as property to becoming beneficiaries of a dedicated fund for their care.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              A pet trust clause should be carefully written to avoid confusion and disputes. It should:
            </p>

            <ul className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 list-disc pl-8 space-y-2">
              <li>Clearly identify the specific pet or pets covered by the trust.</li>
              <li>Name a caregiver who will have physical custody.</li>
              <li>Appoint a trustee to oversee and manage the funds. The caregiver and trustee may be the same person, but separating the roles provides a system of checks and balances.</li>
              <li>Outline the expected standard of care, including food, veterinary visits, and housing preferences.</li>
              <li>Provide enough funding to cover the pet's expected lifetime.</li>
            </ul>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Illinois law also includes an important safeguard. If the amount left in the pet trust is far more than what is reasonably needed, the court can reduce it. Any excess would then pass to the trust's other beneficiaries. This rule helps prevent challenges from family members who might otherwise claim that leaving too much money for pets was evidence of poor judgment.
            </p>

            <h3 id="the-digital-assets-clause" className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-accent)] mt-8 mb-4">
              The Digital Assets Clause
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              More and more of life takes place online, and with it comes a new category of estate planning: digital assets. These include sentimental items such as photos stored in the cloud and social media profiles, as well as financial accounts such as PayPal, cryptocurrency wallets, and online banking. Without clear legal authority, trustees may not be able to access these accounts because of strict federal privacy laws.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              To resolve this issue, Illinois has adopted the Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA), codified at 755 ILCS 70/. This law creates a framework for fiduciaries, such as a trustee or executor, to access and manage digital property. A digital assets clause in a trust is critical because it grants explicit authority to the successor trustee.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              <strong>RUFADAA uses a three-tiered system to determine access:</strong>
            </p>

            <ul className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6 list-disc pl-8 space-y-2">
              <li><strong>Online Tools: </strong>Instructions provided directly through a service provider's tool, for example Google's Inactive Account Manager or Facebook's Legacy Contact, take first priority.</li>
              <li><strong>Estate Plan: </strong>Directions given in a will, trust, or power of attorney come next.</li>
              <li><strong>Terms of Service:</strong> If neither of the above exists, the company's own terms of service will decide who has access.</li>
            </ul>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              Because of this hierarchy, planning for digital assets requires a coordinated approach. Simply including a clause in the trust may not be enough. The grantor should also review their online accounts and use the available tools to align with their overall estate plan. A knowledgeable attorney can help create a comprehensive digital strategy, which includes granting authority through the trust and keeping a secure record of accounts, passwords, and access instructions. This way, digital property, whether sentimental or financial, is not lost or locked away forever.
            </p>

            <h2 id="protect-your-legacy-with-the-right-trust-provisions" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
              Protect Your Legacy with the Right Trust Provisions
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              A revocable living trust is only as strong as the clauses it contains. Carefully addressing administrative, distributive, protective, and modern asset-related provisions creates a plan that not only secures your wealth but also ensures peace of mind for your loved ones. Every family's needs are unique, which is why working with skilled legal counsel is essential in drafting a trust that reflects your goals and values.
            </p>

            <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
              At Illinois Estate Law Firm, we help individuals and families throughout Illinois design revocable living trusts that provide clarity, protection, and lasting security. If you are ready to put a comprehensive plan in place, <a href="https://www.illinoisestatelaw.com/contact/" target="_blank" rel="noreferrer noopener nofollow" className="text-[var(--e-global-color-accent)] hover:opacity-80">contact us</a> today at <a href="tel:3123730731" className="text-[var(--e-global-color-accent)] hover:opacity-80">(312) 373-0731</a> to schedule a consultation with an experienced Chicago revocable trust lawyer.
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

          {/* CTA Section */}
          <div className="bg-[#f5f5f5] rounded-lg p-8 my-12">
            <div className="md:sticky md:top-[200px]">
              <p className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-text)] mb-4">
                Secure Your Family's Future from Home
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-base text-[var(--e-global-color-text)] mb-6">
                Professional legal guidance without leaving your house.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="tel:3123730731"
                  className="inline-block px-6 py-3 bg-[#4a708b] text-white font-['Plus_Jakarta_Sans'] font-bold rounded hover:opacity-90 transition"
                >
                  CALL (312) 373-0731
                </a>
                <Link
                  href="/book-consultation/"
                  className="inline-block px-6 py-3 bg-[#4a708b] text-white font-['Plus_Jakarta_Sans'] font-bold rounded hover:opacity-90 transition"
                >
                  BOOK ONLINE
                </Link>
              </div>
            </div>
          </div>

          {/* Share Post Section */}
          <div className="border-t border-gray-300 pt-8 mb-8">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[var(--e-global-color-text)]">
                SHARE POST ON:
              </span>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/essential-clauses-for-your-illinois-revocable-living-trust/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/essential-clauses-for-your-illinois-revocable-living-trust/')}&text=${encodeURIComponent('Essential Clauses for Your Illinois Revocable Living Trust')}`}
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
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/essential-clauses-for-your-illinois-revocable-living-trust/')}&title=${encodeURIComponent('Essential Clauses for Your Illinois Revocable Living Trust')}`}
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
                className="px-6 py-3 bg-[#4a708b] text-white font-['Plus_Jakarta_Sans'] font-bold rounded hover:opacity-90 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
