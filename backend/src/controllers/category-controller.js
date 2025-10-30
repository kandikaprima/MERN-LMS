import categoryModel from "../models/category-model.js";


export const getCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find()

        return res.json({
            message: 'Get Categories Success',
            data: categories
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}