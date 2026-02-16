import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Online | Schedule Your Appointment | ArtSmiles",
  description:
    "Book your dental appointment online at ArtSmiles Gold Coast. Choose your preferred time and date for check-ups, consultations, or treatments.",
};

export default function BookOnlinePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center justify-center bg-gradient-to-br from-gold-light via-gold-dark to-teal">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-16">
          <h1 className="text-white mb-4">Book Your Appointment Online</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose your preferred date and time. We'll confirm your booking within 24 hours.
          </p>
        </div>
      </section>

      {/* Booking Embed */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-grey-warm p-4">
            <iframe
              src="https://app.principle.dental/portal/booking/aZcdEQmlijaYivdVcbvo"
              width="100%"
              height="900"
              className="border-0 rounded-xl"
              title="Book Appointment at ArtSmiles"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-grey-warm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Need Help Booking?</h2>
            <p className="text-grey-muted leading-relaxed mb-8">
              If you have any questions or need assistance with booking your appointment, our friendly team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <a href="tel:0755883677" className="text-gold-dark hover:text-gold-darker font-medium">
                  (07) 5588 3677
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <a href="mailto:info@artsmiles.com.au" className="text-gold-dark hover:text-gold-darker font-medium text-sm">
                  info@artsmiles.com.au
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Hours</h3>
                <p className="text-grey-muted text-sm">
                  Mon-Fri: 8:30 AM - 5:00 PM<br />
                  Sat-Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
