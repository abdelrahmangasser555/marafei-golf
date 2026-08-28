import type { FAQItem } from "@/data/faqs";

export interface LandingSection {
  heading: string;
  body: string;
}

export interface LandingPageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  intro: string;
  sections: LandingSection[];
  faqs: FAQItem[];
}

export const landingPages: Record<string, LandingPageContent> = {
  installer: {
    slug: "golf-simulator-installer",
    metaTitle: "Golf Simulator Installer in the GCC & Gulf | Marafei Golf",
    metaDescription:
      "Looking for a gulf golf installer or golf simulator partner? Marafei Golf sells and installs TrackMan and BenQ indoor golf simulators across Saudi Arabia, UAE, and the GCC.",
    keywords: [
      "gulf golf installer",
      "golf simulator installer GCC",
      "golf partner",
      "golf simulator installation Saudi Arabia",
      "golf simulator installer Dubai",
    ],
    eyebrow: "GCC & Gulf installer",
    h1: "Golf Simulator Installer for the GCC and Gulf",
    intro:
      "Marafei Golf is the golf partner that designs, sells, and installs indoor golf simulators across the Gulf. If you are searching for a gulf golf installer, a TrackMan bay for a villa, or a commercial simulator lounge, we take the project from survey to calibrated handover.",
    sections: [
      {
        heading: "A golf partner, not a box-shipper",
        body: "Most simulator buyers in the Gulf do not need another online catalogue. They need an installer who will stand in the room, measure throw distance, protect the walls, specify the right launch monitor, and still answer the phone after opening night. That is the work Marafei Golf does. We are based in Saudi Arabia and deliver throughout the GCC — Riyadh, Jeddah, Dammam, Dubai, Abu Dhabi, Doha, and beyond.",
      },
      {
        heading: "What a Marafei Golf installation includes",
        body: "Every project starts with a site survey: ceiling height, hitting depth, lighting, HVAC, and how the room will actually be used. We then design the enclosure, screen, turf, projector placement, and technology stack. As an authorized TrackMan dealer we supply and calibrate TrackMan systems. As a BenQ partner we specify golf-mode 4K short-throw projectors that fill the screen without shadows. We finish with commissioning, staff or owner training, and lifecycle support.",
      },
      {
        heading: "Who we install for",
        body: "Private residences and compounds, golf academies and federations, hotels and resorts, entertainment venues, and corporate clubs. Recent work includes the Riyadh Golf Club VIP Academy for Golf Saudi and a commercial multi-sport lounge at Massarah Resort. The same installer process applies whether the brief is a single home bay or a multi-bay academy.",
      },
      {
        heading: "Why Gulf clients choose a regional installer",
        body: "Importing a kit and hoping the local contractor can aim a projector is how rooms fail. Radar placement, screen gain, lag, and enclosure safety are specialist work. A Gulf-based golf simulator installer also means warranty support, spare parts, and firmware in the same time zone. Marafei Golf remains the named partner after handover.",
      },
    ],
    faqs: [
      {
        question: "What does a gulf golf installer actually do?",
        answer:
          "A gulf golf installer designs the room, supplies the launch monitor and projector, builds the enclosure, calibrates the system, and supports it after opening. Marafei Golf does this across Saudi Arabia and the GCC as an authorized TrackMan dealer and BenQ partner.",
      },
      {
        question: "Can you be our golf partner for multiple venues?",
        answer:
          "Yes. Clubs, developers, and hospitality groups use Marafei Golf as a repeating golf partner for standardised bays, academy rooms, and commercial lounges, with shared specifications and regional maintenance.",
      },
      {
        question: "Do you only work in Saudi Arabia?",
        answer:
          "Saudi Arabia is our home market, including Riyadh and Jeddah, but we install golf simulators across the Gulf — UAE, Qatar, Kuwait, Bahrain, and Oman — whenever the project needs a turnkey installer.",
      },
    ],
  },
  saudi: {
    slug: "golf-simulators-saudi-arabia",
    metaTitle: "Golf Simulators Saudi Arabia | Installer in Riyadh & Jeddah",
    metaDescription:
      "Marafei Golf installs premium golf simulators in Saudi Arabia. Authorized TrackMan dealer for Riyadh, Jeddah, Dammam, and nationwide indoor golf rooms.",
    keywords: [
      "golf simulators Saudi Arabia",
      "golf simulator Riyadh",
      "indoor golf Jeddah",
      "TrackMan Saudi Arabia",
      "golf simulator installer Saudi",
    ],
    eyebrow: "Saudi Arabia",
    h1: "Golf Simulators in Saudi Arabia",
    intro:
      "Marafei Golf is a Saudi-based golf simulator installer. We design and deliver indoor golf rooms in Riyadh, Jeddah, Dammam, NEOM, and across the Kingdom — from private villas to federation academies.",
    sections: [
      {
        heading: "Built for Saudi spaces and climate",
        body: "Indoor golf is not a seasonal hobby in the Kingdom. It is how serious players train through summer heat and how families use a villa entertainment room year-round. We design for local ceiling heights, majlis-adjacent rooms, compound villas, and commercial fit-outs that must survive heavy use. Cooling, dust, and acoustic privacy are part of the specification, not an afterthought.",
      },
      {
        heading: "TrackMan rooms for Riyadh and beyond",
        body: "As an authorized TrackMan dealer, Marafei Golf supplies and calibrates TrackMan IO and TrackMan 4 for Saudi clients who want tour-accurate data. Our VIP Golf Academy project at Riyadh Golf Club for Golf Saudi is the reference for academy-grade work. Residential clients in Riyadh and Jeddah use the same installation discipline at a smaller scale.",
      },
      {
        heading: "Commercial and hospitality simulators",
        body: "Hotels, resorts, and entertainment venues in Saudi Arabia need rooms that look finished and stay online. Massarah Resort’s multi-sport lounge is one example: a TrackMan 4 bay inside a guest-ready commercial interior. We handle design, technology, and commissioning so operators are not left coordinating five subcontractors.",
      },
      {
        heading: "Nationwide coverage",
        body: "From the capital to the Eastern Province and the west coast, Marafei Golf plans logistics, installation crews, and aftercare. If you are comparing golf simulator companies in Saudi Arabia, ask who will survey the room, who holds the TrackMan authorisation, and who returns for calibration.",
      },
    ],
    faqs: [
      {
        question: "Where in Saudi Arabia do you install golf simulators?",
        answer:
          "We install in Riyadh, Jeddah, Dammam, Khobar, NEOM, and other cities across Saudi Arabia. Riyadh is our primary base, with project teams mobilised nationwide.",
      },
      {
        question: "Do you work with Golf Saudi and clubs?",
        answer:
          "Yes. We delivered the Riyadh Golf Club VIP Academy for Golf Saudi, integrating TrackMan, SportsBox AI, and Smart2Move in a high-performance training environment.",
      },
      {
        question: "How do I start a golf simulator project in Riyadh?",
        answer:
          "Share your room dimensions and how you want to use the space. Marafei Golf will propose a TrackMan or equivalent specification, a BenQ projection layout, and a site survey in Riyadh or your city.",
      },
    ],
  },
  indoor: {
    slug: "indoor-golf-simulator",
    metaTitle: "Indoor Golf Simulator Rooms | Design & Installation — Marafei",
    metaDescription:
      "Commission an indoor golf simulator from Marafei Golf. Custom rooms with TrackMan launch monitors and BenQ 4K golf projectors for homes and academies in the GCC.",
    keywords: [
      "indoor golf simulator",
      "indoor golf simulator room",
      "home golf simulator GCC",
      "golf simulator enclosure",
      "indoor golf training",
    ],
    eyebrow: "Indoor golf",
    h1: "Indoor Golf Simulator Rooms, Designed and Installed",
    intro:
      "An indoor golf simulator only feels real when the room, the radar, and the picture are designed together. Marafei Golf builds complete indoor golf environments — enclosure, turf, TrackMan or launch monitor, BenQ projection, and calibration — for homes and professional facilities.",
    sections: [
      {
        heading: "The room is the product",
        body: "Screen wrinkles, shadows on the hitting mat, and laggy graphics are design failures, not software quirks. We model hitting depth, camera or radar sightlines, projector offset, and pad thickness before we order equipment. Short-throw BenQ golf projectors such as the AK700ST let us keep the unit behind the player and still fill a wide screen in a villa room.",
      },
      {
        heading: "Technology that belongs in the bay",
        body: "TrackMan remains the benchmark for players and coaches who need trustworthy numbers. We also install SportsBox AI and Smart2Move when the brief is an academy, and Garmin Approach systems when a residence wants a simpler, still-accurate bay. The indoor golf simulator is specified around the golfer, not a single SKU.",
      },
      {
        heading: "From empty room to first shot",
        body: "Typical scope: measured survey, 3D layout, enclosure and impact screening, flooring and turf, projector mount, launch monitor, network, lighting scenes, and on-site calibration. Owners receive a walkthrough of software, safety, and care. Academies receive coach-facing setup and backup processes.",
      },
      {
        heading: "Residential and professional indoor golf",
        body: "A family entertainment room and a high-performance academy share the same physics and none of the same finishes. We have delivered both: private residence simulators in Saudi Arabia and the RGC VIP Academy. Indoor golf is our core craft.",
      },
    ],
    faqs: [
      {
        question: "What is included in an indoor golf simulator from Marafei Golf?",
        answer:
          "Design, enclosure, screen, turf, launch monitor, BenQ or specified projector, installation, and calibration. We can also include swing analysis, force plates, and lighting as part of a full indoor golf room.",
      },
      {
        question: "Can you build an indoor golf simulator in a small room?",
        answer:
          "Often yes. Short-throw golf projectors and careful radar placement allow many villa rooms to work. We will tell you honestly if ceiling height or depth is below a safe minimum.",
      },
      {
        question: "Is an indoor golf simulator only for entertainment?",
        answer:
          "No. With TrackMan and coaching software it is a training tool used by academies and serious amateurs. The same hardware can still play full simulated rounds for family use.",
      },
    ],
  },
  technology: {
    slug: "golf-technology-middle-east",
    metaTitle: "Golf Technology Middle East | TrackMan Integrator — Marafei",
    metaDescription:
      "Enterprise golf technology for the Middle East and GCC. Marafei Golf integrates TrackMan, BenQ, SportsBox AI, and Smart2Move for academies and commercial venues.",
    keywords: [
      "golf technology Middle East",
      "golf technology GCC",
      "TrackMan integrator Middle East",
      "golf academy technology",
      "enterprise golf simulators",
    ],
    eyebrow: "Middle East & GCC",
    h1: "Golf Technology for the Middle East",
    intro:
      "Marafei Golf is a golf technology integrator for the Middle East. We combine launch monitors, projection, biomechanics, and room design so academies, clubs, and commercial venues get a system that coaches will actually use.",
    sections: [
      {
        heading: "Integration over isolated gadgets",
        body: "Buying a launch monitor, a projector, and a swing-AI subscription from three vendors leaves the academy to invent the workflow. We specify TrackMan as the ball-flight source of truth, SportsBox AI for 3D motion, Smart2Move for ground force, and BenQ golf projectors for the picture — then we make them coexist in one bay with shared power, network, and coaching process.",
      },
      {
        heading: "Built for GCC operators",
        body: "Hospitality groups, sports developers, and federations in the GCC need vendors who understand procurement, handover documentation, and multi-site rollouts. Marafei Golf works as the named golf technology partner, not a silent subcontractor. Our Golf Saudi academy work is the proof point for institutional clients.",
      },
      {
        heading: "Commercial entertainment systems",
        body: "When the brief is revenue per square metre rather than tour data, we still refuse disposable hardware. Commercial lounges get robust TrackMan or equivalent setups, guest-proof enclosures, and projection that stays bright in ambient light. Massarah Resort shows how golf technology sits inside a hospitality interior.",
      },
      {
        heading: "Lifecycle, not a one-off install",
        body: "Firmware, alignment drift, spare lamps or laser projectors, and coach onboarding are why technology projects fail six months in. We offer maintenance and recalibration across the region so the investment keeps matching the brochure.",
      },
    ],
    faqs: [
      {
        question: "What golf technology do you integrate in the Middle East?",
        answer:
          "TrackMan launch monitors, BenQ golf simulation projectors, SportsBox AI 3D swing analysis, Smart2Move force plates, and supporting AV, network, and enclosure systems for academies and venues.",
      },
      {
        question: "Do you support multi-bay academies?",
        answer:
          "Yes. We design multi-bay layouts with consistent calibration, shared coaching software, and commercial-grade projection so every bay matches academy standard.",
      },
      {
        question: "Can you standardise golf technology across several GCC sites?",
        answer:
          "Yes. Developers and operators use Marafei Golf to repeat a proven bay specification across cities, with local installation and a single technology partner.",
      },
    ],
  },
  trackman: {
    slug: "authorized-trackman-dealer",
    metaTitle: "Authorized TrackMan Dealer in the GCC | Marafei Golf",
    metaDescription:
      "Marafei is an authorized TrackMan dealer. Verify us on Trackman’s official page, then commission a calibrated TrackMan golf simulator in Saudi Arabia or the GCC.",
    keywords: [
      "authorized TrackMan dealer",
      "TrackMan dealer Saudi Arabia",
      "TrackMan golf simulator GCC",
      "TrackMan installer Middle East",
      "TrackMan IO TrackMan 4",
    ],
    eyebrow: "Authorized dealer",
    h1: "Authorized TrackMan Dealer for the GCC",
    intro:
      "Marafei is an authorized TrackMan dealer. Customers can confirm that status on Trackman’s official verification page. We sell, install, and calibrate TrackMan golf simulators for homes, academies, and commercial venues across Saudi Arabia and the Gulf.",
    sections: [
      {
        heading: "Verify before you buy",
        body: "Unauthorized resellers are a real problem in golf technology. TrackMan launched an Authorized Dealer Verification Program so customers can check who is genuine. Marafei’s listing is tied to marafei.com. The white and orange badges on this site link directly to that official page. If a seller cannot show the same verification, treat the offer with caution.",
      },
      {
        heading: "What we install",
        body: "TrackMan 4 and TrackMan IO are the systems we most often specify. TrackMan 4 remains the dual-radar reference for coaches and elite players. TrackMan IO is designed for dedicated indoor bays. We pair either with correctly placed screens, turf, and BenQ golf projectors so the numbers and the picture agree.",
      },
      {
        heading: "Calibration is the product",
        body: "An uncalibrated TrackMan in a badly aimed room is not a TrackMan experience. Our installers set hitting position, radar height, screen distance, and software so club and ball data are trustworthy. That is the difference between an authorized dealer-installer and a grey-market carton.",
      },
      {
        heading: "Projects already on TrackMan",
        body: "The Riyadh Golf Club VIP Academy uses TrackMan IO and TrackMan 4 together with SportsBox AI and Smart2Move. Massarah Resort’s commercial lounge is built around TrackMan 4. These are live Saudi installations, not catalogue renders.",
      },
    ],
    faqs: [
      {
        question: "How do I verify Marafei as a TrackMan dealer?",
        answer:
          "Open Trackman’s official authorized dealer page with domain=marafei.com, or click the TrackMan authorized dealer badge on this website. The badge is issued as part of Trackman’s verification program.",
      },
      {
        question: "Do you sell TrackMan without installation?",
        answer:
          "We can supply hardware, but we recommend turnkey installation. TrackMan performance depends on room geometry and calibration, which is the work we are authorised to do in the GCC.",
      },
      {
        question: "Is Marafei listed under marafei.com or golf.marafei.net?",
        answer:
          "Trackman’s verification is registered to marafei.com, our parent brand domain. This golf site, golf.marafei.net, is the dedicated simulator practice and uses the official badge that points at that verification page.",
      },
    ],
  },
  benq: {
    slug: "benq-golf-simulator-partner",
    metaTitle: "BenQ Golf Simulator Partner | 4K Projection — Marafei Golf",
    metaDescription:
      "Marafei Golf is a BenQ golf simulator partner in the GCC. We specify and install BenQ 4K short-throw golf projectors such as the AK700ST in TrackMan rooms.",
    keywords: [
      "BenQ golf simulator partner",
      "BenQ golf projector GCC",
      "BenQ AK700ST installer",
      "golf simulator projector Saudi Arabia",
      "4K golf simulation projector",
    ],
    eyebrow: "Projection partner",
    h1: "BenQ Golf Simulator Partner in the GCC",
    intro:
      "The picture is half the simulator. Marafei Golf specifies and installs BenQ golf-simulation projectors — including 4K short-throw models such as the AK700ST — so TrackMan rooms in the Gulf look as accurate as they measure.",
    sections: [
      {
        heading: "Why BenQ in a golf bay",
        body: "BenQ’s golf projectors are built for screen fill, turf colour, low lag, and short throw. That means the unit can sit behind the player, out of the swing and out of the radar, while still covering a wide impact screen. Golf mode and auto screen fit reduce the usual fight with 16:9, 16:10, and square hitting screens.",
      },
      {
        heading: "Paired with TrackMan, not instead of it",
        body: "We are an authorized TrackMan dealer and a BenQ partner. Launch monitor data without a stable, colour-correct image is an incomplete room. We calculate throw ratio, offset, ambient light, and screen gain together so the BenQ image and the TrackMan numbers belong to the same shot.",
      },
      {
        heading: "Residential and commercial projection",
        body: "Home bays need quiet, compact laser projectors that can also run films. Commercial lounges need brightness that survives hospitality lighting. We specify accordingly and mount, warp, and focus on site — including curved screens where the architecture calls for them.",
      },
      {
        heading: "Visible partnership",
        body: "The BenQ mark appears in our navigation and partners section because clients should see who stands behind the projection. It is also a practical SEO and trust signal: golfers searching for a BenQ golf simulator installer in the GCC should find Marafei Golf.",
      },
    ],
    faqs: [
      {
        question: "Which BenQ golf projectors do you install?",
        answer:
          "We commonly specify BenQ 4K short-throw golf models such as the AK700ST, and other golf-series units when room geometry or brightness requires them. Final choice follows the site survey.",
      },
      {
        question: "Can a BenQ projector work in a bright room?",
        answer:
          "High-lumen laser golf projectors handle more ambient light than lamp home-cinema units, but we still control lighting in the bay. We will advise if the room needs dimming or a higher-brightness model.",
      },
      {
        question: "Do you install BenQ projectors without a full simulator?",
        answer:
          "Usually we install them as part of a complete golf simulator. If you already have a bay that needs a better picture, we can survey and replace or recalibrate the projector.",
      },
    ],
  },
};
