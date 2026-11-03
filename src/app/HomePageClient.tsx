'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HeartPulse,
  Compass,
  Sprout,
  Clock,
  BookOpen,
  Users
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CoachingService, AcademyModule, Testimonial, CoachProfile } from '@/lib/db';

interface Props {
  profile: CoachProfile;
  services: CoachingService[];
  modules: AcademyModule[];
  testimonials: Testimonial[];
}

export default function HomePageClient({ profile, services, modules, testimonials }: Props) {
  const { t, lang } = useLanguage();

  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      {/* 1. HERO SECTION: Editorial, Calming, Dual Journeys */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 bg-gradient-to-b from-sand-100/70 via-sand-50 to-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center ltr:lg:text-left rtl:lg:text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100/80 border border-sage-200 text-sage-900 text-xs tracking-wider uppercase font-medium">
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
                  <Image src="/images/logo.png" alt="Logo" width={16} height={16} className="object-contain" />
                </div>
                <span>{t.hero.tagline}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-earth-950 font-normal leading-[1.15] tracking-tight">
                {t.hero.titleLine1} <br />
                <span className="italic font-serif text-sage-800">{t.hero.titleLine2}</span>
              </h1>

              <p className="text-base sm:text-lg text-earth-700 leading-relaxed max-w-2xl font-light">
                {t.hero.description}
              </p>

              {/* Dual-Journey CTA Cards */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto ltr:lg:mx-0 rtl:lg:mx-0">
                {/* Journey A */}
                <div className="bg-sand-50 border border-sand-300/80 rounded-2xl p-5 hover:border-sage-400 hover:shadow-md transition-all duration-300 text-left rtl:text-right flex flex-col justify-between group">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block mb-1">
                      {lang === 'ar' ? 'للأفراد' : 'For Individuals'}
                    </span>
                    <h2 className="font-serif text-lg font-medium text-earth-900 mb-1.5">
                      {t.hero.journeyATitle}
                    </h2>
                    <p className="text-xs text-earth-600 mb-4 leading-relaxed">
                      {t.hero.journeyASub}
                    </p>
                  </div>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white bg-sage-700 hover:bg-sage-800 px-4 py-2.5 rounded-full transition w-fit"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.nav.bookSession}</span>
                  </Link>
                </div>

                {/* Journey B */}
                <div className="bg-sand-50 border border-sand-300/80 rounded-2xl p-5 hover:border-terracotta-400 hover:shadow-md transition-all duration-300 text-left rtl:text-right flex flex-col justify-between group">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-terracotta-700 font-semibold block mb-1">
                      {lang === 'ar' ? 'للمدربين المستقبليين' : 'For Aspiring Practitioners'}
                    </span>
                    <h2 className="font-serif text-lg font-medium text-earth-900 mb-1.5">
                      {t.hero.journeyBTitle}
                    </h2>
                    <p className="text-xs text-earth-600 mb-4 leading-relaxed">
                      {t.hero.journeyBSub}
                    </p>
                  </div>
                  <Link
                    href="/academy"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-earth-900 bg-sand-200 hover:bg-sand-300 px-4 py-2.5 rounded-full transition w-fit border border-sand-400/50"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-terracotta-700" />
                    <span>{t.nav.becomeCoach}</span>
                  </Link>
                </div>
              </div>

              {/* Social Proof Indicator */}
              <div className="pt-2 flex items-center justify-center ltr:lg:justify-start rtl:lg:justify-start gap-4 text-xs text-earth-600">
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  <div className="w-7 h-7 rounded-full bg-sage-300 border-2 border-sand-50 flex items-center justify-center text-[10px] font-bold text-sage-900">
                    AA
                  </div>
                  <div className="w-7 h-7 rounded-full bg-terracotta-300 border-2 border-sand-50 flex items-center justify-center text-[10px] font-bold text-terracotta-900">
                    RO
                  </div>
                  <div className="w-7 h-7 rounded-full bg-sand-400 border-2 border-sand-50 flex items-center justify-center text-[10px] font-bold text-earth-900">
                    LK
                  </div>
                </div>
                <span>{t.hero.socialProof}</span>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-sand-100 relative">
                  <Image
                    src="/images/alia-alblooki.jpg"
                    alt="Alia Alblooki - Holistic Wellness Coach"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-950/60 via-transparent to-transparent" />
                  
                  {/* Floating Quote Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-sand-50/95 backdrop-blur-md p-4 rounded-xl border border-sand-200 shadow-lg text-left rtl:text-right">
                    <p className="font-serif italic text-sm text-earth-900">
                      &quot;{t.hero.quoteText}&quot;
                    </p>
                    <span className="block text-[11px] uppercase tracking-wider text-sage-700 font-semibold mt-1">
                      {t.hero.quoteAuthor}
                    </span>
                  </div>
                </div>

                {/* Subtle Decorative Aura */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-sage-200/50 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-terracotta-200/40 rounded-full blur-3xl -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & WHAT HOLISTIC COACHING MEANS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
            {t.philosophy.subtitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
            {t.philosophy.title}
          </h2>
          <p className="text-base text-earth-700 font-light leading-relaxed">
            {t.philosophy.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: t.philosophy.p1Title, desc: t.philosophy.p1Desc, icon: HeartPulse },
            { title: t.philosophy.p2Title, desc: t.philosophy.p2Desc, icon: Sprout },
            { title: t.philosophy.p3Title, desc: t.philosophy.p3Desc, icon: Compass },
            { title: t.philosophy.p4Title, desc: t.philosophy.p4Desc, icon: ShieldCheck },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-sand-100/60 border border-sand-200/80 rounded-2xl p-6 hover:bg-sand-100 transition-all duration-300 text-left rtl:text-right"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-50 border border-sage-200/60 flex items-center justify-center text-sage-800 mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-earth-900 font-medium mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-earth-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PERSONAL COACHING SERVICES PREVIEW (Journey A) */}
      <section className="bg-sand-100/70 border-y border-sand-300/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-left rtl:text-right">
              <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block mb-1">
                {t.servicesSection.subtitle}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
                {t.servicesSection.title}
              </h2>
              <p className="text-sm text-earth-600 mt-2 max-w-xl font-light">
                {t.servicesSection.intro}
              </p>
            </div>
            <Link
              href="/coaching"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-800 hover:text-sage-900 underline underline-offset-4"
            >
              <span>{t.servicesSection.viewAll}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-sand-50 rounded-2xl border border-sand-300/80 p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 text-left rtl:text-right"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-earth-500 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-sand-200 text-earth-800 font-medium">
                      {service.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-sage-700" />
                      {service.durationMinutes} {lang === 'ar' ? 'دقيقة' : 'mins'}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-earth-900 font-medium mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-earth-600 leading-relaxed mb-6 font-light">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-earth-700 block">
                      {lang === 'ar' ? 'الأهداف الأساسية للجلسة:' : 'Core Objectives:'}
                    </span>
                    {service.objectives.slice(0, 3).map((obj) => (
                      <div key={obj} className="flex items-start gap-2 text-xs text-earth-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-sand-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-earth-500 block">{t.servicesSection.investment}</span>
                    <span className="font-serif text-2xl font-normal text-earth-950">
                      ${service.price}
                    </span>
                  </div>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sage-700 hover:bg-sage-800 text-white text-xs uppercase tracking-wider font-medium transition"
                  >
                    <span>{t.servicesSection.bookNow}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRAINING ACADEMY PILLAR PREVIEW (Journey B) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-900 text-sand-100 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle logo background watermark */}
          <div className="absolute top-0 ltr:right-0 rtl:left-0 -mr-12 -mt-12 opacity-10 pointer-events-none select-none invert">
            <Image src="/images/logo.png" alt="" width={280} height={280} className="object-contain" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-800 border border-sage-700 text-xs uppercase tracking-widest text-terracotta-300 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.academySection.badge}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
                {t.academySection.title}
              </h2>

              <p className="text-sm sm:text-base text-sand-300 leading-relaxed font-light max-w-xl">
                {t.academySection.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sage-800 flex items-center justify-center text-terracotta-300 shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white block">{t.academySection.feature1Title}</span>
                    <span className="text-xs text-sand-400">{t.academySection.feature1Sub}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sage-800 flex items-center justify-center text-sage-300 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white block">{t.academySection.feature2Title}</span>
                    <span className="text-xs text-sand-400">{t.academySection.feature2Sub}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/academy"
                  className="px-6 py-3 rounded-full bg-white text-earth-950 font-medium text-xs uppercase tracking-wider hover:bg-sand-200 transition shadow-sm inline-flex items-center gap-2"
                >
                  <span>{t.academySection.ctaExplore}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
                <Link
                  href="/academy/apply"
                  className="px-6 py-3 rounded-full border border-sand-400/40 text-sand-200 hover:text-white hover:bg-sage-800/80 font-medium text-xs uppercase tracking-wider transition"
                >
                  {t.academySection.ctaApply}
                </Link>
              </div>
            </div>

            {/* Curriculum Preview Cards */}
            <div className="lg:col-span-5 space-y-3 text-left rtl:text-right">
              <span className="text-xs uppercase tracking-widest text-sand-400 font-semibold block mb-2">
                {t.academySection.curriculumSnapshot}
              </span>
              {modules.map((mod) => (
                <div
                  key={mod.id}
                  className="bg-sage-800/60 border border-sage-700/60 rounded-xl p-4 hover:bg-sage-800 transition"
                >
                  <div className="flex items-center justify-between text-xs text-terracotta-300 mb-1">
                    <span className="font-semibold uppercase tracking-wider">
                      {lang === 'ar' ? `الوحدة ${mod.moduleNumber}` : `Module ${mod.moduleNumber}`}
                    </span>
                    <span className="text-sand-400">{mod.durationWeeks} {lang === 'ar' ? 'أسابيع' : 'weeks'}</span>
                  </div>
                  <h4 className="text-sm font-serif text-white font-medium mb-1">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-sand-300 font-light line-clamp-1">
                    {mod.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET ALIA ALBLOOKI & CREDENTIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-sand-200 relative">
              <Image
                src="/images/alia-alblooki.jpg"
                alt="Alia Alblooki - Founder of Roots of Balance"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 ltr:-right-4 rtl:-left-4 bg-sand-50 border border-sand-300 rounded-xl p-3 shadow-lg text-center flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center overflow-hidden p-0.5 border border-sand-200">
                <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-[11px] uppercase tracking-wider text-earth-700 font-medium">Roots of Balance</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
              {t.meetAlia.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
              {t.meetAlia.name}
            </h2>
            <p className="text-xs uppercase tracking-widest text-sage-800 font-medium">
              {t.meetAlia.title}
            </p>

            <div className="space-y-4 text-sm text-earth-700 leading-relaxed font-light">
              <p>{t.meetAlia.p1}</p>
              <p>{t.meetAlia.p2}</p>
            </div>

            <div className="pt-4 border-t border-sand-300/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.credentials.map((cred) => (
                <div key={cred.title} className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-medium text-earth-900">{cred.title}</h5>
                    <p className="text-[11px] text-earth-500">{cred.institution} ({cred.year})</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-sage-800 hover:text-sage-900 underline underline-offset-4"
              >
                <span>{t.meetAlia.readBio}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AUTHENTIC TESTIMONIALS */}
      <section className="bg-sand-100/60 py-20 border-y border-sand-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
              {t.testimonialsSection.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
              {t.testimonialsSection.title}
            </h2>
            <p className="text-xs text-earth-500 font-light">
              {t.testimonialsSection.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-sand-50 rounded-2xl border border-sand-300/80 p-8 shadow-sm flex flex-col justify-between text-left rtl:text-right"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider font-medium px-2.5 py-0.5 rounded-full bg-sand-200 text-earth-700">
                      {test.category === 'personal_coaching' ? (lang === 'ar' ? 'جلسة فردية' : 'Personal Coaching') : (lang === 'ar' ? 'خريجة الأكاديمية' : 'Academy Graduate')}
                    </span>
                    <div className="flex text-amber-600 text-xs">
                      {'★'.repeat(test.rating)}
                    </div>
                  </div>
                  <p className="font-serif italic text-base text-earth-800 leading-relaxed mb-6">
                    &quot;{test.quote}&quot;
                  </p>
                </div>
                <div className="border-t border-sand-200 pt-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-medium text-earth-900 block">{test.name}</span>
                    <span className="text-earth-500 font-light">{test.role}</span>
                  </div>
                  {test.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-sage-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {lang === 'ar' ? 'موثق' : 'Verified'}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM DUAL-JOURNEY INVITATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-white border border-sand-300 flex items-center justify-center mx-auto shadow-sm p-1.5">
            <Image src="/images/logo.png" alt="Roots of Balance Logo" width={56} height={56} className="object-contain" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
            {t.ctaBottom.title}
          </h2>
          <p className="text-base text-earth-600 font-light">
            {t.ctaBottom.desc}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm inline-flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.ctaBottom.bookBtn}</span>
          </Link>
          <Link
            href="/academy/apply"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-earth-800 hover:bg-sand-200 text-earth-900 font-medium text-xs uppercase tracking-wider transition inline-flex items-center justify-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t.ctaBottom.applyBtn}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
