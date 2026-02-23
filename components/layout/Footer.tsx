import Link from "next/link";

const serviceAreas = [
  "Saudi Arabia",
  "Riyadh",
  "Jeddah",
  "Dubai",
  "Abu Dhabi",
  "GCC",
  "Middle East",
];

const quickLinks = [
  { label: "Golf Simulators in Saudi Arabia", href: "/golf-simulators-saudi-arabia" },
  { label: "Indoor Golf Simulator", href: "/indoor-golf-simulator" },
  { label: "Golf Technology Middle East", href: "/golf-technology-middle-east" },
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
              Marafei
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
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-body transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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
