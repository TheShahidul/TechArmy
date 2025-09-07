import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { logout } from '../store/slices/authSlice';
import { FaShoppingCart, FaHeart, FaUser, FaSearch, FaPhone, FaTruck } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../Company-logo/Tech-army.png'; // Assuming this is the correct path to your logo
import { Link } from 'react-router-dom';

interface TopbarProps {
  toggleCart: () => void; // Add toggleCart prop
}

const Topbar: React.FC<TopbarProps> = ({ toggleCart }) => { // Destructure toggleCart
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-900 text-white shadow-md">
      {/* Topmost Row: Call and Email and Track Order */}
      <div className="flex justify-end items-center px-6 py-2 text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <FaTruck className="mr-1" />
            <span>Track Your Order</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-1" />
            <span>+880 1234 567890</span> {/* Placeholder Phone Number */}
          </div>
          <div className="flex items-center">
            <MdEmail className="mr-1" />
            <span>info@techarmybd.com</span> {/* Placeholder Email Address */}
          </div>
        </div>
      </div>

      {/* Main Topbar Content */}
      <div className="container mx-auto flex items-center justify-between px-6 pb-3">
        {/* Left Section: Logo, Shop Text, Slogan */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Tech Army Logo" className="h-28 w-auto rounded-full" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">TechArmyBD Ltd.</span>
              <span className="text-sm text-gray-400">Your Trusted IT Product Companion</span>
            </div>
          </Link>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="flex-grow mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-4/5 py-2 pl-10 pr-4 rounded-full bg-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Right Section: Cart, Wishlist, User Account */}
        <div className="flex items-center space-x-8 bg-gray-800 px-6 py-2 rounded-full">
          <div
            className="flex flex-col items-center cursor-pointer hover:text-blue-400 transition-colors duration-200"
            onClick={toggleCart} // Add onClick handler here
          >
            <FaShoppingCart size={20} />
            <span className="text-xs mt-1">Cart</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-400 transition-colors duration-200">
            <FaHeart size={20} />
            <span className="text-xs mt-1">Wishlist</span>
          </div>
          <div
            className="relative flex flex-col items-center cursor-pointer hover:text-blue-400 transition-colors duration-200"
            onMouseEnter={() => setIsAccountDropdownOpen(true)}
            onMouseLeave={() => setIsAccountDropdownOpen(false)}
          >
            <FaUser size={20} />
            <span className="text-xs mt-1">Account</span>
            {isAccountDropdownOpen && (
              <div className="absolute top-full w-36 bg-gray-700 rounded-md shadow-lg z-[99]">
                {auth.isAuthenticated ? (
                  <>
                    <div className="px-4 py-2 text-sm text-white border-b border-gray-600">Hello, {auth.user?.username}</div>
                    <button
                      onClick={() => dispatch(logout())}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-red-500 rounded-b-md"
                    >Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="block px-4 py-2 text-sm text-white hover:bg-blue-500 rounded-t-md">
                      Login
                    </Link>
                    <Link to="/signup" className="block px-4 py-2 text-sm text-white hover:bg-blue-500 rounded-b-md">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;