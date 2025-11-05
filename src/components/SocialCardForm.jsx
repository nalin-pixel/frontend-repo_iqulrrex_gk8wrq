import { useState } from 'react'
import { Link as LinkIcon, User, Image as ImageIcon, AtSign, Globe, Phone, Tags, Wallet } from 'lucide-react'

export default function SocialCardForm() {
  const [form, setForm] = useState({
    name: '',
    bio: '',
    category: '',
    niche: '',
    instagram: '',
    youtube: '',
    linkedin: '',
    twitter: '',
    website: '',
    portfolio: '',
    price: '',
    contact: '',
  })

  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('This is a UI-only demo. Backend will save and generate your shareable link in the next step.')
  }

  return (
    <section id="create" className="relative py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Create your Social Card</h2>
          <p className="text-gray-600">Your social identity first. Add links so people can know your work before connecting.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" icon={User}>
                  <input value={form.name} onChange={e => update('name', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Jane Doe" />
                </Field>
                <Field label="Category" icon={Tags}>
                  <input value={form.category} onChange={e => update('category', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="e.g., Fitness Trainer" />
                </Field>
                <Field label="Niche (auto-categorized)" icon={Tags}>
                  <input value={form.niche} onChange={e => update('niche', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="e.g., Strength & Conditioning" />
                </Field>
                <Field label="Short Bio">
                  <textarea value={form.bio} onChange={e => update('bio', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="What do you do? What results can you show?" />
                </Field>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Social Links</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Instagram" icon={AtSign}><input value={form.instagram} onChange={e => update('instagram', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="https://instagram.com/username" /></Field>
                <Field label="YouTube" icon={LinkIcon}><input value={form.youtube} onChange={e => update('youtube', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="https://youtube.com/@channel" /></Field>
                <Field label="LinkedIn" icon={LinkIcon}><input value={form.linkedin} onChange={e => update('linkedin', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="https://linkedin.com/in/username" /></Field>
                <Field label="Twitter/X" icon={LinkIcon}><input value={form.twitter} onChange={e => update('twitter', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="https://twitter.com/username" /></Field>
                <Field label="Website" icon={Globe}><input value={form.website} onChange={e => update('website', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="https://yourdomain.com" /></Field>
                <Field label="Portfolio" icon={ImageIcon}><input value={form.portfolio} onChange={e => update('portfolio', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="https://behance.net/you" /></Field>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Booking</h3>
              <Field label="Pricing (optional)" icon={Wallet}><input value={form.price} onChange={e => update('price', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="e.g., $50/session" /></Field>
              <Field label="Contact (DM or Phone)" icon={Phone}><input value={form.contact} onChange={e => update('contact', e.target.value)} className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="@instagramDM or +1 234 567 8900" /></Field>
              <button type="submit" className="mt-4 w-full rounded-lg bg-gray-900 text-white px-4 py-3 font-semibold hover:bg-black/90 transition">Generate Social Card</button>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Preview</h3>
              <div className="rounded-xl border bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gray-200" />
                  <div>
                    <p className="font-semibold text-gray-900">{form.name || 'Your name'}</p>
                    <p className="text-xs text-gray-600">{form.category || 'Profession'} • {form.niche || 'Niche'}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-700 line-clamp-3">{form.bio || 'A short bio that highlights your proof of work, results and credibility.'}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[form.instagram, form.youtube, form.linkedin, form.twitter, form.website, form.portfolio].filter(Boolean).slice(0,4).map((url, idx) => (
                    <span key={idx} className="text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-700 truncate max-w-[140px]">{url}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

function Field({ label, icon: Icon, children }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-medium text-gray-700 flex items-center gap-2">{Icon ? <Icon size={14} /> : null}{label}</span>
      {children}
    </label>
  )
}
