'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trackEvent } from '@/lib/analytics';
import { Send, CheckCircle2, Heart, Sparkles, BookOpen } from 'lucide-react';
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
        body: JSON.stringify({ email, source: 'Editorial Footer Newsletter' }),
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
    <footer className="bg-[#18261F] text-sand-200 border-t border-[#23382D] pt-20 pb-12 relative overflow-hidden">
      {/* Delicate background logo watermark */}
      <div className="absolute top-0 ltr:right-0 rtl:left-0 -mr-16 -mt-16 opacity-5 pointer-events-none select-none invert">
        <Image src="/images/logo.png" alt="" width={360} height={360} className="object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4 text-left rtl:text-right">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1 shadow-sm shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Roots of Balance Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-sand-50 tracking-tight">
                  {lang === 'ar' ? 'جذور التوازن' : 'Roots of Balance'}
                </h3>
                <p className="text-xs uppercase tracking-widest text-sage-300 font-medium">
                  {lang === 'ar' ? 'مساحة للشفاء الشمولي واكتشاف الذات' : 'Holistic Healing & Self-Discovery'}
                </p>
              </div>
            </div>

            <p className="text-sm text-sand-300/90 leading-relaxed max-w-sm font-light">
              {t.footer.desc}
            </p>

            <div className="flex items-center space-x-3 rtl:space-x-reverse pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sand-300 hover:text-white hover:bg-white/10 transition duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sand-300 hover:text-white hover:bg-white/10 transition duration-300"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Dimensions */}
          <div className="space-y-4 text-left rtl:text-right">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sage-300">
              {t.footer.dimensionsColTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-300/80">
              <li>
                <Link href="/#dimensions" className="hover:text-white transition">
                  {lang === 'ar' ? 'التوازن العاطفي' : 'Emotional Wellbeing'}
                </Link>
              </li>
              <li>
                <Link href="/#dimensions" className="hover:text-white transition">
                  {lang === 'ar' ? 'الصحة النفسية والذهنية' : 'Mental Wellbeing'}
                </Link>
              </li>
              <li>
                <Link href="/#dimensions" className="hover:text-white transition">
                  {lang === 'ar' ? 'الصحة الجسدية وحيوية الجذور' : 'Physical Wellbeing'}
                </Link>
              </li>
              <li>
                <Link href="/#dimensions" className="hover:text-white transition">
                  {lang === 'ar' ? 'التوازن الروحي والاتصال' : 'Spiritual Wellbeing'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Knowledge & Exploration */}
          <div className="space-y-4 text-left rtl:text-right">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sage-300">
              {t.footer.resourcesColTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-300/80">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" className="hover:text-white transition">
                  {lang === 'ar' ? 'فلسفة التوازن' : 'Our Philosophy'}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-white transition">
                  {t.nav.academy}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Mindful Journal */}
          <div className="space-y-4 text-left rtl:text-right">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sage-300 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sage-400" />
              <span>{t.footer.newsletterTitle}</span>
            </h4>
            <p className="text-xs text-sand-300/80 leading-relaxed font-light">
              {t.footer.newsletterDesc}
            </p>

            {status === 'success' ? (
              <div className="p-3.5 rounded-xl bg-sage-900/80 border border-sage-700/80 text-sand-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage-300 shrink-0" />
                <span>{t.footer.subscribedSuccess}</span>
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
                    className="w-full pl-4 pr-10 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 focus:border-sage-400 focus:ring-1 focus:ring-sage-400 text-white placeholder-sand-400/60 font-light transition"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    aria-label="Subscribe to newsletter"
                    className="absolute ltr:right-2 rtl:left-2 top-2 p-1.5 rounded-lg bg-sage-700 hover:bg-sage-600 text-white transition disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-[11px] text-terracotta-300">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits & Ethical Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-sand-400/80 gap-4 text-center md:text-left rtl:md:text-right">
          <div>
            <span>&copy; {new Date().getFullYear()} Roots of Balance (جذور التوازن). {t.footer.copyright}</span>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse text-xs">
            <Link href="/about#ethics" className="hover:text-sand-200 transition">
              {t.footer.credentialsEthics}
            </Link>
            <Link href="/contact" className="hover:text-sand-200 transition">
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
