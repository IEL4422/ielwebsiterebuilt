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
