const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // السيرفر هو اللي بيستخدم المفتاح السري
const app = express();

app.use(cors({
  origin: "https://prime-market-nine.vercel.app", // موقعك الأساسي
  methods: ["POST", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

app.post('/api/payment/checkout', async (req, res) => {
  try {
    const { cartItems } = req.body;
    
    // تحويل السلة لـ Line Items
    const lineItems = cartItems.map(item => ({
      price_data: {
        currency: 'egp',
        product_data: { name: item.title },
        unit_amount: Math.round(item.price * 100), // Stripe بيحسب بالقرش
      },
      quantity: item.quantity,
    }));

    // إنشاء جلسة Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://prime-market-nine.vercel.app/success',
      cancel_url: 'https://prime-market-nine.vercel.app/cart',
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
```

#### 2. ملف الفرونت إند (`Cart.jsx`)
استخدمي رابط الباك إند المرفوع على Vercel (مش اللوكال هوست خالص):

```javascript:Frontend:src/pages/Cart.jsx
// ... (الكود اللي قبل الـ handleCheckout زي ما هو)

const handleCheckout = async () => {
  try {
    setLoadingCard(true);
    
    // تأكدي من الرابط ده هو رابط الباك إند بتاعك اللي شغال على Vercel
    const response = await fetch('https://prime-market-sril.vercel.app/api/payment/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartItems: cart }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url; // هيحولك لصفحة Stripe
    } else {
      alert("حدث خطأ في الاتصال بالسيرفر");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setLoadingCard(false);
  }
};


