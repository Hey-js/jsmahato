import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/googlefa88608dab7316f3.html")({
  server: {
    handlers: {
      GET: async () => {
        return new Response("google-site-verification: googlefa88608dab7316f3.html", {
          headers: {
            "Content-Type": "text/html",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
