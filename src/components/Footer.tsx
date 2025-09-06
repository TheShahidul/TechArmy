import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white p-4 md:p-8 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Global Brand PLC. All rights reserved.</p>
        <p className="mt-2">123, Main Street, City, Country</p>
        <p>Email: info@globalbrand.com.bd | Phone: +880-123456789</p>
      </div>
    </footer>
  );
};

export default Footer;