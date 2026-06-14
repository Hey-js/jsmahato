const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "src");
const searchTerms = [
  "isFeatured",
  "galleryImages",
  "coverImageUrl",
  "content",
  "projectImage",
  "imageUrl",
  "projectSlug",
  "projectTitle",
];
const results = {};

function walk(dir) {
  fs.readdirSync(dir).forEach((f) => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith(".tsx") || p.endsWith(".ts")) {
      let content = fs.readFileSync(p, "utf8");
      searchTerms.forEach((term) => {
        if (content.includes(term)) {
          if (!results[p]) results[p] = [];
          if (!results[p].includes(term)) results[p].push(term);
        }
      });
    }
  });
}

walk(dir);
console.log(JSON.stringify(results, null, 2));
