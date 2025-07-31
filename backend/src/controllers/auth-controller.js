import bcrypt from "bcrypt";
import userModel from "../models/user-model.js";

export const signUpAction = async (req, res) => {
    try {
        const body = req.body //name, email, password

        const hashPassword = bcrypt.hashSync(body.password, 12)

        const user = new userModel({
            name: body.name,
            email: body.email,
            photo: 'default.png',
            password: hashPassword,
            role: 'manager'
        })

        // Action payment gateway midtrans

        await user.save()

        return res.json({
            message: 'Sign Up Succes',
            data: {
                midtrans_payment_url: 'https://google.com'
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}