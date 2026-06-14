import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Github, Globe, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { getSeoMeta, getBreadcrumbJsonLd, getCanonicalLink } from "@/lib/seo";
import { sanityClient, urlFor } from "@/lib/sanity";
import { site } from "@/lib/site";
import groq from "groq";

export const Route = createFileRoute("/projects_/$slug")({
  component: ProjectDetailPage,
  loader: async ({ context, params: { slug } }) => {
    // Pre-fetch data for SSR & SEO
    const [project, allProjects] = await Promise.all([
      context.queryClient.ensureQueryData({
        queryKey: ["project", slug],
        queryFn: async () => {
          return await sanityClient.fetch(groq`*[_type == "project" && slug.current == $slug][0]`, {
            slug,
          });
        },
      }),
      context.queryClient.ensureQueryData({
        queryKey: ["projects"],
        queryFn: async () => {
          return await sanityClient.fetch(
            groq`*[_type == "project"] | order(sortOrder asc) {
              _id, title, "slug": slug.current, description, coverImage, screenshots
            }`,
          );
        },
      }),
    ]);
    return { slug, project };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.project) return {};
    const { project, slug } = loaderData;
    const coverImageObj =
      project.coverImage || (project.screenshots && project.screenshots[0]) || undefined;
    const coverImage = coverImageObj ? urlFor(coverImageObj).url() : undefined;
    const currentUrl = `${site.url}/projects/${slug}`;

    return {
      meta: getSeoMeta(project.title, project.description, coverImage),
      links: [getCanonicalLink(`/projects/${slug}`)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["CreativeWork", "SoftwareApplication"],
            name: project.title,
            description: project.description,
            image: coverImage,
            url: project.liveUrl || currentUrl,
            author: {
              "@type": "Person",
              name: site.name,
            },
            applicationCategory: "WebApplication",
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Home", url: site.url },
              { name: "Projects", url: `${site.url}/projects` },
              { name: project.title, url: currentUrl },
            ]),
          ),
        },
      ],
    };
  },
});

function ProjectDetailPage() {
  const { slug } = Route.useLoaderData();

  const { data: project, isLoading } = useQuery({
    queryKey: ["project", slug],
    queryFn: async () => {
      return await sanityClient.fetch(groq`*[_type == "project" && slug.current == $slug][0]`, {
        slug,
      });
    },
  });

  const { data: allProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return await sanityClient.fetch(
        groq`*[_type == "project"] | order(sortOrder asc) {
          _id, title, "slug": slug.current, description, coverImage, screenshots
        }`,
      );
    },
  });

  if (isLoading) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-20 text-center text-muted-foreground">
        Loading project...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-20 text-center text-muted-foreground">
        Project not found.
      </div>
    );
  }

  const coverImageObj =
    project.coverImage || (project.screenshots && project.screenshots[0]) || null;
  const coverImage = coverImageObj ? urlFor(coverImageObj).url() : null;
  const gallery = project.screenshots && project.screenshots.length > 0 ? project.screenshots : [];

  const relatedProjects = (allProjects || []).filter((p: any) => p.slug !== slug).slice(0, 3);

  const showRelated = allProjects && allProjects.length > 1 && relatedProjects.length > 0;

  return (
    <article className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <Reveal>
        <Link
          to="/projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 size-4" /> Back to Projects
        </Link>

        {/* 1. HERO SECTION */}
        <header className="mb-10 max-w-3xl">
          {coverImage && (
            <div className="mb-6 overflow-hidden rounded-lg border border-border/60 bg-muted aspect-video w-full">
              <img
                src={coverImage}
                alt={`${project.title} application interface cover`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance mb-6">
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {project.technologies.map((s: string) => (
                <span
                  key={s}
                  className="rounded-md border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors shadow-sm"
              >
                <Globe className="mr-2 size-4" /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md border border-border/60 bg-card px-4 py-2 text-sm font-medium hover:bg-muted transition-colors shadow-sm"
              >
                <Github className="mr-2 size-4" /> Source Code
              </a>
            )}
          </div>
        </header>

        <div className="max-w-3xl space-y-12">
          {/* 2. OVERVIEW */}
          {project.overview && (
            <section>
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Problem Solved
              </h2>
              <p className="text-base text-foreground leading-relaxed">{project.overview}</p>
            </section>
          )}

          {/* 3. KEY FEATURES */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Architecture
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start p-3 rounded-lg border border-border/60 bg-card"
                  >
                    <CheckCircle2 className="mr-2.5 size-4 text-signal shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 4. CHALLENGES SOLVED */}
          {project.challenges && (
            <section>
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Lessons Learned
              </h2>
              <div className="p-4 rounded-lg border border-border/60 bg-muted/30">
                <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </section>
          )}

          {/* 5. RESULTS & IMPACT */}
          {project.results && (
            <section>
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Results & Impact
              </h2>
              <div className="p-4 rounded-lg border border-signal/20 bg-signal/5">
                <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                  {project.results}
                </p>
              </div>
            </section>
          )}

          {/* 6. PROJECT GALLERY */}
          {gallery.length > 0 && (
            <section className="pt-4">
              <h2 className="text-xl font-semibold tracking-tight mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gallery.map((imgObj: any, i: number) => {
                  const imgUrl = urlFor(imgObj).url();
                  return (
                    <div
                      key={i}
                      className="overflow-hidden rounded-xl border border-border/60 bg-muted h-[260px] max-h-[280px]"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} user interface screenshot ${i + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 7. RELATED PROJECTS */}
          {showRelated && (
            <section className="border-t border-border/60 pt-10 mt-10">
              <h2 className="text-xl font-semibold tracking-tight mb-6">Related Projects</h2>
              <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {relatedProjects.map((p: any) => {
                  const displayImageObj = p.coverImage || (p.screenshots && p.screenshots[0]);
                  const displayImageUrl = displayImageObj ? urlFor(displayImageObj).url() : null;
                  return (
                    <li key={p._id}>
                      <Link
                        to="/projects/$slug"
                        params={{ slug: p.slug }}
                        className="group block h-full"
                      >
                        <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-border/60 bg-muted mb-3">
                          {displayImageUrl ? (
                            <img
                              src={displayImageUrl}
                              alt={`${p.title} project thumbnail`}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center">
                              <span className="text-muted-foreground font-mono uppercase tracking-widest text-[10px]">
                                No image
                              </span>
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-sm text-foreground group-hover:underline transition-colors line-clamp-1">
                            {p.title}
                          </h3>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </div>
      </Reveal>
    </article>
  );
}
