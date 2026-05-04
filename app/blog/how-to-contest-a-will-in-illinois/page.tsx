'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, ChevronDown, ChevronUp, Clock, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, Scale, ArrowRight, CircleX as XCircle, BookOpen, Users, Gavel } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-contest-a-will-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedGround, setExpandedGround] = useState<number | null>(null);
  const [checkedGrounds, setCheckedGrounds] = useState<Set<number>>(new Set());
  const [showCheckerResult, setShowCheckerResult] = useState(false);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-a-will-contest', title: 'What Is a Will Contest in Illinois?', level: 2, numeration: '2' },
    { id: 'who-can-contest', title: 'Who Has Standing to Contest a Will?', level: 2, numeration: '3' },
    {
      id: 'grounds', title: 'The 6 Legal Grounds for Contesting a Will in Illinois', level: 2, numeration: '4',
      children: [
        { id: 'lack-of-capacity', title: 'Lack of Testamentary Capacity', level: 3, numeration: '4.1' },
        { id: 'undue-influence', title: 'Undue Influence', level: 3, numeration: '4.2' },
        { id: 'fraud-forgery', title: 'Fraud or Forgery', level: 3, numeration: '4.3' },
        { id: 'improper-execution', title: 'Improper Execution', level: 3, numeration: '4.4' },
        { id: 'revocation', title: 'Prior Valid Revocation', level: 3, numeration: '4.5' },
        { id: 'insane-delusion', title: 'Insane Delusion', level: 3, numeration: '4.6' },
      ],
    },
    { id: 'deadline', title: 'The 6-Month Deadline You Cannot Miss', level: 2, numeration: '5' },
    { id: 'process', title: 'The Will Contest Process: Step by Step', level: 2, numeration: '6' },
    { id: 'grounds-checker', title: 'Interactive: Do You Have Grounds?', level: 2, numeration: '7' },
    { id: 'outcomes', title: 'What Happens If You Win — or Lose?', level: 2, numeration: '8' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '9' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '10' },
  ];

  const grounds = [
    {
      title: 'Lack of Testamentary Capacity',
      id: 'lack-of-capacity',
      strength: 'common',
      summary: 'The testator did not understand what they were signing, the extent of their property, or who their natural heirs were at the time of execution.',
      detail: `Illinois requires a testator to be of "sound mind and memory" at the time the will is signed (755 ILCS 5/4-1). Courts define testamentary capacity as the ability to simultaneously understand: (1) the nature and extent of their property, (2) who their natural heirs are, (3) the nature of making a will, and (4) how the will distributes property in light of the above.

Critically, capacity is assessed at the exact moment of signing — not before or after. A person diagnosed with Alzheimer's may still have executed a valid will during a "lucid interval." Conversely, a person who is otherwise healthy may lack capacity if they were heavily sedated or in acute psychological distress when they signed.

Evidence used in capacity challenges includes: medical records from around the time of signing, testimony from the drafting attorney, testimony from witnesses present at signing, testimony from family members about the testator's behavior, and expert testimony from physicians or neuropsychologists.

The burden of proof is on the contestant. Illinois courts apply a low threshold for capacity — most wills survive capacity challenges unless the evidence of impairment is clear and contemporaneous. A mere diagnosis of dementia, standing alone, is usually insufficient.`,
      redFlag: 'Testator had advanced dementia, was hospitalized, heavily medicated, or showed confusion about basic facts around the time they signed the will.',
    },
    {
      title: 'Undue Influence',
      id: 'undue-influence',
      strength: 'common',
      summary: 'Another person overpowered the testator\'s free will, substituting their own desires for the testator\'s true wishes.',
      detail: `Undue influence is the most commonly litigated ground for will contests in Illinois. It occurs when a person in a position of trust or authority over the testator uses that relationship to override the testator's independent judgment about how to dispose of their estate.

Illinois courts look for four elements: (1) a susceptible testator (due to age, illness, isolation, or dependency); (2) opportunity to exert influence (the influencer had regular access and contact); (3) a disposition to exert influence for an improper purpose; and (4) a result that appears to be the effect of undue influence (often a dramatic, unexplained shift in who benefits).

Courts pay particular attention to: whether the will was drafted and executed at the influencer's instigation, whether the testator was isolated from family and advisors, whether the influencer was present during attorney meetings, and whether the will dramatically departs from prior testamentary plans without explanation.

Undue influence is distinguished from normal persuasion, affection, or even "doing a good job of convincing." The key is that the testator's will must be completely overpowered — they must be acting as an instrument of the influencer rather than as a free agent.

Circumstantial evidence is the norm; direct evidence of influence is rare. Illinois courts have found undue influence where a caregiver was the sole beneficiary of a will signed days before death, with no prior relationship.`,
      redFlag: 'A new caregiver, recent romantic partner, or estranged family member is the primary beneficiary; the testator was isolated from their usual contacts; the will was executed shortly before death without prior discussion.',
    },
    {
      title: 'Fraud or Forgery',
      id: 'fraud-forgery',
      strength: 'strong',
      summary: 'The testator was deceived about what they signed, or the will or signature was fabricated.',
      detail: `Fraud in the context of a will contest takes two forms:

Fraud in the inducement: The testator was deceived about facts that caused them to make the will they did — for example, someone told the testator that a child had died, causing the testator to disinherit that child. The will itself was knowingly signed, but the testator's decision was based on a deliberate lie.

Fraud in the execution: The testator did not know they were signing a will at all — for example, they believed they were signing a different document entirely.

Forgery is the most extreme form of fraud: the testator's signature itself is fabricated, or the entire document is a counterfeit. Courts take forgery allegations extremely seriously and typically require forensic handwriting analysis.

For fraud claims, the contestant must prove the fraud was deliberate and material — that it actually caused the testamentary scheme reflected in the will. Innocent misrepresentations that did not affect the will's content are not actionable.

Fraud cases are difficult to prove without documentary evidence or witness testimony, but they can be among the strongest grounds for a contest when evidence exists.`,
      redFlag: 'The testator mentioned being confused about what they signed; the signature looks different from authenticated examples; the will was drafted by a beneficiary rather than an independent attorney.',
    },
    {
      title: 'Improper Execution',
      id: 'improper-execution',
      strength: 'strong',
      summary: 'The will was not signed and witnessed in compliance with Illinois statutory requirements (755 ILCS 5/4-3).',
      detail: `This is technically the most straightforward ground for a will contest because it focuses on what happened at signing, not on subjective intent or capacity. Under 755 ILCS 5/4-3, a valid Illinois will must be: (1) in writing, (2) signed by the testator at the end, and (3) attested and subscribed by two or more credible witnesses in the presence of the testator.

Common execution defects that can void a will:
- Only one witness instead of two
- Witnesses signed at a different time than the testator (not "in the presence of" each other)
- A witness was a minor or legally incompetent
- The testator did not sign at the end of the document
- The will was not in writing (e.g., a video or audio recording)

Note that a witness who is also a beneficiary does not void the will — but it may strip the interested witness of their bequest under 755 ILCS 5/4-6.

Execution challenges are often the most clear-cut when the defect is documented in the will itself (e.g., only one signature line for witnesses) or in testimony from the witnesses about the ceremony. If you can establish that the statutory requirements were not met, the will is void as a matter of law — no discretion for the court.`,
      redFlag: 'The will has only one witness signature, was executed under rushed circumstances, was witnessed by a beneficiary, or does not match the statutory formalities.',
    },
    {
      title: 'Prior Valid Revocation',
      id: 'revocation',
      strength: 'varies',
      summary: 'The will being admitted to probate was revoked by the testator before death, and a later valid will or act of revocation exists.',
      detail: `Under 755 ILCS 5/4-7, an Illinois will can be revoked in several ways:

By a subsequent will: A later will that expressly revokes the prior will, or that is inconsistent with it, supersedes it. If the probate court is admitting a 2015 will but you have evidence of a 2020 will, the 2020 will (if valid) controls.

By physical act: The testator can revoke a will by burning, canceling, tearing, or destroying the document — or by directing another person to do so in the testator's presence. If a testator destroyed their will before death, that act is a revocation.

By operation of law: Illinois law automatically revokes bequests to a former spouse after a final divorce judgment (755 ILCS 5/4-7(b)). A divorce does not revoke the entire will, but any provision benefiting the ex-spouse is treated as if that person predeceased the testator.

The revocation ground is particularly relevant when: a later will exists but was not submitted to the court, there is evidence the testator destroyed the will intentionally, or a divorce occurred after the will was signed.

Proving revocation often requires testimony about the testator's statements and actions near the end of life, along with evidence about where the original will was kept and its condition when found.`,
      redFlag: 'You have seen or heard about a more recent will; the original will was not found with the testator\'s papers and had to be proved as a lost will; the testator told people they changed their will after a major life event.',
    },
    {
      title: 'Insane Delusion',
      id: 'insane-delusion',
      strength: 'difficult',
      summary: 'The testator held a fixed, false belief with no basis in fact that directly affected their testamentary decisions.',
      detail: `An insane delusion is a legal term of art — distinct from general mental incapacity — that refers to a specific false belief the testator held that had no rational basis and that directly caused them to make testamentary choices they would not otherwise have made.

Classic examples: a testator who believed, without any factual basis, that their child had committed a terrible act they had not committed, and disinherited that child on that belief. Or a testator who falsely believed they had no biological children. A person can have sufficient testamentary capacity in all other respects while harboring a specific insane delusion that corrupts one or more provisions of their will.

The key distinction from capacity: a person with an insane delusion may have general testamentary capacity but lack the ability to accurately apply it in a specific context. Capacity looks at the general ability to understand; insane delusion looks at whether a specific false belief infected the testamentary decision.

This is one of the rarest and most difficult grounds to establish. Courts are very reluctant to substitute their judgment for the testator's — even strongly held mistaken beliefs are not usually "insane" in the legal sense unless they have absolutely no grounding in reality. Eccentric, illogical, or even irrational beliefs about family members are generally insufficient without clear proof that the belief was wholly unmoored from fact.`,
      redFlag: 'The testator expressed clearly false beliefs about a beneficiary (e.g., that they were not their biological child, or that they had committed a specific crime) that directly caused a disinheritance.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Evaluate Your Standing and Grounds',
      desc: 'Confirm you are an "interested person" under Illinois law — typically an heir at law or beneficiary under a prior will. Assess whether you have one or more legally recognized grounds. An estate planning attorney can evaluate your situation in a consultation.',
    },
    {
      step: '02',
      title: 'Gather Evidence Before the Will Is Admitted',
      desc: 'Collect medical records, witness statements, prior wills, and any communications that support your claim. Evidence is easier to obtain before the estate is fully administered. Act quickly — the 6-month clock starts when the will is admitted, not when you decide to contest.',
    },
    {
      step: '03',
      title: 'File the Complaint in Circuit Court',
      desc: 'A will contest is initiated by filing a civil complaint in the Circuit Court of the county where the probate estate is pending (typically Cook County for Chicago-area estates). The complaint must name all interested parties and set forth the specific grounds for the contest.',
    },
    {
      step: '04',
      title: 'Serve All Interested Parties',
      desc: 'All persons named in the will and all heirs at law must be served with the complaint and given the opportunity to participate in the litigation. Service must comply with Illinois civil procedure requirements.',
    },
    {
      step: '05',
      title: 'Discovery Phase',
      desc: 'Both sides exchange evidence. This typically includes depositions of the drafting attorney, witnesses to the will, medical providers, and other interested parties. Document production, interrogatories, and expert witnesses (physicians, forensic document examiners) are common.',
    },
    {
      step: '06',
      title: 'Trial or Settlement',
      desc: 'Most Illinois will contests settle before trial. If the case does not settle, it proceeds to a bench or jury trial. The contestant bears the burden of proving their grounds by a preponderance of the evidence. Trials in will contests can last from days to weeks depending on complexity.',
    },
  ];

  const faqs = [
    {
      question: 'How long do I have to contest a will in Illinois?',
      answer: 'You have 6 months from the date the will is admitted to probate to file a will contest under 755 ILCS 5/8-1. This is a strict statute of limitations — missing the deadline is almost always fatal to the claim, regardless of the merits. If you suspect a will is invalid, you should consult an attorney immediately after the will is admitted. In some cases, you may be able to challenge admittance of the will before it is admitted, which avoids the limitations period issue entirely.',
    },
    {
      question: 'Who pays for a will contest in Illinois?',
      answer: "Will contest litigation is expensive and can drag on for years. Costs depend on the complexity of the case and the grounds being asserted. Many will contest attorneys work on a contingency fee for contestants (taking a percentage of any recovery), while the estate\'s executor typically pays attorneys\' fees from estate assets to defend the will. If you lose a will contest as the contestant, you generally bear your own legal fees — there is no fee-shifting rule that makes you pay the estate\'s fees, unless you pursued a frivolous claim.",
    },
    {
      question: 'Can an executor contest a will?',
      answer: 'An executor named in a will generally has a duty to defend the will and does not have standing to contest it in most circumstances. However, if an executor is also an heir at law who would receive more under intestacy than under the will, they may have standing as an interested party — though they would typically need to resign as executor first to avoid a conflict of interest.',
    },
    {
      question: 'What is a "no-contest clause" in an Illinois will? Does it apply to me?',
      answer: 'A no-contest clause (also called an "in terrorem" clause) is a provision in a will stating that any beneficiary who contests the will forfeits their inheritance. Illinois courts generally enforce no-contest clauses, but there is an important exception: if you had probable cause to contest the will — meaning a reasonable basis for your challenge — the clause may not be enforced against you even if you lose the contest. If you are a beneficiary with a no-contest clause in the will, discuss this risk carefully with your attorney before filing.',
    },
    {
      question: 'Does contesting a will stop the probate process?',
      answer: 'Not automatically, but a will contest does create complications. The probate estate can continue to be administered during the pendency of a will contest — expenses can be paid, assets managed — but final distribution to beneficiaries is typically stayed until the contest is resolved. Courts may require the executor to hold assets pending the outcome, particularly if there is a risk that distribution could not be clawed back.',
    },
    {
      question: 'What is the difference between contesting a will and contesting the probate of a will?',
      answer: 'Technically, a "will contest" under 755 ILCS 5/8-1 is a separate civil action filed after the will has been admitted to probate. A challenge to admission — filed before the will is admitted — is a different procedural vehicle. Either way, the underlying legal grounds (capacity, undue influence, execution defects, etc.) are similar. Your attorney will advise which procedural approach is appropriate given the timing of your situation.',
    },
    {
      question: 'Can I contest a will if I was not a beneficiary?',
      answer: 'You must have "standing" — meaning you are an interested person who would receive a share of the estate if the will were declared invalid. This typically means you are: (a) an heir at law who would inherit under intestate succession if there were no valid will, or (b) a beneficiary under a prior will that would take effect if the current will is voided. If you would receive nothing under either scenario, you likely lack standing to contest, regardless of your relationship to the deceased.',
    },
    {
      question: 'Is it worth contesting a will?',
      answer: 'That depends on the strength of your grounds, the size of the estate, and the cost of litigation. Will contests are expensive, emotionally draining, and time-consuming — and the majority do not succeed at trial. However, even weak contestants often achieve negotiated settlements that provide some recovery. Before deciding, have an experienced probate attorney evaluate your evidence honestly and give you a realistic assessment of your prospects and the likely cost.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Contest a Will in Illinois: Grounds, Deadlines, and the Legal Process',
    description: 'Complete guide to contesting a will in Illinois — who has standing, the 6 legal grounds under 755 ILCS 5/8-1, the 6-month deadline, the step-by-step court process, and what to expect if you win or lose.',
    author: {
      '@type': 'Person',
      name: 'Mary Liberty',
      jobTitle: 'Estate Planning Attorney',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Illinois Estate Law',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.illinoisestatelaw.com/logo.png',
      },
    },
    datePublished: '2026-05-04',
    dateModified: '2026-05-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/how-to-contest-a-will-in-illinois/',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const toggleGround = (i: number) => {
    setCheckedGrounds(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
    setShowCheckerResult(false);
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16 sm:py-20">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
              <span className="text-lg">&larr;</span>
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-['Plus_Jakarta_Sans'] font-semibold">
                  Probate
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  14 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                How to Contest a Will in Illinois: Grounds, Deadlines, and the Legal Process
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Contesting a will in Illinois is a serious legal proceeding with strict deadlines, specific grounds, and significant costs. Understanding what is legally required — before you act — can mean the difference between a viable claim and a missed opportunity.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>May 4, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="article-summary" className="text-2xl font-bold mt-8 mb-4">
              Article Summary
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg">
                    A will contest is a formal lawsuit filed in Illinois probate court to invalidate a will or specific provisions of a will. Winning requires more than believing the will is unfair — you need recognized legal grounds, proper standing, and you must act within the strict 6-month deadline.
                  </p>
                  <p className="mb-4">
                    This guide explains who can contest a will in Illinois, the six recognized grounds for a challenge (including lack of testamentary capacity, undue influence, fraud, improper execution, revocation, and insane delusion), the step-by-step court process under 755 ILCS 5/8-1, and what happens to the estate if the contest succeeds or fails.
                  </p>
                  <p className="mb-0">
                    You will also find an interactive grounds checker, a process timeline, and answers to the most frequently asked questions about Illinois will contests.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="what-is-a-will-contest" className="text-2xl font-bold mt-12 mb-4">
              What Is a Will Contest in Illinois?
            </h2>

            <p className="mb-6">
              A will contest — formally called an &ldquo;action to contest will&rdquo; under 755 ILCS 5/8-1 — is a civil lawsuit filed in Illinois probate court seeking a judgment that a will (or a specific provision of it) is invalid and should not control the distribution of the decedent&apos;s estate. If the contest succeeds, the court either reverts to a prior valid will or distributes the estate under Illinois intestate succession laws.
            </p>

            <p className="mb-6">
              Will contests are distinct from other probate disputes, such as challenges to a specific asset&apos;s ownership, creditor claims against the estate, or disputes about executor conduct. Those matters are handled separately. A will contest specifically attacks the validity of the will document itself.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1">Critical Distinction: Unfair ≠ Invalid</p>
                  <p className="text-amber-700 text-sm">Illinois courts will not void a will simply because it seems unfair, disproportionate, or contrary to what family members expected. A testator has broad freedom to leave their estate to whomever they choose — even excluding close relatives entirely — as long as the will was validly executed. A successful will contest requires proving one of the specific legal grounds discussed below, not just that the outcome is unjust.</p>
                </div>
              </div>
            </div>

            <h2 id="who-can-contest" className="text-2xl font-bold mt-12 mb-4">
              Who Has Standing to Contest a Will in Illinois?
            </h2>

            <p className="mb-6">
              You can only contest a will if you are an <strong>&ldquo;interested person&rdquo;</strong> — someone who would receive a financial benefit if the will were declared invalid. Illinois courts have defined this to include two categories:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="bg-[#2D3E50] text-white rounded-xl p-6">
                <Users className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-2">Heirs at Law</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Persons who would inherit under Illinois intestate succession if there were no valid will — typically the spouse, children, parents, or siblings of the deceased. If the contested will is voided, these people would benefit from the estate reverting to intestacy.
                </p>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-6">
                <FileText className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-2">Prior Will Beneficiaries</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Persons named in an earlier will who would benefit if that prior will were reinstated. If a 2015 will named you as a beneficiary but a 2022 will removed you, you may have standing to contest the 2022 will on the theory that the earlier will should control.
                </p>
              </div>
            </div>

            <p className="mb-6">
              A person who would receive nothing under intestacy <em>and</em> was not named in any prior will generally lacks standing — even if they were close to the decedent or believe the will is wrong. The financial interest requirement is strictly enforced.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 my-6">
              <p className="font-semibold text-[#2D3E50] mb-2 text-sm">Note on No-Contest Clauses</p>
              <p className="text-gray-700 text-sm">If you are a current beneficiary under the will you want to contest, check whether it contains a &ldquo;no-contest clause&rdquo; (in terrorem clause). Contesting the will may forfeit your existing bequest. Illinois courts generally enforce these clauses, though there is a probable-cause exception. Review this issue carefully with an attorney before filing.</p>
            </div>

            <h2 id="grounds" className="text-2xl font-bold mt-12 mb-4">
              The 6 Legal Grounds for Contesting a Will in Illinois
            </h2>

            <p className="mb-6">
              Illinois recognizes six categories of grounds for a will contest. You must establish at least one of these grounds — feeling that the will is unfair or surprising is not enough. Each ground has different evidentiary requirements and different likelihoods of success.
            </p>

            <div className="space-y-4 my-8">
              {grounds.map((ground, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedGround(expandedGround === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${ground.strength === 'strong' ? 'bg-green-500' : ground.strength === 'common' ? 'bg-blue-500' : ground.strength === 'difficult' ? 'bg-red-400' : 'bg-amber-400'}`} />
                      <div className="text-left">
                        <span className="font-semibold text-gray-900">{ground.title}</span>
                        <span className={`ml-3 text-xs px-2 py-0.5 rounded-full font-medium ${ground.strength === 'strong' ? 'bg-green-100 text-green-700' : ground.strength === 'common' ? 'bg-blue-100 text-blue-700' : ground.strength === 'difficult' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                          {ground.strength === 'strong' ? 'Strong when proven' : ground.strength === 'common' ? 'Most common' : ground.strength === 'difficult' ? 'Difficult to prove' : 'Varies'}
                        </span>
                      </div>
                    </div>
                    {expandedGround === index ? <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />}
                  </button>
                  {expandedGround === index && (
                    <div className="px-6 py-5 bg-white border-t border-gray-200">
                      <p className="text-gray-600 text-sm italic mb-4">{ground.summary}</p>
                      {ground.detail.split('\n\n').map((para, pi) => (
                        <p key={pi} className="text-gray-700 mb-4 leading-relaxed text-sm">{para}</p>
                      ))}
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-2">
                        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Red Flags to Watch For</p>
                        <p className="text-gray-700 text-sm">{ground.redFlag}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 id="deadline" className="text-2xl font-bold mt-12 mb-4">
              The 6-Month Deadline You Cannot Miss
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-red-800 mb-2">6 Months From Admission — No Exceptions</p>
                  <p className="text-red-700 mb-3">Under 755 ILCS 5/8-1(a), a will contest must be filed within <strong>6 months after the will has been admitted to probate</strong>. This is a strict statute of limitations. Courts have almost uniformly refused to extend this deadline regardless of the contestant&apos;s circumstances — illness, lack of knowledge, or attorney error.</p>
                  <p className="text-red-700 text-sm">The clock starts from the date the probate court issues an order admitting the will, not from the date of death. Monitor probate filings in the relevant county if you suspect a will was submitted.</p>
                </div>
              </div>
            </div>

            <p className="mb-6">
              In Cook County, probate filings are available through the Circuit Court of Cook County&apos;s online case search. You can monitor whether an estate has been opened and whether a will has been admitted. If you are concerned about a possible contest, set a calendar reminder and consult an attorney immediately after admission.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
              <h3 className="font-bold text-[#2D3E50] mb-4">Timeline: When the Clock Starts</h3>
              <div className="space-y-3">
                {[
                  { event: 'Death of the testator', note: 'Will contest clock has NOT started yet' },
                  { event: 'Executor files the will with the probate court', note: 'Will contest clock has NOT started yet' },
                  { event: 'Court holds a hearing and admits the will to probate', note: 'Clock STARTS — you now have 6 months' },
                  { event: '6 months after admission', note: 'Deadline to file — after this, the right to contest is permanently extinguished' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1.5 ${i === 2 ? 'bg-red-500' : i === 3 ? 'bg-red-800' : 'bg-gray-400'}`} />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{item.event}</p>
                      <p className={`text-xs ${i >= 2 ? 'text-red-600 font-semibold' : 'text-gray-500'}`}>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 id="process" className="text-2xl font-bold mt-12 mb-4">
              The Will Contest Process: Step by Step
            </h2>

            <p className="mb-6">
              A will contest in Illinois is a civil lawsuit filed within the existing probate case. Here is what the process looks like from initial evaluation through resolution.
            </p>

            <div className="space-y-4 my-8">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-5 p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#2D3E50] text-white flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3E50] text-base mb-1">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-8 rounded-r-lg">
              <p className="font-semibold text-[#2D3E50] mb-1 text-sm">How Long Does a Will Contest Take?</p>
              <p className="text-gray-700 text-sm">In Cook County, uncontested probate typically takes 9–18 months. A will contest adds significant time. Contested cases that go to trial routinely take 2–4 years from filing to resolution. Cases that settle — as most do — can resolve faster, but rarely in less than 12–18 months. Plan for a long process and budget accordingly.</p>
            </div>

            <h2 id="grounds-checker" className="text-2xl font-bold mt-12 mb-4">
              Interactive: Do You Have Grounds?
            </h2>

            <p className="mb-6">
              Check every situation that applies to your case. This tool helps you identify which legal grounds may be available to you — it is not legal advice, but it can help you prepare for a conversation with an attorney.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#2D3E50] text-lg mb-4">Check All That Apply to Your Situation</h3>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'The testator had dementia, was heavily medicated, or was confused about basic facts near the time they signed the will', ground: 0 },
                  { label: 'A caregiver, new partner, or person with control over the testator is the primary beneficiary, and the testator was isolated from family', ground: 1 },
                  { label: 'The signature on the will looks different from known signatures, or the will was drafted by a beneficiary', ground: 2 },
                  { label: 'The will appears to have only one witness, or the witnesses signed at a different time than the testator', ground: 3 },
                  { label: 'You have seen or heard about a more recent will, or the testator said they changed their will', ground: 4 },
                  { label: 'The testator expressed a clearly false, fixed belief about a family member that directly caused a disinheritance', ground: 5 },
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <div
                      className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${checkedGrounds.has(item.ground) ? 'bg-[#2D3E50] border-[#2D3E50]' : 'border-gray-300 group-hover:border-[#4a708b]'}`}
                      onClick={() => toggleGround(item.ground)}
                    >
                      {checkedGrounds.has(item.ground) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed" onClick={() => toggleGround(item.ground)}>{item.label}</span>
                  </label>
                ))}
              </div>
              <button
                onClick={() => setShowCheckerResult(true)}
                className="w-full bg-[#2D3E50] text-white font-semibold py-3 rounded-lg hover:bg-[#4A708B] transition-colors text-sm"
              >
                Evaluate My Situation
              </button>

              {showCheckerResult && (
                <div className={`mt-5 rounded-lg p-5 ${checkedGrounds.size === 0 ? 'bg-gray-100 border border-gray-200' : checkedGrounds.size >= 2 ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'}`}>
                  {checkedGrounds.size === 0 ? (
                    <div>
                      <p className="font-bold text-gray-700 mb-2">No Potential Grounds Identified</p>
                      <p className="text-sm text-gray-600">Based on what you checked, no clear legal grounds appear to be present. That does not necessarily mean a contest is impossible — consult with an attorney to discuss the specifics of your situation, especially if the will feels deeply wrong to you.</p>
                    </div>
                  ) : checkedGrounds.size >= 2 ? (
                    <div>
                      <p className="font-bold text-green-800 mb-2">Multiple Potential Grounds — Consult an Attorney Promptly</p>
                      <p className="text-sm text-green-700 mb-3">You have identified {checkedGrounds.size} potential grounds. Cases with multiple overlapping grounds are often stronger. The most important next step is to consult an Illinois probate attorney immediately — both to evaluate your evidence and to make sure you act before the 6-month deadline.</p>
                      <p className="text-sm text-green-700">Potential grounds in your case: {Array.from(checkedGrounds).sort().map(i => grounds[i].title).join(', ')}.</p>
                    </div>
                  ) : (
                    <div>
                      <p className="font-bold text-[#2D3E50] mb-2">At Least One Potential Ground Identified</p>
                      <p className="text-sm text-gray-700 mb-2">You may have a basis to explore a will contest. The ground you identified is: <strong>{grounds[Array.from(checkedGrounds)[0]].title}</strong>.</p>
                      <p className="text-sm text-gray-700">Whether this ground is viable depends on the strength of your evidence. An attorney consultation will help you assess whether your facts are sufficient to support a successful claim before you commit to the cost of litigation.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <h2 id="outcomes" className="text-2xl font-bold mt-12 mb-4">
              What Happens If You Win — or Lose?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-green-800 text-lg mb-3">If You Win the Contest</h3>
                <div className="space-y-3 text-sm text-green-900">
                  <p>The contested will (or the specific provision challenged) is declared void by the court.</p>
                  <p>If a prior valid will exists, it is admitted to probate and controls the estate distribution.</p>
                  <p>If no prior will exists, or if the entire will is voided, the estate is distributed under Illinois intestate succession law — as if the decedent never had a will.</p>
                  <p>The executor may be removed and replaced with an administrator.</p>
                  <p>Your attorney&apos;s fees (if taken on contingency) come out of your recovery. If you paid hourly, you bear those costs regardless of outcome.</p>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <XCircle className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-bold text-red-800 text-lg mb-3">If You Lose the Contest</h3>
                <div className="space-y-3 text-sm text-red-900">
                  <p>The will is upheld and administered as written.</p>
                  <p>You bear your own attorney&apos;s fees — there is generally no fee-shifting in Illinois will contests.</p>
                  <p>If the will contained a no-contest clause and you lacked probable cause to file, you may forfeit any bequest you had under the will.</p>
                  <p>Family relationships may be permanently damaged by the litigation.</p>
                  <p>Estate administration delays caused by the contest may reduce the overall estate value available to all beneficiaries.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#2D3E50] rounded-2xl p-8 my-10 text-white">
              <Gavel className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-3">Think You Have a Will Contest Case?</h3>
              <p className="text-white/80 mb-6 max-w-2xl text-sm leading-relaxed">
                Illinois will contest litigation is complex, expensive, and time-sensitive. If you believe a will was the product of undue influence, fraud, or incapacity, the most important step is consulting an experienced Illinois probate attorney as quickly as possible — the 6-month deadline waits for no one.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book-consultation/" className="bg-white text-[#2D3E50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center text-sm">
                  Book a Free Consultation
                </Link>
                <Link href="/chicago-probate-lawyer/" className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-center text-sm">
                  Learn About Our Probate Services
                </Link>
              </div>
            </div>

            <h2 id="faq" className="text-2xl font-bold mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {expandedFaq === index ? <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4">
              Next Steps
            </h2>

            <p className="mb-6">
              If you believe a will is invalid — whether due to the testator&apos;s incapacity, undue influence, fraud, or a defect in execution — the most important thing you can do is act quickly. The 6-month deadline under Illinois law is absolute, and building a strong case takes time.
            </p>

            <p className="mb-6">
              For context on how Illinois wills should be properly executed (and where the defects you may have spotted actually arise), see our companion guide on{' '}
              <Link href="/blog/what-makes-a-will-valid-in-illinois/" className="text-[#4a708b] hover:underline font-medium">what makes a will valid in Illinois</Link>. If you are dealing with the broader probate process, our guides on{' '}
              <Link href="/blog/when-is-probate-required-in-illinois/" className="text-[#4a708b] hover:underline font-medium">when probate is required in Illinois</Link> and{' '}
              <Link href="/blog/how-much-does-probate-cost-in-illinois/" className="text-[#4a708b] hover:underline font-medium">how much probate costs in Illinois</Link> provide essential background.
            </p>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Probate Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Illinois Estate Law helps clients navigate complex probate disputes, including will contest evaluations. If you have concerns about the validity of a will, schedule a consultation to discuss your evidence, your standing, and your options — before the deadline runs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book-consultation/" className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/chicago-probate-lawyer/" className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30">
                  Our Probate Services
                </Link>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Call <a href="tel:3123730731" className="text-white underline">(312) 373-0731</a> to speak directly with our team.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
              <h3 className="font-bold text-[#2D3E50] mb-3">Related Illinois Probate &amp; Estate Planning Guides</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: '/blog/what-makes-a-will-valid-in-illinois/', label: 'What Makes a Will Valid in Illinois?' },
                  { href: '/blog/when-is-probate-required-in-illinois/', label: 'When Is Probate Required in Illinois?' },
                  { href: '/blog/how-much-does-probate-cost-in-illinois/', label: 'How Much Does Probate Cost in Illinois?' },
                  { href: '/blog/how-to-open-an-estate-bank-account-for-probate-in-illinois/', label: 'How to Open an Estate Bank Account for Probate' },
                  { href: '/blog/what-is-a-surety-bond-in-illinois-probate/', label: 'What Is a Surety Bond in Illinois Probate?' },
                  { href: '/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/', label: "So You've Been Named Executor: A Comprehensive Guide" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center gap-2 text-[#4a708b] hover:text-[#2D3E50] text-sm font-medium hover:underline transition-colors">
                    <ArrowRight className="w-4 h-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-82211c7/www.illinoisestatelaw.com/wp-content/uploads/2025/10/IMG_3202.jpg"
                    alt="Mary Liberty - Chicago Estate Planning Attorney"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#2d3e50]">Mary Liberty — Chicago Estate Planning Attorney</h3>
                  <p className="mb-4 text-gray-700">
                    Mary Liberty is a Chicago-based estate planning and probate attorney dedicated to making legal planning accessible, affordable, and stress-free. Through her modern virtual law practice, she helps families and individuals across Illinois create clear, effective plans that protect their assets and their loved ones.
                  </p>
                  <p className="mb-0 text-gray-700">
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a 100% flat-fee model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3">Ready to Protect What You Have Built?</p>
              <p className="text-white/90 mb-5">Get a comprehensive estate plan that works exactly the way you intend — from a Chicago attorney you can trust.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:3123730731" className="inline-block bg-white text-[#2d3e50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center">
                  CALL (312) 373-0731
                </a>
                <a href="/book-consultation/" className="inline-block bg-transparent text-white font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-center">
                  BOOK A CONSULTATION
                </a>
              </div>
            </div>

            <div className="my-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold mb-3">SHARE THIS POST:</p>
              <div className="flex gap-4">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-contest-a-will-in-illinois/')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity" aria-label="Share on Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-contest-a-will-in-illinois/')}&text=${encodeURIComponent('How to Contest a Will in Illinois')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-white hover:opacity-80 transition-opacity" aria-label="Share on X">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-contest-a-will-in-illinois/')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity" aria-label="Share on LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>

            <BlogNavigation
              previousPost={previous ? { title: previous.title, url: previous.url } : undefined}
              nextPost={next ? { title: next.title, url: next.url } : undefined}
            />

            <RelatedArticles
              articles={relatedPosts.map((post) => ({
                title: post.title,
                url: post.url,
                date: post.date,
                excerpt: post.excerpt,
              }))}
            />
          </article>

          <div className="border-t border-gray-300 pt-8 mb-8 mt-8">
            <BlogContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
