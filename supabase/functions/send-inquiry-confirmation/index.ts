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
    const { email, name } = await req.json();

    if (!email || !name) {
      throw new Error('Email and name are required');
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('Resend API key not configured');
    }

    const emailContent = {
      from: 'Illinois Estate Law <no-reply@illinoisestatelaw.com>',
      to: [email],
      subject: 'We Received Your Inquiry - Illinois Estate Law',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #2d3e50;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
              }
              .header {
                background: linear-gradient(135deg, #2D3E50 0%, #4A708B 100%);
                padding: 40px 30px;
                text-align: center;
              }
              .header h1 {
                font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                color: #fefefe;
                font-size: 36px;
                margin: 0;
                font-weight: bold;
              }
              .content {
                padding: 40px 30px;
              }
              .content h2 {
                color: #2d3e50;
                font-size: 24px;
                font-weight: bold;
                margin-top: 0;
                margin-bottom: 20px;
              }
              .content p {
                color: #2d3e50;
                font-size: 16px;
                margin-bottom: 16px;
              }
              .highlight-box {
                background-color: #f0f4f8;
                border-left: 4px solid #4a708b;
                padding: 20px;
                margin: 30px 0;
              }
              .highlight-box p {
                margin: 0;
                font-weight: 600;
              }
              .contact-info {
                margin-top: 30px;
                padding-top: 30px;
                border-top: 1px solid #e0e0e0;
              }
              .contact-info p {
                margin: 8px 0;
              }
              .contact-info a {
                color: #4a708b;
                text-decoration: none;
              }
              .contact-info a:hover {
                text-decoration: underline;
              }
              .footer {
                background-color: #2d3e50;
                color: #ffffff;
                padding: 30px;
                text-align: center;
                font-size: 14px;
              }
              .footer p {
                color: #ffffff;
                margin: 8px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Illinois Estate Law</h1>
              </div>

              <div class="content">
                <h2>Thank You for Contacting Us, ${name}!</h2>

                <p>We have received your inquiry and appreciate you reaching out to Illinois Estate Law.</p>

                <div class="highlight-box">
                  <p>Our team will review your message and get back to you within 1-2 business days.</p>
                </div>

                <p>We understand that estate planning and probate matters can be complex and sometimes urgent. Rest assured that your inquiry is important to us, and we're committed to providing you with the guidance and support you need.</p>

                <p>In the meantime, feel free to explore our resources:</p>
                <ul>
                  <li><a href="https://www.illinoisestatelaw.com/blog/" style="color: #4a708b;">Read our blog</a> for helpful articles on estate planning and probate</li>
                  <li><a href="https://www.illinoisestatelaw.com/frequently-asked-questions/" style="color: #4a708b;">Check our FAQ</a> for answers to common questions</li>
                  <li><a href="https://www.illinoisestatelaw.com/services-pricing/" style="color: #4a708b;">Review our services</a> to learn more about how we can help</li>
                </ul>

                <div class="contact-info">
                  <p><strong>Need immediate assistance?</strong></p>
                  <p>Phone: <a href="tel:3123730731">(312) 373-0731</a></p>
                  <p>Email: <a href="mailto:contact@illinoisestatelaw.com">contact@illinoisestatelaw.com</a></p>
                  <p>Address: 4422 N. Ravenswood Ave, Ste 212, Chicago, Illinois 60640</p>
                </div>

                <p style="margin-top: 30px;">We look forward to speaking with you soon.</p>

                <p style="margin-top: 20px;">
                  <strong>The Illinois Estate Law Team</strong>
                </p>
              </div>

              <div class="footer">
                <p><strong>Illinois Estate Law</strong></p>
                <p>4422 N. Ravenswood Ave, Ste 212</p>
                <p>Chicago, Illinois 60640</p>
                <p>(312) 373-0731</p>
                <p style="margin-top: 16px;">
                  <a href="https://www.illinoisestatelaw.com" style="color: #ffffff;">www.illinoisestatelaw.com</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailContent),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send email: ${error}`);
    }

    const result = await response.json();

    return new Response(
      JSON.stringify({ success: true, emailId: result.id }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error sending inquiry confirmation:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
