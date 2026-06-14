import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Camera, Instagram } from "lucide-react";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const half = Math.ceil(footerLinks.length / 2);
  const colA = footerLinks.slice(0, half);
  const colB = footerLinks.slice(half);

  return (
    <footer className="mt-20 md:mt-24 border-t border-border/60">
      <div className="container-prose grid gap-12 py-12 md:grid-cols-12 md:gap-8 md:py-14 lg:gap-12">
        {/* BLOCK 1: Branding */}
        <div className="flex flex-col md:col-span-5">
          <Link to="/" className="font-mono text-sm font-semibold">
            <span
              className="mr-2 inline-block size-2 translate-y-[-1px] rounded-full bg-signal"
              aria-hidden
            />
            {site.shortName} | {site.role}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            From code to camera, I enjoy building things that solve problems and tell stories.
            Currently focused on software engineering, cloud computing, and modern web development.
          </p>
        </div>

        {/* BLOCK 2: Navigation Groups */}
        {/* Mobile (Two-Column Grid) */}
        <nav aria-label="Mobile Footer Navigation" className="md:hidden text-sm">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Navigation
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 text-left">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block py-1 text-foreground/90 whitespace-nowrap transition-colors hover:text-signal"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop (Two Columns) */}
        <nav
          aria-label="Footer Navigation"
          className="hidden md:grid grid-cols-2 gap-8 text-sm md:col-span-4"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {colA.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-foreground/90 transition-colors hover:text-signal"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              More
            </p>
            <ul className="mt-4 space-y-3">
              {colB.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-foreground/90 transition-colors hover:text-signal"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* BLOCK 3: Contact & Socials */}
        <div className="text-sm md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-signal"
              >
                <Mail className="size-4" /> <span className="break-all">{site.email}</span>
              </a>
            </li>
            <li className="text-muted-foreground">{site.location}</li>
          </ul>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Socials
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                title="GitHub"
                className="flex size-9 items-center justify-center rounded-md bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Github className="size-4" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex size-9 items-center justify-center rounded-md bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={site.social.photography}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Photography Portfolio"
                title="Photography"
                className="flex size-9 items-center justify-center rounded-md bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Camera className="size-4" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                title="Instagram"
                className="flex size-9 items-center justify-center rounded-md bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 4: Copyright */}
      <div className="border-t border-border/60 bg-secondary/10">
        <div className="container-prose flex flex-col items-center justify-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left md:py-8">
          <p className="max-w-[280px] text-sm leading-relaxed text-muted-foreground sm:max-w-sm">
            Built in Ranchi.
            <br className="sm:hidden" />
            Learning, building, and improving one project at a time.
          </p>
          <p className="mt-2 shrink-0 text-sm font-medium text-muted-foreground sm:mt-0">
            © {year} {site.shortName}
          </p>
        </div>
      </div>
    </footer>
  );
}
