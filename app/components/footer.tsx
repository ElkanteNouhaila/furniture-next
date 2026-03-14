
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-black text-white mt-20">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
            Luxury<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b58742] to-amber-400">Touch</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Make your space truly yours with our premium furniture collection.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.instagram.com/elkante_mohamed?igsh=cGt2aW1mNWcweDEw" 
                target="_blank"   
                rel="noopener noreferrer"
                className="bg-stone-700 hover:bg-pink-700 p-3 rounded-full transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://wa.me/212644072535" 
                target="_blank"   
                rel="noopener noreferrer"
                className="bg-stone-700 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
              >
                <FaWhatsapp size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/17KHZ943Ak/" 
                target="_blank"   
                rel="noopener noreferrer"
                className="bg-stone-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-[#b58742] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/categories" 
                  className="text-gray-400 hover:text-[#b58742] transition-colors duration-300"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:text-[#b58742] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-[#b58742] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+212644072535"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#b58742] transition-colors duration-300"
                >
                  <div className="bg-stone-700 p-2 rounded-lg">
                    <FiPhone size={18} />
                  </div>
                  <span>+212 644 072 535</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:nouhailaelkante2@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#b58742] transition-colors duration-300"
                >
                  <div className="bg-stone-700 p-2 rounded-lg">
                    <FiMail size={18} />
                  </div>
                  <span>nouhailaelkante2@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href="https://maps.app.goo.gl/7g8cEBHjws7zfUnV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#b58742] transition-colors duration-300"
                >
                  <div className="bg-stone-700 p-2 rounded-lg">
                    <FiMapPin size={18} />
                  </div>
                  <span>Casablanca, Morocco</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-stone-700"></div>

        {/* Bottom */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Luxury Touch. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
