import { createClient } from 'npm:@supabase/supabase-js@2.58.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const stripeWebhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
    const signature = req.headers.get('stripe-signature');
    const body = await req.text();

    if (!stripeWebhookSecret) {
      console.log('Webhook secret not configured, skipping signature verification');
    }

    const event = JSON.parse(body);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const purchaseId = session.metadata.purchase_id;

      const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
      const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data: purchase, error: fetchError } = await supabase
        .from('service_purchases')
        .select('*')
        .eq('id', purchaseId)
        .maybeSingle();

      if (!fetchError && purchase) {
        await supabase
          .from('service_purchases')
          .update({
            stripe_payment_status: 'completed',
            updated_at: new Date().toISOString()
          })
          .eq('id', purchaseId);

        try {
          const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/19553629/uqkzru2/';
          const nameParts = purchase.client_name.split(' ');
          const firstName = nameParts[0];
          const lastName = nameParts.slice(1).join(' ');

          const getServiceType = (serviceType: string, serviceName: string) => {
            if (serviceType === 'estate-planning') return 'Estate Planning';
            if (serviceType === 'probate') return 'Probate';
            if (serviceType === 'a-la-carte') {
              const deedServices = ['Quit Claim Deed', 'Transfer-on-Death Instrument', 'Life Estate Deed'];
              if (deedServices.some(d => serviceName.includes(d))) return 'Deed';
              if (serviceName.includes('Document Review')) return 'Document Review';
              return 'Estate Planning';
            }
            return 'Estate Planning';
          };

          const webhookResponse = await fetch(zapierWebhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amountPaid: purchase.service_price,
              email: purchase.client_email,
              firstName: firstName,
              lastName: lastName,
              packagePurchased: purchase.service_name,
              phoneNumber: purchase.client_phone || '',
              typeOfService: getServiceType(purchase.service_type, purchase.service_name)
            })
          });

          if (webhookResponse.ok) {
            console.log('Pay in full webhook sent successfully for purchase:', purchaseId);
          } else {
            console.error('Failed to send pay in full webhook:', await webhookResponse.text());
          }
        } catch (webhookError) {
          console.error('Error sending pay in full webhook:', webhookError);
        }

        try {
          const receiptApiUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/send-purchase-receipt`;
          const receiptResponse = await fetch(receiptApiUrl, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: purchase.client_email,
              name: purchase.client_name,
              serviceName: purchase.service_name,
              price: purchase.service_price,
              addOns: purchase.add_ons,
              clientType: purchase.client_type,
              serviceType: purchase.service_type
            })
          });

          if (receiptResponse.ok) {
            console.log('Purchase receipt email sent successfully for purchase:', purchaseId);
          } else {
            console.error('Failed to send purchase receipt email:', await receiptResponse.text());
          }
        } catch (emailError) {
          console.error('Error sending purchase receipt email:', emailError);
        }

        console.log('Payment completed for purchase:', purchaseId);
      }
    }

    return new Response(
      JSON.stringify({ received: true }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
