import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as Route, s as sanityClient } from "./router-8Sc-kGY-.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./reveal-DttH52XM.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { f as ArrowLeft } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/sanity__image-url.mjs";
import "./server-RvM7qVcp.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "util";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/groq.mjs";
function BlogPostPage() {
  const {
    slug
  } = Route.useLoaderData();
  const {
    data: post,
    isLoading
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const {
        data
      } = {
        data: await sanityClient.fetch(`*[_type == "post" && slug.current == "${slug}"][0]`)
      };
      return data;
    }
  });
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-prose py-32 text-center text-muted-foreground", children: "Loading article..." });
  }
  if (!post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-prose py-32 text-center text-muted-foreground", children: "Post not found." });
  }
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "container-prose py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center text-sm font-medium text-muted-foreground hover:text-signal mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 size-4" }),
      " Back to Blog"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: post.createdAt, children: formattedDate }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1 rounded-full bg-border", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          Math.ceil(post.content.length / 1e3),
          " min read"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance", children: post.title }),
      post.coverImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden rounded-xl border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.coverImage, alt: `${post.title} article cover image`, className: "w-full aspect-[2/1] object-cover" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-neutral dark:prose-invert prose-headings:font-medium prose-p:text-justify prose-p:hyphens-auto prose-p:leading-relaxed md:prose-p:leading-8 prose-p:max-w-[65ch] prose-a:text-signal prose-a:no-underline hover:prose-a:underline max-w-none", dangerouslySetInnerHTML: {
      __html: post.content
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 pt-8 border-t border-border/60 flex flex-wrap gap-2", children: (post.tags || []).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground", children: tag }, tag)) })
  ] }) });
}
export {
  BlogPostPage as component
};
