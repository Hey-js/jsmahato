import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { site } from "@/lib/site";
import { sanityClient } from "@/lib/sanity";
import groq from "groq";

const BASE_URL = site.url;

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString();
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/skills", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/experience", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/projects", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/photography", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/services", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/resume", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: today },
          { path: "/contact", changefreq: "yearly", priority: "0.6", lastmod: today },
        ];

        try {
          // Fetch dynamic routes from Sanity
          const projects = await sanityClient.fetch(
            groq`*[_type == "project"]{ "slug": slug.current }`,
          );
          const posts = await sanityClient.fetch(groq`*[_type == "post"]{ "slug": slug.current }`);

          projects.forEach((p: any) => {
            if (p.slug)
              entries.push({ path: `/projects/${p.slug}`, changefreq: "monthly", priority: "0.8", lastmod: today });
          });

          posts.forEach((p: any) => {
            if (p.slug)
              entries.push({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.7", lastmod: today });
          });
        } catch (error) {
          console.error("Failed to fetch dynamic sitemap entries from Sanity", error);
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
