import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, CreditCard, ShoppingBag, Loader2 } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      
      // التعديل هنا فقط في طريقة الاتصال لضمان الأمان
      const response = await fetch('https://prime-market-sril.vercel.app/api/payment/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          cartItems: cart.map(item => ({
            title: item.title,
            price: item.price,
            quantity: item.quantity
          })) 
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("خطأ في الاتصال بسيرفر الدفع");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("حدث خطأ أثناء محاولة الدفع");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl w-full mx-auto py-16 px-4 md:px-8" dir="rtl">
      <h2 className="text-2xl md:text-3xl font-black mb-8 border-r-4 border-cyan-500 pr-3">سلة المشتريات</h2>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-[#130d35]/40 rounded-[2rem] border border-white/5 p-8">
          <ShoppingBag size={64} className="text-slate-500 mb-4 mx-auto" />
          <p className="text-slate-400 font-bold text-lg">سلتك فارغة حالياً!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-[#1c164a]/60 backdrop-blur-md p-4 rounded-[1.5rem] border border-white/5">
                <img src={item.img || item.image} alt={item.title} className="w-20 h-20 object-contain p-2 bg-[#251e5c] rounded-xl shrink-0" />
                <div className="flex-grow">
                  <h4 className="font-black text-sm">{item.title}</h4>
                  <p className="text-cyan-400 font-bold text-xs mt-1">{item.price} EGP</p>
                </div>
                <div className="flex items-center gap-2 bg-[#130d35] px-3 py-1.5 rounded-full border border-white/5">
                  <button onClick={() => updateQuantity(item.id, 1)} className="text-slate-300 hover:text-cyan-400"><Plus size={14} /></button>
                  <span className="font-black text-sm w-4 text-center text-white">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, -1)} className="text-slate-300 hover:text-pink-500"><Minus size={14} /></button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="p-2.5 text-slate-400 hover:text-red-400"><Trash2 size={16}/></button>
              </div>
            ))}
          </div>

          <div className="bg-[#130d33] border border-white/5 p-6 rounded-[2rem] h-fit sticky top-24">
            <h3 className="font-black text-lg mb-4 border-b border-white/5 pb-2">ملخص الفاتورة</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-400"><span>الإجمالي:</span><span className="text-white font-bold">{cartTotal} EGP</span></div>
              <hr className="border-white/5 my-2"/>
            </div>
            
            <button 
              onClick={handleCheckout} 
              disabled={loading}
              className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black py-3 rounded-full flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <CreditCard size={16}/>}
              {loading ? "جاري التحويل..." : "الدفع بـ Stripe"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
