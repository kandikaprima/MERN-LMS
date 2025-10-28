import mongoose from "mongoose";
import categoryModel from "./category-model.js";
import courseDetailModel from "./course-detail-model.js";
import userModel from "./user-model.js";

const courseModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    tagline: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    details: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CourseDetail'
        }
    ],
})

courseModel.post('findOneAndDelete', async (doc) => {
    if (doc) {
        await categoryModel.findByIdAndUpdate(doc.category, {
            $pull: {
                courses: doc._id
            }
        })

        await courseDetailModel.deleteMany({
            courses: doc._id
        })

        doc.students?.map(async (std) => {
            await userModel.findByIdAndUpdate(std._id, {
                $pull: {
                    courses: doc._id
                }
            })
        })
    }
})

export default mongoose.model('Course', courseModel)