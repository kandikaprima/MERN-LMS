import mongoose from "mongoose";

const courseDetailModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['video', 'text'],
        default: 'video'
    },
    videoId: String,
    text: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
},{
    timestamps: true
})

export default mongoose.model('CourseDetail', courseDetailModel)