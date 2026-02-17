import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Veneers Gold Coast",
  description:
    "ArtSmiles provides Affordable and High Quality Dental Veneers Gold Coast. Porcelain and Composite Veneers by experienced cosmetic dentists in Southport.",
};

/* ------------------------------------------------------------------ */
/*  FAQ Accordion (client island)                                      */
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
      {/* ---------------------------------------------------------- */}
      {/*  1. Hero                                                    */}
      {/* ---------------------------------------------------------- */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-gradient-to-br from-gold-light via-gold to-brown-warm">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 text-center">
          <h6 className="mb-3 text-sm uppercase tracking-widest text-gold-muted">
            Cosmetic Dentistry
          </h6>
          <h1 className="mb-6 text-white">Dental Veneers Gold Coast</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80">
            Transform your smile with premium porcelain and composite veneers.
            Our experienced cosmetic dentists in Southport craft natural-looking
            veneers that perfectly complement your facial features.
          </p>
          <Link
            href="/book-online"
            className="inline-block rounded-full bg-gold-dark px-8 py-4 text-sm font-medium text-white transition hover:bg-brown-warm"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  2. What Are Veneers                                        */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/services/cosmetic-dentistry.png"
                alt="Dental veneer being placed on a tooth"
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
                Dental veneers are ultra-thin, custom-crafted shells made from
                porcelain or composite resin that are bonded to the front
                surface of your teeth. They are one of the most popular and
                effective cosmetic dental treatments available, offering
                a dramatic yet natural-looking transformation.
              </p>
              <p className="mb-4 leading-relaxed text-dark">
                Veneers can correct a wide range of aesthetic concerns including
                discolouration, chips, cracks, gaps between teeth, minor
                misalignment, and uneven tooth shape or size. They provide
                a long-lasting solution that resists staining and mimics the
                light-reflecting properties of natural enamel.
              </p>
              <p className="leading-relaxed text-dark">
                At ArtSmiles, Dr. Cristina Tofan uses advanced digital smile
                design technology to preview your results before treatment
                begins. Every veneer is meticulously handcrafted by master
                ceramists to ensure a seamless, beautiful result that enhances
                your unique features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  3. Types of Veneers                                        */}
      {/* ---------------------------------------------------------- */}
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
                Each veneer is individually crafted from premium dental ceramic
                by master ceramists, delivering exceptional aesthetics that are
                virtually indistinguishable from natural teeth.
              </p>
              <ul className="space-y-3">
                {[
                  "Highly durable with a lifespan of 10-15 years or more",
                  "Superior natural translucency and light reflection",
                  "Stain-resistant and colour-stable over time",
                  "Custom shade-matched to your surrounding teeth",
                  "Minimal tooth preparation required with modern techniques",
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
                alternative that can be completed in a single appointment with
                beautiful results.
              </p>
              <ul className="space-y-3">
                {[
                  "More affordable than porcelain veneers",
                  "Minimal to no tooth preparation needed",
                  "Completed in a single visit (same-day results)",
                  "Easily repairable if chipped or damaged",
                  "Reversible procedure preserving natural tooth structure",
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

      {/* ---------------------------------------------------------- */}
      {/*  4. Before & After                                          */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Real Results
            </h6>
            <h2>Before &amp; After</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              See the transformative results our patients have achieved with
              dental veneers at ArtSmiles. Every smile is uniquely designed to
              complement each patient&apos;s facial features.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
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
              label="Porcelain Veneers - Full Smile Makeover"
            />
            <BeforeAfter
              before="/images/gallery/31-before-hollywood-smile-veneers.png"
              after="/images/gallery/32-after-hollywood-smile-veneers.png"
              label="Hollywood Smile Veneers"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  5. The Process                                             */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-grey-cool py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              How It Works
            </h6>
            <h2>The Veneer Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              From your first consultation to the final reveal, we guide you
              through every step to ensure a seamless, comfortable experience.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "A complimentary initial assessment where we discuss your goals, examine your teeth, and create a digital preview of your new smile. We will recommend the best veneer type for your needs.",
              },
              {
                step: "02",
                title: "Preparation",
                description:
                  "A thin layer of enamel is gently removed to create space for the veneers. Precise digital impressions are taken and sent to our master ceramists for fabrication.",
              },
              {
                step: "03",
                title: "Fabrication",
                description:
                  "Your custom veneers are meticulously handcrafted in a specialist dental laboratory. Temporary veneers are placed to protect your teeth while the finals are being made.",
              },
              {
                step: "04",
                title: "Placement",
                description:
                  "Your permanent veneers are carefully bonded into place. We make precise adjustments to ensure a perfect fit, natural bite, and a smile you will love.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                {/* Step number */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-dark text-lg font-semibold text-white">
                  {item.step}
                </div>
                {/* Connector line (hidden on last item & mobile) */}
                <h3 className="mb-3 text-lg">{item.title}</h3>
                <p className="text-sm leading-relaxed text-grey-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  6. Costs                                                   */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Investment
            </h6>
            <h2>Veneer Costs</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              The cost of dental veneers varies depending on the type, number of
              teeth, and complexity of your case. Below are our indicative price
              ranges.
            </p>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl ring-1 ring-black/5">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-dark-deep text-white">
                  <th className="px-6 py-4 text-sm font-semibold">
                    Treatment
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold">
                    Price Range (per tooth)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-dark">
                    Composite Veneers
                  </td>
                  <td className="px-6 py-4 text-grey-muted">
                    $450 &ndash; $900
                  </td>
                </tr>
                <tr className="bg-grey-cool">
                  <td className="px-6 py-4 font-medium text-dark">
                    Porcelain Veneers
                  </td>
                  <td className="px-6 py-4 text-grey-muted">
                    $1,200 &ndash; $2,500
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-dark">
                    Prepless / Minimal-Prep Veneers
                  </td>
                  <td className="px-6 py-4 text-grey-muted">
                    $1,500 &ndash; $2,500
                  </td>
                </tr>
                <tr className="bg-grey-cool">
                  <td className="px-6 py-4 font-medium text-dark">
                    Full Smile Makeover (6-10 veneers)
                  </td>
                  <td className="px-6 py-4 text-grey-muted">
                    From $7,200
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-grey-cool p-6 text-center">
            <p className="text-sm leading-relaxed text-grey-muted">
              <strong className="text-dark">Please note:</strong> Exact pricing
              is determined after your free initial consultation, as every smile
              is unique. We offer flexible payment plans through Afterpay, Humm,
              and our SmilePass membership program to make your dream smile
              affordable.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  7. FAQ                                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-grey-warm py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Common Questions
            </h6>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <FAQItem
              question="How long do dental veneers last?"
              answer="Porcelain veneers typically last 10 to 15 years or longer with proper care, while composite veneers generally last 5 to 7 years. Longevity depends on your oral hygiene habits, diet, and whether you wear a night guard to protect against grinding."
            />
            <FAQItem
              question="Are veneers painful to get?"
              answer="The veneer procedure is generally painless. A local anaesthetic is used during the preparation stage to ensure complete comfort. Most patients report little to no discomfort during or after the procedure. Any mild sensitivity typically resolves within a few days."
            />
            <FAQItem
              question="Do veneers look natural?"
              answer="Absolutely. Modern porcelain veneers are crafted to mimic the translucency, texture, and colour variations of natural tooth enamel. Our master ceramists hand-layer each veneer to create a result that is virtually indistinguishable from your natural teeth."
            />
            <FAQItem
              question="Can veneers fix crooked teeth?"
              answer="Veneers can effectively address minor misalignment and create the appearance of perfectly straight teeth without the need for orthodontic treatment. For more severe misalignment, we may recommend clear aligners or braces before placing veneers for the best result."
            />
            <FAQItem
              question="How do I care for my veneers?"
              answer="Care for your veneers just as you would your natural teeth: brush twice daily with a non-abrasive toothpaste, floss daily, and attend regular check-ups and professional cleans. We also recommend wearing a custom night guard if you grind your teeth, and avoiding biting into very hard objects like ice or bottle caps."
            />
            <FAQItem
              question="What is the difference between porcelain and composite veneers?"
              answer="Porcelain veneers are fabricated in a dental laboratory and offer superior aesthetics, durability, and stain resistance. They require two appointments. Composite veneers are sculpted directly onto your teeth in a single visit, making them more affordable and less invasive. Your dentist will recommend the best option based on your goals, budget, and clinical needs."
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  8. Veneer Enquiry Form                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="mb-4">Get a Personalized Veneer Quote</h2>
            <p className="text-grey-muted leading-relaxed">
              Fill out our veneer enquiry form below to receive a personalized
              treatment plan and cost estimate. Our team will review your
              information and contact you within 24 hours.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://forms.zohopublic.com.au/artsmiles/form/VeneerEnquiryForm/formperma/Uw_62if5C9MmUM1DYB-ny-N0SYf47XM4j0aB7bkWaa0"
                width="100%"
                height="900"
                className="border-0 rounded-xl"
                title="Veneer Enquiry Form"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  9. CTA                                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-dark-deep py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-white">
            Ready for Your Dream Smile?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gold-muted">
            Book a complimentary veneer consultation at our Southport clinic.
            We will assess your smile, discuss your options, and show you a
            digital preview of your transformation.
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
        </div>
      </section>
    </>
  );
}
