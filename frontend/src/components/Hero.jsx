import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, Clock } from 'lucide-react';
import heroImage from '../assets/hero.jpg'; 

const Hero = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <section 
      className={`w-full min-h-[95vh] pt-28 flex flex-col justify-center px-6 md:px-16 py-12 transition-colors duration-300 select-none relative overflow-hidden ${
        isDarkMode ? 'bg-[#09031a]' : 'bg-slate-50' 
      }`}
    >
      <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-fuchsia-500/35 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-5 right-5 w-[550px] h-[550px] bg-purple-600/40 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-indigo-500/30 rounded-full blur-[110px] pointer-events-none animate-pulse"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto relative z-10" dir="ltr">
        
        <div className="flex flex-col text-left items-start">
          <h1 className={`text-4xl md:text-6xl font-black leading-tight mb-4 tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            اكتشف أفضل المنتجات <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
              بأفضل الأسعار
            </span>
          </h1>
          
          <p className={`text-sm md:text-base mb-8 max-w-lg leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`} dir="rtl">
            تسوق أحدث منتجات الإلكترونيات والأزياء وأدوات التجميل والأجهزة المنزلية بأفضل الأسعار المتاحة حصرياً لدينا.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <button onClick={() => window.location.href = '/shop'} className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-black text-xs md:text-sm px-12 py-4 !rounded-full flex items-center gap-2 shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:shadow-[0_0_50px_rgba(217,70,239,0.9)] transition-all border-0 cursor-pointer text-right" dir="rtl">
              <ShoppingCart size={16} /> تسوق الآن
            </button>
            <button onClick={() => window.location.href = '/categories'} className={`border font-black text-xs md:text-sm px-12 py-4 !rounded-full flex items-center gap-2 transition-all cursor-pointer bg-transparent ${isDarkMode ? 'border-white/40 text-white hover:bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm'}`} dir="rtl">
              استكشف الأقسام <ArrowLeft size={16} />
            </button>
          </div>

          <div className={`flex flex-wrap items-center gap-6 md:gap-8 border-t pt-6 w-full ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`} dir="rtl">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="text-cyan-400" size={22} />
              <div className="text-right">
                <h4 className={`text-xs md:text-sm font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>جودة مضمونة</h4>
                <p className={`text-[10px] md:text-[11px] font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>منتجات أصلية 100%</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2.5">
              <Truck className="text-purple-400" size={22} />
              <div className="text-right">
                <h4 className={`text-xs md:text-sm font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>شحن سريع</h4>
                <p className={`text-[10px] md:text-[11px] font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>توصيل لجميع المحافظات</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="text-fuchsia-400" size={22} />
              <div className="text-right">
                <h4 className={`text-xs md:text-sm font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>دعم 24/7</h4>
                <p className={`text-[10px] md:text-[11px] font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>خدمة عملاء متاحة دائماً</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-center w-full relative">
          <div className="absolute -top-6 z-20 bg-gradient-to-r from-amber-500 via-purple-600 to-fuchsia-600 text-white font-black text-[10px] md:text-xs px-6 py-2.5 rounded-full shadow-[0_0_25px_rgba(217,70,239,0.6)] border border-white/20 uppercase tracking-wide">
            ✨ PREMIUM SELECTION | التشكيلة الفاخرة ✨
          </div>

          <div className="relative p-4.5 rounded-[2.2rem] bg-gradient-to-tr from-purple-800 via-fuchsia-600 to-cyan-400 shadow-[0_0_60px_rgba(168,85,247,0.7)] w-full max-w-md lg:max-w-xl transition-transform hover:scale-[1.02] duration-500">
            <div className={`rounded-[1.9rem] p-2.5 overflow-hidden backdrop-blur-xl ${isDarkMode ? 'bg-[#09041f]/95' : 'bg-white/90'}`}>
              <img 
                src={heroImage} 
                alt="Hero Banner" 
                className="w-full h-auto object-cover rounded-[1.5rem] block select-none pointer-events-none"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;