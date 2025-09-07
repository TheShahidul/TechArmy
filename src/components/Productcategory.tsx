import React from 'react';
import { Link } from 'react-router-dom';
import { categoriesData } from '../data/categoriesData';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as Io5Icons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import * as LuIcons from 'react-icons/lu';
import SectionTitle from './SectionTitle';

const Productcategory: React.FC = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      {/* Title Section */}
      <SectionTitle title="Tech That Powers You" description="Explore our wide range of IT products" />

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-4"> {/* Added xl:grid-cols-7, adjusted gap */}
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
              className="relative flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-blue-500 aspect-w-8 aspect-h-6 px-1 py-3" // Enhanced card styling and hover
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-0"> {/* Icon background circle */}
                {IconComponent && <IconComponent size={32} className="text-blue-600" />} {/* Icon size adjusted */}
                {!IconComponent && <div className="w-12 h-12 flex items-center justify-center text-gray-500">?</div>}
              </div>
              <span className="text-base font-semibold text-gray-800 text-center mt-0">{category.title}</span> {/* Adjusted text styling */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Productcategory;