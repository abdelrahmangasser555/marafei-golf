import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { breadcrumbSchema, projectSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/config/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const url = `${SITE_URL}/projects/${project.slug}`;

  return {
    title: `${project.name} | Golf Simulator Project`,
    description: project.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.name} — Marafei Golf Simulator Project`,
      description: project.description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: project.images[0].src,
          alt: project.images[0].alt,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const url = `${SITE_URL}/projects/${project.slug}`;
  const related = projects.filter((p) => p.slug !== project.slug);

  return (
    <main className="relative z-10 pt-28 pb-24">
      <JsonLd data={projectSchema(project)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Projects", url: `${SITE_URL}/#projects` },
          { name: project.name, url },
        ])}
      />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/#projects" },
            { name: project.name },
          ]}
        />
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          {project.tag}
        </span>
        <h1 className="mt-2 text-3xl font-heading font-bold text-heading md:text-5xl">
          {project.name}
        </h1>
        <p className="mt-2 text-sm text-muted">{project.location}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {project.images.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes={i === 0 ? "100vw" : "50vw"}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="text-base leading-relaxed text-body">
            {project.longDescription}
          </p>
          <h2 className="mt-8 text-lg font-heading font-semibold text-heading">
            Technology in this installation
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-primary/30 px-3 py-1 text-xs text-primary"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">Client: {project.client}</p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-bg hover:shadow-glow"
          >
            Plan a similar installation
          </Link>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-heading font-semibold text-heading">
              More golf simulator projects
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/projects/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border/30"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={item.images[0].src}
                      alt={item.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-widest text-primary">
                      {item.tag}
                    </p>
                    <h3 className="mt-1 font-heading text-lg text-heading">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted">{item.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
