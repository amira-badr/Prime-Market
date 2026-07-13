import React from 'react';
import { Users, ShoppingBag, BarChart3, ArrowUpRight, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  // بيانات كروت الإحصائيات السريعة
  const stats = [
    { label: 'إجمالي المستخدمين', value: '1,240 عـميل', icon: <Users size={20} />, change: '+12%', color: 'from-blue-600 to-cyan-600' },
    { label: 'المنتجات المعروضة', value: '458 منـتج', icon: <ShoppingBag size={20} />, change: '+5%', color: 'from-purple-600 to-fuchsia-600' },
    { label: 'أرباح المنصة العامة', value: '185,000 ج.م', icon: <BarChart3 size={20} />, change: '+28%', color: 'from-emerald-600 to-teal-600' },
  ];

  return (
    <div className="space-y-8 select-none text-right">
      
      {/* رأس الصفحة */}
      <div>
        <h1 className="text-xl md:text-2xl font-black text-white mb-1">لوحة الإحصائيات العامة 📊</h1>
        <p className="text-xs text-slate-400 font-semibold">متابعة حية وأداء شامل لجميع عمليات البيع وحسابات المستخدمين في Prime Market.</p>
      </div>

      {/* كروت الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="bg-[#140b32]/40 border border-purple-500/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.01)] group hover:border-purple-500/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg`}>
                {stat.icon}
              </div>
              <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full text-emerald-400 font-bold flex items-center gap-0.5">
                <ArrowUpRight size={10} /> {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-slate-400 text-xs font-bold">{stat.label}</p>
              <h3 className="text-xl font-black text-white mt-1 font-mono tracking-wide">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      
      <div className="bg-[#140b32]/40 border border-purple-500/10 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.02)]">
        <div className="flex items-center gap-3 mb-4 text-purple-400">
          <TrendingUp size={18} />
          <h2 className="text-sm font-black text-white">حالة النظام والملخص المالي</h2>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed font-medium">
          جميع السيرفرات تعمل بكفاءة مستقرة 100%. تم فحص بوابات الدفع الإلكتروني وتحديث القيود المالية للتجار تلقائياً بناءً على آخر حركات شحن معتمدة في المنصة.
        </p>
      </div>

    </div>
  );
};

export default AdminDashboard;