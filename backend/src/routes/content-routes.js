import express from "express";
import { verifyToken } from "../middlewares/verify-token.js";
import { validateRequest } from "../middlewares/validate-request.js";
import { mutateContentSchema } from "../utils/schema.js";
import { deleteContentCourse, getDetailContent, postContentCourse, updateContentCourse } from "../controllers/content-controller.js";

const contentRoutes = express.Router()

contentRoutes.post('/courses/content', verifyToken, validateRequest(mutateContentSchema), postContentCourse)
contentRoutes.put('/courses/content/:id', verifyToken, validateRequest(mutateContentSchema), updateContentCourse)
contentRoutes.delete('/courses/content/:id', verifyToken, deleteContentCourse)
contentRoutes.get('/courses/content/:id', verifyToken, getDetailContent)

export default contentRoutes