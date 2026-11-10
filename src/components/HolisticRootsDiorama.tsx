'use client';

import Image from 'next/image';

/* ─────────────────────────────────────────────────────────────────────────────
   HOLISTIC SANCTUARY EDITORIAL FRAME (Section 2)
   High-end editorial composition with genuine photography, subtle warmth,
   and authentic brand hallmark.
───────────────────────────────────────────────────────────────────────────── */

interface Props {
  quote: string;
  quoteAuthor: string;
}

export default function HolisticRootsDiorama({ quote, quoteAuthor }: Props) {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none group">
      {/* Outer arched frame with luxury double-border */}
      <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border-4 border-white relative bg-[#F5F1E8]">
        {/* Genuine high-resolution photography */}
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85"
          alt="Holistic Healing Sanctuary"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter saturate-[0.92]"
        />

        {/* Soft editorial atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/75 via-earth-950/20 to-transparent" />

        {/* Subtle authentic brand watermark in upper corner */}
        <div className="absolute top-5 left-5 rtl:left-auto rtl:right-5 w-16 h-16 opacity-20 pointer-events-none invert">
          <Image src="/images/logo.png" alt="" width={64} height={64} className="object-contain" />
        </div>

        {/* Floating Quote Card */}
        <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-md p-6 rounded-2xl border border-sand-300 shadow-elevated text-left rtl:text-right">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-700" />
            <span className="text-[10px] uppercase tracking-widest text-sage-800 font-semibold">
              حكمة الشفاء الشمولي
            </span>
          </div>
          <p className="font-serif italic text-sm sm:text-base text-earth-900 leading-relaxed">
            {quote}
          </p>
          <span className="block text-xs uppercase tracking-wider text-sage-800 font-semibold mt-3">
            — {quoteAuthor}
          </span>
        </div>
      </div>

      {/* Decorative botanical aura */}
      <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-sage-200/40 rounded-full blur-2xl -z-10" />
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-sand-200/50 rounded-full blur-xl -z-10" />
    </div>
  );
}
