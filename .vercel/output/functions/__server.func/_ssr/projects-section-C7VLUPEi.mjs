import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeading } from "./section-heading-C9VhNV0B.mjs";
import { R as Reveal } from "./reveal-DttH52XM.mjs";
import { B as Button, s as sanityClient } from "./router-8Sc-kGY-.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as groq } from "../_libs/groq.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { G as Github, A as ArrowUpRight, h as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "util";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
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
function ProjectsSection() {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["featured-projects"],
    queryFn: async () => {
      const result = await sanityClient.fetch(
        groq`*[_type == "project" && featured == true] | order(sortOrder asc) [0...3] {
          _id, title, "slug": { "current": slug.current }, description, technologies, githubUrl, liveUrl
        }`
      );
      result.forEach((project) => {
        console.log({
          title: project.title,
          github: project.githubUrl,
          live: project.liveUrl
        });
      });
      return result;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/60 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Featured projects",
          title: "Things I've built recently.",
          description: "A selection of full-stack applications and systems I've designed and developed."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/projects",
          className: "hidden shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-signal sm:inline-flex",
          children: "All projects →"
        }
      )
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-muted-foreground", children: "Loading featured projects..." }) : !projects.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-muted-foreground", children: "No featured projects found." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-12 grid gap-6 md:grid-cols-3", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-signal/60 hover:shadow-[0_0_20px_rgba(var(--signal),0.1)] focus-within:ring-2 focus-within:ring-signal focus-within:ring-offset-2 focus-within:ring-offset-background overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between z-10 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground", children: "Full Stack Developer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          p.githubUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: p.githubUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "relative z-20 text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-4 transition-colors group-hover:text-signal" })
            }
          ),
          p.liveUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: p.liveUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "relative z-20 text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 transition-colors group-hover:text-signal" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-medium tracking-tight group-hover:text-signal transition-colors relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: `/projects/$slug`,
          params: { slug: p.slug.current },
          className: "focus:outline-none before:absolute before:inset-0 before:z-10",
          children: p.title
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 flex-1 text-sm text-muted-foreground leading-relaxed", children: p.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex flex-wrap gap-1.5 z-10 relative", children: (p.technologies || []).slice(0, 4).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "li",
        {
          className: "rounded border border-border/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
          children: s
        },
        s
      )) })
    ] }) }, p._id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        asChild: true,
        variant: "ghost",
        className: "mt-8 px-0 text-signal hover:text-signal hover:bg-transparent sm:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", children: [
          "All projects ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 size-4" })
        ] })
      }
    )
  ] }) });
}
export {
  ProjectsSection
};
