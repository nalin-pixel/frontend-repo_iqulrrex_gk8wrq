import React from 'react';
import { LogIn, UserPlus, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400" />
          <span className="text-lg font-semibold tracking-tight text-white">SocialNaka</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#privacy" className="transition hover:text-white">Privacy</a>
          <a href="#support" className="transition hover:text-white">Support</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-white/90 transition hover:bg-white/5"
          >
            <LogIn className="h-4 w-4" />
            Log in
          </a>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            <UserPlus className="h-4 w-4" />
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}
