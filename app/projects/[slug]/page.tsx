import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";

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

  return {
    title: `${project.name} | Golf Simulator Project — Marafei`,
    description: project.description,
    alternates: {
      canonical: `https://marafei.com/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} — Marafei Golf Simulator Project`,
      description: project.description,
      url: `https://marafei.com/projects/${project.slug}`,
      siteName: "Marafei",
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

  return (
    <main className="relative z-10 pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
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
              key={i}
              className={`relative overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes={i === 0 ? "100vw" : "50vw"}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="text-base leading-relaxed text-body">
            {project.description}
          </p>
          <p className="mt-6 text-sm text-muted">Client: {project.client}</p>
        </div>
      </div>
    </main>
  );
}
