'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();

  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <header className="bg-earth-900 text-sand-100 border-b border-earth-800 px-6 py-3.5 sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden p-0.5">
            <Image src="/images/logo.png" alt="Roots of Balance Logo" width={32} height={32} className="object-contain" />
          </div>
          <Link href="/admin" className="font-serif text-lg tracking-wide hover:text-sage-300 transition">
            Roots of Balance <span className="text-xs font-sans uppercase tracking-widest text-sage-400 ml-1">Portal</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs font-medium">
          <Link href="/" target="_blank" className="text-sand-300 hover:text-white transition flex items-center gap-1">
            <span>View Public Website</span> &rarr;
          </Link>
        </div>
      </header>
    );
  }

  const navLinks = [
    { name: lang === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
    { name: lang === 'ar' ? 'لألفراد' : 'For Individuals', href: '/individuals' },
    { name: lang === 'ar' ? 'للمؤسسات' : 'For Organizations', href: '/organizations' },
    { name: lang === 'ar' ? 'عن علياء' : 'About Alia', href: '/about' },
    { name: lang === 'ar' ? 'المعرفة' : 'Insights', href: '/insights' },
    { name: lang === 'ar' ? 'تواصل / حجز' : 'Contact & Booking', href: '/contact' },
  ];

  return (
    <nav className="bg-[#FAF8F5]/92 backdrop-blur-md border-b border-sand-300/70 sticky top-0 z-50 transition-all duration-300 shadow-[0_2px_15px_rgba(34,31,26,0.02)]">
      {/* Editorial Announcement Banner */}
      <div className="bg-[#1C2C23] text-sand-100 px-4 py-2 text-center text-xs tracking-wide font-light flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-sage-300 shrink-0" />
        <span className="opacity-90">{lang === 'ar' ? 'التوسع يبدأ من الداخل... والأثر يظهر في الحياة والعمل' : 'Expansion begins from within... and the impact shows in life and work'}</span>
        <span className="hidden md:inline opacity-40">|</span>
        <Link
          href="/return-to-self"
          className="hidden md:inline underline underline-offset-4 text-sand-200 hover:text-white transition font-normal"
        >
          {lang === 'ar' ? 'اكتشفي برنامج العودة إلى الذات' : 'Discover Return to Self Program'} &rarr;
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo & Editorial Typography */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-white border border-sand-300/80 shadow-sm flex items-center justify-center overflow-hidden p-1 group-hover:border-sage-400 transition duration-300">
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
                {lang === 'ar' ? 'جذور التوازن' : 'Roots of Balance'}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-earth-500 font-medium block">
                {lang === 'ar' ? 'الشفاء الشمولي واكتشاف الذات' : 'Holistic Healing & Self-Discovery'}
              </span>
            </div>
          </Link>

          {/* Desktop Editorial Navigation Links */}
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
                      : 'text-earth-700 hover:text-sage-800'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sage-600 rounded-full" />
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand-100 hover:bg-sand-200 border border-sand-300 text-xs font-medium text-earth-800 transition"
            >
              <Globe className="w-3.5 h-3.5 text-sage-700" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Subtle Editorial Exploration CTA (Non-Sales) */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-800 hover:bg-sage-900 text-sand-50 text-xs font-medium tracking-wide transition-all duration-300 shadow-sm hover:shadow"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'حمّلي الدليل المجاني' : 'Download Free Guide'}</span>
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1.5 rounded-full bg-sand-100 border border-sand-300 text-xs text-earth-800 font-medium"
            >
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-earth-800 hover:text-sage-800 bg-sand-100 border border-sand-300 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-sand-50 border-b border-sand-300 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-serif py-1.5 border-b border-sand-200 ${
                  pathname === link.href ? 'text-sage-800 font-semibold' : 'text-earth-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-2.5">
            <Link
              href="/#explore"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-full bg-sage-800 text-sand-50 text-xs font-medium text-center uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.nav.exploreResources}</span>
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-full bg-sand-100 border border-sand-300 text-earth-800 text-xs font-medium text-center tracking-wider"
            >
              <span>{t.nav.about}</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
