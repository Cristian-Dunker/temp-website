import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZohoChat from "@/components/ZohoChat";
import Analytics from "@/components/Analytics";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artsmiles.com.au"),
  title: {
    default: "Dentist Gold Coast | Implants, Full Mouth Rehab & Cosmetic Dentistry | ArtSmiles",
    template: "%s | ArtSmiles Dentistry",
  },
  description:
    "Need cosmetic dentistry in Gold Coast or general dental services? Our dentists provide the greatest care. Call (07) 5588-3677 for a free consultation now!",
  keywords: [
    "dentist gold coast",
    "cosmetic dentistry",
    "dental implants",
    "dental veneers",
    "teeth whitening",
    "all on 4",
    "emergency dentist",
    "southport dentist",
  ],
  verification: {
    google: "e60hGTJ66OtNByL-XXlRorZw3-4klLqBNnES6-g9Zm0",
    other: {
      "facebook-domain-verification": "h8bq61p5h3n4kno3pdmjpojzzf5yit",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://artsmiles.com.au",
    siteName: "ArtSmiles",
    title: "ArtSmiles General & Cosmetic Dentistry",
    description:
      "Need cosmetic dentistry in Gold Coast or general dental services? Our dentists provide the greatest care.",
    images: [{ url: "/images/logos/logo-full.png" }],
  },
  alternates: {
    canonical: "https://artsmiles.com.au",
  },
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Southport, Gold Coast",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="https://crmplus.zoho.com.au/crm/javascript/zcga.js"
          async
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <ZohoChat />
      </body>
    </html>
  );
}
