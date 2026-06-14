const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");

const sanityMap = {
  "/api/projects":
    '{ data: await require("@/lib/sanity").sanityClient.fetch(`*[_type == "project"] | order(sortOrder asc)`) }',
  "/api/blogs":
    '{ data: await require("@/lib/sanity").sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc)`) }',
  "/api/experiences":
    '{ data: await require("@/lib/sanity").sanityClient.fetch(`*[_type == "experience"] | order(order asc)`) }',
  "/api/skills":
    '{ data: await require("@/lib/sanity").sanityClient.fetch(`*[_type == "skill"] | order(order asc)`) }',
  "/api/services":
    '{ data: await require("@/lib/sanity").sanityClient.fetch(`*[_type == "service"] | order(order asc)`) }',
  "/api/testimonials":
    '{ data: await require("@/lib/sanity").sanityClient.fetch(`*[_type == "testimonial"]`) }',
  "/api/photos":
    '{ data: await require("@/lib/sanity").sanityClient.fetch(`*[_type == "photography"] | order(date desc)`) }',
  "/api/settings":
    '{ data: await require("@/lib/sanity").sanityClient.fetch(`*[_type == "siteSettings"][0]`) }',
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function (filePath) {
  if (filePath.includes("admin") || filePath.includes("auth")) return; // Ignore admin routes (we will delete them)
  if (filePath.endsWith(".tsx") || filePath.endsWith(".ts")) {
    let content = fs.readFileSync(filePath, "utf8");
    let changed = false;

    // Replace mapped endpoints
    for (const [endpoint, sanityFetch] of Object.entries(sanityMap)) {
      const regex = new RegExp(`await api\\.get\\(["'\`]${endpoint}["'\`]\\)`, "g");
      if (regex.test(content)) {
        content = content.replace(regex, sanityFetch);
        changed = true;
      }
    }

    // Replace slug endpoints specifically
    if (/await api\.get\(`\/api\/blogs\/\$\{slug\}`\)/.test(content)) {
      content = content.replace(
        /await api\.get\(`\/api\/blogs\/\$\{slug\}`\)/g,
        '{ data: await require("@/lib/sanity").sanityClient.fetch(`*[_type == "post" && slug.current == "${slug}"][0]`) }',
      );
      changed = true;
    }

    // Replace public-data.ts dynamic fetch
    if (filePath.includes("public-data.ts")) {
      // Just skip it, we don't need it or will delete it
    }

    if (changed) {
      // Add imports if missing
      if (!content.includes("sanityClient")) {
        content = `import { sanityClient } from "@/lib/sanity";\n` + content;
        // remove require
        content = content.replace(/require\("@\/lib\/sanity"\)\./g, "");
      } else {
        content = content.replace(/require\("@\/lib\/sanity"\)\./g, "");
      }

      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Refactored ${filePath}`);
    }
  }
});
