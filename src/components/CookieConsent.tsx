'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck, Settings2, X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('rob_cookie_consent');
    if (!saved) {
      // Delay prompt slightly for a calm, non-intrusive experience
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('rob_cookie_consent', JSON.stringify(all));
    setVisible(false);
  };

  const acceptEssentialOnly = () => {
    const minimal = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('rob_cookie_consent', JSON.stringify(minimal));
    setVisible(false);
  };

  const saveCustom = () => {
    localStorage.setItem('rob_cookie_consent', JSON.stringify(preferences));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and Cookie Settings"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-sand-50/95 backdrop-blur-md border border-sand-300 rounded-2xl p-5 shadow-xl text-earth-900 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-sage-700" />
          <h3 className="font-serif text-base font-medium text-earth-900">Your Privacy & Wellbeing</h3>
        </div>
        <button
          onClick={acceptEssentialOnly}
          className="text-earth-400 hover:text-earth-600 transition"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-earth-700 leading-relaxed mb-4">
        We use essential cookies to enable appointment scheduling and secure communications. With your consent, we also utilize privacy-preserving analytics to refine our coaching resources. We never sell personal or health data.
      </p>

      {showSettings ? (
        <div className="space-y-2.5 mb-4 border-t border-sand-200 pt-3 text-xs">
          <div className="flex items-center justify-between py-1">
            <div>
              <span className="font-medium text-earth-900 block">Strictly Necessary</span>
              <span className="text-[11px] text-earth-500">Required for bookings and core functions</span>
            </div>
            <span className="text-sage-700 font-medium text-[11px]">Always Active</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <div>
              <span className="font-medium text-earth-900 block">Performance & Analytics</span>
              <span className="text-[11px] text-earth-500">Helps us understand visitor journeys</span>
            </div>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
              className="accent-sage-700 h-4 w-4 rounded"
            />
          </div>
          <div className="flex items-center justify-between py-1">
            <div>
              <span className="font-medium text-earth-900 block">Marketing & Social Attribution</span>
              <span className="text-[11px] text-earth-500">Measures awareness campaigns</span>
            </div>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
              className="accent-sage-700 h-4 w-4 rounded"
            />
          </div>

          <div className="pt-2 flex gap-2">
            <button
              onClick={saveCustom}
              className="flex-1 py-2 bg-sage-700 text-white rounded-lg text-xs font-medium hover:bg-sage-800 transition"
            >
              Save Preferences
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="py-2 px-3 border border-sand-300 rounded-lg text-xs text-earth-700 hover:bg-sand-100 transition"
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => setShowSettings(true)}
            className="inline-flex items-center gap-1 text-xs text-earth-600 hover:text-earth-900 font-medium underline underline-offset-4"
          >
            <Settings2 className="w-3.5 h-3.5" />
            Customize
          </button>
          <div className="flex gap-2">
            <button
              onClick={acceptEssentialOnly}
              className="py-2 px-3 border border-sand-300 rounded-lg text-xs font-medium text-earth-800 hover:bg-sand-100 transition"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="py-2 px-4 bg-sage-700 text-white rounded-lg text-xs font-medium hover:bg-sage-800 transition shadow-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

