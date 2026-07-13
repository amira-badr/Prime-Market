import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 شكراً لتواصلك معنا! تم استلام رسالتك بنجاح.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-purple-500/20 p-8 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* معلومات الاتصال */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              تواصل معنا
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
           يسعدنا استقبال استفساراتكم واقتراحاتكم حول منصة  prime market
           فريقنا متواجد ديما لخدمتكم.

            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <Mail className="text-purple-400 w-5 h-5" />
              <span className="text-gray-300 text-sm">support@primemarket.com</span>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <Phone className="text-purple-400 w-5 h-5" />
              <span className="text-gray-300 text-sm" dir="ltr">+20 123 456 7890</span>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <MapPin className="text-purple-400 w-5 h-5" />
              <span className="text-gray-300 text-sm">المنيا، مصر</span>
            </div>
          </div>

          <div className="text-xs text-gray-500 border-t border-white/5 pt-4">
            Prime Market © 2026
          </div>
        </div>

        {/* فورم إرسال الرسالة */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-purple-400 mb-1 mr-1">الاسم بالكامل</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="اكتب اسمك هنا..."
            />
          </div>

          <div>
            <label className="block text-xs text-purple-400 mb-1 mr-1">البريد الإلكتروني</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="block text-xs text-purple-400 mb-1 mr-1">رسالتك</label>
            <textarea
              required
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
              placeholder="اكتب تفاصيل رسالتك هنا..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl text-sm transition-all flex items-center justify-center space-x-2 space-x-reverse shadow-lg shadow-purple-500/20"
          >
            <span>إرسال الرسالة الآن</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;