import 'server-only';

/** Keep the incoming webhook in server environment variables, never browser code. */
export async function sendContactToSlack(text: string) {
  const webhook = process.env.SLACK_CONTACT_WEBHOOK_URL;
  if (!webhook) throw new Error('Slack contact webhook is not configured');
  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, unfurl_links: false, unfurl_media: false }),
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok || (await response.text()).trim() !== 'ok') {
    throw new Error(`Slack contact delivery failed (${response.status})`);
  }
}

/** Escape user text so submissions cannot inject Slack mentions or links. */
export function slackContactText(value: unknown): string {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
