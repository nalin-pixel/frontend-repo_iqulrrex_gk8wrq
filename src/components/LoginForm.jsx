import React, { useState, useMemo } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Loader2, User } from 'lucide-react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const googleAuthUrl = useMemo(() => {
    const base = import.meta.env.VITE_BACKEND_URL;
    return base ? `${base.replace(/\/$/, '')}/auth/google` : '#';
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Replace with real auth call when backend is connected
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    alert('Demo: Submitted login. Hook to backend to proceed.');
  };

  const onGuest = () => {
    try {
      localStorage.setItem('socialnaka_guest', '1');
    } catch (e) {
      // ignore storage errors
    }
    // Simple exploration flow: scroll to features for now
    window.location.hash = '#features';
  };

  return (
    <section id="login" className="relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-[-6rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Welcome back</h1>
          <p className="mt-3 max-w-prose text-white/70">
            Log in to discover trusted experts backed by social proof. Book with confidence using verified portfolios and transparent reviews.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            OAuth with Google is supported for quick access.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/90">
                Email
              </label>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex w-10 items-center justify-center text-white/40">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border border-white/10 bg-black/40 px-10 py-2.5 text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none focus:ring-0"
                  placeholder="you@domain.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-white/90">
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex w-10 items-center justify-center text-white/40">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border border-white/10 bg-black/40 px-10 py-2.5 pr-10 text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none focus:ring-0"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-white/60 hover:text-white"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-white/80">
                <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-black/60" />
                Remember me
              </label>
              <a href="#forgot" className="text-cyan-300 hover:text-cyan-200">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <div className="relative py-2 text-center text-xs uppercase tracking-widest text-white/40">
              <span className="bg-transparent px-2">or</span>
              <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </div>

            <a
              href={googleAuthUrl}
              className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-4 w-4" />
              Continue with Google
            </a>

            <button
              type="button"
              onClick={onGuest}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-transparent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <User className="h-4 w-4" />
              Continue as Guest
            </button>
            <p className="text-center text-xs text-white/60">Limited access. Your changes may not be saved.</p>

            <p className="text-center text-sm text-white/70">
              Don’t have an account?{' '}
              <a href="#signup" className="font-semibold text-cyan-300 hover:text-cyan-200">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
