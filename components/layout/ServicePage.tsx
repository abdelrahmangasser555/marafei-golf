import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Partners from "@/components/sections/Partners";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import type { LandingPageContent } from "@/data/landing-pages";
import { SITE_NAME, SITE_URL } from "@/config/seo";

export function landingMetadata(page: LandingPageContent): Metadata {
  const url = `${SITE_URL}/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
  };
}

export default function ServicePage({ page }: { page: LandingPageContent }) {
  const url = `${SITE_URL}/${page.slug}`;

  return (
    <main>
      <JsonLd
        data={serviceSchema({
          name: page.h1,
          description: page.metaDescription,
          url,
        })}
      />
      <JsonLd data={faqSchema(page.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: page.h1, url },
        ])}
      />

      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: page.eyebrow },
            ]}
          />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight text-heading md:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-body">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-bg hover:shadow-glow"
            >
              Request a survey
            </Link>
            <Link
              href="/#projects"
              className="inline-flex rounded-full border border-primary/40 px-6 py-3 text-sm uppercase tracking-wide text-primary hover:bg-primary/10"
            >
              View projects
            </Link>
          </div>
        </div>
      </section>

      <article className="relative z-10 pb-8">
        <div className="mx-auto max-w-4xl space-y-12 px-6 lg:px-8">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-heading font-semibold text-heading md:text-3xl">
                {section.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-body">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>

      <Projects />
      <Partners />
      <FAQ items={page.faqs} title="Questions about this service" subtitle={page.intro} />
      <Contact />
    </main>
  );
}
