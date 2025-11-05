import React from 'react';

export default function Footer() {
  return (
    <footer id="support" className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-white/70 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} SocialNaka. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
          <a href="#contact" className="hover:text-white">Support</a>
        </nav>
      </div>
    </footer>
  );
}
