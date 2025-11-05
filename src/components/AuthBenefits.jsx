import React from 'react';
import { Shield, Star, Users, Calendar } from 'lucide-react';

export default function AuthBenefits() {
  const items = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Privacy first',
      desc: 'Your identity and data stay protected with enterprise-grade security.'
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: 'Credible proof',
      desc: 'Showcase verified work and testimonials pulled from social networks.'
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Trust graph',
      desc: 'Discover experts through connections you already trust.'
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: 'One‑click booking',
      desc: 'Sync calendars and confirm sessions without the back-and-forth.'
    }
  ];

  return (
    <section id="features" className="relative isolate">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-purple-500/10 to-cyan-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Why sign in</h2>
          <p className="mt-2 text-white/70">Gain access to personalized recommendations, verified portfolios, and faster bookings.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
