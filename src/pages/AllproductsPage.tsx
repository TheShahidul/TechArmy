
import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Allproducts: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Allproducts;
