const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const base = process.env.BASE_URL || 'http://127.0.0.1:3192';
const expected = [
  ['Sale Representation', '$750'],
  ['For Sale By Owner (FSBO)', '$1,500'],
  ['Bond in Lieu of Probate', '$1,500'],
];
const retired = [
  'Buyer Representation',
  'Residential Closing (Buyer or Seller)',
  'Multi-Unit or Investment Closing',
  'Estate, Trust, or Nonstandard Title Closing',
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const width of [390, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));

      await page.goto(`${base}/services-pricing/#realestate`, { waitUntil: 'domcontentloaded' });
      const section = page.locator('#realestate');
      await section.getByRole('heading', { name: 'Real Estate & Deeds' }).waitFor();
      const sectionText = await section.textContent();
      for (const [name, price] of expected) {
        assert(sectionText.includes(name), `${name} appears in the services-pricing real-estate section`);
        const card = section.locator('div.rounded-2xl').filter({ hasText: name }).first();
        assert.match(await card.textContent(), new RegExp(price.replace('$', '\\$').replace(',', ',')));
        assert.equal(await card.getByRole('link', { name: 'Get Started' }).count(), 1, `${name} has a Get Started link`);
      }
      for (const name of retired) assert(!sectionText.includes(name), `${name} is retired`);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `services-pricing overflow at ${width}px`);

      await page.goto(`${base}/chicago-real-estate-closings-lawyer/`, { waitUntil: 'domcontentloaded' });
      for (const [name, price] of expected) {
        const card = page.locator('article').filter({ hasText: name }).first();
        assert.match(await card.textContent(), new RegExp(price.replace('$', '\\$').replace(',', ',')));
      }
      const body = await page.locator('body').textContent();
      for (const name of retired) assert(!body.includes(name), `${name} is absent from the real-estate landing page`);
      assert.match(body, /only asset requiring administration is Illinois real estate/i);
      assert.match(body, /do not market the property, show it, find a buyer/i);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `real-estate landing overflow at ${width}px`);
      assert.deepEqual(errors, []);
      await page.close();
      console.log(`Real-estate pricing verified at ${width}px: ${base}`);
    }
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
