import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Dentist Gold Coast | Urgent Dental Care | ArtSmiles",
  description: "Urgent dental care when you need it most. Same-day emergency appointments for toothaches, knocked-out teeth, and dental trauma.",
};

export default function EmergencyDentistPage() {
  return (
    <>
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-bl from-dark-deep via-brown-warm to-gold-darker">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">Urgent Care</h6>
          <h1 className="text-white mb-5">Emergency Dentist Gold Coast</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Urgent dental care when you need it most. From severe toothaches to knocked-out teeth, we provide prompt relief and treatment.
          </p>
          <div className="mt-8">
            <a href="tel:0755883677" className="bg-gold-dark text-white hover:bg-brown-warm transition rounded-full px-10 py-5 font-bold text-xl inline-block">
              Call Now: (07) 5588 3677
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">Common Dental Emergencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Severe Toothache", desc: "Intense pain requiring immediate attention and relief" },
              { title: "Knocked-Out Tooth", desc: "Dental trauma—bring the tooth and see us immediately" },
              { title: "Broken or Chipped Tooth", desc: "Fractures from injury or biting hard objects" },
              { title: "Lost Filling or Crown", desc: "Exposed tooth structure causing pain or sensitivity" },
              { title: "Abscess or Swelling", desc: "Infection requiring urgent treatment to prevent spread" },
              { title: "Bleeding Gums", desc: "Persistent bleeding that won't stop" },
            ].map((emergency) => (
              <div key={emergency.title} className="bg-grey-warm rounded-2xl p-6">
                <h3 className="text-xl mb-2">{emergency.title}</h3>
                <p className="text-grey-muted text-sm">{emergency.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-6">What to Do in a Dental Emergency</h2>
          <div className="space-y-4 text-left">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">1. Call Us Immediately</h3>
              <p className="text-grey-muted">Contact ArtSmiles on (07) 5588 3677. We prioritize emergency cases and offer same-day appointments.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">2. Manage Pain</h3>
              <p className="text-grey-muted">Take over-the-counter pain relief. Apply a cold compress to reduce swelling.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">3. Preserve the Tooth (if knocked out)</h3>
              <p className="text-grey-muted">Handle by the crown (not root), rinse gently, and keep moist in milk or saliva. Time is critical—see us within 30 minutes if possible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">We're Here to Help</h2>
          <p className="text-white/80 text-lg mb-10">Dental emergencies happen. Call us now for same-day urgent care.</p>
          <a href="tel:0755883677" className="rounded-full px-10 py-5 bg-gold-dark text-white hover:bg-brown-warm transition font-bold text-xl inline-block">
            Call (07) 5588 3677
          </a>
        </div>
      </section>
    </>
  );
}
