'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Calendar, Send, CheckCircle2, Building, User } from 'lucide-react';

export default function ContactPage() {
  const [tab, setTab] = useState<'individual' | 'corporate'>('individual');
  const [submitted, setSubmitted] = useState(false);

  // Individual Form State
  const [indName, setIndName] = useState('');
  const [indEmail, setIndEmail] = useState('');
  const [indPhone, setIndPhone] = useState('');
  const [indTopic, setIndTopic] = useState('العودة إلى الذات');
  const [indDate, setIndDate] = useState('');
  const [indNote, setIndNote] = useState('');
  const [indConsent, setIndConsent] = useState(false);

  // Corporate Form State
  const [corpOrg, setCorpOrg] = useState('');
  const [corpContact, setCorpContact] = useState('');
  const [corpEmail, setCorpEmail] = useState('');
  const [corpPhone, setCorpPhone] = useState('');
  const [corpTopic, setCorpTopic] = useState('القيادة والمرونة المهنية');
  const [corpGoals, setCorpGoals] = useState('');
  const [corpAudienceCount, setCorpAudienceCount] = useState('');
  const [corpConsent, setCorpConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-sand-50" dir="rtl">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#f5f0e8] to-sand-50 pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
            جذور التوازن — التواصل والحجز
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-earth-950 font-normal leading-tight">
            التواصل يبدأ بخطوة واضحة
          </h1>
          <p className="text-base text-earth-700 font-light leading-relaxed max-w-2xl mx-auto">
            سواءٌ كنتِ تبحثين عن مساحة لفهم احتياجاتِك واختيار برنامج يناسبِك، أو تمثلون مؤسسة ترغب
            في تطوير مهارات فريقها، اختاروا المسار المناسب، وسنوضح لكم الخطوة التالية بكل بساطة.
          </p>
        </div>
      </section>

      {/* Selector Tabs */}
      <section className="max-w-3xl mx-auto px-4 pt-4 pb-8">
        <div className="grid grid-cols-2 gap-3 bg-sand-200/60 p-1.5 rounded-2xl">
          <button
            type="button"
            onClick={() => { setTab('individual'); setSubmitted(false); }}
            className={`py-3 rounded-xl text-xs sm:text-sm font-medium transition flex items-center justify-center gap-2 ${
              tab === 'individual'
                ? 'bg-white text-earth-950 shadow-sm'
                : 'text-earth-600 hover:text-earth-900'
            }`}
          >
            <User className="w-4 h-4 text-sage-700" />
            <span>مسار الأفراد (مكالمة استكشافية)</span>
          </button>
          <button
            type="button"
            onClick={() => { setTab('corporate'); setSubmitted(false); }}
            className={`py-3 rounded-xl text-xs sm:text-sm font-medium transition flex items-center justify-center gap-2 ${
              tab === 'corporate'
                ? 'bg-white text-earth-950 shadow-sm'
                : 'text-earth-600 hover:text-earth-900'
            }`}
          >
            <Building className="w-4 h-4 text-sage-700" />
            <span>مسار المؤسسات (طلب تدريب)</span>
          </button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        {submitted ? (
          <div className="bg-white border border-sage-200 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            {tab === 'individual' ? (
              <>
                <h3 className="font-serif text-2xl text-earth-900">تم استلام طلب المكالمة</h3>
                <p className="text-sm text-earth-600 font-light leading-relaxed max-w-md mx-auto">
                  شكراً لحجزِك. تم إرسال تفاصيل الموعد ومعلومات الاتصال إلى بريدك الإلكتروني ({indEmail}).
                  يرجى مراجعة التاريخ والوقت قبل الموعد.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-earth-900">تم استلام طلب التعاون</h3>
                <p className="text-sm text-earth-600 font-light leading-relaxed max-w-md mx-auto">
                  شكراً لاهتمامكم بالتعاون مع جذور التوازن. استلمنا المعلومات الأولية عن احتياجكم التدريبي،
                  وسنراجع الطلب ونتواصل معكم لاستكمال التفاصيل ومناقشة مقترح العمل.
                </p>
              </>
            )}
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-sage-800 font-medium hover:underline"
              >
                إرسال طلب آخر
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-sand-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            {tab === 'individual' ? (
              /* INDIVIDUAL FORM */
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block mb-1">
                    المسار الأول — للأفراد
                  </span>
                  <h2 className="font-serif text-2xl text-earth-950 font-normal">
                    المكالمة الاستكشافية المجانية (45 دقيقة)
                  </h2>
                  <p className="text-xs text-earth-600 font-light mt-1">
                    مساحة لفهم احتياجاتِك، ومناقشة مدى ملاءمة برنامج «العودة إلى الذات» أو أي خطوة تعليمية،
                    من غير التزام بالتسجيل.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-earth-700 block mb-1">الاسم الأول *</label>
                      <input
                        type="text"
                        required
                        value={indName}
                        onChange={e => setIndName(e.target.value)}
                        placeholder="اسمكِ الكريم"
                        className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-earth-700 block mb-1">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        required
                        value={indEmail}
                        onChange={e => setIndEmail(e.target.value)}
                        placeholder="yourname@example.com"
                        className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-earth-700 block mb-1">رقم الهاتف (اختياري)</label>
                      <input
                        type="tel"
                        value={indPhone}
                        onChange={e => setIndPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-earth-700 block mb-1">الموضوع الأقرب لاهتمامكِ</label>
                      <select
                        value={indTopic}
                        onChange={e => setIndTopic(e.target.value)}
                        className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                      >
                        <option value="العودة إلى الذات">برنامج العودة إلى الذات</option>
                        <option value="جلسات فردية">جلسات كوتشينغ فردية</option>
                        <option value="استفسار عام عن الملاءمة">استفسار عام عن الملاءمة</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-earth-700 block mb-1">اختاري الموعد المناسب *</label>
                    <input
                      type="datetime-local"
                      required
                      value={indDate}
                      onChange={e => setIndDate(e.target.value)}
                      className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-earth-700 block mb-1">ملاحظة مختصرة (اختياري)</label>
                    <textarea
                      rows={3}
                      value={indNote}
                      onChange={e => setIndNote(e.target.value)}
                      placeholder="ما الذي تتطلعين إلى تحسينه أو تغييره؟"
                      className="w-full bg-sand-50 border border-sand-300 rounded-xl p-3 text-xs text-earth-900 focus:outline-none focus:border-sage-600 resize-none"
                    />
                  </div>

                  <div className="space-y-2 pt-2 border-t border-sand-100">
                    <label className="flex items-start gap-2 text-xs text-earth-700 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={indConsent}
                        onChange={e => setIndConsent(e.target.checked)}
                        className="mt-0.5 rounded text-sage-700 focus:ring-sage-600"
                      />
                      <span>أوافق على سياسة الخصوصية واستخدام بياناتي لغرض معالجة الطلب والتواصل بشأنه. *</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>تأكيد حجز المكالمة الاستكشافية (45 دقيقة)</span>
                  </button>
                  <p className="text-[11px] text-earth-500 font-light text-center">
                    المكالمة للتعارف والاستكشاف، وليست جلسة علاج نفسي أو استشارة طبية.
                  </p>
                </form>
              </div>
            ) : (
              /* CORPORATE FORM */
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block mb-1">
                    المسار الثاني — للمؤسسات
                  </span>
                  <h2 className="font-serif text-2xl text-earth-950 font-normal">
                    طلب تعاون تدريبي
                  </h2>
                  <p className="text-xs text-earth-600 font-light mt-1">
                    نصمم برامج تدريبية وتطويرية تستجيب لاحتياجات فريقكم في القيادة والمرونة والتواصل والتحسين المستمر.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-earth-700 block mb-1">اسم المؤسسة والقطاع *</label>
                      <input
                        type="text"
                        required
                        value={corpOrg}
                        onChange={e => setCorpOrg(e.target.value)}
                        placeholder="اسم الجهة أو الشركة"
                        className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-earth-700 block mb-1">اسم مسؤول التواصل والمسمى *</label>
                      <input
                        type="text"
                        required
                        value={corpContact}
                        onChange={e => setCorpContact(e.target.value)}
                        placeholder="الاسم والمسمى الوظيفي"
                        className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-earth-700 block mb-1">البريد الإلكتروني المهني *</label>
                      <input
                        type="email"
                        required
                        value={corpEmail}
                        onChange={e => setCorpEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-earth-700 block mb-1">رقم الهاتف *</label>
                      <input
                        type="tel"
                        required
                        value={corpPhone}
                        onChange={e => setCorpPhone(e.target.value)}
                        placeholder="+971 4 000 0000"
                        className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-earth-700 block mb-1">مجال التدريب المطلوب *</label>
                      <select
                        value={corpTopic}
                        onChange={e => setCorpTopic(e.target.value)}
                        className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                      >
                        <option value="القيادة والمرونة المهنية">القيادة والمرونة المهنية</option>
                        <option value="تدريب المدربين والتواصل المؤثر">تدريب المدربين والتواصل المؤثر</option>
                        <option value="التميز والتحسين المستمر Kaizen">التميز والتحسين المستمر Kaizen</option>
                        <option value="تصميم ورشة مخصصة">تصميم ورشة مخصصة</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-earth-700 block mb-1">العدد التقريبي للمشاركين</label>
                      <input
                        type="text"
                        value={corpAudienceCount}
                        onChange={e => setCorpAudienceCount(e.target.value)}
                        placeholder="مثال: 15–20 مشارك"
                        className="w-full bg-sand-50 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-earth-700 block mb-1">الهدف أو التحدي التدريبي *</label>
                    <textarea
                      rows={3}
                      required
                      value={corpGoals}
                      onChange={e => setCorpGoals(e.target.value)}
                      placeholder="صفوا باختصار التحدي التدريبي أو المهارات المستهدفة..."
                      className="w-full bg-sand-50 border border-sand-300 rounded-xl p-3 text-xs text-earth-900 focus:outline-none focus:border-sage-600 resize-none"
                    />
                  </div>

                  <div className="space-y-2 pt-2 border-t border-sand-100">
                    <label className="flex items-start gap-2 text-xs text-earth-700 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={corpConsent}
                        onChange={e => setCorpConsent(e.target.checked)}
                        className="mt-0.5 rounded text-sage-700 focus:ring-sage-600"
                      />
                      <span>أوافق على سياسة الخصوصية واستخدام البيانات للتواصل بشأن المقترح التدريبي. *</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال طلب مقترح التدريب</span>
                  </button>
                  <p className="text-[11px] text-earth-500 font-light text-center">
                    إرسال الطلب لا يشكّل التزاماً بالتعاقد؛ سنراجع التفاصيل ونتواصل لمناقشة النطاق والتكلفة.
                  </p>
                </form>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Alternative Options */}
      <section className="max-w-3xl mx-auto px-4 pb-20 text-center space-y-4">
        <div className="bg-sand-100/70 border border-sand-200 rounded-2xl p-6">
          <h4 className="font-serif text-lg text-earth-900 mb-2">تفضّلين البداية دون حجز؟</h4>
          <p className="text-xs sm:text-sm text-earth-600 font-light max-w-md mx-auto mb-4">
            إذا كنتِ في مرحلة الاستكشاف، يمكنِك البدء بالدليل المجاني وقراءة موضوعات الوعي والقيادة الذاتية.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/insights" className="text-xs font-semibold text-sage-800 hover:underline">
              مكتبة المعرفة &larr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
