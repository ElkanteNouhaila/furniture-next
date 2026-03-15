// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Playfair_Display, Poppins } from "next/font/google";
// import { useState } from "react";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600"],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500"],
// });

// export default function Header() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-border">
//       <div className="container mx-auto flex items-center justify-between h-16 px-4">

//         <Link href="/" className={`${playfair.className} text-2xl font-semibold `}>
//           Luxury<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">Touch</span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className={`hidden md:flex items-center gap-8 text-lg ${poppins.className}`}>
//           <Link
//             href="/"
//             className={`hover:text-[#b58742] ${
//               pathname === "/" ? "text-[#b58742]" : ""
//             }`}
//           >
//             HOME
//           </Link>

//           <Link
//             href="/categories"
//             className={`hover:text-[#b58742] ${
//               pathname === "/categories" ? "text-[#b58742]" : ""
//             }`}
//           >
//             PRODUCTS
//           </Link>

//           <Link
//             href="/contact"
//             className={`hover:text-[#b58742] ${
//               pathname === "/contact" ? "text-[#b58742]" : ""
//             }`}
//           >
//             CONTACT
//           </Link>

//           <Link
//             href="/about"
//             className={`hover:text-[#b58742] ${
//               pathname === "/about" ? "text-[#b58742]" : ""
//             }`}
//           >
//             ABOUT
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <nav className={`md:hidden bg-white border-t border-border ${poppins.className}`}>
//           <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
//             <Link
//               href="/"
//               className={`hover:text-[#b58742] ${
//                 pathname === "/" ? "text-[#b58742]" : ""
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               HOME
//             </Link>

//             <Link
//               href="/categories"
//               className={`hover:text-[#b58742] ${
//                 pathname === "/categories" ? "text-[#b58742]" : ""
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               PRODUCTS
//             </Link>

//             <Link
//               href="/contact"
//               className={`hover:text-[#b58742] ${
//                 pathname === "/contact" ? "text-[#b58742]" : ""
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               CONTACT
//             </Link>

//             <Link
//               href="/about"
//               className={`hover:text-[#b58742] ${
//                 pathname === "/about" ? "text-[#b58742]" : ""
//               }`}
//               onClick={() => setIsOpen(false)}
//             >
//               ABOUT
//             </Link>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair_Display, Poppins } from "next/font/google";
import { useState } from "react";
import { useCart } from "@/app/context/cartContext";
import { FiShoppingCart } from "react-icons/fi";
import CartSidebar from "./cartSidebar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Header() {
  const pathname = usePathname();
  const { cart } = useCart();
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  // separate states
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleCart = () => setCartOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className={`${playfair.className} text-2xl font-semibold`}>
          Luxury<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">Touch</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className={`flex items-center gap-8 text-lg ${poppins.className}`}>
            <Link href="/" className={`${pathname === "/" ? "text-[#b58742]" : "hover:text-[#b58742]"}`}>HOME</Link>
            <Link href="/categories" className={`${pathname === "/categories" ? "text-[#b58742]" : "hover:text-[#b58742]"}`}>PRODUCTS</Link>
            <Link href="/contact" className={`${pathname === "/contact" ? "text-[#b58742]" : "hover:text-[#b58742]"}`}>CONTACT</Link>
            <Link href="/about" className={`${pathname === "/about" ? "text-[#b58742]" : "hover:text-[#b58742]"}`}>ABOUT</Link>
          </nav>

          {/* Cart Icon */}
          <button onClick={toggleCart} className="relative text-2xl p-2">
            <FiShoppingCart size={24} />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalQty}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Cart */}
          <button onClick={toggleCart} className="relative text-2xl p-2">
            <FiShoppingCart size={24} />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalQty}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
  className="relative w-8 h-6 flex flex-col justify-between items-center md:hidden"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <span
    className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ${
      isMenuOpen ? "rotate-45 translate-y-2" : ""
    }`}
  />
  <span
    className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ${
      isMenuOpen ? "opacity-0" : "opacity-100"
    }`}
  />
  <span
    className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ${
      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
    }`}
  />
</button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
  className={`fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center gap-6 transition-transform duration-500 ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <Link href="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
  <Link href="/categories" onClick={() => setIsMenuOpen(false)}>PRODUCTS</Link>
  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
  <Link href="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
</nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} toggleSidebar={toggleCart} />
    </header>
  );
}