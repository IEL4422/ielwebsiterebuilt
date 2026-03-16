# reCAPTCHA Enterprise Setup Instructions

This document explains the Google reCAPTCHA Enterprise configuration for the contact form.

## Overview

The contact form uses Google reCAPTCHA Enterprise to prevent spam and bot submissions. reCAPTCHA Enterprise runs invisibly in the background and provides a score from 0.0 (bot) to 1.0 (human).

## Current Configuration

The site is already configured with reCAPTCHA Enterprise:
- **Site Key**: `6Ld3zYwsAAAAAKb78sOfHp5o-BErEFA3Ajz3sL9l`
- **Action**: `CONTACT_FORM`
- The reCAPTCHA Enterprise script is loaded in the site header

## Required Setup

### Configure the Secret Key

You need to add your reCAPTCHA Enterprise secret key to Supabase Edge Functions:

1. Get your secret key from the [Google Cloud Console](https://console.cloud.google.com/security/recaptcha)
2. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
3. Select your project
4. Navigate to **Edge Functions** in the left sidebar
5. Click on **Secrets** or **Environment Variables**
6. Add a new secret:
   - **Name**: `RECAPTCHA_SECRET_KEY`
   - **Value**: Your reCAPTCHA Enterprise secret key
7. Save the secret

The edge function will automatically use this secret to verify submissions.

## How It Works

### Frontend (Contact Form)

1. The reCAPTCHA Enterprise script loads automatically on every page
2. When the user submits the contact form, the script generates a token with the action `CONTACT_FORM`
3. The token is sent with the form data to the backend
4. No user interaction is required (invisible protection)

### Backend (Edge Function)

1. The `send-contact-form` edge function receives the form data with the reCAPTCHA token
2. It verifies the token with Google's reCAPTCHA Enterprise API
3. Google returns a score (0.0 to 1.0)
4. If the score is below 0.5, the submission is rejected as likely spam
5. If the score is 0.5 or higher, the form is processed normally

## Score Threshold

The default threshold is **0.5**:
- Scores below 0.5 → Rejected (likely bot)
- Scores 0.5 or higher → Accepted (likely human)

To adjust the threshold, edit `/supabase/functions/send-contact-form/index.ts`:

```typescript
if (data.score < 0.5) {  // Change this value to adjust sensitivity
  console.warn(`Low reCAPTCHA Enterprise score: ${data.score}`);
  return false;
}
```

**Threshold Guidelines:**
- **0.9+**: Very strict, may reject some legitimate users
- **0.5-0.7**: Balanced (recommended)
- **0.3-0.4**: More lenient, may allow some spam

## Monitoring

Monitor reCAPTCHA Enterprise performance:

1. Visit the [Google Cloud Console](https://console.cloud.google.com/security/recaptcha)
2. View analytics, scores, and detection patterns
3. Adjust threshold based on false positive/negative rates

## Testing

To test the implementation:

1. Submit a test form on your website
2. Check the browser console for any errors
3. Verify the submission succeeds
4. Check Supabase Edge Function logs:
   - Look for "reCAPTCHA Enterprise verification successful" messages
   - Review the score values

## Troubleshooting

### Form submissions fail with "reCAPTCHA verification failed"

**Check:**
- Is `RECAPTCHA_SECRET_KEY` configured in Supabase Edge Functions?
- Is the secret key correct and matches the site key?
- Review Edge Function logs for detailed error messages

### Script not loading

**Check:**
- Verify the script tag in `app/layout.tsx`
- Check browser console for script loading errors
- Ensure the site key is correct

### Low scores for legitimate users

**Solutions:**
- Lower the threshold (e.g., from 0.5 to 0.3)
- Review reCAPTCHA Enterprise analytics
- Check if domain is properly configured in Google Cloud Console

## Implementation Details

### Files Modified

- `/app/layout.tsx` - Added reCAPTCHA Enterprise script tag
- `/app/contact/page.tsx` - Integrated token generation on form submission
- `/supabase/functions/send-contact-form/index.ts` - Server-side verification
- `/.env` - Environment variables configuration

### Key Code Snippets

**Frontend Token Generation:**
```typescript
window.grecaptcha.enterprise.ready(async () => {
  const token = await window.grecaptcha.enterprise.execute(
    '6Ld3zYwsAAAAAKb78sOfHp5o-BErEFA3Ajz3sL9l',
    { action: 'CONTACT_FORM' }
  );
});
```

**Backend Verification:**
```typescript
const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `secret=${secretKey}&response=${token}`,
});
```

## Additional Resources

- [Google reCAPTCHA Enterprise Documentation](https://cloud.google.com/recaptcha-enterprise/docs)
- [Google Cloud Console](https://console.cloud.google.com/security/recaptcha)
- [Interpreting Scores](https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment)
