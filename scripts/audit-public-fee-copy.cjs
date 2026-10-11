// Scan public text assets and production-rendered pages (including SEO/JSON-LD).
// Specific obsolete claims only: general industry discussion and legacy signed
// engagement references are not prospective hourly promises.
const fs = require('node:fs');
const paths = [];
function visit(dir, pattern) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const name = `${dir}/${item.name}`;
    if (item.isDirectory()) visit(name, pattern);
    else if (pattern.test(name)) paths.push(name);
  }
}
visit('public', /\.(txt|html|xml|json|md|csv)$/);
visit('.next/server/app', /\.html$/);
if (paths.length < 5) throw new Error('Production-rendered pages required');
const obsolete = /Guardianship Compliance Plan|Annual estate accounting support|Annual report and estate-accounting support|billed hourly against a retainer|a matter converts to hourly|no honest fixed price can be quoted|Costs and expenses are billable to the client in these matters|time is billed as worked|All costs — bond, service, transcripts|\$5,000 add-on.{0,60}\$10,000|\$50,000 standard will contest|\$25,000 standard contested guardianship|probate-guardianship-additional-flat-fees/i;
const failed = paths.filter(name => obsolete.test(fs.readFileSync(name, 'utf8').replace(/<!--.*?-->/gs, '')));
if (failed.length) throw new Error(`Obsolete prospective fee copy: ${failed.join(', ')}`);
console.log(`Public fee-copy audit passed: ${paths.length} public text assets / rendered HTML pages, including metadata and JSON-LD.`);
