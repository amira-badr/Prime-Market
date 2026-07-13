import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import { useCart } from '../context/CartContext';
import { 
  LayoutDashboard, ShoppingBag, Users, FolderTree, 
  Ticket, BarChart3, LogOut, Menu, X, Shield, Store, PlusCircle
} from 'lucide-react';

const DashboardLayout = ({ role = 'vendor' }) => { 
  const { darkMode } = useCart();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  const adminLinks = [
    { label: 'الإحصائيات', icon: <LayoutDashboard size={18} />, to: '/admin/dashboard' },
    { label: 'إدارة المستخدمين', icon: <Users size={18} />, to: '/admin/users' },
    { label: 'إدارة المنتجات', icon: <ShoppingBag size={18} />, to: '/admin/products' },
    { label: 'إدارة الطلبات', icon: <BarChart3 size={18} />, to: '/admin/orders' },
  ];

  
  const vendorLinks = [
    { label: 'لوحة التاجر', icon: <LayoutDashboard size={18} />, to: '/vendor/dashboard' },
    { label: 'إضافة منتج', icon: <PlusCircle size={18} />, to: '/vendor/add-product' },
    { label: 'منتجاتي', icon: <ShoppingBag size={18} />, to: '/vendor/products' },
    { label: 'طلبات المتجر', icon: <BarChart3 size={18} />, to: '/vendor/orders' },
  ];

  const currentLinks = role === 'admin' ? adminLinks : vendorLinks;

  return (
    <div className={`min-h-screen flex text-white font-sans transition-colors duration-300 ${
      darkMode ? 'bg-[#09031a]' : 'bg-[#0e0729]'
    }`} dir="rtl">
      
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 right-0 z-50 w-64 transform border-l backdrop-blur-xl transition-transform duration-300 md:translate-x-0 md:relative ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full'
      } ${
        darkMode ? 'bg-[#140b32]/95 border-purple-500/10' : 'bg-[#1c0f4f]/95 border-fuchsia-500/20'
      }`}>
        <div className="p-6 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-lg shadow-purple-500/30">
              {role === 'admin' ? <Shield size={20} /> : <Store size={20} />}
            </div>
            <span className="font-black text-sm tracking-wide">
              {role === 'admin' ? 'لوحة المدير العام' : 'لوحة التاجر'}
            </span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400 border-0 bg-transparent cursor-pointer">
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {currentLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-xs font-bold rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all decoration-none"
            >
              <span className="text-purple-400">{link.icon}</span>
              {link.label}
            </Link>
          ))}
          <Link 
            to="/login" 
            className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold rounded-xl text-rose-400 hover:bg-rose-500/10 transition-all mt-8 text-right decoration-none"
          >
            <LogOut size={18} /> تسجيل الخروج
          </Link>
        </nav>
      </aside>

      {/* المحتوى الرئيسي */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <header className="md:hidden p-4 flex items-center justify-between border-b border-white/5 bg-[#140b32]/40 backdrop-blur-md">
          <button onClick={() => setSidebarOpen(true)} className="text-white border-0 bg-transparent cursor-pointer">
            <Menu size={24} />
          </button>
          <span className="font-black text-xs">Prime Market</span>
          <div className="w-6"></div>
        </header>

        <main className="p-6 md:p-8 flex-1">
          
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;