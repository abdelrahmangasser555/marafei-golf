import {
  AREA_SERVED,
  BRAND_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  NAP,
  PARENT_SITE_URL,
  SAME_AS,
  SITE_NAME,
  SITE_URL,
} from "@/config/seo";
import { projects } from "@/data/projects";

const logoUrl = `${SITE_URL}/partners/golf logo_white.png`;
const imageUrl = `${SITE_URL}${DEFAULT_OG_IMAGE}`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: BRAND_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    image: imageUrl,
    email: NAP.email,
    telephone: NAP.phone,
    description: DEFAULT_DESCRIPTION,
    parentOrganization: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: PARENT_SITE_URL,
    },
    sameAs: [...SAME_AS],
    areaServed: AREA_SERVED.map((name) => ({
      "@type": name.length <= 3 || name === "GCC" || name === "Gulf" ? "Place" : "Country",
      name,
    })),
    knowsAbout: [
      "Golf simulators",
      "Indoor golf simulator installation",
      "TrackMan launch monitors",
      "BenQ golf simulation projectors",
      "Golf technology integration",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: imageUrl,
    email: NAP.email,
    telephone: NAP.phone,
    priceRange: "$$$$",
    description: DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.7136,
      longitude: 46.6753,
    },
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Bahrain" },
      { "@type": "Country", name: "Oman" },
    ],
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Golf simulator installation services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Turnkey golf simulator installation",
            areaServed: "GCC",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TrackMan golf simulator integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Indoor golf room design and fit-out",
          },
        },
      ],
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      url: PARENT_SITE_URL,
      name: BRAND_NAME,
    },
  };
}

export function rootGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), localBusinessSchema(), websiteSchema()],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: AREA_SERVED.map((name) => ({ "@type": "Place", name })),
    brand: { "@type": "Brand", name: SITE_NAME },
    serviceType: "Golf simulator sales and installation",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function projectSchema(project: (typeof projects)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: `${SITE_URL}/projects/${project.slug}`,
    image: project.images.map((img) => `${SITE_URL}${img.src}`),
    creator: { "@id": `${SITE_URL}/#organization` },
    about: project.technologies,
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
  };
}
