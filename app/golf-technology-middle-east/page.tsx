import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import Projects from "@/components/sections/Projects";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title:
    "Golf Technology Middle East | Elite Golf Solutions — Marafei",
  description:
    "Marafei delivers enterprise-grade golf technology solutions across the Middle East and GCC — from TrackMan simulator installations to integrated golf analytics platforms.",
  keywords: [
    "golf technology solutions GCC",
    "golf technology Middle East",
    "professional golf simulators GCC",
    "golf academy simulator solutions",
  ],
  alternates: {
    canonical: "https://marafei.com/golf-technology-middle-east",
  },
  openGraph: {
    title:
      "Golf Technology Middle East | Enterprise Golf Solutions — Marafei",
    description:
      "Enterprise-grade golf technology solutions for the Middle East. Marafei is the region's trusted integrator.",
    url: "https://marafei.com/golf-technology-middle-east",
    siteName: "Marafei",
    locale: "en_US",
    type: "website",
  },
};

export default function GolfTechnologyMiddleEast() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Projects />
      <Partners />
      <Contact />
    </main>
  );
}
