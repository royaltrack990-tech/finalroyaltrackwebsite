import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Royal Track Website <noreply@royaltrack.ae>',
      to: ['nouman@royaltrack.ae'],
      subject: `New Inquiry from ${name} - Royal Track Website`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #E8B92C 0%, #C9831A 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #E8B92C; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-left: 3px solid #E8B92C; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🏗️ New Inquiry - Royal Track</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">📱 Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="value">${message}</div>
                </div>
                <div class="footer">
                  <p>Sent from royaltrack.ae inquiry form</p>
                  <p>${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    console.log('✅ Email sent successfully:', data);
    return NextResponse.json({ 
      success: true,
      message: 'Inquiry sent successfully' 
    });

  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' }, 
      { status: 500 }
    );
  }
}
