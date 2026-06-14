import { sanityClient } from "@/lib/sanity";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { FolderGit2 } from "lucide-react";
import { getCanonicalLink, getBreadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: `Skills | ${site.name}` },
      { name: "description", content: "Languages, frameworks, databases, and tools." },
      { property: "og:title", content: `Skills | ${site.name}` },
      {
        property: "og:description",
        content: "The full working toolkit: frontend, backend, and tooling.",
      },
      { property: "og:url", content: "/skills" },
    ],
    links: [getCanonicalLink("/skills")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Skills", url: `${site.url}/skills` },
          ]),
        ),
      },
    ],
  }),
  component: SkillsPage,
});

const engineeringSections = [
  {
    id: "Frontend",
    title: "Frontend",
    skillsList: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    description: "The primary stack I use to build user interfaces.",
    projects: ["Event Management System", "XR System", "Photography Portfolio Website"],
  },
  {
    id: "Backend",
    title: "Backend",
    skillsList: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    description: "Server-side logic, routing, and secure API endpoints.",
    projects: ["Event Management System", "XR System"],
  },
  {
    id: "Databases",
    title: "Databases",
    skillsList: ["MongoDB", "PostgreSQL"],
    description:
      "Systems I use to store data, manage relationships, and structure backend schemas.",
    projects: ["Event Management System", "XR System"],
  },
  {
    id: "Cloud & Infrastructure",
    title: "Cloud & Infrastructure",
    skillsList: ["Deployment", "Cloud Computing", "Monitoring", "Linux Fundamentals"],
    description: "Tools and practices for shipping code and maintaining applications.",
    projects: ["Photography Portfolio Website", "XR System"],
  },
  {
    id: "Tools",
    title: "Tools",
    skillsList: ["Git", "GitHub", "VS Code", "Postman"],
    description: "The daily software and utilities I use to write code and test APIs.",
    projects: ["Used across all projects"],
  },
  {
    id: "Currently Exploring",
    title: "Currently Exploring",
    skillsList: ["AWS", "Docker", "System Design", "DevOps Fundamentals"],
    description:
      "The next stage of my learning journey. Focusing on understanding scalable architecture and deployment practices.",
    projects: ["Ongoing theoretical and practical study"],
  },
];

function SkillsPage() {
  const {
    data: skills = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      try {
        const result = await sanityClient.fetch(`*[_type == "skill"] | order(order asc)`);
        return result;
      } catch (err) {
        console.error("SANITY ERROR", err);
        throw err;
      }
    },
  });

  return (
    <div className="container-prose py-10 sm:py-14">
      {/* Condensed Hero Section */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
          Engineering Toolkit
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          A list of the technologies I've used to build my projects. I prefer to focus on
          understanding core concepts rather than just chasing the newest frameworks.
        </p>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Loading skills...</p>
      ) : isError ? (
        <div className="py-20 text-center text-muted-foreground">
          Failed to load content. Check console for details.
        </div>
      ) : !skills?.length ? (
        <div className="py-20 text-center text-muted-foreground">No skills found.</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {engineeringSections.map((section, si) => {
            return (
              <Reveal key={section.id} delay={si * 50} className="h-full">
                <article className="flex h-full flex-col justify-between rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-border/80">
                  <div>
                    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground mb-4">
                      {section.title}
                    </h2>

                    {/* Dense Inline Technologies List */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {section.skillsList.map((s: string) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-sm bg-secondary/50 px-2 py-0.5 text-[13px] font-medium text-foreground"
                        >
                          {section.id === "Currently Exploring" && (
                            <span
                              className="mr-1.5 size-1.5 rounded-full bg-signal animate-pulse"
                              aria-hidden
                            />
                          )}
                          {s}
                        </span>
                      ))}
                    </div>

                    <p className="text-[14px] leading-relaxed text-muted-foreground mb-6">
                      {section.description}
                    </p>
                  </div>

                  {/* Projects Footer */}
                  <div className="mt-auto border-t border-border/40 pt-4">
                    <div className="flex items-start gap-2 text-xs text-muted-foreground">
                      <FolderGit2 className="mt-0.5 size-3.5 shrink-0 text-signal" />
                      <div className="leading-relaxed">
                        <span className="font-medium text-foreground/80">Related Work: </span>
                        {section.projects.join(", ")}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      )}
    </div>
  );
}
