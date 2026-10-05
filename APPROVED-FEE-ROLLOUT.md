# Prospective fixed-fee menu — draft

Mary approved the 21-item additional/contested fee menu on 2026-10-04. `lib/fee-scope-policy.json` matches the StaffPortal draft source. Pricing, public service details, practice copy, FAQs, service finder and the generated printable sheet now reflect fixed fees and attorney screening. Each menu link goes to a screened service detail, not a charge. Existing signed engagements and already included work/expenses are preserved; Bond remains Real Estate.

The fee menu is covered by server-render tests for all 21 selections, exact prices/units/variants, screening links and printable-sheet coverage. A pre-existing homepage outage test asserted a removed carousel title; it now checks an actual existing fallback testimonial without changing homepage content. Legacy hourly constants remain for historical/reference consumers; prospective surfaces use the approved fixed-fee policy.

Separate StaffPortal #819 owns specific addendum acceptance, matter-bound invoices, client-portal visibility and prospective CSA acknowledgments. The website does not assert those held runtime changes are deployed. Parent owns review, merge and deployment; no client data or production configuration was changed.

## Independent-review corrections

The first build evidence did not exercise npm's prebuild lifecycle and was insufficient. The corrected release is checked with `npm test`, `npm run typecheck`, and **`npm run build`**, which runs `node scripts/build-pricing-sheet.mjs` before `next build`. CI now runs that same production command and checks that generation leaves the committed sheet unchanged. Emergency add-on is read directly from the approved JSON (5000; 10000 with the existing adult case). Termination/restoration is 2500 uncontested. Extraordinary petitions are 3500 only for screened work outside retained scope; routine/included compliance prices are preserved.

Reviewed visible articles, location FAQs, shared FAQ/schema sources, metadata, blog summaries, and the printable template. Removed surviving prospective hourly/retainer-conversion promises in contested and adult/minor guardianship, county probate, city estate-planning FAQ and probate comparison metadata. General comparisons with other attorneys' hourly models and historical pricing constants are not offers for new IEL engagements.
