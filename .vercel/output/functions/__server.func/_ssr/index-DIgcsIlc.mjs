import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as site, u as urlFor, b as fetchSanity } from "./router-8Sc-kGY-.mjs";
import { p as portraitFallback } from "./portrait-BFomdpTe.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { D as Download, d as FileText, B as Briefcase, G as Github, L as Linkedin, a as Mail } from "../_libs/lucide-react.mjs";
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
function HeroSection() {
  const {
    data: settings,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["siteSettings"],
    queryFn: async () => {
      try {
        const result = await fetchSanity({ data: { query: `*[_type == "siteSettings"][0]{
          heroTitle,
          heroSubtitle,
          description,
          availabilityText,
          profileImage,
          "resumeFileUrl": resumeFile.asset->url,
          linkedinUrl,
          githubUrl,
          email
        }` } });
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
const AboutSection = reactExports.lazy(() => import("./about-section-B3TILMOy.mjs").then((m) => ({
  default: m.AboutSection
})));
const SkillsSection = reactExports.lazy(() => import("./skills-section-CW_CWsd0.mjs").then((m) => ({
  default: m.SkillsSection
})));
const ExperienceSection = reactExports.lazy(() => import("./experience-section-3pNh9OgU.mjs").then((m) => ({
  default: m.ExperienceSection
})));
const ProjectsSection = reactExports.lazy(() => import("./projects-section-C7VLUPEi.mjs").then((m) => ({
  default: m.ProjectsSection
})));
const PhotographySection = reactExports.lazy(() => import("./photography-section-4ZsVoxSn.mjs").then((m) => ({
  default: m.PhotographySection
})));
const OpportunitiesSection = reactExports.lazy(() => import("./opportunities-section-UAZ_ftOz.mjs").then((m) => ({
  default: m.OpportunitiesSection
})));
const LearningSection = reactExports.lazy(() => import("./learning-section-BwYulV5X.mjs").then((m) => ({
  default: m.LearningSection
})));
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20" }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExperienceSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OpportunitiesSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LearningSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PhotographySection, {})
    ] })
  ] });
}
export {
  Home as component
};
