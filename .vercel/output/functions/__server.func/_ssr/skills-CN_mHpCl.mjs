import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as sanityClient } from "./router-8Sc-kGY-.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { R as Reveal } from "./reveal-DttH52XM.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { F as FolderGit2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
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
const engineeringSections = [{
  id: "Frontend",
  title: "Frontend",
  skillsList: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  description: "The primary stack I use to build user interfaces.",
  projects: ["Event Management System", "XR System", "Photography Portfolio Website"]
}, {
  id: "Backend",
  title: "Backend",
  skillsList: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  description: "Server-side logic, routing, and secure API endpoints.",
  projects: ["Event Management System", "XR System"]
}, {
  id: "Databases",
  title: "Databases",
  skillsList: ["MongoDB", "PostgreSQL"],
  description: "Systems I use to store data, manage relationships, and structure backend schemas.",
  projects: ["Event Management System", "XR System"]
}, {
  id: "Cloud & Infrastructure",
  title: "Cloud & Infrastructure",
  skillsList: ["Deployment", "Cloud Computing", "Monitoring", "Linux Fundamentals"],
  description: "Tools and practices for shipping code and maintaining applications.",
  projects: ["Photography Portfolio Website", "XR System"]
}, {
  id: "Tools",
  title: "Tools",
  skillsList: ["Git", "GitHub", "VS Code", "Postman"],
  description: "The daily software and utilities I use to write code and test APIs.",
  projects: ["Used across all projects"]
}, {
  id: "Currently Exploring",
  title: "Currently Exploring",
  skillsList: ["AWS", "Docker", "System Design", "DevOps Fundamentals"],
  description: "The next stage of my learning journey. Focusing on understanding scalable architecture and deployment practices.",
  projects: ["Ongoing theoretical and practical study"]
}];
function SkillsPage() {
  const {
    data: skills = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      try {
        const result = await sanityClient.fetch(`*[_type == "skill"] | order(order asc)`);
        return result;
      } catch (err) {
        console.error("SANITY ERROR", err);
        throw err;
      }
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose py-10 sm:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold tracking-tight sm:text-4xl text-foreground", children: "Engineering Toolkit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "A list of the technologies I've used to build my projects. I prefer to focus on understanding core concepts rather than just chasing the newest frameworks." })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Loading skills..." }) : isError ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center text-muted-foreground", children: "Failed to load content. Check console for details." }) : !skills?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center text-muted-foreground", children: "No skills found." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: engineeringSections.map((section, si) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: si * 50, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex h-full flex-col justify-between rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-border/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-foreground mb-4", children: section.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex flex-wrap gap-1.5", children: section.skillsList.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center rounded-sm bg-secondary/50 px-2 py-0.5 text-[13px] font-medium text-foreground", children: [
            section.id === "Currently Exploring" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1.5 size-1.5 rounded-full bg-signal animate-pulse", "aria-hidden": true }),
            s
          ] }, s)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-relaxed text-muted-foreground mb-6", children: section.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto border-t border-border/40 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FolderGit2, { className: "mt-0.5 size-3.5 shrink-0 text-signal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/80", children: "Related Work: " }),
            section.projects.join(", ")
          ] })
        ] }) })
      ] }) }, section.id);
    }) })
  ] });
}
export {
  SkillsPage as component
};
