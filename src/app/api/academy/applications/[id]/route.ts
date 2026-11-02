import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isAuthenticated } from '@/lib/auth';
import { sendEmail } from '@/lib/email';

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  try {
    const body = await req.json();
    const { status, adminNotes } = body;

    const updated = db.updateAcademyApplicationStatus(id, status, adminNotes);
    if (!updated) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    // If status changed to accepted, trigger acceptance notification
    if (status === 'accepted') {
      await sendEmail(
        updated.email,
        `Congratulations! You have been accepted to the Roots of Balance Academy (#${updated.applicationRef})`,
        `
          <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E8E0D5; border-radius: 8px;">
            <h2 style="color: #3D6352; font-family: 'Playfair Display', Georgia, serif;">Welcome to the Academy!</h2>
            <p>Dear ${updated.fullName},</p>
            <p>We are delighted to inform you that your application for the <strong>Holistic Wellness Coach Training Academy</strong> has been accepted.</p>
            <p>Your dedication, emotional maturity, and motivation stood out to our faculty. Our admissions team will connect with you within 2 business days with your cohort onboarding package and orientation schedule.</p>
            <p>Warmest regards,<br><strong>Alia Alblooki</strong><br>Founder, Roots of Balance Academy</p>
          </div>
        `,
        'academy_acceptance'
      );
    }

    return NextResponse.json({ success: true, application: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Update failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

