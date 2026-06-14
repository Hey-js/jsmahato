import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { PhotographySection } from "@/components/sections/photography-section";
import { OpportunitiesSection } from "@/components/sections/opportunities-section";
import { LearningSection } from "@/components/sections/learning-section";
import { getCanonicalLink, getBreadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} | Software Engineer & Full Stack Developer` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} | Software Engineer & Full Stack Developer` },
      { property: "og:description", content: site.description },
      { property: "og:url", content: "/" },
    ],
    links: [getCanonicalLink("/")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(getBreadcrumbJsonLd([{ name: "Home", url: site.url }])),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <OpportunitiesSection />
      <LearningSection />
      <PhotographySection />
    </>
  );
}
