'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '@/components/SocialIcons';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to dispatch message');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');

      trackEvent('contact_submitted', { subject });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send enquiry.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Header */}
      <section className="bg-sand-100/70 border-b border-sand-300/60 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
              Reach Out & Connect
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-earth-950 font-normal leading-tight">
              Get in Touch with Roots of Balance
            </h1>
            <p className="text-base sm:text-lg text-earth-700 font-light leading-relaxed">
              Have questions regarding our 1-on-1 personal coaching sessions, international time zones, or upcoming training academy admissions? We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-sand-50 border border-sand-300 rounded-3xl p-8 space-y-6">
              <h3 className="font-serif text-2xl text-earth-900 font-medium">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-earth-800">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-800 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-earth-500 text-xs block">Official Email</span>
                    <a href="mailto:rootsofbalance@outlook.com" className="font-medium text-sage-900 hover:underline">
                      rootsofbalance@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-sage-800 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-earth-500 text-xs block">Studio & Online Base</span>
                    <span className="font-medium text-earth-900">Manlius, New York • Online Globally (MENA & Worldwide)</span>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-6 border-t border-sand-200 space-y-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-earth-700 block">
                  Official Channels & Community:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="https://instagram.com/roots__of_balance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-sand-100 hover:bg-sand-200 rounded-xl border border-sand-300 flex items-center gap-2 text-earth-800 font-medium transition"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-700" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://t.me/RootsOfBalance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-sand-100 hover:bg-sand-200 rounded-xl border border-sand-300 flex items-center gap-2 text-earth-800 font-medium transition"
                  >
                    <Send className="w-4 h-4 text-sky-600" />
                    <span>Telegram</span>
                  </a>

                  <a
                    href="https://youtube.com/@RootsOfBalance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-sand-100 hover:bg-sand-200 rounded-xl border border-sand-300 flex items-center gap-2 text-earth-800 font-medium transition"
                  >
                    <YoutubeIcon className="w-4 h-4 text-red-600" />
                    <span>YouTube</span>
                  </a>

                  <a
                    href="https://linktr.ee/RootsOfBalance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-sand-100 hover:bg-sand-200 rounded-xl border border-sand-300 flex items-center gap-2 text-earth-800 font-medium transition"
                  >
                    <ExternalLink className="w-4 h-4 text-sage-700" />
                    <span>Linktree Hub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-sand-50 border border-sand-300 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-earth-900 font-medium mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-earth-600 font-light">
                We typically reply within 24–48 business hours.
              </p>
            </div>

            {status === 'success' && (
              <div className="bg-sage-100 border border-sage-300 rounded-2xl p-4 text-xs text-sage-900 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage-700 shrink-0" />
                <span>Thank you. Your message has been received. We will respond to your email promptly.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="bg-terracotta-50 border border-terracotta-300 rounded-2xl p-4 text-xs text-terracotta-900 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-terracotta-700 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-earth-700 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Amanda Rivers"
                    className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-earth-700 block mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="amanda@example.com"
                    className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-earth-700 block mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-earth-700 block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Online session question, Academy question"
                    className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-earth-700 block mb-1">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we support your wellness or coaching journey?"
                  className="w-full bg-sand-100 border border-sand-300 rounded-xl p-3.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Dispatching Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
