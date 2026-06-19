import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as urlFor, f as faqs, s as sanityClient } from "./router-8Sc-kGY-.mjs";
import { P as PageShell } from "./page-shell-DHZQKWZj.mjs";
import { R as Reveal } from "./reveal-DttH52XM.mjs";
import { p as portraitFallback } from "./portrait-BFomdpTe.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { C as Camera, c as MapPin, Z as Zap, B as Briefcase } from "../_libs/lucide-react.mjs";
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
const renderBlockText = (blocks) => {
  if (!blocks || !blocks.length) return null;
  return blocks.map((block, i) => {
    if (block._type !== "block" || !block.children) return null;
    const text = block.children.map((child) => child.text).join("");
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300 ${text.length > 150 ? "text-justify hyphens-auto" : "text-left"}`, children: text }, block._key || i);
  });
};
function AboutPage() {
  const {
    data: profile,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["personalProfile"],
    queryFn: async () => {
      try {
        const result = await sanityClient.fetch(`*[_type == "personalProfile"][0]{
          fullName,
          headline,
          shortBio,
          longBio,
          profileImage,
          location,
          interests,
          languages,
          careerGoal,
          currentlyLearning,
          projectsSummary
        }`);
        return result;
      } catch (err) {
        console.error("SANITY ERROR", err);
        throw err;
      }
    }
  });
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-prose py-32 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground animate-pulse", children: "Loading profile..." }) });
  }
  if (isError) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-prose py-32 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Failed to load profile." }) });
  }
  const headline = profile?.headline || "Learning, building, and exploring.";
  const shortBioFallback = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-left leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300", children: "I'm JS Mahato, a software engineer from Ranchi. My interest in technology started with curiosity and gradually became a genuine passion for engineering and problem-solving." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300", children: "Most of what I've learned has come from creating real projects, breaking things, fixing them, and continuously improving how I build software. Every project has been an opportunity to learn something new, from designing scalable architectures to writing cleaner code." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300", children: "Today, my focus is on building reliable applications, strengthening my backend knowledge, and exploring cloud technologies and APIs while continuing to grow as an engineer." })
  ] });
  const longBioFallback = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300", children: "My journey into software development began with a simple curiosity about how things are built on the internet." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300", children: "That curiosity led me to start building projects of my own. What began with small scripts gradually evolved into larger applications involving databases, authentication systems, complex APIs, and modern deployment workflows. Each project brought new challenges and taught me something different." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300", children: "One of the things I enjoy most about software engineering is the problem-solving process. Every bug, architectural decision, and feature deployment is an opportunity to improve the system." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-justify hyphens-auto leading-8 max-w-[70ch] text-zinc-600 dark:text-zinc-300", children: "Today, I continue building projects, exploring new technologies, and expanding my understanding of backend systems, cloud infrastructure, and modern software development practices." })
  ] });
  const projectsFallback = [{
    name: "Event Management System",
    description: "A complete event management platform featuring authentication, event creation, attendee management, and database integration."
  }, {
    name: "Photography Portfolio Website",
    description: "A portfolio platform designed to showcase photography work with responsive layouts and optimized media delivery."
  }, {
    name: "XR System",
    description: "A personal full-stack platform focused on portfolio management, blogging, and content publishing."
  }];
  const interestsFallback = ["Software Engineering", "Cloud Computing", "Photography"];
  const languagesFallback = ["English", "Hindi"];
  const learningFallback = ["Cloud Computing", "AWS Fundamentals", "DevOps Concepts", "Deployment & Infrastructure", "Modern Software Engineering Practices"];
  const location = profile?.location || "Ranchi, Jharkhand, India";
  profile?.careerGoal || "Software Engineer / Full Stack Developer";
  const shortBioContent = profile?.shortBio ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: renderBlockText(profile.shortBio) }) : shortBioFallback;
  const longBioContent = profile?.longBio ? renderBlockText(profile.longBio) : longBioFallback;
  const projects = profile?.projectsSummary?.length ? profile.projectsSummary : projectsFallback;
  profile?.interests?.length ? profile.interests : interestsFallback;
  profile?.languages?.length ? profile.languages : languagesFallback;
  const learning = profile?.currentlyLearning?.length ? profile.currentlyLearning : learningFallback;
  const profileImageUrl = profile?.profileImage ? urlFor(profile.profileImage).width(700).height(900).auto("format").url() : portraitFallback;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "About", title: headline, className: "pb-0 sm:pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "order-last md:order-none md:col-span-7 space-y-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 text-pretty", children: shortBioContent }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "The Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4 text-pretty leading-relaxed text-foreground/90", children: longBioContent })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "What I've Built" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-[0_8px_30px_rgb(0,255,128,0.04)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-foreground", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.description })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Beyond Coding" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-xl border border-border/60 bg-card/50 p-6 flex gap-4 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/80 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium leading-relaxed", children: "Photography helps me develop creativity, observation, and patience." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "These qualities directly influence how I approach building software. I also spend time exploring new tools and reading about cloud computing." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Currently Learning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: learning.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full border border-border/60 bg-secondary/30 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground", children: item }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-6", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-foreground font-medium", children: faq.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: faq.answer })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "order-first md:order-none md:col-span-5 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileImageUrl, alt: "Portrait", width: 700, height: 700, loading: "lazy", className: "aspect-[4/4.5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card/50 overflow-hidden divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex gap-3.5 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-muted-foreground mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1", children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/90", children: location })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex gap-3.5 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "size-4 text-muted-foreground mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1", children: "Focus" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-foreground/90 flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cloud Computing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Backend Engineering" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "System Design" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex gap-3.5 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "size-4 text-signal mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground/90", children: "Available for Opportunities" })
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}
export {
  AboutPage as component
};
