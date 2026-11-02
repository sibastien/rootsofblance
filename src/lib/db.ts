import fs from 'fs';
import path from 'path';

export interface CoachProfile {
  brandName: string;
  brandTagline: string;
  coachName: string;
  coachTitle: string;
  email: string;
  phone: string;
  location: string;
  instagram: string;
  telegram: string;
  youtube: string;
  tiktok: string;
  bioHeadline: string;
  bioStory: string[];
  philosophy: {
    title: string;
    description: string;
    icon: string;
  }[];
  credentials: {
    title: string;
    institution: string;
    year: string;
    verified: boolean;
  }[];
  workingHours: {
    days: string[]; // ['Monday', 'Tuesday', ...]
    startTime: string; // '09:00'
    endTime: string; // '18:00'
    slotDurationMinutes: number; // 60
    bufferMinutes: number; // 15
  };
  paymentSettings: {
    currency: string;
    acceptDeposits: boolean;
    depositPercentage: number;
    paymentMode: 'inquiry_first' | 'online_payment' | 'deposit_required';
  };
}

export interface CoachingService {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  objectives: string[];
  durationMinutes: number;
  price: number;
  format: 'Online' | 'In-Person' | 'Hybrid';
  available: boolean;
  category: string;
}

export interface Booking {
  id: string;
  bookingRef: string;
  serviceId: string;
  serviceTitle: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  format: 'Online' | 'In-Person';
  date: string; // YYYY-MM-DD
  timeSlot: string; // HH:mm
  notes: string;
  status: 'pending' | 'confirmed' | 'rescheduled' | 'cancelled' | 'completed' | 'rejected';
  paymentStatus: 'unpaid' | 'deposit_paid' | 'paid_in_full';
  createdAt: string;
  updatedAt: string;
}

export interface AcademyModule {
  id: string;
  moduleNumber: number;
  title: string;
  subtitle: string;
  description: string;
  learningObjectives: string[];
  durationWeeks: number;
}

export interface AcademyApplication {
  id: string;
  applicationRef: string;
  fullName: string;
  email: string;
  phone: string;
  occupation: string;
  previousExperience: string;
  motivation: string;
  preferredFormat: 'Online' | 'In-Person' | 'Hybrid';
  availability: string;
  status: 'pending' | 'accepted' | 'rejected' | 'enrolled';
  adminNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  authorName: string;
  authorRole: string;
  publishedAt: string;
  readingTimeMinutes: number;
  metaTitle: string;
  metaDesc: string;
  published: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: 'personal_coaching' | 'academy';
  quote: string;
  rating: number;
  verified: boolean;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  source: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

export interface Subscriber {
  id: string;
  email: string;
  source: string;
  subscribedAt: string;
}

export interface DatabaseSchema {
  profile: CoachProfile;
  services: CoachingService[];
  bookings: Booking[];
  academyModules: AcademyModule[];
  academyApplications: AcademyApplication[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  inquiries: Inquiry[];
  subscribers: Subscriber[];
  admin: {
    username: string;
    passwordHash: string; // salted SHA-256 for secure lightweight local auth
  };
}

const isVercel = Boolean(process.env.VERCEL);
const DB_DIR = isVercel ? path.join('/tmp', 'data') : path.join(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'wellness.json');

// In-memory cache for serverless environments
let memoryDb: DatabaseSchema | null = null;

const INITIAL_PROFILE: CoachProfile = {
  brandName: 'Roots of Balance',
  brandTagline: 'Holistic Wellness, Psychological Balance & Coach Training Academy',
  coachName: 'Alia Alblooki',
  coachTitle: 'Holistic Wellness Coach & Psychological Balance Specialist',
  email: 'rootsofbalance@outlook.com',
  phone: '+971 50 892 4110',
  location: 'Dubai, UAE & Online Worldwide',
  instagram: 'https://instagram.com/roots__of_balance',
  telegram: 'https://t.me/RootsOfBalance',
  youtube: 'https://youtube.com/@RootsOfBalance',
  tiktok: 'https://tiktok.com/@RootsOfBalance',
  bioHeadline: 'Guiding individuals and future coaches toward emotional equilibrium, root vitality, and transformative self-mastery.',
  bioStory: [
    'Welcome to Roots of Balance (مساحة ناعمة للعافية الشاملة). My mission is rooted in the conviction that true wellbeing is not merely the absence of fatigue, but an active, harmonious alignment of mind, body, emotional peace, and physical nourishment.',
    'Throughout my journey in self-development, psychological balance guidance, sports nutrition, and root holistic beauty, I have worked with countless women and men who felt overwhelmed by fragmented advice. At Roots of Balance, we step away from superficial quick-fixes to excavate the underlying behavioral, emotional, and physiological holding patterns.',
    'Alongside bespoke personal coaching containers, I created the Roots of Balance Coach Training Academy to empower the next generation of professional holistic coaches across the MENA region and worldwide, imparting structured methodologies, trauma-sensitive holding spaces, and high-integrity coaching ethics.'
  ],
  philosophy: [
    {
      title: 'Psychological & Emotional Equilibrium',
      description: 'Nurturing emotional safety and internal harmony to overcome mental exhaustion and self-limiting beliefs.',
      icon: 'HeartPulse'
    },
    {
      title: 'Root Vitality & Sports Nutrition',
      description: 'Whole-body nourishment, hormonal balance, and sustainable movement that empower energy from within.',
      icon: 'Sprout'
    },
    {
      title: 'Radical Self-Awareness',
      description: 'Gentle, honest self-inquiry that dismantles performative habits and builds deep self-trust.',
      icon: 'Compass'
    },
    {
      title: 'Professional Coaching Ethics',
      description: 'Cultivating future practitioners who lead with empathetic listening, clear boundaries, and profound integrity.',
      icon: 'ShieldCheck'
    }
  ],
  credentials: [
    {
      title: 'Certified Holistic Wellness & Lifestyle Coach',
      institution: 'International Association of Wellness Professionals',
      year: '2019',
      verified: true
    },
    {
      title: 'Psychological Wellbeing & Self-Development Practitioner',
      institution: 'Integrative Coaching Institute',
      year: '2021',
      verified: true
    },
    {
      title: 'Integrative Sports Nutrition & Holistic Health Specialist',
      institution: 'Precision Health & Nutrition Academy',
      year: '2020',
      verified: true
    },
    {
      title: 'Mindfulness & Somatic Stress Regulation Guide',
      institution: 'Mind-Body Awareness Institute',
      year: '2018',
      verified: true
    }
  ],
  workingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    startTime: '09:00',
    endTime: '17:00',
    slotDurationMinutes: 60,
    bufferMinutes: 15
  },
  paymentSettings: {
    currency: 'USD',
    acceptDeposits: true,
    depositPercentage: 30,
    paymentMode: 'inquiry_first'
  }
};

const INITIAL_SERVICES: CoachingService[] = [
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
    format: 'Hybrid',
    available: true,
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
    format: 'Online',
    available: true,
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
    format: 'Online',
    available: true,
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
    format: 'Online',
    available: true,
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
    format: 'Hybrid',
    available: true,
    category: 'Lifestyle'
  }
];

const INITIAL_ACADEMY_MODULES: AcademyModule[] = [
  {
    id: 'mod-1',
    moduleNumber: 1,
    title: 'Foundations of Holistic Wellness Coaching',
    subtitle: 'Scope of practice, holistic paradigms & the coaching relationship',
    description: 'Explore the historical and contemporary evolution of wellness coaching, ethical boundaries, and establishing a sacred, supportive client container.',
    learningObjectives: [
      'Differentiate coaching from clinical therapy and consulting',
      'Master client intake, initial agreement framing, and safe space creation',
      'Learn the core competencies of professional wellness coaching'
    ],
    durationWeeks: 2
  },
  {
    id: 'mod-2',
    moduleNumber: 2,
    title: 'Understanding the Mind-Body Connection',
    subtitle: 'Autonomic nervous system, polyvagal theory & somatics',
    description: 'Learn how emotional experiences, stress, and relational dynamics manifest physically in muscular tension, hormonal balance, and nervous system activation.',
    learningObjectives: [
      'Grasp fundamental polyvagal theory and somatic response states',
      'Recognize sympathetic hyperarousal and dorsal vagal shutdown in clients',
      'Guide clients through gentle somatic grounding and orientation exercises'
    ],
    durationWeeks: 2
  },
  {
    id: 'mod-3',
    moduleNumber: 3,
    title: 'Self-Awareness & Personal Development',
    subtitle: 'The coach as the instrument & inner shadow work',
    description: 'A transformative practitioner must practice what they teach. Deepen your personal self-awareness, unconscious bias recognition, and emotional presence.',
    learningObjectives: [
      'Identify personal blind spots, projections, and countertransference',
      'Establish personal nervous system regulation before holding space',
      'Cultivate an unwavering, non-judgmental coaching presence'
    ],
    durationWeeks: 2
  },
  {
    id: 'mod-4',
    moduleNumber: 4,
    title: 'Mindfulness & Stress Management Protocols',
    subtitle: 'Breathwork, contemplative practices & vagal resets',
    description: 'Equip yourself with a vast toolkit of mindfulness techniques, somatic breath protocols, and restorative rituals to help clients de-escalate chronic stress.',
    learningObjectives: [
      'Facilitate structured breathwork sequences for down-regulation',
      'Teach body scan, mindful observation, and sensory anchoring practices',
      'Construct personalized stress-relief action plans for high-stress lifestyles'
    ],
    durationWeeks: 2
  },
  {
    id: 'mod-5',
    moduleNumber: 5,
    title: 'Coaching Communication & Active Listening',
    subtitle: 'Somatic inquiry, clean language & transformative questioning',
    description: 'Move beyond surface chatter into deep relational attunement. Learn how to listen to vocal tone, body language, and the unsaid.',
    learningObjectives: [
      'Master Level 3 (Global / Somatic) active listening',
      'Ask powerful, open-ended evocative questions that spark breakthrough insights',
      'Reflect client emotions and bodily cues without interpreting or prescribing'
    ],
    durationWeeks: 2
  },
  {
    id: 'mod-6',
    moduleNumber: 6,
    title: 'Goal Setting & Behavioral Change Psychology',
    subtitle: 'Transtheoretical model, habit loops & overcoming resistance',
    description: 'Understand the neurobiology of habit formation. Learn how to guide clients through resistance, fear of change, and subconscious self-sabotage.',
    learningObjectives: [
      'Apply the Stages of Change model to client motivation',
      'Co-create achievable micro-goals using identity-based habit loops',
      'Navigate relapse with compassion, curiosity, and iterative growth'
    ],
    durationWeeks: 2
  },
  {
    id: 'mod-7',
    moduleNumber: 7,
    title: 'Coaching Ethics & Professional Boundaries',
    subtitle: 'Confidentiality, trauma sensitivity & referral protocols',
    description: 'Protect both your clients and your practice by understanding the legal, ethical, and scope-of-practice standards required of world-class wellness practitioners.',
    learningObjectives: [
      'Establish airtight consent, confidentiality, and data privacy protocols',
      'Recognize red flags requiring immediate referral to licensed mental health professionals',
      'Maintain clear emotional and interpersonal boundaries with clients'
    ],
    durationWeeks: 1
  },
  {
    id: 'mod-8',
    moduleNumber: 8,
    title: 'Practical Coaching Practicum & Supervised Case Studies',
    subtitle: 'Live peer coaching, mentor evaluation & case feedback',
    description: 'Put theory into real-time practice. Engage in live observed coaching sessions with feedback from senior faculty, refining your confidence and tone.',
    learningObjectives: [
      'Conduct 10+ hours of peer-to-peer and client coaching sessions',
      'Receive actionable, constructive feedback from certified mentor coaches',
      'Formulate structured case conceptualizations and progress notes'
    ],
    durationWeeks: 3
  },
  {
    id: 'mod-9',
    moduleNumber: 9,
    title: 'Building & Developing a Thriving Coaching Practice',
    subtitle: 'Niche definition, client acquisition & sustainable business models',
    description: 'Bridge the gap between skilled coaching and a flourishing career. Learn ethical marketing, client onboarding systems, and sustainable pricing models.',
    learningObjectives: [
      'Define your signature coaching package and target client avatar',
      'Build an elegant onboarding, booking, and payment workflow',
      'Market your practice authentically without pushy sales tactics'
    ],
    durationWeeks: 2
  }
];

const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'understanding-nervous-system-dysregulation',
    title: 'Beyond Burnout: Understanding Nervous System Dysregulation and How to Reset',
    category: 'Holistic Wellness',
    excerpt: 'When chronic exhaustion cannot be fixed by another night of sleep, your nervous system may be stuck in survival mode. Here is how somatic awareness restores real calm.',
    content: `Many people spend years searching for the cure to exhaustion in vitamins, coffee, or stricter routines. Yet beneath the surface of fatigue often lies an overstimulated, dysregulated autonomic nervous system that has forgotten what true physiological safety feels like.

### The Cost of Chronic Sympathetic Activation

When work deadlines, relational conflict, and digital noise never pause, your sympathetic nervous system remains perpetually primed for crisis. Cortisol stays elevated, digestion slows, and restorative deep sleep evaporates. 

Common physical symptoms include:
* Unexplained tension in the jaw, shoulders, and hips
* Waking up at 3:00 AM with racing thoughts
* Irritability over minor disruptions
* Feeling simultaneously "wired and tired"

### Returning to Regulation: 3 Somatic Shifts

1. **The Extended Exhale**: Lengthening your exhale relative to your inhale immediately signals the vagus nerve to slow heart rate and lower arterial pressure.
2. **Sensory Grounding**: Rather than fighting mental loops, bring conscious awareness to physical contact points: feel your feet planted firmly on the floor and scan your room for three calming natural colors.
3. **Micro-Pauses Between Tasks**: Instead of jumping directly from a phone call into email drafting, pause for 60 seconds with your eyes closed and hand placed over your solar plexus.

Remember: healing does not happen through force. It unfolds when your nervous system is consistently shown evidence of safety.`,
    featuredImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    authorName: 'Alia Alblooki',
    authorRole: 'Founder & Holistic Wellness Coach',
    publishedAt: '2026-10-14',
    readingTimeMinutes: 5,
    metaTitle: 'Understanding Nervous System Dysregulation | Roots of Balance',
    metaDesc: 'Discover the hidden signs of nervous system dysregulation and 3 somatic tools to restore physical calm and mental clarity.',
    published: true
  },
  {
    id: 'post-2',
    slug: 'the-art-of-somatic-listening-for-coaches',
    title: 'The Art of Somatic Listening: Why the Body Speaks What Words Conceal',
    category: 'Coaching Education',
    excerpt: 'Traditional coaching often remains trapped in cognitive intellectualizing. Discover how tuning into posture, vocal nuance, and breath transforms coaching breakthroughs.',
    content: `When a client says "I am completely fine with this decision," but their shoulders rise toward their ears and their breath shallowly catches in their upper chest, which message do you believe?

In the Roots of Balance Training Academy, we teach that the human body is an infallible compass. Words can rationalize and defend, but the somatic system faithfully reports what is true in the present moment.

### The Three Tiers of Listening

1. **Level 1 (Internal Listening)**: The coach hears the words while secretly formulating their next clever piece of advice.
2. **Level 2 (Focused Listening)**: The coach listens intently to the literal content and intellectual framework of the client's story.
3. **Level 3 (Somatic & Global Listening)**: The coach attunes to the entire energetic and physiological field—breathing depth, pauses, vocal cadence, and shifts in physical posture.

By gently reflecting these physical signals back to the client—without judgment or diagnosis—we grant them permission to reconnect with their deepest bodily wisdom.`,
    featuredImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    authorName: 'Alia Alblooki',
    authorRole: 'Academy Director & Wellness Coach',
    publishedAt: '2026-10-22',
    readingTimeMinutes: 6,
    metaTitle: 'The Art of Somatic Listening for Coaches | Roots of Balance',
    metaDesc: 'Learn how somatic and global listening unlocks deeper breakthroughs in holistic wellness coaching practice.',
    published: true
  },
  {
    id: 'post-3',
    slug: 'building-an-ethical-coaching-practice',
    title: 'Building a Thriving, Ethical Coaching Practice Without Gimmicks',
    category: 'Professional Development',
    excerpt: 'How to transition your passion for wellness into a sustainable, heart-led coaching career anchored in genuine competence, integrity, and trust.',
    content: `The modern online coaching space is crowded with aggressive sales funnels, fabricated guarantees, and hollow certification badges. However, the most successful and enduring coaches build their reputations on a radically different foundation: undeniable mastery, deep integrity, and authentic human connection.

### Core Pillars of an Ethical Practice

* **Strict Scope of Practice**: Knowing precisely when to celebrate coaching progress, and when to refer a client to medical or psychological specialists.
* **Transparent Pricing & Expectations**: Eliminating predatory urgency in favor of grounded, clear service agreements.
* **Continuous Mentorship**: A true practitioner never stops learning, receiving supervision, or engaging in their own personal growth work.

When you invest in rigorous training and lead with genuine care, client referrals become the natural, effortless engine of your practice.`,
    featuredImage: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80',
    authorName: 'Alia Alblooki',
    authorRole: 'Founder, Roots of Balance',
    publishedAt: '2026-10-29',
    readingTimeMinutes: 7,
    metaTitle: 'Building an Ethical Coaching Practice | Roots of Balance',
    metaDesc: 'A strategic guide for new holistic coaches on creating an ethical, sustainable, and highly respected coaching practice.',
    published: true
  }
];

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Amanda R.',
    role: 'Executive & Mother of Two',
    category: 'personal_coaching',
    quote: 'Working with Alia was the first time I felt truly heard. She helped me see how my chronic back tension and insomnia were direct results of my inability to set energetic boundaries at work. Within eight weeks, my energy and peace returned.',
    rating: 5,
    verified: true
  },
  {
    id: 'test-2',
    name: 'David M.',
    role: 'Creative Director',
    category: 'personal_coaching',
    quote: 'Her approach is direct, deeply compassionate, and completely devoid of fluff. She gives you real, somatic tools that you can deploy right in the middle of a stressful workday.',
    rating: 5,
    verified: true
  },
  {
    id: 'test-3',
    name: 'Leila K.',
    role: 'Graduate, Coach Academy Cohort 3',
    category: 'academy',
    quote: 'The Roots of Balance Academy completely transformed not only how I coach others, but how I relate to my own body and emotions. The emphasis on ethics and nervous system regulation gave me the confidence to launch my full-time practice.',
    rating: 5,
    verified: true
  },
  {
    id: 'test-4',
    name: 'Dr. Tariq S.',
    role: 'Integrative Physician & Academy Alum',
    category: 'academy',
    quote: 'As a healthcare practitioner, I was searching for an evidence-grounded coaching framework to support my patients with lifestyle changes. This curriculum provided the exact depth, structure, and somatic mastery I was missing.',
    rating: 5,
    verified: true
  }
];

const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'bk-1',
    bookingRef: 'ROB-2026-1042',
    serviceId: 'srv-1',
    serviceTitle: 'Individual Holistic Wellness Coaching',
    clientName: 'Nour El-Din',
    clientEmail: 'nour.eldin@example.com',
    clientPhone: '+1 (555) 234-5678',
    format: 'Online',
    date: '2026-11-06',
    timeSlot: '10:00',
    notes: 'Looking for guidance navigating chronic work stress and rebuilding regular sleep patterns.',
    status: 'confirmed',
    paymentStatus: 'paid_in_full',
    createdAt: '2026-11-01T14:22:00Z',
    updatedAt: '2026-11-01T14:30:00Z'
  },
  {
    id: 'bk-2',
    bookingRef: 'ROB-2026-1043',
    serviceId: 'srv-2',
    serviceTitle: 'Stress Management & Nervous System Reset',
    clientName: 'Catherine Bennett',
    clientEmail: 'catherine.b@example.com',
    clientPhone: '+1 (555) 876-5432',
    format: 'In-Person',
    date: '2026-11-09',
    timeSlot: '14:00',
    notes: 'Referred by Amanda R. Experiencing burnout after corporate restructuring.',
    status: 'pending',
    paymentStatus: 'deposit_paid',
    createdAt: '2026-11-02T09:15:00Z',
    updatedAt: '2026-11-02T09:15:00Z'
  }
];

const INITIAL_APPLICATIONS: AcademyApplication[] = [
  {
    id: 'app-1',
    applicationRef: 'ACA-2026-501',
    fullName: 'Yasmin Al-Mansoor',
    email: 'yasmin.mansoor@example.com',
    phone: '+1 (555) 432-1098',
    occupation: 'Corporate HR Consultant & Yoga Instructor',
    previousExperience: '5 years teaching trauma-informed yoga and facilitating corporate wellbeing workshops.',
    motivation: 'I want to bridge my organizational wellness consulting with certified, deep somatic 1-on-1 coaching for female leaders in MENA and internationally.',
    preferredFormat: 'Hybrid',
    availability: 'Weekday evenings & weekend intensives',
    status: 'accepted',
    adminNotes: 'Exceptional background. Sent welcome onboarding email and cohort enrollment link.',
    createdAt: '2026-10-28T11:45:00Z',
    updatedAt: '2026-10-30T16:20:00Z'
  },
  {
    id: 'app-2',
    applicationRef: 'ACA-2026-502',
    fullName: 'Marcus Vance',
    email: 'marcus.vance@example.com',
    phone: '+1 (555) 321-9876',
    occupation: 'Physical Therapist Assistant',
    previousExperience: '8 years clinical rehabilitation, interested in emotional holding patterns.',
    motivation: 'I witness how unresolved life stress impedes physical recovery. I want to become a holistic coach to treat the whole human.',
    preferredFormat: 'Online',
    availability: 'Flexible weekday afternoons',
    status: 'pending',
    adminNotes: 'Strong clinical background. Scheduled for screening interview.',
    createdAt: '2026-11-01T18:10:00Z',
    updatedAt: '2026-11-01T18:10:00Z'
  }
];

// Helper to ensure database file exists
function ensureDatabase(): DatabaseSchema {
  if (memoryDb) {
    return memoryDb;
  }

  const defaultInitialData: DatabaseSchema = {
    profile: INITIAL_PROFILE,
    services: INITIAL_SERVICES,
    bookings: INITIAL_BOOKINGS,
    academyModules: INITIAL_ACADEMY_MODULES,
    academyApplications: INITIAL_APPLICATIONS,
    blogPosts: INITIAL_BLOG_POSTS,
    testimonials: INITIAL_TESTIMONIALS,
    inquiries: [
      {
        id: 'inq-1',
        name: 'Sarah Jenkins',
        email: 'sjenkins@example.com',
        phone: '+1 (555) 789-0123',
        subject: 'Question regarding online coaching timezone availability',
        message: 'Hello, I live in Dubai (GMT+4) and wanted to confirm if your online session hours can accommodate evening slots in my timezone? Thank you!',
        source: 'Website Contact Page',
        status: 'new',
        createdAt: '2026-11-02T08:30:00Z'
      }
    ],
    subscribers: [
      {
        id: 'sub-1',
        email: 'nour.eldin@example.com',
        source: 'Homepage Free Guide Form',
        subscribedAt: '2026-11-01T14:20:00Z'
      },
      {
        id: 'sub-2',
        email: 'wellness.seeker@example.com',
        source: 'Footer Newsletter',
        subscribedAt: '2026-11-02T10:05:00Z'
      }
    ],
    admin: {
      username: 'admin',
      passwordHash: 'e69c6fc5aa5e6bb817b1ec1192e22cf90097f480398f8b87df34988bcddffb24'
    }
  };

  try {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }

    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultInitialData, null, 2), 'utf-8');
      memoryDb = defaultInitialData;
      return defaultInitialData;
    }

    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    memoryDb = JSON.parse(raw) as DatabaseSchema;
    return memoryDb;
  } catch (error) {
    console.warn('[DB] Filesystem access constrained, utilizing in-memory state:', error);
    memoryDb = defaultInitialData;
    return defaultInitialData;
  }
}

// Atomic write to prevent file corruption
function saveDatabase(data: DatabaseSchema): void {
  memoryDb = data;
  try {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }
    const tempFile = `${DB_FILE}.tmp.${Date.now()}`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempFile, DB_FILE);
  } catch (err) {
    console.warn('[DB] Filesystem write skipped on serverless/read-only runtime:', err);
  }
}

export const db = {
  get: (): DatabaseSchema => ensureDatabase(),
  save: (data: DatabaseSchema): void => saveDatabase(data),

  // Profile
  getProfile: () => ensureDatabase().profile,
  updateProfile: (profile: Partial<CoachProfile>) => {
    const current = ensureDatabase();
    current.profile = { ...current.profile, ...profile };
    saveDatabase(current);
    return current.profile;
  },

  // Services
  getServices: () => ensureDatabase().services,
  getServiceBySlug: (slug: string) => ensureDatabase().services.find(s => s.slug === slug),
  updateService: (id: string, updates: Partial<CoachingService>) => {
    const current = ensureDatabase();
    const idx = current.services.findIndex(s => s.id === id);
    if (idx !== -1) {
      current.services[idx] = { ...current.services[idx], ...updates };
      saveDatabase(current);
      return current.services[idx];
    }
    return null;
  },
  createService: (service: Omit<CoachingService, 'id'>) => {
    const current = ensureDatabase();
    const newService: CoachingService = {
      ...service,
      id: `srv-${Date.now()}`
    };
    current.services.push(newService);
    saveDatabase(current);
    return newService;
  },
  deleteService: (id: string) => {
    const current = ensureDatabase();
    current.services = current.services.filter(s => s.id !== id);
    saveDatabase(current);
    return true;
  },

  // Bookings
  getBookings: () => ensureDatabase().bookings,
  getBookingByRef: (ref: string) => ensureDatabase().bookings.find(b => b.bookingRef === ref),
  createBooking: (bookingData: Omit<Booking, 'id' | 'bookingRef' | 'status' | 'paymentStatus' | 'createdAt' | 'updatedAt'>) => {
    const current = ensureDatabase();

    // Check for double bookings on the same date and time slot (excluding cancelled/rejected)
    const conflict = current.bookings.find(
      b => b.date === bookingData.date &&
           b.timeSlot === bookingData.timeSlot &&
           b.status !== 'cancelled' &&
           b.status !== 'rejected'
    );

    if (conflict) {
      throw new Error(`The time slot ${bookingData.timeSlot} on ${bookingData.date} is already reserved. Please select another slot.`);
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const bookingRef = `ROB-${new Date().getFullYear()}-${randomSuffix}`;
    const now = new Date().toISOString();

    const newBooking: Booking = {
      ...bookingData,
      id: `bk-${Date.now()}`,
      bookingRef,
      status: 'pending',
      paymentStatus: 'unpaid',
      createdAt: now,
      updatedAt: now
    };

    current.bookings.push(newBooking);
    saveDatabase(current);
    return newBooking;
  },
  updateBookingStatus: (id: string, status: Booking['status'], updates?: Partial<Booking>) => {
    const current = ensureDatabase();
    const idx = current.bookings.findIndex(b => b.id === id);
    if (idx !== -1) {
      current.bookings[idx] = {
        ...current.bookings[idx],
        ...updates,
        status,
        updatedAt: new Date().toISOString()
      };
      saveDatabase(current);
      return current.bookings[idx];
    }
    return null;
  },

  // Academy Modules
  getAcademyModules: () => ensureDatabase().academyModules.sort((a, b) => a.moduleNumber - b.moduleNumber),
  updateAcademyModule: (id: string, updates: Partial<AcademyModule>) => {
    const current = ensureDatabase();
    const idx = current.academyModules.findIndex(m => m.id === id);
    if (idx !== -1) {
      current.academyModules[idx] = { ...current.academyModules[idx], ...updates };
      saveDatabase(current);
      return current.academyModules[idx];
    }
    return null;
  },
  createAcademyModule: (moduleData: Omit<AcademyModule, 'id'>) => {
    const current = ensureDatabase();
    const newModule: AcademyModule = {
      ...moduleData,
      id: `mod-${Date.now()}`
    };
    current.academyModules.push(newModule);
    saveDatabase(current);
    return newModule;
  },
  deleteAcademyModule: (id: string) => {
    const current = ensureDatabase();
    current.academyModules = current.academyModules.filter(m => m.id !== id);
    // Renumber remaining modules
    current.academyModules.forEach((m, idx) => {
      m.moduleNumber = idx + 1;
    });
    saveDatabase(current);
    return true;
  },

  // Academy Applications
  getAcademyApplications: () => ensureDatabase().academyApplications,
  createAcademyApplication: (appData: Omit<AcademyApplication, 'id' | 'applicationRef' | 'status' | 'adminNotes' | 'createdAt' | 'updatedAt'>) => {
    const current = ensureDatabase();
    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const applicationRef = `ACA-${new Date().getFullYear()}-${randomSuffix}`;
    const now = new Date().toISOString();

    const newApp: AcademyApplication = {
      ...appData,
      id: `app-${Date.now()}`,
      applicationRef,
      status: 'pending',
      adminNotes: '',
      createdAt: now,
      updatedAt: now
    };

    current.academyApplications.push(newApp);
    saveDatabase(current);
    return newApp;
  },
  updateAcademyApplicationStatus: (id: string, status: AcademyApplication['status'], adminNotes?: string) => {
    const current = ensureDatabase();
    const idx = current.academyApplications.findIndex(a => a.id === id);
    if (idx !== -1) {
      current.academyApplications[idx] = {
        ...current.academyApplications[idx],
        status,
        ...(adminNotes !== undefined ? { adminNotes } : {}),
        updatedAt: new Date().toISOString()
      };
      saveDatabase(current);
      return current.academyApplications[idx];
    }
    return null;
  },

  // Blog Posts
  getBlogPosts: () => ensureDatabase().blogPosts.filter(p => p.published),
  getAllBlogPosts: () => ensureDatabase().blogPosts,
  getBlogPostBySlug: (slug: string) => ensureDatabase().blogPosts.find(p => p.slug === slug),
  createBlogPost: (post: Omit<BlogPost, 'id' | 'publishedAt'>) => {
    const current = ensureDatabase();
    const newPost: BlogPost = {
      ...post,
      id: `post-${Date.now()}`,
      publishedAt: new Date().toISOString().split('T')[0]
    };
    current.blogPosts.unshift(newPost);
    saveDatabase(current);
    return newPost;
  },
  updateBlogPost: (id: string, updates: Partial<BlogPost>) => {
    const current = ensureDatabase();
    const idx = current.blogPosts.findIndex(p => p.id === id);
    if (idx !== -1) {
      current.blogPosts[idx] = { ...current.blogPosts[idx], ...updates };
      saveDatabase(current);
      return current.blogPosts[idx];
    }
    return null;
  },
  deleteBlogPost: (id: string) => {
    const current = ensureDatabase();
    current.blogPosts = current.blogPosts.filter(p => p.id !== id);
    saveDatabase(current);
    return true;
  },

  // Testimonials
  getTestimonials: () => ensureDatabase().testimonials,
  createTestimonial: (t: Omit<Testimonial, 'id'>) => {
    const current = ensureDatabase();
    const newT: Testimonial = {
      ...t,
      id: `test-${Date.now()}`
    };
    current.testimonials.push(newT);
    saveDatabase(current);
    return newT;
  },
  deleteTestimonial: (id: string) => {
    const current = ensureDatabase();
    current.testimonials = current.testimonials.filter(t => t.id !== id);
    saveDatabase(current);
    return true;
  },

  // Inquiries
  getInquiries: () => ensureDatabase().inquiries,
  createInquiry: (inquiry: Omit<Inquiry, 'id' | 'status' | 'createdAt'>) => {
    const current = ensureDatabase();
    const newInq: Inquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    current.inquiries.unshift(newInq);
    saveDatabase(current);
    return newInq;
  },
  updateInquiryStatus: (id: string, status: Inquiry['status']) => {
    const current = ensureDatabase();
    const idx = current.inquiries.findIndex(i => i.id === id);
    if (idx !== -1) {
      current.inquiries[idx].status = status;
      saveDatabase(current);
      return current.inquiries[idx];
    }
    return null;
  },

  // Subscribers
  getSubscribers: () => ensureDatabase().subscribers,
  addSubscriber: (email: string, source: string) => {
    const current = ensureDatabase();
    const cleanEmail = email.trim().toLowerCase();
    const existing = current.subscribers.find(s => s.email.toLowerCase() === cleanEmail);
    if (existing) {
      return existing;
    }
    const newSub: Subscriber = {
      id: `sub-${Date.now()}`,
      email: cleanEmail,
      source,
      subscribedAt: new Date().toISOString()
    };
    current.subscribers.unshift(newSub);
    saveDatabase(current);
    return newSub;
  }
};
