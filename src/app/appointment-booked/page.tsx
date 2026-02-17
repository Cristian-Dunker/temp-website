import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Appointment Booked | ArtSmiles",
  description:
    "Thank you for your appointment request. We will contact you shortly to confirm your appointment.",
};

export default function AppointmentBookedPage() {
  return (
    <>
      {/* Hero / Thank You Section */}
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gold-light via-gold-dark to-teal">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-white"
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
          </div>

          <h1 className="text-white mb-6">
            Thank You for Your Appointment Request
          </h1>

          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            We will contact you shortly to confirm your appointment.
          </p>

          <p className="text-lg text-white/90 mb-10">
            Please call our office on{" "}
            <a
              href="tel:0755883677"
              className="font-bold underline hover:text-white transition"
            >
              (07) 5588-3677
            </a>{" "}
            if you have any questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-white text-gold-dark hover:bg-grey-warm rounded-full px-8 py-4 font-semibold transition"
            >
              Return to Homepage
            </Link>
            <a
              href="tel:0755883677"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gold-dark rounded-full px-8 py-4 font-semibold transition"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ArtSmiles Club CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="mb-6">Join ArtSmiles Club Now</h2>
          <p className="text-grey-muted text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Become a member and enjoy significant savings (up to 45%) on your
            appointments. Our SmilePass membership program starts from just $9
            per week, giving you access to comprehensive preventive care and
            exclusive member benefits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            <div className="bg-grey-warm rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gold-dark"
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
              </div>
              <h3 className="text-lg font-bold mb-2">Regular Check-Ups</h3>
              <p className="text-grey-muted text-sm">
                Free regular check-ups and professional cleans included
              </p>
            </div>

            <div className="bg-grey-warm rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gold-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Treatment Discounts</h3>
              <p className="text-grey-muted text-sm">
                Exclusive discounts on all cosmetic and restorative treatments
              </p>
            </div>

            <div className="bg-grey-warm rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gold-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Priority Booking</h3>
              <p className="text-grey-muted text-sm">
                Priority booking and exclusive member events
              </p>
            </div>
          </div>

          <a
            href="https://app.smilepass.co/pages/authentication/register-invite?token=f8068fea-0f46-4717-a3e2-d8b1869b7746"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-dark text-white hover:bg-brown-warm rounded-full px-10 py-4 font-semibold text-lg transition"
          >
            Join ArtSmiles Club Now
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-gold-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <a
                href="tel:0755883677"
                className="text-gold-dark hover:text-gold-darker font-medium"
              >
                (07) 5588-3677
              </a>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-gold-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a
                href="mailto:contact@artsmiles.com.au"
                className="text-gold-dark hover:text-gold-darker font-medium text-sm"
              >
                contact@artsmiles.com.au
              </a>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-gold-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-grey-muted text-sm">
                Shop 4, 45/49 Nind Street
                <br />
                Southport, QLD 4215
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
