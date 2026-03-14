"use client";

import { useCart } from "@/app/context/cartContext";
import { FiX, FiTrash2 } from "react-icons/fi";
import Link from "next/link";

interface CartSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function CartSidebar({ isOpen, toggleSidebar }: CartSidebarProps) {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-lg">Your Cart ({totalItems})</h2>
          <button onClick={toggleSidebar} className="text-xl">
            <FiX />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-stone-500">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-stone-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                  <FiTrash2 />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex flex-col gap-2">
              <Link href="/contact" className="bg-[#b58742] text-white text-center py-2 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
                Contact to Complete Purchase
              </Link>
              <button onClick={clearCart} className="bg-red-100 text-red-600 text-center py-2 rounded-lg font-semibold hover:bg-red-200 transition-colors">
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black/30 z-40" />}
    </>
  );
}