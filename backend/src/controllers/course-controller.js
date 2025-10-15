import courseModel from '../models/course-model.js'

export const getCourses = async (req, res) => {
    try {
        const courses = await courseModel.find({
            manager: req.user?._id
        })
        .select('name thumbnai')
        .populate({
            path: 'category',
            select: 'name -_id'
        })
        .populate({
            path: 'students',
            select: 'name'
        })

        return res.json({
            message: 'Get Course Success',
            data: courses
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}