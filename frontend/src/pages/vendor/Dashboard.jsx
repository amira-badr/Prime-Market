import React from 'react';
import { ShoppingBag, DollarSign, TrendingUp } from 'lucide-react';

const VendorDashboard = () => {
  return (
    <div dir="rtl">
      <h2 className="text-2xl font-black mb-6">لوحة تحكم المتجر والشركاء (Vendor)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#16113a] border border-purple-500/10 p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-2"><span className="text-sm text-slate-400">مبيعات متجري الخاصة</span><DollarSign className="text-green-400" size={20}/></div>
          <p className="text-2xl font-black text-white">45,000 <small className="text-xs">EGP</small></p>
        </div>
        <div className="bg-[#16113a] border border-purple-500/10 p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-2"><span className="text-sm text-slate-400">أرباحي الصافية (بعد العمولة)</span><TrendingUp className="text-cyan-400" size={20}/></div>
          <p className="text-2xl font-black text-cyan-400">42,750 <small className="text-xs">EGP</small></p>
        </div>
        <div className="bg-[#16113a] border border-purple-500/10 p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-2"><span className="text-sm text-slate-400">طلبات بانتظار الشحن</span><ShoppingBag className="text-amber-400" size={20}/></div>
          <p className="text-2xl font-black text-white">3 <small className="text-xs">طلبات</small></p>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;