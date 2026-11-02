import Image from 'next/image';
import Link from 'next/link';
import { db } from '@/lib/db';
import { ShieldCheck, Calendar, GraduationCap, Heart, Compass, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Alia Alblooki | Roots of Balance',
  description: 'Learn about Alia Alblooki, Holistic Wellness Coach, Psychological Balance Specialist, and founder of the Roots of Balance Academy.',
};

export default function AboutPage() {
  const profile = db.getProfile();

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-sand-100/70 border-b border-sand-300/60 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block mb-2">
              Biography & Credentials
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-earth-950 font-normal leading-tight mb-4">
              Meet {profile.coachName}
            </h1>
            <p className="text-base sm:text-lg text-earth-700 font-light leading-relaxed">
              {profile.bioHeadline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Key Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-sand-200 relative">
              <Image
                src="/images/alia-alblooki.jpg"
                alt={profile.coachName}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="bg-sand-100/80 border border-sand-300 rounded-2xl p-6 space-y-4">
              <h3 className="font-serif text-lg text-earth-900 font-medium">Quick Facts</h3>
              <ul className="space-y-3 text-xs text-earth-700">
                <li className="flex items-center justify-between pb-2 border-b border-sand-200">
                  <span className="text-earth-500 font-light">Experience</span>
                  <span className="font-medium text-earth-900">20+ Years in Practice</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-sand-200">
                  <span className="text-earth-500 font-light">Practice Base</span>
                  <span className="font-medium text-earth-900">{profile.location}</span>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-sand-200">
                  <span className="text-earth-500 font-light">Delivery</span>
                  <span className="font-medium text-earth-900">Online & In-Person</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-earth-500 font-light">Email</span>
                  <a href={`mailto:${profile.email}`} className="text-sage-800 underline font-medium">
                    {profile.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col gap-3">
              <Link
                href="/book"
                className="w-full text-center py-3 rounded-full bg-sage-700 text-white font-medium text-xs uppercase tracking-wider hover:bg-sage-800 transition shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule 1-on-1 Session
              </Link>
              <Link
                href="/academy/apply"
                className="w-full text-center py-3 rounded-full border border-earth-800 text-earth-900 font-medium text-xs uppercase tracking-wider hover:bg-sand-200 transition flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Apply for Coach Training
              </Link>
            </div>
          </div>

          {/* Right Column: Full Story & Credentials */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-sm sm:text-base text-earth-800 leading-relaxed font-light">
              <h2 className="font-serif text-2xl sm:text-3xl text-earth-900 font-normal">
                Personal Journey & Approach
              </h2>
              {profile.bioStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Verified Certifications Section */}
            <div className="pt-6 border-t border-sand-300 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl text-earth-900 font-normal">
                  Verified Qualifications & Certifications
                </h3>
                <span className="text-xs text-sage-800 font-medium inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  All Verified
                </span>
              </div>
              <p className="text-xs text-earth-600 font-light">
                Roots of Balance is committed to complete transparency. Below are the formal licenses, diplomas, and specialist certifications held by Alia Alblooki.
              </p>

              <div className="space-y-3 pt-2">
                {profile.credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="bg-sand-50 border border-sand-300 rounded-xl p-4 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center text-sage-800 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-earth-900">{cred.title}</h4>
                      <p className="text-xs text-earth-600 mt-0.5">
                        {cred.institution} • Issued {cred.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ethical Scope & Boundaries */}
            <div className="bg-sage-50/70 border border-sage-200 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-sage-900">
                <Heart className="w-5 h-5 text-sage-700" />
                <h4 className="font-serif text-lg font-medium">Ethical Scope & Boundaries</h4>
              </div>
              <p className="text-xs text-earth-700 leading-relaxed font-light">
                Holistic wellness coaching is a collaborative, forward-facing discipline that supports habit creation, nervous system self-regulation, and personal alignment. It is not psychotherapeutic treatment or clinical psychiatry. If a client presents with clinical depression, severe trauma, or acute medical conditions, they are immediately supported with professional referrals to licensed medical providers.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

