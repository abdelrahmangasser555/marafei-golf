import type { Metadata } from "next";
import ServicePage, { landingMetadata } from "@/components/layout/ServicePage";
import { landingPages } from "@/data/landing-pages";

const page = landingPages.technology;

export const metadata: Metadata = landingMetadata(page);

export default function GolfTechnologyMiddleEast() {
  return <ServicePage page={page} />;
}
