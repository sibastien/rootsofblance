'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar, GraduationCap, Sparkles, Globe, Cpu, Zap, Activity } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();

  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <header className="bg-cyber-dark/95 backdrop-blur-xl text-sand-100 border-b border-cyber-border px-6 py-3.5 sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-8 h-8 rounded-lg bg-cyber-dark border border-cyber-neon/40 shadow-neon-emerald flex items-center justify-center overflow-hidden p-1">
            <Image src="/images/logo.png" alt="Roots of Balance Logo" width={32} height={32} className="object-contain" />
          </div>
          <Link href="/admin" className="font-display text-base tracking-wider text-white hover:text-cyber-neon transition flex items-center gap-2">
            <span>Roots of Balance</span>
            <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-cyber-neon/10 text-cyber-neon border border-cyber-neon/30">
              SYS::ADMIN
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs font-medium">
          <Link href="/" target="_blank" className="text-sand-300 hover:text-cyber-neon transition flex items-center gap-1.5">
            <span>View Public Platform</span> &rarr;
          </Link>
        </div>
      </header>
    );
  }

  const navLinks = [
    { name: t.nav.about, href: '/about' },
    { name: t.nav.services, href: '/coaching' },
    { name: t.nav.academy, href: '/academy' },
    { name: t.nav.blog, href: '/blog' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <nav className="bg-[#050b0e]/80 backdrop-blur-2xl border-b border-cyber-neon/15 sticky top-0 z-50 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Top Futuristic Bio-Digital Ticker Banner */}
      <div className="bg-gradient-to-r from-cyber-dark via-[#081c1c] to-cyber-dark text-sand-100 px-4 py-2 text-center text-xs tracking-wider border-b border-cyber-neon/10 flex items-center justify-center gap-2 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-neon/10 to-transparent w-full animate-shimmer" />
        <div className="flex items-center gap-2 relative z-10 text-[11px] font-mono">
          <span className="inline-block w-2 h-2 rounded-full bg-cyber-neon animate-ping" />
          <span className="text-cyber-neon font-semibold uppercase tracking-widest">
            {lang === 'ar' ? 'الدفعة القادمة' : 'QUANTUM PROTOCOL'}
          </span>
          <span className="text-sand-300 hidden sm:inline">|</span>
          <span className="text-sand-200">{t.nav.bannerText}</span>
          <Link
            href="/academy"
            className="text-cyber-neon hover:text-white font-medium underline underline-offset-4 ml-1 transition"
          >
            {t.nav.bannerLink} &rarr;
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Holographic Glowing Brand Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyber-dark to-[#0c2428] border border-cyber-neon/30 p-1.5 flex items-center justify-center overflow-hidden shadow-neon-emerald group-hover:border-cyber-neon group-hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-cyber-neon/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/images/logo.png"
                alt="Roots of Balance Logo"
                width={48}
                height={48}
                priority
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,255,178,0.5)]"
              />
            </div>
            <div>
              <span className="font-display text-lg sm:text-xl font-bold text-white tracking-wider block group-hover:text-cyber-neon transition-colors">
                Roots of Balance
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-cyber-neon/70 block flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon inline-block animate-pulse" />
                {lang === 'ar' ? 'جذور التوازن • رفاهية حيوية مستقبلية' : 'BIO-HARMONIC WELLNESS • ACADEMY'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 rtl:space-x-reverse">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wider font-medium transition-all duration-200 relative py-1.5 px-1 ${
                    isActive
                      ? 'text-cyber-neon font-semibold'
                      : 'text-sand-300 hover:text-white hover:text-cyber-neon'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyber-neon to-cyber-cyan rounded-full shadow-[0_0_10px_#00FFB2]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              aria-label="Switch Language"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-dark/80 hover:bg-cyber-neon/10 border border-cyber-neon/20 hover:border-cyber-neon/50 text-xs font-mono tracking-wider text-sand-200 hover:text-cyber-neon transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-cyber-neon animate-spin-slow" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Futuristic Booking CTA */}
            <Link
              href="/book"
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-neon to-cyber-emerald text-cyber-dark text-xs uppercase font-mono font-bold tracking-wider transition-all duration-300 hover:shadow-neon-emerald hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.bookSession}</span>
            </Link>

            {/* Academy Portal Button */}
            <Link
              href="/academy"
              className="px-4 py-2.5 rounded-xl bg-cyber-dark/80 border border-cyber-cyan/30 hover:border-cyber-cyan text-cyber-cyan hover:text-white text-xs uppercase font-mono font-medium tracking-wider transition-all duration-300 hover:shadow-neon-cyan flex items-center gap-2"
            >
              <GraduationCap className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>{t.nav.academy}</span>
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="p-2 rounded-lg bg-cyber-dark border border-cyber-neon/20 text-cyber-neon text-xs font-mono"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-sand-200 hover:text-cyber-neon bg-cyber-dark/60 border border-cyber-neon/20 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-cyber-neon" /> : <Menu className="w-6 h-6 text-cyber-neon" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-cyber-dark/95 border-b border-cyber-neon/20 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-2 border-b border-white/5 ${
                  pathname === link.href ? 'text-cyber-neon font-semibold' : 'text-sand-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyber-neon to-cyber-emerald text-cyber-dark font-mono font-bold text-center text-xs uppercase tracking-wider shadow-neon-emerald flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookSession}</span>
            </Link>
            <Link
              href="/academy"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl bg-cyber-dark border border-cyber-cyan/40 text-cyber-cyan font-mono font-medium text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.nav.becomeCoach}</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
