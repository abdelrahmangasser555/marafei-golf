import type { Metadata } from "next";
import ServicePage, { landingMetadata } from "@/components/layout/ServicePage";
import { landingPages } from "@/data/landing-pages";

const page = landingPages.trackman;

export const metadata: Metadata = landingMetadata(page);

export default function AuthorizedTrackmanDealerPage() {
  return <ServicePage page={page} />;
}
