const path = require("path");

const setLinkActive = (data, filePath) => {
  const linkName =
    path.basename(filePath) === "index.html"
      ? 'href="/"'
      : path.basename(filePath).split(".")[0];

  let modifiedData = data.toString().split("\n");

  modifiedData.forEach((line, index) => {
    if (line.includes(linkName) && line.includes("<a")) {
      const parts = line.trim().split(" ");

      if (parts.length >= 2) {
        parts.splice(1, 0, "class='active'");
        const newLine = parts.join(" ");
        modifiedData[index] = newLine;
      }
    }
  });

  return modifiedData.join("\n");
};

const setStatus = (data, status) => {
  const buffer = data.toString().split(/\n/g);
  buffer.forEach((line, index) => {
    if (line.includes("status")) {
      const parts = line.trim().split(" ");
      parts[1] = status;
      const newLine = parts.join(" ");
      buffer[index] = newLine;
    }
  });
  return buffer.join("\n");
};

module.exports = { setLinkActive, setStatus };
