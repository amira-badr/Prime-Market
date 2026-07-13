import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from '../services/Axios';
import { marketProducts } from '../assets/marketData.js'; // حماية للمنتجات القديمة
import { ShoppingCart, ArrowRight, ShieldCheck, Truck, Percent } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        // 1️⃣ محاولة جلب المنتج من الباك إند الحقيقي
        const response = await axios.get(`/products/${id}`);
        if (response.data) {
          setProduct(response.data);
        } else {
          // 2️⃣ لو السيرفر مبعتش داتا، ندور في الملف الثابت
          const localProduct = marketProducts.find(p => p.id === id || p._id === id);
          setProduct(localProduct || marketProducts[0]);
        }
      } catch (error) {
        console.log("جاري التحويل للملف الثابت كحماية للمنتج القديم");
        // 3️⃣ لو السيرفر رجع خطأ 404 للمنتج القديم، نشغله من الملف الثابت فوراً
        const localProduct = marketProducts.find(p => p.id === id || p._id === id);
        setProduct(localProduct || marketProducts[0]);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  if (loading) return <p className="text-center py-20 text-slate-400 font-bold">جاري تحميل تفاصيل منتجك المميز...</p>;
  if (!product) return <p className="text-center py-20 text-slate-400 font-bold">عذراً، لم يتم العثور على المنتج المطلوب.</p>;

  return (
    <div className="max-w-6xl w-full mx-auto py-16 px-6 md:px-12" dir="rtl">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-black text-slate-400 hover:text-white mb-8 transition-colors">
        <ArrowRight size={16}/> العودة للمنتجات
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#1c164a]/30 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-md">
        {/* شاشة عرض صورة المنتج الحقيقية والمفرغة */}
        <div className="w-full aspect-square bg-[#251e5c] rounded-[2rem] p-8 flex items-center justify-center border border-white/5 shadow-inner">
          <img src={product.img || product.image} alt={product.title || product.name} className="max-h-full max-w-full object-contain transform hover:scale-105 transition-transform duration-500" />
        </div>

        {/* flex-col لضمان ثبات الهيكل والتصميم كما هو */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-black px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 !rounded-full uppercase">
              {product.category || 'عام'}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white mt-3 mb-2 leading-snug">{product.title || product.name}</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{product.description || 'هذا المنتج الحصري مقدم لكم عبر منصة Prime Market بأعلى كفاءة وفحص دقيق لضمان رضاء العملاء.'}</p>

            <div className="p-4 bg-[#130d35]/80 rounded-[1.5rem] border border-white/5 space-y-3 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-cyan-400" /> <span>التاجر المعتمد: <b>متجر الرواد للإلكترونيات</b></span></div>
              <div className="flex items-center gap-2"><Truck size={16} className="text-purple-400" /> <span>الشحن والوصول: <b>شحن سريع لجميع المحافظات</b></span></div>
              <div className="flex items-center gap-2"><Percent size={16} className="text-fuchsia-400" /> <span>سياسة الضمان: <b>ضمان الوكيل الأصلي لمدة عام كامل</b></span></div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
            <div>
              <p className="text-slate-400 text-[11px] font-bold">السعر النهائي للمستهلك</p>
              <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{product.price} <small className="text-xs font-bold text-slate-400">EGP</small></span>
            </div>

            <button onClick={() => addToCart(product)} className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500 text-white font-black text-sm px-8 py-3.5 !rounded-full shadow-lg shadow-purple-500/25 hover:scale-[1.03] active:scale-95 transition-all duration-300">
              <ShoppingCart size={16}/> إضافة لسلة المشتريات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;