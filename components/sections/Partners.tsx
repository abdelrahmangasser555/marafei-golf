"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { strict } from "assert";

const partners = [
  {
    name: "TrackMan",
    src: "/images/trackman.png",
    alt: "TrackMan — Official golf simulator technology partner of Marafei",
    size : "w-42 md:w-40",
  },

  {
    name: "SmartBox AI",
    src: "/images/smartbox golf.png",
    alt: "SmartBox AI — Launch monitor partner for Marafei golf installations",
    size  : "w-42 md:w-40",
    strict_size  : "400px"
  },
  {
    name: "Smart2Move",
    src: "/images/logo-s2m.png",
    alt: "Smart2Move — Simulator technology partner of Marafei",
  },
  {
    name: "BENQ",
    src: "/images/BenQ_Logo_Typeface_Black.png",
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
          {/* {partners.map((partner) => (
            <div
              key={partner.name}
              className={`group relative h-12 w-28 md:h-14 md:w-36 ${partner.size ?? ""}`}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className={`${partner.size ?? "w-28"} object-contain transition-transform duration-300 group-hover:scale-110`}
                sizes={partner.strict_size ? partner.strict_size : "100vw"}
              
                
              />
            </div>
          ))} */}
          <Image src={"/images/tr.png"} alt="TrackMan — Official golf simulator technology partner of Marafei" width={140} height={60} className="object-contain transition-transform duration-300 hover:scale-110" />
          <Image src={"/images/smartbox golf.png"} alt="SmartBox AI — Launch monitor partner for Marafei golf installations" width={160} height={60} className="object-contain transition-transform duration-300 hover:scale-110" />
          <Image src={"/images/s2m.png"} alt="Smart2Move — Simulator technology partner of Marafei" width={160} height={60} className="object-contain transition-transform duration-300 hover:scale-110" />
          <Image src={"/images/bb.png"} alt="BENQ — Commercial golf simulator partner of Marafei" width={160} height={60} className="object-contain transition-transform duration-300 hover:scale-110" />
        </motion.div>
      </div>
    </section>
  );
}
