const express = require('express');
const router = express.Router();

// استدعاء الدوال اللي  في الكونترولر
const { getAllProducts, createProduct } = require('../controllers/productController');

// تحديد المسارات
// GET /api/products -> لجلب كل المنتجات
// POST /api/products -> لإضافة منتج جديد
router.route('/').get(getAllProducts).post(createProduct);

module.exports = router;