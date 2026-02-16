import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Got a question? Get in touch with our team today. Call us at (07) 5588-3677.",
};

const hours = [
  { day: "Mon-Fri", time: "8:00 am – 5:00 pm" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/artsmilesAU",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/artsmilesau/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/artsmiles",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCOqoLDIsuglucDFvlMbR5Eg",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-dark-deep py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-grey-muted">
            Get in Touch
          </h6>
          <h1 className="text-white mb-5">Contact Us</h1>
          <p className="text-gold-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out to schedule an appointment
            or ask any questions about our services.
          </p>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT: Contact Details */}
            <div>
              <h3 className="mb-8">Visit Our Clinic</h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-5 h-5 text-gold-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-dark mb-1">Address</p>
                    <p className="text-grey-muted leading-relaxed">
                      Shop 4, 45/49 Nind Street
                      <br />
                      Southport, QLD 4215
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-5 h-5 text-gold-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-dark mb-1">Phone</p>
                    <a
                      href="tel:0755883677"
                      className="text-gold-dark hover:text-brown-warm transition"
                    >
                      (07) 5588 3677
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-5 h-5 text-gold-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-dark mb-1">Email</p>
                    <a
                      href="mailto:contact@artsmiles.com.au"
                      className="text-gold-dark hover:text-brown-warm transition"
                    >
                      contact@artsmiles.com.au
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-5 h-5 text-gold-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-dark mb-2">Opening Hours</p>
                    <div className="space-y-1">
                      {hours.map((h) => (
                        <div
                          key={h.day}
                          className="flex justify-between gap-8 text-grey-muted"
                        >
                          <span>{h.day}</span>
                          <span className="font-medium text-dark">
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-grey-warm">
                <p className="font-medium text-dark mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-10 h-10 rounded-full bg-grey-warm flex items-center justify-center text-grey-muted hover:bg-gold-dark hover:text-white transition"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Zoho Form */}
            <div>
              <h3 className="mb-4">Contact ArtSmiles Dentistry Today!</h3>
              <p className="text-grey-muted mb-8">Count on us! We are happy to help!</p>
              <div className="rounded-xl overflow-hidden bg-grey-cool">
                <iframe
                  src="https://forms.zohopublic.com.au/artsmiles/form/FormsWebsite/formperma/cRiwUiaTCM3KVJHg9cdwg_1oQAGSjTSRbkW4e2n07Sw"
                  className="w-full min-h-[600px] border-0 rounded-xl"
                  title="Book an Appointment Form"
                  loading="lazy"
                />
                <noscript>
                  <div className="p-8 text-center">
                    <p className="text-grey-muted mb-4">
                      The booking form requires JavaScript to load. Please call
                      us directly to schedule your appointment.
                    </p>
                    <a
                      href="tel:0755883677"
                      className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition inline-block font-medium"
                    >
                      Call (07) 5588 3677
                    </a>
                  </div>
                </noscript>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Maps ── */}
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
