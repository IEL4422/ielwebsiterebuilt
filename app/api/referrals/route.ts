import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function createTransport() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
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

    // Send notification emails (non-fatal if unconfigured)
    const transporter = createTransport();
    if (transporter) {
      const firmEmail = process.env.EMAIL_USER!;

      // Internal notification to IEL
      await transporter
        .sendMail({
          from: `"Illinois Estate Law Website" <${firmEmail}>`,
          to: 'contact@illinoisestatelaw.com',
          subject: `New Attorney Referral — ${clientFirstName} ${clientLastName}`,
          html: `
            <h2 style="color:#2D3E50">New Referral Submission</h2>

            <h3 style="color:#4A708B">Referring Attorney</h3>
            <p>
              <strong>Name:</strong> ${attorneyFirstName} ${attorneyLastName}<br>
              <strong>Firm:</strong> ${firmName || 'N/A'}<br>
              <strong>ARDC:</strong> ${ardc}<br>
              <strong>Email:</strong> ${attorneyEmail}<br>
              <strong>Phone:</strong> ${attorneyPhone}
            </p>

            <h3 style="color:#4A708B">Referred Client</h3>
            <p>
              <strong>Name:</strong> ${clientFirstName} ${clientLastName}<br>
              <strong>Email:</strong> ${clientEmail || 'Not provided'}<br>
              <strong>Phone:</strong> ${clientPhone}<br>
              <strong>Matter Type:</strong> ${legalMatter}<br>
              <strong>Client Informed of Referral Fee:</strong> ${clientInformed ? 'Yes' : 'Not yet / Not confirmed'}
            </p>

            ${notes ? `<h3 style="color:#4A708B">Notes</h3><p>${notes}</p>` : ''}

            <p style="margin-top:24px;color:#666;font-size:12px">
              Referral ID: ${result.insertedId.toString()}<br>
              Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT
            </p>
          `,
        })
        .catch(console.error);

      // Confirmation to referring attorney
      await transporter
        .sendMail({
          from: `"Illinois Estate Law" <${firmEmail}>`,
          to: attorneyEmail,
          subject: 'Your Referral Has Been Received — Illinois Estate Law',
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
              <div style="background:#2D3E50;padding:24px 32px">
                <h1 style="color:#fff;margin:0;font-size:22px">Illinois Estate Law</h1>
              </div>
              <div style="padding:32px">
                <p>Dear ${attorneyFirstName},</p>
                <p>Thank you for referring <strong>${clientFirstName} ${clientLastName}</strong> to Illinois Estate Law. We have received your referral and will reach out to your client promptly.</p>

                <div style="background:#f8f9fa;border-left:4px solid #4A708B;padding:16px 20px;margin:24px 0">
                  <p style="margin:0 0 8px;font-weight:bold;color:#2D3E50">Referral Summary</p>
                  <p style="margin:0;color:#444">
                    Client: ${clientFirstName} ${clientLastName}<br>
                    Matter: ${legalMatter}<br>
                    Referral Fee: 10% of total attorney fees collected
                  </p>
                </div>

                <p>As a reminder, Illinois RPC 1.5(e) requires that your client provide informed written consent to the referral fee arrangement. If you have not already done so, please inform your client that Illinois Estate Law will pay you 10% of the fees collected from this matter.</p>

                <p>We will contact you once the client has been engaged so we can arrange proper documentation of the fee-sharing arrangement.</p>

                <p>If you have any questions, please don't hesitate to reach out:</p>
                <p>
                  <strong>Illinois Estate Law</strong><br>
                  Email: <a href="mailto:contact@illinoisestatelaw.com">contact@illinoisestatelaw.com</a><br>
                  Phone: (312) 373-0731
                </p>

                <p>Thank you again for your trust in us.</p>
                <p>Warm regards,<br><strong>The Team at Illinois Estate Law</strong></p>
              </div>
              <div style="background:#f0f0f0;padding:16px 32px;font-size:12px;color:#666">
                Illinois Estate Law, PC | illinoisestatelaw.com | Referral ID: ${result.insertedId.toString()}
              </div>
            </div>
          `,
        })
        .catch(console.error);
    }

    return NextResponse.json({
      success: true,
      referralId: result.insertedId.toString(),
    });
  } catch (err) {
    console.error('Referral API error:', err);
    return NextResponse.json(
      { error: 'Failed to submit referral. Please try again.' },
      { status: 500 }
    );
  }
}
