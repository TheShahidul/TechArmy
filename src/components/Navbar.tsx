import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navData, type NavItem } from '../data/navData.ts';
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Dropdown: React.FC<{ items: NavItem[] }> = ({ items }) => (
  <div className="absolute left-1/2 -translate-x-1/2 w-screen bg-white shadow-lg z-10">
    <div className="container mx-auto grid grid-cols-4 gap-4 p-4">
      {items.map(item => (
        <div key={item.name} className="flex flex-col">
          <Link to={item.path || '#'} className="font-bold text-lg text-gray-800 mb-2 hover:text-blue-600">
            {item.name}
          </Link>
          {item.subItems && (
            <ul className="space-y-1">
              {item.subItems.map(subItem => (
                <li key={subItem.name}>
                  <Link to={subItem.path || '#'} className="block px-2 py-1 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-800 rounded">
                    {subItem.name}
                  </Link>
                  {subItem.subItems && (
                    <ul className="pl-4 space-y-1">
                      {subItem.subItems.map(subSubItem => (
                        <li key={subSubItem.name}>
                          <Link to={subSubItem.path || '#'} className="block px-2 py-1 text-xs text-gray-500 hover:bg-blue-100 hover:text-blue-800 rounded">
                            {subSubItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);

  const toggleItem = (itemName: string) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(itemName)
        ? prevOpenItems.filter(item => item !== itemName)
        : [...prevOpenItems, itemName]
    );
  };

  return (
    <nav
      className="bg-gray-900 p-4 sticky top-0 z-50 relative"
      onMouseLeave={() => setHoveredItem(null)}
    >
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
            <li key={item.name} className="relative">
              <div
                className="group"
                onMouseEnter={() => setHoveredItem(item)}
              >
                <Link to={item.path || '#'} className="text-white bg-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-900 hover:text-white">
                  {item.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-width Dropdown */}
      {hoveredItem && hoveredItem.subItems && (
        <div className="absolute left-0 right-0 top-full bg-white shadow-lg z-40">
          <Dropdown items={hoveredItem.subItems} />
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col space-y-2">
          {navData.map((item) => (
            <li key={item.name}>
              <div className="flex justify-between items-center">
                <Link to={item.path || '#'} className="text-white block px-3 py-2 rounded-md text-base font-medium">
                  {item.name}
                </Link>
                {item.subItems && (
                  <button onClick={() => toggleItem(item.name)} className="text-white">
                    {openItems.includes(item.name) ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </button>
                )}
              </div>
              {item.subItems && openItems.includes(item.name) && (
                <ul className="pl-4 transition-all duration-300 ease-in-out" style={{ maxHeight: openItems.includes(item.name) ? '1000px' : '0' }}>
                  {item.subItems.map(subItem => (
                    <li key={subItem.name}>
                      <Link to={subItem.path || '#'} className="text-gray-300 block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
