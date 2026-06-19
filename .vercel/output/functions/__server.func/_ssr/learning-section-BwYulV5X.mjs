import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeading } from "./section-heading-C9VhNV0B.mjs";
import { R as Reveal } from "./reveal-DttH52XM.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { l as Cloud, m as Server, n as Braces } from "../_libs/lucide-react.mjs";
import "./router-8Sc-kGY-.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const learnings = [
  {
    title: "Cloud Computing",
    description: "Learning AWS fundamentals, deployment workflows, cloud services, and infrastructure concepts.",
    icon: Cloud
  },
  {
    title: "System Design",
    description: "Studying backend architecture, databases, caching strategies, scalability, and distributed systems.",
    icon: Server
  },
  {
    title: "Data Structures & Algorithms",
    description: "Practicing problem-solving techniques and preparing for software engineering interviews.",
    icon: Braces
  }
];
function LearningSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Continuous Learning",
        title: "What I'm learning.",
        description: "A collection of things I'm currently exploring as I grow as a software engineer."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: learnings.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 sm:p-8 transition-colors hover:border-signal/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-10 items-center justify-center rounded-md bg-secondary/50 text-signal mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium tracking-tight", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm md:text-base text-muted-foreground leading-relaxed flex-1", children: item.description })
    ] }) }, item.title)) })
  ] }) });
}
export {
  LearningSection
};
