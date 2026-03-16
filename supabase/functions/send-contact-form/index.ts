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

interface RecaptchaEnterpriseResponse {
  tokenProperties: {
    valid: boolean;
    invalidReason?: string;
    hostname: string;
    action: string;
    createTime: string;
  };
  riskAnalysis: {
    score: number;
    reasons?: string[];
  };
  event?: {
    token: string;
    siteKey: string;
    expectedAction?: string;
  };
  name?: string;
}

async function verifyRecaptcha(token: string, expectedAction: string = 'CONTACT_FORM'): Promise<boolean> {
  const projectId = Deno.env.get('RECAPTCHA_PROJECT_ID');
  const apiKey = Deno.env.get('RECAPTCHA_API_KEY');

  if (!projectId || !apiKey) {
    console.error('RECAPTCHA_PROJECT_ID or RECAPTCHA_API_KEY not configured');
    return false;
  }

  try {
    // Use reCAPTCHA Enterprise API
    const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`;

    const requestBody = {
      event: {
        token: token,
        expectedAction: expectedAction,
        siteKey: "6Ld3zYwsAAAAAKb78sOfHp5o-BErEFA3Ajz3sL9l",
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('reCAPTCHA Enterprise API error:', response.status, errorText);
      return false;
    }

    const data: RecaptchaEnterpriseResponse = await response.json();

    // Check if token is valid
    if (!data.tokenProperties?.valid) {
      console.error('reCAPTCHA Enterprise token invalid:', data.tokenProperties?.invalidReason);
      return false;
    }

    // Verify the action matches
    if (data.tokenProperties.action !== expectedAction) {
      console.error(`Action mismatch: expected ${expectedAction}, got ${data.tokenProperties.action}`);
      return false;
    }

    // Check the risk score (0.0 to 1.0)
    // 0.0 is very likely a bot, 1.0 is very likely a good user
    // Recommended threshold is 0.5
    const score = data.riskAnalysis?.score ?? 0;

    if (score < 0.5) {
      console.warn(`Low reCAPTCHA Enterprise score: ${score}`, data.riskAnalysis?.reasons);
      return false;
    }

    console.log(`reCAPTCHA Enterprise verification successful. Score: ${score}, Action: ${data.tokenProperties.action}`);
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
