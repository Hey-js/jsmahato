import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell } from "./page-shell-DHZQKWZj.mjs";
import { R as Reveal } from "./reveal-DttH52XM.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
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
import "../_libs/lucide-react.mjs";
const timeline = [{
  year: "2026",
  role: "Lead Developer",
  company: "XR System - Personal Project",
  description: "Designed and developed XR System, a full-stack platform that combines portfolio management, blogging, and media showcases.",
  achievements: ["Full Stack Development", "System Architecture", "React & TypeScript Development", "Node.js Backend Development", "MongoDB Database Design", "Cloudinary Integration", "Sanity CMS Integration", "SEO Optimization"]
}, {
  year: "2025",
  role: "Event Management System",
  company: "MERN Stack",
  description: "Led the development of a full-stack Event Management System built using the MERN stack. Technologies: React, Node.js, Express.js, MongoDB, JWT, Tailwind CSS.",
  achievements: ["Team Leader", "REST API Development", "Authentication & Authorization", "MongoDB Integration", "Frontend Development", "Backend Development"]
}, {
  year: "2025",
  role: "Full Stack Development Journey",
  company: "Continuous Learning",
  description: "Built multiple web applications and strengthened expertise in modern web technologies.",
  achievements: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication Systems"]
}, {
  year: "2024",
  role: "Photography Portfolio Website",
  company: "Personal Project",
  description: "Designed and developed a modern photography portfolio platform focused on responsive design, media optimization, and user experience.",
  achievements: ["Responsive Gallery System", "Cloud Media Management", "Image Optimization", "Modern UI/UX Design"]
}, {
  year: "2024",
  role: "Advanced Web Development",
  company: "Skill Development",
  description: "Built several personal and learning projects while developing a deeper understanding of frontend engineering.",
  achievements: ["React", "JavaScript", "HTML & CSS", "Tailwind CSS", "Git & GitHub"]
}];
function ExperiencePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "Experience", title: "My Journey", intro: "A timeline of my projects and growth as a software engineer.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-l border-border/60 pl-6 sm:pl-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-[-0.5px] w-px bg-gradient-to-b from-signal via-border to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-16", children: timeline.map((job, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { as: "li", delay: i * 100, className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-8 top-1.5 size-4 rounded-full border-4 border-background bg-signal sm:-left-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-medium tracking-tight", children: [
          job.role,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "· ",
            job.company
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm tracking-widest text-foreground", children: job.year })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: job.description }),
      job.achievements && job.achievements.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground", children: job.achievements.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1 rounded-full bg-signal/60", "aria-hidden": true }),
        a
      ] }, a)) })
    ] }, `${job.year}-${i}`)) })
  ] }) });
}
export {
  ExperiencePage as component
};
