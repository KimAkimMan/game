const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.join(__dirname, "../umaout/uma_characters.ts"), "utf8");
const regex = /name:\s*"([^"]+)",\s*image:\s*"([^"]+)"/g;
let match;
let total = 0;
let missing = 0;

while ((match = regex.exec(content)) !== null) {
  total++;
  const charName = match[1];
  const imgRel = match[2];
  const fullPath = path.join(__dirname, "../public", imgRel);
  if (!fs.existsSync(fullPath)) {
    console.log("Missing image for:", charName, fullPath);
    missing++;
  }
}

console.log("Checked:", total, "characters. Missing images:", missing);
