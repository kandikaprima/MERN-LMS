import express from "express";
import { getCourses } from "../controllers/course-controller.js";
import { verifyToken } from "../middlewares/verify-token.js";

const courseRoutes = express.Router()

courseRoutes.get('/courses', verifyToken, getCourses)

export default courseRoutes