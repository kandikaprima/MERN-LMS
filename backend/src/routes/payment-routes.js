import express from "express";
import { handlePayment } from "../controllers/payment-controller.js";

const paymentRoutes = express.Router()

paymentRoutes.post('/handle-payment-midtrans', handlePayment)

export default paymentRoutes