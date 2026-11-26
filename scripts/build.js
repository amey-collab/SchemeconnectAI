const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "dist");
const publicFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "package.json",
];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const file of publicFiles) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}

fs.cpSync(path.join(root, "data"), path.join(output, "data"), { recursive: true });

console.log(`Vercel build completed: ${output}`);
