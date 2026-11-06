# Local website pricing review — publication held

Repository: IEL4422/ielwebsiterebuilt. Base `1912ab9`; branch `codex/local-pricing-nov06`. No repository or workspace AGENTS.md / .agents skill instructions were found for this repository. README contains only the project name; package scripts and CI define verification. Working tree was initially clean. Recent PRs #64 and #63 are reflected in this base. Connector PR search returned historical/open-looking #62/#61/#58/#10 despite parent reporting no open PRs; no remote state was changed, and no pricing overlap was identified in those returned items.

## Implemented locally

- Standard Probate: $5,000 -> $6,500 in the canonical pricing source, propagating to service cards, duplicate catalog components, recommendations, probate pages, FAQ/schema, comparison articles and generated print sheet. Updated manually maintained llms.txt.
- Adult and minor uncontested guardianship: $5,000 remains the amount but becomes a retainer with hourly billing, not a fixed purchase price. Separate GUARDIANSHIP_RETAINER constants replace the old flat-fee principal. Shared service entries retain consultation routing and have no fixedPrice. Pages, county content, metadata/schema, recommendations, print sheet and FAQs describe the retainer. No hourly rate was invented or published. Existing court-approval disclosure remains.
- Trust Administration Consulting: $5,000 -> $3,500/year. Existing ten-hour annual scope and separate written engagement beyond ten hours are retained. No automatic renewal or subscription billing was introduced.
- Removed rendered firm-wide “100% flat-fee” biography/badge claims. Most changed blog paths are this single wording correction; scraped unused reference copies remain historical.
- Price descriptions can wrap in the service table and intake review card.

## Required decisions before publication

1. **Contested policy conflict:** parent independently verified StaffPortal's November 4 policy `2026-11-04-base-plus-events`, approved 2026-11-04T22:00:00Z, blob `3543484e305c8a91cfa99a26aacc9c5db0195d8f`, PR #1024 / merge `7d208919f0779f2fe5fdc28792b53d1583ed11d7`. It has `contested_base_amount: null` and no automatic additional initial contested fee. Website still advertises a $5,000 initial contested scope and includes it in the event menu. All those amounts and claims are intentionally unchanged pending parent's direction. See `contested-references.txt` for source paths/lines, including FAQ/schema sources, constants, menu, recommendations, llms and print sheet. Shared CONTESTED_FEE_NOTE and CONVERSION_CLAUSE in lib/pricing.ts also contain this claim. This branch is not release-ready until that discrepancy is resolved.
2. Parent's independent comparison found the other **20 event dollar amounts and Appeal quote mode match** current StaffPortal. This is evidence of consistency, not approval of the extra initial fee. Portal-only copy-will admission ($6,500), supervised administration ($3,500), emergency asset preservation ($5,000), and custom trust-validity/separate enforcement are coverage gaps for review; none added here.
3. **Large Estate Probate is now $6,500 + 0.5% of estate value, with the existing eligibility threshold of $4 million.** The base was aligned with StaffPortal under the subsequent direction. The percentage still applies to estate value under the current wording, not just the excess. Reopening, partial probate, heir/spousal representation, small estate administration and bond-in-lieu prices are unchanged.
4. **Guardianship scope:** current contested guardianship terms still use the separate flat-fee event policy; confirm whether the new hourly directive includes contested work. Emergency add-on remains $2,500, presented as retainer plus add-on initially, not a fixed total fee; confirm whether a separate emergency fee survives the hourly model. Existing filing-fee inclusions, GAL/bond exclusions and $750/year personal report remain; confirm replenishment, engagement rate schedules and treatment of existing clients in StaffPortal. No client records changed.
5. Parent's legal review found no statewide mandatory hourly-billing rule. Copy describes firm policy and does not say “required by the state.”
6. Annual accounting/bundle mismatch in historical notes remains unresolved: website $2,500/$3,000 versus legacy portal $1,500/$1,950. These constants and the public annual-report fee were not changed.

## Downloads and checkout audit

- Current pricing download is `/pricing-sheet.html`, whose button invokes browser print/save-as-PDF; regenerated successfully from its template and pricing constants. No PDF/DOC/DOCX exists under public in this checkout. No live public link to the October guide was found in current components, llms or print template. No live-site URL was requested during this local-only task.
- `docs/fee-pdf-review/README.md` claims a versioned public PDF; that asset is absent. `draft-config.json:5-6` and the single-line `additional-fee-guide.html:1` retain October 5 $5,000 contested-base/additive examples and ordinary-guardianship fixed-scope terms. Preserved as historical evidence; do not republish or regenerate them as current guidance without reconciling policy.
- `app/recommended-service/page.tsx` active purchase handler routes to `/start-online/`. Guardianship and trust consulting recommendations require consultation; the start-online review routes consultation-required services to booking. Standard probate proceeds to the external StaffPortal intake. No active local form path sets `showClientInfo` true.
- Dormant agreement/payment JSX remains in recommended-service (including flat-fee agreement terms). Its payment handler references Supabase `create-checkout-session`. That edge function takes caller-supplied price (`index.ts:33,50`) and creates one-time payment sessions. No live invocation, deployment inspection, payment or intake transaction was attempted. Reachability of the deployed edge endpoint is unverified; this source audit does not establish that it is disabled. Security remediation and portal retainer accounting are separate scope.
- Estate-tax calculator contains tax calculations, not these service fees, and is unchanged.

## Validation

- Final Node 18.20.8 production build passed (155/155 static pages). Existing Supabase dynamic-dependency warnings remain; Next build skips lint by repository configuration.
- Full Vitest 1.6.1 suite: 84 tests / 15 files passed, including new retainer/consultation/catalog/schema/print assertions.
- TypeScript check passed.
- Public fee-copy audit passed over 150 assets/rendered pages including metadata/JSON-LD. Removed only its now-inapplicable prohibition on the exact phrase "billed hourly against a retainer"; other checks remain.
- Local production HTTP checks passed for all six county routes, canonical URLs, sitemap, FAQ/LegalService schemas and invalid-route 404s. Price assertions passed for adult/minor/standard-probate/trust-consulting intake review URLs, Services & Pricing, print sheet and adult landing page.
- Deterministic print-sheet regeneration and git diff whitespace check passed. All contested amounts, custom appeal quote and contested-fee note compare byte-for-byte equal to base.
- Browser visual/mobile screenshots and real-device checks were not run. No live intake, checkout, email, charge, push, PR, merge or deployment occurred.

 Lint comparison: both original base and changed checkout report 777 errors / 50 warnings, primarily unescaped JSX entities plus a missing eslint rule in lib/mongodb.ts. Diagnostic message multisets match exactly after ignoring changed line numbers. Full lint is not green; no bulk lint cleanup included. Dependencies/lockfile unchanged. Test tools installed separately under /tmp, using the CI-pinned Vitest 1.6.1.

## Draft publication follow-up

Mary subsequently authorized PR creation and deployment after checks and release decisions. Rebased on main `73b250e`; corrected the new young-family article's repeated firm-wide flat-fee claim. Existing-client agreements, payment flows and pending fee amounts remain unchanged. Hosted validation is tracked on the draft PR. Deployment remains held for the policy decisions above.

## Confirmed guardianship hourly rates

Mary subsequently approved attorney 325/hour and paralegal 150/hour for new adult and minor guardianship matters. Dedicated GUARDIANSHIP_RATES constants and shared copy now show those rates on service/intake descriptions, primary guardianship pages, FAQs/schema, recommendations and the generated print sheet. Other RATES values and signed agreements remain unchanged. Rates are no longer a release blocker; the separate initial contested charge and annual reporting decisions remain pending.

## Large-estate alignment

Aligned the large-estate base to 6,500 to match the StaffPortal rollout. Existing 0.5% provision, threshold, unrelated service fees, initial contested charge and annual-reporting amounts remain unchanged.
