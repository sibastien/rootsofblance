'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heart,
  Brain,
  Sparkles,
  ArrowRight,
  ArrowDown,
  Compass,
  Sprout,
  BookOpen,
  Feather,
  Sun,
  Shield,
  Eye,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Layers,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CoachProfile, CoachingService, AcademyModule, BlogPost, Testimonial } from '@/lib/db';

interface Props {
  profile: CoachProfile;
  services: CoachingService[];
  modules: AcademyModule[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
}

export default function HomePageClient({ profile, services, modules, blogPosts, testimonials }: Props) {
  const { t, lang, dir } = useLanguage();

  // Interactive state for Section 3: Dimensions
  const [activeDimension, setActiveDimension] = useState<string>('emotional');

  // Interactive state for Section 4: Self-Discovery reflection modal / card
  const [activePillar, setActivePillar] = useState<string>('awareness');

  const selectedDimension =
    t.dimensions.items.find((d) => d.id === activeDimension) || t.dimensions.items[0];

  const selectedPillar =
    t.selfDiscovery.pillars.find((p) => p.id === activePillar) || t.selfDiscovery.pillars[0];

  return (
    <div className="space-y-24 md:space-y-36 pb-24 text-earth-900">
      
      {/* =========================================================================
          SECTION 1 — HERO: "رحلتك نحو التوازن تبدأ من الداخل"
          ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F6F2EC] to-[#FAF8F5]">
        {/* Subtle organic background aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sage-100/60 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        {/* Delicate olive tree roots logo watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.035] pointer-events-none select-none">
          <Image src="/images/logo.png" alt="" width={384} height={384} className="object-contain" priority />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          {/* Subtle Sanctuary Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-200/80 border border-sand-300 text-earth-700 text-xs tracking-wider uppercase font-medium shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-600 inline-block" />
            <span>{t.hero.tagline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-earth-950 font-normal leading-[1.2] tracking-tight">
            {t.hero.headline}
          </h1>

          {/* Supporting Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-earth-700 leading-relaxed font-light max-w-2xl mx-auto">
            {t.hero.subtext}
          </p>

          {/* Gentle, non-commercial CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#what-is-holistic"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-sage-800 hover:bg-sage-900 text-sand-50 text-sm font-medium tracking-wide transition-all duration-300 shadow-editorial hover:shadow-elevated"
            >
              <span>{t.hero.cta}</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>

          {/* Scroll Hint */}
          <div className="pt-8">
            <span className="text-[11px] uppercase tracking-widest text-earth-500 font-light block">
              {t.hero.scrollHint}
            </span>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2 — WHAT IS HOLISTIC HEALING? (مفهوم الشفاء الشمولي)
          ========================================================================= */}
      <section id="what-is-holistic" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling & Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border-4 border-white relative bg-sand-100">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
                  alt="Holistic Healing Sanctuary"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950/60 via-transparent to-transparent" />
                
                {/* Floating Quote Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-md p-5 rounded-2xl border border-sand-300 shadow-soft text-left rtl:text-right">
                  <p className="font-serif italic text-sm text-earth-900 leading-relaxed">
                    {t.whatIsHolistic.quote}
                  </p>
                  <span className="block text-xs uppercase tracking-wider text-sage-800 font-semibold mt-2">
                    — {t.whatIsHolistic.quoteAuthor}
                  </span>
                </div>
              </div>

              {/* Decorative botanical aura */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-200/50 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Right Column: Editorial Essay */}
          <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-100 border border-sage-200 text-xs uppercase tracking-widest text-sage-800 font-semibold">
              <Sprout className="w-3.5 h-3.5 text-sage-700" />
              <span>{t.whatIsHolistic.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-earth-950 font-normal leading-[1.25]">
              {t.whatIsHolistic.title}
            </h2>

            <p className="text-lg sm:text-xl text-sage-900 font-light leading-relaxed">
              {t.whatIsHolistic.lead}
            </p>

            <div className="space-y-4 text-base text-earth-700 font-light leading-relaxed">
              <p>{t.whatIsHolistic.p1}</p>
              <p>{t.whatIsHolistic.p2}</p>
            </div>

            {/* Interconnected Dimension Callout */}
            <div className="p-5 rounded-2xl bg-sand-100/70 border border-sand-300/80 space-y-2">
              <h3 className="font-serif text-base text-earth-900 font-medium flex items-center gap-2">
                <Compass className="w-4 h-4 text-sage-700" />
                <span>{t.whatIsHolistic.interconnectedTitle}</span>
              </h3>
              <p className="text-xs text-earth-600 leading-relaxed font-light">
                {t.whatIsHolistic.interconnectedDesc}
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#dimensions"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-sage-800 hover:text-sage-900 underline underline-offset-8"
              >
                <span>{t.whatIsHolistic.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3 — THE DIMENSIONS OF WELLBEING (أبعاد العافية)
          ========================================================================= */}
      <section id="dimensions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs uppercase tracking-widest text-sage-800 font-semibold px-3.5 py-1 rounded-full bg-sage-100 border border-sage-200 inline-block">
            {t.dimensions.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-earth-950 font-normal">
            {t.dimensions.title}
          </h2>
          <p className="text-base text-earth-600 font-light leading-relaxed">
            {t.dimensions.lead}
          </p>
        </div>

        {/* Dimension Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {t.dimensions.items.map((dimension) => {
            const isSelected = activeDimension === dimension.id;
            return (
              <button
                key={dimension.id}
                onClick={() => setActiveDimension(dimension.id)}
                className={`p-4 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-2 ${
                  isSelected
                    ? 'bg-sage-800 text-sand-50 border-sage-800 shadow-editorial'
                    : 'bg-white hover:bg-sand-100 text-earth-800 border-sand-300'
                }`}
              >
                <span className="font-serif text-base font-medium">{dimension.title}</span>
                <span className={`text-[11px] font-sans ${isSelected ? 'text-sage-200' : 'text-earth-500'}`}>
                  {dimension.tagline}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Dimension Deep-Dive Display Card */}
        <div className="editorial-card rounded-3xl p-8 sm:p-12 lg:p-14 border border-sand-300 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
              <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
                {selectedDimension.tagline}
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-earth-950 font-normal">
                {selectedDimension.title}
              </h3>

              <p className="text-base text-earth-800 leading-relaxed font-light">
                {selectedDimension.desc}
              </p>

              <p className="text-sm text-earth-600 leading-relaxed font-light">
                {selectedDimension.deepDive}
              </p>

              {/* Key Facets */}
              <div className="space-y-2.5 pt-2">
                {selectedDimension.aspects.map((aspect, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-earth-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                    <span>{aspect}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contemplative Self-Inquiry Box */}
            <div className="lg:col-span-5 bg-sand-100 rounded-2xl p-7 border border-sand-300/80 space-y-4 text-left rtl:text-right">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-sage-800 font-semibold">
                <HelpCircle className="w-4 h-4 text-sage-700" />
                <span>{t.dimensions.reflectionLabel}</span>
              </div>

              <blockquote className="font-serif italic text-base text-earth-900 leading-relaxed">
                &ldquo;{selectedDimension.inquiry}&rdquo;
              </blockquote>

              <p className="text-xs text-earth-500 font-light">
                {lang === 'ar'
                  ? 'خذي نفساً عميقاً، وأعطي نفسكِ دقيقة واحدة من الصمت لملاحظة ما ينبثق في داخلكِ.'
                  : 'Take a soft breath and allow yourself a quiet minute to simply witness what surfaces.'}
              </p>

              <div className="pt-2">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-sage-800 hover:text-sage-900 underline underline-offset-4"
                >
                  <span>{t.dimensions.exploreFurther}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4 — THE JOURNEY OF SELF-DISCOVERY (رحلة اكتشاف الذات)
          ========================================================================= */}
      <section className="bg-sand-100/70 border-y border-sand-300/60 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage-800 font-semibold px-3.5 py-1 rounded-full bg-sand-200 border border-sand-300 inline-block">
              {t.selfDiscovery.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-earth-950 font-normal">
              {t.selfDiscovery.title}
            </h2>
            <p className="text-base text-earth-600 font-light leading-relaxed">
              {t.selfDiscovery.lead}
            </p>
          </div>

          {/* 6 Pillars of Self-Discovery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.selfDiscovery.pillars.map((pillar) => {
              const isSelected = activePillar === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`editorial-card rounded-2xl p-7 flex flex-col justify-between cursor-pointer text-left rtl:text-right transition-all duration-300 ${
                    isSelected
                      ? 'border-sage-500 bg-sand-50 shadow-editorial'
                      : 'border-sand-300 bg-white'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-sage-100 border border-sage-200 flex items-center justify-center text-sage-800">
                      <Feather className="w-4 h-4" />
                    </div>

                    <h3 className="font-serif text-lg font-medium text-earth-900">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-earth-600 leading-relaxed font-light">
                      {pillar.concept}
                    </p>

                    <div className="pt-2 border-t border-sand-200">
                      <span className="text-[11px] uppercase tracking-wider text-sage-700 font-semibold block mb-1">
                        {lang === 'ar' ? 'سؤال للتفكير الهادئ:' : 'Contemplative Inquiry:'}
                      </span>
                      <p className="text-xs font-serif italic text-earth-800 leading-relaxed">
                        &ldquo;{pillar.reflectionQuestion}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 text-[11px] text-sage-800 font-light">
                    {pillar.guidance}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sage-800 hover:bg-sage-900 text-sand-50 text-xs uppercase tracking-wider font-medium transition shadow-sm"
            >
              <span>{t.selfDiscovery.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5 — THE PHILOSOPHY OF ROOTS OF BALANCE (فلسفة جذور التوازن)
          ========================================================================= */}
      <section id="philosophy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#1C2C23] text-sand-100 rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-elevated">
          
          {/* Subtle Olive Tree Watermark */}
          <div className="absolute top-0 ltr:right-0 rtl:left-0 -mr-12 -mt-12 opacity-10 pointer-events-none select-none invert">
            <Image src="/images/logo.png" alt="" width={320} height={320} className="object-contain" />
          </div>

          <div className="max-w-3xl space-y-6 text-left rtl:text-right relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-900 border border-sage-700 text-xs uppercase tracking-widest text-sage-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.philosophy.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
              {t.philosophy.title}
            </h2>

            <p className="text-base sm:text-lg text-sand-200 font-light leading-relaxed">
              {t.philosophy.lead}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <h3 className="font-serif text-lg text-sage-200 font-medium">
                  {t.philosophy.nameOriginTitle}
                </h3>
                <p className="text-xs text-sand-300 leading-relaxed font-light">
                  {t.philosophy.nameOriginDesc}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-lg text-sage-200 font-medium">
                  {t.philosophy.journeyNotDestinationTitle}
                </h3>
                <p className="text-xs text-sand-300 leading-relaxed font-light">
                  {t.philosophy.journeyNotDestinationDesc}
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="pt-6 border-t border-sage-800">
              <h3 className="text-xs uppercase tracking-widest text-sage-300 font-semibold mb-4">
                {t.philosophy.valuesTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.philosophy.values.map((v, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mt-2 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-white block">{v.title}</span>
                      <span className="text-xs text-sand-400 font-light">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand-100 hover:bg-white text-earth-950 font-medium text-xs uppercase tracking-wider transition shadow-sm"
              >
                <span>{t.philosophy.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6 — MEET SARAH (تعرّفي على سارة ت. كار)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait of Sarah T. Carr */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated border-4 border-sand-200 relative bg-sand-100">
              <Image
                src="/images/alia-alblooki.jpg"
                alt="Sarah T. Carr - Holistic Healing Guide"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 ltr:-right-4 rtl:-left-4 bg-[#FAF8F5] border border-sand-300 rounded-2xl p-4 shadow-editorial text-center flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1 border border-sand-200 shadow-sm">
                <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="text-left rtl:text-right">
                <span className="text-xs uppercase tracking-wider text-earth-900 font-semibold block">Roots of Balance</span>
                <span className="text-[10px] text-sage-700 font-light block">Sarah T. Carr • سارة ت. كار</span>
              </div>
            </div>
          </div>

          {/* Authentic Personal Story */}
          <div className="lg:col-span-7 space-y-6 text-left rtl:text-right">
            <span className="text-xs uppercase tracking-widest text-sage-800 font-semibold px-3 py-1 rounded-full bg-sage-100 border border-sage-200 inline-block">
              {t.meetSarah.badge}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-earth-950 font-normal">
              {t.meetSarah.name}
            </h2>

            <p className="text-xs uppercase tracking-widest text-sage-800 font-medium">
              {t.meetSarah.title}
            </p>

            <p className="text-base sm:text-lg text-earth-900 font-normal italic font-serif">
              {t.meetSarah.greeting}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-earth-700 leading-relaxed font-light">
              <p>{t.meetSarah.p1}</p>
              <p>{t.meetSarah.p2}</p>
            </div>

            {/* Personal Quote */}
            <div className="p-5 rounded-2xl bg-sand-100/80 border border-sand-300/80">
              <p className="font-serif italic text-sm text-earth-900 leading-relaxed">
                {t.meetSarah.quote}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-sage-800 hover:text-sage-900 underline underline-offset-8"
              >
                <span>{t.meetSarah.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7 — EXPLORE AND LEARN (استكشفي وتعلّمي)
          ========================================================================= */}
      <section id="explore" className="bg-sand-100/60 py-24 border-y border-sand-300/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left rtl:text-right max-w-2xl space-y-2">
              <span className="text-xs uppercase tracking-widest text-sage-800 font-semibold px-3 py-1 rounded-full bg-sand-200 border border-sand-300 inline-block">
                {t.exploreLearn.badge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-earth-950 font-normal">
                {t.exploreLearn.title}
              </h2>
              <p className="text-sm text-earth-600 font-light leading-relaxed">
                {t.exploreLearn.lead}
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-sage-800 hover:text-sage-900 underline underline-offset-4"
            >
              <span>{t.exploreLearn.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

          {/* 4 Educational Gateways */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t.exploreLearn.card1Title,
                desc: t.exploreLearn.card1Desc,
                link: t.exploreLearn.card1Link,
                icon: BookOpen,
              },
              {
                title: t.exploreLearn.card2Title,
                desc: t.exploreLearn.card2Desc,
                link: t.exploreLearn.card2Link,
                icon: Feather,
              },
              {
                title: t.exploreLearn.card3Title,
                desc: t.exploreLearn.card3Desc,
                link: t.exploreLearn.card3Link,
                icon: Compass,
              },
              {
                title: t.exploreLearn.card4Title,
                desc: t.exploreLearn.card4Desc,
                link: t.exploreLearn.card4Link,
                icon: GraduationCap,
              },
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <Link
                  key={idx}
                  href={card.link}
                  className="editorial-card rounded-2xl p-7 bg-white flex flex-col justify-between group hover:border-sage-400 text-left rtl:text-right"
                >
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-sage-50 border border-sage-200/80 flex items-center justify-center text-sage-800 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg text-earth-900 font-medium group-hover:text-sage-800 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-earth-600 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-sand-200 flex items-center gap-1.5 text-xs text-sage-800 font-medium">
                    <span>{lang === 'ar' ? 'استكشاف المحتوى' : 'Explore pathway'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Featured Articles Section from DB */}
          {blogPosts && blogPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-sand-300/80 space-y-6">
              <span className="text-xs uppercase tracking-widest text-earth-500 font-semibold block text-center">
                {lang === 'ar' ? 'من أحدث مقالات المجلة المعرفية' : 'Featured Journal Essays'}
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="p-6 rounded-2xl bg-white border border-sand-300 hover:border-sage-400 transition text-left rtl:text-right flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] text-sage-700 font-medium uppercase tracking-wider block mb-2">
                        {post.category}
                      </span>
                      <h4 className="font-serif text-base text-earth-900 font-medium mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-earth-600 font-light line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-sand-200 text-[11px] text-earth-500 flex items-center justify-between">
                      <span>{post.readingTimeMinutes} {lang === 'ar' ? 'دقائق قراءة' : 'min read'}</span>
                      <span className="text-sage-800 font-medium flex items-center gap-1">
                        {lang === 'ar' ? 'قراءة المقال' : 'Read essay'} &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>


      {/* =========================================================================
          SECTION 8 — FINAL INVITATION (الدعوة الختامية)
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="editorial-card rounded-3xl p-10 sm:p-16 border border-sand-300 bg-white shadow-editorial space-y-6 relative overflow-hidden">
          
          <div className="w-12 h-12 rounded-full bg-sage-100 border border-sage-200 flex items-center justify-center mx-auto text-sage-800">
            <Heart className="w-5 h-5 text-sage-700" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-earth-950 font-normal leading-tight">
            {t.finalInvitation.headline}
          </h2>

          <p className="text-base sm:text-lg text-earth-700 font-light leading-relaxed max-w-xl mx-auto">
            {t.finalInvitation.supporting}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#what-is-holistic"
              className="px-8 py-3.5 rounded-full bg-sage-800 hover:bg-sage-900 text-sand-50 text-xs uppercase tracking-wider font-medium transition shadow-sm"
            >
              <span>{t.finalInvitation.cta}</span>
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-full bg-sand-100 hover:bg-sand-200 border border-sand-300 text-earth-800 text-xs uppercase tracking-wider font-medium transition"
            >
              <span>{t.nav.about}</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
