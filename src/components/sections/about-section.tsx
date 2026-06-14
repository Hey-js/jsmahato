import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, GraduationCap, Target, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="container-prose py-20">
      <SectionHeading
        eyebrow="About"
        title="Engineer first. Builder always."
        description="Hi, I'm JS Mahato."
      />

      <div className="mt-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg">
          <p className="text-justify hyphens-auto leading-relaxed md:leading-8 max-w-[65ch]">
            I'm a software engineer based in Ranchi who enjoys building things for the web. Most of
            what I've learned has come from creating real projects, solving problems, and
            continuously improving how I build software.
          </p>
          <p className="text-justify hyphens-auto leading-relaxed md:leading-8 max-w-[65ch]">
            Over the years, I've worked on full stack applications, backend services, portfolio
            platforms, and content-driven websites. I enjoy taking a problem-solving approach to
            engineering, focusing on how everything fits together behind the scenes.
          </p>
          <p className="text-justify hyphens-auto leading-relaxed md:leading-8 max-w-[65ch]">
            These days, my focus is on building reliable applications, strengthening my backend
            knowledge, working with APIs, and exploring cloud technologies and modern deployment
            workflows.
          </p>
          <div className="pt-4">
            <Button
              asChild
              variant="ghost"
              className="px-0 text-signal hover:text-signal hover:bg-transparent"
            >
              <Link to="/about">
                Read the full story <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-xl border border-border/60 bg-card/50 overflow-hidden divide-y divide-border/60 shadow-sm">
            <div className="p-5 flex items-start gap-4">
              <MapPin className="size-5 text-muted-foreground mt-0.5" />
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Location
                </span>
                <span className="block font-medium text-foreground">Ranchi, Jharkhand, India</span>
              </div>
            </div>

            <div className="p-5 flex items-start gap-4">
              <Target className="size-5 text-muted-foreground mt-0.5" />
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Current Focus
                </span>
                <span className="block font-medium text-foreground">
                  Cloud Computing & System Design
                </span>
              </div>
            </div>

            <div className="p-5 flex items-start gap-4">
              <Briefcase className="size-5 text-signal mt-0.5" />
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Availability
                </span>
                <span className="inline-flex items-center text-sm font-medium text-foreground">
                  <span
                    className="mr-2 size-1.5 rounded-full bg-signal animate-pulse"
                    aria-hidden
                  />
                  Available for new roles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
