import express from "express";
import {
  deleteCourse,
  getCourseById,
  getCourses,
  getStudentsByCourseId,
  postCourse,
  postStudentToCourse,
  updateCourse,
} from "../controllers/course-controller.js";
import { verifyToken } from "../middlewares/verify-token.js";
import multer from "multer";
import { fileFilter, fileStorageCourse } from "../utils/multer.js";
import { validateRequest } from "../middlewares/validate-request.js";
import { addStudentCourseSchema } from "../utils/schema.js";

const courseRoutes = express.Router();

const upload = multer({
  storage: fileStorageCourse,
  fileFilter,
});

courseRoutes.get("/courses", verifyToken, getCourses);
courseRoutes.get("/courses/:id", verifyToken, getCourseById);
courseRoutes.post(
  "/courses",
  verifyToken,
  upload.single("thumbnail"),
  postCourse
);
courseRoutes.put(
  "/courses/:id",
  verifyToken,
  upload.single("thumbnail"),
  updateCourse
);
courseRoutes.delete("/courses/:id", verifyToken, deleteCourse);
courseRoutes.get("/courses/students/:id", verifyToken, getStudentsByCourseId);
courseRoutes.post(
  "/courses/students/:id",
  verifyToken,
  validateRequest(addStudentCourseSchema),
  postStudentToCourse
);

export default courseRoutes;
