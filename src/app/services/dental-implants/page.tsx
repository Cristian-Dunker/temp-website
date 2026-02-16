import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Implants Gold Coast | All-on-4",
  description:
    "Affordable, high-quality dental implants and All-on-4 solutions in Gold Coast. Permanent tooth replacement by experienced implant dentists in Southport.",
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
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="grid grid-cols-2">
        <div className="relative">
          <Image
            src={before}
            alt={`${label} - Before`}
            width={600}
            height={400}
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
            width={600}
            height={400}
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
export default function DentalImplantsPage() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/*  1. Hero                                                    */}
      {/* ---------------------------------------------------------- */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-teal to-navy">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 text-center">
          <h6 className="mb-3 text-sm uppercase tracking-widest text-gold-muted">
            Permanent Tooth Replacement
          </h6>
          <h1 className="mb-6 text-white">Dental Implants Gold Coast</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80">
            Restore missing teeth with the gold standard in modern dentistry.
            Our experienced implant team delivers natural-looking, long-lasting
            results using the latest surgical techniques and premium implant
            systems.
          </p>
          <Link
            href="/book-online"
            className="inline-block rounded-full bg-gold-dark px-8 py-4 text-sm font-medium text-white transition hover:bg-brown-warm"
          >
            Book Free Implant Consultation
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  2. What Are Dental Implants                                */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
                About Implants
              </h6>
              <h2 className="mb-6">What Are Dental Implants?</h2>
              <p className="mb-4 leading-relaxed text-dark">
                A dental implant is a small titanium post that is surgically
                placed into the jawbone to replace the root of a missing tooth.
                Once the implant integrates with the bone through a natural
                process called osseointegration, a custom-made crown, bridge, or
                denture is attached to create a restoration that looks, feels,
                and functions just like a natural tooth.
              </p>
              <p className="mb-4 leading-relaxed text-dark">
                Unlike removable dentures or traditional bridges, dental implants
                preserve your jawbone, prevent bone loss, and do not require
                adjacent teeth to be altered. They are the closest thing to
                growing a new, natural tooth and represent the most advanced and
                reliable method of tooth replacement available today.
              </p>
              <p className="leading-relaxed text-dark">
                At ArtSmiles, we use premium implant systems from world-leading
                manufacturers and employ 3D cone beam CT imaging for precise
                planning and predictable outcomes. Our team has extensive
                experience placing implants for single teeth, multiple teeth,
                and full-arch restorations.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/clinic/P1039927_0008.jpg"
                alt="Dental implant consultation at ArtSmiles"
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  3. Types of Implants                                       */}
      {/* ---------------------------------------------------------- */}
      <section id="single-tooth" className="bg-grey-warm py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Treatment Options
            </h6>
            <h2>Types of Dental Implants</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              We offer tailored implant solutions for every situation, whether
              you are missing a single tooth or need a complete set of teeth
              replaced.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Single Tooth Implant */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <svg
                  className="h-7 w-7 text-gold-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l-6.75-6.75M12 19.5l6.75-6.75"
                  />
                </svg>
              </div>
              <h3 className="mb-3">Single Tooth Implant</h3>
              <p className="mb-4 text-sm leading-relaxed text-grey-muted">
                The ideal solution for replacing a single missing tooth without
                affecting neighbouring teeth. A single titanium implant is placed
                in the jawbone, and a custom porcelain crown is attached to
                create a seamless, permanent result.
              </p>
              <ul className="space-y-2 text-sm text-dark">
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Preserves adjacent healthy teeth
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Prevents bone loss at the implant site
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Looks and functions like a natural tooth
                </li>
              </ul>
            </div>

            {/* Implant Bridge */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <svg
                  className="h-7 w-7 text-gold-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </div>
              <h3 className="mb-3">Implant Bridge</h3>
              <p className="mb-4 text-sm leading-relaxed text-grey-muted">
                When multiple adjacent teeth are missing, an implant-supported
                bridge provides a fixed, permanent solution. Two or more implants
                are placed to support a row of connected crowns, eliminating the
                need for a removable partial denture.
              </p>
              <ul className="space-y-2 text-sm text-dark">
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Replaces 3 or more consecutive missing teeth
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  More cost-effective than individual implants
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Fixed and permanent - no removal needed
                </li>
              </ul>
            </div>

            {/* All-on-4 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 ring-gold-dark/20">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold-dark">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <div className="mb-3 inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                Most Popular
              </div>
              <h3 className="mb-3">All-on-4 Full Arch</h3>
              <p className="mb-4 text-sm leading-relaxed text-grey-muted">
                A complete jaw restoration using just four strategically
                positioned implants. Receive a full set of fixed, non-removable
                teeth in a single day - even if you have significant bone loss.
              </p>
              <ul className="space-y-2 text-sm text-dark">
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Same-day teeth - walk out smiling
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  No bone grafting required in most cases
                </li>
                <li className="flex items-start">
                  <svg className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  More affordable than individual implants
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  4. All-on-4 Detailed Section                               */}
      {/* ---------------------------------------------------------- */}
      <section id="all-on-4" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
                Full Arch Restoration
              </h6>
              <h2 className="mb-6">All-on-4 Dental Implants</h2>
              <p className="mb-4 leading-relaxed text-dark">
                The All-on-4 treatment concept is a revolutionary approach to
                full-arch tooth replacement that has transformed the lives of
                millions of patients worldwide. Developed by Dr. Paulo Malo, this
                technique uses just four precisely angled dental implants to
                support an entire arch of fixed, non-removable teeth.
              </p>
              <p className="mb-4 leading-relaxed text-dark">
                What makes All-on-4 truly remarkable is that the posterior
                implants are tilted at an angle, allowing them to engage more
                bone and avoid critical anatomical structures such as the sinus
                cavity and nerve canal. This means that even patients who have
                been told they do not have enough bone for traditional implants
                can often be treated without the need for bone grafting.
              </p>
              <p className="mb-6 leading-relaxed text-dark">
                At ArtSmiles, we offer the complete All-on-4 journey under one
                roof. From your initial 3D scan and treatment planning through to
                surgery and final prosthesis delivery, our experienced implant
                team ensures every step is comfortable, efficient, and delivers
                outstanding results.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Same-Day Teeth", desc: "Leave the clinic with a full set of fixed teeth on the same day as surgery." },
                  { label: "No Bone Grafting", desc: "Angled implants maximise existing bone, avoiding lengthy grafting procedures." },
                  { label: "Cost-Effective", desc: "Four implants replace a full arch at a fraction of the cost of individual implants." },
                  { label: "Proven Results", desc: "Over 98% long-term success rate backed by decades of clinical research." },
                ].map((benefit) => (
                  <div key={benefit.label} className="rounded-xl bg-grey-cool p-4">
                    <h5 className="mb-1 text-sm font-semibold text-dark">
                      {benefit.label}
                    </h5>
                    <p className="text-xs leading-relaxed text-grey-muted">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/clinic/P1039948_0022-1.jpg"
                alt="All-on-4 dental implant procedure at ArtSmiles"
                width={700}
                height={550}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  5. Before & After                                          */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-grey-cool py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Real Results
            </h6>
            <h2>Before &amp; After</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              See the life-changing results our patients have achieved with
              full mouth rehabilitation using dental implants at ArtSmiles.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <BeforeAfter
              before="/images/gallery/21-full-mouth-rehabilitation-before.png"
              after="/images/gallery/22-full-mouth-rehabilitation-after.png"
              label="Full Mouth Rehabilitation with Dental Implants"
            />
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
            <h2>Implant Costs</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              Dental implant costs vary based on the number of implants, the
              type of restoration, and individual clinical factors. Below are
              our indicative price ranges to help you plan.
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
                    Indicative Price Range
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-dark">
                    Single Tooth Implant (implant + crown)
                  </td>
                  <td className="px-6 py-4 text-grey-muted">
                    $4,000 &ndash; $6,500
                  </td>
                </tr>
                <tr className="bg-grey-cool">
                  <td className="px-6 py-4 font-medium text-dark">
                    Implant Bridge (2 implants + 3 crowns)
                  </td>
                  <td className="px-6 py-4 text-grey-muted">
                    $8,000 &ndash; $15,000
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-dark">
                    All-on-4 Full Arch (per jaw)
                  </td>
                  <td className="px-6 py-4 text-grey-muted">
                    $20,000 &ndash; $35,000
                  </td>
                </tr>
                <tr className="bg-grey-cool">
                  <td className="px-6 py-4 font-medium text-dark">
                    Bone Grafting (if required)
                  </td>
                  <td className="px-6 py-4 text-grey-muted">
                    $500 &ndash; $3,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-grey-cool p-6 text-center">
            <p className="text-sm leading-relaxed text-grey-muted">
              <strong className="text-dark">Please note:</strong> These are
              indicative prices only. Your exact treatment cost will be
              determined after a comprehensive examination and 3D scan at your
              free initial consultation. We offer flexible payment plans through
              Afterpay, Humm, and our SmilePass membership to help make your
              treatment affordable.
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
              question="How long do dental implants last?"
              answer="With proper care and maintenance, dental implants can last a lifetime. The implant post itself is designed to permanently integrate with your jawbone. The crown or prosthesis attached to the implant may need replacement after 10 to 15 years due to normal wear, but the implant foundation remains intact."
            />
            <FAQItem
              question="Is dental implant surgery painful?"
              answer="Most patients are surprised by how comfortable the procedure is. The surgery is performed under local anaesthesia, and sedation options are available for anxious patients. Post-operative discomfort is typically mild and well-managed with over-the-counter pain relief. Most patients return to normal activities within a day or two."
            />
            <FAQItem
              question="Am I a candidate for dental implants?"
              answer="Most adults with good general health are suitable candidates for dental implants. Factors such as bone density, gum health, and medical conditions are assessed during your consultation. Even patients with reduced bone volume may be candidates thanks to advanced techniques like All-on-4, bone grafting, and zygomatic implants."
            />
            <FAQItem
              question="How long does the implant process take?"
              answer="A single implant typically takes 3 to 6 months from placement to final crown, allowing time for the implant to integrate with the bone. All-on-4 patients receive a temporary fixed set of teeth on the same day as surgery, with the final prosthesis delivered after 3 to 6 months of healing."
            />
            <FAQItem
              question="What is the success rate of dental implants?"
              answer="Dental implants have one of the highest success rates of any surgical procedure, with studies consistently reporting success rates above 95% over 10 years. At ArtSmiles, our meticulous planning, premium implant systems, and experienced surgical team help us achieve outcomes at the top of this range."
            />
            <FAQItem
              question="What is the difference between All-on-4 and traditional dentures?"
              answer="All-on-4 implants are permanently fixed in your mouth and function like natural teeth. They do not slip, click, or require adhesives. They preserve jawbone density and restore full chewing power. Traditional dentures are removable, sit on top of the gums, can cause bone loss over time, and typically restore only about 20% of natural chewing force."
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  8. CTA                                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-dark-deep py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-white">
            Reclaim Your Smile with Dental Implants
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gold-muted">
            Book a complimentary implant consultation at our Southport clinic.
            We will assess your situation with a 3D scan, discuss your options,
            and provide a detailed treatment plan tailored to your needs.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/book-online"
              className="inline-block rounded-full bg-gold-dark px-8 py-4 text-sm font-medium text-white transition hover:bg-brown-warm"
            >
              Book Free Implant Consultation
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
