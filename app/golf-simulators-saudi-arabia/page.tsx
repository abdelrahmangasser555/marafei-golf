import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import Projects from "@/components/sections/Projects";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title:
    "Golf Simulators Saudi Arabia | Premium Indoor Golf Installations — Marafei",
  description:
    "Explore Marafei's premium golf simulator installations across Saudi Arabia. Certified TrackMan partner delivering luxury indoor golf environments for residences, academies, and commercial venues.",
  keywords: [
    "golf simulators Saudi Arabia",
    "indoor golf simulator Saudi",
    "TrackMan golf simulator Saudi Arabia",
    "luxury golf simulator installation",
    "golf simulator Riyadh",
  ],
  alternates: {
    canonical: "https://marafei.com/golf-simulators-saudi-arabia",
  },
  openGraph: {
    title:
      "Golf Simulators Saudi Arabia | Premium Indoor Golf — Marafei",
    description:
      "Marafei is Saudi Arabia's leading golf simulator integrator. Certified TrackMan partner delivering turnkey luxury indoor golf environments.",
    url: "https://marafei.com/golf-simulators-saudi-arabia",
    siteName: "Marafei",
    locale: "en_US",
    type: "website",
  },
};

export default function GolfSimulatorsSaudiArabia() {
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
