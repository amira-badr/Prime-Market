const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'برجاء إدخال اسم المنتج'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'برجاء إدخال وصف المنتج']
    },
    price: {
        type: Number,
        required: [true, 'برجاء إدخال سعر المنتج'],
        maxLength: [8, 'السعر لا يمكن أن يتخطى 8 أرقام']
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    category: {
        type: String,
        required: [true, 'برجاء تحديد قسم المنتج']
    },
    stock: {
        type: Number,
        required: [true, 'برجاء إدخال الكمية المتاحة في المخزن'],
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);