"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const nextImage = useCallback(() => {
    if (!project) return;
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  }, [project]);

  const handleDragStart = (x: number) => setDragStart(x);
  const handleDragEnd = (x: number) => {
    if (dragStart === null) return;
    const diff = dragStart - x;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
    setDragStart(null);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 backdrop-blur-md p-4 "
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border/20 bg-surface no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-bg/60 p-2 text-heading backdrop-blur-sm transition-colors hover:bg-bg/80"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div
              className="relative aspect-[16/10] w-full cursor-grab active:cursor-grabbing"
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchEnd={(e) =>
                handleDragEnd(e.changedTouches[0].clientX)
              }
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseUp={(e) => handleDragEnd(e.clientX)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[currentImage].src}
                    alt={project.images[currentImage].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-bg/60 p-3 text-heading backdrop-blur-sm transition-colors hover:bg-bg/80"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-bg/60 p-3 text-heading backdrop-blur-sm transition-colors hover:bg-bg/80"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      idx === currentImage
                        ? "w-6 bg-primary"
                        : "w-2 bg-heading/40"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="p-8">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                {project.tag}
              </span>
              <h3 className="mt-2 text-2xl font-heading font-bold text-heading md:text-3xl">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{project.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-body">
                {project.description}
              </p>
              <p className="mt-4 text-xs text-muted">
                Client: {project.client}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
