import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Veneers Consult | ArtSmiles",
  description:
    "Concerned about irregular, worn or discoloured teeth? Start with a free personalised veneers consultation to understand your options and costs.",
};

const consultationIncludes = [
  "Comprehensive assessment with experienced cosmetic dentists",
  "Custom treatment plan tailored to your smile goals",
  "Discussion of your concerns and expected outcomes",
  "Flexible payment options with no hidden fees",
  "Initial examinations to create your personalised approach",
];

const veneersFor = [
  {
    title: "Stained or Discoloured Teeth",
    desc: "Cover stubborn stains that whitening can't fix",
  },
  {
    title: "Chipped, Cracked or Uneven Teeth",
    desc: "Restore damaged teeth to perfection",
  },
  {
    title: "Gaps Between Teeth",
    desc: "Close spaces for a more uniform smile",
  },
  {
    title: "Minor Misalignments",
    desc: "Correct slight irregularities without braces",
  },
];

const galleryImages = [
  "/images/gallery/case-53-1.png",
  "/images/gallery/case-49.png",
  "/images/gallery/case-42-1.png",
  "/images/gallery/43-Woman-smilling-before-porcelain-veneers.png",
  "/images/gallery/44-Woman-Smilling-after-porcelain-veneers.png",
  "/images/gallery/31-before-hollywood-smile-veneers.png",
];

const faqs = [
  {
    q: "Am I a good candidate for dental veneers?",
    a: "Most people with healthy teeth and gums are candidates for veneers. During your free consultation, we'll assess your oral health, discuss your goals, and determine if veneers are the right solution for you.",
  },
  {
    q: "How should I prepare for my veneers consultation?",
    a: "Simply bring any questions you have about the procedure, costs, or timeline. If you have previous dental records or x-rays, they can be helpful but aren't required. We'll handle all necessary examinations during your visit.",
  },
  {
    q: "How long do porcelain veneers last?",
    a: "With proper care, high-quality porcelain veneers typically last 10-15 years or longer. At ArtSmiles, we use premium materials and proven techniques to ensure longevity and natural-looking results.",
  },
  {
    q: "What types of veneers do you offer?",
    a: "We offer both porcelain veneers and composite veneers. Porcelain veneers are more durable and stain-resistant, while composite veneers can often be completed in a single visit. We'll discuss which option best suits your needs and budget.",
  },
  {
    q: "Will veneers stain or discolour over time?",
    a: "Porcelain veneers are highly resistant to staining and maintain their colour well. Composite veneers may be more prone to slight discolouration over time but can be polished and maintained easily.",
  },
  {
    q: "Do you offer a warranty on veneers?",
    a: "Yes, we stand behind our work. Our veneer treatments come with a comprehensive warranty program. Specific terms will be discussed during your consultation based on your individual treatment plan.",
  },
  {
    q: "Is there any obligation after the free consultation?",
    a: "Absolutely not. Your consultation is complimentary with no obligation to proceed. We want you to feel confident and informed about your decision. Take all the time you need to consider your options.",
  },
];

export default function VeneersConsultPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gold-light via-gold-dark to-brown-warm">
        <div className="relative z-10 text-center text-white px-6 py-20 max-w-5xl mx-auto">
          <h1 className="text-white mb-6">
            Start with a Free Personalised <br />
            <strong>Veneers Consultation</strong>
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8">
            Concerned about irregular, worn or discoloured teeth? We help you
            understand your options, costs and whether veneers are right for you.
          </p>
          <a
            href="#form"
            className="inline-block bg-white text-gold-dark hover:bg-grey-warm rounded-full px-10 py-4 font-semibold text-lg transition"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-12">Our Smile Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden relative"
              >
                <Image
                  src={src}
                  alt={`Veneers case ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-grey-muted italic text-center mt-8 max-w-4xl mx-auto">
            *Images feature consenting real patients. Outcomes shown are
            individual and may not be replicated. All dental veneer procedures
            involve risks, variable recovery and ongoing care.
          </p>
        </div>
      </section>

      {/* Consultation Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center mb-4">
            Receive an Initial Assessment of Your Smile
          </h2>
          <p className="text-center text-grey-muted mb-12 max-w-3xl mx-auto">
            Your complimentary consultation includes everything you need to make
            an informed decision about your smile transformation.
          </p>
          <div className="space-y-4">
            {consultationIncludes.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold flex items-center justify-center mt-1">
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

      {/* Veneers Are Designed For */}
      <section className="py-20 bg-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-4">
            Veneers Are Designed to Cover Imperfections
          </h2>
          <p className="text-center text-grey-muted mb-12 max-w-3xl mx-auto">
            Create a more harmonious smile by addressing common cosmetic concerns
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {veneersFor.map((item) => (
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

      {/* Form Section */}
      <section id="form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center mb-4">Book Your Free Consultation</h2>
          <p className="text-center text-grey-muted mb-8">
            Fill out the form below and we'll contact you to schedule your
            complimentary veneers consultation.
          </p>
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://forms.zohopublic.com.au/artsmiles/form/FormsVeneersLandingPage/formperma/ttAVam10M9dKWuDwlpi2kJvklvJL83ZUOWE9nuwtNOs"
              width="100%"
              height="700"
              className="border-0"
              title="Veneers Consultation Form"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About ArtSmiles */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="mb-6">Welcome to ArtSmiles</h2>
          <h3 className="text-2xl text-gold-dark font-normal mb-8">
            Advanced Technology, Personalised Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <p className="text-grey-muted leading-relaxed mb-4">
                At ArtSmiles, we combine artistic vision with cutting-edge dental
                technology to create beautiful, natural-looking smiles. Our
                experienced cosmetic dentists have transformed thousands of smiles
                on the Gold Coast.
              </p>
            </div>
            <div>
              <p className="text-grey-muted leading-relaxed mb-4">
                With our in-house dental laboratory, we maintain complete quality
                control and can often reduce treatment time and costs. Every
                veneer is custom-crafted to complement your unique facial
                features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="border border-grey-warm rounded-xl p-6 group"
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
      <section className="py-20 bg-gold-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your free veneers consultation today. No obligation, just expert
            advice and personalised recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#form"
              className="bg-white text-gold-dark hover:bg-grey-warm rounded-full px-10 py-4 font-semibold transition"
            >
              Book Free Consultation
            </a>
            <a
              href="tel:0755883677"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gold-dark rounded-full px-10 py-4 font-semibold transition"
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
