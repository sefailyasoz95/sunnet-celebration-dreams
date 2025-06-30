import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import MapModal from "./MapModal";
import miray from "../assets/images/miray.webp";
import konak from "../assets/images/konak.webp";
const MapSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    address: "",
    name: "",
  });

  const locations = [
    {
      title: "Orhangazi",
      name: "Orhangazi Miray Düğün Salonu",
      address: "Muradiye, Göl Yolu Cd., 16825 Orhangazi̇/Bursa",
      description: "Kına + Düğün",
      mapImage: miray,
    },
    {
      title: "Bursa",
      name: "Konak18",
      address:
        " Çelik Palas Hotel Karşısı, Gaziakdemir, Çekirge Cd. No:18, 16265 Osmangazi̇/Bursa",
      description: "Sünnet Düğünü",
      mapImage: konak,
    },
  ];

  const handleViewOnMap = (location: (typeof locations)[0]) => {
    setSelectedLocation({ address: location.address, name: location.name });
    setModalOpen(true);
  };

  return (
    <>
      <div className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-blue-900 dark:via-gray-800 dark:to-yellow-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#004682] to-[#fef102] bg-clip-text text-transparent"
            >
              📍 Konumlar
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Düğünlerin konumu için aşağıdaki <i>Haritada Gör</i> butonunu
              kullanabilirsiniz.
            </motion.p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border-2 border-[#fef102]/20 dark:border-gray-700">
              {locations.map((location, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(index)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? "bg-gradient-to-r from-[#004682] to-[#fef102] text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {location.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Map Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-[#fef102]/30 dark:border-gray-700"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-80 lg:h-96 group overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110 "
                  style={{
                    backgroundImage: `url(${locations[activeTab].mapImage})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>

              {/* Location Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-8 flex flex-col justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center space-x-3 mb-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-[#004682] to-[#fef102] rounded-full flex items-center justify-center"
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {locations[activeTab].name}
                  </h3>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-gray-600 dark:text-gray-300 mb-4 text-lg"
                >
                  {locations[activeTab].address}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-gray-500 dark:text-gray-400 mb-6"
                >
                  {locations[activeTab].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex space-x-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewOnMap(locations[activeTab])}
                    className="bg-gradient-to-r from-[#004682] to-[#004682]/80 hover:from-[#004682]/90 hover:to-[#004682] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Haritada Gör
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <MapModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        address={selectedLocation.address}
        locationName={selectedLocation.name}
      />
    </>
  );
};

export default MapSection;
