import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Cloud, Server, Braces } from "lucide-react";

const learnings = [
  {
    title: "Cloud Computing",
    description:
      "Learning AWS fundamentals, deployment workflows, cloud services, and infrastructure concepts.",
    icon: Cloud,
  },
  {
    title: "System Design",
    description:
      "Studying backend architecture, databases, caching strategies, scalability, and distributed systems.",
    icon: Server,
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Practicing problem-solving techniques and preparing for software engineering interviews.",
    icon: Braces,
  },
];

export function LearningSection() {
  return (
    <section>
      <div className="container-prose py-20">
        <SectionHeading
          eyebrow="Continuous Learning"
          title="What I'm learning."
          description="A collection of things I'm currently exploring as I grow as a software engineer."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learnings.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 sm:p-8 transition-colors hover:border-signal/60">
                <div className="flex size-10 items-center justify-center rounded-md bg-secondary/50 text-signal mb-4">
                  <item.icon className="size-5" />
                </div>
                <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
