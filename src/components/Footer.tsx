'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trackEvent } from '@/lib/analytics';
import { Mail, ArrowRight, Send, CheckCircle2, Shield, Cpu, Activity, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '@/components/SocialIcons';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t, lang } = useLanguage();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Futuristic Footer Newsletter' }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Subscription failed');
      }

      setStatus('success');
      setEmail('');
      trackEvent('newsletter_subscribed', { source: 'Footer' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Please try again.');
    }
  };

  return (
    <footer className="relative bg-[#020507] text-sand-200 border-t border-cyber-neon/20 pt-20 pb-12 overflow-hidden">
      {/* Background cyber ambient lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyber-neon/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-cyber-border">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyber-dark to-[#091a1d] border border-cyber-neon/40 flex items-center justify-center overflow-hidden p-2 shadow-neon-emerald">
                <Image
                  src="/images/logo.png"
                  alt="Roots of Balance Logo"
                  width={52}
                  height={52}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,255,178,0.5)]"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-wider">Roots of Balance</h3>
                <p className="text-xs uppercase tracking-widest font-mono text-cyber-neon flex items-center gap-1.5 mt-0.5">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>{lang === 'ar' ? 'جذور التوازن • نظام حيوي ذكي' : 'BIO-HARMONIC ARCHITECTURE'}</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-sand-300/80 leading-relaxed max-w-sm font-light">
              {t.footer.desc}
            </p>

            <div className="flex items-center space-x-3 rtl:space-x-reverse pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-cyber-dark border border-cyber-border flex items-center justify-center text-sand-300 hover:text-cyber-neon hover:border-cyber-neon hover:shadow-neon-emerald transition duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-cyber-dark border border-cyber-border flex items-center justify-center text-sand-300 hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-neon-cyan transition duration-300"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-cyber-neon font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon" />
              <span>{t.footer.coachingColTitle}</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-300/80">
              <li>
                <Link href="/about" className="hover:text-cyber-neon transition flex items-center gap-1.5">
                  <span className="text-[10px] text-cyber-neon/40 font-mono">&gt;</span>
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="hover:text-cyber-neon transition flex items-center gap-1.5">
                  <span className="text-[10px] text-cyber-neon/40 font-mono">&gt;</span>
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-cyber-neon transition flex items-center gap-1.5">
                  <span className="text-[10px] text-cyber-neon/40 font-mono">&gt;</span>
                  {t.nav.academy}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyber-neon transition flex items-center gap-1.5">
                  <span className="text-[10px] text-cyber-neon/40 font-mono">&gt;</span>
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyber-neon transition flex items-center gap-1.5">
                  <span className="text-[10px] text-cyber-neon/40 font-mono">&gt;</span>
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Tracks */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-cyber-cyan font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
              <span>{t.footer.academyColTitle}</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-300/80">
              <li>
                <Link href="/coaching#stress" className="hover:text-cyber-cyan transition">
                  {lang === 'ar' ? 'التحول العصبي والتوازن' : 'Nervous System Bio-Reset'}
                </Link>
              </li>
              <li>
                <Link href="/coaching#burnout" className="hover:text-cyber-cyan transition">
                  {lang === 'ar' ? 'استعادة الطاقة الخلوية' : 'Vital Energy Optimization'}
                </Link>
              </li>
              <li>
                <Link href="/academy#curriculum" className="hover:text-cyber-cyan transition">
                  {lang === 'ar' ? 'شهادة مدرب الرفاهية الشاملة' : 'Certified Bio-Wellness Mentor'}
                </Link>
              </li>
              <li>
                <Link href="/academy#faq" className="hover:text-cyber-cyan transition">
                  {lang === 'ar' ? 'معايير التدريب والاعتماد' : 'Accreditation Matrix'}
                </Link>
              </li>
            </ul>
          </div>

          {/* High-Tech Newsletter Dispatch */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-cyber-neon font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyber-neon" />
              <span>{t.footer.newsletterTitle}</span>
            </h4>
            <p className="text-xs text-sand-300/80 leading-relaxed font-light">
              {t.footer.newsletterDesc}
            </p>

            {status === 'success' ? (
              <div className="p-4 rounded-xl bg-cyber-neon/10 border border-cyber-neon/30 text-cyber-neon text-xs font-mono flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{lang === 'ar' ? 'تم تأكيد اشتراكك بنجاح.' : 'Quantum uplink established. Check inbox.'}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.footer.placeholderEmail}
                    required
                    className="w-full pl-4 pr-10 py-2.5 text-xs rounded-xl bg-cyber-dark/80 border border-cyber-border focus:border-cyber-neon focus:ring-1 focus:ring-cyber-neon text-white placeholder-sand-500 font-mono transition"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    aria-label="Subscribe to newsletter"
                    className="absolute right-2 top-2 p-1.5 rounded-lg bg-cyber-neon text-cyber-dark hover:scale-105 transition disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-[11px] text-red-400 font-mono">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits & System Telemetry */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-sand-400 font-mono gap-4">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} Roots of Balance. All rights reserved.</span>
            <span className="hidden sm:inline text-cyber-neon/30">•</span>
            <span className="text-[10px] text-cyber-neon/70 hidden sm:inline flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse inline-block" />
              STATUS: OPERATIONAL 99.98%
            </span>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link href="/privacy" className="hover:text-cyber-neon transition">
              {t.footer.credentialsEthics}
            </Link>
            <Link href="/terms" className="hover:text-cyber-neon transition">
              {t.footer.contact}
            </Link>
            <Link href="/admin" className="text-sand-500 hover:text-sand-300 transition">
              {t.footer.coachLogin}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
