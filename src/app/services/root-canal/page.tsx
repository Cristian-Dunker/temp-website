import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Root Canal Treatment Gold Coast | Pain-Free Endodontics | ArtSmiles",
  description: "Save an infected or severely decayed tooth with modern root canal therapy. Advanced techniques make the procedure virtually pain-free.",
};

export default function RootCanalPage() {
  return (
    <>
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gold-dark via-brown-warm to-dark-deep">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">Endodontics</h6>
          <h1 className="text-white mb-5">Root Canal Treatment</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Save an infected or severely decayed tooth with modern root canal therapy. Advanced techniques make the procedure virtually pain-free.
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
            <h2 className="text-center mb-6">What is Root Canal Treatment?</h2>
            <p className="text-grey-muted leading-relaxed mb-5">
              Root canal treatment (endodontics) removes infected or damaged pulp (nerve tissue) from inside a tooth, cleans and disinfects the root canals, then seals them to prevent reinfection. This procedure saves the tooth, avoiding the need for extraction.
            </p>
            <p className="text-grey-muted leading-relaxed">
              Despite its reputation, modern root canal treatment is no more painful than a filling. With local anaesthetic and advanced techniques, the procedure relieves pain rather than causing it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">When Do You Need a Root Canal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Severe, persistent toothache",
              "Prolonged sensitivity to hot or cold",
              "Tooth discolouration (grey/dark)",
              "Swelling or tenderness in gums",
              "Abscess (pimple on gum)",
              "Deep decay reaching the nerve",
            ].map((sign) => (
              <div key={sign} className="bg-white rounded-xl p-6 flex items-start gap-3">
                <svg className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-dark font-medium">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">The Root Canal Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "Diagnosis", desc: "X-rays and exam to confirm infection and plan treatment" },
              { step: "Anaesthetic", desc: "Local anaesthetic ensures you feel no pain during the procedure" },
              { step: "Cleaning", desc: "Remove infected pulp, clean and shape the root canals" },
              { step: "Sealing & Restoration", desc: "Fill canals, seal tooth, then crown for protection" },
            ].map((item, index) => (
              <div key={item.step} className="bg-grey-warm rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center mb-4 text-xl font-bold">{index + 1}</div>
                <h3 className="text-lg mb-2">{item.step}</h3>
                <p className="text-grey-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center mb-10">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is root canal treatment painful?", a: "No. With local anaesthetic, you won't feel pain during the procedure. Most patients report it's no worse than getting a filling. Root canal treatment relieves pain by removing the infected nerve." },
              { q: "How long does it take?", a: "Most root canals are completed in 1-2 appointments, each lasting 60-90 minutes. Complex cases may require additional visits." },
              { q: "Will I need a crown after?", a: "Yes, in most cases. After root canal treatment, teeth become more brittle. A crown protects and strengthens the tooth, ensuring it lasts for many years." },
              { q: "What's the alternative to root canal?", a: "Extraction. However, saving your natural tooth is always preferable. Losing a tooth can lead to bone loss, shifting teeth, and the need for implants or bridges." },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-2xl p-6 group">
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
          <h2 className="text-white mb-6">Save Your Tooth with Root Canal Treatment</h2>
          <p className="text-white/80 text-lg mb-4">Experiencing tooth pain? Don't wait—infection can spread. Call us today.</p>
          <p className="text-gold-light text-2xl font-medium mb-10"><a href="tel:0755883677">(07) 5588 3677</a></p>
          <Link href="/book-online" className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition font-medium inline-block">Book Consultation</Link>
        </div>
      </section>
    </>
  );
}
