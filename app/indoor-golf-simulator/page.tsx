import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import Projects from "@/components/sections/Projects";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title:
    "Indoor Golf Simulator | Premium Indoor Golf Experiences — Marafei",
  description:
    "Marafei designs and installs premium indoor golf simulators across the Middle East. From TrackMan-equipped bays to full-service golf rooms — engineered for perfection.",
  keywords: [
    "indoor golf simulator",
    "indoor golf simulator Saudi",
    "indoor golf training technology Middle East",
    "golf simulator for private residence",
  ],
  alternates: {
    canonical: "https://marafei.com/indoor-golf-simulator",
  },
  openGraph: {
    title: "Indoor Golf Simulator | Premium Installations — Marafei",
    description:
      "Marafei engineers premium indoor golf simulator environments across Saudi Arabia and the GCC.",
    url: "https://marafei.com/indoor-golf-simulator",
    siteName: "Marafei",
    locale: "en_US",
    type: "website",
  },
};

export default function IndoorGolfSimulator() {
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
