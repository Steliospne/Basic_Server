const http = require("http");
const path = require("path");
const fs = require("fs");
const fsp = require("fs/promises");

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let extName = path.extname(filePath);

  let contentType = "text/html";

  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".ico":
      contentType = "image/x-icon";
      break;
  }

  const readFile = async (filePath) => {
    try {
      const data = await fsp.readFile(filePath);
      const linkName =
        path.basename(filePath) === "index.html"
          ? 'href="/"'
          : path.basename(filePath).split(".")[0];

      let modifiedCont = data.toString().split(/\n/g);

      modifiedCont.forEach((line, index) => {
        if (line.includes(linkName)) {
          const parts = line.trim().split(" ");

          if (parts.length >= 2) {
            parts.splice(1, 0, "class='active'");
            const newLine = parts.join(" ");
            modifiedCont[index] = newLine;
          }
        }
      });
      modifiedCont = modifiedCont.join("\n");
      res.writeHead(200, { "Content-Type": contentType });
      res.end(modifiedCont, "utf8");
    } catch (err) {
      console.log(err);
      if (err.code === "ENOENT") {
        const data = await fsp.readFile(
          path.join(__dirname, "public", "404.html"),
          {
            encoding: "utf8",
          }
        );
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    }
  };

  readFile(filePath);
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Server running... on port: ", PORT);
});
