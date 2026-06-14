import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { getCanonicalLink, getBreadcrumbJsonLd } from "@/lib/seo";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import groq from "groq";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: `Photography | ${site.name}` },
      { name: "description", content: "A visual gateway to my dedicated photography portfolio." },
    ],
    links: [getCanonicalLink("/photography")],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Photography", url: `${site.url}/photography` },
          ]),
        ),
      },
    ],
  }),
  component: PhotographyPage,
});

function PhotographyPage() {
  const { data: featuredPhotos = [], isLoading } = useQuery({
    queryKey: ["featuredPhotography"],
    queryFn: async () => {
      const result = await sanityClient.fetch(
        groq`*[_type == "featuredPhotography"] | order(order asc)`,
      );
      return result;
    },
  });

  return (
    <PageShell
      eyebrow="PHOTOGRAPHY"
      title="A different lens."
      intro="Photography is where I slow down and pay attention to details. Outside of software, I enjoy documenting places, people, and everyday moments."
    >
      <div className="mt-12 max-w-6xl mx-auto">
        {isLoading ? (
          <div className="text-center text-muted-foreground py-20">Loading photography...</div>
        ) : (
          <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
            <ul className="flex snap-x snap-mandatory overflow-x-auto pb-8 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {featuredPhotos.map((photo: any, i: number) => (
                <Reveal
                  as="li"
                  key={photo._id || i}
                  delay={i * 100}
                  className="w-[85vw] shrink-0 snap-center sm:w-auto"
                >
                  <a
                    href="https://strangerjs.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {/* Background Image */}
                    {photo.image && (
                      <img
                        src={urlFor(photo.image).width(800).url()}
                        alt={photo.title || "Featured Photography"}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <h3 className="text-2xl font-bold tracking-tight text-white mb-4 drop-shadow-md opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {photo.title}
                      </h3>

                      {/* Hover "View Full Collection" Badge */}
                      <div className="translate-y-4 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-signal">
                          View Full Collection <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        )}

        {/* Premium Centered CTA Block */}
        <Reveal delay={300} className="mt-16 flex flex-col items-center text-center">
          <h3 className="text-xl font-medium tracking-tight sm:text-2xl text-foreground">
            View the complete collection on StrangerJS
          </h3>
          <p className="mt-3 text-sm tracking-widest text-muted-foreground uppercase font-mono">
            Street • Travel • Documentary • Cinematic
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full px-8 transition-transform hover:scale-105"
          >
            <a href="https://strangerjs.vercel.app" target="_blank" rel="noopener noreferrer">
              Explore Photography Portfolio <ArrowUpRight className="ml-2 size-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </PageShell>
  );
}
