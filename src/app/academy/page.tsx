import Link from 'next/link';
import { db } from '@/lib/db';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Users,
  ShieldCheck,
  Calendar,
  Clock,
  ArrowRight,
  HelpCircle,
  Award
} from 'lucide-react';

export const metadata = {
  title: 'Holistic Wellness Coach Training Academy | Roots of Balance',
  description: 'A comprehensive 9-module professional training academy for aspiring holistic wellness coaches. Master somatic bodywork, nervous system regulation, and ethical practice building.',
};

export default function AcademyPage() {
  const modules = db.getAcademyModules();
  const testimonials = db.getTestimonials().filter(t => t.category === 'academy');

  const faqs = [
    {
      q: 'Do I need prior healthcare or coaching experience to apply?',
      a: 'While backgrounds in wellness, psychology, yoga, or healthcare are welcomed, our foundational modules are designed to equip committed individuals from all walks of life with grounded coaching competencies.'
    },
    {
      q: 'What is the format and weekly time commitment?',
      a: 'The program is delivered over 18 weeks (2 weeks per module on average). Expect 4–6 hours weekly, including live online seminar dialogues, somatic practicum sessions, and peer coaching case studies.'
    },
    {
      q: 'Is this an accredited qualification?',
      a: 'Roots of Balance delivers an independent, rigorous professional curriculum grounded in 20+ years of clinical somatic practice and certified relationship coaching psychology. We present clear competencies and verified faculty credentials without misleading marketing claims.'
    },
    {
      q: 'How are practicum coaching sessions supervised?',
      a: 'Module 8 is dedicated to supervised practicum. You will facilitate live coaching sessions with peer and client volunteers while receiving actionable, direct feedback from Alia Alblooki.'
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* 1. Hero Header */}
      <section className="bg-sage-950 text-sand-100 pt-20 pb-24 relative overflow-hidden border-b border-sage-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-900 border border-sage-800 text-xs uppercase tracking-widest text-terracotta-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional Educational Pillar</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
              Holistic Wellness Coach <br />
              <span className="italic font-serif text-sage-300">Training Academy</span>
            </h1>

            <p className="text-base sm:text-lg text-sand-300 font-light leading-relaxed">
              Step into your calling as a certified, heart-led holistic wellness practitioner. An immersive 18-week curriculum bridging somatic nervous system attunement, transformative communication, and ethical practice building.
            </p>

            {/* Quick Cohort Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-sand-300">
              <span className="px-3.5 py-1.5 rounded-full bg-sage-900 border border-sage-800 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-terracotta-300" />
                <span>Next Cohort: Spring 2027</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-sage-900 border border-sage-800 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sage-400" />
                <span>18 Weeks • 9 Modules</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-sage-900 border border-sage-800 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-sage-400" />
                <span>Intimate Cohort (Max 16 Students)</span>
              </span>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/academy/apply"
                className="px-8 py-3.5 rounded-full bg-sage-500 hover:bg-sage-400 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm inline-flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Submit Training Application</span>
              </Link>
              <a
                href="#curriculum"
                className="px-6 py-3.5 rounded-full border border-sand-400/40 text-sand-200 hover:text-white hover:bg-sage-900 font-medium text-xs uppercase tracking-wider transition"
              >
                Browse 9 Modules
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Lotus */}
        <div className="absolute right-0 bottom-0 text-sage-900/30 text-[320px] select-none pointer-events-none translate-x-20 translate-y-20">
          🪷
        </div>
      </section>

      {/* 2. Who This Training Is Designed For & Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
              Audience & Purpose
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
              Who Is Called to This Work?
            </h2>
            <p className="text-sm sm:text-base text-earth-700 font-light leading-relaxed">
              Our academy is intentionally structured for those who wish to step beyond surface-level wellness advice and master the art of somatic inquiry.
            </p>

            <div className="space-y-3.5">
              {[
                'Aspiring coaches seeking an evidence-grounded, trauma-informed certification.',
                'Yoga teachers, bodyworkers, and fitness trainers wanting deep 1-on-1 coaching skills.',
                'Healthcare professionals and counselors integrating holistic lifestyle behavior change.',
                'Corporate leaders and HR professionals championing workplace mental wellbeing.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-earth-800">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-sand-100/80 border border-sand-300 rounded-3xl p-8 space-y-6">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
              Core Training Methodology
            </span>
            <h3 className="font-serif text-2xl text-earth-900 font-normal">
              The Roots of Balance Framework
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-earth-700 font-light">
              <p>
                <strong>1. Somatic Attunement:</strong> Moving coaching out of purely intellectual loops and into nervous system awareness, breath patterns, and bodily wisdom.
              </p>
              <p>
                <strong>2. Transformative Inquiring:</strong> Asking clean, evocative questions that strip away performance and guide clients toward honest breakthroughs.
              </p>
              <p>
                <strong>3. Ethical Mastery:</strong> Uncompromising clarity on scope of practice, confidentiality, and when to refer out to mental health practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 9-Module Dynamic Curriculum */}
      <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
            Curriculum Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
            The 9 Comprehensive Training Modules
          </h2>
          <p className="text-sm text-earth-600 font-light leading-relaxed">
            Every module combines theoretical instruction, guided somatic practice, and peer coaching evaluation. Fully configurable and managed dynamically by the academy faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="bg-sand-50 rounded-2xl border border-sand-300 p-6 flex flex-col justify-between hover:border-sage-400 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-earth-500 mb-3 pb-2 border-b border-sand-200">
                  <span className="px-2.5 py-0.5 rounded-full bg-sage-100 text-sage-900 font-bold uppercase tracking-wider text-[10px]">
                    Module 0{mod.moduleNumber}
                  </span>
                  <span className="font-medium text-earth-600">{mod.durationWeeks} Weeks</span>
                </div>

                <h3 className="font-serif text-lg text-earth-900 font-medium mb-1.5">
                  {mod.title}
                </h3>
                <p className="text-xs text-sage-800 font-medium mb-3 italic">
                  {mod.subtitle}
                </p>
                <p className="text-xs text-earth-600 font-light leading-relaxed mb-4">
                  {mod.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-sand-200">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-earth-700 block mb-1">
                    Key Competencies:
                  </span>
                  {mod.learningObjectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-earth-600">
                      <span className="text-sage-600 font-bold">•</span>
                      <span className="font-light">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Tuition, Investment & Formats */}
      <section className="bg-sand-100/70 border-y border-sand-300/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
                Tuition & Formats
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-earth-900 font-normal">
                An Investment in Your Future Practice
              </h2>
              <p className="text-sm sm:text-base text-earth-700 font-light leading-relaxed">
                Tuition includes all 9 module lectures, workbook materials, observed mentoring sessions, practicum case review, and lifetime alumni community access.
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-sand-50 border border-sand-300 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-earth-900 block">Online Cohort</span>
                    <span className="text-xs text-earth-500 font-light">Global interactive Zoom seminars & virtual practicum</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sage-800 bg-sage-100 px-2.5 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>

                <div className="bg-sand-50 border border-sand-300 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-earth-900 block">Hybrid Cohort</span>
                    <span className="text-xs text-earth-500 font-light">Online seminars + 3-day in-person somatic intensive</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth-700 bg-sand-200 px-2.5 py-1 rounded-full">
                    Limited to 10
                  </span>
                </div>
              </div>
            </div>

            {/* Tuition Card */}
            <div className="lg:col-span-6">
              <div className="bg-sand-50 rounded-3xl border border-sand-300 p-8 sm:p-10 shadow-lg text-center space-y-6 max-w-md mx-auto">
                <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
                  Spring 2027 Cohort Tuition
                </span>
                <div className="space-y-1">
                  <span className="font-serif text-5xl font-normal text-earth-950">$3,200</span>
                  <span className="text-xs text-earth-500 block">USD • Flexible 4-Part Installment Plan Available</span>
                </div>

                <ul className="space-y-2.5 text-xs text-earth-700 text-left pt-4 border-t border-sand-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                    <span>Complete 18-Week 9-Module Curriculum</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                    <span>Live Supervised Practicum with Alia Alblooki</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                    <span>Roots of Balance Practitioner Certification & Badge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0" />
                    <span>Practice Launch Blueprint & Client Onboarding Templates</span>
                  </li>
                </ul>

                <Link
                  href="/academy/apply"
                  className="w-full py-3.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm block text-center"
                >
                  Apply for Admission
                </Link>

                <p className="text-[11px] text-earth-500 font-light">
                  * Application requires no deposit. Acceptance is based on alignment and interview review.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <HelpCircle className="w-6 h-6 text-sage-700 mx-auto" />
          <h2 className="font-serif text-3xl text-earth-900 font-normal">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-sand-50 border border-sand-300 rounded-xl p-6 space-y-2">
              <h4 className="font-serif text-lg text-earth-900 font-medium">
                {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-earth-600 font-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA Footer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-8">
        <h3 className="font-serif text-3xl text-earth-900 font-normal">
          Answering the Call to Guide Others?
        </h3>
        <p className="text-sm text-earth-600 max-w-lg mx-auto font-light leading-relaxed">
          Admissions are reviewed on a rolling basis. Take the first step by completing your candidate profile.
        </p>
        <Link
          href="/academy/apply"
          className="px-8 py-3.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm inline-flex items-center gap-2"
        >
          <GraduationCap className="w-4 h-4" />
          <span>Begin Academy Application</span>
        </Link>
      </section>
    </div>
  );
}

