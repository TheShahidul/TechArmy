import React from 'react';
import { Link } from 'react-router-dom';
import { popularProductsData } from '../data/popularProductsData';
import { FaStar, FaShoppingCart } from 'react-icons/fa'; // For star ratings and shopping cart icon
import * as FaIcons from 'react-icons/fa'; // Import all Fa icons
import * as MdIcons from 'react-icons/md'; // Import all Md icons
import * as Io5Icons from 'react-icons/io5'; // Import all Io5 icons
import * as BsIcons from 'react-icons/bs'; // Import all Bs icons
import * as FiIcons from 'react-icons/fi'; // Import all Fi icons
import * as LuIcons from 'react-icons/lu'; // Import all Lu icons

const Popularproducts: React.FC = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 relative inline-block">
          Popular Products
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4">Discover our best-selling items</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {popularProductsData.map((product) => {
          let IconComponent: React.ElementType | undefined;

          // Dynamic icon lookup (similar to Productcategory.tsx)
          if (FaIcons[product.icon as keyof typeof FaIcons]) {
            IconComponent = FaIcons[product.icon as keyof typeof FaIcons];
          } else if (MdIcons[product.icon as keyof typeof MdIcons]) {
            IconComponent = MdIcons[product.icon as keyof typeof MdIcons];
          }
          // If not found in MdIcons, try Io5Icons
          else if (Io5Icons[product.icon as keyof typeof Io5Icons]) {
            IconComponent = Io5Icons[product.icon as keyof typeof Io5Icons];
          } else if (BsIcons[product.icon as keyof typeof BsIcons]) {
            IconComponent = BsIcons[product.icon as keyof typeof BsIcons];
          } else if (FiIcons[product.icon as keyof typeof FiIcons]) {
            IconComponent = FiIcons[product.icon as keyof typeof FiIcons];
          } else if (LuIcons[product.icon as keyof typeof LuIcons]) {
            IconComponent = LuIcons[product.icon as keyof typeof LuIcons];
          }

          return (
            <Link
              key={product.id}
              to={product.href}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-200 relative min-h-[20rem]"
            >
              {/* Product Image Section - now uses icon */}
              <div className="relative overflow-hidden aspect-w-1 aspect-h-1 flex items-center justify-center bg-gray-100"> {/* Added flex, items-center, justify-center, bg-gray-100 */}
                {IconComponent && <IconComponent size={64} className="text-blue-600" />} {/* Render icon */}
                {!IconComponent && <div className="w-16 h-16 flex items-center justify-center text-gray-500">?</div>} {/* Fallback */}
              </div>

              {/* Product Label/Badge - Static for now */}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                Best Deal
              </div>

              {/* Product Details Caption */}
              <div className="p-4 flex flex-col justify-between h-full">
                <div> {/* Group for Name and Rating */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-16">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2"> {/* Rating */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Price Section - Moved here, right under reviews */}
                <div className="flex items-baseline space-x-2 mb-3"> {/* mb-3 for spacing before button */}
                  <span className="text-xl font-bold text-white bg-blue-600 px-2 py-1 rounded-md">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
                  )}
                </div>

                {/* Add to Cart Button - Placed at the very bottom, pushed by justify-between */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alert(`Added ${product.name} to cart!`);
                  }}
                  className="w-full border border-blue-300 text-blue-600 py-2 rounded-md flex items-center justify-center space-x-2 transition-colors duration-300 hover:bg-[#111827] hover:text-white"
                >
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Popularproducts;