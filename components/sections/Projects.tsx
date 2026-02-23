"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectModal from "@/components/sections/ProjectModal";
import { projects, type Project } from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Golf Simulator Projects in Saudi Arabia & GCC"
            subtitle="A portfolio of precision-engineered indoor golf environments delivered across the region."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, i) => (
              <motion.button
                key={project.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
                onClick={() => setSelected(project)}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border border-border/20 text-left transition-all duration-300 hover:border-primary/20 hover:shadow-soft"
              >
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {project.tag}
                  </span>
                  <h3 className="mt-1 text-xl font-heading font-semibold text-heading">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {project.location}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
