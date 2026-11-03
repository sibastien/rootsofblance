import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Roots of Balance | Holistic Wellness Coach & Training Academy',
  description:
    'Guiding personal transformation through somatic bodywork, nervous system regulation, and mindful habit architecture. Offering 1-on-1 holistic coaching sessions and a professional 9-module coach training academy.',
  keywords: [
    'Holistic Wellness Coach',
    'Roots of Balance',
    'Coach Training Academy',
    'Somatic Healing',
    'Nervous System Regulation',
    'Holistic Coaching MENA',
    'Become a Holistic Coach',
    'Mindfulness Coaching',
    'Life Balance'
  ],
  authors: [{ name: 'Alia Alblooki' }],
  openGraph: {
    title: 'Roots of Balance | Holistic Wellness Coaching & Professional Academy',
    description:
      'Grounded holistic wellness coaching for individuals and comprehensive professional academy training for future practitioners.',
    url: 'https://rootsofbalance.com',
    siteName: 'Roots of Balance',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Roots of Balance Holistic Coaching',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roots of Balance | Holistic Wellness Coaching & Academy',
    description: 'Transformative somatic coaching and professional wellness coach certification academy.',
    images: ['https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-sand-50 text-earth-900 selection:bg-sage-200 selection:text-sage-900">
        <LanguageProvider>
          <AnalyticsTracker />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}

