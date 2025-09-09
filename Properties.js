import React, { useState } from "react";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Modern Family Home",
    type: "House",
    price: "$350,000",
    location: "Quezon City",
    image: "https://source.unsplash.com/600x400/?house",
    description: "A spacious family home with a garden and modern design."
  },
  {
    id: 2,
    title: "Luxury Villa",
    type: "House",
    price: "$750,000",
    location: "Makati",
    image: "https://source.unsplash.com/600x400/?villa",
    description: "A luxurious villa in the heart of the city with private pool."
  },
  {
    id: 3,
    title: "Condo Apartment",
    type: "Condo",
    price: "$120,000",
    location: "Taguig",
    image: "https://source.unsplash.com/600x400/?condo",
    description: "A modern condo apartment close to business districts."
  },
];

function Properties({ filters }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Apply filters
  const filtered = properties.filter((p) => {
    const matchesCity =
      filters.city === "" ||
      p.location.toLowerCase().includes(filters.city.toLowerCase());
    const matchesType = filters.type === "" || p.type === filters.type;
    return matchesCity && matchesType;
  });

  return (
    <section id="properties" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Featured Properties
        </motion.h2>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No properties found matching your search.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((property, index) => (
              <motion.div
                key={property.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => setSelectedProperty(property)} // 👈 open modal
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {property.title}
                  </h3>
                  <p className="text-blue-600 font-bold">{property.price}</p>
                  <p className="text-gray-500 dark:text-gray-400">{property.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* 🟢 Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>

            {/* Content */}
            <img
              src={selectedProperty.image}
              alt={selectedProperty.title}
              className="h-56 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {selectedProperty.title}
            </h3>
            <p className="text-blue-600 font-bold mb-2">{selectedProperty.price}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {selectedProperty.location}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {selectedProperty.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Properties;
