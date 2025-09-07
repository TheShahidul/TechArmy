import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaCcDiscover } from 'react-icons/fa'; // Added payment icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">TechArmy</h3>
          <p className="text-sm mb-4">
            Your trusted partner for cutting-edge IT products and solutions.
            We bring innovation to your doorstep.
          </p>
          <p className="text-sm">
            <span className="font-semibold">Address:</span> 123, Main Street, City, Country
          </p>
          <p className="text-sm">
            <span className="font-semibold">Email:</span> info@techarmybd.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span> +880-123456789
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm hover:text-white transition-colors duration-300">Home</Link></li>
            <li><Link to="/products" className="text-sm hover:text-white transition-colors duration-300">Shop All Products</Link></li>
            <li><Link to="/categories" className="text-sm hover:text-white transition-colors duration-300">Categories</Link></li>
            <li><Link to="/about" className="text-sm hover:text-white transition-colors duration-300">About Us</Link></li>
            <li><Link to="/contact" className="text-sm hover:text-white transition-colors duration-300">Contact Us</Link></li>
            <li><Link to="/blog" className="text-sm hover:text-white transition-colors duration-300">Blog</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link to="/faq" className="text-sm hover:text-white transition-colors duration-300">FAQ</Link></li>
            <li><Link to="/shipping" className="text-sm hover:text-white transition-colors duration-300">Shipping & Delivery</Link></li>
            <li><Link to="/returns" className="text-sm hover:text-white transition-colors duration-300">Returns & Refunds</Link></li>
            <li><Link to="/privacy" className="text-sm hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm hover:text-white transition-colors duration-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Payment */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Stay Connected</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow p-2 rounded-l-md bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md text-sm transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>

          <h3 className="text-xl font-bold text-white mt-6 mb-4">Payment Methods</h3>
          <div className="flex flex-wrap gap-2">
            {/* Payment icons */}
            <FaCcVisa size={40} className="text-gray-400 hover:text-white transition-colors duration-300" />
            <FaCcMastercard size={40} className="text-gray-400 hover:text-white transition-colors duration-300" />
            <FaCcPaypal size={40} className="text-gray-400 hover:text-white transition-colors duration-300" />
            <FaCcAmex size={40} className="text-gray-400 hover:text-white transition-colors duration-300" />
            <FaCcDiscover size={40} className="text-gray-400 hover:text-white transition-colors duration-300" />
            {/* bKash Logo - requires an image asset */}
            <img src="/assets/payment-logos/bkash-logo.png" alt="bKash" className="h-8 object-contain grayscale contrast-0 text-gray-400 img:hover-white transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* New Section: Shop and Branch Locations */}
      <div className="container mx-auto mt-10 pt-8 border-t border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Our Shop & Branch Locations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dhaka Branch */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Dhaka - Multiplan Center</h4>
            <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden"> {/* For responsive iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9023240000003!2d90.3899999!3d23.751000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b1e3b1e3b1%3A0x3755b8b1e3b1e3b1!2sMultiplan%20Center!5e0!3m2!1sen!2sbd!4v1678912345678!5m2!1sen!2sbd"
                width="100%"
                height="210"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Multiplan Center Dhaka"
              ></iframe>
            </div>
            <p className="text-sm mt-3">Multiplan Center, 69-71 New Elephant Rd, Dhaka 1205, Bangladesh</p>
          </div>

          {/* Chittagong Branch */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Chittagong City</h4>
            <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden"> {/* For responsive iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279988649!2d-74.2598655!3d40.6976684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d1a83847%3A0x30bbd8b12e97a9!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1678912345678!5m2!1sen!2sbd"
                width="100%"
                height="210"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chittagong City"
              ></iframe>
            </div>
            <p className="text-sm mt-3">Chittagong, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm flex justify-between items-center px-4">
        <p>&copy; {currentYear} TechArmy. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
