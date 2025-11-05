import { Shield, CheckCircle, User } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Privacy-first",
    desc: "Your data stays yours. Share only what you choose, when you choose.",
  },
  {
    icon: CheckCircle,
    title: "Credibility signals",
    desc: "Pull in proof-of-work from social and client feedback to build trust.",
  },
  {
    icon: User,
    title: "Seamless onboarding",
    desc: "Set up your expert card in minutes and start accepting bookings.",
  },
];

export default function AuthBenefits() {
  return (
    <section id="features" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center mb-3">
                <Icon size={18} />
              </div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-white/70 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
