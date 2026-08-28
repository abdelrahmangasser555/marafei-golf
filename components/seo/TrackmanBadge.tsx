import { TRACKMAN_VERIFY_URL } from "@/config/seo";

type BadgeVariant = "white" | "orange";

const BADGES: Record<
  BadgeVariant,
  { svg: string; jpg: string }
> = {
  white: {
    svg: "https://a.storyblok.com/f/117513/807x375/7c00601935/trackman-authorized-dealer-white.svg",
    jpg: "https://a.storyblok.com/f/117513/807x375/c87743d432/trackman-authorized-dealer-white.jpg",
  },
  orange: {
    svg: "https://a.storyblok.com/f/117513/807x375/fbbedb4ec7/trackman-authorized-dealer.svg",
    jpg: "https://a.storyblok.com/f/117513/807x375/91fdb87bcd/trackman-authorized-dealer-orange.jpg",
  },
};

interface TrackmanBadgeProps {
  variant?: BadgeVariant;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function TrackmanBadge({
  variant = "white",
  className = "",
  width = 200,
  height = 80,
  priority = false,
}: TrackmanBadgeProps) {
  const badge = BADGES[variant];

  return (
    <a
      href={TRACKMAN_VERIFY_URL}
      title="Trackman authorized dealer"
      target="_blank"
      rel="noopener"
      className={`inline-block shrink-0 ${className}`}
    >
      <picture>
        <source srcSet={badge.svg} type="image/svg+xml" />
        <img
          src={badge.jpg}
          alt="Trackman authorized dealer"
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-auto w-full object-contain"
        />
      </picture>
    </a>
  );
}
