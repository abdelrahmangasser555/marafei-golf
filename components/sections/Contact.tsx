"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const translateX = useTransform(springX, (v) => `${v}px`);
  const translateY = useTransform(springY, (v) => `${v}px`);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 120) {
      mouseX.set(dx * 0.3);
      mouseY.set(dy * 0.3);
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          title="Start Your Project"
          subtitle="Tell us about your vision. Our team will respond within 24 hours with a tailored consultation."
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-border/20 bg-surface/50 p-8 backdrop-blur-sm md:p-12"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="space-y-6">
            {(
              [
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
              ] as const
            ).map((field) => (
              <div key={field.name} className="relative">
                <label
                  htmlFor={field.name}
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focused === field.name || form[field.name]
                      ? "-top-2.5 text-xs text-primary bg-surface/50 px-1"
                      : "top-4 text-sm text-muted"
                  }`}
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className="w-full rounded-xl border border-border/30 bg-transparent px-4 py-4 text-sm text-heading outline-none transition-all duration-200 focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(191,163,107,0.1)]"
                />
              </div>
            ))}

            <div className="relative">
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                  focused === "message" || form.message
                    ? "-top-2.5 text-xs text-primary bg-surface/50 px-1"
                    : "top-4 text-sm text-muted"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={5}
                className="w-full resize-none rounded-xl border border-border/30 bg-transparent px-4 py-4 text-sm text-heading outline-none transition-all duration-200 focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(191,163,107,0.1)]"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <motion.button
              ref={buttonRef}
              type="submit"
              style={{ x: translateX, y: translateY }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-widest text-bg transition-shadow duration-300 hover:shadow-glow cursor-pointer"
            >
              Send Inquiry
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
