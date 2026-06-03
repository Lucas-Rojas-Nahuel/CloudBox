import "dotenv/config"; // 👈 ¡ESTO PRIMERO! Carga el archivo .env en memoria
import express from "express";
import path from "path";
import prisma from "./db.js";

import router from "./routes/router.js";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.use("/", router);

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("server is running on port 3000");
});
