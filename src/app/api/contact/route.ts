import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const inquiry = db.createInquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      subject: subject?.trim() || 'General Website Enquiry',
      message: message.trim(),
      source: 'Contact Page Form'
    });

    // Notify coach
    const coachProfile = db.getProfile();
    await sendEmail(
      coachProfile.email,
      `New Website Enquiry: ${inquiry.name} - ${inquiry.subject}`,
      `
        <p><strong>From:</strong> ${inquiry.name} (${inquiry.email})</p>
        <p><strong>Phone:</strong> ${inquiry.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${inquiry.subject}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 3px solid #4D7C66; padding-left: 12px; color: #555;">${inquiry.message}</blockquote>
      `,
      'inquiry_notification'
    );

    return NextResponse.json({ success: true, inquiry });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to send message';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

