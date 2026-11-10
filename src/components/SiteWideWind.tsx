'use client';

import { useEffect, useState } from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   SITE-WIDE AMBIENT WIND & OLIVE LEAF DRIFT
   Creates a subtle, unhurried Mediterranean breeze that unifies the whole site.
   Gentle olive leaves drift down and across as the user scrolls.
───────────────────────────────────────────────────────────────────────────── */

interface WindLeaf {
  id: number;
  startX: number; // percentage (0 - 100)
  size: number;
  duration: number; // seconds
  delay: number; // seconds
  swayDur: number;
  rot: number;
  opacity: number;
}

export default function SiteWideWind() {
  const [leaves, setLeaves] = useState<WindLeaf[]>([]);

  useEffect(() => {
    // Generate a fixed set of ambient drifting leaves across the page height
    const items: WindLeaf[] = [
      { id: 1, startX: 8,  size: 20, duration: 18, delay: 0,   swayDur: 4.5, rot: 15,  opacity: 0.55 },
      { id: 2, startX: 28, size: 16, duration: 22, delay: 5,   swayDur: 5.2, rot: -25, opacity: 0.45 },
      { id: 3, startX: 52, size: 22, duration: 20, delay: 2,   swayDur: 4.8, rot: 35,  opacity: 0.5 },
      { id: 4, startX: 74, size: 17, duration: 24, delay: 8,   swayDur: 5.8, rot: -15, opacity: 0.4 },
      { id: 5, startX: 90, size: 19, duration: 19, delay: 11,  swayDur: 4.2, rot: 20,  opacity: 0.48 },
      { id: 6, startX: 18, size: 15, duration: 26, delay: 14,  swayDur: 6.0, rot: -40, opacity: 0.38 },
      { id: 7, startX: 62, size: 21, duration: 21, delay: 7,   swayDur: 5.0, rot: 30,  opacity: 0.52 },
      { id: 8, startX: 84, size: 14, duration: 25, delay: 16,  swayDur: 5.5, rot: -20, opacity: 0.42 },
    ];
    setLeaves(items);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.startX}%`,
            top: '-50px',
            animation: `sitewideLeafFall ${leaf.duration}s linear infinite`,
            animationDelay: `${leaf.delay}s`,
            willChange: 'transform',
          }}
        >
          <div
            style={{
              animation: `sitewideLeafSway ${leaf.swayDur}s ease-in-out infinite alternate`,
              transform: `rotate(${leaf.rot}deg)`,
            }}
          >
            <svg
              width={leaf.size * 1.8}
              height={leaf.size}
              viewBox="0 0 32 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pointed olive leaf matching the logo */}
              <path
                d="M 1 8 C 8 2 24 2 31 8 C 24 14 8 14 1 8 Z"
                fill="#556E44"
                fillOpacity={leaf.opacity}
              />
              <line
                x1="3"
                y1="8"
                x2="29"
                y2="8"
                stroke="#37492B"
                strokeWidth="0.8"
                strokeOpacity={leaf.opacity * 0.8}
              />
            </svg>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes sitewideLeafFall {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(105vh) translateX(120px);
            opacity: 0;
          }
        }

        @keyframes sitewideLeafSway {
          0% {
            transform: rotate(-25deg) translateX(-18px);
          }
          50% {
            transform: rotate(10deg) translateX(12px);
          }
          100% {
            transform: rotate(35deg) translateX(28px);
          }
        }
      `}</style>
    </div>
  );
}
