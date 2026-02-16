import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Mouth Reconstruction Gold Coast | Complete Smile Restoration",
  description:
    "Comprehensive full mouth reconstruction on the Gold Coast. Restore function, health, and beauty with a customized multi-procedure treatment plan.",
};

export default function FullMouthReconstructionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-dark via-gold-darker to-gold-dark">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">
            Complete Smile Restoration
          </h6>
          <h1 className="text-white mb-5">Full Mouth Reconstruction</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            A comprehensive treatment plan combining multiple procedures to fully restore the function, health, and aesthetics of your entire smile.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-online"
              className="bg-gold-dark text-white hover:bg-brown-warm transition rounded-full px-8 py-4 font-medium inline-block"
            >
              Book Free Consultation
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

      {/* What is Full Mouth Reconstruction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">What is Full Mouth Reconstruction?</h2>
            <p className="text-grey-muted leading-relaxed mb-5">
              Full mouth reconstruction is a comprehensive approach to restoring your entire smile when multiple teeth are damaged, missing, or failing. It combines cosmetic and restorative dentistry techniques—such as dental implants, crowns, veneers, bridges, and gum treatments—into a single, cohesive treatment plan tailored to your unique needs.
            </p>
            <p className="text-grey-muted leading-relaxed">
              Whether you've experienced severe decay, trauma, wear from grinding, or years of neglect, full mouth reconstruction can transform your oral health, restore full function, and give you back a beautiful, confident smile.
            </p>
          </div>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2>Who Needs Full Mouth Reconstruction?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Multiple Missing Teeth", desc: "Lost several teeth due to decay, injury, or gum disease" },
              { title: "Severe Tooth Wear", desc: "Years of grinding or acid erosion have worn down your teeth" },
              { title: "Broken or Damaged Teeth", desc: "Trauma or decay has left teeth fractured or failing" },
              { title: "Advanced Gum Disease", desc: "Periodontitis has compromised teeth and jawbone" },
              { title: "Failed Dental Work", desc: "Old crowns, bridges, or fillings are breaking down" },
              { title: "Chronic Pain or Dysfunction", desc: "Difficulty chewing, speaking, or ongoing jaw pain" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center">
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-grey-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2>Treatments That May Be Included</h2>
            <p className="text-grey-muted max-w-3xl mx-auto mt-4">
              Your personalized treatment plan may combine several of these procedures:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Dental Implants (single or All-on-4)",
              "Porcelain Veneers",
              "Dental Crowns and Bridges",
              "Gum Disease Treatment (Periodontal Therapy)",
              "Bone Grafting (if needed for implants)",
              "Root Canal Therapy",
              "Tooth Extractions",
              "Orthodontics (if alignment is needed)",
              "Teeth Whitening",
              "Bite Adjustment and TMJ Treatment",
            ].map((treatment) => (
              <div key={treatment} className="flex items-start gap-3 bg-grey-warm rounded-xl p-4">
                <svg className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-dark font-medium">{treatment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2>The Full Mouth Reconstruction Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Comprehensive Assessment", desc: "Digital scans, X-rays, photos, and functional analysis to understand your needs" },
              { step: "Custom Treatment Plan", desc: "We design a phased plan prioritizing health, function, and aesthetics" },
              { step: "Phased Treatment", desc: "Treatments are sequenced logically—often over several months—for optimal results" },
              { step: "Final Restoration & Maintenance", desc: "Complete your new smile and establish ongoing care to protect your investment" },
            ].map((item, index) => (
              <div key={item.step} className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg mb-3">{item.step}</h3>
                <p className="text-grey-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2>Common Questions</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "How long does full mouth reconstruction take?",
                a: "Treatment time varies based on complexity, but most full mouth reconstructions take 6-18 months to complete. We work in phases to ensure healing and optimal results at each stage.",
              },
              {
                q: "How much does it cost?",
                a: "Costs vary widely depending on your specific needs—typically ranging from $20,000 to $60,000+. We provide a detailed treatment plan and cost estimate after your initial consultation. Payment plans and health fund options are available.",
              },
              {
                q: "Will I have teeth during treatment?",
                a: "Yes. We provide temporary restorations so you're never without teeth. You'll be able to eat, speak, and smile confidently throughout the process.",
              },
              {
                q: "Is it painful?",
                a: "No. All procedures are performed under local anaesthetic. Sedation options are available for anxious patients. Post-treatment discomfort is typically mild and manageable.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-grey-warm rounded-2xl p-6 group">
                <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
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
          <h2 className="text-white mb-6">Ready to Restore Your Smile?</h2>
          <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Book a comprehensive consultation to discuss your full mouth reconstruction options.
          </p>
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
