import transactionModel from "../models/transaction-model.js";

export const handlePayment = async (req, res) => {
    try {
        const body = req.body
        const orderId = body.order_id

        switch (body.transaction_status) {
            case "capture":
            case "settlement":
                await transactionModel.findByIdAndUpdate(orderId, {
                    status: 'success'
                })
                break;
            case "deny":
            case "cancel":
            case "expire":
            case "failure":
                await transactionModel.findByIdAndUpdate(orderId, {
                    status: 'failed'
                })
        
            default:
                break;
        }
        return res.json({
            message: 'Handle Payment Succes',
            data: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}