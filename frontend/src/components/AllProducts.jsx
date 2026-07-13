import React, { useState } from 'react';
import ProductCard from './ProductCard'; 
import { marketProducts } from '../assets/marketData.js'; 

const AllProducts = () => {
  
  const categories = [
    { display: 'الكل', value: 'الكل' },
    { display: 'إلكترونيات', value: 'electronics' },
    { display: 'أجهزة منزلية', value: 'appliances' },
    { display: 'ملابس', value: 'clothes' },
    { display: 'أدوات صحية', value: 'sanitary' }
  ];
  
  const [activeCategory, setActiveCategory] = useState('الكل');


  const filteredProducts = activeCategory === 'الكل' 
    ? marketProducts 
    : marketProducts.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="w-full py-12 px-4 sm:px-6 md:px-12 bg-transparent" dir="rtl">
      
      
      <div className="w-full text-center mb-12 flex flex-col items-center justify-center select-none">
        <h2 className="text-3xl md:text-4xl font-black mb-3 text-white tracking-wide drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
          جميع المنتجات
          <span className="block w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 mx-auto mt-3 rounded-full"></span>
        </h2>
        
        <p className="text-slate-300 text-sm md:text-base font-medium max-w-2xl opacity-90 mb-8">
          تصفحي تشكيلتنا الواسعة والحصرية المجهزة لكِ خصيصاً بأعلى جودة
        </p>

        
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl w-full">
          {categories.map((category) => (
            <button 
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2.5 text-xs md:text-sm font-black !rounded-full transition-all duration-300 border hover:scale-105 active:scale-95 ${
                activeCategory === category.value
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent shadow-md shadow-cyan-500/25' 
                  : 'bg-[#16113a]/60 text-slate-300 border-slate-800/80 hover:border-purple-500 hover:text-white hover:bg-[#1c164a]'
              }`}
            >
              {category.display}
            </button>
          ))}
        </div>
      </div>

      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center pt-4">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={product.id || index} product={product} />
          ))
        ) : (
          <p className="text-slate-400 text-center col-span-full py-10 font-bold">
           
          </p>
        )}
      </div>

    </section>
  );
};

export default AllProducts;