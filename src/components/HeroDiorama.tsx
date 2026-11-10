'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─────────────────────────────────────────────────────────────────────────────
   HERO DIORAMA WITH LIVING MEDITERRANEAN WIND & LOGO OLIVE TREES
   • Flowing horizontal wind currents (animated stream lines)
   • Olive trees faithful to the Roots of Balance logo (gnarled trunk, deep roots,
     individual oval leaves, small olives)
   • Gentle organic wind sway on tree branches & trunk
   • Leaves swirling & flying horizontally across the entire screen
   • Multi-layer depth parallax driven by scroll
───────────────────────────────────────────────────────────────────────────── */

export default function HeroDiorama() {
  const { t, dir } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const shift = (factor: number) => `translateY(${scrollY * factor}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden select-none"
      style={{ height: '100vh', minHeight: '660px' }}
      aria-label="قسم الترحيب — جذور التوازن"
    >
      {/* ── LAYER 0: Warm parchment sky ───────────────────────────────────── */}
      <div
        className="absolute inset-0 w-full"
        style={{ transform: shift(0.08), willChange: 'transform' }}
      >
        <div
          className="w-full h-full"
          style={{
            background:
              'linear-gradient(175deg, #F0EBE1 0%, #F5F1E8 30%, #ECE6D9 58%, #E0D9CB 82%, #CAC3B3 100%)',
          }}
        />
      </div>

      {/* ── LAYER 1: Distant horizon grove (slow parallax) ─────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
        style={{ transform: shift(0.14), willChange: 'transform' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 340" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          {/* Distant rolling hills */}
          <path
            d="M 0 270 Q 360 230 720 265 T 1440 250 L 1440 340 L 0 340 Z"
            fill="#C9C1B0"
            fillOpacity="0.4"
          />
          {/* Distant logo-style olive trees */}
          <g opacity="0.32" transform="translate(90, 70)">
            <ExactLogoOliveTree scale={0.42} windDelay={0} />
          </g>
          <g opacity="0.22" transform="translate(340, 105)">
            <ExactLogoOliveTree scale={0.3} windDelay={1.5} />
          </g>
          <g opacity="0.28" transform="translate(1200, 80) scale(-1, 1)">
            <ExactLogoOliveTree scale={0.38} windDelay={0.8} />
          </g>
          <g opacity="0.20" transform="translate(920, 110)">
            <ExactLogoOliveTree scale={0.28} windDelay={2.2} />
          </g>
          {/* Horizon ground line */}
          <line x1="0" y1="270" x2="1440" y2="270" stroke="#AFA796" strokeWidth="1.2" opacity="0.45" />
        </svg>
      </div>

      {/* ── LAYER 2: Animated Wind Currents across the sky ─────────────────── */}
      <WindCurrentsOverlay />

      {/* ── LAYER 3: Logo Watermark (deep subtly) ─────────────────────────── */}
      <div
        className="absolute left-1/2 pointer-events-none"
        style={{
          top: '9%',
          transform: `translateX(-50%) ${shift(0.20)}`,
          willChange: 'transform',
          width: '520px',
          maxWidth: '90vw',
          opacity: 0.05,
        }}
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={520}
          height={520}
          className="object-contain w-full h-auto"
          priority
        />
      </div>

      {/* ── LAYER 4: TEXT STAGE (anchored — crystal clear) ─────────────────── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 pointer-events-auto">
        {/* Brand pill with gentle pulse */}
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border mb-7 shadow-sm transition-transform hover:scale-105"
          style={{
            background: 'rgba(245, 240, 230, 0.75)',
            borderColor: 'rgba(180, 170, 150, 0.55)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: '#556B48',
              boxShadow: '0 0 10px rgba(85, 107, 72, 0.5)',
            }}
          />
          <span
            className="text-xs tracking-[0.22em] uppercase font-medium"
            style={{ color: '#3A3225' }}
          >
            {t.hero.tagline}
          </span>
        </div>

        {/* Arabic headline — core centerpiece */}
        <h1
          className="font-serif text-center leading-[1.28] font-normal"
          style={{
            color: '#221C14',
            fontSize: 'clamp(2.3rem, 6.2vw, 5.2rem)',
            textShadow: '0 2px 28px rgba(255,251,245,0.92), 0 1px 4px rgba(0,0,0,0.06)',
            maxWidth: '860px',
          }}
        >
          {t.hero.headline}
        </h1>

        {/* Decorative botanical separator with olive leaf motif */}
        <div className="flex items-center gap-4 my-7">
          <div className="h-px w-20 opacity-40" style={{ background: '#6A7D5C' }} />
          <svg width="24" height="24" viewBox="0 0 36 44" fill="none" aria-hidden="true">
            <path
              d="M18 42 C18 42 4 30 4 16 C4 7 10 2 18 2 C26 2 32 7 32 16 C32 30 18 42 18 42Z"
              fill="#637854"
              fillOpacity="0.75"
            />
            <line x1="18" y1="42" x2="18" y2="8" stroke="#485B3C" strokeWidth="1.4" strokeOpacity="0.6" />
          </svg>
          <div className="h-px w-20 opacity-40" style={{ background: '#6A7D5C' }} />
        </div>

        {/* Supporting subtext */}
        <p
          className="text-center font-light leading-relaxed"
          style={{
            color: '#4F4536',
            fontSize: 'clamp(0.98rem, 2.1vw, 1.25rem)',
            maxWidth: '660px',
            textShadow: '0 1px 14px rgba(255,251,245,0.95)',
          }}
        >
          {t.hero.subtext}
        </p>

        {/* Gentle CTA Button */}
        <div className="mt-9">
          <a
            href="#what-is-holistic"
            className="inline-flex items-center gap-3 transition-all duration-300 group hover:shadow-elevated"
            style={{
              padding: '15px 38px',
              borderRadius: '999px',
              background: 'rgba(58, 74, 46, 0.92)',
              backdropFilter: 'blur(10px)',
              color: '#F8F5EE',
              fontSize: '0.92rem',
              letterSpacing: '0.08em',
              fontWeight: 500,
              boxShadow: '0 6px 28px rgba(58,74,46,0.28), inset 0 1px 0 rgba(255,255,255,0.2)',
              textDecoration: 'none',
            }}
          >
            <span>{t.hero.cta}</span>
            <ArrowDown
              size={16}
              className="transition-transform duration-500 group-hover:translate-y-1.5"
              style={{ animation: 'heroArrowBounce 2.4s ease-in-out infinite' }}
            />
          </a>
        </div>

        {/* Scroll whisper */}
        <p
          className="mt-8 text-center uppercase"
          style={{ fontSize: '0.66rem', color: '#887B6A', letterSpacing: '0.3em' }}
        >
          {t.hero.scrollHint}
        </p>
      </div>

      {/* ── LAYER 5: LEFT MAJESTIC OLIVE TREE (swaying in the wind) ─────────── */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          transform: shift(0.30),
          willChange: 'transform',
          width: '38%',
          maxWidth: '480px',
          zIndex: 10,
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 440 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <g className="tree-wind-sway-left" opacity="0.88">
            <ExactLogoOliveTree scale={1.15} windDelay={0} />
          </g>
        </svg>
      </div>

      {/* ── LAYER 6: RIGHT MAJESTIC OLIVE TREE (mirrored, swaying out of phase) */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          transform: shift(0.26),
          willChange: 'transform',
          width: '36%',
          maxWidth: '450px',
          zIndex: 10,
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 440 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <g
            className="tree-wind-sway-right"
            opacity="0.84"
            transform="scale(-1, 1) translate(-440, 0)"
          >
            <ExactLogoOliveTree scale={1.08} windDelay={1.6} />
          </g>
        </svg>
      </div>

      {/* ── LAYER 7: Ground baseline & intertwined root network ───────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ transform: shift(0.40), willChange: 'transform', zIndex: 11 }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 180" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          {/* Earth soil strata */}
          <rect x="0" y="130" width="1440" height="50" fill="#BDB4A0" fillOpacity="0.25" />
          
          {/* Logo-style continuous ground line */}
          <line
            x1="0"
            y1="130"
            x2="1440"
            y2="130"
            stroke="#635948"
            strokeWidth="2"
            opacity="0.55"
          />

          {/* Left tree spreading deep roots */}
          <g opacity="0.5" stroke="#483F30" fill="none" strokeLinecap="round">
            <path d="M 180 130 C 140 140 100 135 60 140 C 30 145 10 142 0 145" strokeWidth="2.8" />
            <path d="M 190 130 C 160 152 130 150 90 162 C 60 170 30 165 0 172" strokeWidth="2.2" />
            <path d="M 200 130 C 190 155 170 165 140 172 C 110 178 80 174 50 178" strokeWidth="1.8" />
            <path d="M 210 130 C 240 142 280 138 320 144 C 360 150 400 146 440 150" strokeWidth="2.5" />
            <path d="M 205 130 C 230 152 260 156 290 165 C 330 172 370 170 410 175" strokeWidth="1.9" />
          </g>

          {/* Right tree spreading deep roots */}
          <g opacity="0.48" stroke="#483F30" fill="none" strokeLinecap="round">
            <path d="M 1260 130 C 1300 140 1340 135 1380 140 C 1410 145 1430 142 1440 145" strokeWidth="2.8" />
            <path d="M 1250 130 C 1280 152 1310 150 1350 162 C 1380 170 1410 165 1440 172" strokeWidth="2.2" />
            <path d="M 1240 130 C 1210 142 1170 138 1130 144 C 1090 150 1050 146 1000 150" strokeWidth="2.5" />
            <path d="M 1245 130 C 1220 152 1190 156 1160 165 C 1120 172 1080 170 1040 175" strokeWidth="1.9" />
          </g>
        </svg>
      </div>

      {/* ── LAYER 8: WIND-BLOWN FLYING OLIVE LEAVES (swept across the screen) ── */}
      <WindBlownLeavesOverlay scrollY={scrollY} />

      {/* ── LAYER 9: Subtle bottom fade out into page ──────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '24%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(250,248,245,0.98) 100%)',
          zIndex: 13,
        }}
      />

      {/* ── KEYFRAME STYLES FOR LIVING WIND AND BOTANICAL MOTION ────────────── */}
      <style>{`
        @keyframes heroArrowBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }

        /* Olive tree whole trunk & crown wind sway */
        .tree-wind-sway-left {
          transform-origin: 220px 420px;
          animation: treeLeftSway 6.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
        }
        .tree-wind-sway-right {
          transform-origin: 220px 420px;
          animation: treeRightSway 7.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
        }

        @keyframes treeLeftSway {
          0%   { transform: rotate(0deg) skewX(0deg); }
          35%  { transform: rotate(1.2deg) skewX(0.8deg); }
          70%  { transform: rotate(-0.6deg) skewX(-0.4deg); }
          100% { transform: rotate(1.8deg) skewX(1.1deg); }
        }

        @keyframes treeRightSway {
          0%   { transform: rotate(0deg) skewX(0deg); }
          40%  { transform: rotate(-1.4deg) skewX(-0.9deg); }
          75%  { transform: rotate(0.8deg) skewX(0.5deg); }
          100% { transform: rotate(-1.9deg) skewX(-1.2deg); }
        }

        /* Branch flutter */
        .branch-sway-1 {
          transform-origin: center bottom;
          animation: branchFlutter1 5.2s ease-in-out infinite alternate;
        }
        .branch-sway-2 {
          transform-origin: center bottom;
          animation: branchFlutter2 4.6s ease-in-out infinite alternate;
        }
        @keyframes branchFlutter1 {
          0%   { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(2.4deg) scale(1.01); }
          100% { transform: rotate(-1.8deg) scale(0.99); }
        }
        @keyframes branchFlutter2 {
          0%   { transform: rotate(0deg); }
          50%  { transform: rotate(-2.8deg); }
          100% { transform: rotate(2deg); }
        }

        /* Flowing wind stream paths */
        .wind-path-1 {
          stroke-dasharray: 220 340;
          animation: windFlow1 8.5s linear infinite;
        }
        .wind-path-2 {
          stroke-dasharray: 180 300;
          animation: windFlow2 11s linear infinite;
        }
        .wind-path-3 {
          stroke-dasharray: 260 400;
          animation: windFlow1 9.5s linear infinite 2s;
        }
        .wind-path-4 {
          stroke-dasharray: 140 280;
          animation: windFlow2 7.8s linear infinite 1.2s;
        }

        @keyframes windFlow1 {
          0%   { stroke-dashoffset: 1200; opacity: 0; }
          20%  { opacity: 0.55; }
          80%  { opacity: 0.55; }
          100% { stroke-dashoffset: -1200; opacity: 0; }
        }
        @keyframes windFlow2 {
          0%   { stroke-dashoffset: -1000; opacity: 0; }
          20%  { opacity: 0.45; }
          80%  { opacity: 0.45; }
          100% { stroke-dashoffset: 1000; opacity: 0; }
        }

        /* Continuous flying leaves blown across the landscape */
        @keyframes flyingLeafAcross1 {
          0% {
            transform: translate(-10vw, 0vh) rotate(0deg) scale(0.85);
            opacity: 0;
          }
          10% { opacity: 0.75; }
          50% {
            transform: translate(50vw, -12vh) rotate(220deg) scale(1.05);
            opacity: 0.85;
          }
          90% { opacity: 0.7; }
          100% {
            transform: translate(115vw, -4vh) rotate(480deg) scale(0.9);
            opacity: 0;
          }
        }

        @keyframes flyingLeafAcross2 {
          0% {
            transform: translate(110vw, 5vh) rotate(40deg) scale(0.9);
            opacity: 0;
          }
          12% { opacity: 0.65; }
          55% {
            transform: translate(45vw, -8vh) rotate(-180deg) scale(1.1);
            opacity: 0.8;
          }
          88% { opacity: 0.6; }
          100% {
            transform: translate(-15vw, 2vh) rotate(-380deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   EXACT LOGO OLIVE TREE SVG
   Matches the Roots of Balance logo:
   • Deep intertwining root bundle emerging from beneath a flat ground line
   • Distinct twisted trunk splitting gracefully into symmetrical primary boughs
   • Sub-branches holding individual pointed-oval leaves
   • Small round olive fruits (berries) nestled among leaves
───────────────────────────────────────────────────────────────────────────── */
function ExactLogoOliveTree({
  scale = 1,
  windDelay = 0,
}: {
  scale?: number;
  windDelay?: number;
}) {
  const s = scale;
  const baseCx = 220;
  const groundY = 420;

  // Coordinate mapping function
  const p = (x: number, y: number) =>
    `${baseCx + (x - 220) * s},${groundY + (y - 420) * s}`;

  return (
    <g>
      {/* ── GROUND LINE (like the logo) ─────────────────────────────────── */}
      <line
        x1={baseCx - 170 * s}
        y1={groundY}
        x2={baseCx + 170 * s}
        y2={groundY}
        stroke="#28321D"
        strokeWidth={3 * s}
        strokeLinecap="round"
      />

      {/* ── INTENSE ROOT SYSTEM (below ground) ───────────────────────────── */}
      <g stroke="#26311C" fill="none" strokeLinecap="round">
        {/* Core central taproot */}
        <path
          d={`M ${p(220, 420)} Q ${p(218, 445)} ${p(220, 470)} Q ${p(222, 495)} ${p(220, 520)}`}
          strokeWidth={4.5 * s}
        />
        {/* Left deep root clusters */}
        <path
          d={`M ${p(220, 420)} Q ${p(195, 435)} ${p(175, 442)} Q ${p(150, 452)} ${p(120, 455)}`}
          strokeWidth={4 * s}
        />
        <path
          d={`M ${p(215, 420)} Q ${p(190, 445)} ${p(165, 465)} Q ${p(140, 480)} ${p(110, 485)}`}
          strokeWidth={3.2 * s}
        />
        <path
          d={`M ${p(210, 422)} Q ${p(185, 460)} ${p(160, 488)} Q ${p(140, 510)} ${p(115, 518)}`}
          strokeWidth={2.4 * s}
        />
        <path
          d={`M ${p(175, 442)} Q ${p(155, 465)} ${p(138, 485)} Q ${p(120, 502)} ${p(100, 510)}`}
          strokeWidth={2 * s}
        />
        <path
          d={`M ${p(150, 452)} Q ${p(130, 445)} ${p(105, 440)} Q ${p(85, 444)} ${p(65, 440)}`}
          strokeWidth={2.6 * s}
        />
        <path
          d={`M ${p(200, 440)} Q ${p(185, 475)} ${p(175, 505)} Q ${p(165, 525)} ${p(155, 540)}`}
          strokeWidth={2 * s}
        />

        {/* Right deep root clusters (symmetrical balance) */}
        <path
          d={`M ${p(220, 420)} Q ${p(245, 435)} ${p(265, 442)} Q ${p(290, 452)} ${p(320, 455)}`}
          strokeWidth={4 * s}
        />
        <path
          d={`M ${p(225, 420)} Q ${p(250, 445)} ${p(275, 465)} Q ${p(300, 480)} ${p(330, 485)}`}
          strokeWidth={3.2 * s}
        />
        <path
          d={`M ${p(230, 422)} Q ${p(255, 460)} ${p(280, 488)} Q ${p(300, 510)} ${p(325, 518)}`}
          strokeWidth={2.4 * s}
        />
        <path
          d={`M ${p(265, 442)} Q ${p(285, 465)} ${p(302, 485)} Q ${p(320, 502)} ${p(340, 510)}`}
          strokeWidth={2 * s}
        />
        <path
          d={`M ${p(290, 452)} Q ${p(310, 445)} ${p(335, 440)} Q ${p(355, 444)} ${p(375, 440)}`}
          strokeWidth={2.6 * s}
        />
        <path
          d={`M ${p(240, 440)} Q ${p(255, 475)} ${p(265, 505)} Q ${p(275, 525)} ${p(285, 540)}`}
          strokeWidth={2 * s}
        />
      </g>

      {/* ── TWISTED GNARLED TRUNK (above ground) ─────────────────────────── */}
      <g stroke="#26311C" fill="none" strokeLinecap="round">
        {/* Main trunk body with natural twist curves */}
        <path
          d={`M ${p(213, 420)} C ${p(211, 390)} ${p(218, 360)} ${p(215, 330)} C ${p(212, 305)} ${p(216, 280)} ${p(212, 260)}`}
          strokeWidth={10 * s}
        />
        <path
          d={`M ${p(227, 420)} C ${p(229, 390)} ${p(222, 360)} ${p(225, 330)} C ${p(228, 305)} ${p(224, 280)} ${p(228, 260)}`}
          strokeWidth={9 * s}
        />
        {/* Core trunk shading seam */}
        <path
          d={`M ${p(220, 420)} C ${p(218, 380)} ${p(224, 340)} ${p(219, 300)} C ${p(217, 275)} ${p(221, 260)} ${p(220, 248)}`}
          strokeWidth={4 * s}
          stroke="#1F2817"
        />
      </g>

      {/* ── BOUGHS & CANOPY (animated branch clusters) ──────────────────── */}
      {/* Left primary branch system */}
      <g className="branch-sway-1" style={{ animationDelay: `${windDelay}s` }}>
        <g stroke="#28321D" fill="none" strokeLinecap="round">
          {/* Main left bough */}
          <path
            d={`M ${p(215, 310)} C ${p(185, 290)} ${p(155, 268)} ${p(120, 245)}`}
            strokeWidth={7.5 * s}
          />
          {/* Left upper fork */}
          <path
            d={`M ${p(165, 275)} C ${p(145, 245)} ${p(125, 220)} ${p(105, 195)}`}
            strokeWidth={5 * s}
          />
          {/* Left mid fork */}
          <path
            d={`M ${p(140, 255)} C ${p(110, 240)} ${p(85, 230)} ${p(60, 225)}`}
            strokeWidth={4.5 * s}
          />
          {/* Left lateral twigs */}
          <path d={`M ${p(118, 210)} Q ${p(95, 190)} ${p(75, 180)}`} strokeWidth={3 * s} />
          <path d={`M ${p(130, 230)} Q ${p(105, 215)} ${p(85, 208)}`} strokeWidth={3 * s} />
          <path d={`M ${p(85, 230)} Q ${p(65, 215)} ${p(45, 210)}`} strokeWidth={2.8 * s} />
        </g>

        {/* Left foliage: pointy oval leaves & olives */}
        <LogoLeafClusters
          leaves={[
            { x: 42, y: 210, a: -45 },
            { x: 55, y: 200, a: -25 },
            { x: 62, y: 225, a: -60 },
            { x: 72, y: 180, a: -35 },
            { x: 85, y: 170, a: -15 },
            { x: 80, y: 195, a: -50 },
            { x: 95, y: 185, a: -30 },
            { x: 102, y: 165, a: -10 },
            { x: 108, y: 195, a: -45 },
            { x: 118, y: 155, a: 5 },
            { x: 125, y: 180, a: -25 },
            { x: 135, y: 205, a: -55 },
            { x: 145, y: 170, a: -15 },
            { x: 155, y: 195, a: -40 },
          ]}
          olives={[
            { x: 60, y: 215 },
            { x: 88, y: 188 },
            { x: 110, y: 175 },
            { x: 132, y: 190 },
          ]}
          s={s}
          baseCx={baseCx}
          groundY={groundY}
        />
      </g>

      {/* Centre crown branch system */}
      <g className="branch-sway-2" style={{ animationDelay: `${windDelay + 0.6}s` }}>
        <g stroke="#28321D" fill="none" strokeLinecap="round">
          <path
            d={`M ${p(220, 260)} C ${p(215, 225)} ${p(222, 190)} ${p(220, 155)}`}
            strokeWidth={6.5 * s}
          />
          <path d={`M ${p(218, 210)} Q ${p(198, 180)} ${p(185, 155)}`} strokeWidth={4 * s} />
          <path d={`M ${p(222, 210)} Q ${p(242, 180)} ${p(255, 155)}`} strokeWidth={4 * s} />
          <path d={`M ${p(220, 175)} Q ${p(210, 145)} ${p(208, 125)}`} strokeWidth={3 * s} />
          <path d={`M ${p(220, 175)} Q ${p(230, 145)} ${p(232, 125)}`} strokeWidth={3 * s} />
        </g>

        {/* Centre top leaves */}
        <LogoLeafClusters
          leaves={[
            { x: 178, y: 152, a: -35 },
            { x: 188, y: 138, a: -18 },
            { x: 198, y: 155, a: -40 },
            { x: 208, y: 122, a: -5 },
            { x: 220, y: 110, a: 0 },
            { x: 232, y: 122, a: 5 },
            { x: 242, y: 138, a: 18 },
            { x: 252, y: 152, a: 35 },
            { x: 215, y: 138, a: -12 },
            { x: 225, y: 138, a: 12 },
            { x: 205, y: 165, a: -25 },
            { x: 235, y: 165, a: 25 },
          ]}
          olives={[
            { x: 202, y: 140 },
            { x: 220, y: 128 },
            { x: 238, y: 140 },
          ]}
          s={s}
          baseCx={baseCx}
          groundY={groundY}
        />
      </g>

      {/* Right primary branch system */}
      <g className="branch-sway-1" style={{ animationDelay: `${windDelay + 1.2}s` }}>
        <g stroke="#28321D" fill="none" strokeLinecap="round">
          {/* Main right bough */}
          <path
            d={`M ${p(225, 310)} C ${p(255, 290)} ${p(285, 268)} ${p(320, 245)}`}
            strokeWidth={7.5 * s}
          />
          {/* Right upper fork */}
          <path
            d={`M ${p(275, 275)} C ${p(295, 245)} ${p(315, 220)} ${p(335, 195)}`}
            strokeWidth={5 * s}
          />
          {/* Right mid fork */}
          <path
            d={`M ${p(300, 255)} C ${p(330, 240)} ${p(355, 230)} ${p(380, 225)}`}
            strokeWidth={4.5 * s}
          />
          {/* Right lateral twigs */}
          <path d={`M ${p(322, 210)} Q ${p(345, 190)} ${p(365, 180)}`} strokeWidth={3 * s} />
          <path d={`M ${p(310, 230)} Q ${p(335, 215)} ${p(355, 208)}`} strokeWidth={3 * s} />
          <path d={`M ${p(355, 230)} Q ${p(375, 215)} ${p(395, 210)}`} strokeWidth={2.8 * s} />
        </g>

        {/* Right foliage */}
        <LogoLeafClusters
          leaves={[
            { x: 398, y: 210, a: 45 },
            { x: 385, y: 200, a: 25 },
            { x: 378, y: 225, a: 60 },
            { x: 368, y: 180, a: 35 },
            { x: 355, y: 170, a: 15 },
            { x: 360, y: 195, a: 50 },
            { x: 345, y: 185, a: 30 },
            { x: 338, y: 165, a: 10 },
            { x: 332, y: 195, a: 45 },
            { x: 322, y: 155, a: -5 },
            { x: 315, y: 180, a: 25 },
            { x: 305, y: 205, a: 55 },
            { x: 295, y: 170, a: 15 },
            { x: 285, y: 195, a: 40 },
          ]}
          olives={[
            { x: 380, y: 215 },
            { x: 352, y: 188 },
            { x: 330, y: 175 },
            { x: 308, y: 190 },
          ]}
          s={s}
          baseCx={baseCx}
          groundY={groundY}
        />
      </g>
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   LOGO LEAF CLUSTERS & OLIVES HELPER
   Renders pointy oval leaves & spherical olive fruits matching the logo style
───────────────────────────────────────────────────────────────────────────── */
function LogoLeafClusters({
  leaves,
  olives,
  s,
  baseCx,
  groundY,
}: {
  leaves: { x: number; y: number; a: number }[];
  olives: { x: number; y: number }[];
  s: number;
  baseCx: number;
  groundY: number;
}) {
  const lw = 15 * s;
  const lh = 7.5 * s;

  return (
    <g>
      {/* Individual leaves */}
      {leaves.map((leaf, i) => {
        const x = baseCx + (leaf.x - 220) * s;
        const y = groundY + (leaf.y - 420) * s;
        return (
          <g key={i} transform={`translate(${x},${y}) rotate(${leaf.a})`}>
            {/* Logo pointed-oval leaf shape */}
            <path
              d={`M ${-lw} 0 C ${-lw * 0.5} ${-lh} ${lw * 0.5} ${-lh} ${lw} 0 C ${lw * 0.5} ${lh} ${-lw * 0.5} ${lh} ${-lw} 0 Z`}
              fill="#324024"
              fillOpacity="0.92"
            />
            {/* Midrib line */}
            <line
              x1={-lw * 0.85}
              y1={0}
              x2={lw * 0.85}
              y2={0}
              stroke="#212C17"
              strokeWidth={0.8 * s}
              strokeOpacity="0.65"
            />
          </g>
        );
      })}

      {/* Olive fruits (round berries with delicate highlight) */}
      {olives.map((olive, i) => {
        const cx = baseCx + (olive.x - 220) * s;
        const cy = groundY + (olive.y - 420) * s;
        const r = 4.2 * s;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} fill="#1D2415" />
            <circle
              cx={cx - r * 0.3}
              cy={cy - r * 0.3}
              r={r * 0.35}
              fill="#52663E"
              fillOpacity="0.7"
            />
          </g>
        );
      })}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   WIND CURRENTS OVERLAY
   Sweeping curved SVG breeze lines flowing smoothly across the sky
───────────────────────────────────────────────────────────────────────────── */
function WindCurrentsOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden">
      <svg
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="windGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A2B498" stopOpacity="0" />
            <stop offset="30%" stopColor="#879E7A" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#6C835F" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A2B498" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="windGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#A2B498" stopOpacity="0" />
            <stop offset="40%" stopColor="#8FA582" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#738B67" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#A2B498" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* High altitude gust */}
        <path
          d="M -100 160 C 280 120 620 210 980 140 C 1220 90 1420 180 1600 150"
          stroke="url(#windGrad1)"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          className="wind-path-1"
        />
        {/* Mid altitude whisper wind */}
        <path
          d="M 1600 240 C 1260 210 980 290 680 230 C 420 180 180 260 -100 220"
          stroke="url(#windGrad2)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="wind-path-2"
        />
        {/* Lower altitude breeze over canopy */}
        <path
          d="M -100 340 C 320 310 740 390 1120 330 C 1320 300 1500 370 1600 350"
          stroke="url(#windGrad1)"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          className="wind-path-3"
        />
        {/* Ground level wisp */}
        <path
          d="M 1600 440 C 1220 420 920 480 620 430 C 380 390 160 460 -100 430"
          stroke="url(#windGrad2)"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          className="wind-path-4"
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   WIND-BLOWN FLYING OLIVE LEAVES OVERLAY
   Leaves actively swept horizontally across the entire screen by the wind!
───────────────────────────────────────────────────────────────────────────── */
function WindBlownLeavesOverlay({ scrollY }: { scrollY: number }) {
  // Staggered array of leaves caught in horizontal wind gusts
  const flyingLeaves = [
    { top: '18%', dur: '9.2s', delay: '0s', anim: 'flyingLeafAcross1', size: 22, opacity: 0.8 },
    { top: '28%', dur: '12s', delay: '2.5s', anim: 'flyingLeafAcross1', size: 17, opacity: 0.7 },
    { top: '42%', dur: '8.4s', delay: '4.2s', anim: 'flyingLeafAcross1', size: 24, opacity: 0.85 },
    { top: '60%', dur: '10.5s', delay: '1.2s', anim: 'flyingLeafAcross1', size: 19, opacity: 0.75 },
    { top: '72%', dur: '11.2s', delay: '5.8s', anim: 'flyingLeafAcross1', size: 21, opacity: 0.7 },
    // A couple drifting from right to left as a counter-eddy
    { top: '22%', dur: '13s', delay: '3.1s', anim: 'flyingLeafAcross2', size: 18, opacity: 0.65 },
    { top: '52%', dur: '14.5s', delay: '6.4s', anim: 'flyingLeafAcross2', size: 20, opacity: 0.7 },
  ];

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 12 }}
    >
      {flyingLeaves.map((leaf, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            top: leaf.top,
            left: '0',
            animation: `${leaf.anim} ${leaf.dur} linear infinite`,
            animationDelay: leaf.delay,
            transform: `translateY(${scrollY * 0.45}px)`,
            willChange: 'transform',
          }}
        >
          <svg
            width={leaf.size * 1.8}
            height={leaf.size}
            viewBox="0 0 32 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 1 8 C 8 2 24 2 31 8 C 24 14 8 14 1 8 Z"
              fill="#4A5E3A"
              fillOpacity={leaf.opacity}
            />
            <line
              x1="3"
              y1="8"
              x2="29"
              y2="8"
              stroke="#2E3C22"
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
