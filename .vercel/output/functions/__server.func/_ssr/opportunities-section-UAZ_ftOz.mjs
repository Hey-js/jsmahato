import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeading } from "./section-heading-C9VhNV0B.mjs";
import { R as Reveal } from "./reveal-DttH52XM.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./router-8Sc-kGY-.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { B as Briefcase, j as GraduationCap, k as Code, h as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__react-query.mjs";
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
import "../_libs/groq.mjs";
const opportunities = [
  {
    title: "Full-Time Roles",
    description: "Looking for Software Engineer, Full Stack Developer, or Backend Developer opportunities.",
    icon: Briefcase
  },
  {
    title: "Internships",
    description: "Open to internships where I can learn from experienced engineers and contribute to production systems.",
    icon: GraduationCap
  },
  {
    title: "Freelance Projects",
    description: "Available for selected web development projects and technical collaborations.",
    icon: Code
  }
];
function OpportunitiesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/60 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Open to opportunities",
        title: "How we can collaborate.",
        description: "I'm currently looking for software engineering roles, internships, and opportunities to work on real-world products. I enjoy building full-stack applications, backend systems, and solving practical problems with code."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: opportunities.map((opp, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 sm:p-8 transition-colors hover:border-signal/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-10 items-center justify-center rounded-md bg-secondary/50 text-signal mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(opp.icon, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium tracking-tight", children: opp.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base text-muted-foreground leading-relaxed flex-1", children: opp.description })
    ] }) }, opp.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        asChild: true,
        variant: "ghost",
        className: "mt-8 px-0 text-signal hover:text-signal hover:bg-transparent",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", children: [
          "View Expertise ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 size-4" })
        ] })
      }
    )
  ] }) });
}
export {
  OpportunitiesSection
};
