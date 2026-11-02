import Link from 'next/link';
import Image from 'next/image';
import { db } from '@/lib/db';
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

export default function HomePage() {
  const profile = db.getProfile();
  const services = db.getServices().slice(0, 3);
  const modules = db.getAcademyModules().slice(0, 4);
  const testimonials = db.getTestimonials();

  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      {/* 1. HERO SECTION: Editorial, Calming, Dual Journeys */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 bg-gradient-to-b from-sand-100/70 via-sand-50 to-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100/80 border border-sage-200 text-sage-900 text-xs tracking-wider uppercase font-medium">
                <span className="text-base">🪷</span>
                <span>Roots of Balance • جذور التوازن</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-earth-950 font-normal leading-[1.15] tracking-tight">
                Transformation begins <br />
                <span className="italic font-serif text-sage-800">at the roots.</span>
              </h1>

              <p className="text-base sm:text-lg text-earth-700 leading-relaxed max-w-2xl font-light">
                Bridging somatic bodywork, nervous system regulation, and conscious lifestyle design. Personalized 1-on-1 coaching for individuals seeking deep healing, and rigorous professional training for future holistic wellness coaches.
              </p>

              {/* Dual-Journey CTA Cards */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
                {/* Journey A */}
                <div className="bg-sand-50 border border-sand-300/80 rounded-2xl p-5 hover:border-sage-400 hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between group">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block mb-1">
                      For Individuals
                    </span>
                    <h2 className="font-serif text-lg font-medium text-earth-900 mb-1.5">
                      Personal Coaching
                    </h2>
                    <p className="text-xs text-earth-600 mb-4 leading-relaxed">
                      Somatic stress release, healthy habit architecture, and emotional balance.
                    </p>
                  </div>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white bg-sage-700 hover:bg-sage-800 px-4 py-2.5 rounded-full transition w-fit"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book a Session</span>
                  </Link>
                </div>

                {/* Journey B */}
                <div className="bg-sand-50 border border-sand-300/80 rounded-2xl p-5 hover:border-terracotta-400 hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between group">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-terracotta-700 font-semibold block mb-1">
                      For Aspiring Practitioners
                    </span>
                    <h2 className="font-serif text-lg font-medium text-earth-900 mb-1.5">
                      Coach Academy
                    </h2>
                    <p className="text-xs text-earth-600 mb-4 leading-relaxed">
                      9-module curriculum, ethical boundaries, and somatic coaching mastery.
                    </p>
                  </div>
                  <Link
                    href="/academy"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-earth-900 bg-sand-200 hover:bg-sand-300 px-4 py-2.5 rounded-full transition w-fit border border-sand-400/50"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-terracotta-700" />
                    <span>Explore Academy</span>
                  </Link>
                </div>
              </div>

              {/* Social Proof Indicator */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-earth-600">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-sage-300 border-2 border-sand-50 flex items-center justify-center text-[10px] font-bold text-sage-900">
                    AR
                  </div>
                  <div className="w-7 h-7 rounded-full bg-terracotta-300 border-2 border-sand-50 flex items-center justify-center text-[10px] font-bold text-terracotta-900">
                    DM
                  </div>
                  <div className="w-7 h-7 rounded-full bg-sand-400 border-2 border-sand-50 flex items-center justify-center text-[10px] font-bold text-earth-900">
                    LK
                  </div>
                </div>
                <span>Over 20 years of hands-on somatic experience & hundreds of lives rebalanced.</span>
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
                  <div className="absolute bottom-6 left-6 right-6 bg-sand-50/95 backdrop-blur-md p-4 rounded-xl border border-sand-200 shadow-lg">
                    <p className="font-serif italic text-sm text-earth-900">
                      &quot;Lasting transformation begins when we nourish our roots — uniting mental calm, physical vitality, and deep self-awareness.&quot;
                    </p>
                    <span className="block text-[11px] uppercase tracking-wider text-sage-700 font-semibold mt-1">
                      — Alia Alblooki, Founder
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
            Our Guiding Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
            What Does It Mean to Coach the Whole Human?
          </h2>
          <p className="text-base text-earth-700 font-light leading-relaxed">
            Conventional approaches often isolate problems into neat boxes—treating the mind, the body, or the calendar as separate entities. At Roots of Balance, we know that true vitality is an integrated ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profile.philosophy.map((item, idx) => {
            const icons = [HeartPulse, Compass, Sprout, ShieldCheck];
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                className="bg-sand-100/60 border border-sand-200/80 rounded-2xl p-6 hover:bg-sand-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-50 border border-sage-200/60 flex items-center justify-center text-sage-800 mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-earth-900 font-medium mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-earth-600 leading-relaxed font-light">
                  {item.description}
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
            <div>
              <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block mb-1">
                Client Journey A
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
                Personal Holistic Wellness Coaching
              </h2>
              <p className="text-sm text-earth-600 mt-2 max-w-xl font-light">
                Tailored 1-on-1 sessions designed to help you de-escalate chronic stress, reset your autonomic nervous system, and reclaim bodily peace.
              </p>
            </div>
            <Link
              href="/coaching"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-800 hover:text-sage-900 underline underline-offset-4"
            >
              <span>View all coaching packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-sand-50 rounded-2xl border border-sand-300/80 p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-earth-500 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-sand-200 text-earth-800 font-medium">
                      {service.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-sage-700" />
                      {service.durationMinutes} mins
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
                      Core Objectives:
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
                    <span className="text-xs text-earth-500 block">Investment</span>
                    <span className="font-serif text-2xl font-normal text-earth-950">
                      ${service.price}
                    </span>
                  </div>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sage-700 hover:bg-sage-800 text-white text-xs uppercase tracking-wider font-medium transition"
                  >
                    <span>Book Session</span>
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
          {/* Subtle floral background emblem */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 text-sage-800/20 text-[260px] pointer-events-none select-none">
            🪷
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-800 border border-sage-700 text-xs uppercase tracking-widest text-terracotta-300 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Academy Pillar</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
                Become a Certified Holistic Wellness Coach
              </h2>

              <p className="text-sm sm:text-base text-sand-300 leading-relaxed font-light max-w-xl">
                The world is experiencing an epidemic of burnout and disconnect. Join the Roots of Balance Training Academy to master evidence-informed coaching psychology, somatic listening, and heart-centered ethics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sage-800 flex items-center justify-center text-terracotta-300 shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white block">9 Dynamic Modules</span>
                    <span className="text-xs text-sand-400">Comprehensive curriculum</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sage-800 flex items-center justify-center text-sage-300 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white block">Mentored Practicum</span>
                    <span className="text-xs text-sand-400">Supervised client case studies</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/academy"
                  className="px-6 py-3 rounded-full bg-white text-earth-950 font-medium text-xs uppercase tracking-wider hover:bg-sand-200 transition shadow-sm inline-flex items-center gap-2"
                >
                  <span>Explore 9 Modules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/academy/apply"
                  className="px-6 py-3 rounded-full border border-sand-400/40 text-sand-200 hover:text-white hover:bg-sage-800/80 font-medium text-xs uppercase tracking-wider transition"
                >
                  Apply for Next Cohort
                </Link>
              </div>
            </div>

            {/* Curriculum Preview Cards */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs uppercase tracking-widest text-sand-400 font-semibold block mb-2">
                Curriculum Snapshot:
              </span>
              {modules.map((mod) => (
                <div
                  key={mod.id}
                  className="bg-sage-800/60 border border-sage-700/60 rounded-xl p-4 hover:bg-sage-800 transition"
                >
                  <div className="flex items-center justify-between text-xs text-terracotta-300 mb-1">
                    <span className="font-semibold uppercase tracking-wider">Module {mod.moduleNumber}</span>
                    <span className="text-sand-400">{mod.durationWeeks} weeks</span>
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
            <div className="absolute -bottom-4 -right-4 bg-sand-50 border border-sand-300 rounded-xl p-4 shadow-lg text-center">
              <span className="font-serif text-2xl font-normal text-sage-900 block">🪷</span>
              <span className="text-[11px] uppercase tracking-wider text-earth-700 font-medium">Roots of Balance</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
              Meet Your Guide & Academy Founder
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
              Alia Alblooki
            </h2>
            <p className="text-xs uppercase tracking-widest text-sage-800 font-medium">
              Holistic Wellness Coach • Psychological Balance & Self-Development Specialist
            </p>

            <div className="space-y-4 text-sm text-earth-700 leading-relaxed font-light">
              <p>
                Welcome to Roots of Balance (مساحة ناعمة للعافية الشاملة). My journey was born out of a profound passion to help individuals cultivate genuine mind-body equilibrium, sustainable nourishment, and emotional resilience without falling into performative wellness traps.
              </p>
              <p>
                Whether facilitating one-on-one personal coaching or mentoring passionate trainees in the Roots of Balance Academy, my philosophy is grounded, deeply compassionate, and committed to empowering lasting personal transformation.
              </p>
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
                <span>Read Full Biography & Verified Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
              Authentic Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
              Words from Clients & Academy Graduates
            </h2>
            <p className="text-xs text-earth-500 font-light">
              Real reflections from individuals and certified practitioners who have walked this path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-sand-50 rounded-2xl border border-sand-300/80 p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider font-medium px-2.5 py-0.5 rounded-full bg-sand-200 text-earth-700">
                      {test.category === 'personal_coaching' ? 'Personal Coaching' : 'Academy Graduate'}
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
                      Verified
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
          <span className="text-2xl">🪷</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-base text-earth-600 font-light">
            Whether you are stepping into a private coaching container or answering the call to become a professional coach, we welcome you to the Roots of Balance community.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm inline-flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Personal Coaching</span>
          </Link>
          <Link
            href="/academy/apply"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-earth-800 hover:bg-sand-200 text-earth-900 font-medium text-xs uppercase tracking-wider transition inline-flex items-center justify-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Apply to Coach Academy</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

