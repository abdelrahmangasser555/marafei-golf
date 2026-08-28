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
  longDescription: string;
  technologies: string[];
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "vip-golf-academy",
    name: "VIP Golf Academy",
    location: "Riyadh Golf Club VIP Academy, Riyadh, Saudi Arabia",
    tag: "Golf Academy",
    client: "Golf Saudi",
    description:
      "Marafei Golf delivered the complete design, installation, and technical integration of the Riyadh Golf Club VIP Academy — a high-performance indoor golf training environment with TrackMan, SportsBox AI, and Smart2Move systems.",
    longDescription:
      "Marafei Golf was appointed to design, install, and commission the Riyadh Golf Club VIP Academy for Golf Saudi. The brief was a world-class indoor golf training environment that could serve elite players with tour-accurate data, not a decorative simulator room. We specified and calibrated TrackMan IO and TrackMan 4 launch monitors, integrated SportsBox AI 3D swing analysis, and installed Smart2Move force plates so coaches could connect ball flight, body motion, and ground-force data in one bay. The project covered spatial design, projector and screen geometry, impact protection, network, and final commissioning. The result is a professional academy standard that demonstrates Marafei Golf’s capability as a Gulf golf installer for federations, clubs, and high-performance centres.",
    technologies: [
      "TrackMan IO",
      "TrackMan 4",
      "SportsBox AI",
      "Smart2Move Force Plates",
      "BenQ golf simulation projection",
    ],
    images: [
      {
        src: "/solutions/proj_03/01.jpg",
        alt: "VIP Golf Academy indoor golf simulator bay at Riyadh Golf Club installed by Marafei Golf",
      },
      {
        src: "/solutions/proj_03/02.jpg",
        alt: "High-performance golf training environment at RGC VIP Academy — Marafei Golf Saudi Arabia",
      },
      {
        src: "/solutions/proj_03/03.jpg",
        alt: "TrackMan golf simulator facility at Riyadh Golf Club VIP Academy",
      },
      {
        src: "/solutions/proj_03/04.jpg",
        alt: "TrackMan 4 launch monitor installation at Riyadh Golf Club VIP Academy — Marafei Golf",
      },
      {
        src: "/solutions/proj_03/05.jpg",
        alt: "Indoor golf academy lounge and simulator bays delivered by Marafei Golf",
      },
      {
        src: "/solutions/proj_03/06.jpg",
        alt: "Immersive golf simulator environment at RGC VIP Academy, Riyadh",
      },
    ],
  },
  {
    id: "2",
    slug: "massarah-resort-golf-simulator",
    name: "Massarah Resort Multi-Sport Lounge",
    location: "Massarah Resort, Saudi Arabia",
    tag: "Commercial",
    client: "Massarah Resort",
    description:
      "A commercial TrackMan 4 golf simulator and multi-sport lounge designed, fitted out, and installed by Marafei Golf for resort guests in Saudi Arabia.",
    longDescription:
      "Massarah Resort commissioned Marafei Golf to create a commercial indoor golf and multi-sport lounge that would work as both entertainment and a serious practice bay. We delivered full design, joinery, lighting, acoustics, impact screening, and a TrackMan 4 golf simulator calibrated for shared public use. Additional interactive sports systems sit alongside the golf bay so the room earns its keep as a year-round resort amenity. This project is typical of how we work with hotels, clubs, and F&B venues across the GCC: a single installer accountable for architecture, technology, and guest-ready finish.",
    technologies: [
      "TrackMan 4",
      "BenQ golf simulation projection",
      "Custom enclosure and turf",
      "Commercial AV integration",
    ],
    images: [
      {
        src: "/solutions/proj_01/01.png",
        alt: "Commercial golf simulator lounge at Massarah Resort Saudi Arabia installed by Marafei Golf",
      },
      {
        src: "/solutions/proj_01/02.png",
        alt: "TrackMan golf simulator interior at Massarah Resort — Marafei Golf commercial installation",
      },
      {
        src: "/solutions/proj_01/03.png",
        alt: "Indoor golf simulator bay for resort guests at Massarah Resort, Saudi Arabia",
      },
      {
        src: "/solutions/proj_01/04.png",
        alt: "Multi-sport entertainment lounge with golf simulator at Massarah Resort",
      },
      {
        src: "/solutions/proj_01/05.png",
        alt: "Finished commercial golf simulator room by Marafei Golf at Massarah Resort",
      },
    ],
  },
  {
    id: "3",
    slug: "private-residence-golf-simulator",
    name: "Private Residence Golf Simulator",
    location: "Private Residence, Saudi Arabia",
    tag: "Private Residence",
    client: "Private Client",
    description:
      "A private residential golf simulator designed and installed by Marafei Golf, featuring accurate launch-monitor tracking in a custom home environment.",
    longDescription:
      "For this private residence, Marafei Golf designed a compact indoor golf simulator that could be used for serious practice and family entertainment without dominating the home. The room was measured, modeled, and specified around hitting distance, ceiling height, projector throw, and acoustic comfort. We installed a Garmin Approach R50 launch monitor with a custom enclosure, turf, and calibrated projection so the client could train at home to the same standard they expect on a range. Residential work of this kind is a core part of our Gulf golf installer practice — from villas in Riyadh and Jeddah to penthouses in Dubai.",
    technologies: [
      "Garmin Approach R50",
      "Custom simulator enclosure",
      "Calibrated projection and turf",
    ],
    images: [
      {
        src: "/solutions/proj_02/01.png",
        alt: "Private residential golf simulator installation in Saudi Arabia by Marafei Golf",
      },
      {
        src: "/solutions/proj_02/02.png",
        alt: "Home golf simulator setup with Garmin Approach R50 installed by Marafei Golf",
      },
    ],
  },
];
