'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, User, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Invalid login credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-sand-100/60">
      <div className="w-full max-w-md bg-sand-50 border border-sand-300 rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <span className="text-3xl">🪷</span>
          <h1 className="font-serif text-2xl text-earth-950 font-medium">Coach Portal</h1>
          <p className="text-xs text-earth-500 font-light">
            Roots of Balance Administrative Business Console
          </p>
        </div>

        {errorMsg && (
          <div className="bg-terracotta-50 border border-terracotta-300 text-terracotta-900 rounded-xl p-3.5 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-terracotta-700 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Demo Credentials Helper Pill */}
        <div className="bg-sage-50 border border-sage-200 rounded-xl p-3 text-xs text-sage-900 space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-sage-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Coach Credentials:</span>
          </div>
          <div className="font-mono text-[11px] text-sage-700">
            User: <strong>admin</strong> | Password: <strong>rootsbalance2026</strong>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-medium text-earth-700 block mb-1">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-earth-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-sand-100 border border-sand-300 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-earth-700 block mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-earth-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-sand-100 border border-sand-300 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-earth-900 focus:outline-none focus:border-sage-600 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider transition shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-2">
          <Link href="/" className="text-xs text-earth-500 hover:text-earth-900 transition">
            &larr; Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}

