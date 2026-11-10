'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─────────────────────────────────────────────────────────────────────────────
   HERO DIORAMA
   A cinematic multi-layer parallax scroll panorama.
   Layer order (back → front):
     0. Sky wash — barely moves                (slowest)
     1. Far botanical silhouette — slow        
     2. Logo watermark glow — medium-slow      
     3. Text stage — anchored / no-move        
     4. Foreground leaf scatter — faster       
     5. Close botanical silhouette — fastest   (fastest)
   The scroll offset drives each layer independently via translateY.
───────────────────────────────────────────────────────────────────────────── */

export default function HeroDiorama() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Each layer gets its own parallax speed multiplier.
     Positive = moves UP as you scroll down (classic parallax feel).
     Values are fractions of scrollY offset. */
  const shift = (factor: number) => `translateY(${scrollY * factor}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '640px' }}
      aria-label="قسم الترحيب — جذور التوازن"
    >
      {/* ── LAYER 0: Warm sky gradient wash (barely moves) ───────────────── */}
      <div
        className="absolute inset-0 w-full"
        style={{ transform: shift(0.08), willChange: 'transform' }}
      >
        <div
          className="w-full h-full"
          style={{
            background:
              'linear-gradient(170deg, #EDE8DF 0%, #F3EEE5 30%, #EAE5D8 55%, #DDD8CC 80%, #C8C2B3 100%)',
          }}
        />
      </div>

      {/* ── LAYER 1: Far botanical silhouette (slow) ─────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none"
        style={{ transform: shift(0.18), willChange: 'transform' }}
      >
        {/* SVG botanical: distant olive grove horizon line */}
        <svg
          viewBox="0 0 1440 520"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ display: 'block' }}
          aria-hidden="true"
        >
          {/* Ground plane */}
          <ellipse cx="720" cy="510" rx="800" ry="60" fill="#C5BBA9" fillOpacity="0.35" />

          {/* Far left tree */}
          <g opacity="0.45">
            <rect x="118" y="310" width="8" height="200" fill="#6B6248" />
            <ellipse cx="122" cy="295" rx="52" ry="68" fill="#7A8B6A" />
            <ellipse cx="98" cy="310" rx="34" ry="44" fill="#8A9A78" />
            <ellipse cx="148" cy="308" rx="30" ry="40" fill="#718060" />
          </g>
          {/* Far right tree */}
          <g opacity="0.4">
            <rect x="1310" y="330" width="7" height="180" fill="#6B6248" />
            <ellipse cx="1313" cy="316" rx="45" ry="58" fill="#7A8B6A" />
            <ellipse cx="1292" cy="328" rx="30" ry="38" fill="#8A9A78" />
            <ellipse cx="1336" cy="325" rx="28" ry="36" fill="#6E7E5C" />
          </g>
          {/* Centre silhouette hill */}
          <path
            d="M 400 520 Q 720 380 1040 520 Z"
            fill="#C0BAA8"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      {/* ── LAYER 2: Atmospheric mist band ───────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{ transform: shift(0.12), willChange: 'transform' }}
      >
        <div
          className="absolute left-0 right-0"
          style={{
            top: '38%',
            height: '22%',
            background:
              'radial-gradient(ellipse 85% 100% at 50% 50%, rgba(250,247,241,0.72) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── LAYER 3: Logo watermark (medium-slow) ────────────────────────── */}
      <div
        className="absolute left-1/2 pointer-events-none select-none"
        style={{
          top: '8%',
          transform: `translateX(-50%) ${shift(0.22)}`,
          willChange: 'transform',
          width: '540px',
          maxWidth: '90vw',
          opacity: 0.055,
        }}
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={540}
          height={540}
          className="object-contain w-full h-auto"
          priority
        />
      </div>

      {/* ── LAYER 4: TEXT STAGE (anchored — no parallax) ─────────────────── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
        {/* Brand pill */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8"
          style={{
            background: 'rgba(234,228,215,0.65)',
            borderColor: 'rgba(180,170,150,0.5)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: '#5A6E4A' }}
          />
          <span
            className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: '#4A3F2F' }}
          >
            {t.hero.tagline}
          </span>
        </div>

        {/* Arabic headline — diorama centrepiece */}
        <h1
          className="font-serif text-center leading-[1.25] font-normal"
          style={{
            color: '#2A2318',
            fontSize: 'clamp(2.2rem, 6vw, 5rem)',
            textShadow: '0 2px 32px rgba(255,251,245,0.8)',
            maxWidth: '820px',
          }}
        >
          {t.hero.headline}
        </h1>

        {/* Decorative rule */}
        <div className="flex items-center gap-4 my-7">
          <div
            className="h-px w-16 opacity-40"
            style={{ background: '#7A8B6A' }}
          />
          {/* Tiny leaf SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 22c0 0-8-4-8-12 0 0 8 2 8 12z"
              fill="#7A8B6A"
              fillOpacity="0.7"
            />
            <path
              d="M12 22c0 0 8-4 8-12 0 0-8 2-8 12z"
              fill="#5A6E4A"
              fillOpacity="0.6"
            />
            <line x1="12" y1="22" x2="12" y2="10" stroke="#7A8B6A" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
          <div
            className="h-px w-16 opacity-40"
            style={{ background: '#7A8B6A' }}
          />
        </div>

        {/* Subtext */}
        <p
          className="text-center font-light leading-relaxed"
          style={{
            color: '#5A5040',
            fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
            maxWidth: '640px',
            textShadow: '0 1px 12px rgba(255,251,245,0.9)',
          }}
        >
          {t.hero.subtext}
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#what-is-holistic"
            className="inline-flex items-center gap-3 transition-all duration-300 group"
            style={{
              padding: '14px 36px',
              borderRadius: '999px',
              background: 'rgba(74, 90, 58, 0.88)',
              backdropFilter: 'blur(8px)',
              color: '#F5F0E8',
              fontSize: '0.9rem',
              letterSpacing: '0.08em',
              fontWeight: 500,
              boxShadow: '0 4px 24px rgba(74,90,58,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
              textDecoration: 'none',
            }}
          >
            <span>{t.hero.cta}</span>
            <ArrowDown
              size={16}
              className="transition-transform duration-500 group-hover:translate-y-1"
              style={{ animation: 'gentleBounce 2.4s ease-in-out infinite' }}
            />
          </a>
        </div>

        {/* Scroll whisper */}
        <p
          className="mt-10 text-center uppercase tracking-[0.25em]"
          style={{ fontSize: '0.65rem', color: '#8A7F6E', letterSpacing: '0.3em' }}
        >
          {t.hero.scrollHint}
        </p>
      </div>

      {/* ── LAYER 5: Mid botanical — olive tree silhouette left (medium) ──── */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none select-none"
        style={{ transform: shift(0.32), willChange: 'transform', width: '38%', maxWidth: '460px' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          {/* Trunk */}
          <path
            d="M 190 600 C 188 540 185 480 190 420 C 192 390 188 350 192 320"
            stroke="#6B6248" strokeWidth="14" fill="none" strokeLinecap="round"
            opacity="0.75"
          />
          {/* Main branches */}
          <path d="M 192 400 C 160 370 120 340 80 310" stroke="#6B6248" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.65" />
          <path d="M 192 360 C 220 330 260 300 300 275" stroke="#6B6248" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.6" />
          <path d="M 192 320 C 175 290 165 260 155 230" stroke="#6B6248" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.55" />
          {/* Foliage clusters */}
          <ellipse cx="192" cy="240" rx="88" ry="110" fill="#6E7E5C" opacity="0.55" />
          <ellipse cx="140" cy="265" rx="60" ry="78" fill="#7A8B6A" opacity="0.5" />
          <ellipse cx="248" cy="255" rx="55" ry="72" fill="#637354" opacity="0.48" />
          <ellipse cx="192" cy="195" rx="62" ry="75" fill="#8A9A78" opacity="0.45" />
          <ellipse cx="108" cy="295" rx="40" ry="52" fill="#7A8B6A" opacity="0.4" />
          <ellipse cx="275" cy="280" rx="38" ry="50" fill="#6E7E5C" opacity="0.42" />
          {/* Small leaves scattered */}
          <ellipse cx="165" cy="168" rx="18" ry="24" fill="#8FA082" opacity="0.5" transform="rotate(-15 165 168)" />
          <ellipse cx="225" cy="172" rx="16" ry="22" fill="#7A8B6A" opacity="0.48" transform="rotate(10 225 172)" />
          <ellipse cx="192" cy="145" rx="20" ry="28" fill="#96A884" opacity="0.42" />
        </svg>
      </div>

      {/* ── LAYER 6: Mid botanical — olive branch right (medium-fast) ──────── */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        style={{ transform: shift(0.28), willChange: 'transform', width: '35%', maxWidth: '420px' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 580" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          {/* Trunk */}
          <path
            d="M 210 580 C 212 520 215 460 210 400 C 208 370 212 330 208 300"
            stroke="#6B6248" strokeWidth="13" fill="none" strokeLinecap="round"
            opacity="0.7"
          />
          {/* Branches */}
          <path d="M 208 390 C 240 360 280 330 320 305" stroke="#6B6248" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.62" />
          <path d="M 208 345 C 178 318 148 292 115 268" stroke="#6B6248" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.57" />
          <path d="M 208 300 C 225 270 232 240 240 210" stroke="#6B6248" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.52" />
          {/* Foliage */}
          <ellipse cx="208" cy="225" rx="82" ry="105" fill="#637354" opacity="0.52" />
          <ellipse cx="258" cy="252" rx="58" ry="74" fill="#7A8B6A" opacity="0.47" />
          <ellipse cx="158" cy="246" rx="52" ry="68" fill="#6E7E5C" opacity="0.45" />
          <ellipse cx="208" cy="182" rx="58" ry="72" fill="#8A9A78" opacity="0.43" />
          <ellipse cx="300" cy="280" rx="38" ry="50" fill="#7A8B6A" opacity="0.38" />
          <ellipse cx="118" cy="275" rx="36" ry="48" fill="#637354" opacity="0.4" />
          {/* Small leaves */}
          <ellipse cx="230" cy="158" rx="17" ry="23" fill="#8FA082" opacity="0.48" transform="rotate(12 230 158)" />
          <ellipse cx="185" cy="155" rx="15" ry="21" fill="#7A8B6A" opacity="0.45" transform="rotate(-8 185 155)" />
          <ellipse cx="208" cy="136" rx="19" ry="26" fill="#96A884" opacity="0.4" />
        </svg>
      </div>

      {/* ── LAYER 7: Foreground root spread (fastest parallax) ───────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none select-none"
        style={{ transform: shift(0.42), willChange: 'transform' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ display: 'block' }}>
          {/* Ground */}
          <rect x="0" y="140" width="1440" height="40" fill="#C0BAA8" fillOpacity="0.28" rx="0" />
          {/* Root tendrils from centre */}
          <path d="M 720 142 Q 600 130 480 138 Q 380 142 280 136 Q 200 132 100 140" stroke="#8A7F6E" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.35" />
          <path d="M 720 142 Q 840 130 960 138 Q 1060 142 1160 136 Q 1240 132 1340 140" stroke="#8A7F6E" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.35" />
          <path d="M 720 142 Q 680 158 640 148 Q 600 162 560 150" stroke="#6B6248" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.28" />
          <path d="M 720 142 Q 760 158 800 148 Q 840 162 880 150" stroke="#6B6248" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.28" />
          {/* Scattered pebbles / earth dots */}
          {[220, 410, 590, 720, 850, 1020, 1200].map((x, i) => (
            <ellipse key={i} cx={x} cy={148 + (i % 3) * 4} rx={5 + (i % 2) * 3} ry={3} fill="#A09080" fillOpacity="0.22" />
          ))}
        </svg>
      </div>

      {/* ── LAYER 8: Floating leaf particles (fastest — foreground atmosphere) */}
      <FloatingLeaves scrollY={scrollY} />

      {/* ── LAYER 9: Bottom fade-out vignette ────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '28%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(250,248,245,0.95) 100%)',
        }}
      />
      {/* Top vignette */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '12%',
          background: 'linear-gradient(to top, transparent 0%, rgba(237,232,223,0.6) 100%)',
        }}
      />

      {/* Keyframe animation injected inline */}
      <style>{`
        @keyframes gentleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @keyframes leafFloat1 {
          0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); opacity: 0.55; }
          25%  { transform: translate(8px, -14px) rotate(12deg) scale(1.05); opacity: 0.65; }
          50%  { transform: translate(2px, -6px) rotate(-6deg) scale(0.97); opacity: 0.5; }
          75%  { transform: translate(-6px, -18px) rotate(18deg) scale(1.03); opacity: 0.6; }
          100% { transform: translate(0px, 0px) rotate(0deg) scale(1); opacity: 0.55; }
        }
        @keyframes leafFloat2 {
          0%   { transform: translate(0px, 0px) rotate(0deg); opacity: 0.4; }
          33%  { transform: translate(-10px, -20px) rotate(-15deg); opacity: 0.55; }
          66%  { transform: translate(5px, -10px) rotate(8deg); opacity: 0.45; }
          100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.4; }
        }
        @keyframes leafFloat3 {
          0%   { transform: translate(0px, 0px) rotate(5deg) scale(1); opacity: 0.35; }
          40%  { transform: translate(12px, -22px) rotate(-10deg) scale(1.08); opacity: 0.5; }
          80%  { transform: translate(-4px, -12px) rotate(20deg) scale(0.95); opacity: 0.38; }
          100% { transform: translate(0px, 0px) rotate(5deg) scale(1); opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}

/* ─── Floating leaf particles component ─────────────────────────────────── */
function FloatingLeaves({ scrollY }: { scrollY: number }) {
  const leaves = [
    { x: '12%', y: '22%', size: 18, anim: 'leafFloat1 7s ease-in-out infinite', delay: '0s', speed: 0.48 },
    { x: '22%', y: '55%', size: 13, anim: 'leafFloat2 9s ease-in-out infinite', delay: '1.2s', speed: 0.52 },
    { x: '8%',  y: '70%', size: 22, anim: 'leafFloat3 11s ease-in-out infinite', delay: '0.5s', speed: 0.45 },
    { x: '78%', y: '20%', size: 16, anim: 'leafFloat1 8s ease-in-out infinite', delay: '2s', speed: 0.5 },
    { x: '88%', y: '58%', size: 11, anim: 'leafFloat2 10s ease-in-out infinite', delay: '0.8s', speed: 0.55 },
    { x: '68%', y: '72%', size: 20, anim: 'leafFloat3 12s ease-in-out infinite', delay: '1.5s', speed: 0.47 },
    { x: '50%', y: '14%', size: 12, anim: 'leafFloat1 9.5s ease-in-out infinite', delay: '3s', speed: 0.43 },
    { x: '35%', y: '80%', size: 15, anim: 'leafFloat2 8.5s ease-in-out infinite', delay: '0.3s', speed: 0.49 },
    { x: '62%', y: '38%', size: 10, anim: 'leafFloat3 7.5s ease-in-out infinite', delay: '1.8s', speed: 0.53 },
  ];

  return (
    <>
      {leaves.map((leaf, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            left: leaf.x,
            top: leaf.y,
            transform: `translateY(${scrollY * leaf.speed}px)`,
            willChange: 'transform',
            zIndex: 15,
          }}
          aria-hidden="true"
        >
          <svg
            width={leaf.size}
            height={leaf.size * 1.4}
            viewBox="0 0 20 28"
            xmlns="http://www.w3.org/2000/svg"
            style={{ animation: leaf.anim, animationDelay: leaf.delay }}
          >
            <path
              d="M 10 27 C 10 27 2 18 2 10 C 2 4 6 1 10 1 C 14 1 18 4 18 10 C 18 18 10 27 10 27 Z"
              fill="#7A8B6A"
              fillOpacity="0.62"
            />
            <path
              d="M 10 27 C 10 15 10 5 10 1"
              stroke="#637354"
              strokeWidth="0.8"
              strokeOpacity="0.5"
              fill="none"
            />
          </svg>
        </div>
      ))}
    </>
  );
}
