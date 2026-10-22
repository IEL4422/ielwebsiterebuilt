const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const base = process.env.BASE_URL || 'http://127.0.0.1:3192';
const services = [
  {
    name: 'Medicaid Asset Protection Trust',
    price: '$6,500',
    id: 'medicaid-asset-protection-trust',
    scope: /five-year look-back/i,
  },
  {
    name: 'Irrevocable Life Insurance Trust (ILIT)',
    price: '$5,500',
    id: 'irrevocable-life-insurance-trust',
    scope: /Crummey withdrawal-notice/i,
  },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const width of [390, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(`${base}/services-pricing/#a-la-carte`, { waitUntil: 'domcontentloaded' });

      for (const service of services) {
        const card = page.locator('div.rounded-xl').filter({ hasText: service.name }).first();
        const text = await card.textContent();
        assert(text.includes(service.price), `${service.name} shows ${service.price}`);
        assert.match(text, service.scope, `${service.name} explains its standalone scope`);
        const start = card.getByRole('link', { name: 'Get Started' });
        assert.equal(await start.count(), 1, `${service.name} has one Get Started link`);
        assert.match(await start.getAttribute('href'), new RegExp(`service=${service.id}`));
      }

      assert.equal(await page.getByText('Irrevocable Trust', { exact: true }).count(), 0, 'generic trust card is retired');
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `no overflow at ${width}px`);
      assert.deepEqual(errors, []);
      await page.close();
      console.log(`Standalone advanced-trust pricing verified at ${width}px: ${base}`);
    }
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
