# Illinois statewide / Chicago and Cook County SEO review — October 5, 2026

Base: website main `4df0acafddf7055b537676293c10960f47254050`. No new URLs, city pages, redirects, office listings, GBP edits, analytics changes or provider access.

## Content and factual decisions

- Homepage hero still says “We Help Illinois Families” and retains its accessible Illinois-wide heading. Desktop artwork is re-encoded from the original 1,318,131-byte PNG to responsive WebP (89,874 bytes at 1584px; 45,032 bytes at 1024px; 93.2% and 96.6% smaller); the mobile artwork, layout and opacity remain unchanged. Browser selects a single picture source rather than fetching two CSS-hidden images. No global Next image configuration change.
- `/chicago-probate-lawyer/`: Chicago/Cook County title and H1 with explicit statewide reach; consultation preparation, existing service choices and contextual Cook County / article links. Existing probate prices and contested fee terms unchanged.
- `/estate-planning/`: Chicago/Cook County and statewide intent; package descriptions and prices come directly from the existing catalog. Added process and preparation guidance, including asset titling, beneficiary coordination and trust funding. No blanket asset-protection promise for revocable trusts.
- Visible practice-page attorney summaries reuse `ATTORNEYS` in `lib/seo.ts`, corroborated by existing `/about/` bios. No new credentials, review claim or attorney-review date. The assets/probate article retains a visible original-author credit for Mary, verified in its committed source migration. Other CMS pages identify the publishing firm rather than assigning every database article to Mary without an individual author check.
- `/areas-we-serve/`: counties are examples/local resources within statewide probate coverage. Footer and repeated office claims now use statewide virtual availability and in-person meetings by arrangement. Existing addresses and business hours remain unchanged.
- Parent's fresh Google Maps check found 38 reviews, contradicting 50/50+ claims. Removed the unsupported count rather than hardcoding a new dynamic number. Retained the verified 5.0 rating and genuine testimonial text. No new network dependency on homepage rendering.

## Small-estate content sources

Official primary sources checked October 5, 2026:

1. [Public Act 104-0346](https://www.ilga.gov/legislation/PublicActs/View/104-0346): effective August 15, 2025; subsection (j) ties applicability to decedent date of death. $150,000 qualifying personal property, excluding Secretary-of-State-registered motor vehicles; no outstanding letters or contemplated/pending petition. Prior $100,000 context retained for earlier deaths.
2. [755 ILCS 5/25-1](https://www.ilga.gov/documents/legislation/ilcs/documents/075500050K25-1.htm): small-estate affidavit provision. The enacted 104-0346 text controls the current-rule explanation; a compiled page can include future amendments.
3. [Public Act 104-0624](https://www.ilga.gov/legislation/PublicActs/View/104-0624): vehicle clarification effective January 1, 2027, explicitly not treated as current law.

The existing assets/probate CMS article contains five overbroad $100,000 passages and a misleading automatic-probate result for a solely titled vehicle. A slug-scoped presentation correction fixes those passages and the vehicle result, adds official links and an actual content-update date. It does not rewrite stored CMS text or old migration files. Other articles retain their historical $100,000 language. This is not a claim of human attorney review.

## Indexing and dates

- Sitemap now reads published MongoDB blog posts using the same publication-date policy as the existing blog API. Rejects future/invalid dates and malformed slugs; deduplicates URLs.
- The two confirmed published CMS articles (assets/probate and administrator priority) remain in the sitemap during outages. Existing static guide fallbacks remain.
- No build/request timestamps are used as lastmod. Publication dates are no longer mislabeled as modification dates. A substantive `contentUpdatedAt` may supply a CMS lastmod; otherwise it is omitted. The corrected article carries the actual October 5 content-update date.
- One H1 for database articles: the existing hero supplies it; duplicate title removed and imported body H1s demoted to H2. Canonicals and indexing settings retained. FAQ markup carries no rich-result promise.

## Remaining fact decisions

Mary should confirm whether the addresses already listed at `/locations/` are staffed offices or appointment-only meeting facilities and which remain available. This PR neither adds nor removes addresses or changes the map/business profile. Parent is separately awaiting confirmation of website 5:00 PM versus Maps 5:30 PM closing time; hours are unchanged.

## Verification

Local verification: 54 tests across 10 files, TypeScript check and production build pass. Fee-copy audit passes across 125 public assets/rendered pages. Chromium at 390px and 1280px passes one-H1, no-overflow, unchanged Illinois hero and correct responsive-image selection checks. See PR for exact-head CI results. Local tests use mocked database rows and failures; browser QA uses local production pages and an isolated CMS fixture. No production database writes, messages, payments, signatures or real consultations. Screenshots are local fixtures, not proof of deployment.

Screenshots use blocked third-party fonts/images and analytics (some external artwork/logo may be absent). Package-section crops hide the sticky header only while capturing the content. Normal-page screenshots retain the header.
