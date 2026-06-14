import { sanityClient } from "@/lib/sanity";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { getSeoMeta, getArticleJsonLd, getCanonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/blog_/$slug")({
  component: BlogPostPage,
  loader: async ({ context, params: { slug } }) => {
    // Pre-fetch data for SSR & SEO
    const post = await context.queryClient.ensureQueryData({
      queryKey: ["blog", slug],
      queryFn: async () => {
        const { data } = {
          data: await sanityClient.fetch(`*[_type == "post" && slug.current == "${slug}"][0]`),
        };
        return data;
      },
    });
    return { slug, post };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) return {};
    const { post, slug } = loaderData;
    return {
      meta: getSeoMeta(post.title, post.excerpt, post.coverImage),
      links: [getCanonicalLink(`/blog/${slug}`)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            getArticleJsonLd({
              title: post.title,
              description: post.excerpt,
              image: post.coverImage,
              datePublished: post.createdAt,
              slug: post.slug,
            }),
          ),
        },
      ],
    };
  },
});

function BlogPostPage() {
  const { slug } = Route.useLoaderData();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const { data } = {
        data: await sanityClient.fetch(`*[_type == "post" && slug.current == "${slug}"][0]`),
      };
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="container-prose py-32 text-center text-muted-foreground">
        Loading article...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container-prose py-32 text-center text-muted-foreground">Post not found.</div>
    );
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="container-prose py-20 sm:py-28">
      <Reveal>
        <Link
          to="/blog"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-signal mb-12"
        >
          <ArrowLeft className="mr-2 size-4" /> Back to Blog
        </Link>

        <header className="mb-14">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <time dateTime={post.createdAt}>{formattedDate}</time>
            <span className="size-1 rounded-full bg-border" aria-hidden />
            <span>{Math.ceil(post.content.length / 1000)} min read</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            {post.title}
          </h1>
          {post.coverImage && (
            <div className="mt-10 overflow-hidden rounded-xl border border-border/60">
              <img
                src={post.coverImage}
                alt={`${post.title} article cover image`}
                className="w-full aspect-[2/1] object-cover"
              />
            </div>
          )}
        </header>

        <div
          className="prose prose-neutral dark:prose-invert prose-headings:font-medium prose-p:text-justify prose-p:hyphens-auto prose-p:leading-relaxed md:prose-p:leading-8 prose-p:max-w-[65ch] prose-a:text-signal prose-a:no-underline hover:prose-a:underline max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-wrap gap-2">
          {(post.tags || []).map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
