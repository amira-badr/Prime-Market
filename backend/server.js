require('dotenv').config();
const express = require('express');
// احذفي سطر const cors = require('cors'); لو موجود

const app = express();

// --- بداية الحل النهائي لمشكلة Vercel CORS ---
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // الخطوة دي مهمة جداً لـ Vercel بالذات
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});
// --- نهاية الحل ---

app.use(express.json());

// مسار الدفع باستخدام Stripe
app.post('/api/payment/checkout', async (req, res) => {
    try {
        const { cartItems } = req.body;
        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({ success: false, message: "السلة فارغة!" });
        }

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
        res.status(500).json({ success: false, error: "فشل الدفع" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));