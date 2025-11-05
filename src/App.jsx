import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import AuthBenefits from "./components/AuthBenefits";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F1A] to-[#0E1222] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 pt-10">
          <div className="mb-8 text-center md:text-left">
            <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/70 bg-white/5">Sign in to continue</span>
          </div>
        </div>
        <LoginForm />
        <AuthBenefits />
      </main>

      <Footer />
    </div>
  );
}
