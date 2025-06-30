
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, MessageSquare, User, Camera, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GuestForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    message: '',
    photo: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation: Name is required, and either photo or message is required
    if (!formData.fullName.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.photo && !formData.message.trim()) {
      toast({
        title: "Photo or Message Required",
        description: "Please either upload a photo or leave a message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    toast({
      title: "Thank you for sharing! 🎉",
      description: "Your message has been received successfully.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="py-20 px-4 bg-gradient-to-br from-amber-50 via-white to-blue-50 dark:from-amber-900 dark:via-gray-800 dark:to-blue-900">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-amber-200 dark:border-gray-700"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Thank You for Sharing! 🎉
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Your message has been received successfully. We can't wait to celebrate with you!
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ fullName: '', message: '', photo: null });
              }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Share Another Message
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-amber-50 via-white to-blue-50 dark:from-amber-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
            💌 Share Your Wishes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leave a special message or share a photo to be part of our celebration memories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-amber-200 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <User className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-amber-500 dark:focus:border-amber-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 text-lg"
                placeholder="Enter your full name"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <Camera className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Upload Photo (Optional)</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600">
                  <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {formData.photo ? formData.photo.name : "Click to upload a photo"}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    JPG, PNG, or GIF (max 5MB)
                  </p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>Message or Memory {!formData.photo && '*'}</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 text-lg resize-none"
                placeholder="Share your wishes, memories, or thoughts for this special day..."
              />
            </div>

            {/* Validation Note */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
              <p className="text-amber-800 dark:text-amber-200 text-sm">
                <strong>Note:</strong> Please provide either a photo or a message (or both) to share your wishes.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-amber-500 to-blue-500 hover:from-amber-600 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                'Share Your Wishes 🎉'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default GuestForm;
