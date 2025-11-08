import express from 'express';
import { verifyToken } from "../middlewares/verify-token.js";
import { getStudent, postStudent } from '../controllers/student-controller.js';
import multer from 'multer';
import { fileFilter, fileStorage } from '../utils/multer.js';

const studentRoutes = express.Router()

const upload = multer({
    storage: fileStorage('students'),
    fileFilter
})

studentRoutes.get('/students', verifyToken, getStudent)
studentRoutes.post('/students', verifyToken, upload.single('avatar'), postStudent)

export default studentRoutes