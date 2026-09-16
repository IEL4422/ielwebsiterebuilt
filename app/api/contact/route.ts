import { NextRequest, NextResponse } from 'next/server';

import { sendContactToSlack, slackContactText } from '@/lib/slack-contact';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { first_name, last_name, phone_number, email, message, recaptcha_token, source } = body;
    const valid = (value: unknown, max: number) => typeof value === 'string' && value.trim().length > 0 && value.length <= max;
    if (!valid(first_name, 100) || (last_name != null && (typeof last_name !== 'string' || last_name.length > 100)) ||
        !valid(phone_number, 100) || !valid(email, 254) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        !valid(message, 5000) || !valid(recaptcha_token, 4096)) {
      return NextResponse.json({ error: 'Please complete all required fields and spam verification' }, { status: 400 });
    }

    // Verify reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error('RECAPTCHA_SECRET_KEY not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: recaptchaSecret, response: recaptcha_token }),
      signal: AbortSignal.timeout(10000),
    });

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      console.error('reCAPTCHA failed:', recaptchaData);
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    const formSource = source === 'homepage' ? 'Homepage' : source === 'blog' ? 'Blog' : 'Contact page';
    await sendContactToSlack(
      `New Website Contact — ${formSource}\n` +
      `Name: ${slackContactText(first_name)} ${slackContactText(last_name)}\n` +
      `Email: ${slackContactText(email)}\nPhone: ${slackContactText(phone_number)}\n` +
      `Message:\n${slackContactText(message)}`
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
