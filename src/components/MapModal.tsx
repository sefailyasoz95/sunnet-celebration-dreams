
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Smartphone } from 'lucide-react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: string;
  locationName: string;
}

const MapModal = ({ isOpen, onClose, address, locationName }: MapModalProps) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const openInAppleMaps = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`http://maps.apple.com/?q=${encodedAddress}`, '_blank');
  };

  const openInGoogleMaps = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#fef102] to-[#004682] rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">Open Location</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{locationName}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Smartphone className="w-5 h-5 text-[#004682] dark:text-[#fef102] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white mb-1">Address</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{address}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {isIOS ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openInAppleMaps}
                  className="w-full bg-gradient-to-r from-[#004682] to-[#004682]/80 hover:from-[#004682]/90 hover:to-[#004682] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Open in Apple Maps
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openInGoogleMaps}
                  className="w-full bg-gradient-to-r from-[#004682] to-[#004682]/80 hover:from-[#004682]/90 hover:to-[#004682] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Open in Google Maps
                </motion.button>
              )}
              
              {isMobile && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={isIOS ? openInGoogleMaps : openInAppleMaps}
                  className="w-full bg-gradient-to-r from-[#fef102] to-[#fef102]/80 hover:from-[#fef102]/90 hover:to-[#fef102] text-[#004682] px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isIOS ? 'Open in Google Maps' : 'Open in Apple Maps'}
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MapModal;
