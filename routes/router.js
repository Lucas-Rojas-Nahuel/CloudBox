import { Router } from "express";

import authenticationRoutes from "./authenticationRoutes.js";

const router = Router();

router.use("/", authenticationRoutes);

export default router;
