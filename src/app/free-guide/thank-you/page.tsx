'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  Download,
  BookOpen,
  ArrowRight,
  Sparkles,
  Heart,
  Share2,
  Calendar,
  MessageCircle,
  Clock
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface LeadData {
  firstName: string;
  email: string;
  whatsapp?: string;
  languagePref?: 'ar' | 'en';
}

export default function FreeGuideThankYouPage() {
  const [lead, setLead] = useState<LeadData>({
    firstName: '',
    email: '',
  });

  const [downloadTriggered, setDownloadTriggered] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem('rob_free_guide_lead');
        if (stored) {
          const parsed = JSON.parse(stored);
          setLead(parsed);
        }
      } catch {
        // fallback
      }
    }
  }, []);

  const handleDownload = () => {
    setDownloadTriggered(true);

    trackEvent('service_viewed', {
      source: 'Free Guide Download Click',
      category: 'Lead Magnet Download',
      serviceTitle: 'PDF Guide Downloaded',
    });

    // In a production setup, replace with the exact hosted PDF asset URL
    // e.g., window.open('/downloads/roots-of-balance-guide.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#221F1A] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 selection:bg-sun-500/20" dir="rtl">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Brand Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white border border-sand-300 shadow-sm flex items-center justify-center p-1">
              <Image
                src="/images/logo.png"
                alt="Roots of Balance"
                width={44}
                height={44}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-right">
              <span className="font-serif text-xl font-normal text-earth-950 block leading-tight">
                جذور التوازن
              </span>
              <span className="text-[10px] tracking-widest uppercase text-earth-500 font-medium block">
                Roots of Balance
              </span>
            </div>
          </Link>
        </div>

        {/* Success Card */}
        <div className="bg-white border-2 border-sand-300 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
              تم تسجيل طلبكِ بنجاح
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-earth-950 font-normal leading-tight">
              أهلاً بكِ {lead.firstName ? `يا ${lead.firstName}` : ''}، دليلكِ المجاني جاهز الآن
            </h1>
            <p className="text-sm sm:text-base text-earth-600 font-light leading-relaxed max-w-xl mx-auto">
              يسعدنا انضمامكِ إلى مجتمع «جذور التوازن». تم إرسال نسخة احتياطية من الدليل إلى بريدكِ
              {lead.email ? ` (${lead.email}) ` : ' '}
              لتحتفظي بها دائماً.
            </p>
          </div>

          {/* Direct Download Action Container */}
          <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 sm:p-8 space-y-4 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs text-earth-700">
              <Sparkles className="w-4 h-4 text-sun-600" />
              <span>دليل العودة إلى الذات • صيغة PDF عالية الدقة • 24 صفحة</span>
            </div>

            <button
              onClick={handleDownload}
              className="w-full py-4 rounded-full bg-sun-600 hover:bg-sun-700 text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <Download className="w-5 h-5" />
              <span>تحميل الدليل الآن مباشرة (PDF)</span>
            </button>

            {downloadTriggered && (
              <p className="text-xs text-sage-800 bg-sage-100/70 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0" />
                <span>بدأ التحميل بنجاح! تفقدي مجلد التنزيلات على جهازكِ.</span>
              </p>
            )}

            <div className="flex items-center justify-center gap-4 text-[11px] text-earth-500 font-light pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sage-600" /> قراءة سهلة في 15 دقيقة
              </span>
              <span>•</span>
              <span>متوافق مع الهواتف والأجهزة اللوحية</span>
            </div>
          </div>

          {/* Suggested Next Steps */}
          <div className="pt-6 border-t border-sand-200 text-right space-y-4">
            <h3 className="font-serif text-lg text-earth-900 font-medium text-center sm:text-right">
              ما هي الخطوة التالية المقترحة؟
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Option A: Return to Self Program */}
              <div className="bg-white border border-sand-300 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:border-sage-400 transition">
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold text-sun-700 bg-sun-50 px-2 py-0.5 rounded-full inline-block">
                    البرنامج الرئيسي
                  </span>
                  <h4 className="font-serif text-base text-earth-950 font-normal">
                    برنامج «العودة إلى الذات»
                  </h4>
                  <p className="text-xs text-earth-600 font-light leading-relaxed">
                    رحلة تعليمية وتطبيقية متكاملة على 4 مراحل للمرأة الراغبة في تغيير سلوكي عميق وتوازن مستدام.
                  </p>
                </div>
                <Link
                  href="/return-to-self"
                  className="text-xs font-semibold text-sage-800 hover:text-sage-900 inline-flex items-center gap-1 pt-2"
                >
                  <span>استكشفي تفاصيل البرنامج</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>

              {/* Option B: Free Discovery Call */}
              <div className="bg-white border border-sand-300 rounded-2xl p-5 space-y-3 flex flex-col justify-between hover:border-sage-400 transition">
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold text-sage-700 bg-sage-50 px-2 py-0.5 rounded-full inline-block">
                    مكالمة استكشافية
                  </span>
                  <h4 className="font-serif text-base text-earth-950 font-normal">
                    جلسة استكشاف مجانية (45 دقيقة)
                  </h4>
                  <p className="text-xs text-earth-600 font-light leading-relaxed">
                    مساحة هادئة لفهم احتياجكِ ومناقشة مدى ملاءمة البرامج لظروفكِ مع علياء البلوكي بدون أي التزام.
                  </p>
                </div>
                <Link
                  href="/contact?type=individual"
                  className="text-xs font-semibold text-sage-800 hover:text-sage-900 inline-flex items-center gap-1 pt-2"
                >
                  <span>حجز موعد في التقويم</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>

          {/* Return to Home link */}
          <div className="pt-4 text-center">
            <Link
              href="/"
              className="text-xs text-earth-500 hover:text-earth-800 transition inline-flex items-center gap-1"
            >
              <span>العودة إلى الصفحة الرئيسية لموقع جذور التوازن</span> &larr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
