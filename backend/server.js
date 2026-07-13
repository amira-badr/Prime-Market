require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());

// تأكدي إن الإعدادات مكتوبة كده بالظبط عشان تسمح بالمرور
app.use(cors({
    origin: ["http://localhost:5173", "https://prime-market.vercel.app"], // ضيفي لينك الفرونت بتاعك على فيرسيل هنا كمان
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// مسار الدفع
app.post('/api/payment/checkout', async (req, res) => {
  try {
    const { cartItems } = req.body;
    if (!cartItems || cartItems.length === 0) return res.status(400).json({ success: false, message: "السلة فارغة!" });

    const lineItems = cartItems.map(item => ({
      price_data: {
        currency: 'usd', 
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL || 'https://prime-market-nine.vercel.app'}/success`,
      cancel_url: `${process.env.CLIENT_URL || 'https://prime-market-nine.vercel.app'}/cancel`,
    });

    res.status(200).json({ success: true, url: session.url });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ success: false, error: "فشل إنشاء جلسة الدفع" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 السيرفر يعمل على بورت ${PORT}`));


