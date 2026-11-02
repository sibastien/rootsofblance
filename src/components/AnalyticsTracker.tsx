'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function AnalyticsTracker() {
  useEffect(() => {
    // Check if consent has been granted for analytics
    const consent = localStorage.getItem('rob_cookie_consent');
    if (consent) {
      try {
        const parsed = JSON.parse(consent);
        if (parsed.analytics) {
          // Initialize dataLayer
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: unknown[]) {
            window.dataLayer.push(args);
          }
          gtag('js', new Date());
          gtag('config', 'G-ROOTSBALANCE', { anonymize_ip: true });
        }
      } catch {
        // ignore
      }
    }
  }, []);

  return (
    <>
      {/* Structured JSON-LD Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'LocalBusiness',
                '@id': 'https://rootsofbalance.com/#business',
                name: 'Roots of Balance',
                description: 'Holistic wellness coaching, somatic nervous system regulation, and professional coach training academy.',
                url: 'https://rootsofbalance.com',
                telephone: '+1 (315) 682-9010',
                email: 'rootsofbalance@outlook.com',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Manlius',
                  addressRegion: 'NY',
                  addressCountry: 'US'
                },
                founder: {
                  '@type': 'Person',
                  name: 'Alia Alblooki',
                  jobTitle: 'Holistic Wellness Coach & Psychological Balance Specialist'
                },
                sameAs: [
                  'https://instagram.com/roots__of_balance',
                  'https://linktr.ee/RootsOfBalance',
                  'https://t.me/RootsOfBalance',
                  'https://youtube.com/@RootsOfBalance'
                ]
              },
              {
                '@type': 'EducationalOrganization',
                '@id': 'https://rootsofbalance.com/#academy',
                name: 'Roots of Balance Training Academy',
                description: 'Comprehensive 9-module professional training program for aspiring holistic wellness coaches.',
                url: 'https://rootsofbalance.com/academy'
              }
            ]
          })
        }}
      />

      {/* Google Analytics 4 Script placeholder */}
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ROOTSBALANCE"
      />
    </>
  );
}

// Global declaration for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

