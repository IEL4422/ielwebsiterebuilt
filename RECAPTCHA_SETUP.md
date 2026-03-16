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

### Step 1: Get Your Google Cloud Credentials

You need two pieces of information from Google Cloud:

1. **Project ID**: Your Google Cloud project ID
2. **API Key**: A Google Cloud API key with reCAPTCHA Enterprise API enabled

#### Get Your Project ID

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)
3. Your Project ID is displayed at the top of the page

#### Create an API Key

1. In Google Cloud Console, go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** → **API key**
3. Copy the API key that's generated
4. (Optional) Click **Edit API key** to restrict it:
   - Under **API restrictions**, select "Restrict key"
   - Check "reCAPTCHA Enterprise API"
   - Click **Save**

#### Enable reCAPTCHA Enterprise API

1. Go to **APIs & Services** → **Library**
2. Search for "reCAPTCHA Enterprise API"
3. Click on it and click **ENABLE**

### Step 2: Configure Environment Variables

The credentials are automatically configured in Supabase Edge Functions. The edge function will use these to verify submissions.

## How It Works

### Frontend (Contact Form)

1. The reCAPTCHA Enterprise script loads automatically on every page
2. When the user submits the contact form, the script generates a token with the action `CONTACT_FORM`
3. The token is sent with the form data to the backend
4. No user interaction is required (invisible protection)

### Backend (Edge Function)

1. The `send-contact-form` edge function receives the form data with the reCAPTCHA token
2. It creates an assessment request with the proper format:
   ```json
   {
     "event": {
       "token": "TOKEN",
       "expectedAction": "CONTACT_FORM",
       "siteKey": "6Ld3zYwsAAAAAKb78sOfHp5o-BErEFA3Ajz3sL9l"
     }
   }
   ```
3. It sends this to Google's reCAPTCHA Enterprise API
4. Google returns an assessment with:
   - Token validity
   - Risk score (0.0 to 1.0)
   - Action verification
5. If the score is below 0.5, the submission is rejected as likely spam
6. If the score is 0.5 or higher, the form is processed normally

## Score Threshold

The default threshold is **0.5**:
- Scores below 0.5 → Rejected (likely bot)
- Scores 0.5 or higher → Accepted (likely human)

To adjust the threshold, edit `/supabase/functions/send-contact-form/index.ts`:

```typescript
if (score < 0.5) {  // Change this value to adjust sensitivity
  console.warn(`Low reCAPTCHA Enterprise score: ${score}`);
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
   - Review the score values and action names

## Troubleshooting

### Form submissions fail with "reCAPTCHA verification failed"

**Check:**
- Are the credentials configured correctly?
- Is the API key correct and has reCAPTCHA Enterprise API enabled?
- Is the Project ID correct?
- Review Edge Function logs for detailed error messages

### "reCAPTCHA Enterprise API error: 403"

**Solutions:**
- Enable the reCAPTCHA Enterprise API in Google Cloud Console
- Verify your API key has permission to access the reCAPTCHA Enterprise API
- Check that API key restrictions aren't blocking the request

### "Token invalid" errors

**Check:**
- Ensure the site key in the frontend matches the site key in the backend
- Verify the token is being generated correctly
- Check that the domain is authorized in Google Cloud Console

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
- `/supabase/functions/send-contact-form/index.ts` - Server-side verification using Enterprise API
- `/.env` - Environment variables configuration

### API Endpoint

The edge function uses the official reCAPTCHA Enterprise REST API:

```
POST https://recaptchaenterprise.googleapis.com/v1/projects/{PROJECT_ID}/assessments?key={API_KEY}
```

### Request Body Format

```json
{
  "event": {
    "token": "TOKEN_FROM_FRONTEND",
    "expectedAction": "CONTACT_FORM",
    "siteKey": "6Ld3zYwsAAAAAKb78sOfHp5o-BErEFA3Ajz3sL9l"
  }
}
```

### Response Format

```json
{
  "tokenProperties": {
    "valid": true,
    "hostname": "your-domain.com",
    "action": "CONTACT_FORM",
    "createTime": "2024-01-01T00:00:00Z"
  },
  "riskAnalysis": {
    "score": 0.9,
    "reasons": []
  }
}
```

## Additional Resources

- [Google reCAPTCHA Enterprise Documentation](https://cloud.google.com/recaptcha-enterprise/docs)
- [reCAPTCHA Enterprise REST API Reference](https://cloud.google.com/recaptcha-enterprise/docs/reference/rest)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Interpreting Scores](https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment)
