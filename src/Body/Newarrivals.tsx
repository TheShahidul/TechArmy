import React from 'react';

const products = [
  { id: 1, name: 'Laptop Pro X', price: '1200', image: '/vite.svg' },
  { id: 2, name: 'Gaming Mouse RGB', price: '75', image: '/vite.svg' },
  { id: 3, name: '4K Monitor Ultra', price: '450', image: '/vite.svg' },
  { id: 4, name: 'Mechanical Keyboard', price: '120', image: '/vite.svg' },
  { id: 5, name: 'SSD 1TB NVMe', price: '90', image: '/vite.svg' },
  { id: 6, name: 'Webcam HD', price: '50', image: '/vite.svg' },
];

const Newarrivals: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-blue-500 font-bold mt-2">${product.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newarrivals;
