import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const {
      firstName,
      lastName,
      packagePurchased,
      totalPrice,
      email,
      phoneNumber,
      typeOfService,
    } = await req.json();

    // Validate required fields
    if (!firstName || !email || !packagePurchased || !totalPrice) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Send to Zapier webhook
    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/19553629/uqk8gko/';

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        packagePurchased: packagePurchased,
        totalPrice: totalPrice,
        email: email,
        phone_number: phoneNumber,
        typeOfService: typeOfService,
      }),
    });

    const responseText = await webhookResponse.text();

    // Zapier webhooks typically return 200 with specific response
    // Check if the response indicates success
    if (!webhookResponse.ok) {
      console.error('Zapier webhook error:', {
        status: webhookResponse.status,
        statusText: webhookResponse.statusText,
        body: responseText,
      });

      return new Response(
        JSON.stringify({
          error: "Failed to submit payment plan request",
          details: responseText,
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

    console.log('Payment plan submitted successfully:', {
      email,
      packagePurchased,
      totalPrice,
      response: responseText,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Payment plan request submitted successfully",
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
    console.error('Payment plan submission error:', error);

    return new Response(
      JSON.stringify({
        error: "An error occurred while submitting your payment plan request",
        message: error.message,
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
