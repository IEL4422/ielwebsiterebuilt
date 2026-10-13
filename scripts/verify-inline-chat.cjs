// Browser regression with simulated ElevenLabs replies; never submits real leads.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const origin = process.env.HEADER_TEST_ORIGIN || 'http://127.0.0.1:3192';
assert(['127.0.0.1', 'localhost'].includes(new URL(origin).hostname));

(async () => {
  const browser = await chromium.launch();
  try {
    for (const width of [390, 1440]) for (const path of ['/', '/contact/']) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const errors = [];
      const sent = [];
      let connections = 0;
      let mode = 'reply';
      page.on('pageerror', error => errors.push(error.message));
      await page.route('**/*', route => {
        if (new URL(route.request().url()).origin === origin && route.request().method() === 'GET') return route.continue();
        return route.abort();
      });
      await page.routeWebSocket('wss://api.elevenlabs.io/v1/convai/conversation*', ws => {
        connections++;
        ws.onMessage(raw => {
          const data = JSON.parse(raw);
          sent.push(data);
          if (data.type === 'conversation_initiation_client_data' && mode !== 'timeout') {
            assert.equal(data.conversation_config_override.conversation.text_only, true);
            ws.send(JSON.stringify({ type: 'conversation_initiation_metadata' }));
            ws.send(JSON.stringify({ type: 'ping', ping_event: { event_id: 123 } }));
          } else if (data.type === 'user_message') {
            if (data.text === 'FAIL') return ws.close({ code: 1011, reason: 'Simulated failure' });
            // No greeting: the first reply must still reach the visitor.
            const response = JSON.stringify({ type: 'agent_response', agent_response_event: {
              event_id: sent.length, agent_response: `Reply: ${data.text}`,
            } });
            ws.send('not-json');
            ws.send(response);
            ws.send(response); // Duplicate delivery must not duplicate the bubble.
          }
        });
      });
      await page.goto(origin + path);
      const chat = page.getByRole('region', { name: 'AI chat with Illinois Estate Law', exact: true });
      const input = chat.getByRole('textbox', { name: 'How can we help you?' });
      await input.waitFor();
      assert.equal(connections, 0, 'no conversation on page view');
      assert.equal(await page.locator('input[type="email"], input[type="tel"], [role="tablist"]').count(), 0);
      assert.equal(await page.locator('elevenlabs-convai[override-text-only="true"]').count(), 1);
      await input.fill('What services do you offer?');
      await chat.getByRole('button', { name: 'Start chat', exact: true }).click();
      await chat.getByText('Reply: What services do you offer?').waitFor();
      assert.equal(await chat.getByText('Reply: What services do you offer?').count(), 1);
      assert.equal(connections, 1);
      assert(sent.some(event => event.type === 'pong' && event.event_id === 123));
      await input.fill('<img src=x onerror=alert(1)>');
      await input.press('Enter');
      await chat.getByText('Reply: <img src=x onerror=alert(1)>').waitFor();
      assert.equal(await chat.locator('img').count(), 0, 'message HTML remains text');
      assert.equal(connections, 1, 'follow-up uses the same conversation');
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'no mobile overflow');
      await input.fill('FAIL');
      await input.press('Enter');
      await chat.getByRole('button', { name: 'Start a new chat' }).click();
      await input.fill('Try again');
      await input.press('Enter');
      await chat.getByText('Reply: Try again').waitFor();
      assert.equal(connections, 2, 'recovery opens a fresh conversation');
      if (width === 390 && path === '/contact/') {
        await input.fill('FAIL');
        await input.press('Enter');
        await chat.getByRole('button', { name: 'Start a new chat' }).click();
        mode = 'timeout';
        await page.clock.install();
        await input.fill('Connection timeout test');
        await input.press('Enter');
        await chat.getByText('Connecting…', { exact: true }).waitFor();
        await page.clock.fastForward(21000);
        await chat.getByRole('button', { name: 'Start a new chat' }).waitFor();
      }
      assert.deepEqual(errors, []);
      console.log(`Inline chat passed ${path} at ${width}px: text-only, first reply, follow-up, escaped text, retry, no old form, floating widget retained.`);
      await page.close();
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
