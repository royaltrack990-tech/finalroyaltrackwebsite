import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Email content formatted
    const emailContent = `
New Inquiry from Royal Track Website
=====================================

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
Sent from royaltrack.ae inquiry form
Time: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}
    `;

    // Log to server console (visible in Vercel logs)
    console.log('📧 New Inquiry Received:', emailContent);

    // TODO: Add actual email sending
    // For now, just return success
    // In production, integrate with SendGrid, Resend, or Nodemailer

    // Simulate sending to nouman@royaltrack.ae
    console.log('📨 Sending to: nouman@royaltrack.ae');

    return NextResponse.json({ 
      success: true,
      message: 'Inquiry received successfully' 
    });

  } catch (error) {
    console.error('❌ Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' }, 
      { status: 500 }
    );
  }
}
