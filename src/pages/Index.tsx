
import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import EventInfo from '../components/EventInfo';
import MapSection from '../components/MapSection';
import GuestForm from '../components/GuestForm';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Event Information with Scroll Animation */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <EventInfo />
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <MapSection />
      </motion.section>

      {/* Guest Form */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <GuestForm />
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-600 to-blue-600 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">🎉 Sünnet Düğünü 🎉</p>
          <p className="text-amber-100">With love and celebration</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
