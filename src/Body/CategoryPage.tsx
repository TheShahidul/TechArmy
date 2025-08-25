
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './products';
import ProductCard from './ProductCard';

const CategoryPage: React.FC = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory?: string }>();

  const filteredProducts = products.filter(product => {
    if (subcategory) {
      return product.category.toLowerCase() === category?.toLowerCase() && product.subcategory.toLowerCase() === subcategory.toLowerCase();
    }
    return product.category.toLowerCase() === category?.toLowerCase();
  });

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">{subcategory || category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
