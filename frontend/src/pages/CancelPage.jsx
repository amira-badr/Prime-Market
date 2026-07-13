import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle, Home, RefreshCcw } from 'lucide-react';

const CancelPage = () => {
  const navigate = useNavigate();

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] px-4"
    >
      <div className="bg-[#1c164a]/70 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-10 w-full max-w-lg text-center">

        {/* أيقونة الإلغاء */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/20 p-4 rounded-full">
            <XCircle size={64} className="text-red-500" />
          </div>
        </div>

        {/* النصوص */}
        <h1 className="text-3xl font-black text-white mb-4">
          تم إلغاء عملية الدفع ❌
        </h1>

        <p className="text-slate-300 mb-8 font-medium leading-7">
          لم يتم إتمام عملية الدفع.
          <br />
          يمكنك المحاولة مرة أخرى أو العودة للتسوق.
        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => navigate('/cart')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <RefreshCcw size={20} />
            إعادة المحاولة
          </button>

          <button
            onClick={() => navigate('/')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Home size={20} />
            العودة للرئيسية
          </button>

        </div>

      </div>
    </div>
  );
};

export default CancelPage;