/*
  # Add "What Is Probate in Illinois?" Learning Center Guide

  1. New Data
    - Inserts a comprehensive guide into the `guides` table
    - Slug: `what-is-probate-illinois`
    - Category: Probate
    - Covers: definition of probate, why it exists, who is involved,
      what assets require probate, common misconceptions, timeline overview,
      and frequently asked questions

  2. Important Notes
    - This guide is distinct from the existing "Illinois Probate Process Explained"
      guide, which focuses on step-by-step procedures
    - This guide serves as a foundational introduction for people unfamiliar with probate
*/

INSERT INTO guides (title, description, category, slug, content)
VALUES (
  'What Is Probate in Illinois?',
  'A plain-language introduction to probate in Illinois -- what it is, why courts require it, who is involved, which assets must go through it, and what families should expect.',
  'Probate',
  'what-is-probate-illinois',
  '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What Is Probate in Illinois?</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: #f9fafb;
        }

        .header {
            background: linear-gradient(135deg, #2d3e50 0%, #4a708b 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .header p {
            font-size: 1.25rem;
            opacity: 0.95;
            max-width: 800px;
            margin: 0 auto;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
        }

        .content-section {
            background: white;
            padding: 2.5rem;
            margin-bottom: 2rem;
            border-radius: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .content-section h2 {
            color: #2d3e50;
            font-size: 1.875rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.75rem;
            border-bottom: 3px solid #4a708b;
        }

        .content-section h3 {
            color: #3b5568;
            font-size: 1.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }

        .content-section p {
            margin-bottom: 1.25rem;
            font-size: 1.063rem;
            color: #374151;
        }

        .content-section ul, .content-section ol {
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .content-section li {
            margin-bottom: 0.75rem;
            font-size: 1.063rem;
            color: #374151;
        }

        .highlight-box {
            background: #eef3f7;
            border-left: 4px solid #4a708b;
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 8px;
        }

        .highlight-box p {
            margin-bottom: 0.5rem;
        }

        .highlight-box strong {
            color: #2d3e50;
        }

        .warning-box {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 8px;
        }

        .warning-box strong {
            color: #d97706;
        }

        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .comparison-table th {
            background: #2d3e50;
            color: white;
            padding: 1rem;
            text-align: left;
            font-weight: 600;
        }

        .comparison-table td {
            padding: 1rem;
            border-bottom: 1px solid #e5e7eb;
        }

        .comparison-table tr:nth-child(even) {
            background: #f9fafb;
        }

        .role-card {
            background: #f0f5f9;
            border: 1px solid #d1dce5;
            border-radius: 10px;
            padding: 1.5rem;
            margin-bottom: 1.25rem;
        }

        .role-card h4 {
            color: #2d3e50;
            font-size: 1.15rem;
            margin-bottom: 0.5rem;
        }

        .role-card p {
            margin-bottom: 0;
            font-size: 1rem;
        }

        .myth-fact {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin: 1.25rem 0;
        }

        @media (max-width: 640px) {
            .myth-fact {
                grid-template-columns: 1fr;
            }
        }

        .myth-card {
            border-radius: 10px;
            padding: 1.25rem;
        }

        .myth-card.myth {
            background: #fef2f2;
            border-left: 4px solid #ef4444;
        }

        .myth-card.fact {
            background: #f0fdf4;
            border-left: 4px solid #22c55e;
        }

        .myth-card h4 {
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .myth-card.myth h4 {
            color: #ef4444;
        }

        .myth-card.fact h4 {
            color: #16a34a;
        }

        .myth-card p {
            margin-bottom: 0;
            font-size: 1rem;
        }

        .accordion {
            background: white;
            border: 2px solid #d1dce5;
            border-radius: 8px;
            margin-bottom: 1rem;
            overflow: hidden;
        }

        .accordion-header {
            background: #f0f5f9;
            padding: 1.25rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.3s;
        }

        .accordion-header:hover {
            background: #e1eaf1;
        }

        .accordion-header h3 {
            margin: 0;
            color: #2d3e50;
            font-size: 1.25rem;
        }

        .accordion-icon {
            font-size: 1.5rem;
            color: #4a708b;
            transition: transform 0.3s;
        }

        .accordion-icon.active {
            transform: rotate(180deg);
        }

        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }

        .accordion-content-inner {
            padding: 1.5rem;
        }

        .cta-box {
            background: linear-gradient(135deg, #2d3e50 0%, #4a708b 100%);
            color: white;
            padding: 3rem;
            border-radius: 12px;
            text-align: center;
            margin: 3rem 0;
        }

        .cta-box h2 {
            color: white;
            border: none;
            margin-bottom: 1rem;
            padding-bottom: 0;
        }

        .cta-box p {
            color: white;
            font-size: 1.125rem;
            margin-bottom: 1.5rem;
        }

        .cta-button {
            display: inline-block;
            background: white;
            color: #2d3e50;
            padding: 1rem 2.5rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.125rem;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        .checklist {
            background: #f0f5f9;
            padding: 2rem;
            border-radius: 8px;
            margin: 2rem 0;
        }

        .checklist h3 {
            color: #2d3e50;
            margin-top: 0;
        }

        .checklist ul {
            list-style: none;
            margin-left: 0;
        }

        .checklist li:before {
            content: "\2713";
            color: #4a708b;
            font-weight: bold;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>What Is Probate in Illinois?</h1>
        <p>A Plain-Language Guide to Understanding the Probate Process, Who It Involves, and Why Illinois Courts Require It</p>
    </div>

    <div class="container">
        <div class="content-section">
            <h2>Probate Defined</h2>
            <p>Probate is the court-supervised legal process that takes place after someone dies. Its purpose is straightforward: make sure the deceased person''s debts are paid, their assets go to the right people, and any disputes are resolved under the oversight of a judge.</p>
            <p>In Illinois, probate is governed by the <strong>Illinois Probate Act of 1975 (755 ILCS 5/)</strong>. The process unfolds in the Circuit Court of the county where the person lived at the time of death. For most Cook County residents, that means the Probate Division of the Circuit Court of Cook County at the Daley Center in downtown Chicago.</p>

            <div class="highlight-box">
                <p><strong>In simple terms:</strong> Probate is the legal system''s way of making sure a deceased person''s final wishes are carried out honestly -- or, if there was no will, that state law determines who inherits.</p>
            </div>

            <h3>What Does Probate Actually Accomplish?</h3>
            <p>The probate process serves several essential functions:</p>
            <ol>
                <li><strong>Validates the will.</strong> The court confirms that the will is genuine, was properly signed and witnessed, and reflects the person''s true intentions.</li>
                <li><strong>Appoints a personal representative.</strong> The court formally authorizes someone -- called an <em>executor</em> (if named in a will) or an <em>administrator</em> (if there is no will) -- to manage the estate.</li>
                <li><strong>Identifies and values assets.</strong> All property owned by the deceased is inventoried and appraised so the court, creditors, and beneficiaries know what the estate is worth.</li>
                <li><strong>Pays debts and taxes.</strong> Creditors have a legal window to file claims. Valid debts, funeral expenses, and taxes are paid from estate funds before anything is distributed.</li>
                <li><strong>Distributes remaining assets.</strong> After debts are settled, assets are transferred to the beneficiaries named in the will -- or to the heirs determined by Illinois intestacy law if there was no will.</li>
                <li><strong>Resolves disputes.</strong> If family members disagree about the will, an heir''s share, or the executor''s conduct, the probate court provides a forum to settle those issues.</li>
            </ol>
        </div>

        <div class="content-section">
            <h2>When Is Probate Required in Illinois?</h2>
            <p>Not every death triggers a probate case. Probate is generally required when the deceased owned assets <strong>solely in their own name</strong> that do not have a built-in transfer mechanism (like a beneficiary designation or survivorship right).</p>

            <h3>Probate Is Typically Required When:</h3>
            <ul>
                <li>The deceased owned real estate in their name alone (with no Transfer on Death Instrument)</li>
                <li>Bank accounts, investments, or vehicles are titled solely in the deceased''s name without payable-on-death or transfer-on-death designations</li>
                <li>The total value of solely owned assets exceeds <strong>$100,000</strong></li>
                <li>A will needs to be formally admitted and validated</li>
                <li>There are disputes among potential beneficiaries or creditors</li>
            </ul>

            <h3>Probate Is Usually Not Required When:</h3>
            <ul>
                <li>All assets were held in a <strong>revocable living trust</strong></li>
                <li>Real estate was held in <strong>joint tenancy with right of survivorship</strong></li>
                <li>Bank and investment accounts had <strong>payable-on-death (POD)</strong> or <strong>transfer-on-death (TOD)</strong> beneficiary designations</li>
                <li>Life insurance and retirement accounts had valid <strong>beneficiary designations</strong></li>
                <li>Real estate was covered by a <strong>Transfer on Death Instrument (TODI)</strong></li>
                <li>The total value of solely owned probate assets is <strong>under $100,000</strong> and does not include real estate (a <strong>Small Estate Affidavit</strong> can be used instead)</li>
            </ul>

            <div class="warning-box">
                <p><strong>Important:</strong> Having a will does <em>not</em> avoid probate. A will must still be submitted to the court to be validated and administered. The advantage of a will is that it tells the court exactly how you want your assets distributed, rather than leaving that decision to state law.</p>
            </div>
        </div>

        <div class="content-section">
            <h2>Which Assets Go Through Probate?</h2>
            <p>Understanding the difference between probate and non-probate assets is one of the most important concepts in estate planning.</p>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Probate Assets</th>
                        <th>Non-Probate Assets</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Real estate titled solely in the deceased''s name</td>
                        <td>Real estate in joint tenancy or covered by a TODI</td>
                    </tr>
                    <tr>
                        <td>Bank accounts with no POD designation</td>
                        <td>Bank accounts with POD beneficiaries</td>
                    </tr>
                    <tr>
                        <td>Investment accounts with no TOD designation</td>
                        <td>Brokerage accounts with TOD beneficiaries</td>
                    </tr>
                    <tr>
                        <td>Vehicles titled solely in the deceased''s name</td>
                        <td>Life insurance proceeds (paid to named beneficiaries)</td>
                    </tr>
                    <tr>
                        <td>Personal property (jewelry, furniture, art, collections)</td>
                        <td>Retirement accounts (IRA, 401(k)) with beneficiary designations</td>
                    </tr>
                    <tr>
                        <td>Business interests owned individually</td>
                        <td>Assets held in a revocable or irrevocable trust</td>
                    </tr>
                </tbody>
            </table>

            <div class="highlight-box">
                <p><strong>Strategic takeaway:</strong> The fewer probate assets you have, the simpler and less expensive the process becomes for your family. Many estate plans are specifically designed to minimize or eliminate probate assets through trusts, beneficiary designations, and joint ownership structures.</p>
            </div>
        </div>

        <div class="content-section">
            <h2>Key People in the Probate Process</h2>
            <p>Several roles are involved in every Illinois probate case. Understanding who does what helps families know what to expect.</p>

            <div class="role-card">
                <h4>Executor (Personal Representative)</h4>
                <p>The person named in the will to manage the estate. They file the probate petition, inventory assets, pay debts, file tax returns, and distribute property to beneficiaries. If there is no will, the court appoints an <em>administrator</em> who performs the same duties. Under Illinois law, the executor has a fiduciary duty to act in the best interests of the estate and its beneficiaries.</p>
            </div>

            <div class="role-card">
                <h4>Probate Judge</h4>
                <p>The judge assigned to oversee the case. The judge validates the will, approves the executor''s appointment, rules on disputes, and ultimately authorizes the final distribution of assets and closing of the estate.</p>
            </div>

            <div class="role-card">
                <h4>Beneficiaries and Heirs</h4>
                <p><strong>Beneficiaries</strong> are the people or organizations named in the will to receive assets. <strong>Heirs</strong> are the people who would inherit under Illinois intestacy law if there were no valid will. In some cases these are the same people; in others they are not.</p>
            </div>

            <div class="role-card">
                <h4>Creditors</h4>
                <p>Individuals, businesses, or institutions owed money by the deceased. Illinois law gives creditors <strong>six months</strong> from the date Letters of Office are issued to file claims against the estate. Valid claims must be paid before beneficiaries receive their inheritance.</p>
            </div>

            <div class="role-card">
                <h4>Probate Attorney</h4>
                <p>While not legally required, most executors hire a probate attorney to guide them through the process. The attorney drafts and files legal documents, ensures deadlines are met, addresses creditor claims, handles tax filings, and helps resolve any disputes. Attorney fees are a legitimate estate expense paid from estate funds.</p>
            </div>
        </div>

        <div class="content-section">
            <h2>Types of Probate in Illinois</h2>
            <p>Illinois recognizes three main probate paths. The right one depends on the estate''s size, complexity, and whether beneficiaries agree on the process.</p>

            <h3>Independent Administration</h3>
            <p>This is the most common form of probate in Illinois. The executor can manage most estate business -- selling property, paying debts, distributing assets -- without getting advance court approval for each action. The will typically requests independent administration, or all beneficiaries can consent to it.</p>
            <ul>
                <li>Faster and less expensive than supervised administration</li>
                <li>Executor files reports with the court but does not need permission for routine actions</li>
                <li>Beneficiaries can object to specific actions within 28 days of receiving notice</li>
            </ul>

            <h3>Supervised Administration</h3>
            <p>Under supervised administration, the executor must obtain court approval before taking significant actions like selling real estate, paying large claims, or distributing assets. This is required when:</p>
            <ul>
                <li>The will specifically requests supervised administration</li>
                <li>Beneficiaries do not consent to independent administration</li>
                <li>There are disputes or concerns about the executor''s conduct</li>
                <li>The court determines closer oversight is necessary</li>
            </ul>

            <h3>Small Estate Affidavit (No Formal Probate)</h3>
            <p>If the total value of the deceased''s probate estate is <strong>$100,000 or less</strong> and does not include real estate, a simplified procedure is available under <strong>755 ILCS 5/25-1</strong>. An heir or beneficiary can file a Small Estate Affidavit to collect assets without opening a formal probate case. This must be done at least 30 days after the date of death.</p>

            <div class="highlight-box">
                <p><strong>Note:</strong> The $100,000 threshold applies only to <em>probate</em> assets. Non-probate assets (joint accounts, life insurance, trust assets) do not count toward this limit.</p>
            </div>
        </div>

        <div class="content-section">
            <h2>How Long Does Probate Take in Illinois?</h2>
            <p>The duration of probate depends on the estate''s complexity, whether disputes arise, and how efficiently the executor manages the process.</p>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Estate Type</th>
                        <th>Typical Duration</th>
                        <th>Key Factors</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Simple estate</strong> (few assets, no disputes)</td>
                        <td>6 to 9 months</td>
                        <td>Mandatory 6-month creditor claims period is the main driver</td>
                    </tr>
                    <tr>
                        <td><strong>Moderate estate</strong> (real estate, multiple accounts)</td>
                        <td>9 to 18 months</td>
                        <td>Time needed for property sales, tax filings, beneficiary coordination</td>
                    </tr>
                    <tr>
                        <td><strong>Complex estate</strong> (business interests, tax issues)</td>
                        <td>18 months to 3+ years</td>
                        <td>Business valuations, estate tax audits, complicated assets</td>
                    </tr>
                    <tr>
                        <td><strong>Contested estate</strong> (will contest, disputes)</td>
                        <td>2 to 5+ years</td>
                        <td>Litigation, mediation, and appeals can extend the timeline significantly</td>
                    </tr>
                </tbody>
            </table>

            <p>The single biggest factor affecting timeline is the <strong>mandatory six-month creditor claims period</strong>. No estate can be fully closed until this window expires, even if all known debts have been paid. This is required by <strong>755 ILCS 5/18-3</strong>.</p>
        </div>

        <div class="content-section">
            <h2>Common Misconceptions About Probate</h2>
            <p>Probate carries a lot of myths. Here are the most common ones and the reality behind them.</p>

            <div class="myth-fact">
                <div class="myth-card myth">
                    <h4>Myth</h4>
                    <p>"If I have a will, my family won''t have to go through probate."</p>
                </div>
                <div class="myth-card fact">
                    <h4>Fact</h4>
                    <p>A will must be submitted to the probate court to be validated and administered. Having a will controls <em>who</em> gets your assets, but it does not eliminate the probate process.</p>
                </div>
            </div>

            <div class="myth-fact">
                <div class="myth-card myth">
                    <h4>Myth</h4>
                    <p>"The government takes everything if you die without a will."</p>
                </div>
                <div class="myth-card fact">
                    <h4>Fact</h4>
                    <p>Illinois intestacy law distributes assets to your closest living relatives -- spouse, children, parents, siblings, and so on. The state only inherits if absolutely no living relatives can be found, which is extremely rare.</p>
                </div>
            </div>

            <div class="myth-fact">
                <div class="myth-card myth">
                    <h4>Myth</h4>
                    <p>"Probate takes years and costs a fortune."</p>
                </div>
                <div class="myth-card fact">
                    <h4>Fact</h4>
                    <p>Most straightforward Illinois estates are settled in 6 to 12 months. Costs depend on estate size and complexity, but independent administration keeps them manageable. Disputes and poor planning are what cause excessive cost and delay.</p>
                </div>
            </div>

            <div class="myth-fact">
                <div class="myth-card myth">
                    <h4>Myth</h4>
                    <p>"The executor gets to keep whatever they want."</p>
                </div>
                <div class="myth-card fact">
                    <h4>Fact</h4>
                    <p>The executor is a fiduciary bound by law to act in the estate''s best interest. They must account for every dollar. Misuse of estate assets can result in personal liability, removal, and even criminal charges.</p>
                </div>
            </div>

            <div class="myth-fact">
                <div class="myth-card myth">
                    <h4>Myth</h4>
                    <p>"Adding my child to my deed avoids probate and is risk-free."</p>
                </div>
                <div class="myth-card fact">
                    <h4>Fact</h4>
                    <p>Adding someone to your deed creates a current ownership interest. This can trigger gift tax issues, expose the property to your child''s creditors or divorce proceedings, and may disqualify you from Medicaid benefits. A Transfer on Death Instrument or revocable trust is almost always a better option.</p>
                </div>
            </div>
        </div>

        <div class="content-section">
            <h2>What Happens If There Is No Will?</h2>
            <p>When someone dies without a valid will (called dying <em>intestate</em>), Illinois law determines who inherits. The rules are set out in <strong>755 ILCS 5/2-1</strong>. Here is how assets are distributed:</p>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Family Situation</th>
                        <th>Who Inherits</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Surviving spouse, no children</td>
                        <td>Spouse inherits everything</td>
                    </tr>
                    <tr>
                        <td>Surviving spouse and children</td>
                        <td>Spouse gets 1/2, children share 1/2 equally</td>
                    </tr>
                    <tr>
                        <td>Children only, no spouse</td>
                        <td>Children share everything equally</td>
                    </tr>
                    <tr>
                        <td>No spouse or children</td>
                        <td>Parents inherit equally; if only one parent survives, that parent inherits all</td>
                    </tr>
                    <tr>
                        <td>No spouse, children, or parents</td>
                        <td>Siblings share equally; if a sibling predeceased, their children take their share</td>
                    </tr>
                    <tr>
                        <td>No close relatives</td>
                        <td>Assets pass to more distant relatives (grandparents, aunts/uncles, cousins) in order of proximity</td>
                    </tr>
                </tbody>
            </table>

            <div class="warning-box">
                <p><strong>Critical note:</strong> Unmarried partners, stepchildren, and close friends receive <em>nothing</em> under intestacy law, regardless of the deceased''s wishes or the length of the relationship. Only a valid will or other estate planning document can provide for these individuals.</p>
            </div>
        </div>

        <div class="content-section">
            <h2>Probate Costs in Illinois: A Quick Overview</h2>
            <p>Probate costs come from several sources. Being aware of them upfront helps families plan accordingly.</p>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Typical Range</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Court filing fees</strong></td>
                        <td>$350 -- $400</td>
                    </tr>
                    <tr>
                        <td><strong>Publication of notice to creditors</strong></td>
                        <td>$200 -- $400</td>
                    </tr>
                    <tr>
                        <td><strong>Surety bond premium</strong> (if required)</td>
                        <td>$200 -- $1,000+</td>
                    </tr>
                    <tr>
                        <td><strong>Attorney fees</strong></td>
                        <td>$3,000 -- $10,000+ depending on complexity</td>
                    </tr>
                    <tr>
                        <td><strong>Executor compensation</strong></td>
                        <td>Typically 1 -- 5% of estate value (reasonable compensation)</td>
                    </tr>
                    <tr>
                        <td><strong>Appraisals</strong></td>
                        <td>$300 -- $1,500 per asset</td>
                    </tr>
                    <tr>
                        <td><strong>Accounting and tax preparation</strong></td>
                        <td>$500 -- $3,000+</td>
                    </tr>
                </tbody>
            </table>

            <p>All of these expenses are paid from the estate, not from the executor''s or beneficiaries'' personal funds. The total cost of probate typically runs between <strong>3% and 7%</strong> of the estate''s value for straightforward cases.</p>
        </div>

        <div class="content-section">
            <h2>How to Minimize or Avoid Probate</h2>
            <p>While probate is not inherently bad, many families prefer to minimize it to save time, reduce costs, and maintain privacy. Common strategies include:</p>

            <div class="checklist">
                <h3>Probate Avoidance Strategies</h3>
                <ul>
                    <li><strong>Revocable Living Trust:</strong> Assets transferred to a trust pass directly to beneficiaries without any court involvement</li>
                    <li><strong>Beneficiary Designations:</strong> Name beneficiaries on life insurance, retirement accounts, and financial accounts so they transfer automatically</li>
                    <li><strong>Payable-on-Death (POD) Accounts:</strong> Bank accounts with POD designations pass directly to the named individual</li>
                    <li><strong>Transfer-on-Death (TOD) Registrations:</strong> Investment and brokerage accounts can include TOD designations</li>
                    <li><strong>Transfer on Death Instrument (TODI):</strong> Illinois allows real estate to be transferred at death without probate using a recorded TODI</li>
                    <li><strong>Joint Tenancy with Right of Survivorship:</strong> Property owned in joint tenancy passes automatically to the surviving owner</li>
                </ul>
            </div>

            <p>The right combination of strategies depends on your assets, family situation, and goals. A comprehensive estate plan typically uses several of these tools together to create a seamless transfer of assets.</p>
        </div>

        <div class="content-section">
            <h2>Frequently Asked Questions</h2>

            <div class="accordion">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                    <h3>Is probate public in Illinois?</h3>
                    <span class="accordion-icon">&#9660;</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        <p>Yes. Probate is a court proceeding, and the documents filed -- including the will, inventory of assets, and list of beneficiaries -- become part of the public record. Anyone can access these records. This is one reason some people prefer to use a revocable living trust, which keeps asset details private.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                    <h3>Can I handle probate without an attorney?</h3>
                    <span class="accordion-icon">&#9660;</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        <p>Illinois does not legally require an executor to hire an attorney. However, probate involves strict deadlines, complex legal documents, and personal liability for mistakes. Most executors find that working with a probate attorney saves time and money in the long run, and protects them from personal exposure.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                    <h3>What if the deceased owned property in another state?</h3>
                    <span class="accordion-icon">&#9660;</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        <p>If the deceased owned real estate in a state other than Illinois, an <em>ancillary probate</em> proceeding is required in that state in addition to the primary probate in Illinois. This adds cost and complexity. One of the benefits of holding out-of-state real estate in a trust is that it eliminates the need for ancillary probate.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                    <h3>Can creditors come after beneficiaries personally?</h3>
                    <span class="accordion-icon">&#9660;</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        <p>Generally, no. Beneficiaries are not personally responsible for the deceased''s debts. Creditors can only collect from estate assets. However, if the executor distributes assets to beneficiaries before paying valid debts, the executor may be held personally liable, and in some cases beneficiaries who received assets may need to return them to satisfy creditor claims.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                    <h3>What happens if beneficiaries disagree?</h3>
                    <span class="accordion-icon">&#9660;</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        <p>Disputes among beneficiaries can take several forms: contesting the validity of the will, challenging the executor''s actions, or disagreeing about asset distribution. The probate court has authority to resolve these disputes. Mediation is often encouraged before formal litigation. Contested estates take significantly longer and cost more to administer.</p>
                    </div>
                </div>
            </div>

            <div class="accordion">
                <div class="accordion-header" onclick="toggleAccordion(this)">
                    <h3>Does a surviving spouse automatically inherit everything?</h3>
                    <span class="accordion-icon">&#9660;</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        <p>Not necessarily. If there is a will, the distribution follows the will''s terms (though a surviving spouse has the right to renounce the will and claim a statutory share). If there is no will and the deceased had children, the surviving spouse receives only half of the estate; the children share the other half equally. A will or trust is the only way to ensure your spouse receives exactly what you intend.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="cta-box">
            <h2>Questions About Probate in Illinois?</h2>
            <p>Whether you are planning ahead or navigating probate right now, our experienced attorneys can help you understand your options and protect your family''s interests.</p>
            <a href="/book-consultation" class="cta-button">Schedule a Consultation</a>
        </div>
    </div>

    <script>
        function toggleAccordion(header) {
            const accordion = header.parentElement;
            const content = accordion.querySelector(''.accordion-content'');
            const icon = header.querySelector(''.accordion-icon'');
            const isOpen = content.style.maxHeight;

            document.querySelectorAll(''.accordion-content'').forEach(item => {
                item.style.maxHeight = null;
            });

            document.querySelectorAll(''.accordion-icon'').forEach(item => {
                item.classList.remove(''active'');
            });

            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + ''px'';
                icon.classList.add(''active'');
            }
        }
    </script>
</body>
</html>'
)
ON CONFLICT (slug) DO NOTHING;