import React from 'react';

const CookieCart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-amber-50 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-amber-900 mb-4">Tu Caja de Galletas</h2>
      {cartItems.length === 0 ? (
        <p className="text-amber-700">Tu caja está vacía... ¡llénala de felicidad!</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between py-3 border-b border-amber-200">
              <div>
                <h3 className="font-medium text-amber-900">{item.name}</h3>
                <p className="text-sm text-amber-600">${item.price} c/u</p>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button 
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center"
                >
                  +
                </button>
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="ml-4 text-rose-400 hover:text-rose-600"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-amber-300">
            <div className="flex justify-between text-lg font-bold text-amber-900">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-rose-400 hover:bg-rose-500 text-white py-3 rounded-lg transition-colors">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieCart;

// DONE