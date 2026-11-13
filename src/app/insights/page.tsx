import Link from 'next/link';

export const metadata = {
  title: 'المعرفة | جذور التوازن',
  description: 'مكتبة معرفية تحول األفكار إلى فهم أعمق وتطبيق عملي. بودكاست ومقالات في القيادة الذاتية والعافية الشاملة.',
};

export default function InsightsPage() {
  const articles = [
    {
      title: "الوعي قبل المعرفة",
      category: "الوعي والقيادة الذاتية",
      type: "بودكاست",
      desc: "كم من المعلومات نحتاج فعلاً؟ حلقة تناقش كيف نختار ما نتعلمه ونربطه بقيمنا بدلاً من تراكم الأفكار دون تمييز.",
      reflection: "ما الفكرة التي أعرفها جيداً لكنني لم أبدأ في تطبيقها بعد؟"
    },
    {
      title: "كيف تكون راقياً مع نفسك؟",
      category: "الوعي والقيادة الذاتية",
      type: "مقال وتأمل",
      desc: "سبعة أوجه لاحترام الذات: من التعامل مع المشاعر إلى الوفاء بالوعود الشخصية ووضع الحدود.",
      reflection: "هل أتعامل مع نفسي بالطريقة التي أطلب بها من الآخرين أن يعاملوني بها؟"
    },
    {
      title: "المرونة ليست أن تتحمّل أكثر",
      category: "تغيير السلوك والمرونة",
      type: "حلقة وبودكاست",
      desc: "تأمل في الفرق بين المرونة الحقيقية والاستمرار في استنزاف النفس تحت اسم التحمل.",
      reflection: "أين أحتاج إلى التوقف بدلاً من الضغط على نفسي للاستمرار؟"
    },
    {
      title: "متى يتحول الحب إلى فقدان للذات؟",
      category: "العلاقات والحدود",
      type: "مقال وفيديو",
      desc: "كيف ننتبه إلى حدودنا واحتياجاتنا داخل العلاقات من غير أحكام سريعة أو تعميمات؟",
      reflection: "ما الحاجة التي أتجاهلها عندما أوافق على أمر لا يناسبني؟"
    },
    {
      title: "سلسلة جذور الجمال | Roots of Beauty",
      category: "العافية الشاملة",
      type: "سلسلة معرفية",
      desc: "الجمال ليس سطحاً نلمّعه فحسب؛ إنه عناية واعية بالتغذية والنوم والحركة والعلاقة بالنفس، بعيداً عن الوعود غير المثبتة.",
      reflection: "كيف أمارس العناية بنفسي بدافع المحبة لا بدافع الخوف؟"
    },
    {
      title: "من المعرفة إلى الفعل",
      category: "تغيير السلوك",
      type: "مقال تطبيقي",
      desc: "ماذا نفعل عندما نعرف الخطوة المناسبة لكننا لا نطبقها؟ موضوعات وتجارب صغيرة في بناء العادات والاستمرارية.",
      reflection: "ما أصغر خطوة يمكنني اتخاذها اليوم ولا تتطلب جهداً كبيراً؟"
    }
  ];

  return (
    <div className="min-h-screen bg-sand-50" dir="rtl">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#f5f0e8] to-sand-50 pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
            مكتبة جذور التوازن
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-earth-950 font-normal leading-[1.35] sm:leading-[1.4] pb-2">
            المعرفة التي تمنحك وضوحاً...<br />
            <span className="text-sage-700 block mt-2">والممارسة التي تصنع الفرق</span>
          </h1>
          <p className="text-base sm:text-lg text-earth-700 font-light leading-relaxed max-w-2xl mx-auto">
            مساحة للأفكار والأسئلة والأدوات التي تساعدك على فهم نفسك وعاداتك وعالقاتك،
            والنظر إلى العافية الشاملة باعتبارها ممارسة يومية تبدأ بالوعي وتمتد إلى الحياة والعمل.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            "الكل",
            "الوعي والقيادة الذاتية",
            "العلاقات والحدود",
            "العافية الشاملة وجذور الجمال",
            "تغيير السلوك والمرونة",
            "العمل والقيادة والتواصل"
          ].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                i === 0
                  ? "bg-sage-700 text-white"
                  : "bg-white border border-sand-300 text-earth-700 hover:bg-sand-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art) => (
            <div
              key={art.title}
              className="bg-white rounded-2xl border border-sand-200 p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-sand-100 text-earth-700 font-medium">
                    {art.category}
                  </span>
                  <span className="text-sage-700">{art.type}</span>
                </div>
                <h3 className="font-serif text-xl text-earth-900 leading-snug">{art.title}</h3>
                <p className="text-xs text-earth-600 font-light leading-relaxed">{art.desc}</p>
              </div>

              <div className="pt-4 border-t border-sand-100 space-y-2">
                <span className="text-[11px] font-semibold text-sage-800 block">سؤال للتأمل:</span>
                <p className="text-xs text-earth-700 italic font-light">{art.reflection}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Note */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="bg-sage-50 border border-sage-200 rounded-2xl p-6 sm:p-8 space-y-3">
          <h4 className="font-serif text-lg text-earth-900">فكرة تتبعها خطوة</h4>
          <p className="text-xs sm:text-sm text-earth-700 font-light leading-relaxed max-w-xl mx-auto">
            قد نخرج من حلقة واحدة بفكرة مؤثرة، لكن الأثر يتشكل حين نسمح للفكرة بأن تغيّر سؤالاً نطرحه
            أو عادة نمارسها. لا تحتاجين إلى قراءة كل شيء اليوم؛ اختاري موضوعاً واحداً واسألي نفسك:
            ما الفكرة التي تستحق أن تتحول إلى ممارسة في حياتي؟
          </p>
          <div className="pt-2">
            <Link
              href="/return-to-self"
              className="inline-flex items-center gap-1 text-xs font-semibold text-sage-800 hover:underline"
            >
              <span>تريدين التعمق أكثر؟ استكشفي برنامج العودة إلى الذات</span> &larr;
            </Link>
          </div>
        </div>
        <p className="text-[11px] text-earth-400 font-light">
          المواد المنشورة للتثقيف والتطوير الشخصي، ولا تحل محل التشخيص أو العلاج أو الاستشارة الفردية من المختصين.
        </p>
      </section>
    </div>
  );
}

