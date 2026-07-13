import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const productImage = product.img || product.image;
  
  // 👈 تحديد الـ ID الحقيقي سواء جاي من MongoDB (_id) أو عادي (id)
  const productId = product._id || product.id;

  return (
    <div className="w-full max-w-[280px] mx-auto rounded-[2rem] p-3 border border-white/10 bg-[#1c164a]/85 backdrop-blur-md shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group flex flex-col justify-between overflow-hidden select-none" dir="rtl">
      
      <div 
        onClick={() => navigate(`/product/${productId}`)} // 👈 تعديل الرابط هنا
        className="relative w-full aspect-square rounded-[1.5rem] bg-[#251e5c] p-4 flex items-center justify-center overflow-hidden shrink-0 cursor-pointer"
      >
        <button className="absolute top-3 right-3 p-2 rounded-full bg-[#130d35]/80 text-slate-300 hover:text-pink-500 hover:scale-110 transition-all z-10">
          <Heart size={16} />
        </button>

        <img 
          src={productImage} 
          alt={product.title || product.name} 
          className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="pt-3 flex flex-col justify-between flex-grow">
        <div className="flex items-center gap-1 mb-1">
          <Star size={13} className="fill-amber-400 text-amber-400" />
          <span className="text-amber-400 text-xs font-black">{product.rating || 4.7}</span>
        </div>

        <div className="mb-2 cursor-pointer" onClick={() => navigate(`/product/${productId}`)}> {/* 👈 تعديل الرابط هنا برضه */}
          <h3 className="text-white font-black text-sm leading-snug line-clamp-1 group-hover:text-cyan-400 transition-colors">
            {product.title || product.name}
          </h3>
          <p className="text-slate-400 text-[11px] font-medium mt-0.5">
            {product.subCategory || product.category || 'متجر Prime المميز'}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-white/5">
          <div className="text-right">
            <span className="text-cyan-400 font-black text-sm">{product.price}</span>
            <span className="text-slate-400 text-[10px] font-bold mr-1">EGP</span>
          </div>

          <button 
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-black text-xs px-4 py-2.5 !rounded-full shadow-md hover:from-cyan-400 hover:to-fuchsia-500 hover:scale-[1.03] active:scale-95 transition-all duration-300"
          >
            <ShoppingCart size={13} />
            السلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;