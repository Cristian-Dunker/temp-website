import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All-On-4 Free Consult | ArtSmiles",
  description:
    "Book your free All-On-4 implants consultation. Comprehensive assessment, personalized treatment plan, and flexible payment options with no hidden fees.",
};

const consultationIncludes = [
  "Professional assessment with ArtSmiles dentists",
  "Individualized treatment recommendations addressing specific objectives",
  "Discussion of concerns, anticipated results, and subsequent actions",
  "Financing alternatives with no interest charges or hidden costs",
  "Preliminary examinations needed for creating a customized treatment approach",
];

const implantsFor = [
  {
    title: "Missing Most or All Teeth",
    desc: "Replace multiple missing teeth with a permanent solution",
  },
  {
    title: "Severely Damaged or Decayed Teeth",
    desc: "Restore function and aesthetics to compromised teeth",
  },
  {
    title: "Loose or Uncomfortable Dentures",
    desc: "Upgrade to stable, fixed implant-supported teeth",
  },
  {
    title: "Difficulty Chewing or Pain",
    desc: "Regain comfortable eating and speaking ability",
  },
];

const galleryImages = [
  "/images/gallery/21-full-mouth-rehabilitation-before.png",
  "/images/gallery/22-full-mouth-rehabilitation-after.png",
  "/images/gallery/case-17-2.png",
  "/images/gallery/case-22.png",
  "/images/gallery/47-Smile-senior-before-porcelain-veneers.png",
  "/images/gallery/48-Smile-senior-after-porcelain-veneers.png",
  "/images/gallery/case-25.png",
];

const faqs = [
  {
    q: "Who is a good candidate for All-On-4 dental implants?",
    a: "Ideal candidates are those missing most or all teeth, those with severely damaged teeth, or denture wearers seeking a permanent solution. During your free consultation, we'll assess your bone density, oral health, and treatment goals to determine if All-On-4 is right for you.",
  },
  {
    q: "Is there an age limit for dental implants?",
    a: "There's no upper age limit for dental implants. As long as you're in good general health and have adequate bone density, you can be a candidate. We've successfully treated patients from their 20s to their 90s.",
  },
  {
    q: "How do I maintain All-On-4 implants?",
    a: "All-On-4 implants are maintained much like natural teeth – regular brushing, flossing with special floss threaders, and routine dental check-ups. We'll provide detailed care instructions and ongoing support to ensure your implants last a lifetime.",
  },
  {
    q: "How often do I need check-ups after All-On-4?",
    a: "We recommend check-ups every 6 months, just like natural teeth. These visits allow us to monitor your implants, perform professional cleanings, and address any concerns early to ensure long-term success.",
  },
  {
    q: "What does the All-On-4 procedure involve?",
    a: "The All-On-4 procedure places four strategically positioned implants in your jaw to support a full arch of teeth. Often, you'll receive temporary teeth the same day, allowing you to eat and smile immediately. The final prosthetic is placed after healing is complete.",
  },
  {
    q: "What factors affect the cost of All-On-4 treatment?",
    a: "Cost varies based on your specific needs, including the number of arches being treated, any preparatory procedures required, and the materials chosen for your final restoration. We offer flexible payment plans and will provide a detailed, transparent quote during your consultation.",
  },
  {
    q: "Is there any obligation after the free consultation?",
    a: "Absolutely not. Your consultation is complimentary with no pressure or obligation to proceed. We want you to feel fully informed and confident in your decision. Take all the time you need to consider your options.",
  },
];

const benefits = [
  "20+ years of experience in implant dentistry",
  "Advanced 3D imaging and planning technology",
  "In-house laboratory for quality control and faster treatment",
  "Customized approach for natural-looking results",
  "Flexible payment arrangements to fit your budget",
];

export default function AllOn4ConsultPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-teal via-gold-dark to-brown-warm">
        <div className="relative z-10 text-center text-white px-6 py-20 max-w-5xl mx-auto">
          <h1 className="text-white mb-6">
            Start with a Free <br />
            <strong>Implants Consultation</strong>
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8">
            All-On-4 is a single-arch or full-arch dental implant technique
            designed to improve stability when eating. Book your complimentary
            evaluation to understand your options and costs.
          </p>
          <a
            href="#form"
            className="inline-block bg-white text-teal hover:bg-grey-warm rounded-full px-10 py-4 font-semibold text-lg transition"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>

      {/* Consultation Details */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center mb-4">
            Receive an Initial Assessment of Your Smile
          </h2>
          <p className="text-center text-grey-muted mb-12 max-w-3xl mx-auto">
            Your complimentary visit includes everything you need to make an
            informed decision about your All-On-4 treatment.
          </p>
          <div className="space-y-4">
            {consultationIncludes.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-dark text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When Implants Are Appropriate */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-4">When Are Implants Appropriate?</h2>
          <p className="text-center text-grey-muted mb-12 max-w-3xl mx-auto">
            All-On-4 dental implants may be the right solution if you're
            experiencing any of these concerns
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implantsFor.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-grey-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-4">ArtSmiles's Treatment Results</h2>
          <p className="text-center text-grey-muted mb-12">Before and After</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden relative"
              >
                <Image
                  src={src}
                  alt={`All-On-4 case ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-grey-muted italic text-center mt-8 max-w-4xl mx-auto">
            *Images feature consenting real patients. Outcomes shown are
            individual, the results and recovery vary between patients.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="py-20 bg-grey-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center mb-4">Book Your Free Consultation</h2>
          <p className="text-center text-grey-muted mb-8">
            Fill out the form below and we'll contact you to schedule your
            complimentary All-On-4 consultation.
          </p>
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://forms.zohopublic.com.au/artsmiles/form/FormsImplantLandingPage/formperma/n1fA7y3wjcUVmmGi2NwTFE_PRpmDEHn9sSgAbN8g3E0"
              width="100%"
              height="700"
              className="border-0"
              title="All-On-4 Consultation Form"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About ArtSmiles */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="mb-6">Welcome to ArtSmiles</h2>
          <p className="text-grey-muted text-lg mb-10 max-w-3xl mx-auto">
            Advanced technology and personalized results for your perfect smile
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-dark">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center mb-4">Still Have Doubts?</h2>
          <p className="text-center text-grey-muted mb-12">
            Our team is here to help you
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white border border-grey-warm rounded-xl p-6 group"
              >
                <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center text-dark">
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

      {/* Final CTA */}
      <section className="py-20 bg-teal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">
            Ready to Restore Your Smile with All-On-4?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your free All-On-4 consultation today. No obligation, just
            expert advice and personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#form"
              className="bg-white text-teal hover:bg-grey-warm rounded-full px-10 py-4 font-semibold transition"
            >
              Book Free Consultation
            </a>
            <a
              href="tel:0755883677"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal rounded-full px-10 py-4 font-semibold transition"
            >
              Call (07) 5588 3677
            </a>
          </div>
          <p className="text-white/75 text-sm mt-6">
            Dr Cristian Dunker (DEN0002257085) – Registered Dentist, General
            Registration
          </p>
        </div>
      </section>
    </>
  );
}
