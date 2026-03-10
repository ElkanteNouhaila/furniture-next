import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-600 text-white p-8 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-3">Luxury Touch</h3>
          <p>Make your space truly yours.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>

          <a
            href="tel:+212644072535"
            className="flex items-center gap-3 hover:text-stone-400 hover:underline transition"
          >
            <FiPhone size={22} /> +212 644 072 535
          </a>

          <a
            href="mailto:nouhailaelkante2@gmail.com"
            className="flex items-center gap-3 hover:text-stone-400 hover:underline transition"
          >
            <FiMail size={22} /> nouhailaelkante2@gmail.com
          </a>

          <a
            href="https://maps.app.goo.gl/7g8cEBHjws7zfUnV8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-stone-400 hover:underline transition"
          >
            <FiMapPin size={22} />
            Casablanca, Morocco
          </a>

        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <Link href="/" className="hover:text-stone-300 hover:underline transition">Home</Link> |{" "}
          <Link href="/categories" className="hover:text-stone-300 hover:underline transition">Categories</Link> |{" "}
          <Link href="/contact" className="hover:text-stone-300 hover:underline transition">Contact</Link> |{" "}
          <Link href="/About" className="hover:text-stone-300 hover:underline transition">About</Link>

        </div>

      </div>
      <hr className="my-6 border-stone-400" />
      <div className="flex justify-center gap-4 mt-4 text-xl ">
        <a href="https://www.instagram.com/elkante_mohamed?igsh=cGt2aW1mNWcweDEw" target="_blank"   rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-700"/>
        </a>

        <a href="https://wa.me/212644072535" target="_blank"   rel="noopener noreferrer">
          <FaWhatsapp className="hover:text-green-700"/>
        </a>

        <a href="https://www.facebook.com/share/17KHZ943Ak/" target="_blank"   rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-600"/>
        </a>
  
      </div>
      <p className="text-sm text-stone-300 mt-6 text-center">
        &copy; {new Date().getFullYear()} Luxury Touch. All rights reserved.
      </p>
    </footer>
  );
}