// Exercise the production router, not just the page component.
const assert = require('node:assert/strict');
const origin = process.env.HEADER_TEST_ORIGIN || 'http://127.0.0.1:3192';
assert(['127.0.0.1', 'localhost'].includes(new URL(origin).hostname), 'Local fixture server required');

async function main() {
  const hub = await (await fetch(`${origin}/guardianship/`)).text();
  const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
  const paths = [...new Set([...hub.matchAll(/href="(\/guardianship\/[^"/]+-county\/)"/g)].map(match => match[1]))];
  assert.equal(paths.length, 6, 'All six county links must remain available');
  for (const path of paths) {
    const response = await fetch(`${origin}${path}`, { redirect: 'manual' });
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const canonical = `https://www.illinoisestatelaw.com${path}`;
    assert(sitemap.includes(canonical), `Sitemap includes ${path}`);
    assert(html.includes(`<link rel="canonical" href="${canonical}"`), `Canonical matches ${path}`);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
    assert(schemas.some(schema => schema['@type'] === 'FAQPage' && schema.mainEntity.length > 0), `FAQ schema present: ${path}`);
    assert(schemas.some(schema => schema['@type'] === 'LegalService' && schema.url === canonical), `Service schema matches ${path}`);
    console.log(`PASS ${path}`);
  }
  for (const path of ['/guardianship/cook/', '/guardianship/unknown-county/', '/guardianship/cook-county-county/']) {
    assert.equal((await fetch(`${origin}${path}`, { redirect: 'manual' })).status, 404, path);
  }
  console.log('All six county routes, canonical URLs, sitemap entries, schemas and unknown-route 404s verified.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
