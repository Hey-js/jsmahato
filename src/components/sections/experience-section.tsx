import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    year: "2026",
    role: "Bachelor of Science in Information Technology",
    company: "Gossner College • Ranchi University",
    description:
      "Graduated with a CGPA of 7.5. Focused on software engineering, database systems, web technologies, and full-stack application development while simultaneously building real-world projects and strengthening practical development skills.",
    achievements: [],
  },
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
      "Cloudinary & Sanity CMS Integration",
    ],
  },
  {
    year: "2025",
    role: "Event Management System",
    company: "MERN Stack Project",
    description:
      "Led the development of a full-stack Event Management System built using React, Node.js, Express.js, MongoDB, JWT, and Tailwind CSS.",
    achievements: ["Team Leader", "REST API Development", "Authentication & Authorization"],
  },
];

export function ExperienceSection() {
  return (
    <section className="container-prose py-20">
      <SectionHeading
        eyebrow="Experience & Education"
        title="My journey so far."
        description="A timeline of my education, projects, and growth as a software developer."
      />

      <ol className="relative mt-12">
        <div
          className="absolute left-2 top-2 bottom-2 w-px bg-border md:left-[7.5rem]"
          aria-hidden
        />
        {timeline.map((e, i) => (
          <Reveal
            as="li"
            key={`${e.year}-${i}`}
            delay={i * 80}
            className="relative pl-8 sm:pl-10 pb-12 md:pl-40"
          >
            <span
              className="absolute left-0 top-1.5 grid size-4 place-items-center rounded-full border border-signal bg-background md:left-[6.7rem]"
              aria-hidden
            >
              <span className="size-1.5 rounded-full bg-signal" />
            </span>

            {/* Desktop Year (Absolute, left rail) */}
            <p className="hidden md:block absolute left-0 top-1 w-24 text-right font-mono text-sm font-medium text-foreground">
              {e.year}
            </p>

            <div>
              {/* Mobile Year (In-flow) */}
              <p className="md:hidden font-mono text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">
                {e.year}
              </p>

              <h3 className="text-xl font-medium tracking-tight">
                {e.role}{" "}
                <span className="block sm:inline text-muted-foreground mt-1 sm:mt-0">
                  · {e.company}
                </span>
              </h3>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed md:text-lg">
                {e.description}
              </p>
              {e.achievements && e.achievements.length > 0 && (
                <ul className="mt-5 space-y-2.5 text-sm md:text-base text-muted-foreground">
                  {e.achievements.map((a) => (
                    <li key={a} className="flex gap-3 items-start">
                      <span
                        className="mt-2 size-1 shrink-0 rounded-full bg-signal/60"
                        aria-hidden
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>

      <Button
        asChild
        variant="ghost"
        className="mt-4 px-0 text-signal hover:text-signal hover:bg-transparent"
      >
        <Link to="/experience">
          View full timeline <ArrowRight className="ml-2 size-4" />
        </Link>
      </Button>
    </section>
  );
}
