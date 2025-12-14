import express from 'express';
import { verifyToken } from "../middlewares/verify-token.js";
import { deleteStudent, getCoursesByStudentId, getStudent, getStudentById, postStudent, updateStudent } from '../controllers/student-controller.js';
import multer from 'multer';
import { fileFilter, fileStorage } from '../utils/multer.js';

const studentRoutes = express.Router()

const upload = multer({
    storage: fileStorage('students'),
    fileFilter
})

studentRoutes.get('/students', verifyToken, getStudent)
studentRoutes.get('/students/:id', verifyToken, getStudentById)
studentRoutes.post('/students', verifyToken, upload.single('avatar'), postStudent)
studentRoutes.put('/students/:id', verifyToken, upload.single('avatar'), updateStudent)
studentRoutes.delete('/students/:id', verifyToken, deleteStudent)
studentRoutes.get('/students-courses', verifyToken, getCoursesByStudentId)

export default studentRoutes