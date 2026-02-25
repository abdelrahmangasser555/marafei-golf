import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const serviceAreas = [
  "Saudi Arabia",
  "Riyadh",
  "Jeddah",
  "Dubai",
  "Abu Dhabi",
  "GCC",
  "Middle East",
];

const contacts = [
  { icon: Mail, label: "Email", value: "golf@marafei.com", href: "mailto:golf@marafei.com" },
  { icon: Phone, label: "Phone", value: "+966 53 023 0544", href: "tel:+966530230544" },
  { icon: MessageCircle, label: "WhatsApp", value: "+966 53 023 0544", href: "https://wa.me/966530230544" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/20 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-2xl font-heading font-bold tracking-wider text-heading"
            >
              <Image src="/partners/golf logo_white.png" alt="Marafei Golf Logo" width={150} height={50} className="object-contain" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
              Marafei is the Middle East&apos;s premier golf technology
              integrator, delivering turnkey golf simulator installations across
              Saudi Arabia and the GCC. As a certified TrackMan partner, we
              engineer luxury indoor golf environments for private residences,
              academies, and commercial venues.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-heading">
              Contacts
            </h3>
            <ul className="mt-4 space-y-4">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <li key={contact.label}>
                    <a
                      href={contact.href}
                      className="flex items-center gap-3 text-sm text-body transition-colors hover:text-primary"
                    >
                      <Icon size={18} className="text-primary" />
                      <div>
                        <div className="text-xs uppercase tracking-widest text-muted">{contact.label}</div>
                        <div className="text-sm">{contact.value}</div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-heading">
              Service Areas
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border/30 px-3 py-1 text-xs text-body"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 md:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Marafei. Premium Golf Simulators &amp;
            Golf Technology Solutions across Saudi Arabia &amp; the Middle East.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted">
              Certified TrackMan Installer
            </span>
            <span className="text-xs text-primary/60">
              Trusted by Golf Saudi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
