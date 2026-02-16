"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface DropdownSection {
  title: string;
  items: { label: string; href: string }[];
}

const servicesSections: DropdownSection[] = [
  {
    title: "Cosmetic Dentistry",
    items: [
      { label: "Dental Veneers", href: "/services/dental-veneers" },
      { label: "Crowns & Bridges", href: "/services/crowns-and-bridges" },
      { label: "Teeth Whitening", href: "/services/teeth-whitening" },
      {
        label: "Full Mouth Reconstruction",
        href: "/services/full-mouth-reconstruction",
      },
    ],
  },
  {
    title: "Implants",
    items: [
      { label: "Dental Implants", href: "/services/dental-implants" },
      { label: "All-on-4", href: "/services/all-on-4" },
      { label: "Single Tooth Implant", href: "/services/single-tooth-implant" },
    ],
  },
  {
    title: "General",
    items: [
      { label: "General Dentistry", href: "/services/general-dentistry" },
      { label: "Emergency Dentist", href: "/services/emergency-dentist" },
      { label: "Gum Disease Treatment", href: "/services/gum-disease-treatment" },
      { label: "Wisdom Teeth", href: "/services/wisdom-teeth" },
      { label: "Root Canal", href: "/services/root-canal" },
    ],
  },
];

const navLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Dental Services", href: "/services", hasDropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Finance", href: "/finance" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll for transparent -> white transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // check on mount in case page is already scrolled
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 h-20">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={scrolled ? "/images/logos/logo-full.png" : "/images/logos/logo-white.png"}
            alt="ArtSmiles"
            width={180}
            height={48}
            priority
            className="h-auto w-[140px] sm:w-[180px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-light transition-colors duration-300 ${
                    scrolled
                      ? "text-dark hover:text-gold-dark"
                      : "text-white hover:text-gold-light"
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mega Dropdown */}
                <div
                  className={`absolute left-1/2 top-full z-50 mt-1 w-[640px] -translate-x-1/2 rounded-xl border border-grey-warm bg-white p-6 shadow-xl transition-all duration-200 ${
                    servicesOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                  role="menu"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {servicesSections.map((section) => (
                      <div key={section.title}>
                        <h6 className="mb-3 text-xs font-medium uppercase tracking-wider text-grey-muted">
                          {section.title}
                        </h6>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block text-sm font-light text-dark transition-colors hover:text-gold-dark"
                                role="menuitem"
                                onClick={() => setServicesOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-grey-warm pt-4">
                    <Link
                      href="/services"
                      className="text-sm font-medium text-gold-dark transition-colors hover:text-brown-warm"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-light transition-colors duration-300 ${
                  scrolled
                    ? "text-dark hover:text-gold-dark"
                    : "text-white hover:text-gold-light"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right side: Phone + Book Online CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:0755883677"
            className="rounded-full bg-[#B6A178FA] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gold-dark"
          >
            (07) 5588 3677
          </a>
          <Link
            href="/book-online"
            className="rounded-full bg-[#B6A178FA] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gold-dark"
          >
            Book Online
          </Link>
        </div>

        {/* Mobile: Phone icon + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:0755883677"
            className={`rounded-full p-2 transition-colors duration-300 ${
              scrolled ? "text-dark hover:text-gold-dark" : "text-white hover:text-gold-light"
            }`}
            aria-label="Call ArtSmiles"
          >
            <svg
              className="h-5 w-5"
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
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`rounded-md p-2 transition-colors duration-300 ${
              scrolled ? "text-dark hover:text-gold-dark" : "text-white hover:text-gold-light"
            }`}
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-grey-warm px-5 py-4">
          <Image
            src="/images/logos/logo-full.png"
            alt="ArtSmiles"
            width={130}
            height={36}
            className="h-auto w-[130px]"
          />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="rounded-md p-1.5 text-dark transition-colors hover:text-gold-dark"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Panel Navigation */}
        <nav className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-light text-dark transition-colors hover:bg-grey-warm hover:text-gold-dark"
                    aria-expanded={mobileServicesOpen}
                  >
                    {link.label}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen ? "max-h-[600px]" : "max-h-0"
                    }`}
                  >
                    <div className="space-y-4 pb-2 pl-3 pt-2">
                      {servicesSections.map((section) => (
                        <div key={section.title}>
                          <h6 className="mb-1.5 text-xs font-medium uppercase tracking-wider text-grey-muted">
                            {section.title}
                          </h6>
                          <ul className="space-y-1">
                            {section.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="block rounded-md px-3 py-1.5 text-sm font-light text-dark transition-colors hover:bg-grey-warm hover:text-gold-dark"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        href="/services"
                        className="block px-3 text-sm font-medium text-gold-dark transition-colors hover:text-brown-warm"
                        onClick={() => setMobileOpen(false)}
                      >
                        View All Services &rarr;
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2.5 text-base font-light text-dark transition-colors hover:bg-grey-warm hover:text-gold-dark"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Panel Footer */}
        <div className="border-t border-grey-warm px-5 py-5 space-y-3">
          <a
            href="tel:0755883677"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#B6A178FA] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold-dark"
          >
            <svg
              className="h-4 w-4"
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
            (07) 5588 3677
          </a>
          <Link
            href="/book-online"
            className="block w-full rounded-full bg-[#B6A178FA] px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-gold-dark"
            onClick={() => setMobileOpen(false)}
          >
            Book Online
          </Link>
        </div>
      </div>
    </header>
  );
}
