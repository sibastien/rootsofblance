'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   DIMENSION DIORAMA BOX (Section 3 Context)
   Reacts dynamically to the selected dimension:
   • 'emotional': Flowing soothing water currents, river ripples, falling dew
   • 'mental': High mountain wind currents, clarity breeze wisps, soaring sky
   • 'physical': Centenary olive tree wood grain rings, rich earthy strata
   • 'spiritual': Starlight constellations, golden dawn rays filtering through canopy
───────────────────────────────────────────────────────────────────────────── */

interface Props {
  dimensionId: string;
}

export default function DimensionDioramaBox({ dimensionId }: Props) {
  return (
    <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-sand-300/80 shadow-inner bg-sand-50 select-none">
      {/* ── 1. EMOTIONAL WELLBEING (WATER & FLOW) ────────────────────────── */}
      {dimensionId === 'emotional' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#E3EDE8] via-[#D2E4DA] to-[#C1D9CC] flex items-center justify-center overflow-hidden">
          {/* Animated Water Ripple Rings */}
          <svg
            viewBox="0 0 400 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
          >
            {/* Concentric gentle water ripples */}
            <ellipse
              cx="200"
              cy="100"
              rx="60"
              ry="25"
              fill="none"
              stroke="#8EAFA0"
              strokeWidth="1.5"
              className="animate-ping"
              style={{ animationDuration: '4.5s' }}
            />
            <ellipse
              cx="200"
              cy="100"
              rx="110"
              ry="45"
              fill="none"
              stroke="#7E9F90"
              strokeWidth="1.2"
              className="animate-ping"
              style={{ animationDuration: '6s', animationDelay: '1.5s' }}
            />
            <ellipse
              cx="200"
              cy="100"
              rx="170"
              ry="70"
              fill="none"
              stroke="#6E8F80"
              strokeWidth="1"
              opacity="0.5"
            />
            {/* Soft river wave curves */}
            <path
              d="M 0 60 Q 100 80 200 65 T 400 70"
              fill="none"
              stroke="#A3C5B5"
              strokeWidth="2"
              opacity="0.6"
            />
            <path
              d="M 0 135 Q 120 120 240 138 T 400 130"
              fill="none"
              stroke="#8DAF9F"
              strokeWidth="2"
              opacity="0.5"
            />
            {/* Floating olive leaf floating on the surface */}
            <g transform="translate(195, 92) rotate(-15)">
              <ellipse cx="0" cy="0" rx="14" ry="6" fill="#4D6B58" opacity="0.85" />
              <line x1="-12" y1="0" x2="12" y2="0" stroke="#334B3C" strokeWidth="0.8" />
            </g>
          </svg>
          <div className="absolute bottom-3 left-4 rtl:right-4 text-[11px] font-serif italic text-sage-800 opacity-80">
            عنصر الماء • سكون وانسياب المشاعر
          </div>
        </div>
      )}

      {/* ── 2. MENTAL WELLBEING (AIR & CLARITY) ──────────────────────────── */}
      {dimensionId === 'mental' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAE6DF] via-[#E2DDD3] to-[#D5CEC2] flex items-center justify-center overflow-hidden">
          {/* Sweeping Wind & Mountain Air Currents */}
          <svg
            viewBox="0 0 400 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
          >
            {/* Horizon mountain contour */}
            <path
              d="M 0 180 Q 90 120 180 145 T 320 110 T 400 130 L 400 200 L 0 200 Z"
              fill="#BFB6A4"
              fillOpacity="0.4"
            />
            {/* Crisp breeze streamline currents */}
            <path
              d="M -20 50 C 90 30 180 70 280 40 C 340 25 380 45 420 35"
              fill="none"
              stroke="#7A8F70"
              strokeWidth="1.8"
              strokeDasharray="6 8"
              opacity="0.75"
            />
            <path
              d="M -20 90 C 80 110 200 80 300 100 C 350 110 390 95 420 105"
              fill="none"
              stroke="#6B8061"
              strokeWidth="2.2"
              strokeDasharray="12 12"
              opacity="0.65"
            />
            <path
              d="M 420 140 C 310 120 190 150 90 130 C 40 120 0 135 -20 130"
              fill="none"
              stroke="#5C7152"
              strokeWidth="1.5"
              opacity="0.5"
            />
            {/* Flying wind-blown olive leaf */}
            <g transform="translate(230, 65) rotate(25)">
              <ellipse cx="0" cy="0" rx="12" ry="5" fill="#4B6040" opacity="0.8" />
              <line x1="-10" y1="0" x2="10" y2="0" stroke="#33452A" strokeWidth="0.8" />
            </g>
          </svg>
          <div className="absolute bottom-3 left-4 rtl:right-4 text-[11px] font-serif italic text-earth-800 opacity-80">
            عنصر الهواء • صفاء الأفكار والسكينة
          </div>
        </div>
      )}

      {/* ── 3. PHYSICAL WELLBEING (EARTH & ROOTS) ────────────────────────── */}
      {dimensionId === 'physical' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFEAE2] via-[#E4DDD2] to-[#D5C9B8] flex items-center justify-center overflow-hidden">
          {/* Centenary Olive Tree Annual Growth Rings & Subterranean Strata */}
          <svg
            viewBox="0 0 400 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
          >
            {/* Concentric Olive Tree Growth Rings (Dendrochronology) */}
            <g stroke="#918370" fill="none" opacity="0.6">
              <ellipse cx="200" cy="100" rx="20" ry="18" strokeWidth="1.5" />
              <ellipse cx="200" cy="100" rx="42" ry="38" strokeWidth="1.4" strokeDasharray="30 2" />
              <ellipse cx="200" cy="100" rx="68" ry="60" strokeWidth="1.6" />
              <ellipse cx="200" cy="100" rx="98" ry="86" strokeWidth="1.5" strokeDasharray="40 3" />
              <ellipse cx="200" cy="100" rx="132" ry="115" strokeWidth="1.7" />
              <ellipse cx="200" cy="100" rx="170" ry="148" strokeWidth="1.8" />
              <ellipse cx="200" cy="100" rx="212" ry="184" strokeWidth="2" />
            </g>
            {/* Grounding vertical root fiber lines */}
            <g stroke="#5E5241" fill="none" strokeLinecap="round" opacity="0.45">
              <path d="M 60 0 Q 75 100 65 200" strokeWidth="2" />
              <path d="M 340 0 Q 325 100 335 200" strokeWidth="2" />
              <path d="M 200 0 Q 195 100 205 200" strokeWidth="2.5" />
            </g>
          </svg>
          <div className="absolute bottom-3 left-4 rtl:right-4 text-[11px] font-serif italic text-earth-900 opacity-80">
            عنصر الأرض • حيوية الجذور وحكمة الجسد
          </div>
        </div>
      )}

      {/* ── 4. SPIRITUAL WELLBEING (ETHER & LIGHT) ───────────────────────── */}
      {dimensionId === 'spiritual' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D3E33] via-[#1F2D24] to-[#141F18] flex items-center justify-center overflow-hidden text-sand-100">
          {/* Celestial Starlight & Dawn Canopy Rays */}
          <svg
            viewBox="0 0 400 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
          >
            {/* Dawn sunburst rays from top center */}
            <g stroke="#E8E2D5" strokeWidth="1" opacity="0.2">
              <line x1="200" y1="0" x2="40" y2="200" />
              <line x1="200" y1="0" x2="100" y2="200" />
              <line x1="200" y1="0" x2="160" y2="200" />
              <line x1="200" y1="0" x2="200" y2="200" />
              <line x1="200" y1="0" x2="240" y2="200" />
              <line x1="200" y1="0" x2="300" y2="200" />
              <line x1="200" y1="0" x2="360" y2="200" />
            </g>

            {/* Glowing Golden Constellation Points */}
            {[
              { cx: 80,  cy: 60, r: 2.2 },
              { cx: 130, cy: 90, r: 2.8 },
              { cx: 200, cy: 50, r: 3.5 },
              { cx: 265, cy: 85, r: 2.5 },
              { cx: 320, cy: 55, r: 3.0 },
              { cx: 160, cy: 135, r: 2.2 },
              { cx: 240, cy: 145, r: 2.6 },
            ].map((star, i) => (
              <g key={i}>
                <circle cx={star.cx} cy={star.cy} r={star.r * 2} fill="#F0E8D5" fillOpacity="0.3" className="animate-pulse" />
                <circle cx={star.cx} cy={star.cy} r={star.r} fill="#FFF9ED" />
              </g>
            ))}

            {/* Constellation link lines */}
            <path
              d="M 80 60 L 130 90 L 200 50 L 265 85 L 320 55"
              stroke="#D4C8B2"
              strokeWidth="0.8"
              fill="none"
              opacity="0.35"
              strokeDasharray="2 3"
            />
          </svg>
          <div className="absolute bottom-3 left-4 rtl:right-4 text-[11px] font-serif italic text-sand-300 opacity-90">
            عنصر الأثير • الاتصال بالمعنى والسكينة
          </div>
        </div>
      )}
    </div>
  );
}
