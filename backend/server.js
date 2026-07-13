require('dotenv').config();
const express = require('express');
const app = express();

// ده أهم سطر: بنجبر السيرفر يوافق على أي طلب جاي من موقعك
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://prime-market-nine.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  
  // الـ OPTIONS هو الطلب اللي بيعمل المشكلة، فبنهي الموضوع هنا فوراً
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use(express.json());

// مسار الدفع (زي ما هو بالظبط)
app.post('/api/payment/checkout', async (req, res) => {
    try {
        const { cartItems } = req.body;
        // ... (باقي الكود بتاع Stripe زي ما هو) ...
        // تأكدي إنك حاطة الـ logic بتاع الـ stripe هنا
    } catch (error) {
        res.status(500).json({ success: false, error: "فشل الدفع" });
    }
});

module.exports = app; // ده ضروري عشان Vercel يشغل الكود صح



