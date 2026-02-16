import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Crowns & Bridges Gold Coast | Restorative Dentistry | ArtSmiles",
  description:
    "Restore damaged or missing teeth with custom crowns and bridges on the Gold Coast. Natural-looking, durable restorations that blend seamlessly with your smile.",
};

const crownTypes = [
  {
    title: "Porcelain Crowns",
    subtitle: "Most Natural-Looking",
    description:
      "Premium all-ceramic crowns that perfectly mimic the translucency and colour of natural teeth. Ideal for front teeth where aesthetics are paramount.",
    benefits: [
      "Superior aesthetics—indistinguishable from natural teeth",
      "Biocompatible and metal-free",
      "Stain-resistant and durable",
      "Perfect shade-matching",
    ],
  },
  {
    title: "Porcelain-Fused-to-Metal (PFM)",
    subtitle: "Strong & Aesthetic",
    description:
      "A metal substructure for strength covered with natural-looking porcelain. Offers durability for back teeth with good aesthetics for visible areas.",
    benefits: [
      "Strong and long-lasting",
      "Good aesthetics for most teeth",
      "Proven track record",
      "Cost-effective option",
    ],
  },
  {
    title: "Zirconia Crowns",
    subtitle: "Ultimate Strength",
    description:
      "High-strength ceramic material that combines the aesthetics of porcelain with exceptional durability. Excellent for both front and back teeth.",
    benefits: [
      "Extremely strong and fracture-resistant",
      "Metal-free with natural translucency",
      "Biocompatible",
      "Minimal tooth preparation required",
    ],
  },
];

const bridgeTypes = [
  {
    title: "Traditional Bridge",
    description:
      "Replaces one or more missing teeth by anchoring to the natural teeth on either side. The most common and reliable type of dental bridge.",
  },
  {
    title: "Cantilever Bridge",
    description:
      "Used when there's only one natural tooth next to the gap. Ideal for areas with less chewing force, such as front teeth.",
  },
  {
    title: "Implant-Supported Bridge",
    description:
      "Anchored by dental implants rather than natural teeth, providing the most stable and tooth-preserving solution for multiple missing teeth.",
  },
];

const process = [
  {
    step: "Consultation & Planning",
    description:
      "We examine your teeth, take digital scans or impressions, and discuss your goals. X-rays help us assess tooth structure and determine the best restoration approach.",
  },
  {
    step: "Tooth Preparation",
    description:
      "The damaged tooth is reshaped to make room for the crown, or adjacent teeth are prepared for a bridge. We ensure proper fit and bite alignment. A temporary restoration protects your tooth while the permanent one is crafted.",
  },
  {
    step: "Custom Fabrication",
    description:
      "Your crown or bridge is handcrafted by our skilled ceramists in our on-site dental lab, ensuring precise fit, natural aesthetics, and quality control. This typically takes 7-10 days.",
  },
  {
    step: "Placement & Bonding",
    description:
      "We remove the temporary restoration, check the fit and appearance of your new crown or bridge, make any final adjustments, and permanently bond it in place. You'll leave with a fully restored, natural-looking smile.",
  },
];

const faqs = [
  {
    q: "How long do crowns and bridges last?",
    a: "With proper care, dental crowns and bridges typically last 10-15 years, and many last even longer. Longevity depends on oral hygiene, regular dental check-ups, avoiding hard foods, and not using your teeth as tools. Our high-quality materials and precision craftsmanship ensure durability.",
  },
  {
    q: "Is getting a crown or bridge painful?",
    a: "No. The procedure is performed under local anaesthetic, so you won't feel pain during treatment. Some mild sensitivity or discomfort may occur for a few days after, but this is temporary and easily managed with over-the-counter pain relief.",
  },
  {
    q: "Will my crown or bridge look natural?",
    a: "Absolutely. We custom-shade and craft each restoration to blend seamlessly with your natural teeth. Our on-site dental lab allows us to control every detail—from translucency and texture to shape and colour—ensuring your crown or bridge is virtually indistinguishable from your real teeth.",
  },
  {
    q: "Can I eat normally with a crown or bridge?",
    a: "Yes. Once your crown or bridge is permanently bonded, you can eat, speak, and smile with confidence. We recommend avoiding extremely hard foods (like ice or hard candy) that could damage any dental restoration, but you'll have full function restored.",
  },
  {
    q: "What's the difference between a crown and a bridge?",
    a: "A crown covers and restores a single damaged tooth. A bridge replaces one or more missing teeth by anchoring artificial teeth to the natural teeth (or implants) on either side of the gap. Both restore function and aesthetics.",
  },
  {
    q: "Do I need a crown after a root canal?",
    a: "In most cases, yes. After root canal treatment, the tooth becomes more brittle and prone to fracture. A crown protects and strengthens the tooth, allowing it to function normally for many years. We'll advise you based on your specific situation.",
  },
];

export default function CrownsAndBridgesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-teal to-navy">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">
            Restorative Dentistry
          </h6>
          <h1 className="text-white mb-5">Dental Crowns & Bridges Gold Coast</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Restore damaged or missing teeth with custom-made crowns and bridges
            that blend seamlessly with your natural smile.
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

      {/* What Are Crowns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
                Dental Crowns
              </h6>
              <h2 className="mb-6">What Are Dental Crowns?</h2>
              <p className="text-grey-muted leading-relaxed mb-5">
                A dental crown is a custom-made cap that completely covers a
                damaged, weakened, or unsightly tooth. Crowns restore the tooth's
                shape, size, strength, and appearance, allowing it to function
                normally again.
              </p>
              <p className="text-grey-muted leading-relaxed mb-5">
                Crowns are used to protect teeth after root canal treatment, repair
                severely decayed or broken teeth, cover dental implants, or improve
                the aesthetics of discoloured or misshapen teeth.
              </p>
              <p className="text-grey-muted leading-relaxed">
                At ArtSmiles, all crowns are handcrafted in our on-site dental lab,
                giving us complete control over quality, fit, and aesthetics. This
                means faster turnaround times and exceptional, natural-looking
                results.
              </p>
            </div>

            <div>
              <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
                Dental Bridges
              </h6>
              <h2 className="mb-6">What Are Dental Bridges?</h2>
              <p className="text-grey-muted leading-relaxed mb-5">
                A dental bridge is a fixed restoration that replaces one or more
                missing teeth by literally "bridging" the gap. The bridge consists
                of artificial teeth (pontics) anchored to the natural teeth or
                implants on either side.
              </p>
              <p className="text-grey-muted leading-relaxed mb-5">
                Unlike removable dentures, bridges are permanently cemented in
                place, giving you a stable, comfortable, and natural-looking
                solution for missing teeth.
              </p>
              <p className="text-grey-muted leading-relaxed">
                Bridges restore your ability to chew and speak properly, maintain
                your facial structure, prevent remaining teeth from shifting, and
                give you back your confident smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crown Types */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              Crown Options
            </h6>
            <h2>Types of Dental Crowns</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {crownTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <h3 className="mb-2">{type.title}</h3>
                <p className="text-gold-dark font-medium mb-4">{type.subtitle}</p>
                <p className="text-grey-muted text-sm leading-relaxed mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2 text-left">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm">
                      <svg
                        className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-grey-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              Bridge Options
            </h6>
            <h2>Types of Dental Bridges</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bridgeTypes.map((type) => (
              <div
                key={type.title}
                className="bg-grey-warm rounded-2xl p-6 text-center"
              >
                <h3 className="text-xl mb-3">{type.title}</h3>
                <p className="text-grey-muted text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              How It Works
            </h6>
            <h2>The Crown & Bridge Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg mb-3">{item.step}</h3>
                <p className="text-grey-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              Investment
            </h6>
            <h2>Crowns & Bridges Costs</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-grey-warm rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-grey-mid">
                  <div>
                    <h3 className="text-xl mb-1">Porcelain Crown</h3>
                    <p className="text-sm text-grey-muted">Per tooth</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gold-dark">
                      $1,500–$2,500
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-grey-mid">
                  <div>
                    <h3 className="text-xl mb-1">Zirconia Crown</h3>
                    <p className="text-sm text-grey-muted">Per tooth</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gold-dark">
                      $1,800–$2,800
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-grey-mid">
                  <div>
                    <h3 className="text-xl mb-1">Porcelain-Fused-to-Metal Crown</h3>
                    <p className="text-sm text-grey-muted">Per tooth</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gold-dark">
                      $1,400–$2,200
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl mb-1">Dental Bridge</h3>
                    <p className="text-sm text-grey-muted">
                      3-unit bridge (replaces 1 tooth)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gold-dark">
                      $3,500–$6,000
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl">
                <p className="text-sm text-dark leading-relaxed">
                  <strong>Payment Options:</strong> We accept Afterpay, Humm, and
                  HICAPS for instant health fund claims. Many health funds provide
                  substantial rebates for crowns and bridges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              Common Questions
            </h6>
            <h2>Crowns & Bridges FAQ</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-2xl p-6 group"
              >
                <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="pt-4 text-grey-muted leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">
            Restore Your Smile with Custom Crowns or Bridges
          </h2>
          <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Book your consultation at our Southport clinic and discover how we
            can restore your damaged or missing teeth.
          </p>
          <p className="text-gold-light text-2xl font-medium mb-10">
            <a href="tel:0755883677">(07) 5588 3677</a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-online"
              className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition font-medium"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:0755883677"
              className="rounded-full px-8 py-4 border-2 border-gold-light text-gold-light hover:bg-gold-light hover:text-dark transition font-medium"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
