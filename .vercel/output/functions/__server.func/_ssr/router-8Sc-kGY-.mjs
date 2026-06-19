import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { c as createImageUrlBuilder } from "../_libs/sanity__image-url.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-RvM7qVcp.mjs";
import { g as groq } from "../_libs/groq.mjs";
import { X, M as Menu, a as Mail, G as Github, L as Linkedin, C as Camera, I as Instagram, S as Sun, b as Moon } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-compose-refs.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const appCss = "/assets/styles-CLI0sbBb.css";
const ThemeContext = reactExports.createContext(null);
const STORAGE_KEY = "jsm-theme";
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeProvider({ children }) {
  const [theme, setThemeState] = reactExports.useState("dark");
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const initial = getInitialTheme();
    setThemeState(initial);
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);
  const value = {
    theme,
    toggle: () => setThemeState((t) => t === "dark" ? "light" : "dark"),
    setTheme: setThemeState
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const ctx = reactExports.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: toggle,
      "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
      className: "rounded-full",
      children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, {})
    }
  );
}
const site = {
  name: "Jitu Sagar Mahato",
  shortName: "JS Mahato",
  role: "Software Engineer",
  location: "Ranchi, Jharkhand, India",
  email: "jsmahato.official@gmail.com",
  description: "Software Engineer based in Ranchi, India. Building modern web applications, backend systems, and cloud-focused software solutions.",
  url: "https://jsmahato.vercel.app",
  social: {
    github: "https://github.com/Hey-js",
    linkedin: "https://www.linkedin.com/in/jsmahato",
    photography: "https://strangerjs.vercel.app",
    instagram: "https://www.instagram.com/stranger.js"
  }
};
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/photography", label: "Photography" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" }
];
const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/photography", label: "Photography" },
  { to: "/services", label: "Services" },
  { to: "/resume", label: "Resume" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose flex h-16 items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "group flex shrink-0 items-center gap-2 font-mono text-sm font-semibold tracking-tight",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "aria-hidden": true,
                className: "inline-block size-2 rounded-full bg-signal transition-transform group-hover:scale-125"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: site.shortName })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-0.5 lg:flex", "aria-label": "Primary", children: [
        nav.map((item) => {
          const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: item.to,
              className: cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              ),
              children: [
                item.label,
                active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute inset-x-3 -bottom-px h-px bg-signal" })
              ]
            },
            item.to
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 h-5 w-px bg-border", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            "aria-label": open ? "Close menu" : "Open menu",
            "aria-expanded": open,
            "aria-controls": "mobile-nav",
            onClick: () => setOpen((v) => !v),
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {})
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "nav",
      {
        id: "mobile-nav",
        "aria-label": "Mobile",
        className: "border-t border-border/60 lg:hidden animate-in fade-in slide-in-from-top-1",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "container-prose flex flex-col py-2", children: nav.map((item) => {
          const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              className: cn(
                "block rounded-md px-3 py-3 text-base transition-colors",
                active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              ),
              children: item.label
            }
          ) }, item.to);
        }) })
      }
    )
  ] });
}
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const half = Math.ceil(footerLinks.length / 2);
  const colA = footerLinks.slice(0, half);
  const colB = footerLinks.slice(half);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-20 md:mt-24 border-t border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose grid gap-12 py-12 md:grid-cols-12 md:gap-8 md:py-14 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-mono text-sm font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "mr-2 inline-block size-2 translate-y-[-1px] rounded-full bg-signal",
              "aria-hidden": true
            }
          ),
          site.shortName,
          " | ",
          site.role
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground", children: "From code to camera, I enjoy building things that solve problems and tell stories. Currently focused on software engineering, cloud computing, and modern web development." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Mobile Footer Navigation", className: "md:hidden text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 grid grid-cols-2 gap-x-8 gap-y-4 text-left", children: footerLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.to,
            className: "block py-1 text-foreground/90 whitespace-nowrap transition-colors hover:text-signal",
            children: l.label
          }
        ) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          "aria-label": "Footer Navigation",
          className: "hidden md:grid grid-cols-2 gap-8 text-sm md:col-span-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Explore" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: colA.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  className: "text-foreground/90 transition-colors hover:text-signal",
                  children: l.label
                }
              ) }, l.to)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "More" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: colB.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  className: "text-foreground/90 transition-colors hover:text-signal",
                  children: l.label
                }
              ) }, l.to)) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `mailto:${site.email}`,
              className: "inline-flex items-center gap-2.5 transition-colors hover:text-signal",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-all", children: site.email })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-muted-foreground", children: site.location })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4", children: "Socials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2.5 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: site.social.github,
                target: "_blank",
                rel: "noreferrer noopener",
                "aria-label": "GitHub",
                title: "GitHub",
                className: "flex size-9 items-center justify-center rounded-md bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: site.social.linkedin,
                target: "_blank",
                rel: "noreferrer noopener",
                "aria-label": "LinkedIn",
                title: "LinkedIn",
                className: "flex size-9 items-center justify-center rounded-md bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: site.social.photography,
                target: "_blank",
                rel: "noreferrer noopener",
                "aria-label": "Photography Portfolio",
                title: "Photography",
                className: "flex size-9 items-center justify-center rounded-md bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: site.social.instagram,
                target: "_blank",
                rel: "noreferrer noopener",
                "aria-label": "Instagram",
                title: "Instagram",
                className: "flex size-9 items-center justify-center rounded-md bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-4" })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 bg-secondary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose flex flex-col items-center justify-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left md:py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-[280px] text-sm leading-relaxed text-muted-foreground sm:max-w-sm", children: [
        "Built in Ranchi.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "sm:hidden" }),
        "Learning, building, and improving one project at a time."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 shrink-0 text-sm font-medium text-muted-foreground sm:mt-0", children: [
        "© ",
        year,
        " ",
        site.shortName
      ] })
    ] }) })
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function getSeoMeta(title, description, image, path) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const desc = description || site.description;
  const imgUrl = image || site.url + "/og-image.png";
  const ogDesc = description || "Software Engineer building web applications, backend services, and content-driven platforms while exploring cloud technologies and modern software engineering practices.";
  const meta = [
    { title: fullTitle },
    { name: "description", content: desc },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: ogDesc },
    { property: "og:url", content: path ? `${site.url}${path}` : site.url },
    { property: "og:image", content: imgUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: ogDesc },
    { name: "twitter:image", content: imgUrl }
  ];
  return meta;
}
function getCanonicalLink(path) {
  const formattedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = formattedPath === "/" ? site.url : `${site.url}${formattedPath}`;
  return { rel: "canonical", href: canonicalUrl };
}
function getGlobalJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jitu Sagar Mahato",
      alternateName: "JS Mahato",
      jobTitle: "Software Engineer",
      email: "jsmahato.official@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India"
      },
      url: "https://jsmahato.vercel.app",
      sameAs: [site.social.github, site.social.linkedin, site.social.photography]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description
    }
  ];
}
function getBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
function getArticleJsonLd(article) {
  const articleUrl = `${site.url}/blog/${article.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      image: article.image ? [article.image] : [],
      datePublished: article.datePublished || (/* @__PURE__ */ new Date()).toISOString(),
      author: [
        {
          "@type": "Person",
          name: article.authorName || site.name,
          url: site.url
        }
      ],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": articleUrl
      }
    },
    getBreadcrumbJsonLd([
      { name: "Home", url: site.url },
      { name: "Blog", url: `${site.url}/blog` },
      { name: article.title, url: articleUrl }
    ])
  ];
}
function getFaqJsonLd(faqs2) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs2.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[80vh] items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Error 404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-6xl font-semibold tracking-tight", children: "Not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Back home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[80vh] items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-destructive", children: "Something broke" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-3xl font-semibold tracking-tight", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "An unexpected error occurred. Try again, or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "google-site-verification", content: "uaeOkTqfXuuIl8-WntVliTWFZGtmjo-0HXTFUhXZbnU" },
      { title: `${site.name} | ${site.role}` },
      { name: "description", content: site.description },
      { name: "author", content: site.name },
      {
        name: "keywords",
        content: "Jitu Sagar Mahato, JS Mahato, Software Engineer, Backend Developer, Cloud Computing, React, Node.js, MongoDB, Full Stack Development"
      },
      { property: "og:site_name", content: site.shortName },
      { property: "og:title", content: `${site.name} | ${site.role}` },
      {
        property: "og:description",
        content: "Software Engineer building web applications, backend services, and content-driven platforms while exploring cloud technologies and modern software engineering practices."
      },
      { property: "og:url", content: site.url },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${site.name} | ${site.role}` },
      {
        name: "twitter:description",
        content: "Software Engineer building web applications, backend services, and content-driven platforms while exploring cloud technologies and modern software engineering practices."
      },
      { name: "twitter:image", content: `${site.url}/og-image.png` }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://rsms.me/" },
      { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(getGlobalJsonLd())
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  const themeBootstrap = `(() => { try { const s = localStorage.getItem('jsm-theme'); const m = window.matchMedia('(prefers-color-scheme: dark)').matches; const t = s ?? (m ? 'dark' : 'light'); if (t === 'dark') document.documentElement.classList.add('dark'); document.documentElement.style.colorScheme = t; } catch (_) {} })();`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "google-site-verification", content: "uaeOkTqfXuuIl8-WntVliTWFZGtmjo-0HXTFUhXZbnU" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { dangerouslySetInnerHTML: { __html: themeBootstrap } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "min-h-dvh antialiased", children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#main",
        className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground",
        children: "Skip to content"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-dvh flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { id: "main", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] }) });
}
const $$splitComponentImporter$c = () => import("./skills-CN_mHpCl.mjs");
const Route$e = createFileRoute("/skills")({
  head: () => ({
    meta: [{
      title: `Skills | ${site.name}`
    }, {
      name: "description",
      content: "Languages, frameworks, databases, and tools."
    }, {
      property: "og:title",
      content: `Skills | ${site.name}`
    }, {
      property: "og:description",
      content: "The full working toolkit: frontend, backend, and tooling."
    }, {
      property: "og:url",
      content: "/skills"
    }],
    links: [getCanonicalLink("/skills")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumbJsonLd([{
        name: "Home",
        url: site.url
      }, {
        name: "Skills",
        url: `${site.url}/skills`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const fetchSanity = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("8f5c6d438bb42d34f78a3d40aabd00c8600598a6e046d3ca5d9b0eff21ab1c02"));
const builder = createImageUrlBuilder({
  projectId: "91nt6co0",
  dataset: "production"
});
const sanityClient = {
  fetch: async (query, params) => {
    return await fetchSanity({ data: { query, params } });
  }
};
function urlFor(source) {
  return builder.image(source);
}
const BASE_URL = site.url;
const Route$d = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = (/* @__PURE__ */ new Date()).toISOString();
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/skills", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/experience", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/projects", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/photography", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/services", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/resume", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: today },
          { path: "/contact", changefreq: "yearly", priority: "0.6", lastmod: today }
        ];
        try {
          const projects = await sanityClient.fetch(
            groq`*[_type == "project"]{ "slug": slug.current }`
          );
          const posts = await sanityClient.fetch(groq`*[_type == "post"]{ "slug": slug.current }`);
          projects.forEach((p) => {
            if (p.slug)
              entries.push({ path: `/projects/${p.slug}`, changefreq: "monthly", priority: "0.8", lastmod: today });
          });
          posts.forEach((p) => {
            if (p.slug)
              entries.push({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.7", lastmod: today });
          });
        } catch (error) {
          console.error("Failed to fetch dynamic sitemap entries from Sanity", error);
        }
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$b = () => import("./services-kRYvslvz.mjs");
const Route$c = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: `Expertise | ${site.name}`
    }, {
      name: "description",
      content: "Specialized engineering skills including frontend architecture, backend systems, and cloud deployment."
    }, {
      property: "og:title",
      content: `Expertise | ${site.name}`
    }, {
      property: "og:description",
      content: "Specialized engineering skills including frontend architecture, backend systems, and cloud deployment."
    }],
    links: [getCanonicalLink("/services")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumbJsonLd([{
        name: "Home",
        url: site.url
      }, {
        name: "Expertise",
        url: `${site.url}/services`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./resume-CKIMzv3U.mjs");
const Route$b = createFileRoute("/resume")({
  head: () => ({
    meta: [{
      title: `Resume | ${site.name}`
    }, {
      name: "description",
      content: `Curriculum Vitae for ${site.name}.`
    }],
    links: [getCanonicalLink("/resume")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumbJsonLd([{
        name: "Home",
        url: site.url
      }, {
        name: "Resume",
        url: `${site.url}/resume`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./privacy-policy-C2Y_y4fJ.mjs");
const Route$a = createFileRoute("/privacy-policy")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./photography-Bl_c4zWd.mjs");
const Route$9 = createFileRoute("/photography")({
  head: () => ({
    meta: [{
      title: `Photography | ${site.name}`
    }, {
      name: "description",
      content: "A visual gateway to my dedicated photography portfolio."
    }],
    links: [getCanonicalLink("/photography")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumbJsonLd([{
        name: "Home",
        url: site.url
      }, {
        name: "Photography",
        url: `${site.url}/photography`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const Route$8 = createFileRoute("/googlefa88608dab7316f3.html")({
  server: {
    handlers: {
      GET: async () => {
        return new Response("google-site-verification: googlefa88608dab7316f3.html", {
          headers: {
            "Content-Type": "text/html",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$7 = () => import("./experience-Dv2RmbMO.mjs");
const Route$7 = createFileRoute("/experience")({
  head: () => ({
    meta: [{
      title: `Experience | ${site.name}`
    }, {
      name: "description",
      content: "Professional experience and technical background."
    }, {
      property: "og:title",
      content: `Experience | ${site.name}`
    }, {
      property: "og:description",
      content: "Professional experience and technical background."
    }],
    links: [getCanonicalLink("/experience")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumbJsonLd([{
        name: "Home",
        url: site.url
      }, {
        name: "Experience",
        url: `${site.url}/experience`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contact-Bbj9_LDo.mjs");
const Route$6 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: `Contact | ${site.name}`
    }, {
      name: "description",
      content: `Get in touch with ${site.name} about freelance, consulting, or full-time engineering work.`
    }, {
      property: "og:title",
      content: `Contact | ${site.name}`
    }, {
      property: "og:description",
      content: `Get in touch about freelance, consulting, or full-time work.`
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [getCanonicalLink("/contact")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumbJsonLd([{
        name: "Home",
        url: site.url
      }, {
        name: "Contact",
        url: `${site.url}/contact`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const faqs = [{
  question: "Who is Jitu Sagar Mahato?",
  answer: "Jitu Sagar Mahato (JS Mahato) is a Software Engineer based in Ranchi, Jharkhand. He specializes in building modern web applications, backend systems, and exploring cloud technologies."
}, {
  question: "What technologies does JS Mahato work with?",
  answer: "JS Mahato works primarily with JavaScript, TypeScript, React, Node.js, Express, MongoDB, PostgreSQL, and is currently learning AWS and Cloud infrastructure."
}, {
  question: "What projects has JS Mahato built?",
  answer: "He has built several full-stack applications including an Event Management System, a Photography Portfolio platform, and XR System (a scalable personal portfolio and blogging platform)."
}, {
  question: "Is JS Mahato available for software engineering opportunities?",
  answer: "Yes, JS Mahato is actively seeking full-time Software Engineering, Backend Engineering, and Cloud Engineering roles."
}, {
  question: "What is JS Mahato currently learning?",
  answer: "He is currently focused on Cloud Computing (AWS), System Design, Backend Architecture, and Data Structures & Algorithms."
}];
const $$splitComponentImporter$5 = () => import("./about-CQzCuSkg.mjs");
const Route$5 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: `About | ${site.name}`
    }, {
      name: "description",
      content: `Learn more about Jitu Sagar Mahato, a Software Engineer and Backend Developer based in Ranchi, Jharkhand, India.`
    }, {
      property: "og:title",
      content: `About | ${site.name}`
    }, {
      property: "og:description",
      content: `Background and software engineering journey of Jitu Sagar Mahato.`
    }, {
      property: "og:url",
      content: `${site.url}/about`
    }, {
      property: "og:image",
      content: `${site.url}/og-image.png`
    }],
    links: [getCanonicalLink("/about")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumbJsonLd([{
        name: "Home",
        url: site.url
      }, {
        name: "About",
        url: `${site.url}/about`
      }]))
    }, {
      type: "application/ld+json",
      children: JSON.stringify(getFaqJsonLd(faqs))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-DIgcsIlc.mjs");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Jitu Sagar Mahato (JS Mahato) | Software Engineer"
    }, {
      name: "description",
      content: "Software engineer based in Ranchi, India. Building modern web applications, backend systems, and cloud-focused software solutions."
    }, {
      property: "og:title",
      content: "Jitu Sagar Mahato (JS Mahato) | Software Engineer"
    }, {
      property: "og:description",
      content: "Software engineer based in Ranchi, India. Building modern web applications, backend systems, and cloud-focused software solutions."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [getCanonicalLink("/")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumbJsonLd([{
        name: "Home",
        url: site.url
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-U8WT97CS.mjs");
const Route$3 = createFileRoute("/projects/")({
  head: () => ({
    meta: [{
      title: `Projects | ${site.name}`
    }, {
      name: "description",
      content: "Selected engineering work by Jitu Sagar Mahato: MERN, Next.js, SaaS, e-commerce, and tooling."
    }, {
      property: "og:title",
      content: `Projects | ${site.name}`
    }, {
      property: "og:description",
      content: "Selected engineering work by Jitu Sagar Mahato: MERN, Next.js, SaaS, e-commerce, and tooling."
    }, {
      property: "og:url",
      content: `${site.url}/projects`
    }],
    links: [getCanonicalLink("/projects")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumbJsonLd([{
        name: "Home",
        url: site.url
      }, {
        name: "Projects",
        url: `${site.url}/projects`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DmfUFVJx.mjs");
const Route$2 = createFileRoute("/blog/")({
  head: () => ({
    meta: [{
      title: `Blog | ${site.name}`
    }, {
      name: "description",
      content: "Thoughts on engineering, problem-solving, and personal projects."
    }, {
      property: "og:title",
      content: `Blog | ${site.name}`
    }, {
      property: "og:description",
      content: "Thoughts on engineering, problem-solving, and personal projects."
    }],
    links: [getCanonicalLink("/blog")],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(getBreadcrumbJsonLd([{
        name: "Home",
        url: site.url
      }, {
        name: "Blog",
        url: `${site.url}/blog`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./projects_._slug-peC1cV4D.mjs");
const Route$1 = createFileRoute("/projects_/$slug")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  loader: async ({
    context,
    params: {
      slug
    }
  }) => {
    const [project, allProjects] = await Promise.all([context.queryClient.ensureQueryData({
      queryKey: ["project", slug],
      queryFn: async () => {
        return await sanityClient.fetch(groq`*[_type == "project" && slug.current == $slug][0]`, {
          slug
        });
      }
    }), context.queryClient.ensureQueryData({
      queryKey: ["projects"],
      queryFn: async () => {
        return await sanityClient.fetch(groq`*[_type == "project"] | order(sortOrder asc) {
              _id, title, "slug": slug.current, description, coverImage, screenshots
            }`);
      }
    })]);
    return {
      slug,
      project
    };
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData?.project) return {};
    const {
      project,
      slug
    } = loaderData;
    const coverImageObj = project.coverImage || project.screenshots && project.screenshots[0] || void 0;
    const coverImage = coverImageObj ? urlFor(coverImageObj).url() : void 0;
    const currentUrl = `${site.url}/projects/${slug}`;
    return {
      meta: getSeoMeta(project.title, project.description, coverImage),
      links: [getCanonicalLink(`/projects/${slug}`)],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["CreativeWork", "SoftwareApplication"],
          name: project.title,
          description: project.description,
          image: coverImage,
          url: project.liveUrl || currentUrl,
          author: {
            "@type": "Person",
            name: site.name,
            url: site.url
          },
          applicationCategory: "WebApplication",
          operatingSystem: "Any",
          keywords: project.technologies ? project.technologies.join(", ") : void 0
        })
      }, {
        type: "application/ld+json",
        children: JSON.stringify(getBreadcrumbJsonLd([{
          name: "Home",
          url: site.url
        }, {
          name: "Projects",
          url: `${site.url}/projects`
        }, {
          name: project.title,
          url: currentUrl
        }]))
      }]
    };
  }
});
const $$splitComponentImporter = () => import("./blog_._slug-DGXAI3wO.mjs");
const Route = createFileRoute("/blog_/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async ({
    context,
    params: {
      slug
    }
  }) => {
    const post = await context.queryClient.ensureQueryData({
      queryKey: ["blog", slug],
      queryFn: async () => {
        const {
          data
        } = {
          data: await sanityClient.fetch(`*[_type == "post" && slug.current == "${slug}"][0]`)
        };
        return data;
      }
    });
    return {
      slug,
      post
    };
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData?.post) return {};
    const {
      post,
      slug
    } = loaderData;
    return {
      meta: getSeoMeta(post.title, post.excerpt, post.coverImage),
      links: [getCanonicalLink(`/blog/${slug}`)],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify(getArticleJsonLd({
          title: post.title,
          description: post.excerpt,
          image: post.coverImage,
          datePublished: post.createdAt,
          slug: post.slug
        }))
      }]
    };
  }
});
const SkillsRoute = Route$e.update({
  id: "/skills",
  path: "/skills",
  getParentRoute: () => Route$f
});
const SitemapDotxmlRoute = Route$d.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$f
});
const ServicesRoute = Route$c.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$f
});
const ResumeRoute = Route$b.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$f
});
const PrivacyPolicyRoute = Route$a.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$f
});
const PhotographyRoute = Route$9.update({
  id: "/photography",
  path: "/photography",
  getParentRoute: () => Route$f
});
const Googlefa88608dab7316f3DothtmlRoute = Route$8.update({
  id: "/googlefa88608dab7316f3.html",
  path: "/googlefa88608dab7316f3.html",
  getParentRoute: () => Route$f
});
const ExperienceRoute = Route$7.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => Route$f
});
const ContactRoute = Route$6.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$f
});
const AboutRoute = Route$5.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$f
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const ProjectsIndexRoute = Route$3.update({
  id: "/projects/",
  path: "/projects/",
  getParentRoute: () => Route$f
});
const BlogIndexRoute = Route$2.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$f
});
const ProjectsSlugRoute = Route$1.update({
  id: "/projects_/$slug",
  path: "/projects/$slug",
  getParentRoute: () => Route$f
});
const BlogSlugRoute = Route.update({
  id: "/blog_/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$f
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ExperienceRoute,
  Googlefa88608dab7316f3DothtmlRoute,
  PhotographyRoute,
  PrivacyPolicyRoute,
  ResumeRoute,
  ServicesRoute,
  SitemapDotxmlRoute,
  SkillsRoute,
  BlogSlugRoute,
  ProjectsSlugRoute,
  BlogIndexRoute,
  ProjectsIndexRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  });
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Route$1 as R,
  site as a,
  fetchSanity as b,
  cn as c,
  Route as d,
  faqs as f,
  router as r,
  sanityClient as s,
  urlFor as u
};
