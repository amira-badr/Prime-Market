import React from 'react';
import { Edit2, Trash2, Plus, Eye } from 'lucide-react';

const VendorProducts = () => {
  const myProducts = [
    { id: 1, name: 'شاشة عرض ذكية 4K', price: '8,500 ج.م', category: 'Electronics', stock: 12, sales: 45 },
    { id: 2, name: 'تلاجه ذكيه ببابين', price: '1,200 ج.م', category: 'Appliances', stock: 5, sales: 18 },
    { id: 3, name: 'طقم خلاطات مياه فاخر - لونا', price: '3,400 ج.م', category: 'Sanitary', stock: 8, sales: 9 }
  ];

  return (
    <div className="space-y-6 select-none text-right">
      {/* رأس الصفحة */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-white mb-1">منتجات متجري 📦</h1>
          <p className="text-xs text-slate-400 font-semibold">إدارة، تعديل، ومتابعة مخزون المنتجات الخاصة بك في Prime Market.</p>
        </div>
        <button 
          onClick={() => window.location.href = '/vendor/add-product'}
          className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-black text-xs py-3 px-5 !rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:opacity-95 border-0 cursor-pointer"
        >
          <Plus size={15} /> إضافة منتج جديد
        </button>
      </div>

      
      <div className="bg-[#140b32]/40 border border-purple-500/10 rounded-2xl p-5 md:p-6 backdrop-blur-md overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.02)]">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-slate-400">
                <th className="pb-3 font-bold pr-2">المنتج</th>
                <th className="pb-3 font-bold">القسم</th>
                <th className="pb-3 font-bold">السعر</th>
                <th className="pb-3 font-bold text-center">المخزون</th>
                <th className="pb-3 font-bold text-center">المبيعات</th>
                <th className="pb-3 font-bold text-center">إجراءات</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 font-semibold divide-y divide-white/5">
              {myProducts.map((prod) => (
                <tr key={prod.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 pr-2 text-white font-black">{prod.name}</td>
                  <td className="py-4"><span className="text-[10px] bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-md text-purple-300">{prod.category}</span></td>
                  <td className="py-4 text-fuchsia-400 font-bold">{prod.price}</td>
                  <td className="py-4 text-center">{prod.stock} قطعة</td>
                  <td className="py-4 text-center text-emerald-400">{prod.sales} مبيعات</td>
                  <td className="py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 transition-colors border-0 cursor-pointer">
                        <Eye size={14} />
                      </button>
                      <button className="p-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg text-purple-400 transition-colors border-0 cursor-pointer">
                        <Edit2 size={14} />
                      </button>
                      <button className="p-2 bg-rose-500/10 hover:bg-rose-500/20 rounded-lg text-rose-400 transition-colors border-0 cursor-pointer">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorProducts;