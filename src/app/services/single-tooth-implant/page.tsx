import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Single Tooth Implant Gold Coast | Replace One Missing Tooth | ArtSmiles",
  description:
    "Replace a single missing tooth with a permanent dental implant. Natural-looking, long-lasting solution that preserves your jawbone and adjacent teeth.",
};

const benefits = [
  {
    title: "Lifelong Tooth Replacement",
    desc: "With proper care, a single tooth implant can last a lifetime—no need for periodic replacement like bridges.",
  },
  {
    title: "Natural Aesthetic Match",
    desc: "Custom crown precisely shade-matched to blend seamlessly with your existing teeth.",
  },
  {
    title: "Prevents Bone Loss",
    desc: "The titanium post stimulates jawbone, preventing the deterioration that occurs with missing teeth.",
  },
  {
    title: "Preserves Adjacent Teeth",
    desc: "Unlike bridges, implants don't require grinding down healthy neighboring teeth for support.",
  },
  {
    title: "Easy Maintenance",
    desc: "Care for it just like a natural tooth—brush, floss, and regular check-ups.",
  },
  {
    title: "Improved Quality of Life",
    desc: "Eat, speak, and smile with confidence. No slipping, clicking, or dietary restrictions.",
  },
];

const vsbridge = [
  { aspect: "Lifespan", implant: "Lifetime with proper care", bridge: "10-15 years, then replacement needed" },
  { aspect: "Adjacent Teeth", implant: "No impact on neighboring teeth", bridge: "Requires reshaping adjacent teeth" },
  { aspect: "Bone Health", implant: "Stimulates and preserves jawbone", bridge: "Bone loss continues under bridge" },
  { aspect: "Maintenance", implant: "Brush and floss like natural teeth", bridge: "Special flossing tools required" },
  { aspect: "Initial Cost", implant: "$3,000-$6,200", bridge: "$2,500-$5,000 (but needs replacement)" },
];

export default function SingleToothImplantPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-r from-teal via-navy to-dark">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">
            Permanent Tooth Replacement
          </h6>
          <h1 className="text-white mb-5">Single Tooth Implant</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Replace a missing tooth with a permanent, natural-looking dental implant. No damage to adjacent teeth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-online"
              className="bg-gold-dark text-white hover:bg-brown-warm transition rounded-full px-8 py-4 font-medium inline-block"
            >
              Free Consultation
            </Link>
            <a
              href="tel:0755883677"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark transition rounded-full px-8 py-4 font-medium inline-block"
            >
              Call (07) 5588 3677
            </a>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-6">What is a Single Tooth Implant?</h2>
            <p className="text-grey-muted leading-relaxed mb-8 text-center">
              A single tooth implant is a permanent replacement for one missing tooth. It consists of three parts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Titanium Post", desc: "Medical-grade titanium screw surgically placed in jawbone, acting as artificial tooth root" },
                { title: "Abutment", desc: "Connector piece that attaches to the implant post and holds the crown" },
                { title: "Custom Crown", desc: "Porcelain tooth replacement precisely matched to your natural teeth" },
              ].map((part, i) => (
                <div key={part.title} className="bg-grey-warm rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-lg mb-2">{part.title}</h3>
                  <p className="text-grey-muted text-sm">{part.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">Why Choose a Single Tooth Implant?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-6">
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-grey-muted text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implant vs Bridge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-6">Single Tooth Implant vs. Dental Bridge</h2>
          <p className="text-grey-muted text-center max-w-3xl mx-auto mb-10">
            Both replace a missing tooth, but implants offer superior long-term benefits:
          </p>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-grey-warm rounded-2xl overflow-hidden">
              <thead className="bg-gold text-white">
                <tr>
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Dental Implant</th>
                  <th className="p-4 text-left">Dental Bridge</th>
                </tr>
              </thead>
              <tbody>
                {vsbridge.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-grey-warm"}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4 text-grey-muted">{row.implant}</td>
                    <td className="p-4 text-grey-muted">{row.bridge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">The Implant Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Consultation", desc: "Free consultation, 3D X-ray, and treatment planning", time: "1 visit" },
              { step: "Implant Surgery", desc: "Titanium post placed in jawbone under local anaesthetic", time: "45-60 min" },
              { step: "Healing Period", desc: "Implant integrates with bone (osseointegration)", time: "2-6 months" },
              { step: "Crown Placement", desc: "Custom crown attached to implant", time: "1 visit" },
            ].map((phase, i) => (
              <div key={phase.step} className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center mb-4 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg mb-2">{phase.step}</h3>
                <p className="text-grey-muted text-sm mb-2">{phase.desc}</p>
                <p className="text-xs text-gold-dark font-medium">{phase.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-10">Single Tooth Implant Cost</h2>
            <div className="bg-grey-warm rounded-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl mb-2">Complete Implant Package</h3>
                  <p className="text-grey-muted">Includes implant, abutment, and crown</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gold-dark">$3,000–$6,200</p>
                </div>
              </div>

              <div className="border-t border-grey-mid pt-6">
                <h4 className="font-medium mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {[
                    "Free initial consultation",
                    "3D imaging and digital planning",
                    "Titanium implant post surgery",
                    "Abutment (connector)",
                    "Custom porcelain crown",
                    "All follow-up visits",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-grey-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-white rounded-xl">
                <p className="text-sm text-dark">
                  <strong>Payment Options:</strong> Afterpay, Humm, Smile Right, and health fund claims via HICAPS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">Common Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "How long does a single tooth implant last?",
                a: "With proper care (regular brushing, flossing, and dental check-ups), a dental implant can last a lifetime. The crown may need replacement after 10-15 years due to normal wear, but the implant itself is permanent.",
              },
              {
                q: "Is the procedure painful?",
                a: "No. The surgery is performed under local anaesthetic, so you won't feel pain during the procedure. Most patients report mild discomfort for a few days afterward, easily managed with over-the-counter pain relief.",
              },
              {
                q: "Am I a candidate for a dental implant?",
                a: "Most healthy adults are candidates. You need adequate jawbone density and good oral health. We assess your suitability during the free consultation using 3D imaging.",
              },
              {
                q: "How long does the entire process take?",
                a: "Typically 3-6 months from implant placement to final crown. The implant needs 2-6 months to integrate with your jawbone before the crown can be attached.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-2xl p-6 group">
                <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="pt-4 text-grey-muted leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Replace Your Missing Tooth Permanently</h2>
          <p className="text-white/80 text-lg mb-4">Book your free consultation to discuss single tooth implant options.</p>
          <p className="text-gold-light text-2xl font-medium mb-10">
            <a href="tel:0755883677">(07) 5588 3677</a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-online" className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition font-medium">
              Book Free Consultation
            </Link>
            <a href="tel:0755883677" className="rounded-full px-8 py-4 border-2 border-gold-light text-gold-light hover:bg-gold-light hover:text-dark transition font-medium">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
