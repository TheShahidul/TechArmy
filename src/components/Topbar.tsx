import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Company-logo/Tech-army.png'; // Ensure this path is correct

import { BsFillInfoCircleFill, BsFillTelephoneFill, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";

/**
 * Renders the company logo and name, both linking to the home page.
 */
const LogoSection: React.FC = () => (
  <div className="flex items-center space-x-4">
    <Link to="/">
      <img src={logo} alt="Company Logo" className="h-24 md:h-24 rounded-full" />
    </Link>
    <Link to="/">
      <div className="text-4xl font-bold">
        <p>TECH ARMY Ltd.</p>
        <p className="text-base mt-1 italic text-white">Your trusted partner for IT products</p>
      </div>
    </Link>
  </div>
);

/**
 * Renders a search input field with an integrated search icon.
 */
const SearchInput: React.FC = () => (
  <div className="relative flex items-center w-full md:w-auto">
    <svg
      className="absolute left-3 h-5 w-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
    <input
      type="text"
      placeholder="Search with Product Name or Model"
      className="py-3 pl-10 pr-4 rounded-full bg-white text-black placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-64 md:w-80 lg:w-96 text-left"
    />
  </div>
);

/*
 * Renders the navigation links for the top bar.
 */
const NavigationLinks: React.FC = () => (
  <div className="flex flex-col md:flex-row items-center space-y-2 text-lg font-semibold md:space-y-0 md:space-x-4">
    <Link to="/about" className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-white hover:text-blue-900 transition-colors duration-200">
      <BsFillInfoCircleFill /> <span>About Us</span>
    </Link>
    <Link to="/call" className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-white hover:text-blue-900 transition-colors duration-200">
      <BsFillTelephoneFill /> <span>Call</span>
    </Link>
    <Link to="/account" className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-white hover:text-blue-900 transition-colors duration-200">
      <BsFillPersonFill /> <span>Account</span>
    </Link>
    <Link to="/cart" className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-white hover:text-blue-900 transition-colors duration-200">
      <BsFillCartFill /> <span>Cart</span>
    </Link>
  </div>
);

/**
 * Main Topbar component, composing the logo, search input, and navigation links.
 */
const Topbar: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white px-4 py-2 md:px-6 md:py-4 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo and Search */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto mb-4 md:mb-0">
          <LogoSection />
          <SearchInput />
        </div>

        {/* Right Section: Navigation Links */}
        <NavigationLinks />
      </div>
    </div>
  );
};

export default Topbar;