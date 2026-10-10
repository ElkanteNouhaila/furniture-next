"use client";

import Image from "next/image";
import { useCart } from "@/app/context/cartContext";
import {
  FiX,
  FiTrash2,
  FiShoppingBag,
  FiArrowRight,
  FiMinus,
  FiPlus,
  FiMessageCircle,
  FiArrowLeft,
  FiAlertTriangle,
} from "react-icons/fi";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface CartSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

type Confirmation =
  | { type: "remove"; id: string; name: string }
  | { type: "clear" }
  | null;

export default function CartSidebar({
  isOpen,
  toggleSidebar,
}: CartSidebarProps) {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [mounted, setMounted] = useState(false);
  const [confirmation, setConfirmation] = useState<Confirmation>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setConfirmation(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!confirmation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setConfirmation(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [confirmation]);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "212644072535"; // Replace with your WhatsApp number.

    const message = [
      "Hello Luxury Touch!",
      "",
      "I would like to inquire about the following products:",
      "",
      ...cart.map(
        (item, index) =>
          `${index + 1}. ${item.name}\nQuantity: ${item.quantity}`
      ),
      "",
      "Could you please provide the prices and availability?",
    ].join("\n");

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const confirmAction = () => {
    if (!confirmation) return;

    if (confirmation.type === "remove") {
      removeFromCart(confirmation.id);
    } else {
      clearCart();
    }

    setConfirmation(null);
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-[2px]"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Cart drawer */}
      <aside
        role="dialog"
        aria-modal={isOpen ? "true" : undefined}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        onClick={(event) => event.stopPropagation()}
        className={`fixed right-0 top-0 z-[9999] flex h-[100dvh] w-full max-w-[440px] flex-col border-l border-stone-200 bg-[#faf9f6] text-stone-900 shadow-2xl transition-transform duration-300 ease-in-out dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="relative border-b border-stone-200 px-6 pb-5 pt-6 dark:border-stone-800">
          <div className="absolute left-6 top-0 h-[3px] w-16 bg-[#b58742]" />

          <div className="flex items-center justify-between">
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b58742]">
                Luxury Touch
              </p>

              <h2 className="font-serif text-2xl font-semibold tracking-tight">
                Your Cart
              </h2>
            </div>

            <button
              type="button"
              onClick={toggleSidebar}
              aria-label="Close cart"
              tabIndex={isOpen ? 0 : -1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-600 transition-all hover:border-[#b58742] hover:text-[#b58742] dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300"
            >
              <FiX size={19} />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-sm text-stone-500 dark:text-stone-400">
              {totalItems === 0
                ? "Your selection awaits"
                : `${totalItems} ${
                    totalItems === 1 ? "item" : "items"
                  } in your selection`}
            </p>

            {totalItems > 0 && (
              <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#b58742] px-2 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </div>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="flex min-h-full flex-col items-center justify-center py-12 text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
                <FiShoppingBag
                  size={34}
                  className="text-[#b58742]"
                  strokeWidth={1.2}
                />
              </div>

              <p className="mb-2 font-serif text-2xl font-medium">
                Your cart is empty
              </p>

              <p className="max-w-[260px] text-sm leading-6 text-stone-500 dark:text-stone-400">
                Discover timeless pieces and add your favorites to your selection.
              </p>

              <button
                type="button"
                onClick={toggleSidebar}
                tabIndex={isOpen ? 0 : -1}
                className="mt-7 inline-flex items-center gap-2 border-b border-[#b58742] pb-1 text-sm font-semibold text-[#b58742] transition-colors hover:text-amber-600"
              >
                <FiArrowLeft size={15} />
                Continue exploring
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4 border-b border-stone-200 pb-5 dark:border-stone-800"
                >
                  {/* Product image */}
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-900">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <FiShoppingBag
                          size={24}
                          className="text-stone-400"
                        />
                      </div>
                    )}
                  </div>

                  {/* Product details */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#b58742]">
                          Luxury Collection
                        </p>

                        <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-stone-900 dark:text-stone-100">
                          {item.name}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setConfirmation({
                            type: "remove",
                            id: item.id,
                            name: item.name,
                          })
                        }
                        aria-label={`Remove ${item.name} from cart`}
                        tabIndex={isOpen ? 0 : -1}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 dark:hover:text-red-400"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>

                    {/* Quantity controls */}
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center rounded-lg border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          disabled={item.quantity <= 1}
                          aria-label={`Decrease ${item.name} quantity`}
                          tabIndex={isOpen ? 0 : -1}
                          className="flex h-9 w-9 items-center justify-center rounded-l-lg text-stone-600 transition-colors hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-30 dark:text-stone-300 dark:hover:bg-stone-800"
                        >
                          <FiMinus size={13} />
                        </button>

                        <span
                          aria-live="polite"
                          className="min-w-8 text-center text-xs font-semibold text-stone-800 dark:text-stone-100"
                        >
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          aria-label={`Increase ${item.name} quantity`}
                          tabIndex={isOpen ? 0 : -1}
                          className="flex h-9 w-9 items-center justify-center rounded-r-lg text-stone-600 transition-colors hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
                        >
                          <FiPlus size={13} />
                        </button>
                      </div>

                      <span className="text-[10px] text-stone-400 dark:text-stone-500">
                        Qty
                      </span>
                    </div>
                  </div>
                </article>
              ))}

              <button
                type="button"
                onClick={() => setConfirmation({ type: "clear" })}
                tabIndex={isOpen ? 0 : -1}
                className="inline-flex items-center gap-2 rounded-lg py-2 text-xs font-medium text-stone-500 transition-colors hover:text-red-600 dark:text-stone-400 dark:hover:text-red-400"
              >
                <FiTrash2 size={14} />
                Clear entire selection
              </button>
            </div>
          )}
        </div>

        {/* Footer actions */}
        {cart.length > 0 && (
          <div className="border-t border-stone-200 bg-white px-6 pb-6 pt-5 dark:border-stone-800 dark:bg-stone-900">
            <div className="mb-5 flex items-start gap-3 rounded-xl border border-[#b58742]/20 bg-[#b58742]/5 p-3.5">
              <FiMessageCircle
                size={19}
                className="mt-0.5 shrink-0 text-[#b58742]"
              />

              <div>
                <p className="text-xs font-semibold text-stone-800 dark:text-stone-100">
                  Interested in these pieces?
                </p>

                <p className="mt-1 text-xs leading-5 text-stone-500 dark:text-stone-400">
                  Contact our team for pricing, availability, and purchase arrangements.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              tabIndex={isOpen ? 0 : -1}
              className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#b58742] px-5 py-4 text-sm font-semibold text-white shadow-md shadow-[#b58742]/15 transition-all duration-300 hover:bg-[#9e7436] hover:shadow-lg"
            >
              <FiMessageCircle size={19} />
              Inquire on WhatsApp
              <FiArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={toggleSidebar}
              tabIndex={isOpen ? 0 : -1}
              className="mt-3 w-full py-2 text-xs font-medium text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
            >
              Continue browsing
            </button>

            <p className="mt-3 text-center text-[10px] leading-5 text-stone-400 dark:text-stone-500">
              No online payment required. Final details are confirmed directly with our team.
            </p>
          </div>
        )}
      </aside>

      {/* Confirmation modal */}
      {confirmation && isOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm"
          onClick={() => setConfirmation(null)}
          role="presentation"
        >
          <section
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="cart-confirmation-title"
            aria-describedby="cart-confirmation-description"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-sm rounded-2xl border border-stone-200 bg-[#faf9f6] p-6 shadow-2xl dark:border-stone-700 dark:bg-stone-900"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400">
              <FiAlertTriangle size={22} />
            </div>

            <h3
              id="cart-confirmation-title"
              className="font-serif text-xl font-semibold text-stone-900 dark:text-stone-100"
            >
              {confirmation.type === "clear"
                ? "Clear your cart?"
                : "Remove this item?"}
            </h3>

            <p
              id="cart-confirmation-description"
              className="mt-3 break-words text-sm leading-6 text-stone-600 dark:text-stone-300"
            >
              {confirmation.type === "clear"
                ? "Are you sure you want to remove all items from your cart? This action cannot be undone."
                : `Are you sure you want to remove "${confirmation.name}" from your cart?`}
            </p>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                autoFocus
                onClick={() => setConfirmation(null)}
                className="flex-1 rounded-xl border border-stone-300 px-4 py-3 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={confirmAction}
                className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                {confirmation.type === "clear"
                  ? "Yes, clear cart"
                  : "Yes, remove"}
              </button>
            </div>
          </section>
        </div>
      )}
    </>,
    document.body
  );
}