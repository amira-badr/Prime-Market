import React, { useState } from 'react';
import { PlusCircle, Image, ArrowRight } from 'lucide-react';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: ''
  });

  return (
    <div className="space-y-6 select-none text-right">
      
      
      <div>
        <h1 className="text-xl md:text-2xl font-black text-white mb-1">إضافة منتج جديد ➕</h1>
        <p className="text-xs text-slate-400 font-semibold">قم بملء البيانات التالية لإضافة منتجك مباشرة إلى سوق Prime Market.</p>
      </div>

      <div className="bg-[#140b32]/40 border border-purple-500/10 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.02)] max-w-3xl mx-auto">
        <form className="space-y-5">
          
          {/* اسم المنتج */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 block">اسم المنتج</label>
            <input 
              type="text" 
              placeholder="مثال: طقم خلاطات مياه فاخر - لونا"
              className="w-full bg-white/[0.03] border border-purple-500/10 focus:border-purple-500/40 rounded-xl px-4 py-3 text-xs text-white outline-none transition-all text-right font-semibold"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* السعر */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">السعر (ج.م)</label>
              <input 
                type="number" 
                placeholder="0.00"
                className="w-full bg-white/[0.03] border border-purple-500/10 focus:border-purple-500/40 rounded-xl px-4 py-3 text-xs text-white outline-none transition-all text-right font-semibold"
              />
            </div>

            {/* القسم */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">القسم</label>
              <select className="w-full bg-[#140b32] border border-purple-500/10 focus:border-purple-500/40 rounded-xl px-4 py-3 text-xs text-slate-300 outline-none transition-all text-right font-semibold cursor-pointer">
                <option value="">اختر القسم...</option>
                <option value="sanitary">Sanitary (أدوات صحية)</option>
                <option value="electronics">Electronics (إلكترونيات)</option>
                <option value="appliances">Appliances (أجهزة منزلية)</option>
              </select>
            </div>

            {/* الكمية / المخزون */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">الكمية المتوفرة</label>
              <input 
                type="number" 
                placeholder="مثال: 10"
                className="w-full bg-white/[0.03] border border-purple-500/10 focus:border-purple-500/40 rounded-xl px-4 py-3 text-xs text-white outline-none transition-all text-right font-semibold"
              />
            </div>
          </div>

          {/* وصف المنتج */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 block">وصف المنتج</label>
            <textarea 
              rows="4"
              placeholder="اكتب تفاصيل ومميزات المنتج هنا..."
              className="w-full bg-white/[0.03] border border-purple-500/10 focus:border-purple-500/40 rounded-xl px-4 py-3 text-xs text-white outline-none transition-all text-right font-semibold resize-none"
            ></textarea>
          </div>

          {/* رفع صور المنتج */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 block">صور المنتج</label>
            <div className="border border-dashed border-purple-500/20 hover:border-purple-500/40 bg-white/[0.01] rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2">
              <Image className="text-purple-400" size={24} />
              <span className="text-[11px] text-slate-400 font-bold">اضغط هنا لرفع صور المنتج أو اسحبها مباشرة</span>
              <span className="text-[9px] text-slate-500">PNG, JPG تصل إلى 5 ميجابايت</span>
            </div>
          </div>

          {/* أزرار الحفظ */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button 
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-black text-xs py-3 px-6 !rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:opacity-95 border-0 cursor-pointer"
            >
              <PlusCircle size={15} /> نشر المنتج الآن
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default AddProduct;