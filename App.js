import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import Trends from "./components/Trends";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // 👇 state to store filters
  const [filters, setFilters] = useState({ city: "", type: "" });

  return (
    <div className="font-sans bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        {/* 👇 pass setFilters to Hero */}
        <Hero onSearch={setFilters} />
        {/* 👇 pass filters to Properties */}
        <Properties filters={filters} />
        <Trends />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
