const { Router } = require("express");
const path = require("path");
const appRouter = Router();

const routeOptions = { root: path.dirname(__dirname) };

appRouter.get("/", (req, res) => {
  res.sendFile("/views/index.html", routeOptions);
});

appRouter.get("/about.html", (req, res) => {
  res.sendFile("/views/about.html", routeOptions);
});

appRouter.get("/contact.html", (req, res) => {
  res.sendFile("/views/contact.html", routeOptions);
});

module.exports = appRouter;
