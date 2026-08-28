import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import Projects from "@/components/sections/Projects";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import WhyMarafei from "@/components/sections/WhyMarafei";
import JsonLd from "@/components/seo/JsonLd";
import { homeFaqs } from "@/data/faqs";
import { faqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <WhyMarafei />
      <Solutions />
      <Projects />
      <Partners />
      <FAQ items={homeFaqs} />
      <Contact />
    </main>
  );
}
