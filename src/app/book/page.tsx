'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
  User,
  Mail,
  Phone,
  FileText,
  Sparkles
} from 'lucide-react';

interface ServiceOption {
  id: string;
  title: string;
  durationMinutes: number;
  price: number;
  format: string;
}

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedServiceId = searchParams.get('service');

  const [services, setServices] = useState<ServiceOption[]>([]);
  const [selectedService, setSelectedService] = useState<string>(preselectedServiceId || 'srv-1');
  const [selectedFormat, setSelectedFormat] = useState<'Online' | 'In-Person'>('Online');
  
  // Date selection (default to tomorrow or first weekday)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(defaultDateStr);

  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [occupiedSlots, setOccupiedSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [loadingSlots, setLoadingSlots] = useState<boolean>(false);

  // Client Details
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<{
    bookingRef: string;
    serviceTitle: string;
    date: string;
    timeSlot: string;
    format: string;
    clientEmail: string;
  } | null>(null);

  // Load services
  useEffect(() => {
    fetch('/api/content/services')
      .then(res => res.json())
      .then(data => {
        if (data.services) {
          setServices(data.services);
          if (preselectedServiceId && data.services.some((s: ServiceOption) => s.id === preselectedServiceId)) {
            setSelectedService(preselectedServiceId);
          } else if (data.services.length > 0 && !selectedService) {
            setSelectedService(data.services[0].id);
          }
        }
      })
      .catch(err => console.error('Failed to load services:', err));

    trackEvent('booking_started');
  }, [preselectedServiceId]);

  // Load occupied slots whenever date changes
  useEffect(() => {
    if (!selectedDate) return;

    setLoadingSlots(true);
    fetch(`/api/bookings?date=${selectedDate}`)
      .then(res => res.json())
      .then(data => {
        const occupied = data.occupiedSlots || [];
        setOccupiedSlots(occupied);

        // Standard hourly slots between 09:00 and 17:00
        const allPossibleSlots = [
          '09:00',
          '10:15',
          '11:30',
          '13:00',
          '14:15',
          '15:30',
          '16:45',
        ];

        setAvailableSlots(allPossibleSlots);
        // If current selected slot is occupied on new date, reset it
        if (occupied.includes(selectedSlot)) {
          setSelectedSlot('');
        }
      })
      .catch(err => console.error('Error fetching slots:', err))
      .finally(() => setLoadingSlots(false));
  }, [selectedDate, selectedSlot]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!selectedService || !selectedDate || !selectedSlot || !clientName || !clientEmail || !clientPhone) {
      setErrorMsg('Please select a service, date, time slot, and fill in your contact information.');
      return;
    }

    setSubmitting(true);

    const chosenServiceObj = services.find(s => s.id === selectedService);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: selectedService,
          serviceTitle: chosenServiceObj?.title || 'Holistic Coaching Session',
          clientName,
          clientEmail,
          clientPhone,
          format: selectedFormat,
          date: selectedDate,
          timeSlot: selectedSlot,
          notes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit booking reservation.');
      }

      setConfirmedBooking({
        bookingRef: data.booking.bookingRef,
        serviceTitle: data.booking.serviceTitle,
        date: data.booking.date,
        timeSlot: data.booking.timeSlot,
        format: data.booking.format,
        clientEmail: data.booking.clientEmail,
      });

      trackEvent('booking_submitted', {
        serviceId: selectedService,
        serviceTitle: chosenServiceObj?.title,
        value: chosenServiceObj?.price || 150,
        currency: 'USD',
        format: selectedFormat,
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'An error occurred during booking.');
    } finally {
      setSubmitting(false);
    }
  };

  // If successfully booked, render elegant confirmation state
  if (confirmedBooking) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-sand-50 border border-sand-300 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-sage-100 border border-sage-300 text-sage-800 flex items-center justify-center mx-auto text-2xl">
            🪷
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
              Reservation Confirmed
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-earth-950 font-normal">
              Your Session Has Been Booked
            </h1>
            <p className="text-sm text-earth-600 font-light max-w-lg mx-auto leading-relaxed">
              We have dispatched a formal confirmation to <strong>{confirmedBooking.clientEmail}</strong> with your session details and intake instructions.
            </p>
          </div>

          {/* Reference Card */}
          <div className="bg-sand-100/80 border border-sand-300/80 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 text-xs text-earth-800">
            <div className="flex justify-between pb-2 border-b border-sand-200">
              <span className="text-earth-500 font-light">Reference Number:</span>
              <span className="font-mono font-bold text-sage-900">{confirmedBooking.bookingRef}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-sand-200">
              <span className="text-earth-500 font-light">Service:</span>
              <span className="font-medium text-earth-900">{confirmedBooking.serviceTitle}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-sand-200">
              <span className="text-earth-500 font-light">Date & Time:</span>
              <span className="font-medium text-earth-900">{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-earth-500 font-light">Format:</span>
              <span className="font-medium text-earth-900">{confirmedBooking.format}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-sage-700 text-white font-medium text-xs uppercase tracking-wider hover:bg-sage-800 transition"
            >
              Return to Homepage
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 rounded-full border border-sand-300 text-earth-800 font-medium text-xs uppercase tracking-wider hover:bg-sand-100 transition"
            >
              Explore Wellness Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const selectedServiceObj = services.find(s => s.id === selectedService);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
          Appointment Calendar
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-earth-950 font-normal">
          Schedule Your Holistic Coaching Session
        </h1>
        <p className="text-sm text-earth-600 font-light leading-relaxed">
          Select your desired service, pick an open date, and reserve your time slot. All appointments are reviewed directly by Alia Alblooki.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-terracotta-50 border border-terracotta-300 text-terracotta-900 rounded-xl p-4 text-xs flex items-start gap-2.5 max-w-2xl mx-auto">
          <AlertCircle className="w-4 h-4 text-terracotta-700 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Main Booking Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Step 1 & Step 2 (Service & Slot Picker) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Step 1: Service Selection */}
          <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sage-700 text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h2 className="font-serif text-lg text-earth-900 font-medium">Select Coaching Service</h2>
            </div>

            <div className="space-y-2.5">
              {services.map((svc) => (
                <label
                  key={svc.id}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedService === svc.id
                      ? 'border-sage-600 bg-sage-50/70 shadow-sm'
                      : 'border-sand-300 bg-sand-100/50 hover:bg-sand-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="service"
                      value={svc.id}
                      checked={selectedService === svc.id}
                      onChange={() => setSelectedService(svc.id)}
                      className="accent-sage-700"
                    />
                    <div>
                      <span className="text-sm font-medium text-earth-900 block">{svc.title}</span>
                      <span className="text-xs text-earth-500">{svc.durationMinutes} mins • {svc.format}</span>
                    </div>
                  </div>
                  <span className="font-serif text-base font-medium text-earth-950">
                    ${svc.price}
                  </span>
                </label>
              ))}
            </div>

            {/* Format choice: Online vs In-person */}
            <div className="pt-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-earth-700 block mb-2">
                Session Modality:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedFormat('Online')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition ${
                    selectedFormat === 'Online'
                      ? 'bg-sage-700 text-white border-sage-700 shadow-sm'
                      : 'bg-sand-100 text-earth-700 border-sand-300 hover:bg-sand-200'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Online (Secure Video)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedFormat('In-Person')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition ${
                    selectedFormat === 'In-Person'
                      ? 'bg-sage-700 text-white border-sage-700 shadow-sm'
                      : 'bg-sand-100 text-earth-700 border-sand-300 hover:bg-sand-200'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>In-Person (Studio)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Step 2: Date & Available Slots */}
          <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sage-700 text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h2 className="font-serif text-lg text-earth-900 font-medium">Choose Date & Time Slot</h2>
            </div>

            {/* Date Input */}
            <div>
              <label htmlFor="booking-date" className="text-xs font-medium text-earth-700 block mb-1.5">
                Select Date:
              </label>
              <input
                id="booking-date"
                type="date"
                min={defaultDateStr}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-sm text-earth-900 focus:outline-none focus:border-sage-600 transition"
              />
            </div>

            {/* Slots Grid */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-earth-700">Available Time Slots (EST):</span>
                {loadingSlots && <span className="text-xs text-earth-500 animate-pulse">Checking calendar...</span>}
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                {availableSlots.map((slot) => {
                  const isOccupied = occupiedSlots.includes(slot);
                  const isSelected = selectedSlot === slot;

                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={isOccupied}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition ${
                        isOccupied
                          ? 'bg-sand-200/50 text-earth-400 border-sand-200 cursor-not-allowed line-through'
                          : isSelected
                          ? 'bg-sage-700 text-white border-sage-700 shadow-sm'
                          : 'bg-sand-100 text-earth-800 border-sand-300 hover:bg-sand-200'
                      }`}
                    >
                      {slot}
                      {isOccupied && <span className="block text-[9px] uppercase font-bold text-terracotta-600 mt-0.5">Booked</span>}
                    </button>
                  );
                })}
              </div>

              <p className="text-[11px] text-earth-500 font-light pt-1">
                * To prevent double bookings, occupied slots are locked automatically in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Step 3 (Client Details & Confirmation Summary) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sage-700 text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h2 className="font-serif text-lg text-earth-900 font-medium">Your Contact Details</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-earth-700 block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-earth-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Elena Vance"
                    className="w-full bg-sand-100 border border-sand-300 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-earth-700 block mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-earth-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="elena@example.com"
                    className="w-full bg-sand-100 border border-sand-300 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-earth-700 block mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-earth-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-sand-100 border border-sand-300 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-earth-700 block mb-1">
                  What brings you to coaching today? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share a brief overview of your current stressors, health intentions, or questions..."
                  className="w-full bg-sand-100 border border-sand-300 rounded-xl p-3 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition resize-none"
                />
              </div>
            </div>

            {/* Session Summary Card */}
            <div className="bg-sand-100/90 border border-sand-300/80 rounded-xl p-4 space-y-2 text-xs">
              <span className="font-semibold uppercase tracking-wider text-earth-800 block">
                Booking Summary:
              </span>
              <div className="flex justify-between text-earth-700">
                <span>Selected:</span>
                <span className="font-medium text-earth-900">{selectedServiceObj?.title || 'Coaching'}</span>
              </div>
              <div className="flex justify-between text-earth-700">
                <span>Date & Slot:</span>
                <span className="font-medium text-earth-900">
                  {selectedDate} at {selectedSlot || 'Select slot'}
                </span>
              </div>
              <div className="flex justify-between text-earth-700">
                <span>Total Investment:</span>
                <span className="font-serif text-base font-normal text-earth-950">
                  ${selectedServiceObj?.price || 150} USD
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting || !selectedSlot}
              className="w-full py-3.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{submitting ? 'Confirming Reservation...' : 'Confirm Appointment Reservation'}</span>
            </button>

            <div className="flex items-center gap-2 text-[11px] text-earth-500 font-light justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-sage-700" />
              <span>No immediate charge required. We confirm details via email.</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-xs text-earth-500">Loading booking calendar...</div>}>
      <BookingContent />
    </Suspense>
  );
}

