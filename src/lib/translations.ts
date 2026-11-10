export type Language = 'en' | 'ar';

export interface DimensionItem {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  deepDive: string;
  aspects: string[];
  inquiry: string;
}

export interface PillarItem {
  id: string;
  title: string;
  concept: string;
  reflectionQuestion: string;
  guidance: string;
}

export interface Translations {
  nav: {
    about: string;
    services: string;
    academy: string;
    blog: string;
    contact: string;
    bookSession: string;
    becomeCoach: string;
    exploreResources: string;
    switchLang: string;
    taglineBadge: string;
  };
  hero: {
    tagline: string;
    headline: string;
    subtext: string;
    cta: string;
    scrollHint: string;
  };
  whatIsHolistic: {
    badge: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    quote: string;
    quoteAuthor: string;
    cta: string;
    interconnectedTitle: string;
    interconnectedDesc: string;
  };
  dimensions: {
    badge: string;
    title: string;
    lead: string;
    exploreFurther: string;
    reflectionLabel: string;
    items: DimensionItem[];
  };
  selfDiscovery: {
    badge: string;
    title: string;
    lead: string;
    reflectivePrompt: string;
    cta: string;
    pillars: PillarItem[];
  };
  philosophy: {
    badge: string;
    title: string;
    lead: string;
    nameOriginTitle: string;
    nameOriginDesc: string;
    journeyNotDestinationTitle: string;
    journeyNotDestinationDesc: string;
    valuesTitle: string;
    values: {
      title: string;
      desc: string;
    }[];
    cta: string;
  };
  meetSarah: {
    badge: string;
    name: string;
    title: string;
    greeting: string;
    p1: string;
    p2: string;
    quote: string;
    cta: string;
  };
  exploreLearn: {
    badge: string;
    title: string;
    lead: string;
    cta: string;
    card1Title: string;
    card1Desc: string;
    card1Link: string;
    card2Title: string;
    card2Desc: string;
    card2Link: string;
    card3Title: string;
    card3Desc: string;
    card3Link: string;
    card4Title: string;
    card4Desc: string;
    card4Link: string;
  };
  finalInvitation: {
    headline: string;
    supporting: string;
    cta: string;
  };
  footer: {
    desc: string;
    dimensionsColTitle: string;
    resourcesColTitle: string;
    newsletterTitle: string;
    newsletterDesc: string;
    placeholderEmail: string;
    subscribedSuccess: string;
    copyright: string;
    credentialsEthics: string;
    contact: string;
    coachLogin: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      about: 'عن علياء والفلسفة',
      services: 'جلسات التوجيه',
      academy: 'أكاديمية التدريب',
      blog: 'المقالات والموارد',
      contact: 'تواصل معنا',
      bookSession: 'حجز جلسة استشارية',
      becomeCoach: 'الأكاديمية المعتمدة',
      exploreResources: 'استكشفي الموارد',
      switchLang: 'English',
      taglineBadge: 'مساحة للشفاء الشمولي واكتشاف الذات',
    },
    hero: {
      tagline: 'جذور التوازن • Roots of Balance',
      headline: 'رحلتكِ نحو التوازن تبدأ من الداخل',
      subtext:
        'مساحة لاكتشاف الذات، وفهم أعمق للعلاقة بين العقل والجسد والروح، واستكشاف طرق أكثر وعياً للعيش بتوازن وانسجام.',
      cta: 'اكتشفي عالم التوازن',
      scrollHint: 'تابعي القراءة لاكتشاف أبعاد الشفاء الشمولي',
    },
    whatIsHolistic: {
      badge: 'المدخل إلى الشفاء الشمولي',
      title: 'ما هو الشفاء الشمولي؟',
      lead: 'العافية الحقيقية ليست مجرد خلو الجسد من التعب، بل هي حالة من التناغم الحي والعميق بين كافة أبعاد وجودنا الإنساني.',
      p1: 'غالباً ما نتعامل مع التحديات اليومية بطرق مجزأة؛ فنفصل إجهاد الجسد عن ضجيج الأفكار، أو نعزل التوتر العاطفي عن نمط التنفس والحركة. الشفاء الشمولي يدعونا إلى رؤية الصورة الكاملة: أنتِ لستِ أجزاء منفصلة، بل منظومة واحدة متكاملة تتأثر فيها مشاعركِ بصحة خلاياكِ، وتنعكس فيها طمأنينة روحكِ على توازن جهازكِ العصبي.',
      p2: 'عندما نمنح أنفسنا المساحة الكافية للإصغاء إلى الإشارات الدقيقة التي يرسلها الجسد، نبدأ بتفكيك جذور التوتر بدلاً من الاكتفاء بتهدئة الأعراض السطحية. هذا الفهم العميق هو ما يفتح باب الشفاء الأصيل والمستدام.',
      quote: '«الشفاء الشمولي لا يعني إصلاح ما كُسر، بل تذكّر ما نحن عليه في الأصل: كائنات متكاملة تبحث عن التناغم والسلام الداخلي.»',
      quoteAuthor: 'علياء البلوكي',
      cta: 'اكتشفي مفهوم الشفاء الشمولي',
      interconnectedTitle: 'التكامل الحيوي',
      interconnectedDesc: 'كيف تتشابك خيوط الفكر، والمشاعر، وحيوية الجسد، وصفاء الروح لتنسج جودة حياتكِ اليومية.',
    },
    dimensions: {
      badge: 'أبعاد العافية الأربعة',
      title: 'أبعاد التوازن الإنساني',
      lead: 'لكل بعد من أبعاد حياتنا صوته واحتياجاته الخاصة. استكشفي كيف يتناغم كل بعد ليشكّل نسيج حضوركِ وسلامكِ الداخلي.',
      exploreFurther: 'استكشفي هذا البُعد بمزيد من العمق',
      reflectionLabel: 'سؤال للتأمل الذاتي',
      items: [
        {
          id: 'emotional',
          title: 'التوازن العاطفي',
          tagline: 'Emotional Wellbeing',
          desc: 'احتواء المشاعر بلطف دون قمع أو أحكام مسبقة، وبناء المرونة النفسية التي تتيح لكِ خوض تقلبات الحياة بثبات وأمان داخلي.',
          deepDive: 'يتجلى التوازن العاطفي عندما نتوقف عن تصنيف مشاعرنا إلى "جيدة" و"سيئة"، ونبدأ في استقبال كل شعور كرسالة صادقة ترشدنا إلى ما يحتاجه قلبنا من راحة، أو حماية، أو مساحة تعبير حقيقية.',
          aspects: ['تنظيم المشاعر ومرونة القلب', 'التخلص من جلد الذات والتأنيب', 'خلق مساحات أمان داخلية'],
          inquiry: 'ما هو الشعور الذي يحاول لفت انتباهكِ اليوم، وكيف يمكنكِ استقباله بفضول ورأفة؟',
        },
        {
          id: 'mental',
          title: 'الصحة النفسية والذهنية',
          tagline: 'Mental Wellbeing',
          desc: 'تهدئة حوار العقل الداخلي، وتفكيك المعتقدات المقيدة، وبناء وضوح فكري يمنحكِ القدرة على اتخاذ قرارات متوازنة.',
          deepDive: 'عقولنا معتادة على الركض المتواصل والتخطيط الدائم. عندما نتعلم فن الملاحظة الواعية دون التماهي مع كل فكرة عابرة، نستعيد صفاء الذهن ونتحرر من أنماط القلق المزمن والتفكير المفرط.',
          aspects: ['الوعي بأنماط التفكير التلقائية', 'الحد من الإجهاد المعرفي', 'تعزيز الوضوح والتركيز الهادئ'],
          inquiry: 'أي من الأفكار التي تشغل بالكِ حالياً تنتمي إلى الماضي أو المستقبل، ولا تخدم لحظتكِ الحاضرة؟',
        },
        {
          id: 'physical',
          title: 'الصحة الجسدية وحيوية الجذور',
          tagline: 'Physical Wellbeing',
          desc: 'إصغاء عميق لإشارات الجسد، وتغذية خلوية متوازنة، ونوم ترميمي، وحركة ناعمة تعيد للجهاز العصبي هدوءه الفطري.',
          deepDive: 'الجسد هو البيت الذي تسكنه تجاربنا. إنه يخزن التوترات والذكريات، كما يعبر بصدق عن كل ما نتجاهله. رعايته ليست مجرد نظام حمية صارم، بل علاقة احترام متبادلة تبدأ من التنفس العميق والراحة الكافية.',
          aspects: ['تنظيم الجهاز العصبي والحواس', 'التغذية الحيوية الداعمة للطاقة', 'الحركة المتناغمة مع دورات الجسد'],
          inquiry: 'أين يحمل جسدكِ التوتر في هذه اللحظة، وما هي الحركة أو الراحة التي يطلبها منكِ الآن؟',
        },
        {
          id: 'spiritual',
          title: 'التوازن الروحي والاتصال',
          tagline: 'Spiritual Wellbeing',
          desc: 'إدراك المعنى والغاية، والتجذر في قيمكِ الأصيلة، والشعور بالاتصال العميق مع الكون والحياة من حولكِ.',
          deepDive: 'التوازن الروحي هو ذلك الملاذ الداخلي الذي لا تهزه العواصف الخارجية. إنه الشعور بأن لوجودكِ مغزى، وأن رحلتكِ محاطة بعناية أكبر، وأن الصمت والتأمل هما ينبوع التجدد الحقيقي.',
          aspects: ['وضوح البوصلة والقيم الشخصية', 'الاتصال بالطبيعة واللحظة الآنية', 'السكينة وتغذية الامتنان اليومي'],
          inquiry: 'ما الذي يمنحكِ شعوراً بالمعنى العميق والسكينة، ومتى كانت آخر مرة أفسحتِ له مكاناً في يومكِ؟',
        },
      ],
    },
    selfDiscovery: {
      badge: 'رحلة العودة إلى الذات',
      title: 'مسارات اكتشاف الذات',
      lead: 'اكتشاف الذات ليس رحلة للعثور على شخص جديد، بل هو تجريد لما تراكم فوق جوهركِ الحقيقي من توقعات وضغوط.',
      reflectivePrompt: 'تأملات وأسئلة لاستكشاف أعماقكِ',
      cta: 'ابدئي رحلة اكتشاف الذات',
      pillars: [
        {
          id: 'awareness',
          title: 'الوعي الذاتي (Self-Awareness)',
          concept: 'القدرة على مراقبة أفكاركِ، انفعالاتكِ، وسلوكياتكِ بصدق وبدون لوم.',
          reflectionQuestion: 'ما هي المواقف التي تجعلكِ تفقدين توازنكِ، وما الذي تفعله في جسدكِ قبل أن تدركيه بذهنكِ؟',
          guidance: 'الملاحظة هي الخطوة الأولى نحو التحرر من ردود الفعل التلقائية.',
        },
        {
          id: 'compassion',
          title: 'التعاطف مع الذات (Self-Compassion)',
          concept: 'معاملة نفسكِ بنفس اللطف والدفء الذي تقدمينه لأعز صديقة تعيش لحظة صعبة.',
          reflectionQuestion: 'كيف تتحدثين إلى نفسكِ عندما تخطئين، وهل تقبلين أن يخاطبكِ أحد بنفس النبرة؟',
          guidance: 'النمو الحقيقي يزهر في بيئة من القبول والرحمة، لا تحت وطأة النقد القاسي.',
        },
        {
          id: 'emotional-iq',
          title: 'الذكاء العاطفي (Emotional Wisdom)',
          concept: 'فهم الرسائل الخفية للمشاعر واستثمار طاقتها في اتخاذ قرارات حكيمة متصلة بالحقيقة.',
          reflectionQuestion: 'ما هو الخوف أو الحزن الذي تحاولين تجاهله، وماذا لو استمعتِ إليه لدقيقة واحدة؟',
          guidance: 'المشاعر مثل الأمواج؛ محاولة إيقافها ترهقكِ، بينما ركوبها بوعي يوصلكِ إلى شاطئ الأمان.',
        },
        {
          id: 'personal-growth',
          title: 'النمو والتحول الداخلي (Personal Growth)',
          concept: 'تفكيك الروايات القديمة التي عفا عليها الزمن لبناء نمط حياة يتماشى مع قيمكِ اليوم.',
          reflectionQuestion: 'ما هي الفكرة القديمة عن نفسكِ التي لم تعودي تؤمنين بصحتها؟',
          guidance: 'أنتِ كائن متجدد؛ ليس عليكِ أن تظلي سجينة نسخكِ السابقة.',
        },
        {
          id: 'mindfulness',
          title: 'اليقظة الذهنية والتأمل (Mindfulness)',
          concept: 'الحضور التام في اللحظة الراهنة بعينين مندهشتين وبقلب ساكن.',
          reflectionQuestion: 'كم مرة خلال يومكِ تشعرين بأنفاسكِ حقاً دون الانشغال بشيء آخر؟',
          guidance: 'اللحظة الحاضرة هي المكان الوحيد الذي تملكين فيه زمام السلام والقوة.',
        },
        {
          id: 'boundaries',
          title: 'فهم الاحتياجات والحدود (Needs & Boundaries)',
          concept: 'الاعتراف بحدود طاقتكِ وحماية مساحتكِ الشخصية دون شعور بالذنب أو التبرير.',
          reflectionQuestion: 'ما هو الأمر الذي تقولين له "نعم" بدافع الإحراج بينما يصرخ داخلكِ بكلمة "لا"؟',
          guidance: 'وضع الحدود ليس أنانية، بل هو احترام لنفسكِ وللعلاقات التي تهمكِ.',
        },
      ],
    },
    philosophy: {
      badge: 'فلسفتنا ورؤيتنا',
      title: 'فلسفة جذور التوازن',
      lead: 'لماذا "جذور التوازن"؟ لأن الشجرة الشاهقة ذات الأغصان الوارفة لا تقوى على الرياح إلا إذا كانت جذورها ضاربة في أعماق التربة.',
      nameOriginTitle: 'سر الجذور: ما لا يُرى هو ما يُثمر',
      nameOriginDesc:
        'في عالمنا السريع، يميل الجميع إلى التركيز على المظاهر السطحية: المظهر الخارجي، الإنجازات السريعة، والعلاجات المؤقتة. لكن جذور التوازن تؤمن بأن كل تحول حقيقي ومستدام ينشأ تحت السطح — في الوعي الداخلي، في السكينة، وفي هدوء الجهاز العصبي.',
      journeyNotDestinationTitle: 'التوازن رحلة حية مستمرة، وليس نقطة وصول ثابتة',
      journeyNotDestinationDesc:
        'لا يوجد يوم نعلن فيه أننا وصلنا إلى "التوازن التام" وانتهت الرحلة. التوازن أشبه بعازف موسيقي أو راقص يضبط إيقاعه مع كل خطوة ونغمة. إنه ممارسة يومية ناعمة للاستماع إلى الذات والتكيف مع فصول الحياة المختلفة.',
      valuesTitle: 'القيم التي نسترشد بها',
      values: [
        {
          title: 'الأصالة الصادقة',
          desc: 'نحتفي بالواقعية والإنسانية بعيداً عن وهم الكمال أو الوصفات الجاهزة.',
        },
        {
          title: 'الشمولية والترابط',
          desc: 'رؤية الإنسان ككيان متناغم تتداخل فيه أبعاد الفكر والروح والجسد.',
        },
        {
          title: 'اللطف والتعاطف العميق',
          desc: 'خلق مساحة دافئة تشعر فيها كل زائرة بالأمان والاحترام الكامل.',
        },
        {
          title: 'التمكين المستدام',
          desc: 'تزويدكِ بالأدوات والمعرفة لتكوني أنتِ الحكيمة والمرشدة لحياتكِ.',
        },
      ],
      cta: 'تعرّفي على جذور التوازن',
    },
    meetSarah: {
      badge: 'المرشدة والمؤسسة',
      name: 'علياء البلوكي (Alia Alblooki)',
      title: 'مدربة عافية شاملة • متخصصة في التوازن النفسي وتطوير الذات',
      greeting: 'أهلاً بكِ في مساحتكِ الآمنة للشفاء واكتشاف الذات.',
      p1: 'بدأت رحلتي في عالم الشفاء الشمولي من تجربة شخصية عميقة؛ حيث اختبرت بنفسي كيف يمكن لضغوط الحياة العصرية والمعايير المجتمعية المرهقة أن تفصلنا عن أجسادنا وأرواحنا دون أن نشعر. قادني هذا البحث إلى دراسة العلاقة الوثيقة بين الجهاز العصبي، والوعي العاطفي، والممارسات التأملية العريقة.',
      p2: 'منهجي في "جذور التوازن" ليس تلقيناً للمعلومات، بل هو مرافقة واعية ودافئة. أؤمن بأن لكل إنسان حكمته الفطرية القادرة على الشفاء متى ما تهيأت له البيئة الآمنة، واستمع إلى صوته الداخلي بحب ورأفة.',
      quote: '«مهمتي ليست تغيير من أنتِ، بل إزالة العوائق التي تمنعكِ من التواصل مع نقائكِ وحكمتكِ الدفينة.»',
      cta: 'اكتشفي قصتي',
    },
    exploreLearn: {
      badge: 'بوابة المعرفة والمصادر',
      title: 'استكشفي وتعلّمي',
      lead: 'مكتبة متكاملة من المقالات، والتمارين التأملية، وورش العمل المصممة لمرافقة خطواتكِ نحو حياة أكثر هدوءاً وتوازناً.',
      cta: 'استكشفي مواردنا',
      card1Title: 'المقالات والمحتوى التثقيفي',
      card1Desc: 'قراءات معمقة في علم نفس العافية، التحرر من الإرهاق العصبي، وأسرار التغذية الحيوية.',
      card1Link: '/blog',
      card2Title: 'التأملات والتمارين التطبيقية',
      card2Desc: 'تمارين تنفس واعية، جلسات مسح الجسد، وممارسات يومية لاستعادة الهدوء في لحظات التوتر.',
      card2Link: '/about#practices',
      card3Title: 'ورش العمل والرحلات التعليمية',
      card3Desc: 'مساحات تفاعلية للتعلم الجماعي، تبادل التجارب الإنسانية، وممارسة اليقظة في بيئة داعمة.',
      card3Link: '/contact',
      card4Title: 'أكاديمية جذور التوازن',
      card4Desc: 'منهاج تدريبي مهني متكامل لمن ترغب في تعميق فهمها لاحتراف مرافقة الآخرين كمدربة معتمدة.',
      card4Link: '/academy',
    },
    finalInvitation: {
      headline: 'كل رحلة نحو التوازن تبدأ بخطوة صغيرة من الوعي.',
      supporting: 'امنحي نفسك مساحة للتأمل، والتعلّم، واكتشاف ما تحتاجينه حقاً.',
      cta: 'ابدئي رحلتك',
    },
    footer: {
      desc: 'مساحة معرفية وإنسانية مخصصة للشفاء الشمولي، واكتشاف الذات، وفهم التناغم العميق بين الجسد والعقل والروح.',
      dimensionsColTitle: 'أبعاد العافية',
      resourcesColTitle: 'المعرفة والموارد',
      newsletterTitle: 'مجلة التأمل ودليل التوازن',
      newsletterDesc: 'انضمي إلى مجتمعنا لتلقي تأملات دورية لطيفة وأدوات عملية لإثراء رحلتكِ اليومية.',
      placeholderEmail: 'أدخلي بريدكِ الإلكتروني',
      subscribedSuccess: 'شكراً لانضمامكِ. تم إرسال رسالة الترحيب إلى بريدكِ.',
      copyright: 'جميع الحقوق محفوظة. جذور التوازن مساحة معرفية وتطويرية، ولا تُعد بديلاً عن الرعاية الطبية أو النفسية السريرية المتخصصة.',
      credentialsEthics: 'المعايير والأخلاقيات',
      contact: 'تواصل معنا',
      coachLogin: 'بوابة الإدارة',
    },
  },
  en: {
    nav: {
      about: 'About Alia & Philosophy',
      services: 'Coaching Pathways',
      academy: 'Training Academy',
      blog: 'Journal & Resources',
      contact: 'Contact',
      bookSession: 'Book Consultation',
      becomeCoach: 'Coach Academy',
      exploreResources: 'Explore Resources',
      switchLang: 'العربية',
      taglineBadge: 'A Sanctuary for Holistic Healing & Self-Discovery',
    },
    hero: {
      tagline: 'Roots of Balance • جذور التوازن',
      headline: 'Your Journey Toward Balance Begins Within',
      subtext:
        'A sanctuary for self-discovery, a deeper understanding of the mind, body, and soul connection, and exploring conscious pathways to living in balance and harmony.',
      cta: 'Discover the World of Balance',
      scrollHint: 'Scroll to explore the dimensions of holistic wellbeing',
    },
    whatIsHolistic: {
      badge: 'Gateway to Wholeness',
      title: 'What Is Holistic Healing?',
      lead: 'True wellbeing is not merely the absence of illness or fatigue, but a living, radiant symphony between all dimensions of our human existence.',
      p1: 'Modern life often encourages us to compartmentalize: treating mental exhaustion separately from bodily aches, or isolating emotional overwhelm from our breathing patterns and daily rhythms. Holistic healing invites us to see the whole picture: you are not separate fragments, but an integrated ecosystem where your thoughts influence your cellular vitality, and the peace of your soul steadies your nervous system.',
      p2: 'When we give ourselves the space to listen to the subtle cues our body has been whispering, we begin addressing root causes rather than continually managing surface symptoms. This profound understanding is where genuine, sustainable healing takes root.',
      quote: '“Holistic healing is not about fixing what is broken, but remembering who we truly are: integrated beings yearning for harmony and inner peace.”',
      quoteAuthor: 'Alia Alblooki',
      cta: 'Explore the Concept of Holistic Healing',
      interconnectedTitle: 'The Living Interconnection',
      interconnectedDesc: 'How thoughts, emotions, physical vitality, and spiritual clarity weave the fabric of your daily experience.',
    },
    dimensions: {
      badge: 'The Four Pillars of Being',
      title: 'The Dimensions of Wellbeing',
      lead: 'Every dimension of our being carries its own voice and needs. Discover how they weave together to cultivate grounded presence and enduring peace.',
      exploreFurther: 'Explore this dimension in depth',
      reflectionLabel: 'Self-Inquiry Reflection',
      items: [
        {
          id: 'emotional',
          title: 'Emotional Wellbeing',
          tagline: 'التوازن العاطفي',
          desc: 'Holding your emotions with gentle presence rather than suppression, cultivating the inner resilience to navigate life’s ebbs and flows with steady grace.',
          deepDive: 'Emotional balance begins when we stop labeling feelings as “good” or “bad” and start greeting every emotion as an honest messenger revealing what our heart requires: rest, safe boundaries, or authentic expression.',
          aspects: ['Emotional regulation and heart resilience', 'Releasing inner harshness and guilt', 'Creating sacred internal safety'],
          inquiry: 'What feeling is asking for your gentle attention today, and how can you welcome it with compassion?',
        },
        {
          id: 'mental',
          title: 'Mental Wellbeing',
          tagline: 'الصحة النفسية والذهنية',
          desc: 'Quietening the ceaseless internal monologue, unravelling limiting beliefs, and cultivating a serene clarity that guides balanced decisions.',
          deepDive: 'Our minds are conditioned for continuous planning and vigilance. When we practice mindful observation without fusing with every passing thought, we reclaim cognitive spaciousness and disarm chronic anxious loops.',
          aspects: ['Observing automatic thought patterns', 'Easing cognitive overwhelm', 'Nurturing focused, restful clarity'],
          inquiry: 'Which recurring thoughts belong to the past or an imagined future, rather than serving your present truth?',
        },
        {
          id: 'physical',
          title: 'Physical Wellbeing & Root Vitality',
          tagline: 'الصحة الجسدية وحيوية الجذور',
          desc: 'Deeply attuning to somatic cues, nourishing cellular health, welcoming restorative sleep, and moving in harmony with the body’s innate wisdom.',
          deepDive: 'The body is the living sanctuary of all our memories and experiences. It holds unspoken tensions and speaks truthfully whenever we ignore our limits. Caring for it is a sacred dialogue of deep breath, real nourishment, and true rest.',
          aspects: ['Nervous system regulation and vagal tone', 'Vital cellular nutrition and hydration', 'Movement aligned with natural cycles'],
          inquiry: 'Where is your body holding tension right now, and what gentle release is it asking you for?',
        },
        {
          id: 'spiritual',
          title: 'Spiritual Wellbeing & Connection',
          tagline: 'التوازن الروحي والاتصال',
          desc: 'Aligning with purpose, grounding in your authentic values, and feeling intimately connected to life, nature, and the greater whole.',
          deepDive: 'Spiritual wellbeing is that deep inner harbor that remains calm even when outer storms rage. It is the awareness that your existence holds meaning, that you belong to life, and that stillness is the wellspring of true renewal.',
          aspects: ['Clarity of inner compass and values', 'Intimacy with nature and the present moment', 'Inner serenity and cultivated daily gratitude'],
          inquiry: 'What brings you a sense of quiet reverence, and when was the last time you allowed yourself to pause within it?',
        },
      ],
    },
    selfDiscovery: {
      badge: 'The Sacred Journey Within',
      title: 'The Journey of Self-Discovery',
      lead: 'Self-discovery is not about fabricating a brand-new persona; it is the gentle unravelling of layers, expectations, and noise that have veiled your original essence.',
      reflectivePrompt: 'Contemplative Inquiries for Inner Stillness',
      cta: 'Begin the Journey of Self-Discovery',
      pillars: [
        {
          id: 'awareness',
          title: 'Self-Awareness',
          concept: 'The capacity to observe your thoughts, somatic reactions, and emotional triggers with lucid honesty and zero condemnation.',
          reflectionQuestion: 'What recurring situations trigger tension in you, and how does your body signal them before your mind catches up?',
          guidance: 'Observation is the master key that dissolves automatic unconscious reactions.',
        },
        {
          id: 'compassion',
          title: 'Self-Compassion',
          concept: 'Treating yourself with the exact tenderness and patience you would offer a beloved friend navigating a tender moment.',
          reflectionQuestion: 'How do you speak to yourself when you stumble, and would you ever speak that way to someone you love?',
          guidance: 'Genuine transformation blossoms in warmth and acceptance, never under the whip of self-criticism.',
        },
        {
          id: 'emotional-iq',
          title: 'Emotional Wisdom',
          concept: 'Deciphering the deeper messages carried by your feelings and channeling their energy toward authentic, grounded action.',
          reflectionQuestion: 'What fear or sorrow have you been avoiding, and what might happen if you sat with it gently for one minute?',
          guidance: 'Emotions are like ocean tides; resisting them exhausts you, whereas meeting them with breath carries you safely to shore.',
        },
        {
          id: 'personal-growth',
          title: 'Personal Growth & Evolution',
          concept: 'Retiring outdated narratives that no longer fit who you are, making room for a life aligned with your true values.',
          reflectionQuestion: 'What old narrative about who you are is ready to be released with gratitude?',
          guidance: 'You are an evolving being; you do not have to remain a prisoner of your previous chapters.',
        },
        {
          id: 'mindfulness',
          title: 'Mindfulness & Contemplation',
          concept: 'Inhabiting the present moment with curious eyes and an unhurried, receptive heart.',
          reflectionQuestion: 'How often throughout your day do you truly feel the breath filling your lungs without rushing toward the next task?',
          guidance: 'The present moment is the only place where peace, agency, and authentic life truly reside.',
        },
        {
          id: 'boundaries',
          title: 'Honoring Needs & Boundaries',
          concept: 'Recognizing your energetic limits and protecting your sacred space without apology or defensive explanation.',
          reflectionQuestion: 'Where are you saying “yes” out of guilt or habit while your body is quietly crying “no”?',
          guidance: 'Boundaries are not selfish walls; they are the devoted caretakers of your capacity to love and thrive.',
        },
      ],
    },
    philosophy: {
      badge: 'Our Guiding Philosophy',
      title: 'The Philosophy of Roots of Balance',
      lead: 'Why “Roots of Balance”? Because an ancient olive tree with spreading, fruitful branches can only withstand fierce winds if its roots drink deeply from the earth.',
      nameOriginTitle: 'The Secret of the Roots: What Is Unseen Nourishes What Blooms',
      nameOriginDesc:
        'In a fast-paced world, culture obsesses over immediate surface results: rapid fixes, external aesthetics, and fleeting milestones. Roots of Balance is founded on the ancient truth that all lasting transformation begins unseen—within nervous system safety, internal stillness, and aligned emotional roots.',
      journeyNotDestinationTitle: 'Balance is a Living Practice, Never a Static Destination',
      journeyNotDestinationDesc:
        'There is no magical day on which we arrive at “permanent balance” and stop growing. Balance is like a musician tuning their instrument or a dancer adjusting their center of gravity with every movement. It is a daily, compassionate dialogue with your changing seasons.',
      valuesTitle: 'Our Guiding Principles',
      values: [
        {
          title: 'Radical Authenticity',
          desc: 'We honor human imperfection and honesty over polished pretenses or one-size-fits-all dogmas.',
        },
        {
          title: 'Holistic Interconnectedness',
          desc: 'Viewing the human as an inseparable continuum where mind, body, and spirit constantly converse.',
        },
        {
          title: 'Deep Compassionate Space',
          desc: 'Creating an unconditional sanctuary where every seeker feels seen, respected, and fundamentally safe.',
        },
        {
          title: 'Sustainable Empowerment',
          desc: 'Equipping you with timeless wisdom and somatic tools to become the true sovereign guide of your life.',
        },
      ],
      cta: 'Discover the Philosophy of Roots of Balance',
    },
    meetSarah: {
      badge: 'Founder & Holistic Guide',
      name: 'Alia Alblooki',
      title: 'Holistic Wellness Coach & Psychological Balance Specialist',
      greeting: 'Welcome to your sanctuary for healing, mindful awareness, and self-discovery.',
      p1: 'My journey into holistic wellbeing began from a deeply personal reckoning. Like so many seekers, I experienced how the relentless tempo of modern life, unspoken societal conditioning, and prolonged stress quietly dislodge us from our bodies. This realization led me to dedicate my life to the study of the nervous system, somatic integration, emotional wisdom, and contemplative wisdom traditions.',
      p2: 'My approach at Roots of Balance is not prescriptive instruction, but warm, compassionate accompaniment. I believe that every human carries an innate inner compass for healing; all that is needed is an unhurried, safe environment where one can finally hear the gentle whisper of truth.',
      quote: '“My role is not to teach you who you should be, but to gently remove the debris that prevents you from resting in who you already are.”',
      cta: 'Read My Story',
    },
    exploreLearn: {
      badge: 'Knowledge & Resource Sanctuary',
      title: 'Explore & Learn',
      lead: 'An curated library of reflections, somatic practices, contemplative articles, and guided learning designed to accompany your steps.',
      cta: 'Explore Our Resources',
      card1Title: 'Articles & Reflective Readings',
      card1Desc: 'In-depth essays on nervous system regulation, somatic psychology, emotional release, and conscious living.',
      card1Link: '/blog',
      card2Title: 'Reflections & Somatic Exercises',
      card2Desc: 'Gentle breath sequences, body scans, grounding rituals, and self-soothing practices for high-stress days.',
      card2Link: '/about#practices',
      card3Title: 'Workshops & Communal Journeys',
      card3Desc: 'Interactive workshops and experiential spaces to explore mindfulness and holistic vitality in community.',
      card3Link: '/contact',
      card4Title: 'The Roots of Balance Academy',
      card4Desc: 'A rigorous, heartfelt training pathway for those called to deepen their mastery and mentor future seekers.',
      card4Link: '/academy',
    },
    finalInvitation: {
      headline: 'Every journey toward balance begins with one small moment of awareness.',
      supporting: 'Grant yourself the grace to pause, reflect, learn, and discover what your heart truly needs.',
      cta: 'Begin Your Journey',
    },
    footer: {
      desc: 'An educational and contemplative sanctuary dedicated to holistic healing, self-discovery, and the profound harmony between mind, body, and spirit.',
      dimensionsColTitle: 'Dimensions of Wellbeing',
      resourcesColTitle: 'Knowledge & Library',
      newsletterTitle: 'The Mindful Journal',
      newsletterDesc: 'Join our gentle circle to receive periodic reflections, seasonal practices, and our grounding guide.',
      placeholderEmail: 'Enter your email address',
      subscribedSuccess: 'Thank you for joining. Our welcoming reflection has been sent to your inbox.',
      copyright: 'All rights reserved. Roots of Balance is an educational and self-development platform and does not replace licensed medical or psychiatric care.',
      credentialsEthics: 'Ethics & Integrity',
      contact: 'Connect',
      coachLogin: 'Admin Portal',
    },
  },
};
