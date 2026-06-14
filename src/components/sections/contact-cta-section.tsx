import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function ContactCtaSection() {
  return (
    <section className="container-prose py-16 sm:py-32">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 sm:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-signal/10 blur-3xl"
        />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-lg">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Get in Touch
            </p>
            <h2 className="mt-3 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Let's build something meaningful.
            </h2>
            <p className="mt-4 text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
              Open to software engineering opportunities, collaborations, and freelance work. Feel
              free to reach out regarding jobs, internships, projects, or networking.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={`mailto:${site.email}`}>
                <Mail className="mr-2 size-4" /> Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href={site.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 size-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 size-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/resume">
                <FileText className="mr-2 size-4" /> Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
