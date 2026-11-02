// Privacy-First Marketing & Analytics Infrastructure
// Strictly strips PII and sensitive health notes before dispatching events

export type AnalyticsEventName =
  | 'booking_started'
  | 'booking_submitted'
  | 'academy_application_submitted'
  | 'academy_enrolled'
  | 'contact_submitted'
  | 'newsletter_subscribed'
  | 'service_viewed'
  | 'curriculum_viewed';

interface EventPayload {
  serviceId?: string;
  serviceTitle?: string;
  category?: string;
  value?: number;
  currency?: string;
  source?: string;
  format?: string;
  [key: string]: unknown;
}

export function trackEvent(eventName: AnalyticsEventName, payload: EventPayload = {}) {
  if (typeof window === 'undefined') return;

  // Check consent preference
  const consent = localStorage.getItem('rob_cookie_consent');
  if (consent) {
    try {
      const parsed = JSON.parse(consent);
      if (!parsed.analytics && !parsed.marketing) {
        // Analytics disabled by visitor
        return;
      }
    } catch {
      // ignore
    }
  }

  // Sanitize payload: explicitly remove any PII or freeform health descriptions
  const sanitized = { ...payload };
  delete sanitized.notes;
  delete sanitized.message;
  delete sanitized.motivation;
  delete sanitized.phone;
  delete sanitized.email;
  delete sanitized.clientName;
  delete sanitized.fullName;

  // 1. Google Analytics 4 (gtag)
  if (typeof (window as unknown as { gtag?: Function }).gtag === 'function') {
    (window as unknown as { gtag: Function }).gtag('event', eventName, sanitized);
  }

  // 2. Google Tag Manager (dataLayer)
  if (Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
      event: eventName,
      ...sanitized,
      timestamp: Date.now()
    });
  }

  // 3. Meta Pixel (fbq)
  if (typeof (window as unknown as { fbq?: Function }).fbq === 'function') {
    if (eventName === 'booking_submitted' || eventName === 'academy_application_submitted') {
      (window as unknown as { fbq: Function }).fbq('track', 'Lead', {
        content_name: sanitized.serviceTitle || sanitized.category || eventName,
        value: sanitized.value || 0,
        currency: sanitized.currency || 'USD'
      });
    } else {
      (window as unknown as { fbq: Function }).fbq('trackCustom', eventName, sanitized);
    }
  }

  // Also log for local verification in development
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[ANALYTICS DISPATCH] -> ${eventName}:`, sanitized);
  }
}

