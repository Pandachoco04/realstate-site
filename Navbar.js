import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode on <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-indigo-400">
          DreamHomes
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-indigo-400">Home</a>
          <a href="#properties" className="hover:text-blue-600 dark:hover:text-indigo-400">Properties</a>
          <a href="#trends" className="hover:text-blue-600 dark:hover:text-indigo-400">Trends</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-indigo-400">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-4 text-gray-800 dark:text-gray-200">
          <a href="#home" className="block">Home</a>
          <a href="#properties" className="block">Properties</a>
          <a href="#trends" className="block">Trends</a>
          <a href="#contact" className="block">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg w-full text-left"
          >
            {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
