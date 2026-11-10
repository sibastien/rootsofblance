'use client';

import Image from 'next/image';

/* ─────────────────────────────────────────────────────────────────────────────
   MEET ALIA EDITORIAL PORTRAIT FRAME (Section 6)
   High-end editorial sanctuary composition for Alia Alblooki:
   • Authentic portrait with fine linen border
   • Subtle brand hallmark seal pill
   • Warm ambient shadow
───────────────────────────────────────────────────────────────────────────── */

interface Props {
  imageSrc: string;
  name: string;
  title: string;
}

export default function MeetAliaDiorama({ imageSrc, name, title }: Props) {
  return (
    <div className="relative group">
      {/* Editorial Frame with Warm Ivory Matting */}
      <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border-4 border-sand-200 relative bg-[#F5F1E8]">
        <Image
          src={imageSrc}
          alt={`${name} - Holistic Healing Guide`}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Soft natural lighting gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-950/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Founder Badge Pill */}
      <div className="absolute -bottom-4 ltr:-right-4 rtl:-left-4 bg-[#FAF8F5]/95 backdrop-blur-md border border-sand-300 rounded-2xl p-4 shadow-elevated text-center flex items-center gap-3 z-10 transition-transform group-hover:scale-105">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1 border border-sand-200 shadow-sm">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="text-left rtl:text-right">
          <span className="text-xs uppercase tracking-wider text-earth-900 font-semibold block">
            Roots of Balance
          </span>
          <span className="text-[10px] text-sage-700 font-light block">
            {name}
          </span>
        </div>
      </div>

      {/* Decorative ambient aura */}
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-200/40 rounded-full blur-2xl -z-10" />
    </div>
  );
}
