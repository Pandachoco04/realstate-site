import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <h2 className="text-xl font-bold text-white">RealEstatePro</h2>

        {/* Links */}
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:text-white transition">Home</a>
          </li>
          <li>
            <a href="#properties" className="hover:text-white transition">Properties</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
          <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} RealEstatePro. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
