import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teeth Whitening Gold Coast | Professional Whitening | ArtSmiles",
  description:
    "Professional teeth whitening on the Gold Coast. In-chair and take-home options for a brighter, whiter smile. Safe, effective results up to 8 shades whiter.",
};

const whiteningTypes = [
  {
    title: "In-Chair Whitening",
    subtitle: "Immediate Results",
    benefits: [
      "Instant Results: Up to 8 shades whiter in just 60-90 minutes",
      "Professional Strength: Maximum-strength bleaching gel",
      "Safe & Controlled: Gum protection and expert supervision",
      "Perfect for Events: Quick transformation before special occasions",
    ],
    ideal: "Ideal for those who want fast, dramatic results and prefer professional supervision throughout the treatment.",
  },
  {
    title: "Take-Home Whitening",
    subtitle: "Gradual, Long-Lasting",
    benefits: [
      "Convenience: Whiten on your own schedule at home",
      "Custom Trays: Professionally fitted for comfort and even coverage",
      "Gradual Results: Gentle whitening over 7-14 days",
      "Longer Lasting: Maintains results with occasional touch-ups",
    ],
    ideal: "Perfect for those who prefer a gentler approach and want the flexibility to whiten at their own pace.",
  },
];

const process = [
  {
    step: "1. Consultation",
    description:
      "We assess your teeth, discuss your goals, and determine if whitening is right for you. Not all discolouration responds to whitening—we'll let you know what to expect.",
  },
  {
    step: "2. Preparation",
    description:
      "For in-chair: We protect your gums and apply professional-strength whitening gel. For take-home: We take impressions to create your custom trays.",
  },
  {
    step: "3. Treatment",
    description:
      "In-chair: Multiple applications of whitening gel activated by LED light over 60-90 minutes. Take-home: You apply gel daily for 30-60 minutes over 1-2 weeks.",
  },
  {
    step: "4. Results & Maintenance",
    description:
      "See immediate results with in-chair, or gradual brightening with take-home. We provide aftercare advice and optional touch-up kits to maintain your new smile.",
  },
];

const faqs = [
  {
    q: "How long do teeth whitening results last?",
    a: "Results typically last 6 months to 2 years depending on your diet, oral hygiene, and lifestyle habits. Avoiding staining foods and drinks (coffee, red wine, tea) and maintaining good oral hygiene helps prolong results. Occasional touch-ups with take-home kits can maintain your bright smile.",
  },
  {
    q: "Is teeth whitening safe?",
    a: "Yes. Professional teeth whitening at ArtSmiles is safe when performed under the supervision of experienced dentists. We use Australian-approved whitening agents and protect your gums throughout the process. Some patients experience temporary sensitivity, which usually resolves within 24-48 hours.",
  },
  {
    q: "Will whitening damage my enamel?",
    a: "No. Professional whitening does not damage tooth enamel when used correctly. The whitening gel breaks down stains without harming the tooth structure. We carefully monitor treatment to ensure safety.",
  },
  {
    q: "Does whitening work on all teeth?",
    a: "Whitening works best on natural teeth with yellowing or surface stains. It's less effective on grey or brown discolouration, and doesn't whiten crowns, veneers, or fillings. If you have restorations on visible teeth, we'll discuss alternative cosmetic options like veneers.",
  },
  {
    q: "How white can my teeth get?",
    a: "Most patients achieve 4-8 shades whiter with professional whitening. Results vary based on your starting shade and the type of staining. In-chair treatments typically produce more dramatic immediate results, while take-home kits offer gradual, natural-looking improvement.",
  },
  {
    q: "Can I whiten if I have sensitive teeth?",
    a: "Yes, but we take extra precautions. We may recommend desensitising toothpaste before treatment, use lower-concentration gel, or suggest take-home whitening for gentler results. Let us know about sensitivity during your consultation.",
  },
];

export default function TeethWhiteningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gold-light via-gold to-gold-dark">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">
            Cosmetic Dentistry
          </h6>
          <h1 className="text-white mb-5">Teeth Whitening Gold Coast</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional in-chair and take-home whitening treatments to brighten
            your smile by up to eight shades safely and effectively.
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

      {/* What is Teeth Whitening */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted text-center">
              Professional Whitening
            </h6>
            <h2 className="text-center mb-6">
              What is Professional Teeth Whitening?
            </h2>
            <p className="text-grey-muted leading-relaxed mb-5">
              Professional teeth whitening is a cosmetic dental treatment that
              uses hydrogen peroxide or carbamide peroxide to break down stains
              and lighten the natural colour of your teeth. Unlike over-the-counter
              whitening strips and toothpastes, professional treatments use
              higher-strength bleaching agents under the supervision of experienced
              dentists, delivering faster, safer, and more dramatic results.
            </p>
            <p className="text-grey-muted leading-relaxed mb-5">
              At ArtSmiles, we offer two professional whitening options: in-chair
              whitening for immediate results, and take-home kits for gradual
              brightening at your convenience. Both are custom-tailored to your
              needs and goals.
            </p>
            <p className="text-grey-muted leading-relaxed">
              Whether you're preparing for a wedding, job interview, or simply
              want to refresh your smile, professional teeth whitening on the
              Gold Coast can help you achieve a brighter, more confident smile.
            </p>
          </div>
        </div>
      </section>

      {/* Whitening Types */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              Treatment Options
            </h6>
            <h2>Choose Your Whitening Method</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whiteningTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white rounded-2xl p-8 lg:p-10"
              >
                <div className="mb-6">
                  <h3 className="mb-2">{type.title}</h3>
                  <p className="text-gold-dark font-medium text-lg">
                    {type.subtitle}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5"
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

                <div className="p-4 bg-gold/10 rounded-xl">
                  <p className="text-sm text-dark">
                    <strong>Ideal For:</strong> {type.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Whitening Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              How It Works
            </h6>
            <h2>The Whitening Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="bg-grey-warm rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
      <section className="py-20 bg-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              Investment
            </h6>
            <h2>Teeth Whitening Costs</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-grey-mid">
                  <div>
                    <h3 className="text-xl mb-1">In-Chair Professional Whitening</h3>
                    <p className="text-sm text-grey-muted">
                      Single 60-90 minute session
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gold-dark">
                      $600–$900
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-grey-mid">
                  <div>
                    <h3 className="text-xl mb-1">Take-Home Whitening Kit</h3>
                    <p className="text-sm text-grey-muted">
                      Custom trays + professional gel
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gold-dark">
                      $400–$600
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl mb-1">Combination Package</h3>
                    <p className="text-sm text-grey-muted">
                      In-chair + take-home for touch-ups
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gold-dark">
                      $850–$1,200
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-grey-warm rounded-xl">
                <p className="text-sm text-dark leading-relaxed">
                  <strong>Payment Options:</strong> We accept Afterpay, Humm, and
                  all major health funds. Some health funds provide rebates for
                  whitening when combined with a check-up and clean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              Common Questions
            </h6>
            <h2>Teeth Whitening FAQ</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-grey-warm rounded-2xl p-6 group"
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
            Ready for a Brighter, Whiter Smile?
          </h2>
          <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Book your free consultation at our Southport clinic and discover
            which whitening option is right for you.
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
