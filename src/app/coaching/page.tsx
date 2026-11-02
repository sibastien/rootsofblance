'use client';

import { useState } from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';
import {
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';

export default function CoachingServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Initial services list from database
  const services = [
    {
      id: 'srv-1',
      slug: 'individual-holistic-coaching',
      title: 'Individual Holistic Wellness Coaching',
      shortDesc: 'Comprehensive one-on-one guidance addressing lifestyle, emotional balance, and physical vitality.',
      fullDesc: 'A dedicated 1-on-1 coaching container designed to unravel chronic exhaustion, align your daily habits, and restore your biological and emotional equilibrium through somatic awareness and tailored lifestyle protocols.',
      targetAudience: 'Individuals feeling disconnected, fatigued, or ready to dismantle self-defeating habits and build lasting vitality.',
      objectives: [
        'Identify root stressors and compensatory behavioral patterns',
        'Establish personalized circadian and lifestyle rhythms',
        'Integrate nervous system regulation practices into daily routines',
        'Cultivate mindful self-compassion and emotional resilience'
      ],
      durationMinutes: 60,
      price: 150,
      format: 'Hybrid' as const,
      category: 'Holistic Wellness'
    },
    {
      id: 'srv-2',
      slug: 'stress-management-lifestyle',
      title: 'Stress Management & Nervous System Reset',
      shortDesc: 'Somatic techniques, breathwork, and boundary architecture to dismantle chronic overwhelm.',
      fullDesc: 'Focused sessions targeting high-stress professionals and caregivers. We utilize breath-based somatic tools, autonomic regulation, and practical boundary frameworks to bring your nervous system out of chronic fight-or-flight.',
      targetAudience: 'Busy leaders, creators, and individuals struggling with burnout, anxiety, or high environmental stress.',
      objectives: [
        'Master targeted breathwork sequences for instant vagal tone reset',
        'Design sustainable physical and digital energetic boundaries',
        'Overcome cognitive overwhelm and decision fatigue',
        'Restore restorative sleep quality and daytime clarity'
      ],
      durationMinutes: 60,
      price: 160,
      format: 'Online' as const,
      category: 'Stress Management'
    },
    {
      id: 'srv-3',
      slug: 'mindfulness-self-awareness',
      title: 'Mindfulness & Self-Awareness Deep Dive',
      shortDesc: 'Reconnect with your inner wisdom, clarify life direction, and quiet mental clutter.',
      fullDesc: 'A reflective, contemplative space to examine internal dialogue, untangle reactive conditioning, and cultivate a peaceful, anchored relationship with your thoughts and emotions.',
      targetAudience: 'Those seeking clarity during life transitions, personal crossroads, or seeking deeper connection with their inner self.',
      objectives: [
        'Develop anchored daily mindfulness and somatic journaling practices',
        'De-escalate reactive mental patterns and self-criticism',
        'Clarify core personal values and authentic decision-making',
        'Strengthen intuition and grounded present-moment focus'
      ],
      durationMinutes: 75,
      price: 175,
      format: 'Online' as const,
      category: 'Mindfulness'
    },
    {
      id: 'srv-4',
      slug: 'work-life-vitality',
      title: 'Work-Life Harmony & Energy Alignment',
      shortDesc: 'Structure your calendar, career, and personal vitality to thrive without sacrificing health.',
      fullDesc: 'Designed to help high-achievers align career aspirations with physiological wellbeing. We systematically audit your energy drains, restructure your routines, and foster sustainable high-performance.',
      targetAudience: 'Entrepreneurs, executives, and hybrid professionals seeking peak performance without physical or mental burnout.',
      objectives: [
        'Conduct an exhaustive energy and habit expenditure audit',
        'Rebalance professional commitments with restorative personal time',
        'Implement guilt-free pacing and task transition rituals',
        'Build long-term endurance and emotional resilience'
      ],
      durationMinutes: 60,
      price: 155,
      format: 'Online' as const,
      category: 'Personal Development'
    },
    {
      id: 'srv-5',
      slug: 'healthy-habit-architecture',
      title: 'Healthy Habit Development & Root Nutrition',
      shortDesc: 'Practical, nourishing behavioral changes that eliminate self-sabotage and yo-yo cycles.',
      fullDesc: 'Grounded guidance on whole-food nourishment, hydration, mindful eating, and gentle movement. We replace restrictive dieting mentalities with deeply intuitive, supportive lifestyle habits.',
      targetAudience: 'Individuals wanting a loving, sustainable relationship with their body, food, and daily physical vitality.',
      objectives: [
        'Transition from restrictive mindsets to intuitive body nourishment',
        'Overcome emotional eating triggers and chronic afternoon crashes',
        'Establish enjoyable, sustainable physical movement routines',
        'Create automated environment cues that make healthy choices effortless'
      ],
      durationMinutes: 60,
      price: 140,
      format: 'Hybrid' as const,
      category: 'Lifestyle'
    }
  ];

  const categories = ['All', 'Holistic Wellness', 'Stress Management', 'Mindfulness', 'Personal Development', 'Lifestyle'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <section className="bg-sand-100/70 border-b border-sand-300/60 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
              Personal Coaching Containers
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-earth-950 font-normal leading-tight">
              Holistic Wellness Coaching Sessions
            </h1>
            <p className="text-base sm:text-lg text-earth-700 font-light leading-relaxed">
              Every body and life story is unique. Our individual sessions provide a grounded, judgment-free space to untangle stressors, regulate your nervous system, and restore inner alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          <Filter className="w-4 h-4 text-earth-500 shrink-0 ml-1 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-sage-700 text-white shadow-sm'
                  : 'bg-sand-100 text-earth-700 hover:bg-sand-200 border border-sand-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-sand-50 rounded-2xl border border-sand-300 p-8 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-sage-400 transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-sand-200 text-earth-800 font-medium">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-4 text-earth-600">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sage-700" />
                      {service.durationMinutes} mins
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sage-700" />
                      {service.format}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h2 className="font-serif text-2xl text-earth-950 font-medium mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm text-earth-700 leading-relaxed font-light">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Target Audience */}
                <div className="bg-sand-100/70 border-l-2 border-sage-600 p-3.5 rounded-r-lg">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-earth-800 block mb-1">
                    Who This Session Is For:
                  </span>
                  <p className="text-xs text-earth-600 font-light">
                    {service.targetAudience}
                  </p>
                </div>

                {/* Objectives */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-earth-800 block">
                    Core Session Objectives:
                  </span>
                  <div className="space-y-1.5">
                    {service.objectives.map((obj) => (
                      <div key={obj} className="flex items-start gap-2.5 text-xs text-earth-700">
                        <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                        <span className="font-light">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-8 mt-8 border-t border-sand-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-earth-500 block">Session Fee</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-normal text-earth-950">
                      ${service.price}
                    </span>
                    <span className="text-xs text-earth-500">USD</span>
                  </div>
                </div>

                <Link
                  href={`/book?service=${service.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Date & Time</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation FAQ / Intake Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="bg-sage-50/70 border border-sage-200/80 rounded-2xl p-8 space-y-3">
          <Sparkles className="w-6 h-6 text-sage-700 mx-auto" />
          <h3 className="font-serif text-xl text-earth-900 font-medium">
            First Time Working With Alia?
          </h3>
          <p className="text-xs sm:text-sm text-earth-700 max-w-xl mx-auto font-light leading-relaxed">
            All new clients receive a comprehensive pre-session intake reflection (inspired by our Roots of Balance intake questionnaire) to review health history, energy patterns, and current intentions before our call.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="text-xs font-semibold text-sage-800 hover:underline inline-flex items-center gap-1"
            >
              <span>Have questions before booking? Message us directly</span> &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

