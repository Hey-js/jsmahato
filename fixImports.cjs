const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function (filePath) {
  if (filePath.endsWith(".tsx") || filePath.endsWith(".ts")) {
    let content = fs.readFileSync(filePath, "utf8");

    if (content.includes("sanityClient.") && !content.includes("import { sanityClient")) {
      content = `import { sanityClient } from "@/lib/sanity";\n` + content;
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed import in ${filePath}`);
    }
  }
});
