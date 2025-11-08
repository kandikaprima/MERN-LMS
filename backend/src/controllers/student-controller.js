import bcrypt from 'bcrypt'
import userModel from '../models/user-model.js'
import { mutateStudentSchema } from '../utils/schema.js'

export const getStudent = async (req, res) => {
    try {
        const students = await userModel.find({
            role: 'student',
            manager: req.user._id
        })

        return res.json({
            message: 'Get Student Success',
            data: students
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

export const postStudent = async (req, res) => {
    try {
        const body = req.body
        
        const parse = mutateStudentSchema.safeParse(body)

        if (!parse.success) {
            const errorMessages = parse.error.issues.map((err) => err.message)

            if (req?.file?.path && fs.existsSync(req?.file?.path)) {
                fs.unlinkSync(req?.file?.path)
            }
            return res.status(500).json({
                mesage: 'Error Validation',
                data: null,
                errors: errorMessages
            })
        }

        const hashPassword = bcrypt.hashSync(body.password, 12)

        const student = new userModel({
            name: parse.data.name,
            email: parse.data.email,
            password: hashPassword,
            photo: req.file?.filename,
            manager: req.user?._id,
            role: 'student'
        })

        await student.save()

        return res.json({
            message: 'Create Student Success'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}