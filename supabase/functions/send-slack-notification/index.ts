import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface SlackNotificationData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  serviceName: string;
  servicePrice: number;
  addOns?: string[];
  clientType?: string;
  paymentType: 'full' | 'payment-plan';
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const slackWebhookUrl = Deno.env.get('SLACK_WEBHOOK_URL');

    if (!slackWebhookUrl) {
      console.warn('SLACK_WEBHOOK_URL not configured. Skipping Slack notification.');
      return new Response(
        JSON.stringify({
          success: true,
          message: "Slack webhook not configured"
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const data: SlackNotificationData = await req.json();

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      serviceName,
      servicePrice,
      addOns,
      clientType,
      paymentType,
    } = data;

    const fullName = `${firstName} ${lastName}`;
    const formattedPrice = `$${servicePrice.toLocaleString()}`;
    const paymentMethod = paymentType === 'full' ? 'Paid in Full' : 'Payment Plan Requested';

    let addOnsText = '';
    if (addOns && addOns.length > 0) {
      addOnsText = `\n*Add-Ons:* ${addOns.join(', ')}`;
    }

    const clientTypeText = clientType ? `\n*Client Type:* ${clientType === 'individual' ? 'Individual' : 'Joint/Couple'}` : '';

    const message = {
      text: "New Service Purchase from Recommended Service Form",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎉 New Service Purchase",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${fullName}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`
            },
            {
              type: "mrkdwn",
              text: `*Phone:*\n${phoneNumber || 'Not provided'}`
            },
            {
              type: "mrkdwn",
              text: `*Payment:*\n${paymentMethod}`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Service:* ${serviceName}\n*Price:* ${formattedPrice}${clientTypeText}${addOnsText}`
          }
        },
        {
          type: "divider"
        }
      ]
    };

    const slackResponse = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!slackResponse.ok) {
      const errorText = await slackResponse.text();
      console.error('Slack webhook error:', {
        status: slackResponse.status,
        statusText: slackResponse.statusText,
        body: errorText,
      });

      return new Response(
        JSON.stringify({
          error: "Failed to send Slack notification",
          details: errorText,
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

    console.log('Slack notification sent successfully:', {
      email,
      serviceName,
      servicePrice,
      paymentType,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Slack notification sent successfully",
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
    console.error('Slack notification error:', error);

    return new Response(
      JSON.stringify({
        error: "An error occurred while sending Slack notification",
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
