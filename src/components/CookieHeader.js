import React from 'react';

const CookieHeader = () => {
  return (
    <header className="bg-amber-50 py-6 px-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-4xl font-bold text-rose-400 font-serif">Cookie Cravings</h1>
          <p className="text-amber-800 italic">La galleta que soñaste, ahora es real</p>
        </div>
        <div className="relative w-64 h-64 bg-amber-100 rounded-full overflow-hidden border-4 border-amber-200">
          {/* Imagen de galleta hero */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-amber-300 text-9xl">🍪</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CookieHeader;