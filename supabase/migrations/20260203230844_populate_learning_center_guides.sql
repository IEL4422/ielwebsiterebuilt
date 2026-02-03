/*
  # Populate Learning Center Guides

  1. Data Population
    - Inserts comprehensive estate planning and probate guides
    - Covers all major practice areas
    - Organized by categories: Estate Planning, Probate, Trusts, Powers of Attorney, Healthcare, Deeds
    
  2. Guide Categories
    - Estate Planning Basics
    - Probate Administration
    - Trusts & Asset Protection
    - Legal Authority & Healthcare
    - Real Estate & Deeds
    - Tax Planning
*/

-- Insert comprehensive learning center guides
INSERT INTO guides (slug, title, description, category, content) VALUES

-- Estate Planning Basics
('what-is-estate-planning',
 'What Is Estate Planning?',
 'Learn the fundamentals of estate planning and why every adult needs a comprehensive plan to protect their assets and loved ones.',
 'Estate Planning',
 '<div class="prose max-w-none"><h1>What Is Estate Planning?</h1><p>Estate planning is the process of arranging for the management and distribution of your assets during your lifetime and after your death. It ensures your wishes are honored and your loved ones are protected.</p><h2>Key Components</h2><ul><li><strong>Will:</strong> Directs how your assets are distributed after death</li><li><strong>Trust:</strong> Manages assets during life and after death, avoiding probate</li><li><strong>Powers of Attorney:</strong> Appoints someone to handle financial matters if you become incapacitated</li><li><strong>Healthcare Directives:</strong> Specifies your medical care preferences</li></ul><h2>Why Estate Planning Matters</h2><p>Without an estate plan, Illinois law determines who inherits your assets and who makes decisions if you''re incapacitated. This may not align with your wishes and can create costly legal battles.</p></div>'),

('intestate-succession-illinois',
 'Intestate Succession in Illinois',
 'What happens to your estate if you die without a will in Illinois? Understand how state law distributes your assets.',
 'Estate Planning',
 '<div class="prose max-w-none"><h1>Intestate Succession in Illinois</h1><p>When someone dies without a valid will in Illinois, their estate is distributed according to intestate succession laws. The state determines who inherits based on family relationships.</p><h2>Distribution Rules</h2><ul><li><strong>Spouse and Children:</strong> Spouse receives 50%, children share remaining 50%</li><li><strong>Spouse, No Children:</strong> Spouse receives entire estate</li><li><strong>Children, No Spouse:</strong> Children share entire estate equally</li><li><strong>No Spouse or Children:</strong> Estate goes to parents, then siblings, then more distant relatives</li></ul><h2>Problems with Intestate Succession</h2><p>Intestacy can result in unintended distributions, family disputes, and may not account for blended families, special needs, or charitable wishes.</p></div>'),

('estate-planning-checklist',
 'Estate Planning Checklist',
 'A comprehensive checklist of documents and decisions needed for a complete Illinois estate plan.',
 'Estate Planning',
 '<div class="prose max-w-none"><h1>Estate Planning Checklist</h1><h2>Essential Documents</h2><ul><li>□ Last Will and Testament</li><li>□ Revocable Living Trust (if applicable)</li><li>□ Financial Power of Attorney</li><li>□ Healthcare Power of Attorney</li><li>□ Living Will / Healthcare Directive</li><li>□ HIPAA Authorization</li></ul><h2>Important Decisions</h2><ul><li>□ Choose executor/trustee</li><li>□ Designate guardians for minor children</li><li>□ Name healthcare agent</li><li>□ Specify end-of-life care preferences</li><li>□ Review beneficiary designations</li><li>□ Update asset titles and ownership</li></ul><h2>Review and Update</h2><p>Review your estate plan every 3-5 years or after major life events: marriage, divorce, births, deaths, significant asset changes, or moves to another state.</p></div>'),

-- Probate
('illinois-probate-process',
 'Illinois Probate Process Explained',
 'Step-by-step guide to the Illinois probate process, including timelines, costs, and requirements.',
 'Probate',
 '<div class="prose max-w-none"><h1>Illinois Probate Process</h1><p>Probate is the court-supervised process of administering a deceased person''s estate. It validates the will, pays debts and taxes, and distributes assets to beneficiaries.</p><h2>Probate Steps</h2><ol><li><strong>File Petition:</strong> Submit will and death certificate to court (within 30 days recommended)</li><li><strong>Appointment:</strong> Court appoints executor/administrator</li><li><strong>Notice:</strong> Notify heirs, beneficiaries, and creditors</li><li><strong>Inventory:</strong> Catalog all estate assets</li><li><strong>Pay Debts:</strong> Settle outstanding bills, taxes, expenses</li><li><strong>Distribute Assets:</strong> Transfer remaining assets to beneficiaries</li><li><strong>Close Estate:</strong> File final accounting with court</li></ol><h2>Timeline and Costs</h2><p>Illinois probate typically takes 6-12 months minimum. Costs include court fees ($500-$1,000), attorney fees (typically 3-5% of estate value), and executor fees (up to 5% of estate).</p></div>'),

('avoiding-probate-illinois',
 'How to Avoid Probate in Illinois',
 'Learn proven strategies to help your family avoid the time, cost, and hassle of probate court.',
 'Probate',
 '<div class="prose max-w-none"><h1>How to Avoid Probate in Illinois</h1><h2>Probate Avoidance Strategies</h2><ul><li><strong>Revocable Living Trust:</strong> Most comprehensive solution - assets titled to trust avoid probate entirely</li><li><strong>Joint Ownership:</strong> Property owned as joint tenants with right of survivorship passes automatically</li><li><strong>Transfer-on-Death Instruments (TODIs):</strong> Real estate transfers directly to named beneficiaries</li><li><strong>Payable-on-Death (POD) Accounts:</strong> Bank accounts transfer to named beneficiaries</li><li><strong>Beneficiary Deeds:</strong> For real estate in counties that accept them</li><li><strong>Life Insurance & Retirement Accounts:</strong> Pass directly to named beneficiaries</li></ul><h2>Benefits of Avoiding Probate</h2><ul><li>Faster distribution to beneficiaries (weeks vs. months)</li><li>Lower costs (no court fees or probate attorney fees)</li><li>Privacy (no public court records)</li><li>Simpler administration for family</li></ul></div>'),

('small-estate-affidavit',
 'Illinois Small Estate Affidavit',
 'How to use a small estate affidavit to transfer assets without formal probate for estates under $100,000.',
 'Probate',
 '<div class="prose max-w-none"><h1>Illinois Small Estate Affidavit</h1><p>For estates valued under $100,000 (excluding real estate), Illinois allows heirs to use a small estate affidavit to claim assets without formal probate.</p><h2>Eligibility Requirements</h2><ul><li>Estate value under $100,000 (excluding real estate subject to administration)</li><li>At least 30 days have passed since death</li><li>No probate proceedings have been initiated</li><li>All funeral and burial expenses have been paid</li></ul><h2>How It Works</h2><ol><li>Wait 30 days after death</li><li>Complete small estate affidavit form</li><li>Sign before notary</li><li>Present affidavit to asset holders (banks, investment firms, etc.)</li><li>Asset holders must release assets within 60 days</li></ol><h2>Limitations</h2><p>Cannot be used for real estate that requires administration. Does not provide protection from creditor claims like formal probate does.</p></div>'),

-- Trusts
('revocable-living-trust-basics',
 'Revocable Living Trust Basics',
 'Understanding how revocable living trusts work, their benefits, and whether one is right for you.',
 'Trusts',
 '<div class="prose max-w-none"><h1>Revocable Living Trust Basics</h1><p>A revocable living trust is a legal document that holds title to your assets during your lifetime and distributes them after death without probate.</p><h2>How It Works</h2><p>You create the trust (as "grantor"), manage it during your life (as "trustee"), and name beneficiaries to receive assets after death. You can modify or revoke the trust anytime.</p><h2>Key Benefits</h2><ul><li><strong>Avoids Probate:</strong> Assets transfer immediately without court involvement</li><li><strong>Privacy:</strong> No public court records</li><li><strong>Incapacity Planning:</strong> Successor trustee manages assets if you become incapacitated</li><li><strong>Control:</strong> Specify exactly when and how beneficiaries receive assets</li><li><strong>Flexibility:</strong> Can be changed or revoked anytime during your life</li></ul><h2>Common Misconceptions</h2><p>Trusts don''t avoid taxes (same tax treatment as wills), don''t protect from creditors during your lifetime, and require proper funding to work effectively.</p></div>'),

('trust-funding-guide',
 'How to Fund Your Trust',
 'Essential guide to properly transferring assets into your trust so it works when needed.',
 'Trusts',
 '<div class="prose max-w-none"><h1>How to Fund Your Trust</h1><p>A trust only controls assets that have been transferred into it. "Funding" means changing ownership of assets from your individual name to the trust''s name.</p><h2>Assets to Transfer</h2><ul><li><strong>Real Estate:</strong> Record new deed transferring property to trust</li><li><strong>Bank Accounts:</strong> Retitle or designate trust as POD beneficiary</li><li><strong>Investment Accounts:</strong> Transfer to trust ownership or TOD designation</li><li><strong>Business Interests:</strong> Transfer ownership to trust (check operating agreements)</li><li><strong>Personal Property:</strong> Assignment of property to trust</li></ul><h2>Assets NOT to Transfer</h2><ul><li>Retirement accounts (IRAs, 401ks) - use beneficiary designations instead</li><li>Health Savings Accounts (HSAs)</li><li>Vehicles in some cases (check with attorney)</li></ul><h2>Common Mistakes</h2><p>The biggest mistake is creating a trust but never funding it. An unfunded trust provides no benefit and forces your estate through probate anyway.</p></div>'),

('irrevocable-vs-revocable-trusts',
 'Irrevocable vs. Revocable Trusts',
 'Compare irrevocable and revocable trusts to determine which type fits your estate planning goals.',
 'Trusts',
 '<div class="prose max-w-none"><h1>Irrevocable vs. Revocable Trusts</h1><h2>Revocable Trusts</h2><ul><li>Can be changed or revoked anytime</li><li>You maintain control as trustee</li><li>Assets still part of your taxable estate</li><li>No creditor protection during life</li><li>Primary benefit: probate avoidance</li></ul><h2>Irrevocable Trusts</h2><ul><li>Cannot be changed once created</li><li>You give up control and ownership</li><li>Assets removed from taxable estate</li><li>Provides creditor and lawsuit protection</li><li>May qualify for Medicaid</li><li>More complex and costly to establish</li></ul><h2>Which to Choose?</h2><p>Most people benefit from revocable trusts for basic probate avoidance and flexibility. Irrevocable trusts serve specific purposes: estate tax reduction (large estates), asset protection (high-risk professions), or Medicaid planning.</p></div>'),

-- Powers of Attorney
('financial-power-of-attorney',
 'Financial Power of Attorney in Illinois',
 'Why you need a financial power of attorney and how to choose the right agent.',
 'Powers of Attorney',
 '<div class="prose max-w-none"><h1>Financial Power of Attorney</h1><p>A financial power of attorney appoints someone (your "agent" or "attorney-in-fact") to manage your financial affairs if you become unable to do so.</p><h2>What Your Agent Can Do</h2><ul><li>Pay bills and manage bank accounts</li><li>File taxes</li><li>Manage investments</li><li>Buy or sell real estate</li><li>Run your business</li><li>Apply for government benefits</li><li>Make gifts (if specified)</li></ul><h2>Types of Powers</h2><ul><li><strong>Durable:</strong> Remains in effect if you become incapacitated (recommended)</li><li><strong>Springing:</strong> Only takes effect upon incapacity (requires determination of incapacity)</li><li><strong>Immediate:</strong> Effective immediately upon signing</li></ul><h2>Choosing Your Agent</h2><p>Select someone trustworthy, financially responsible, organized, and willing to serve. Consider naming a successor agent in case your first choice cannot serve.</p></div>'),

('healthcare-power-of-attorney',
 'Healthcare Power of Attorney',
 'Ensure your medical wishes are honored by appointing a healthcare agent you trust.',
 'Powers of Attorney',
 '<div class="prose max-w-none"><h1>Healthcare Power of Attorney</h1><p>A healthcare power of attorney (also called "power of attorney for healthcare") appoints someone to make medical decisions if you cannot communicate your wishes.</p><h2>What Your Agent Decides</h2><ul><li>Medical treatments and procedures</li><li>Choice of doctors and facilities</li><li>Long-term care options</li><li>Organ donation</li><li>Autopsy decisions</li></ul><h2>Illinois Requirements</h2><p>Must be signed by you and witnessed by at least one person who is not your agent. Your agent cannot be your doctor or healthcare provider (unless related to you).</p><h2>Difference from Living Will</h2><p>A healthcare POA appoints someone to decide for you. A living will states your specific end-of-life preferences. You should have both - they work together.</p></div>'),

-- Healthcare Directives
('living-will-illinois',
 'Living Will in Illinois',
 'Document your end-of-life care preferences with an Illinois living will.',
 'Healthcare',
 '<div class="prose max-w-none"><h1>Living Will in Illinois</h1><p>A living will (also called "declaration") states your preferences for life-sustaining treatment if you have a terminal condition or are permanently unconscious.</p><h2>What It Covers</h2><ul><li>Whether to receive or withhold life-sustaining treatment</li><li>Use of artificial nutrition and hydration</li><li>Mechanical ventilation</li><li>CPR and resuscitation</li><li>Comfort care and pain management</li></ul><h2>Illinois Requirements</h2><p>Must be in writing, signed by you, and witnessed by two adults who are not your heirs or healthcare providers.</p><h2>When It Takes Effect</h2><p>Only becomes effective if: (1) you cannot make your own medical decisions, AND (2) you have a terminal condition or are permanently unconscious, as certified by two physicians.</p><h2>Important Notes</h2><p>Can be revoked at any time. Discuss your wishes with family and healthcare providers. Give copies to your healthcare agent, family, and doctors.</p></div>'),

('hipaa-authorization',
 'HIPAA Authorization',
 'Allow family members to access your medical information with a HIPAA authorization.',
 'Healthcare',
 '<div class="prose max-w-none"><h1>HIPAA Authorization</h1><p>The Health Insurance Portability and Accountability Act (HIPAA) prevents healthcare providers from sharing your medical information without your permission. A HIPAA authorization allows designated people to receive your health information.</p><h2>Why You Need It</h2><p>Without a HIPAA authorization, your healthcare POA agent, family members, and even your spouse may be denied access to your medical records and updates from doctors.</p><h2>Who to Authorize</h2><ul><li>Your healthcare agent</li><li>Spouse or partner</li><li>Adult children</li><li>Close family members who may be involved in your care</li></ul><h2>What It Covers</h2><p>Allows specified individuals to receive all your protected health information, discuss your condition with healthcare providers, and access your medical records.</p></div>'),

-- Deeds & Real Estate
('types-of-property-ownership',
 'Types of Property Ownership in Illinois',
 'Understand how different forms of property ownership affect transfer at death.',
 'Deeds',
 '<div class="prose max-w-none"><h1>Types of Property Ownership</h1><h2>Sole Ownership</h2><p>You own property individually. It must go through probate at death unless transferred to a trust.</p><h2>Joint Tenancy with Right of Survivorship</h2><p>Two or more owners each have equal interest. When one owner dies, their share automatically passes to surviving owners without probate.</p><h2>Tenancy by the Entirety</h2><p>Only for married couples. Similar to joint tenancy with added creditor protection. Property automatically passes to surviving spouse.</p><h2>Tenancy in Common</h2><p>Multiple owners each own a specific percentage. No automatic transfer at death - each owner''s share goes through probate or trust.</p><h2>Trust Ownership</h2><p>Property is titled in the name of your trust, avoiding probate and allowing flexible distribution terms.</p></div>'),

('transfer-on-death-instrument',
 'Transfer-on-Death Instrument (TODI)',
 'Use a TODI to transfer Illinois real estate directly to beneficiaries without probate.',
 'Deeds',
 '<div class="prose max-w-none"><h1>Transfer-on-Death Instrument</h1><p>Illinois law allows property owners to file a Transfer-on-Death Instrument (TODI) that automatically transfers real estate to named beneficiaries upon death, avoiding probate.</p><h2>Requirements</h2><ul><li>Must be recorded before death</li><li>Can name one or more beneficiaries</li><li>Can be revoked or changed anytime</li><li>Must meet deed requirements (notarized, proper legal description)</li><li>Does not affect Medicaid eligibility or property tax exemptions</li></ul><h2>Benefits</h2><ul><li>Avoids probate for real estate</li><li>Retain full control during lifetime</li><li>Can be changed or revoked</li><li>Simple and inexpensive to create</li></ul><h2>Limitations</h2><ul><li>Only works for real estate</li><li>Subject to your debts and liens</li><li>May cause title issues if beneficiary dies first</li><li>No incapacity planning</li></ul></div>'),

('life-estate-deed',
 'Life Estate Deeds',
 'Learn how life estate deeds work and their pros and cons for Illinois property owners.',
 'Deeds',
 '<div class="prose max-w-none"><h1>Life Estate Deeds</h1><p>A life estate deed splits property ownership: the "life tenant" (usually you) has the right to use the property during life, and "remaindermen" (usually your children) automatically inherit it at your death.</p><h2>How It Works</h2><p>You retain the right to live in and use the property for life. You''re responsible for taxes, insurance, and maintenance. You cannot sell or mortgage without remaindermen''s consent. At your death, property automatically passes to remaindermen without probate.</p><h2>Advantages</h2><ul><li>Avoids probate</li><li>May help with Medicaid planning (subject to 5-year lookback)</li><li>Retains homestead exemption</li></ul><h2>Disadvantages</h2><ul><li>Cannot sell or refinance without remaindermen''s consent</li><li>Property subject to remaindermen''s creditors and divorces</li><li>Difficult to undo</li><li>May lose capital gains tax benefits</li><li>No incapacity planning</li></ul></div>'),

-- Tax Planning
('illinois-estate-tax',
 'Illinois Estate Tax Overview',
 'Understand Illinois estate tax, who it affects, and strategies to minimize it.',
 'Tax Planning',
 '<div class="prose max-w-none"><h1>Illinois Estate Tax</h1><p>Illinois imposes an estate tax on estates exceeding $4 million. The tax ranges from 0.8% to 16% of the taxable estate.</p><h2>Current Exemption</h2><p>$4 million per person (2024). Illinois does not have portability, so married couples cannot combine exemptions without proper planning.</p><h2>What''s Included</h2><ul><li>Real estate</li><li>Bank and investment accounts</li><li>Life insurance death benefits</li><li>Retirement accounts</li><li>Business interests</li><li>Personal property</li></ul><h2>Tax Rates</h2><p>Progressive rates from 0.8% to 16% on amounts over the exemption.</p><h2>Planning Strategies</h2><ul><li>Credit shelter trusts for married couples</li><li>Lifetime gifting (annual exclusion: $18,000 per person in 2024)</li><li>Irrevocable life insurance trusts</li><li>Charitable giving</li><li>Qualified personal residence trusts</li></ul></div>'),

('gift-tax-basics',
 'Gift Tax Rules and Strategies',
 'Learn about federal gift tax rules and how to make tax-free gifts to reduce your estate.',
 'Tax Planning',
 '<div class="prose max-w-none"><h1>Gift Tax Basics</h1><h2>Annual Exclusion</h2><p>You can give $18,000 per person per year (2024) to unlimited recipients without gift tax or reporting requirements. Married couples can give $36,000 per recipient.</p><h2>Lifetime Exemption</h2><p>Federal lifetime exemption is $13.61 million per person (2024). Gifts exceeding annual exclusion reduce your lifetime exemption but don''t trigger tax until exemption is exhausted.</p><h2>What Counts as a Gift</h2><ul><li>Cash and checks</li><li>Property transfers</li><li>Forgiving a loan</li><li>Below-market loans</li><li>Adding someone to a deed or account</li></ul><h2>Excluded Gifts</h2><ul><li>Gifts to your spouse (unlimited marital deduction)</li><li>Direct payment of medical expenses</li><li>Direct payment of tuition</li><li>Political contributions</li><li>Charitable donations</li></ul></div>')

ON CONFLICT (slug) DO NOTHING;
