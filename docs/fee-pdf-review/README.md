# October 5 prospective fee guide

Mary confirmed at 2026-10-05 15:45 UTC that the $5,000 base applies to both contested probate and contested guardianship, with previously approved litigation fees added on top. No offset is authorized. Ordinary uncontested guardianship has only the annual-report additional firm fee; ordinary opening, administration and closing remain included.

The versioned public PDF is `public/downloads/probate-guardianship-additional-flat-fees-2026-10-05.pdf`. Identical bytes were saved to Library. SHA-256: `50724dfe45ce03f88ade313d42ad6666c27eb16b18f5087b1175cc944ba9d5c4`. It is four Letter pages with grayscale typography, live text, distinct service tables, additive examples and no-stacking / specific-addendum / refund protections. The draft PR does not publish the asset.

The $750 personal Annual Report on the Ward fee matches website and StaffPortal. Accounting/bundle figures conflict: website $2,500/$3,000; legacy StaffPortal $1,500/$1,950, marked `needs_confirmation`. Those figures were not changed or silently reconciled, and are excluded from this PDF.

Rebuild guide HTML with `node scripts/build-additional-fee-guide.mjs`. With Playwright installed, explicitly regenerate the PDF with `node scripts/print-additional-fee-guide.cjs` (optional `CHROMIUM_EXECUTABLE_PATH`). Regeneration changes PDF metadata/bytes; replace the existing Library item when updating rather than creating another copy. Deployment serves the committed PDF and does not regenerate it.

Preview evidence: `page-1.png` through `page-4.png` and `guide-mobile.png`. All four pages were inspected; content ends above the footer. The 390px HTML view has no horizontal overflow. Tests cover the 21-item menu, additive amounts, ordinary-scope protections, schema/FAQ copy and links in HTML/print/llms.

Parent owns independent review, merge and deployment. No real signatures, payments, client messages or production writes were used.
