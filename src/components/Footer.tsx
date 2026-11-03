'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trackEvent } from '@/lib/analytics';
import { Mail, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
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
        body: JSON.stringify({ email, source: 'Website Footer Newsletter' }),
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
    <footer className="bg-earth-950 text-sand-200 border-t border-earth-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-earth-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
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
                <h3 className="font-serif text-2xl text-sand-50 tracking-tight">Roots of Balance</h3>
                <p className="text-xs uppercase tracking-widest text-sage-400 font-medium">جذور التوازن • Holistic Wellness & Academy</p>
              </div>
            </div>
            <p className="text-sm text-sand-300 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
            <div className="flex items-center space-x-3 rtl:space-x-reverse pt-2">
              <a
                href="https://instagram.com/roots__of_balance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-earth-900 border border-earth-800 flex items-center justify-center text-sand-300 hover:text-white hover:border-sage-500 transition"
                aria-label="Instagram @roots__of_balance"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/RootsOfBalance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-earth-900 border border-earth-800 flex items-center justify-center text-sand-300 hover:text-white hover:border-sage-500 transition"
                aria-label="Telegram Channel"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@RootsOfBalance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-earth-900 border border-earth-800 flex items-center justify-center text-sand-300 hover:text-white hover:border-sage-500 transition"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:rootsofbalance@outlook.com"
                className="w-9 h-9 rounded-full bg-earth-900 border border-earth-800 flex items-center justify-center text-sand-300 hover:text-white hover:border-sage-500 transition"
                aria-label="Email rootsofbalance@outlook.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Journey A: Personal Coaching */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sand-100 mb-4 font-sans">
              {t.footer.coachingColTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-400">
              <li>
                <Link href="/coaching" className="hover:text-sand-100 transition">
                  {lang === 'ar' ? 'الجلسات الفردية' : 'Individual Sessions'}
                </Link>
              </li>
              <li>
                <Link href="/coaching#stress" className="hover:text-sand-100 transition">
                  {lang === 'ar' ? 'التوتر والجهاز العصبي' : 'Stress & Nervous System'}
                </Link>
              </li>
              <li>
                <Link href="/coaching#mindfulness" className="hover:text-sand-100 transition">
                  {lang === 'ar' ? 'اليقظة الذهنية والاتزان' : 'Mindfulness & Alignment'}
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-sand-100 transition text-sage-300 font-medium flex items-center gap-1">
                  <span>{lang === 'ar' ? 'حجز موعد' : 'Schedule Appointment'}</span> &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Journey B: Coach Academy */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sand-100 mb-4 font-sans">
              {t.footer.academyColTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-400">
              <li>
                <Link href="/academy" className="hover:text-sand-100 transition">
                  {lang === 'ar' ? 'نظرة عامة على الأكاديمية' : 'Academy Overview'}
                </Link>
              </li>
              <li>
                <Link href="/academy#curriculum" className="hover:text-sand-100 transition">
                  {lang === 'ar' ? 'منهاج الـ 9 وحدات' : '9-Module Curriculum'}
                </Link>
              </li>
              <li>
                <Link href="/academy#methodology" className="hover:text-sand-100 transition">
                  {lang === 'ar' ? 'المنهجية التطبيقية' : 'Somatic Methodology'}
                </Link>
              </li>
              <li>
                <Link href="/academy/apply" className="hover:text-sand-100 transition text-terracotta-300 font-medium flex items-center gap-1">
                  <span>{lang === 'ar' ? 'تقديم طلب للدفعة القادمة' : 'Apply for Next Cohort'}</span> &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Free Guide */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sand-100 mb-2 font-sans">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-sand-400 mb-4 leading-relaxed">
              {t.footer.newsletterDesc}
            </p>
            {status === 'success' ? (
              <div className="bg-sage-900/60 border border-sage-700/50 rounded-lg p-3 text-xs text-sand-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage-400 shrink-0" />
                <span>{lang === 'ar' ? 'شكراً لكِ. دليلكِ في طريقه إلى بريدك الإلكتروني.' : 'Thank you. Your guide is on its way to your inbox.'}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.footer.placeholderEmail}
                    className="w-full bg-earth-900 border border-earth-800 rounded-lg px-3.5 py-2.5 text-xs text-sand-100 placeholder-earth-500 focus:outline-none focus:border-sage-500 transition"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="absolute ltr:right-1 rtl:left-1 top-1 bottom-1 px-3 bg-sage-700 hover:bg-sage-600 text-white rounded-md flex items-center justify-center transition disabled:opacity-50"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-[11px] text-terracotta-400">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal & Ethics Note */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-sand-400 gap-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Roots of Balance. {t.footer.copyright}
          </p>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link href="/about" className="hover:text-sand-200 transition">{t.footer.credentialsEthics}</Link>
            <Link href="/contact" className="hover:text-sand-200 transition">{t.footer.contact}</Link>
            <Link href="/admin/login" className="hover:text-sand-200 transition text-earth-500 hover:text-sand-400">
              {t.footer.coachLogin}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
