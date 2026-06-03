import { Router } from "express";

const autenticationRoutes = Router();

autenticationRoutes.get("/login", (req, res) => {
  res.render("authentication/login", { title: "CloudBox - Login" });
});

export default autenticationRoutes;
