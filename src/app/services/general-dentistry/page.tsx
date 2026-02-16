import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General Dentistry Gold Coast | Family Dentist | ArtSmiles",
  description: "Comprehensive general dentistry for the whole family. Check-ups, cleans, fillings, and preventive care at our Southport clinic.",
};

export default function GeneralDentistryPage() {
  return (
    <>
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gradient-to-r from-gold via-brown-warm to-dark">
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h6 className="uppercase tracking-widest text-sm mb-3 text-gold-light">Family Dentistry</h6>
          <h1 className="text-white mb-5">General Dentistry Gold Coast</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Comprehensive check-ups, professional cleans, fillings, and preventive care to maintain optimal oral health for the whole family.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-online" className="bg-gold-dark text-white hover:bg-brown-warm transition rounded-full px-8 py-4 font-medium inline-block">Book Appointment</Link>
            <a href="tel:0755883677" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark transition rounded-full px-8 py-4 font-medium inline-block">Call (07) 5588 3677</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-14">Our General Dentistry Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Check-ups & Cleans", desc: "Comprehensive examinations and professional cleaning every 6 months" },
              { title: "Fillings", desc: "Tooth-coloured composite fillings for cavities and decay" },
              { title: "Preventive Care", desc: "Fluoride treatments, sealants, and oral hygiene education" },
              { title: "Gum Disease Treatment", desc: "Early detection and treatment of periodontal disease" },
              { title: "Mouthguards", desc: "Custom sports guards and night guards for grinding" },
              { title: "Children's Dentistry", desc: "Gentle, friendly care for kids of all ages" },
            ].map((service) => (
              <div key={service.title} className="bg-grey-warm rounded-2xl p-6">
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-grey-muted text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Book Your Check-Up Today</h2>
          <p className="text-gold-light text-2xl font-medium mb-10"><a href="tel:0755883677">(07) 5588 3677</a></p>
          <Link href="/book-online" className="rounded-full px-8 py-4 bg-gold-dark text-white hover:bg-brown-warm transition font-medium inline-block">Book Now</Link>
        </div>
      </section>
    </>
  );
}
