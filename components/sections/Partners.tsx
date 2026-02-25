"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const partners = [
  {
    name: "TrackMan",
    src: "/partners/Big+Grey.png",
    alt: "TrackMan — Official golf simulator technology partner of Marafei",
  },
  {
    name: "Golf Saudi",
    src: "/partners/gold_saudi.png",
    alt: "Golf Saudi — Trusted partner of Marafei in Saudi Arabia",
  },
  {
    name: "SmartBox AI",
    src: "/partners/smartboxai_01.png",
    alt: "SmartBox AI — Launch monitor partner for Marafei golf installations",
  },
  {
    name: "Smart2Move",
    src: "/partners/logo-s2m.png",
    alt: "Smart2Move — Simulator technology partner of Marafei",
  },
  {
    name: "BENQ",
    src: "/partners/BenQ_Logo_Typeface_Black.png",
    alt: "BENQ — Commercial golf simulator partner of Marafei",
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
                className="object-contain "
                sizes="166px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
