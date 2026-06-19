import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as PageShell } from "./page-shell-DHZQKWZj.mjs";
import { a as site, B as Button, c as cn } from "./router-DjaYn16m.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { a as Mail, c as MapPin, G as Github, L as Linkedin } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "util";
import "crypto";
import "stream";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
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
import "../_libs/radix-ui__react-primitive.mjs";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function ContactPage() {
  const [busy, setBusy] = reactExports.useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim() || null,
      message: String(fd.get("message") ?? "").trim()
    };
    const submitData = {
      access_key: "3f59852e-d17b-462e-ac36-f94a3fba54de",
      name: payload.name,
      email: payload.email,
      subject: payload.subject || "New Portfolio Contact Form Submission",
      message: payload.message
    };
    console.log("--- Web3Forms Debug ---");
    console.log("Environment variable VITE_WEB3FORMS_ACCESS_KEY:", "3f59852e-d17b-462e-ac36-f94a3fba54de");
    console.log("Exact payload being sent:", submitData);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submitData)
      });
      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
        console.log("Web3Forms Raw JSON Response:", result);
      } catch (parseError) {
        console.error("Web3Forms Raw Text Response (Not JSON):", responseText);
        throw new Error("Web3Forms returned a non-JSON response. See console for details.");
      }
      if (!response.ok || !result.success) {
        console.error("Web3Forms Error Captured:", result.message || "Unknown Error");
        throw new Error(result.message || "Submission failed");
      }
      toast.success("Message sent successfully.");
      form.reset();
    } catch (err) {
      console.error("Form Submission Exception:", err);
      toast.error("Unable to send message. Please email me directly at jsmahato.official@gmail.com");
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { eyebrow: "Contact", title: "Let's build something good.", intro: "The fastest way to reach me is the form below, or email directly. I read everything and reply within two business days.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${site.email}`, className: "group flex items-start gap-3 rounded-lg border border-border/60 p-4 transition-colors hover:border-signal/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 size-4 text-muted-foreground group-hover:text-signal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: site.email })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-lg border border-border/60 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 size-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Based in" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: site.location })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.social.github, target: "_blank", rel: "noreferrer noopener", "aria-label": "GitHub", className: "rounded-md border border-border p-2 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.social.linkedin, target: "_blank", rel: "noreferrer noopener", "aria-label": "LinkedIn", className: "rounded-md border border-border p-2 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "size-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "md:col-span-8 space-y-5 rounded-lg border border-border/60 bg-card p-6 sm:p-8", "aria-label": "Contact form", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", name: "name", required: true, maxLength: 120, autoComplete: "name" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", name: "email", type: "email", required: true, maxLength: 255, autoComplete: "email" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "subject", children: "Subject" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "subject", name: "subject", maxLength: 200 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "message", name: "message", required: true, rows: 6, maxLength: 5e3 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", disabled: busy, children: busy ? "Sending..." : "Send message" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden rounded-xl border border-border/60 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Map of Ranchi, Jharkhand", width: "100%", height: "400", style: {
      border: 0
    }, loading: "lazy", allowFullScreen: true, src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.77975815204!2d85.239322!3d23.3432048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d495cea7b2af!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" }) })
  ] });
}
export {
  ContactPage as component
};
