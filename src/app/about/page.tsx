import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'عن علياء البلوكي | جذور التوازن',
  description: 'خبرة مهنية متعددة المسارات، ورؤية واحدة: التوسع يبدأ من الداخل واألثر يظهر في الحياة والعمل.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sand-50" dir="rtl">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#f5f0e8] to-sand-50 pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-sand-200">
                <Image
                  src="/images/alia-alblooki.jpg"
                  alt="علياء البلوكي"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-8 space-y-5 text-center md:text-right">
              <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
                عن مؤسسة جذور التوازن
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-earth-950 font-normal leading-tight">
                أؤمن أن التوسع الحقيقي<br />
                <span className="text-sage-700">يبدأ من الداخل</span>
              </h1>
              <p className="text-sm font-medium text-earth-900">
                علياء البلوكي | مؤسسة جذور التوازن، مدربة ومستشارة في العافية الشاملة وتطوير الذات،
                ولديها خلفية في التدريب والقيادة والتطوير المؤسسي.
              </p>
              <p className="text-sm text-earth-700 font-light leading-relaxed">
                أجمع بين الخبرة المهنية والاهتمام بالإنسان: كيف نفهم أنفسنا بصورة أعمق، ونحوّل ما نعرفه
                إلى قرارات ومهارات وعادات يمكن ملاحظتها في حياتنا وعملنا؟ في «جذور التوازن» لا أقدّم صورة
                مثالية عن الحياة؛ بل مساحة للتعلّم والتطبيق وإعادة النظر في اختياراتنا بوعي واحترام لواقع كل شخص.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                <Link
                  href="/individuals"
                  className="px-6 py-3 rounded-full bg-sage-700 text-white text-xs font-medium hover:bg-sage-800 transition"
                >
                  استكشفي مسار الأفراد
                </Link>
                <Link
                  href="/organizations"
                  className="px-6 py-3 rounded-full border border-earth-700 text-earth-800 text-xs font-medium hover:bg-sand-100 transition"
                >
                  تعرّفوا إلى خدمات المؤسسات
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Story */}
      <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-earth-900">قصة الرؤية</h2>
        <div className="space-y-4 text-sm sm:text-base text-earth-700 font-light leading-relaxed">
          <p>
            لا تبدأ كل التحولات بتغيير كبير في الخارج. أحياناً تبدأ بسؤال بسيط: هل الحياة التي أعيشها تعبّر عني حقاً؟
            هذا السؤال يقودنا إلى ما هو أعمق من ترتيب الأولويات: إلى فهم الاحتياجات، والقيم، والحدود،
            والطريقة التي نتعامل بها مع أنفسنا والآخرين.
          </p>
          <p>
            على امتداد خبرتي في التدريب والتطوير والعمل المؤسسي، ازداد اهتمامي بالعلاقة بين المهارة والإنسان الذي يستخدمها.
            فقد نعرف كيف نخطط أو نتواصل أو نقود، لكن تطبيق هذه المعرفة يحتاج وعياً ومسؤولية وكفاءة ذاتية وقدرة على التوازن.
            ومن هنا تتلاقى مسارات عملي في رؤية واحدة: بناء الإنسان من الداخل، ثم مساندته كي يُترجم ذلك إلى أثر في حياته وعمله.
          </p>
        </div>
        <div className="bg-sage-50 border-r-4 border-sage-700 p-6 rounded-l-xl">
          <p className="font-serif text-lg text-earth-900 italic">
            «المعرفة تفتح لنا الباب، لكن الممارسة الواعية هي التي تساعدنا على العبور.»
          </p>
        </div>
      </section>

      {/* How I Work — 4 Pillars */}
      <section className="bg-white border-y border-sand-200 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">منهج العمل</span>
            <h2 className="font-serif text-3xl text-earth-900">كيف أعمل؟</h2>
            <p className="text-sm text-earth-600 font-light max-w-xl mx-auto">
              لا أتعامل مع التغيير باعتباره قراراً مفاجئاً أو لحظة حماس. أراه عملية تتطلب فهماً للواقع،
              وتطويراً للمهارات، وتجربة خطوات صغيرة.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "01", title: "المسؤولية الذاتية", desc: "أن نرى واقعنا واحتياجاتنا بوضوح، ونميّز بين تحمّل المسؤولية ولوم الذات." },
              { num: "02", title: "الكفاءة الذاتية", desc: "أن نطور ثقتنا بقدرتنا على الاختيار والفعل، لا بالاكتفاء بتراكم المعلومات." },
              { num: "03", title: "التوازن الداخلي", desc: "أن نأخذ الجسد والمشاعر والعلاقات والراحة في الحسبان، بعيداً عن السعي إلى المثالية." },
              { num: "04", title: "التوسع", desc: "أن ننقل ما نتعلّمه إلى قرارات وعادات وأداء مهني أكثر اتساقاً واستدامة." }
            ].map(p => (
              <div key={p.num} className="bg-sand-50 rounded-xl p-5 border border-sand-200 space-y-2">
                <span className="font-serif text-2xl text-sage-700">{p.num}</span>
                <h4 className="font-medium text-earth-900 text-sm">{p.title}</h4>
                <p className="text-xs text-earth-600 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">المؤهلات والخبرات</span>
          <h2 className="font-serif text-3xl text-earth-900">خبرة تجمع أكثر من مجال</h2>
          <p className="text-sm text-earth-600 font-light leading-relaxed">
            تكوّنت خلفيتي المهنية عبر مسارات متكاملة: التأهيل في التدريب المهني والمؤسسي، والخبرة في الإدارة
            وتطوير الأداء، والتعلم في مجالات التحسين المستمر، إلى جانب العمل في العافية الشاملة والتثقيف الصحي
            وتطوير الذات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "بكالوريوس في التسويق",
              inst: "جامعة دبي",
              note: "الأساس الأكاديمي في استراتيجيات التواصل وفهم السلوك"
            },
            {
              title: "Focus Awards Level 4 Certificate in Nutrition",
              inst: "Weight Management and Athletic Performance (RQF) • 2025",
              note: "معرفة متخصصة في التغذية وإدارة الوزن والأداء الرياضي"
            },
            {
              title: "Certified Corporate Trainer (CCT) & Professional Trainer",
              inst: "AIPS • 2014",
              note: "مؤهلات تدريب المدربين والتدريب والتطوير المؤسسي"
            },
            {
              title: "تدريبات Kaizen و Lean ومبادئ التحسين المستمر",
              inst: "اليابان • 2013",
              note: "منهجيات التحسين التدريجي وإدارة التغيير المؤسسي"
            },
            {
              title: "برنامج العالقات العامة واإلعالم (12 ساعة)",
              inst: "كايزن • فبراير 2017",
              note: "مهارات الاتصال والتأثير وبناء العلاقات المهنية"
            },
            {
              title: "خبرة عملية في إدارة فرق العمل والضيافة والقيادة",
              inst: "تطبيقات ميدانية في بيئات العمل الحقيقية",
              note: "ربط النظريات بالواقع التنفيذي وتحديات الفرق"
            }
          ].map((q, i) => (
            <div key={i} className="bg-white border border-sand-200 rounded-xl p-5 space-y-2">
              <h4 className="font-medium text-earth-900 text-sm">{q.title}</h4>
              <p className="text-xs text-sage-700 font-medium">{q.inst}</p>
              <p className="text-xs text-earth-500 font-light">{q.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Dual */}
      <section className="bg-sage-700 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl">البداية تبدأ من هنا</h2>
          <p className="text-sage-100 font-light text-sm leading-relaxed">
            قد تبدأ خطوتكِ التالية بسؤال، أو بصفحة تقرئينها، أو ببرنامج تتعلّمين فيه مهارة جديدة.
            المهم أن تكون البداية مناسبة لكِ، وأن تترك مساحة لما تحتاجينه فعلاً.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/individuals"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-sage-800 font-medium text-sm hover:bg-sand-100 transition shadow-md"
            >
              استكشفي برامج الأفراد
            </Link>
            <Link
              href="/organizations"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-medium text-sm hover:bg-sage-600 transition"
            >
              اطلبوا مقترح تدريب
            </Link>
          </div>
          <p className="text-xs text-sage-200 font-light">
            جذور التوازن... لأن ما ينمو في الداخل يمكن أن يغيّر ما نعيشه في الخارج.
          </p>
        </div>
      </section>
    </div>
  );
}
