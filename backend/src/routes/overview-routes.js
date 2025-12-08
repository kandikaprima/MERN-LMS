import express from "express";
import { verifyToken } from "../middlewares/verify-token.js";
import { getOverviews } from "../controllers/overview-controller.js";

const overviewRoutes = express.Router();

overviewRoutes.get("/overviews", verifyToken, getOverviews);

export default overviewRoutes