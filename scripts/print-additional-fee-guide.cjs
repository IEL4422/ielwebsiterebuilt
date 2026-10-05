/** Explicit release-artifact step; never runs during deployment or prebuild.
 * Install Playwright locally, generate the HTML, then run this script.
 * CHROMIUM_EXECUTABLE_PATH can select an existing Chromium installation.
 */
const { chromium } = require('playwright');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
(async () => {
  const root = resolve(__dirname, '..');
  const browser = await chromium.launch({ headless: true,
    ...(process.env.CHROMIUM_EXECUTABLE_PATH ? { executablePath: process.env.CHROMIUM_EXECUTABLE_PATH } : {}) });
  try {
    const page = await browser.newPage();
    await page.setContent(readFileSync(resolve(root, 'docs/fee-pdf-review/additional-fee-guide.html'), 'utf8'));
    const overlaps = await page.locator('.page').evaluateAll(pages => pages.some(p =>
      p.querySelector('footer').previousElementSibling.getBoundingClientRect().bottom >= p.querySelector('footer').getBoundingClientRect().top));
    if (overlaps) throw new Error('Fee guide content overlaps a footer');
    await page.pdf({ path: resolve(root, 'public/downloads/probate-guardianship-additional-flat-fees-2026-10-05.pdf'),
      format: 'Letter', printBackground: true, preferCSSPageSize: true });
  } finally { await browser.close(); }
})();
