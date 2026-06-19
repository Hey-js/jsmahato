import { j as jsxRuntimeExports } from "../_libs/react.mjs";
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
export {
  SectionHeading as S
};
