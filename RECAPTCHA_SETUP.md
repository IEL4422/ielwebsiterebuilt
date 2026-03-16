# reCAPTCHA Setup Instructions

This document explains how to configure Google reCAPTCHA v3 for the contact form.

## Overview

The contact form now includes Google reCAPTCHA v3 protection to prevent spam and bot submissions. reCAPTCHA v3 runs invisibly in the background and provides a score from 0.0 (bot) to 1.0 (human).

## Setup Steps

### 1. Get reCAPTCHA Keys

1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" or "+" to register a new site
3. Fill in the form:
   - **Label**: Illinois Estate Law Contact Form (or any descriptive name)
   - **reCAPTCHA type**: Select "reCAPTCHA v3"
   - **Domains**: Add your domain(s):
     - `illinoisestatelaw.com`
     - `www.illinoisestatelaw.com`
     - `localhost` (for local testing)
   - **Accept the reCAPTCHA Terms of Service**
4. Click "Submit"
5. You'll receive two keys:
   - **Site Key** (public key - used in the frontend)
   - **Secret Key** (private key - used in the backend)

### 2. Configure Environment Variables

#### Local Development

Update your `.env` file with the keys you received:

```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

#### Production (Supabase Edge Functions)

The `RECAPTCHA_SECRET_KEY` needs to be configured as a secret for your Supabase Edge Functions:

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **Edge Functions** in the left sidebar
4. Click on **Secrets** or **Environment Variables**
5. Add a new secret:
   - **Name**: `RECAPTCHA_SECRET_KEY`
   - **Value**: Your reCAPTCHA secret key
6. Save the secret

Alternatively, you can use the Supabase CLI:

```bash
supabase secrets set RECAPTCHA_SECRET_KEY=your_secret_key_here
```

#### Production (Frontend - Netlify/Vercel)

Add the site key to your hosting platform's environment variables:

**For Netlify:**
1. Go to Site Configuration → Environment Variables
2. Add: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here`

**For Vercel:**
1. Go to Project Settings → Environment Variables
2. Add: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here`

### 3. Verify Implementation

After configuring the keys:

1. Test the contact form on your website
2. Submit a test message
3. Check the browser console for any errors
4. Verify the form submission succeeds
5. Check the Supabase Edge Function logs for reCAPTCHA verification messages

## How It Works

### Frontend (Contact Form)

1. When the user fills out the contact form, reCAPTCHA v3 automatically generates a token in the background
2. The token is included with the form submission to the backend
3. No user interaction is required (no checkboxes or challenges)

### Backend (Edge Function)

1. The `send-contact-form` edge function receives the form data with the reCAPTCHA token
2. It sends the token to Google's verification API
3. Google returns a score (0.0 to 1.0)
4. If the score is below 0.5, the submission is rejected
5. If the score is 0.5 or higher, the form is processed normally

## Score Threshold

The default threshold is set to **0.5**. This means:
- Scores below 0.5 are considered bots and rejected
- Scores of 0.5 or higher are considered legitimate users

You can adjust this threshold in `/supabase/functions/send-contact-form/index.ts` if needed:

```typescript
if (data.score < 0.5) {  // Change this value to adjust sensitivity
  console.warn(`Low reCAPTCHA score: ${data.score}`);
  return false;
}
```

## Troubleshooting

### "reCAPTCHA not available" error
- Check that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set in your environment variables
- Verify the key is correct and matches your domain

### "reCAPTCHA verification failed" error
- Check that `RECAPTCHA_SECRET_KEY` is configured in Supabase Edge Functions
- Verify the secret key is correct
- Check the Edge Function logs for more details

### Low scores for legitimate users
- Consider lowering the threshold (e.g., from 0.5 to 0.3)
- Review reCAPTCHA analytics in the Google Admin Console
- Ensure your domain is properly registered in reCAPTCHA settings

## Additional Resources

- [Google reCAPTCHA v3 Documentation](https://developers.google.com/recaptcha/docs/v3)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
- [Interpreting the Score](https://developers.google.com/recaptcha/docs/v3#interpreting_the_score)
