'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   FINAL INVITATION DIORAMA (Section 8 Context)
   Theme: The Sacred Olive Seedling at Dawn.
   • A tender young olive sapling rooted in fertile earth
   • Morning dew drops & soft golden sunrise glow
   • Gentle wind wafting its young green leaves
───────────────────────────────────────────────────────────────────────────── */

export default function FinalInvitationDiorama() {
  return (
    <div className="w-24 h-24 mx-auto relative mb-6 select-none" aria-hidden="true">
      {/* Ambient sunrise halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sage-200/60 via-sand-200/80 to-amber-100/70 blur-md animate-pulse" />

      {/* Sapling & Ground SVG */}
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* Ground line */}
        <line
          x1="15"
          y1="75"
          x2="85"
          y2="75"
          stroke="#5C4E3D"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Small exposed seedling roots */}
        <g stroke="#483B2C" fill="none" strokeLinecap="round">
          <path d="M 50 75 Q 42 82 34 85" strokeWidth="1.5" />
          <path d="M 50 75 Q 46 88 42 92" strokeWidth="1.2" />
          <path d="M 50 75 Q 58 82 66 85" strokeWidth="1.5" />
          <path d="M 50 75 Q 54 88 58 92" strokeWidth="1.2" />
        </g>

        {/* Tender stem swaying gently */}
        <path
          d="M 50 75 C 49 60 52 48 50 35"
          stroke="#4F663B"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
          style={{
            animation: 'seedlingSway 4.8s ease-in-out infinite alternate',
            transformOrigin: '50px 75px',
          }}
        />

        {/* Young tender olive leaves */}
        <g
          fill="#5B7844"
          style={{
            animation: 'seedlingSway 4.8s ease-in-out infinite alternate',
            transformOrigin: '50px 75px',
          }}
        >
          {/* Top leaves */}
          <ellipse cx="44" cy="34" rx="9" ry="4" transform="rotate(-30 44 34)" />
          <ellipse cx="56" cy="34" rx="9" ry="4" transform="rotate(30 56 34)" />
          <ellipse cx="50" cy="26" rx="7" ry="3.5" transform="rotate(-5 50 26)" fill="#6D8F52" />

          {/* Lower leaf pair */}
          <ellipse cx="43" cy="48" rx="8" ry="3.5" transform="rotate(-40 43 48)" />
          <ellipse cx="57" cy="48" rx="8" ry="3.5" transform="rotate(40 57 48)" />
        </g>

        {/* Morning dew drop on leaf tip */}
        <circle cx="36" cy="31" r="1.5" fill="#E8F4DC" opacity="0.9" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="36" cy="31" r="1.2" fill="#FFFFFF" />
      </svg>

      <style>{`
        @keyframes seedlingSway {
          0%   { transform: rotate(0deg); }
          50%  { transform: rotate(3deg); }
          100% { transform: rotate(-2.5deg); }
        }
      `}</style>
    </div>
  );
}
