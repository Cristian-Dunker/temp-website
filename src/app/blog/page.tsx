import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles | Dental Health Tips",
  description:
    "Discover expert dental articles on oral health, treatments, and smile care tips from ArtSmiles.",
};

type Category =
  | "All"
  | "Cosmetic Dentistry"
  | "Dental Implants"
  | "Full Mouth Rehabilitation"
  | "Post-Operative Instructions"
  | "General";

const categories: Category[] = [
  "All",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Full Mouth Rehabilitation",
  "Post-Operative Instructions",
];

const articles: {
  title: string;
  excerpt: string;
  category: Category;
  slug: string;
}[] = [
  {
    title:
      "Complete Guide to Dental Veneers: Costs, Procedures, and Aftercare",
    excerpt:
      "Everything you need to know about dental veneers, from the different types available to costs, procedures, and how to care for them long-term.",
    category: "Cosmetic Dentistry",
    slug: "complete-guide-dental-veneers",
  },
  {
    title: "Dental Implant Procedure: 4 Steps for Your New Smile",
    excerpt:
      "Discover the four key stages of the dental implant process and what to expect at each step of your journey to a restored smile.",
    category: "Dental Implants",
    slug: "dental-implant-procedure-4-steps",
  },
  {
    title: "Is Professional Teeth Whitening Worth It?",
    excerpt:
      "Compare professional teeth whitening with at-home options. Learn about the benefits, costs, and lasting results of in-office whitening.",
    category: "Cosmetic Dentistry",
    slug: "professional-teeth-whitening-worth-it",
  },
  {
    title: "Why Choose Dental Implants Gold Coast",
    excerpt:
      "Explore why dental implants are the gold standard for tooth replacement and what makes the Gold Coast the ideal location for your treatment.",
    category: "Dental Implants",
    slug: "why-choose-dental-implants-gold-coast",
  },
  {
    title: "What Is the Best Diet for Dental Health?",
    excerpt:
      "Learn which foods strengthen your teeth and gums, and which ones to avoid to maintain optimal oral health and a beautiful smile.",
    category: "General",
    slug: "best-diet-dental-health",
  },
  {
    title: "How to Fix a Cracked Tooth?",
    excerpt:
      "Cracked teeth are more common than you think. Discover the treatment options available and when you should see your dentist urgently.",
    category: "General",
    slug: "how-to-fix-cracked-tooth",
  },
  {
    title: "All-on-4 Transformation: From Failing Dentition",
    excerpt:
      "See how All-on-4 dental implants can transform a failing dentition into a fully functional, natural-looking set of teeth in just one visit.",
    category: "Full Mouth Rehabilitation",
    slug: "all-on-4-transformation-failing-dentition",
  },
  {
    title: "Bleeding Gums Are Not Normal",
    excerpt:
      "If your gums bleed when you brush or floss, it could be an early sign of gum disease. Learn why you should not ignore this common symptom.",
    category: "General",
    slug: "bleeding-gums-not-normal",
  },
  {
    title: "Post-Op Instructions for Dental Implants",
    excerpt:
      "Follow these important post-operative care instructions after your dental implant surgery to ensure the best healing and long-term results.",
    category: "Post-Operative Instructions",
    slug: "post-op-instructions-dental-implants",
  },
];

/* Category colour map */
function categoryStyle(cat: Category): string {
  switch (cat) {
    case "Cosmetic Dentistry":
      return "bg-gold/10 text-gold-dark";
    case "Dental Implants":
      return "bg-teal/10 text-teal";
    case "Full Mouth Rehabilitation":
      return "bg-brown-warm/10 text-brown-warm";
    case "Post-Operative Instructions":
      return "bg-navy/10 text-navy";
    default:
      return "bg-gold/10 text-gold-dark";
  }
}

/* Simple gradient placeholder for article images */
function ArticleImagePlaceholder({ category }: { category: Category }) {
  let gradient: string;
  switch (category) {
    case "Cosmetic Dentistry":
      gradient = "from-gold/30 to-gold-light/20";
      break;
    case "Dental Implants":
      gradient = "from-teal/20 to-grey-cool";
      break;
    case "Full Mouth Rehabilitation":
      gradient = "from-brown-warm/20 to-gold-muted/20";
      break;
    case "Post-Operative Instructions":
      gradient = "from-navy/15 to-grey-cool";
      break;
    default:
      gradient = "from-grey-warm to-grey-cool";
  }

  return (
    <div
      className={`aspect-[16/10] bg-gradient-to-br ${gradient} flex items-center justify-center`}
    >
      <svg
        className="w-12 h-12 text-grey-muted/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-dark-deep py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
            Dental Articles
          </h6>
          <h1 className="text-white mb-5">Dental Health Tips &amp; Articles</h1>
          <p className="text-gold-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Expert insights on oral health, treatments, and smile care from the
            ArtSmiles team
          </p>
        </div>
      </section>

      {/* ── Category Tabs ── */}
      <section className="bg-white border-b border-grey-warm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium cursor-pointer transition ${
                  i === 0
                    ? "bg-gold-dark text-white"
                    : "bg-grey-warm text-grey-muted hover:bg-gold/15 hover:text-gold-dark"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white"
              >
                {/* Image placeholder */}
                <ArticleImagePlaceholder category={article.category} />

                {/* Content */}
                <div className="p-6">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium mb-3 ${categoryStyle(article.category)}`}
                  >
                    {article.category}
                  </span>
                  <h3 className="text-lg mb-2 group-hover:text-gold-dark transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-grey-muted text-sm leading-relaxed line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-gold-dark text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coming Soon Note ── */}
      <section className="py-16 bg-grey-cool">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 mb-5">
              <svg
                className="w-6 h-6 text-gold-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5"
                />
              </svg>
            </span>
            <h3 className="mb-3">More Articles Coming Soon</h3>
            <p className="text-grey-muted leading-relaxed">
              Stay tuned for expert dental health tips, treatment guides, and
              the latest insights from our experienced dental team.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-dark-deep">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Have Questions About Your Dental Health?</h2>
          <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
            Our team is here to help. Book a consultation and let us create a
            personalised treatment plan for your smile.
          </p>
          <p className="text-gold-light text-2xl font-medium mb-10">
            <a href="tel:0755883677">(07) 5588 3677</a>
          </p>
          <Link
            href="/book-online"
            className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition inline-block font-medium"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
