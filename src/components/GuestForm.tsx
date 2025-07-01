import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, MessageSquare, User, Camera, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import supabase from "@/lib/supabase";
import imageCompression from "browser-image-compression";

const GuestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    message: "",
    photo: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        photo: file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast({
        title: "Ad soyad zorunlu",
        description: "Adınızı soyadınızı giriniz.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.photo && !formData.message.trim()) {
      toast({
        title: "Fotoğraf yüklenmeli veya mesaj girilmeli",
        description: "İkisinden birini yapmalısınız.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    let imageUrl = null;

    if (formData.photo) {
      let fileToUpload = formData.photo;
      if (fileToUpload.size > 2 * 1024 * 1024) {
        // Compress if over 2MB
        fileToUpload = await imageCompression(fileToUpload, {
          maxSizeMB: 2,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });
      }

      // Generate a unique filename
      const fileExt = fileToUpload.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}.${fileExt}`;

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from("images")
        .upload(fileName, fileToUpload);

      if (error) {
        toast({
          title: "Fotoğraf yüklenemedi",
          description: error.message,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from("images")
        .getPublicUrl(fileName);
      imageUrl = publicUrlData.publicUrl;
    }

    // Insert into messages table
    const { error: insertError } = await supabase.from("messages").insert([
      {
        name_surname: formData.fullName,
        message: formData.message,
        url: imageUrl,
        // created_at will be auto-generated if set up in Supabase
      },
    ]);

    if (insertError) {
      toast({
        title: "Mesaj kaydedilemedi",
        description: insertError.message,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    setIsSubmitted(true);
    setIsSubmitting(false);

    toast({
      title: "Gönderiniz için teşekkürler! 🎉",
      description:
        "Bu özel günde Selim Ali'nin yanında olduğunuz için teşekkür ederiz!",
    });
  };

  if (isSubmitted) {
    return (
      <div className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-white to-blue-50 dark:from-yellow-900 dark:via-gray-800 dark:to-blue-900">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border-2 border-[#fef102]/30 dark:border-gray-700"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
              className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
            >
              Gönderiniz için teşekkürler! 🎉
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              Gönderiniz kaydedildi, bugünü Selim Ali için ölümsüzleştirmenizden
              ötürü teşekkür ederiz!
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ fullName: "", message: "", photo: null });
              }}
              className="bg-gradient-to-r from-[#fef102] to-[#fef102]/80 hover:from-[#fef102]/90 hover:to-[#fef102] text-[#004682] px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Bir mesaj daha gönder
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-white to-blue-50 dark:from-yellow-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-4xl mx-auto">
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
            className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-[#fef102] to-[#004682] bg-clip-text text-transparent"
          >
            💌 Duygularınızı veya anılarınızı paylaşın
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Bugünü Selim Ali için ölümsüzleştirebilmek adına, ona bugüne dair
            bir fotoğraf veya mesaj gönderin!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border-2 border-[#fef102]/30 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="fullName"
                className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3"
              >
                <User className="w-5 h-5 text-[#fef102]" />
                <span>Ad Soyad *</span>
              </label>
              <motion.input
                whileFocus={{ scale: 1.02, borderColor: "#fef102" }}
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-[#fef102] dark:focus:border-[#fef102] bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 text-lg"
                placeholder="Adınızı soyadınızı giriniz"
              />
            </motion.div>

            {/* Photo Upload */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                <Camera className="w-5 h-5 text-[#004682]" />
                <span>Fotoğraf Yükle (isteğe bağlı)</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <motion.div
                  whileHover={{ scale: 1.02, borderColor: "#004682" }}
                  className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-[#004682] dark:hover:border-[#004682] transition-all duration-300 bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600"
                >
                  <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {formData.photo
                      ? formData.photo.name
                      : "Click to upload a photo"}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    JPG, PNG, or GIF (max 5MB)
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="message"
                className="flex items-center space-x-2 text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3"
              >
                <MessageSquare className="w-5 h-5 text-green-600" />
                <span>Mesajınız {!formData.photo && "*"}</span>
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02, borderColor: "#004682" }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-[#004682] dark:focus:border-[#004682] bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300 text-lg resize-none"
                placeholder="Bugüne özel duygularınızı bir mesaj ile paylaşın..."
              />
            </motion.div>

            {/* Validation Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#fef102]/10 dark:bg-[#fef102]/5 border border-[#fef102]/50 dark:border-[#fef102]/30 rounded-lg p-4"
            >
              <p className="text-[#004682] dark:text-[#fef102] text-sm">
                <strong>Not:</strong> Lütfen bir mesaj yazın veya fotoğraf
                yükleyin, dilerseniz ikisini birlikte de yapabilirsiniz.
              </p>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#fef102] to-[#004682] hover:from-[#fef102]/90 hover:to-[#004682]/90 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Kaydediliyor...</span>
                </div>
              ) : (
                "Mesajını gönder! 🎉"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default GuestForm;
