const fs = require("fs");

const replacements = [
  // site.ts AI keywords
  {
    file: "src/lib/site.ts",
    search:
      /Building scalable web applications, modern digital products, and practical software solutions./g,
    replace: "Building reliable web applications and practical software solutions.",
  },
  {
    file: "src/lib/site.ts",
    search: /Jitu Sagar Mahato — Software Engineer/g,
    replace: "Jitu Sagar Mahato | Software Engineer",
  },

  // footer.tsx
  {
    file: "src/components/footer.tsx",
    search: /\{site\.shortName\} — \{site\.role\}/g,
    replace: "{site.shortName} | {site.role}",
  },

  // SEO and Meta
  {
    file: "src/lib/seo.ts",
    search: /\$\{site\.name\} — \$\{site\.role\}/g,
    replace: "${site.name} | ${site.role}",
  },
  {
    file: "src/routes/blog/index.tsx",
    search: /Blog — \$\{site\.name\}/g,
    replace: "Blog | ${site.name}",
  },
  {
    file: "src/routes/contact.tsx",
    search: /Contact — \$\{site\.name\}/g,
    replace: "Contact | ${site.name}",
  },
  {
    file: "src/routes/experience.tsx",
    search: /Experience & Education — \$\{site\.name\}/g,
    replace: "Experience & Education | ${site.name}",
  },
  {
    file: "src/routes/index.tsx",
    search: /\$\{site\.name\} — Software Engineer & Full Stack Developer/g,
    replace: "${site.name} | Software Engineer & Full Stack Developer",
  },
  {
    file: "src/routes/photography.tsx",
    search: /Photography — \$\{site\.name\}/g,
    replace: "Photography | ${site.name}",
  },
  {
    file: "src/routes/projects/index.tsx",
    search: /Projects — \$\{site\.name\}/g,
    replace: "Projects | ${site.name}",
  },
  {
    file: "src/routes/resume.tsx",
    search: /Resume — \$\{site\.name\}/g,
    replace: "Resume | ${site.name}",
  },
  {
    file: "src/routes/services.tsx",
    search: /Expertise — \$\{site\.name\}/g,
    replace: "Expertise | ${site.name}",
  },
  {
    file: "src/routes/skills.tsx",
    search: /Skills — \$\{site\.name\}/g,
    replace: "Skills | ${site.name}",
  },
  {
    file: "src/routes/__root.tsx",
    search: /\$\{site\.name\} — \$\{site\.role\}/g,
    replace: "${site.name} | ${site.role}",
  },

  // In-text usages
  { file: "src/routes/contact.tsx", search: /below — or email/g, replace: "below, or email" },
  { file: "src/routes/photography.tsx", search: /Mahato — street/g, replace: "Mahato: street" },
  { file: "src/routes/photography.tsx", search: /request — see/g, replace: "request. See" },
  { file: "src/routes/projects/index.tsx", search: /Mahato — MERN/g, replace: "Mahato: MERN" },
  { file: "src/routes/resume.tsx", search: /2017 — 2020/g, replace: "2017 - 2020" },
  { file: "src/routes/resume.tsx", search: /\} — \$\{site/g, replace: "} • ${site" },
  { file: "src/routes/resume.tsx", search: /\} — Present/g, replace: "} - Present" },
  { file: "src/routes/resume.tsx", search: /\} — \$\{e\.endDate/g, replace: "} - ${e.endDate" },
  { file: "src/routes/skills.tsx", search: /toolkit — frontend/g, replace: "toolkit: frontend" },
  { file: "src/server.ts", search: /\} — try\/catch/g, replace: "} - try/catch" },
];

replacements.forEach((r) => {
  if (fs.existsSync(r.file)) {
    const content = fs.readFileSync(r.file, "utf8");
    const newContent = content.replace(r.search, r.replace);
    if (content !== newContent) {
      fs.writeFileSync(r.file, newContent);
      console.log(`Updated ${r.file}`);
    }
  }
});
console.log("Replacements done.");
