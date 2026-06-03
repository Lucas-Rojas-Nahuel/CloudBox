import express from "express";
import path from "path";

const app = express();

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(import.meta.dirname, "public")));

app.get("/", (req, res) => {
  res.render("index",{title:"CloudBox"});
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("server is running on port 3000");
});
