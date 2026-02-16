import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Best Dentists on the Gold Coast",
  description:
    "ArtSmiles offers high-quality dental services with technical expertise on the Gold Coast.",
};

const values = [
  {
    title: "Quality Assurance",
    description:
      "Every treatment at ArtSmiles undergoes meticulous quality control. From digital smile design to the final result, we maintain the highest standards to ensure your smile is nothing short of perfection.",
    icon: (
      <svg
        className="w-7 h-7 text-gold-dark"
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
    ),
  },
  {
    title: "You Are the Centre",
    description:
      "Your comfort, goals, and well-being are at the heart of everything we do. We listen carefully, explain every option, and tailor each treatment plan to your unique needs and desires.",
    icon: (
      <svg
        className="w-7 h-7 text-gold-dark"
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
    ),
  },
  {
    title: "Blessing ArtSmiles",
    description:
      "We believe in giving back to our community. Through our Blessing ArtSmiles program, we provide free smile restorations to those in need, helping transform lives one smile at a time.",
    icon: (
      <svg
        className="w-7 h-7 text-gold-dark"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
];

const teamMembers = [
  {
    name: "Dr. Cristian Dunker",
    role: "Principal Dentist & Founder",
    image: "/images/team/dr-dunker-portrait.png",
    bio: "Dr. Cristian Dunker is the founder and principal dentist at ArtSmiles. With extensive training in cosmetic and implant dentistry across Brazil, Europe, and Australia, Dr. Dunker brings a global perspective and artistic eye to every smile he creates. He specialises in porcelain veneers, full mouth rehabilitations, and dental implant procedures, and is passionate about helping patients achieve the smile of their dreams.",
    specialisations: [
      "Cosmetic Dentistry",
      "Dental Implants",
      "Full Mouth Rehabilitation",
      "Porcelain Veneers",
    ],
  },
  {
    name: "Dr. Darren Wang",
    role: "General & Cosmetic Dentist",
    image: "/images/team/dr-darren-wang.jpg",
    bio: "Dr. Darren Wang is a dedicated general and cosmetic dentist who combines clinical precision with a gentle, patient-focused approach. His expertise spans preventive care, cosmetic enhancements, and restorative treatments. Dr. Wang is committed to staying at the forefront of modern dentistry through continuous education and advanced training.",
    specialisations: [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Preventive Care",
      "Restorative Dentistry",
    ],
  },
  {
    name: "Dr. Jessica Ko",
    role: "General Dentist",
    image: "/images/team/dr-jessica-ko-orig.jpg",
    bio: "Dr. Jessica Ko brings warmth and expertise to every patient interaction. As a skilled general dentist, she provides comprehensive care ranging from routine check-ups and cleanings to more complex procedures. Her calm demeanour and thorough approach make patients of all ages feel comfortable and well cared for.",
    specialisations: [
      "General Dentistry",
      "Family Dentistry",
      "Preventive Care",
      "Oral Health Education",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-dark-deep py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
            About ArtSmiles
          </h6>
          <h1 className="text-white mb-5">Why Choose ArtSmiles</h1>
          <p className="text-gold-muted text-lg max-w-2xl mx-auto">
            Delivering exceptional dental care with artistry and precision
          </p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/clinic/P1039952_0013.jpg"
                alt="Inside ArtSmiles dental clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div>
              <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
                Our Story
              </h6>
              <h2 className="mb-6">
                The Gold Coast&apos;s Most Trusted Dental Practice
              </h2>
              <p className="text-grey-muted leading-relaxed mb-5">
                ArtSmiles was founded with a singular vision: to elevate dental
                care into an art form. Located in the heart of Southport on the
                Gold Coast, our practice has grown to become the region&apos;s
                most trusted destination for cosmetic and general dentistry.
              </p>
              <p className="text-grey-muted leading-relaxed mb-5">
                Our patient-centred approach means that every treatment begins
                with listening. We take the time to understand your goals, your
                concerns, and your vision for your smile. From there, we craft a
                personalised treatment plan using the latest in digital dentistry
                and advanced techniques.
              </p>
              <p className="text-grey-muted leading-relaxed">
                With years of experience and thousands of smiles transformed,
                our commitment to excellence has never wavered. We invest in the
                most advanced technology, maintain rigorous quality standards,
                and pursue continuous education to ensure you receive nothing but
                the best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              What Drives Us
            </h6>
            <h2>Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="mb-4">{value.title}</h3>
                <p className="text-grey-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet Our Team ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
              Our Experts
            </h6>
            <h2>Meet Our Dentists</h2>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Photo */}
                <div className="rounded-2xl overflow-hidden max-w-md mx-auto lg:max-w-none lg:[direction:ltr] bg-grey-warm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                </div>

                {/* Bio */}
                <div className="lg:[direction:ltr]">
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-gold-dark font-medium mb-5">
                    {member.role}
                  </p>
                  <p className="text-grey-muted leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div>
                    <p className="font-medium text-dark mb-3">
                      Specialisations
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialisations.map((spec) => (
                        <span
                          key={spec}
                          className="bg-grey-warm text-dark text-sm px-4 py-1.5 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ArtSmiles Club ── */}
      <section className="py-20 bg-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
                Membership
              </h6>
              <h2 className="mb-6">ArtSmiles Club</h2>
              <p className="text-grey-muted leading-relaxed mb-5">
                Join the ArtSmiles Club and enjoy premium dental care at an
                affordable price. Our SmilePass membership program starts from
                just $9 per week, giving you access to comprehensive preventive
                care and exclusive member benefits.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Regular check-ups and professional cleans included",
                  "Discounts on all cosmetic and restorative treatments",
                  "Priority booking and exclusive member events",
                  "No waiting periods or annual limits",
                  "Flexible payment options to suit your budget",
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
                    <span className="text-grey-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div>
                <a
                  href="https://app.smilepass.co/pages/authentication/register-invite?token=f8068fea-0f46-4717-a3e2-d8b1869b7746"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition font-medium text-center"
                >
                  Join Now
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/clinic/P1039948_0022-1.jpg"
                alt="ArtSmiles Club membership experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Booking Banner ── */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Book your free consultation today and discover the ArtSmiles
            difference.
          </p>
          <p className="text-gold-light text-2xl font-medium mb-10">
            <a href="tel:0755883677">(07) 5588 3677</a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-online"
              className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition font-medium"
            >
              Book Now
            </Link>
            <a
              href="tel:0755883677"
              className="rounded-full px-8 py-4 border-2 border-gold-light text-gold-light hover:bg-gold-light hover:text-dark transition font-medium"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
