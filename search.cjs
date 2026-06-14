const fs = require("fs");
const path = require("path");

const DIRS = ["src", "studio"];
const EXCLUDE_DIRS = ["node_modules", ".git", ".next", "dist", "build", ".sanity"];

const PATTERNS = [
  { name: "Em Dash", regex: /—/g },
  {
    name: "AI Keywords",
    regex:
      /(passionate about|scalable applications|modern digital products|cutting-edge|innovative solutions|transformative|results-driven|leverage|robust platform|seamless experience)/gi,
  },
];

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  lines.forEach((line, i) => {
    PATTERNS.forEach((pattern) => {
      const match = line.match(pattern.regex);
      if (match) {
        console.log(`MATCH [${pattern.name}] in ${filePath}:${i + 1}`);
        console.log(`Line: ${line.trim()}`);
      }
    });
  });
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!EXCLUDE_DIRS.includes(file)) {
        walkDir(fullPath);
      }
    } else if (
      stat.isFile() &&
      (fullPath.endsWith(".ts") ||
        fullPath.endsWith(".tsx") ||
        fullPath.endsWith(".js") ||
        fullPath.endsWith(".json"))
    ) {
      searchFile(fullPath);
    }
  });
}

DIRS.forEach((dir) => walkDir(path.join(__dirname, dir)));
console.log("Search complete.");
