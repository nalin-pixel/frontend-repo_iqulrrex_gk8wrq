import { Camera, Dumbbell, Brush, Briefcase, GraduationCap, HeartPulse, Music, PenTool } from 'lucide-react'

const categories = [
  { name: 'Photographers', icon: Camera, color: 'from-pink-400 to-rose-500' },
  { name: 'Fitness Trainers', icon: Dumbbell, color: 'from-emerald-400 to-teal-500' },
  { name: 'Makeup Artists', icon: Brush, color: 'from-fuchsia-400 to-purple-500' },
  { name: 'Business Consultants', icon: Briefcase, color: 'from-amber-400 to-orange-500' },
  { name: 'Coaches & Mentors', icon: GraduationCap, color: 'from-blue-400 to-indigo-500' },
  { name: 'Health & Wellness', icon: HeartPulse, color: 'from-lime-400 to-green-500' },
  { name: 'Musicians & Artists', icon: Music, color: 'from-cyan-400 to-blue-500' },
  { name: 'Designers & Creators', icon: PenTool, color: 'from-violet-400 to-purple-600' },
]

export default function CategoryBrowser() {
  return (
    <section id="browse" className="relative py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore categories</h2>
            <p className="text-gray-600">Find experts by niche. Don’t see yours? You can add it while creating your card.</p>
          </div>
          <a href="#create" className="text-sm font-medium text-gray-900 hover:underline">Add your profession →</a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, icon: Icon, color }) => (
            <a key={name} href="#create" className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${color}`} />
              <div className="relative flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gray-900 text-white">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-xs text-gray-600">Discover top talent</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
