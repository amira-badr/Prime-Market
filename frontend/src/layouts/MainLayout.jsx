import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const MainLayout = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col justify-between overflow-x-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#0f0a2a] text-white' 
        : 'bg-slate-50 text-slate-900'
    }`}>
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;