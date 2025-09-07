import React from 'react';
import { FaTimes, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/slices/cartSlice';
import type { RootState } from '../store/store';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getCartTotal = () => {
    return cartItems.reduce((total: number, item: { price?: number; quantity: number }) => total + (item.price ?? 0) * item.quantity, 0);
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-gray-900/80 backdrop-blur-lg text-gray-300 shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold text-white">Your Cart</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <FaTimes size={20} />
        </button>
      </div>
      <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 120px)' }}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item: { id: number; image: string; name: string; quantity: number; price?: number }) => (
            <div key={item.id} className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700 last:border-b-0">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm">Quantity: {item.quantity}</p>
                  <p className="text-white font-bold">BDT {(item.price ?? 0) * item.quantity}</p>
                </div>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">
                <FaTrash size={18} />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-700 bg-gray-900">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-white">Total:</span>
          <span className="text-lg font-bold text-white">BDT {getCartTotal().toFixed(2)}</span>
        </div>
        <button
          onClick={handleClearCart}
          className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors mb-2"
        >
          Clear Cart
        </button>
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;