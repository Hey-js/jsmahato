import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as site, s as sanityClient } from "./router-8Sc-kGY-.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { P as PageShell } from "./page-shell-DHZQKWZj.mjs";
import { R as Reveal } from "./reveal-DttH52XM.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
const fmt = (d) => new Date(d).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
});
function BlogPage() {
  const {
    data: blogs = [],
    isLoading
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const {
        data
      } = {
        data: await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc)`)
      };
      return data.filter((b) => b.status === "Published");
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { eyebrow: "Blog", title: "Notes from the build.", intro: "Occasional writing about software engineering, design, personal projects, and the camera.", children: [
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Loading articles..." }) : blogs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/60 bg-card p-8 text-center md:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No posts published yet. Check back soon." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60 border-y border-border/60", children: blogs.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
      slug: typeof p.slug === "string" ? p.slug : p.slug.current
    }, "aria-label": p.title, className: "group grid gap-3 py-8 transition-colors hover:bg-secondary/40 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground sm:col-span-2", children: fmt(p.createdAt) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-medium tracking-tight transition-colors group-hover:text-signal", children: [
          p.title,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 inline size-4 opacity-0 transition-opacity group-hover:opacity-100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: p.excerpt })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:col-span-3 sm:justify-end", children: [
        p.tags && p.tags[0] && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: p.tags[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
          Math.ceil(p.content.length / 1e3),
          " min read"
        ] })
      ] })
    ] }) }, p._id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 max-w-xl text-sm text-muted-foreground", children: [
      "Want new posts in your inbox? Drop me a line via",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${site.email}`, className: "text-signal hover:underline", children: site.email }),
      " ",
      "and I'll add you to the (very) occasional list."
    ] })
  ] });
}
export {
  BlogPage as component
};
