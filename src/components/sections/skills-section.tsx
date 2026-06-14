import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const coreSkillCategories = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Database",
    skills: ["MongoDB", "FireBase", "PostgreSQL"],
  },
  {
    name: "Deployment & Tools",
    skills: ["Git", "GitHub", "Vercel", "Railway", "Cloudinary"],
  },
];

const learningSkills = ["AWS", "Cloud Computing", "System Design"];

export function SkillsSection() {
  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="container-prose py-20">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit."
          description="Technologies I've used to build my projects."
        />

        {/* CORE SKILLS GRID */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {coreSkillCategories.map((group, gi) => (
            <Reveal key={group.name} delay={gi * 100}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {group.name}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center whitespace-nowrap min-w-fit rounded-md border border-border/60 bg-card px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium transition-colors hover:border-signal/60"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* CURRENTLY LEARNING SECTION */}
        <Reveal delay={400} className="mt-16 sm:mt-20">
          <div className="rounded-xl border border-border/40 bg-card/50 px-5 py-8 sm:px-10 sm:py-10 text-center">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Currently Learning
            </h3>
            <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
              {learningSkills.map((skill) => (
                <li
                  key={skill}
                  className="inline-flex items-center whitespace-nowrap min-w-fit rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-medium text-foreground transition-colors hover:border-green-500/40 hover:bg-green-500/10"
                >
                  <span
                    className="mr-2.5 size-1.5 rounded-full bg-green-500 animate-pulse"
                    aria-hidden
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-12">
          <Button
            asChild
            variant="ghost"
            className="px-0 text-signal hover:text-signal hover:bg-transparent"
          >
            <Link to="/skills">
              View all skills <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
