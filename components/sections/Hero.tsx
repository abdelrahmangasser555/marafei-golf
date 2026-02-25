"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/lucid-origin_Premium_commercial_golf_simulator_installation_multi-bay_setup_subtle_gold_accen-1.jpg"
        alt="Luxury golf simulator room designed by Marafei in Saudi Arabia"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

      <ParticleBackground />

      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full flex flex-col items-center">
          <div className="max-w-3xl text-center">
            <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-heading font-bold leading-tight text-heading md:text-5xl lg:text-6xl"
          >
           
            <span className="text-primary">
              Elevating Golf Preformance <br className="hidden sm:block" />
              through Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-6  text-base leading-relaxed text-body md:text-md"
          >
            Marafei is the certified TrackMan partner delivering turnkey golf
            simulator installations across Saudi Arabia and the GCC — from
            private residences to world-class academies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button variant="primary">
              <a href="#projects">Explore Projects</a>
            </Button>
            <Button variant="outline">
              <a href="#contact">Request Consultation</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest text-muted   md:flex-nowrap md:gap-8 px-4 py-2 rounded"
          >
            <span className="flex-1">Certified TrackMan Installer</span>
            <span className="hidden h-4 w-px bg-border/40 sm:block" />
            <span className="flex-1">Trusted by Golf Saudi</span>
            <span className="hidden h-4 w-px bg-border/40 sm:block" />
            <span className="flex-1">Turnkey Delivery across Saudi Arabia &amp; GCC</span>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
