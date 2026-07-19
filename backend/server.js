require("dotenv").config();
const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());


app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true
}));

app.post("/api/payment/checkout", async (req, res) => {
  try {
    const { cartItems } = req.body;
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "egp",
          product_data: { name: item.name || "Product" },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: process.env.SUCCESS_URL || "https://prime-market-srjl.vercel.app/orders",
      cancel_url: process.env.CANCEL_URL || "https://prime-market-srjl.vercel.app/cart",
    });

    res.json({ success: true, url: session.url });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// السيرفر على 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;