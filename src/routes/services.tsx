import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { getCanonicalLink, getBreadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Expertise | ${site.name}` },
      {
        name: "description",
        content:
          "Specialized engineering skills including frontend architecture, backend systems, and cloud deployment.",
      },
      { property: "og:title", content: `Expertise | ${site.name}` },
      {
        property: "og:description",
        content:
          "Specialized engineering skills including frontend architecture, backend systems, and cloud deployment.",
      },
    ],
    links: [getCanonicalLink("/services")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Expertise", url: `${site.url}/services` },
          ]),
        ),
      },
    ],
  }),
  component: ServicesPage,
});

const process = [
  {
    k: "01",
    t: "Discovery",
    d: "Understanding the problem, audience, and constraints to build the right software.",
  },
  {
    k: "02",
    t: "Scope & Architecture",
    d: "Defining the right tech stack and engineering approach for the problem.",
  },
  {
    k: "03",
    t: "Build",
    d: "Developing the application with a focus on performance, scalability, and code quality.",
  },
  { k: "04", t: "Ship & Iterate", d: "Production deploy, monitoring, and iterative improvements." },
];

const expertiseAreas = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces using React, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    description:
      "Designing robust server-side applications with Node.js, Express, and modern JavaScript environments.",
  },
  {
    title: "Database Design",
    description:
      "Architecting efficient schemas and managing data with MongoDB, PostgreSQL, and Firebase.",
  },
  {
    title: "API Development",
    description:
      "Creating scalable, secure RESTful APIs to power web applications and third-party integrations.",
  },
  {
    title: "System Architecture",
    description:
      "Planning complete technical solutions, from component structure to state management and data flow.",
  },
  {
    title: "Deployment & Hosting",
    description:
      "Configuring CI/CD pipelines and deploying applications to modern cloud platforms like Vercel and AWS.",
  },
];

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Expertise"
      title="Areas of Expertise."
      intro="A comprehensive breakdown of my technical capabilities and the specific engineering domains I focus on."
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {expertiseAreas.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 80}>
            <article className="group flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-signal/60 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-signal">Engineering</p>
              <h2 className="mt-2 text-xl font-medium tracking-tight">{s.title}</h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                {s.description}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>

      <section className="mt-20">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          My Engineering Process
        </h2>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal as="li" key={p.k} delay={i * 80}>
              <div className="h-full rounded-xl border border-border/60 p-6">
                <p className="font-mono text-xs text-signal">{p.k}</p>
                <h3 className="mt-3 text-lg font-medium tracking-tight">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <div className="mt-16 rounded-2xl border border-border/60 bg-card p-8 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Ready to start?
            </p>
            <p className="mt-1 text-xl font-medium tracking-tight">
              Let's discuss your software needs.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">
              Get in touch <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
