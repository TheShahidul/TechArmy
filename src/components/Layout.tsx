import React from 'react';
import { CartSidebarProvider, useCartSidebar } from './CartSidebarContext';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import CartSidebar from './CartSidebar';

const LayoutInner = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, openCart, closeCart } = useCartSidebar();
  return (
    <>
      <Topbar toggleCart={openCart} />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartSidebar isOpen={isOpen} onClose={closeCart} />
    </>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <CartSidebarProvider>
    <LayoutInner>{children}</LayoutInner>
  </CartSidebarProvider>
);

export default Layout;
