'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─────────────────────────────────────────────────────────────────────────────
   LUXURY EDITORIAL HERO DIORAMA
   • Ultra-high-definition photographic panorama of an ancient olive grove
   • Atmospheric morning mist and soft golden sunlight rays (Komorebi)
   • Authentic Roots of Balance emblem embossed softly into the landscape
   • High-end editorial typography with Cormorant Garamond & Amiri
   • GPU-accelerated smooth parallax without React re-render lag
───────────────────────────────────────────────────────────────────────────── */

export default function HeroDiorama() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  // Silky-smooth GPU parallax using CSS custom property without triggering React re-renders
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroRef.current) {
            const scrollY = window.scrollY;
            heroRef.current.style.setProperty('--scroll-y', `${scrollY}px`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        height: '92vh',
        minHeight: '680px',
        maxHeight: '960px',
      }}
      aria-label="مساحة الترحيب — جذور التوازن"
    >
      {/* ── LAYER 1: Deep Cinematic Photographic Grove (Parallax) ──────────── */}
      <div
        className="absolute inset-0 w-full h-[115%] -top-[8%]"
        style={{
          transform: 'translate3d(0, calc(var(--scroll-y, 0px) * 0.22), 0)',
          willChange: 'transform',
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?auto=format&fit=crop&w=2200&q=88"
          alt="Ancient Olive Grove at Dawn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter saturate-[0.88] brightness-[1.02]"
        />

        {/* Editorial Warm Ivory & Mist Grading */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/70 to-[#FAF8F5]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/85 via-transparent to-[#FAF8F5]/85" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#FAF8F5]/30 to-[#FAF8F5]/70" />
      </div>

      {/* ── LAYER 2: Sun-Dappled Light Rays (Komorebi overlay) ─────────────── */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-45 mix-blend-soft-light"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(255, 248, 230, 0.95) 0%, transparent 80%)',
          transform: 'translate3d(0, calc(var(--scroll-y, 0px) * 0.12), 0)',
        }}
      />

      {/* ── LAYER 3: Authentic Brand Watermark Seal ───────────────────────── */}
      <div
        className="absolute left-1/2 pointer-events-none select-none"
        style={{
          top: '14%',
          transform:
            'translate3d(-50%, calc(var(--scroll-y, 0px) * 0.18), 0)',
          width: '420px',
          maxWidth: '85vw',
          opacity: 0.08,
        }}
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={420}
          height={420}
          className="object-contain w-full h-auto"
          priority
        />
      </div>

      {/* ── LAYER 4: Soft Golden Floating Dust Particles ───────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {[
          { left: '15%', top: '25%', size: 3, dur: 9, delay: 0 },
          { left: '32%', top: '65%', size: 2.5, dur: 12, delay: 2 },
          { left: '72%', top: '30%', size: 3.5, dur: 10, delay: 1.5 },
          { left: '85%', top: '60%', size: 2, dur: 11, delay: 3 },
          { left: '50%', top: '40%', size: 3, dur: 8, delay: 2.5 },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-200/60 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `dustFloat ${p.dur}s ease-in-out infinite alternate`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── LAYER 5: TEXT STAGE (Anchored, Crisp, Prestigious) ─────────────── */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-7">
        {/* Luxury Tagline Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/80 border border-sand-300/80 shadow-soft backdrop-blur-md transition-all duration-300 hover:border-sage-400">
          <span className="w-1.5 h-1.5 rounded-full bg-sage-700 shadow-sm" />
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-earth-800">
            {t.hero.tagline}
          </span>
        </div>

        {/* Main Arabic Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-earth-950 font-normal leading-[1.24] tracking-tight">
          {t.hero.headline}
        </h1>

        {/* Refined Divider */}
        <div className="flex items-center justify-center gap-4 py-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-sand-400 to-transparent" />
          <div className="w-1.5 h-1.5 rotate-45 border border-sage-700/60 bg-sand-200" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-sand-400 to-transparent" />
        </div>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-earth-700 leading-relaxed font-light max-w-2xl mx-auto">
          {t.hero.subtext}
        </p>

        {/* Subtle, non-commercial CTA */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-sage-800 hover:bg-sage-900 text-sand-50 text-sm font-medium tracking-wide transition-all duration-300 shadow-editorial hover:shadow-elevated hover:-translate-y-0.5"
          >
            <span>{t.hero.cta}</span>
          </Link>
          <Link
            href="/organizations"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/80 hover:bg-white text-earth-800 border border-sand-300 text-sm font-medium tracking-wide transition-all duration-300 shadow-sm"
          >
            <span>{t.nav.about === 'عن علياء والفلسفة' ? 'استكشفوا خدمات المؤسسات' : 'Explore Corporate Services'}</span>
          </Link>
        </div>

        {/* Scroll Hint */}
        <div className="pt-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-earth-500 font-light block">
            {t.hero.scrollHint}
          </span>
        </div>
      </div>

      {/* ── LAYER 6: Bottom Vignette Fade into Page ────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#FAF8F5] pointer-events-none" />

      <style>{`
        @keyframes dustFloat {
          0% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(15px, -20px); opacity: 0.85; }
          100% { transform: translate(-10px, -40px); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
