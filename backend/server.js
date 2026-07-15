require("dotenv").config();
const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/api/payment/checkout", async (req, res) => {
  try {
    const { cartItems } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "egp",
          product_data: { name: item.title },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: "https://prime-market-nine.vercel.app/success",
      cancel_url: "https://prime-market-nine.vercel.app/cart",
    });
    res.json({ success: true, url: session.url });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = app;