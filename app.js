const PORT = process.env.PORT || "5000";

const express = require("express");

const appRouter = require("./public/routes/routes");
const app = express();

app.use(express.static("public"));

const routeOptions = { root: __dirname };

app.use("/", appRouter);
app.use("/about", appRouter);
app.use("/contact", appRouter);

app.get("*", (req, res) => {
  res.sendFile("/public/views/error.html", routeOptions);
});

app.listen(PORT, () => {
  console.log("Server running... on port: ", PORT);
});
