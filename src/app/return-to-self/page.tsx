import Link from 'next/link';

export const metadata = {
  title: 'العودة إلى الذات | جذور التوازن',
  description: 'برنامج للقيادة الذاتية وتغيير السلوك. رحلة تعليمية وتطبيقية من أربع مراحل لفهم احتياجاتك وبناء الحدود والقرارات والعادات بوعي.',
};

export default function ReturnToSelfPage() {
  return (
    <div className="min-h-screen bg-sand-50" dir="rtl">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#f5f0e8] to-sand-50 pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
            برنامج العودة إلى الذات
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-earth-950 font-normal leading-[1.35] sm:leading-[1.4] pb-2">
            من فهم ما يستنزفِك...<br />
            <span className="text-sage-700 block mt-2">إلى بناء اختيارات تعبّر عنِك</span>
          </h1>
          <p className="text-base sm:text-lg text-earth-700 font-light leading-relaxed max-w-2xl mx-auto">
            هل اعتدتِ أن تكوني حاضرة للجميع، بينما تتراجع احتياجاتِك إلى آخر القائمة؟ قد تنجزين الكثير،
            وتبدين قوية ومتكيّفة، ومع ذلك تشعرين بأنِك بعيدة عن نفسِك. «العودة إلى الذات» رحلة تعليمية
            وتطبيقية تمنحِك مساحة لفهم ما تعيشينه، ومراجعة أنماطِك، وتطوير مهارات تساعدِك على الاختيار بوعي،
            من غير أن تفقدي احترامِك لذاتِك أو لعلاقاتِك.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/contact?type=individual"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-sage-700 text-white font-medium text-sm hover:bg-sage-800 transition shadow-md"
            >
              احجزي مكالمة استكشافية مجانية (45 دقيقة)
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-earth-700 text-earth-800 font-medium text-sm hover:bg-sand-100 transition"
            >
              أفضّل البدء بالدليل المجاني
            </Link>
          </div>
          <p className="text-xs text-earth-500 font-light">
            المكالمة للتعرّف إلى احتياجِك ومالءمة البرنامج، ولا تلزمِك بالتسجيل.
          </p>
        </div>
      </section>

      {/* Recognizing Yourself */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white border border-sand-200 rounded-2xl p-8 sm:p-10 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-earth-900">
            ربما تتعرّفين إلى نفسِك هنا...
          </h2>
          <p className="text-sm text-earth-600 font-light">
            قد لا يكون ما ينقصِك مزيداً من النصائح أو الحافز، بل فرصة لتفهمي لماذا تتكرر بعض المواقف، وكيف تبدئين بالتعامل معها بصورة مختلفة:
          </p>
          <ul className="space-y-4">
            {[
              "تقولين «نعم» وأنتِ ترغبين في قول «لا»، ثم تشعرين بالاستنزاف أو الضيق.",
              "تحملين مسؤوليات كثيرة، لكن يصعب عليكِ تحديد ما تحتاجينه أنتِ.",
              "تتكيفين مع الآخرين باستمرار، حتى تصبح رغباتِك وحدودِك أقل وضوحاً.",
              "تملكين معرفة واسعة عن تطوير الذات، لكن تحويلها إلى ممارسة يومية ما زال تحدياً.",
              "تريدين اتخاذ قرارات أهدأ وأكثر ثقة، من دون انتظار رضا الجميع."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-earth-700">
                <span className="text-sage-700 text-base leading-none mt-0.5">•</span>
                <span className="font-light">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-earth-500 font-light pt-2 border-t border-sand-100">
            إذا لامستِك بعض هذه المواقف، فهذا لا يعني أن هناك شيئاً خاطئاً فيكِ؛ لكنه قد يكون سبباً كافياً لتمنحي نفسِك مساحة جديدة للفهم والتعلم.
          </p>
        </div>
      </section>

      {/* What You Will Gain */}
      <section className="bg-[#f5f0e8] border-y border-sand-200 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl text-earth-900">ماذا يمكنِك أن تكتسبي من الرحلة؟</h2>
            <p className="text-sm text-earth-600 font-light">
              لا يعدِك البرنامج بحياة بلا ضغوط أو علاقات مثالية. هدفه أن تتعلمي أدوات يمكن تطبيقها تدريجياً في واقعِك:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "التمييز بين ما تشعرين به، وما تحتاجينه، وما تختارينه فعلاً.",
              "ملاحظة الأنماط التي تستنزف وقتِك وطاقتِك، والتعامل معها بوعي أكبر.",
              "التعبير عن احتياجاتِك وحدودِك بطريقة أكثر وضوحاً واحتراماً.",
              "بناء ثقة عملية بقدرتِك على اتخاذ القرارات والالتزام بخطوات صغيرة.",
              "إعادة النظر في توزيع أدوارِك وعلاقاتِك وراحتِك بما يناسب ظروفِك.",
              "صياغة خطة شخصية قابلة للمراجعة، بدلاً من السعي إلى التغيير الكامل دفعة واحدة."
            ].map((gain, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-sand-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-sage-100 text-sage-800 text-xs flex items-center justify-center shrink-0 mt-0.5 font-medium">
                  {i + 1}
                </span>
                <p className="text-sm text-earth-700 font-light">{gain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4 Stages */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">هيكل الرحلة</span>
          <h2 className="font-serif text-3xl text-earth-900">رحلتِك على أربع مراحل</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              num: "01",
              title: "المسؤولية الذاتية",
              question: "أين أنا الآن؟",
              learn: "فهم الواقع والاحتياجات والقيم والأنماط، والتمييز بين تحمّل المسؤولية ولوم الذات."
            },
            {
              num: "02",
              title: "الكفاءة الذاتية",
              question: "كيف أتحرّك من الفهم إلى الفعل؟",
              learn: "مهارات الاختيار، والتعبير عن الاحتياجات، ووضع الحدود، وتطوير خطوات عملية."
            },
            {
              num: "03",
              title: "التوازن الداخلي",
              question: "كيف أعتني بنفسي وسط مسؤولياتي؟",
              learn: "التعامل الواعي مع المشاعر والضغط، وإعادة النظر في الراحة والعلاقات والأدوار."
            },
            {
              num: "04",
              title: "التوسع",
              question: "كيف أواصل من دون أن أعود إلى النمط نفسه؟",
              learn: "دمج المهارات في قرارات يومية، ومراجعة التعثر وبناء خطة للاستمرارية."
            }
          ].map((stage) => (
            <div key={stage.num} className="bg-white border border-sand-200 hover:border-sun-300 transition-colors rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm">
              <div className="flex items-center gap-4 md:w-1/3">
                <span className="font-serif text-3xl text-sun-600 bg-sun-50 w-12 h-12 rounded-xl flex items-center justify-center font-medium">{stage.num}</span>
                <div>
                  <h3 className="font-serif text-lg text-earth-900">{stage.title}</h3>
                  <span className="text-xs text-sage-700 font-medium">{stage.question}</span>
                </div>
              </div>
              <div className="md:w-2/3 border-t md:border-t-0 md:border-r border-sand-200 pt-4 md:pt-0 md:pr-6">
                <p className="text-sm text-earth-600 font-light leading-relaxed">{stage.learn}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Experience */}
      <section className="bg-white border-y border-sand-200 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-earth-900 text-center">
            كيف تسير تجربة البرنامج؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-sand-50 p-6 rounded-xl space-y-3">
              <h4 className="font-serif text-lg text-earth-900">تعلّم موجّه</h4>
              <p className="text-sm text-earth-600 font-light leading-relaxed">
                شرح واضح للمفاهيم والمهارات الأساسية، بلغة قريبة من الحياة اليومية.
              </p>
            </div>
            <div className="bg-sand-50 p-6 rounded-xl space-y-3">
              <h4 className="font-serif text-lg text-earth-900">تطبيق شخصي</h4>
              <p className="text-sm text-earth-600 font-light leading-relaxed">
                تمارين وكتابة تأملية ومواقف عملية تساعدِك على تحويل الفهم إلى سلوك.
              </p>
            </div>
            <div className="bg-sand-50 p-6 rounded-xl space-y-3">
              <h4 className="font-serif text-lg text-earth-900">مراجعة مستمرة</h4>
              <p className="text-sm text-earth-600 font-light leading-relaxed">
                أسئلة للملاحظة وتتبّع ما تغيّر، وما يحتاج وقتاً أو تعديلاً.
              </p>
            </div>
          </div>
          <div className="bg-sage-50 border border-sage-200 rounded-xl p-6">
            <span className="text-xs uppercase tracking-wider text-sage-800 font-semibold block mb-1">
              مثال من الرحلة: «من الإحساس إلى الطلب»
            </span>
            <p className="text-sm text-earth-700 font-light leading-relaxed">
              تبدئين بملاحظة موقف شعرتِ فيه بالاستنزاف، ثم تسمّين الإحساس، وتحددين الاحتياج وراءه،
              وتجربين طريقة واضحة ومحترمة للتعبير عما تحتاجينه. الهدف تعلم مهارة، لا الحكم على مشاعرِك أو على الآخرين.
            </p>
          </div>
        </div>
      </section>

      {/* Program Philosophy & Leader */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">فلسفة البرنامج</span>
            <blockquote className="font-serif text-xl text-earth-900 italic leading-relaxed">
              «الراحة ليست مكافأة.. وطلب المساندة ليس ضعفاً.. ووضع الحدود لا يعني قلة المحبة.. والتعثر لا يلغي التقدم.»
            </blockquote>
            <p className="text-sm text-earth-600 font-light leading-relaxed">
              هذه ليست شعارات نكتفي بترديدها، بل أفكار نختبر معناها من خلال ممارسات صغيرة في حياتنا.
            </p>
          </div>
          <div className="bg-sand-100 border border-sand-200 rounded-2xl p-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">من تقود الرحلة؟</span>
            <h3 className="font-serif text-2xl text-earth-900">علياء البلوكي</h3>
            <p className="text-sm text-earth-700 font-light leading-relaxed">
              مدربة ومستشارة في العافية الشاملة وتطوير الذات، تجمع خلفيتها بين تدريب المدربين
              والتدريب المؤسسي والقيادة، والاهتمام بتغيير السلوك والعادات والعافية. تستند مقاربتها
              إلى التعلم الواعي والتطبيق العملي.
            </p>
            <Link href="/about" className="text-sm font-medium text-sage-800 hover:underline inline-block">
              تعرّفي إلى علياء وخبراتها المهنية &larr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-y border-sand-200 py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-2xl text-earth-900 text-center">أسئلة شائعة عن البرنامج</h2>
          <div className="space-y-4">
            {[
              {
                q: "هل البرنامج جلسات علاج نفسي؟",
                a: "لا. هو برنامج تعليمي وتطويري لا يقدم تشخيصاً أو علاجاً نفسياً أو طبياً، ولا يحل محل الرعاية المتخصصة."
              },
              {
                q: "هل يجب أن أمر بأزمة حتى أستفيد؟",
                a: "لا. يمكنِك الاستفادة إذا رغبتِ في فهم ذاتِك وتطوير اختياراتِك وعاداتِك، حتى لو لم تكوني في أزمة."
              },
              {
                q: "هل يجب أن أكون متأكدة من جاهزيتي؟",
                a: "ليس بالضرورة. المكالمة الاستكشافية مساحة لفهم احتياجِك، وطرح الأسئلة، ومعرفة ما إذا كانت طبيعة البرنامج مناسبة لِك."
              },
              {
                q: "هل المكالمة الاستكشافية مجانية؟",
                a: "نعم، مدة المكالمة 45 دقيقة، وهدفها التعارف ومناقشة مدى الملاءمة، من دون التزام بالتسجيل."
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
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-sage-700 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl">
            ربما لا تحتاجين إلى بداية جديدة...<br />
            بل إلى أن تعودي لنفسِك بوعي جديد
          </h2>
          <p className="text-sage-100 font-light text-sm leading-relaxed">
            إذا شعرتِ أن هذه الرحلة تلامس المرحلة التي تعيشينها، يمكنِك البدء بمكالمة استكشافية نتعرف فيها إلى ما تبحثين عنه،
            ونناقش طبيعة البرنامج ومدى ملاءمته لِك.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact?type=individual"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-sage-800 font-medium text-sm hover:bg-sand-100 transition shadow-md"
            >
              احجزي مكالمة استكشافية مجانية (45 دقيقة)
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-medium text-sm hover:bg-sage-600 transition"
            >
              حمّلي الدليل المجاني
            </Link>
          </div>
          <p className="text-xs text-sage-200 font-light">
            لا ضغط ولا وعود بنتائج مضمونة؛ القرار يبدأ من فهم ما يناسبِك.
          </p>
        </div>
      </section>
    </div>
  );
}

