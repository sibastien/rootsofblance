'use client';

import Image from 'next/image';

/* ─────────────────────────────────────────────────────────────────────────────
   FINAL INVITATION LUXURY EMBLEM (Section 8)
   Authentic Roots of Balance emblem bathed in soft morning light.
───────────────────────────────────────────────────────────────────────────── */

export default function FinalInvitationDiorama() {
  return (
    <div className="w-16 h-16 mx-auto relative mb-6 select-none" aria-hidden="true">
      {/* Soft golden halo */}
      <div className="absolute inset-0 rounded-full bg-sage-200/50 blur-lg animate-pulse" />

      {/* Luxury emblem frame */}
      <div className="w-16 h-16 rounded-full bg-white border border-sand-300 shadow-soft flex items-center justify-center p-2 relative z-10 transition-transform hover:scale-105">
        <Image
          src="/images/logo.png"
          alt="Roots of Balance"
          width={44}
          height={44}
          className="object-contain"
        />
      </div>
    </div>
  );
}
