import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

const EventInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-white via-yellow-50 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-blue-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{}}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#fef102] to-[#004682] bg-clip-text text-transparent"
          >
            🎉 Sünnet Düğünü 🎉
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{}}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Join us for a beautiful celebration filled with joy, tradition, and
            unforgettable memories
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Day 1 */}
          <motion.div variants={itemVariants as any} className="group">
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-[#fef102]/20 dark:border-gray-700 hover:border-[#fef102] dark:hover:border-[#fef102] transform"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#fef102] to-[#004682] rounded-full mb-6 mx-auto"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white"
              >
                Orhangazi
              </motion.h3>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-[#fef102]/10 dark:bg-gray-700 rounded-lg border border-[#fef102]/30"
                >
                  <Calendar className="w-6 h-6 text-[#004682] dark:text-[#fef102] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      16 Temmuz Çarşamba
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Bursa'ya gelemeyecek misafirlerimiz için
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-[#004682]/10 dark:bg-gray-700 rounded-lg border border-[#004682]/30"
                >
                  <Clock className="w-6 h-6 text-[#004682] dark:text-[#fef102] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      17:00 - 22:00
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Kına + Düğün
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#fef102]/10 to-[#004682]/10 dark:bg-gray-700 rounded-lg border border-[#fef102]/30"
                >
                  <MapPin className="w-6 h-6 text-[#004682] dark:text-[#fef102] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Orhangazi Miray Düğün Salonu
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Muradiye, Göl Yolu Cd., 16825 Orhangazi̇/Bursa
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Day 2 */}
          <motion.div variants={itemVariants as any} className="group">
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-[#004682]/20 dark:border-gray-700 hover:border-[#004682] dark:hover:border-[#004682] transform"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#004682] to-[#fef102] rounded-full mb-6 mx-auto"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white"
              >
                Day 2 - Celebration
              </motion.h3>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-[#fef102]/10 dark:bg-gray-700 rounded-lg border border-[#fef102]/30"
                >
                  <Calendar className="w-6 h-6 text-[#004682] dark:text-[#fef102] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Sunday, March 16, 2024
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Family Celebration
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-[#004682]/10 dark:bg-gray-700 rounded-lg border border-[#004682]/30"
                >
                  <Clock className="w-6 h-6 text-[#004682] dark:text-[#fef102] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      12:00 PM - 8:00 PM
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Lunch & Evening Party
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#fef102]/10 to-[#004682]/10 dark:bg-gray-700 rounded-lg border border-[#fef102]/30"
                >
                  <MapPin className="w-6 h-6 text-[#004682] dark:text-[#fef102] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      Garden Restaurant
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      456 Garden Avenue, Riverside District
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventInfo;
