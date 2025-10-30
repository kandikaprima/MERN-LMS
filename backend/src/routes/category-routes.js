import express from "express";
import { verifyToken } from "../middlewares/verify-token.js";
import { getCategories } from "../controllers/category-controller.js";

const categoryRoutes = express.Router()

categoryRoutes.get('/categories', verifyToken, getCategories)

export default categoryRoutes