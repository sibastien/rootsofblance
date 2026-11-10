export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    about: string;
    services: string;
    academy: string;
    blog: string;
    contact: string;
    bookSession: string;
    becomeCoach: string;
    bannerText: string;
    bannerLink: string;
    switchLang: string;
  };
  hero: {
    tagline: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    journeyATitle: string;
    journeyASub: string;
    journeyBTitle: string;
    journeyBSub: string;
    socialProof: string;
    quoteText: string;
    quoteAuthor: string;
  };
  philosophy: {
    subtitle: string;
    title: string;
    intro: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
  };
  servicesSection: {
    subtitle: string;
    title: string;
    intro: string;
    viewAll: string;
    investment: string;
    bookNow: string;
  };
  academySection: {
    badge: string;
    title: string;
    desc: string;
    feature1Title: string;
    feature1Sub: string;
    feature2Title: string;
    feature2Sub: string;
    ctaExplore: string;
    ctaApply: string;
    curriculumSnapshot: string;
  };
  meetAlia: {
    badge: string;
    name: string;
    title: string;
    p1: string;
    p2: string;
    readBio: string;
  };
  testimonialsSection: {
    badge: string;
    title: string;
    sub: string;
  };
  ctaBottom: {
    title: string;
    desc: string;
    bookBtn: string;
    applyBtn: string;
  };
  footer: {
    desc: string;
    coachingColTitle: string;
    academyColTitle: string;
    newsletterTitle: string;
    newsletterDesc: string;
    placeholderEmail: string;
    copyright: string;
    credentialsEthics: string;
    contact: string;
    coachLogin: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About Alia',
      services: 'Coaching Services',
      academy: 'Training Academy',
      blog: 'Blog & Insights',
      contact: 'Contact',
      bookSession: 'Book a Session',
      becomeCoach: 'Become a Coach',
      bannerText: 'Spring 2027 Holistic Coach Training Cohort Applications Now Open',
      bannerLink: 'Explore Curriculum →',
      switchLang: 'العربية',
    },
    hero: {
      tagline: 'Roots of Balance • جذور التوازن',
      titleLine1: 'Transformation begins',
      titleLine2: 'at the roots.',
      description:
        'Bridging somatic bodywork, nervous system regulation, and conscious lifestyle design. Personalized 1-on-1 coaching for individuals seeking deep healing, and rigorous professional training for future holistic wellness coaches.',
      journeyATitle: 'Personal Coaching',
      journeyASub: 'Somatic stress release, healthy habit architecture, and emotional balance.',
      journeyBTitle: 'Coach Academy',
      journeyBSub: '9-module curriculum, ethical boundaries, and somatic coaching mastery.',
      socialProof: 'Over 20 years of hands-on somatic experience & hundreds of lives rebalanced.',
      quoteText:
        'Lasting transformation begins when we nourish our roots — uniting mental calm, physical vitality, and deep self-awareness.',
      quoteAuthor: '— Alia Alblooki, Founder',
    },
    philosophy: {
      subtitle: 'Our Guiding Philosophy',
      title: 'What Does It Mean to Coach the Whole Human?',
      intro:
        'Conventional approaches often isolate problems into neat boxes—treating the mind, the body, or the calendar as separate entities. At Roots of Balance, we know that true vitality is an integrated ecosystem.',
      p1Title: 'Psychological & Emotional Equilibrium',
      p1Desc:
        'Nurturing emotional safety and internal harmony to overcome mental exhaustion and self-limiting beliefs.',
      p2Title: 'Root Vitality & Sports Nutrition',
      p2Desc:
        'Whole-body nourishment, hormonal balance, and sustainable movement that empower energy from within.',
      p3Title: 'Radical Self-Awareness',
      p3Desc:
        'Gentle, honest self-inquiry that dismantles performative habits and builds deep self-trust.',
      p4Title: 'Professional Coaching Ethics',
      p4Desc:
        'Cultivating future practitioners who lead with empathetic listening, clear boundaries, and profound integrity.',
    },
    servicesSection: {
      subtitle: 'Client Journey A',
      title: 'Personal Holistic Wellness Coaching',
      intro:
        'Tailored 1-on-1 sessions designed to help you de-escalate chronic stress, reset your autonomic nervous system, and reclaim bodily peace.',
      viewAll: 'View all coaching packages',
      investment: 'Investment',
      bookNow: 'Book Session',
    },
    academySection: {
      badge: 'Professional Academy Pillar',
      title: 'Become a Certified Holistic Wellness Coach',
      desc:
        'The world is experiencing an epidemic of burnout and disconnect. Join the Roots of Balance Training Academy to master evidence-informed coaching psychology, somatic listening, and heart-centered ethics.',
      feature1Title: '9 Dynamic Modules',
      feature1Sub: 'Comprehensive curriculum',
      feature2Title: 'Mentored Practicum',
      feature2Sub: 'Supervised client case studies',
      ctaExplore: 'Explore 9 Modules',
      ctaApply: 'Apply for Next Cohort',
      curriculumSnapshot: 'Curriculum Snapshot:',
    },
    meetAlia: {
      badge: 'Meet Your Guide & Academy Founder',
      name: 'Alia Alblooki',
      title: 'Holistic Wellness Coach • Psychological Balance & Self-Development Specialist',
      p1:
        'Welcome to Roots of Balance (مساحة ناعمة للعافية الشاملة). My journey was born out of a profound passion to help individuals cultivate genuine mind-body equilibrium, sustainable nourishment, and emotional resilience without falling into performative wellness traps.',
      p2:
        'Whether facilitating one-on-one personal coaching or mentoring passionate trainees in the Roots of Balance Academy, my philosophy is grounded, deeply compassionate, and committed to empowering lasting personal transformation.',
      readBio: 'Read Full Biography & Verified Credentials',
    },
    testimonialsSection: {
      badge: 'Authentic Experiences',
      title: 'Words from Clients & Academy Graduates',
      sub: 'Real reflections from individuals and certified practitioners who have walked this path.',
    },
    ctaBottom: {
      title: 'Ready to Begin Your Journey?',
      desc:
        'Whether you are stepping into a private coaching container or answering the call to become a professional coach, we welcome you to the Roots of Balance community.',
      bookBtn: 'Book Personal Coaching',
      applyBtn: 'Apply to Coach Academy',
    },
    footer: {
      desc:
        'Cultivating mind-body wholeness, nervous system regulation, and grounded self-awareness. Personal coaching containers and certified professional training for future holistic wellness practitioners.',
      coachingColTitle: 'Personal Coaching',
      academyColTitle: 'Coach Academy',
      newsletterTitle: 'Mindful Journal & Free Guide',
      newsletterDesc:
        'Receive gentle reflections, somatic practices, and your complimentary Holistic Grounding Guide.',
      placeholderEmail: 'Enter your email',
      copyright:
        'All rights reserved. Holistic wellness coaching is designed for personal development and does not replace medical or psychological diagnosis.',
      credentialsEthics: 'Credentials & Ethics',
      contact: 'Contact',
      coachLogin: 'Coach Login',
    },
  },
  ar: {
    nav: {
      about: 'عن علياء',
      services: 'جلسات التدريب',
      academy: 'الأكاديمية التدريبية',
      blog: 'المقالات والوعي',
      contact: 'تواصل معنا',
      bookSession: 'احجز جلسة خاصة',
      becomeCoach: 'انضم كمدرب معتمد',
      bannerText: 'التسجيل مفتوح الآن لدفعة ربيع 2027 لتدريب مدربي العافية الشاملة',
      bannerLink: 'استكشف المنهاج ←',
      switchLang: 'English',
    },
    hero: {
      tagline: 'جذور التوازن • Roots of Balance',
      titleLine1: 'التحول الحقيقي يبدأ',
      titleLine2: 'من الجذور.',
      description:
        'مساحة ناعمة للعافية الشاملة، تطوير الذات، العلاج النفسي، التغذية الرياضية، والجمال الجذري. جلسات خاصة فردية لإعادة التوازن النفسي، وبرامج احترافية معتمدة لمن يريد احتراف تدريب العافية الشاملة.',
      journeyATitle: 'جلسات العافية الفردية',
      journeyASub: 'تخفيف التوتر، تنظيم الجهاز العصبي، واستعادة التوازن النفسي والعاطفي.',
      journeyBTitle: 'أكاديمية تدريب المدربين',
      journeyBSub: 'منهاج متكامل من 9 وحدات لتدريب وتخريج مدربي عافية شاملة محترفين.',
      socialProof: 'خبرة متخصصة ومئات الأرواح التي استعادت توازنها الداخلي وسلامها الجسدي.',
      quoteText:
        'التحول المستدام يبدأ عندما نغذي جذورنا الداخلية — موحدين هدوء العقل، حيوية الجسد، والوعي الذاتي العميق.',
      quoteAuthor: '— علياء البلوكي، المؤسسة',
    },
    philosophy: {
      subtitle: 'فلسفتنا ورؤيتنا',
      title: 'ماذا يعني تدريب الإنسان ككل متكامل؟',
      intro:
        'تركز الأساليب التقليدية غالباً على تجزئة الإنسان إلى زوايا منفصلة — معالجة التفكير بمعزل عن الجسد أو نمط الحياة. في جذور التوازن، ندرك أن العافية الحقيقية هي منظومة حيوية واحدة متناغمة.',
      p1Title: 'التوازن النفسي والعاطفي',
      p1Desc:
        'بناء الأمان الداخلي والانسجام النفسي لتجاوز الإجهاد الذهني والمعتقدات المقيدة.',
      p2Title: 'حيوية الجذور والتغذية الرياضية',
      p2Desc:
        'تغذية الجسد بالكامل، التوازن الهرموني، وحركة ذكية تعزز الطاقة من الأعماق.',
      p3Title: 'الوعي الذاتي الجذري',
      p3Desc:
        'استكشاف داخلي لطيف وصادق يفكك عادات الاستنزاف ويبني ثقة عميقة بالذات.',
      p4Title: 'أخلاقيات التدريب المهني',
      p4Desc:
        'إعداد ممارسين يقودون بجلسات استماع متعاطفة، حدود واضحة، ونزاهة مهنية عالية.',
    },
    servicesSection: {
      subtitle: 'المسار الأول: للعملاء',
      title: 'جلسات العافية الشاملة الفردية',
      intro:
        'جلسات فردية مخصصة مصممة لمساعدتك على تفكيك التوتر المزمن، إعادة ضبط الجهاز العصبي، واستعادة السلام الداخلي.',
      viewAll: 'عرض جميع باقات الجلسات',
      investment: 'الاستثمار',
      bookNow: 'احجز جلستك',
    },
    academySection: {
      badge: 'الركيزة التعليمية والمهنية',
      title: 'احترف تدريب العافية الشاملة واصنع أثراً حقيقياً',
      desc:
        'يشهد عالمنا اليوم موجة غير مسبوقة من الإرهاق والانفصال عن الجسد. انضم إلى أكاديمية جذور التوازن لإتقان علم نفس التدريب، الاستماع الجسدي، والأخلاقيات المهنية الرفيعة.',
      feature1Title: '9 وحدات تدريبية مكثفة',
      feature1Sub: 'منهاج شامل وتطبيقي',
      feature2Title: 'تطبيق عملي بإشراف مباشر',
      feature2Sub: 'دراسات حالات حية وملاحظات إرشادية',
      ctaExplore: 'استكشف الوحدات التسع',
      ctaApply: 'قدم طلب الانضمام للدفعة',
      curriculumSnapshot: 'لمحة سريعة من المنهاج:',
    },
    meetAlia: {
      badge: 'تعرف على مرشدتك ومؤسسة الأكاديمية',
      name: 'علياء البلوكي',
      title: 'مدربة عافية شاملة • متخصصة في التوازن النفسي وتطوير الذات',
      p1:
        'مرحباً بكِ في جذور التوازن (مساحة ناعمة للعافية الشاملة). وُلدت هذه المساحة من شغف عميق لمساعدة النساء والرجال على تحقيق توازن حقيقي بين الجسد والنفس، التغذية السليمة، والمرونة العاطفية بعيداً عن الصيحات الزائفة.',
      p2:
        'سواء كنت تبحث عن جلسات خاصة لاستعادة عافيتك أو ترغب في الانضمام لأكاديمية التدريب لتصبح مدرباً مؤهلاً، فإن منهجي يرتكز على الاحتواء، العلم، والتعاطف لبناء تحول يدوم مدى الحياة.',
      readBio: 'اقرأ السيرة الذاتية والمؤهلات المعتمدة',
    },
    testimonialsSection: {
      badge: 'تجارب حقيقية',
      title: 'كلمات من قلوب عملائنا وخريجي الأكاديمية',
      sub: 'تجارب صادقة لأشخاص خاضوا هذه الرحلة وصنعوا فارقاً حقيقياً في حياتهم.',
    },
    ctaBottom: {
      title: 'هل أنت مستعد لبدء رحلتك نحو التوازن؟',
      desc:
        'سواء كنت ترغب في الانضمام لجلسة تدريب فردية خاصة أو تلبية شغفك لتصبح مدرب عافية معتمداً، نرحب بك بكل دفء في مجتمع جذور التوازن.',
      bookBtn: 'احجز جلسة خاصة',
      applyBtn: 'قدم في أكاديمية المدربين',
    },
    footer: {
      desc:
        'مساحة ناعمة مخصصة للعافية الشاملة، التوازن النفسي، تطوير الذات، والتدريب المهني لإعداد الجيل القادم من مدربي العافية.',
      coachingColTitle: 'الجلسات الخاصة',
      academyColTitle: 'أكاديمية المدربين',
      newsletterTitle: 'المجلة والدليل المجاني',
      newsletterDesc:
        'احصلي على تأملات دورية وتطبيقات عملية وحمّلي دليلكِ المجاني للعافية الشاملة.',
      placeholderEmail: 'أدخلي بريدكِ الإلكتروني',
      copyright:
        'جميع الحقوق محفوظة. جلسات العافية الشاملة مصممة للتطوير الشخصي وبناء التوازن ولا تغني عن الاستشارة الطبية أو النفسية السريرية.',
      credentialsEthics: 'المؤهلات والأخلاقيات',
      contact: 'تواصل معنا',
      coachLogin: 'دخول المدربة',
    },
  },
};

