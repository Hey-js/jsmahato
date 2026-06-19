import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { HeroSection } from "@/components/sections/hero-section";
import { getCanonicalLink, getBreadcrumbJsonLd } from "@/lib/seo";
import { lazy, Suspense } from "react";

// Lazy load below-the-fold sections to massively reduce the initial bundle size
const AboutSection = lazy(() => import("@/components/sections/about-section").then((m) => ({ default: m.AboutSection })));
const SkillsSection = lazy(() => import("@/components/sections/skills-section").then((m) => ({ default: m.SkillsSection })));
const ExperienceSection = lazy(() => import("@/components/sections/experience-section").then((m) => ({ default: m.ExperienceSection })));
const ProjectsSection = lazy(() => import("@/components/sections/projects-section").then((m) => ({ default: m.ProjectsSection })));
const PhotographySection = lazy(() => import("@/components/sections/photography-section").then((m) => ({ default: m.PhotographySection })));
const OpportunitiesSection = lazy(() => import("@/components/sections/opportunities-section").then((m) => ({ default: m.OpportunitiesSection })));
const LearningSection = lazy(() => import("@/components/sections/learning-section").then((m) => ({ default: m.LearningSection })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jitu Sagar Mahato (JS Mahato) | Software Engineer" },
      { name: "description", content: "Software engineer based in Ranchi, India. Building modern web applications, backend systems, and cloud-focused software solutions." },
      { property: "og:title", content: "Jitu Sagar Mahato (JS Mahato) | Software Engineer" },
      { property: "og:description", content: "Software engineer based in Ranchi, India. Building modern web applications, backend systems, and cloud-focused software solutions." },
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
      <Suspense fallback={<div className="h-20" />}>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <OpportunitiesSection />
        <LearningSection />
        <PhotographySection />
      </Suspense>
    </>
  );
}
