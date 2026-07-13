import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0b051e] flex flex-col items-center justify-center text-center p-4 select-none">
      <div className="space-y-4 animate-bounce">
        <HelpCircle size={80} className="text-fuchsia-500 mx-auto drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
      </div>
      
      <h1 className="text-6xl font-black text-white mt-4 font-mono">404</h1>
      <h2 className="text-xl font-bold text-slate-200 mt-2">عذراً، الصفحة غير موجودة!</h2>
      <p className="text-xs text-slate-400 max-w-sm mt-1 font-semibold leading-relaxed">
        الرابط الذي تحاول الوصول إليه قد يكون تم نقله، حذفه، أو أنك قمت بكتابة العنوان بشكل غير صحيح.
      </p>

      <Link 
        to="/" 
        className="mt-6 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-black text-xs py-3 px-6 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:opacity-95 transition-all no-underline"
      >
        <Home size={14} /> العودة للرئيسية
      </Link>
    </div>
  );
};

export default NotFound;