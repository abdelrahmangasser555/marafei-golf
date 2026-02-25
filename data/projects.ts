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
    slug: "vip-golf-academy",
    name: "VIP Golf Academy",
    location: "(RGC) Riyadh Golf Club VIP Academy",
    tag: "Private Residence",
    client: "Golf Saudi",
    description:
      "Marafei Golf delivered the complete design, installation, and technical integration of the RGC VIP Academy, creating a fully equipped high-performance golf training environment. The project included the implementation and calibration of advanced simulation systems using TrackMan IO and TrackMan 4, alongside biometric performance analysis through SportsBox AI and Smart2Move Force Plates. From concept design to final commissioning, all systems were seamlessly integrated to provide an accurate and professional training experience aligned with VIP academy standards.",
    images: [
      {
        src: "/solutions/proj_03/01.jpg",
        alt: "Commercial golf simulator at Massarah Resort, Saudi Arabia — Marafei",
      },
      {
        src: "/solutions/proj_03/02.jpg",
        alt: "Multi-sport entertainment space at Massarah Resort — Marafei",
      },
      {
        src: "/solutions/proj_03/03.jpg",
        alt: "Golf simulator facility at Massarah Resort — Marafei",
      },
      {
        src: "/solutions/proj_03/04.jpg",
        alt: "TrackMan 4 golf simulator installation at Massarah Resort — Marafei",
      } ,
      {
        src: "/solutions/proj_03/05.jpg",
        alt: "Commercial golf and multi-sport lounge at Massarah Resort — Marafei",
      },
      {
        src: "/solutions/proj_03/06.jpg",
        alt: "Immersive golf simulator environment at Massarah Resort — Marafei",
      }
    ],
  },
  {
    id: "2",
    slug: "massarah-resort-golf-simulator",
    name: "Commercial Multi-Sport Lounge",
    location: "Massarah Resort Golf Simulator",
    tag: "Commercial",
    client: "Massarah Resort",
    description:
      "Marafei Golf delivered the full design, fit-out, and installation of a commercial golf simulator facility at Massarah Resort, creating an immersive multi-sport entertainment experience. The project featured a TrackMan 4 golf simulator integrated within a fully customized environment, alongside additional interactive sports systems to support a versatile recreational and training space suitable for resort guests and commercial use.",
    images: [
       {
        src: "/solutions/proj_01/01.png",
        alt: "Premium golf simulator installation in private residence, Riyadh, Saudi Arabia — Marafei",
      },
      {
        src: "/solutions/proj_01/02.png",
        alt: "Interior view of luxury indoor golf simulator room in Al Diriyah — Marafei",
      },
      {
        src: "/solutions/proj_01/03.png",
        alt: "TrackMan golf simulator setup in Riyadh private residence — Marafei",
      },
      {
        src: "/solutions/proj_01/04.png",
        alt: "Golf simulator room with TrackMan IO and SportsBox AI at RGC VIP Academy — Marafei",
      } ,
      {
        src: "/solutions/proj_01/05.png",
        alt: "High-performance golf training facility with TrackMan and Smart2Move at RGC VIP Academy — Marafei",

      }
    ],
  },
  {
    id: "3",
    slug: "private-residence-golf-simulator",
    name: "Private Residence Golf Simulator",
    location: "Private Residence",
    tag: "Private Residence",
    client: "Private Client",
    description:
      "Marafei Golf designed and installed a private residential golf simulator tailored for both training and entertainment purposes. The setup features the Garmin Approach R50, delivering accurate performance tracking within a customized home environment that combines functionality, comfort, and immersive gameplay.",
    images: [
      {
        src: "/solutions/proj_02/01.png",
        alt: "Private residential golf simulator installation — Marafei",
      },
      {
        src: "/solutions/proj_02/02.png",
        alt: "Home golf simulator setup with Garmin Approach R50 — Marafei",
      },
      
    ],
  },
];
