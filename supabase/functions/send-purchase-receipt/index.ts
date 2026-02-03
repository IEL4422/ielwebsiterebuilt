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
    const { email, name, serviceName, price, addOns, clientType, serviceType } = await req.json();

    if (!email || !name || !serviceName || !price) {
      throw new Error('Email, name, serviceName, and price are required');
    }

    const isPackage = serviceType === 'estate-planning' || serviceType === 'probate';

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('Resend API key not configured');
    }

    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);

    const emailContent = {
      from: 'Illinois Estate Law <no-reply@illinoisestatelaw.com>',
      to: [email],
      subject: 'Payment Confirmation & Receipt - Illinois Estate Law',
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
              .success-badge {
                background-color: #10b981;
                color: white;
                padding: 8px 20px;
                border-radius: 20px;
                display: inline-block;
                margin-top: 15px;
                font-weight: 600;
                font-size: 14px;
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
              .receipt-box {
                background-color: #f0f4f8;
                border: 2px solid #4a708b;
                border-radius: 10px;
                padding: 25px;
                margin: 30px 0;
              }
              .receipt-box h3 {
                color: #2d3e50;
                font-size: 20px;
                font-weight: bold;
                margin-top: 0;
                margin-bottom: 20px;
                border-bottom: 2px solid #4a708b;
                padding-bottom: 10px;
              }
              .receipt-item {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
                border-bottom: 1px solid #d0d0d0;
              }
              .receipt-item:last-child {
                border-bottom: none;
                font-weight: bold;
                font-size: 18px;
                margin-top: 10px;
                padding-top: 20px;
                border-top: 2px solid #2d3e50;
              }
              .receipt-label {
                color: #2d3e50;
                font-weight: 600;
              }
              .receipt-value {
                color: #2d3e50;
              }
              .highlight-box {
                background: linear-gradient(135deg, #2D3E50 0%, #4A708B 100%);
                color: #ffffff;
                padding: 25px;
                border-radius: 10px;
                margin: 30px 0;
              }
              .highlight-box h3 {
                color: #ffffff;
                font-size: 20px;
                font-weight: bold;
                margin-top: 0;
                margin-bottom: 15px;
              }
              .highlight-box p {
                color: #ffffff;
                margin-bottom: 10px;
              }
              .highlight-box ul {
                margin: 10px 0;
                padding-left: 20px;
              }
              .highlight-box li {
                color: #ffffff;
                margin-bottom: 8px;
              }
              .next-steps {
                background-color: #fff8e1;
                border-left: 4px solid #fbbf24;
                padding: 20px;
                margin: 30px 0;
              }
              .next-steps h3 {
                color: #2d3e50;
                font-size: 18px;
                font-weight: bold;
                margin-top: 0;
                margin-bottom: 15px;
              }
              .next-steps ol {
                margin: 10px 0;
                padding-left: 20px;
              }
              .next-steps li {
                color: #2d3e50;
                margin-bottom: 12px;
                padding-left: 5px;
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
                <div class="success-badge">✓ PAYMENT CONFIRMED</div>
              </div>

              <div class="content">
                <h2>Thank You for Your Purchase, ${name}!</h2>

                <p>Your payment has been successfully processed. This email serves as your official receipt and confirmation of purchase.</p>

                <div class="receipt-box">
                  <h3>Receipt Details</h3>
                  <div class="receipt-item">
                    <span class="receipt-label">Service:</span>
                    <span class="receipt-value">${serviceName}</span>
                  </div>
                  ${clientType ? `
                  <div class="receipt-item">
                    <span class="receipt-label">Plan Type:</span>
                    <span class="receipt-value">${clientType === 'individual' ? 'Individual' : 'Joint (Spouses/Partners)'}</span>
                  </div>
                  ` : ''}
                  ${addOns && addOns.length > 0 ? `
                  <div class="receipt-item">
                    <span class="receipt-label">Add-Ons:</span>
                    <span class="receipt-value">${addOns}</span>
                  </div>
                  ` : ''}
                  <div class="receipt-item">
                    <span class="receipt-label">Date:</span>
                    <span class="receipt-value">${new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div class="receipt-item">
                    <span class="receipt-label">Total Paid:</span>
                    <span class="receipt-value">${formattedPrice}</span>
                  </div>
                </div>

                <div class="highlight-box">
                  <h3>What Happens Next?</h3>
                  <p>Our legal team will begin working on your matter right away. Here's what you can expect:</p>
                  <ul>
                    <li><strong>Initial Contact:</strong> A member of our team will reach out to you within 1-2 business days to schedule your consultation and gather any necessary information.</li>
                    <li><strong>Document Preparation:</strong> We'll work diligently to prepare your documents with attention to detail and care.</li>
                    <li><strong>Review & Signing:</strong> Once your documents are ready, we'll schedule a time to review them with you and coordinate signing.</li>
                  </ul>
                </div>

                <div class="next-steps">
                  <h3>📋 Before Your Initial Call</h3>
                  <ol>
                    <li><strong>Gather Important Documents:</strong> Please have any relevant documents ready (existing wills, trusts, property deeds, etc.)</li>
                    <li><strong>Make a List:</strong> Write down any questions or concerns you'd like to discuss</li>
                    <li><strong>Check Your Email:</strong> Watch for our follow-up email with scheduling information</li>
                  </ol>
                </div>

                <p style="margin-top: 30px;">We're honored that you've chosen Illinois Estate Law to assist with your legal needs. Our team is committed to providing you with exceptional service and personalized attention throughout this process.</p>

                ${isPackage ? `
                <div style="background-color: #e8f4f8; border-left: 4px solid #4a708b; padding: 20px; margin: 30px 0; border-radius: 5px;">
                  <p style="color: #2d3e50; font-weight: 600; margin-bottom: 15px; font-size: 18px;">📱 Access Your Client Portal</p>
                  <p style="color: #2d3e50; margin-bottom: 10px;">Your next step is to join our client portal and complete your intake questionnaire:</p>
                  <p style="margin: 10px 0;">
                    <strong>Client Portal:</strong> <a href="https://portal.illinoisestatelaw.com" style="color: #4a708b; text-decoration: none; font-weight: 600;">portal.illinoisestatelaw.com</a>
                  </p>
                  <p style="margin: 10px 0;">
                    <strong>Intake Questionnaire:</strong> <a href="https://www.cognitoforms.com/IllinoisEstateLaw/IntakeQuestionnaire" style="color: #4a708b; text-decoration: none; font-weight: 600;">Complete Your Intake Form</a>
                  </p>
                  <p style="color: #2d3e50; margin-top: 15px; font-size: 14px;">Completing your intake questionnaire helps us serve you better and speeds up the process of preparing your documents.</p>
                </div>
                ` : ''}

                <div class="contact-info">
                  <p><strong>Questions or Need to Reach Us?</strong></p>
                  <p>Phone: <a href="tel:3123730731">(312) 373-0731</a></p>
                  <p>Email: <a href="mailto:contact@illinoisestatelaw.com">contact@illinoisestatelaw.com</a></p>
                  <p>Address: 4422 N. Ravenswood Ave, Ste 212, Chicago, Illinois 60640</p>
                </div>

                <p style="margin-top: 30px;">
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
                <p style="margin-top: 16px; font-size: 12px; color: #9cb4c4;">
                  Please keep this email for your records. If you have any questions about your purchase or receipt, please contact us.
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
    console.error('Error sending purchase receipt:', error);
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
