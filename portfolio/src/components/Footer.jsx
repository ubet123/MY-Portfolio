import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-gray-700 to-gray-800 py-6 text-center relative overflow-hidden"
    >
      {/* Animated border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B6B] via-[#FFD166] to-[#FF6B6B] animate-gradient-x"></div>
      
      <div className="text-gray-300 font-mono tracking-wider text-sm md:text-base">
        <span className="opacity-90">Copyright © {new Date().getFullYear()} </span>
        <span className="font-semibold text-white hover:text-[#FFD166] transition-colors duration-300 cursor-pointer">
          Serene
        </span>
      </div>

      {/* Subtle floating dots */}
      <div className="absolute bottom-1 left-1/4 w-2 h-2 rounded-full bg-[#FFD166]/30 animate-float"></div>
      <div className="absolute bottom-3 right-1/3 w-1.5 h-1.5 rounded-full bg-[#FF6B6B]/30 animate-float-delay"></div>
    </motion.footer>
  );
};

export default Footer;