export interface StaticGuide {
  id: string;
  title: string;
  description: string;
  category: string;
  slug: string;
  content: string;
}

export const staticGuides: StaticGuide[] = [
  {
    id: 'static-residential-real-estate',
    slug: 'illinois-residential-real-estate-guide',
    title: 'Illinois Residential Real Estate: A Complete Guide',
    description: 'Everything Illinois buyers and sellers need to know about the residential real estate transaction process, from contract to closing.',
    category: 'Real Estate',
    content: `
<h2>Overview of Illinois Residential Real Estate Transactions</h2>
<p>Buying or selling a home in Illinois involves a series of legally significant steps. Unlike some states where real estate closings are handled without attorneys, Illinois custom strongly favors attorney representation for both buyers and sellers. Understanding each stage of the transaction helps you protect your interests and avoid costly surprises.</p>

<h2>Step 1: The Real Estate Contract</h2>
<p>Once a buyer and seller agree on price, they sign a real estate contract — typically a Residential Real Property Purchase and Sale Agreement. This contract governs the entire transaction, including price, earnest money, contingencies, and closing date.</p>
<p>Key contract terms to review carefully:</p>
<ul>
  <li><strong>Purchase price and earnest money:</strong> Earnest money (typically 1–2% of the purchase price) is held in escrow and applied to the purchase price at closing.</li>
  <li><strong>Inspection contingency:</strong> Gives the buyer the right to inspect the property and negotiate repairs or credits.</li>
  <li><strong>Financing contingency:</strong> Protects the buyer if they are unable to obtain a mortgage.</li>
  <li><strong>Attorney review period:</strong> In Illinois, both parties have a right to have an attorney review and modify the contract.</li>
</ul>

<h2>Step 2: The Attorney Review Period</h2>
<p>Illinois is one of the few states with a formal attorney review period built into the standard real estate contract. After all parties sign, both the buyer and seller have 5 business days to have an attorney review the contract.</p>
<p>During attorney review, your attorney can:</p>
<ul>
  <li>Modify or "rider" the contract to add or remove provisions</li>
  <li>Make the contract contingent on additional matters (e.g., sale of the buyer's current home)</li>
  <li>Terminate the contract without penalty</li>
</ul>
<p>Once the attorney review period expires without objection, the contract becomes binding. Missing this window means accepting the contract as written.</p>

<h2>Step 3: Home Inspection</h2>
<p>After attorney review, the buyer typically orders a home inspection. A licensed home inspector examines the property's structure, systems, and components. Common issues found during inspection include roofing concerns, HVAC systems, plumbing, electrical wiring, and foundation matters.</p>
<p>After the inspection, the buyer can:</p>
<ul>
  <li>Accept the property as-is</li>
  <li>Request repairs from the seller</li>
  <li>Negotiate a price reduction or closing credit</li>
  <li>Terminate the contract if inspection issues are material</li>
</ul>

<h2>Step 4: Title Search and Title Insurance</h2>
<p>A title company or attorney conducts a title search — a review of public records to confirm the seller has clear ownership and identify any liens, judgments, easements, or other encumbrances on the property.</p>
<p>Common title issues include:</p>
<ul>
  <li>Unpaid property taxes or special assessments</li>
  <li>Mortgage liens from prior owners</li>
  <li>Mechanic's liens from contractors</li>
  <li>Easements and restrictive covenants</li>
  <li>Errors in prior deeds</li>
</ul>
<p>Title insurance protects against undiscovered title defects. Buyers typically purchase an owner's policy at closing; lenders require a separate lender's policy.</p>

<h2>Step 5: Mortgage and Financing</h2>
<p>If the buyer is financing the purchase, their lender will order an appraisal to confirm the property's value supports the loan amount. The lender will also conduct underwriting — reviewing the buyer's income, assets, credit, and the property itself.</p>
<p>Common loan types in Illinois:</p>
<ul>
  <li><strong>Conventional loans:</strong> Not government-backed; typically require 5–20% down payment</li>
  <li><strong>FHA loans:</strong> Government-insured; allow as little as 3.5% down</li>
  <li><strong>VA loans:</strong> Available to eligible veterans; no down payment required</li>
  <li><strong>USDA loans:</strong> Available in eligible rural areas</li>
</ul>

<h2>Step 6: The Real Estate Closing</h2>
<p>At closing, ownership of the property transfers from seller to buyer. Both parties (or their attorneys) attend, along with a title company representative or closing agent. The buyer signs loan documents and both parties sign transfer documents.</p>
<p>Documents signed at closing typically include:</p>
<ul>
  <li>Deed (executed by the seller, transferring title to the buyer)</li>
  <li>Mortgage note and deed of trust (if buyer is financing)</li>
  <li>Closing disclosure (itemized list of all costs)</li>
  <li>Illinois Real Property Transfer Declaration (PTAX-203)</li>
</ul>

<h2>Transfer Taxes in Illinois</h2>
<p>Illinois imposes a real estate transfer tax at both the state and local levels. The state rate is $0.50 per $500 of purchase price (paid by the seller). Many municipalities — including Chicago — impose additional transfer taxes. Chicago's transfer tax rates vary depending on the purchase price tier.</p>
<p>Certain transfers are exempt from Illinois transfer tax, including transfers between spouses, transfers to a revocable trust, and transfers pursuant to a divorce decree.</p>

<h2>Holding Title in Illinois</h2>
<p>How you hold title affects your rights in the property, what happens on death, and estate planning implications. Common ways to hold title in Illinois:</p>
<ul>
  <li><strong>Sole ownership:</strong> One person owns the property outright</li>
  <li><strong>Joint tenancy with right of survivorship:</strong> Two or more owners; on death of one, their share passes automatically to the surviving owner(s)</li>
  <li><strong>Tenancy in common:</strong> Two or more owners each hold a distinct share; on death, a share passes through the owner's estate</li>
  <li><strong>Tenancy by the entirety:</strong> Illinois does not recognize this form</li>
  <li><strong>Land trust:</strong> A common Illinois vehicle where a trustee holds legal title for a beneficiary</li>
  <li><strong>Revocable living trust:</strong> Holding title in a trust avoids probate and allows for seamless transfer on death</li>
</ul>

<h2>Why Attorney Representation Matters</h2>
<p>Illinois real estate transactions involve complex legal documents with lasting financial and legal consequences. An experienced real estate attorney reviews every contract and document, negotiates on your behalf, resolves title issues, and ensures the transaction closes correctly. At Illinois Estate Law, we represent buyers and sellers in residential real estate closings throughout Illinois for a flat fee of $2,000.</p>
    `.trim(),
  },

  {
    id: 'static-probate',
    slug: 'illinois-probate-guide',
    title: 'Illinois Probate: A Complete Guide for Executors and Families',
    description: 'A practical guide to the Illinois probate process — when it is required, how it works, how long it takes, and how to navigate it as an executor or family member.',
    category: 'Probate',
    content: `
<h2>What Is Probate?</h2>
<p>Probate is the legal process through which a deceased person's estate is administered under court supervision. During probate, the court validates the decedent's will (if one exists), appoints a personal representative (called an executor or administrator), authorizes the payment of debts and taxes, and oversees the distribution of remaining assets to heirs or beneficiaries.</p>
<p>In Illinois, probate is governed by the Probate Act of 1975 (755 ILCS 5). Cases are filed in the Circuit Court of the county where the decedent was domiciled at the time of death.</p>

<h2>When Is Probate Required in Illinois?</h2>
<p>Not every estate requires probate. Illinois probate is generally required when:</p>
<ul>
  <li>The decedent owned real estate solely in their name (not in joint tenancy or a trust)</li>
  <li>The decedent had financial accounts with no beneficiary designation or payable-on-death designation</li>
  <li>The total value of probate assets exceeds $100,000</li>
</ul>
<p>Assets that typically pass outside of probate include: jointly held property with right of survivorship, accounts with payable-on-death or transfer-on-death designations, life insurance and retirement accounts with named beneficiaries, and assets held in a revocable living trust.</p>

<h2>Supervised vs. Independent Administration</h2>
<p>Illinois offers two types of probate administration:</p>
<ul>
  <li><strong>Independent administration:</strong> The personal representative administers the estate with minimal court involvement. Most routine estates qualify. The representative files an inventory and accounting but does not need court approval for each action.</li>
  <li><strong>Supervised administration:</strong> The court supervises each significant step, including the sale of assets and distributions. Required when heirs cannot agree or when the estate is complex.</li>
</ul>

<h2>Small Estate Affidavit</h2>
<p>If the gross value of the estate does not exceed $100,000 and certain conditions are met, Illinois allows the use of a small estate affidavit to transfer assets without probate. The affidavit can be used to collect bank accounts, transfer personal property, and access other assets. It cannot be used to transfer real estate.</p>

<h2>The Illinois Probate Process: Step by Step</h2>

<h3>1. File a Petition</h3>
<p>The process begins by filing a Petition for Probate of Will and Appointment of Executor (if there is a will) or a Petition for Letters of Administration (if there is no will) in the appropriate Circuit Court. The petition includes the decedent's name, date of death, a list of heirs, and the estimated value of the estate.</p>

<h3>2. Publication of Notice</h3>
<p>After the petition is filed, notice of the probate proceeding must be published in a newspaper of general circulation once a week for three consecutive weeks. This gives creditors and interested parties an opportunity to make claims against the estate.</p>

<h3>3. Inventory of Assets</h3>
<p>Within 60 days of appointment, the personal representative must file an inventory of all probate assets with the court, including real estate, bank accounts, investments, personal property, and any other assets owned solely by the decedent.</p>

<h3>4. Payment of Debts and Taxes</h3>
<p>The personal representative is responsible for identifying and paying valid creditor claims, final income taxes, and any Illinois estate tax owed. Creditors have 6 months from the date of the decedent's death to file claims against the estate.</p>

<h3>5. Filing the Final Accounting</h3>
<p>Before closing the estate, the personal representative files a final accounting with the court showing all income received, expenses paid, and distributions made. Beneficiaries may waive the formal accounting requirement.</p>

<h3>6. Distribution to Beneficiaries</h3>
<p>After debts and taxes are paid and the accounting is approved, the remaining assets are distributed to beneficiaries per the will or, if there is no will, per Illinois intestacy law.</p>

<h2>How Long Does Probate Take in Illinois?</h2>
<p>Most Illinois probate cases take 9 to 18 months to complete. The primary driver of timeline is the 6-month creditor claim period, which cannot be shortened. Complex estates, contested wills, or disputes among beneficiaries can extend the process significantly.</p>

<h2>Illinois Estate Tax</h2>
<p>Illinois imposes an estate tax on estates exceeding $4 million (as of 2024). The tax rate ranges from 0.8% to 16% on the value above the exemption. Illinois does not conform to the federal estate tax exemption (which is approximately $13.6 million for 2024), so many estates that owe no federal tax may still owe Illinois estate tax.</p>

<h2>The Role of the Personal Representative</h2>
<p>As a personal representative (executor or administrator), you have fiduciary duties to the estate and its beneficiaries. Key responsibilities include:</p>
<ul>
  <li>Safeguarding and managing estate assets</li>
  <li>Notifying creditors and resolving valid claims</li>
  <li>Filing required tax returns</li>
  <li>Maintaining accurate records of all transactions</li>
  <li>Distributing assets to beneficiaries as directed</li>
  <li>Keeping beneficiaries reasonably informed</li>
</ul>
<p>Breaching fiduciary duties can result in personal liability. Working with an experienced probate attorney helps ensure you fulfill your obligations correctly.</p>

<h2>Avoiding Probate in Illinois</h2>
<p>Proper estate planning can minimize or eliminate the need for probate:</p>
<ul>
  <li><strong>Revocable living trust:</strong> Assets held in trust pass directly to beneficiaries without probate</li>
  <li><strong>Joint tenancy:</strong> Surviving owners take the property automatically</li>
  <li><strong>Beneficiary designations:</strong> Life insurance, IRAs, and 401(k)s with named beneficiaries pass outside probate</li>
  <li><strong>Transfer-on-death deeds:</strong> Illinois allows TOD instruments for real estate, transferring property directly to named beneficiaries</li>
  <li><strong>Payable-on-death accounts:</strong> Bank accounts with POD designations pass directly to named individuals</li>
</ul>
    `.trim(),
  },

  {
    id: 'static-estate-planning',
    slug: 'illinois-estate-planning-guide',
    title: 'Illinois Estate Planning: A Complete Guide',
    description: 'A comprehensive guide to estate planning in Illinois — what it covers, why it matters, and the documents every Illinois resident should have.',
    category: 'Estate Planning',
    content: `
<h2>What Is Estate Planning?</h2>
<p>Estate planning is the process of arranging for the management and distribution of your assets during your lifetime and after your death. A well-designed estate plan ensures that your wishes are honored, your loved ones are provided for, and your estate is administered efficiently — with minimal delay, expense, and conflict.</p>
<p>Estate planning is not just for the wealthy. Anyone who owns property, has children, or cares about what happens to their assets and medical decisions should have a plan in place.</p>

<h2>Why Estate Planning Matters</h2>
<p>Without an estate plan, Illinois law decides what happens to your assets and who makes decisions for you if you become incapacitated. The consequences of dying without a plan (intestate) include:</p>
<ul>
  <li>Your assets are distributed according to Illinois intestacy law, which may not reflect your wishes</li>
  <li>A court appoints a guardian for minor children — possibly someone you would not have chosen</li>
  <li>Your estate may be subject to a lengthy and expensive probate process</li>
  <li>No one has legal authority to manage your finances or make medical decisions if you become incapacitated</li>
  <li>Family members may face conflict and uncertainty during an already difficult time</li>
</ul>

<h2>Core Estate Planning Documents</h2>

<h3>1. Last Will and Testament</h3>
<p>A will is the foundational estate planning document. It directs how your probate assets are distributed after death, names an executor to administer your estate, and — critically for parents — nominates a guardian for minor children.</p>
<p>Key considerations for your Illinois will:</p>
<ul>
  <li>Must be signed by the testator and witnessed by two individuals who are not beneficiaries</li>
  <li>Does not avoid probate — assets subject to the will go through the probate process</li>
  <li>Can be revoked or amended at any time while you have capacity</li>
  <li>Takes effect only on death</li>
</ul>

<h3>2. Revocable Living Trust</h3>
<p>A revocable living trust is a legal arrangement in which you (as grantor) transfer assets to a trust during your lifetime. You typically serve as your own trustee and retain full control of the assets. On death, assets in the trust pass directly to named beneficiaries — without probate.</p>
<p>Advantages of a revocable living trust:</p>
<ul>
  <li><strong>Avoids probate:</strong> Trust assets pass immediately to beneficiaries without court involvement</li>
  <li><strong>Privacy:</strong> Unlike a will, a trust is not a public record</li>
  <li><strong>Incapacity planning:</strong> A successor trustee can manage trust assets if you become incapacitated</li>
  <li><strong>Multi-state property:</strong> Avoids ancillary probate in other states where you own real estate</li>
  <li><strong>Control:</strong> You can specify when and how beneficiaries receive their inheritance</li>
</ul>
<p>A revocable trust does not provide asset protection from creditors or reduce estate taxes during your lifetime — the assets are still considered yours for those purposes.</p>

<h3>3. Durable Power of Attorney for Property</h3>
<p>A durable power of attorney for property designates an agent (attorney-in-fact) to manage your financial affairs if you become incapacitated. "Durable" means the document remains effective even if you lose capacity — distinguishing it from a standard POA that terminates on incapacity.</p>
<p>Your agent can be authorized to manage bank accounts, pay bills, file taxes, manage investments, buy and sell real estate, and handle other financial matters. Illinois follows the Illinois Power of Attorney Act (755 ILCS 45).</p>
<p>Without a durable POA, your family would need to petition the court for guardianship of your estate — a costly and time-consuming process.</p>

<h3>4. Healthcare Power of Attorney</h3>
<p>A healthcare power of attorney (also called a healthcare proxy) designates an agent to make medical decisions on your behalf if you cannot communicate your own wishes. Your agent can authorize or refuse treatment, consent to surgery, and communicate with your medical team.</p>
<p>Choosing the right healthcare agent is as important as the document itself. Your agent should understand your values and wishes and be willing to advocate on your behalf during a medical crisis.</p>

<h3>5. Living Will / Advance Directive</h3>
<p>A living will (formally called an Illinois Declaration under the Illinois Living Will Act) expresses your wishes regarding life-sustaining treatment in the event of a terminal condition. It directs healthcare providers to withhold or withdraw treatment when there is no reasonable prospect of recovery.</p>
<p>Illinois also recognizes the Declaration for Mental Health Treatment, which documents preferences for mental health care.</p>

<h2>Beneficiary Designations</h2>
<p>Many assets pass outside of your will entirely — through beneficiary designations. These include:</p>
<ul>
  <li>Life insurance policies</li>
  <li>IRAs and 401(k)s</li>
  <li>Annuities</li>
  <li>Payable-on-death bank accounts</li>
  <li>Transfer-on-death brokerage accounts</li>
</ul>
<p>Beneficiary designations override your will. Keeping them updated — especially after marriage, divorce, or the birth of a child — is a critical part of estate planning.</p>

<h2>Estate Planning for Common Life Situations</h2>

<h3>Married Couples</h3>
<p>Married couples often use a combination of joint tenancy (for the family home) and pour-over wills with a joint or separate revocable trusts. A well-coordinated plan ensures that assets flow seamlessly between spouses and then to children or other beneficiaries.</p>

<h3>Parents of Minor Children</h3>
<p>Naming a guardian in your will is the single most important thing parents of minor children can do. Without a guardian nomination, a court decides who raises your children. A trust can also hold assets for children until they reach an age of maturity you specify.</p>

<h3>Blended Families</h3>
<p>Blended families require careful planning to ensure that assets intended for biological children are not inadvertently directed to a surviving spouse's new family. Trusts with specific distribution provisions are often the most effective tool.</p>

<h3>Single Individuals</h3>
<p>Without an estate plan, a single person's estate passes to relatives under Illinois intestacy law — which may not align with their wishes. Estate planning ensures assets go to the people and causes you care about.</p>

<h2>Illinois Estate Tax Planning</h2>
<p>Illinois imposes an estate tax on estates exceeding $4 million. For larger estates, planning strategies may include:</p>
<ul>
  <li>Annual gifting to reduce the taxable estate</li>
  <li>Irrevocable life insurance trusts (ILITs)</li>
  <li>Charitable giving strategies</li>
  <li>Credit shelter trusts (also called bypass trusts)</li>
</ul>

<h2>When to Update Your Estate Plan</h2>
<p>Your estate plan should be reviewed and potentially updated after:</p>
<ul>
  <li>Marriage or divorce</li>
  <li>Birth or adoption of a child or grandchild</li>
  <li>Death of a named beneficiary, executor, or trustee</li>
  <li>Significant change in assets</li>
  <li>Relocation to a different state</li>
  <li>Changes in tax law</li>
  <li>Every 3–5 years as a routine review</li>
</ul>
    `.trim(),
  },

  {
    id: 'static-trademark',
    slug: 'trademark-registration-guide',
    title: 'Trademark Registration: A Complete Guide for Business Owners',
    description: 'Learn how trademark registration works, why it matters for your business, and the steps to register your brand with the USPTO.',
    category: 'Business Law',
    content: `
<h2>What Is a Trademark?</h2>
<p>A trademark is any word, phrase, symbol, design, or combination of these elements that identifies and distinguishes the source of goods or services. Your business name, logo, slogan, and even distinctive product packaging can function as trademarks.</p>
<p>Trademark rights serve two purposes: they protect consumers by helping them identify the source of goods and services, and they protect businesses by preventing competitors from using confusingly similar marks.</p>

<h2>Common Law vs. Registered Trademark Rights</h2>
<p>In the United States, trademark rights arise from use — not registration. You acquire common law trademark rights simply by using a mark in commerce. However, common law rights are limited to the geographic area where you actually use the mark.</p>
<p>Federal registration with the U.S. Patent and Trademark Office (USPTO) provides significantly stronger protection:</p>
<ul>
  <li><strong>Nationwide priority:</strong> A federal registration gives you priority over later users of a confusingly similar mark throughout the entire United States</li>
  <li><strong>Legal presumption of ownership:</strong> Registration creates a legal presumption that you own the mark and have the exclusive right to use it</li>
  <li><strong>Public notice:</strong> Registration puts the world on constructive notice of your claim</li>
  <li><strong>Incontestability:</strong> After 5 years of continuous use, a registration can become "incontestable," making it much harder to challenge</li>
  <li><strong>Border protection:</strong> You can record your trademark with U.S. Customs to block infringing imported goods</li>
  <li><strong>Basis for foreign registration:</strong> U.S. registration can be used as the basis for registering in other countries</li>
  <li><strong>® symbol:</strong> Only federally registered trademark owners may use the ® symbol</li>
</ul>

<h2>What Can Be Registered as a Trademark?</h2>
<p>Not every mark qualifies for trademark registration. Marks are evaluated on a spectrum of distinctiveness:</p>
<ul>
  <li><strong>Fanciful marks:</strong> Invented words with no prior meaning (e.g., Xerox, Kodak). Strongest protection.</li>
  <li><strong>Arbitrary marks:</strong> Common words used in an unrelated context (e.g., Apple for computers). Strong protection.</li>
  <li><strong>Suggestive marks:</strong> Suggest a quality of the goods/services without describing them directly. Protectable.</li>
  <li><strong>Descriptive marks:</strong> Directly describe the goods or services. Generally not protectable unless they have acquired distinctiveness through extensive use.</li>
  <li><strong>Generic terms:</strong> The common name for the goods or services. Never protectable.</li>
</ul>
<p>Marks may also be refused if they are: likely to be confused with an existing registered mark, primarily merely a surname, geographically descriptive, or scandalous.</p>

<h2>The Trademark Classes</h2>
<p>The USPTO uses the International Classification of Goods and Services (the "Nice Classification") to organize trademarks into 45 classes — 34 covering goods and 11 covering services. You register your mark for specific classes relevant to your business.</p>
<p>Each class requires a separate filing fee, so it is important to identify all relevant classes without over-filing.</p>

<h2>Conducting a Trademark Search</h2>
<p>Before filing, a thorough trademark search is essential. The USPTO's free TESS (Trademark Electronic Search System) database allows you to search registered marks and pending applications. However, a comprehensive search should also include:</p>
<ul>
  <li>State trademark registrations</li>
  <li>Common law uses (websites, social media, business directories)</li>
  <li>Similar-sounding marks (phonetic equivalents)</li>
  <li>Visual similarities in logos</li>
</ul>
<p>Filing without searching risks receiving an office action rejection, wasting filing fees, and — worse — infringing an existing mark.</p>

<h2>The USPTO Application Process</h2>

<h3>Step 1: Choose Your Filing Basis</h3>
<p>Federal trademark applications must be filed on one of two bases:</p>
<ul>
  <li><strong>Use in commerce (1(a)):</strong> The mark is already being used in interstate commerce. You must submit a specimen showing the mark in use.</li>
  <li><strong>Intent to use (1(b)):</strong> You have a bona fide intention to use the mark in commerce. The mark need not be in use at the time of filing, but you must eventually show use before the registration issues.</li>
</ul>

<h3>Step 2: File the Application</h3>
<p>Applications are filed through the USPTO's TEAS (Trademark Electronic Application System). The application includes:</p>
<ul>
  <li>The applicant's name and address</li>
  <li>A clear representation of the mark</li>
  <li>The goods or services covered, listed by international class</li>
  <li>Filing basis (use in commerce or intent to use)</li>
  <li>A specimen of use (for use-based applications)</li>
  <li>Filing fee (currently $250–$350 per class, depending on form type)</li>
</ul>

<h3>Step 3: Examination by USPTO</h3>
<p>A USPTO examining attorney reviews the application, typically within 8–12 months of filing. The examiner may:</p>
<ul>
  <li>Approve the mark for publication</li>
  <li>Issue an office action raising objections (e.g., likelihood of confusion, descriptiveness)</li>
</ul>
<p>If an office action is issued, the applicant has 3 months to respond (extendable to 6 months for a fee).</p>

<h3>Step 4: Publication for Opposition</h3>
<p>Approved marks are published in the USPTO's Official Gazette for 30 days. During this period, third parties who believe they would be harmed by the registration can file an opposition proceeding.</p>

<h3>Step 5: Registration or Notice of Allowance</h3>
<p>For use-based applications, if no opposition is filed (or any opposition is resolved in the applicant's favor), the USPTO issues a Certificate of Registration.</p>
<p>For intent-to-use applications, the USPTO issues a Notice of Allowance. The applicant then has 6 months (extendable up to 36 months total) to begin using the mark and submit a Statement of Use.</p>

<h2>Maintaining Your Trademark Registration</h2>
<p>A trademark registration does not last forever automatically. Maintenance filings are required:</p>
<ul>
  <li><strong>Between years 5 and 6:</strong> File a Section 8 Declaration of Continued Use</li>
  <li><strong>Between years 9 and 10 (and every 10 years thereafter):</strong> File a combined Section 8 and Section 9 Renewal</li>
</ul>
<p>Missing these deadlines results in cancellation of the registration.</p>

<h2>Enforcing Your Trademark</h2>
<p>Registration alone does not enforce your rights — you must actively police your trademark. This includes monitoring new applications at the USPTO, watching for infringing uses in the marketplace, and sending cease and desist letters when infringement is discovered.</p>
<p>Failure to police a trademark can result in "abandonment" or dilution of your rights over time.</p>

<h2>State Trademark Registration</h2>
<p>Illinois also offers state trademark registration through the Secretary of State's office. State registration is less expensive than federal registration but provides protection only within Illinois. It is generally appropriate for businesses operating exclusively within the state. Federal registration is recommended for any business with interstate commerce or growth aspirations.</p>
    `.trim(),
  },
];

export function getStaticGuide(slug: string): StaticGuide | undefined {
  return staticGuides.find(g => g.slug === slug);
}
