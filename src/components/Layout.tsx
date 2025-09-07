import React, { useState } from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import CartSidebar from './CartSidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Topbar toggleCart={toggleCart} />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
};

export default Layout;
