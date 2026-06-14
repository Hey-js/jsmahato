import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { getCanonicalLink, getBreadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: `Experience | ${site.name}` },
      { name: "description", content: "Professional experience and technical background." },
      { property: "og:title", content: `Experience | ${site.name}` },
      { property: "og:description", content: "Professional experience and technical background." },
    ],
    links: [getCanonicalLink("/experience")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Experience", url: `${site.url}/experience` },
          ]),
        ),
      },
    ],
  }),
  component: ExperiencePage,
});

const timeline = [
  {
    year: "2026",
    role: "Lead Developer",
    company: "XR System - Personal Project",
    description:
      "Designed and developed XR System, a full-stack platform that combines portfolio management, blogging, and media showcases.",
    achievements: [
      "Full Stack Development",
      "System Architecture",
      "React & TypeScript Development",
      "Node.js Backend Development",
      "MongoDB Database Design",
      "Cloudinary Integration",
      "Sanity CMS Integration",
      "SEO Optimization",
    ],
  },
  {
    year: "2025",
    role: "Event Management System",
    company: "MERN Stack",
    description:
      "Led the development of a full-stack Event Management System built using the MERN stack. Technologies: React, Node.js, Express.js, MongoDB, JWT, Tailwind CSS.",
    achievements: [
      "Team Leader",
      "REST API Development",
      "Authentication & Authorization",
      "MongoDB Integration",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    year: "2025",
    role: "Full Stack Development Journey",
    company: "Continuous Learning",
    description:
      "Built multiple web applications and strengthened expertise in modern web technologies.",
    achievements: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication Systems",
    ],
  },
  {
    year: "2024",
    role: "Photography Portfolio Website",
    company: "Personal Project",
    description:
      "Designed and developed a modern photography portfolio platform focused on responsive design, media optimization, and user experience.",
    achievements: [
      "Responsive Gallery System",
      "Cloud Media Management",
      "Image Optimization",
      "Modern UI/UX Design",
    ],
  },
  {
    year: "2024",
    role: "Advanced Web Development",
    company: "Skill Development",
    description:
      "Built several personal and learning projects while developing a deeper understanding of frontend engineering.",
    achievements: ["React", "JavaScript", "HTML & CSS", "Tailwind CSS", "Git & GitHub"],
  },
];

function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Experience"
      title="My Journey"
      intro="A timeline of my projects and growth as a software engineer."
    >
      <div className="relative border-l border-border/60 pl-6 sm:pl-8">
        <div className="absolute inset-y-0 left-[-0.5px] w-px bg-gradient-to-b from-signal via-border to-transparent" />
        <ul className="space-y-16">
          {timeline.map((job, i) => (
            <Reveal as="li" key={`${job.year}-${i}`} delay={i * 100} className="relative">
              <div className="absolute -left-8 top-1.5 size-4 rounded-full border-4 border-background bg-signal sm:-left-10" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-xl font-medium tracking-tight">
                  {job.role} <span className="text-muted-foreground">· {job.company}</span>
                </h2>
                <span className="font-mono text-sm tracking-widest text-foreground">
                  {job.year}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{job.description}</p>
              {job.achievements && job.achievements.length > 0 && (
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  {job.achievements.map((a: string) => (
                    <li key={a} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-signal/60" aria-hidden />
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
