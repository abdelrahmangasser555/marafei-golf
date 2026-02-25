"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { submitContactForm } from "@/app/actions/contact";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const result = await submitContactForm(form);

    if (result.success) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
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
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border/20 bg-surface/50 p-8 backdrop-blur-sm md:p-12"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-4 py-12 text-center"
            >
              <CheckCircle size={48} className="text-primary" strokeWidth={1.5} />
              <h3 className="text-xl font-heading font-semibold text-heading">
                Inquiry Received
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-body">
                Thank you. Our team will review your request and reach out within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-xs uppercase tracking-widest text-primary hover:text-primary/70 transition-colors"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <>
              <div className="space-y-6">
                {(
                  [
                    { name: "name", label: "Company / Full Name", type: "text" },
                    { name: "email", label: "Email Address", type: "email" },
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
                      required
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
                    required
                    className="w-full resize-none rounded-xl border border-border/30 bg-transparent px-4 py-4 text-sm text-heading outline-none transition-all duration-200 focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(191,163,107,0.1)]"
                  />
                </div>
              </div>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  <AlertCircle size={16} />
                  {errorMsg}
                </motion.div>
              )}

              <div className="mt-8 flex justify-center">
                <motion.button
                  ref={buttonRef}
                  type="submit"
                  disabled={status === "loading"}
                  style={{ x: translateX, y: translateY }}
                  whileHover={{ scale: status === "loading" ? 1 : 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-widest text-bg transition-shadow duration-300 hover:shadow-glow cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </motion.button>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

