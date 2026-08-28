export const SITE_URL = "https://golf.marafei.net";
export const PARENT_SITE_URL = "https://marafei.net";
export const BRAND_SITE_URL = "https://marafei.com";
export const SITE_NAME = "Marafei Golf";
export const BRAND_NAME = "Marafei";

export const TRACKMAN_VERIFY_URL =
  "https://www.trackman.com/authorized-dealer?domain=marafei.com";

export const BENQ_GOLF_URL =
  "https://www.benq.com/en-me/projector/golf/ak700st.html";

export const NAP = {
  name: "Marafei Golf",
  legalName: "Marafei",
  email: "golf@marafei.com",
  phone: "+966530230544",
  phoneDisplay: "+966 53 023 0544",
  whatsapp: "https://wa.me/966530230544",
  streetAddress: "",
  addressLocality: "Riyadh",
  addressRegion: "Riyadh",
  addressCountry: "SA",
  postalCode: "",
} as const;

export const AREA_SERVED = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "GCC",
  "Gulf",
  "Middle East",
] as const;

export const CITIES = [
  "Riyadh",
  "Jeddah",
  "Dammam",
  "Khobar",
  "NEOM",
  "Dubai",
  "Abu Dhabi",
  "Doha",
  "Kuwait City",
  "Manama",
  "Muscat",
] as const;

export const DEFAULT_TITLE =
  "Golf Simulator Installer in the GCC | TrackMan & BenQ Partner";

export const DEFAULT_DESCRIPTION =
  "Marafei Golf designs, sells, and installs premium indoor golf simulators across Saudi Arabia and the Gulf. Authorized TrackMan dealer and BenQ partner for homes, academies, and commercial venues.";

export const DEFAULT_OG_IMAGE = "/images/golf-simulator-luxury-room-marafei.jpg";

export const KEYWORDS = [
  "golf simulator installer GCC",
  "golf simulator installer Gulf",
  "gulf golf installer",
  "golf partner GCC",
  "golf simulators",
  "golf simulator Saudi Arabia",
  "indoor golf simulator Riyadh",
  "TrackMan authorized dealer Saudi Arabia",
  "BenQ golf simulator projector",
  "golf simulator installation Dubai",
  "turnkey golf simulator GCC",
  "golf technology Middle East",
] as const;

export const SAME_AS = [
  PARENT_SITE_URL,
  BRAND_SITE_URL,
  SITE_URL,
  TRACKMAN_VERIFY_URL,
] as const;

export const PARTNERS = [
  {
    name: "TrackMan",
    href: TRACKMAN_VERIFY_URL,
    logo: "/images/tr.png",
    alt: "TrackMan authorized dealer — Marafei Golf golf simulator partner",
    description:
      "Authorized TrackMan dealer for launch monitors and indoor golf simulators in the GCC.",
  },
  {
    name: "BenQ",
    href: BENQ_GOLF_URL,
    logo: "/images/bb.png",
    alt: "BenQ golf simulator projector partner — Marafei Golf",
    description:
      "BenQ 4K short-throw golf simulation projectors specified and calibrated by Marafei Golf.",
  },
  {
    name: "SportsBox AI",
    href: "https://www.sportsbox.ai",
    logo: "/images/smartbox golf.png",
    alt: "SportsBox AI swing analysis partner of Marafei Golf",
    description:
      "3D swing analysis integrated into Marafei Golf academy and performance rooms.",
  },
  {
    name: "Smart2Move",
    href: "https://www.smart2move.com",
    logo: "/images/s2m.png",
    alt: "Smart2Move force plate partner of Marafei Golf",
    description:
      "Force-plate biomechanics for high-performance golf training environments.",
  },
] as const;
