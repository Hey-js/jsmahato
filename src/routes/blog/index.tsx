import { sanityClient } from "@/lib/sanity";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { getCanonicalLink, getBreadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: `Blog | ${site.name}` },
      {
        name: "description",
        content: "Thoughts on engineering, problem-solving, and personal projects.",
      },
      { property: "og:title", content: `Blog | ${site.name}` },
      {
        property: "og:description",
        content: "Thoughts on engineering, problem-solving, and personal projects.",
      },
    ],
    links: [getCanonicalLink("/blog")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Blog", url: `${site.url}/blog` },
          ]),
        ),
      },
    ],
  }),
  component: BlogPage,
});

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

function BlogPage() {
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = {
        data: await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc)`),
      };
      return data.filter((b: any) => b.status === "Published");
    },
  });

  return (
    <PageShell
      eyebrow="Blog"
      title="Notes from the build."
      intro="Occasional writing about software engineering, design, personal projects, and the camera."
    >
      {isLoading ? (
        <p className="text-muted-foreground">Loading articles...</p>
      ) : blogs.length === 0 ? (
        <div className="rounded-xl border border-border/60 bg-card p-8 text-center md:p-12">
          <p className="text-muted-foreground">No posts published yet. Check back soon.</p>
        </div>
      ) : (
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {blogs.map((p: any, i: number) => (
            <Reveal as="li" key={p._id} delay={i * 60}>
              <Link
                to="/blog/$slug"
                params={{ slug: typeof p.slug === 'string' ? p.slug : p.slug.current }}
                aria-label={p.title}
                className="group grid gap-3 py-8 transition-colors hover:bg-secondary/40 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-2"
              >
                <span className="font-mono text-xs text-muted-foreground sm:col-span-2">
                  {fmt(p.createdAt)}
                </span>
                <div className="sm:col-span-7">
                  <h2 className="text-xl font-medium tracking-tight transition-colors group-hover:text-signal">
                    {p.title}
                    <ArrowUpRight className="ml-1 inline size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </h2>
                  <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:col-span-3 sm:justify-end">
                  {p.tags && p.tags[0] && (
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.tags[0]}
                    </span>
                  )}
                  <span className="font-mono text-xs text-muted-foreground">
                    {Math.ceil(p.content.length / 1000)} min read
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      )}

      <p className="mt-10 max-w-xl text-sm text-muted-foreground">
        Want new posts in your inbox? Drop me a line via{" "}
        <a href={`mailto:${site.email}`} className="text-signal hover:underline">
          {site.email}
        </a>{" "}
        and I'll add you to the (very) occasional list.
      </p>
    </PageShell>
  );
}
