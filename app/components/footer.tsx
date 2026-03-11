// import Link from "next/link";
// import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
// import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-stone-600 text-white p-8 mt-16">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

//         <div>
//           <h3 className="text-lg font-semibold mb-3">Luxury Touch</h3>
//           <p>Make your space truly yours.</p>
//         </div>

//         <div>
//           <h3 className="text-lg font-semibold mb-3">Contact</h3>

//           <a
//             href="tel:+212644072535"
//             className="flex items-center gap-3 hover:text-stone-400 hover:underline transition"
//           >
//             <FiPhone size={22} /> +212 644 072 535
//           </a>

//           <a
//             href="mailto:nouhailaelkante2@gmail.com"
//             className="flex items-center gap-3 hover:text-stone-400 hover:underline transition"
//           >
//             <FiMail size={22} /> nouhailaelkante2@gmail.com
//           </a>

//           <a
//             href="https://maps.app.goo.gl/7g8cEBHjws7zfUnV8"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 hover:text-stone-400 hover:underline transition"
//           >
//             <FiMapPin size={22} />
//             Casablanca, Morocco
//           </a>

//         </div>

//         <div>
//           <h3 className="text-lg font-semibold mb-2">Links</h3>
//           <Link href="/" className="hover:text-stone-300 hover:underline transition">Home</Link> |{" "}
//           <Link href="/categories" className="hover:text-stone-300 hover:underline transition">Categories</Link> |{" "}
//           <Link href="/contact" className="hover:text-stone-300 hover:underline transition">Contact</Link> |{" "}
//           <Link href="/About" className="hover:text-stone-300 hover:underline transition">About</Link>

//         </div>

//       </div>
//       <hr className="my-6 border-stone-400" />
//       <div className="flex justify-center gap-4 mt-4 text-xl ">
//         <a href="https://www.instagram.com/elkante_mohamed?igsh=cGt2aW1mNWcweDEw" target="_blank"   rel="noopener noreferrer">
//           <FaInstagram className="hover:text-pink-700"/>
//         </a>

//         <a href="https://wa.me/212644072535" target="_blank"   rel="noopener noreferrer">
//           <FaWhatsapp className="hover:text-green-700"/>
//         </a>

//         <a href="https://www.facebook.com/share/17KHZ943Ak/" target="_blank"   rel="noopener noreferrer">
//           <FaFacebook className="hover:text-blue-600"/>
//         </a>
  
//       </div>
//       <p className="text-sm text-stone-300 mt-6 text-center">
//         &copy; {new Date().getFullYear()} Luxury Touch. All rights reserved.
//       </p>
//     </footer>
//   );
// }

import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-stone-900 to-black text-white mt-20">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Luxury<span className="text-[#b58742]">Touch</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Make your space truly yours with our premium furniture collection.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.instagram.com/elkante_mohamed?igsh=cGt2aW1mNWcweDEw" 
                target="_blank"   
                rel="noopener noreferrer"
                className="bg-stone-700 hover:bg-[#b58742] p-3 rounded-full transition-colors duration-300"
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

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get exclusive offers and updates
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-lg bg-stone-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b58742] transition"
              />
              <button 
                type="submit"
                className="w-full bg-[#b58742] hover:bg-[#9e7436] text-white font-semibold py-2 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-stone-700"></div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Luxury Touch. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#b58742] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#b58742] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
