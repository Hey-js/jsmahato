import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as urlFor, s as sanityClient } from "./router-8Sc-kGY-.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { R as Reveal } from "./reveal-DttH52XM.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { i as Image, h as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "util";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/groq.mjs";
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
export {
  PhotographySection
};
