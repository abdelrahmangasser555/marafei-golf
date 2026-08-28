"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import TrackmanBadge from "@/components/seo/TrackmanBadge";
import { PARTNERS } from "@/config/seo";

export default function Partners() {
  return (
    <section id="partners" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Technology Partners"
          subtitle="Marafei Golf is an authorized TrackMan dealer and BenQ golf projection partner. We also integrate SportsBox AI and Smart2Move in academy and performance rooms across the GCC."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex justify-center"
        >
          <TrackmanBadge variant="white" width={280} height={112} className="w-64 md:w-72" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-border/30 bg-surface/50 p-8 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-soft"
            >
              <div className="relative flex h-16 w-full items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={160}
                  height={60}
                  className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-sm font-heading font-semibold tracking-wide text-heading">
                {partner.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {partner.description}
              </p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
