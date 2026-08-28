import type { Metadata } from "next";
import ServicePage, { landingMetadata } from "@/components/layout/ServicePage";
import { landingPages } from "@/data/landing-pages";

const page = landingPages.benq;

export const metadata: Metadata = landingMetadata(page);

export default function BenqGolfPartnerPage() {
  return <ServicePage page={page} />;
}
