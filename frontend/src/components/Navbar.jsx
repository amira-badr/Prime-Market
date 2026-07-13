import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.svg';
import { 
  Home, 
  Layers, 
  PhoneCall, 
  Search, 
  ShoppingCart, 
  ShoppingBag, 
  User, 
  Sun, 
  Moon,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const cartContext = useCart();
  const { getCartCount, cartCount } = cartContext || {};
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const finalCount = typeof getCartCount === 'function' ? getCartCount() : (getCartCount || cartCount || 0);

  const navigateTo = (path) => {
    window.location.href = path;
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-20 border-b transition-all duration-300 backdrop-blur-md px-6 flex items-center justify-between select-none ${
      isDarkMode 
        ? 'bg-[#180e3d]/90 border-purple-500/20 text-white shadow-[0_4px_30px_rgba(168,85,247,0.3)]' 
        : 'bg-white/90 border-slate-200 text-slate-900 shadow-md'
    }`} dir="ltr">
      
      <div onClick={() => navigateTo('/')} className="flex items-center cursor-pointer">
        <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
      </div>

      <div className="hidden md:flex items-center gap-8 font-extrabold text-sm tracking-wide">
        <button onClick={() => navigateTo('/')} className={`bg-transparent border-0 cursor-pointer flex items-center gap-2 hover:text-fuchsia-400 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
          <Home size={16} className="text-cyan-400" /> Home
        </button>
        
        <button onClick={() => navigateTo('/')} className={`bg-transparent border-0 cursor-pointer flex items-center gap-2 hover:text-fuchsia-400 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
          <ShoppingBag size={16} className="text-indigo-400" /> Shop
        </button>
        
        <button onClick={() => navigateTo('/')} className={`bg-transparent border-0 cursor-pointer flex items-center gap-2 hover:text-fuchsia-400 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
          <Layers size={16} className="text-purple-400" /> Categories
        </button>
        
        <button onClick={() => navigateTo('/contact')} className={`bg-transparent border-0 cursor-pointer flex items-center gap-2 hover:text-fuchsia-400 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
          <PhoneCall size={16} className="text-fuchsia-400" /> Contact Us
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block w-56">
          <input 
            type="text" 
            placeholder="Search products..." 
            className={`w-full text-xs rounded-full py-2 pl-9 pr-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ${
              isDarkMode ? 'bg-[#2f1f75] text-white border-transparent placeholder-gray-300' : 'bg-slate-100 text-slate-900 border-slate-200 placeholder-slate-400'
            }`}
          />
          <Search size={14} className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-gray-300' : 'text-slate-400'}`} />
        </div>

        <button onClick={toggleTheme} className="p-2 hover:scale-110 transition-transform bg-transparent border-0 cursor-pointer text-gray-300 hover:text-amber-400">
          {isDarkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-fuchsia-500" />}
        </button>

        <button onClick={() => navigateTo('/cart')} className={`relative p-2 hover:text-fuchsia-400 transition-colors bg-transparent border-0 cursor-pointer ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
          <ShoppingCart size={20} />
          {finalCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
              {finalCount}
            </span>
          )}
        </button>

        <button onClick={() => navigateTo('/login')} title="Sign In" className="p-2.5 !rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-md flex items-center justify-center border-0 cursor-pointer hover:opacity-90 transition-opacity">
          <User size={18} />
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 transition-colors bg-transparent border-0 cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className={`absolute top-20 left-0 right-0 z-40 p-6 flex flex-col gap-4 border-b md:hidden ${
          isDarkMode ? 'bg-[#0f0a2c] border-purple-950/60 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-lg'
        }`}>
          <button onClick={() => navigateTo('/')} className={`bg-transparent border-0 cursor-pointer flex items-center gap-3 py-2 font-bold hover:text-fuchsia-400 text-right w-full ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
            <Home size={18} className="text-cyan-400" /> Home
          </button>
        
          <button onClick={() => navigateTo('/')} className={`bg-transparent border-0 cursor-pointer flex items-center gap-3 py-2 font-bold hover:text-fuchsia-400 text-right w-full ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
            <ShoppingBag size={18} className="text-indigo-400" /> Shop
          </button>
          
          <button onClick={() => navigateTo('/')} className={`bg-transparent border-0 cursor-pointer flex items-center gap-3 py-2 font-bold hover:text-fuchsia-400 text-right w-full ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
            <Layers size={18} className="text-purple-400" /> Categories
          </button>
          
          <button onClick={() => navigateTo('/contact')} className={`bg-transparent border-0 cursor-pointer flex items-center gap-3 py-2 font-bold hover:text-fuchsia-400 text-right w-full ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
            <PhoneCall size={18} className="text-fuchsia-400" /> Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;