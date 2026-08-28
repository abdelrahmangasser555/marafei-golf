"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ParticleBackground from "@/components/ui/ParticleBackground";
import TrackmanBadge from "@/components/seo/TrackmanBadge";
import { BENQ_GOLF_URL } from "@/config/seo";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/lucid-origin_Premium_commercial_golf_simulator_installation_multi-bay_setup_subtle_gold_accen-1.jpg"
        alt="Luxury indoor golf simulator room designed and installed by Marafei Golf in Saudi Arabia"
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

      <ParticleBackground />

      <div className="relative z-10 flex w-full items-center justify-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-32 lg:px-8">
          <div className="max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-medium uppercase tracking-[0.25em] text-primary"
            >
              Authorized TrackMan dealer · BenQ partner · GCC installer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-4 text-4xl font-heading font-bold leading-tight text-heading md:text-5xl lg:text-6xl"
            >
              <span className="text-primary">
                Golf Simulators &amp; Installation
                <br className="hidden sm:block" /> Across the GCC
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-white md:text-lg"
            >
              Marafei Golf is a Gulf golf installer and golf partner for homes,
              academies, and commercial venues. We sell and install indoor golf
              simulators with TrackMan and BenQ technology across Saudi Arabia
              and the Gulf.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-bg transition-all duration-300 hover:shadow-glow"
              >
                Explore Projects
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 px-8 py-3.5 text-sm uppercase tracking-wide text-primary transition-all duration-300 hover:bg-primary/10"
              >
                Request Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-col flex-wrap items-center justify-center gap-6 md:flex-row md:gap-8"
            >
              <TrackmanBadge variant="white" width={180} height={72} className="w-44" priority />
              <a href={BENQ_GOLF_URL} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/bb.png"
                  alt="BenQ golf simulator projector partner of Marafei Golf"
                  width={120}
                  height={44}
                  className="h-10 w-auto object-contain"
                />
              </a>
              <p className="max-w-xs text-xs uppercase tracking-widest text-white/80">
                Trusted by Golf Saudi · Turnkey delivery across the Gulf
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
