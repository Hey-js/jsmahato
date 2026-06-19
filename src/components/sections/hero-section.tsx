import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, Briefcase, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import portraitFallback from "@/assets/portrait.jpg";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";

export function HeroSection() {
  const {
    data: settings,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      try {
        const result = await sanityClient.fetch(`*[_type == "siteSettings"][0]{
          heroTitle,
          heroSubtitle,
          description,
          availabilityText,
          profileImage,
          "resumeFileUrl": resumeFile.asset->url,
          linkedinUrl,
          githubUrl,
          email
        }`);
        console.log("Sanity Hero Query Result:", result);
        return result;
      } catch (err) {
        console.error("SANITY ERROR", err);
        throw err;
      }
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  if (isLoading) {
    return (
      <section className="relative overflow-hidden border-b border-border/60 flex items-center justify-center py-32">
        <p className="text-muted-foreground animate-pulse">Loading profile...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="relative overflow-hidden border-b border-border/60 flex items-center justify-center py-32">
        <p className="text-muted-foreground">Failed to load profile settings.</p>
      </section>
    );
  }

  // Safe Fallbacks
  const headline = settings?.heroTitle || "JS Mahato";
  const subheadline = settings?.heroSubtitle || "Software Engineer";
  const description =
    settings?.description ||
    "I enjoy building web applications, backend services, and content-driven platforms. Most of my learning has come from creating projects, solving problems, and continuously improving how I build software.\n\nI'm currently exploring backend systems, cloud technologies, and modern deployment workflows while looking for opportunities to grow as an engineer.";
  const availabilityText = settings?.availabilityText || "Open to Opportunities";

  const githubUrl = settings?.githubUrl || site.social.github;
  const linkedinUrl = settings?.linkedinUrl || site.social.linkedin;
  const emailContact = settings?.email ? `mailto:${settings.email}` : "/contact";

  // Resolve image
  const profileImageUrl = settings?.profileImage
    ? urlFor(settings.profileImage).width(600).height(700).auto("format").url()
    : portraitFallback;

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-[0.04]" />
      <div className="container-prose relative grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="flex items-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground animate-fade-in">
            <span
              className="mr-2 inline-block size-1.5 shrink-0 animate-pulse rounded-full bg-signal"
              aria-hidden
            />
            <span>{availabilityText}</span>
          </p>

          <h1 className="sr-only">Jitu Sagar Mahato — Software Engineer</h1>
          <div aria-hidden="true" className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[72px] lg:leading-[1.05]">
            {headline}
            <span className="text-signal">.</span>
          </div>

          <h2 className="mt-4 font-mono text-sm uppercase tracking-wider text-foreground/80 sm:text-base md:text-lg md:tracking-widest">
            {subheadline}
          </h2>

          <div className="mt-6 max-w-[65ch] text-base leading-relaxed md:leading-8 text-muted-foreground/80 md:text-lg space-y-4">
            {description
              .split(/\n+/)
              .filter(Boolean)
              .map((paragraph: string, i: number) => (
                <p
                  key={i}
                  className={paragraph.length > 150 ? "text-justify hyphens-auto" : "text-left"}
                >
                  {paragraph}
                </p>
              ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
            {settings?.resumeFileUrl ? (
              <a
                href={settings.resumeFileUrl}
                download="JS-Mahato-Resume.pdf"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-signal/20 bg-gradient-to-b from-card/80 to-signal/5 px-8 py-4 text-base font-medium text-foreground shadow-[0_0_30px_rgba(34,197,94,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] hover:border-signal/50 hover:shadow-[0_0_45px_rgba(34,197,94,0.25)] hover:from-card hover:to-signal/10 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-background"
              >
                <span className="flex items-center gap-2">
                  <Download className="size-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-signal" />
                  Get Resume PDF
                </span>
                <span className="rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-signal transition-colors duration-300 group-hover:bg-signal/20">
                  PDF
                </span>
              </a>
            ) : (
              <Link
                to="/resume"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-signal/20 bg-gradient-to-b from-card/80 to-signal/5 px-8 py-4 text-base font-medium text-foreground shadow-[0_0_30px_rgba(34,197,94,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] hover:border-signal/50 hover:shadow-[0_0_45px_rgba(34,197,94,0.25)] hover:from-card hover:to-signal/10 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-background"
              >
                <span className="flex items-center gap-2">
                  <FileText className="size-5 transition-transform duration-300 group-hover:scale-105 group-hover:text-signal" />
                  View Resume
                </span>
                <span className="rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-signal transition-colors duration-300 group-hover:bg-signal/20">
                  PDF
                </span>
              </Link>
            )}

            <Link
              to="/projects"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-signal/20 bg-gradient-to-b from-card/80 to-signal/5 px-8 py-4 text-base font-medium text-foreground shadow-[0_0_30px_rgba(34,197,94,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] hover:border-signal/50 hover:shadow-[0_0_45px_rgba(34,197,94,0.25)] hover:from-card hover:to-signal/10 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-background"
            >
              <span className="flex items-center gap-2">
                <Briefcase className="size-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-signal" />
                View Projects
              </span>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <Github className="size-5" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <Linkedin className="size-5" />
            </a>
            {settings?.email ? (
              <a
                href={emailContact}
                aria-label="Email Me"
                className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Mail className="size-5" />
              </a>
            ) : (
              <Link
                to="/contact"
                aria-label="Contact Me"
                className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Mail className="size-5" />
              </Link>
            )}
            <Link
              to="/blog"
              aria-label="Blog"
              className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <FileText className="size-5" />
            </Link>
          </div>
        </div>

        <aside className="md:col-span-4 flex items-center justify-center">
          <div className="overflow-hidden rounded-2xl border border-border/60 w-full max-w-sm md:max-w-none">
            <img
              src={profileImageUrl}
              alt={`Portrait of ${headline}`}
              width={600}
              height={700}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
