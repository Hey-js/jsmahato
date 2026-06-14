import { sanityClient } from "@/lib/sanity";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Reveal } from "@/components/reveal";
import { urlFor } from "@/lib/sanity";
import { Link } from "@tanstack/react-router";

export function PhotographySection() {
  const { data: photos = [], isLoading } = useQuery({
    queryKey: ["featuredPhotographyPreview"],
    queryFn: async () => {
      const data = await sanityClient.fetch(`*[_type == "featuredPhotography"] | order(order asc)`);
      return data;
    },
  });

  return (
    <section className="border-b border-border/60 bg-muted/20">
      <div className="container-prose py-20">
        <Reveal>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-signal">
            <ImageIcon className="size-3" />
            <span>Photography</span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Beyond The Code.
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Not everything worth exploring lives on a screen. Some stories are found on winding
            roads, quiet streets, and in the spaces between destinations.
            <br />A small selection below.
          </p>
        </Reveal>

        {isLoading ? (
          <p className="mt-12 text-sm text-muted-foreground">Loading gallery preview...</p>
        ) : photos.length === 0 ? (
          <div className="mt-12 py-10 border border-dashed border-border/60 rounded-xl text-center text-muted-foreground text-sm">
            Photography portfolio coming soon.
          </div>
        ) : (
          <div className="mt-12 relative -mx-4 px-4 sm:mx-0 sm:px-0">
            <ul className="flex snap-x snap-mandatory overflow-x-auto pb-6 gap-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {photos.slice(0, 3).map((p: any, i: number) => (
                <Reveal
                  as="li"
                  key={p._id}
                  delay={i * 100}
                  className="group relative w-[85vw] shrink-0 snap-center sm:w-auto aspect-[4/5] sm:aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-muted"
                >
                  <Link
                    to="/photography"
                    className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                    aria-label={`View ${p.title} on Photography page`}
                  />
                  <img
                    src={p.image ? urlFor(p.image).width(800).url() : ""}
                    alt={p.title || "Photography preview"}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay for aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Reveal>
              ))}
            </ul>
          </div>
        )}

        <Reveal delay={300} className="mt-8 flex sm:justify-end">
          <Link
            to="/photography"
            className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-foreground transition-colors hover:text-signal"
          >
            View Photography
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
