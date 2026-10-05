# Prospective annual-report scope correction — 2026-10-05

Based on website main da0d36c4323227bb80189e3e1b7e6d0aeb179b32. Parent's fresh native review identified four remaining $3,000/year bundled accounting advertisements: the compact contested/ongoing card, full-price summary, adult guardianship annual card, and compliance paragraph.

All four now either describe the approved contested package alone or show $750/year preparation and filing of the personal Annual Report on the Ward. Shared catalog and recommendation selections use the existing StaffPortal `annual-report-ward` identifier/name, retain required attorney review, and explicitly exclude estate accounting from that annual-report fee. County offerings, shared FAQs/FAQ schema, and the printable pricing sheet use the same prospective scope. Ordinary administration/closing/termination stay included. Statutory reporting duties and existing signed engagements remain intact.

No accounting price was selected or changed. Historical website constants remain $2,500 accounting / $3,000 bundle; no database, saved response, signed engagement, Portal catalog, payment integration, or dashboard was changed. The former public bundle selection is removed, rather than repurposing its identifier. The $750 annual-report service is separately named and identified.

The existing approved four-page PDF is unchanged (SHA256 `50724dfe45ce03f88ade313d42ad6666c27eb16b18f5087b1175cc944ba9d5c4`).

## Verification

- Full test suite: 49 tests / 9 files pass. Includes rendered cards, summary, shared FAQ JSON-LD, personal-report selection, no bundled scope, unchanged historical constants and exact PDF hash.
- Typecheck and production build pass.
- Production fee-copy audit: 125 assets/rendered pages pass, including schema/metadata; obsolete bundle copy is now a build-audit failure.
- Local production Chromium at 390px and 1280px: pricing, guardianship, and selected personal-report review all show $750, no obsolete bundled offer and no page-level horizontal overflow. Screenshots alongside this file. Full-page captures retained separately in the execution workspace.
- Browser requests were restricted to the local server. No purchase, charge, acceptance, client communication, production mutation, or end-to-end production transaction was performed.

Merge/deploy and fresh public verification remain with the parent.
