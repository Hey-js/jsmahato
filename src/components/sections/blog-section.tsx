import { sanityClient } from "@/lib/sanity";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export function BlogSection() {
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = {
        data: await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc)`),
      };
      return data;
    },
  });

  const latest = blogs.filter((b: any) => b.status === "Published").slice(0, 3);

  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="Latest blogs"
          title="Notes from the build."
          description="Occasional writing about software engineering, design, personal projects, and the camera."
        />

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-64 rounded-xl border border-border/60 bg-card/50 animate-pulse"
              />
            ))}
          </div>
        ) : latest.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">No posts published yet.</div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-3">
            {latest.map((p: any, i: number) => (
              <Reveal as="li" key={p.slug} delay={i * 100}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-signal/60 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.tags?.[0] || "Blog"}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {Math.ceil(p.content?.length / 1000) || 5} min read
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium tracking-tight transition-colors group-hover:text-signal">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">
                    {p.excerpt}
                  </p>
                  <p className="mt-6 font-mono text-xs text-muted-foreground">{fmt(p.createdAt)}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        )}

        <Button
          asChild
          variant="ghost"
          className="mt-8 px-0 text-signal hover:text-signal hover:bg-transparent"
        >
          <Link to="/blog">
            Read all posts <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
