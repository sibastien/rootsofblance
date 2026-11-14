import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الدليل المجاني للعافية الشاملة والاتزان الداخلي | جذور التوازن',
  description:
    'دليل عملي مجاني من جذور التوازن للمرأة الطامحة لاكتشاف ذاتها، فهم احتياجاتها العاطفية والجسدية، وتفكيك الإجهاد بخطوات هادئة قابلة للتطبيق اليومي.',
  keywords: [
    'دليل مجاني',
    'جذور التوازن',
    'العافية الشاملة',
    'العودة إلى الذات',
    'علياء البلوكي',
    'التوازن النفسي',
    'إدارة الإجهاد'
  ],
  openGraph: {
    title: 'احصلي على دليلك المجاني | جذور التوازن',
    description:
      'خطوتك الأولى نحو الصفاء الذهني والسلام الداخلي. تصفحي دليلاً إرشادياً مصمماً بعناية للعودة إلى نفسك.',
    locale: 'ar_AE',
    type: 'website',
  },
};

export default function FreeGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#221F1A] font-sans antialiased" dir="rtl">
      {children}
    </div>
  );
}
