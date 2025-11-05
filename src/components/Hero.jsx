import Spline from '@splinetool/react-spline'
import { Rocket, Shield, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="backdrop-blur-sm/0">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            <Shield size={14} /> Trust-first expert discovery
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            SocialNaka
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-700 max-w-xl">
            Networking After Knowing Anything. Discover verified creators and professionals by their proof of work — then connect or book them directly.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#create" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 font-medium shadow hover:bg-black/90 transition">
              <Rocket size={18} /> Create your Social Card
            </a>
            <a href="#browse" className="inline-flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur text-gray-900 px-5 py-3 font-medium shadow border border-gray-200 hover:bg-white transition">
              <Users size={18} /> Browse experts
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/80 via-white/30 to-transparent rounded-3xl" />
        </div>
      </div>
    </section>
  )
}
