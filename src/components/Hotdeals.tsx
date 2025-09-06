
import React from 'react';
import { products } from './products';
import ProductCard from './ProductCard';

const Hotdeals: React.FC = () => {
  const hotDealProducts = products.filter(product => product.status === 'Hot Deal');

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Hot Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {hotDealProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Hotdeals;
