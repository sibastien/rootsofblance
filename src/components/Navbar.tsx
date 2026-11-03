'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar, GraduationCap, Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();

  // If in admin dashboard, keep public navbar clean or hidden
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <header className="bg-earth-900 text-sand-100 border-b border-earth-800 px-6 py-3 sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden p-0.5">
            <Image src="/images/logo.png" alt="Roots of Balance Logo" width={32} height={32} className="object-contain" />
          </div>
          <Link href="/admin" className="font-serif text-lg tracking-wide hover:text-sage-300 transition">
            Roots of Balance <span className="text-xs font-sans uppercase tracking-widest text-sage-400 ml-1">Portal</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-xs font-medium">
          <Link href="/" target="_blank" className="text-sand-300 hover:text-white transition flex items-center gap-1">
            <span>View Public Website</span> &rarr;
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
    <nav className="bg-sand-50/90 backdrop-blur-md border-b border-sand-300/60 sticky top-0 z-50 transition-all duration-300">
      {/* Top micro-announcement banner for upcoming academy cohort */}
      <div className="bg-sage-900 text-sand-100 px-4 py-1.5 text-center text-xs tracking-wider font-light flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-terracotta-300 animate-pulse" />
        <span>{t.nav.bannerText}</span>
        <Link href="/academy" className="underline font-normal text-sand-200 hover:text-white ml-1">
          {t.nav.bannerLink}
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-white border border-sand-200 shadow-sm flex items-center justify-center overflow-hidden p-1 group-hover:shadow transition duration-300">
              <Image
                src="/images/logo.png"
                alt="Roots of Balance Logo"
                width={48}
                height={48}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-normal text-earth-900 tracking-tight block">
                Roots of Balance
              </span>
              <span className="text-[10px] tracking-widest uppercase text-earth-500 font-medium block">
                جذور التوازن • Holistic Wellness & Academy
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
                  className={`text-sm tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-sage-800 font-medium'
                      : 'text-earth-700 hover:text-sage-700'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sage-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Dual-Journey CTA Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center space-x-3 rtl:space-x-reverse">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full border border-sand-300 bg-sand-100 hover:bg-sand-200 text-earth-800 transition"
              title={lang === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-sage-700" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Journey B: Coach Academy */}
            <Link
              href="/academy"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium px-4 py-2.5 rounded-full border border-sage-700/30 text-sage-800 hover:bg-sage-50 transition duration-200"
            >
              <GraduationCap className="w-3.5 h-3.5 text-sage-600" />
              <span>{t.nav.becomeCoach}</span>
            </Link>

            {/* Journey A: Book Session */}
            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium px-4 py-2.5 rounded-full bg-sage-700 text-white hover:bg-sage-800 shadow-sm transition duration-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.bookSession}</span>
            </Link>
          </div>

          {/* Mobile menu button & Mobile Language Switcher */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full border border-sand-300 bg-sand-100 text-earth-800"
            >
              <Globe className="w-3.5 h-3.5 text-sage-700" />
              <span>{t.nav.switchLang}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-earth-700 hover:text-earth-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-sand-100 border-b border-sand-300 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-normal text-earth-800 hover:text-sage-700 border-b border-sand-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2.5">
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full bg-sage-700 text-white font-medium text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              {t.nav.bookSession}
            </Link>
            <Link
              href="/academy"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full border border-sage-700 text-sage-800 font-medium text-sm flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              {t.nav.becomeCoach}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
