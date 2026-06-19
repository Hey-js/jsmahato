import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeading } from "./section-heading-C9VhNV0B.mjs";
import { R as Reveal } from "./reveal-DttH52XM.mjs";
import { B as Button } from "./router-8Sc-kGY-.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { h as ArrowRight } from "../_libs/lucide-react.mjs";
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
const coreSkillCategories = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    name: "Database",
    skills: ["MongoDB", "FireBase", "PostgreSQL"]
  },
  {
    name: "Deployment & Tools",
    skills: ["Git", "GitHub", "Vercel", "Railway", "Cloudinary"]
  }
];
const learningSkills = ["AWS", "Cloud Computing", "System Design"];
function SkillsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/60 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Skills",
        title: "My technical toolkit.",
        description: "Technologies I've used to build my projects."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-10 sm:grid-cols-2", children: coreSkillCategories.map((group, gi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: gi * 100, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: group.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 flex flex-wrap gap-2.5 sm:gap-3", children: group.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "li",
        {
          className: "inline-flex items-center whitespace-nowrap min-w-fit rounded-md border border-border/60 bg-card px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium transition-colors hover:border-signal/60",
          children: skill
        },
        skill
      )) })
    ] }, group.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 400, className: "mt-16 sm:mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/40 bg-card/50 px-5 py-8 sm:px-10 sm:py-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6", children: "Currently Learning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap justify-center gap-2.5 sm:gap-4", children: learningSkills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "inline-flex items-center whitespace-nowrap min-w-fit rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-medium text-foreground transition-colors hover:border-green-500/40 hover:bg-green-500/10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "mr-2.5 size-1.5 rounded-full bg-green-500 animate-pulse",
                "aria-hidden": true
              }
            ),
            skill
          ]
        },
        skill
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        asChild: true,
        variant: "ghost",
        className: "px-0 text-signal hover:text-signal hover:bg-transparent",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/skills", children: [
          "View all skills ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 size-4" })
        ] })
      }
    ) })
  ] }) });
}
export {
  SkillsSection
};
