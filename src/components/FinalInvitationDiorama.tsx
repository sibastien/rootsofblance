'use client';

import Image from 'next/image';
import Interactive3DSeal from '@/components/Interactive3DSeal';

/* ─────────────────────────────────────────────────────────────────────────────
   FINAL INVITATION LUXURY EMBLEM (Section 8)
   Authentic Roots of Balance emblem with real-time 3D Torus and golden aura
───────────────────────────────────────────────────────────────────────────── */

export default function FinalInvitationDiorama() {
  return (
    <div className="mx-auto relative mb-4 select-none flex flex-col items-center">
      {/* Real-time 3D WebGL Harmonic Seal */}
      <Interactive3DSeal />

      {/* Embedded Brand Core Logo */}
      <div className="-mt-36 sm:-mt-44 mb-10 w-20 h-20 rounded-full bg-white/90 backdrop-blur-md border border-sand-300 shadow-soft flex items-center justify-center p-2 relative z-10 transition-transform hover:scale-105">
        <Image
          src="/images/logo.png"
          alt="Roots of Balance"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
    </div>
  );
}
