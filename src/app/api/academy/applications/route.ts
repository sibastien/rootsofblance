import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isAuthenticated } from '@/lib/auth';
import { sendEmail, buildAcademyApplicationEmail } from '@/lib/email';

export async function GET() {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const applications = db.getAcademyApplications();
  return NextResponse.json({ applications });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      occupation,
      previousExperience,
      motivation,
      preferredFormat,
      availability
    } = body;

    if (!fullName || !email || !phone || !motivation) {
      return NextResponse.json(
        { error: 'Please provide all required fields: full name, email, phone, and motivation.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const application = db.createAcademyApplication({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      occupation: occupation?.trim() || 'Not specified',
      previousExperience: previousExperience?.trim() || 'None',
      motivation: motivation.trim(),
      preferredFormat: preferredFormat || 'Online',
      availability: availability?.trim() || 'Flexible'
    });

    // Send confirmation email to applicant
    const applicantEmailHtml = buildAcademyApplicationEmail({
      fullName: application.fullName,
      applicationRef: application.applicationRef,
      preferredFormat: application.preferredFormat
    });

    await sendEmail(
      application.email,
      `Training Academy Application #${application.applicationRef} | Roots of Balance`,
      applicantEmailHtml,
      'academy_application'
    );

    // Notify coach
    const coachProfile = db.getProfile();
    await sendEmail(
      coachProfile.email,
      `New Coach Academy Application: ${application.fullName} (#${application.applicationRef})`,
      `<p>New training application received from <strong>${application.fullName}</strong> (${application.email}). Occupation: ${application.occupation}. Format: ${application.preferredFormat}. Motivation: ${application.motivation}</p>`,
      'academy_application'
    );

    return NextResponse.json({ success: true, application });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Application submission failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

