import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-600 text-white p-8 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-3">Luxury Touch</h3>
          <p>Modern furniture for your home.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>

          <p className="flex items-center gap-2">
            <FiPhone /> +212 644 072 535
          </p>

          <p className="flex items-center gap-2">
            <FiMail /> nouhailaelkante2@gmail.com
          </p>

          <p className="flex items-center gap-2">
            <FiMapPin /> Casablanca, Morocco
          </p>

        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <Link href="/" className="hover:text-stone-300">Home</Link> |{" "}
          <Link href="/categories" className="hover:text-stone-300">Categories</Link> |{" "}
          <Link href="/contact" className="hover:text-stone-300">Contact</Link>
        </div>

      </div>
      <hr className="my-6 border-stone-400" />
      <div className="flex justify-center gap-4 mt-4 text-xl">
        <a href="https://www.instagram.com/elkante_mohamed?igsh=cGt2aW1mNWcweDEw" target="_blank"   rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-700"/>
        </a>

        <a href="https://wa.me/212644072535" target="_blank"   rel="noopener noreferrer">
          <FaWhatsapp className="hover:text-green-700"/>
        </a>
      </div>

      <p className="text-sm text-stone-300 mt-6 text-center">
        &copy; {new Date().getFullYear()} Luxury Touch. All rights reserved.
      </p>
    </footer>
  );
}