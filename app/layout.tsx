import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marafei.com"),
  title:
    "Marafei | Premium Golf Simulators & Golf Technology in the Middle East",
  description:
    "Marafei designs and installs premium golf simulators and elite indoor golf environments across Saudi Arabia and the GCC. Certified TrackMan partner delivering turnkey golf technology solutions.",
  keywords: [
    "golf simulators Middle East",
    "golf simulator Saudi Arabia",
    "indoor golf simulator Saudi",
    "golf technology solutions GCC",
    "TrackMan golf simulator Saudi Arabia",
    "luxury golf simulator installation",
    "golf simulator for private residence",
    "golf academy simulator solutions",
    "turnkey golf simulator installation",
    "professional golf simulators GCC",
    "indoor golf training technology Middle East",
  ],
  alternates: {
    canonical: "https://marafei.com",
  },
  openGraph: {
    title:
      "Marafei | Premium Golf Simulators & Golf Technology in the Middle East",
    description:
      "Marafei designs and installs premium golf simulators and elite indoor golf environments across Saudi Arabia and the GCC.",
    url: "https://marafei.com",
    siteName: "Marafei",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/golf-simulator-luxury-room-marafei.jpg",
        alt: "Premium golf simulator room by Marafei in Saudi Arabia",
        width: 1920,
        height: 1080,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Marafei | Premium Golf Simulators & Golf Technology in the Middle East",
    description:
      "Certified TrackMan partner delivering turnkey golf simulator installations across Saudi Arabia and the GCC.",
    images: ["/images/golf-simulator-luxury-room-marafei.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Marafei",
      url: "https://marafei.com",
      logo: "https://marafei.com/images/marafei-logo.png",
      description:
        "Ultra-premium golf simulator and golf technology integrator in the Middle East.",
      areaServed: ["Middle East", "Saudi Arabia", "GCC", "UAE"],
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      name: "Marafei",
      url: "https://marafei.com",
      description:
        "Premium golf simulator installations and golf technology solutions across Saudi Arabia and the GCC.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "SA",
        addressRegion: "Riyadh",
      },
      areaServed: [
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      priceRange: "$$$$$",
    },
    {
      "@type": "Product",
      name: "Premium Golf Simulators",
      description:
        "Turnkey golf simulator installation and integration services featuring TrackMan technology for private residences, golf academies, and commercial venues across the Middle East.",
      brand: { "@type": "Brand", name: "Marafei" },
      category: "Golf Technology",
      offers: {
        "@type": "Offer",
        priceCurrency: "SAR",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-body antialiased bg-bg text-body`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
