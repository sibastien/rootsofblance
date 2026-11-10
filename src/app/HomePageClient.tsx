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
  Users,
  Zap,
  Activity,
  Cpu,
  Radio,
  ArrowUpRight
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
    <div className="space-y-24 md:space-y-36 pb-24 text-[#E6F4F1]">
      {/* 1. HERO SECTION: Futuristic Bio-Harmonic Matrix */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-20">
        {/* Holographic Glowing Ambient Background Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyber-neon/15 via-cyber-cyan/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left High-Tech Content */}
            <div className="lg:col-span-7 space-y-7 text-center ltr:lg:text-left rtl:lg:text-right">
              {/* Sci-Fi Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyber-dark/80 border border-cyber-neon/30 text-cyber-neon text-xs font-mono tracking-widest uppercase shadow-neon-emerald">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-neon opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-neon" />
                </span>
                <span className="font-semibold">{t.hero.tagline}</span>
              </div>

              {/* Holographic Gradient Heading */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-[1.12] tracking-tight">
                <span className="block">{t.hero.titleLine1}</span>
                <span className="block mt-1 bg-gradient-to-r from-cyber-neon via-cyber-cyan to-white bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(0,255,178,0.35)]">
                  {t.hero.titleLine2}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-sand-300/90 leading-relaxed max-w-2xl font-light">
                {t.hero.description}
              </p>

              {/* Dual-Journey Futuristic HUD Cards */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto ltr:lg:mx-0 rtl:lg:mx-0">
                {/* Journey A: Individuals */}
                <div className="cyber-card rounded-2xl p-6 text-left rtl:text-right flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-neon/5 rounded-bl-full pointer-events-none group-hover:bg-cyber-neon/15 transition-all" />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-cyber-neon font-semibold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5" />
                        {lang === 'ar' ? 'مسار الأفراد' : 'PROTOCOL: INDIVIDUAL'}
                      </span>
                    </div>
                    <h2 className="font-display text-lg font-bold text-white mb-2 group-hover:text-cyber-neon transition-colors">
                      {t.hero.journeyATitle}
                    </h2>
                    <p className="text-xs text-sand-300/80 mb-5 leading-relaxed font-light">
                      {t.hero.journeyASub}
                    </p>
                  </div>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-cyber-dark bg-cyber-neon hover:bg-cyber-emerald hover:shadow-neon-emerald px-4 py-2.5 rounded-xl transition-all duration-300 w-fit"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.nav.bookSession}</span>
                  </Link>
                </div>

                {/* Journey B: Practitioners */}
                <div className="cyber-card rounded-2xl p-6 text-left rtl:text-right flex flex-col justify-between group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-bl-full pointer-events-none group-hover:bg-cyber-cyan/15 transition-all" />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-cyber-cyan font-semibold flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        {lang === 'ar' ? 'مسار الأكاديمية' : 'PROTOCOL: ACADEMY'}
                      </span>
                    </div>
                    <h2 className="font-display text-lg font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                      {t.hero.journeyBTitle}
                    </h2>
                    <p className="text-xs text-sand-300/80 mb-5 leading-relaxed font-light">
                      {t.hero.journeyBSub}
                    </p>
                  </div>
                  <Link
                    href="/academy"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-cyber-cyan hover:text-white bg-cyber-dark/80 hover:bg-cyber-cyan/20 border border-cyber-cyan/40 hover:shadow-neon-cyan px-4 py-2.5 rounded-xl transition-all duration-300 w-fit"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span>{t.nav.becomeCoach}</span>
                  </Link>
                </div>
              </div>

              {/* Cyber Telemetry & Social Proof */}
              <div className="pt-2 flex items-center justify-center ltr:lg:justify-start rtl:lg:justify-start gap-4 text-xs font-mono text-sand-400">
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  <div className="w-7 h-7 rounded-full bg-cyber-neon/20 border border-cyber-neon flex items-center justify-center text-[10px] font-bold text-cyber-neon shadow-neon-emerald">
                    AA
                  </div>
                  <div className="w-7 h-7 rounded-full bg-cyber-cyan/20 border border-cyber-cyan flex items-center justify-center text-[10px] font-bold text-cyber-cyan shadow-neon-cyan">
                    RO
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-[10px] font-bold text-emerald-300">
                    LK
                  </div>
                </div>
                <span className="text-sand-300/90">{t.hero.socialProof}</span>
              </div>
            </div>

            {/* Right Visual Image with Cybernetic Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none group">
                {/* Tech Bracket Corners */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyber-neon z-20 pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyber-cyan z-20 pointer-events-none" />

                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-cyber-neon/30 relative bg-cyber-dark">
                  <Image
                    src="/images/alia-alblooki.jpg"
                    alt="Alia Alblooki - Holistic Wellness Mentor"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/20 to-transparent" />
                  
                  {/* Floating Holographic Quote HUD */}
                  <div className="absolute bottom-6 left-6 right-6 cyber-card p-4 rounded-xl border border-cyber-neon/30 backdrop-blur-xl text-left rtl:text-right shadow-neon-emerald">
                    <p className="font-serif italic text-sm text-sand-100 font-light">
                      &quot;{t.hero.quoteText}&quot;
                    </p>
                    <span className="block text-[11px] uppercase font-mono tracking-wider text-cyber-neon font-semibold mt-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-neon animate-pulse" />
                      {t.hero.quoteAuthor}
                    </span>
                  </div>
                </div>

                {/* Animated Pulsing Auras */}
                <div className="absolute -top-8 -right-8 w-44 h-44 bg-cyber-neon/15 rounded-full blur-3xl -z-10 animate-pulse-glow" />
                <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-cyber-cyan/15 rounded-full blur-3xl -z-10 animate-float" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & PILLARS: Bio-Harmonic Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-cyber-neon font-semibold px-3 py-1 rounded-full bg-cyber-neon/10 border border-cyber-neon/20 inline-block">
            {t.philosophy.subtitle}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white font-bold tracking-tight">
            {t.philosophy.title}
          </h2>
          <p className="text-base text-sand-300 font-light leading-relaxed">
            {t.philosophy.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: t.philosophy.p1Title, desc: t.philosophy.p1Desc, icon: HeartPulse, color: 'text-cyber-neon', border: 'border-cyber-neon/20' },
            { title: t.philosophy.p2Title, desc: t.philosophy.p2Desc, icon: Sprout, color: 'text-emerald-400', border: 'border-emerald-500/20' },
            { title: t.philosophy.p3Title, desc: t.philosophy.p3Desc, icon: Compass, color: 'text-cyber-cyan', border: 'border-cyber-cyan/20' },
            { title: t.philosophy.p4Title, desc: t.philosophy.p4Desc, icon: ShieldCheck, color: 'text-teal-300', border: 'border-teal-400/20' },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="cyber-card rounded-2xl p-7 text-left rtl:text-right relative overflow-hidden group hover:border-cyber-neon/50"
              >
                <div className="w-12 h-12 rounded-xl bg-cyber-dark/80 border border-cyber-border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-display text-lg text-white font-bold mb-2.5 group-hover:text-cyber-neon transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-sand-300/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PERSONAL COACHING SERVICES (Journey A) */}
      <section className="relative border-y border-cyber-neon/15 py-24 bg-gradient-to-b from-transparent via-[#06151a]/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="text-left rtl:text-right">
              <span className="text-xs uppercase font-mono tracking-widest text-cyber-neon font-semibold block mb-2">
                {t.servicesSection.subtitle}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-bold">
                {t.servicesSection.title}
              </h2>
              <p className="text-sm text-sand-300 mt-2 max-w-xl font-light">
                {t.servicesSection.intro}
              </p>
            </div>
            <Link
              href="/coaching"
              className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-wider font-semibold text-cyber-neon hover:text-white transition"
            >
              <span>{t.servicesSection.viewAll}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="cyber-card rounded-2xl p-7 flex flex-col justify-between group hover:border-cyber-neon/60 text-left rtl:text-right"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-sand-400 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-cyber-neon/10 border border-cyber-neon/20 text-cyber-neon font-semibold">
                      {service.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-sand-400">
                      <Clock className="w-3.5 h-3.5 text-cyber-cyan" />
                      {service.durationMinutes} {lang === 'ar' ? 'دقيقة' : 'mins'}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-white font-bold mb-3 group-hover:text-cyber-neon transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-sand-300/80 leading-relaxed mb-6 font-light">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyber-neon/80 font-semibold block">
                      {lang === 'ar' ? 'أهداف البروتوكول:' : 'Protocol Milestones:'}
                    </span>
                    {service.objectives.slice(0, 3).map((obj) => (
                      <div key={obj} className="flex items-start gap-2.5 text-xs text-sand-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-neon shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-cyber-border flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-sand-400 block">{t.servicesSection.investment}</span>
                    <span className="font-display text-2xl font-bold text-cyber-neon">
                      ${service.price}
                    </span>
                  </div>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyber-neon text-cyber-dark text-xs uppercase font-mono font-bold tracking-wider hover:bg-cyber-emerald hover:shadow-neon-emerald transition-all"
                  >
                    <span>{t.servicesSection.bookNow}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRAINING ACADEMY PREVIEW (Journey B) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden border border-cyber-cyan/30 bg-gradient-to-br from-[#06181e] via-[#040e12] to-cyber-dark shadow-neon-cyan">
          {/* Logo Watermark Hologram */}
          <div className="absolute top-0 ltr:right-0 rtl:left-0 -mr-10 -mt-10 opacity-10 pointer-events-none select-none">
            <Image src="/images/logo.png" alt="" width={320} height={320} className="object-contain filter invert drop-shadow-[0_0_20px_#00E5FF]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-dark border border-cyber-cyan/40 text-xs font-mono uppercase tracking-widest text-cyber-cyan font-semibold">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>{t.academySection.badge}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                {t.academySection.title}
              </h2>

              <p className="text-sm sm:text-base text-sand-300 leading-relaxed font-light max-w-xl">
                {t.academySection.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyber-dark border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">{t.academySection.feature1Title}</span>
                    <span className="text-xs text-sand-400 font-mono">{t.academySection.feature1Sub}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyber-dark border border-cyber-neon/30 flex items-center justify-center text-cyber-neon shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">{t.academySection.feature2Title}</span>
                    <span className="text-xs text-sand-400 font-mono">{t.academySection.feature2Sub}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/academy"
                  className="px-6 py-3 rounded-xl bg-cyber-cyan text-cyber-dark font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:shadow-neon-cyan transition-all inline-flex items-center gap-2"
                >
                  <span>{t.academySection.ctaExplore}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
                <Link
                  href="/academy/apply"
                  className="px-6 py-3 rounded-xl border border-cyber-neon/40 text-cyber-neon hover:text-white hover:bg-cyber-neon/10 font-mono font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  {t.academySection.ctaApply}
                </Link>
              </div>
            </div>

            {/* Curriculum Snapshot Cards */}
            <div className="lg:col-span-5 space-y-3.5 text-left rtl:text-right">
              <span className="text-xs uppercase font-mono tracking-widest text-cyber-cyan font-semibold block mb-2">
                {t.academySection.curriculumSnapshot}
              </span>
              {modules.slice(0, 4).map((mod) => (
                <div
                  key={mod.id}
                  className="bg-cyber-dark/80 border border-cyber-cyan/20 rounded-xl p-4 hover:border-cyber-cyan/50 hover:bg-cyber-dark transition-all"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-cyber-cyan mb-1.5">
                    <span className="font-semibold uppercase tracking-wider">
                      {lang === 'ar' ? `المستوى ${mod.moduleNumber}` : `STAGE 0${mod.moduleNumber}`}
                    </span>
                    <span className="text-sand-400">{mod.durationWeeks} {lang === 'ar' ? 'أسابيع' : 'weeks'}</span>
                  </div>
                  <h4 className="text-sm font-display text-white font-semibold mb-1">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-sand-300/80 font-light line-clamp-1">
                    {mod.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET ALIA ALBLOOKI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-cyber-neon/30 relative bg-cyber-dark">
              <Image
                src="/images/alia-alblooki.jpg"
                alt="Alia Alblooki - Founder"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 ltr:-right-4 rtl:-left-4 cyber-card rounded-xl p-3 shadow-neon-emerald flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyber-dark border border-cyber-neon/40 flex items-center justify-center p-1">
                <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-[11px] uppercase font-mono tracking-wider text-cyber-neon font-semibold">Roots of Balance</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
            <span className="text-xs uppercase font-mono tracking-widest text-cyber-neon font-semibold px-3 py-1 rounded-full bg-cyber-neon/10 border border-cyber-neon/20 inline-block">
              {t.meetAlia.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold">
              {t.meetAlia.name}
            </h2>
            <p className="text-xs uppercase font-mono tracking-widest text-cyber-cyan font-semibold">
              {t.meetAlia.title}
            </p>

            <div className="space-y-4 text-sm text-sand-300 leading-relaxed font-light">
              <p>{t.meetAlia.p1}</p>
              <p>{t.meetAlia.p2}</p>
            </div>

            <div className="pt-4 border-t border-cyber-border grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.credentials.map((cred) => (
                <div key={cred.title} className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyber-neon shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-white">{cred.title}</h5>
                    <p className="text-[11px] text-sand-400 font-mono">{cred.institution} ({cred.year})</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-wider font-semibold text-cyber-neon hover:text-white transition"
              >
                <span>{t.meetAlia.readBio}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AUTHENTIC TESTIMONIALS */}
      <section className="relative py-24 border-t border-cyber-neon/15 bg-gradient-to-b from-transparent via-[#06151a]/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-cyber-neon font-semibold px-3 py-1 rounded-full bg-cyber-neon/10 border border-cyber-neon/20 inline-block">
              {t.testimonialsSection.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold">
              {t.testimonialsSection.title}
            </h2>
            <p className="text-xs font-mono text-sand-400">
              {t.testimonialsSection.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="cyber-card rounded-2xl p-8 flex flex-col justify-between text-left rtl:text-right"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-4 text-cyber-neon">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Sparkles key={i} className="w-4 h-4 fill-cyber-neon" />
                    ))}
                  </div>
                  <p className="text-sm text-sand-200 leading-relaxed font-light mb-6 italic">
                    &quot;{test.quote}&quot;
                  </p>
                </div>
                <div className="pt-4 border-t border-cyber-border flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white block">{test.name}</span>
                    <span className="text-sand-400 font-mono text-[11px]">{test.role}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 font-mono text-[10px]">
                    {test.category === 'personal_coaching'
                      ? (lang === 'ar' ? 'جلسة تدريب فردي' : 'Bio-Coaching Protocol')
                      : (lang === 'ar' ? 'الأكاديمية التدريبية' : 'Academy Fellow')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. QUANTUM ENGAGEMENT CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cyber-card rounded-3xl p-10 sm:p-14 text-center border-cyber-neon/40 shadow-neon-emerald relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs uppercase font-mono tracking-widest text-cyber-neon font-bold">
              {lang === 'ar' ? 'ابدأ رحلة التوازن الحيوية' : 'INITIALIZE BIO-HARMONIC TRANSFORMATION'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              {lang === 'ar' ? 'جاهز لإعادة تشكيل طاقتك وتوازنك العصبي؟' : 'Ready to Harmonize Your Mind, Body, and Purpose?'}
            </h2>
            <p className="text-sm text-sand-300 font-light leading-relaxed">
              {lang === 'ar' 
                ? 'احجز استشارتك الفردية أو انضم إلى نخبة ممارسي الرفاهية الشاملة المعتمدين.'
                : 'Schedule an individual breakthrough session or enroll in the world-class Holistic Wellness Coach Certification.'}
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyber-neon to-cyber-emerald text-cyber-dark font-mono font-bold text-xs uppercase tracking-wider hover:shadow-neon-emerald hover:scale-105 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookSession}</span>
              </Link>
              <Link
                href="/academy"
                className="px-8 py-3.5 rounded-xl bg-cyber-dark border border-cyber-cyan/40 text-cyber-cyan hover:text-white hover:border-cyber-cyan font-mono font-semibold text-xs uppercase tracking-wider hover:shadow-neon-cyan transition-all flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{t.nav.becomeCoach}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
