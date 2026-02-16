import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wisdom Teeth Removal Gold Coast | Safe Extraction | ArtSmiles",
  description: "Safe, comfortable wisdom teeth removal on the Gold Coast. Sedation options available. Prevent crowding, infection, and pain.",
};

export default function WisdomTeethPage() {
  return (
    <>
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-tr from-navy via-teal to-gold">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">Oral Surgery</h6>
          <h1 className="text-white mb-5">Wisdom Teeth Removal</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Safe, comfortable extraction of wisdom teeth to prevent crowding, infection, and pain. Sedation options are available for anxious patients.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-online" className="bg-gold-dark text-white hover:bg-brown-warm transition rounded-full px-8 py-4 font-medium inline-block">Book Consultation</Link>
            <a href="tel:0755883677" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark transition rounded-full px-8 py-4 font-medium inline-block">Call (07) 5588 3677</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-6">When Do Wisdom Teeth Need Removal?</h2>
            <p className="text-grey-muted text-center leading-relaxed mb-10">
              Wisdom teeth (third molars) typically emerge in late teens or early twenties. Often there's not enough room, causing problems:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Impaction", desc: "Teeth stuck under gum or bone, causing pain and swelling" },
                { title: "Crowding", desc: "Pushing other teeth, causing misalignment" },
                { title: "Infection", desc: "Partial eruption traps food and bacteria (pericoronitis)" },
                { title: "Decay", desc: "Hard-to-clean position leads to cavities" },
                { title: "Cysts or Damage", desc: "Impacted teeth can damage adjacent teeth or form cysts" },
                { title: "Pain", desc: "Chronic discomfort from pressure or inflammation" },
              ].map((reason) => (
                <div key={reason.title} className="bg-grey-warm rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-grey-muted text-sm">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">The Extraction Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "Assessment", desc: "X-rays and exam to plan extraction" },
              { step: "Anaesthetic/Sedation", desc: "Local anaesthetic or sedation for comfort" },
              { step: "Extraction", desc: "Gentle removal of the tooth" },
              { step: "Recovery", desc: "Instructions and follow-up care" },
            ].map((item, index) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">{index + 1}</div>
                <h3 className="text-lg mb-2">{item.step}</h3>
                <p className="text-grey-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center mb-10">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is wisdom teeth removal painful?", a: "The procedure is painless under local anaesthetic. Post-op discomfort is manageable with pain relief and typically resolves within a few days." },
              { q: "How long is recovery?", a: "Most patients recover within 3-7 days. Swelling and discomfort peak around day 2-3, then improve. Full healing takes a few weeks." },
              { q: "Do I need sedation?", a: "Optional. We offer sedation for anxious patients or complex extractions. Many patients are comfortable with just local anaesthetic." },
            ].map((faq) => (
              <details key={faq.q} className="bg-grey-warm rounded-2xl p-6 group">
                <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="pt-4 text-grey-muted">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Book Your Wisdom Teeth Consultation</h2>
          <p className="text-gold-light text-2xl font-medium mb-10"><a href="tel:0755883677">(07) 5588 3677</a></p>
          <Link href="/book-online" className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition font-medium inline-block">Book Now</Link>
        </div>
      </section>
    </>
  );
}
