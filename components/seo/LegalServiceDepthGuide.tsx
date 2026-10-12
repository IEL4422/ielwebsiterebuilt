type GuideKind =
  | 'estate-planning'
  | 'probate'
  | 'guardianship'
  | 'poa-guardianship'
  | 'real-estate'
  | 'deeds';

interface LegalServiceDepthGuideProps {
  kind: GuideKind;
  locationName?: string;
  courtName?: string;
}

const guideDetails: Record<GuideKind, {
  eyebrow: string;
  title: string;
  service: string;
  goal: string;
  firstQuestion: string;
  documents: string;
  process: string;
  risks: string;
  alternatives: string;
}> = {
  'estate-planning': {
    eyebrow: 'A practical Illinois estate-planning guide',
    title: 'How to build a plan that works when your family needs it',
    service: 'estate planning',
    goal: 'create clear instructions for incapacity and death while choosing the people who will make financial, medical, and estate decisions',
    firstQuestion: 'whether a will-based plan, a trust-based plan, or a focused set of powers of attorney best matches the family, assets, and goals involved',
    documents: 'existing wills or trusts, beneficiary designations, deeds, account statements, business documents, and any prior powers of attorney',
    process: 'identify goals, inventory the relevant assets, choose decision-makers, draft coordinated documents, review every decision, sign with the required formalities, and complete any necessary trust-funding or deed work',
    risks: 'documents that conflict with account designations, an unfunded trust, an outdated fiduciary, unclear gifts, or a plan that does not address incapacity',
    alternatives: 'beneficiary designations, joint ownership, transfer-on-death arrangements, or a narrower document package may solve part of the problem, although each option has limits',
  },
  probate: {
    eyebrow: 'A practical Illinois probate guide',
    title: 'What families should know from the first filing through distribution',
    service: 'probate and estate administration',
    goal: 'identify the proper representative, collect and protect estate assets, address valid claims and taxes, and distribute the remaining property under the will or Illinois law',
    firstQuestion: 'whether a court estate must be opened at all and, if so, which Illinois county has venue and whether independent or supervised administration is appropriate',
    documents: 'the original will, death certificate, deeds, account statements, creditor correspondence, funeral information, tax records, and the names and addresses of heirs and beneficiaries',
    process: 'confirm venue, prepare the opening petition, obtain authority for the representative, give required notices, marshal and value assets, address claims and taxes, account for activity, and request or document closing',
    risks: 'missing an heir, distributing too early, using estate funds without records, overlooking a creditor deadline, selling property without adequate authority, or treating a disputed issue as routine administration',
    alternatives: 'a small-estate affidavit, beneficiary designation, joint tenancy, trust administration, or another nonprobate transfer may be available depending on title, value, and the particular asset',
  },
  guardianship: {
    eyebrow: 'A practical Illinois guardianship guide',
    title: 'How the court process protects an adult or child while preserving rights',
    service: 'guardianship',
    goal: 'obtain only the authority that is actually necessary to protect the person, manage property, or provide both forms of support under continuing court supervision',
    firstQuestion: 'whether a valid power of attorney or another less restrictive option is available, and whether the requested authority concerns the person, the estate, or both',
    documents: 'medical or school records, existing powers of attorney, information about income and assets, proposed care arrangements, family contact information, and any documents showing an immediate safety or financial concern',
    process: 'evaluate alternatives, define the requested authority, prepare and file the petition, complete service and notice, work with any guardian ad litem, present the evidence, obtain and qualify under the appointment, and calendar ongoing reports or accountings',
    risks: 'requesting broader authority than the evidence supports, incomplete service, family conflict, an unclear care plan, unmanaged assets, or failing to understand the guardian’s duties after appointment',
    alternatives: 'a health-care or property power of attorney, supported decision-making, representative payee arrangement, educational authorization, trust, or targeted court order may sometimes avoid or narrow a guardianship',
  },
  'poa-guardianship': {
    eyebrow: 'Choosing the right form of legal authority',
    title: 'Power of attorney and guardianship solve different problems',
    service: 'power-of-attorney and guardianship planning',
    goal: 'match the needed decision-making authority to the person’s present capacity, voluntary choices, safety needs, and financial circumstances',
    firstQuestion: 'whether the person can understand and voluntarily sign a power of attorney now, or whether a court must determine capacity and appoint a guardian',
    documents: 'existing powers of attorney, medical information, financial records, benefit statements, deeds, family contact information, and any evidence that an institution has rejected or questioned existing authority',
    process: 'clarify the decisions that must be made, evaluate present authority and capacity, identify the least restrictive workable option, prepare the appropriate documents or court petition, and explain the decision-maker’s continuing duties',
    risks: 'asking someone to sign a document they do not understand, assuming a diagnosis automatically eliminates capacity, using authority beyond the document, or opening a guardianship without considering a workable alternative',
    alternatives: 'a limited power of attorney, supported decision-making, representative payee designation, trust, health-care surrogate process, or narrowly tailored guardianship may fit better than plenary authority',
  },
  'real-estate': {
    eyebrow: 'A practical Illinois real-estate closing guide',
    title: 'Legal review from contract formation through a completed closing',
    service: 'residential real-estate representation',
    goal: 'turn the parties’ agreement into a completed transfer while protecting the client on contract, title, inspection, financing, possession, and closing-document issues',
    firstQuestion: 'whether the client is buying or selling, when the contract was accepted, what attorney-review or inspection deadlines apply, and whether the title or transaction is nonstandard',
    documents: 'the signed contract, disclosures, inspection report, loan information, prior title policy or deed, association documents, survey, tax information, and communications about credits or repairs',
    process: 'review and modify the contract, track contingency deadlines, address inspection and title issues, coordinate lender and title requirements, confirm figures and documents, complete the closing, and preserve the final record',
    risks: 'missing an attorney-review deadline, relying on an oral repair promise, overlooking title defects, misunderstanding tax prorations, failing to confirm possession terms, or reaching closing without required authority',
    alternatives: 'a contract extension, repair credit, escrow, title cure, deed correction, entity or trust authorization, or negotiated termination may resolve a problem depending on the contract and timing',
  },
  deeds: {
    eyebrow: 'A practical Illinois deed and title guide',
    title: 'Choose the transfer document by legal effect—not by name alone',
    service: 'deed preparation and property-transfer planning',
    goal: 'place Illinois real estate in the intended ownership while accounting for probate, control, creditor, mortgage, tax, and future-sale consequences',
    firstQuestion: 'what the owner wants to happen now and at death, who currently holds title, whether a mortgage or trust is involved, and whether the transfer is a gift, sale, correction, or estate-planning step',
    documents: 'the current recorded deed, property index number, legal description, tax bill, mortgage information, trust or entity documents, identification, and the complete names and marital status of all parties',
    process: 'verify present title, define the desired legal result, select the appropriate instrument, prepare the deed and related declarations, obtain valid signatures and notarization, record in the correct county, and retain proof of recording',
    risks: 'using the wrong deed, omitting a legal description, creating unintended co-ownership, violating a mortgage term, losing control of the property, generating a tax or benefit issue, or failing to record',
    alternatives: 'a transfer-on-death instrument, trust transfer, life estate, joint tenancy, sale deed, or no present transfer may be preferable depending on the owner’s priorities',
  },
};

export function LegalServiceDepthGuide({
  kind,
  locationName = 'Illinois',
  courtName,
}: LegalServiceDepthGuideProps) {
  const detail = guideDetails[kind];
  const forum = courtName ? ` Matters requiring court involvement are handled through ${courtName}.` : '';

  const sections = [
    {
      heading: `Start with the legal result—not a document name`,
      body: [
        `People often arrive asking for a particular form when the more important question is what they need the law to accomplish. The purpose of ${detail.service} is to ${detail.goal}. A useful first meeting therefore begins with the people, property, deadlines, and decisions involved. Only after those facts are clear should the lawyer recommend a document, filing, or package. That approach reduces the chance of paying for a solution that does not address the actual problem.`,
        `For a ${locationName} family, the central issue is usually ${detail.firstQuestion}. The answer can change the scope, timeline, and cost of the work. It can also reveal that more than one legal tool is needed. A focused review at the beginning creates a written roadmap and helps the client distinguish immediate tasks from issues that can be handled later.`,
      ],
    },
    {
      heading: 'Information to gather before the first legal review',
      body: [
        `Good advice depends on accurate information. Helpful materials commonly include ${detail.documents}. A client does not need a perfect file before asking for help, but sharing what is already available lets the attorney identify gaps early. Names should be written exactly as they appear on legal and financial records, and clients should flag any urgent date, threatened action, pending sale, medical concern, or family disagreement.`,
        `An asset list should show how each item is owned, not merely what it is worth. A house titled jointly, an account with a payable-on-death beneficiary, and property held in a trust can follow different legal paths. The same is true of authority: being a spouse, child, beneficiary, or nominated executor does not automatically grant present power to sign, withdraw money, sell property, or make health-care decisions.`,
      ],
    },
    {
      heading: `How the ${locationName} process is organized`,
      body: [
        `A well-managed matter follows a sequence: ${detail.process}. Some steps overlap, but each has a different purpose. The attorney should explain what must happen, who is responsible, what information is still needed, and what event will move the matter to the next stage. Clients should receive copies of important drafts, filed documents, recorded instruments, and final materials for their own records.`,
        `Illinois law supplies the statewide framework, while document requirements, institutional practices, and local court procedures can affect execution. ${forum} A virtual legal process can handle many conferences, reviews, signatures, and status updates efficiently, but a court, lender, recorder, witness, notary, or other institution may still impose a specific form or appearance requirement. Those requirements should be confirmed for the actual matter.`,
      ],
    },
    {
      heading: 'The client and attorney have different responsibilities',
      body: [
        `The attorney prepares legal work, advises on choices, identifies foreseeable risks, and communicates deadlines within the agreed scope. The client supplies complete facts, reviews drafts, makes the personal decisions, signs accurately, preserves originals, and promptly reports changes. When another professional is involved—such as an accountant, financial adviser, physician, lender, title company, appraiser, or insurance agent—the lawyer can coordinate legal issues without replacing that professional’s separate judgment.`,
        `Clients should ask who will be the day-to-day contact, how updates will be delivered, what response time to expect, and which decisions require express approval. A secure portal or organized email record is especially useful when several relatives or professionals are participating. Clear communication is not merely a convenience; it prevents inconsistent instructions and creates a reliable history of the decisions made.`,
      ],
    },
    {
      heading: 'Timing depends on facts and outside participants',
      body: [
        `A quoted turnaround is usually an estimate, not a guarantee. Timing can depend on how quickly the client provides records and decisions, whether signatures are readily available, and whether a court, recorder, financial institution, medical provider, lender, opposing party, or other third party must act. An emergency should be identified immediately because ordinary scheduling may not protect a person, asset, deadline, or transaction.`,
        `Clients can keep the matter moving by answering consolidated questions, uploading legible documents, naming one primary family contact, and reviewing drafts promptly. The attorney should identify hard deadlines separately from target dates. If circumstances change—such as a death, hospitalization, objection, new contract, discovered asset, title problem, or loss of capacity—the strategy may need to change as well.`,
      ],
    },
    {
      heading: 'Flat fees work best with a clearly written scope',
      body: [
        `A flat fee should state the legal service included, the assumptions on which the price is based, and the work that would require a separate agreement. Clients should be able to tell whether filing, publication, recording, routine conferences, signing support, or third-party charges are included. A concrete price is useful only when the client can compare the scope attached to it.`,
        `A matter can also change after it begins. An objection, contested hearing, deposition, title defect, emergency request, additional property, tax issue, or work outside the original package may call for a separately disclosed flat fee. That does not mean every complication is charged automatically. The triggering event should actually occur, the new work should be explained in writing, and overlapping work should not be billed twice when it is already included in a broader accepted phase.`,
      ],
    },
    {
      heading: 'Common problems are easier to address before signing or filing',
      body: [
        `The most avoidable problems include ${detail.risks}. Forms alone rarely reveal these conflicts because the difficulty comes from how a document or order interacts with ownership, family circumstances, deadlines, and other legal instruments. A careful review tests the proposed solution against likely real-world events rather than assuming the form will operate in isolation.`,
        `Clients should disclose estrangement, blended-family concerns, disability, creditor issues, pending divorce, unusual gifts, prior marriages, jointly owned property, business interests, possible objections, and any doubt about capacity or undue influence. These facts do not necessarily make the matter impossible or contested. They allow the lawyer to recommend stronger documentation, appropriate witnesses, a narrower strategy, or additional advice before a preventable dispute develops.`,
      ],
    },
    {
      heading: 'Consider less restrictive and less costly alternatives',
      body: [
        `The largest legal process is not always the best solution. Depending on the facts, ${detail.alternatives}. The advantages and limits should be compared in plain language. An option that is inexpensive today may create probate, tax, control, eligibility, or title problems later, while a comprehensive process may be unnecessary when a narrow correction will accomplish the goal.`,
        `A useful comparison addresses who controls the property or decision, when authority begins and ends, whether court supervision applies, how the arrangement can be changed, what happens at incapacity or death, and how third parties will verify authority. The best choice is the one that solves the client’s actual problem with an appropriate level of cost, oversight, flexibility, and protection.`,
      ],
    },
    {
      heading: 'Plan for what happens after the immediate legal work',
      body: [
        `Completion is not always the end of the client’s responsibilities. Documents must be stored and sometimes delivered; accounts and property may need retitling; court representatives may have notice, reporting, tax, accounting, or recordkeeping duties; and a real-estate client should retain the final title and closing file. The attorney should identify these follow-up tasks and state whether they are included in the current scope.`,
        `Life changes can also make earlier work obsolete. Marriage, divorce, birth, death, disability, a move, a major change in assets, a new business, a fiduciary’s inability to serve, or a change in Illinois law can justify review. Keeping a current list of advisers and important documents makes that review faster and helps trusted family members find the right information during a crisis.`,
      ],
    },
    {
      heading: 'Questions worth asking before hiring counsel',
      body: [
        `Ask what service the lawyer recommends and why, what facts could change that recommendation, what is included in the quoted fee, which costs are paid to third parties, and what result marks completion. Also ask how urgent issues are handled, whether the process can be completed virtually, who prepares and reviews the work, and how the firm will communicate if the matter becomes more complicated.`,
        `The consultation should leave the client with a practical next step even if no engagement occurs. That may be gathering a missing record, confirming title, speaking with a physician or accountant, locating an original document, avoiding a premature distribution or transfer, or scheduling a focused follow-up. General website information is educational and cannot replace advice based on the complete facts, so individualized review is the safest way to move forward.`,
      ],
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-16 lg:py-20" aria-labelledby={`${kind}-depth-guide-title`}>
      <div className="container mx-auto max-w-[1140px] px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#547298]">{detail.eyebrow}</p>
          <h2 id={`${kind}-depth-guide-title`} className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#33414E] md:text-4xl">
            {detail.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            This guide explains the questions Illinois clients should understand before choosing a service. It is written for practical decision-making and does not assume that every family needs the same package or court process.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {sections.map((section) => (
            <article key={section.heading} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">{section.heading}</h3>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-600">
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
