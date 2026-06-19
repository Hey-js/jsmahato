import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function PageShell({ eyebrow, title, intro, children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `container-prose py-16 sm:py-24 ${className}`.trim(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl", children: title }),
      intro && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-pretty text-lg leading-relaxed text-muted-foreground", children: intro })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16", children })
  ] });
}
export {
  PageShell as P
};
