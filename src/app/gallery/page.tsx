import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Before and Afters",
  description:
    "Explore our dental before-and-after gallery to see real smile transformations at ArtSmiles Gold Coast.",
};

const galleryPairs = [
  {
    before: "/images/gallery/1-Top-teeth-before-composite-veneers.png",
    after: "/images/gallery/2-Top-teeth-after-composite-veneers.png",
    title: "Composite Veneers",
    description: "Composite veneer transformation",
  },
  {
    before: "/images/gallery/5-Porcelain-veneers-before.png",
    after: "/images/gallery/6-Porcelain-veneers-result.png",
    title: "Porcelain Veneers",
    description: "Porcelain veneer result",
  },
  {
    before: "/images/gallery/9-man-before-veneers.png",
    after: "/images/gallery/10-man-after-veneers.png",
    title: "Male Smile Makeover",
    description: "Complete smile transformation with veneers",
  },
  {
    before: "/images/gallery/21-full-mouth-rehabilitation-before.png",
    after: "/images/gallery/22-full-mouth-rehabilitation-after.png",
    title: "Full Mouth Rehabilitation",
    description: "Complex full mouth reconstruction",
  },
  {
    before: "/images/gallery/31-before-hollywood-smile-veneers.png",
    after: "/images/gallery/32-after-hollywood-smile-veneers.png",
    title: "Hollywood Smile",
    description: "Celebrity-style smile with veneers",
  },
  {
    before: "/images/gallery/35-Before-teeth-whitening.png",
    after: "/images/gallery/36-Results-of-Teeth-Whitening-B1-shade.png",
    title: "Teeth Whitening",
    description: "Professional whitening results",
  },
  {
    before: "/images/gallery/43-Woman-smilling-before-porcelain-veneers.png",
    after: "/images/gallery/44-Woman-Smilling-after-porcelain-veneers.png",
    title: "Female Porcelain Veneers",
    description: "Natural-looking porcelain veneers",
  },
  {
    before: "/images/gallery/47-Smile-senior-before-porcelain-veneers.png",
    after: "/images/gallery/48-Smile-senior-after-porcelain-veneers.png",
    title: "Senior Smile Restoration",
    description: "Age-defying smile makeover",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-dark-deep py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
            Real Results
          </h6>
          <h1 className="text-white mb-5">Before &amp; After Gallery</h1>
          <p className="text-gold-muted text-lg max-w-2xl mx-auto leading-relaxed">
            See the transformations our patients have experienced
          </p>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryPairs.map((pair) => (
              <div
                key={pair.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Image pair */}
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={pair.before}
                        alt={`${pair.title} - Before`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <span className="absolute bottom-3 left-3 bg-dark/70 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                      Before
                    </span>
                  </div>

                  {/* After */}
                  <div className="relative">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={pair.after}
                        alt={`${pair.title} - After`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <span className="absolute bottom-3 left-3 bg-gold-dark text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      After
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3 className="text-lg mb-1">{pair.title}</h3>
                  <p className="text-grey-muted text-sm">{pair.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-dark-deep">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready for Your Transformation?</h2>
          <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards the smile you have always wanted. Book
            your free consultation with our experienced team today.
          </p>
          <p className="text-gold-light text-2xl font-medium mb-10">
            <a href="tel:0755883677">(07) 5588 3677</a>
          </p>
          <Link
            href="/book-online"
            className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition inline-block font-medium"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
