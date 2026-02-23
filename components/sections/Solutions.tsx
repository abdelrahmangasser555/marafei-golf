"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Monitor, Cpu, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const solutions = [
  {
    icon: Monitor,
    title: "Simulator Design & Engineering",
    description:
      "Custom-engineered golf simulator environments tailored to your space. Full design, installation, and calibration across Saudi Arabia and the GCC.",
    badge: "Turnkey Delivery",
    image: "/images/solutions_01.jpg",
  },
  {
    icon: Cpu,
    title: "TrackMan Integration & Calibration",
    description:
      "Certified TrackMan partner delivering precision-calibrated launch monitors with software integration and analytics platforms for elite venues.",
    badge: "Turnkey Delivery",
    image: "/images/lucid-origin_Ultra_luxury_VIP_indoor_golf_simulator_lounge_black_and_dark_navy_theme_gold_acc-3.jpg",
  },
  {
    icon: Wrench,
    title: "Maintenance & Lifecycle Support",
    description:
      "Enterprise-grade service contracts. Proactive maintenance, firmware updates, and rapid-response technical support across the region.",
    badge: "Turnkey Delivery",
    image: "/images/lucid-origin_Ultra_luxury_VIP_indoor_golf_simulator_lounge_black_and_dark_navy_theme_gold_acc-3.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function Solutions() {
  return (
    <section id="solutions" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Golf Simulator Solutions"
          subtitle="End-to-end golf technology integration — designed, installed, and maintained by Marafei for elite clients across Saudi Arabia and the GCC."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/30 bg-surface/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-cinematic hover:-translate-y-1">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={`${solution.title} — Marafei golf simulator solution`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  <div className="absolute inset-0 bg-black/0 transition-all duration-400 group-hover:bg-black/30" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-400 group-hover:opacity-100">
                    <div className="translate-y-4 transition-transform duration-400 group-hover:translate-y-0">
                      <div className="rounded-xl bg-surface/80 backdrop-blur-sm p-3">
                        <solution.icon
                          className="text-primary"
                          size={48}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-heading font-semibold text-heading">
                    {solution.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                    {solution.description}
                  </p>
                  <span className="mt-4 w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    {solution.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
