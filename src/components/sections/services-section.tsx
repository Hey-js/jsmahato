import { fetchSanity } from "@/lib/sanity.server";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data } = {
        data: await fetchSanity({ data: { query: `*[_type == "service"] | order(order asc)` } }),
      };
      return data;
    },
  });

  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="Expertise"
          title="How we can collaborate."
          description="I take on a small number of freelance and collaborative software engineering projects at a time."
        />

        {isLoading ? (
          <p className="mt-8 text-sm text-muted-foreground">Loading expertise...</p>
        ) : (
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {services.slice(0, 2).map((s: any, i: number) => (
              <Reveal as="li" key={s._id} delay={i * 80}>
                <article className="group flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-signal/60 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-signal">
                    Engineering
                  </p>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.description}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {(s.features || []).map((d: string) => (
                      <li key={d} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-signal" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ul>
        )}

        <Button
          asChild
          variant="ghost"
          className="mt-8 px-0 text-signal hover:text-signal hover:bg-transparent"
        >
          <Link to="/services">
            All expertise <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
