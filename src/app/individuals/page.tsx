import Link from 'next/link';

export const metadata = {
  title: 'لألفراد | جذور التوازن',
  description: 'مساحة للعودة إلى نفسك وبناء حياة أكثر اتزاناً. برامج وجلسات ومحتوى تعليمي في القيادة الذاتية والعافية الشاملة.',
};

export default function IndividualsPage() {
  return (
    <div className="min-h-screen bg-sand-50" dir="rtl">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#f5f0e8] to-sand-50 pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
            جذور التوازن — لألفراد
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-earth-950 font-normal leading-tight">
            مساحة للعودة إلى نفسِك<br />
            <span className="text-sage-700">وبناء حياة أكثر اتزاناً</span>
          </h1>
          <p className="text-base sm:text-lg text-earth-700 font-light leading-relaxed max-w-2xl mx-auto">
            بين مسؤوليات الحياة وتوقعات الآخرين، قد يصبح الاهتمام بنفسِك آخر ما تمنحينه وقتِك.
            في جذور التوازن، نساعدِك على فهم ما تحتاجينه، وتطوير وعيِك بذاتِك، وتحويل المعرفة
            إلى اختيارات وعادات أكثر انسجاماً مع قيمِك وحياتِك.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/return-to-self"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-sage-700 text-white font-medium text-sm hover:bg-sage-800 transition shadow-md"
            >
              تعرّفي إلى برنامج العودة إلى الذات
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-earth-700 text-earth-800 font-medium text-sm hover:bg-sand-100 transition"
            >
              حمّلي الدليل المجاني
            </Link>
          </div>
        </div>
      </section>

      {/* Path Selector */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="font-serif text-2xl sm:text-3xl text-earth-900 text-center mb-3">
          أين تجدين نفسِك اليوم؟
        </h2>
        <p className="text-sm text-earth-600 text-center mb-10 font-light">
          ربما لا تحتاجين إلى المزيد من النصائح، بل إلى نقطة بداية تتصل بما تعيشينه فعلاً. اختاري المسار الأقرب لِك.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "أريد أن أفهم نفسي بصورة أعمق",
              desc: "عندما تتكرر المواقف نفسها، أو يصعب عليكِ وضع الحدود، أو تشعرين بأن احتياجاتِك تتراجع أمام أدوارِك — قد تكون البداية في توسيع وعيِك بذاتِك.",
              cta: "العودة إلى الذات",
              href: "/return-to-self",
              color: "bg-sage-50 border-sage-200"
            },
            {
              title: "أحتاج إلى توجيه يناسب ظروفي",
              desc: "إذا كان لديكِ سؤال محدد أو قرار تحاولين التفكير فيه بوضوح، فقد يناسبِك التواصل لاستكشاف طبيعة الدعم الفردي المتاح.",
              cta: "صفحة التواصل والحجز",
              href: "/contact",
              color: "bg-sand-100 border-sand-300"
            },
            {
              title: "أريد بناء عادات تعتني بصحتي",
              desc: "من التغذية والنوم إلى الحركة والراحة والعلاقة بالجسد — قد تكون البداية بفهم أساسيات العافية، ثم اختيار ممارسة صغيرة قابلة للاستمرار.",
              cta: "مكتبة المعرفة",
              href: "/insights",
              color: "bg-[#f5f0e8] border-sand-200"
            }
          ].map((card) => (
            <div key={card.title} className={`${card.color} border rounded-2xl p-6 space-y-4 flex flex-col`}>
              <h3 className="font-serif text-lg text-earth-900">{card.title}</h3>
              <p className="text-sm text-earth-600 font-light leading-relaxed flex-1">{card.desc}</p>
              <Link href={card.href} className="text-sm font-medium text-sage-800 hover:underline inline-flex items-center gap-1">
                الوجهة: {card.cta} &larr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Return to Self Program */}
      <section className="bg-white border-y border-sand-200 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">العرض الرئيسي</span>
              <h2 className="font-serif text-3xl text-earth-900">
                العودة إلى الذات<br />
                <span className="text-sage-700 text-2xl">من الوعي إلى الاختيار</span>
              </h2>
              <p className="text-sm text-earth-700 font-light leading-relaxed">
                برنامج تعليمي وتطبيقي للمرأة التي ترغب في إعادة بناء علاقتها بنفسها على أساس من الوعي
                والمسؤولية والاحترام. من خلال التأمل الموجّه والتمارين العملية، تتعرفين إلى احتياجاتِك
                وقيمِك والأنماط التي قد تستنزفِك.
              </p>
              <div className="flex flex-wrap gap-2">
                {["المسؤولية الذاتية", "الكفاءة الذاتية", "التوازن الداخلي", "التوسع"].map(p => (
                  <span key={p} className="px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-medium">{p}</span>
                ))}
              </div>
              <Link
                href="/return-to-self"
                className="inline-flex items-center px-6 py-3 rounded-full bg-sage-700 text-white text-sm font-medium hover:bg-sage-800 transition"
              >
                اكتشفي تفاصيل البرنامج
              </Link>
            </div>
            <div className="bg-sage-50 rounded-2xl p-8 border border-sage-200 space-y-4">
              <h4 className="font-serif text-xl text-earth-900">ماذا ستكتسبين من الرحلة؟</h4>
              <ul className="space-y-3">
                {[
                  "التمييز بين ما تشعرين به، وما تحتاجينه، وما تختارينه فعلاً",
                  "ملاحظة الأنماط التي تستنزف وقتِك وطاقتِك",
                  "التعبير عن احتياجاتِك وحدودِك بوضوح واحترام",
                  "بناء ثقة عملية بقدرتِك على اتخاذ القرارات",
                  "صياغة خطة شخصية قابلة للمراجعة"
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-earth-700">
                    <span className="text-sage-600 mt-0.5">✓</span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Sessions */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl text-earth-900">مساحة شخصية لفهم ما تمرّين به</h2>
          <p className="text-sm text-earth-700 font-light leading-relaxed max-w-2xl">
            أحياناً يكون السؤال واضحاً، لكن الطريق إلى الإجابة يحتاج إلى حوار منظَّم. تهدف الجلسات الفردية
            إلى مساعدتِك على ترتيب الأفكار، والتعرف إلى أولوياتِك، والنظر في الخيارات والخطوات التي
            تستطيعين اتخاذها بنفسِك.
          </p>
          <div className="bg-sand-50 border border-sand-200 rounded-2xl p-6 space-y-3">
            <h4 className="font-medium text-earth-900">ما الذي يمكن العمل عليه؟</h4>
            <div className="flex flex-wrap gap-2">
              {["القيادة الذاتية", "ترتيب الأولويات", "توضيح الأهداف", "الحدود الشخصية", "بناء العادات", "التعامل مع التغييرات"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white border border-sand-300 text-earth-700 text-xs">{tag}</span>
              ))}
            </div>
            <p className="text-xs text-earth-500 font-light pt-2">
              الجلسات من نوع الكوتشينغ والتثقيف، ولا تُقدَّم باعتبارها تشخيصاً أو علاجاً نفسياً أو طبياً.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full border border-earth-700 text-earth-800 text-sm font-medium hover:bg-sand-100 transition"
          >
            استفسري عن الجلسات الفردية
          </Link>
        </div>
      </section>

      {/* Holistic Wellness */}
      <section className="bg-[#f5f0e8] border-y border-sand-200 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-serif text-2xl text-earth-900">
            العافية ليست جانباً واحداً من حياتِك
          </h2>
          <p className="text-sm text-earth-700 font-light leading-relaxed">
            صحتِك الجسدية، وراحتِك النفسية، وعلاقاتِك، والعادات التي تمارسينها — كلها جوانب مترابطة
            في جودة حياتِك. نشاركِك محتوى تعليمياً يقرّب المعرفة من الواقع.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "التغذية والعادات", desc: "فهم أساسيات التغذية المتوازنة وكيفية بناء عادات قابلة للاستمرار دون حميات قاسية." },
              { title: "الراحة والحركة", desc: "النوم والتعافي والحركة اليومية والقدرة على الإصغاء إلى احتياجات الجسد." },
              { title: "الوعي والروابط الإنسانية", desc: "الحدود، وطلب المساندة، وتنظيم الأولويات، وتطوير علاقة أكثر احتراماً مع الذات والآخرين." }
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-sand-200 space-y-2">
                <h4 className="font-medium text-earth-900">{item.title}</h4>
                <p className="text-sm text-earth-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/insights" className="inline-flex items-center text-sm font-medium text-sage-800 hover:underline">
            اقرئي موضوعات العافية الشاملة &larr;
          </Link>
        </div>
      </section>

      {/* Roots of Beauty */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">جذور الجمال | Roots of Beauty</span>
          </div>
          <h2 className="font-serif text-2xl text-earth-900">
            عناية تبدأ من الداخل وتنعكس على حياتِك
          </h2>
          <p className="text-sm text-earth-700 font-light leading-relaxed max-w-2xl">
            الجمال ليس مجرد ما نضعه على بشرتنا، ولا سباقاً مع العمر. في «جذور الجمال» ننظر إلى العناية
            بالذات باعتبارها ممارسة أوسع: تغذية واعية، ونوماً وراحة، وحركة، وعلاقة صحية مع صورة الجسد،
            وعناية خارجية مبنية على المعرفة والاختيار. مساحة تحترم اختلاف النساء، وتحتفي بالجمال من دون
            فرض قالب واحد له.
          </p>
          <Link href="/insights" className="inline-flex items-center text-sm font-medium text-sage-800 hover:underline">
            استكشفي محتوى جذور الجمال &larr;
          </Link>
          <p className="text-xs text-earth-500 font-light">سلسلة معرفية ضمن مكتبة الموقع؛ ليست دورة مستقلة للبيع في النسخة الأولى.</p>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white border-y border-sand-200 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-2xl text-earth-900">وعي يُترجَم إلى ممارسة</h2>
          <p className="text-sm text-earth-600 font-light">
            لا نؤمن بأن كثرة المعلومات وحدها تصنع التغيير. لذلك تقوم مقاربتنا على أربع خطوات بسيطة تتكرر وتتطور.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "01", label: "افهمي", desc: "الاحظي ما تعيشينه، وما تحتاجينه، وما يهمِك فعلاً" },
              { num: "02", label: "اختاري", desc: "حددي هدفاً أو تغييراً يناسب قدراتِك وواقعِك" },
              { num: "03", label: "جرّبي", desc: "حوّلي الفكرة إلى ممارسة صغيرة يمكن ملاحظتها" },
              { num: "04", label: "راجعي", desc: "تعلّمي مما نجح وما تعثّر، دون قسوة على نفسِك" }
            ].map(step => (
              <div key={step.num} className="bg-sand-50 rounded-xl p-4 space-y-2 text-center">
                <span className="font-serif text-2xl text-sage-700">{step.num}</span>
                <h4 className="font-medium text-earth-900 text-sm">{step.label}</h4>
                <p className="text-xs text-earth-600 font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
        <h2 className="font-serif text-2xl text-earth-900">أسئلة شائعة</h2>
        <div className="space-y-4">
          {[
            {
              q: "هل يجب أن أعرف ما أحتاجه قبل أن أبدأ؟",
              a: "لا. يمكنِك البدء بالدليل المجاني والأسئلة التأملية، ثم استكشاف البرامج والخدمات عندما تتضح أولويتِك."
            },
            {
              q: "ما الفرق بين البرنامج والجلسة الفردية؟",
              a: "«العودة إلى الذات» رحلة تعليمية متدرجة ذات محاور وتمارين. أما الجلسة الفردية فتركز على سؤال أو هدف شخصي محدد، بحسب نوع الخدمة المتاحة."
            },
            {
              q: "هل تقدم هذه الخدمات علاجاً نفسياً؟",
              a: "لا. المحتوى والبرامج المذكورة هنا تعليمية وتطويرية. الحالات التي تحتاج إلى تشخيص أو علاج نفسي أو طبي يُرجع فيها إلى المختصين المرخصين."
            },
            {
              q: "هل برنامج أساسيات العافية الشاملة متاح الآن؟",
              a: "يجري تطوير مسار تعليمي للتثقيف والتطوير الشخصي في العافية الشاملة. سيُعلن عن تفاصيله عند اكتمال المنهج."
            }
          ].map(faq => (
            <details key={faq.q} className="bg-sand-50 border border-sand-200 rounded-xl p-5 group">
              <summary className="text-sm font-medium text-earth-900 cursor-pointer list-none flex items-center justify-between">
                {faq.q}
                <span className="text-sage-700 text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-earth-600 font-light leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-sage-700 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl">قد تبدأ خطوة مختلفة بسؤال جديد</h2>
          <p className="text-sage-100 font-light text-sm leading-relaxed">
            إذا كنتِ ترغبين في فهم احتياجاتِك بصورة أعمق، ابدئي بالدليل المجاني. وإذا كان برنامج
            «العودة إلى الذات» يلامس المرحلة التي تمرّين بها، استكشفي تفاصيله واختاري الخطوة
            المناسبة لِك من دون استعجال.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-sage-800 font-medium text-sm hover:bg-sand-100 transition"
            >
              حمّلي الدليل المجاني
            </Link>
            <Link
              href="/return-to-self"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-medium text-sm hover:bg-sage-600 transition"
            >
              تعرّفي إلى برنامج العودة إلى الذات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

