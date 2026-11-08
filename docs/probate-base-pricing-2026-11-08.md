# Probate base pricing, November 8, 2026

- Standard Probate: $5,500 for new prospective purchases.
- Contested Probate: $5,500 base for its initial written scope. Existing consultation-only behavior is preserved. No numeric purchase price or checkout activation was added.
- Large Estate Probate remains $6,500 plus its existing conditional percentage. Guardianship, event amounts, and other services are unchanged.
- Existing signed agreements are honored; no saved purchases, invoices, payment sessions, or agreements are migrated.
- The initial-contested-scope event fee is not added again for work covered by the base fee. The existing event schedule is unchanged.

## Verification

- 100 tests across 19 test files passed locally, including four new prospective-price and no-duplicate-scope tests.
- Pricing-sheet generation and git diff whitespace checks passed.
- Full typecheck/build and existing CI must pass before merge. Local lint reports an existing missing @typescript-eslint/no-var-requires rule in unchanged lib/mongodb.ts.
- No live purchase, payment, signed agreement change, merge, or deployment performed.
