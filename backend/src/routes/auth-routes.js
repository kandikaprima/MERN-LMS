import express from "express";
import { validateRequest } from "../middlewares/validate-request.js";
import { signUpSchema } from "../utils/schema.js";
import { signUpAction } from "../controllers/auth-controller.js";

const authRoutes = express.Router()

authRoutes.post('/sign-up', validateRequest(signUpSchema), signUpAction)

export default authRoutes