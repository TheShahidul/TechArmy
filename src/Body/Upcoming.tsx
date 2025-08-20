import React from 'react';

const products = [
  { id: 1, name: 'Next-Gen VR Headset', price: '899', image: '/vite.svg' },
  { id: 2, name: 'Foldable Smartphone', price: '1500', image: '/vite.svg' },
  { id: 3, name: 'Smartwatch Pro', price: '299', image: '/vite.svg' },
  { id: 4, name: 'Portable Gaming Console', price: '399', image: '/vite.svg' },
];

const Upcoming: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Upcoming Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-blue-500 font-bold mt-2">Est. Price: ${product.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md opacity-50 cursor-not-allowed">
                Notify Me
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
