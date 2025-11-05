import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Github, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Placeholder submit handler for UI demo
    alert(`Logging in as ${email}`);
  };

  return (
    <section className="relative w-full">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Brand panel */}
        <div className="hidden md:block">
          <h1 className="text-4xl font-semibold tracking-tight">Welcome back</h1>
          <p className="mt-3 text-white/70 leading-relaxed">
            Sign in to SocialNaka to manage your expert profile, bookings, and social proof
            in one place.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/80">Fast onboarding</p>
              <p className="text-xs text-white/60 mt-1">Link your socials and go live</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/80">Trust-first</p>
              <p className="text-xs text-white/60 mt-1">Proof-of-work driven credibility</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/80">Smart bookings</p>
              <p className="text-xs text-white/60 mt-1">Route clients to your channels</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/80">Private by default</p>
              <p className="text-xs text-white/60 mt-1">Share what you choose</p>
            </div>
          </div>
        </div>

        {/* Login card */}
        <div className="w-full">
          <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Log in</h2>
              <p className="text-sm text-white/60 mt-1">Enter your details to continue</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-white/80" htmlFor="email">Email</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/50">
                    <Mail size={16} />
                  </span>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-white/30 outline-none placeholder-white/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/80" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/50">
                    <Lock size={16} />
                  </span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/10 border border-white/10 focus:border-white/30 outline-none placeholder-white/40"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/60 hover:text-white"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 select-none">
                  <input type="checkbox" className="accent-indigo-500" />
                  Remember me
                </label>
                <a href="#" className="text-indigo-300 hover:text-indigo-200">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium shadow-lg shadow-indigo-600/30"
              >
                Continue
                <ArrowRight size={16} />
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-transparent px-2 text-white/50">or</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors">
                  {/* Simple G mark */}
                  <svg width="16" height="16" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M255.86 131.12c0-10.9-.98-21.36-2.8-31.36H130.5v59.3h70.5c-3.04 16.43-12.27 30.36-26.2 39.74v32.98h42.3c24.76-22.8 38.76-56.4 38.76-100.66z"/>
                    <path fill="#34A853" d="M130.5 261.1c35.1 0 64.6-11.64 86.1-31.32l-42.3-32.98c-11.78 7.9-26.86 12.6-43.8 12.6-33.68 0-62.2-22.72-72.4-53.3H14.7v33.5c21.34 42.3 65.34 71.5 115.8 71.5z"/>
                    <path fill="#FBBC05" d="M58.1 156.1c-2.7-8.1-4.3-16.7-4.3-25.6s1.6-17.5 4.3-25.6V71.4H14.7C5.3 89.5 0 110.1 0 131.1s5.3 41.6 14.7 59.7l43.4-34.7z"/>
                    <path fill="#EA4335" d="M130.5 51.5c19.1 0 36.2 6.6 49.7 19.5l37.3-37.3C195.1 12 165.6 0 130.5 0 80.04 0 36.04 29.2 14.7 71.4l43.4 33.5c10.2-30.6 38.7-53.4 72.4-53.4z"/>
                  </svg>
                  Google
                </button>
                <button type="button" className="inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-black text-white hover:bg-black/90 transition-colors">
                  <Github size={16} />
                  GitHub
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-white/70">
              No account? <a href="#" className="text-indigo-300 hover:text-indigo-200 font-medium">Create one</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
