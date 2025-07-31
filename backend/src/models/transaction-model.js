import mongoose from "mongoose";

const transactionModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        enum: ['pending', 'succes', 'failed'],
        default: 'pending'
    }
}, {
    timestamps: true
})

export default mongoose.model('Transaction', transactionModel)