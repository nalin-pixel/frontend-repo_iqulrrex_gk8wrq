import { Star, CheckCircle2, ShieldCheck } from 'lucide-react'

const items = [
  {
    title: 'Proof over claims',
    desc: 'Follower counts, engagement, consistency and brand clarity — not random listings.',
    icon: Star,
  },
  {
    title: 'Authenticity signals',
    desc: 'Detect spam with content frequency, comment quality and duplicate text patterns.',
    icon: ShieldCheck,
  },
  {
    title: 'Relevant audience',
    desc: 'Score matches between your niche and audience behavior for better lead quality.',
    icon: CheckCircle2,
  },
]

export default function CredibilityHighlights() {
  return (
    <section className="relative py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Credibility that compounds</h2>
          <p className="text-gray-600">Our ranking puts genuine, consistent creators and professionals first.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gray-900 text-white">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
