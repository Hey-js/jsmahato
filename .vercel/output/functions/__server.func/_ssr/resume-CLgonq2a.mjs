import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell } from "./page-shell-DHZQKWZj.mjs";
import { R as Reveal } from "./reveal-bogDSxbn.mjs";
import { B as Button, a as site, s as sanityClient } from "./router-11xRVUf_.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import "../_libs/sonner.mjs";
import { a as Mail, L as Linkedin, G as Github, D as Download, c as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function useActiveResume() {
  return useQuery({
    queryKey: ["active-resume"],
    queryFn: async () => {
      try {
        const data = await sanityClient.fetch(`*[_type == "siteSettings"][0]{
          "resumeFileUrl": resumeFile.asset->url
        }`);
        return data?.resumeFileUrl ? { file_url: data.resumeFileUrl, label: "Resume" } : null;
      } catch (error) {
        return null;
      }
    },
    staleTime: 6e4
  });
}
const skills = [{
  category: "Frontend",
  items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"]
}, {
  category: "Backend",
  items: ["Node.js", "Express.js", "REST APIs", "Authentication"]
}, {
  category: "Databases",
  items: ["MongoDB", "PostgreSQL"]
}, {
  category: "Cloud & Infrastructure",
  items: ["Deployment", "Cloud Computing", "Monitoring", "Linux Fundamentals"]
}, {
  category: "Tools",
  items: ["Git", "GitHub", "VS Code", "Postman"]
}, {
  category: "Currently Exploring",
  items: ["AWS", "Docker", "System Design", "DevOps Fundamentals"]
}];
const projects = [{
  role: "Founder & Lead Developer",
  company: "XR System",
  period: "Dec 2025 – Present",
  highlights: ["Managed production systems", "Incident and outage resolution", "Cloud deployment and monitoring", "Disaster recovery procedures", "Technical support and customer service", "Team leadership and mentoring"]
}, {
  role: "Team Lead",
  company: "Event Management System",
  period: "Sep 2025 – Jan 2026",
  highlights: ["MERN application development", "JWT authentication", "REST APIs", "Documentation", "Team leadership"]
}, {
  role: "Developer",
  company: "Photography Portfolio Website",
  period: "Dec 2025 – Jan 2026",
  highlights: ["Cloud deployment on Vercel", "Performance optimization", "Responsive web development"]
}];
function ResumePage() {
  const {
    data: resume
  } = useActiveResume();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { eyebrow: "Resume", title: "Jitu Sagar Mahato", intro: "Software Engineer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-mt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "w-full sm:w-auto hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${site.email}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mr-2 size-4" }),
        " Email"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "w-full sm:w-auto hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: site.social.linkedin, target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "mr-2 size-4" }),
        " LinkedIn"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "w-full sm:w-auto hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: site.social.github, target: "_blank", rel: "noreferrer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "mr-2 size-4" }),
        " GitHub"
      ] }) }),
      resume?.file_url ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "w-full sm:w-auto group hover:text-signal hover:border-signal/30 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: resume.file_url, download: "JS-Mahato-Resume.pdf", "aria-label": "Download Resume PDF", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 size-4 transition-transform group-hover:-translate-y-0.5" }),
        " ",
        "Download PDF"
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", disabled: true, className: "w-full sm:w-auto opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 size-4" }),
        " Download PDF"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-12 lg:grid-cols-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-4 space-y-10 lg:sticky lg:top-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground border-b border-border/60 pb-2", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-muted-foreground" }),
              " Ranchi, Jharkhand, India"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 text-muted-foreground" }),
              " ",
              site.email
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 200, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground border-b border-border/60 pb-2", children: "Additional Info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-6 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "Volunteer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Nature Foundation, Ranchi" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "Interests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 flex flex-wrap gap-2", children: ["Cloud Computing", "AI-assisted Development", "System Design", "Photography"].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded border border-border/60 bg-muted/30 px-2 py-1 font-mono text-[10px] uppercase text-muted-foreground", children: i }, i)) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "lg:col-span-8 space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4", children: "Professional Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-5 lg:p-7 shadow-sm flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full max-w-[65ch] text-justify leading-8 tracking-normal text-zinc-300 mb-4", style: {
              hyphens: "auto",
              overflowWrap: "break-word",
              wordBreak: "normal"
            }, children: "Software engineer with experience building full stack applications, backend services, and content-driven platforms. Comfortable working with modern web technologies, APIs, databases, authentication systems, and deployment workflows." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full max-w-[65ch] text-justify leading-8 tracking-normal text-zinc-300", style: {
              hyphens: "auto",
              overflowWrap: "break-word",
              wordBreak: "normal"
            }, children: "Currently expanding my knowledge of backend architecture, cloud technologies, and software engineering practices while seeking opportunities to contribute and grow in a professional environment." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6", children: "Experience & Projects" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-6 sm:pl-8 before:absolute before:inset-y-0 before:left-[3px] before:w-px before:bg-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-2 size-2 rounded-full bg-signal ring-4 ring-background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground mb-1", children: p.period }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-medium tracking-tight text-foreground", children: [
              p.company,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal", children: [
                "— ",
                p.role
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid gap-2 sm:grid-cols-2", children: p.highlights.map((h, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 size-1 shrink-0 rounded-full bg-border", "aria-hidden": true }),
              h
            ] }, j)) })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 200, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4", children: "Technical Skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-foreground text-sm mb-3", children: s.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: s.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground", children: item }, item)) })
          ] }, s.category)) })
        ] })
      ] })
    ] })
  ] });
}
export {
  ResumePage as component
};
