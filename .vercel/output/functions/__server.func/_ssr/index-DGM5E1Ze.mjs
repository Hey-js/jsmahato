import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as site, u as urlFor, B as Button, s as sanityClient } from "./router-11xRVUf_.mjs";
import { p as portraitFallback } from "./portrait-BFomdpTe.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { R as Reveal } from "./reveal-bogDSxbn.mjs";
import { g as groq } from "../_libs/groq.mjs";
import "../_libs/sonner.mjs";
import { D as Download, d as FileText, B as Briefcase, G as Github, L as Linkedin, a as Mail, e as ArrowRight, c as MapPin, T as Target, A as ArrowUpRight, f as GraduationCap, g as Code, h as Cloud, i as Server, j as Braces, k as Image } from "../_libs/lucide-react.mjs";
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
function HeroSection() {
  const {
    data: settings,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      try {
        const result = await sanityClient.fetch(`*[_type == "siteSettings"][0]{
          heroTitle,
          heroSubtitle,
          description,
          availabilityText,
          profileImage,
          "resumeFileUrl": resumeFile.asset->url,
          linkedinUrl,
          githubUrl,
          email
        }`);
        console.log("Sanity Hero Query Result:", result);
        return result;
      } catch (err) {
        console.error("SANITY ERROR", err);
        throw err;
      }
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true
  });
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden border-b border-border/60 flex items-center justify-center py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground animate-pulse", children: "Loading profile..." }) });
  }
  if (isError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden border-b border-border/60 flex items-center justify-center py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Failed to load profile settings." }) });
  }
  const headline = settings?.heroTitle || "JS Mahato";
  const subheadline = settings?.heroSubtitle || "Software Engineer";
  const description = settings?.description || "I enjoy building web applications, backend services, and content-driven platforms. Most of my learning has come from creating projects, solving problems, and continuously improving how I build software.\n\nI'm currently exploring backend systems, cloud technologies, and modern deployment workflows while looking for opportunities to grow as an engineer.";
  const availabilityText = settings?.availabilityText || "Open to Opportunities";
  const githubUrl = settings?.githubUrl || site.social.github;
  const linkedinUrl = settings?.linkedinUrl || site.social.linkedin;
  const emailContact = settings?.email ? `mailto:${settings.email}` : "/contact";
  const profileImageUrl = settings?.profileImage ? urlFor(settings.profileImage).width(600).height(700).auto("format").url() : portraitFallback;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 grid-lines opacity-[0.04]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose relative grid gap-12 py-20 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "mr-2 inline-block size-1.5 shrink-0 animate-pulse rounded-full bg-signal",
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: availabilityText })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "sr-only", children: "Jitu Sagar Mahato — Software Engineer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": "true", className: "mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[72px] lg:leading-[1.05]", children: [
          headline,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-signal", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-mono text-sm uppercase tracking-wider text-foreground/80 sm:text-base md:text-lg md:tracking-widest", children: subheadline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 max-w-[65ch] text-base leading-relaxed md:leading-8 text-muted-foreground/80 md:text-lg space-y-4", children: description.split(/\n+/).filter(Boolean).map((paragraph, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: paragraph.length > 150 ? "text-justify hyphens-auto" : "text-left",
            children: paragraph
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4", children: [
          settings?.resumeFileUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: settings.resumeFileUrl,
              download: "JS-Mahato-Resume.pdf",
              className: "group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-signal/20 bg-gradient-to-b from-card/80 to-signal/5 px-8 py-4 text-base font-medium text-foreground shadow-[0_0_30px_rgba(34,197,94,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] hover:border-signal/50 hover:shadow-[0_0_45px_rgba(34,197,94,0.25)] hover:from-card hover:to-signal/10 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-background",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-signal" }),
                  "Get Resume PDF"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-signal transition-colors duration-300 group-hover:bg-signal/20", children: "PDF" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/resume",
              className: "group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-signal/20 bg-gradient-to-b from-card/80 to-signal/5 px-8 py-4 text-base font-medium text-foreground shadow-[0_0_30px_rgba(34,197,94,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] hover:border-signal/50 hover:shadow-[0_0_45px_rgba(34,197,94,0.25)] hover:from-card hover:to-signal/10 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-background",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-5 transition-transform duration-300 group-hover:scale-105 group-hover:text-signal" }),
                  "View Resume"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-signal transition-colors duration-300 group-hover:bg-signal/20", children: "PDF" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/projects",
              className: "group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-signal/20 bg-gradient-to-b from-card/80 to-signal/5 px-8 py-4 text-base font-medium text-foreground shadow-[0_0_30px_rgba(34,197,94,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] hover:border-signal/50 hover:shadow-[0_0_45px_rgba(34,197,94,0.25)] hover:from-card hover:to-signal/10 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-background",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "size-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-signal" }),
                "View Projects"
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: githubUrl,
              target: "_blank",
              rel: "noreferrer noopener",
              "aria-label": "GitHub",
              className: "rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: linkedinUrl,
              target: "_blank",
              rel: "noreferrer noopener",
              "aria-label": "LinkedIn",
              className: "rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "size-5" })
            }
          ),
          settings?.email ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: emailContact,
              "aria-label": "Email Me",
              className: "rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5" })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              "aria-label": "Contact Me",
              className: "rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/blog",
              "aria-label": "Blog",
              className: "rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "md:col-span-4 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border/60 w-full max-w-sm md:max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: profileImageUrl,
          alt: `Portrait of ${headline}`,
          width: 600,
          height: 700,
          className: "aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
        }
      ) }) })
    ] })
  ] });
}
function SectionHeading({ eyebrow, title, description, id }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { id, className: "mb-10 max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "mr-2 inline-block size-1.5 translate-y-[-2px] rounded-full bg-signal",
          "aria-hidden": true
        }
      ),
      eyebrow
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-balance text-3xl font-semibold tracking-tight md:text-[40px] md:leading-[1.1]", children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg", children: description })
  ] });
}
function AboutSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "container-prose py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "About",
        title: "Engineer first. Builder always.",
        description: "Hi, I'm JS Mahato."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-10 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 space-y-6 text-muted-foreground text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify hyphens-auto leading-relaxed md:leading-8 max-w-[65ch]", children: "I'm a software engineer based in Ranchi who enjoys building things for the web. Most of what I've learned has come from creating real projects, solving problems, and continuously improving how I build software." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify hyphens-auto leading-relaxed md:leading-8 max-w-[65ch]", children: "Over the years, I've worked on full stack applications, backend services, portfolio platforms, and content-driven websites. I enjoy taking a problem-solving approach to engineering, focusing on how everything fits together behind the scenes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify hyphens-auto leading-relaxed md:leading-8 max-w-[65ch]", children: "These days, my focus is on building reliable applications, strengthening my backend knowledge, working with APIs, and exploring cloud technologies and modern deployment workflows." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            variant: "ghost",
            className: "px-0 text-signal hover:text-signal hover:bg-transparent",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", children: [
              "Read the full story ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 size-4" })
            ] })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card/50 overflow-hidden divide-y divide-border/60 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5 text-muted-foreground mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1", children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-foreground", children: "Ranchi, Jharkhand, India" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "size-5 text-muted-foreground mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1", children: "Current Focus" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-foreground", children: "Cloud Computing & System Design" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "size-5 text-signal mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1", children: "Availability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center text-sm font-medium text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "mr-2 size-1.5 rounded-full bg-signal animate-pulse",
                  "aria-hidden": true
                }
              ),
              "Available for new roles"
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
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
function ProjectsSection() {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["featured-projects"],
    queryFn: async () => {
      const result = await sanityClient.fetch(
        groq`*[_type == "project" && featured == true] | order(sortOrder asc) [0...3] {
          _id, title, "slug": { "current": slug.current }, description, technologies, githubUrl, liveUrl
        }`
      );
      result.forEach((project) => {
        console.log({
          title: project.title,
          github: project.githubUrl,
          live: project.liveUrl
        });
      });
      return result;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/60 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Featured projects",
          title: "Things I've built recently.",
          description: "A selection of full-stack applications and systems I've designed and developed."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/projects",
          className: "hidden shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-signal sm:inline-flex",
          children: "All projects →"
        }
      )
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-muted-foreground", children: "Loading featured projects..." }) : !projects.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-muted-foreground", children: "No featured projects found." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-12 grid gap-6 md:grid-cols-3", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-signal/60 hover:shadow-[0_0_20px_rgba(var(--signal),0.1)] focus-within:ring-2 focus-within:ring-signal focus-within:ring-offset-2 focus-within:ring-offset-background overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between z-10 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground", children: "Full Stack Developer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          p.githubUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: p.githubUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "relative z-20 text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-4 transition-colors group-hover:text-signal" })
            }
          ),
          p.liveUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: p.liveUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "relative z-20 text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 transition-colors group-hover:text-signal" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-medium tracking-tight group-hover:text-signal transition-colors relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: `/projects/$slug`,
          params: { slug: p.slug.current },
          className: "focus:outline-none before:absolute before:inset-0 before:z-10",
          children: p.title
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 flex-1 text-sm text-muted-foreground leading-relaxed", children: p.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex flex-wrap gap-1.5 z-10 relative", children: (p.technologies || []).slice(0, 4).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "li",
        {
          className: "rounded border border-border/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
          children: s
        },
        s
      )) })
    ] }) }, p._id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        asChild: true,
        variant: "ghost",
        className: "mt-8 px-0 text-signal hover:text-signal hover:bg-transparent sm:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", children: [
          "All projects ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 size-4" })
        ] })
      }
    )
  ] }) });
}
function PhotographySection() {
  const { data: photos = [], isLoading } = useQuery({
    queryKey: ["featuredPhotographyPreview"],
    queryFn: async () => {
      const data = await sanityClient.fetch(`*[_type == "featuredPhotography"] | order(order asc)`);
      return data;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border/60 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-signal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "size-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Photography" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-semibold tracking-tight sm:text-4xl", children: "Beyond The Code." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 max-w-2xl text-lg text-muted-foreground", children: [
        "Not everything worth exploring lives on a screen. Some stories are found on winding roads, quiet streets, and in the spaces between destinations.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "A small selection below."
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-12 text-sm text-muted-foreground", children: "Loading gallery preview..." }) : photos.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 py-10 border border-dashed border-border/60 rounded-xl text-center text-muted-foreground text-sm", children: "Photography portfolio coming soon." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 relative -mx-4 px-4 sm:mx-0 sm:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex snap-x snap-mandatory overflow-x-auto pb-6 gap-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: photos.slice(0, 3).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Reveal,
      {
        as: "li",
        delay: i * 100,
        className: "group relative w-[85vw] shrink-0 snap-center sm:w-auto aspect-[4/5] sm:aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-muted",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/photography",
              className: "absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal",
              "aria-label": `View ${p.title} on Photography page`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.image ? urlFor(p.image).width(800).url() : "",
              alt: p.title || "Photography preview",
              loading: "lazy",
              className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" })
        ]
      },
      p._id
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, className: "mt-8 flex sm:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/photography",
        className: "group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-foreground transition-colors hover:text-signal",
        children: [
          "View Photography",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
        ]
      }
    ) })
  ] }) });
}
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
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExperienceSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OpportunitiesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LearningSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PhotographySection, {})
  ] });
}
export {
  Home as component
};
