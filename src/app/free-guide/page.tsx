'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  Download,
  CheckCircle2,
  Lock,
  ArrowDown,
  BookOpen,
  Heart,
  Compass,
  Feather,
  Sun,
  ShieldCheck,
  Star,
  Clock,
  FileText,
  ChevronRight,
  Send
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function FreeGuideLandingPage() {
  const router = useRouter();

  // Form State
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [languagePref, setLanguagePref] = useState<'ar' | 'en'>('ar');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Smooth scroll helper
  const scrollToForm = () => {
    const el = document.getElementById('guide-registration-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      // Capture UTM parameters from URL if present
      let utmSource = 'meta_ads';
      let utmCampaign = '';
      let utmMedium = '';
      let fbclid = '';

      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        utmSource = urlParams.get('utm_source') || utmSource;
        utmCampaign = urlParams.get('utm_campaign') || '';
        utmMedium = urlParams.get('utm_medium') || '';
        fbclid = urlParams.get('fbclid') || '';
      }

      // Store lead info locally for instant preview / thank-you handoff
      const leadPayload = {
        firstName: firstName.trim(),
        email: email.trim().toLowerCase(),
        whatsapp: whatsapp.trim(),
        languagePref,
        marketingConsent,
        utmSource,
        utmCampaign,
        utmMedium,
        fbclid,
        submittedAt: new Date().toISOString(),
      };

      if (typeof window !== 'undefined') {
        sessionStorage.setItem('rob_free_guide_lead', JSON.stringify(leadPayload));
      }

      // Fire analytics Lead event
      trackEvent('contact_submitted', {
        source: 'Free Guide Landing Page',
        category: 'Lead Magnet',
        serviceTitle: 'Free Wellness Guide',
      });

      // Direct to thank you / download experience
      setTimeout(() => {
        router.push('/free-guide/thank-you');
      }, 350);
    } catch {
      setErrorMessage('حدث خطأ أثناء إرسال البيانات. يُرجى التحقق وإعادة المحاولة.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden selection:bg-sun-500/20 selection:text-earth-950">
      {/* =========================================================================
          TOP MINIMAL HEADER (Distraction-Free)
          ========================================================================= */}
      <header className="w-full border-b border-sand-300/70 bg-[#FAF8F5]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-sand-300 shadow-sm flex items-center justify-center p-1 group-hover:border-sage-400 transition">
              <Image
                src="/images/logo.png"
                alt="Roots of Balance"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-normal text-earth-950 block leading-tight">
                جذور التوازن
              </span>
              <span className="text-[10px] tracking-widest uppercase text-earth-500 font-medium block">
                Roots of Balance
              </span>
            </div>
          </Link>

          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-sun-600 hover:bg-sun-700 text-white text-xs sm:text-sm font-medium transition shadow-md hover:shadow-lg"
          >
            <Download className="w-3.5 h-3.5" />
            <span>احصلي على دليلكِ</span>
          </button>
        </div>
      </header>

      {/* =========================================================================
          SECTION A – HERO SECTION
          ========================================================================= */}
      <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F0E8] via-[#FAF8F5] to-[#FAF8F5]">
        {/* Soft Background Radial Light */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              'radial-gradient(ellipse 65% 50% at 50% 15%, rgba(254, 215, 170, 0.28) 0%, transparent 75%)',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left/Main Column: Emotionally Engaging Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
              {/* Luxury Badge: 100% Free */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-sun-300/80 shadow-soft backdrop-blur-sm text-xs font-medium text-earth-900">
                <span className="w-2 h-2 rounded-full bg-sun-500 animate-pulse" />
                <span className="text-sun-700 font-semibold">دليل إرشادي مجاني 100%</span>
                <span className="opacity-40">|</span>
                <span className="text-earth-600 font-light">نسخة رقمية جاهزة للتحميل الفوري (PDF)</span>
              </div>

              {/* Main Headline with generous line-height */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-earth-950 font-normal leading-[1.3] sm:leading-[1.38]">
                كيف تستعيدين هدوءكِ الداخلي...<br />
                <span className="text-sage-800 block mt-2 text-2xl sm:text-3xl lg:text-4xl font-light">
                  حين تشعرين بأنكِ بعيدة عن نفسكِ؟
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-earth-700 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                دليل تطبيقي هادئ يمنحكِ مساحة للإصغاء إلى مشاعركِ، وفهم مصادر الاستنزاف اليومي،
                واكتشاف خطوات صغيرة وملموسة تعيد لكِ التوازن بين عقلكِ، جسدكِ، واحتياجاتكِ الحقيقية.
              </p>

              {/* Trust Micro-Bullets */}
              <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start text-xs text-earth-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0" />
                  <span>تأملات وتمارين واقعية</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0" />
                  <span>قراءة في 15 دقيقة فقط</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0" />
                  <span>دون أي التزام أو اشتراك مدفوع</span>
                </div>
              </div>

              {/* Primary Hero CTA */}
              <div className="pt-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sun-600 hover:bg-sun-700 text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>احصلي على دليلكِ المجاني الآن</span>
                </button>
                <span className="text-xs text-earth-500 font-light flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-sage-600" />
                  <span>خصوصيتكِ محفوظة 100% — لا رسائل مزعجة</span>
                </span>
              </div>
            </div>

            {/* Right Column: Visual Mockup of the Free Guide */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Ambient Warm Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sun-400/20 via-sage-300/30 to-amber-200/40 rounded-3xl blur-2xl transform -rotate-3 scale-95" />

                {/* Guide Book Container */}
                <div className="relative bg-[#FFFFFF] border-2 border-sand-300 rounded-3xl p-6 shadow-2xl space-y-6">
                  {/* Mockup Badge */}
                  <div className="flex items-center justify-between border-b border-sand-200 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-sun-500" />
                      <span className="text-xs font-semibold text-earth-900 uppercase tracking-wider">
                        دليل إرشادي رقمي
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-sage-700 bg-sage-50 px-2.5 py-1 rounded-full border border-sage-200">
                      إصدار 2026
                    </span>
                  </div>

                  {/* Visual PDF Cover Simulation */}
                  <div className="relative aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#1C2C23] via-[#2F4A3C] to-[#18261F] text-sand-50 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-inner">
                    {/* Delicate Background Tree Seal */}
                    <div className="absolute -bottom-10 -right-10 opacity-15 pointer-events-none invert">
                      <Image
                        src="/images/logo.png"
                        alt=""
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                    </div>

                    <div className="space-y-3 relative z-10">
                      <div className="flex items-center gap-2 text-sun-300 text-xs">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span className="tracking-widest uppercase font-serif">جذور التوازن</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-sand-100 font-normal leading-snug">
                        دليل العودة<br />
                        <span className="text-sun-300 font-light">إلى الذات</span>
                      </h3>
                      <div className="h-0.5 w-12 bg-sun-400/80 rounded-full" />
                    </div>

                    <div className="space-y-4 relative z-10 pt-6">
                      <p className="text-xs text-sand-200/90 font-light leading-relaxed">
                        خطوات تأملية عملية لفهم الاحتياجات، وضع الحدود الصحية، وبناء التوازن بين الجسد والروح.
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-sand-300/80 pt-2 border-t border-white/10">
                        <span>إعداد: علياء البلوكي</span>
                        <span className="font-mono text-sun-300">PDF • فوري</span>
                      </div>
                    </div>
                  </div>

                  {/* Value highlights below cover */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-earth-700 pt-1">
                    <div className="bg-sand-100/70 p-2 rounded-xl">
                      <FileText className="w-4 h-4 text-sage-700 mx-auto mb-1" />
                      <span className="font-medium block">24 صفحة</span>
                    </div>
                    <div className="bg-sand-100/70 p-2 rounded-xl">
                      <Clock className="w-4 h-4 text-sage-700 mx-auto mb-1" />
                      <span className="font-medium block">تحميل فوري</span>
                    </div>
                    <div className="bg-sand-100/70 p-2 rounded-xl">
                      <Star className="w-4 h-4 text-sun-600 mx-auto mb-1" />
                      <span className="font-medium block">تطبيق يومي</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B – WHAT WILL YOU DISCOVER? (ماذا ستكتشفين في الدليل؟)
          ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold px-3.5 py-1 rounded-full bg-sage-100 border border-sage-200 inline-block">
            محتوى مصمم بعناية
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-earth-950 font-normal leading-snug">
            ماذا ستكتشفين في هذا الدليل المجاني؟
          </h2>
          <p className="text-sm sm:text-base text-earth-600 font-light leading-relaxed">
            ليس كتاباً نظرياً طويلاً، بل خريطة طريق واضحة تجمع بين الفهم العميق والتمارين الهادئة لتساعدكِ على إحداث فرق حقيقي في يومكِ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              title: 'فهم احتياجاتكِ العاطفية والجسدية',
              desc: 'كيف تميّزين بين الإرهاق العابر والاستنزاف المزمن، وتتعرفين إلى ما يطلبه جسدكِ منكِ قبل أن يصل لمرحلة الإنهاك.',
              tag: 'الوعي الحسي'
            },
            {
              icon: Compass,
              title: 'تفكيك نمط إرضاء الآخرين والحدود',
              desc: 'كيف تقولين «لا» بلطف واحترام دون الشعور بالذنب، لتوفرين طاقتكِ لمن ولما يهمكِ حقاً.',
              tag: 'الحدود الصحية'
            },
            {
              icon: Feather,
              title: 'إعادة الاتصال بالذات والسكينة',
              desc: 'ممارسات تأملية يومية تستغرق دقائق معدودة تعيدكِ لمركزكِ وتمنحكِ هدوءاً فكرياً وسط مشاغل الحياة.',
              tag: 'الحضور الذهني'
            },
            {
              icon: Sun,
              title: 'تنسيق العادات الحياتية والغذائية',
              desc: 'كيف تنظمين إيقاع يومكِ ونومكِ وغذائكِ بما يتوافق مع طاقتكِ الطبيعية دون حميات قاسية أو جداول معقدة.',
              tag: 'حيوية الجسد'
            },
            {
              icon: BookOpen,
              title: 'تمارين كتابية واستمارة فحص التوازن',
              desc: 'أسئلة موجهة وكتابة تأملية تدلكِ على نقطة البداية الصحيحة التي تحتاجين التركيز عليها في هذه المرحلة.',
              tag: 'أدوات تطبيقية'
            },
            {
              icon: Sparkles,
              title: 'الانتقال من المعرفة إلى التطبيق',
              desc: 'أدوات صغيرة وملموسة تضمن ألا تبقى هذه الأفكار مجرد قراءات عابرة، بل تصبح أسلوب حياة هادئ ومستدام.',
              tag: 'أثر مستدام'
            }
          ].map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-sand-300 rounded-3xl p-6 sm:p-7 space-y-4 hover:border-sage-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-sage-50 border border-sage-200 text-sage-800 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-earth-500 bg-sand-100 px-2.5 py-1 rounded-full">
                      {benefit.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-earth-950 font-normal leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-earth-600 font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-page Anchor Link */}
        <div className="text-center pt-10">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 text-xs font-semibold text-sun-700 hover:text-sun-800 transition underline underline-offset-8"
          >
            <span>انتقلي مباشرة لاستلام نسختكِ المجانية</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION C – PREVIEW OF THE FREE GUIDE (معاينة من داخل الدليل)
          ========================================================================= */}
      <section className="bg-sand-100/70 border-y border-sand-300/80 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold px-3.5 py-1 rounded-full bg-white border border-sand-300 inline-block">
              نظرة من الداخل
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-earth-950 font-normal">
              ماذا تحتوي صفحات الدليل؟
            </h2>
            <p className="text-sm text-earth-600 font-light leading-relaxed">
              تصميم هادئ ومريح للعين، خالٍ من الحشو، ومنظم في فصول متناسقة يمكنكِ العودة إليها متى ما احتجتِ إلى استعادة توازنكِ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Page Preview 1 */}
            <div className="bg-white rounded-2xl border border-sand-300 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between text-xs text-earth-500 border-b border-sand-200 pb-3">
                <span className="font-mono text-sage-700 font-medium">الفصل 01</span>
                <span>الملاحظة والوعي</span>
              </div>
              <h4 className="font-serif text-lg text-earth-900 font-medium">
                «من أين يبدأ التعب؟»
              </h4>
              <p className="text-xs text-earth-600 font-light leading-relaxed">
                تحليل مبسط للمستنزفات اليومية الثلاثة: التفكير الزائد، والالتزامات المفروضة، وتجاهل رسائل الجسد الأولى.
              </p>
              <div className="bg-sand-50 p-3 rounded-xl border border-sand-200 text-[11px] text-earth-700 font-serif italic">
                «حين نفهم ما يستنزفنا، يصبح التغيير خياراً واعياً وليس معركة شاقة.»
              </div>
            </div>

            {/* Page Preview 2 */}
            <div className="bg-white rounded-2xl border-2 border-sun-300 p-6 space-y-4 shadow-md relative">
              <div className="absolute -top-3 left-6 bg-sun-600 text-white text-[10px] uppercase font-semibold px-3 py-0.5 rounded-full shadow-sm">
                الأكثر طلباً
              </div>
              <div className="flex items-center justify-between text-xs text-earth-500 border-b border-sand-200 pb-3">
                <span className="font-mono text-sun-700 font-medium">الفصل 02</span>
                <span>أدوات عملية</span>
              </div>
              <h4 className="font-serif text-lg text-earth-900 font-medium">
                «تمارين الحدود الأربعة»
              </h4>
              <p className="text-xs text-earth-600 font-light leading-relaxed">
                عبارات جاهزة وتدريبات كتابية تساعدكِ على حماية وقتكِ وطاقتكِ بأسلوب راقٍ يحفظ احترامكِ للآخرين ولنفسكِ.
              </p>
              <div className="bg-sun-50/70 p-3 rounded-xl border border-sun-200 text-[11px] text-earth-800 font-serif italic">
                «الحدود ليست جداراً لعزل الآخرين، بل باباً نحدد من خلاله ما نسمح له بالدخول إلى عالمنا.»
              </div>
            </div>

            {/* Page Preview 3 */}
            <div className="bg-white rounded-2xl border border-sand-300 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between text-xs text-earth-500 border-b border-sand-200 pb-3">
                <span className="font-mono text-sage-700 font-medium">الفصل 03</span>
                <span>التطبيق اليومي</span>
              </div>
              <h4 className="font-serif text-lg text-earth-900 font-medium">
                «طقوس الاستعادة المسائية»
              </h4>
              <p className="text-xs text-earth-600 font-light leading-relaxed">
                خطوات بسيطة في 10 دقائق لتهدئة الجهاز العصبي وفصل ضغوط العمل والمسؤوليات قبل النوم لراحة حقيقية.
              </p>
              <div className="bg-sand-50 p-3 rounded-xl border border-sand-200 text-[11px] text-earth-700 font-serif italic">
                «الراحة ليست مكافأة على ما أنجزتِ، بل هي الأساس الذي تستند عليه صحتكِ وقدرتكِ على العطاء.»
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D – REGISTRATION FORM (The Core CRO Engine)
          ========================================================================= */}
      <section
        id="guide-registration-form"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24"
      >
        <div className="bg-white border-2 border-sand-300 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sun-200/50 via-sand-100/30 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sun-50 border border-sun-200 text-sun-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>احصلي على دليلكِ الآن في ثوانٍ</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-earth-950 font-normal leading-tight">
                أدخلي بياناتكِ لاستلام رابط التحميل المباشر
              </h2>
              <p className="text-xs sm:text-sm text-earth-600 font-light leading-relaxed">
                سيصلكِ الدليل مباشرة بصيغة PDF عالية الدقة، مع رسالة تأكيد تتضمن رابط القراءة في أي وقت.
              </p>
            </div>

            {/* Error Message if any */}
            {errorMessage && (
              <div className="bg-terracotta-50 border border-terracotta-300 text-terracotta-900 rounded-2xl p-4 text-xs">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Field 1: First Name */}
              <div>
                <label className="text-xs font-medium text-earth-900 block mb-1.5">
                  الاسم الأول <span className="text-sun-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="مثال: سارة أو مريم"
                  className="w-full bg-[#FAF8F5] border border-sand-300 rounded-xl px-4 py-3.5 text-sm text-earth-950 placeholder:text-earth-400 focus:outline-none focus:border-sage-600 focus:ring-2 focus:ring-sage-600/10 transition"
                />
              </div>

              {/* Field 2: Email */}
              <div>
                <label className="text-xs font-medium text-earth-900 block mb-1.5">
                  البريد الإلكتروني <span className="text-sun-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@example.com"
                  className="w-full bg-[#FAF8F5] border border-sand-300 rounded-xl px-4 py-3.5 text-sm text-earth-950 placeholder:text-earth-400 focus:outline-none focus:border-sage-600 focus:ring-2 focus:ring-sage-600/10 transition text-left"
                  dir="ltr"
                />
                <span className="text-[11px] text-earth-500 font-light mt-1 block">
                  نرسل رابط الدليل إلى هذا العنوان، ولن نشاركه مع أي طرف خارجي أبداً.
                </span>
              </div>

              {/* Field 3: WhatsApp Number (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-medium text-earth-900">
                    رقم الواتساب <span className="text-earth-400 font-light">(اختياري)</span>
                  </label>
                  <span className="text-[11px] text-earth-400 font-light">لاستلام نسخة عبر واتساب</span>
                </div>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+971 50 000 0000"
                  className="w-full bg-[#FAF8F5] border border-sand-300 rounded-xl px-4 py-3.5 text-sm text-earth-950 placeholder:text-earth-400 focus:outline-none focus:border-sage-600 focus:ring-2 focus:ring-sage-600/10 transition text-left"
                  dir="ltr"
                />
              </div>

              {/* Field 4: Preferred Language */}
              <div>
                <label className="text-xs font-medium text-earth-900 block mb-2">
                  لغة الدليل المفضلة
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setLanguagePref('ar')}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-medium transition flex items-center justify-center gap-2 ${
                      languagePref === 'ar'
                        ? 'border-sage-700 bg-sage-50 text-sage-900 font-semibold'
                        : 'border-sand-300 bg-[#FAF8F5] text-earth-600 hover:border-sand-400'
                    }`}
                  >
                    <span>العربية (النسخة الأساسية)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguagePref('en')}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-medium transition flex items-center justify-center gap-2 ${
                      languagePref === 'en'
                        ? 'border-sage-700 bg-sage-50 text-sage-900 font-semibold'
                        : 'border-sand-300 bg-[#FAF8F5] text-earth-600 hover:border-sand-400'
                    }`}
                  >
                    <span>English Version</span>
                  </button>
                </div>
              </div>

              {/* Privacy Notice & Explicit Unchecked Marketing Consent */}
              <div className="pt-3 border-t border-sand-200 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group text-xs text-earth-700 font-light leading-relaxed">
                  <input
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    className="mt-0.5 rounded border-sand-400 text-sun-600 focus:ring-sun-500 w-4 h-4 cursor-pointer shrink-0"
                  />
                  <span>
                    أرغب أيضاً في استلام رسائل وتأملات أسبوعية مجانية من علياء البلوكي حول العافية الشاملة واكتشاف الذات (يمكنكِ إلغاء الاشتراك في أي وقت بنقرة واحدة).
                  </span>
                </label>

                <p className="text-[11px] text-earth-500 font-light flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-sage-700 shrink-0" />
                  <span>
                    بالضغط على الزر أدناه، ستصلكِ نسخة الدليل المجاني دون أي شروط أو رسوم مخفية.
                  </span>
                </p>
              </div>

              {/* Main Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-sun-600 hover:bg-sun-700 text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>جارٍ تجهيز نسختكِ...</span>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>احصلي على دليلكِ المجاني الآن</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E – BRAND CREDIBILITY (من يقف وراء جذور التوازن؟)
          ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-sand-50 border border-sand-300 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden shadow-md border-2 border-sand-300">
                <Image
                  src="/images/alia-alblooki.jpg"
                  alt="علياء البلوكي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-8 space-y-3 text-center md:text-right">
              <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
                مؤسسة جذور التوازن
              </span>
              <h3 className="font-serif text-2xl text-earth-950 font-normal">
                علياء البلوكي
              </h3>
              <p className="text-xs sm:text-sm text-earth-700 font-light leading-relaxed">
                مدربة ومستشارة في العافية الشاملة وتطوير الذات، حاصلة على مؤهلات في تدريب المدربين والتدريب المؤسسي،
                وشهادة Focus Awards Level 4 في التغذية وإدارة الوزن والأداء الرياضي (2025).
              </p>
              <p className="text-xs text-earth-600 font-light leading-relaxed">
                تأسست «جذور التوازن» لتكون مساحة هادئة تبتعد عن الضجيج والوعود الوهمية، وتركز على بناء وعي أصيل،
                وتحويل المعرفة إلى ممارسات يومية تصنع فارقاً مستداماً في صحتكِ، مشاعركِ، وحياتكِ بأكملها.
              </p>
              <div className="pt-1 flex items-center justify-center md:justify-start gap-4 text-xs text-sage-800 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-sage-700" />
                  محتوى مبني على أسس مهنية وتطبيقية
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION F – FINAL CTA (الدعوة الختامية للتسجيل)
          ========================================================================= */}
      <section className="bg-gradient-to-b from-[#1C2C23] to-[#14211A] text-sand-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Subtle Watermark Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none invert">
          <Image
            src="/images/logo.png"
            alt=""
            width={380}
            height={380}
            className="object-contain"
          />
        </div>

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-sun-300 font-semibold block">
            البداية خطوة صغيرة
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.3] text-sand-100">
            أحياناً، كل ما تحتاجينه هو مساحة هادئة لتتذكري نفسكِ
          </h2>
          <p className="text-sm sm:text-base text-sand-200/90 font-light leading-relaxed">
            لا تنتظري حتى تنفد طاقتكِ بالكامل. ابدئي اليوم بقراءة هذا الدليل وتطبيق أول فكرة تلامس قلبكِ.
          </p>
          <div className="pt-2">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-sun-600 hover:bg-sun-700 text-white font-medium text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>احصلي على دليلكِ المجاني الآن</span>
            </button>
          </div>
          <p className="text-[11px] text-sand-300/70 font-light">
            دليل إلكتروني متاح للتحميل المجاني المباشر • بدون أي رسوم
          </p>
        </div>
      </section>

      {/* =========================================================================
          MINIMAL FOOTER
          ========================================================================= */}
      <footer className="bg-[#0F1813] text-sand-300/70 text-xs py-8 px-4 border-t border-white/5 text-center space-y-2">
        <p>© {new Date().getFullYear()} جذور التوازن | Roots of Balance. جميع الحقوق محفوظة.</p>
        <p className="text-[11px] text-sand-300/50">
          هذا الدليل لأغراض التثقيف والتطوير الشخصي، ولا يُعد بديلاً عن الرعاية الطبية أو الاستشارات النفسية المتخصصة.
        </p>
      </footer>
    </div>
  );
}
