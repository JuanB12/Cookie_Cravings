import React, { useState } from 'react';

const CookieProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-300 ${isHovered ? 'transform -translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 bg-amber-50 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <span className="text-7xl">🍪</span>
      </div>
      <h3 className="text-xl font-bold text-amber-900">{product.name}</h3>
      <p className="text-amber-700 my-2">{product.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-2xl font-bold text-rose-500">${product.price}</span>
        <button 
          onClick={() => onAddToCart(product)}
          className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-full transition-colors"
        >
          Añadir
        </button>
      </div>
    </div>
  );
};

export default CookieProductCard;