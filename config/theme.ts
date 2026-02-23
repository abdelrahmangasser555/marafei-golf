export const theme = {
  colors: {
    primary: "var(--color-primary)",
    primaryLight: "var(--color-primary-light)",
    accent: "var(--color-accent)",
    background: "var(--color-bg)",
    backgroundAlt: "var(--color-bg-alt)",
    surface: "var(--color-surface)",
    heading: "var(--color-heading)",
    body: "var(--color-body)",
    muted: "var(--color-muted)",
    border: "var(--color-border)",
  },
  shadows: {
    soft: "0 4px 30px rgba(191, 163, 107, 0.08)",
    cinematic: "0 8px 60px rgba(191, 163, 107, 0.12)",
    glow: "0 0 40px rgba(191, 163, 107, 0.2)",
  },
  radii: {
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },
} as const;

export const seo = {
  siteName: "Marafei",
  siteUrl: "https://marafei.com",
  title: "Marafei | Premium Golf Simulators & Golf Technology in the Middle East",
  description:
    "Marafei designs and installs premium golf simulators and elite indoor golf environments across Saudi Arabia and the GCC. Certified TrackMan partner delivering turnkey golf technology solutions.",
  keywords: [
    "golf simulators Middle East",
    "golf simulator Saudi Arabia",
    "indoor golf simulator Saudi",
    "golf technology solutions GCC",
    "TrackMan golf simulator Saudi Arabia",
    "luxury golf simulator installation",
    "golf simulator for private residence",
    "golf academy simulator solutions",
    "turnkey golf simulator installation",
    "professional golf simulators GCC",
    "indoor golf training technology Middle East",
  ],
  locale: "en_US",
  type: "website",
} as const;
