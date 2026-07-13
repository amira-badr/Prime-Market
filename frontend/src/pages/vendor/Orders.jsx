import React from 'react';
import { Clock, CheckCircle, Truck, Eye } from 'lucide-react';

const VendorOrders = () => {
  const myOrders = [
    { id: '#PR-9041', customer: 'أحمد رأفت', items: 'شاشة عرض ذكية (×1)', total: '8,500 ج.م', date: '2026/06/28', status: 'delivered' },
    { id: '#PR-8832', customer: 'سارة كريم', items: 'طقم خلاطات مياه (×1)', total: '3,400 ج.م', date: '2026/06/30', status: 'shipping' },
    { id: '#PR-7612', customer: 'محمد علي', items: 'خلاط كهربائي سريع (×2)', total: '2,400 ج.م', date: '2026/07/01', status: 'pending' }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'delivered':
        return <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-black flex items-center gap-1 justify-center w-fit mx-auto"><CheckCircle size={12} /> تم التوصيل</span>;
      case 'shipping':
        return <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-[10px] font-black flex items-center gap-1 justify-center w-fit mx-auto"><Truck size={12} /> قيد الشحن</span>;
      default:
        return <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-[10px] font-black flex items-center gap-1 justify-center w-fit mx-auto"><Clock size={12} /> قيد الانتظار</span>;
    }
  };

  return (
    <div className="space-y-6 select-none text-right">
      
      <div>
        <h1 className="text-xl md:text-2xl font-black text-white mb-1">طلبات المتجر 🛒</h1>
        <p className="text-xs text-slate-400 font-semibold">تابع حالة المبيعات والطلبات التي قام العملاء بشرائها من متجرك.</p>
      </div>

      
      <div className="bg-[#140b32]/40 border border-purple-500/10 rounded-2xl p-5 md:p-6 backdrop-blur-md overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.02)]">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-slate-400">
                <th className="pb-3 font-bold pr-2">رقم الطلب</th>
                <th className="pb-3 font-bold">العميل</th>
                <th className="pb-3 font-bold">المنتجات</th>
                <th className="pb-3 font-bold">الإجمالي</th>
                <th className="pb-3 font-bold">التاريخ</th>
                <th className="pb-3 font-bold text-center">الحالة</th>
                <th className="pb-3 font-bold text-center">تفاصيل</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 font-semibold divide-y divide-white/5">
              {myOrders.map((order) => (
                <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 pr-2 text-purple-400 font-black">{order.id}</td>
                  <td className="py-4 text-white font-bold">{order.customer}</td>
                  <td className="py-4 text-slate-400 text-[11px]">{order.items}</td>
                  <td className="py-4 text-fuchsia-400 font-black">{order.total}</td>
                  <td className="py-4 text-slate-400 text-[11px]">{order.date}</td>
                  <td className="py-4 text-center">{getStatusBadge(order.status)}</td>
                  <td className="py-4 text-center">
                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 transition-colors border-0 cursor-pointer">
                      <Eye size={14} />
                    </button>
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

export default VendorOrders;