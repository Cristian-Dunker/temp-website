import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Veneers Gold Coast",
  description:
    "Explore your options for dental veneers with ArtSmiles Gold Coast. Porcelain and Composite Veneers by experienced cosmetic dentists in Southport.",
};

/* ------------------------------------------------------------------ */
/*  FAQ Accordion                                                      */
/* ------------------------------------------------------------------ */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-black/10 py-5 last:border-0">
      <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-dark">
        {question}
        <svg
          className="ml-4 h-5 w-5 shrink-0 text-gold-dark transition-transform group-open:rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </summary>
      <p className="mt-3 leading-relaxed text-grey-muted">{answer}</p>
    </details>
  );
}

/* ------------------------------------------------------------------ */
/*  Before / After pair                                                */
/* ------------------------------------------------------------------ */
function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-grey-cool shadow-sm ring-1 ring-black/5">
      <div className="grid grid-cols-2">
        <div className="relative">
          <Image
            src={before}
            alt={`${label} - Before`}
            width={500}
            height={350}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-dark/80 px-3 py-1 text-xs font-medium text-white">
            Before
          </span>
        </div>
        <div className="relative">
          <Image
            src={after}
            alt={`${label} - After`}
            width={500}
            height={350}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-3 right-3 rounded-full bg-gold-dark/90 px-3 py-1 text-xs font-medium text-white">
            After
          </span>
        </div>
      </div>
      <p className="px-4 py-3 text-center text-sm font-medium text-dark">
        {label}
      </p>
    </div>
  );
}

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */
export default function DentalVeneersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-gradient-to-br from-gold-light via-gold to-brown-warm">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 text-center">
          <h6 className="mb-3 text-sm uppercase tracking-widest text-gold-muted">
            Cosmetic Dentistry
          </h6>
          <h1 className="mb-6 text-white">Dental Veneers Gold Coast</h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90">
            Explore your options for dental veneers with ArtSmiles Gold Coast.
            We focus on providing guidance, helping you understand what&apos;s
            possible and supporting you to make decisions when you&apos;re ready.
          </p>
          <a
            href="#consultation"
            className="inline-block rounded-full bg-white text-gold-dark hover:bg-grey-warm px-8 py-4 text-sm font-medium transition"
          >
            Book Free Consultation
          </a>
        </div>
      </section>

      {/* What Are Dental Veneers */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/services/veneers-cover.jpg"
                alt="Dental veneers"
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
                About Veneers
              </h6>
              <h2 className="mb-6">What Are Dental Veneers?</h2>
              <p className="mb-4 leading-relaxed text-dark">
                Dental veneers are thin shells applied to the front of teeth to
                alter appearance. Common applications include addressing
                discolouration, minor chips or cracks, and spacing issues.
              </p>
              <p className="mb-4 leading-relaxed text-dark">
                At ArtSmiles, we offer both porcelain and composite veneers,
                each with distinct advantages depending on your goals, timeline,
                and budget.
              </p>
              <p className="leading-relaxed text-dark">
                Every veneer is custom-crafted to complement your unique facial
                features, ensuring natural-looking results that enhance your
                smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="bg-grey-warm py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Who Are Ideal Candidates for Veneers?</h2>
            <p className="mx-auto max-w-3xl text-grey-muted leading-relaxed">
              Veneers may be suitable for those with worn teeth, minor
              misalignment, stains, or surface imperfections. Individual
              suitability is assessed during your free consultation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Worn or eroded teeth",
              "Minor misalignment",
              "Stubborn stains or discolouration",
              "Surface imperfections or chips",
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-gold-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-dark font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation CTA with Form */}
      <section id="consultation" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-8">
            <h2 className="mb-4">Book a Free Veneers Consultation Today!</h2>
            <p className="mx-auto max-w-3xl text-grey-muted leading-relaxed">
              Discuss your smile goals and explore your options with our
              experienced cosmetic dentists. Call us on{" "}
              <a
                href="tel:0755883677"
                className="text-gold-dark hover:text-gold-darker font-semibold"
              >
                (07) 5588 3677
              </a>{" "}
              or fill out the form below.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://forms.zohopublic.com.au/artsmiles/form/FormsWebsite/formperma/cRiwUiaTCM3KVJHg9cdwg_1oQAGSjTSRbkW4e2n07Sw"
                width="100%"
                height="700"
                className="border-0"
                title="Book Veneers Consultation"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The ArtSmiles Veneers Experience - 6 Steps */}
      <section className="bg-grey-cool py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              How It Works
            </h6>
            <h2>The ArtSmiles Veneers Experience</h2>
            <p className="mx-auto mt-4 max-w-3xl text-grey-muted">
              From consultation to final reveal, we guide you through every step
              for a seamless experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description:
                  "Discuss your smile goals and explore options. We'll examine your teeth and help you understand what's possible.",
              },
              {
                step: "02",
                title: "Planning Appointment",
                description:
                  "We take photos, scans, and discuss the procedure in detail. Digital preview of your new smile created.",
              },
              {
                step: "03",
                title: "Temporary Veneers",
                description:
                  "Tooth preparation with preview placement. Temporary veneers protect your teeth during fabrication.",
              },
              {
                step: "04",
                title: "Permanent Veneers",
                description:
                  "Custom veneer placement after suitability assessment. Bonded carefully for perfect fit.",
              },
              {
                step: "05",
                title: "Final Adjustment",
                description:
                  "Refinements made 1-2 weeks post-placement to ensure optimal comfort and aesthetics.",
              },
              {
                step: "06",
                title: "Happy Smiling",
                description:
                  "Final results achieved. Enjoy your beautiful, confident new smile!",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-dark text-lg font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="mb-3 text-lg">{item.title}</h3>
                <p className="text-sm leading-relaxed text-grey-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-grey-muted italic mt-8">
            *Individual results and timelines vary. All procedures subject to
            clinical assessment.
          </p>
        </div>
      </section>

      {/* ArtSmiles Club */}
      <section className="bg-gold/10 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6">Join ArtSmiles Club</h2>
              <p className="text-dark leading-relaxed mb-6">
                Monthly membership at <strong>$39.99</strong> offering extended
                warranty, service discounts (up to 30%), and included preventive
                care.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Extended warranty coverage on veneers",
                  "Up to 30% discount on dental services",
                  "Free regular check-ups and cleans",
                  "Priority booking for members",
                  "No waiting periods or annual limits",
                ].map((benefit) => (
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
                    <span className="text-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://app.smilepass.co/pages/authentication/register-invite?token=f8068fea-0f46-4717-a3e2-d8b1869b7746"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gold-dark text-white hover:bg-brown-warm px-8 py-4 font-semibold transition"
              >
                Join ArtSmiles Club Now
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/clinic/P1039948_0022-1.jpg"
                alt="ArtSmiles Club membership"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Reasons for Veneers */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Common Reasons for Veneers</h2>
            <p className="mx-auto max-w-3xl text-grey-muted">
              Veneers can address a variety of cosmetic dental concerns
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Stains and Discolouration",
                desc: "Cover stubborn stains that whitening can't fix",
              },
              {
                title: "Chips or Minor Damage",
                desc: "Restore damaged teeth to perfection",
              },
              {
                title: "Uneven or Irregular Teeth",
                desc: "Create a harmonious, uniform smile",
              },
              {
                title: "Gaps Between Teeth",
                desc: "Close unwanted spaces for better aesthetics",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-grey-warm rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-grey-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Veneers */}
      <section className="bg-grey-warm py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Veneer Options
            </h6>
            <h2>Types of Veneers</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              We offer two types of high-quality dental veneers to suit
              different needs, budgets, and timelines.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Porcelain Veneers */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
              <div className="mb-4 inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                Premium Option
              </div>
              <h3 className="mb-4">Porcelain Veneers</h3>
              <p className="mb-6 leading-relaxed text-grey-muted">
                Porcelain veneers are the gold standard in cosmetic dentistry.
                Each veneer is individually crafted from premium dental ceramic,
                delivering exceptional aesthetics that are virtually
                indistinguishable from natural teeth.
              </p>
              <ul className="space-y-3">
                {[
                  "Highly durable with 10-15 year lifespan",
                  "Superior natural translucency",
                  "Stain-resistant and colour-stable",
                  "Custom shade-matched to your teeth",
                  "Minimal tooth preparation required",
                ].map((item) => (
                  <li key={item} className="flex items-start text-dark">
                    <svg
                      className="mr-3 mt-1 h-5 w-5 shrink-0 text-gold-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Composite Veneers */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
              <div className="mb-4 inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                Affordable Option
              </div>
              <h3 className="mb-4">Composite Veneers</h3>
              <p className="mb-6 leading-relaxed text-grey-muted">
                Composite veneers are sculpted directly onto your teeth using
                advanced bonding resin. They offer an excellent, budget-friendly
                alternative that can be completed in a single appointment.
              </p>
              <ul className="space-y-3">
                {[
                  "More affordable than porcelain",
                  "Minimal to no tooth preparation",
                  "Completed in a single visit",
                  "Easily repairable if damaged",
                  "Typical lifespan of 5-7 years",
                ].map((item) => (
                  <li key={item} className="flex items-start text-dark">
                    <svg
                      className="mr-3 mt-1 h-5 w-5 shrink-0 text-gold-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ArtSmiles */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose ArtSmiles?</h2>
            <p className="mx-auto max-w-3xl text-grey-muted">
              Experience the difference of patient-focused cosmetic dentistry
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Supportive, Patient-Focused Guidance",
                desc: "We take time to listen to your concerns and guide you through every decision without pressure.",
              },
              {
                title: "Experienced Cosmetic Dental Team",
                desc: "Our dentists specialize in smile makeovers and have transformed thousands of smiles on the Gold Coast.",
              },
              {
                title: "Advanced Scanning and Lab Technology",
                desc: "In-house dental lab with digital smile design for precise, beautiful results.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gold-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-dark">
                  {item.title}
                </h3>
                <p className="text-grey-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="bg-grey-cool py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Real Results
            </h6>
            <h2>Before &amp; After</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              See the transformative results our patients have achieved with
              dental veneers at ArtSmiles.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BeforeAfter
              before="/images/gallery/1-Top-teeth-before-composite-veneers.png"
              after="/images/gallery/2-Top-teeth-after-composite-veneers.png"
              label="Composite Veneers - Upper Teeth"
            />
            <BeforeAfter
              before="/images/gallery/5-Porcelain-veneers-before.png"
              after="/images/gallery/6-Porcelain-veneers-result.png"
              label="Porcelain Veneers"
            />
            <BeforeAfter
              before="/images/gallery/43-Woman-smilling-before-porcelain-veneers.png"
              after="/images/gallery/44-Woman-Smilling-after-porcelain-veneers.png"
              label="Full Smile Makeover"
            />
            <BeforeAfter
              before="/images/gallery/31-before-hollywood-smile-veneers.png"
              after="/images/gallery/32-after-hollywood-smile-veneers.png"
              label="Hollywood Smile Veneers"
            />
            <BeforeAfter
              before="/images/gallery/47-Smile-senior-before-porcelain-veneers.png"
              after="/images/gallery/48-Smile-senior-after-porcelain-veneers.png"
              label="Senior Patient Veneers"
            />
            <BeforeAfter
              before="/images/gallery/35-Before-teeth-whitening.png"
              after="/images/gallery/36-Results-of-Teeth-Whitening-B1-shade.png"
              label="Smile Enhancement"
            />
          </div>
        </div>
      </section>

      {/* Warranty Information */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Warranty Information</h2>
            <p className="mx-auto max-w-3xl text-grey-muted">
              We stand behind the quality of our work with comprehensive
              warranties
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {/* Composite Warranty */}
            <div className="bg-grey-warm rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-dark">
                Composite Veneers
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-dark mb-2">
                    Standard: 1-Year Warranty
                  </p>
                  <p className="text-sm text-grey-muted">
                    Coverage includes breaking, chipping, staining, debonding,
                    sensitivity management, and occlusal adjustment.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-dark mb-2">
                    Extended: 2-Year Warranty (ArtSmiles Club)
                  </p>
                  <p className="text-sm text-grey-muted mb-2">
                    Enhanced benefits for members at $39.99/month.
                  </p>
                </div>
              </div>
            </div>

            {/* Porcelain Warranty */}
            <div className="bg-grey-warm rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-dark">
                Porcelain Veneers
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-dark mb-2">
                    Standard: 2-Year Warranty
                  </p>
                  <p className="text-sm text-grey-muted">
                    Comprehensive coverage for breaking, chipping, debonding,
                    and adjustments.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-dark mb-2">
                    Extended: 5-Year Warranty (ArtSmiles Club)
                  </p>
                  <p className="text-sm text-grey-muted mb-2">
                    Premium coverage for members at $39.99/month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-grey-warm py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Investment
            </h6>
            <h2>Veneer Costs</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              Transparent pricing with flexible payment options
            </p>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl ring-1 ring-black/5">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-dark-deep text-white">
                  <th className="px-6 py-4 text-sm font-semibold">
                    Veneer Type
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold">
                    Typical Price (AUD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-dark">
                    Composite Veneers
                  </td>
                  <td className="px-6 py-4 text-grey-muted">
                    $210 &ndash; $600 per tooth
                  </td>
                </tr>
                <tr className="bg-grey-cool">
                  <td className="px-6 py-4 font-medium text-dark">
                    Porcelain Veneers
                  </td>
                  <td className="px-6 py-4 text-grey-muted">
                    $660 &ndash; $1,825 per tooth
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-6 text-center">
            <p className="text-sm leading-relaxed text-grey-muted">
              <strong className="text-dark">Clear cost estimate</strong> during
              free consultation and flexible payment options, including{" "}
              <strong className="text-dark">
                Afterpay, TLC, Humm and Access My Super
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Common Questions
            </h6>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="rounded-2xl bg-grey-warm p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <FAQItem
              question="Am I a good candidate for dental veneers?"
              answer="Suitable candidates include those with severe staining, chips, minor misalignment, good oral health, sufficient enamel, and good hygiene habits without teeth grinding. We assess suitability during your free consultation."
            />
            <FAQItem
              question="How should I care for my veneers?"
              answer="Brush twice daily with non-abrasive toothpaste, floss daily and attend routine check-ups. Avoid biting very hard objects like ice or bottle caps to maintain longevity."
            />
            <FAQItem
              question="What factors affect the cost of veneers?"
              answer="Pricing depends on the quantity needed, treatment scale, and veneer type (composite vs porcelain). We provide transparent quotes during your free consultation."
            />
            <FAQItem
              question="What makes someone a good candidate?"
              answer="Eligibility factors include staining, imperfections, good oral health, adequate enamel, mild misalignment, no grinding habits, and good hygiene practices."
            />
            <FAQItem
              question="Are veneers permanent?"
              answer="Bonding cement creates microscopic bridges from tooth to veneer, cured with UV light. While bonded permanently, veneers are not forever and will eventually need replacement."
            />
            <FAQItem
              question="How long do veneers last?"
              answer="Porcelain veneers typically last between 10 and 15 years, and Composite veneers last around 5 to 7 years with proper care and maintenance."
            />
            <FAQItem
              question="What are the risks with veneers?"
              answer="Composite veneers can wear or stain over time; porcelain is more durable. Grinding or biting hard objects affects durability. We provide personalized care tips to maximize longevity."
            />
            <FAQItem
              question="Can veneers fix crooked teeth?"
              answer="Yes, veneers can correct minor misalignment without braces. The extent of correction depends on your specific case, assessed during consultation."
            />
            <FAQItem
              question="Will veneers look natural?"
              answer="Each veneer is custom-made to match your natural teeth in colour, shape and translucency, ensuring a beautiful, natural appearance."
            />
            <FAQItem
              question="Do veneers damage your teeth?"
              answer="Only a thin layer of enamel should be gently removed to fit the veneers. The tooth stays healthy and strong with proper care."
            />
            <FAQItem
              question="What's the difference between veneers and implants?"
              answer="Veneers are bonded shells for cosmetic enhancement with a 10-15 year lifespan; implants are titanium posts for permanent tooth replacement when teeth are missing."
            />
          </div>
        </div>
      </section>

      {/* Dr. Cristian Dunker Feature */}
      <section className="bg-grey-warm py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/team/dr-dunker-portrait.png"
                alt="Dr Cristian Dunker"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
                Meet Your Dentist
              </h6>
              <h2 className="mb-6">Dr Cristian Dunker</h2>
              <p className="text-dark leading-relaxed mb-4">
                Dr. Cristian Dunker is a trusted Gold Coast cosmetic dentist
                specializing in smile makeovers. With extensive training in
                cosmetic and implant dentistry, Dr. Dunker brings a global
                perspective and artistic eye to every smile he creates.
              </p>
              <p className="text-dark leading-relaxed mb-6">
                His passion is helping patients achieve the smile of their
                dreams through personalized veneer treatments that enhance
                natural beauty.
              </p>
              <p className="text-sm text-grey-muted">
                <strong>Dr Cristian Dunker (DEN0002257085)</strong> – Registered
                Dentist, General Registration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gold-dark py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-white">Ready for Your Dream Smile?</h2>
          <p className="mx-auto mb-8 max-w-xl text-gold-muted leading-relaxed">
            Book a complimentary veneer consultation at our Southport clinic. We
            will assess your smile, discuss your options, and show you what's
            possible.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book-online"
              className="inline-block rounded-full bg-gold-dark px-8 py-4 text-sm font-medium text-white transition hover:bg-brown-warm"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:0755883677"
              className="inline-block rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition hover:border-gold-dark hover:bg-gold-dark"
            >
              Call (07) 5588 3677
            </a>
          </div>
          <p className="mt-8 text-sm text-white/60">
            All procedures carry risk. Results vary. Suitability is assessed by
            our clinical team. This content is general information and not
            medical advice.
          </p>
        </div>
      </section>
    </>
  );
}
