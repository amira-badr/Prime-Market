require('dotenv').config();
const dns = require('dns');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// إجبار النظام على استخدام IPv4 لحل مشاكل الاتصال
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

const app = express();
app.use(express.json());

// التعديل هنا: تحديد الـ origin بدقة عشان يشتغل مع withCredentials: true
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// مسار الدفع باستخدام Stripe
app.post('/api/payment/checkout', async (req, res) => {
  try {
    const { cartItems } = req.body;
    if (!cartItems || cartItems.length === 0) return res.status(400).json({ success: false, message: "السلة فارغة!" });

    // تحويل المنتجات لتنسيق Stripe
    const lineItems = cartItems.map(item => ({
      price_data: {
        currency: 'usd', 
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));

    // إنشاء جلسة دفع
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/success`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/cancel`,
    });

    res.status(200).json({ success: true, url: session.url });

  } catch (error) {
    console.error("Stripe Error:", error.message);
    res.status(500).json({ success: false, error: "فشل إنشاء جلسة الدفع" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 السيرفر يعمل على بورت ${PORT} (CORS Fixed)`));