import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">
                {item.name}
              </Link>
            ) : (
              <span className="text-heading">{item.name}</span>
            )}
            {index < items.length - 1 && <span className="text-border">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
