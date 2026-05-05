import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SLACK_CHANNEL_ID = 'C099QPC8PK4'; // #inquiries

async function postToSlack(text: string) {
  const token = process.env.SLACK_BOT_TOKEN;
  if (!token) return;
  await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      channel: SLACK_CHANNEL_ID,
      text,
      unfurl_links: false,
    }),
  }).catch(console.error);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      // Referring attorney
      attorneyFirstName,
      attorneyLastName,
      firmName,
      ardc,
      attorneyEmail,
      attorneyPhone,
      // Client
      clientFirstName,
      clientLastName,
      clientEmail,
      clientPhone,
      legalMatter,
      notes,
      // Agreement
      agreedToTerms,
      clientInformed,
    } = body;

    // Validate required fields
    if (
      !attorneyFirstName || !attorneyLastName || !ardc ||
      !attorneyEmail || !attorneyPhone ||
      !clientFirstName || !clientLastName || !clientPhone ||
      !legalMatter || !agreedToTerms
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const db = await getDb();
    const result = await db.collection('referrals').insertOne({
      attorney: {
        firstName: attorneyFirstName,
        lastName: attorneyLastName,
        firmName: firmName || '',
        ardc,
        email: attorneyEmail,
        phone: attorneyPhone,
      },
      client: {
        firstName: clientFirstName,
        lastName: clientLastName,
        email: clientEmail || '',
        phone: clientPhone,
        legalMatter,
        notes: notes || '',
      },
      agreement: {
        agreedToTerms: true,
        clientInformed: clientInformed || false,
        agreedAt: new Date(),
        ipAddress: req.headers.get('x-forwarded-for') ?? 'unknown',
      },
      status: 'pending',
      submittedAt: new Date(),
    });

    const referralId = result.insertedId.toString();

    // ── Slack notification ────────────────────────────────────
    await postToSlack(
      `:handshake: *New Attorney Referral Submitted*\n\n` +
      `*Referring Attorney:* ${attorneyFirstName} ${attorneyLastName}${firmName ? ` — ${firmName}` : ''}\n` +
      `*ARDC:* ${ardc} | *Email:* ${attorneyEmail} | *Phone:* ${attorneyPhone}\n\n` +
      `*Client:* ${clientFirstName} ${clientLastName}\n` +
      `*Matter:* ${legalMatter}${clientPhone ? ` | *Phone:* ${clientPhone}` : ''}${clientEmail ? ` | *Email:* ${clientEmail}` : ''}\n` +
      `*Client Informed of Fee Arrangement:* ${clientInformed ? 'Yes ✅' : 'Not confirmed'}\n` +
      `${notes ? `*Notes:* ${notes}\n` : ''}` +
      `\n_Referral ID: ${referralId}_`
    );

    // ── Resend emails ─────────────────────────────────────────
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);

      // Internal notification to IEL
      await resend.emails.send({
        from: 'Illinois Estate Law <noreply@illinoisestatelaw.com>',
        to: 'contact@illinoisestatelaw.com',
        subject: `New Attorney Referral — ${clientFirstName} ${clientLastName}`,
        html: `
          <div style="font-family:sans-serif;max-width:640px;margin:0 auto">
            <div style="background:#2D3E50;padding:24px 32px">
              <h1 style="color:#fff;margin:0;font-size:22px">New Referral Submission</h1>
            </div>
            <div style="padding:28px 32px">

              <h3 style="color:#4A708B;margin:0 0 10px">Referring Attorney</h3>
              <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
                <tr><td style="padding:4px 0;color:#666;width:140px">Name</td><td style="padding:4px 0;color:#2D3E50;font-weight:600">${attorneyFirstName} ${attorneyLastName}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Firm</td><td style="padding:4px 0;color:#2D3E50">${firmName || '—'}</td></tr>
                <tr><td style="padding:4px 0;color:#666">ARDC</td><td style="padding:4px 0;color:#2D3E50">${ardc}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Email</td><td style="padding:4px 0;color:#2D3E50">${attorneyEmail}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Phone</td><td style="padding:4px 0;color:#2D3E50">${attorneyPhone}</td></tr>
              </table>

              <h3 style="color:#4A708B;margin:0 0 10px">Referred Client</h3>
              <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
                <tr><td style="padding:4px 0;color:#666;width:140px">Name</td><td style="padding:4px 0;color:#2D3E50;font-weight:600">${clientFirstName} ${clientLastName}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Email</td><td style="padding:4px 0;color:#2D3E50">${clientEmail || '—'}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Phone</td><td style="padding:4px 0;color:#2D3E50">${clientPhone}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Matter Type</td><td style="padding:4px 0;color:#2D3E50">${legalMatter}</td></tr>
                <tr><td style="padding:4px 0;color:#666">Client Informed</td><td style="padding:4px 0;color:#2D3E50">${clientInformed ? 'Yes' : 'Not confirmed'}</td></tr>
              </table>

              ${notes ? `<h3 style="color:#4A708B;margin:0 0 10px">Notes</h3><p style="color:#444;margin:0 0 24px">${notes}</p>` : ''}

              <p style="margin:24px 0 0;color:#888;font-size:12px">
                Referral ID: ${referralId}<br>
                Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT
              </p>
            </div>
          </div>
        `,
      }).catch(console.error);

      // Confirmation to referring attorney
      await resend.emails.send({
        from: 'Illinois Estate Law <noreply@illinoisestatelaw.com>',
        to: attorneyEmail,
        subject: 'Your Referral Has Been Received — Illinois Estate Law',
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#2D3E50;padding:24px 32px">
              <h1 style="color:#fff;margin:0;font-size:22px">Illinois Estate Law</h1>
            </div>
            <div style="padding:32px">
              <p style="color:#2D3E50">Dear ${attorneyFirstName},</p>
              <p style="color:#444">Thank you for referring <strong>${clientFirstName} ${clientLastName}</strong> to Illinois Estate Law. We have received your referral and will reach out to your client promptly.</p>

              <div style="background:#f8f9fa;border-left:4px solid #4A708B;padding:16px 20px;margin:24px 0">
                <p style="margin:0 0 8px;font-weight:bold;color:#2D3E50">Referral Summary</p>
                <p style="margin:0;color:#444">
                  Client: ${clientFirstName} ${clientLastName}<br>
                  Matter: ${legalMatter}<br>
                  Referral Fee: 10% of total attorney fees collected
                </p>
              </div>

              <p style="color:#444">As a reminder, Illinois RPC 1.5(e) requires that your client provide informed written consent to the referral fee arrangement. If you have not already done so, please inform your client that Illinois Estate Law will pay you 10% of the fees collected from this matter.</p>

              <p style="color:#444">We will contact you once the client has been engaged so we can arrange proper documentation of the fee-sharing arrangement.</p>

              <p style="color:#444">Questions? Reach us anytime:</p>
              <p style="color:#444">
                <strong>Illinois Estate Law</strong><br>
                Email: <a href="mailto:contact@illinoisestatelaw.com" style="color:#4A708B">contact@illinoisestatelaw.com</a><br>
                Phone: (312) 373-0731
              </p>

              <p style="color:#444">Thank you again for your trust in us.<br><br>Warm regards,<br><strong>The Team at Illinois Estate Law</strong></p>
            </div>
            <div style="background:#f0f0f0;padding:16px 32px;font-size:12px;color:#888">
              Illinois Estate Law, PC &nbsp;|&nbsp; illinoisestatelaw.com &nbsp;|&nbsp; Referral ID: ${referralId}
            </div>
          </div>
        `,
      }).catch(console.error);
    }

    return NextResponse.json({ success: true, referralId });
  } catch (err) {
    console.error('Referral API error:', err);
    return NextResponse.json(
      { error: 'Failed to submit referral. Please try again.' },
      { status: 500 }
    );
  }
}
