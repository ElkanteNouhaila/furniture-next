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
import CartSidebar from "./cartSidebar";
import { useCart } from "@/app/context/cartContext";

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
  const [sidebarOpen, setSidebarOpen] = useState(false); // controls CartSidebar
  const { cart } = useCart();
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* Logo */}
        <Link href="/" className={`${playfair.className} text-2xl font-semibold`}>
          Luxury
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">
            Touch
          </span>
        </Link>

        {/* Desktop Nav + Cart */}
        <div className="hidden md:flex items-center gap-8">
          <nav className={`flex items-center gap-8 text-lg ${poppins.className}`}>
            <Link href="/" className={`hover:text-[#b58742] ${pathname === "/" ? "text-[#b58742]" : ""}`}>HOME</Link>
            <Link href="/categories" className={`hover:text-[#b58742] ${pathname === "/categories" ? "text-[#b58742]" : ""}`}>PRODUCTS</Link>
            <Link href="/contact" className={`hover:text-[#b58742] ${pathname === "/contact" ? "text-[#b58742]" : ""}`}>CONTACT</Link>
            <Link href="/about" className={`hover:text-[#b58742] ${pathname === "/about" ? "text-[#b58742]" : ""}`}>ABOUT</Link>
          </nav>

          {/* Cart Icon (opens sidebar) */}
          <button
            onClick={toggleSidebar}
            className="relative text-2xl p-2"
          >
            🛒
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalQty}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleSidebar} className="relative text-2xl p-2">
            🛒
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalQty}
              </span>
            )}
          </button>

          <button className="text-2xl" onClick={() => setSidebarOpen((prev) => !prev)}>
            ☰
          </button>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
}