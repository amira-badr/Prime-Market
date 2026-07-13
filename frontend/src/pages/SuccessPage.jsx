import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Home } from 'lucide-react';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] px-4"
    >
      <div className="bg-[#1c164a]/70 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-10 w-full max-w-lg text-center">

        {/* أيقونة النجاح */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-500/20 p-4 rounded-full">
            <CheckCircle2 size={64} className="text-green-500" />
          </div>
        </div>

        {/* النصوص */}
        <h1 className="text-3xl font-black text-white mb-4">
          تم الدفع بنجاح! 🎉
        </h1>

        <p className="text-slate-300 mb-8 font-medium leading-7">
          شكراً لك يا أميرة، تم استلام طلبك وجاري تجهيزه للشحن.
        </p>

        {/* زر العودة */}
        <button
          onClick={() => navigate('/')}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-105"
        >
          <Home size={20} />
          العودة للرئيسية
        </button>

      </div>
    </div>
  );
};

export default SuccessPage;