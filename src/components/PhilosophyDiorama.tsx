'use client';

import Image from 'next/image';

/* ─────────────────────────────────────────────────────────────────────────────
   PHILOSOPHY LUXURY EMBOSS DIORAMA (Section 5)
   Refined luxury aesthetic:
   • Deep emerald card background (#15231B)
   • Authentic Roots of Balance emblem embossed softly in warm gold
   • Subtle constellation stars and ethereal depth
───────────────────────────────────────────────────────────────────────────── */

export default function PhilosophyDiorama() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-black/30" />

      {/* Subtle brand emblem in warm gold tone */}
      <div className="absolute top-1/2 ltr:right-8 rtl:left-8 -translate-y-1/2 w-80 h-80 opacity-[0.08] invert pointer-events-none">
        <Image
          src="/images/logo.png"
          alt=""
          width={320}
          height={320}
          className="object-contain"
        />
      </div>

      {/* Subtle starlight points in the night canopy */}
      <svg
        viewBox="0 0 1000 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        {[
          { cx: 850, cy: 70, r: 1.5 },
          { cx: 720, cy: 110, r: 1.8 },
          { cx: 920, cy: 140, r: 1.2 },
          { cx: 620, cy: 80, r: 1.6 },
          { cx: 800, cy: 180, r: 1.4 },
        ].map((star, i) => (
          <circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#F4EEDD"
            opacity="0.35"
          />
        ))}
      </svg>
    </div>
  );
}
