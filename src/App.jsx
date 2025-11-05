import Hero from './components/Hero'
import CategoryBrowser from './components/CategoryBrowser'
import SocialCardForm from './components/SocialCardForm'
import CredibilityHighlights from './components/CredibilityHighlights'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Top nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">SocialNaka</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#browse" className="hover:text-gray-900">Explore</a>
            <a href="#create" className="hover:text-gray-900">Create Card</a>
            <a href="#why" className="hover:text-gray-900">Why</a>
          </nav>
          <a href="#create" className="rounded-md bg-gray-900 text-white px-3 py-1.5 text-sm font-semibold hover:bg-black/90">Get Started</a>
        </div>
      </header>

      <main>
        <Hero />
        <CategoryBrowser />
        <SocialCardForm />
        <section id="why"><CredibilityHighlights /></section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">Social identity before business identity. Build with proof.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#create" className="text-gray-900 font-medium">Create your card</a>
            <span className="text-gray-300">•</span>
            <a href="#browse" className="text-gray-600 hover:text-gray-900">Browse experts</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
