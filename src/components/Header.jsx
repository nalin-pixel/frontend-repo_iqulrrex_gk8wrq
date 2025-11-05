import { LogIn } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-indigo-600/90 shadow-lg shadow-indigo-600/30 grid place-items-center text-white font-bold">
            S
          </div>
          <span className="text-lg font-semibold tracking-tight">SocialNaka</span>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#security" className="text-sm text-white/70 hover:text-white transition-colors">Security</a>
          <a href="#" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-white text-gray-900 font-medium shadow hover:shadow-md transition-shadow">
            <LogIn size={16} />
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
}
