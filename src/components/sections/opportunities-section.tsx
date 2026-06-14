import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Briefcase, GraduationCap, Code, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const opportunities = [
  {
    title: "Full-Time Roles",
    description:
      "Looking for Software Engineer, Full Stack Developer, or Backend Developer opportunities.",
    icon: Briefcase,
  },
  {
    title: "Internships",
    description:
      "Open to internships where I can learn from experienced engineers and contribute to production systems.",
    icon: GraduationCap,
  },
  {
    title: "Freelance Projects",
    description: "Available for selected web development projects and technical collaborations.",
    icon: Code,
  },
];

export function OpportunitiesSection() {
  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="container-prose py-20">
        <SectionHeading
          eyebrow="Open to opportunities"
          title="How we can collaborate."
          description="I'm currently looking for software engineering roles, internships, and opportunities to work on real-world products. I enjoy building full-stack applications, backend systems, and solving practical problems with code."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opp, i) => (
            <Reveal as="li" key={opp.title} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 sm:p-8 transition-colors hover:border-signal/60">
                <div className="flex size-10 items-center justify-center rounded-md bg-secondary/50 text-signal mb-4">
                  <opp.icon className="size-5" />
                </div>
                <h3 className="text-xl font-medium tracking-tight">{opp.title}</h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                  {opp.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Button
          asChild
          variant="ghost"
          className="mt-8 px-0 text-signal hover:text-signal hover:bg-transparent"
        >
          <Link to="/services">
            View Expertise <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
