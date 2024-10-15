const http = require("http");
const path = require("path");
const fs = require("fs");
const fsp = require("fs/promises");
const { setLinkActive, setStatus } = require("./public/lib/lib");

const PORT = process.env.PORT || "5000";

const getSubDir = (extname) => {
  switch (extname) {
    case ".html":
      return "views";
    case ".css":
      return "styles";
    case ".js":
      return "lib";
    case ".ico":
      return "assets/icons";
    case ".webp":
    case ".jpg":
    case ".jpeg":
    case ".png":
    case ".svg":
      return "assets/images";
  }
};

const getContentType = (extName) => {
  switch (extName) {
    case ".js":
      return "text/javascript";
    case ".css":
      return "text/css";
    case ".json":
      return "application/json";
    case ".ico":
      return "image/x-icon";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    default:
      return "text/html";
  }
};

const getFile = async (subDir, urlPath) => {
  try {
    const filePath = path.join(__dirname, "public", subDir, urlPath);
    const data = await fsp.readFile(filePath, {
      encoding:
        subDir === "assets/images" || subDir === "assets/icons" ? null : "utf8",
    });
    const extName = path.extname(urlPath);
    const modifiedData = setLinkActive(data, filePath);

    return extName === ".html" ? modifiedData : data;
  } catch (err) {
    throw err;
  }
};

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = req.url === "/" ? "index.html" : req.url;
    const extName = path.extname(urlPath === undefined ? ".html" : urlPath);
    const data = await getFile(getSubDir(extName), urlPath);

    res.writeHead(200, { "Content-Type": getContentType(extName) });
    res.write(data);
  } catch (err) {
    const pageNotFount = err.code === "ENOENT";
    const data = await getFile("views", "error.html");
    res.writeHead(pageNotFount ? 404 : 500, {
      "Content-Type": "text/html",
    });
    res.write(setStatus(data, pageNotFount ? "404" : "500"));
  } finally {
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("Server running... on port: ", PORT);
});
