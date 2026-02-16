import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Services Gold Coast",
  description:
    "Comprehensive dental services in Southport, Gold Coast. From cosmetic dentistry to dental implants, teeth whitening, veneers, and emergency dental care.",
};

/* ------------------------------------------------------------------ */
/*  Reusable service card                                              */
/* ------------------------------------------------------------------ */
function ServiceCard({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block no-underline">
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg">
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-lg font-medium text-dark">{title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-grey-muted">
            {description}
          </p>
          <span className="inline-flex items-center text-sm font-medium text-gold-dark transition-colors group-hover:text-brown-warm">
            Learn More
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */
export default function ServicesPage() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/*  1. Page Hero                                               */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-dark-deep py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
            Our Services
          </h6>
          <h1 className="mb-6 text-white">Dental Services Gold Coast</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gold-muted">
            At ArtSmiles, we combine artistry with advanced dental technology to
            deliver world-class care. Whether you need a complete smile
            makeover or routine preventive dentistry, our Southport clinic
            offers a full spectrum of treatments tailored to you.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  2. Cosmetic Dentistry                                      */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Cosmetic Dentistry
            </h6>
            <h2>Transform Your Smile</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              Our cosmetic treatments are designed to enhance the beauty of your
              natural smile. From porcelain veneers to professional whitening, we
              craft stunning results that look and feel completely natural.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Dental Veneers"
              description="Ultra-thin porcelain or composite shells custom-crafted to transform the shape, colour, and alignment of your teeth for a flawless smile."
              image="/images/services/veneers-cover.jpg"
              href="/services/dental-veneers"
            />
            <ServiceCard
              title="Dental Crowns & Bridges"
              description="Restore damaged or missing teeth with custom-made crowns and bridges that blend seamlessly with your natural smile."
              image="/images/services/crowns-bridges.png"
              href="/services/dental-crowns-bridges"
            />
            <ServiceCard
              title="Teeth Whitening"
              description="Professional in-chair and take-home whitening treatments to brighten your smile by up to eight shades safely and effectively."
              image="/images/services/teeth-whitening.jpg"
              href="/services/teeth-whitening"
            />
            <ServiceCard
              title="Full Mouth Reconstruction"
              description="A comprehensive treatment plan combining multiple procedures to fully restore the function, health, and aesthetics of your entire smile."
              image="/images/services/consultation.jpg"
              href="/services/full-mouth-reconstruction"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  3. Dental Implants                                         */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-grey-warm py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              Dental Implants
            </h6>
            <h2>Permanent Tooth Replacement</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              Dental implants offer a permanent, natural-looking solution for
              missing teeth. As the gold standard in tooth replacement, they
              restore both your smile and your confidence for life.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Dental Implants"
              description="Titanium implant posts surgically placed into the jawbone to provide a stable, permanent foundation for replacement teeth that look and function like natural ones."
              image="/images/services/implants-cover.jpg"
              href="/services/dental-implants"
            />
            <ServiceCard
              title="All-on-4 Implants"
              description="A revolutionary full-arch restoration technique using just four strategically placed implants to support an entire set of fixed teeth in a single day."
              image="/images/clinic/P1039948_0022-1.jpg"
              href="/services/dental-implants#all-on-4"
            />
            <ServiceCard
              title="Single Tooth Implant"
              description="Replace a single missing tooth without affecting adjacent healthy teeth. A custom crown is attached to a single implant for a seamless, permanent result."
              image="/images/services/consultation.jpg"
              href="/services/dental-implants#single-tooth"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  4. General Dentistry                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
              General Dentistry
            </h6>
            <h2>Comprehensive Dental Care</h2>
            <p className="mx-auto mt-4 max-w-2xl text-grey-muted">
              Preventive and restorative treatments to keep your teeth and gums
              healthy for life. Our gentle, thorough approach ensures every visit
              is comfortable and stress-free.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="General Dentistry"
              description="Comprehensive check-ups, professional cleans, fillings, and preventive care to maintain optimal oral health for the whole family."
              image="/images/services/family-dentistry.jpg"
              href="/services/general-dentistry"
            />
            <ServiceCard
              title="Emergency Dentist"
              description="Urgent dental care when you need it most. From severe toothaches to knocked-out teeth, we provide prompt relief and treatment."
              image="/images/services/consultation.jpg"
              href="/services/emergency-dentist"
            />
            <ServiceCard
              title="Wisdom Teeth Removal"
              description="Safe, comfortable extraction of wisdom teeth to prevent crowding, infection, and pain. Sedation options are available for anxious patients."
              image="/images/services/wisdom-teeth.jpg"
              href="/services/wisdom-teeth-removal"
            />
            <ServiceCard
              title="Root Canal Treatment"
              description="Save an infected or severely decayed tooth with modern root canal therapy. Advanced techniques make the procedure virtually pain-free."
              image="/images/services/root-canal.png"
              href="/services/root-canal-treatment"
            />
            <ServiceCard
              title="Gum Disease Treatment"
              description="Early detection and effective treatment of gingivitis and periodontitis to protect your teeth, gums, and overall health."
              image="/images/services/gum-disease.png"
              href="/services/gum-disease-treatment"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  5. Anti-Ageing Dentistry                                   */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-grey-cool py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text column */}
            <div>
              <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
                Anti-Ageing Dentistry
              </h6>
              <h2 className="mb-6">Turn Back the Clock on Your Smile</h2>
              <p className="mb-4 leading-relaxed text-dark">
                As we age, our teeth naturally darken, wear down, and shift.
                Anti-ageing dentistry at ArtSmiles combines cosmetic and
                restorative techniques to reverse the visible signs of ageing in
                your smile, helping you look and feel years younger.
              </p>
              <p className="mb-4 leading-relaxed text-dark">
                Our treatments address common concerns such as tooth
                discolouration, worn enamel, receding gums, and lost facial
                volume. By restoring the natural proportions and brightness of
                your teeth, we can dramatically refresh your overall appearance.
              </p>
              <p className="mb-6 leading-relaxed text-dark">
                Whether through porcelain veneers, dental crowns, professional
                whitening, or a full smile makeover, Dr. Cristina Tofan and our
                team will create a personalised plan to rejuvenate your smile
                with lasting, natural-looking results.
              </p>
              <Link
                href="/book-online"
                className="inline-block rounded-full bg-gold-dark px-8 py-4 text-sm font-medium text-white transition hover:bg-brown-warm"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Image column */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/clinic/P1039953_0004.jpg"
                alt="Anti-ageing dental consultation at ArtSmiles"
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  6. Finance Options                                         */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h6 className="mb-3 text-sm uppercase tracking-widest text-grey-muted">
            Payment Plans
          </h6>
          <h2 className="mb-4">Flexible Payment Options</h2>
          <p className="mx-auto mb-12 max-w-2xl text-grey-muted">
            We believe everyone deserves a beautiful, healthy smile. That is why
            we offer a range of flexible payment options to make quality dental
            care accessible and affordable.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Afterpay */}
            <div className="rounded-2xl border border-black/5 bg-grey-cool p-8 text-center transition hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
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
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              </div>
              <h5 className="mb-2 text-base font-semibold text-dark">
                Afterpay
              </h5>
              <p className="text-sm text-grey-muted">
                Split your treatment into four interest-free fortnightly
                payments. No added fees when you pay on time.
              </p>
            </div>

            {/* Humm */}
            <div className="rounded-2xl border border-black/5 bg-grey-cool p-8 text-center transition hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
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
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h5 className="mb-2 text-base font-semibold text-dark">Humm</h5>
              <p className="text-sm text-grey-muted">
                Flexible buy-now-pay-later plans for larger treatments. Choose
                payment terms that suit your budget.
              </p>
            </div>

            {/* HICAPS */}
            <div className="rounded-2xl border border-black/5 bg-grey-cool p-8 text-center transition hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h5 className="mb-2 text-base font-semibold text-dark">HICAPS</h5>
              <p className="text-sm text-grey-muted">
                Claim your health fund benefits on the spot with instant HICAPS
                processing. No paperwork, no waiting.
              </p>
            </div>

            {/* Health Fund */}
            <div className="rounded-2xl border border-black/5 bg-grey-cool p-8 text-center transition hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h5 className="mb-2 text-base font-semibold text-dark">
                Health Fund
              </h5>
              <p className="text-sm text-grey-muted">
                We accept all major Australian health funds. Maximise your
                benefits with our preferred provider rates.
              </p>
            </div>
          </div>

          {/* SmilePass */}
          <div className="mt-12 rounded-2xl bg-dark-deep p-8 text-center sm:p-12">
            <h3 className="mb-3 text-white">
              SmilePass Membership
            </h3>
            <p className="mx-auto mb-6 max-w-xl text-gold-muted">
              No health insurance? No problem. Join our SmilePass membership from
              just <strong className="text-white">$9 per week</strong> and
              receive all your preventive care, including check-ups, cleans, and
              x-rays, plus exclusive discounts on cosmetic and restorative
              treatments.
            </p>
            <Link
              href="/book-online"
              className="inline-block rounded-full bg-gold-dark px-8 py-4 text-sm font-medium text-white transition hover:bg-brown-warm"
            >
              Learn About SmilePass
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  7. CTA                                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-dark-deep py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-white">
            Ready to Start Your Smile Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gold-muted">
            Book a free consultation at our Southport clinic and discover which
            treatments are right for you. Our friendly team is here to guide you
            every step of the way.
          </p>
          <Link
            href="/book-online"
            className="inline-block rounded-full bg-gold-dark px-8 py-4 text-sm font-medium text-white transition hover:bg-brown-warm"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
