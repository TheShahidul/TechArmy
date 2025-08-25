import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navData, NavItem } from './navData';
import { FiMenu, FiX } from 'react-icons/fi';

const Dropdown: React.FC<{ items: NavItem[] }> = ({ items }) => (
  <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
    {items.map(item => (
      <Link key={item.name} to={item.path || '#'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
        {item.name}
      </Link>
    ))}
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navData.map((item) => (
            <li key={item.name} className="relative group">
              <Link to={item.path || '#'} className="text-white bg-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-900 hover:text-white">
                {item.name}
              </Link>
              {item.subItems && <Dropdown items={item.subItems} />}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {navData.map((item) => (
              <li key={item.name}>
                <Link to={item.path || '#'} className="text-white block px-3 py-2 rounded-md text-base font-medium">{item.name}</Link>
                {item.subItems && (
                  <ul className="pl-4">
                    {item.subItems.map(subItem => (
                      <li key={subItem.name}>
                        <Link to={subItem.path || '#'} className="text-gray-300 block px-3 py-2 rounded-md text-sm font-medium">{subItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;