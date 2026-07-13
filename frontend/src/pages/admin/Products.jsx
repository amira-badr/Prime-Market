import React from 'react';
import { Trash2, AlertTriangle, Eye } from 'lucide-react';

const AdminProducts = () => {
  const globalProducts = [
    { id: 1, name: 'شاشة عرض ذكية 4K', vendor: 'متجر محمود للإلكترونيات', price: '8,500 ج.م', stock: 12 },
    { id: 2, name: 'طقم خلاطات مياه فاخر - لونا', vendor: 'لونا للأدوات الصحية', price: '3,400 ج.م', stock: 8 },
    { id: 3, name: 'سماعة بلوتوث لاسلكية', vendor: 'ألفا ستور', price: '950 ج.م', stock: 0 },
  ];

  return (
    <div className="space-y-6 select-none text-right">
      <div>
        <h1 className="text-xl md:text-2xl font-black text-white mb-1">الرقابة على المنتجات 🛍️</h1>
        <p className="text-xs text-slate-400 font-semibold">مراجعة كافة المنتجات المعروضة من قِبل التجار في المنصة وحذف المخالف منها.</p>
      </div>

      <div className="bg-[#140b32]/40 border border-purple-500/10 rounded-2xl p-5 md:p-6 backdrop-blur-md overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.02)]">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-slate-400">
                <th className="pb-3 font-bold pr-2">المنتج</th>
                <th className="pb-3 font-bold">التاجر / المتجر</th>
                <th className="pb-3 font-bold">السعر</th>
                <th className="pb-3 font-bold text-center">المخزون الحالي</th>
                <th className="pb-3 font-bold text-center">الإجراءات الإدارية</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 font-semibold divide-y divide-white/5">
              {globalProducts.map((prod) => (
                <tr key={prod.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 pr-2 text-white font-black">{prod.name}</td>
                  <td className="py-4 text-purple-300 font-medium">{prod.vendor}</td>
                  <td className="py-4 text-fuchsia-400 font-bold">{prod.price}</td>
                  <td className="py-4 text-center">
                    {prod.stock > 0 ? (
                      <span className="text-slate-300">{prod.stock} قطعة</span>
                    ) : (
                      <span className="text-amber-400 font-black flex items-center gap-1 justify-center"><AlertTriangle size={12}/> نفد المخزون</span>
                    )}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 transition-colors border-0 cursor-pointer">
                        <Eye size={14} />
                      </button>
                      <button className="p-2 bg-rose-500/10 hover:bg-rose-500/20 rounded-lg text-rose-400 transition-colors border-0 cursor-pointer" title="حذف منتج مخالف">
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

export default AdminProducts;