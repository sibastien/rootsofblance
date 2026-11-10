import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import CyberBackground from '@/components/CyberBackground';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Roots of Balance | Futuristic Bio-Harmonic Wellness & Academy',
  description:
    'Guiding personal transformation through somatic bio-hacking, nervous system regulation, and mindful habit architecture. Offering 1-on-1 coaching sessions and a professional coach certification academy.',
  keywords: [
    'Holistic Wellness Coach',
    'Roots of Balance',
    'Futuristic Wellness',
    'Coach Training Academy',
    'Somatic Healing',
    'Nervous System Regulation',
    'Bio-Harmonic Wellness',
    'Life Balance'
  ],
  authors: [{ name: 'Alia Alblooki' }],
  openGraph: {
    title: 'Roots of Balance | Bio-Harmonic Wellness & Academy',
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
    title: 'Roots of Balance | Bio-Harmonic Wellness & Academy',
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
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen flex flex-col bg-[#04080A] text-[#E6F4F1] antialiased overflow-x-hidden">
        <LanguageProvider>
          <CyberBackground />
          <AnalyticsTracker />
          <Navbar />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
