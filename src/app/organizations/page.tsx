import Link from 'next/link';

export const metadata = {
  title: 'للمؤسسات | جذور التوازن',
  description: 'برامج تدريب وتطوير للمؤسسات في القيادة والمرونة المهنية والتواصل وتدريب المدربين والتحسين المستمر.',
};

export default function OrganizationsPage() {
  return (
    <div className="min-h-screen bg-sand-50" dir="rtl">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#f5f0e8] to-sand-50 pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
            جذور التوازن — للمؤسسات
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-earth-950 font-normal leading-[1.35] sm:leading-[1.4] pb-2">
            فِرقٌ أكثر وعياً...<br />
            <span className="text-sage-700 block mt-2">وقيادةٌ أكثر قدرة على التغيير</span>
          </h1>
          <p className="text-base sm:text-lg text-earth-700 font-light leading-relaxed max-w-2xl mx-auto">
            نصمّم في جذور التوازن تجارب تدريب وتطوير تركز على المهارات التي تظهر في العمل اليومي:
            قيادة الذات والآخرين، والمرونة المهنية، والتواصل الفعّال، والتعلم المستمر.
            ننطلق من احتياج الجهة لنحوّله إلى أهداف تعلم واضحة، وأنشطة تطبيقية يمكن نقلها إلى بيئة العمل.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/contact?type=corporate"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-sage-700 text-white font-medium text-sm hover:bg-sage-800 transition shadow-md"
            >
              اطلبوا مقترح تدريب
            </Link>
            <a
              href="#tracks"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-earth-700 text-earth-800 font-medium text-sm hover:bg-sand-100 transition"
            >
              تعرّفوا إلى محاور التدريب
            </a>
          </div>
          <p className="text-xs text-earth-500 font-light">
            نبدأ بفهم احتياج الجهة وطبيعة الفئة المستهدفة، ثم نناقش نطاق البرنامج وصيغة تقديمه.
          </p>
        </div>
      </section>

      {/* Workplace Challenges */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white border border-sand-200 rounded-2xl p-8 sm:p-10 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-earth-900">
            من التحدي اليومي إلى المهارة المطلوبة
          </h2>
          <p className="text-sm text-earth-600 font-light leading-relaxed">
            تختلف التحديات بين مؤسسة وأخرى. وقد يكون ما تحتاجه بعض الفرق ليس مزيداً من المعلومات، بل فرصة
            لتجربة مهارات جديدة، وتطوير لغة مشتركة، وتحسين الطريقة التي تتعامل بها مع التغيير:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {[
              "قادة فرق انتقلوا إلى مسؤوليات أكبر ويحتاجون إلى مهارات التواصل والتوجيه واتخاذ القرار.",
              "موظفون يواجهون ضغط العمل وتبدّل الأولويات ويحتاجون إلى مهارات مرونة وتكيّف عملية.",
              "فِرق تعتمد على التنسيق المتبادل لكنها تواجه سوء فهم أو ضعفاً في الإصغاء والتغذية الراجعة.",
              "مدربون داخليون يمتلكون الخبرة الفنية ويحتاجون إلى تصميم ورش وتيسير جلسات أكثر فاعلية.",
              "وحدات عمل تبحث عن عادات للتحسين المستمر وحل المشكلات بدلاً من الحلول المؤقتة."
            ].map((ch, idx) => (
              <div key={idx} className="bg-sand-50 p-4 rounded-xl border border-sand-100 flex items-start gap-3">
                <span className="text-sage-700 mt-0.5">•</span>
                <p className="text-xs sm:text-sm text-earth-700 font-light">{ch}</p>
              </div>
            ))}
          </div>
          <div className="bg-sage-50 border border-sage-200 rounded-xl p-4 text-xs sm:text-sm text-earth-800 font-light">
            <strong>الرسالة الأساسية:</strong> لا نقدم برنامجاً واحداً للجميع. نبدأ بتحديد الجمهور والمشكلة السلوكية أو المهارية، ثم نختار المحتوى والتمارين المناسبة.
          </div>
        </div>
      </section>

      {/* 3 Main Tracks */}
      <section id="tracks" className="bg-[#f5f0e8] border-y border-sand-200 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">المسارات الرئيسية</span>
            <h2 className="font-serif text-3xl text-earth-900">مجالات التدريب والتطوير</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "القيادة والمرونة المهنية",
                desc: "تطوير الوعي بالذات في بيئة العمل، والتواصل القيادي، والتعامل مع التغيير وإدارة الأولويات، وتعلّم أساليب عملية للاستجابة للضغوط المهنية.",
                topics: "القيادة الذاتية في العمل • التواصل وقت الضغط • المرونة مع التغيير"
              },
              {
                num: "02",
                title: "تدريب المدربين والتواصل المؤثر",
                desc: "مهارات إعداد ورشة واضحة الأهداف، وتصميم أنشطة عملية، وإدارة النقاش، والإلقاء، والاستماع والتغذية الراجعة، وبناء حضور مهني يعزز وضوح الرسالة.",
                topics: "من الخبرة إلى ورشة مؤثرة • مهارات التيسير • تقديم التغذية الراجعة"
              },
              {
                num: "03",
                title: "التميز والتحسين المستمر",
                desc: "مدخل تطبيقي إلى ثقافة Kaizen والتحسين التدريجي، وملاحظة فرص التطوير والتفكير المنظم في المشكلات، وتشجيع مشاركة الفرق في تحسين أساليب العمل.",
                topics: "مبادئ Kaizen • التحسينات الصغيرة • حل المشكلات بالتعاون"
              }
            ].map(track => (
              <div key={track.num} className="bg-white rounded-2xl p-6 border border-sand-200 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-serif text-2xl text-sage-700">{track.num}</span>
                  <h3 className="font-serif text-xl text-earth-900">{track.title}</h3>
                  <p className="text-xs text-earth-600 font-light leading-relaxed">{track.desc}</p>
                </div>
                <div className="pt-3 border-t border-sand-100">
                  <span className="text-[11px] font-semibold text-earth-500 block mb-1">موضوعات ممكنة:</span>
                  <p className="text-xs text-sage-800 font-light">{track.topics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build the Experience */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <h2 className="font-serif text-2xl sm:text-3xl text-earth-900 text-center">
          كيف نبني تجربة التدريب؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { step: "1", title: "نفهم الاحتياج", desc: "نستمع إلى سياق المؤسسة والتحديات التي تريد معالجتها." },
            { step: "2", title: "نحدد الأهداف", desc: "نترجم الاحتياج إلى مهارات قابلة للملاحظة وأساليب تناسب الوقت." },
            { step: "3", title: "ننفّذ بتفاعل", desc: "أمثلة من واقع العمل، تمارين تفكير وحوار، وأنشطة تطبيقية." },
            { step: "4", title: "نراجع ونوصي", desc: "تقييم قبلي وبعدي أو خطة عمل قصيرة، مع توصيات للمتابعة." }
          ].map(s => (
            <div key={s.step} className="bg-white border border-sand-200 rounded-xl p-5 space-y-2">
              <span className="w-7 h-7 rounded-full bg-sage-100 text-sage-800 text-xs flex items-center justify-center font-medium">
                {s.step}
              </span>
              <h4 className="font-medium text-earth-900 text-sm">{s.title}</h4>
              <p className="text-xs text-earth-600 font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Formats */}
        <div className="bg-sand-100/70 border border-sand-200 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="font-serif text-xl text-earth-900">أشكال التعاون الممكنة</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-4 rounded-xl border border-sand-200 space-y-1">
              <h5 className="font-medium text-earth-900">ورشة تفاعلية قصيرة</h5>
              <p className="text-earth-600 font-light">للتركيز على مهارة محددة أو بدء نقاش مؤسسي.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-sand-200 space-y-1">
              <h5 className="font-medium text-earth-900">برنامج تدريبي متعدد الجلسات</h5>
              <p className="text-earth-600 font-light">مهارات تحتاج تدريباً وممارسة ومراجعة بين الجلسات.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-sand-200 space-y-1">
              <h5 className="font-medium text-earth-900">جلسات موجّهة للقيادات</h5>
              <p className="text-earth-600 font-light">احتياج فريق محدد إلى حوار وتطبيق منظم.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="bg-white border-y border-sand-200 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">المصداقية والخبرة</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-earth-900">
            خبرة تجمع التدريب بالعمل المؤسسي
          </h2>
          <p className="text-sm text-earth-700 font-light leading-relaxed max-w-3xl">
            تقود علياء البلوكي جذور التوازن بخلفية تجمع بين التدريب المهني والخبرة الإدارية والاهتمام
            بتطوير السلوك والمهارات. تتضمن مؤهالتها شهادات في تدريب المدربين والتدريب المؤسسي، وتدريبات
            في اليابان في Kaizen و Lean، إضافة إلى برامج في التواصل والعالقات العامة واإلعالم،
            وخبرة عملية في إدارة فرق العمل.
          </p>
          <div className="pt-2">
            <Link href="/about" className="text-sm font-medium text-sage-800 hover:underline">
              اطّلعوا على المؤهلات والخبرات المهنية &larr;
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-6">
        <h2 className="font-serif text-2xl text-earth-900 text-center">لمن تُصمَّم هذه البرامج؟</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
          {[
            "إدارات الموارد البشرية والتعلم والتطوير",
            "فرق القيادة والإشراف ومديرو الأقسام",
            "فرق خدمة العملاء والاتصال",
            "المدربون الداخليون",
            "الجهات الراغبة في تطوير مهارات محددة"
          ].map((aud, i) => (
            <div key={i} className="bg-sand-50 border border-sand-200 p-4 rounded-xl flex items-center justify-center">
              <span className="text-xs text-earth-800 font-light">{aud}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sage-700 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl">ابدأوا من التحدي الذي يهم فريقكم</h2>
          <p className="text-sage-100 font-light text-sm leading-relaxed">
            إذا كانت لديكم حاجة لتطوير مهارة قيادية أو تدريبية أو سلوكية داخل المؤسسة، شاركونا نبذة عن التحدي
            والفئة المستهدفة. سنراجع الاحتياج معكم ونناقش شكل التعاون المناسب.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact?type=corporate"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-sage-800 font-medium text-sm hover:bg-sand-100 transition shadow-md"
            >
              اطلبوا مقترح تدريب
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-medium text-sm hover:bg-sage-600 transition"
            >
              تواصلوا معنا للاستفسار
            </Link>
          </div>
          <p className="text-xs text-sage-200 font-light">
            إرسال الطلب لا يشكّل التزاماً بالتعاقد، وتُناقش التفاصيل والنطاق لاحقاً.
          </p>
        </div>
      </section>
    </div>
  );
}

