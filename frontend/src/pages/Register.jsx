import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { User, Mail, Lock, UserPlus, ArrowRight, Store, ShoppingBag } from 'lucide-react';

const Register = () => {
  const { darkMode } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("إنشاء حساب جديد:", { name, email, password, role });
  
    window.location.href = '/login';
  };

  return (
    <div className={`w-full min-h-screen pt-24 flex items-center justify-center px-4 relative overflow-hidden select-none transition-colors duration-300 ${
      darkMode ? 'bg-[#09031a]' : 'bg-[#0e0729]'
    }`}>
      
      
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="w-full max-w-md relative z-10">
      
        <div className={`p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-300 ${
          darkMode 
            ? 'bg-[#140b32]/80 border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.2)]' 
            : 'bg-[#1c0f4f]/90 border-fuchsia-500/30 shadow-[0_0_40px_rgba(217,70,239,0.25)]'
        }`}>
          
          
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-wide">إنشاء حساب جديد</h2>
            <p className="text-xs text-slate-400 font-semibold">انضم إلينا اليوم وابدأ تجربتك الاحترافية</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
            
            
            <div className="grid grid-cols-2 gap-2.5 p-1.5 bg-[#0a041c] rounded-full border border-white/5">
              <button
                type="button"
                onClick={() => setRole('customer')}
                className={`py-2 px-4 text-xs font-black !rounded-full flex items-center justify-center gap-2 transition-all border-0 cursor-pointer ${
                  role === 'customer' 
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md' 
                    : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                <ShoppingBag size={14} /> حساب عميل (مشتري)
              </button>
              
              <button
                type="button"
                onClick={() => setRole('vendor')}
                className={`py-2 px-4 text-xs font-black !rounded-full flex items-center justify-center gap-2 transition-all border-0 cursor-pointer ${
                  role === 'vendor' 
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md' 
                    : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Store size={14} /> حساب تاجر (بائع)
              </button>
            </div>

            {/* حقل الاسم بالكامل */}
            <div className="relative text-right">
              <label className="text-xs font-bold text-slate-300 block mb-2 mr-1">الاسم بالكامل</label>
              <div className="relative">
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="الاسم الثنائي أو الثلاثي"
                  className="w-full text-xs rounded-xl py-3.5 pl-4 pr-11 text-right focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all bg-[#0a041c] text-white border border-white/10 placeholder-slate-500"
                />
                <User size={16} className="absolute right-4 top-4 text-slate-400" />
              </div>
            </div>

            {/* حقل البريد الإلكتروني */}
            <div className="relative text-right">
              <label className="text-xs font-bold text-slate-300 block mb-2 mr-1">البريد الإلكتروني</label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full text-xs rounded-xl py-3.5 pl-4 pr-11 text-left focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all bg-[#0a041c] text-white border border-white/10 placeholder-slate-500"
                />
                <Mail size={16} className="absolute right-4 top-4 text-slate-400" />
              </div>
            </div>

            {/* حقل كلمة المرور */}
            <div className="relative text-right">
              <label className="text-xs font-bold text-slate-300 block mb-2 mr-1">كلمة المرور</label>
              <div className="relative">
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full text-xs rounded-xl py-3.5 pl-4 pr-11 text-left focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all bg-[#0a041c] text-white border border-white/10 placeholder-slate-500"
                />
                <Lock size={16} className="absolute right-4 top-4 text-slate-400" />
              </div>
            </div>

            
            <button type="submit" className="w-full mt-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:opacity-95 text-white font-black text-xs py-4 !rounded-xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all border-0 cursor-pointer">
              <UserPlus size={15} /> تسجيل حساب جديد
            </button>
          </form>

          {/* العودة لتسجيل الدخول */}
          <div className="text-center mt-6 pt-5 border-t border-white/5">
            <p className="text-xs text-slate-400 font-semibold">
              لديك حساب بالفعل؟{' '}
              <button onClick={() => window.location.href = '/login'} className="text-fuchsia-400 font-black bg-transparent border-0 cursor-pointer hover:underline inline-flex items-center gap-1">
                سجل دخولك <ArrowRight size={12} className="rotate-180" />
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;