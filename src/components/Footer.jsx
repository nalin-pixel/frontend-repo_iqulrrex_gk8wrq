export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3 text-white/70">
        <p>© {new Date().getFullYear()} SocialNaka. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </nav>
      </div>
    </footer>
  );
}
