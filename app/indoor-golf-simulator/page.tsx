import type { Metadata } from "next";
import ServicePage, { landingMetadata } from "@/components/layout/ServicePage";
import { landingPages } from "@/data/landing-pages";

const page = landingPages.indoor;

export const metadata: Metadata = landingMetadata(page);

export default function IndoorGolfSimulator() {
  return <ServicePage page={page} />;
}
