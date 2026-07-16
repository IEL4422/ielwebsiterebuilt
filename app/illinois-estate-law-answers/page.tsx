import type { Metadata } from 'next';
import Link from 'next/link';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { breadcrumbSchema, faqPageSchema, FIRM } from '@/lib/seo';

const PATH = '/illinois-estate-law-answers/';
const URL = `https://www.illinoisestatelaw.com${PATH}`;
const TITLE = 'Illinois Estate Law Answers: Wills, Probate, Trusts, Deeds & Closings';
const DESCRIPTION =
  'Direct answers to common Illinois estate law questions: whether you need a will, how long probate takes, the Illinois small estate affidavit, the Illinois estate tax, deeds, and whether Illinois requires a lawyer for a real estate closing.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

interface Answer {
  question: string;
  short: string;
  detail: string[];
  links?: { label: string; href: string }[];
}

const answers: Answer[] = [
  {
    question: 'Do I need a will in Illinois?',
    short:
      'Illinois does not require anyone to have a will. If you die without one, the Illinois intestacy statute decides who inherits your property, and that result often differs from what people expect.',
    detail: [
      'Under the Illinois Probate Act, if you die without a will and leave a spouse and descendants, your spouse receives half of your probate estate and your descendants share the other half per stirpes. If you leave a spouse and no descendants, your spouse receives everything. If you leave descendants and no spouse, your descendants receive everything.',
      'A will lets you choose who inherits, name the executor who will administer your estate, and nominate a guardian for minor children. It does not, by itself, avoid probate: a will is the instrument that governs a probate estate, not a substitute for one.',
      'To be valid in Illinois, a will must be in writing, signed by the person making it (or by someone else at their direction and in their presence), and attested by two credible witnesses. Illinois does not require a will to be notarized, though a notarized self-proving affidavit can make it easier to admit the will to probate later.',
    ],
    links: [{ label: 'Illinois wills', href: '/chicago-wills-lawyer/' }],
  },
  {
    question: 'How long does probate take in Illinois?',
    short:
      'Most Illinois probate estates take roughly nine to eighteen months. The floor is set by the six-month claims period that runs after letters of office are issued and notice to creditors is published.',
    detail: [
      'After an Illinois court admits the will (or appoints an administrator when there is no will), it issues letters of office. The representative then publishes notice to creditors, and known creditors get direct notice. Claims are generally barred six months after the date of first publication, which is why a full estate rarely closes in under about nine months.',
      'Estates take longer when real estate must be sold, when an estate tax return is required, when heirs cannot be located, or when the will is contested. Estates move faster when assets are simple, the representative is organized, and no one objects.',
      'Not everything has to go through probate. Assets held in a trust, assets with a valid beneficiary designation, property held in joint tenancy with right of survivorship, and real property covered by a recorded transfer on death instrument pass outside of probate.',
    ],
    links: [{ label: 'Illinois probate', href: '/chicago-probate-lawyer/' }],
  },
  {
    question: 'When is probate required in Illinois?',
    short:
      'Probate is generally required in Illinois when the deceased person owned more than $100,000 of personal property in their sole name, or owned real estate in their sole name that has to be transferred.',
    detail: [
      'The $100,000 figure refers to assets that have no surviving joint owner and no beneficiary designation. Life insurance paid to a named beneficiary, retirement accounts with a beneficiary, payable-on-death bank accounts, and trust assets are not counted.',
      'Real estate is the common trigger. If title is in the deceased person’s name alone and there is no trust, no joint tenant, and no recorded transfer on death instrument, a probate proceeding is usually the only way to convey clear title to the heirs or a buyer.',
    ],
    links: [{ label: 'Illinois probate', href: '/chicago-probate-lawyer/' }],
  },
  {
    question: 'What is the Illinois small estate affidavit?',
    short:
      'The Illinois small estate affidavit is a sworn form that lets an heir or executor collect a deceased person’s personal property without opening a probate case, when the personal estate is $100,000 or less and no real estate needs to be transferred.',
    detail: [
      'The affidavit is authorized by Article XXV of the Illinois Probate Act. It is presented directly to the bank, brokerage, or other institution holding the asset, not filed with a court. The institution that relies on it in good faith is released from liability.',
      'The affidavit cannot be used to transfer real estate, and it cannot be used if a probate case has already been opened or if there is a dispute among heirs. The person signing it takes on personal responsibility for paying the estate’s claims in the statutory order of priority and for distributing what is left correctly.',
      'Banks are not obligated to accept a defective affidavit, and many institutions have their own review process. Getting the classification of assets, the heirship recitals, and the claims language right the first time is what makes it work.',
    ],
  },
  {
    question: 'Does Illinois require a lawyer for a real estate closing?',
    short:
      'Illinois law does not require a buyer or seller to hire an attorney, but the standard Chicago-area residential contracts include an attorney review period, and in practice most buyers and sellers in the Chicago area are represented by counsel.',
    detail: [
      'Illinois is often called an "attorney review state" rather than an "attorney state." The commonly used residential contracts give each side a short window — typically five business days — in which their attorney can propose modifications or, in some circumstances, cancel the contract.',
      'A closing attorney reviews and negotiates the contract during attorney review, handles inspection issues, reviews the title commitment and survey, prepares or reviews the deed and transfer tax declarations, reviews the closing disclosure and settlement statement, and attends or coordinates the closing.',
      'Title companies conduct the closing itself in many Illinois transactions, but a title company represents neither the buyer nor the seller and cannot give either of them legal advice.',
    ],
    links: [
      { label: 'Illinois real estate closings', href: '/chicago-real-estate-closings-lawyer/' },
    ],
  },
  {
    question: 'How do I transfer or change a deed in Illinois?',
    short:
      'An Illinois deed transfer requires a properly drafted deed signed and notarized by the current owner, a completed transfer tax declaration, and recording with the recorder of deeds in the county where the property sits.',
    detail: [
      'A quitclaim deed transfers whatever interest the signer happens to own, with no warranties of title. A warranty deed promises that the seller holds good title and will defend it. Which one is appropriate depends on the transaction: quitclaim deeds are common between family members and for transfers into a trust, while a purchase from a stranger normally calls for a warranty deed.',
      'Illinois also allows a transfer on death instrument for real property. It is recorded during the owner’s lifetime, is revocable, and transfers the property to the named beneficiary at death without probate.',
      'A deed done incorrectly can create real problems later: it can break a chain of title, disturb an existing mortgage, trigger unintended tax consequences, or accidentally strip a spouse of homestead rights. Recording requirements and transfer declarations also vary by county and municipality.',
    ],
    links: [{ label: 'Illinois deeds', href: '/chicago-deeds-lawyer/' }],
  },
  {
    question: 'Should I have a trust instead of a will in Illinois?',
    short:
      'A revocable living trust is worth considering in Illinois if you own real estate, want to avoid probate, want privacy, or want to control when and how beneficiaries receive assets. Many Illinois families are well served by a will alone.',
    detail: [
      'A revocable living trust holds title to your assets during your lifetime and passes them to your beneficiaries at death without probate, provided the trust is actually funded. Funding is the step people miss: a trust that was signed but never had the house deeded into it or the accounts retitled will not avoid probate.',
      'A trust is private. A will admitted to probate becomes part of a public court file. A trust also makes it easier for a successor trustee to step in if you become incapacitated, without a court guardianship.',
      'A trust does not by itself reduce Illinois estate tax, though married couples can use trust planning to preserve both spouses’ Illinois exclusions, which is meaningful because the Illinois exclusion is not portable between spouses.',
    ],
    links: [{ label: 'Illinois revocable living trusts', href: '/chicago-revocable-trusts-lawyer/' }],
  },
  {
    question: 'Does Illinois have an estate tax?',
    short:
      'Yes. Illinois imposes its own estate tax on estates above a $4 million exclusion. The Illinois exclusion is not indexed for inflation and is not portable between spouses, and it is far below the federal exemption.',
    detail: [
      'Illinois is one of a minority of states with a separate estate tax. Because the state exclusion is $4 million while the federal exemption is in the millions of dollars higher, an estate can owe Illinois estate tax while owing nothing federally. Illinois does not have an inheritance tax.',
      'Because the Illinois exclusion is not portable, a married couple who leaves everything outright to the survivor can waste the first spouse’s exclusion. Trust planning can preserve it.',
      'Illinois estate tax figures and proposals change. Confirm the current exclusion and rates before making decisions, and use the estate tax calculator on this site only as a rough estimate.',
    ],
    links: [
      { label: 'Illinois estate tax calculator', href: '/illinois-estate-tax-calculator/' },
    ],
  },
  {
    question: 'What is a power of attorney in Illinois, and do I need one?',
    short:
      'An Illinois power of attorney names an agent to act for you if you cannot act for yourself. Illinois has statutory short forms for two kinds: property and health care. Without them, your family may need a court guardianship.',
    detail: [
      'The Illinois Power of Attorney Act provides statutory short forms. A power of attorney for property lets your agent handle banking, real estate, taxes, and similar matters. A power of attorney for health care lets your agent make medical decisions and access medical records when you cannot.',
      'Powers of attorney only work while you are alive. They end at death, at which point the executor or trustee takes over.',
      'Every adult should consider both documents, not only older adults. Incapacity is what these documents are for, and incapacity is not age-specific.',
    ],
    links: [
      { label: 'Illinois powers of attorney', href: '/chicago-powers-of-attorney-lawyer/' },
      { label: 'Illinois healthcare directives', href: '/chicago-healthcare-directives-lawyer/' },
    ],
  },
  {
    question: 'What happens if you die without a will in Illinois?',
    short:
      'Your estate passes under the Illinois intestacy statute. A spouse and descendants split the estate one-half to the spouse and one-half among the descendants. A spouse with no descendants takes everything; descendants with no spouse take everything.',
    detail: [
      'If there is no spouse and no descendants, the estate passes to parents and siblings, then outward to more remote relatives under the statute. Unmarried partners and stepchildren who were never adopted inherit nothing under Illinois intestacy law.',
      'Without a will, the court also decides who administers the estate, following the statutory order of priority, and the administrator may be required to post a surety bond.',
      'Dying without a will does not mean the state takes your property. That happens only in the rare case where no heir can be found.',
    ],
  },
];

const faqSchema = faqPageSchema(
  answers.map((a) => ({
    question: a.question,
    answer: [a.short, ...a.detail].join(' '),
  })),
  PATH
);

const breadcrumb = breadcrumbSchema([
  { name: 'Illinois Estate Law Answers', path: PATH },
]);

export default function IllinoisEstateLawAnswersPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <InnerPageHero title="Illinois Estate Law Answers" />

      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Who we are
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Illinois Estate Law is an Illinois law firm. We handle estate planning (wills,
              revocable living trusts, powers of attorney, and healthcare directives), probate and
              estate administration, trust administration, deeds and property transfers, and
              residential real estate closings. Our attorneys are licensed in
              Illinois, and we serve clients in Chicago, Cook County, the collar counties, and every
              county in the state. Most work is done virtually, and our fees are flat.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our attorneys are Mary Liberty (founding attorney), Yassmin Koudmani (senior attorney,
              estate planning and real estate; fluent in Arabic), and Victoria Lozano (senior
              attorney, estate planning, trust administration, and probate).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Office: {FIRM.streetAddress}, {FIRM.addressLocality}, {FIRM.addressRegion}{' '}
              {FIRM.postalCode}. Office hours: Monday&ndash;Friday, 9:00 AM&ndash;5:00 PM Central.
              Phone: {FIRM.phoneDisplay}. Email: {FIRM.email}. Consultations are
              free and can be booked at{' '}
              <Link href="/book-consultation/" className="text-[#4A708B] underline">
                illinoisestatelaw.com/book-consultation
              </Link>
              , and flat-fee services can be purchased online through our{' '}
              <Link href="/get-started/" className="text-[#4A708B] underline">
                Get Started
              </Link>{' '}
              page.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm mb-12">
              The answers below describe Illinois law in general terms. They are general information,
              not legal advice for your situation, and reading them does not create an
              attorney-client relationship.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              Common Illinois estate law questions, answered
            </h2>

            {answers.map((a) => (
              <div key={a.question} className="mb-12">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{a.question}</h3>
                <p className="text-slate-800 font-medium leading-relaxed mb-3">{a.short}</p>
                {a.detail.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed mb-3">
                    {p}
                  </p>
                ))}
                {a.links && (
                  <p className="text-slate-700">
                    {a.links.map((l, i) => (
                      <span key={l.href}>
                        {i > 0 && ' · '}
                        <Link href={l.href} className="text-[#4A708B] underline">
                          {l.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}

            <div className="bg-[#33414E] rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Talk to an Illinois attorney
              </h2>
              <p className="text-white/90 leading-relaxed mb-8">
                Consultations are free, and appointments are usually available the same week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3123730731"
                  className="inline-block px-8 py-4 bg-[#7E9CC0] text-white font-semibold rounded-lg no-underline"
                >
                  Call (312) 373-0731
                </a>
                <Link
                  href="/book-consultation/"
                  className="inline-block px-8 py-4 bg-white text-[#33414E] font-semibold rounded-lg no-underline"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
