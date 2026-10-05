// Read-only production-build fixture. Run with the local Next server already up:
// HEADER_TEST_ORIGIN=http://127.0.0.1:3192 node scripts/verify-header-layout.cjs
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const origin = process.env.HEADER_TEST_ORIGIN || 'http://127.0.0.1:3192';
assert(['127.0.0.1', 'localhost'].includes(new URL(origin).hostname), 'Use a local fixture server');
(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH, args: ['--no-sandbox'] } : {});
  try {
    for (const width of [390, 1165, 1180, 1280, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.route('**/*', route => {
        const url = new URL(route.request().url());
        if (url.origin === origin && route.request().method() === 'GET') return route.continue();
        // Preserve the declared logo aspect ratio without a third-party request.
        if (url.hostname === 'i.imgur.com') return route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="120"><rect width="240" height="120" fill="#547298"/></svg>' });
        return route.abort();
      });
      await page.goto(origin + '/flat-fee-vs-hourly-probate-illinois/');
      // Exercise a sans-serif fallback as well as the page's blocked-webfont fallback.
      for (const font of [null, 'Arial, sans-serif']) {
        if (font) await page.addStyleTag({ content: `body { font-family: ${font} !important; }` });
        const header = page.locator('header:visible');
        assert.equal(await header.count(), 1, `one header at ${width}`);
        const start = header.getByRole('link', { name: width < 1280 ? 'Get Started' : 'Get Started Online', exact: true });
        assert(await start.isVisible(), `visible start link at ${width}`);
        const box = await start.boundingBox();
        assert(box.x >= 0 && box.x + box.width <= width, `unclipped start link at ${width}`);
        assert(await start.evaluate(el => el.scrollWidth <= el.clientWidth + 1), `unclipped label at ${width}`);
        const links = await header.locator('a:visible, button:visible').evaluateAll(elements => elements.map(el => {
          const { x, y, right, bottom } = el.getBoundingClientRect(); return { x, y, right, bottom };
        }));
        for (let i = 0; i < links.length; i++) for (let j = i + 1; j < links.length; j++) {
          const a = links[i], b = links[j];
          assert(!(Math.min(a.right, b.right) - Math.max(a.x, b.x) > 1 && Math.min(a.bottom, b.bottom) - Math.max(a.y, b.y) > 1), `header controls overlap at ${width}`);
        }
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `document overflow at ${width}`);
      }
      if (width < 1280) {
        await page.getByRole('button', { name: 'Toggle menu' }).click();
        assert(await page.locator('header:visible').getByRole('link', { name: 'Get Started Online', exact: true }).isVisible());
      }
      if (process.env.HEADER_SCREENSHOT_DIR) {
        fs.mkdirSync(process.env.HEADER_SCREENSHOT_DIR, { recursive: true });
        await page.screenshot({ path: path.join(process.env.HEADER_SCREENSHOT_DIR, `header-${width}.png`) });
      }
      assert.deepEqual(errors, [], `page errors at ${width}`);
      await page.close();
    }
    console.log('Header passes 390/1165/1180/1280/1440: visible, unclipped, non-overlapping controls; no document overflow or external requests.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
