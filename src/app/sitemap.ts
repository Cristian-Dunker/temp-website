import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://artsmiles.com.au";

  // Main pages
  const routes = [
    "",
    "/about-us",
    "/services",
    "/gallery",
    "/finance",
    "/contact",
    "/book-online",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Service pages
  const services = [
    "/services/dental-veneers",
    "/services/dental-implants",
    "/services/all-on-4",
    "/services/single-tooth-implant",
    "/services/teeth-whitening",
    "/services/crowns-and-bridges",
    "/services/full-mouth-reconstruction",
    "/services/general-dentistry",
    "/services/emergency-dentist",
    "/services/gum-disease-treatment",
    "/services/wisdom-teeth",
    "/services/root-canal",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Landing pages (not in main navigation)
  const landingPages = [
    "/dental-veneers-consult",
    "/all-on-4-consult",
    "/appointment-booked",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...services, ...landingPages];
}
