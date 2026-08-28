import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import TrackmanBadge from "@/components/seo/TrackmanBadge";
import { BENQ_GOLF_URL, CITIES, NAP, PARENT_SITE_URL } from "@/config/seo";

const exploreLinks = [
  { label: "Golf Simulator Installer", href: "/golf-simulator-installer" },
  { label: "Golf Simulators Saudi Arabia", href: "/golf-simulators-saudi-arabia" },
  { label: "Indoor Golf Simulator", href: "/indoor-golf-simulator" },
  { label: "Golf Technology Middle East", href: "/golf-technology-middle-east" },
  { label: "Authorized TrackMan Dealer", href: "/authorized-trackman-dealer" },
  { label: "BenQ Golf Partner", href: "/benq-golf-simulator-partner" },
];

const contacts = [
  { icon: Mail, label: "Email", value: NAP.email, href: `mailto:${NAP.email}` },
  { icon: Phone, label: "Phone", value: NAP.phoneDisplay, href: `tel:${NAP.phone}` },
  { icon: MessageCircle, label: "WhatsApp", value: NAP.phoneDisplay, href: NAP.whatsapp },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/20 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/partners/golf logo_white.png"
                alt="Marafei Golf — golf simulator installer in the GCC"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
              Marafei Golf is a Gulf golf installer and authorized TrackMan
              dealer. We sell and install indoor golf simulators across Saudi
              Arabia and the GCC, in partnership with BenQ, SportsBox AI, and
              Smart2Move.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <TrackmanBadge variant="white" width={160} height={64} className="w-40" />
              <a href={BENQ_GOLF_URL} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/bb.png"
                  alt="BenQ golf simulator projector partner"
                  width={110}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-heading">
              Explore
            </h2>
            <ul className="mt-4 space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-body transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={PARENT_SITE_URL}
                  className="text-sm text-body transition-colors hover:text-primary"
                >
                  Marafei Group
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-heading">
              Contact
            </h2>
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
                        <div className="text-xs uppercase tracking-widest text-muted">
                          {contact.label}
                        </div>
                        <div className="text-sm">{contact.value}</div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-heading">
              Service Areas
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {CITIES.map((area) => (
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
            &copy; {new Date().getFullYear()} Marafei Golf. Golf simulator
            sales and installation across Saudi Arabia and the Gulf.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
            <span>Authorized TrackMan Dealer</span>
            <span className="text-primary/70">BenQ Golf Partner</span>
            <span>Trusted by Golf Saudi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
