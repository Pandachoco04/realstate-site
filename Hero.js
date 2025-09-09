import React, { useState } from "react";

function Hero({ onSearch }) {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  const handleSearch = () => {
    onSearch({ city, type }); // send filters to App.js
  };

  const handleReset = () => {
    setCity("");
    setType("");
    onSearch({ city: "", type: "" }); // reset to show all properties
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white dark:from-gray-900 dark:to-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 dark:text-gray-100">
          Find Your Dream Home
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-200 dark:text-gray-400">
          Browse thousands of listings and discover the perfect property for you.
        </p>

        {/* 🔍 Search Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row items-center p-4 gap-4">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          >
            <option value="">Any Type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
          </select>

          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={handleSearch}
              className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Search
            </button>
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
