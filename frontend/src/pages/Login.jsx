import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; 
// import { useAuth } from '../context/AuthContext'; 
import { Mail, Lock, LogIn, ArrowRight, Shield, ShoppingBag, Store } from 'lucide-react';

const Login = () => {
  const { darkMode } = useCart();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تسجيل دخول بـ:", { email, password, role });
    
    if (role === 'admin') window.location.href = '/admin/dashboard';
    else if (role === 'vendor') window.location.href = '/vendor/dashboard';
    else window.location.href = '/';
  };

  return (
    <div className={`w-full min-h-screen pt-24 flex items-center justify-center px-4 relative overflow-hidden select-none transition-colors duration-300 ${
      darkMode ? 'bg-[#09031a]' : 'bg-[#0e0729]'
    }`}>
      
      
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/25 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        
        <div className={`p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-300 ${
          darkMode 
            ? 'bg-[#140b32]/80 border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.2)]' 
            : 'bg-[#1c0f4f]/90 border-fuchsia-500/30 shadow-[0_0_40px_rgba(217,70,239,0.25)]'
        }`}>
          
          
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-wide">مرحباً بك مجدداً</h2>
            <p className="text-xs text-slate-400 font-semibold">سجل دخولك للتحكم بحسابك في Prime Market</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
            
            
            <div className="grid grid-cols-3 gap-2.5 p-1.5 bg-[#0a041c] rounded-full border border-white/5">
              <button
                type="button"
                onClick={() => setRole('customer')}
                className={`py-2 px-3 text-[11px] font-black !rounded-full flex items-center justify-center gap-1.5 transition-all border-0 cursor-pointer ${
                  role === 'customer' 
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md' 
                    : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                <ShoppingBag size={13} /> عميل
              </button>
              
              <button
                type="button"
                onClick={() => setRole('vendor')}
                className={`py-2 px-3 text-[11px] font-black !rounded-full flex items-center justify-center gap-1.5 transition-all border-0 cursor-pointer ${
                  role === 'vendor' 
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md' 
                    : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Store size={13} /> تاجر
              </button>

              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`py-2 px-3 text-[11px] font-black !rounded-full flex items-center justify-center gap-1.5 transition-all border-0 cursor-pointer ${
                  role === 'admin' 
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md' 
                    : 'bg-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Shield size={13} /> مدير
              </button>
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
              <div className="flex justify-between items-center mb-2 px-1">
                <label className="text-xs font-bold text-slate-300 block">كلمة المرور</label>
                <a href="#forgot" className="text-[10px] font-bold text-fuchsia-400 hover:underline">نسيت كلمة المرور؟</a>
              </div>
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
              <LogIn size={15} /> دخول للمنصة
            </button>
          </form>

          
          <div className="text-center mt-6 pt-5 border-t border-white/5">
            <p className="text-xs text-slate-400 font-semibold">
              ليس لديك حساب؟{' '}
              <button onClick={() => window.location.href = '/register'} className="text-fuchsia-400 font-black bg-transparent border-0 cursor-pointer hover:underline inline-flex items-center gap-1">
                سجل الآن <ArrowRight size={12} className="rotate-180" />
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;