import { NextRequest, NextResponse } from 'next/server';

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/19553629/uqkwoqh/';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { first_name, last_name, phone_number, email, message, recaptcha_token } = body;

    // Verify reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error('RECAPTCHA_SECRET_KEY not configured');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${recaptchaSecret}&response=${recaptcha_token}`,
    });

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      console.error('reCAPTCHA failed:', recaptchaData);
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Forward to Zapier
    const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name, last_name, phone_number, email, message }),
    });

    if (!zapierResponse.ok) {
      console.error('Zapier webhook failed:', zapierResponse.status);
      throw new Error(`Zapier webhook failed with status ${zapierResponse.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
