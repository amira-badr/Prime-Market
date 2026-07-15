import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, CreditCard, ShoppingBag, Loader2, Smartphone } from 'lucide-react';
// استدعاء ملف الإعدادات المخصص بتاعك
import api from '../services/Axios';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [loadingCard, setLoadingCard] = useState(false);
  const [loadingWallet, setLoadingWallet] = useState(false);

  const handleCheckout = async (method) => {
    try {
      if (method === 'card') setLoadingCard(true);
      if (method === 'wallet') setLoadingWallet(true);

      // تجهيز البيانات بالشكل الذي يتوقعه السيرفر الجديد (Stripe)
      const cartItems = cart.map(item => ({
        name: item.title,
        price: item.price,
        quantity: item.quantity,
      }));

      // التعديل الوحيد هنا: إضافة /api/ لتطابق مسار السيرفر بالضبط
      const response = await api.post('/api/payment/checkout', { 
        cartItems 
      });

      // إذا رجع رابط الدفع بنجاح من Stripe، بنحول العميل لصفحة الدفع فوراً
      if (response.data && response.data.url) {
        window.location.href = response.data.url;
      } else {
        alert("فشل في الحصول على رابط الدفع.");
        setLoadingCard(false);
        setLoadingWallet(false);
      }
    } catch (error) {
      console.error("خطأ أثناء الانتقال لبوابة الدفع:", error);
      alert("حدث خطأ أثناء الانتقال لبوابة الدفع، يرجى المحاولة مرة أخرى.");
      setLoadingCard(false);
      setLoadingWallet(false);
    }
  };

  const isAnyLoading = loadingCard || loadingWallet;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* تم التعديل هنا: وضع العنوان داخل تاج HTML */}
      <h1 className="text-3xl font-black mb-8 text-white">سلة المشتريات</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-[#130d35]/40 rounded-[2rem] border border-white/5 p-8 flex flex-col items-center justify-center">
          <ShoppingBag size={64} className="text-slate-500 mb-4 animate-bounce" />
          <p className="text-slate-400 font-bold text-lg">سلتك فارغة حالياً!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* منتجات السلة */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-[#1c164a]/60 backdrop-blur-md p-4 rounded-[1.5rem] border border-white/5">
                <img src={item.img || item.image} alt={item.title} className="w-20 h-20 object-contain p-2 bg-[#251e5c] rounded-xl shrink-0" />
                <div className="flex-grow">
                  <h4 className="font-black text-sm line-clamp-1 text-white">{item.title}</h4>
                  <p className="text-cyan-400 font-bold text-xs mt-1">{item.price} EGP</p>
                </div>
                {/* عداد كميات المنتجات */}
                <div className="flex items-center gap-2 bg-[#130d35] px-3 py-1.5 rounded-full border border-white/5">
                  <button onClick={() => updateQuantity(item.id, 1)} className="text-slate-300 hover:text-cyan-400"><Plus size={14} /></button>
                  <span className="font-black text-sm w-4 text-center text-white">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, -1)} className="text-slate-300 hover:text-pink-500"><Minus size={14} /></button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="p-2.5 text-slate-400 hover:text-red-400 transition-colors"><Trash2 size={16}/></button>
              </div>
            ))}
          </div>

          {/* ملخص الفاتورة النهائي */}
          <div className="bg-[#130d33] border border-white/5 p-6 rounded-[2rem] h-fit sticky top-24">
            <h3 className="font-black text-lg mb-4 border-b border-white/5 pb-2 text-white">ملخص الفاتورة</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-400"><span>الإجمالي الجزئي:</span><span className="text-white font-bold">{cartTotal} EGP</span></div>
              <div className="flex justify-between text-slate-400"><span>الشحن والرسوم:</span><span className="text-green-400 font-bold">مـجـانـاً</span></div>
              <div className="flex justify-between text-slate-400"><span>بوابة الدفع:</span><span className="text-purple-400 font-bold">Stripe آمن 100%</span></div>
              <hr className="border-white/5 my-2"/>
              <div className="flex justify-between font-black text-base text-white"><span>الإجمالي النهائي:</span><span className="text-cyan-400">{cartTotal} EGP</span></div>
            </div>
            
            {/* زر الدفع بالكريديت كارد */}
            <button 
              onClick={() => handleCheckout('card')} 
              disabled={isAnyLoading}
              className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-sm py-3 !rounded-full shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100"
            >
              {loadingCard ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> جاري التحويل...
                </>
              ) : (
                <>
                  <CreditCard size={16}/> الدفع بـ Stripe
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;