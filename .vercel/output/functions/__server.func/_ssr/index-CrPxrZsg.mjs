import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { P as PageShell } from "./page-shell-DHZQKWZj.mjs";
import { R as Reveal } from "./reveal-Cv3w7mdv.mjs";
import { u as urlFor, s as sanityClient } from "./router-DjaYn16m.mjs";
import { g as groq } from "../_libs/groq.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowUpRight, l as Globe, G as Github } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
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
import "../_libs/sanity__client.mjs";
import "../_libs/get-it.mjs";
import "../_libs/decompress-response.mjs";
import "zlib";
import "../_libs/mimic-response.mjs";
import "url";
import "http";
import "https";
import "assert";
import "querystring";
import "../_libs/tunnel-agent.mjs";
import "net";
import "tls";
import "events";
import "../_libs/safe-buffer.mjs";
import "buffer";
import "tty";
import "../_libs/through2.mjs";
import "../_libs/readable-stream.mjs";
import "node:string_decoder";
import "../_libs/inherits.mjs";
import "../_libs/util-deprecate.mjs";
import "../_libs/is-retry-allowed.mjs";
import "../_libs/rxjs.mjs";
import "../_libs/nanoid.mjs";
import "../_libs/sanity__image-url.mjs";
function ProjectsPage() {
  const {
    data: projects = [],
    isLoading
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return await sanityClient.fetch(groq`*[_type == "project"] | order(sortOrder asc) {
          _id, title, "slug": slug.current, description, technologies, featured, coverImage, screenshots, githubUrl, liveUrl
        }`);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "Projects", title: "Engineering Projects", intro: "A collection of applications, backend services, and platforms I've built. For each project, I focus on the problem being solved, the underlying architecture, the technologies used, and the engineering lessons learned.", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Loading projects..." }) : !projects.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No projects found." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-6 sm:grid-cols-2", children: projects.map((p, i) => {
    const displayImage = p.coverImage || p.screenshots && p.screenshots[0];
    const imageUrl = displayImage ? urlFor(displayImage).url() : null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", delay: i * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:border-signal/60 hover:shadow-[0_0_20px_rgba(var(--signal),0.1)] focus-within:ring-2 focus-within:ring-signal focus-within:ring-offset-2 focus-within:ring-offset-background", children: [
      imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageUrl, alt: p.title, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", loading: "lazy" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-mono uppercase tracking-widest text-xs", children: "No image" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-medium tracking-tight", children: p.title }),
          p.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-full bg-signal/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-signal", children: "Featured" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 flex-1 text-muted-foreground leading-relaxed line-clamp-2", children: p.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex flex-wrap gap-1.5 relative z-20", children: (p.technologies || []).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded border border-border/80 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: s }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4 text-sm font-medium relative z-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$slug", params: {
            slug: p.slug
          }, className: "flex items-center text-signal group-hover:underline before:absolute before:inset-0 before:z-10 focus:outline-none", children: [
            "View Project ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 size-4" })
          ] }),
          p.liveUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "relative z-20 flex items-center text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "mr-1 size-4" }),
            " Live Demo"
          ] }),
          p.githubUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.githubUrl, target: "_blank", rel: "noopener noreferrer", className: "relative z-20 flex items-center text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "mr-1 size-4" }),
            " Code"
          ] })
        ] })
      ] })
    ] }) }, p._id);
  }) }) });
}
export {
  ProjectsPage as component
};
