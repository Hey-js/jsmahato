import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { R as Reveal } from "./reveal-bogDSxbn.mjs";
import { R as Route$1, u as urlFor, s as sanityClient } from "./router-11xRVUf_.mjs";
import { g as groq } from "../_libs/groq.mjs";
import "../_libs/sonner.mjs";
import { m as ArrowLeft, l as Globe, G as Github, n as CircleCheck } from "../_libs/lucide-react.mjs";
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
function ProjectDetailPage() {
  const {
    slug
  } = Route$1.useLoaderData();
  const {
    data: project,
    isLoading
  } = useQuery({
    queryKey: ["project", slug],
    queryFn: async () => {
      return await sanityClient.fetch(groq`*[_type == "project" && slug.current == $slug][0]`, {
        slug
      });
    }
  });
  const {
    data: allProjects
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return await sanityClient.fetch(groq`*[_type == "project"] | order(sortOrder asc) {
          _id, title, "slug": slug.current, description, coverImage, screenshots
        }`);
    }
  });
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1200px] mx-auto px-4 py-20 text-center text-muted-foreground", children: "Loading project..." });
  }
  if (!project) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1200px] mx-auto px-4 py-20 text-center text-muted-foreground", children: "Project not found." });
  }
  const coverImageObj = project.coverImage || project.screenshots && project.screenshots[0] || null;
  const coverImage = coverImageObj ? urlFor(coverImageObj).url() : null;
  const gallery = project.screenshots && project.screenshots.length > 0 ? project.screenshots : [];
  const relatedProjects = (allProjects || []).filter((p) => p.slug !== slug).slice(0, 3);
  const showRelated = allProjects && allProjects.length > 1 && relatedProjects.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 size-4" }),
      " Back to Projects"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-10 max-w-3xl", children: [
      coverImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 overflow-hidden rounded-lg border border-border/60 bg-muted aspect-video w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: coverImage, alt: `${project.title} application interface cover`, className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-3", children: project.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed text-balance mb-6", children: project.description }),
      project.technologies && project.technologies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2 mb-6", children: project.technologies.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md border border-border/60 bg-muted/30 px-3 py-1 text-xs font-medium text-foreground", children: s }, s)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        project.liveUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "mr-2 size-4" }),
          " Live Demo"
        ] }),
        project.githubUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: project.githubUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center rounded-md border border-border/60 bg-card px-4 py-2 text-sm font-medium hover:bg-muted transition-colors shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "mr-2 size-4" }),
          " Source Code"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl space-y-12", children: [
      project.overview && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4", children: "Problem Solved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-foreground leading-relaxed", children: project.overview })
      ] }),
      project.features && project.features.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4", children: "Architecture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-3", children: project.features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start p-3 rounded-lg border border-border/60 bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mr-2.5 size-4 text-signal shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: feature })
        ] }, i)) })
      ] }),
      project.challenges && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4", children: "Lessons Learned" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-lg border border-border/60 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed", children: project.challenges }) })
      ] }),
      project.results && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4", children: "Results & Impact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-lg border border-signal/20 bg-signal/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground whitespace-pre-wrap leading-relaxed", children: project.results }) })
      ] }),
      gallery.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold tracking-tight mb-4", children: "Project Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: gallery.map((imgObj, i) => {
          const imgUrl = urlFor(imgObj).url();
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border/60 bg-muted h-[260px] max-h-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgUrl, alt: `${project.title} user interface screenshot ${i + 1}`, className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105", loading: "lazy" }) }, i);
        }) })
      ] }),
      showRelated && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-border/60 pt-10 mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold tracking-tight mb-6", children: "Related Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-4 sm:grid-cols-2 md:grid-cols-3", children: relatedProjects.map((p) => {
          const displayImageObj = p.coverImage || p.screenshots && p.screenshots[0];
          const displayImageUrl = displayImageObj ? urlFor(displayImageObj).url() : null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$slug", params: {
            slug: p.slug
          }, className: "group block h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] w-full overflow-hidden rounded-lg border border-border/60 bg-muted mb-3", children: displayImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: displayImageUrl, alt: `${p.title} project thumbnail`, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-mono uppercase tracking-widest text-[10px]", children: "No image" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-sm text-foreground group-hover:underline transition-colors line-clamp-1", children: p.title }) })
          ] }) }, p._id);
        }) })
      ] })
    ] })
  ] }) });
}
export {
  ProjectDetailPage as component
};
