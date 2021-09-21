const fs = require("fs");
const path = require("path");

const dir = "./build";
const content = process.pid.toString();
const filesToCreate = ["build.txt", "build2.txt"];

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

filesToCreate.forEach((file) => {
  const filePath = path.join(dir, file);
  fs.writeFileSync(filePath, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});

console.log("build completed");
