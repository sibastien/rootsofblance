'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

/* ─────────────────────────────────────────────────────────────────────────────
   HOLISTIC ROOTS DIORAMA (Section 2 Context)
   Theme: Interconnectedness of Mind, Body, Soul & Nature.
   A split-level botanical cross-section:
   • Sunlit olive branch canopy swaying above
   • Ground threshold with ancient stones
   • Deep root network with glowing pulsating energy capillaries (sap & signals)
   • Warm glowing quote floating with glassmorphism
───────────────────────────────────────────────────────────────────────────── */

interface Props {
  quote: string;
  quoteAuthor: string;
}

export default function HolisticRootsDiorama({ quote, quoteAuthor }: Props) {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((p) => (p + 1) % 100);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-md lg:max-w-none group">
      {/* Outer framing container */}
      <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border-4 border-white relative bg-[#EFE9DD]">
        
        {/* Layer 1: Sunlit Olive Grove Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
            alt="Holistic Healing Sanctuary"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-85 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#EDE8DF]/40 via-transparent to-[#182319]/85" />
        </div>

        {/* Layer 2: Animated Subterranean Roots Vector Overlay */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            {/* Ground surface transition line */}
            <path
              d="M 0 290 Q 120 280 240 292 T 400 285"
              stroke="#D6CBBA"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 4"
              opacity="0.45"
            />

            {/* Subterranean deep roots */}
            <g stroke="#8FA876" fill="none" strokeLinecap="round" opacity="0.8">
              {/* Central root trunk diving deep */}
              <path
                d="M 200 288 C 195 325 210 365 200 410 C 192 445 185 470 190 500"
                strokeWidth="4"
              />
              {/* Branching root tendrils */}
              <path
                d="M 198 320 C 160 340 125 365 90 400 C 65 430 45 460 25 490"
                strokeWidth="3"
              />
              <path
                d="M 204 330 C 240 350 275 375 310 410 C 340 440 365 470 385 495"
                strokeWidth="3"
              />
              <path
                d="M 140 355 C 120 380 95 415 75 450"
                strokeWidth="2"
              />
              <path
                d="M 260 365 C 285 390 310 425 330 460"
                strokeWidth="2"
              />
              <path
                d="M 202 380 C 185 410 170 445 160 480"
                strokeWidth="2.2"
              />
              <path
                d="M 200 420 C 215 445 230 470 240 495"
                strokeWidth="2"
              />
            </g>

            {/* Glowing Vitality / Sap Energy Nodes (The unseen nourishment) */}
            {[
              { cx: 200, cy: 305, r: 4.5, delay: '0s' },
              { cx: 168, cy: 338, r: 3.8, delay: '0.8s' },
              { cx: 232, cy: 345, r: 3.8, delay: '1.4s' },
              { cx: 125, cy: 375, r: 3.5, delay: '2.1s' },
              { cx: 275, cy: 385, r: 3.5, delay: '1.7s' },
              { cx: 200, cy: 410, r: 4.2, delay: '0.5s' },
              { cx: 80,  cy: 420, r: 3.2, delay: '2.6s' },
              { cx: 320, cy: 430, r: 3.2, delay: '2.3s' },
              { cx: 188, cy: 460, r: 3.5, delay: '1.1s' },
            ].map((node, i) => (
              <g key={i}>
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r * 2.2}
                  fill="#A6C285"
                  fillOpacity="0.25"
                  className="animate-ping"
                  style={{ animationDuration: '3.6s', animationDelay: node.delay }}
                />
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill="#D8EDB8"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(186, 219, 148, 0.8))',
                  }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Layer 3: Sun-dappled Komorebi light rays in top half */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 30% 20%, rgba(255, 250, 235, 0.45) 0%, transparent 100%)',
          }}
        />

        {/* Layer 4: Glassmorphic Floating Quote Card */}
        <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/92 backdrop-blur-md p-5 rounded-2xl border border-sand-300 shadow-elevated text-left rtl:text-right z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-600 inline-block" />
            <span className="text-[10px] uppercase tracking-widest text-sage-800 font-semibold">
              حكمة الشفاء الشمولي
            </span>
          </div>
          <p className="font-serif italic text-sm text-earth-900 leading-relaxed">
            {quote}
          </p>
          <span className="block text-xs uppercase tracking-wider text-sage-800 font-semibold mt-2.5">
            — {quoteAuthor}
          </span>
        </div>
      </div>

      {/* Decorative ambient glowing aura */}
      <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-sage-200/50 rounded-full blur-2xl -z-10" />
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-sand-300/40 rounded-full blur-xl -z-10" />
    </div>
  );
}
