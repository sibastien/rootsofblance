'use client';

import Image from 'next/image';

/* ─────────────────────────────────────────────────────────────────────────────
   MEET ALIA DIORAMA (Section 6 Context)
   Theme: The Founder's Warm Botanical Courtyard Sanctuary.
   • Authentic portrait of Alia Alblooki
   • Swaying olive branches gently framing the top & edge of the portrait
   • Soft dappled sunlight (komorebi) light wave overlay
   • Gentle drifting olive leaves
   • Verified brand seal pill with logo
───────────────────────────────────────────────────────────────────────────── */

interface Props {
  imageSrc: string;
  name: string;
  title: string;
}

export default function MeetAliaDiorama({ imageSrc, name, title }: Props) {
  return (
    <div className="relative group">
      {/* Outer arched frame */}
      <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border-4 border-sand-200 relative bg-[#EFE9DD]">
        {/* Portrait Photo */}
        <Image
          src={imageSrc}
          alt={`${name} - Holistic Healing Guide`}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Dappled Sunlight & Leaf Shadows (Komorebi effect) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% 25%, rgba(255, 252, 240, 0.8) 0%, transparent 80%), radial-gradient(ellipse 50% 40% at 75% 70%, rgba(240, 235, 215, 0.6) 0%, transparent 70%)',
          }}
        />

        {/* Botanical Framing: Swaying Olive Branch SVG along top corner */}
        <div className="absolute -top-4 -right-4 w-44 h-44 pointer-events-none select-none rtl:-right-auto rtl:-left-4 rtl:scale-x-[-1]">
          <svg
            viewBox="0 0 160 160"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{
              animation: 'aliaBranchSway 6s ease-in-out infinite alternate',
              transformOrigin: 'top right',
            }}
          >
            {/* Primary branch twig */}
            <path
              d="M 160 0 C 130 30 100 50 65 65 C 40 75 20 80 0 85"
              stroke="#3F4F30"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M 100 50 C 85 70 70 90 50 110"
              stroke="#3F4F30"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* Olive Leaves */}
            <g fill="#4E633C" opacity="0.9">
              <ellipse cx="65" cy="65" rx="14" ry="6" transform="rotate(-30 65 65)" />
              <ellipse cx="45" cy="73" rx="13" ry="5.5" transform="rotate(-15 45 73)" />
              <ellipse cx="20" cy="80" rx="15" ry="6" transform="rotate(5 20 80)" />
              <ellipse cx="5" cy="85" rx="12" ry="5" transform="rotate(20 5 85)" />
              <ellipse cx="85" cy="65" rx="14" ry="6" transform="rotate(35 85 65)" />
              <ellipse cx="70" cy="90" rx="13" ry="5.5" transform="rotate(50 70 90)" />
              <ellipse cx="50" cy="110" rx="15" ry="6" transform="rotate(65 50 110)" />
            </g>
            {/* Olives */}
            <circle cx="55" cy="70" r="3.5" fill="#25301B" />
            <circle cx="75" cy="80" r="3.2" fill="#25301B" />
          </svg>
        </div>

        {/* Ambient bottom gradient for readability */}
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
            Alia Alblooki • علياء البلوكي
          </span>
        </div>
      </div>

      {/* Decorative botanical aura */}
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-200/50 rounded-full blur-2xl -z-10" />

      <style>{`
        @keyframes aliaBranchSway {
          0%   { transform: rotate(0deg); }
          50%  { transform: rotate(-3deg); }
          100% { transform: rotate(2deg); }
        }
      `}</style>
    </div>
  );
}
