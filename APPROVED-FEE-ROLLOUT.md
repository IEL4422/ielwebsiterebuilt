# Prospective fixed-fee menu — draft

Mary approved the 21-item additional/contested fee menu on 2026-10-04. `lib/fee-scope-policy.json` matches the StaffPortal draft source. Pricing, public service details, practice copy, FAQs, service finder and the generated printable sheet now reflect fixed fees and attorney screening. Each menu link goes to a screened service detail, not a charge. Existing signed engagements and already included work/expenses are preserved; Bond remains Real Estate.

The fee menu is covered by server-render tests for all 21 selections, exact prices/units/variants, screening links and printable-sheet coverage. A pre-existing homepage outage test asserted a removed carousel title; it now checks an actual existing fallback testimonial without changing homepage content. Legacy hourly constants remain for historical/reference consumers; prospective surfaces use the approved fixed-fee policy.

Separate StaffPortal #819 owns specific addendum acceptance, matter-bound invoices, client-portal visibility and prospective CSA acknowledgments. The website does not assert those held runtime changes are deployed. Parent owns review, merge and deployment; no client data or production configuration was changed.
