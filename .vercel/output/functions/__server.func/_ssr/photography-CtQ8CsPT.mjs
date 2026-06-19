import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell } from "./page-shell-DHZQKWZj.mjs";
import { R as Reveal } from "./reveal-Cv3w7mdv.mjs";
import { u as urlFor, B as Button, s as sanityClient } from "./router-DjaYn16m.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as groq } from "../_libs/groq.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
function PhotographyPage() {
  const {
    data: featuredPhotos = [],
    isLoading
  } = useQuery({
    queryKey: ["featuredPhotography"],
    queryFn: async () => {
      const result = await sanityClient.fetch(groq`*[_type == "featuredPhotography"] | order(order asc)`);
      return result;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { eyebrow: "PHOTOGRAPHY", title: "A different lens.", intro: "Photography is where I slow down and pay attention to details. Outside of software, I enjoy documenting places, people, and everyday moments.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 max-w-6xl mx-auto", children: [
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-muted-foreground py-20", children: "Loading photography..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative -mx-4 px-4 sm:mx-0 sm:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex snap-x snap-mandatory overflow-x-auto pb-8 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: featuredPhotos.map((photo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", delay: i * 100, className: "w-[85vw] shrink-0 snap-center sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://strangerjs.vercel.app", target: "_blank", rel: "noopener noreferrer", className: "group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-background", children: [
      photo.image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: urlFor(photo.image).width(800).url(), alt: photo.title || "Featured Photography", loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold tracking-tight text-white mb-4 drop-shadow-md opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0", children: photo.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "translate-y-4 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-signal", children: [
          "View Full Collection ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
        ] }) })
      ] })
    ] }) }, photo._id || i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 300, className: "mt-16 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium tracking-tight sm:text-2xl text-foreground", children: "View the complete collection on StrangerJS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm tracking-widest text-muted-foreground uppercase font-mono", children: "Street • Travel • Documentary • Cinematic" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "mt-8 rounded-full px-8 transition-transform hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://strangerjs.vercel.app", target: "_blank", rel: "noopener noreferrer", children: [
        "Explore Photography Portfolio ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-2 size-4" })
      ] }) })
    ] })
  ] }) });
}
export {
  PhotographyPage as component
};
