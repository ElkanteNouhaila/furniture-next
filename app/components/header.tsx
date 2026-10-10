"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair_Display, Poppins } from "next/font/google";
import { useState } from "react";
import { useCart } from "@/app/context/cartContext";
import { FiShoppingCart } from "react-icons/fi";
import CartSidebar from "./cartSidebar";
import ThemeToggle from "./themeToggle";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const links = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Products" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const { cart } = useCart();

  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleCart = () => setCartOpen((prev) => !prev);
  const closeCart = () => setCartOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (href: string) =>
    `relative px-3 py-2 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
      isActive(href)
        ? "text-[#b58742] dark:text-amber-400"
        : "text-stone-700 hover:text-[#b58742] dark:text-stone-200 dark:hover:text-amber-400"
    }`;

  const iconButtonClass =
    "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-stone-700 transition-colors duration-200 hover:bg-stone-900/5 hover:text-[#b58742] dark:text-stone-200 dark:hover:bg-white/10 dark:hover:text-amber-400";

  return (
    <header
    className={`${poppins.className} sticky top-0 z-50 isolate border-b border-stone-300/40 bg-white/70 text-stone-900 shadow-sm backdrop-blur-xl backdrop-saturate-150 dark:border-stone-700/40 dark:bg-stone-950/70 dark:text-stone-100`}
        >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Luxury Touch home"
          onClick={() => setMobileMenuOpen(false)}
          className={`${playfair.className} shrink-0 text-[21px] font-semibold tracking-tight text-stone-900 dark:text-white sm:text-2xl`}
        >
          Luxury<span className="text-[#b58742]">Touch</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          <nav aria-label="Main navigation" className="flex items-center gap-1 lg:gap-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={navLinkClass(href)}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-px origin-left bg-[#b58742] transition-transform duration-300 ${
                    isActive(href) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="h-5 w-px bg-stone-300/70 dark:bg-stone-700/70" />

          <div className="flex items-center gap-1">
            <ThemeToggle />

            <button
              type="button"
              onClick={toggleCart}
              aria-label={`Open cart${totalQty > 0 ? `, ${totalQty} items` : ""}`}
              className={iconButtonClass}
            >
              <FiShoppingCart size={19} strokeWidth={1.7} />
              {totalQty > 0 && (
                <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#b58742] px-1 text-[10px] font-semibold text-white ring-2 ring-white/80 dark:ring-stone-950/80">
                  {totalQty > 99 ? "99+" : totalQty}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={toggleCart}
            aria-label={`Open cart${totalQty > 0 ? `, ${totalQty} items` : ""}`}
            className={iconButtonClass}
          >
            <FiShoppingCart size={19} strokeWidth={1.7} />
            {totalQty > 0 && (
              <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#b58742] px-1 text-[10px] font-semibold text-white ring-2 ring-white/80 dark:ring-stone-950/80">
                {totalQty > 99 ? "99+" : totalQty}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className={iconButtonClass}
          >
            <span className="relative flex h-4 w-5 flex-col items-center justify-center">
              <span
                className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[4px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`grid md:hidden ${
          mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } transition-[grid-template-rows] duration-300 ease-in-out`}
      >
        <nav
          aria-label="Mobile navigation"
          className="overflow-hidden border-t border-stone-300/40 bg-white/80 backdrop-blur-xl dark:border-stone-700/40 dark:bg-stone-950/80"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between border-b border-stone-200/50 px-2 py-3.5 text-xs font-medium uppercase tracking-[0.14em] last:border-b-0 dark:border-stone-800/50 ${
                  isActive(href)
                    ? "text-[#b58742] dark:text-amber-400"
                    : "text-stone-700 hover:text-[#b58742] dark:text-stone-200 dark:hover:text-amber-400"
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b58742]" />
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={cartOpen}
        toggleSidebar={closeCart}
      />
    </header>
  );
}