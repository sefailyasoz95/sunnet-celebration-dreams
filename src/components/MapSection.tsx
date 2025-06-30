
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const MapSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const locations = [
    {
      title: "Day 1 Location",
      name: "Grand Celebration Hall",
      address: "123 Celebration Street, City Center",
      description: "Beautiful venue for the ceremony and reception",
      mapImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800&h=600&fit=crop"
    },
    {
      title: "Day 2 Location", 
      name: "Garden Restaurant",
      address: "456 Garden Avenue, Riverside District",
      description: "Elegant outdoor setting for family celebration",
      mapImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-blue-900 dark:via-gray-800 dark:to-amber-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
            📍 Event Locations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find us at these beautiful venues for our special celebration
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-500 to-amber-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {location.title}
              </button>
            ))}
          </div>
        </div>

        {/* Map Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Map Placeholder */}
            <div className="relative h-80 lg:h-96">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${locations[activeTab].mapImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Navigation className="w-4 h-4" />
                    <span>Interactive map coming soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {locations[activeTab].name}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                {locations[activeTab].address}
              </p>
              
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {locations[activeTab].description}
              </p>
              
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View on Map
                </button>
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MapSection;
