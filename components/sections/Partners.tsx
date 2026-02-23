"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const partners = [
  {
    name: "TrackMan",
    src: "/images/partner-trackman.png",
    alt: "TrackMan — Official golf simulator technology partner of Marafei",
  },
  {
    name: "Golf Saudi",
    src: "/images/partner-golf-saudi.png",
    alt: "Golf Saudi — Trusted partner of Marafei in Saudi Arabia",
  },
  {
    name: "Foresight Sports",
    src: "/images/partner-foresight.png",
    alt: "Foresight Sports — Launch monitor partner for Marafei golf installations",
  },
  {
    name: "Full Swing",
    src: "/images/partner-fullswing.png",
    alt: "Full Swing Golf — Simulator technology partner of Marafei",
  },
  {
    name: "AboutGolf",
    src: "/images/partner-aboutgolf.png",
    alt: "AboutGolf — Commercial golf simulator partner of Marafei",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Technology Partners"
          subtitle="Marafei partners with the world's leading golf technology manufacturers to deliver uncompromising quality."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-16"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative h-12 w-28 md:h-14 md:w-36"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                sizes="144px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
