"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [imageIndices, setImageIndices] = useState<Record<string, number>>({});

  // Set up image cycling on hover
  useEffect(() => {
    if (!hoveredProjectId) return;

    const project = projects.find(p => p.id === hoveredProjectId);
    if (!project || project.images.length <= 1) return;

    // Cycle every 2s after the initial immediate jump
    const interval = setInterval(() => {
      setImageIndices(prev => ({
        ...prev,
        [hoveredProjectId]: ((prev[hoveredProjectId] ?? 1) + 1) % project.images.length
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [hoveredProjectId]);

  return (
    <>
      <section id="projects" className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Golf Simulator Projects in Saudi Arabia"
            subtitle="A portfolio of precision-engineered indoor golf environments delivered across the region."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, i) => {
              const currentImageIndex = imageIndices[project.id] ?? 0;

              return (
              <motion.button
                key={project.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
                onClick={() => setSelected(project)}
                onHoverStart={() => {
                  // Immediately jump to image 1
                  setImageIndices(prev => ({ ...prev, [project.id]: 1 }));
                  setHoveredProjectId(project.id);
                }}
                onHoverEnd={() => {
                  setHoveredProjectId(null);
                  setImageIndices(prev => ({ ...prev, [project.id]: 0 }));
                }}
                className="group relative aspect-4/5 cursor-pointer overflow-hidden rounded-2xl border border-border/20 text-left transition-all duration-300 hover:border-primary/20 hover:shadow-soft"
              >
                <AnimatePresence mode="sync">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.images[currentImageIndex].src}
                      alt={project.images[currentImageIndex].alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/50 to-transparent" />
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
            );
            })}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
