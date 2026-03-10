"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair_Display, Poppins } from "next/font/google";

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

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16">

        <Link href="/" className={`${playfair.className} text-2xl font-semibold`}>
          Luxury<span className="text-[#b58742]">Touch</span>
        </Link>

        <nav className={`hidden md:flex items-center gap-8 text-lg ${poppins.className}`}>

          <Link
            href="/"
            className={`hover:text-[#b58742] ${
              pathname === "/" ? "text-[#b58742]" : ""
            }`}
          >
            HOME
          </Link>

          <Link
            href="/categories"
            className={`hover:text-[#b58742] ${
              pathname === "/categories" ? "text-[#b58742]" : ""
            }`}
          >
            PRODUCTS
          </Link>

          <Link
            href="/contact"
            className={`hover:text-[#b58742] ${
              pathname === "/contact" ? "text-[#b58742]" : ""
            }`}
          >
            CONTACT
          </Link>

          <Link
            href="/about"
            className={`hover:text-[#b58742] ${
              pathname === "/about" ? "text-[#b58742]" : ""
            }`}
          >
            ABOUT
          </Link>

        </nav>
      </div>
    </header>
  );
}