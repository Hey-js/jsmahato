import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageShell } from "./page-shell-DHZQKWZj.mjs";
import { R as Reveal } from "./reveal-bogDSxbn.mjs";
import { B as Button } from "./router-11xRVUf_.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__react-query.mjs";
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
import "../_libs/groq.mjs";
const process = [{
  k: "01",
  t: "Discovery",
  d: "Understanding the problem, audience, and constraints to build the right software."
}, {
  k: "02",
  t: "Scope & Architecture",
  d: "Defining the right tech stack and engineering approach for the problem."
}, {
  k: "03",
  t: "Build",
  d: "Developing the application with a focus on performance, scalability, and code quality."
}, {
  k: "04",
  t: "Ship & Iterate",
  d: "Production deploy, monitoring, and iterative improvements."
}];
const expertiseAreas = [{
  title: "Frontend Development",
  description: "Building responsive, accessible, and performant user interfaces using React, TypeScript, and Tailwind CSS."
}, {
  title: "Backend Development",
  description: "Designing robust server-side applications with Node.js, Express, and modern JavaScript environments."
}, {
  title: "Database Design",
  description: "Architecting efficient schemas and managing data with MongoDB, PostgreSQL, and Firebase."
}, {
  title: "API Development",
  description: "Creating scalable, secure RESTful APIs to power web applications and third-party integrations."
}, {
  title: "System Architecture",
  description: "Planning complete technical solutions, from component structure to state management and data flow."
}, {
  title: "Deployment & Hosting",
  description: "Configuring CI/CD pipelines and deploying applications to modern cloud platforms like Vercel and AWS."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { eyebrow: "Expertise", title: "Areas of Expertise.", intro: "A comprehensive breakdown of my technical capabilities and the specific engineering domains I focus on.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: expertiseAreas.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-signal/60 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-signal", children: "Engineering" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-xl font-medium tracking-tight", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base text-muted-foreground leading-relaxed flex-1", children: s.description })
    ] }) }, s.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "My Engineering Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-xl border border-border/60 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-signal", children: p.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-medium tracking-tight", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.d })
      ] }) }, p.k)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 rounded-2xl border border-border/60 bg-card p-8 sm:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Ready to start?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xl font-medium tracking-tight", children: "Let's discuss your software needs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
        "Get in touch ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, {})
      ] }) })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
