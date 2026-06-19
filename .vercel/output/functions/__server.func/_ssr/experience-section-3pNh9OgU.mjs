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
const timeline = [
  {
    year: "2026",
    role: "Bachelor of Science in Information Technology",
    company: "Gossner College • Ranchi University",
    description: "Graduated with a CGPA of 7.5. Focused on software engineering, database systems, web technologies, and full-stack application development while simultaneously building real-world projects and strengthening practical development skills.",
    achievements: []
  },
  {
    year: "2026",
    role: "Lead Developer",
    company: "XR System - Personal Project",
    description: "Designed and developed XR System, a full-stack platform that combines portfolio management, blogging, and media showcases.",
    achievements: [
      "Full Stack Development",
      "System Architecture",
      "React & TypeScript Development",
      "Node.js Backend Development",
      "MongoDB Database Design",
      "Cloudinary & Sanity CMS Integration"
    ]
  },
  {
    year: "2025",
    role: "Event Management System",
    company: "MERN Stack Project",
    description: "Led the development of a full-stack Event Management System built using React, Node.js, Express.js, MongoDB, JWT, and Tailwind CSS.",
    achievements: ["Team Leader", "REST API Development", "Authentication & Authorization"]
  }
];
function ExperienceSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-prose py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Experience & Education",
        title: "My journey so far.",
        description: "A timeline of my education, projects, and growth as a software developer."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-2 top-2 bottom-2 w-px bg-border md:left-[7.5rem]",
          "aria-hidden": true
        }
      ),
      timeline.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Reveal,
        {
          as: "li",
          delay: i * 80,
          className: "relative pl-8 sm:pl-10 pb-12 md:pl-40",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "absolute left-0 top-1.5 grid size-4 place-items-center rounded-full border border-signal bg-background md:left-[6.7rem]",
                "aria-hidden": true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-signal" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hidden md:block absolute left-0 top-1 w-24 text-right font-mono text-sm font-medium text-foreground", children: e.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:hidden font-mono text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2", children: e.year }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-medium tracking-tight", children: [
                e.role,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block sm:inline text-muted-foreground mt-1 sm:mt-0", children: [
                  "· ",
                  e.company
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground leading-relaxed md:text-lg", children: e.description }),
              e.achievements && e.achievements.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 text-sm md:text-base text-muted-foreground", children: e.achievements.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "mt-2 size-1 shrink-0 rounded-full bg-signal/60",
                    "aria-hidden": true
                  }
                ),
                a
              ] }, a)) })
            ] })
          ]
        },
        `${e.year}-${i}`
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        asChild: true,
        variant: "ghost",
        className: "mt-4 px-0 text-signal hover:text-signal hover:bg-transparent",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experience", children: [
          "View full timeline ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 size-4" })
        ] })
      }
    )
  ] });
}
export {
  ExperienceSection
};
