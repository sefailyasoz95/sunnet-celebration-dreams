
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

const EventInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-white via-amber-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-blue-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
            🎉 Sünnet Düğünü 🎉
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join us for a beautiful celebration filled with joy, tradition, and unforgettable memories
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Day 1 */}
          <motion.div variants={itemVariants} className="group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-400 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                Day 1 - Ceremony
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-amber-50 dark:bg-gray-700 rounded-lg">
                  <Calendar className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Saturday, March 15, 2024</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Special Ceremony Day</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">2:00 PM - 6:00 PM</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Ceremony & Reception</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-gray-700 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Grand Celebration Hall</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">123 Celebration Street, City Center</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div variants={itemVariants} className="group">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                Day 2 - Celebration
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-amber-50 dark:bg-gray-700 rounded-lg">
                  <Calendar className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Sunday, March 16, 2024</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Family Celebration</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">12:00 PM - 8:00 PM</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Lunch & Evening Party</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-gray-700 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Garden Restaurant</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">456 Garden Avenue, Riverside District</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventInfo;
