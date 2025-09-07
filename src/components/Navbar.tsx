import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { menuData, type MenuItem as IMenuItem } from '../data/menuData';

interface MenuItemProps {
  item: IMenuItem;
  level?: number; // To track nesting level for styling/positioning
}

const MenuItem: React.FC<MenuItemProps> = ({ item, level = 0 }) => {
  const hasChildren = item.children && item.children.length > 0;
  const [isOpen, setIsOpen] = useState(false);
  const [openLeft, setOpenLeft] = useState(false); // New state for opening left
  const itemRef = useRef<HTMLLIElement>(null); // Ref for the li element

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setOpenLeft(false); // Reset on mouse leave
  };

  // Effect to calculate dropdown position on open
  useEffect(() => {
    if (isOpen && hasChildren && itemRef.current) {
      const itemRect = itemRef.current.getBoundingClientRect();
      const dropdownWidth = 192; // w-48 is 192px
      const viewportWidth = window.innerWidth;

      // Only apply openLeft logic for nested dropdowns (level > 0)
      if (level > 0 && itemRect.right + dropdownWidth > viewportWidth) {
        setOpenLeft(true);
      } else {
        setOpenLeft(false);
      }
    }
  }, [isOpen, hasChildren, level]); // Recalculate when isOpen changes or level changes

  // Determine dropdown positioning classes
  const dropdownPositionClasses = level === 0
    ? 'top-full left-0' // Top-level dropdowns open directly below the parent item
    : 'top-0'; // Nested dropdowns align with the top of their parent item

  const sidePositionClass = openLeft ? 'right-full' : 'left-full'; // Side positioning for nested menus

  const dropdownClasses = `absolute w-48 bg-white shadow-lg rounded-md py-1 z-10 ${
    isOpen ? 'block' : 'hidden'
  } ${level > 0 ? sidePositionClass : ''} ${dropdownPositionClasses}`;

  return (
    <li
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={itemRef} // Attach ref to the li
    >
      <Link
        to={item.href}
        className="block px-2 py-2 text-gray-700 hover:bg-[#111827] hover:text-white transition-colors duration-200 whitespace-nowrap"
      >
        {item.label}
      </Link>
      {hasChildren && level < 2 && (
        <ul className={dropdownClasses}>
          {item.children?.map((child, index) => (
            <MenuItem key={index} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { logout } from '../store/slices/authSlice';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`shadow-md sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white bg-opacity-80 backdrop-blur-md' : 'bg-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-center items-center">
        <ul className="flex space-x-2">
          {menuData.map((item, index) => (
            <MenuItem key={index} item={item} level={0} />
          ))}
        </ul>
  {/* ...existing code... */}
      </div>
    </nav>
  );
};

export default Navbar;