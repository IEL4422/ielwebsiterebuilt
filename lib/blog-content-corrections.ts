// Presentation-only corrections: preserve stored CMS content and publication dates.
export const ASSETS_PROBATE_SLUG = 'do-all-assets-go-through-probate-in-illinois';
export const ASSETS_CORRECTED_ON = '2026-10-05';
const eligibility = 'For deaths on or after August 15, 2025, the small estate affidavit limit is $150,000 in qualifying personal property, excluding motor vehicles registered with the Illinois Secretary of State. Earlier deaths remain subject to the prior $100,000 limit. The affidavit does not transfer real estate, and all statutory conditions must be met, including no outstanding letters of office and no contemplated or pending petition for letters.';
export const SMALL_ESTATE_SOURCES = '<p>Sources: <a href="https://www.ilga.gov/legislation/PublicActs/View/104-0346">Public Act 104-0346 (effective August 15, 2025)</a> and <a href="https://www.ilga.gov/documents/legislation/ilcs/documents/075500050K25-1.htm">755 ILCS 5/25-1</a>. The vehicle clarification in <a href="https://www.ilga.gov/legislation/PublicActs/View/104-0624">Public Act 104-0624</a> takes effect January 1, 2027; it is not the rule in effect on this update date.</p>';

export function correctedBlogContent(slug: string, content: string) {
  // The page hero supplies the sole H1, including for imported CMS headings.
  let html = content.replace(/<h1(\s[^>]*)?>/gi, '<h2$1>').replace(/<\/h1\s*>/gi, '</h2>');
  if (slug !== ASSETS_PROBATE_SLUG) return html;
  html = html.replace(/<p\b[^>]*>[\s\S]*?<\/p>/gi, paragraph => {
    if (!paragraph.includes('$100,000')) return paragraph;
    if (paragraph.includes('If the total value of these solely-owned')) return `<p>Whether court administration is needed depends on the asset, ownership and available transfer procedure—not one dollar threshold for all property. ${eligibility}</p>`;
    if (paragraph.includes('Illinois provides a shortcut')) return `<p>${eligibility}</p>`;
    if (paragraph.includes('threshold only counts')) return '<p>Count personal property passing under the will or intestacy, not assets that validly pass to a surviving beneficiary or owner outside the estate. Review account ownership and beneficiary records before using an affidavit.</p>';
    if (paragraph.includes('Example:')) return '<p><strong>Example:</strong> For a death on or after August 15, 2025, a $40,000 individual savings account without a POD beneficiary can fall within the $150,000 personal-property limit. Life insurance and an IRA payable to living named beneficiaries, and a joint account with valid survivorship rights, generally pass separately. Other assets, debts, real estate and pending proceedings must still be checked.</p>';
    if (paragraph.includes('If probate assets total')) return `<p>${eligibility}</p>`;
    return paragraph;
  });
  // A solely titled car is not automatically a court-probate asset.
  html = html.replace(/<button\b[^>]*>[\s\S]*?<\/button>/gi, button => button.includes('Car titled only') ? '<div class="info-card"><h4>Car titled only in the decedent’s name</h4><p>A vehicle-specific affidavit or title-transfer procedure may be available. Check the death date, title and Secretary of State requirements; sole ownership alone does not require court probate.</p></div>' : button);
  html = html.replace(/<li>Vehicles titled solely[^<]*<\/li>/gi, '<li>Vehicles titled solely in the decedent’s name: review available affidavit/title-transfer procedures</li>')
    .replace(/<li>Vehicles in decedent[^<]*<\/li>/gi, '<li>Vehicles: check affidavit/title-transfer eligibility</li>');
  return html + SMALL_ESTATE_SOURCES;
}
