import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import type { Product } from '../data/productDataDesign'; // Assuming the new data design file
 // Assuming the new data design file

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const {
    name,
    slug,
    images,
    price,
    oldPrice,
    rating,
    reviewsCount,
    tags,
  } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <Link
      to={`/product/${slug}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-200"
    >
      <div className="relative">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-y-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-white text-xs font-bold px-2 py-1 rounded-full z-10 ${
                tag === 'new' ? 'bg-green-500' : tag === 'sale' ? 'bg-red-500' : 'bg-blue-500'
              }`}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">
          {name}
        </h3>

        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({reviewsCount} reviews)</span>
        </div>

        <div className="flex items-baseline space-x-2 mb-4">
          <span className="text-xl font-bold text-blue-600">
            ৳{price.toLocaleString()}
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              ৳{oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full border border-blue-300 text-blue-600 py-2 rounded-md flex items-center justify-center space-x-2 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
        >
          <FaShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
