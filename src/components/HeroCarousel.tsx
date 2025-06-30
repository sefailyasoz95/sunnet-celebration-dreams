import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import one from "../assets/images/1.jpeg";
import three from "../assets/images/3.jpeg";
import five from "../assets/images/5.jpeg";
import six from "../assets/images/6.jpeg";
import eight from "../assets/images/8.jpeg";
import nine from "../assets/images/9.jpeg";
import ten from "../assets/images/10.png";
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: one,
      title: "Merhaba, ben Selim Ali",
      subtitle: "Lütfen son resme kadar bakın",
    },
    {
      image: nine,
      title: "Bu sayfada büyüdüğümü gösteren bir kaç fotoğraf ile",
      subtitle: "size bir mesajım var",
    },
    {
      image: three,
      title: "Eğlenceli anlarımdan",
      subtitle: "",
    },
    {
      image: five,
      title: "Mutlu anlarımdan",
      subtitle: "",
    },
    {
      image: eight,
      title: "Tatil günlerimden",
      subtitle: "",
    },
    {
      image: six,
      title: "Ailemle güzel anılar biriktiriyorum",
      subtitle: "sizde anılarıma katkıda bulunun",
    },
    {
      image: ten,
      title: "Sünnet cemiyetime ait mekan ve konum bilgileri aşağıdadır.",
      subtitle:
        "Ayrıca çektiğiniz resimleri bu sayfa en altındaki formdan benimle paylaşırsanız çok mutlu olurum!",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-contain lg:bg-cover"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex justify-center">
        <div className="text-center flex flex-col px-4 items-center justify-between text-white py-4 mb-10 max-w-4xl">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ y: 80, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r pb-2 from-[#fef102] to-[#004682] bg-clip-text text-transparent"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg md:text-xl text-[#004682]/90 font-semibold mb-5"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-[#fef102]/30 text-white p-3 rounded-full transition-all duration-300 border border-[#fef102]/30"
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-[#fef102]/30 text-white p-3 rounded-full transition-all duration-300 border border-[#fef102]/30"
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#fef102] scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-9 right-4 transform -translate-x-1/2 text-white text-center"
      >
        <div className="backdrop-blur-md px-1 rounded-lg">
          <p className="text-sm mb-2 text-[#fef102]/90 font-semibold z-10">
            Keşfetmek için kaydırın
          </p>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#fef102] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroCarousel;
