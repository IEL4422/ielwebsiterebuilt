import { createClient } from 'npm:@supabase/supabase-js@2.58.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from('service_purchases')
      .insert({
        id: body.id,
        client_name: body.client_name,
        client_email: body.client_email,
        client_phone: body.client_phone,
        service_type: body.service_type,
        service_name: body.service_name,
        service_price: body.service_price,
        client_type: body.client_type,
        agreement_signed: body.agreement_signed,
        agreement_signature: body.agreement_signature,
        agreement_signed_at: body.agreement_signed_at,
        stripe_payment_status: body.stripe_payment_status,
        add_ons: body.add_ons,
      });

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true, id: body.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error saving purchase:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
