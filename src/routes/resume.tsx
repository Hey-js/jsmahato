import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, MapPin, Printer, Github, Linkedin } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { useActiveResume } from "@/lib/public-data";
import { site } from "@/lib/site";
import { getCanonicalLink, getBreadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: `Resume | ${site.name}` },
      { name: "description", content: `Curriculum Vitae for ${site.name}.` },
    ],
    links: [getCanonicalLink("/resume")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Resume", url: `${site.url}/resume` },
          ]),
        ),
      },
    ],
  }),
  component: ResumePage,
});

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Authentication"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL"] },
  {
    category: "Cloud & Infrastructure",
    items: ["Deployment", "Cloud Computing", "Monitoring", "Linux Fundamentals"],
  },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
  {
    category: "Currently Exploring",
    items: ["AWS", "Docker", "System Design", "DevOps Fundamentals"],
  },
];

const projects = [
  {
    role: "Founder & Lead Developer",
    company: "XR System",
    period: "Dec 2025 – Present",
    highlights: [
      "Managed production systems",
      "Incident and outage resolution",
      "Cloud deployment and monitoring",
      "Disaster recovery procedures",
      "Technical support and customer service",
      "Team leadership and mentoring",
    ],
  },
  {
    role: "Team Lead",
    company: "Event Management System",
    period: "Sep 2025 – Jan 2026",
    highlights: [
      "MERN application development",
      "JWT authentication",
      "REST APIs",
      "Documentation",
      "Team leadership",
    ],
  },
  {
    role: "Developer",
    company: "Photography Portfolio Website",
    period: "Dec 2025 – Jan 2026",
    highlights: [
      "Cloud deployment on Vercel",
      "Performance optimization",
      "Responsive web development",
    ],
  },
];

function ResumePage() {
  const { data: resume } = useActiveResume();

  return (
    <PageShell eyebrow="Resume" title="Jitu Sagar Mahato" intro="Software Engineer">
      <div className="-mt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
        <Button asChild variant="outline" className="w-full sm:w-auto hover:text-foreground">
          <a href={`mailto:${site.email}`}>
            <Mail className="mr-2 size-4" /> Email
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto hover:text-foreground">
          <a href={site.social.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="mr-2 size-4" /> LinkedIn
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto hover:text-foreground">
          <a href={site.social.github} target="_blank" rel="noreferrer">
            <Github className="mr-2 size-4" /> GitHub
          </a>
        </Button>
        {resume?.file_url ? (
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto group hover:text-signal hover:border-signal/30 transition-colors"
          >
            <a
              href={resume.file_url}
              download="JS-Mahato-Resume.pdf"
              aria-label="Download Resume PDF"
            >
              <Download className="mr-2 size-4 transition-transform group-hover:-translate-y-0.5" />{" "}
              Download PDF
            </a>
          </Button>
        ) : (
          <Button variant="outline" disabled className="w-full sm:w-auto opacity-50">
            <Download className="mr-2 size-4" /> Download PDF
          </Button>
        )}
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-12 items-start">
        {/* LEFT COLUMN: Contact, Additional Info */}
        <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-32">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground border-b border-border/60 pb-2">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-muted-foreground" /> Ranchi, Jharkhand, India
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-muted-foreground" /> {site.email}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground border-b border-border/60 pb-2">
              Additional Info
            </h2>
            <div className="mt-4 space-y-6 text-sm">
              <div>
                <p className="font-medium text-foreground">Volunteer</p>
                <p className="mt-1 text-muted-foreground">Nature Foundation, Ranchi</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Interests</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {[
                    "Cloud Computing",
                    "AI-assisted Development",
                    "System Design",
                    "Photography",
                  ].map((i) => (
                    <li
                      key={i}
                      className="rounded border border-border/60 bg-muted/30 px-2 py-1 font-mono text-[10px] uppercase text-muted-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </aside>

        {/* RIGHT COLUMN: Summary, Experience, Skills */}
        <section className="lg:col-span-8 space-y-12">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Professional Summary
            </h2>
            <div className="rounded-xl border border-border/60 bg-card p-5 lg:p-7 shadow-sm flex flex-col items-center">
              <p
                className="w-full max-w-[65ch] text-justify leading-8 tracking-normal text-zinc-300 mb-4"
                style={{ hyphens: "auto", overflowWrap: "break-word", wordBreak: "normal" }}
              >
                Software engineer with experience building full stack applications, backend
                services, and content-driven platforms. Comfortable working with modern web
                technologies, APIs, databases, authentication systems, and deployment workflows.
              </p>
              <p
                className="w-full max-w-[65ch] text-justify leading-8 tracking-normal text-zinc-300"
                style={{ hyphens: "auto", overflowWrap: "break-word", wordBreak: "normal" }}
              >
                Currently expanding my knowledge of backend architecture, cloud technologies, and
                software engineering practices while seeking opportunities to contribute and grow in
                a professional environment.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Experience & Projects
            </h2>
            <div className="space-y-8">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="relative pl-6 sm:pl-8 before:absolute before:inset-y-0 before:left-[3px] before:w-px before:bg-border/60"
                >
                  <div className="absolute left-0 top-2 size-2 rounded-full bg-signal ring-4 ring-background" />
                  <p className="font-mono text-xs text-muted-foreground mb-1">{p.period}</p>
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {p.company}{" "}
                    <span className="text-muted-foreground font-normal">— {p.role}</span>
                  </h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {p.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span
                          className="mt-1.5 size-1 shrink-0 rounded-full bg-border"
                          aria-hidden
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Technical Skills
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.category} className="rounded-xl border border-border/60 bg-card p-5">
                  <h3 className="font-medium text-foreground text-sm mb-3">{s.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="rounded bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </div>
    </PageShell>
  );
}
