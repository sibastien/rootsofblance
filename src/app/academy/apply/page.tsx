'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import {
  GraduationCap,
  Sparkles,
  User,
  Mail,
  Phone,
  Briefcase,
  Heart,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export default function AcademyApplicationPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [previousExperience, setPreviousExperience] = useState('');
  const [motivation, setMotivation] = useState('');
  const [preferredFormat, setPreferredFormat] = useState<'Online' | 'In-Person' | 'Hybrid'>('Online');
  const [availability, setAvailability] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedApp, setSubmittedApp] = useState<{
    applicationRef: string;
    fullName: string;
    email: string;
    preferredFormat: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName || !email || !phone || !motivation) {
      setErrorMsg('Please complete all required fields: name, email, phone, and motivation.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/academy/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          occupation,
          previousExperience,
          motivation,
          preferredFormat,
          availability,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit training application.');
      }

      setSubmittedApp({
        applicationRef: data.application.applicationRef,
        fullName: data.application.fullName,
        email: data.application.email,
        preferredFormat: data.application.preferredFormat,
      });

      trackEvent('academy_application_submitted', {
        format: preferredFormat,
        value: 3200,
        currency: 'USD',
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'An error occurred during submission.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedApp) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-sand-50 border border-sand-300 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-sage-100 border border-sage-300 text-sage-800 flex items-center justify-center mx-auto text-2xl">
            🪷
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
              Application Received
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-earth-950 font-normal">
              Thank You, {submittedApp.fullName}
            </h1>
            <p className="text-sm text-earth-600 font-light max-w-lg mx-auto leading-relaxed">
              Your application for the <strong>Holistic Wellness Coach Training Academy</strong> has been registered under reference <strong>#{submittedApp.applicationRef}</strong>.
            </p>
          </div>

          <div className="bg-sand-100/80 border border-sand-300/80 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3 text-xs text-earth-800">
            <div className="flex justify-between pb-2 border-b border-sand-200">
              <span className="text-earth-500 font-light">Application Ref:</span>
              <span className="font-mono font-bold text-sage-900">{submittedApp.applicationRef}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-sand-200">
              <span className="text-earth-500 font-light">Applicant Email:</span>
              <span className="font-medium text-earth-900">{submittedApp.email}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-sand-200">
              <span className="text-earth-500 font-light">Preferred Format:</span>
              <span className="font-medium text-earth-900">{submittedApp.preferredFormat}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-earth-500 font-light">Status:</span>
              <span className="font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Pending Faculty Review
              </span>
            </div>
          </div>

          <p className="text-xs text-earth-500 font-light max-w-md mx-auto">
            Our admissions committee reviews submissions every 48 business hours. You will receive an invitation to an alignment dialogue if selected.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/academy"
              className="px-6 py-3 rounded-full bg-sage-700 text-white font-medium text-xs uppercase tracking-wider hover:bg-sage-800 transition"
            >
              Return to Academy Overview
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-full border border-sand-300 text-earth-800 font-medium text-xs uppercase tracking-wider hover:bg-sand-100 transition"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Cohort Admissions</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-earth-950 font-normal">
          Apply to the Coach Training Academy
        </h1>
        <p className="text-sm text-earth-600 font-light leading-relaxed">
          Please complete the candidate profile below. We limit cohorts to 16 students to ensure intensive supervision and personal mentorship with Alia Alblooki.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-terracotta-50 border border-terracotta-300 text-terracotta-900 rounded-xl p-4 text-xs flex items-start gap-2.5 max-w-2xl mx-auto">
          <AlertCircle className="w-4 h-4 text-terracotta-700 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Application Form */}
      <form onSubmit={handleSubmit} className="bg-sand-50 border border-sand-300 rounded-3xl p-8 sm:p-10 shadow-sm space-y-8">
        
        {/* Section 1: Personal Details */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl text-earth-900 font-medium border-b border-sand-200 pb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-sage-700" />
            <span>1. Contact & Professional Background</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-earth-700 block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Yasmin Al-Mansoor"
                className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-earth-700 block mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yasmin@example.com"
                className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-earth-700 block mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-earth-700 block mb-1">
                Current Occupation
              </label>
              <input
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                placeholder="e.g. Yoga Instructor, Nurse, Corporate Consultant"
                className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Experience & Motivation */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl text-earth-900 font-medium border-b border-sand-200 pb-2 flex items-center gap-2">
            <Heart className="w-4 h-4 text-sage-700" />
            <span>2. Experience & Motivations</span>
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-earth-700 block mb-1">
                Previous Coaching, Wellness, or Bodywork Experience (If any)
              </label>
              <textarea
                rows={3}
                value={previousExperience}
                onChange={(e) => setPreviousExperience(e.target.value)}
                placeholder="Describe any previous training, client work, personal practices, or life experiences..."
                className="w-full bg-sand-100 border border-sand-300 rounded-xl p-3 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition resize-none"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-earth-700 block mb-1">
                What is your core motivation for becoming a Holistic Wellness Coach? *
              </label>
              <textarea
                rows={4}
                required
                value={motivation}
                onChange={(e) => setMotivation(e.target.value)}
                placeholder="Tell us what draws you to this work, who you desire to serve, and what you hope to achieve through this training..."
                className="w-full bg-sand-100 border border-sand-300 rounded-xl p-3 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition resize-none"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Format & Availability */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl text-earth-900 font-medium border-b border-sand-200 pb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sage-700" />
            <span>3. Preferred Format & Availability</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-earth-700 block mb-1">
                Preferred Training Format
              </label>
              <select
                value={preferredFormat}
                onChange={(e) => setPreferredFormat(e.target.value as 'Online' | 'In-Person' | 'Hybrid')}
                className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
              >
                <option value="Online">Online (Global Live Zoom & Practicum)</option>
                <option value="Hybrid">Hybrid (Online + 3-Day Somatic Intensive)</option>
                <option value="In-Person">In-Person (Studio Cohort)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-earth-700 block mb-1">
                Weekly Availability
              </label>
              <input
                type="text"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                placeholder="e.g. Weekday evenings, Saturday mornings"
                className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
              />
            </div>
          </div>
        </div>

        {/* Ethics & Accreditation Disclaimer */}
        <div className="bg-sand-100/70 border border-sand-300 rounded-xl p-4 text-[11px] text-earth-600 leading-relaxed space-y-1">
          <p className="font-medium text-earth-800">Admissions & Ethics Notice:</p>
          <p>
            Submission of this application does not guarantee enrollment. All applications are reviewed for ethical alignment and readiness. We do not make exaggerated earnings claims or offer unverified third-party accreditations. Graduates receive the official Roots of Balance Professional Holistic Wellness Coach Certificate of Completion.
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{submitting ? 'Submitting Application...' : 'Submit Application for Review'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

