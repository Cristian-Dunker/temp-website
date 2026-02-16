import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Options & Finance | Dental Payment Plans | ArtSmiles",
  description:
    "Flexible payment options for dental care. Afterpay, Humm, health fund claims, and SmilePass membership. Make quality dentistry affordable.",
};

const paymentOptions = [
  {
    title: "Afterpay",
    desc: "Split your treatment into 4 interest-free fortnightly payments. No added fees when you pay on time.",
    features: ["Interest-free", "4 fortnightly payments", "Instant approval", "No hidden fees"],
  },
  {
    title: "Humm",
    desc: "Flexible buy-now-pay-later plans for larger treatments. Choose payment terms from 2 months to 5 years.",
    features: ["Long-term financing available", "Choose your repayment schedule", "Quick online application", "Up to $30,000"],
  },
  {
    title: "Openpay",
    desc: "Flexible payment plans with no interest charged. Pay over 2, 3, 4, or 6 months.",
    features: ["0% interest", "Flexible terms", "Instant approval", "Plans up to $20,000"],
  },
  {
    title: "TLC (Total Lifestyle Credit)",
    desc: "Finance your dental treatment with interest-free periods and low monthly payments.",
    features: ["Interest-free periods available", "Plans up to 5 years", "Quick approval process", "Established provider"],
  },
  {
    title: "Smile Right",
    desc: "Specialized dental finance with tailored repayment plans to suit your budget.",
    features: ["Dental-specific financing", "Flexible repayment options", "Competitive rates", "Fast approvals"],
  },
  {
    title: "Access My Super",
    desc: "Access your superannuation early for dental treatment under compassionate grounds.",
    features: ["Early super access", "Tax-free withdrawals for approved treatments", "We assist with applications", "For eligible patients"],
  },
];

export default function FinancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-gold via-gold-dark to-navy">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">
            Payment Options
          </h6>
          <h1 className="text-white mb-5">Flexible Payment Plans</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Quality dental care shouldn't be out of reach. We offer a range of flexible payment options to make your treatment affordable.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Making Dental Care Affordable</h2>
            <p className="text-grey-muted leading-relaxed mb-5">
              At ArtSmiles, we believe everyone deserves a beautiful, healthy smile. That's why we've partnered with Australia's leading finance providers to offer flexible payment solutions tailored to your budget.
            </p>
            <p className="text-grey-muted leading-relaxed">
              Whether you need a simple check-up or comprehensive treatment, we'll work with you to find a payment plan that fits your financial situation.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Options Grid */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">Payment Plans Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paymentOptions.map((option) => (
              <div key={option.title} className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-3 text-gold-dark">{option.title}</h3>
                <p className="text-grey-muted mb-6 leading-relaxed">{option.desc}</p>
                <ul className="space-y-2">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Funds */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Health Fund Claims</h2>
              <p className="text-grey-muted leading-relaxed mb-5">
                We accept all major Australian health funds and offer instant on-the-spot claiming through our HICAPS terminal. Simply bring your health fund card, and we'll process your claim immediately—no paperwork, no waiting for reimbursement.
              </p>
              <p className="text-grey-muted leading-relaxed mb-5">
                As a preferred provider with many funds, you may receive higher rebates and gap-free or reduced-gap treatment on selected services.
              </p>
              <div className="bg-gold/10 rounded-2xl p-6">
                <h4 className="font-bold mb-2">Bulk Billing Available</h4>
                <p className="text-sm text-grey-muted">
                  We bulk bill for eligible DVA (Department of Veterans' Affairs) and CDBS (Child Dental Benefits Schedule) patients.
                </p>
              </div>
            </div>
            <div className="bg-grey-warm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">How HICAPS Works</h3>
              <ol className="space-y-4">
                {[
                  "Bring your health fund card to your appointment",
                  "We swipe your card through our HICAPS terminal",
                  "Your claim is processed instantly",
                  "You only pay the gap (if any) on the day",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {i + 1}
                    </div>
                    <span className="text-dark">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* SmilePass/ArtSmiles Club */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">ArtSmiles Club Membership</h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            No health insurance? Join the ArtSmiles Club from just <strong className="text-gold-light">$9 per week</strong> and receive all your preventive care—including check-ups, professional cleans, and x-rays—plus exclusive discounts of up to 30% on cosmetic and restorative treatments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              "Free regular check-ups & cleans",
              "Free emergency dental exams",
              "Up to 30% discount on treatments",
            ].map((benefit) => (
              <div key={benefit} className="bg-white/10 rounded-xl p-6">
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
          <Link
            href="/about-us"
            className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition font-medium inline-block"
          >
            Learn More About ArtSmiles Club
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">Payment Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "Which payment option is best for me?",
                a: "It depends on your treatment cost and budget. For smaller treatments (under $2,000), Afterpay or Openpay offers quick, interest-free solutions. For larger treatments, Humm, TLC, or Smile Right provide longer-term financing. Our team can help you choose the right option during your consultation.",
              },
              {
                q: "Do I need to be approved before booking?",
                a: "No. You can book your consultation first, and we'll discuss payment options during your visit. Most finance providers offer instant approvals, so you can often start treatment the same day if approved.",
              },
              {
                q: "Can I use my health fund AND a payment plan?",
                a: "Yes! You can claim your health fund rebate through HICAPS, then finance the gap amount using Afterpay, Humm, or another payment plan. This makes treatment even more affordable.",
              },
              {
                q: "Are there any hidden fees?",
                a: "We provide transparent, upfront quotes with no hidden costs. Payment plan fees vary by provider—Afterpay and some Openpay plans are interest-free, while others may charge interest depending on the term you choose. We'll explain all costs before you proceed.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-grey-warm rounded-2xl p-6 group">
                <summary className="font-medium text-lg cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="pt-4 text-grey-muted leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-grey-muted text-lg mb-10 max-w-2xl mx-auto">
            Book a free consultation to discuss your treatment and explore payment options that work for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-online"
              className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition font-medium"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:0755883677"
              className="rounded-full px-8 py-4 border-2 border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white transition font-medium"
            >
              Call (07) 5588 3677
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
