const PORT = process.env.PORT || "5000";

const express = require("express");
const app = express();

app.use(express.static("public"));

const routeOptions = { root: __dirname };

app.get("/", (req, res) => {
  res.sendFile("/public/views/index.html", routeOptions);
});

app.get("/about.html", (req, res) => {
  res.sendFile("/public/views/about.html", routeOptions);
});

app.get("/contact.html", (req, res) => {
  res.sendFile("/public/views/contact.html", routeOptions);
});

app.get("*", (req, res) => {
  res.sendFile("/public/views/error.html", routeOptions);
});

app.listen(PORT, () => {
  console.log("Server running... on port: ", PORT);
});
