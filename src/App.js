import React, { useState } from 'react';
import CookieHeader from './components/CookieHeader';
import CookieProductCard from './components/CookieProductCard';
import CookieCart from './components/CookieCart';
import products from './mock/products';
import testimonials from './mock/testimonials';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <CookieHeader />
      
      <main className="container mx-auto py-8 px-4">
        {currentPage === 'home' && (
          <>
            <section className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8 text-center">Nuestras Galletas Estrella</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                  <CookieProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <CookieCart 
                    cartItems={cartItems}
                    onRemoveItem={removeFromCart}
                    onUpdateQuantity={updateQuantity}
                  />
                </div>
              </div>

              <div className="lg:order-1">
                <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">Testimonios</h3>
                {testimonials.map(testimonial => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md mb-4">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? 'text-amber-400' : 'text-amber-200'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-amber-800 italic mb-2">"{testimonial.comment}"</p>
                    <p className="text-amber-600 font-medium">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="bg-amber-900 text-amber-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">Síguenos en @CookieCravingsMX</p>
          <p>Pedidos por WhatsApp: 55-1234-5678</p>
          <p className="mt-2">Horario: Lunes a Viernes 9am - 6pm</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

// DONE