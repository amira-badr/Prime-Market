const Product = require('../models/productModels');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            count: products.length,
            products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'حدث خطأ أثناء جلب المنتجات',
            error: error.message
        });
    }
};


const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            message: 'تم إضافة المنتج بنجاح',
            product
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'فشل في إضافة المنتج، تأكد من البيانات',
            error: error.message
        });
    }
};


module.exports = {
    getAllProducts,
    createProduct
};