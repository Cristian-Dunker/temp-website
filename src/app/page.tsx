import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Dental Veneers",
    href: "/services/dental-veneers",
    icon: "/images/icons/3522348-clinic-dental-medical-mouth-oral-tooth.svg",
    desc: "Creating new smiles, that resemble your natural beauty. Enhance and Improve the sparkle of your smile with high-quality dental veneers",
  },
  {
    title: "Dental Implants",
    href: "/services/dental-implants",
    icon: "/images/icons/3522339-artificial-dental-dental-implants-dentistry-implant-medical-tooth-1.svg",
    desc: "The new way to replace missing teeth and regain confidence with a permanent solution for a better smile.",
  },
  {
    title: "Emergency Dentistry",
    href: "/contact",
    icon: "/images/icons/3522331-broken-tooth-clinic-dental-dentist-dentistry-tooth-toothache.svg",
    desc: "Dental problems that require urgent treatment. Patients with an emergency have priority in our booking.",
  },
  {
    title: "Teeth Whitening",
    href: "/services",
    icon: "/images/icons/3522341-clean-dental-healthcare-healthy-healthy-tooth-mouth-tooth.svg",
    desc: "Teeth Whitening can remove unwanted stubborn stains, providing a whiter appearance that look naturally beautiful and healthy.",
  },
  {
    title: "Full-Mouth Rehabilitation",
    href: "/services",
    icon: "/images/icons/3522357-dental-dental-veneer-dentistry-teeth-tooth-veneer-whitening.svg",
    desc: "Full-mouth rehabilitation restores your entire mouth to full health and beauty, making it fully functional again.",
  },
  {
    title: "Check Up and Clean",
    href: "/services",
    icon: "/images/icons/3522332-brushing-brushing-teeth-dental-healthcare-mouth-teeth-toothbrush.svg",
    desc: "Our routine includes a thorough examination of your mouth, a professional cleaning, and a real talk about your health.",
  },
];

const reviews = [
  {
    quote:
      "The team at ArtSmiles made me feel so comfortable. My veneers look incredible!",
    name: "Sarah M.",
  },
  {
    quote:
      "Best dental experience I've ever had. Dr. Dunker is truly an artist.",
    name: "James T.",
  },
  {
    quote:
      "From consultation to final result, the whole process was seamless. Highly recommend!",
    name: "Michelle R.",
  },
];

const features = [
  {
    icon: "\u2B50",
    title: "We Stay Ahead.",
    desc: "Our Southport dental team continuously updates their skills and invests in the latest dental technology. We believe our Gold Coast community deserves dental options that are proven, precise and comfortable.",
  },
  {
    icon: "\uD83C\uDFC6",
    title: "Tailored Support.",
    desc: "No two smiles are the same. Your treatment plan will be tailored to your individual needs, facial features, lifestyle and budget.",
  },
  {
    icon: "\uD83E\uDD1D",
    title: "Dedicated Customer Service.",
    desc: "Whether you need a routine check-up or you're exploring cosmetic dentistry, dental implants or full-mouth rehabilitation, we take time to understand your goals, concerns and what matters most to you.",
  },
  {
    icon: "\uD83D\uDD2C",
    title: "In-House Dental Lab.",
    desc: "All restorations are made on-site, allowing us to maintain quality control, reduce treatment time and often lower costs.",
  },
];

const badges = [
  "Five-Star Customer Service",
  "A Team That Listens & Cares",
  "World-Class Dentistry",
  "Unparalleled Facilities",
  "State-of-the-Art Technology",
];

const teamMembers = [
  {
    name: "Dr Cristian Dunker",
    image: "/images/team/dr-dunker-portrait.png",
    credentials: "BDSc, MBA (Qld)",
    role: "Principal Dentist",
  },
  {
    name: "Dr Darren Wang",
    image: "/images/team/dr-darren-wang.jpg",
    credentials: "DMD (NSW)",
    role: "Senior Dentist",
  },
  {
    name: "Dr Jessica Ko",
    image: "/images/team/dr-jessica-ko-orig.jpg",
    credentials: "DMD (NSW)",
    role: "Senior Dentist",
  },
];

const fundLogos = [
  "/images/funds/dental-benefits.png",
  "/images/funds/australian-unity.png",
  "/images/funds/fund-1.png",
  "/images/funds/fund-2.png",
  "/images/funds/fund-3-1.png",
  "/images/funds/fund-4-1.png",
  "/images/funds/fund-5-1.png",
  "/images/funds/fund-6.png",
  "/images/funds/fund-7.png",
  "/images/funds/fund-8-1.png",
  "/images/funds/fund-9.png",
  "/images/funds/fund-10-1.png",
  "/images/funds/fund-11-1.png",
  "/images/funds/fund-12-1.png",
  "/images/funds/fund-13.png",
  "/images/funds/fund-14-1.png",
];

const faqs = [
  {
    q: "How much does dental treatment cost at ArtSmiles Gold Coast?",
    a: "Costs vary depending on your specific needs and treatment plan. As one of the leading dental clinics on the Gold Coast, we provide transparent, upfront quotes with no hidden fees. We accept all major health funds with instant HICAPS claims and offer flexible payment plans for comprehensive treatments. Simply book a consultation at our Southport clinic and you\u2019ll receive personalised pricing tailored to your situation.",
  },
  {
    q: "How to see a dentist when you can\u2019t afford it?",
    a: "Our Southport dentists make care accessible through instant health fund claims via HICAPS, bulk billing for eligible DVA and CDBS patients and flexible payment options. Book a consultation at our Southport clinic to discuss budget-friendly solutions. We\u2019re committed to helping Gold Coast patients access the dental care they need.",
  },
  {
    q: "Do you offer emergency dental care in Southport?",
    a: "Yes. Our Southport dental clinic prioritises emergency cases because we know dental pain and trauma can\u2019t wait. Whether you\u2019re experiencing a severe toothache, broken teeth, lost fillings or dental injuries, call ArtSmiles immediately for same-day care. We do our best to see urgent cases during our normal clinic hours: Monday - Friday: 8:30 am to 5:00 pm. As one of the Gold Coast\u2019s trusted emergency dentists, we act quickly to relieve pain, save teeth and prevent complications.",
  },
];

const galleryImages = [
  "/images/gallery/case-53-1.png",
  "/images/gallery/case-49.png",
  "/images/gallery/case-42-1.png",
  "/images/gallery/case-7-1.png",
];

export default function Home() {
  return (
    <>
      {/* ── SECTION 1: Hero Video Banner ── */}
      <section className="relative min-h-[60vh] lg:min-h-[600px] flex items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/hero-fallback.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 py-8 px-[10%]">
          <a
            href="https://g.page/artsmiles/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/hero/google-reviews-badge.png"
              alt="Google 5 Star Reviews"
              width={200}
              height={80}
            />
          </a>
        </div>
      </section>

      {/* ── SECTION 2: About / Introduction ── */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[910px]">
          {/* Left - Text */}
          <div className="p-6 lg:pt-[5%] lg:pb-[5%] lg:pl-[10%] lg:pr-[5%] flex flex-col justify-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-dark">
              ArtSmiles General &amp; Cosmetic Dentistry
            </h1>
            <h2 className="font-heading text-[clamp(1.2rem,1.8vw,2rem)] font-normal leading-snug text-dark mt-4">
              Simply World-Class General &amp; Cosmetic Dentistry On The Gold
              Coast
            </h2>
            <div className="w-16 h-0.5 bg-gold my-6" />
            <p className="text-black leading-relaxed">
              At ArtSmiles General &amp; Cosmetic Dentistry, we pride ourselves
              on providing simply world-class dentistry on the Gold Coast.
            </p>
            <p className="text-black leading-relaxed mt-4">
              We understand that visiting the dentist can be a daunting
              experience for many people, which is why we strive to create a
              relaxing atmosphere where our patients feel at ease. From the
              moment you step into our Southport clinic, you will be greeted by
              our friendly staff who are committed to making your dental visit a
              positive one.
            </p>
            <div className="mt-8">
              <Link
                href="/book-online"
                className="bg-gold-darker text-white hover:bg-black rounded-full px-8 py-4 font-medium transition inline-block"
              >
                Book An Appointment
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/team/dr-dunker-hero.webp"
              alt="Dr Dunker at ArtSmiles"
              fill
              className="object-contain object-bottom"
              sizes="50vw"
            />
          </div>
          <div className="relative lg:hidden aspect-[3/4]">
            <Image
              src="/images/team/dr-dunker-hero.webp"
              alt="Dr Dunker at ArtSmiles"
              fill
              className="object-contain object-bottom"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Reviews / Social Proof ── */}
      <section className="bg-gold/40 py-[5%] px-[10%] text-center">
        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-dark">
          People Are Talking About Us
        </h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        <p className="text-dark mt-4">
          Read our reviews to find out why we are considered the best dentists on
          the Gold Coast
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl shadow-md p-6 text-left"
            >
              <div className="text-gold text-xl mb-3">
                {"\u2605\u2605\u2605\u2605\u2605"}
              </div>
              <p className="text-dark leading-relaxed italic">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-4 font-medium text-dark">- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: Dental Services ── */}
      <section className="bg-white py-[5%] px-[10%]">
        <div className="text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-dark">
            What Dental Services Do We Offer?
          </h2>
          <p className="text-dark mt-3">
            Whether you need complete smile restoration or ongoing care,
            we&apos;re here to help.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="text-center p-6 group cursor-pointer block"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-grey-warm group-hover:bg-gold-light transition flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-heading mt-4 text-dark">
                {service.title}
              </h3>
              <p className="text-grey-muted text-sm mt-2 leading-relaxed">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: What Makes ArtSmiles Different ── */}
      <section className="bg-gold/40 py-[5%] px-[10%]">
        <div className="text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-dark">
            What Makes ArtSmiles Different?
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/80 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold mt-4 text-dark">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed mt-2 text-dark">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ── SECTION 8: About / Video + Text ── */}
      <section className="bg-white py-[5%] px-[10%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left - Video */}
          <div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-2xl shadow-lg"
            >
              <source src="/videos/redesigning-smiles.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Right - Text */}
          <div>
            <h2 className="font-heading text-lg text-grey-muted font-normal">
              We&apos;re here to talk when you&apos;re ready
            </h2>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold mt-2 text-dark">
              Gold Coast Cosmetic Dentistry at the Highest Level
            </h2>
            <div className="w-16 h-0.5 bg-gold mt-6" />
            <div className="mt-6 text-black leading-relaxed text-justify space-y-4">
              <p>
                With an artist&apos;s eye for details, we are committed to
                excellence. Our goal is to provide a natural, harmonious and
                functional smile that complements each patient&apos;s goals and
                personality.
              </p>
              <p>
                We use science, art and technology to give patients the best
                dental work in a comfortable way.
              </p>
              <p>
                From enhancing your smile to maintaining lifelong oral health,
                we&apos;re proud to be your trusted partner for cosmetic &amp;
                general dentistry on the Gold Coast.
              </p>
              <p>
                Book online and take the first step today, otherwise contact us
                with any enquiries.
              </p>
              <p className="font-medium">Your smile journey starts here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: Dental Payment Plans ── */}
      <section className="bg-gold/40 py-[2%] px-[10%]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-dark">
              Dental Payment Plans Available
            </h2>
            <div className="w-16 h-0.5 bg-gold mt-4" />
          </div>
          <Link
            href="/services"
            className="bg-dark text-white hover:bg-gold-dark rounded-full px-8 py-3 inline-flex items-center gap-2 transition font-medium"
          >
            How It Works
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ── SECTION 10: CTA Banner / Book Online ── */}
      <section className="relative min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/hero/cta-bg.jpg"
          alt="Book an appointment at ArtSmiles"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-center px-6 py-16">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
            A Smile You&apos;re Proud of, Signed by ArtSmiles. Schedule a Visit
            Now!
          </h2>
          <div className="mt-6">
            <Link
              href="/book-online"
              className="bg-gold text-white hover:bg-white hover:text-gold rounded-full px-10 py-4 text-lg font-medium transition inline-block"
            >
              BOOK ONLINE
            </Link>
          </div>
          <p className="mt-4 font-heading text-white">
            Or call us on{" "}
            <a
              href="tel:0755883677"
              className="underline hover:text-gold-light transition"
            >
              (07) 5588-3677
            </a>
          </p>
        </div>
      </section>

      {/* ── SECTION 11: Dental Art Gallery ── */}
      <section className="bg-white py-[5%] px-[10%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-dark">
              Dental Art Gallery
            </h2>
            <span className="font-heading text-xl font-normal text-grey-muted block mt-2">
              Latest ArtSmiles journeys
            </span>
            <div className="w-16 h-0.5 bg-gold mt-4" />
            <Link
              href="/gallery"
              className="bg-dark text-white hover:bg-gold-dark rounded-full px-8 py-3 inline-flex items-center gap-2 transition font-medium mt-6"
            >
              View All Gallery
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Right - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((src) => (
              <div
                key={src}
                className="rounded-xl overflow-hidden aspect-square relative"
              >
                <Image
                  src={src}
                  alt="ArtSmiles dental case"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: Our Talented Team ── */}
      <section className="bg-gold/40 py-[5%] px-[10%]">
        <div className="text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-dark">
            Our Talented Team
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
          <p className="max-w-3xl mx-auto text-center mt-4 leading-relaxed text-dark">
            Meet our team of dedicated dental professionals. With extensive
            experience in general and cosmetic dentistry Gold Coast patients
            trust, we&apos;re here to support you from your first visit to your
            final result, making sure you feel informed and confident every step
            of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-heading text-xl mt-4 text-dark">
                {member.name}
              </h3>
              <p className="text-sm text-grey-muted">
                {member.credentials}
              </p>
              <p className="text-sm text-grey-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 13: Health Funds Accepted ── */}
      <section className="bg-white py-[5%] px-[10%] text-center overflow-hidden">
        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-dark">
          Health Funds Accepted
        </h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        <p className="font-heading text-lg font-normal mt-4 text-dark">
          We accept virtually any health funds for eligible patients.
        </p>
        {/* Infinite scroll carousel */}
        <div className="relative mt-10 overflow-hidden">
          <div className="flex animate-[scroll_40s_linear_infinite] gap-4 w-max">
            {[...fundLogos, ...fundLogos].map((logo, i) => (
              <Image
                key={`${logo}-${i}`}
                src={logo}
                alt="Health fund logo"
                width={924}
                height={924}
                className="w-48 h-48 lg:w-60 lg:h-60 object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
        <p className="text-xs text-grey-muted italic mt-8 max-w-4xl mx-auto">
          ArtSmiles Dentist Gold Coast accepts all major health funds in
          Australia. Bring your health fund card and claim instantly using our
          HICAPS terminal. We also accept international insurance and can help
          process claims where possible. Bulk billing available for eligible DVA
          and CDBS patients.
        </p>
      </section>

      {/* ── SECTION 14: ArtSmiles Club CTA ── */}
      <section className="relative min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/hero/club-bg.png"
          alt="ArtSmiles Club"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white text-center px-6 py-16 max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white">
            The Best Alternative to Dental Insurance
          </h2>
          <p className="max-w-3xl mx-auto mt-4 leading-relaxed">
            The ArtSmiles Club is a great solution for those who do not have
            Private Dental Insurance, making our outstanding cosmetic &amp;
            general dentistry on the Gold Coast more accessible to our community.
            It provides free regular check-ups and emergency exams for people
            without insurance. Additionally, it offers other services at a
            discounted price, up to 30% off.
          </p>
          <div className="mt-6">
            <Link
              href="/about-us"
              className="bg-transparent border-2 border-white text-white hover:bg-gold-dark hover:border-gold-dark rounded-full px-10 py-4 text-lg tracking-wide transition inline-block"
            >
              JOIN ARTSMILES CLUB NOW
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: FAQ ── */}
      <section className="bg-white py-[5%] px-[10%]">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-dark mb-8">
          FAQ:
        </h2>
        <div>
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="border-b border-grey-mid py-4 group"
            >
              <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center text-dark">
                <span>{faq.q}</span>
                <span className="ml-4 flex-shrink-0 text-2xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pt-4 pb-2 text-dark leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── SECTION 16: Google Maps ── */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.7!2d153.409944!3d-27.964655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911d103b66712c%3A0xdb6518d7ca3fc3a6!2sArtSmiles!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
          className="w-full h-96 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ArtSmiles Dental Clinic location on Google Maps"
        />
      </section>
    </>
  );
}
