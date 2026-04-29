/*
  # Add blog post: Do All Assets Go Through Probate in Illinois?

  1. Changes
    - Inserts a new blog post into the `blog_posts` table
    - Topic: Probate
    - Slug: do-all-assets-go-through-probate-in-illinois
    - Includes interactive asset classifier tool, styled cards, TOC, FAQ schema
    - Approximately 1500 words

  2. Important Notes
    - Uses ON CONFLICT to avoid duplicate insertion
    - Links to related internal pages for SEO
*/

INSERT INTO blog_posts (title, slug, excerpt, content, author, published_date, topic, meta_description, internal_links)
VALUES (
  'Do All Assets Go Through Probate in Illinois? What Passes Outside of Court',
  'do-all-assets-go-through-probate-in-illinois',
  'Not every asset goes through probate in Illinois. Learn which assets skip the court process, which require probate, and how to structure your estate plan to avoid costly delays.',
  E'<style>
.probate-assets-article { font-family: inherit; color: #1e293b; line-height: 1.8; }
.probate-assets-article h2 { font-size: 1.75rem; font-weight: 700; color: #0f172a; margin-top: 2.5rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e2e8f0; }
.probate-assets-article h3 { font-size: 1.35rem; font-weight: 600; color: #1e293b; margin-top: 2rem; margin-bottom: 0.75rem; }
.probate-assets-article p { margin-bottom: 1.25rem; color: #334155; }
.probate-assets-article ul, .probate-assets-article ol { margin-bottom: 1.25rem; padding-left: 1.5rem; }
.probate-assets-article li { margin-bottom: 0.5rem; color: #334155; }
.probate-assets-article strong { color: #0f172a; }
.probate-assets-article .info-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem 1.5rem; margin-bottom: 1rem; }
.probate-assets-article .info-card h4 { font-weight: 700; font-size: 1.05rem; color: #0f172a; margin-bottom: 0.5rem; }
.probate-assets-article .info-card p { margin-bottom: 0; font-size: 0.95rem; }
.probate-assets-article .highlight-box { background: #eff6ff; border-left: 4px solid #1e40af; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0; }
.probate-assets-article .highlight-box p { margin-bottom: 0; }
.probate-assets-article .warning-box { background: #fef3c7; border-left: 4px solid #d97706; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0; }
.probate-assets-article .warning-box p { margin-bottom: 0; color: #78350f; }
.probate-assets-article .toc { background: #f1f5f9; border-radius: 8px; padding: 1.5rem 2rem; margin-bottom: 2rem; }
.probate-assets-article .toc h3 { margin-top: 0; font-size: 1.1rem; color: #0f172a; }
.probate-assets-article .toc ol { margin-bottom: 0; }
.probate-assets-article .toc li { margin-bottom: 0.35rem; }
.probate-assets-article .toc a { color: #1e40af; text-decoration: none; }
.probate-assets-article .toc a:hover { text-decoration: underline; }
.probate-assets-article .comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0; }
@media (max-width: 640px) { .probate-assets-article .comparison-grid { grid-template-columns: 1fr; } }
.probate-assets-article .comparison-card { border-radius: 8px; padding: 1.25rem 1.5rem; }
.probate-assets-article .comparison-card.probate { background: #fef2f2; border: 1px solid #fecaca; }
.probate-assets-article .comparison-card.non-probate { background: #f0fdf4; border: 1px solid #bbf7d0; }
.probate-assets-article .comparison-card h4 { font-weight: 700; font-size: 1.05rem; margin-bottom: 0.75rem; }
.probate-assets-article .comparison-card.probate h4 { color: #991b1b; }
.probate-assets-article .comparison-card.non-probate h4 { color: #166534; }
.probate-assets-article .comparison-card ul { margin-bottom: 0; padding-left: 1.25rem; }
.probate-assets-article .comparison-card li { font-size: 0.95rem; margin-bottom: 0.35rem; }
.probate-assets-article .quiz-container { background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 2rem; margin: 2rem 0; }
.probate-assets-article .quiz-container h3 { margin-top: 0; text-align: center; color: #0f172a; }
.probate-assets-article .quiz-btn { display: block; width: 100%; text-align: left; background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.875rem 1.25rem; margin-bottom: 0.75rem; cursor: pointer; font-size: 0.95rem; color: #334155; transition: all 0.2s; }
.probate-assets-article .quiz-btn:hover { border-color: #1e40af; background: #eff6ff; }
.probate-assets-article .quiz-btn.revealed-probate { border-color: #dc2626; background: #fef2f2; color: #991b1b; }
.probate-assets-article .quiz-btn.revealed-non-probate { border-color: #16a34a; background: #f0fdf4; color: #166534; }
.probate-assets-article .quiz-btn .result-tag { font-weight: 700; float: right; }
.probate-assets-article .faq-item { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.25rem 1.5rem; margin-bottom: 1rem; }
.probate-assets-article .faq-item h4 { font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; font-size: 1.05rem; }
.probate-assets-article .faq-item p { margin-bottom: 0; font-size: 0.95rem; }
.probate-assets-article .step-card { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1rem; }
.probate-assets-article .step-number { display: inline-flex; align-items: center; justify-content: center; background: #1e40af; color: white; width: 32px; height: 32px; border-radius: 50%; font-weight: 700; font-size: 0.85rem; flex-shrink: 0; }
.probate-assets-article .step-card p { margin-bottom: 0; }
.probate-assets-article .cta-box { background: linear-gradient(135deg, #2D3E50, #4A708B); border-radius: 12px; padding: 2rem; text-align: center; margin: 2rem 0; }
.probate-assets-article .cta-box h3 { color: white; margin-top: 0; }
.probate-assets-article .cta-box p { color: rgba(255,255,255,0.9); }
.probate-assets-article .cta-box a { display: inline-block; background: white; color: #2D3E50; padding: 0.75rem 2rem; border-radius: 9999px; font-weight: 700; text-decoration: none; margin-top: 0.5rem; }
.probate-assets-article .cta-box a:hover { background: #f1f5f9; }
</style>

<div class="probate-assets-article">

<p>One of the most common questions families face after a loved one passes away is whether every asset must go through probate court. The short answer: <strong>no</strong>. In Illinois, many assets pass directly to beneficiaries without any court involvement at all. Understanding which assets require probate &mdash; and which do not &mdash; can save your family significant time, money, and stress.</p>

<p>This guide explains exactly how Illinois probate works, which assets must go through court, and which ones bypass the process entirely. We will also walk you through practical strategies to keep more of your estate out of probate.</p>

<div class="toc">
<h3>In This Article</h3>
<ol>
<li><a href="#what-is-probate">What Is Probate in Illinois?</a></li>
<li><a href="#assets-that-require-probate">Assets That Must Go Through Probate</a></li>
<li><a href="#assets-that-skip-probate">Assets That Pass Outside of Court</a></li>
<li><a href="#interactive-classifier">Interactive: Does This Asset Go Through Probate?</a></li>
<li><a href="#how-to-avoid-probate">5 Ways to Keep Assets Out of Probate</a></li>
<li><a href="#small-estate-exception">The Small Estate Exception</a></li>
<li><a href="#common-mistakes">Common Mistakes Families Make</a></li>
<li><a href="#faqs">Frequently Asked Questions</a></li>
</ol>
</div>

<h2 id="what-is-probate">What Is Probate in Illinois?</h2>

<p>Probate is the court-supervised process of validating a deceased person\\''s will, paying debts and taxes, and distributing remaining assets to beneficiaries. In Illinois, probate cases are filed in the circuit court of the county where the decedent lived. The process typically takes <strong>6 to 12 months</strong> and involves court fees, attorney fees, and public filings.</p>

<p>Not every death triggers probate. If the decedent\\''s assets are structured properly, many (or even all) of them can transfer directly to the intended recipients without court involvement. The key factor is <strong>how the asset is titled</strong> and whether it has a <strong>beneficiary designation</strong> or <strong>transfer mechanism</strong> built in.</p>

<div class="highlight-box">
<p><strong>Key Principle:</strong> Probate applies to assets that are solely owned by the decedent with no built-in transfer mechanism. If an asset has a named beneficiary, a joint owner with survivorship rights, or is held in a trust, it generally skips probate entirely.</p>
</div>

<h2 id="assets-that-require-probate">Assets That Must Go Through Probate</h2>

<p>The following types of assets typically require probate in Illinois because they have no automatic transfer mechanism:</p>

<ul>
<li><strong>Real estate</strong> held solely in the decedent\\''s name (no joint tenancy, no trust, no TODI)</li>
<li><strong>Bank accounts</strong> without a payable-on-death (POD) designation or joint owner</li>
<li><strong>Investment accounts</strong> without a transfer-on-death (TOD) registration</li>
<li><strong>Vehicles</strong> titled solely in the decedent\\''s name</li>
<li><strong>Personal property</strong> such as jewelry, furniture, art, and collectibles</li>
<li><strong>Business interests</strong> with no succession plan or operating agreement</li>
</ul>

<p>If the total value of these solely-owned assets exceeds <strong>$100,000</strong>, a formal probate proceeding is required in Illinois. Estates under that threshold may qualify for a simplified <a href="/blog/how-to-complete-a-small-estate-affidavit-in-illinois/">small estate affidavit</a>.</p>

<h2 id="assets-that-skip-probate">Assets That Pass Outside of Court</h2>

<p>These assets bypass probate entirely and transfer directly to the designated person:</p>

<ul>
<li><strong>Life insurance policies</strong> with a named beneficiary (not the estate)</li>
<li><strong>Retirement accounts</strong> (401(k), IRA, pension) with a named beneficiary</li>
<li><strong>Joint bank accounts</strong> with right of survivorship</li>
<li><strong>Real estate in joint tenancy</strong> with right of survivorship</li>
<li><strong>Assets held in a <a href="/chicago-revocable-trusts-lawyer/">revocable living trust</a></strong></li>
<li><strong>Payable-on-death (POD)</strong> bank accounts</li>
<li><strong>Transfer-on-death (TOD)</strong> brokerage accounts</li>
<li><strong>Real estate with a <a href="/blog/how-transfer-on-death-instruments-work-in-illinois/">Transfer on Death Instrument (TODI)</a></strong></li>
</ul>

<div class="comparison-grid">
<div class="comparison-card probate">
<h4>Requires Probate</h4>
<ul>
<li>Solely-owned real estate</li>
<li>Personal bank accounts (no POD)</li>
<li>Solo brokerage accounts (no TOD)</li>
<li>Vehicles in decedent\\''s name only</li>
<li>Personal property and collectibles</li>
<li>Business interests without succession plans</li>
</ul>
</div>
<div class="comparison-card non-probate">
<h4>Skips Probate</h4>
<ul>
<li>Life insurance with beneficiary</li>
<li>Retirement accounts with beneficiary</li>
<li>Joint tenancy property</li>
<li>Trust-held assets</li>
<li>POD bank accounts</li>
<li>TOD brokerage accounts</li>
</ul>
</div>
</div>

<h2 id="interactive-classifier">Interactive: Does This Asset Go Through Probate?</h2>

<p>Click each asset below to reveal whether it typically requires probate in Illinois.</p>

<div class="quiz-container">
<h3>Asset Probate Classifier</h3>
<button class="quiz-btn" onclick="this.classList.toggle(\\''revealed-non-probate\\'');this.querySelector(\\''.result-tag\\'').textContent=this.classList.contains(\\''revealed-non-probate\\'')?\\''Skips Probate\\'':\\''Click to reveal\\''">
Life insurance policy naming your daughter as beneficiary <span class="result-tag">Click to reveal</span>
</button>
<button class="quiz-btn" onclick="this.classList.toggle(\\''revealed-probate\\'');this.querySelector(\\''.result-tag\\'').textContent=this.classList.contains(\\''revealed-probate\\'')?\\''Requires Probate\\'':\\''Click to reveal\\''">
Checking account in decedent\\''s name only, no POD <span class="result-tag">Click to reveal</span>
</button>
<button class="quiz-btn" onclick="this.classList.toggle(\\''revealed-non-probate\\'');this.querySelector(\\''.result-tag\\'').textContent=this.classList.contains(\\''revealed-non-probate\\'')?\\''Skips Probate\\'':\\''Click to reveal\\''">
Home held in a revocable living trust <span class="result-tag">Click to reveal</span>
</button>
<button class="quiz-btn" onclick="this.classList.toggle(\\''revealed-probate\\'');this.querySelector(\\''.result-tag\\'').textContent=this.classList.contains(\\''revealed-probate\\'')?\\''Requires Probate\\'':\\''Click to reveal\\''">
Car titled only in the decedent\\''s name <span class="result-tag">Click to reveal</span>
</button>
<button class="quiz-btn" onclick="this.classList.toggle(\\''revealed-non-probate\\'');this.querySelector(\\''.result-tag\\'').textContent=this.classList.contains(\\''revealed-non-probate\\'')?\\''Skips Probate\\'':\\''Click to reveal\\''">
401(k) with a named beneficiary <span class="result-tag">Click to reveal</span>
</button>
<button class="quiz-btn" onclick="this.classList.toggle(\\''revealed-probate\\'');this.querySelector(\\''.result-tag\\'').textContent=this.classList.contains(\\''revealed-probate\\'')?\\''Requires Probate\\'':\\''Click to reveal\\''">
Vacation home held solely in decedent\\''s name <span class="result-tag">Click to reveal</span>
</button>
<button class="quiz-btn" onclick="this.classList.toggle(\\''revealed-non-probate\\'');this.querySelector(\\''.result-tag\\'').textContent=this.classList.contains(\\''revealed-non-probate\\'')?\\''Skips Probate\\'':\\''Click to reveal\\''">
Joint savings account with surviving spouse <span class="result-tag">Click to reveal</span>
</button>
<button class="quiz-btn" onclick="this.classList.toggle(\\''revealed-non-probate\\'');this.querySelector(\\''.result-tag\\'').textContent=this.classList.contains(\\''revealed-non-probate\\'')?\\''Skips Probate\\'':\\''Click to reveal\\''">
House with a recorded Transfer on Death Instrument <span class="result-tag">Click to reveal</span>
</button>
</div>

<h2 id="how-to-avoid-probate">5 Ways to Keep Assets Out of Probate in Illinois</h2>

<p>Illinois law provides several tools that allow you to structure your assets so they pass automatically &mdash; no court required.</p>

<div class="step-card">
<span class="step-number">1</span>
<div>
<p><strong>Create a Revocable Living Trust</strong> &mdash; Transfer your home, bank accounts, and investments into a trust. Assets held in trust are distributed by the trustee, completely bypassing probate. This is the most comprehensive strategy. <a href="/chicago-revocable-trusts-lawyer/">Learn more about trusts</a>.</p>
</div>
</div>

<div class="step-card">
<span class="step-number">2</span>
<div>
<p><strong>Add Beneficiary Designations</strong> &mdash; Ensure every retirement account, life insurance policy, and annuity has a current named beneficiary. These assets transfer directly to the beneficiary regardless of what your will says.</p>
</div>
</div>

<div class="step-card">
<span class="step-number">3</span>
<div>
<p><strong>Use POD and TOD Designations</strong> &mdash; Add payable-on-death designations to bank accounts and transfer-on-death registrations to brokerage accounts. It is a simple form at your financial institution.</p>
</div>
</div>

<div class="step-card">
<span class="step-number">4</span>
<div>
<p><strong>Record a Transfer on Death Instrument (TODI)</strong> &mdash; Illinois allows homeowners to file a TODI that transfers real estate to a named beneficiary at death without probate. It is revocable during your lifetime. <a href="/blog/how-transfer-on-death-instruments-work-in-illinois/">Read our TODI guide</a>.</p>
</div>
</div>

<div class="step-card">
<span class="step-number">5</span>
<div>
<p><strong>Hold Property in Joint Tenancy</strong> &mdash; Real estate or bank accounts held in joint tenancy with right of survivorship pass automatically to the surviving owner. Be cautious with this approach, as it can create unintended tax and liability consequences.</p>
</div>
</div>

<div class="warning-box">
<p><strong>Important:</strong> Beneficiary designations override your will. If your will says "leave everything to my children" but your life insurance still names an ex-spouse, the ex-spouse receives the life insurance proceeds. Review all designations whenever your family situation changes.</p>
</div>

<h2 id="small-estate-exception">The Small Estate Exception</h2>

<p>Illinois provides a shortcut for smaller estates. If the total value of <strong>probate assets</strong> (not all assets, just those that would require probate) is <strong>$100,000 or less</strong>, the heirs may use a <strong>Small Estate Affidavit</strong> instead of formal probate. This is a sworn statement that allows them to collect assets from banks, employers, and other institutions without opening a court case.</p>

<p>The $100,000 threshold only counts assets that would otherwise go through probate. Joint accounts, trust assets, life insurance, and retirement accounts with beneficiaries do not count toward this total.</p>

<div class="highlight-box">
<p><strong>Example:</strong> A decedent had a $300,000 life insurance policy (beneficiary named), a $150,000 IRA (beneficiary named), a joint checking account with $50,000, and a personal savings account with $40,000 (no POD). Only the $40,000 savings account would count toward the $100,000 probate threshold &mdash; meaning the family could likely use a Small Estate Affidavit and avoid probate entirely.</p>
</div>

<h2 id="common-mistakes">Common Mistakes Families Make</h2>

<div class="info-card">
<h4>Naming "My Estate" as Beneficiary</h4>
<p>If you list your estate as the beneficiary of a life insurance policy or retirement account, those assets will be pulled into probate &mdash; defeating the purpose of the beneficiary designation. Always name a specific person or trust.</p>
</div>

<div class="info-card">
<h4>Forgetting to Update Beneficiaries After Divorce</h4>
<p>Illinois law automatically revokes an ex-spouse as a beneficiary on some instruments, but federal law (ERISA) can override this for employer-sponsored retirement plans. If your 401(k) still names your ex-spouse, they may receive the funds regardless of your divorce decree.</p>
</div>

<div class="info-card">
<h4>Assuming a Will Avoids Probate</h4>
<p>A common misconception. A will does <strong>not</strong> avoid probate &mdash; it actually <em>requires</em> probate to be enforced. The will tells the court how to distribute your probate assets, but the court process is still necessary. Only trusts and beneficiary designations bypass probate.</p>
</div>

<div class="info-card">
<h4>Not Funding the Trust</h4>
<p>Creating a trust is only half the job. If you never transfer your assets into the trust (a process called funding), those assets remain in your individual name and will still require probate. <a href="/blog/trust-funding-check-list/">See our trust funding checklist</a>.</p>
</div>

<h2 id="faqs">Frequently Asked Questions</h2>

<div class="faq-item">
<h4>Does a house always go through probate in Illinois?</h4>
<p>No. A house bypasses probate if it is held in joint tenancy, in a trust, or has a recorded Transfer on Death Instrument. Only homes titled solely in the decedent\\''s name without one of these mechanisms require probate.</p>
</div>

<div class="faq-item">
<h4>Do bank accounts go through probate?</h4>
<p>Only if they are solely owned with no payable-on-death (POD) designation and no joint owner. Adding a POD beneficiary at your bank is free and takes just a few minutes.</p>
</div>

<div class="faq-item">
<h4>What is the probate threshold in Illinois?</h4>
<p>If probate assets total $100,000 or less, heirs may use a Small Estate Affidavit instead of formal probate. Assets with beneficiary designations, joint ownership, or held in trust do not count toward this threshold.</p>
</div>

<div class="faq-item">
<h4>Can I avoid probate entirely in Illinois?</h4>
<p>Yes. With proper planning &mdash; using a combination of a revocable living trust, beneficiary designations, POD/TOD designations, and joint ownership &mdash; you can structure your estate so that no assets require probate.</p>
</div>

<div class="faq-item">
<h4>How long does probate take in Illinois?</h4>
<p>Formal probate typically takes 6 to 12 months. Complex estates with disputes can take longer. Summary probate for simpler estates may be completed in 2 to 3 months.</p>
</div>

<div class="cta-box">
<h3>Not Sure If Your Estate Plan Avoids Probate?</h3>
<p>We can review your current plan and identify gaps. Schedule a free consultation with attorney Mary Liberty.</p>
<a href="/book-consultation/">Book a Free Consultation</a>
</div>

</div>',
  'Mary Liberty',
  '2026-04-28T12:00:00Z',
  'Probate',
  'Not every asset goes through probate in Illinois. Learn which assets skip court, which require probate, and strategies to keep your estate out of the probate process. Interactive asset classifier included.',
  '[{"text": "How Transfer on Death Instruments Work in Illinois", "url": "/blog/how-transfer-on-death-instruments-work-in-illinois/"}, {"text": "How to Complete a Small Estate Affidavit in Illinois", "url": "/blog/how-to-complete-a-small-estate-affidavit-in-illinois/"}, {"text": "Trust Funding Checklist", "url": "/blog/trust-funding-check-list/"}, {"text": "When Is Probate Required in Illinois?", "url": "/blog/when-is-probate-required-in-illinois/"}]'::jsonb
)
ON CONFLICT (slug) DO NOTHING;
