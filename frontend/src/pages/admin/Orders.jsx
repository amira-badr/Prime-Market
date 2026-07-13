import React from 'react';
import { Eye, CheckCircle2, ShieldAlert } from 'lucide-react';

const AdminOrders = () => {
  const allOrders = [
    { id: '#PR-9041', customer: 'أحمد رأفت', vendor: 'محمود للإلكترونيات', total: '8,500 ج.م', status: 'تم التوصيل' },
    { id: '#PR-8832', customer: 'سارة كريم', vendor: 'لونا للأدوات الصحية', total: '3,400 ج.م', status: 'جاري الشحن' },
    { id: '#PR-7612', customer: 'محمد علي', vendor: 'ألفا ستور', total: '2,400 ج.م', status: 'معلق' }
  ];

  return (
    <div className="space-y-6 select-none text-right">
      <div>
        <h1 className="text-xl md:text-2xl font-black text-white mb-1">الطلبات والمبيعات العامة 📊</h1>
        <p className="text-xs text-slate-400 font-semibold">لوحة المراقبة المالية وحركات الشحن لجميع العمليات داخل السيستم.</p>
      </div>

      <div className="bg-[#140b32]/40 border border-purple-500/10 rounded-2xl p-5 md:p-6 backdrop-blur-md overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.02)]">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-slate-400">
                <th className="pb-3 font-bold pr-2">رقم الطلب</th>
                <th className="pb-3 font-bold">العميل</th>
                <th className="pb-3 font-bold">المتجر المسؤول</th>
                <th className="pb-3 font-bold">المبلغ الإجمالي</th>
                <th className="pb-3 font-bold text-center">الحالة العامة</th>
                <th className="pb-3 font-bold text-center">عرض</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 font-semibold divide-y divide-white/5">
              {allOrders.map((order) => (
                <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 pr-2 text-fuchsia-400 font-black">{order.id}</td>
                  <td className="py-4 text-white font-bold">{order.customer}</td>
                  <td className="py-4 text-purple-300">{order.vendor}</td>
                  <td className="py-4 text-emerald-400 font-black">{order.total}</td>
                  <td className="py-4 text-center">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      order.status === 'تم التوصيل' ? 'bg-emerald-500/10 text-emerald-400' :
                      order.status === 'جاري الشحن' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-amber-500/10 text-amber-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
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

export default AdminOrders;