import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isAuthenticated } from '@/lib/auth';
import { sendEmail, buildBookingConfirmationEmail } from '@/lib/email';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const dateParam = searchParams.get('date');

  // If public user requests occupied slots for a given date:
  if (dateParam) {
    const allBookings = db.getBookings();
    const activeOnDate = allBookings.filter(
      b => b.date === dateParam && b.status !== 'cancelled' && b.status !== 'rejected'
    );
    const occupiedSlots = activeOnDate.map(b => b.timeSlot);
    return NextResponse.json({
      date: dateParam,
      occupiedSlots,
      workingHours: db.getProfile().workingHours
    });
  }

  // Otherwise, only authenticated admin can view the complete bookings list
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const bookings = db.getBookings();
  return NextResponse.json({ bookings });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      serviceId,
      serviceTitle,
      clientName,
      clientEmail,
      clientPhone,
      format,
      date,
      timeSlot,
      notes
    } = body;

    // Validation
    if (!serviceId || !clientName || !clientEmail || !clientPhone || !date || !timeSlot) {
      return NextResponse.json(
        { error: 'Please provide all required fields: service, name, email, phone, date, and time slot.' },
        { status: 400 }
      );
    }

    // Verify email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Create booking in database with conflict prevention
    const newBooking = db.createBooking({
      serviceId,
      serviceTitle: serviceTitle || 'Holistic Coaching Session',
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim().toLowerCase(),
      clientPhone: clientPhone.trim(),
      format: format || 'Online',
      date,
      timeSlot,
      notes: notes || ''
    });

    // Send confirmation email to client
    const emailHtml = buildBookingConfirmationEmail({
      clientName: newBooking.clientName,
      serviceTitle: newBooking.serviceTitle,
      date: newBooking.date,
      timeSlot: newBooking.timeSlot,
      format: newBooking.format,
      bookingRef: newBooking.bookingRef
    });

    await sendEmail(
      newBooking.clientEmail,
      `Your Booking Confirmation #${newBooking.bookingRef} | Roots of Balance`,
      emailHtml,
      'booking_confirmation'
    );

    // Also notify coach
    const coachProfile = db.getProfile();
    await sendEmail(
      coachProfile.email,
      `New Appointment Reserved: ${newBooking.clientName} (${newBooking.date} at ${newBooking.timeSlot})`,
      `<p>New booking received from <strong>${newBooking.clientName}</strong> (${newBooking.clientEmail}) for <strong>${newBooking.serviceTitle}</strong> on ${newBooking.date} at ${newBooking.timeSlot}. Notes: ${newBooking.notes || 'None'}</p>`,
      'booking_confirmation'
    );

    return NextResponse.json({
      success: true,
      booking: newBooking
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to create booking';
    return NextResponse.json({ error: message }, { status: 409 });
  }
}

