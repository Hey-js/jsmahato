import { fetchSanity } from "@/lib/sanity.server";
import { useQuery } from "@tanstack/react-query";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function TestimonialsSection() {
  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = { data: await fetchSanity({ data: { query: `*[_type == "testimonial"]` } }) };
      return data;
    },
  });

  if (isLoading || testimonials.length === 0) return null;

  return (
    <section className="container-prose py-20 sm:py-28">
      <SectionHeading eyebrow="Testimonials" title="Kind words from people I've shipped with." />

      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t: any, i: number) => (
          <Reveal as="li" key={t._id || t.clientName} delay={i * 100}>
            <figure className="flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 sm:p-8">
              <Quote className="size-6 text-signal" aria-hidden />
              <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed">
                "{t.content}"
              </blockquote>
              <figcaption className="mt-6 flex items-center border-t border-border pt-4">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="mr-3 size-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-sm font-medium">{t.clientName}</p>
                  <p className="font-mono text-xs text-muted-foreground">{t.role || t.company}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
