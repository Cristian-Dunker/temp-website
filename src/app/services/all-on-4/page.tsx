import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All-on-4 Dental Implants Gold Coast | Full Arch Restoration | ArtSmiles",
  description:
    "Replace a full arch of missing teeth with All-on-4 dental implants. Same-day teeth, no bone grafting required. From $13,160 per arch.",
};

const benefits = [
  "Fixed, non-removable teeth—no slipping or clicking",
  "Only 4 implants needed per arch (vs 6-10 with traditional implants)",
  "Same-day temporary teeth—leave with a smile",
  "Avoids bone grafting in most cases thanks to angled implants",
  "Natural-looking, fully functional restoration",
  "Easy maintenance—care for them like natural teeth",
];

const pricingOptions = [
  {
    title: "Overdenture (Removable)",
    price: "From $13,160",
    weekly: "$105/week",
    desc: "Removable denture secured by 2 implants with attachments",
    ideal: "Budget-friendly option with improved stability over traditional dentures",
  },
  {
    title: "All-on-4 with 3D Resin Bridge",
    price: "From $19,990",
    weekly: "$160/week",
    desc: "4 implants with temporary bridge (24-48 hours) and final resin bridge",
    ideal: "Most popular option—fixed teeth at an accessible price",
    popular: true,
  },
  {
    title: "Reinforced 3D Resin Bridge",
    price: "From $26,430",
    weekly: "$200/week",
    desc: "Includes internal titanium bar for added structural support",
    ideal: "Enhanced durability for heavy chewers",
  },
  {
    title: "Zirconia Bridge (Premium)",
    price: "From $29,800",
    weekly: "$230/week",
    desc: "Premium monolithic zirconia with titanium reinforcement",
    ideal: "Ultimate strength, aesthetics, and longevity",
  },
];

export default function AllOn4Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-bl from-gold via-gold-darker to-dark">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">
            Full Arch Restoration
          </h6>
          <h1 className="text-white mb-5">All-on-4 Dental Implants</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Replace a full arch of missing or failing teeth with just 4 strategically placed implants. Same-day teeth, no bone grafting required.
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

      {/* What is All-on-4 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">What is All-on-4?</h2>
            <p className="text-grey-muted leading-relaxed mb-5">
              All-on-4 is a revolutionary dental implant technique that replaces an entire arch of teeth (upper or lower) using just four strategically positioned titanium implants. The implants are angled to maximize contact with existing bone, providing a stable foundation for a full set of fixed replacement teeth.
            </p>
            <p className="text-grey-muted leading-relaxed">
              Unlike traditional implants that may require 6-10 posts per arch and often bone grafting, All-on-4 works with your existing bone structure and delivers immediate results—you can leave with temporary teeth the same day as surgery.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">Why Choose All-on-4?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-white rounded-xl p-6 flex items-start gap-3">
                <svg className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-dark leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">The All-on-4 Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Consultation & Planning", desc: "Digital scans, 3D imaging, and treatment design", icon: "1" },
              { step: "Implant Placement", desc: "4 titanium posts surgically placed under local anaesthetic (sedation available)", icon: "2" },
              { step: "Same-Day Temporary Bridge", desc: "Fixed provisional teeth attached within 24-48 hours", icon: "3" },
              { step: "Final Restoration", desc: "Permanent custom bridge fitted after 3-6 months healing", icon: "4" },
            ].map((phase) => (
              <div key={phase.step} className="bg-gold/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.icon}
                </div>
                <h3 className="text-lg mb-3">{phase.step}</h3>
                <p className="text-grey-muted text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-6">All-on-4 Pricing Options</h2>
          <p className="text-grey-muted text-center max-w-3xl mx-auto mb-14">
            Choose the restoration that fits your needs and budget. All options include digital planning, surgery, and post-operative care.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {pricingOptions.map((option) => (
              <div
                key={option.title}
                className={`rounded-2xl p-8 ${
                  option.popular
                    ? "bg-gold border-2 border-gold-dark shadow-lg"
                    : "bg-white"
                }`}
              >
                {option.popular && (
                  <div className="bg-gold-dark text-white text-sm font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <p className="text-3xl font-bold text-gold-dark">{option.price}</p>
                  <p className="text-grey-muted text-sm">per arch</p>
                </div>
                <p className="text-sm text-grey-muted mb-4">Or {option.weekly} with flexible payment plans</p>
                <p className="text-dark mb-4 leading-relaxed">{option.desc}</p>
                <div className="p-4 bg-grey-warm rounded-xl">
                  <p className="text-sm text-dark">
                    <strong>Ideal for:</strong> {option.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white rounded-2xl max-w-4xl mx-auto text-center">
            <p className="text-dark leading-relaxed">
              <strong>Payment Options:</strong> We accept Afterpay, Humm, Openpay, TLC, and health fund claims via HICAPS. Flexible financing available to suit your budget.
            </p>
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
                q: "Am I a candidate for All-on-4?",
                a: "Most adults with multiple missing or failing teeth are candidates. You need adequate bone density (assessed via 3D scans) and good overall health. Smokers must commit to quitting before and after surgery. We evaluate your suitability during the free consultation.",
              },
              {
                q: "Will I have teeth during the healing process?",
                a: "Yes! You'll receive a temporary fixed bridge within 24-48 hours of implant surgery. You'll never be without teeth. After 3-6 months, we replace the temporary with your permanent custom bridge.",
              },
              {
                q: "How long does the entire process take?",
                a: "Implant surgery takes 2-3 hours. Temporary teeth are fitted within 1-2 days. The final permanent bridge is placed after 3-6 months once implants have fully integrated with your jawbone.",
              },
              {
                q: "Is it painful?",
                a: "The procedure is performed under local anaesthetic (sedation also available). Most patients report less discomfort than expected. Mild soreness for a few days after surgery is normal and manageable with pain medication.",
              },
              {
                q: "How do All-on-4 implants compare to dentures?",
                a: "All-on-4 implants are fixed and permanent—no slipping, adhesives, or removal needed. They restore 100% of chewing power (vs 20% for dentures), prevent bone loss, and feel like natural teeth. While dentures are cheaper initially, implants are a long-term investment.",
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
          <h2 className="text-white mb-6">Restore Your Full Smile with All-on-4</h2>
          <p className="text-white/80 text-lg mb-4">Book your free consultation to discuss All-on-4 options and pricing.</p>
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
