"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h2" | "h3";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl mb-16 ${alignment}`}
    >
      <Tag className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-heading leading-tight">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-5 text-body text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
