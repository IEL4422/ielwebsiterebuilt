// Local, read-only responsive acceptance check for the homepage probate path.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const origin = process.env.HEADER_TEST_ORIGIN || 'http://127.0.0.1:3192';
assert(['127.0.0.1', 'localhost'].includes(new URL(origin).hostname));
(async () => {
  const browser = await chromium.launch();
  try {
    for (const width of [320, 390, 768, 1280, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      await page.route('**/*', route => {
        const request = route.request();
        return new URL(request.url()).origin === origin && request.method() === 'GET'
          ? route.continue() : route.abort();
      });
      await page.goto(origin + '/');
      await page.getByRole('heading', { name: /Plan for the future/ }).waitFor();
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow at ${width}`);
      for (const id of ['probate-path', 'planning-path', 'hero-call', 'probate-consultation', 'probate-details']) {
        const link = page.locator(`[data-home-cta="${id}"]`);
        assert.equal(await link.count(), 1);
        const box = await link.boundingBox();
        assert(box && box.x >= 0 && box.x + box.width <= width + 1, `${id} clipped at ${width}`);
        assert(await link.evaluate(el => el.scrollWidth <= el.clientWidth + 1), `${id} label clipped`);
      }
      assert.match(await page.locator('#probate-help').innerText(), /\$5,000/);
      assert.match(await page.locator('#probate-help').innerText(), /surety/i);
      fs.mkdirSync('artifacts/homepage', { recursive: true });
      await page.screenshot({ path: `artifacts/homepage/home-${width}.png` });
      await page.locator('#probate-help').screenshot({ path: `artifacts/homepage/probate-${width}.png` });
      await page.locator('[data-home-cta="probate-path"]').click();
      await page.waitForURL('**/chicago-probate-lawyer/');
      assert.equal(new URL(page.url()).pathname, '/chicago-probate-lawyer/');
      await page.close();
    }
    console.log('Homepage probate paths and layout pass at 320/390/768/1280/1440.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
