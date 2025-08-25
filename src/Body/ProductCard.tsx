
import React from 'react';
import type { Product } from './products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
      <div className="p-2">
        <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
        <p className="text-blue-500 font-bold mt-2">${product.price}</p>
        {product.status === 'Upcoming' ? (
          <button className="mt-4 w-full bg-blue-500 text-white py-1 rounded-md opacity-50 cursor-not-allowed">
            Notify Me
          </button>
        ) : (
          <button className="mt-4 w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
