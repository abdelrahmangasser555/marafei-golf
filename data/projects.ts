export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  tag: string;
  client: string;
  description: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "al-diriyah-private-residence",
    name: "Al Diriyah Private Residence",
    location: "Riyadh, Saudi Arabia",
    tag: "Private Residence",
    client: "Private Client",
    description:
      "A bespoke indoor golf simulator suite designed for a private estate in Al Diriyah. Featuring a full TrackMan setup with custom-calibrated projection, premium synthetic turf, and a cinematic surround-sound environment — engineered for the most discerning golfer.",
    images: [
      {
        src: "/images/lucid-origin_High-end_golf_performance_academy_indoor_simulator_bay_dark_navy_and_black_inter-1.jpg",
        alt: "Premium golf simulator installation in private residence, Riyadh, Saudi Arabia — Marafei",
      },
      {
        src: "/images/lucid-origin_Premium_commercial_golf_simulator_installation_multi-bay_setup_subtle_gold_accen-2.jpg",
        alt: "Interior view of luxury indoor golf simulator room in Al Diriyah — Marafei",
      },
      {
        src: "/images/lucid-origin_Ultra_luxury_VIP_indoor_golf_simulator_lounge_black_and_dark_navy_theme_gold_acc-3.jpg",
        alt: "TrackMan golf simulator setup in Riyadh private residence — Marafei",
      },
    ],
  },
  {
    id: "2",
    slug: "jeddah-golf-academy",
    name: "Jeddah Golf Academy",
    location: "Jeddah, Saudi Arabia",
    tag: "Golf Academy",
    client: "Jeddah Sports Authority",
    description:
      "A state-of-the-art golf academy featuring three TrackMan-equipped simulator bays, an analytics lab, and custom coaching stations. Designed to elevate golf training infrastructure in western Saudi Arabia with enterprise-grade precision.",
    images: [
      {
        src: "/images/lucid-origin_Premium_commercial_golf_simulator_installation_multi-bay_setup_subtle_gold_accen-2.jpg",
        alt: "Golf academy simulator installation in Jeddah, Saudi Arabia — Marafei",
      },
      {
        src: "/images/golf-simulator-jeddah-training-marafei.jpg",
        alt: "Professional golf training bay with TrackMan in Jeddah academy — Marafei",
      },
      {
        src: "/images/golf-simulator-jeddah-analytics-marafei.jpg",
        alt: "Golf analytics lab in Jeddah Golf Academy — Marafei",
      },
    ],
  },
  {
    id: "3",
    slug: "dubai-commercial-lounge",
    name: "Dubai Commercial Golf Lounge",
    location: "Dubai, UAE",
    tag: "Commercial",
    client: "Confidential",
    description:
      "An ultra-premium commercial golf lounge in Dubai featuring dual simulator suites, a members-only bar, and integrated entertainment systems. Built for high-net-worth clientele seeking a refined indoor golf and social experience in the GCC.",
    images: [
      {
        src: "/images/lucid-origin_Ultra_luxury_VIP_indoor_golf_simulator_lounge_black_and_dark_navy_theme_gold_acc-3.jpg",
        alt: "Commercial golf simulator lounge in Dubai, UAE — Marafei",
      },
      {
        src: "/images/golf-simulator-dubai-interior-marafei.jpg",
        alt: "Interior of luxury golf lounge with simulator bays in Dubai — Marafei",
      },
      {
        src: "/images/golf-simulator-dubai-social-marafei.jpg",
        alt: "Premium social golf experience in Dubai commercial lounge — Marafei",
      },
    ],
  },
];
