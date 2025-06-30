
import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import EventInfo from '../components/EventInfo';
import MapSection from '../components/MapSection';
import GuestForm from '../components/GuestForm';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Event Information with Enhanced Scroll Animation */}
      <motion.section 
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, margin: "-150px" }}
        className="relative z-10"
      >
        <EventInfo />
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 100, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        viewport={{ once: true, margin: "-150px" }}
      >
        <MapSection />
      </motion.section>

      {/* Guest Form */}
      <motion.section
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
        viewport={{ once: true, margin: "-150px" }}
      >
        <GuestForm />
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#fef102] to-[#004682] text-white py-8 mt-16"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg font-semibold mb-2"
          >
            🎉 Sünnet Düğünü 🎉
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/90"
          >
            With love and celebration
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
