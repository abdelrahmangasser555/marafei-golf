"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";
import Image from "next/image";
import TrackmanBadge from "@/components/seo/TrackmanBadge";
import { BENQ_GOLF_URL, NAP } from "@/config/seo";

const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Projects", href: "/#projects" },
  { label: "Partners", href: "/#partners" },
  { label: "Installer", href: "/golf-simulator-installer" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8">
        <Link
          href="/"
          className="shrink-0 text-heading"
          aria-label="Marafei Golf home"
        >
          <div className="flex flex-col items-start justify-center">
            <span className="text-lg font-heading font-bold tracking-wider md:text-2xl">
              Marafei Golf
            </span>
            <Image
              src="/partners/golf logo_white.png"
              alt="Marafei Golf — golf simulator installer in the GCC"
              width={80}
              height={30}
              className="mt-0.5 h-auto w-16 md:w-20"
              priority
            />
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <TrackmanBadge
            variant="white"
            width={120}
            height={48}
            className="w-[120px]"
            priority
          />
          <a
            href={BENQ_GOLF_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="BenQ golf simulator projector partner"
            className="inline-flex items-center"
          >
            <Image
              src="/images/bb.png"
              alt="BenQ golf simulator projector partner of Marafei Golf"
              width={88}
              height={32}
              className="h-8 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
              priority
            />
          </a>
        </div>

        <ul className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-wide text-body transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="hidden 2xl:list-item">
            <a
              href={`mailto:${NAP.email}`}
              className="flex items-center gap-2 text-sm tracking-wide text-body transition-colors duration-200 hover:text-primary"
            >
              <Mail size={16} />
              {NAP.email}
            </a>
          </li>
          <li>
            <Link
              href="/#contact"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold tracking-wide text-bg transition-all duration-200 hover:shadow-glow"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 text-heading xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg/98 backdrop-blur-md xl:hidden"
          >
            <div className="flex items-center gap-6">
              <TrackmanBadge variant="white" width={140} height={56} className="w-[140px]" />
              <a href={BENQ_GOLF_URL} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/bb.png"
                  alt="BenQ golf simulator partner"
                  width={100}
                  height={36}
                  className="h-9 w-auto object-contain"
                />
              </a>
            </div>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-heading font-semibold text-heading transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-8 py-3 text-lg font-semibold text-bg"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
