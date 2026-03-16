import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  message: string;
  recaptcha_token: string;
}

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  'error-codes'?: string[];
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = Deno.env.get('RECAPTCHA_SECRET_KEY');

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return false;
  }

  try {
    // Use reCAPTCHA Enterprise API
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data: RecaptchaResponse = await response.json();

    if (!data.success) {
      console.error('reCAPTCHA Enterprise verification failed:', data['error-codes']);
      return false;
    }

    // For reCAPTCHA Enterprise, check the score (0.0 to 1.0)
    // 0.0 is very likely a bot, 1.0 is very likely a good user
    // Recommended threshold is 0.5
    if (data.score < 0.5) {
      console.warn(`Low reCAPTCHA Enterprise score: ${data.score}`);
      return false;
    }

    console.log(`reCAPTCHA Enterprise verification successful. Score: ${data.score}`);
    return true;
  } catch (error) {
    console.error('Error verifying reCAPTCHA Enterprise:', error);
    return false;
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    // Verify reCAPTCHA token
    if (!formData.recaptcha_token) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "reCAPTCHA token missing"
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const isHuman = await verifyRecaptcha(formData.recaptcha_token);

    if (!isHuman) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "reCAPTCHA verification failed. Please try again."
        }),
        {
          status: 403,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/19553629/uqkwoqh/";

    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!zapierResponse.ok) {
      const errorText = await zapierResponse.text();
      console.error("Zapier webhook failed:", zapierResponse.status, errorText);
      throw new Error(`Zapier webhook failed with status ${zapierResponse.status}`);
    }

    const responseData = await zapierResponse.text();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully",
        zapierResponse: responseData
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error in send-contact-form:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
