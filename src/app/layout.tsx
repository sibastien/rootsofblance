import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import { LanguageProvider } from '@/context/LanguageContext';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'جذور التوازن | Roots of Balance — مساحة للشفاء الشمولي واكتشاف الذات',
  description:
    'مساحة لاكتشاف الذات، وفهم أعمق للعلاقة بين العقل والجسد والروح، واستكشاف طرق أكثر وعياً للعيش بتوازن وانسجام. An editorial sanctuary dedicated to holistic wellbeing, mindful awareness, and self-discovery.',
  keywords: [
    'Roots of Balance',
    'جذور التوازن',
    'الشفاء الشمولي',
    'Holistic Wellbeing',
    'اكتشاف الذات',
    'العافية الشاملة',
    'التوازن النفسي',
    'اليقظة الذهنية',
    'Mind Body Soul',
    'Alia Alblooki'
  ],
  authors: [{ name: 'Alia Alblooki' }],
  openGraph: {
    title: 'جذور التوازن | Roots of Balance',
    description:
      'مساحة لاكتشاف الذات، وفهم أعمق للعلاقة بين العقل والجسد والروح، واستكشاف طرق أكثر وعياً للعيش بتوازن وانسجام.',
    url: 'https://rootsofbalance.com',
    siteName: 'Roots of Balance',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Roots of Balance',
      },
    ],
    locale: 'ar_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roots of Balance | جذور التوازن',
    description: 'رحلتك نحو التوازن تبدأ من الداخل — مساحة للشفاء الشمولي واكتشاف الذات.',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#221F1A] antialiased">
        <LanguageProvider>
          <SmoothScrollProvider>
            <AnalyticsTracker />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <CookieConsent />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
