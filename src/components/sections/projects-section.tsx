import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";
import groq from "groq";

export function ProjectsSection() {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["featured-projects"],
    queryFn: async () => {
      const result = await sanityClient.fetch(
        groq`*[_type == "project" && featured == true] | order(sortOrder asc) [0...3] {
          _id, title, "slug": { "current": slug.current }, description, technologies, githubUrl, liveUrl
        }`,
      );

      // Verification Console Log as requested
      result.forEach((project: any) => {
        console.log({
          title: project.title,
          github: project.githubUrl,
          live: project.liveUrl,
        });
      });

      return result;
    },
  });

  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="container-prose py-20">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured projects"
            title="Things I've built recently."
            description="A selection of full-stack applications and systems I've designed and developed."
          />
          <Link
            to="/projects"
            className="hidden shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-signal sm:inline-flex"
          >
            All projects →
          </Link>
        </div>

        {isLoading ? (
          <div className="mt-12 text-muted-foreground">Loading featured projects...</div>
        ) : !projects.length ? (
          <div className="mt-12 text-muted-foreground">No featured projects found.</div>
        ) : (
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((p: any, i: number) => (
              <Reveal as="li" key={p._id} delay={i * 100}>
                <article className="group relative flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-signal/60 hover:shadow-[0_0_20px_rgba(var(--signal),0.1)] focus-within:ring-2 focus-within:ring-signal focus-within:ring-offset-2 focus-within:ring-offset-background overflow-hidden">
                  <div className="flex items-baseline justify-between z-10 relative">
                    <p className="font-mono text-xs text-muted-foreground">Full Stack Developer</p>
                    <div className="flex gap-2">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-20 text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm"
                        >
                          <Github className="size-4 transition-colors group-hover:text-signal" />
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-20 text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm"
                        >
                          <ArrowUpRight className="size-4 transition-colors group-hover:text-signal" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-medium tracking-tight group-hover:text-signal transition-colors relative z-20">
                    <Link
                      to={`/projects/$slug`}
                      params={{ slug: p.slug.current }}
                      className="focus:outline-none before:absolute before:inset-0 before:z-10"
                    >
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-1.5 z-10 relative">
                    {(p.technologies || []).slice(0, 4).map((s: string) => (
                      <li
                        key={s}
                        className="rounded border border-border/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ul>
        )}

        <Button
          asChild
          variant="ghost"
          className="mt-8 px-0 text-signal hover:text-signal hover:bg-transparent sm:hidden"
        >
          <Link to="/projects">
            All projects <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
