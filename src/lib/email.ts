export interface EmailNotification {
  to: string;
  subject: string;
  html: string;
  sentAt: string;
  type: 'booking_confirmation' | 'academy_application' | 'academy_acceptance' | 'inquiry_notification';
}

// In-memory / log store for outbound notifications
const emailLogs: EmailNotification[] = [];

export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  type: EmailNotification['type']
): Promise<boolean> {
  const notification: EmailNotification = {
    to,
    subject,
    html,
    sentAt: new Date().toISOString(),
    type
  };

  emailLogs.unshift(notification);
  console.log(`[EMAIL DISPATCHED] -> To: ${to} | Subject: "${subject}" | Type: ${type}`);
  return true;
}

export function getRecentEmails(): EmailNotification[] {
  return emailLogs;
}

export function buildBookingConfirmationEmail(params: {
  clientName: string;
  serviceTitle: string;
  date: string;
  timeSlot: string;
  format: string;
  bookingRef: string;
}): string {
  return `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FCFBF9; border: 1px solid #E8E0D5; border-radius: 12px; overflow: hidden; color: #2B2523;">
      <div style="background: #3D6352; padding: 32px 24px; text-align: center; color: #FFFFFF;">
        <span style="font-size: 28px;">🪷</span>
        <h1 style="font-size: 24px; margin: 8px 0 4px 0; font-family: 'Playfair Display', Georgia, serif; font-weight: normal;">Roots of Balance</h1>
        <p style="margin: 0; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; opacity: 0.9;">Appointment Booking Confirmation</p>
      </div>
      <div style="padding: 32px 24px;">
        <p style="font-size: 16px; line-height: 1.6;">Dear ${params.clientName},</p>
        <p style="font-size: 15px; line-height: 1.6; color: #574F4A;">Thank you for reserving a personal holistic coaching session with Roots of Balance. Your appointment request has been received and registered under confirmation reference <strong>#${params.bookingRef}</strong>.</p>
        
        <div style="background: #F4F7F5; border-left: 4px solid #4D7C66; padding: 20px; border-radius: 8px; margin: 24px 0;">
          <h3 style="margin-top: 0; font-size: 16px; color: #273E34;">Session Details:</h3>
          <p style="margin: 6px 0;"><strong>Service:</strong> ${params.serviceTitle}</p>
          <p style="margin: 6px 0;"><strong>Date:</strong> ${params.date}</p>
          <p style="margin: 6px 0;"><strong>Time Slot:</strong> ${params.timeSlot}</p>
          <p style="margin: 6px 0;"><strong>Format:</strong> ${params.format}</p>
          <p style="margin: 6px 0;"><strong>Status:</strong> Confirmed / Under Review</p>
        </div>

        <p style="font-size: 14px; line-height: 1.6; color: #574F4A;">If you selected an <em>Online</em> session, your private video consultation link will be dispatched 24 hours prior to our scheduled time. If you need to reschedule, please reply directly to <a href="mailto:rootsofbalance@outlook.com" style="color: #4D7C66;">rootsofbalance@outlook.com</a>.</p>
        
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #E8E0D5; font-size: 13px; color: #8C827A; text-align: center;">
          <p>Roots of Balance • Somatic Alignment & Holistic Wellness</p>
          <p>Instagram: @roots__of_balance • rootsofbalance@outlook.com</p>
        </div>
      </div>
    </div>
  `;
}

export function buildAcademyApplicationEmail(params: {
  fullName: string;
  applicationRef: string;
  preferredFormat: string;
}): string {
  return `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FCFBF9; border: 1px solid #E8E0D5; border-radius: 12px; overflow: hidden; color: #2B2523;">
      <div style="background: #3D6352; padding: 32px 24px; text-align: center; color: #FFFFFF;">
        <span style="font-size: 28px;">🪷</span>
        <h1 style="font-size: 24px; margin: 8px 0 4px 0; font-family: 'Playfair Display', Georgia, serif; font-weight: normal;">Roots of Balance Training Academy</h1>
        <p style="margin: 0; font-size: 13px; letter-spacing: 1px; text-transform: uppercase; opacity: 0.9;">Application Submission Received</p>
      </div>
      <div style="padding: 32px 24px;">
        <p style="font-size: 16px; line-height: 1.6;">Dear ${params.fullName},</p>
        <p style="font-size: 15px; line-height: 1.6; color: #574F4A;">Thank you for your application to join the upcoming cohort of the <strong>Holistic Wellness Coach Training Academy</strong>. Your application has been logged under reference <strong>#${params.applicationRef}</strong>.</p>
        
        <div style="background: #F4F7F5; border-left: 4px solid #4D7C66; padding: 20px; border-radius: 8px; margin: 24px 0;">
          <h3 style="margin-top: 0; font-size: 16px; color: #273E34;">Next Steps in the Admissions Process:</h3>
          <ol style="margin: 8px 0 0 16px; padding: 0; line-height: 1.6; font-size: 14px; color: #37322E;">
            <li><strong>Faculty Review:</strong> Our admissions team and lead coach Alia Alblooki review all applications within 48 business hours.</li>
            <li><strong>Intake Dialogue:</strong> Qualified candidates receive an invitation for a brief 20-minute admissions alignment call.</li>
            <li><strong>Cohort Placement & Onboarding:</strong> Upon acceptance, curriculum materials and schedule access are granted.</li>
          </ol>
        </div>

        <p style="font-size: 14px; line-height: 1.6; color: #574F4A;">We honor your dedication to becoming a certified, heart-led holistic wellness practitioner.</p>
        
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #E8E0D5; font-size: 13px; color: #8C827A; text-align: center;">
          <p>Roots of Balance Academy • Professional Coach Training</p>
          <p>Inquiries: rootsofbalance@outlook.com</p>
        </div>
      </div>
    </div>
  `;
}

