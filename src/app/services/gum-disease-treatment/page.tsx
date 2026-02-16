import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gum Disease Treatment Gold Coast | Periodontal Care | ArtSmiles",
  description:
    "Professional gum disease treatment on the Gold Coast. From gingivitis to advanced periodontitis, we restore gum health and prevent tooth loss.",
};

const symptoms = [
  "Bleeding gums during brushing or flossing",
  "Red, swollen, or tender gums",
  "Persistent bad breath (halitosis)",
  "Receding gums or teeth appearing longer",
  "Loose or shifting teeth",
  "Pain or discomfort when chewing",
];

const treatments = [
  {
    title: "Professional Deep Cleaning",
    desc: "Scaling and root planing to remove plaque and tartar from below the gum line, allowing gums to heal and reattach.",
  },
  {
    title: "Antimicrobial Treatments",
    desc: "Specialized rinses or localized antibiotics to eliminate infection-causing bacteria.",
  },
  {
    title: "Pocket Reduction Surgery",
    desc: "For advanced cases, surgical intervention to reduce deep gum pockets and restore healthy tissue.",
  },
  {
    title: "Bone Grafting",
    desc: "Regenerative procedures to rebuild bone lost due to periodontitis, stabilizing teeth.",
  },
];

export default function GumDiseaseTreatmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-brown-warm via-gold-dark to-dark-deep">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">
            Periodontal Care
          </h6>
          <h1 className="text-white mb-5">Gum Disease Treatment</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional treatment for gum disease (periodontal disease) to restore gum health, prevent tooth loss, and protect your smile.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-online"
              className="bg-gold-dark text-white hover:bg-brown-warm transition rounded-full px-8 py-4 font-medium inline-block"
            >
              Book Gum Assessment
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

      {/* What is Gum Disease */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-6">What is Gum Disease?</h2>
            <p className="text-grey-muted leading-relaxed mb-5">
              Gum disease (periodontal disease) is an infection of the gums and supporting bone structure caused by plaque buildup. If left untreated, it can lead to tooth loss and has been linked to serious health conditions including heart disease and diabetes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-grey-warm rounded-2xl p-6">
                <h3 className="text-xl mb-3 font-bold text-gold-dark">Gingivitis (Early Stage)</h3>
                <p className="text-grey-muted text-sm leading-relaxed">
                  Inflammation of the gums caused by plaque buildup. Symptoms include red, swollen gums that may bleed when brushing. Fully reversible with professional cleaning and improved oral hygiene.
                </p>
              </div>
              <div className="bg-grey-warm rounded-2xl p-6">
                <h3 className="text-xl mb-3 font-bold text-brown-warm">Periodontitis (Advanced)</h3>
                <p className="text-grey-muted text-sm leading-relaxed">
                  Advanced infection that damages gum tissue and bone supporting teeth. Gums pull away from teeth, forming pockets that become infected. Requires professional treatment to prevent tooth loss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-6">Common Signs of Gum Disease</h2>
          <p className="text-grey-muted text-center max-w-3xl mx-auto mb-10">
            Early detection is key. If you notice any of these symptoms, book a gum assessment:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {symptoms.map((symptom) => (
              <div key={symptom} className="bg-white rounded-xl p-6 flex items-start gap-3">
                <svg className="w-5 h-5 text-brown-warm flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span className="text-dark text-sm leading-relaxed">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">Gum Disease Treatment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {treatments.map((treatment) => (
              <div key={treatment.title} className="bg-gold/10 rounded-2xl p-8">
                <h3 className="text-xl mb-3 font-bold">{treatment.title}</h3>
                <p className="text-grey-muted leading-relaxed">{treatment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-6">Prevention & Ongoing Care</h2>
            <p className="text-grey-muted text-center leading-relaxed mb-10">
              After treatment, maintaining gum health requires ongoing commitment:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Regular Cleanings", desc: "Professional cleanings every 3-6 months to remove plaque and tartar" },
                { title: "Daily Oral Hygiene", desc: "Brush twice daily, floss daily, and use antimicrobial mouthwash as recommended" },
                { title: "Lifestyle Changes", desc: "Quit smoking, manage diabetes, eat a balanced diet, and reduce stress" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-grey-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">Common Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "Can gum disease be cured?",
                a: "Gingivitis (early-stage gum disease) is fully reversible with professional treatment and improved oral hygiene. Advanced periodontitis can be controlled and managed, but bone and tissue loss are permanent. Early intervention is critical.",
              },
              {
                q: "Is gum disease treatment painful?",
                a: "Most treatments are performed under local anaesthetic, so you won't feel pain during the procedure. Deep cleaning may cause mild sensitivity for a few days, easily managed with over-the-counter pain relief.",
              },
              {
                q: "What happens if I don't treat gum disease?",
                a: "Untreated gum disease progresses, causing permanent bone loss, tooth loss, and has been linked to serious health conditions including heart disease, stroke, and diabetes complications. Early treatment prevents these outcomes.",
              },
              {
                q: "How much does gum disease treatment cost?",
                a: "Costs vary based on severity. Early gingivitis treatment (professional cleaning) starts around $200-$300. Advanced periodontitis requiring deep cleaning or surgery ranges from $500-$3,000+. We provide transparent quotes after assessment.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-grey-warm rounded-2xl p-6 group">
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
          <h2 className="text-white mb-6">Protect Your Gums, Protect Your Smile</h2>
          <p className="text-white/80 text-lg mb-4">Book a comprehensive gum assessment to catch problems early.</p>
          <p className="text-gold-light text-2xl font-medium mb-10">
            <a href="tel:0755883677">(07) 5588 3677</a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-online" className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition font-medium">
              Book Gum Assessment
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
