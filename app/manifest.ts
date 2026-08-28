import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marafei Golf — Golf Simulator Installer in the GCC",
    short_name: "Marafei Golf",
    description:
      "Authorized TrackMan dealer and BenQ partner installing premium golf simulators across Saudi Arabia and the Gulf.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#bfa36b",
    icons: [
      {
        src: "/partners/golf logo_white.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
