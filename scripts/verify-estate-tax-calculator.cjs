const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const base = process.env.BASE_URL || 'http://127.0.0.1:3192';

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const width of [390, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(`${base}/illinois-estate-tax-calculator/`, { waitUntil: 'domcontentloaded' });
      await page.getByRole('heading', { name: 'Why $456,071 instead of $518,000 on a $6 million estate?' }).waitFor();
      const calculate = async (estate, gifts = '', situs = '100') => {
        await page.locator('#tax-estate').fill(estate);
        await page.locator('#tax-gifts').fill(gifts);
        await page.locator('#tax-situs').fill(situs);
        await page.getByRole('button', { name: 'Calculate', exact: true }).click();
        await page.getByTestId('illinois-tax').waitFor();
      };
      await calculate('6,000,000');
      assert.equal(await page.getByTestId('illinois-tax').textContent(), '$456,071');
      assert.equal(await page.getByTestId('federal-tax').textContent(), '$0');
      assert.equal(await page.getByTestId('combined-tax').textContent(), '$456,071');
      const row = page.getByRole('row').filter({ hasText: '$6,000,000' });
      assert.match(await row.textContent(), /\$456,071/);
      await page.getByText('Show calculation details', { exact: true }).click();
      assert.match(await page.locator('details').textContent(), /\$60,000 adjustment/);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `overflow at ${width}px`);
      await calculate('4,000,000');
      assert.equal(await page.getByTestId('illinois-tax').textContent(), '$0');
      await calculate('4,100,000');
      assert.equal(await page.getByTestId('illinois-tax').textContent(), '$28,571');
      await calculate('5,000,000', '', '50');
      assert.equal(await page.getByTestId('illinois-tax').textContent(), '$142,857');
      await calculate('6,000,000', '2,000,000');
      assert.equal(await page.getByTestId('illinois-tax').textContent(), '$456,071');
      await calculate('6,000,000', '16,000,000');
      assert.equal(await page.getByTestId('federal-tax').textContent(), 'Review required');
      assert.equal(await page.getByTestId('combined-tax').textContent(), 'Review required');
      assert.equal(await page.getByText('Simplified Estate Tax Breakdown', { exact: true }).count(), 0);
      await page.locator('#tax-estate').fill('oops');
      assert.equal(await page.getByTestId('illinois-tax').count(), 0, 'stale results hidden on edit');
      await page.getByRole('button', { name: 'Calculate', exact: true }).click();
      await page.getByRole('alert').filter({ hasText: 'Please fix the following' }).waitFor();
      await page.getByRole('button', { name: 'Reset', exact: true }).click();
      assert.equal(await page.locator('#tax-estate').inputValue(), '');
      assert.equal(await page.locator('#tax-situs').inputValue(), '100');
      assert.equal(await page.getByTestId('illinois-tax').count(), 0);
      assert.deepEqual(errors, []);
      await page.close();
      console.log(`Estate tax calculator verified at ${width}px: ${base}`);
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
