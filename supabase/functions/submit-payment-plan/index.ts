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
      addOns,
      clientType,
    } = await req.json();

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

    const sendZapierWebhook = async () => {
      try {
        const webhookUrl = 'https://hooks.zapier.com/hooks/catch/19553629/uqk8gko/';
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            packagePurchased,
            totalPrice,
            email,
            phone_number: phoneNumber,
            typeOfService,
          }),
        });
        if (webhookResponse.ok) {
          console.log('Zapier webhook sent successfully');
        } else {
          console.error('Zapier webhook error:', webhookResponse.status, await webhookResponse.text());
        }
      } catch (err) {
        console.error('Error sending Zapier webhook:', err);
      }
    };

    const sendPortalWebhook = async () => {
      try {
        const portalWebhookUrl = 'https://portal.illinoisestatelaw.com/api/webhooks/website-purchase';
        const portalResponse = await fetch(portalWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            typeOfCase: typeOfService,
            packagePurchased,
            amountPaid: totalPrice,
            paymentType: 'payment-plan',
            email,
            name: `${firstName} ${lastName}`.trim(),
            phoneNumber: phoneNumber || '',
          }),
        });
        if (portalResponse.ok) {
          console.log('Portal webhook sent successfully');
        } else {
          console.error('Failed to send portal webhook:', await portalResponse.text());
        }
      } catch (err) {
        console.error('Error sending portal webhook:', err);
      }
    };

    const sendSlackNotification = async () => {
      try {
        const slackApiUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/send-slack-notification`;
        const slackResponse = await fetch(slackApiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            serviceName: packagePurchased,
            servicePrice: totalPrice,
            addOns,
            clientType,
            paymentType: 'payment-plan',
          }),
        });
        if (slackResponse.ok) {
          console.log('Slack notification sent successfully');
        } else {
          console.error('Failed to send Slack notification:', await slackResponse.text());
        }
      } catch (err) {
        console.error('Error sending Slack notification:', err);
      }
    };

    console.log('Payment plan submitted successfully:', { email, packagePurchased, totalPrice });

    const backgroundWork = Promise.allSettled([
      sendZapierWebhook(),
      sendPortalWebhook(),
      sendSlackNotification(),
    ]);

    if (typeof EdgeRuntime !== 'undefined' && EdgeRuntime.waitUntil) {
      EdgeRuntime.waitUntil(backgroundWork);
    } else {
      await backgroundWork;
    }

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
