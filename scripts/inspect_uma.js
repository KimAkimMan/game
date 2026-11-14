const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.join(__dirname, "../umaout/uma_characters.ts"), "utf8");
// Parse items
const lines = content.split("\n");
const items = [];
for (const line of lines) {
  if (line.trim().startsWith("{ name:")) {
    try {
      const fn = new Function("return " + line.trim().replace(/,$/, ""));
      const obj = fn();
      items.push(obj);
    } catch (e) {
      console.error("Error parsing line:", line, e);
    }
  }
}

console.log("Parsed items:", items.length);
const needsData = items.filter(i => i.needsData);
console.log("Needs data count:", needsData.length);
console.log("Needs data list:", needsData.map(i => i.name));
