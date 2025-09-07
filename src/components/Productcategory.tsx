import React from 'react';
import { Link } from 'react-router-dom';
import { categoriesData } from '../data/categoriesData';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as Io5Icons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as LuIcons from 'react-icons/lu';

const Productcategory: React.FC = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      {/* Title Section */}
      <div className="text-center mb-12"> {/* Increased bottom margin */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 relative inline-block"> {/* Larger, bolder, relative for pseudo-element */}
          Tech That Powers You
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span> {/* Blue underline */}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4">Explore our wide range of IT products</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6"> {/* Added xl:grid-cols-7, adjusted gap */}
        {categoriesData.map((category, index) => {
          let IconComponent: React.ElementType | undefined;

          if (FaIcons[category.icon as keyof typeof FaIcons]) {
            IconComponent = FaIcons[category.icon as keyof typeof FaIcons];
          } else if (MdIcons[category.icon as keyof typeof MdIcons]) {
            IconComponent = MdIcons[category.icon as keyof typeof MdIcons];
          } else if (Io5Icons[category.icon as keyof typeof Io5Icons]) {
            IconComponent = Io5Icons[category.icon as keyof typeof Io5Icons];
          } else if (BsIcons[category.icon as keyof typeof BsIcons]) {
            IconComponent = BsIcons[category.icon as keyof typeof BsIcons];
          } else if (FiIcons[category.icon as keyof typeof FiIcons]) {
            IconComponent = FiIcons[category.icon as keyof typeof FiIcons];
          } else if (LuIcons[category.icon as keyof typeof LuIcons]) {
            IconComponent = LuIcons[category.icon as keyof typeof LuIcons];
          }

          return (
            <Link
              key={index}
              to={category.href}
              className="flex flex-col items-center p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-blue-500" // Enhanced card styling and hover
            >
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mb-4"> {/* Icon background circle */}
                {IconComponent && <IconComponent size={40} className="text-blue-600" />} {/* Icon size adjusted */}
                {!IconComponent && <div className="w-12 h-12 flex items-center justify-center text-gray-500">?</div>}
              </div>
              <span className="text-base font-semibold text-gray-800 text-center mt-2">{category.title}</span> {/* Adjusted text styling */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Productcategory;