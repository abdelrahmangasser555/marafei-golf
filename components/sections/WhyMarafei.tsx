import { ShieldCheck, MapPinned, Wrench, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Authorized TrackMan dealer",
    body: "Verify Marafei on Trackman’s official dealer page. We supply and calibrate TrackMan IO and TrackMan 4 — not grey-market hardware.",
  },
  {
    icon: Award,
    title: "BenQ golf projection partner",
    body: "We specify 4K short-throw BenQ golf projectors so the picture matches the data, including models such as the AK700ST.",
  },
  {
    icon: MapPinned,
    title: "Gulf golf installer",
    body: "Riyadh-based crews installing across Saudi Arabia, the UAE, and the wider GCC. One partner for survey, design, install, and support.",
  },
  {
    icon: Wrench,
    title: "Proven projects",
    body: "Golf Saudi’s Riyadh Golf Club VIP Academy, Massarah Resort’s commercial lounge, and private residences — live rooms, not catalogue shots.",
  },
];

export default function WhyMarafei() {
  return (
    <section id="why" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Why clubs and homeowners choose Marafei Golf"
          subtitle="Search engines and clients look for the same proof: authorised brands, real installations, and a named installer in the Gulf."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-border/30 bg-surface/50 p-6"
            >
              <reason.icon className="text-primary" size={28} strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-heading font-semibold text-heading">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{reason.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
