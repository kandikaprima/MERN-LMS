import express from "express";
import { getCourses, postCourse, updateCourse } from "../controllers/course-controller.js";
import { verifyToken } from "../middlewares/verify-token.js";
import multer from "multer";
import { fileFilter, fileStorageCourse } from "../utils/multer.js";

const courseRoutes = express.Router()

const upload = multer({
    storage: fileStorageCourse,
    fileFilter
})

courseRoutes.get('/courses', verifyToken, getCourses)
courseRoutes.post('/courses', verifyToken, upload.single('thumbnail'), postCourse)
courseRoutes.put('/courses', verifyToken, upload.single('thumbnail'), updateCourse)

export default courseRoutes