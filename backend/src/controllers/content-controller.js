import courseDetailModel from "../models/course-detail-model.js"
import courseModel from "../models/course-model.js"

export const postContentCourse = async (req, res) => {
    try {
        const body = req.body
        const course = await courseModel.findById(body.courseId)

        const content = new courseDetailModel({
            title: body.title,
            type: body.type,
            course: course._id,
            text: body.text,
            youtubeId: body.youtubeId,
        })

        await content.save()
        await courseModel.findByIdAndUpdate(course._id, {
            $push: {
                details: content._id
            }
        }, {new: true})

        return res.json({
            message: 'Create Content Success'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

export const updateContentCourse = async (req, res) => {
    try {
        const {id} = req.params
        const body = req.body
        const course = await courseModel.findById(body.courseId)

        await courseDetailModel.findByIdAndUpdate(id, {
            title: body.title,
            type: body.type,
            course: course._id,
            text: body.text,
            youtubeId: body.youtubeId
        }, {new: true})

        return res.json({
            message: 'Update Content Success'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deleteContentCourse = async (req, res) => {
    try {
        const {id} = req.params

        await courseDetailModel.findByIdAndDelete(id)

        return res.json({
            message: 'Delete Content Success'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

export const getDetailContent = async (req, res) => {
    try {
        const {id} = req.params

        const content = await courseDetailModel.findById(id)

        return res.json({
            message: 'Get Detail Content Success',
            data: content
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}